;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define('formily.path', ['exports'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        ((global.Formily = global.Formily || {}), (global.Formily.Path = {}))
      ))
})(this, function (exports) {
  'use strict'

  ;(function () {
    const env = { NODE_ENV: 'development' }
    try {
      if (process) {
        process.env = Object.assign({}, process.env)
        Object.assign(process.env, env)
        return
      }
    } catch (e) {} // avoid ReferenceError: process is not defined
    globalThis.process = { env: env }
  })()

  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function (d, b) {
    extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (d, b) {
          d.__proto__ = b
        }) ||
      function (d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
      }
    return extendStatics(d, b)
  }

  function __extends(d, b) {
    if (typeof b !== 'function' && b !== null)
      throw new TypeError(
        'Class extends value ' + String(b) + ' is not a constructor or null'
      )
    extendStatics(d, b)
    function __() {
      this.constructor = d
    }
    d.prototype =
      b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
  }

  var __assign = function () {
    __assign =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }

  function __read(o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator]
    if (!m) return o
    var i = m.call(o),
      r,
      ar = [],
      e
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
    } catch (error) {
      e = { error: error }
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i)
      } finally {
        if (e) throw e.error
      }
    }
    return ar
  }

  function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i]
    return to
  }

  var ContextType = function (flag, props) {
    return __assign({ flag: flag }, props)
  }
  var bracketContext = ContextType('[]')
  var bracketArrayContext = ContextType('[\\d]')
  var bracketDContext = ContextType('[[]]')
  var parenContext = ContextType('()')
  var braceContext = ContextType('{}')
  var destructorContext = ContextType('{x}')

  var TokenType = function (flag, props) {
    return __assign({ flag: flag }, props)
  }
  var nameTok = TokenType('name', {
    expectNext: function (next) {
      if (this.includesContext(destructorContext)) {
        return (
          next === nameTok ||
          next === commaTok ||
          next === bracketRTok ||
          next === braceRTok ||
          next === colonTok
        )
      }
      return (
        next === dotTok ||
        next === commaTok ||
        next === eofTok ||
        next === bracketRTok ||
        next === parenRTok ||
        next === colonTok ||
        next === expandTok ||
        next === bracketLTok
      )
    },
  })
  var starTok = TokenType('*', {
    expectNext: function (next) {
      return (
        next === dotTok ||
        next === parenLTok ||
        next === bracketLTok ||
        next === eofTok ||
        next === commaTok ||
        next === parenRTok
      )
    },
  })
  var dbStarTok = TokenType('**', {
    expectNext: function (next) {
      return (
        next === dotTok ||
        next === parenLTok ||
        next === bracketLTok ||
        next === eofTok ||
        next === commaTok ||
        next === parenRTok
      )
    },
  })
  var dotTok = TokenType('.', {
    expectNext: function (next) {
      return (
        next === dotTok ||
        next === nameTok ||
        next === bracketDLTok ||
        next === starTok ||
        next === dbStarTok ||
        next === bracketLTok ||
        next === braceLTok ||
        next === eofTok
      )
    },
    expectPrev: function (prev) {
      return (
        prev === dotTok ||
        prev === nameTok ||
        prev === bracketDRTok ||
        prev === starTok ||
        prev === parenRTok ||
        prev === bracketRTok ||
        prev === expandTok ||
        prev === braceRTok
      )
    },
  })
  var bangTok = TokenType('!', {
    expectNext: function (next) {
      return next === nameTok || next === bracketDLTok
    },
  })
  var colonTok = TokenType(':', {
    expectNext: function (next) {
      if (this.includesContext(destructorContext)) {
        return next === nameTok || next === braceLTok || next === bracketLTok
      }
      return next === nameTok || next === bracketDLTok || next === bracketRTok
    },
  })
  var braceLTok = TokenType('{', {
    expectNext: function (next) {
      return next === nameTok
    },
    expectPrev: function (prev) {
      if (this.includesContext(destructorContext)) {
        return prev === colonTok || prev === commaTok || prev === bracketLTok
      }
      return prev === dotTok || prev === colonTok || prev === parenLTok
    },
    updateContext: function () {
      this.state.context.push(braceContext)
    },
  })
  var braceRTok = TokenType('}', {
    expectNext: function (next) {
      if (this.includesContext(destructorContext)) {
        return (
          next === commaTok ||
          next === braceRTok ||
          next === eofTok ||
          next === bracketRTok
        )
      }
      return next === dotTok || next === eofTok || next === commaTok
    },
    expectPrev: function (prev) {
      return prev === nameTok || prev === braceRTok || prev === bracketRTok
    },
    updateContext: function () {
      this.state.context.pop(braceContext)
    },
  })
  var bracketLTok = TokenType('[', {
    expectNext: function (next) {
      if (this.includesContext(destructorContext)) {
        return (
          next === nameTok ||
          next === bracketLTok ||
          next === braceLTok ||
          next === bracketRTok
        )
      }
      return (
        next === nameTok ||
        next === bracketDLTok ||
        next === colonTok ||
        next === bracketLTok ||
        next === ignoreTok ||
        next === bracketRTok
      )
    },
    expectPrev: function (prev) {
      if (this.includesContext(destructorContext)) {
        return prev === colonTok || prev === commaTok || prev === bracketLTok
      }
      return (
        prev === starTok ||
        prev === bracketLTok ||
        prev === dotTok ||
        prev === nameTok ||
        prev === parenLTok ||
        prev == commaTok
      )
    },
    updateContext: function () {
      this.state.context.push(bracketContext)
    },
  })
  var bracketRTok = TokenType(']', {
    expectNext: function (next) {
      if (this.includesContext(destructorContext)) {
        return (
          next === commaTok ||
          next === braceRTok ||
          next === bracketRTok ||
          next === eofTok
        )
      }
      return (
        next === dotTok ||
        next === eofTok ||
        next === commaTok ||
        next === parenRTok ||
        next === bracketRTok
      )
    },
    updateContext: function () {
      if (this.includesContext(bracketArrayContext)) return
      if (!this.includesContext(bracketContext)) throw this.unexpect()
      this.state.context.pop()
    },
  })
  var bracketDLTok = TokenType('[[', {
    updateContext: function () {
      this.state.context.push(bracketDContext)
    },
  })
  var bracketDRTok = TokenType(']]', {
    updateContext: function () {
      if (this.curContext() !== bracketDContext) throw this.unexpect()
      this.state.context.pop()
    },
  })
  var parenLTok = TokenType('(', {
    expectNext: function (next) {
      return (
        next === nameTok ||
        next === bracketDLTok ||
        next === braceLTok ||
        next === bangTok ||
        next === bracketLTok
      )
    },
    expectPrev: function (prev) {
      return prev === starTok
    },
    updateContext: function () {
      this.state.context.push(parenContext)
    },
  })
  var parenRTok = TokenType(')', {
    expectNext: function (next) {
      return (
        next === dotTok ||
        next === eofTok ||
        next === commaTok ||
        next === parenRTok
      )
    },
    updateContext: function () {
      if (this.curContext() !== parenContext) throw this.unexpect()
      this.state.context.pop()
    },
  })
  var commaTok = TokenType(',', {
    expectNext: function (next) {
      return (
        next === nameTok ||
        next === bracketDLTok ||
        next === bracketLTok ||
        next === braceLTok
      )
    },
  })
  var ignoreTok = TokenType('ignore', {
    expectNext: function (next) {
      return next === bracketDRTok
    },
    expectPrev: function (prev) {
      return prev == bracketDLTok
    },
  })
  var expandTok = TokenType('expandTok', {
    expectNext: function (next) {
      return (
        next === dotTok ||
        next === eofTok ||
        next === commaTok ||
        next === parenRTok
      )
    },
  })
  var eofTok = TokenType('eof')

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
      if (this.curContext() === bracketDContext) return
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
        return this.finishToken(eofTok)
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
      this.finishToken(nameTok, string)
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
      this.finishToken(ignoreTok, string)
      this.finishToken(bracketDRTok)
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
        this.finishToken(eofTok)
      } else if (this.curContext() === bracketDContext) {
        this.readIngoreString()
      } else if (code === 123) {
        this.state.pos++
        this.finishToken(braceLTok)
      } else if (code === 125) {
        this.state.pos++
        this.finishToken(braceRTok)
      } else if (code === 42) {
        this.state.pos++
        if (this.getCode() === 42) {
          this.state.pos++
          return this.finishToken(dbStarTok)
        }
        this.finishToken(starTok)
      } else if (code === 33) {
        this.state.pos++
        this.finishToken(bangTok)
      } else if (code === 46) {
        this.state.pos++
        this.finishToken(dotTok)
      } else if (code === 91) {
        this.state.pos++
        if (this.getCode() === 91) {
          this.state.pos++
          return this.finishToken(bracketDLTok)
        }
        this.finishToken(bracketLTok)
      } else if (code === 126) {
        this.state.pos++
        this.finishToken(expandTok)
      } else if (code === 93) {
        this.state.pos++
        this.finishToken(bracketRTok)
      } else if (code === 40) {
        this.state.pos++
        this.finishToken(parenLTok)
      } else if (code === 41) {
        this.state.pos++
        this.finishToken(parenRTok)
      } else if (code === 44) {
        this.state.pos++
        this.finishToken(commaTok)
      } else if (code === 58) {
        this.state.pos++
        this.finishToken(colonTok)
      } else {
        this.readKeyWord()
      }
    }
    return Tokenizer
  })()

  var isType$1 = function (type) {
    return function (obj) {
      return obj && obj.type === type
    }
  }
  var isIdentifier = isType$1('Identifier')
  var isIgnoreExpression = isType$1('IgnoreExpression')
  var isDotOperator = isType$1('DotOperator')
  var isWildcardOperator = isType$1('WildcardOperator')
  var isExpandOperator = isType$1('ExpandOperator')
  var isGroupExpression = isType$1('GroupExpression')
  var isRangeExpression = isType$1('RangeExpression')
  var isDestructorExpression = isType$1('DestructorExpression')
  var isObjectPattern = isType$1('ObjectPattern')
  var isArrayPattern = isType$1('ArrayPattern')

  var toString = Object.prototype.toString
  var isType = function (type) {
    return function (obj) {
      return toString.call(obj) === '[object '.concat(type, ']')
    }
  }
  var isFn = isType('Function')
  var isArr = Array.isArray || isType('Array')
  var isStr = isType('String')
  var isNum = isType('Number')
  var isObj = function (val) {
    return typeof val === 'object'
  }
  var isRegExp = isType('RegExp')
  var isNumberLike = function (t) {
    return isNum(t) || /^(\d+)(\.\d+)?$/.test(t)
  }
  var isArray = isArr
  var keyList = Object.keys
  var hasProp = Object.prototype.hasOwnProperty
  var toArr = function (val) {
    return Array.isArray(val) ? val : val !== undefined ? [val] : []
  }
  var isEqual = function (a, b) {
    if (a === b) {
      return true
    }
    if (a && b && typeof a === 'object' && typeof b === 'object') {
      var arrA = isArray(a)
      var arrB = isArray(b)
      var i = void 0
      var length = void 0
      var key = void 0
      if (arrA && arrB) {
        length = a.length
        if (length !== b.length) {
          return false
        }
        for (i = length; i-- !== 0; ) {
          if (!isEqual(a[i], b[i])) {
            return false
          }
        }
        return true
      }
      if (arrA !== arrB) {
        return false
      }
      var keys = keyList(a)
      length = keys.length
      if (length !== keyList(b).length) {
        return false
      }
      for (i = length; i-- !== 0; ) {
        if (!hasProp.call(b, keys[i])) {
          return false
        }
      }
      for (i = length; i-- !== 0; ) {
        key = keys[i]
        if (!isEqual(a[key], b[key])) {
          return false
        }
      }
      return true
    }
    return a !== a && b !== b
  }
  var isSegmentEqual = function (a, b) {
    a = typeof a === 'symbol' ? a : ''.concat(a)
    b = typeof b === 'symbol' ? b : ''.concat(b)
    return a === b
  }

  var DestructorCache = new Map()
  var isValid$2 = function (val) {
    return val !== undefined && val !== null
  }
  var getDestructor = function (source) {
    return DestructorCache.get(source)
  }
  var setDestructor = function (source, rules) {
    DestructorCache.set(source, rules)
  }
  var parseDestructorRules = function (node) {
    var rules = []
    if (isObjectPattern(node)) {
      var index_1 = 0
      node.properties.forEach(function (child) {
        rules[index_1] = {
          path: [],
        }
        rules[index_1].key = child.key.value
        rules[index_1].path.push(child.key.value)
        if (isIdentifier(child.value)) {
          rules[index_1].key = child.value.value
        }
        var basePath = rules[index_1].path
        var childRules = parseDestructorRules(child.value)
        var k = index_1
        childRules.forEach(function (rule) {
          if (rules[k]) {
            rules[k].key = rule.key
            rules[k].path = basePath.concat(rule.path)
          } else {
            rules[k] = {
              key: rule.key,
              path: basePath.concat(rule.path),
            }
          }
          k++
        })
        if (k > index_1) {
          index_1 = k
        } else {
          index_1++
        }
      })
      return rules
    } else if (isArrayPattern(node)) {
      var index_2 = 0
      node.elements.forEach(function (child, key) {
        rules[index_2] = {
          path: [],
        }
        rules[index_2].key = key
        rules[index_2].path.push(key)
        if (isIdentifier(child)) {
          rules[index_2].key = child.value
        }
        var basePath = rules[index_2].path
        var childRules = parseDestructorRules(child)
        var k = index_2
        childRules.forEach(function (rule) {
          if (rules[k]) {
            rules[k].key = rule.key
            rules[k].path = basePath.concat(rule.path)
          } else {
            rules[k] = {
              key: rule.key,
              path: basePath.concat(rule.path),
            }
          }
          k++
        })
        if (k > index_2) {
          index_2 = k
        } else {
          index_2++
        }
      })
      return rules
    }
    if (isDestructorExpression(node)) {
      return parseDestructorRules(node.value)
    }
    return rules
  }
  var setInByDestructor = function (source, rules, value, mutators) {
    rules.forEach(function (_a) {
      var key = _a.key,
        path = _a.path
      mutators.setIn([key], source, mutators.getIn(path, value))
    })
  }
  var getInByDestructor = function (source, rules, mutators) {
    var response = {}
    if (rules.length) {
      if (isNum(rules[0].path[0])) {
        response = []
      }
    }
    source = isValid$2(source) ? source : {}
    rules.forEach(function (_a) {
      var key = _a.key,
        path = _a.path
      mutators.setIn(path, response, source[key])
    })
    return response
  }
  var deleteInByDestructor = function (source, rules, mutators) {
    rules.forEach(function (_a) {
      var key = _a.key
      mutators.deleteIn([key], source)
    })
  }
  var existInByDestructor = function (source, rules, start, mutators) {
    return rules.every(function (_a) {
      var key = _a.key
      return mutators.existIn([key], source, start)
    })
  }

  var createTreeBySegments = function (segments, afterNode) {
    if (segments === void 0) {
      segments = []
    }
    var segLen = segments.length
    var build = function (start) {
      if (start === void 0) {
        start = 0
      }
      var after = start < segLen - 1 ? build(start + 1) : afterNode
      var dot = after && {
        type: 'DotOperator',
        after: after,
      }
      return {
        type: 'Identifier',
        value: segments[start],
        after: dot,
      }
    }
    return build()
  }
  var calculate = function (a, b, operator) {
    if (isNumberLike(a) && isNumberLike(b)) {
      if (operator === '+') return String(Number(a) + Number(b))
      if (operator === '-') return String(Number(a) - Number(b))
      if (operator === '*') return String(Number(a) * Number(b))
      if (operator === '/') return String(Number(a) / Number(b))
    } else {
      if (operator === '+') return String(a) + String(b)
      if (operator === '-') return 'NaN'
      if (operator === '*') return 'NaN'
      if (operator === '/') return 'NaN'
    }
    return String(Number(b))
  }
  var Parser = /** @class */ (function (_super) {
    __extends(Parser, _super)
    function Parser(input, base) {
      var _this = _super.call(this, input) || this
      _this.base = base
      return _this
    }
    Parser.prototype.parse = function () {
      var node
      this.data = {
        segments: [],
      }
      if (!this.eat(eofTok)) {
        this.next()
        node = this.parseAtom(this.state.type)
      }
      this.data.tree = node
      return node
    }
    Parser.prototype.append = function (parent, node) {
      if (parent && node) {
        parent.after = node
      }
    }
    Parser.prototype.parseAtom = function (type) {
      switch (type) {
        case braceLTok:
        case bracketLTok:
          if (this.includesContext(destructorContext)) {
            if (type === braceLTok) {
              return this.parseObjectPattern()
            } else {
              return this.parseArrayPattern()
            }
          }
          return this.parseDestructorExpression()
        case nameTok:
          return this.parseIdentifier()
        case expandTok:
          return this.parseExpandOperator()
        case dbStarTok:
        case starTok:
          return this.parseWildcardOperator()
        case bracketDLTok:
          return this.parseIgnoreExpression()
        case dotTok:
          return this.parseDotOperator()
      }
    }
    Parser.prototype.pushSegments = function (key) {
      this.data.segments.push(key)
    }
    Parser.prototype.parseIdentifier = function () {
      var node = {
        type: 'Identifier',
        value: this.state.value,
      }
      var hasNotInDestructor =
        !this.includesContext(destructorContext) &&
        !this.isMatchPattern &&
        !this.isWildMatchPattern
      this.next()
      if (this.includesContext(bracketArrayContext)) {
        if (this.state.type !== bracketRTok) {
          throw this.unexpect()
        } else {
          this.state.context.pop()
          this.next()
        }
      } else if (hasNotInDestructor) {
        this.pushSegments(node.value)
      }
      if (this.state.type === bracketLTok) {
        this.next()
        if (this.state.type !== nameTok) {
          throw this.unexpect()
        }
        this.state.context.push(bracketArrayContext)
        var isNumberKey = false
        if (/^\d+$/.test(this.state.value)) {
          isNumberKey = true
        }
        var value = this.state.value
        this.pushSegments(isNumberKey ? Number(value) : value)
        var after = this.parseAtom(this.state.type)
        if (isNumberKey) {
          after.arrayIndex = true
        }
        this.append(node, after)
      } else {
        this.append(node, this.parseAtom(this.state.type))
      }
      return node
    }
    Parser.prototype.parseExpandOperator = function () {
      var node = {
        type: 'ExpandOperator',
      }
      this.isMatchPattern = true
      this.isWildMatchPattern = true
      this.data.segments = []
      this.next()
      this.append(node, this.parseAtom(this.state.type))
      return node
    }
    Parser.prototype.parseWildcardOperator = function () {
      var node = {
        type: 'WildcardOperator',
      }
      if (this.state.type === dbStarTok) {
        node.optional = true
      }
      this.isMatchPattern = true
      this.isWildMatchPattern = true
      this.data.segments = []
      this.next()
      if (this.state.type === parenLTok) {
        node.filter = this.parseGroupExpression(node)
      } else if (this.state.type === bracketLTok) {
        node.filter = this.parseRangeExpression(node)
      }
      this.append(node, this.parseAtom(this.state.type))
      return node
    }
    Parser.prototype.parseDestructorExpression = function () {
      var _this = this
      var node = {
        type: 'DestructorExpression',
      }
      this.state.context.push(destructorContext)
      var startPos = this.state.pos - 1
      node.value =
        this.state.type === braceLTok
          ? this.parseObjectPattern()
          : this.parseArrayPattern()
      var endPos = this.state.pos
      this.state.context.pop()
      node.source = this.input
        .substring(startPos, endPos)
        .replace(
          /\[\s*([\+\-\*\/])?\s*([^,\]\s]*)\s*\]/,
          function (match, operator, target) {
            if (_this.relative !== undefined) {
              if (operator) {
                if (target) {
                  return calculate(_this.relative, target, operator)
                } else {
                  return calculate(_this.relative, 1, operator)
                }
              } else {
                if (target) {
                  return calculate(_this.relative, target, '+')
                } else {
                  return String(_this.relative)
                }
              }
            }
            return match
          }
        )
        .replace(/\s*\.\s*/g, '')
        .replace(/\s*/g, '')
      if (this.relative === undefined) {
        setDestructor(node.source, parseDestructorRules(node))
      }
      this.relative = undefined
      this.pushSegments(node.source)
      this.next()
      this.append(node, this.parseAtom(this.state.type))
      return node
    }
    Parser.prototype.parseArrayPattern = function () {
      var node = {
        type: 'ArrayPattern',
        elements: [],
      }
      this.next()
      node.elements = this.parseArrayPatternElements()
      return node
    }
    Parser.prototype.parseArrayPatternElements = function () {
      var nodes = []
      while (this.state.type !== bracketRTok && this.state.type !== eofTok) {
        nodes.push(this.parseAtom(this.state.type))
        if (this.state.type === bracketRTok) {
          if (this.includesContext(destructorContext)) {
            this.next()
          }
          return nodes
        }
        this.next()
      }
      return nodes
    }
    Parser.prototype.parseObjectPattern = function () {
      var node = {
        type: 'ObjectPattern',
        properties: [],
      }
      this.next()
      node.properties = this.parseObjectProperties()
      return node
    }
    Parser.prototype.parseObjectProperties = function () {
      var nodes = []
      while (this.state.type !== braceRTok && this.state.type !== eofTok) {
        var node = {
          type: 'ObjectPatternProperty',
          key: this.parseAtom(this.state.type),
        }
        nodes.push(node)
        if (this.state.type === colonTok) {
          this.next()
          node.value = this.parseAtom(this.state.type)
        }
        if (this.state.type === braceRTok) {
          if (this.includesContext(destructorContext)) {
            this.next()
          }
          return nodes
        }
        this.next()
      }
      return nodes
    }
    Parser.prototype.parseDotOperator = function () {
      var node = {
        type: 'DotOperator',
      }
      var prevToken = this.type_
      if (!prevToken && this.base) {
        if (this.base.isMatchPattern) {
          throw new Error('Base path must be an absolute path.')
        }
        this.data.segments = this.base.toArr()
        while (this.state.type === dotTok) {
          this.relative = this.data.segments.pop()
          this.next()
        }
        return createTreeBySegments(
          this.data.segments.slice(),
          this.parseAtom(this.state.type)
        )
      } else {
        this.next()
      }
      this.append(node, this.parseAtom(this.state.type))
      return node
    }
    Parser.prototype.parseIgnoreExpression = function () {
      this.next()
      var value = String(this.state.value).replace(/\s*/g, '')
      var node = {
        type: 'IgnoreExpression',
        value: value,
      }
      this.pushSegments(value)
      this.next()
      this.append(node, this.parseAtom(this.state.type))
      this.next()
      return node
    }
    Parser.prototype.parseGroupExpression = function (parent) {
      var node = {
        type: 'GroupExpression',
        value: [],
      }
      this.isMatchPattern = true
      this.data.segments = []
      this.next()
      loop: while (true) {
        switch (this.state.type) {
          case commaTok:
            this.next()
            break
          case bangTok:
            node.isExclude = true
            this.haveExcludePattern = true
            this.next()
            break
          case eofTok:
            break loop
          case parenRTok:
            break loop
          default:
            node.value.push(this.parseAtom(this.state.type))
        }
      }
      this.next()
      this.append(parent, this.parseAtom(this.state.type))
      return node
    }
    Parser.prototype.parseRangeExpression = function (parent) {
      var node = {
        type: 'RangeExpression',
      }
      this.next()
      this.isMatchPattern = true
      this.data.segments = []
      var start = false,
        hasColon = false
      loop: while (true) {
        switch (this.state.type) {
          case colonTok:
            hasColon = true
            start = true
            this.next()
            break
          case bracketRTok:
            if (!hasColon && !node.end) {
              node.end = node.start
            }
            break loop
          case commaTok:
            throw this.unexpect()
          case eofTok:
            break loop
          default:
            if (!start) {
              node.start = this.parseAtom(this.state.type)
            } else {
              node.end = this.parseAtom(this.state.type)
            }
        }
      }
      this.next()
      this.append(parent, this.parseAtom(this.state.type))
      return node
    }
    return Parser
  })(Tokenizer)

  var isValid$1 = function (val) {
    return val !== undefined && val !== null && val !== ''
  }
  var Matcher = /** @class */ (function () {
    function Matcher(tree, record) {
      var _this = this
      this.matchNext = function (node, path) {
        return node.after
          ? _this.matchAtom(path, node.after)
          : isValid$1(path[_this.pos])
      }
      this.tree = tree
      this.pos = 0
      this.excluding = false
      this.record = record
      this.stack = []
    }
    Matcher.prototype.currentElement = function (path) {
      return String(path[this.pos] || '').replace(/\s*/g, '')
    }
    Matcher.prototype.recordMatch = function (match) {
      var _this = this
      return function () {
        var result = match()
        if (result) {
          if (_this.record && _this.record.score !== undefined) {
            _this.record.score++
          }
        }
        return result
      }
    }
    Matcher.prototype.matchIdentifier = function (path, node) {
      var _this = this
      this.tail = node
      if (isValid$1(path[this.pos + 1]) && !node.after) {
        if (this.stack.length) {
          for (var i = this.stack.length - 1; i >= 0; i--) {
            if (!this.stack[i].after || !this.stack[i].filter) {
              return false
            }
          }
        } else {
          return false
        }
      }
      var current
      var next = function () {
        return _this.matchNext(node, path)
      }
      if (isExpandOperator(node.after)) {
        current = this.recordMatch(function () {
          return (
            node.value ===
            String(path[_this.pos]).substring(0, node.value.length)
          )
        })
      } else {
        current = this.recordMatch(function () {
          return isEqual(String(node.value), String(path[_this.pos]))
        })
      }
      if (this.excluding) {
        if (node.after) {
          if (this.pos < path.length) {
            return current() && next()
          } else {
            if (node.after && isWildcardOperator(node.after.after)) {
              return true
            }
            return false
          }
        } else {
          if (this.pos >= path.length) {
            return true
          }
          return current()
        }
      }
      return current() && next()
    }
    Matcher.prototype.matchIgnoreExpression = function (path, node) {
      return (
        isEqual(node.value, this.currentElement(path)) &&
        this.matchNext(node, path)
      )
    }
    Matcher.prototype.matchDestructorExpression = function (path, node) {
      return (
        isEqual(node.source, this.currentElement(path)) &&
        this.matchNext(node, path)
      )
    }
    Matcher.prototype.matchExpandOperator = function (path, node) {
      return this.matchAtom(path, node.after)
    }
    Matcher.prototype.matchWildcardOperator = function (path, node) {
      this.tail = node
      this.stack.push(node)
      var matched = false
      if (node.filter) {
        if (node.after) {
          matched =
            this.matchAtom(path, node.filter) &&
            this.matchAtom(path, node.after)
        } else {
          matched = this.matchAtom(path, node.filter)
        }
      } else if (node.optional) {
        matched = true
      } else {
        matched = this.matchNext(node, path)
      }
      this.stack.pop()
      return matched
    }
    Matcher.prototype.matchGroupExpression = function (path, node) {
      var _this = this
      var current = this.pos
      this.excluding = !!node.isExclude
      var method = this.excluding ? 'every' : 'some'
      var result = toArr(node.value)[method](function (_node) {
        _this.pos = current
        return _this.excluding
          ? !_this.matchAtom(path, _node)
          : _this.matchAtom(path, _node)
      })
      this.excluding = false
      return result
    }
    Matcher.prototype.matchRangeExpression = function (path, node) {
      if (node.start) {
        if (node.end) {
          return (
            path[this.pos] >= parseInt(node.start.value) &&
            path[this.pos] <= parseInt(node.end.value)
          )
        } else {
          return path[this.pos] >= parseInt(node.start.value)
        }
      } else {
        if (node.end) {
          return path[this.pos] <= parseInt(node.end.value)
        } else {
          return true
        }
      }
    }
    Matcher.prototype.matchDotOperator = function (path, node) {
      this.pos++
      return this.matchNext(node, path)
    }
    Matcher.prototype.matchAtom = function (path, node) {
      if (!node) {
        if (this.stack.length > 0) return true
        if (isValid$1(path[this.pos + 1])) return false
        if (this.pos == path.length - 1) return true
      }
      if (isIdentifier(node)) {
        return this.matchIdentifier(path, node)
      } else if (isIgnoreExpression(node)) {
        return this.matchIgnoreExpression(path, node)
      } else if (isDestructorExpression(node)) {
        return this.matchDestructorExpression(path, node)
      } else if (isExpandOperator(node)) {
        return this.matchExpandOperator(path, node)
      } else if (isWildcardOperator(node)) {
        return this.matchWildcardOperator(path, node)
      } else if (isGroupExpression(node)) {
        return this.matchGroupExpression(path, node)
      } else if (isRangeExpression(node)) {
        return this.matchRangeExpression(path, node)
      } else if (isDotOperator(node)) {
        return this.matchDotOperator(path, node)
      }
      return true
    }
    Matcher.prototype.match = function (path) {
      var matched = this.matchAtom(path, this.tree)
      if (!this.tail) return { matched: false }
      if (this.tail == this.tree && isWildcardOperator(this.tail)) {
        return { matched: true }
      }
      return { matched: matched, record: this.record }
    }
    Matcher.matchSegments = function (source, target, record) {
      var pos = 0
      if (source.length !== target.length) return false
      var match = function (pos) {
        var current = function () {
          var res = isSegmentEqual(source[pos], target[pos])
          if (record && record.score !== undefined) {
            record.score++
          }
          return res
        }
        var next = function () {
          return pos < source.length - 1 ? match(pos + 1) : true
        }
        return current() && next()
      }
      return { matched: match(pos), record: record }
    }
    return Matcher
  })()

  var pathCache = new Map()
  var isMatcher = Symbol('PATH_MATCHER')
  var isValid = function (val) {
    return val !== undefined && val !== null
  }
  var isAssignable = function (val) {
    return typeof val === 'object' || typeof val === 'function'
  }
  var isNumberIndex = function (val) {
    return isStr(val) ? /^\d+$/.test(val) : isNum(val)
  }
  var getIn = function (segments, source) {
    for (var i = 0; i < segments.length; i++) {
      var index = segments[i]
      var rules = getDestructor(index)
      if (!rules) {
        if (!isValid(source)) {
          if (i !== segments.length - 1) {
            return source
          }
          break
        }
        source = source[index]
      } else {
        source = getInByDestructor(source, rules, {
          setIn: setIn,
          getIn: getIn,
        })
        break
      }
    }
    return source
  }
  var setIn = function (segments, source, value) {
    for (var i = 0; i < segments.length; i++) {
      var index = segments[i]
      var rules = getDestructor(index)
      if (!rules) {
        if (!isValid(source) || !isAssignable(source)) return
        if (isArr(source) && !isNumberIndex(index)) {
          return
        }
        if (!isValid(source[index])) {
          if (value === undefined) {
            return
          }
          if (i < segments.length - 1) {
            source[index] = isNum(segments[i + 1]) ? [] : {}
          }
        }
        if (i === segments.length - 1) {
          source[index] = value
        }
        source = source[index]
      } else {
        setInByDestructor(source, rules, value, { setIn: setIn, getIn: getIn })
        break
      }
    }
  }
  var deleteIn = function (segments, source) {
    for (var i = 0; i < segments.length; i++) {
      var index = segments[i]
      var rules = getDestructor(index)
      if (!rules) {
        if (i === segments.length - 1 && isValid(source)) {
          delete source[index]
          return
        }
        if (!isValid(source) || !isAssignable(source)) return
        source = source[index]
        if (!isObj(source)) {
          return
        }
      } else {
        deleteInByDestructor(source, rules, {
          setIn: setIn,
          getIn: getIn,
          deleteIn: deleteIn,
        })
        break
      }
    }
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty
  var existIn = function (segments, source, start) {
    if (start instanceof Path) {
      start = start.length
    }
    for (var i = start; i < segments.length; i++) {
      var index = segments[i]
      var rules = getDestructor(index)
      if (!rules) {
        if (i === segments.length - 1) {
          return hasOwnProperty.call(source, index)
        }
        if (!isValid(source) || !isAssignable(source)) return false
        source = source[index]
        if (!isObj(source)) {
          return false
        }
      } else {
        return existInByDestructor(source, rules, start, {
          setIn: setIn,
          getIn: getIn,
          deleteIn: deleteIn,
          existIn: existIn,
        })
      }
    }
  }
  var parse = function (pattern, base) {
    if (pattern instanceof Path) {
      return {
        entire: pattern.entire,
        segments: pattern.segments.slice(),
        isRegExp: false,
        isWildMatchPattern: pattern.isWildMatchPattern,
        isMatchPattern: pattern.isMatchPattern,
        haveExcludePattern: pattern.haveExcludePattern,
        tree: pattern.tree,
      }
    } else if (isStr(pattern)) {
      if (!pattern)
        return {
          entire: '',
          segments: [],
          isRegExp: false,
          isWildMatchPattern: false,
          haveExcludePattern: false,
          isMatchPattern: false,
        }
      var parser = new Parser(pattern, Path.parse(base))
      var tree = parser.parse()
      if (!parser.isMatchPattern) {
        var segments = parser.data.segments
        return {
          entire: segments.join('.'),
          segments: segments,
          tree: tree,
          isRegExp: false,
          isWildMatchPattern: false,
          haveExcludePattern: false,
          isMatchPattern: false,
        }
      } else {
        return {
          entire: pattern,
          segments: [],
          isRegExp: false,
          isWildMatchPattern: parser.isWildMatchPattern,
          haveExcludePattern: parser.haveExcludePattern,
          isMatchPattern: true,
          tree: tree,
        }
      }
    } else if (isFn(pattern) && pattern[isMatcher]) {
      return parse(pattern['path'])
    } else if (isArr(pattern)) {
      return {
        entire: pattern.join('.'),
        segments: pattern.reduce(function (buf, key) {
          return buf.concat(parseString(key))
        }, []),
        isRegExp: false,
        isWildMatchPattern: false,
        haveExcludePattern: false,
        isMatchPattern: false,
      }
    } else if (isRegExp(pattern)) {
      return {
        entire: pattern,
        segments: [],
        isRegExp: true,
        isWildMatchPattern: false,
        haveExcludePattern: false,
        isMatchPattern: true,
      }
    } else {
      return {
        entire: '',
        isRegExp: false,
        segments: pattern !== undefined ? [pattern] : [],
        isWildMatchPattern: false,
        haveExcludePattern: false,
        isMatchPattern: false,
      }
    }
  }
  var parseString = function (source) {
    if (isStr(source)) {
      source = source.replace(/\s*/g, '')
      try {
        var _a = parse(source),
          segments = _a.segments,
          isMatchPattern = _a.isMatchPattern
        return !isMatchPattern ? segments : source
      } catch (e) {
        return source
      }
    } else if (source instanceof Path) {
      return source.segments
    }
    return source
  }
  var Path = /** @class */ (function () {
    function Path(input, base) {
      var _this = this
      this.concat = function () {
        var _a
        var args = []
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i]
        }
        if (_this.isMatchPattern || _this.isRegExp) {
          throw new Error(''.concat(_this.entire, ' cannot be concat'))
        }
        var path = new Path('')
        path.segments = (_a = _this.segments).concat.apply(
          _a,
          __spreadArray(
            [],
            __read(
              args.map(function (s) {
                return parseString(s)
              })
            )
          )
        )
        path.entire = path.segments.join('.')
        return path
      }
      this.slice = function (start, end) {
        if (_this.isMatchPattern || _this.isRegExp) {
          throw new Error(''.concat(_this.entire, ' cannot be slice'))
        }
        var path = new Path('')
        path.segments = _this.segments.slice(start, end)
        path.entire = path.segments.join('.')
        return path
      }
      this.push = function () {
        var items = []
        for (var _i = 0; _i < arguments.length; _i++) {
          items[_i] = arguments[_i]
        }
        return _this.concat.apply(_this, __spreadArray([], __read(items)))
      }
      this.pop = function () {
        if (_this.isMatchPattern || _this.isRegExp) {
          throw new Error(''.concat(_this.entire, ' cannot be pop'))
        }
        return new Path(_this.segments.slice(0, _this.segments.length - 1))
      }
      this.splice = function (start, deleteCount) {
        var items = []
        for (var _i = 2; _i < arguments.length; _i++) {
          items[_i - 2] = arguments[_i]
        }
        if (_this.isMatchPattern || _this.isRegExp) {
          throw new Error(''.concat(_this.entire, ' cannot be splice'))
        }
        items = items.reduce(function (buf, item) {
          return buf.concat(parseString(item))
        }, [])
        var segments_ = _this.segments.slice()
        segments_.splice.apply(
          segments_,
          __spreadArray([start, deleteCount], __read(items))
        )
        return new Path(segments_)
      }
      this.forEach = function (callback) {
        if (_this.isMatchPattern || _this.isRegExp) {
          throw new Error(''.concat(_this.entire, ' cannot be each'))
        }
        _this.segments.forEach(callback)
      }
      this.map = function (callback) {
        if (_this.isMatchPattern || _this.isRegExp) {
          throw new Error(''.concat(_this.entire, ' cannot be map'))
        }
        return _this.segments.map(callback)
      }
      this.reduce = function (callback, initial) {
        if (_this.isMatchPattern || _this.isRegExp) {
          throw new Error(''.concat(_this.entire, ' cannot be reduce'))
        }
        return _this.segments.reduce(callback, initial)
      }
      this.parent = function () {
        return _this.slice(0, _this.length - 1)
      }
      this.includes = function (pattern) {
        var _a = Path.parse(pattern),
          entire = _a.entire,
          segments = _a.segments,
          isMatchPattern = _a.isMatchPattern
        var cache = _this.includesCache.get(entire)
        if (cache !== undefined) return cache
        var cacheWith = function (value) {
          _this.includesCache.set(entire, value)
          return value
        }
        if (_this.isMatchPattern) {
          if (!isMatchPattern) {
            return cacheWith(_this.match(segments))
          } else {
            throw new Error(
              ''
                .concat(_this.entire, ' cannot be used to match ')
                .concat(entire)
            )
          }
        }
        if (isMatchPattern) {
          throw new Error(
            ''.concat(_this.entire, ' cannot be used to match ').concat(entire)
          )
        }
        if (segments.length > _this.segments.length) return cacheWith(false)
        for (var i = 0; i < segments.length; i++) {
          if (!isEqual(String(segments[i]), String(_this.segments[i]))) {
            return cacheWith(false)
          }
        }
        return cacheWith(true)
      }
      this.transform = function (regexp, callback) {
        if (!isFn(callback)) return ''
        if (_this.isMatchPattern) {
          throw new Error(''.concat(_this.entire, ' cannot be transformed'))
        }
        var args = _this.segments.reduce(function (buf, key) {
          return new RegExp(regexp).test(key) ? buf.concat(key) : buf
        }, [])
        return callback.apply(void 0, __spreadArray([], __read(args)))
      }
      this.match = function (pattern) {
        var _a, _b
        var path = Path.parse(pattern)
        var cache = _this.matchCache.get(path.entire)
        if (cache !== undefined) {
          if (cache.record && cache.record.score !== undefined) {
            _this.matchScore = cache.record.score
          }
          return cache.matched
        }
        var cacheWith = function (value) {
          _this.matchCache.set(path.entire, value)
          return value
        }
        if (path.isMatchPattern) {
          if (_this.isMatchPattern) {
            throw new Error(
              ''.concat(path.entire, ' cannot match ').concat(_this.entire)
            )
          } else {
            _this.matchScore = 0
            return cacheWith(path.match(_this.segments))
          }
        } else {
          if (_this.isMatchPattern) {
            if (_this.isRegExp) {
              try {
                return (_b =
                  (_a = _this['entire']) === null || _a === void 0
                    ? void 0
                    : _a['test']) === null || _b === void 0
                  ? void 0
                  : _b.call(_a, path.entire)
              } finally {
                _this.entire.lastIndex = 0
              }
            }
            var record = {
              score: 0,
            }
            var result = cacheWith(
              new Matcher(_this.tree, record).match(path.segments)
            )
            _this.matchScore = record.score
            return result.matched
          } else {
            var record = {
              score: 0,
            }
            var result = cacheWith(
              Matcher.matchSegments(_this.segments, path.segments, record)
            )
            _this.matchScore = record.score
            return result.matched
          }
        }
      }
      //别名组匹配
      this.matchAliasGroup = function (name, alias) {
        var namePath = Path.parse(name)
        var aliasPath = Path.parse(alias)
        var nameMatched = _this.match(namePath)
        var nameMatchedScore = _this.matchScore
        var aliasMatched = _this.match(aliasPath)
        var aliasMatchedScore = _this.matchScore
        if (_this.haveExcludePattern) {
          if (nameMatchedScore >= aliasMatchedScore) {
            return nameMatched
          } else {
            return aliasMatched
          }
        } else {
          return nameMatched || aliasMatched
        }
      }
      this.existIn = function (source, start) {
        if (start === void 0) {
          start = 0
        }
        return existIn(_this.segments, source, start)
      }
      this.getIn = function (source) {
        return getIn(_this.segments, source)
      }
      this.setIn = function (source, value) {
        setIn(_this.segments, source, value)
        return source
      }
      this.deleteIn = function (source) {
        deleteIn(_this.segments, source)
        return source
      }
      this.ensureIn = function (source, defaults) {
        var results = _this.getIn(source)
        if (results === undefined) {
          _this.setIn(source, defaults)
          return _this.getIn(source)
        }
        return results
      }
      var _a = parse(input, base),
        tree = _a.tree,
        segments = _a.segments,
        entire = _a.entire,
        isRegExp = _a.isRegExp,
        isMatchPattern = _a.isMatchPattern,
        isWildMatchPattern = _a.isWildMatchPattern,
        haveExcludePattern = _a.haveExcludePattern
      this.entire = entire
      this.segments = segments
      this.isMatchPattern = isMatchPattern
      this.isWildMatchPattern = isWildMatchPattern
      this.isRegExp = isRegExp
      this.haveExcludePattern = haveExcludePattern
      this.tree = tree
      this.matchCache = new Map()
      this.includesCache = new Map()
    }
    Path.prototype.toString = function () {
      var _a
      return (_a = this.entire) === null || _a === void 0
        ? void 0
        : _a.toString()
    }
    Path.prototype.toArr = function () {
      var _a
      return (_a = this.segments) === null || _a === void 0
        ? void 0
        : _a.slice()
    }
    Object.defineProperty(Path.prototype, 'length', {
      get: function () {
        return this.segments.length
      },
      enumerable: false,
      configurable: true,
    })
    Path.match = function (pattern) {
      var path = Path.parse(pattern)
      var matcher = function (target) {
        return path.match(target)
      }
      matcher[isMatcher] = true
      matcher.path = path
      return matcher
    }
    Path.isPathPattern = function (target) {
      if (
        isStr(target) ||
        isArr(target) ||
        isRegExp(target) ||
        (isFn(target) && target[isMatcher])
      ) {
        return true
      }
      return false
    }
    Path.transform = function (pattern, regexp, callback) {
      return Path.parse(pattern).transform(regexp, callback)
    }
    Path.parse = function (path, base) {
      if (path === void 0) {
        path = ''
      }
      if (path instanceof Path) {
        var found = pathCache.get(path.entire)
        if (found) {
          return found
        } else {
          pathCache.set(path.entire, path)
          return path
        }
      } else if (path && path[isMatcher]) {
        return Path.parse(path['path'])
      } else {
        var key_ = base ? Path.parse(base) : ''
        var key = ''.concat(path, ':').concat(key_)
        var found = pathCache.get(key)
        if (found) {
          return found
        } else {
          path = new Path(path, base)
          pathCache.set(key, path)
          return path
        }
      }
    }
    Path.getIn = function (source, pattern) {
      var path = Path.parse(pattern)
      return path.getIn(source)
    }
    Path.setIn = function (source, pattern, value) {
      var path = Path.parse(pattern)
      return path.setIn(source, value)
    }
    Path.deleteIn = function (source, pattern) {
      var path = Path.parse(pattern)
      return path.deleteIn(source)
    }
    Path.existIn = function (source, pattern, start) {
      var path = Path.parse(pattern)
      return path.existIn(source, start)
    }
    Path.ensureIn = function (source, pattern, defaultValue) {
      var path = Path.parse(pattern)
      return path.ensureIn(source, defaultValue)
    }
    return Path
  })()

  exports.Path = Path

  Object.defineProperty(exports, '__esModule', { value: true })
})
//# sourceMappingURL=formily.path.umd.development.js.map
