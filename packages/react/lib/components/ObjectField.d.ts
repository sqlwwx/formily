/// <reference types="react" />
import { ObjectField as ObjectFieldType } from '@formily/core'
import { JSXComponent, IFieldProps } from '../types'
export declare const ObjectField: {
  <D extends JSXComponent, C extends JSXComponent>(
    props: IFieldProps<D, C, ObjectFieldType<any, any>>
  ): JSX.Element
  displayName: string
}
