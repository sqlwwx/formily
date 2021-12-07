declare type EachArrayIterator<T> = (
  currentValue: T,
  key: number
) => void | boolean
declare type EachStringIterator = (
  currentValue: string,
  key: number
) => void | boolean
declare type EachObjectIterator<T = any> = (
  currentValue: T,
  key: string
) => void | boolean
declare type MapArrayIterator<TItem, TResult> = (
  currentValue: TItem,
  key: number
) => TResult
declare type MapStringIterator<TResult> = (
  currentValue: string,
  key: number
) => TResult
declare type MapObjectIterator<TItem, TResult> = (
  currentValue: TItem,
  key: string
) => TResult
declare type MemoArrayIterator<T, U> = (
  previousValue: U,
  currentValue: T,
  key: number
) => U
declare type MemoStringIterator<T> = (
  previousValue: T,
  currentValue: string,
  key: number
) => T
declare type MemoObjectIterator<TValue, TResult> = (
  previousValue: TResult,
  currentValue: TValue,
  key: string
) => TResult
declare const toArr: (val: any) => any[]
declare function each(
  val: string,
  iterator: EachStringIterator,
  revert?: boolean
): void
declare function each<T>(
  val: T[],
  iterator: EachArrayIterator<T>,
  revert?: boolean
): void
declare function each<T extends {}, TValue extends T[keyof T]>(
  val: T,
  iterator: EachObjectIterator<TValue>,
  revert?: boolean
): void
declare function map<T>(
  val: string,
  iterator: MapStringIterator<T>,
  revert?: boolean
): T[]
declare function map<TItem, TResult>(
  val: TItem[],
  iterator: MapArrayIterator<TItem, TResult>,
  revert?: boolean
): TResult[]
declare function map<T extends {}, TResult>(
  val: T,
  iterator: MapObjectIterator<T[keyof T], TResult>,
  revert?: boolean
): Record<keyof T, TResult>
declare function reduce<T, U>(
  val: T[],
  iterator: MemoArrayIterator<T, U>,
  accumulator?: U,
  revert?: boolean
): U
declare function reduce<T>(
  val: string,
  iterator: MemoStringIterator<T>,
  accumulator?: T,
  revert?: boolean
): T
declare function reduce<T extends {}, TValue extends T[keyof T], TResult = any>(
  val: T,
  iterator: MemoObjectIterator<TValue, TResult>,
  accumulator?: TResult,
  revert?: boolean
): TResult
declare function every<T extends string>(
  val: T,
  iterator: EachStringIterator,
  revert?: boolean
): boolean
declare function every<T>(
  val: T[],
  iterator: EachArrayIterator<T>,
  revert?: boolean
): boolean
declare function every<T extends {}>(
  val: T,
  iterator: EachObjectIterator,
  revert?: boolean
): boolean
declare function some<T extends string>(
  val: T,
  iterator: EachStringIterator,
  revert?: boolean
): boolean
declare function some<T>(
  val: T[],
  iterator: EachArrayIterator<T>,
  revert?: boolean
): boolean
declare function some<T extends {}>(
  val: T,
  iterator: EachObjectIterator,
  revert?: boolean
): boolean
declare function findIndex<T extends string>(
  val: T,
  iterator: EachStringIterator,
  revert?: boolean
): number
declare function findIndex<T>(
  val: T[],
  iterator: EachArrayIterator<T>,
  revert?: boolean
): number
declare function findIndex<T extends {}>(
  val: T,
  iterator: EachObjectIterator,
  revert?: boolean
): keyof T
declare function find<T extends string>(
  val: T,
  iterator: EachStringIterator,
  revert?: boolean
): any
declare function find<T>(
  val: T[],
  iterator: EachArrayIterator<T>,
  revert?: boolean
): T
declare function find<T extends {}>(
  val: T,
  iterator: EachObjectIterator,
  revert?: boolean
): T[keyof T]
declare function includes<T extends string>(
  val: T,
  searchElement: string,
  revert?: boolean
): boolean
declare function includes<T>(
  val: T[],
  searchElement: T,
  revert?: boolean
): boolean

declare const isEqual: (a: any, b: any) => any

