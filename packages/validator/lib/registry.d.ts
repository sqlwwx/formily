import {
  ValidatorFunctionResponse,
  ValidatorFunction,
  IRegistryFormats,
  IRegistryLocales,
  IRegistryRules,
} from './types'
export declare const getValidateLocaleIOSCode: (language: string) => any
export declare const setValidateLanguage: (lang: string) => void
export declare const getValidateLanguage: () => any
export declare const getLocaleByPath: (path: string, lang?: string) => any
export declare const getValidateLocale: (path: string) => any
export declare const getValidateMessageTemplateEngine: () => any
export declare const getValidateFormats: (key?: string) => any
export declare const getValidateRules: <T>(key?: T) => T extends string
  ? ValidatorFunction<any>
  : {
      [key: string]: ValidatorFunction<any>
    }
export declare const registerValidateLocale: (locale: IRegistryLocales) => void
export declare const registerValidateRules: (rules: IRegistryRules) => void
export declare const registerValidateFormats: (
  formats: IRegistryFormats
) => void
export declare const registerValidateMessageTemplateEngine: (
  template: (message: ValidatorFunctionResponse, context: any) => any
) => void
