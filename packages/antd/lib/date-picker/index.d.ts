/// <reference types="react" />
import {
  DatePickerProps as AntdDatePickerProps,
  RangePickerProps,
} from 'antd/lib/date-picker'
declare type ComposedDatePicker = React.FC<AntdDatePickerProps> & {
  RangePicker?: React.FC<RangePickerProps>
}
export declare const DatePicker: ComposedDatePicker
export default DatePicker
