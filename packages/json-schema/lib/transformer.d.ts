import { Schema } from './schema'
import { ISchemaTransformerOptions } from './types'
import { IFieldFactoryProps } from '@formily/core'
export declare const transformFieldProps: (
  schema: Schema,
  options: ISchemaTransformerOptions
) => IFieldFactoryProps<any, any>
