import { InjectionKey, Ref } from 'vue-demi'
import { Form, GeneralField } from '@formily/core'
import { Schema } from '@formily/json-schema'
import { ISchemaFieldVueFactoryOptions } from '../types'
export declare const FormSymbol: InjectionKey<Ref<Form>>
export declare const FieldSymbol: InjectionKey<Ref<GeneralField>>
export declare const SchemaMarkupSymbol: InjectionKey<Ref<Schema>>
export declare const SchemaSymbol: InjectionKey<Ref<Schema>>
export declare const SchemaExpressionScopeSymbol: InjectionKey<
  Ref<Record<string, any>>
>
export declare const SchemaOptionsSymbol: InjectionKey<
  Ref<ISchemaFieldVueFactoryOptions>
>