declare const getType: (obj: any) => any
declare const isFn: (val: any) => val is Function
declare const isArr: (arg: any) => arg is any[]
declare const isPlainObj: (obj: unknown) => obj is object
declare const isStr: (obj: unknown) => obj is string
declare const isBool: (obj: unknown) => obj is boolean
declare const isNum: (obj: unknown) => obj is number
declare const isMap: (val: any) => val is Map<any, any>
declare const isSet: (val: any) => val is Set<any>
declare const isWeakMap: (val: any) => val is WeakMap<any, any>
declare const isWeakSet: (val: any) => val is WeakSet<any>
declare const isNumberLike: (index: any) => index is number
declare const isObj: (val: unknown) => val is object
declare const isRegExp: (obj: unknown) => obj is RegExp
declare const isReactElement: (obj: any) => boolean
declare const isHTMLElement: (target: any) => target is EventTarget
declare type Subscriber<S> = (payload: S) => void
interface Subscription<S> {
  notify?: (payload: S) => void | boolean
  filter?: (payload: S) => any
}

declare const shallowClone: (values: any) => any
declare const clone: (values: any) => any

declare const isValid: (val: any) => boolean
declare function isEmpty(val: any, strict?: boolean): boolean

interface Options$1 {
  splitRegexp?: RegExp | RegExp[]
  stripRegexp?: RegExp | RegExp[]
  delimiter?: string
  transform?: (part: string, index: number, parts: string[]) => string
}

declare function pascalCase(input: string, options?: Options$1): string

declare function camelCase(input: string, options?: Options$1): string

/**
 * Lower case as a function.
 */
declare function lowerCase(str: string): string

/**
 * Upper case as a function.
 */
declare function upperCase(str: string): string

declare function paramCase(input: string, options?: Options$1): string

declare const stringLength: (input: string) => any

declare const globalThisPolyfill: Window

interface INode {
  type?: string
  after?: Node
  depth?: number
}
declare type Node =
  | IdentifierNode
  | WildcardOperatorNode
  | GroupExpressionNode
  | RangeExpressionNode
  | DestructorExpressionNode
  | ObjectPatternNode
  | ArrayPatternNode
  | DotOperatorNode
  | ExpandOperatorNode
  | INode
declare type IdentifierNode = {
  type: 'Identifier'
  value: string
  arrayIndex?: boolean
} & INode
declare type DotOperatorNode = {
  type: 'DotOperator'
} & INode
declare type WildcardOperatorNode = {
  type: 'WildcardOperator'
  filter?: GroupExpressionNode | RangeExpressionNode
  optional?: boolean
} & INode
declare type ExpandOperatorNode = {
  type: 'ExpandOperator'
} & INode
declare type GroupExpressionNode = {
  type: 'GroupExpression'
  value: Node[]
  isExclude?: boolean
} & INode
declare type RangeExpressionNode = {
  type: 'RangeExpression'
  start?: IdentifierNode
  end?: IdentifierNode
} & INode
declare type DestructorExpressionNode = {
  type: 'DestructorExpression'
  value?: ObjectPatternNode | ArrayPatternNode
  source?: string
} & INode
declare type ObjectPatternNode = {
  type: 'ObjectPattern'
  properties: ObjectPatternPropertyNode[]
} & INode
declare type ObjectPatternPropertyNode = {
  type: 'ObjectPatternProperty'
  key: IdentifierNode
  value?: ObjectPatternNode[] | ArrayPatternNode[] | IdentifierNode
} & INode
declare type ArrayPatternNode = {
  type: 'ArrayPattern'
  elements: ObjectPatternNode[] | ArrayPatternNode[] | IdentifierNode[]
} & INode
declare type MatcherFunction = ((path: Segments) => boolean) & {
  path: Path
}
declare type Pattern =
  | string
  | number
  | Path
  | Segments
  | MatcherFunction
  | RegExp
declare type Segments = Array<string | number>

