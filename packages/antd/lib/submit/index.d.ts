import React from 'react'
import { ButtonProps } from 'antd/lib/button'
import { IFormFeedback } from '@formily/core'
export interface ISubmitProps extends ButtonProps {
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => any
  onSubmit?: (values: any) => any
  onSubmitSuccess?: (payload: any) => void
  onSubmitFailed?: (feedbacks: IFormFeedback[]) => void
}
export declare const Submit: React.FC<ISubmitProps>
export default Submit
