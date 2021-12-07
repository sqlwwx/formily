import { FormPath, FormPathPattern } from '@formily/shared'
import { GeneralField, IGeneralFieldState, IQueryProps } from '../types'
export declare class Query {
  private pattern
  private addresses
  private form
  constructor(props: IQueryProps)
  take(): GeneralField
  take<Result>(
    getter: (field: GeneralField, address: FormPath) => Result
  ): Result
  map(): GeneralField[]
  map<Result>(
    iterator?: (field: GeneralField, address: FormPath) => Result
  ): Result[]
  forEach<Result>(
    iterator: (field: GeneralField, address: FormPath) => Result
  ): void
  reduce<Result>(
    reducer: (value: Result, field: GeneralField, address: FormPath) => Result,
    initial?: Result
  ): Result
  get<K extends keyof IGeneralFieldState>(key: K): IGeneralFieldState[K]
  getIn(pattern?: FormPathPattern): any
  value(): any
  initialValue(): any
}
