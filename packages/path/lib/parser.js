'use strict'
var __extends =
  (this && this.__extends) ||
  (function () {
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
    return function (d, b) {
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
  })()
Object.defineProperty(exports, '__esModule', { value: true })
exports.Parser = void 0
var tokenizer_1 = require('./tokenizer')
var tokens_1 = require('./tokens')
var contexts_1 = require('./contexts')
var destructor_1 = require('./destructor')
var shared_1 = require('./shared')
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
  if ((0, shared_1.isNumberLike)(a) && (0, shared_1.isNumberLike)(b)) {
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
    if (!this.eat(tokens_1.eofTok)) {
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
      case tokens_1.braceLTok:
      case tokens_1.bracketLTok:
        if (this.includesContext(contexts_1.destructorContext)) {
          if (type === tokens_1.braceLTok) {
            return this.parseObjectPattern()
          } else {
            return this.parseArrayPattern()
          }
        }
        return this.parseDestructorExpression()
      case tokens_1.nameTok:
        return this.parseIdentifier()
      case tokens_1.expandTok:
        return this.parseExpandOperator()
      case tokens_1.dbStarTok:
      case tokens_1.starTok:
        return this.parseWildcardOperator()
      case tokens_1.bracketDLTok:
        return this.parseIgnoreExpression()
      case tokens_1.dotTok:
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
      !this.includesContext(contexts_1.destructorContext) &&
      !this.isMatchPattern &&
      !this.isWildMatchPattern
    this.next()
    if (this.includesContext(contexts_1.bracketArrayContext)) {
      if (this.state.type !== tokens_1.bracketRTok) {
        throw this.unexpect()
      } else {
        this.state.context.pop()
        this.next()
      }
    } else if (hasNotInDestructor) {
      this.pushSegments(node.value)
    }
    if (this.state.type === tokens_1.bracketLTok) {
      this.next()
      if (this.state.type !== tokens_1.nameTok) {
        throw this.unexpect()
      }
      this.state.context.push(contexts_1.bracketArrayContext)
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
    if (this.state.type === tokens_1.dbStarTok) {
      node.optional = true
    }
    this.isMatchPattern = true
    this.isWildMatchPattern = true
    this.data.segments = []
    this.next()
    if (this.state.type === tokens_1.parenLTok) {
      node.filter = this.parseGroupExpression(node)
    } else if (this.state.type === tokens_1.bracketLTok) {
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
    this.state.context.push(contexts_1.destructorContext)
    var startPos = this.state.pos - 1
    node.value =
      this.state.type === tokens_1.braceLTok
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
      ;(0, destructor_1.setDestructor)(
        node.source,
        (0, destructor_1.parseDestructorRules)(node)
      )
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
    while (
      this.state.type !== tokens_1.bracketRTok &&
      this.state.type !== tokens_1.eofTok
    ) {
      nodes.push(this.parseAtom(this.state.type))
      if (this.state.type === tokens_1.bracketRTok) {
        if (this.includesContext(contexts_1.destructorContext)) {
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
    while (
      this.state.type !== tokens_1.braceRTok &&
      this.state.type !== tokens_1.eofTok
    ) {
      var node = {
        type: 'ObjectPatternProperty',
        key: this.parseAtom(this.state.type),
      }
      nodes.push(node)
      if (this.state.type === tokens_1.colonTok) {
        this.next()
        node.value = this.parseAtom(this.state.type)
      }
      if (this.state.type === tokens_1.braceRTok) {
        if (this.includesContext(contexts_1.destructorContext)) {
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
      while (this.state.type === tokens_1.dotTok) {
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
        case tokens_1.commaTok:
          this.next()
          break
        case tokens_1.bangTok:
          node.isExclude = true
          this.haveExcludePattern = true
          this.next()
          break
        case tokens_1.eofTok:
          break loop
        case tokens_1.parenRTok:
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
        case tokens_1.colonTok:
          hasColon = true
          start = true
          this.next()
          break
        case tokens_1.bracketRTok:
          if (!hasColon && !node.end) {
            node.end = node.start
          }
          break loop
        case tokens_1.commaTok:
          throw this.unexpect()
        case tokens_1.eofTok:
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
})(tokenizer_1.Tokenizer)
exports.Parser = Parser
//# sourceMappingURL=parser.js.map
