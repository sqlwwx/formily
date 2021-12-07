'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Switch = void 0
var next_1 = require('@alifd/next')
var react_1 = require('@formily/react')
var __builtins__1 = require('../__builtins__')
exports.Switch = (0, react_1.connect)(
  next_1.Switch,
  (0, react_1.mapProps)(
    {
      value: 'checked',
    },
    __builtins__1.mapSize,
    __builtins__1.mapStatus
  )
)
exports.default = exports.Switch
//# sourceMappingURL=index.js.map
