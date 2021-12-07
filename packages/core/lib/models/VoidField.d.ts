import { FormPathPattern } from '@formily/shared'
import {
  IModelSetter,
  IModelGetter,
  IVoidFieldProps,
  IVoidFieldState,
} from '../types'
import { Form } from './Form'
import { BaseField } from './BaseField'
export declare class VoidField<
  Decorator = any,
  Component = any,
  TextType = any
> extends BaseField<Decorator, Component, TextType> {
  displayName: 'VoidField'
  props: IVoidFieldProps<Decorator, Component>
  constructor(
    address: FormPathPattern,
    props: IVoidFieldProps<Decorator, Component>,
    form: Form,
    designable: boolean
  )
  protected initialize(): void
  protected makeObservable(): void
  protected makeReactive(): void
  setState: IModelSetter<IVoidFieldState>
  getState: IModelGetter<IVoidFieldState>
}
