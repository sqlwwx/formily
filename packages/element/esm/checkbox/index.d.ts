import { SlotTypes } from '../__builtins__/shared'
import type {
  Checkbox as _ElCheckboxProps,
  CheckboxGroup as ElCheckboxGroupProps,
} from 'element-ui'
declare type ElCheckboxProps = Omit<_ElCheckboxProps, 'value'> & {
  value: ElCheckboxProps['label']
}
export interface CheckboxProps extends ElCheckboxProps {
  option: Omit<_ElCheckboxProps, 'value'> & {
    value: ElCheckboxProps['label']
    label: SlotTypes
  }
}
export declare type CheckboxGroupProps = ElCheckboxGroupProps & {
  value: any[]
  options?: Array<CheckboxProps | string>
  optionType: 'default' | 'button'
}
export declare const Checkbox: any
export {}
