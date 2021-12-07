'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Tokenizer = void 0
var tokens_1 = require('./tokens')
var contexts_1 = require('./contexts')
var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/
var fullCharCodeAtPos = function (input, pos) {
  if (String.fromCharCode) return input.codePointAt(pos)
  var code = input.charCodeAt(pos)
  if (code <= 0xd7ff || code >= 0xe000) return code
  var next = input.charCodeAt(pos + 1)
  return (code << 10) + next - 0x35fdc00
}
var isRewordCode = function (code) {
  return (
    code === 42 ||
    code === 46 ||
    code === 33 ||
    code === 91 ||
    code === 93 ||
    code === 40 ||
    code === 41 ||
    code === 44 ||
    code === 58 ||
    code === 126 ||
    code === 123 ||
    code === 125
  )
}
var getError = function (message, props) {
  var err = new Error(message)
  Object.assign(err, props)
  return err
}
var slice = function (string, start, end) {
  var str = ''
  for (var i = start; i < end; i++) {
    var ch = string.charAt(i)
    if (ch !== '\\') {
      str += ch
    }
  }
  return str
}
var Tokenizer = /** @class */ (function () {
  function Tokenizer(input) {
    this.input = input
    this.state = {
      context: [],
      type: null,
      pos: 0,
    }
    this.type_ = null
  }
  Tokenizer.prototype.curContext = function () {
    return this.state.context[this.state.context.length - 1]
  }
  Tokenizer.prototype.includesContext = function (context) {
    for (var len = this.state.context.length - 1; len >= 0; len--) {
      if (this.state.context[len] === context) {
        return true
      }
    }
    return false
  }
  Tokenizer.prototype.unexpect = function (type) {
    type = type || this.state.type
    return getError(
      'Unexpect token "'
        .concat(type.flag, '" in ')
        .concat(this.state.pos, ' char.'),
      {
        pos: this.state.pos,
      }
    )
  }
  Tokenizer.prototype.expectNext = function (type, next) {
    if (type && type.expectNext) {
      if (next && !type.expectNext.call(this, next)) {
        throw getError(
          'Unexpect token "'
            .concat(next.flag, '" token should not be behind "')
            .concat(type.flag, '" token.(')
            .concat(this.state.pos, 'th char)'),
          {
            pos: this.state.pos,
          }
        )
      }
    }
  }
  Tokenizer.prototype.expectPrev = function (type, prev) {
    if (type && type.expectPrev) {
      if (prev && !type.expectPrev.call(this, prev)) {
        throw getError(
          'Unexpect token "'
            .concat(type.flag, '" should not be behind "')
            .concat(prev.flag, '"(')
            .concat(this.state.pos, 'th char).'),
          {
            pos: this.state.pos,
          }
        )
      }
    }
  }
  Tokenizer.prototype.match = function (type) {
    return this.state.type === type
  }
  Tokenizer.prototype.skipSpace = function () {
    if (this.curContext() === contexts_1.bracketDContext) return
    loop: while (this.state.pos < this.input.length) {
      var ch = this.input.charCodeAt(this.state.pos)
      switch (ch) {
        case 32:
        case 160:
          ++this.state.pos
          break
        case 13:
          if (this.input.charCodeAt(this.state.pos + 1) === 10) {
            ++this.state.pos
          }
        case 10:
        case 8232:
        case 8233:
          ++this.state.pos
          break
        default:
          if (
            (ch > 8 && ch < 14) ||
            (ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch)))
          ) {
            ++this.state.pos
          } else {
            break loop
          }
      }
    }
  }
  Tokenizer.prototype.next = function () {
    this.type_ = this.state.type
    if (this.input.length <= this.state.pos) {
      return this.finishToken(tokens_1.eofTok)
    }
    this.skipSpace()
    this.readToken(
      this.getCode(),
      this.state.pos > 0 ? this.getCode(this.state.pos - 1) : -Infinity
    )
  }
  Tokenizer.prototype.getCode = function (pos) {
    if (pos === void 0) {
      pos = this.state.pos
    }
    return fullCharCodeAtPos(this.input, pos)
  }
  Tokenizer.prototype.eat = function (type) {
    if (this.match(type)) {
      this.next()
      return true
    } else {
      return false
    }
  }
  Tokenizer.prototype.readKeyWord = function () {
    var startPos = this.state.pos,
      string = ''
    while (true) {
      var code = this.getCode()
      var prevCode = this.getCode(this.state.pos - 1)
      if (this.input.length === this.state.pos) {
        string = slice(this.input, startPos, this.state.pos + 1)
        break
      }
      if (!isRewordCode(code) || prevCode === 92) {
        if (
          code === 32 ||
          code === 160 ||
          code === 10 ||
          code === 8232 ||
          code === 8233
        ) {
          string = slice(this.input, startPos, this.state.pos)
          break
        }
        if (code === 13 && this.input.charCodeAt(this.state.pos + 1) === 10) {
          string = slice(this.input, startPos, this.state.pos)
          break
        }
        if (
          (code > 8 && code < 14) ||
          (code >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(code)))
        ) {
          string = slice(this.input, startPos, this.state.pos)
          break
        }
        this.state.pos++
      } else {
        string = slice(this.input, startPos, this.state.pos)
        break
      }
    }
    this.finishToken(tokens_1.nameTok, string)
  }
  Tokenizer.prototype.readIngoreString = function () {
    var startPos = this.state.pos,
      prevCode,
      string = ''
    while (true) {
      var code = this.getCode()
      if (this.state.pos >= this.input.length) break
      if ((code === 91 || code === 93) && prevCode === 92) {
        this.state.pos++
        prevCode = ''
      } else if (code == 93 && prevCode === 93) {
        string = this.input
          .slice(startPos, this.state.pos - 1)
          .replace(/\\([\[\]])/g, '$1')
        this.state.pos++
        break
      } else {
        this.state.pos++
        prevCode = code
      }
    }
    this.finishToken(tokens_1.ignoreTok, string)
    this.finishToken(tokens_1.bracketDRTok)
  }
  Tokenizer.prototype.finishToken = function (type, value) {
    var preType = this.state.type
    this.state.type = type
    if (value !== undefined) this.state.value = value
    this.expectNext(preType, type)
    this.expectPrev(type, preType)
    if (type.updateContext) {
      type.updateContext.call(this, preType)
    }
  }
  Tokenizer.prototype.readToken = function (code, prevCode) {
    if (prevCode === 92) {
      return this.readKeyWord()
    }
    if (this.input.length <= this.state.pos) {
      this.finishToken(tokens_1.eofTok)
    } else if (this.curContext() === contexts_1.bracketDContext) {
      this.readIngoreString()
    } else if (code === 123) {
      this.state.pos++
      this.finishToken(tokens_1.braceLTok)
    } else if (code === 125) {
      this.state.pos++
      this.finishToken(tokens_1.braceRTok)
    } else if (code === 42) {
      this.state.pos++
      if (this.getCode() === 42) {
        this.state.pos++
        return this.finishToken(tokens_1.dbStarTok)
      }
      this.finishToken(tokens_1.starTok)
    } else if (code === 33) {
      this.state.pos++
      this.finishToken(tokens_1.bangTok)
    } else if (code === 46) {
      this.state.pos++
      this.finishToken(tokens_1.dotTok)
    } else if (code === 91) {
      this.state.pos++
      if (this.getCode() === 91) {
        this.state.pos++
        return this.finishToken(tokens_1.bracketDLTok)
      }
      this.finishToken(tokens_1.bracketLTok)
    } else if (code === 126) {
      this.state.pos++
      this.finishToken(tokens_1.expandTok)
    } else if (code === 93) {
      this.state.pos++
      this.finishToken(tokens_1.bracketRTok)
    } else if (code === 40) {
      this.state.pos++
      this.finishToken(tokens_1.parenLTok)
    } else if (code === 41) {
      this.state.pos++
      this.finishToken(tokens_1.parenRTok)
    } else if (code === 44) {
      this.state.pos++
      this.finishToken(tokens_1.commaTok)
    } else if (code === 58) {
      this.state.pos++
      this.finishToken(tokens_1.colonTok)
    } else {
      this.readKeyWord()
    }
  }
  return Tokenizer
})()
exports.Tokenizer = Tokenizer
//# sourceMappingURL=tokenizer.js.map
