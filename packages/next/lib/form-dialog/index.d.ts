import React from 'react'
import { IFormProps, Form } from '@formily/core'
import { IMiddleware } from '@formily/shared'
import { DialogProps } from '@alifd/next/lib/dialog'
declare type FormDialogRenderer =
  | React.ReactElement
  | ((form: Form) => React.ReactElement)
declare type ModalTitle = string | number | React.ReactElement
export interface IDialogProps extends DialogProps {
  onOk?: (event: React.MouseEvent) => void | boolean
  onCancel?: (event: React.MouseEvent) => void | boolean
  loadingText?: React.ReactText
}
export interface IFormDialog {
  forOpen(middleware: IMiddleware<IFormProps>): IFormDialog
  forConfirm(middleware: IMiddleware<Form>): IFormDialog
  forCancel(middleware: IMiddleware<Form>): IFormDialog
  open(props?: IFormProps): Promise<any>
  close(): void
}
export declare function FormDialog(
  title: IDialogProps,
  id: string,
  renderer: FormDialogRenderer
): IFormDialog
export declare function FormDialog(
  title: IDialogProps,
  renderer: FormDialogRenderer
): IFormDialog
export declare function FormDialog(
  title: ModalTitle,
  id: string,
  renderer: FormDialogRenderer
): IFormDialog
export declare function FormDialog(
  title: ModalTitle,
  renderer: FormDialogRenderer
): IFormDialog
export declare namespace FormDialog {
  var Footer: React.FC<{}>
  var Portal: {
    (
      props: React.PropsWithChildren<import('../__builtins__').IPortalProps>
    ): JSX.Element
    defaultProps: {
      id: string | symbol
    }
  }
}
export default FormDialog
