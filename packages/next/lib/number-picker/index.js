'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.NumberPicker = void 0
var react_1 = require('@formily/react')
var next_1 = require('@alifd/next')
var preview_text_1 = require('../preview-text')
var __builtins__1 = require('../__builtins__')
exports.NumberPicker = (0, react_1.connect)(
  next_1.NumberPicker,
  (0, react_1.mapProps)(__builtins__1.mapSize, __builtins__1.mapStatus),
  (0, react_1.mapReadPretty)(preview_text_1.PreviewText.Input)
)
exports.default = exports.NumberPicker
//# sourceMappingURL=index.js.map
