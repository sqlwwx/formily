export interface IGridOptions {
  maxRows?: number
  maxColumns?: number | number[]
  minColumns?: number | number[]
  maxWidth?: number | number[]
  minWidth?: number | number[]
  breakpoints?: number[]
  columnGap?: number
  rowGap?: number
  colWrap?: boolean
  strictAutoFit?: boolean
  shouldVisible?: (node: GridNode, grid: Grid<HTMLElement>) => boolean
  onDigest?: (grid: Grid<HTMLElement>) => void
  onInitialized?: (grid: Grid<HTMLElement>) => void
}
export declare type GridNode = {
  index?: number
  visible?: boolean
  column?: number
  shadowColumn?: number
  row?: number
  shadowRow?: number
  span?: number
  originSpan?: number
  element?: HTMLElement
}
export declare class Grid<Container extends HTMLElement> {
  options: IGridOptions
  width: number
  height: number
  container: Container
  children: GridNode[]
  childTotalColumns: number
  shadowChildTotalColumns: number
  childOriginTotalColumns: number
  shadowChildOriginTotalColumns: number
  ready: boolean
  constructor(options?: IGridOptions)
  set breakpoints(breakpoints: number[])
  get breakpoints(): number[]
  get breakpoint(): number
  set maxWidth(maxWidth: number)
  get maxWidth(): number
  set minWidth(minWidth: number)
  get minWidth(): number
  set maxColumns(maxColumns: number)
  get maxColumns(): number
  set maxRows(maxRows: number)
  get maxRows(): number
  set minColumns(minColumns: number)
  get minColumns(): number
  set rowGap(rowGap: number)
  get rowGap(): number
  set columnGap(columnGap: number)
  get columnGap(): number
  set colWrap(colWrap: boolean)
  get colWrap(): boolean
  get columns(): number
  get rows(): number
  get shadowRows(): number
  get templateColumns(): string
  get gap(): string
  get childSize(): number
  get fullnessLastColumn(): boolean
  connect: (container: Container) => () => void
  static id: (options?: IGridOptions) => string
}
