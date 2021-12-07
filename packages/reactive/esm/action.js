import {
  batchStart,
  batchEnd,
  batchScopeStart,
  batchScopeEnd,
  untrackStart,
  untrackEnd,
} from './reaction'
import { createBoundaryAnnotation } from './internals'
export var action = createBoundaryAnnotation(
  function () {
    batchStart()
    untrackStart()
  },
  function () {
    untrackEnd()
    batchEnd()
  }
)
action.scope = createBoundaryAnnotation(
  function () {
    batchScopeStart()
    untrackStart()
  },
  function () {
    untrackEnd()
    batchScopeEnd()
  }
)
//# sourceMappingURL=action.js.map
