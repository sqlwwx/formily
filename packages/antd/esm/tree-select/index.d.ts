import React from 'react'
export declare const TreeSelect: React.ForwardRefExoticComponent<
  Pick<
    Partial<
      import('antd').TreeSelectProps<
        import('rc-tree-select/lib/interface').DefaultValueType
      > & {
        ref?: React.Ref<import('antd/lib/tree-select').RefTreeSelectProps>
      }
    >,
    keyof import('antd').TreeSelectProps<
      import('rc-tree-select/lib/interface').DefaultValueType
    >
  > &
    React.RefAttributes<unknown>
>
export default TreeSelect
