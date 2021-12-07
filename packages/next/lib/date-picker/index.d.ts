/// <reference types="react" />
import {
  DatePickerProps as NextDatePickerProps,
  MonthPickerProps,
  YearPickerProps,
  RangePickerProps,
} from '@alifd/next/lib/date-picker'
declare type ComposedDatePicker = React.FC<NextDatePickerProps> & {
  RangePicker?: React.FC<RangePickerProps>
  MonthPicker?: React.FC<MonthPickerProps>
  YearPicker?: React.FC<YearPickerProps>
  WeekPicker?: React.FC<NextDatePickerProps>
}
export declare const DatePicker: ComposedDatePicker
export default DatePicker
