import React from 'react'
import { CollapsePanelProps, CollapseProps } from 'antd'
import { ArrayBaseMixins } from '../array-base'
export interface IArrayCollapseProps extends CollapseProps {
  defaultOpenPanelCount?: number
}
declare type ComposedArrayCollapse = React.FC<IArrayCollapseProps> &
  ArrayBaseMixins & {
    CollapsePanel?: React.FC<CollapsePanelProps>
  }
export declare const ArrayCollapse: ComposedArrayCollapse
export default ArrayCollapse
