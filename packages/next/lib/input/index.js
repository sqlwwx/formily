'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Input = void 0
var react_1 = require('@formily/react')
var next_1 = require('@alifd/next')
var preview_text_1 = require('../preview-text')
var __builtins__1 = require('../__builtins__')
exports.Input = (0, react_1.connect)(
  next_1.Input,
  (0, react_1.mapProps)(__builtins__1.mapSize, __builtins__1.mapStatus),
  (0, react_1.mapReadPretty)(preview_text_1.PreviewText.Input)
)
exports.Input.TextArea = (0, react_1.connect)(
  next_1.Input.TextArea,
  (0, react_1.mapProps)(__builtins__1.mapSize, __builtins__1.mapStatus),
  (0, react_1.mapReadPretty)(preview_text_1.PreviewText.Input)
)
exports.default = exports.Input
//# sourceMappingURL=index.js.map
