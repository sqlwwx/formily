import { connect, mapReadPretty } from '@formily-x/react'
import { InputNumber } from 'antd'
import { PreviewText } from '../preview-text'

export const NumberPicker = connect(
  InputNumber,
  mapReadPretty(PreviewText.NumberPicker)
)

export default NumberPicker
