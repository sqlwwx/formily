import { Segments, Node, DestructorRules } from './types'
declare type Mutators = {
  getIn: (segments: Segments, source: any) => any
  setIn: (segments: Segments, source: any, value: any) => void
  deleteIn?: (segments: Segments, source: any) => any
  existIn?: (segments: Segments, source: any, start: number) => boolean
}
export declare const getDestructor: (source: string) => any
export declare const setDestructor: (
  source: string,
  rules: DestructorRules
) => void
export declare const parseDestructorRules: (node: Node) => DestructorRules
export declare const setInByDestructor: (
  source: any,
  rules: DestructorRules,
  value: any,
  mutators: Mutators
) => void
export declare const getInByDestructor: (
  source: any,
  rules: DestructorRules,
  mutators: Mutators
) => {}
export declare const deleteInByDestructor: (
  source: any,
  rules: DestructorRules,
  mutators: Mutators
) => void
export declare const existInByDestructor: (
  source: any,
  rules: DestructorRules,
  start: number,
  mutators: Mutators
) => boolean
export {}
