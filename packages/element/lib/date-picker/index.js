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
var shared_1 = require('../__builtins__/shared')
var vue_1 = require('@formily/vue')
var element_ui_1 = require('element-ui')
var preview_text_1 = require('../preview-text')
var TransformElDatePicker = (0, shared_1.transformComponent)(
  element_ui_1.DatePicker,
  {
    change: 'input',
  }
)
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
exports.DatePicker = (0, vue_1.connect)(
  TransformElDatePicker,
  (0, vue_1.mapProps)({ readOnly: 'readonly' }, function (props) {
    return __assign(__assign({}, props), {
      format: props.format || getDefaultFormat(props),
      valueFormat: props.valueFormat || getDefaultFormat(props, 'valueFormat'),
    })
  }),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.DatePicker)
)
exports.default = exports.DatePicker
//# sourceMappingURL=index.js.map
