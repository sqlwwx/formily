import { Form, IFormProps } from '@formily/core'
import { IMiddleware } from '@formily/shared'
import type { Drawer as DrawerProps, Button as ButtonProps } from 'element-ui'
import Vue, { Component, VNode } from 'vue'
declare type FormDrawerContentProps = {
  form: Form
}
declare type FormDrawerContent =
  | Component
  | ((props: FormDrawerContentProps) => VNode)
declare type DrawerTitle = string | number | Component | VNode | (() => VNode)
declare type IFormDrawerProps = Omit<DrawerProps, 'title'> & {
  title?: DrawerTitle
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
export interface IFormDrawer {
  forOpen(middleware: IMiddleware<IFormProps>): IFormDrawer
  forConfirm(middleware: IMiddleware<IFormProps>): IFormDrawer
  forCancel(middleware: IMiddleware<IFormProps>): IFormDrawer
  open(props?: IFormProps): Promise<any>
  close(): void
}
export interface IFormDrawerComponentProps {
  content: FormDrawerContent
  resolve: () => any
  reject: () => any
}
export declare function FormDrawer(
  title: IFormDrawerProps | DrawerTitle,
  content: FormDrawerContent
): IFormDrawer
export declare function FormDrawer(
  title: IFormDrawerProps | DrawerTitle,
  id: string | symbol,
  content: FormDrawerContent
): IFormDrawer
export declare function FormDrawer(
  title: DrawerTitle,
  id: string,
  content: FormDrawerContent
): IFormDrawer
export declare namespace FormDrawer {
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
  var Protal: import('vue').ComponentOptions<
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
export default FormDrawer
