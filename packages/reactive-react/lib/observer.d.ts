import React from 'react'
import { IObserverOptions, IObserverProps } from './types'
export declare function observer<
  P,
  Options extends IObserverOptions = IObserverOptions
>(
  component: React.FunctionComponent<P>,
  options?: Options
): React.MemoExoticComponent<
  React.FunctionComponent<
    Options extends {
      forwardRef: true
    }
      ? P & {
          ref?: 'ref' extends keyof P ? P['ref'] : React.RefAttributes<any>
        }
      : React.PropsWithoutRef<P>
  >
>
export declare const Observer: React.MemoExoticComponent<
  React.FunctionComponent<IObserverProps>
>
