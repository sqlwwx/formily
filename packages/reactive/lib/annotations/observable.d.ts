export interface IObservable {
  <T>(target: T): T
}
export declare const observable: IObservable
