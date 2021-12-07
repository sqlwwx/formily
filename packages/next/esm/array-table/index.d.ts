import React from 'react'
import { PaginationProps } from '@alifd/next/lib/pagination'
import { TableProps, ColumnProps } from '@alifd/next/lib/table'
import { ArrayBaseMixins } from '../array-base'
interface ExtendTableProps extends TableProps {
  pagination?: PaginationProps
}
declare type ComposedArrayTable = React.FC<ExtendTableProps> &
  ArrayBaseMixins & {
    Column?: React.FC<ColumnProps>
  }
export declare const ArrayTable: ComposedArrayTable
export default ArrayTable
