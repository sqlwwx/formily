import React from 'react'
import { IFormProps, Form } from '@formily/core'
import { IMiddleware } from '@formily/shared'
import { DrawerProps } from 'antd'
declare type FormDrawerRenderer =
  | React.ReactElement
  | ((form: Form) => React.ReactElement)
declare type DrawerTitle = string | number | React.ReactElement
declare type EventType =
  | React.KeyboardEvent<HTMLDivElement>
  | React.MouseEvent<HTMLDivElement | HTMLButtonElement>
export interface IFormDrawer {
  forOpen(middleware: IMiddleware<IFormProps>): IFormDrawer
  open(props?: IFormProps): Promise<any>
  close(): void
}
export interface IDrawerProps extends DrawerProps {
  onClose?: (e: EventType) => void | boolean
  loadingText?: React.ReactNode
}
export declare function FormDrawer(
  title: IDrawerProps,
  id: string,
  renderer: FormDrawerRenderer
): IFormDrawer
export declare function FormDrawer(
  title: IDrawerProps,
  id: FormDrawerRenderer
): IFormDrawer
export declare function FormDrawer(
  title: DrawerTitle,
  id: string,
  renderer: FormDrawerRenderer
): IFormDrawer
export declare function FormDrawer(
  title: DrawerTitle,
  id: FormDrawerRenderer
): IFormDrawer
export declare namespace FormDrawer {
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
export default FormDrawer
