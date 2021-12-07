import { FormPath, FormPathPattern } from '@formily/shared'
import { ValidatorTriggerType } from '@formily/validator'
import { DataChange } from '@formily/reactive'
import { Field, ArrayField, Form, ObjectField } from '../models'
import {
  ISpliceArrayStateProps,
  IExchangeArrayStateProps,
  IFieldResetOptions,
  ISearchFeedback,
  IFieldFeedback,
  INodePatch,
  GeneralField,
  IFormFeedback,
  FieldMatchPattern,
} from '../types'
export declare const isHTMLInputEvent: (
  event: any,
  stopPropagation?: boolean
) => boolean
export declare const getValuesFromEvent: (args: any[]) => any[]
export declare const buildFieldPath: (field: GeneralField) => FormPath
export declare const buildNodeIndexes: (
  field: GeneralField,
  address: FormPathPattern
) => GeneralField
export declare const patchFieldStates: (
  target: Record<string, GeneralField>,
  patches: INodePatch<GeneralField>[]
) => void
export declare const patchFormValues: (
  form: Form,
  path: Array<string | number>,
  source: any
) => void
export declare const matchFeedback: (
  search?: ISearchFeedback,
  feedback?: IFormFeedback
) => boolean
export declare const queryFeedbacks: (
  field: Field,
  search?: ISearchFeedback
) => IFieldFeedback[]
export declare const queryFeedbackMessages: (
  field: Field,
  search: ISearchFeedback
) => any[]
export declare const updateFeedback: (
  field: Field,
  feedback?: IFieldFeedback
) => void
export declare const validateToFeedbacks: (
  field: Field,
  triggerType?: ValidatorTriggerType
) => Promise<import('@formily/validator').IValidateResults>
export declare const setValidatorRule: (
  field: Field,
  name: string,
  value: any
) => void
export declare const spliceArrayState: (
  field: ArrayField,
  props?: ISpliceArrayStateProps
) => void
export declare const exchangeArrayState: (
  field: ArrayField,
  props: IExchangeArrayStateProps
) => void
export declare const cleanupArrayChildren: (
  field: ArrayField,
  start: number
) => void
export declare const cleanupObjectChildren: (
  field: ObjectField,
  keys: string[]
) => void
export declare const initFieldUpdate: (field: GeneralField) => void
export declare const subscribeUpdate: (
  form: Form,
  pattern: FormPath,
  callback: (...args: any[]) => void
) => void
export declare const deserialize: (model: any, setter: any) => any
export declare const serialize: (model: any, getter?: any) => any
export declare const createChildrenFeedbackFilter: (
  field: Field
) => ({ address }: IFormFeedback) => boolean
export declare const createStateSetter: (model: any) => (setter?: any) => any
export declare const createStateGetter: (model: any) => (getter?: any) => any
export declare const createBatchStateSetter: (
  form: Form
) => (pattern: FieldMatchPattern, payload?: any) => void
export declare const createBatchStateGetter: (
  form: Form
) => (pattern: FieldMatchPattern, payload?: any) => any
export declare const triggerFormInitialValuesChange: (
  form: Form,
  change: DataChange
) => void
export declare const triggerFormValuesChange: (
  form: Form,
  change: DataChange
) => void
export declare const setValidating: (
  target: Form | Field,
  validating: boolean
) => void
export declare const setSubmitting: (
  target: Form | Field,
  submitting: boolean
) => void
export declare const setLoading: (
  target: Form | Field,
  loading: boolean
) => void
export declare const batchSubmit: <T>(
  target: Form | Field,
  onSubmit?: (values: any) => void | Promise<T>
) => Promise<T>
export declare const batchValidate: (
  target: Form | Field,
  pattern: FormPathPattern,
  triggerType?: ValidatorTriggerType
) => Promise<void>
export declare const batchReset: (
  target: Form | Field,
  pattern: FormPathPattern,
  options?: IFieldResetOptions
) => Promise<void>
export declare const validateSelf: (
  target: Field,
  triggerType?: ValidatorTriggerType,
  noEmit?: any
) => Promise<{}>
export declare const resetSelf: (
  target: Field,
  options?: IFieldResetOptions,
  noEmit?: any
) => Promise<{}>
export declare const modifySelf: (target: Field) => void
export declare const getValidFormValues: (values: any) => any
export declare const getValidFieldDefaultValue: (
  value: any,
  initialValue: any
) => any
export declare const allowAssignDefaultValue: (
  target: any,
  source: any
) => boolean
export declare const createReactions: (field: GeneralField) => void
export declare const initializeStart: () => void
export declare const initializeEnd: () => void
