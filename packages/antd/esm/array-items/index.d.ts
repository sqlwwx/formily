import React from 'react'
import { ArrayBaseMixins } from '../array-base'
declare type ComposedArrayItems = React.FC<
  React.HTMLAttributes<HTMLDivElement>
> &
  ArrayBaseMixins & {
    Item?: React.FC<
      React.HTMLAttributes<HTMLDivElement> & {
        type?: 'card' | 'divide'
      }
    >
  }
export declare const ArrayItems: ComposedArrayItems
export default ArrayItems
