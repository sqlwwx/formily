import { Ref } from 'vue-demi'
interface IProps {
  breakpoints?: number[]
  layout?:
    | 'vertical'
    | 'horizontal'
    | 'inline'
    | ('vertical' | 'horizontal' | 'inline')[]
  labelCol?: number | number[]
  wrapperCol?: number | number[]
  labelAlign?: 'right' | 'left' | ('right' | 'left')[]
  wrapperAlign?: 'right' | 'left' | ('right' | 'left')[]
  [props: string]: any
}
interface IUseResponsiveFormLayout {
  (
    props: IProps,
    refs: {
      [key: string]: Vue | Element | Vue[] | Element[]
    }
  ): {
    props: Ref<IProps>
  }
}
export declare const useResponsiveFormLayout: IUseResponsiveFormLayout
export {}
