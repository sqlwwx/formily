import { ObservableListener, Reaction, ReactionsMap } from './types'
import { ArraySet } from './array'
import { DataNode } from './tree'
export declare const ProxyRaw: WeakMap<object, any>
export declare const RawProxy: WeakMap<object, any>
export declare const RawShallowProxy: WeakMap<object, any>
export declare const RawNode: WeakMap<object, DataNode>
export declare const RawReactionsMap: WeakMap<object, ReactionsMap>
export declare const ReactionStack: Reaction[]
export declare const BatchCount: {
  value: number
}
export declare const UntrackCount: {
  value: number
}
export declare const BatchScope: {
  value: boolean
}
export declare const DependencyCollected: {
  value: boolean
}
export declare const PendingReactions: ArraySet<Reaction>
export declare const PendingScopeReactions: ArraySet<Reaction>
export declare const BatchEndpoints: ArraySet<() => void>
export declare const MakeObservableSymbol: unique symbol
export declare const ObserverListeners: ArraySet<ObservableListener>
