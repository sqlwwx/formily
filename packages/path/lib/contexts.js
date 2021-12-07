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
exports.destructorContext =
  exports.braceContext =
  exports.parenContext =
  exports.bracketDContext =
  exports.bracketArrayContext =
  exports.bracketContext =
    void 0
var ContextType = function (flag, props) {
  return __assign({ flag: flag }, props)
}
exports.bracketContext = ContextType('[]')
exports.bracketArrayContext = ContextType('[\\d]')
exports.bracketDContext = ContextType('[[]]')
exports.parenContext = ContextType('()')
exports.braceContext = ContextType('{}')
exports.destructorContext = ContextType('{x}')
//# sourceMappingURL=contexts.js.map
