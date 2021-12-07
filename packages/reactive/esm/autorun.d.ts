import { Reaction, IReactionOptions, Dispose } from './types'
export declare const autorun: {
  (tracker: Reaction, name?: string): () => void
  memo<T>(callback: () => T, dependencies?: any[]): T
  effect(callback: () => void | Dispose, dependencies?: any[]): void
}
export declare const reaction: <T>(
  tracker: () => T,
  subscriber?: (value: T, oldValue: T) => void,
  options?: IReactionOptions<T>
) => () => void
