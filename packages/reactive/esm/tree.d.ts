import { ObservablePath, PropertyKey, IOperation } from './types'
export declare class DataChange {
  path: ObservablePath
  key: PropertyKey
  object: object
  type: string
  value: any
  oldValue: any
  constructor(operation: IOperation, node: DataNode)
}
export declare class DataNode {
  target: any
  key: PropertyKey
  value: any
  constructor(target: any, key: PropertyKey, value: any)
  get path(): any
  get targetRaw(): any
  get parent(): DataNode
  isEqual(node: DataNode): boolean
  contains(node: DataNode): boolean
}
export declare const buildDataTree: (
  target: any,
  key: PropertyKey,
  value: any
) => DataNode
