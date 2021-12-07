import type { Vue2Component } from './vue2'
import type { Vue3Component } from './vue3'
import {
  Form,
  IFieldFactoryProps,
  IVoidFieldFactoryProps,
  GeneralField,
  Field,
  ObjectField,
  FormPatternTypes,
  FieldDisplayTypes,
  FieldValidator,
} from '@formily/core'
import type { FormPathPattern } from '@formily/shared'
import type { ISchema, Schema, SchemaKey } from '@formily/json-schema'
import type { DefineComponent as DefineVue3Component } from '@type-helper/vue3'
export declare type DefineComponent<Props = Record<string, any>> =
  DefineVue3Component<Props>
export declare type VueComponent<Props = Record<string, any>> =
  | Vue2Component<Props>
  | Vue3Component<Props>
  | Props
export declare type VueComponentOptionsWithProps = {
  props: unknown
}
export declare type VueComponentProps<T extends VueComponent> =
  T extends VueComponentOptionsWithProps ? T['props'] : T
export interface IProviderProps {
  form: Form
}
export declare type IFieldProps<
  D extends VueComponent = VueComponent,
  C extends VueComponent = VueComponent
> = IFieldFactoryProps<D, C>
export declare type IVoidFieldProps<
  D extends VueComponent = VueComponent,
  C extends VueComponent = VueComponent
> = IVoidFieldFactoryProps<D, C>
export declare type IArrayFieldProps = IFieldProps
export declare type IObjectFieldProps = IFieldProps
export interface IReactiveFieldProps {
  field: GeneralField
}
export interface IComponentMapper<T extends VueComponent = any> {
  (target: T): VueComponent
}
export declare type IStateMapper<Props> =
  | {
      [key in keyof Field]?: keyof Props | boolean
    }
  | ((props: Props, field: GeneralField) => Props)
export declare type SchemaVueComponents = Record<string, VueComponent>
export interface ISchemaFieldVueFactoryOptions<
  Components extends SchemaVueComponents = any
> {
  components?: Components
  scope?: any
}
export interface ISchemaFieldProps<
  Decorator extends VueComponent = VueComponent,
  Component extends VueComponent = VueComponent,
  InnerField = ObjectField<Decorator, Component>
> extends Omit<IFieldFactoryProps<Decorator, Component, InnerField>, 'name'> {
  schema?: ISchema
  components?: {
    [key: string]: VueComponent
  }
  scope?: any
  name?: SchemaKey
}
export interface ISchemaMapper {
  (schema: Schema, name: SchemaKey): Schema
}
export interface ISchemaFilter {
  (schema: Schema, name: SchemaKey): boolean
}
export interface IRecursionFieldProps {
  schema: Schema
  name?: SchemaKey
  basePath?: FormPathPattern
  onlyRenderProperties?: boolean
  onlyRenderSelf?: boolean
  mapProperties?: ISchemaMapper
  filterProperties?: ISchemaFilter
}
export declare type ObjectKey = string | number | boolean | symbol
export declare type KeyOfComponents<T> = keyof T
export declare type ComponentPath<
  T,
  Key extends KeyOfComponents<T> = KeyOfComponents<T>
> = Key extends string ? Key : never
export declare type ComponentPropsByPathValue<
  T extends SchemaVueComponents,
  P extends ComponentPath<T>
> = P extends keyof T ? VueComponentProps<T[P]> : never
export declare type ISchemaMarkupFieldProps<
  Components extends SchemaVueComponents = SchemaVueComponents,
  Decorator extends ComponentPath<Components> = ComponentPath<Components>,
  Component extends ComponentPath<Components> = ComponentPath<Components>
> = ISchema<
  Decorator,
  Component,
  ComponentPropsByPathValue<Components, Decorator>,
  ComponentPropsByPathValue<Components, Component>,
  FormPatternTypes,
  FieldDisplayTypes,
  FieldValidator,
  string,
  GeneralField
>
export declare type ISchemaTypeFieldProps<
  Components extends SchemaVueComponents = SchemaVueComponents,
  Decorator extends ComponentPath<Components> = ComponentPath<Components>,
  Component extends ComponentPath<Components> = ComponentPath<Components>
> = Omit<ISchemaMarkupFieldProps<Components, Decorator, Component>, 'type'>
