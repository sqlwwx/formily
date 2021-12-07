import React from 'react'
import { InputProps } from '@alifd/next/lib/input'
import { SelectProps } from '@alifd/next/lib/select'
import { TreeSelectProps } from '@alifd/next/lib/tree-select'
import { CascaderProps } from '@alifd/next/lib/cascader'
import {
  DatePickerProps,
  RangePickerProps as DateRangePickerProps,
} from '@alifd/next/lib/date-picker'
import { TimePickerProps } from '@alifd/next/lib/time-picker'
export declare const PreviewText: {
  (props: React.PropsWithChildren<any>): JSX.Element
  Input: React.FC<InputProps>
  Select: React.FC<SelectProps>
  TreeSelect: React.FC<TreeSelectProps>
  Cascader: React.FC<CascaderProps>
  DatePicker: React.FC<DatePickerProps>
  DateRangePicker: React.FC<DateRangePickerProps>
  TimePicker: React.FC<TimePickerProps>
  Placeholder: React.Provider<React.ReactNode>
  usePlaceholder: (value?: any) => any
}
export default PreviewText
