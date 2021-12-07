import { ReactionStack } from './environment'
import { isFn } from './checkers'
import {
  batchEnd,
  batchStart,
  disposeBindingReactions,
  releaseBindingReactions,
} from './reaction'
var Tracker = /** @class */ (function () {
  function Tracker(scheduler, name) {
    var _this = this
    if (name === void 0) {
      name = 'TrackerReaction'
    }
    this.track = function (tracker) {
      if (!isFn(tracker)) return _this.results
      if (_this.track._boundary > 0) return
      if (ReactionStack.indexOf(_this.track) === -1) {
        releaseBindingReactions(_this.track)
        try {
          batchStart()
          ReactionStack.push(_this.track)
          _this.results = tracker()
        } finally {
          ReactionStack.pop()
          _this.track._boundary++
          batchEnd()
          _this.track._boundary = 0
        }
      }
      return _this.results
    }
    this.dispose = function () {
      disposeBindingReactions(_this.track)
    }
    this.track._scheduler = function (callback) {
      if (_this.track._boundary === 0) _this.dispose()
      if (isFn(callback)) scheduler(callback)
    }
    this.track._name = name
    this.track._boundary = 0
  }
  return Tracker
})()
export { Tracker }
//# sourceMappingURL=tracker.js.map
