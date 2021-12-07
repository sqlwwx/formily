import { ISchema } from './types'
export declare const SchemaNestedMap: {
  parent: boolean
  root: boolean
  properties: boolean
  patternProperties: boolean
  additionalProperties: boolean
  items: boolean
  additionalItems: boolean
  'x-linkages': boolean
  'x-reactions': boolean
}
export declare const SchemaStateMap: {
  title: string
  description: string
  default: string
  enum: string
  readOnly: string
  writeOnly: string
  'x-content': string
  'x-data': string
  'x-value': string
  'x-editable': string
  'x-disabled': string
  'x-read-pretty': string
  'x-read-only': string
  'x-visible': string
  'x-hidden': string
  'x-display': string
  'x-pattern': string
  'x-validator': string
  'x-decorator': string
  'x-component': string
  'x-decorator-props': string
  'x-component-props': string
}
export declare const SchemaValidatorMap: {
  required: boolean
  format: boolean
  maxItems: boolean
  minItems: boolean
  maxLength: boolean
  minLength: boolean
  maximum: boolean
  minimum: boolean
  exclusiveMaximum: boolean
  exclusiveMinimum: boolean
  pattern: boolean
  const: boolean
  multipleOf: boolean
  maxProperties: boolean
  minProperties: boolean
  uniqueItems: boolean
}
export declare const SchemaNormalKeys: string[]
export declare const SchemaValidatorKeys: string[]
export declare const hasOwnProperty: (v: PropertyKey) => boolean
export declare const traverse: (
  target: any,
  visitor: (value: any, path: Array<string | number>) => void
) => void
export declare const traverseSchema: (
  schema: ISchema,
  visitor: (value: any, path: any[]) => void
) => void
export declare const isNoNeedCompileObject: (source: any) => boolean
export declare const createDataSource: (source: any[]) => any[]
export declare const patchStateFormSchema: (
  targetState: any,
  pattern: any[],
  compiled: any
) => void
