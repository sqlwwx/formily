import React from 'react'
export interface toArrayOption {
  keepEmpty?: boolean
}
export declare function toArray(
  children: React.ReactNode,
  option?: toArrayOption
): React.ReactElement[]
