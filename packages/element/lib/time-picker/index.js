'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.TimePicker = void 0
var shared_1 = require('../__builtins__/shared')
var vue_1 = require('@formily/vue')
var preview_text_1 = require('../preview-text')
var element_ui_1 = require('element-ui')
var TransformElTimePicker = (0, shared_1.transformComponent)(
  element_ui_1.TimePicker,
  {
    change: 'input',
  }
)
exports.TimePicker = (0, vue_1.connect)(
  TransformElTimePicker,
  (0, vue_1.mapProps)({ readOnly: 'readonly' }),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.TimePicker)
)
exports.default = exports.TimePicker
//# sourceMappingURL=index.js.map
