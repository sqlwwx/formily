/// <reference types="react" />
import { InputProps, TextAreaProps } from '@alifd/next/lib/input'
declare type ComposedInput = React.FC<InputProps> & {
  TextArea?: React.FC<TextAreaProps>
}
export declare const Input: ComposedInput
export default Input
