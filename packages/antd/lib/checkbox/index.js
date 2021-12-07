'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Checkbox = void 0
var react_1 = require('@formily/react')
var antd_1 = require('antd')
var preview_text_1 = require('../preview-text')
exports.Checkbox = (0, react_1.connect)(
  antd_1.Checkbox,
  (0, react_1.mapProps)({
    value: 'checked',
    onInput: 'onChange',
  })
)
exports.Checkbox.__ANT_CHECKBOX = true
exports.Checkbox.Group = (0, react_1.connect)(
  antd_1.Checkbox.Group,
  (0, react_1.mapProps)({
    dataSource: 'options',
  }),
  (0, react_1.mapReadPretty)(preview_text_1.PreviewText.Select, {
    mode: 'tags',
  })
)
exports.default = exports.Checkbox
//# sourceMappingURL=index.js.map
