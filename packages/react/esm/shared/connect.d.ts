import React from 'react'
import { observer, Observer } from '@formily/reactive-react'
import { JSXComponent, IComponentMapper, IStateMapper } from '../types'
export declare function mapProps<T extends JSXComponent>(
  ...args: IStateMapper<React.ComponentProps<T>>[]
): (target: T) => React.MemoExoticComponent<React.FunctionComponent<any>>
export declare function mapReadPretty<
  T extends JSXComponent,
  C extends JSXComponent
>(
  component: C,
  readPrettyProps?: React.ComponentProps<C>
): (target: T) => React.MemoExoticComponent<
  React.FunctionComponent<{
    ref?: React.RefAttributes<any>
  }>
>
export declare function connect<T extends JSXComponent>(
  target: T,
  ...args: IComponentMapper<T>[]
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Partial<React.ComponentProps<T>>> &
    React.RefAttributes<unknown>
>
export { observer, Observer }
