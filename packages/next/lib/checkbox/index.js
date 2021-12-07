'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Checkbox = void 0
var react_1 = require('@formily/react')
var next_1 = require('@alifd/next')
var preview_text_1 = require('../preview-text')
var __builtins__1 = require('../__builtins__')
exports.Checkbox = (0, react_1.connect)(
  next_1.Checkbox,
  (0, react_1.mapProps)(
    {
      value: 'checked',
      onInput: 'onChange',
    },
    __builtins__1.mapSize
  )
)
exports.Checkbox.Group = (0, react_1.connect)(
  next_1.Checkbox.Group,
  (0, react_1.mapProps)(
    {
      dataSource: true,
    },
    __builtins__1.mapSize
  ),
  (0, react_1.mapReadPretty)(preview_text_1.PreviewText.Select, {
    mode: 'multiple',
  })
)
exports.default = exports.Checkbox
//# sourceMappingURL=index.js.map
