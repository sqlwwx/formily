import moment from 'moment'
import { connect, mapProps, mapReadPretty } from '@formily/react'
import { isArr } from '@formily/shared'
import { DatePicker as AntdDatePicker } from 'antd'
import {
  DatePickerProps as AntdDatePickerProps,
  RangePickerProps,
} from 'antd/lib/date-picker'
import { PreviewText } from '../preview-text'

const momentable = (value: any) => {
  if (isArr(value)) {
    return value.map((val) => moment(val))
  }
  return value ? moment(value) : undefined
}

const formatDate = (date: any, picker: any, i = 0) => {
  if (!date) {
    return date
  }
  if (!picker) {
    return date.valueOf()
  }
  let _picker = picker
  if (isArr(picker)) {
    _picker = picker[i]
  }
  if (!_picker) {
    return date.valueOf()
  }
  if (i === 1) {
    return date.endOf(_picker).valueOf()
  }
  return date.startOf(_picker).valueOf()
}

const formatMomentValue = (value: any, picker: any): number | number[] => {
  if (isArr(value)) {
    return [
      formatDate(value[0], picker, 0),
      formatDate(value[1], picker, 1),
    ].filter((v) => v)
  } else {
    return formatDate(value, picker)
  }
}

type DatePickerProps<PickerProps> = Exclude<
  PickerProps,
  'value' | 'onChange'
> & {
  value: string
  onChange: (value: string | string[]) => void
}

type ComposedDatePicker = React.FC<
  React.PropsWithChildren<AntdDatePickerProps>
> & {
  RangePicker?: React.FC<React.PropsWithChildren<RangePickerProps>>
}

const mapDateFormat = function () {
  const getDefaultFormat = (props: DatePickerProps<AntdDatePickerProps>) => {
    if (props['picker'] === 'month') {
      return 'YYYY-MM'
    } else if (props['picker'] === 'quarter') {
      return 'YYYY-\\QQ'
    } else if (props['picker'] === 'year') {
      return 'YYYY'
    } else if (props['picker'] === 'week') {
      return 'gggg-wo'
    }
    return props['showTime'] ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
  }
  return (props: any) => {
    const picker = props.picker || (props.showTime ? '' : 'day')
    const format = getDefaultFormat(props)
    const onChange = props.onChange
    return {
      ...props,
      format: format,
      value: momentable(props.value),
      onChange: (value: moment.Moment | moment.Moment[]) => {
        if (onChange) {
          onChange(formatMomentValue(value, picker))
        }
      },
    }
  }
}

export const DatePicker: ComposedDatePicker = connect(
  AntdDatePicker,
  mapProps(mapDateFormat()),
  mapReadPretty(PreviewText.DatePicker)
)

DatePicker.RangePicker = connect(
  AntdDatePicker.RangePicker,
  mapProps(mapDateFormat()),
  mapReadPretty(PreviewText.DateRangePicker)
)

export default DatePicker
