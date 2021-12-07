import { FormPath } from '@formily/shared'
import { Form } from '../models'
import { IFormProps } from '../types'
import {
  getValidateLocaleIOSCode,
  setValidateLanguage,
  registerValidateFormats,
  registerValidateLocale,
  registerValidateMessageTemplateEngine,
  registerValidateRules,
} from '@formily/validator'
import {
  createEffectHook,
  createEffectContext,
  useEffectForm,
} from './effective'
import {
  isArrayField,
  isArrayFieldState,
  isDataField,
  isDataFieldState,
  isField,
  isFieldState,
  isForm,
  isFormState,
  isGeneralField,
  isGeneralFieldState,
  isObjectField,
  isObjectFieldState,
  isQuery,
  isVoidField,
  isVoidFieldState,
} from './checkers'
declare const createForm: <T extends object = any>(
  options?: IFormProps<T>
) => Form<T>
export {
  FormPath,
  createForm,
  isArrayField,
  isArrayFieldState,
  isDataField,
  isDataFieldState,
  isField,
  isFieldState,
  isForm,
  isFormState,
  isGeneralField,
  isGeneralFieldState,
  isObjectField,
  isObjectFieldState,
  isQuery,
  isVoidField,
  isVoidFieldState,
  getValidateLocaleIOSCode,
  setValidateLanguage,
  registerValidateFormats,
  registerValidateLocale,
  registerValidateMessageTemplateEngine,
  registerValidateRules,
  createEffectHook,
  createEffectContext,
  useEffectForm,
}
