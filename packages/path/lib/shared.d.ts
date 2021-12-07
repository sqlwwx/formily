export declare const isFn: (obj: unknown) => obj is (...args: any[]) => any
export declare const isArr: (arg: any) => arg is any[]
export declare const isPlainObj: (obj: unknown) => obj is object
export declare const isStr: (obj: unknown) => obj is string
export declare const isBool: (obj: unknown) => obj is boolean
export declare const isNum: (obj: unknown) => obj is number
export declare const isObj: (val: unknown) => val is object
export declare const isRegExp: (obj: unknown) => obj is RegExp
export declare const isNumberLike: (t: any) => boolean
export declare const toArr: <T>(val: T | T[]) => T[]
export declare const isAssignable: (val: any) => boolean
export declare const isEqual: (a: any, b: any) => boolean
export declare const isSegmentEqual: (a: any, b: any) => boolean
