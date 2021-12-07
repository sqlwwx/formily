import type { TimePicker as ElTimePickerProps } from 'element-ui'
export declare type TimePickerProps = ElTimePickerProps
export declare const TimePicker:
  | {
      functional: boolean
      render(h: any, context: any): any
    }
  | (import('vue').ComponentOptions<
      import('vue').default,
      import('@vue/composition-api').ShallowUnwrapRef<() => any> &
        import('@vue/composition-api').Data,
      {},
      {},
      {},
      {}
    > &
      Omit<import('vue').VueConstructor<import('vue').default>, never> &
      (new (
        ...args: any[]
      ) => import('@vue/composition-api').ComponentRenderProxy<
        {},
        import('@vue/composition-api').ShallowUnwrapRef<() => any>,
        import('@vue/composition-api').Data,
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        true
      >))
export default TimePicker
