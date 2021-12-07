import {
  ISchemaFieldVueFactoryOptions,
  SchemaVueComponents,
  ISchemaFieldProps,
  ISchemaMarkupFieldProps,
  ISchemaTypeFieldProps,
} from '../types'
import type { DefineComponent } from '../types'
declare type SchemaFieldComponents = {
  SchemaField: DefineComponent<ISchemaFieldProps>
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
export declare function createSchemaField<
  Components extends SchemaVueComponents = SchemaVueComponents
>(options: ISchemaFieldVueFactoryOptions<Components>): SchemaFieldComponents
export {}
