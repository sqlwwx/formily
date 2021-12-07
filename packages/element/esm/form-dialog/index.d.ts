import { Form, IFormProps } from '@formily/core'
import { IMiddleware } from '@formily/shared'
import type { Dialog as DialogProps, Button as ButtonProps } from 'element-ui'
import Vue, { Component, VNode } from 'vue'
declare type FormDialogContentProps = {
  form: Form
}
declare type FormDialogContent =
  | Component
  | ((props: FormDialogContentProps) => VNode)
declare type DialogTitle = string | number | Component | VNode | (() => VNode)
declare type IFormDialogProps = Omit<DialogProps, 'title'> & {
  title?: DialogTitle
  footer?: null | Component | VNode | (() => VNode)
  cancelText?: string | Component | VNode | (() => VNode)
  cancelButtonProps?: ButtonProps
  okText?: string | Component | VNode | (() => VNode)
  okButtonProps?: ButtonProps
  onOpen?: () => void
  onOpend?: () => void
  onClose?: () => void
  onClosed?: () => void
  onCancel?: () => void
  onOK?: () => void
  loadingText?: string
}
export interface IFormDialog {
  forOpen(middleware: IMiddleware<IFormProps>): IFormDialog
  forConfirm(middleware: IMiddleware<IFormProps>): IFormDialog
  forCancel(middleware: IMiddleware<IFormProps>): IFormDialog
  open(props?: IFormProps): Promise<any>
  close(): void
}
export interface IFormDialogComponentProps {
  content: FormDialogContent
  resolve: () => any
  reject: () => any
}
export declare function FormDialog(
  title: IFormDialogProps | DialogTitle,
  content: FormDialogContent
): IFormDialog
export declare function FormDialog(
  title: IFormDialogProps | DialogTitle,
  id: string | symbol,
  content: FormDialogContent
): IFormDialog
export declare function FormDialog(
  title: DialogTitle,
  id: string,
  content: FormDialogContent
): IFormDialog
export declare namespace FormDialog {
  var Footer: import('vue').ComponentOptions<
    Vue,
    import('@vue/composition-api').ShallowUnwrapRef<() => any> &
      import('@vue/composition-api').Data,
    {},
    {},
    {},
    {} & {}
  > &
    Omit<import('vue').VueConstructor<Vue>, never> &
    (new (
      ...args: any[]
    ) => import('@vue/composition-api').ComponentRenderProxy<
      {} & {},
      import('@vue/composition-api').ShallowUnwrapRef<() => any>,
      import('@vue/composition-api').Data,
      {},
      {},
      {},
      {},
      {},
      {} & {},
      {},
      true
    >)
  var Portal: import('vue').ComponentOptions<
    Vue,
    void & import('@vue/composition-api').Data,
    {},
    {},
    {
      id: {
        type: (SymbolConstructor | StringConstructor)[]
        default: string | symbol
      }
    },
    {
      id: string | symbol
    } & {}
  > &
    Omit<import('vue').VueConstructor<Vue>, never> &
    (new (
      ...args: any[]
    ) => import('@vue/composition-api').ComponentRenderProxy<
      {
        id: string | symbol
      } & {},
      void,
      import('@vue/composition-api').Data,
      {},
      {},
      {},
      {},
      {},
      {
        id: string | symbol
      } & {},
      {
        id: string | symbol
      },
      true
    >)
}
export default FormDialog
