import { IObserverOptions } from '../types'
export declare const useObserver: <T extends () => any>(
  view: T,
  options?: IObserverOptions
) => ReturnType<T>
