'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ObserverListeners =
  exports.MakeObservableSymbol =
  exports.BatchEndpoints =
  exports.PendingScopeReactions =
  exports.PendingReactions =
  exports.DependencyCollected =
  exports.BatchScope =
  exports.UntrackCount =
  exports.BatchCount =
  exports.ReactionStack =
  exports.RawReactionsMap =
  exports.RawNode =
  exports.RawShallowProxy =
  exports.RawProxy =
  exports.ProxyRaw =
    void 0
var array_1 = require('./array')
exports.ProxyRaw = new WeakMap()
exports.RawProxy = new WeakMap()
exports.RawShallowProxy = new WeakMap()
exports.RawNode = new WeakMap()
exports.RawReactionsMap = new WeakMap()
exports.ReactionStack = []
exports.BatchCount = { value: 0 }
exports.UntrackCount = { value: 0 }
exports.BatchScope = { value: false }
exports.DependencyCollected = { value: false }
exports.PendingReactions = new array_1.ArraySet()
exports.PendingScopeReactions = new array_1.ArraySet()
exports.BatchEndpoints = new array_1.ArraySet()
exports.MakeObservableSymbol = Symbol('MakeObservableSymbol')
exports.ObserverListeners = new array_1.ArraySet()
//# sourceMappingURL=environment.js.map
