import { Subscribable } from '@formily/shared'
import { LifeCycle } from './LifeCycle'
import { IHeartProps } from '../types'
export declare class Heart<Payload = any, Context = any> extends Subscribable {
  lifecycles: LifeCycle<Payload>[]
  outerLifecycles: Map<any, LifeCycle<Payload>[]>
  context: Context
  constructor({ lifecycles, context }?: IHeartProps<Context>)
  buildLifeCycles: (lifecycles: LifeCycle[]) => any
  addLifeCycles: (id: any, lifecycles?: LifeCycle[]) => void
  hasLifeCycles: (id: any) => boolean
  removeLifeCycles: (id: any) => void
  setLifeCycles: (lifecycles?: LifeCycle[]) => void
  publish: <P, C>(type: any, payload?: P, context?: C) => void
  clear: () => void
}
