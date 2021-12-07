import { SchemaPatch } from './types'
export declare const reducePatches: (schema: any) => any
export declare const registerPatches: (...args: SchemaPatch[]) => void
export declare const registerPolyfills: (
  version: string,
  patch: SchemaPatch
) => void
export declare const enablePolyfills: (versions?: string[]) => void
