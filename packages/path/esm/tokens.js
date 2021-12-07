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
import {
  bracketContext,
  parenContext,
  bracketArrayContext,
  bracketDContext,
  braceContext,
  destructorContext,
} from './contexts'
var TokenType = function (flag, props) {
  return __assign({ flag: flag }, props)
}
export var nameTok = TokenType('name', {
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
export var starTok = TokenType('*', {
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
export var dbStarTok = TokenType('**', {
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
export var dotTok = TokenType('.', {
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
export var bangTok = TokenType('!', {
  expectNext: function (next) {
    return next === nameTok || next === bracketDLTok
  },
})
export var colonTok = TokenType(':', {
  expectNext: function (next) {
    if (this.includesContext(destructorContext)) {
      return next === nameTok || next === braceLTok || next === bracketLTok
    }
    return next === nameTok || next === bracketDLTok || next === bracketRTok
  },
})
export var braceLTok = TokenType('{', {
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
export var braceRTok = TokenType('}', {
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
export var bracketLTok = TokenType('[', {
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
export var bracketRTok = TokenType(']', {
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
export var bracketDLTok = TokenType('[[', {
  updateContext: function () {
    this.state.context.push(bracketDContext)
  },
})
export var bracketDRTok = TokenType(']]', {
  updateContext: function () {
    if (this.curContext() !== bracketDContext) throw this.unexpect()
    this.state.context.pop()
  },
})
export var parenLTok = TokenType('(', {
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
export var parenRTok = TokenType(')', {
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
export var commaTok = TokenType(',', {
  expectNext: function (next) {
    return (
      next === nameTok ||
      next === bracketDLTok ||
      next === bracketLTok ||
      next === braceLTok
    )
  },
})
export var ignoreTok = TokenType('ignore', {
  expectNext: function (next) {
    return next === bracketDRTok
  },
  expectPrev: function (prev) {
    return prev == bracketDLTok
  },
})
export var expandTok = TokenType('expandTok', {
  expectNext: function (next) {
    return (
      next === dotTok ||
      next === eofTok ||
      next === commaTok ||
      next === parenRTok
    )
  },
})
export var eofTok = TokenType('eof')
//# sourceMappingURL=tokens.js.map
