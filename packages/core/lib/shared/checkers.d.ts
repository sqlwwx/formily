import { DataField } from '..'
import {
  Form,
  Field,
  ArrayField,
  ObjectField,
  VoidField,
  Query,
} from '../models'
import { IFormState, GeneralField, IGeneralFieldState } from '../types'
export declare const isForm: (node: any) => node is Form<any>
export declare const isField: (node: any) => node is Field<any, any, any, any>
export declare const isGeneralField: (node: any) => node is GeneralField
export declare const isArrayField: (node: any) => node is ArrayField<any, any>
export declare const isObjectField: (node: any) => node is ObjectField<any, any>
export declare const isVoidField: (
  node: any
) => node is VoidField<any, any, any>
export declare const isFormState: (state: any) => state is IFormState<any>
export declare const isFieldState: (state: any) => state is Partial<
  Pick<
    Field<any, any, any, any>,
    import('..').NonFunctionPropertyNames<{
      loading: boolean
      validating: boolean
      submitting: boolean
      active: boolean
      visited: boolean
      selfModified: boolean
      modified: boolean
      inputValue: string
      inputValues: any[]
      dataSource: import('..').FieldDataSource
      validator: import('..').FieldValidator
      feedbacks: import('..').IFieldFeedback[]
      caches: import('..').IFieldCaches
      selfErrors: import('..').FeedbackMessage
      readonly errors: any
      selfWarnings: import('..').FeedbackMessage
      readonly warnings: import('..').IFormFeedback[]
      selfSuccesses: import('..').FeedbackMessage
      readonly successes: import('..').IFormFeedback[]
      readonly selfValid: boolean
      readonly valid: boolean
      readonly selfInvalid: boolean
      readonly invalid: boolean
      value: string
      initialValue: string
      required: boolean
      readonly validateStatus: 'error' | 'success' | 'warning' | 'validating'
      setDataSource: (dataSource?: import('..').FieldDataSource) => void
      setFeedback: (feedback?: import('..').IFieldFeedback) => void
      setSelfErrors: (messages?: import('..').FeedbackMessage) => void
      setSelfWarnings: (messages?: import('..').FeedbackMessage) => void
      setSelfSuccesses: (messages?: import('..').FeedbackMessage) => void
      setValidator: (validator?: import('..').FieldValidator) => void
      setValidatorRule: (name: string, value: any) => void
      setRequired: (required?: boolean) => void
      setValue: (value?: string) => void
      setInitialValue: (initialValue?: string) => void
      setLoading: (loading?: boolean) => void
      setValidating: (validating?: boolean) => void
      setSubmitting: (submitting?: boolean) => void
      onInput: (...args: any[]) => Promise<void>
      onFocus: (...args: any[]) => Promise<void>
      onBlur: (...args: any[]) => Promise<void>
      validate: (
        triggerType?: import('@formily/validator/esm').ValidatorTriggerType
      ) => Promise<void>
      submit: <T>(onSubmit?: (values: any) => void | Promise<T>) => Promise<T>
      reset: (options?: import('..').IFieldResetOptions) => Promise<void>
      queryFeedbacks: (
        search?: import('..').ISearchFeedback
      ) => import('..').IFieldFeedback[]
      modify: () => void
      title: string
      description: string
      initialized: boolean
      mounted: boolean
      unmounted: boolean
      content: any
      data: any
      decoratorType: any
      decoratorProps: Record<string, any>
      componentType: any
      componentProps: Record<string, any>
      designable: boolean
      form: Form<any>
      makeIndexes: (address: import('@formily/shared').FormPathPattern) => void
      component: import('..').FieldComponent<any, any>
      decorator: import('..').FieldDecorator<any, any>
      readonly parent: GeneralField
      display: import('..').FieldDisplayTypes
      pattern: import('..').FieldPatternTypes
      editable: boolean
      disabled: boolean
      readOnly: boolean
      readPretty: boolean
      hidden: boolean
      visible: boolean
      setTitle: (title?: string) => void
      setDescription: (description?: string) => void
      setDisplay: (type?: import('..').FieldDisplayTypes) => void
      setPattern: (type?: import('..').FieldPatternTypes) => void
      setComponent: <C extends unknown, ComponentProps extends object = {}>(
        component?: C,
        props?: ComponentProps
      ) => void
      setComponentProps: <ComponentProps_1 extends object = {}>(
        props?: ComponentProps_1
      ) => void
      setDecorator: <D extends unknown, ComponentProps_2 extends object = {}>(
        component?: D,
        props?: ComponentProps_2
      ) => void
      setDecoratorProps: <ComponentProps_3 extends object = {}>(
        props?: ComponentProps_3
      ) => void
      setData: (data: any) => void
      setContent: (content: any) => void
      onInit: () => void
      onMount: () => void
      onUnmount: () => void
      query: (pattern: import('@formily/shared').FormPathPattern) => Query
      notify: (type: import('..').LifeCycleTypes, payload?: any) => void
      dispose: () => void
      destroy: () => void
      match: (pattern: import('@formily/shared').FormPathPattern) => boolean
    }>
  >
