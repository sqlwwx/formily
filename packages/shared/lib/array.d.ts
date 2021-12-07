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
export declare const toArr: (val: any) => any[]
export declare function each(
  val: string,
  iterator: EachStringIterator,
  revert?: boolean
): void
export declare function each<T>(
  val: T[],
  iterator: EachArrayIterator<T>,
  revert?: boolean
): void
export declare function each<T extends {}, TValue extends T[keyof T]>(
  val: T,
  iterator: EachObjectIterator<TValue>,
  revert?: boolean
): void
export declare function map<T>(
  val: string,
  iterator: MapStringIterator<T>,
  revert?: boolean
): T[]
export declare function map<TItem, TResult>(
  val: TItem[],
  iterator: MapArrayIterator<TItem, TResult>,
  revert?: boolean
): TResult[]
export declare function map<T extends {}, TResult>(
  val: T,
  iterator: MapObjectIterator<T[keyof T], TResult>,
  revert?: boolean
): Record<keyof T, TResult>
export declare function reduce<T, U>(
  val: T[],
  iterator: MemoArrayIterator<T, U>,
  accumulator?: U,
  revert?: boolean
): U
export declare function reduce<T>(
  val: string,
  iterator: MemoStringIterator<T>,
  accumulator?: T,
  revert?: boolean
): T
export declare function reduce<
  T extends {},
  TValue extends T[keyof T],
  TResult = any
>(
  val: T,
  iterator: MemoObjectIterator<TValue, TResult>,
  accumulator?: TResult,
  revert?: boolean
): TResult
export declare function every<T extends string>(
  val: T,
  iterator: EachStringIterator,
  revert?: boolean
): boolean
export declare function every<T>(
  val: T[],
  iterator: EachArrayIterator<T>,
  revert?: boolean
): boolean
export declare function every<T extends {}>(
  val: T,
  iterator: EachObjectIterator,
  revert?: boolean
): boolean
export declare function some<T extends string>(
  val: T,
  iterator: EachStringIterator,
  revert?: boolean
): boolean
export declare function some<T>(
  val: T[],
  iterator: EachArrayIterator<T>,
  revert?: boolean
): boolean
export declare function some<T extends {}>(
  val: T,
  iterator: EachObjectIterator,
  revert?: boolean
): boolean
export declare function findIndex<T extends string>(
  val: T,
  iterator: EachStringIterator,
  revert?: boolean
): number
export declare function findIndex<T>(
  val: T[],
  iterator: EachArrayIterator<T>,
  revert?: boolean
): number
export declare function findIndex<T extends {}>(
  val: T,
  iterator: EachObjectIterator,
  revert?: boolean
): keyof T
export declare function find<T extends string>(
  val: T,
  iterator: EachStringIterator,
  revert?: boolean
): any
export declare function find<T>(
  val: T[],
  iterator: EachArrayIterator<T>,
  revert?: boolean
): T
export declare function find<T extends {}>(
  val: T,
  iterator: EachObjectIterator,
  revert?: boolean
): T[keyof T]
export declare function includes<T extends string>(
  val: T,
  searchElement: string,
  revert?: boolean
): boolean
export declare function includes<T>(
  val: T[],
  searchElement: T,
  revert?: boolean
): boolean
export {}
