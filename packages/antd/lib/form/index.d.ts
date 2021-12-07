import React from 'react'
import { Form as FormType, IFormFeedback } from '@formily/core'
import { JSXComponent } from '@formily/react'
import { IFormLayoutProps } from '../form-layout'
export interface FormProps extends IFormLayoutProps {
  form?: FormType
  component?: JSXComponent
  onAutoSubmit?: (values: any) => any
  onAutoSubmitFailed?: (feedbacks: IFormFeedback[]) => void
  previewTextPlaceholder?: React.ReactNode
}
export declare const Form: React.FC<FormProps>
export default Form
