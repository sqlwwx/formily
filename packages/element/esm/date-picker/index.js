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
import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { default as ElDatePicker } from 'element-ui/lib/date-picker'
import { PreviewText } from '../preview-text'
var TransformElDatePicker = transformComponent(ElDatePicker, {
  change: 'input',
})
var getDefaultFormat = function (props, formatType) {
  if (formatType === void 0) {
    formatType = 'format'
  }
  var type = props.type
  if (type === 'week' && formatType === 'format') {
    return 'yyyy-WW'
  } else if (type === 'month') {
    return 'yyyy-MM'
  } else if (type === 'year') {
    return 'yyyy'
  } else if (type === 'datetime' || type === 'datetimerange') {
    return 'yyyy-MM-dd HH:mm:ss'
  }
  return 'yyyy-MM-dd'
}
export var DatePicker = connect(
  TransformElDatePicker,
  mapProps({ readOnly: 'readonly' }, function (props) {
    return __assign(__assign({}, props), {
      format: props.format || getDefaultFormat(props),
      valueFormat: props.valueFormat || getDefaultFormat(props, 'valueFormat'),
    })
  }),
  mapReadPretty(PreviewText.DatePicker)
)
export default DatePicker
//# sourceMappingURL=index.js.map
