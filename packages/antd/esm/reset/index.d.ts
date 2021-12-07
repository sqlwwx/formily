import React from 'react'
import { ButtonProps } from 'antd/lib/button'
import { IFieldResetOptions, IFormFeedback } from '@formily/core'
export interface IResetProps extends IFieldResetOptions, ButtonProps {
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => any
  onResetValidateSuccess?: (payload: any) => void
  onResetValidateFailed?: (feedbacks: IFormFeedback[]) => void
}
export declare const Reset: React.FC<IResetProps>
export default Reset
