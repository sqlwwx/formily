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
exports.Input = void 0
var shared_1 = require('../__builtins__/shared')
var vue_1 = require('@formily/vue')
var preview_text_1 = require('../preview-text')
var element_ui_1 = require('element-ui')
var TransformElInput = (0, shared_1.transformComponent)(element_ui_1.Input, {
  change: 'input',
})
var InnerInput = (0, vue_1.connect)(
  TransformElInput,
  (0, vue_1.mapProps)({ readOnly: 'readonly' }),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.Input)
)
var TextArea = (0, vue_1.connect)(
  InnerInput,
  (0, vue_1.mapProps)(function (props) {
    return __assign(__assign({}, props), { type: 'textarea' })
  }),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.Input)
)
exports.Input = (0, shared_1.composeExport)(InnerInput, {
  TextArea: TextArea,
})
exports.default = exports.Input
//# sourceMappingURL=index.js.map
