import React from 'react'
import { BalloonProps as PopoverProps } from '@alifd/next/lib/balloon'
import { IFormItemProps } from '../form-item'
/**
 * 默认Inline展示
 */
declare type IPopoverProps = PopoverProps
declare type ComposedEditable = React.FC<IFormItemProps> & {
  Popover?: React.FC<
    IPopoverProps & {
      title?: React.ReactNode
    }
  >
}
export declare const Editable: ComposedEditable
export default Editable
