import {
  ValidatorDescription,
  ValidatorParsedFunction,
  Validator,
  IValidatorRules,
  IValidatorOptions,
} from './types'
export declare const parseValidatorDescription: (
  description: ValidatorDescription
) => IValidatorRules
export declare const parseValidatorDescriptions: <Context = any>(
  validator: Validator<Context>
) => IValidatorRules[]
export declare const parseValidatorRules: (
  rules?: IValidatorRules
) => ValidatorParsedFunction[]
export declare const parseValidator: <Context = any>(
  validator: Validator<Context>,
  options?: IValidatorOptions
) => ValidatorParsedFunction<Context>[]
