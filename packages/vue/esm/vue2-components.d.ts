import type Vue from 'vue'
import type { VueConstructor } from 'vue'
import type {
  IVoidFieldProps,
  IArrayFieldProps,
  IObjectFieldProps,
  IFieldProps,
  IRecursionFieldProps,
  IProviderProps,
  ISchemaMarkupFieldProps,
  ISchemaFieldProps,
  ISchemaFieldVueFactoryOptions,
  ISchemaTypeFieldProps,
  SchemaVueComponents,
} from './types'
declare type DefineComponent<Props> = Vue & VueConstructor & Props
declare type SchemaFieldComponents = {
  SchemaField: DefineComponent<Omit<ISchemaFieldProps, 'name' | 'components'>>
  SchemaMarkupField: DefineComponent<ISchemaMarkupFieldProps>
  SchemaStringField: DefineComponent<ISchemaTypeFieldProps>
  SchemaObjectField: DefineComponent<ISchemaTypeFieldProps>
  SchemaArrayField: DefineComponent<ISchemaTypeFieldProps>
  SchemaBooleanField: DefineComponent<ISchemaTypeFieldProps>
  SchemaDateField: DefineComponent<ISchemaTypeFieldProps>
  SchemaDateTimeField: DefineComponent<ISchemaTypeFieldProps>
  SchemaVoidField: DefineComponent<ISchemaTypeFieldProps>
  SchemaNumberField: DefineComponent<ISchemaTypeFieldProps>
}
declare type CreateSchemaField<
  Components extends SchemaVueComponents = SchemaVueComponents
> = (
  options: ISchemaFieldVueFactoryOptions<Components>
) => SchemaFieldComponents
declare const Field: DefineComponent<
  Omit<
    IFieldProps<
      import('./types').VueComponent<Record<string, any>>,
      import('./types').VueComponent<Record<string, any>>
    >,
    'name'
  >
>
declare const ArrayField: DefineComponent<Omit<IArrayFieldProps, 'name'>>
declare const ObjectField: DefineComponent<Omit<IObjectFieldProps, 'name'>>
declare const VoidField: DefineComponent<
  Omit<
    IVoidFieldProps<
      import('./types').VueComponent<Record<string, any>>,
      import('./types').VueComponent<Record<string, any>>
    >,
    'name'
  >
>
declare const RecursionField: DefineComponent<
  Omit<IRecursionFieldProps, 'name'>
>
declare const FormConsumer: Vue
declare const FormProvider: DefineComponent<IProviderProps>
declare const createSchemaField: CreateSchemaField<SchemaVueComponents>
export {
  Field,
  ArrayField,
  ObjectField,
  VoidField,
  RecursionField,
  FormConsumer,
  FormProvider,
  createSchemaField,
}
