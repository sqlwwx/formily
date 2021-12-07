import React from 'react'
import {
  CollapseProps,
  PanelProps as CollapsePanelProps,
} from '@alifd/next/lib/collapse'
declare type ActiveKeys = string | number | Array<string | number>
declare type ActiveKey = string | number
export interface IFormCollapse {
  activeKeys: ActiveKeys
  hasActiveKey(key: ActiveKey): boolean
  setActiveKeys(key: ActiveKeys): void
  addActiveKey(key: ActiveKey): void
  removeActiveKey(key: ActiveKey): void
  toggleActiveKey(key: ActiveKey): void
}
export interface IFormCollapseProps extends CollapseProps {
  formCollapse?: IFormCollapse
}
declare type ComposedFormCollapse = React.FC<IFormCollapseProps> & {
  CollapsePanel?: React.FC<CollapsePanelProps>
  createFormCollapse?: (
    defaultActiveKeys?: CollapseProps['expandedKeys']
  ) => IFormCollapse
}
export declare const FormCollapse: ComposedFormCollapse
export default FormCollapse
