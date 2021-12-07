'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.InputNumber = void 0
var shared_1 = require('../__builtins__/shared')
var vue_1 = require('@formily/vue')
var element_ui_1 = require('element-ui')
var preview_text_1 = require('../preview-text')
var TransformElInputNumber = (0, shared_1.transformComponent)(
  element_ui_1.InputNumber,
  {
    change: 'input',
  }
)
exports.InputNumber = (0, vue_1.connect)(
  TransformElInputNumber,
  (0, vue_1.mapProps)({ readOnly: 'readonly' }, function (props) {
    var controlsPosition = 'right'
    if (props.controlsPosition) {
      controlsPosition = props.controlsPosition
    }
    return {
      controlsPosition: controlsPosition,
    }
  }),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.Input)
)
exports.default = exports.InputNumber
//# sourceMappingURL=index.js.map
