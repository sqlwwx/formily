import React from 'react'
import {
  ItemProps as TabPaneProps,
  TabProps as TabsProps,
} from '@alifd/next/lib/tab'
export interface IFormTab {
  activeKey: React.ReactText
  setActiveKey(key: React.ReactText): void
}
export interface IFormTabProps extends TabsProps {
  formTab?: IFormTab
}
export interface IFormTabPaneProps extends TabPaneProps {
  key: React.ReactText
}
declare type ComposedFormTab = React.FC<IFormTabProps> & {
  TabPane?: React.FC<IFormTabPaneProps>
  createFormTab?: (defaultActiveKey?: React.ReactText) => IFormTab
}
export declare const FormTab: ComposedFormTab
export default FormTab
