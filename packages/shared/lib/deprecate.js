'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.deprecate = void 0
var checkers_1 = require('./checkers')
var caches = {}
function deprecate(method, message, help) {
  if ((0, checkers_1.isFn)(method)) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return function (p1, p2, p3, p4, p5) {
      deprecate(message, help)
      return method.apply(this, arguments)
    }
  }
  if ((0, checkers_1.isStr)(method) && !caches[method]) {
    caches[method] = true
    console.warn(
      new Error(
        ''
          .concat(
            method,
            ' has been deprecated. Do not continue to use this api.'
          )
          .concat(message || '')
      )
    )
  }
}
exports.deprecate = deprecate
//# sourceMappingURL=deprecate.js.map