>
export declare const isGeneralFieldState: (
  node: any
) => node is IGeneralFieldState
export declare const isArrayFieldState: (state: any) => state is Partial<
  Pick<
    Field<any, any, any, any>,
    import('..').NonFunctionPropertyNames<{
      loading: boolean
      validating: boolean
      submitting: boolean
      active: boolean
      visited: boolean
      selfModified: boolean
      modified: boolean
      inputValue: string
      inputValues: any[]
      dataSource: import('..').FieldDataSource
      validator: import('..').FieldValidator
      feedbacks: import('..').IFieldFeedback[]
      caches: import('..').IFieldCaches
      selfErrors: import('..').FeedbackMessage
      readonly errors: any
      selfWarnings: import('..').FeedbackMessage
      readonly warnings: import('..').IFormFeedback[]
      selfSuccesses: import('..').FeedbackMessage
      readonly successes: import('..').IFormFeedback[]
      readonly selfValid: boolean
      readonly valid: boolean
      readonly selfInvalid: boolean
      readonly invalid: boolean
      value: string
      initialValue: string
      required: boolean
      readonly validateStatus: 'error' | 'success' | 'warning' | 'validating'
      setDataSource: (dataSource?: import('..').FieldDataSource) => void
      setFeedback: (feedback?: import('..').IFieldFeedback) => void
      setSelfErrors: (messages?: import('..').FeedbackMessage) => void
      setSelfWarnings: (messages?: import('..').FeedbackMessage) => void
      setSelfSuccesses: (messages?: import('..').FeedbackMessage) => void
      setValidator: (validator?: import('..').FieldValidator) => void
      setValidatorRule: (name: string, value: any) => void
      setRequired: (required?: boolean) => void
      setValue: (value?: string) => void
      setInitialValue: (initialValue?: string) => void
      setLoading: (loading?: boolean) => void
      setValidating: (validating?: boolean) => void
      setSubmitting: (submitting?: boolean) => void
      onInput: (...args: any[]) => Promise<void>
      onFocus: (...args: any[]) => Promise<void>
      onBlur: (...args: any[]) => Promise<void>
      validate: (
        triggerType?: import('@formily/validator/esm').ValidatorTriggerType
      ) => Promise<void>
      submit: <T>(onSubmit?: (values: any) => void | Promise<T>) => Promise<T>
      reset: (options?: import('..').IFieldResetOptions) => Promise<void>
      queryFeedbacks: (
        search?: import('..').ISearchFeedback
      ) => import('..').IFieldFeedback[]
      modify: () => void
      title: string
      description: string
      initialized: boolean
      mounted: boolean
      unmounted: boolean
      content: any
      data: any
      decoratorType: any
      decoratorProps: Record<string, any>
      componentType: any
      componentProps: Record<string, any>
      designable: boolean
      form: Form<any>
      makeIndexes: (address: import('@formily/shared').FormPathPattern) => void
      component: import('..').FieldComponent<any, any>
      decorator: import('..').FieldDecorator<any, any>
      readonly parent: GeneralField
      display: import('..').FieldDisplayTypes
      pattern: import('..').FieldPatternTypes
      editable: boolean
      disabled: boolean
      readOnly: boolean
      readPretty: boolean
      hidden: boolean
      visible: boolean
      setTitle: (title?: string) => void
      setDescription: (description?: string) => void
      setDisplay: (type?: import('..').FieldDisplayTypes) => void
      setPattern: (type?: import('..').FieldPatternTypes) => void
      setComponent: <C extends unknown, ComponentProps extends object = {}>(
        component?: C,
        props?: ComponentProps
      ) => void
      setComponentProps: <ComponentProps_1 extends object = {}>(
        props?: ComponentProps_1
      ) => void
      setDecorator: <D extends unknown, ComponentProps_2 extends object = {}>(
        component?: D,
        props?: ComponentProps_2
      ) => void
      setDecoratorProps: <ComponentProps_3 extends object = {}>(
        props?: ComponentProps_3
      ) => void
      setData: (data: any) => void
      setContent: (content: any) => void
      onInit: () => void
      onMount: () => void
      onUnmount: () => void
      query: (pattern: import('@formily/shared').FormPathPattern) => Query
      notify: (type: import('..').LifeCycleTypes, payload?: any) => void
      dispose: () => void
      destroy: () => void
      match: (pattern: import('@formily/shared').FormPathPattern) => boolean
    }>
  >
