/// <reference types="react" />
import {
  CheckboxProps,
  GroupProps as CheckboxGroupProps,
} from '@alifd/next/lib/checkbox'
declare type ComposedCheckbox = React.FC<CheckboxProps> & {
  Group?: React.FC<CheckboxGroupProps>
}
export declare const Checkbox: ComposedCheckbox
export default Checkbox
