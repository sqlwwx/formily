import { Annotations } from './types'
export declare function define<Target extends object = any>(
  target: Target,
  annotations?: Annotations<Target>
): Target
export declare function model<Target extends object = any>(
  target: Target
): Target
