import { Form } from '../models'
import { FormPathPattern, GeneralField, DataField, IFieldState } from '../types'
export declare const onFieldMount: (
  pattern: FormPathPattern,
  callback: (field: GeneralField, form: Form) => void
) => void
export declare const onFieldUnmount: (
  pattern: FormPathPattern,
  callback: (field: GeneralField, form: Form) => void
) => void
export declare const onFieldValueChange: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldInitialValueChange: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldInputValueChange: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldValidateStart: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldValidateEnd: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldValidating: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldValidateFailed: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldValidateSuccess: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldSubmit: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldSubmitStart: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldSubmitEnd: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldSubmitValidateStart: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldSubmitValidateEnd: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldSubmitSuccess: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldSubmitFailed: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldSubmitValidateSuccess: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldSubmitValidateFailed: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldReset: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare const onFieldLoading: (
  pattern: FormPathPattern,
  callback: (field: DataField, form: Form) => void
) => void
export declare function onFieldInit(
  pattern: FormPathPattern,
  callback?: (field: GeneralField, form: Form) => void
): void
export declare function onFieldReact(
  pattern: FormPathPattern,
  callback?: (field: GeneralField, form: Form) => void
): void
export declare function onFieldChange(
  pattern: FormPathPattern,
  callback?: (field: GeneralField, form: Form) => void
): void
export declare function onFieldChange(
  pattern: FormPathPattern,
  watches: (keyof IFieldState)[],
  callback?: (field: GeneralField, form: Form) => void
): void
