'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Tracker = void 0
var environment_1 = require('./environment')
var checkers_1 = require('./checkers')
var reaction_1 = require('./reaction')
var Tracker = /** @class */ (function () {
  function Tracker(scheduler, name) {
    var _this = this
    if (name === void 0) {
      name = 'TrackerReaction'
    }
    this.track = function (tracker) {
      if (!(0, checkers_1.isFn)(tracker)) return _this.results
      if (_this.track._boundary > 0) return
      if (environment_1.ReactionStack.indexOf(_this.track) === -1) {
        ;(0, reaction_1.releaseBindingReactions)(_this.track)
        try {
          ;(0, reaction_1.batchStart)()
          environment_1.ReactionStack.push(_this.track)
          _this.results = tracker()
        } finally {
          environment_1.ReactionStack.pop()
          _this.track._boundary++
          ;(0, reaction_1.batchEnd)()
          _this.track._boundary = 0
        }
      }
      return _this.results
    }
    this.dispose = function () {
      ;(0, reaction_1.disposeBindingReactions)(_this.track)
    }
    this.track._scheduler = function (callback) {
      if (_this.track._boundary === 0) _this.dispose()
      if ((0, checkers_1.isFn)(callback)) scheduler(callback)
    }
    this.track._name = name
    this.track._boundary = 0
  }
  return Tracker
})()
exports.Tracker = Tracker
//# sourceMappingURL=tracker.js.map
