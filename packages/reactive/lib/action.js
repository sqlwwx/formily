'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.action = void 0
var reaction_1 = require('./reaction')
var internals_1 = require('./internals')
exports.action = (0, internals_1.createBoundaryAnnotation)(
  function () {
    ;(0, reaction_1.batchStart)()
    ;(0, reaction_1.untrackStart)()
  },
  function () {
    ;(0, reaction_1.untrackEnd)()
    ;(0, reaction_1.batchEnd)()
  }
)
exports.action.scope = (0, internals_1.createBoundaryAnnotation)(
  function () {
    ;(0, reaction_1.batchScopeStart)()
    ;(0, reaction_1.untrackStart)()
  },
  function () {
    ;(0, reaction_1.untrackEnd)()
    ;(0, reaction_1.batchScopeEnd)()
  }
)
//# sourceMappingURL=action.js.map
