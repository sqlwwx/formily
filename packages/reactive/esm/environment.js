import { ArraySet } from './array'
export var ProxyRaw = new WeakMap()
export var RawProxy = new WeakMap()
export var RawShallowProxy = new WeakMap()
export var RawNode = new WeakMap()
export var RawReactionsMap = new WeakMap()
export var ReactionStack = []
export var BatchCount = { value: 0 }
export var UntrackCount = { value: 0 }
export var BatchScope = { value: false }
export var DependencyCollected = { value: false }
export var PendingReactions = new ArraySet()
export var PendingScopeReactions = new ArraySet()
export var BatchEndpoints = new ArraySet()
export var MakeObservableSymbol = Symbol('MakeObservableSymbol')
export var ObserverListeners = new ArraySet()
//# sourceMappingURL=environment.js.map
