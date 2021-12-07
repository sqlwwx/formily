import React from 'react'
import { CardProps } from 'antd/lib/card'
import { IGridOptions } from '@formily/grid'
import { ArrayBaseMixins } from '../array-base'
interface ArrayCardsProps extends CardProps {
  grid?: IGridOptions
  pagination?: any
}
declare type ComposedArrayCards = React.FC<ArrayCardsProps> & ArrayBaseMixins
export declare const ArrayCards: ComposedArrayCards
export default ArrayCards
