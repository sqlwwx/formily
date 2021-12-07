import { PropertyKey, IVisitor, BoundaryFunction } from './types'
export declare const createObservable: (
  target: any,
  key?: PropertyKey,
  value?: any,
  shallow?: boolean
) => any
export declare const createAnnotation: <T extends (visitor: IVisitor) => any>(
  maker: T
) => (target: any) => ReturnType<T>
export declare const getObservableMaker: (target: any) => any
export declare const createBoundaryFunction: (
  start: (...args: any) => void,
  end: (...args: any) => void
) => {
  <F extends (...args: any) => any>(fn?: F): ReturnType<F>
  bound: <F_1 extends (...args: any[]) => any>(
    callback?: F_1,
    context?: any
  ) => F_1
}
export declare const createBindFunction: <Boundary extends BoundaryFunction>(
  boundary: Boundary
) => <F extends (...args: any[]) => any>(callback?: F, context?: any) => F
export declare const createBoundaryAnnotation: (
  start: (...args: any) => void,
  end: (...args: any) => void
) => {
  <F extends (...args: any) => any>(fn?: F): ReturnType<F>
  bound: <F_1 extends (...args: any[]) => any>(
    callback?: F_1,
    context?: any
  ) => F_1
}
