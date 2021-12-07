export declare const toArray: (value: any) => any[]
export declare class ArraySet<T> {
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
