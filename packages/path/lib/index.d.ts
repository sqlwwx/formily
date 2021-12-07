import { Segments, Node, Pattern } from './types'
export declare class Path {
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
export { Pattern }
