import { LifeCycle, Form } from '../models'
import { AnyFunction } from '../types'
export declare const createEffectHook: <
  F extends (payload: any, ...ctxs: any[]) => AnyFunction
>(
  type: string,
  callback?: F
) => (...args: Parameters<ReturnType<F>>) => void
export declare const createEffectContext: <T = any>(
  defaultValue?: T
) => {
  provide(value?: T): void
  consume(): T
}
export declare const useEffectForm: () => Form<any>
export declare const runEffects: <Context>(
  context?: Context,
  ...args: ((context: Context) => void)[]
) => LifeCycle[]
