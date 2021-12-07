'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Cascader = void 0
var vue_1 = require('@formily/vue')
var element_ui_1 = require('element-ui')
var preview_text_1 = require('../preview-text')
exports.Cascader = (0, vue_1.connect)(
  element_ui_1.Cascader,
  (0, vue_1.mapProps)({ dataSource: 'options' }),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.Cascader)
)
exports.default = exports.Cascader
//# sourceMappingURL=index.js.map
