import React from 'react'
import { CascaderProps } from 'antd'
interface CascaderRef {
  focus: () => void
  blur: () => void
}
export declare const Cascader: React.ForwardRefExoticComponent<
  Pick<
    Partial<
      CascaderProps &
        React.RefAttributes<CascaderRef> & {
          suffixIcon?: React.ReactNode
        }
    >,
    'key' | 'suffixIcon' | keyof CascaderProps
  > &
    React.RefAttributes<unknown>
>
export default Cascader
