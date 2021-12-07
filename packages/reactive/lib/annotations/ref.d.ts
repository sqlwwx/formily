export interface IRef {
  <T>(target: T): {
    value: T
  }
}
export declare const ref: IRef
