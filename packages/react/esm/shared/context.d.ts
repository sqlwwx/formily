import React from 'react'
import { Form, GeneralField } from '@formily/core'
import { Schema } from '@formily/json-schema'
import { ISchemaFieldReactFactoryOptions } from '../types'
export declare const FormContext: React.Context<Form<any>>
export declare const FieldContext: React.Context<GeneralField>
export declare const SchemaMarkupContext: React.Context<
  Schema<any, any, any, any, any, any, any, any, any>
>
export declare const SchemaContext: React.Context<
  Schema<any, any, any, any, any, any, any, any, any>
>
export declare const SchemaExpressionScopeContext: React.Context<any>
export declare const SchemaOptionsContext: React.Context<
  ISchemaFieldReactFactoryOptions<any>
>
export declare const ContextCleaner: ({ children }: { children: any }) => any
