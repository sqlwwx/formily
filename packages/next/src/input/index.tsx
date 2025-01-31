import { connect, mapReadPretty, mapProps } from '@formily-x/react'
import { Input as NextInput } from '@alifd/next'
import { InputProps, TextAreaProps } from '@alifd/next/lib/input'
import { PreviewText } from '../preview-text'
import { mapSize, mapStatus } from '../__builtins__'

type ComposedInput = React.FC<React.PropsWithChildren<InputProps>> & {
  TextArea?: React.FC<React.PropsWithChildren<TextAreaProps>>
}

export const Input: ComposedInput = connect(
  NextInput,
  mapProps(mapSize, mapStatus),
  mapReadPretty(PreviewText.Input)
)

Input.TextArea = connect(
  NextInput.TextArea,
  mapProps(mapSize, mapStatus),
  mapReadPretty(PreviewText.Input)
)

export default Input
