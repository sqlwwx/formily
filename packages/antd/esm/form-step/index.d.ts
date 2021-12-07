import React from 'react'
import { StepsProps, StepProps } from 'antd/lib/steps'
import { Form, VoidField } from '@formily/core'
import { Schema, SchemaKey } from '@formily/json-schema'
export interface IFormStep {
  connect: (steps: SchemaStep[], field: VoidField) => void
  current: number
  allowNext: boolean
  allowBack: boolean
  setCurrent(key: number): void
  submit: Form['submit']
  next(): void
  back(): void
}
export interface IFormStepProps extends StepsProps {
  formStep?: IFormStep
}
declare type ComposedFormTab = React.FC<IFormStepProps> & {
  StepPane?: React.FC<StepProps>
  createFormStep?: (defaultCurrent?: number) => IFormStep
}
declare type SchemaStep = {
  name: SchemaKey
  props: any
  schema: Schema
}
export declare const FormStep: ComposedFormTab
export default FormStep
