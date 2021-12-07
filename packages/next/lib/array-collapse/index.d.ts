import React from 'react'
import { ArrayBaseMixins } from '../array-base'
import { CollapseProps, PanelProps } from '@alifd/next/lib/collapse'
export interface IArrayCollapseProps extends CollapseProps {
  defaultOpenPanelCount?: number
}
declare type ComposedArrayCollapse = React.FC<IArrayCollapseProps> &
  ArrayBaseMixins & {
    CollapsePanel?: React.FC<PanelProps>
  }
export declare const ArrayCollapse: ComposedArrayCollapse
export default ArrayCollapse
