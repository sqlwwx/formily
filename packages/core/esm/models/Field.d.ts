import { FormPathPattern } from '@formily/shared'
import { ValidatorTriggerType } from '@formily/validator'
import {
  JSXComponent,
  IFieldFeedback,
  FeedbackMessage,
  IFieldCaches,
  IFieldRequests,
  FieldValidator,
  FieldDataSource,
  ISearchFeedback,
  IFieldProps,
  IFieldResetOptions,
  IFieldState,
  IModelSetter,
  IModelGetter,
} from '../types'
import { Form } from './Form'
import { BaseField } from './BaseField'
export declare class Field<
  Decorator extends JSXComponent = any,
  Component extends JSXComponent = any,
  TextType = any,
  ValueType = any
> extends BaseField<Decorator, Component, TextType> {
  displayName: string
  props: IFieldProps<Decorator, Component, TextType, ValueType>
  loading: boolean
  validating: boolean
  submitting: boolean
  active: boolean
  visited: boolean
  selfModified: boolean
  modified: boolean
  inputValue: ValueType
  inputValues: any[]
  dataSource: FieldDataSource
  validator: FieldValidator
  feedbacks: IFieldFeedback[]
  caches: IFieldCaches
  requests: IFieldRequests
  constructor(
    address: FormPathPattern,
    props: IFieldProps<Decorator, Component, TextType, ValueType>,
    form: Form,
    designable: boolean
  )
  protected initialize(): void
  protected makeObservable(): void
  protected makeReactive(): void
  get selfErrors(): FeedbackMessage
  get errors(): import('../types').IFormFeedback[]
  get selfWarnings(): FeedbackMessage
  get warnings(): import('../types').IFormFeedback[]
  get selfSuccesses(): FeedbackMessage
  get successes(): import('../types').IFormFeedback[]
  get selfValid(): boolean
  get valid(): boolean
  get selfInvalid(): boolean
  get invalid(): boolean
  get value(): ValueType
  get initialValue(): ValueType
  get required(): boolean
  get validateStatus(): 'error' | 'success' | 'warning' | 'validating'
  set required(required: boolean)
  set value(value: ValueType)
  set initialValue(initialValue: ValueType)
  set selfErrors(messages: FeedbackMessage)
  set selfWarnings(messages: FeedbackMessage)
  set selfSuccesses(messages: FeedbackMessage)
  setDataSource: (dataSource?: FieldDataSource) => void
  setFeedback: (feedback?: IFieldFeedback) => void
  setSelfErrors: (messages?: FeedbackMessage) => void
  setSelfWarnings: (messages?: FeedbackMessage) => void
  setSelfSuccesses: (messages?: FeedbackMessage) => void
  setValidator: (validator?: FieldValidator) => void
  setValidatorRule: (name: string, value: any) => void
  setRequired: (required?: boolean) => void
  setValue: (value?: ValueType) => void
  setInitialValue: (initialValue?: ValueType) => void
  setLoading: (loading?: boolean) => void
  setValidating: (validating?: boolean) => void
  setSubmitting: (submitting?: boolean) => void
  setState: IModelSetter<IFieldState>
  getState: IModelGetter<IFieldState>
  onInput: (...args: any[]) => Promise<void>
  onFocus: (...args: any[]) => Promise<void>
  onBlur: (...args: any[]) => Promise<void>
  validate: (triggerType?: ValidatorTriggerType) => Promise<void>
  submit: <T>(onSubmit?: (values: any) => void | Promise<T>) => Promise<T>
  reset: (options?: IFieldResetOptions) => Promise<void>
  queryFeedbacks: (search?: ISearchFeedback) => IFieldFeedback[]
  modify: () => void
}
