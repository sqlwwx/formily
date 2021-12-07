import { LifeCycleHandler } from '../types'
declare type LifeCycleParams<Payload> = Array<
  | string
  | LifeCycleHandler<Payload>
  | {
      [key: string]: LifeCycleHandler<Payload>
    }
>
export declare class LifeCycle<Payload = any> {
  private listener
  constructor(...params: LifeCycleParams<Payload>)
  buildListener: (params: any[]) => (
    payload: {
      type: string
      payload: Payload
    },
    ctx: any
  ) => void
  notify: <Payload_1>(type: any, payload?: Payload_1, ctx?: any) => void
}
export {}
