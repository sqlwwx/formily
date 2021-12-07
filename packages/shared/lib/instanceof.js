'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.instOf = void 0
var global_1 = require('./global')
var checkers_1 = require('./checkers')
var instOf = function (value, cls) {
  if ((0, checkers_1.isFn)(cls)) return value instanceof cls
  if ((0, checkers_1.isStr)(cls))
    return global_1.globalThisPolyfill[cls]
      ? value instanceof global_1.globalThisPolyfill[cls]
      : false
  return false
}
exports.instOf = instOf
//# sourceMappingURL=instanceof.js.map
