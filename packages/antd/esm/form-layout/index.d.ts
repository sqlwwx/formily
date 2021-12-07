import React from 'react'
export interface IFormLayoutProps {
  prefixCls?: string
  className?: string
  style?: React.CSSProperties
  colon?: boolean
  labelAlign?: 'right' | 'left' | ('right' | 'left')[]
  wrapperAlign?: 'right' | 'left' | ('right' | 'left')[]
  labelWrap?: boolean
  labelWidth?: number
  wrapperWidth?: number
  wrapperWrap?: boolean
  labelCol?: number | number[]
  wrapperCol?: number | number[]
  fullness?: boolean
  size?: 'small' | 'default' | 'large'
  layout?:
    | 'vertical'
    | 'horizontal'
    | 'inline'
    | ('vertical' | 'horizontal' | 'inline')[]
  direction?: 'rtl' | 'ltr'
  inset?: boolean
  shallow?: boolean
  tooltipLayout?: 'icon' | 'text'
  tooltipIcon?: React.ReactNode
  feedbackLayout?: 'loose' | 'terse' | 'popover' | 'none'
  bordered?: boolean
  breakpoints?: number[]
  spaceGap?: number
  gridColumnGap?: number
  gridRowGap?: number
}
export declare const FormLayoutDeepContext: React.Context<IFormLayoutProps>
export declare const FormLayoutShallowContext: React.Context<IFormLayoutProps>
export declare const useFormDeepLayout: () => IFormLayoutProps
export declare const useFormShallowLayout: () => IFormLayoutProps
export declare const useFormLayout: () => {
  prefixCls?: string
  className?: string
  style?: React.CSSProperties
  colon?: boolean
  labelAlign?: 'right' | 'left' | ('right' | 'left')[]
  wrapperAlign?: 'right' | 'left' | ('right' | 'left')[]
  labelWrap?: boolean
  labelWidth?: number
  wrapperWidth?: number
  wrapperWrap?: boolean
  labelCol?: number | number[]
  wrapperCol?: number | number[]
  fullness?: boolean
  size?: 'small' | 'default' | 'large'
  layout?:
    | 'vertical'
    | 'horizontal'
    | 'inline'
    | ('vertical' | 'horizontal' | 'inline')[]
  direction?: 'rtl' | 'ltr'
  inset?: boolean
  shallow?: boolean
  tooltipLayout?: 'icon' | 'text'
  tooltipIcon?: React.ReactNode
  feedbackLayout?: 'loose' | 'terse' | 'popover' | 'none'
  bordered?: boolean
  breakpoints?: number[]
  spaceGap?: number
  gridColumnGap?: number
  gridRowGap?: number
}
export declare const FormLayout: React.FC<IFormLayoutProps> & {
  useFormLayout: () => IFormLayoutProps
  useFormDeepLayout: () => IFormLayoutProps
  useFormShallowLayout: () => IFormLayoutProps
}
export default FormLayout
