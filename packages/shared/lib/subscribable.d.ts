import { Subscriber, Subscription } from './checkers'
export declare class Subscribable<Payload = any> {
  subscribers: {
    index?: number
    [key: number]: Subscriber<Payload>
  }
  subscription: Subscription<Payload>
  subscribe: (callback?: Subscriber<Payload>) => number
  unsubscribe: (index?: number) => void
  notify: (payload?: Payload, silent?: boolean) => void
}
