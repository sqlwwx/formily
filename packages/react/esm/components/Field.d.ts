/// <reference types="react" />
import { JSXComponent, IFieldProps } from '../types'
export declare const Field: {
  <D extends JSXComponent, C extends JSXComponent>(
    props: IFieldProps<
      D,
      C,
      import('@formily/core/esm').Field<any, any, any, any>
    >
  ): JSX.Element
  displayName: string
}
