import { Tokenizer } from './tokenizer'
import { Token } from './tokens'
import {
  IdentifierNode,
  ExpandOperatorNode,
  WildcardOperatorNode,
  RangeExpressionNode,
  GroupExpressionNode,
  IgnoreExpressionNode,
  DestructorExpressionNode,
  ObjectPatternNode,
  ObjectPatternPropertyNode,
  ArrayPatternNode,
  Node,
  Segments,
} from './types'
import { Path } from './index'
export declare class Parser extends Tokenizer {
  isMatchPattern: boolean
  isWildMatchPattern: boolean
  haveExcludePattern: boolean
  base: Path
  relative: string | number
  data: {
    segments: Segments
    tree?: Node
  }
  constructor(input: string, base?: Path)
  parse(): Node
  append(parent: Node, node: Node): void
  parseAtom(type: Token): Node
  pushSegments(key: string | number): void
  parseIdentifier(): IdentifierNode
  parseExpandOperator(): ExpandOperatorNode
  parseWildcardOperator(): WildcardOperatorNode
  parseDestructorExpression(): DestructorExpressionNode
  parseArrayPattern(): ArrayPatternNode
  parseArrayPatternElements(): any[]
  parseObjectPattern(): ObjectPatternNode
  parseObjectProperties(): ObjectPatternPropertyNode[]
  parseDotOperator(): Node
  parseIgnoreExpression(): IgnoreExpressionNode
  parseGroupExpression(parent: Node): GroupExpressionNode
  parseRangeExpression(parent: Node): RangeExpressionNode
}
