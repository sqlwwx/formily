import { FormPathPattern } from '@formily/shared'
import { Heart } from './Heart'
import { Field } from './Field'
import {
  HeartSubscriber,
  FormPatternTypes,
  IFormRequests,
  IFormFeedback,
  ISearchFeedback,
  IFormGraph,
  IFormProps,
  IFieldResetOptions,
  IFormFields,
  IFieldFactoryProps,
  IVoidFieldFactoryProps,
  IFormState,
  IModelGetter,
  IModelSetter,
  IFieldStateGetter,
  IFieldStateSetter,
  FormDisplayTypes,
  IFormMergeStrategy,
} from '../types'
import { ArrayField } from './ArrayField'
import { ObjectField } from './ObjectField'
import { VoidField } from './VoidField'
import { Query } from './Query'
import { Graph } from './Graph'
export declare class Form<ValueType extends object = any> {
  displayName: string
  id: string
  initialized: boolean
  validating: boolean
  submitting: boolean
  loading: boolean
  modified: boolean
  pattern: FormPatternTypes
  display: FormDisplayTypes
  values: ValueType
  initialValues: ValueType
  mounted: boolean
  unmounted: boolean
  props: IFormProps<ValueType>
  heart: Heart
  graph: Graph
  fields: IFormFields
  requests: IFormRequests
  indexes: Record<string, string>
  disposers: (() => void)[]
  constructor(props: IFormProps<ValueType>)
  protected initialize(props: IFormProps<ValueType>): void
  protected makeValues(): void
  protected makeObservable(): void
  protected makeReactive(): void
  get valid(): boolean
  get invalid(): boolean
  get errors(): IFormFeedback[]
  get warnings(): IFormFeedback[]
  get successes(): IFormFeedback[]
  get lifecycles(): import('./LifeCycle').LifeCycle<any>[]
  get hidden(): boolean
  get visible(): boolean
  set hidden(hidden: boolean)
  set visible(visible: boolean)
  get editable(): boolean
  set editable(editable: boolean)
  get readOnly(): boolean
  set readOnly(readOnly: boolean)
  get disabled(): boolean
  set disabled(disabled: boolean)
  get readPretty(): boolean
  set readPretty(readPretty: boolean)
  /** 创建字段 **/
  createField: <Decorator extends unknown, Component extends unknown>(
    props: IFieldFactoryProps<Decorator, Component, any, any>
  ) => Field<Decorator, Component, any, any>
  createArrayField: <Decorator extends unknown, Component extends unknown>(
    props: IFieldFactoryProps<Decorator, Component, any, any>
  ) => ArrayField<Decorator, Component>
  createObjectField: <Decorator extends unknown, Component extends unknown>(
    props: IFieldFactoryProps<Decorator, Component, any, any>
  ) => ObjectField<Decorator, Component>
  createVoidField: <Decorator extends unknown, Component extends unknown>(
    props: IVoidFieldFactoryProps<Decorator, Component, any>
  ) => VoidField<Decorator, Component, any>
  /** 状态操作模型 **/
  setValues: (values: any, strategy?: IFormMergeStrategy) => void
  setInitialValues: (initialValues: any, strategy?: IFormMergeStrategy) => void
  setValuesIn: (pattern: FormPathPattern, value: any) => void
  deleteValuesIn: (pattern: FormPathPattern) => void
  existValuesIn: (pattern: FormPathPattern) => any
  getValuesIn: (pattern: FormPathPattern) => any
  setInitialValuesIn: (pattern: FormPathPattern, initialValue: any) => void
  deleteInitialValuesIn: (pattern: FormPathPattern) => void
  existInitialValuesIn: (pattern: FormPathPattern) => any
  getInitialValuesIn: (pattern: FormPathPattern) => any
  setLoading: (loading: boolean) => void
  setSubmitting: (submitting: boolean) => void
  setValidating: (validating: boolean) => void
  setDisplay: (display: FormDisplayTypes) => void
  setPattern: (pattern: FormPatternTypes) => void
  addEffects: (id: any, effects: IFormProps['effects']) => void
  removeEffects: (id: any) => void
  setEffects: (effects: IFormProps['effects']) => void
  clearErrors: (pattern?: FormPathPattern) => void
  clearWarnings: (pattern?: FormPathPattern) => void
  clearSuccesses: (pattern?: FormPathPattern) => void
  query: (pattern: FormPathPattern) => Query
  queryFeedbacks: (search: ISearchFeedback) => IFormFeedback[]
  notify: (type: string, payload?: any) => void
  subscribe: (subscriber?: HeartSubscriber) => number
  unsubscribe: (id: number) => void
  /**事件钩子**/
  onInit: () => void
  onMount: () => void
  onUnmount: () => void
  setState: IModelSetter<IFormState<ValueType>>
  getState: IModelGetter<IFormState<ValueType>>
  setFormState: IModelSetter<IFormState<ValueType>>
  getFormState: IModelGetter<IFormState<ValueType>>
  setFieldState: IFieldStateSetter
  getFieldState: IFieldStateGetter
  getFormGraph: () => IFormGraph
  setFormGraph: (graph: IFormGraph) => void
  clearFormGraph: (pattern?: FormPathPattern) => void
  validate: (pattern?: FormPathPattern) => any
  submit: <T>(onSubmit?: (values: any) => void | Promise<T>) => Promise<T>
  reset: (
    pattern?: FormPathPattern,
    options?: IFieldResetOptions
  ) => Promise<void>
}
