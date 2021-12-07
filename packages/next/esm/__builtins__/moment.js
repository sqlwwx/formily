import { isArr, isFn } from '@formily/shared'
import moment from 'moment'
export var momentable = function (value, format) {
  return Array.isArray(value)
    ? value.map(function (val) {
        return moment(val, format)
      })
    : value
    ? moment(value, format)
    : value
}
export var formatMomentValue = function (value, format, placeholder) {
  var formatDate = function (date, format, i) {
    if (i === void 0) {
      i = 0
    }
    if (!date) return placeholder
    if (isArr(format)) {
      var _format = format[i]
      if (isFn(_format)) {
        return _format(date)
      }
      return (date === null || date === void 0 ? void 0 : date.format)
        ? date.format(_format)
        : date
    } else {
      if (isFn(format)) {
        return format(date)
      }
      return (date === null || date === void 0 ? void 0 : date.format)
        ? date.format(format)
        : date
    }
  }
  if (isArr(value)) {
    return value.map(function (val, index) {
      return formatDate(val, format, index)
    })
  } else {
    return value ? formatDate(value, format) : value || placeholder
  }
}
//# sourceMappingURL=moment.js.map
