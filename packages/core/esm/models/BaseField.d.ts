import { FormPath, FormPathPattern } from '@formily/shared'
import {
  LifeCycleTypes,
  FieldDisplayTypes,
  FieldPatternTypes,
  FieldDecorator,
  FieldComponent,
} from '../types'
import { Form } from './Form'
import { Query } from './Query'
export declare class BaseField<
  Decorator = any,
  Component = any,
  TextType = any
> {
  title: TextType
  description: TextType
  selfDisplay: FieldDisplayTypes
  selfPattern: FieldPatternTypes
  initialized: boolean
  mounted: boolean
  unmounted: boolean
  content: any
  data: any
  decoratorType: Decorator
  decoratorProps: Record<string, any>
  componentType: Component
  componentProps: Record<string, any>
  designable: boolean
  address: FormPath
  path: FormPath
  form: Form
  disposers: (() => void)[]
  makeIndexes(address: FormPathPattern): void
  get component(): FieldComponent<Component>
  set component(value: FieldComponent<Component>)
  get decorator(): FieldDecorator<Decorator>
  set decorator(value: FieldDecorator<Decorator>)
  get parent(): import('../types').GeneralField
  get display(): FieldDisplayTypes
  get pattern(): FieldPatternTypes
  get editable(): boolean
  get disabled(): boolean
  get readOnly(): boolean
  get readPretty(): boolean
  get hidden(): boolean
  get visible(): boolean
  set hidden(hidden: boolean)
  set visible(visible: boolean)
  set editable(editable: boolean)
  set readOnly(readOnly: boolean)
  set disabled(disabled: boolean)
  set readPretty(readPretty: boolean)
  set pattern(pattern: FieldPatternTypes)
  set display(display: FieldDisplayTypes)
  setTitle: (title?: TextType) => void
  setDescription: (description?: TextType) => void
  setDisplay: (type?: FieldDisplayTypes) => void
  setPattern: (type?: FieldPatternTypes) => void
  setComponent: <C extends unknown, ComponentProps extends object = {}>(
    component?: C,
    props?: ComponentProps
  ) => void
  setComponentProps: <ComponentProps extends object = {}>(
    props?: ComponentProps
  ) => void
  setDecorator: <D extends unknown, ComponentProps extends object = {}>(
    component?: D,
    props?: ComponentProps
  ) => void
  setDecoratorProps: <ComponentProps extends object = {}>(
    props?: ComponentProps
  ) => void
  setData: (data: any) => void
  setContent: (content: any) => void
  onInit: () => void
  onMount: () => void
  onUnmount: () => void
  query: (pattern: FormPathPattern | RegExp) => Query
  notify: (type: LifeCycleTypes, payload?: any) => void
  dispose: () => void
  destroy: () => void
  match: (pattern: FormPathPattern) => boolean
}
