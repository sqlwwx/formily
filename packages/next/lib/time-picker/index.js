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
exports.TimePicker = void 0
var react_1 = require('@formily/react')
var next_1 = require('@alifd/next')
var preview_text_1 = require('../preview-text')
var __builtins__1 = require('../__builtins__')
var mapTimeFormat = function () {
  return function (props) {
    var format = props['format'] || 'HH:mm:ss'
    var onChange = props.onChange
    return __assign(__assign({}, props), {
      format: format,
      value: (0, __builtins__1.momentable)(props.value, format),
      onChange: function (value) {
        if (onChange) {
          onChange((0, __builtins__1.formatMomentValue)(value, format))
        }
      },
    })
  }
}
exports.TimePicker = (0, react_1.connect)(
  next_1.TimePicker,
  (0, react_1.mapProps)(
    mapTimeFormat(),
    __builtins__1.mapSize,
    __builtins__1.mapStatus
  ),
  (0, react_1.mapReadPretty)(preview_text_1.PreviewText.TimePicker)
)
exports.default = exports.TimePicker
//# sourceMappingURL=index.js.map
