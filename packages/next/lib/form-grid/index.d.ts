import React from 'react'
import { Grid, IGridOptions } from '@formily/grid'
export interface IFormGridProps extends IGridOptions {
  grid?: Grid<HTMLElement>
  prefix?: string
  className?: string
  style?: React.CSSProperties
}
export interface IGridColumnProps {
  gridSpan?: number
  style?: React.CSSProperties
  className?: string
}
declare type ComposedFormGrid = React.FC<IFormGridProps> & {
  GridColumn: React.FC<IGridColumnProps>
  useFormGrid: () => Grid<HTMLElement>
  createFormGrid: (props: IFormGridProps) => Grid<HTMLElement>
  /**
   * @deprecated
   */
  useGridSpan: (gridSpan: number) => number
  /**
   * @deprecated
   */
  useGridColumn: (gridSpan: number) => number
}
export declare const createFormGrid: (
  props: IFormGridProps
) => Grid<HTMLElement>
export declare const useFormGrid: () => Grid<HTMLElement>
/**
 * @deprecated
 */
export declare const useGridSpan: (gridSpan?: number) => number
/**
 * @deprecated
 */
export declare const useGridColumn: (gridSpan?: number) => number
export declare const FormGrid: ComposedFormGrid
export declare const GridColumn: React.FC<IGridColumnProps>
export default FormGrid
