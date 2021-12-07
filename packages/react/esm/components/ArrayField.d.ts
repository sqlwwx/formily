/// <reference types="react" />
import { ArrayField as ArrayFieldType } from '@formily/core'
import { JSXComponent, IFieldProps } from '../types'
export declare const ArrayField: {
  <D extends JSXComponent, C extends JSXComponent>(
    props: IFieldProps<D, C, ArrayFieldType<any, any>>
  ): JSX.Element
  displayName: string
}
