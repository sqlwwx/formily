import { Popover } from 'element-ui'
import type { Popover as PopoverProps } from 'element-ui'
import { FormItemProps } from '../form-item'
export declare type EditableProps = FormItemProps
export declare type EditablePopoverProps = PopoverProps
export declare const Editable: import('vue').ComponentOptions<
  import('vue').default,
  import('@vue/composition-api').ShallowUnwrapRef<FormItemProps> &
    import('@vue/composition-api').Data,
  {},
  {},
  {},
  {} & {}
> &
  Omit<import('vue').VueConstructor<import('vue').default>, never> &
  (new (...args: any[]) => import('@vue/composition-api').ComponentRenderProxy<
    {} & {},
    import('@vue/composition-api').ShallowUnwrapRef<FormItemProps>,
    import('@vue/composition-api').Data,
    {},
    {},
    {},
    {},
    {},
    {} & {},
    {},
    true
  >) & {
    Popover: import('vue').ComponentOptions<
      import('vue').default,
      import('@vue/composition-api').ShallowUnwrapRef<Popover> &
        import('@vue/composition-api').Data,
      {},
      {},
      {},
      {} & {}
    > &
      Omit<import('vue').VueConstructor<import('vue').default>, never> &
      (new (
        ...args: any[]
      ) => import('@vue/composition-api').ComponentRenderProxy<
        {} & {},
        import('@vue/composition-api').ShallowUnwrapRef<Popover>,
        import('@vue/composition-api').Data,
        {},
        {},
        {},
        {},
        {},
        {} & {},
        {},
        true
      >)
  }
export default Editable
