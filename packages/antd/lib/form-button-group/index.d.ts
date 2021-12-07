/**
 * 1. FormItem网格布局
 * 2. 居中，居右，居左布局
 * 3. 行内布局
 * 4. 吸底布局
 */
import React from 'react'
import { StickyBoxMode } from 'react-sticky-box'
import { SpaceProps } from 'antd/lib/space'
import { IFormItemProps } from '../form-item'
interface IStickyProps {
  offsetTop?: number
  offsetBottom?: number
  bottom?: boolean
  onChangeMode?: (
    oldMode: StickyBoxMode | undefined,
    newMode: StickyBoxMode
  ) => any
  style?: React.CSSProperties
  className?: string
  padding?: number
  align?: React.CSSProperties['textAlign']
}
declare type IFormButtonGroupProps = Omit<SpaceProps, 'align' | 'size'> & {
  align?: React.CSSProperties['textAlign']
  gutter?: number
}
declare type ComposedButtonGroup = React.FC<IFormButtonGroupProps> & {
  Sticky: React.FC<IStickyProps>
  FormItem: React.FC<
    IFormItemProps & {
      gutter?: number
    }
  >
}
export declare const FormButtonGroup: ComposedButtonGroup
export default FormButtonGroup
