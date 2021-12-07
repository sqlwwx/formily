import type { FormItem as _ElFormItemProps } from 'element-ui'
export declare type ElFormItemProps = _ElFormItemProps & {
  title: string
}
export declare const ElFormItem:
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
export default ElFormItem
