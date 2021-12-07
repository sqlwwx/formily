import { IOperation, Reaction } from './types'
export declare const bindTargetKeyWithCurrentReaction: (
  operation: IOperation
) => void
export declare const bindComputedReactions: (reaction: Reaction) => void
export declare const runReactionsFromTargetKey: (operation: IOperation) => void
export declare const hasRunningReaction: () => boolean
export declare const releaseBindingReactions: (reaction: Reaction) => void
export declare const suspendComputedReactions: (current: Reaction) => void
export declare const disposeBindingReactions: (reaction: Reaction) => void
export declare const batchStart: () => void
export declare const batchEnd: () => void
export declare const batchScopeStart: () => void
export declare const batchScopeEnd: () => void
export declare const untrackStart: () => void
export declare const untrackEnd: () => void
export declare const isBatching: () => boolean
export declare const isScopeBatching: () => boolean
export declare const isUntracking: () => boolean
export declare const executePendingReactions: () => void
export declare const executeBatchEndpoints: () => void
export declare const hasDepsChange: (newDeps: any[], oldDeps: any[]) => boolean
export declare const disposeEffects: (reaction: Reaction) => void
