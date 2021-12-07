'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Radio = void 0
var react_1 = require('@formily/react')
var next_1 = require('@alifd/next')
var preview_text_1 = require('../preview-text')
var __builtins__1 = require('../__builtins__')
exports.Radio = (0, react_1.connect)(
  next_1.Radio,
  (0, react_1.mapProps)(
    {
      value: 'checked',
    },
    __builtins__1.mapSize
  )
)
exports.Radio.Group = (0, react_1.connect)(
  next_1.Radio.Group,
  (0, react_1.mapProps)(
    {
      dataSource: true,
    },
    __builtins__1.mapSize
  ),
  (0, react_1.mapReadPretty)(preview_text_1.PreviewText.Select)
)
exports.default = exports.Radio
//# sourceMappingURL=index.js.map
