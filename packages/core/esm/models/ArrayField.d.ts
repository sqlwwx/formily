import { Field } from './Field'
import { Form } from './Form'
import { JSXComponent, IFieldProps, FormPathPattern } from '../types'
export declare class ArrayField<
  Decorator extends JSXComponent = any,
  Component extends JSXComponent = any
> extends Field<Decorator, Component, any, any[]> {
  displayName: string
  constructor(
    address: FormPathPattern,
    props: IFieldProps<Decorator, Component>,
    form: Form,
    designable: boolean
  )
  protected makeAutoCleanable(): void
  push: (...items: any[]) => Promise<void>
  pop: () => Promise<void>
  insert: (index: number, ...items: any[]) => Promise<void>
  remove: (index: number) => Promise<void>
  copy: (index: number) => Promise<void>
  shift: () => Promise<void>
  unshift: (...items: any[]) => Promise<void>
  move: (fromIndex: number, toIndex: number) => Promise<void>
  moveUp: (index: number) => Promise<void>
  moveDown: (index: number) => Promise<void>
}
