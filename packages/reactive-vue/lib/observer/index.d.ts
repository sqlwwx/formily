import collectData from './collectData'
import { IObserverOptions } from '../types'
export declare function observer<C>(
  baseComponent: C,
  options?: IObserverOptions & {
    forwardRef: true
  }
): C
export { collectData }
