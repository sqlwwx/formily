import { DataChange } from './tree'
export declare const observe: (
  target: object,
  observer?: (change: DataChange) => void,
  deep?: boolean
) => () => void
