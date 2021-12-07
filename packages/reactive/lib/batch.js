'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.batch = void 0
var reaction_1 = require('./reaction')
var environment_1 = require('./environment')
var internals_1 = require('./internals')
var checkers_1 = require('./checkers')
exports.batch = (0, internals_1.createBoundaryAnnotation)(
  reaction_1.batchStart,
  reaction_1.batchEnd
)
exports.batch.scope = (0, internals_1.createBoundaryAnnotation)(
  reaction_1.batchScopeStart,
  reaction_1.batchScopeEnd
)
exports.batch.endpoint = function (callback) {
  if (!(0, checkers_1.isFn)(callback)) return
  if (environment_1.BatchCount.value === 0) {
    callback()
  } else {
    environment_1.BatchEndpoints.add(callback)
  }
}
//# sourceMappingURL=batch.js.map
