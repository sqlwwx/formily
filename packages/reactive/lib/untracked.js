'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.untracked = void 0
var internals_1 = require('./internals')
var reaction_1 = require('./reaction')
exports.untracked = (0, internals_1.createBoundaryFunction)(
  reaction_1.untrackStart,
  reaction_1.untrackEnd
)
//# sourceMappingURL=untracked.js.map
