'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Radio = void 0
var react_1 = require('@formily/react')
var antd_1 = require('antd')
var preview_text_1 = require('../preview-text')
exports.Radio = (0, react_1.connect)(
  antd_1.Radio,
  (0, react_1.mapProps)({
    value: 'checked',
    onInput: 'onChange',
  })
)
exports.Radio.__ANT_RADIO = true
exports.Radio.Group = (0, react_1.connect)(
  antd_1.Radio.Group,
  (0, react_1.mapProps)({
    dataSource: 'options',
  }),
  (0, react_1.mapReadPretty)(preview_text_1.PreviewText.Select)
)
exports.default = exports.Radio
//# sourceMappingURL=index.js.map
