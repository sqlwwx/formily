'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Transfer = void 0
var vue_1 = require('@formily/vue')
var element_ui_1 = require('element-ui')
exports.Transfer = (0, vue_1.connect)(
  element_ui_1.Transfer,
  (0, vue_1.mapProps)({ dataSource: 'data' })
)
exports.default = exports.Transfer
//# sourceMappingURL=index.js.map
