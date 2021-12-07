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
var ContextType = function (flag, props) {
  return __assign({ flag: flag }, props)
}
export var bracketContext = ContextType('[]')
export var bracketArrayContext = ContextType('[\\d]')
export var bracketDContext = ContextType('[[]]')
export var parenContext = ContextType('()')
export var braceContext = ContextType('{}')
export var destructorContext = ContextType('{x}')
//# sourceMappingURL=contexts.js.map
