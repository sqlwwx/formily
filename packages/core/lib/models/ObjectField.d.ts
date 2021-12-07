import { JSXComponent, IFieldProps, FormPathPattern } from '../types'
import { Field } from './Field'
import { Form } from './Form'
export declare class ObjectField<
  Decorator extends JSXComponent = any,
  Component extends JSXComponent = any
> extends Field<Decorator, Component, any, Record<string, any>> {
  displayName: string
  private additionalProperties
  constructor(
    address: FormPathPattern,
    props: IFieldProps<Decorator, Component>,
    form: Form,
    designable: boolean
  )
  protected makeAutoCleanable(): void
  addProperty: (key: string, value: any) => Promise<void>
  removeProperty: (key: string) => Promise<void>
  existProperty: (key: string) => any
}
