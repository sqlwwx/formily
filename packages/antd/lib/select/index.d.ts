import React from 'react'
export declare const Select: React.ForwardRefExoticComponent<
  Pick<
    Partial<
      import('antd').SelectProps<import('antd/lib/select').SelectValue> & {
        ref?: React.Ref<import('antd/lib/select').RefSelectProps>
      }
    >,
    keyof import('antd').SelectProps<import('antd/lib/select').SelectValue>
  > &
    React.RefAttributes<unknown>
>
export default Select
