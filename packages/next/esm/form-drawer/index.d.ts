import React from 'react'
import { IFormProps, Form } from '@formily/core'
import { IMiddleware } from '@formily/shared'
import { DrawerProps } from '@alifd/next/lib/drawer'
declare type FormDrawerRenderer =
  | React.ReactElement
  | ((form: Form) => React.ReactElement)
declare type DrawerTitle = string | number | React.ReactElement
export interface IDrawerProps extends DrawerProps {
  onClose?: (reason: string, e: React.MouseEvent) => void | boolean
  loadingText?: React.ReactNode
}
export interface IFormDrawer {
  forOpen(middleware: IMiddleware<IFormProps>): IFormDrawer
  open(props?: IFormProps): Promise<any>
  close(): void
}
export declare function FormDrawer(
  title: IDrawerProps,
  id: string,
  renderer: FormDrawerRenderer
): IFormDrawer
export declare function FormDrawer(
  title: IDrawerProps,
  renderer: FormDrawerRenderer
): IFormDrawer
export declare function FormDrawer(
  title: DrawerTitle,
  id: string,
  renderer: FormDrawerRenderer
): IFormDrawer
export declare function FormDrawer(
  title: DrawerTitle,
  renderer: FormDrawerRenderer
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