declare class Path {
  entire: string | RegExp
  segments: Segments
  isMatchPattern: boolean
  isWildMatchPattern: boolean
  isRegExp: boolean
  haveExcludePattern: boolean
  matchScore: number
  tree: Node
  private matchCache
  private includesCache
  constructor(input: Pattern, base?: Pattern)
  toString(): string
  toArr(): (string | number)[]
  get length(): number
  concat: (...args: Pattern[]) => Path
  slice: (start?: number, end?: number) => Path
  push: (...items: Pattern[]) => Path
  pop: () => Path
  splice: (
    start: number,
    deleteCount?: number,
    ...items: Array<string | number>
  ) => Path
  forEach: (callback: (key: string | number) => any) => void
  map: (callback: (key: string | number) => any) => any[]
  reduce: <T>(
    callback: (buf: T, item: string | number, index: number) => T,
    initial: T
  ) => T
  parent: () => Path
  includes: (pattern: Pattern) => any
  transform: <T>(
    regexp: string | RegExp,
    callback: (...args: string[]) => T
  ) => string | T
  match: (pattern: Pattern) => boolean
  matchAliasGroup: (name: Pattern, alias: Pattern) => boolean
  existIn: (source?: any, start?: number | Path) => any
  getIn: (source?: any) => any
  setIn: (source?: any, value?: any) => any
  deleteIn: (source?: any) => any
  ensureIn: (source?: any, defaults?: any) => any
  static match(pattern: Pattern): {
    (target: any): boolean
    path: Path
  }
  static isPathPattern(target: any): target is Pattern
  static transform<T>(
    pattern: Pattern,
    regexp: string | RegExp,
    callback: (...args: string[]) => T
  ): any
  static parse(path?: Pattern, base?: Pattern): Path
  static getIn: (source: any, pattern: Pattern) => any
  static setIn: (source: any, pattern: Pattern, value: any) => any
  static deleteIn: (source: any, pattern: Pattern) => any
  static existIn: (source: any, pattern: Pattern, start?: number | Path) => any
  static ensureIn: (source: any, pattern: Pattern, defaultValue?: any) => any
}

declare function deprecate<P1 = any, P2 = any, P3 = any, P4 = any, P5 = any>(
  method: any,
  message?: string,
  help?: string
): (p1?: P1, p2?: P2, p3?: P3, p4?: P4, p5?: P5) => any

declare class Subscribable<Payload = any> {
  subscribers: {
    index?: number
    [key: number]: Subscriber<Payload>
  }
  subscription: Subscription<Payload>
  subscribe: (callback?: Subscriber<Payload>) => number
  unsubscribe: (index?: number) => void
  notify: (payload?: Payload, silent?: boolean) => void
}

interface IMiddleware<Payload = any, Result = any> {
  (payload: Payload, next: (payload?: Payload) => Result): Result
}
declare const applyMiddleware: (
  payload: any,
  fns?: IMiddleware[]
) => Promise<unknown>

interface Options {
  arrayMerge?(target: any[], source: any[], options?: Options): any[]
  clone?: boolean
  assign?: boolean
  customMerge?: (
    key: string,
    options?: Options
  ) => ((x: any, y: any) => any) | undefined
  isMergeableObject?(value: object): boolean
  cloneUnlessOtherwiseSpecified?: (value: any, options: Options) => any
}
declare function deepmerge(target: any, source: any, options?: Options): any
declare const merge: typeof deepmerge

declare const instOf: (value: any, cls: any) => boolean

/**
 *
 * @param defaults
 * @param targets
 */
declare const defaults: (defaults_: any, targets: any) => any

declare function uid(len?: number): string

export {
  Path as FormPath,
  Pattern as FormPathPattern,
  IMiddleware,
  Subscribable,
  Subscriber,
  Subscription,
  applyMiddleware,
  camelCase,
  clone,
  defaults,
  deprecate,
  each,
  every,
  find,
  findIndex,
  getType,
  globalThisPolyfill,
  includes,
  instOf,
  isArr,
  isBool,
  isEmpty,
  isEqual,
  isFn,
  isHTMLElement,
  isMap,
  isNum,
  isNumberLike,
  isObj,
  isPlainObj,
  isReactElement,
  isRegExp,
  isSet,
  isStr,
  isValid,
  isWeakMap,
  isWeakSet,
  lowerCase,
  map,
  merge,
  paramCase,
  pascalCase,
  reduce,
  shallowClone,
  some,
  stringLength,
  toArr,
  uid,
  upperCase,
}
