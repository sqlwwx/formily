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
export declare const merge: typeof deepmerge
export {}