>
export declare const isDataField: (node: any) => node is DataField
export declare const isDataFieldState: (node: any) => boolean
export declare const isObjectFieldState: (state: any) => state is Partial<
  Pick<
    Field<any, any, any, any>,
    import('..').NonFunctionPropertyNames<{
      loading: boolean
      validating: boolean
      submitting: boolean
      active: boolean
      visited: boolean
      selfModified: boolean
      modified: boolean
      inputValue: string
      inputValues: any[]
      dataSource: import('..').FieldDataSource
      validator: import('..').FieldValidator
      feedbacks: import('..').IFieldFeedback[]
      caches: import('..').IFieldCaches
      selfErrors: import('..').FeedbackMessage
      readonly errors: any
      selfWarnings: import('..').FeedbackMessage
      readonly warnings: import('..').IFormFeedback[]
      selfSuccesses: import('..').FeedbackMessage
      readonly successes: import('..').IFormFeedback[]
      readonly selfValid: boolean
      readonly valid: boolean
      readonly selfInvalid: boolean
      readonly invalid: boolean
      value: string
      initialValue: string
      required: boolean
      readonly validateStatus: 'error' | 'success' | 'warning' | 'validating'
      setDataSource: (dataSource?: import('..').FieldDataSource) => void
      setFeedback: (feedback?: import('..').IFieldFeedback) => void
      setSelfErrors: (messages?: import('..').FeedbackMessage) => void
      setSelfWarnings: (messages?: import('..').FeedbackMessage) => void
      setSelfSuccesses: (messages?: import('..').FeedbackMessage) => void
      setValidator: (validator?: import('..').FieldValidator) => void
      setValidatorRule: (name: string, value: any) => void
      setRequired: (required?: boolean) => void
      setValue: (value?: string) => void
      setInitialValue: (initialValue?: string) => void
      setLoading: (loading?: boolean) => void
      setValidating: (validating?: boolean) => void
      setSubmitting: (submitting?: boolean) => void
      onInput: (...args: any[]) => Promise<void>
      onFocus: (...args: any[]) => Promise<void>
      onBlur: (...args: any[]) => Promise<void>
      validate: (
        triggerType?: import('@formily/validator/esm').ValidatorTriggerType
      ) => Promise<void>
      submit: <T>(onSubmit?: (values: any) => void | Promise<T>) => Promise<T>
      reset: (options?: import('..').IFieldResetOptions) => Promise<void>
      queryFeedbacks: (
        search?: import('..').ISearchFeedback
      ) => import('..').IFieldFeedback[]
      modify: () => void
      title: string
      description: string
      initialized: boolean
      mounted: boolean
      unmounted: boolean
      content: any
      data: any
      decoratorType: any
      decoratorProps: Record<string, any>
      componentType: any
      componentProps: Record<string, any>
      designable: boolean
      form: Form<any>
      makeIndexes: (address: import('@formily/shared').FormPathPattern) => void
      component: import('..').FieldComponent<any, any>
      decorator: import('..').FieldDecorator<any, any>
      readonly parent: GeneralField
      display: import('..').FieldDisplayTypes
      pattern: import('..').FieldPatternTypes
      editable: boolean
      disabled: boolean
      readOnly: boolean
      readPretty: boolean
      hidden: boolean
      visible: boolean
      setTitle: (title?: string) => void
      setDescription: (description?: string) => void
      setDisplay: (type?: import('..').FieldDisplayTypes) => void
      setPattern: (type?: import('..').FieldPatternTypes) => void
      setComponent: <C extends unknown, ComponentProps extends object = {}>(
        component?: C,
        props?: ComponentProps
      ) => void
      setComponentProps: <ComponentProps_1 extends object = {}>(
        props?: ComponentProps_1
      ) => void
      setDecorator: <D extends unknown, ComponentProps_2 extends object = {}>(
        component?: D,
        props?: ComponentProps_2
      ) => void
      setDecoratorProps: <ComponentProps_3 extends object = {}>(
        props?: ComponentProps_3
      ) => void
      setData: (data: any) => void
      setContent: (content: any) => void
      onInit: () => void
      onMount: () => void
      onUnmount: () => void
      query: (pattern: import('@formily/shared').FormPathPattern) => Query
      notify: (type: import('..').LifeCycleTypes, payload?: any) => void
      dispose: () => void
      destroy: () => void
      match: (pattern: import('@formily/shared').FormPathPattern) => boolean
    }>
  >
