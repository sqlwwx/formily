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
import { TimePicker as NextTimePicker } from '@alifd/next'
import { PreviewText } from '../preview-text'
import {
  formatMomentValue,
  momentable,
  mapSize,
  mapStatus,
} from '../__builtins__'
var mapTimeFormat = function () {
  return function (props) {
    var format = props['format'] || 'HH:mm:ss'
    var onChange = props.onChange
    return __assign(__assign({}, props), {
      format: format,
      value: momentable(props.value, format),
      onChange: function (value) {
        if (onChange) {
          onChange(formatMomentValue(value, format))
        }
      },
    })
  }
}
export var TimePicker = connect(
  NextTimePicker,
  mapProps(mapTimeFormat(), mapSize, mapStatus),
  mapReadPretty(PreviewText.TimePicker)
)
export default TimePicker
//# sourceMappingURL=index.js.map
