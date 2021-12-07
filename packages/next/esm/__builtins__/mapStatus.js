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
export var mapStatus = function (props, field) {
  var takeStatus = function () {
    var _a, _b
    if (!field) return
    if (field['loading'] || field['validating']) return 'loading'
    if (field['invalid']) return 'error'
    if ((_a = field['warnings']) === null || _a === void 0 ? void 0 : _a.length)
      return 'warning'
    return (_b = field.decoratorProps) === null || _b === void 0
      ? void 0
      : _b.feedbackStatus
  }
  var takeState = function (state) {
    if (state === 'validating' || state === 'pending') return 'loading'
    return state
  }
  return __assign(__assign({}, props), {
    state: takeState(props.state) || takeStatus(),
  })
}
//# sourceMappingURL=mapStatus.js.map
