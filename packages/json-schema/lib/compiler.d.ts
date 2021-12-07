import { IGeneralFieldState } from '@formily/core'
import { ISchema } from './types'
export declare const silent: (value?: boolean) => void
export declare const registerCompiler: (
  compiler: (expression: string, scope: any) => any
) => void
export declare const shallowCompile: <Source = any, Scope = any>(
  source: Source,
  scope?: Scope
) => any
export declare const compile: <Source = any, Scope = any>(
  source: Source,
  scope?: Scope
) => any
export declare const patchCompile: (
  targetState: IGeneralFieldState,
  sourceState: any,
  scope: any
) => void
export declare const patchSchemaCompile: (
  targetState: IGeneralFieldState,
  sourceSchema: ISchema,
  scope: any,
  demand?: boolean
) => void
