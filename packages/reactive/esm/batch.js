import {
  batchStart,
  batchEnd,
  batchScopeStart,
  batchScopeEnd,
} from './reaction'
import { BatchEndpoints, BatchCount } from './environment'
import { createBoundaryAnnotation } from './internals'
import { isFn } from './checkers'
export var batch = createBoundaryAnnotation(batchStart, batchEnd)
batch.scope = createBoundaryAnnotation(batchScopeStart, batchScopeEnd)
batch.endpoint = function (callback) {
  if (!isFn(callback)) return
  if (BatchCount.value === 0) {
    callback()
  } else {
    BatchEndpoints.add(callback)
  }
}
//# sourceMappingURL=batch.js.map
