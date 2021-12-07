import {
  Segments,
  Node,
  IdentifierNode,
  IgnoreExpressionNode,
  DestructorExpressionNode,
  ExpandOperatorNode,
  WildcardOperatorNode,
  GroupExpressionNode,
  RangeExpressionNode,
  DotOperatorNode,
} from './types'
export declare class Matcher {
  private tree
  private pos
  private tail
  private stack
  private excluding
  private record
  constructor(tree: Node, record?: any)
  currentElement(path: Segments): string
  matchNext: (node: any, path: any) => any
  recordMatch(match: () => boolean): () => boolean
  matchIdentifier(path: Segments, node: IdentifierNode): any
  matchIgnoreExpression(path: Segments, node: IgnoreExpressionNode): any
  matchDestructorExpression(path: Segments, node: DestructorExpressionNode): any
  matchExpandOperator(path: Segments, node: ExpandOperatorNode): any
  matchWildcardOperator(path: Segments, node: WildcardOperatorNode): any
  matchGroupExpression(path: Segments, node: GroupExpressionNode): any
  matchRangeExpression(path: Segments, node: RangeExpressionNode): boolean
  matchDotOperator(path: Segments, node: DotOperatorNode): any
  matchAtom(path: Segments, node: Node): any
  match(path: Segments):
    | {
        matched: boolean
        record?: undefined
      }
    | {
        matched: any
        record: any
      }
  static matchSegments(
    source: Segments,
    target: Segments,
    record?: any
  ):
    | false
    | {
        matched: any
        record: any
      }
}
