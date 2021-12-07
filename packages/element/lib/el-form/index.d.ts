import { Form } from '@formily/core'
import type { Form as _ElFormProps } from 'element-ui'
import type { FunctionalComponentOptions, Component } from 'vue'
export declare type ElFormProps = _ElFormProps & {
  form?: Form
  component: Component
  onAutoSubmit?: (values: any) => any
}
export declare const ElForm: FunctionalComponentOptions<ElFormProps>
export default ElForm
