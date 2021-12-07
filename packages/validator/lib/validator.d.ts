import { IValidateResults, Validator, IValidatorOptions } from './types'
export declare const validate: <Context = any>(
  value: any,
  validator: Validator<Context>,
  options?: IValidatorOptions<Context>
) => Promise<IValidateResults>
