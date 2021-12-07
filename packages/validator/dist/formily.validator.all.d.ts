declare type ValidatorFormats =
  | 'url'
  | 'email'
  | 'ipv6'
  | 'ipv4'
  | 'number'
  | 'integer'
  | 'idcard'
  | 'qq'
  | 'phone'
  | 'money'
  | 'zh'
  | 'date'
  | 'zip'
  | (string & {})
interface IValidateResult {
  type: 'error' | 'warning' | 'success' | (string & {})
  message: string
}
interface IValidateResults {
  error?: string[]
  warning?: string[]
  success?: string[]
}
declare const isValidateResult: (obj: any) => obj is IValidateResult
declare type ValidatorFunctionResponse =
  | null
  | string
  | boolean
  | IValidateResult
declare type ValidatorFunction<Context = any> = (
  value: any,
  rule: IValidatorRules<Context>,
  ctx: Context,
  render: (message: string, scope?: any) => string
) => ValidatorFunctionResponse | Promise<ValidatorFunctionResponse> | null
declare type ValidatorParsedFunction<Context = any> = (
  value: any,
  ctx: Context
) => IValidateResult | Promise<IValidateResult> | null
declare type ValidatorTriggerType =
  | 'onInput'
  | 'onFocus'
  | 'onBlur'
  | (string & {})
interface IValidatorRules<Context = any> {
  triggerType?: ValidatorTriggerType
  format?: ValidatorFormats
  validator?: ValidatorFunction<Context>
  required?: boolean
  pattern?: RegExp | string
  max?: number
  maximum?: number
  maxItems?: number
  minItems?: number
  maxLength?: number
  minLength?: number
  exclusiveMaximum?: number
  exclusiveMinimum?: number
  minimum?: number
  min?: number
  len?: number
  whitespace?: boolean
  enum?: any[]
  const?: any
  multipleOf?: number
  uniqueItems?: boolean
  maxProperties?: number
  minProperties?: number
  message?: string
  [key: string]: any
}
interface IRegistryLocaleMessages {
  [key: string]: string | IRegistryLocaleMessages
}
interface IRegistryLocales {
  [language: string]: IRegistryLocaleMessages
}
interface IRegistryRules<Context = any> {
  [key: string]: ValidatorFunction<Context>
}
interface IRegistryFormats {
  [key: string]: string | RegExp
}
declare type ValidatorDescription<Context = any> =
  | ValidatorFormats
  | ValidatorFunction<Context>
  | IValidatorRules<Context>
declare type MultiValidator<Context = any> = ValidatorDescription<Context>[]
declare type Validator<Context = any> =
  | ValidatorDescription<Context>
  | MultiValidator<Context>
interface IValidatorOptions<Context = any> {
  validateFirst?: boolean
  triggerType?: ValidatorTriggerType
  context?: Context
}

declare const validate: <Context = any>(
  value: any,
  validator: Validator<Context>,
  options?: IValidatorOptions<Context>
) => Promise<IValidateResults>

declare const parseValidatorDescription: (
  description: ValidatorDescription
) => IValidatorRules
declare const parseValidatorDescriptions: <Context = any>(
  validator: Validator<Context>
) => IValidatorRules[]
declare const parseValidatorRules: (
  rules?: IValidatorRules
) => ValidatorParsedFunction[]
declare const parseValidator: <Context = any>(
  validator: Validator<Context>,
  options?: IValidatorOptions
) => ValidatorParsedFunction<Context>[]

declare const getValidateLocaleIOSCode: (language: string) => any
declare const setValidateLanguage: (lang: string) => void
declare const getValidateLanguage: () => any
declare const getLocaleByPath: (path: string, lang?: string) => any
declare const getValidateLocale: (path: string) => any
declare const getValidateMessageTemplateEngine: () => any
declare const getValidateFormats: (key?: string) => any
declare const getValidateRules: <T>(key?: T) => T extends string
  ? ValidatorFunction<any>
  : {
      [key: string]: ValidatorFunction<any>
    }
declare const registerValidateLocale: (locale: IRegistryLocales) => void
declare const registerValidateRules: (rules: IRegistryRules) => void
declare const registerValidateFormats: (formats: IRegistryFormats) => void
declare const registerValidateMessageTemplateEngine: (
  template: (message: ValidatorFunctionResponse, context: any) => any
) => void

export {
  IRegistryFormats,
  IRegistryLocaleMessages,
  IRegistryLocales,
  IRegistryRules,
  IValidateResult,
  IValidateResults,
  IValidatorOptions,
  IValidatorRules,
  MultiValidator,
  Validator,
  ValidatorDescription,
  ValidatorFormats,
  ValidatorFunction,
  ValidatorFunctionResponse,
  ValidatorParsedFunction,
  ValidatorTriggerType,
  getLocaleByPath,
  getValidateFormats,
  getValidateLanguage,
  getValidateLocale,
  getValidateLocaleIOSCode,
  getValidateMessageTemplateEngine,
  getValidateRules,
  isValidateResult,
  parseValidator,
  parseValidatorDescription,
  parseValidatorDescriptions,
  parseValidatorRules,
  registerValidateFormats,
  registerValidateLocale,
  registerValidateMessageTemplateEngine,
  registerValidateRules,
  setValidateLanguage,
  validate,
}
