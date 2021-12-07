import React from 'react'
export interface IFormItemProps {
  className?: string
  style?: React.CSSProperties
  prefix?: string
  label?: React.ReactNode
  colon?: boolean
  layout?: 'vertical' | 'horizontal' | 'inline'
  tooltip?: React.ReactNode
  tooltipLayout?: 'icon' | 'text'
  tooltipIcon?: React.ReactNode
  labelStyle?: React.CSSProperties
  labelAlign?: 'left' | 'right'
  labelWrap?: boolean
  labelWidth?: number | string
  wrapperWidth?: number | string
  labelCol?: number
  wrapperCol?: number
  wrapperAlign?: 'left' | 'right'
  wrapperWrap?: boolean
  wrapperStyle?: React.CSSProperties
  fullness?: boolean
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
  size?: 'small' | 'default' | 'large'
  inset?: boolean
  extra?: React.ReactNode
  feedbackText?: React.ReactNode
  feedbackLayout?: 'loose' | 'terse' | 'popover' | 'none' | (string & {})
  feedbackStatus?: 'error' | 'warning' | 'success' | 'pending' | (string & {})
  feedbackIcon?: React.ReactNode
  asterisk?: boolean
  gridSpan?: number
  bordered?: boolean
}
declare type ComposeFormItem = React.FC<IFormItemProps> & {
  BaseItem?: React.FC<IFormItemProps>
}
export declare const BaseItem: React.FC<IFormItemProps>
export declare const FormItem: ComposeFormItem
export default FormItem
