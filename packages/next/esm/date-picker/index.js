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
import { connect, mapProps, mapReadPretty } from '@formily/react'
import { DatePicker as NextDatePicker } from '@alifd/next'
import { PreviewText } from '../preview-text'
import {
  formatMomentValue,
  momentable,
  mapSize,
  mapStatus,
} from '../__builtins__'
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
      value: momentable(props.value, format === 'YYYY-wo' ? 'YYYY-w' : format),
      onChange: function (value) {
        if (onChange) {
          onChange(formatMomentValue(value, format))
        }
      },
    })
  }
}
export var DatePicker = connect(
  NextDatePicker,
  mapProps(mapDateFormat(), mapSize, mapStatus),
  mapReadPretty(PreviewText.DatePicker)
)
DatePicker.RangePicker = connect(
  NextDatePicker.RangePicker,
  mapProps(mapDateFormat(), mapSize, mapStatus),
  mapReadPretty(PreviewText.DateRangePicker)
)
DatePicker.YearPicker = connect(
  NextDatePicker.YearPicker,
  mapProps(mapDateFormat('year'), mapSize, mapStatus),
  mapReadPretty(PreviewText.DatePicker)
)
DatePicker.MonthPicker = connect(
  NextDatePicker.MonthPicker,
  mapProps(mapDateFormat('month'), mapSize, mapStatus),
  mapReadPretty(PreviewText.DatePicker)
)
DatePicker.WeekPicker = connect(
  NextDatePicker.WeekPicker,
  mapProps(mapDateFormat('week'), mapSize, mapStatus),
  mapReadPretty(PreviewText.DatePicker)
)
export default DatePicker
//# sourceMappingURL=index.js.map
