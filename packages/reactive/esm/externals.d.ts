import { Annotation } from './types'
export declare const isObservable: (target: any) => boolean
export declare const isAnnotation: (target: any) => target is Annotation
export declare const isSupportObservable: (target: any) => boolean
export declare const markRaw: <T>(target: T) => T
export declare const markObservable: <T>(target: T) => T
export declare const raw: <T>(target: T) => T
export declare const toJS: <T>(values: T) => T
export declare const contains: (target: any, property: any) => boolean
export declare const hasCollected: (callback?: () => void) => boolean
