import { Form } from '../models'
export declare const onFormInit: (callback: (form: Form) => void) => void
export declare const onFormMount: (callback: (form: Form) => void) => void
export declare const onFormUnmount: (callback: (form: Form) => void) => void
export declare const onFormValuesChange: (
  callback: (form: Form) => void
) => void
export declare const onFormInitialValuesChange: (
  callback: (form: Form) => void
) => void
export declare const onFormInputChange: (callback: (form: Form) => void) => void
export declare const onFormSubmit: (callback: (form: Form) => void) => void
export declare const onFormReset: (callback: (form: Form) => void) => void
export declare const onFormSubmitStart: (callback: (form: Form) => void) => void
export declare const onFormSubmitEnd: (callback: (form: Form) => void) => void
export declare const onFormSubmitSuccess: (
  callback: (form: Form) => void
) => void
export declare const onFormSubmitFailed: (
  callback: (form: Form) => void
) => void
export declare const onFormSubmitValidateStart: (
  callback: (form: Form) => void
) => void
export declare const onFormSubmitValidateSuccess: (
  callback: (form: Form) => void
) => void
export declare const onFormSubmitValidateFailed: (
  callback: (form: Form) => void
) => void
export declare const onFormSubmitValidateEnd: (
  callback: (form: Form) => void
) => void
export declare const onFormValidateStart: (
  callback: (form: Form) => void
) => void
export declare const onFormValidateSuccess: (
  callback: (form: Form) => void
) => void
export declare const onFormValidateFailed: (
  callback: (form: Form) => void
) => void
export declare const onFormValidateEnd: (callback: (form: Form) => void) => void
export declare const onFormGraphChange: (callback: (form: Form) => void) => void
export declare const onFormLoading: (callback: (form: Form) => void) => void
export declare function onFormReact(callback?: (form: Form) => void): void
