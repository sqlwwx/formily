export interface IBox {
  <T>(target: T): {
    get(): T
    set(value: T): void
  }
}
export declare const box: IBox
