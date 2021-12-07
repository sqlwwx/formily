import React from 'react'
export interface ISpaceProps {
  prefix?: string
  className?: string
  style?: React.CSSProperties
  size?: number | 'small' | 'large' | 'middle'
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  wrap?: boolean
}
export declare const Space: React.FC<ISpaceProps>
export default Space
