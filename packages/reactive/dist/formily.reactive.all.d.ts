declare class ArraySet<T> {
  value: T[]
  batchDeleting: boolean
  constructor(value?: T[])
  add(item: T): void
  has(item: T): boolean
  delete(item: T): void
  forEach(callback: (value: T) => void): void
  forEachDelete(callback: (value: T) => void): void
  clear(): void
}

declare class DataChange {
  path: ObservablePath
  key: PropertyKey
  object: object
  type: string
  value: any
  oldValue: any
  constructor(operation: IOperation, node: DataNode)
}
declare class DataNode {
  target: any
  key: PropertyKey
  value: any
  constructor(target: any, key: PropertyKey, value: any)
  get path(): any
  get targetRaw(): any
  get parent(): DataNode
  isEqual(node: DataNode): boolean
  contains(node: DataNode): boolean
}
declare const buildDataTree: (
  target: any,
  key: PropertyKey,
  value: any
) => DataNode

declare type PropertyKey = string | number | symbol
declare type OperationType =
  | 'add'
  | 'delete'
  | 'clear'
  | 'set'
  | 'get'
  | 'iterate'
  | 'has'
interface IOperation {
  target?: any
  oldTarget?: any
  key?: PropertyKey
  value?: any
  oldValue?: any
  type?: OperationType
  receiver?: any
}
interface IChange {
  key?: PropertyKey
  path?: ObservablePath
  value?: any
  oldValue?: any
  type?: OperationType
}
interface IEffectQueueItem {
  dispose?: void | Dispose
  deps?: any[]
}
interface IMemoQueueItem {
  value?: any
  deps?: any[]
}
interface IVisitor<Value = any, Target = any> {
  target?: Target
  key?: PropertyKey
  value?: Value
}
declare type Annotation = (...args: any[]) => any
declare type Annotations<T = any> = {
  [key in keyof T]?: Annotation
}
declare type ObservableListener = (operation: IOperation) => void
declare type ObservablePath = Array<string | number>
declare type Dispose = () => void
declare type Effect = () => void | Dispose
declare type Reaction = ((...args: any[]) => any) & {
  _boundary?: number
  _name?: string
  _isComputed?: boolean
  _dirty?: boolean
  _context?: any
  _disposed?: boolean
  _property?: PropertyKey
  _computesSet?: ArraySet<Reaction>
  _reactionsSet?: ArraySet<ReactionsMap>
  _scheduler?: (reaction: Reaction) => void
  _memos?: {
    queue: IMemoQueueItem[]
    cursor: number
  }
  _effects?: {
    queue: IEffectQueueItem[]
    cursor: number
  }
}
declare type ReactionsMap = Map<PropertyKey, ArraySet<Reaction>>
interface IReactionOptions<T> {
  name?: string
  equals?: (oldValue: T, newValue: T) => boolean
  fireImmediately?: boolean
}
declare type BindFunction<F = (...args: any[]) => any> = (
  callback?: F,
  context?: any
) => F
declare type BoundaryFunction = <F extends (...args: any) => any>(
  fn?: F
) => ReturnType<F>
interface IBoundable {
  bound?: <T extends (...args: any[]) => any>(callback: T, context?: any) => T
}
interface IAction extends IBoundable {
  <T>(callback?: () => T): T
  scope?: (<T>(callback?: () => T) => T) & IBoundable
}
interface IBatch extends IAction {
  endpoint?: (callback?: () => void) => void
}

declare const batch: IBatch

declare const action: IAction

declare const untracked: {
  <F extends (...args: any) => any>(fn?: F): ReturnType<F>
  bound: <F_1 extends (...args: any[]) => any>(
    callback?: F_1,
    context?: any
  ) => F_1
}

interface IObservable {
  <T>(target: T): T
}

interface IBox {
  <T>(target: T): {
    get(): T
    set(value: T): void
  }
}

interface IRef {
  <T>(target: T): {
    value: T
  }
}

interface IValue<T = any> {
  value?: T
}
interface IComputed {
  <T>(compute: () => T): IValue<T>
  <T>(compute: { get?: () => T; set?: (value: T) => void }): IValue<T>
}

declare function observable<T extends object>(target: T): T
declare namespace observable {
  var box: IBox
  var ref: IRef
  var deep: IObservable
  var shallow: IObservable
  var computed: IComputed
}

declare function define<Target extends object = any>(
  target: Target,
  annotations?: Annotations<Target>
): Target
declare function model<Target extends object = any>(target: Target): Target

declare const autorun: {
  (tracker: Reaction, name?: string): () => void
  memo<T>(callback: () => T, dependencies?: any[]): T
  effect(callback: () => void | Dispose, dependencies?: any[]): void
}
declare const reaction: <T>(
  tracker: () => T,
  subscriber?: (value: T, oldValue: T) => void,
  options?: IReactionOptions<T>
) => () => void

declare class Tracker {
  private results
  constructor(scheduler?: (reaction: Reaction) => void, name?: string)
  track: Reaction
  dispose: () => void
}

declare const observe: (
  target: object,
  observer?: (change: DataChange) => void,
  deep?: boolean
) => () => void

declare const isObservable: (target: any) => boolean
declare const isAnnotation: (target: any) => target is Annotation
declare const isSupportObservable: (target: any) => boolean
declare const markRaw: <T>(target: T) => T
declare const markObservable: <T>(target: T) => T
declare const raw: <T>(target: T) => T
declare const toJS: <T>(values: T) => T
declare const contains: (target: any, property: any) => boolean
declare const hasCollected: (callback?: () => void) => boolean

export {
  Annotation,
  Annotations,
  BindFunction,
  BoundaryFunction,
  DataChange,
  DataNode,
  Dispose,
  Effect,
  IAction,
  IBatch,
  IBoundable,
  IChange,
  IEffectQueueItem,
  IMemoQueueItem,
  IOperation,
  IReactionOptions,
  IVisitor,
  ObservableListener,
  ObservablePath,
  OperationType,
  PropertyKey,
  Reaction,
  ReactionsMap,
  Tracker,
  action,
  autorun,
  batch,
  buildDataTree,
  contains,
  define,
  hasCollected,
  isAnnotation,
  isObservable,
  isSupportObservable,
  markObservable,
  markRaw,
  model,
  observable,
  observe,
  raw,
  reaction,
  toJS,
  untracked,
}
