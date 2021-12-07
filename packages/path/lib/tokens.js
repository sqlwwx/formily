'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.eofTok =
  exports.expandTok =
  exports.ignoreTok =
  exports.commaTok =
  exports.parenRTok =
  exports.parenLTok =
  exports.bracketDRTok =
  exports.bracketDLTok =
  exports.bracketRTok =
  exports.bracketLTok =
  exports.braceRTok =
  exports.braceLTok =
  exports.colonTok =
  exports.bangTok =
  exports.dotTok =
  exports.dbStarTok =
  exports.starTok =
  exports.nameTok =
    void 0
var contexts_1 = require('./contexts')
var TokenType = function (flag, props) {
  return __assign({ flag: flag }, props)
}
exports.nameTok = TokenType('name', {
  expectNext: function (next) {
    if (this.includesContext(contexts_1.destructorContext)) {
      return (
        next === exports.nameTok ||
        next === exports.commaTok ||
        next === exports.bracketRTok ||
        next === exports.braceRTok ||
        next === exports.colonTok
      )
    }
    return (
      next === exports.dotTok ||
      next === exports.commaTok ||
      next === exports.eofTok ||
      next === exports.bracketRTok ||
      next === exports.parenRTok ||
      next === exports.colonTok ||
      next === exports.expandTok ||
      next === exports.bracketLTok
    )
  },
})
exports.starTok = TokenType('*', {
  expectNext: function (next) {
    return (
      next === exports.dotTok ||
      next === exports.parenLTok ||
      next === exports.bracketLTok ||
      next === exports.eofTok ||
      next === exports.commaTok ||
      next === exports.parenRTok
    )
  },
})
exports.dbStarTok = TokenType('**', {
  expectNext: function (next) {
    return (
      next === exports.dotTok ||
      next === exports.parenLTok ||
      next === exports.bracketLTok ||
      next === exports.eofTok ||
      next === exports.commaTok ||
      next === exports.parenRTok
    )
  },
})
exports.dotTok = TokenType('.', {
  expectNext: function (next) {
    return (
      next === exports.dotTok ||
      next === exports.nameTok ||
      next === exports.bracketDLTok ||
      next === exports.starTok ||
      next === exports.dbStarTok ||
      next === exports.bracketLTok ||
      next === exports.braceLTok ||
      next === exports.eofTok
    )
  },
  expectPrev: function (prev) {
    return (
      prev === exports.dotTok ||
      prev === exports.nameTok ||
      prev === exports.bracketDRTok ||
      prev === exports.starTok ||
      prev === exports.parenRTok ||
      prev === exports.bracketRTok ||
      prev === exports.expandTok ||
      prev === exports.braceRTok
    )
  },
})
exports.bangTok = TokenType('!', {
  expectNext: function (next) {
    return next === exports.nameTok || next === exports.bracketDLTok
  },
})
exports.colonTok = TokenType(':', {
  expectNext: function (next) {
    if (this.includesContext(contexts_1.destructorContext)) {
      return (
        next === exports.nameTok ||
        next === exports.braceLTok ||
        next === exports.bracketLTok
      )
    }
    return (
      next === exports.nameTok ||
      next === exports.bracketDLTok ||
      next === exports.bracketRTok
    )
  },
})
exports.braceLTok = TokenType('{', {
  expectNext: function (next) {
    return next === exports.nameTok
  },
  expectPrev: function (prev) {
    if (this.includesContext(contexts_1.destructorContext)) {
      return (
        prev === exports.colonTok ||
        prev === exports.commaTok ||
        prev === exports.bracketLTok
      )
    }
    return (
      prev === exports.dotTok ||
      prev === exports.colonTok ||
      prev === exports.parenLTok
    )
  },
  updateContext: function () {
    this.state.context.push(contexts_1.braceContext)
  },
})
exports.braceRTok = TokenType('}', {
  expectNext: function (next) {
    if (this.includesContext(contexts_1.destructorContext)) {
      return (
        next === exports.commaTok ||
        next === exports.braceRTok ||
        next === exports.eofTok ||
        next === exports.bracketRTok
      )
    }
    return (
      next === exports.dotTok ||
      next === exports.eofTok ||
      next === exports.commaTok
    )
  },
  expectPrev: function (prev) {
    return (
      prev === exports.nameTok ||
      prev === exports.braceRTok ||
      prev === exports.bracketRTok
    )
  },
  updateContext: function () {
    this.state.context.pop(contexts_1.braceContext)
  },
})
exports.bracketLTok = TokenType('[', {
  expectNext: function (next) {
    if (this.includesContext(contexts_1.destructorContext)) {
      return (
        next === exports.nameTok ||
        next === exports.bracketLTok ||
        next === exports.braceLTok ||
        next === exports.bracketRTok
      )
    }
    return (
      next === exports.nameTok ||
      next === exports.bracketDLTok ||
      next === exports.colonTok ||
      next === exports.bracketLTok ||
      next === exports.ignoreTok ||
      next === exports.bracketRTok
    )
  },
  expectPrev: function (prev) {
    if (this.includesContext(contexts_1.destructorContext)) {
      return (
        prev === exports.colonTok ||
        prev === exports.commaTok ||
        prev === exports.bracketLTok
      )
    }
    return (
      prev === exports.starTok ||
      prev === exports.bracketLTok ||
      prev === exports.dotTok ||
      prev === exports.nameTok ||
      prev === exports.parenLTok ||
      prev == exports.commaTok
    )
  },
  updateContext: function () {
    this.state.context.push(contexts_1.bracketContext)
  },
})
exports.bracketRTok = TokenType(']', {
  expectNext: function (next) {
    if (this.includesContext(contexts_1.destructorContext)) {
      return (
        next === exports.commaTok ||
        next === exports.braceRTok ||
        next === exports.bracketRTok ||
        next === exports.eofTok
      )
    }
    return (
      next === exports.dotTok ||
      next === exports.eofTok ||
      next === exports.commaTok ||
      next === exports.parenRTok ||
      next === exports.bracketRTok
    )
  },
  updateContext: function () {
    if (this.includesContext(contexts_1.bracketArrayContext)) return
    if (!this.includesContext(contexts_1.bracketContext)) throw this.unexpect()
    this.state.context.pop()
  },
})
exports.bracketDLTok = TokenType('[[', {
  updateContext: function () {
    this.state.context.push(contexts_1.bracketDContext)
  },
})
exports.bracketDRTok = TokenType(']]', {
  updateContext: function () {
    if (this.curContext() !== contexts_1.bracketDContext) throw this.unexpect()
    this.state.context.pop()
  },
})
exports.parenLTok = TokenType('(', {
  expectNext: function (next) {
    return (
      next === exports.nameTok ||
      next === exports.bracketDLTok ||
      next === exports.braceLTok ||
      next === exports.bangTok ||
      next === exports.bracketLTok
    )
  },
  expectPrev: function (prev) {
    return prev === exports.starTok
  },
  updateContext: function () {
    this.state.context.push(contexts_1.parenContext)
  },
})
exports.parenRTok = TokenType(')', {
  expectNext: function (next) {
    return (
      next === exports.dotTok ||
      next === exports.eofTok ||
      next === exports.commaTok ||
      next === exports.parenRTok
    )
  },
  updateContext: function () {
    if (this.curContext() !== contexts_1.parenContext) throw this.unexpect()
    this.state.context.pop()
  },
})
exports.commaTok = TokenType(',', {
  expectNext: function (next) {
    return (
      next === exports.nameTok ||
      next === exports.bracketDLTok ||
      next === exports.bracketLTok ||
      next === exports.braceLTok
    )
  },
})
exports.ignoreTok = TokenType('ignore', {
  expectNext: function (next) {
    return next === exports.bracketDRTok
  },
  expectPrev: function (prev) {
    return prev == exports.bracketDLTok
  },
})
exports.expandTok = TokenType('expandTok', {
  expectNext: function (next) {
    return (
      next === exports.dotTok ||
      next === exports.eofTok ||
      next === exports.commaTok ||
      next === exports.parenRTok
    )
  },
})
exports.eofTok = TokenType('eof')
//# sourceMappingURL=tokens.js.map