>
export declare const isVoidFieldState: (state: any) => state is Partial<
  Pick<
    VoidField<any, any, any>,
    import('..').NonFunctionPropertyNames<{
      title: string
      description: string
      initialized: boolean
      mounted: boolean
      unmounted: boolean
      content: any
      data: any
      decoratorType: any
      decoratorProps: Record<string, any>
      componentType: any
      componentProps: Record<string, any>
      designable: boolean
      form: Form<any>
      makeIndexes: (address: import('@formily/shared').FormPathPattern) => void
      component: import('..').FieldComponent<any, any>
      decorator: import('..').FieldDecorator<any, any>
      readonly parent: GeneralField
      display: import('..').FieldDisplayTypes
      pattern: import('..').FieldPatternTypes
      editable: boolean
      disabled: boolean
      readOnly: boolean
      readPretty: boolean
      hidden: boolean
      visible: boolean
      setTitle: (title?: string) => void
      setDescription: (description?: string) => void
      setDisplay: (type?: import('..').FieldDisplayTypes) => void
      setPattern: (type?: import('..').FieldPatternTypes) => void
      setComponent: <C extends unknown, ComponentProps extends object = {}>(
        component?: C,
        props?: ComponentProps
      ) => void
      setComponentProps: <ComponentProps_1 extends object = {}>(
        props?: ComponentProps_1
      ) => void
      setDecorator: <D extends unknown, ComponentProps_2 extends object = {}>(
        component?: D,
        props?: ComponentProps_2
      ) => void
      setDecoratorProps: <ComponentProps_3 extends object = {}>(
        props?: ComponentProps_3
      ) => void
      setData: (data: any) => void
      setContent: (content: any) => void
      onInit: () => void
      onMount: () => void
      onUnmount: () => void
      query: (pattern: import('@formily/shared').FormPathPattern) => Query
      notify: (type: import('..').LifeCycleTypes, payload?: any) => void
      dispose: () => void
      destroy: () => void
      match: (pattern: import('@formily/shared').FormPathPattern) => boolean
    }>
  >
>
export declare const isQuery: (query: any) => query is Query
