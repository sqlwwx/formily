import { createBoundaryFunction } from './internals'
import { untrackStart, untrackEnd } from './reaction'
export var untracked = createBoundaryFunction(untrackStart, untrackEnd)
//# sourceMappingURL=untracked.js.map
