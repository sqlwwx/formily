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
exports.DatePicker = void 0
var react_1 = require('@formily/react')
var next_1 = require('@alifd/next')
var preview_text_1 = require('../preview-text')
var __builtins__1 = require('../__builtins__')
var mapDateFormat = function (type) {
  var getDefaultFormat = function (props) {
    var _type = props['type'] || type
    if (_type === 'month') {
      return 'YYYY-MM'
    } else if (_type === 'year') {
      return 'YYYY'
    } else if (_type === 'week') {
      return 'YYYY-wo'
    }
    return props['showTime'] ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
  }
  return function (props) {
    var format = props['format'] || getDefaultFormat(props)
    var onChange = props.onChange
    return __assign(__assign({}, props), {
      format: format === 'YYYY-MM-DD HH:mm:ss' ? 'YYYY-MM-DD' : format,
      value: (0, __builtins__1.momentable)(
        props.value,
        format === 'YYYY-wo' ? 'YYYY-w' : format
      ),
      onChange: function (value) {
        if (onChange) {
          onChange((0, __builtins__1.formatMomentValue)(value, format))
        }
      },
    })
  }
}
exports.DatePicker = (0, react_1.connect)(
  next_1.DatePicker,
  (0, react_1.mapProps)(
    mapDateFormat(),
    __builtins__1.mapSize,
    __builtins__1.mapStatus
  ),
  (0, react_1.mapReadPretty)(preview_text_1.PreviewText.DatePicker)
)
exports.DatePicker.RangePicker = (0, react_1.connect)(
  next_1.DatePicker.RangePicker,
  (0, react_1.mapProps)(
    mapDateFormat(),
    __builtins__1.mapSize,
    __builtins__1.mapStatus
  ),
  (0, react_1.mapReadPretty)(preview_text_1.PreviewText.DateRangePicker)
)
exports.DatePicker.YearPicker = (0, react_1.connect)(
  next_1.DatePicker.YearPicker,
  (0, react_1.mapProps)(
    mapDateFormat('year'),
    __builtins__1.mapSize,
    __builtins__1.mapStatus
  ),
  (0, react_1.mapReadPretty)(preview_text_1.PreviewText.DatePicker)
)
exports.DatePicker.MonthPicker = (0, react_1.connect)(
  next_1.DatePicker.MonthPicker,
  (0, react_1.mapProps)(
    mapDateFormat('month'),
    __builtins__1.mapSize,
    __builtins__1.mapStatus
  ),
  (0, react_1.mapReadPretty)(preview_text_1.PreviewText.DatePicker)
)
exports.DatePicker.WeekPicker = (0, react_1.connect)(
  next_1.DatePicker.WeekPicker,
  (0, react_1.mapProps)(
    mapDateFormat('week'),
    __builtins__1.mapSize,
    __builtins__1.mapStatus
  ),
  (0, react_1.mapReadPretty)(preview_text_1.PreviewText.DatePicker)
)
exports.default = exports.DatePicker
//# sourceMappingURL=index.js.map
