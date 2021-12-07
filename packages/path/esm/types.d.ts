import { Path } from './index'
interface INode {
  type?: string
  after?: Node
  depth?: number
}
export declare type Node =
  | IdentifierNode
  | WildcardOperatorNode
  | GroupExpressionNode
  | RangeExpressionNode
  | DestructorExpressionNode
  | ObjectPatternNode
  | ArrayPatternNode
  | DotOperatorNode
  | ExpandOperatorNode
  | INode
export declare type IdentifierNode = {
  type: 'Identifier'
  value: string
  arrayIndex?: boolean
} & INode
export declare type IgnoreExpressionNode = {
  type: 'IgnoreExpression'
  value: string
} & INode
export declare type DotOperatorNode = {
  type: 'DotOperator'
} & INode
export declare type WildcardOperatorNode = {
  type: 'WildcardOperator'
  filter?: GroupExpressionNode | RangeExpressionNode
  optional?: boolean
} & INode
export declare type ExpandOperatorNode = {
  type: 'ExpandOperator'
} & INode
export declare type GroupExpressionNode = {
  type: 'GroupExpression'
  value: Node[]
  isExclude?: boolean
} & INode
export declare type RangeExpressionNode = {
  type: 'RangeExpression'
  start?: IdentifierNode
  end?: IdentifierNode
} & INode
export declare type DestructorExpressionNode = {
  type: 'DestructorExpression'
  value?: ObjectPatternNode | ArrayPatternNode
  source?: string
} & INode
export declare type ObjectPatternNode = {
  type: 'ObjectPattern'
  properties: ObjectPatternPropertyNode[]
} & INode
export declare type ObjectPatternPropertyNode = {
  type: 'ObjectPatternProperty'
  key: IdentifierNode
  value?: ObjectPatternNode[] | ArrayPatternNode[] | IdentifierNode
} & INode
export declare type ArrayPatternNode = {
  type: 'ArrayPattern'
  elements: ObjectPatternNode[] | ArrayPatternNode[] | IdentifierNode[]
} & INode
export declare type DestructorRule = {
  key?: string | number
  path?: Array<number | string>
}
export declare type MatcherFunction = ((path: Segments) => boolean) & {
  path: Path
}
export declare type Pattern =
  | string
  | number
  | Path
  | Segments
  | MatcherFunction
  | RegExp
export declare type DestructorRules = DestructorRule[]
export declare type Segments = Array<string | number>
export declare const isType: <T>(type: string) => (obj: any) => obj is T
export declare const isIdentifier: (obj: any) => obj is IdentifierNode
export declare const isIgnoreExpression: (
  obj: any
) => obj is IgnoreExpressionNode
export declare const isDotOperator: (obj: any) => obj is DotOperatorNode
export declare const isWildcardOperator: (
  obj: any
) => obj is WildcardOperatorNode
export declare const isExpandOperator: (obj: any) => obj is ExpandOperatorNode
export declare const isGroupExpression: (obj: any) => obj is GroupExpressionNode
export declare const isRangeExpression: (obj: any) => obj is RangeExpressionNode
export declare const isDestructorExpression: (
  obj: any
) => obj is DestructorExpressionNode
export declare const isObjectPattern: (obj: any) => obj is ObjectPatternNode
export declare const isObjectPatternProperty: (
  obj: any
) => obj is ObjectPatternPropertyNode
export declare const isArrayPattern: (obj: any) => obj is ArrayPatternNode
export declare type KeyType = string | number | symbol
export declare type IAccessors = {
  get?: (source: any, key: KeyType) => any
  set?: (source: any, key: KeyType, value: any) => any
  has?: (source: any, key: KeyType) => boolean
  delete?: (source: any, key: KeyType) => any
}
export declare type IRegistry = {
  accessors?: IAccessors
}
export {}
