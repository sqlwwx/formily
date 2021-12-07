import React from 'react'
import { GeneralField, Form } from '@formily/core'
interface IReactiveFieldProps {
  field: GeneralField
  children?:
    | ((field: GeneralField, form: Form) => React.ReactChild)
    | React.ReactNode
}
export declare const ReactiveField: React.MemoExoticComponent<
  React.FunctionComponent<
    IReactiveFieldProps & {
      ref?: React.RefAttributes<any>
    }
  >
>
export {}
