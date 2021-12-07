import { SlotTypes } from '../__builtins__/shared'
import type {
  Radio as ElRadioProps,
  RadioGroup as ElRadioGroupProps,
} from 'element-ui'
export declare type RadioGroupProps = ElRadioGroupProps & {
  value: any
  options?: (
    | (Omit<ElRadioProps, 'value'> & {
        value: ElRadioProps['label']
        label: SlotTypes
      })
    | string
  )[]
  optionType: 'defalt' | 'button'
}
export declare type RadioProps = ElRadioProps
export declare const Radio: typeof ElRadioProps & {
  Group:
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
}
export default Radio
