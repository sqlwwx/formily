import { Token } from './tokens'
import { Context } from './contexts'
export declare class Tokenizer {
  input: string
  state: {
    context: Context[]
    type: Token
    pos: number
    value?: any
  }
  type_: Token
  constructor(input: string)
  curContext(): Context
  includesContext(context: Context): boolean
  unexpect(type?: Token): Error
  expectNext(type?: Token, next?: Token): void
  expectPrev(type?: Token, prev?: Token): void
  match(type?: Token): boolean
  skipSpace(): void
  next(): void
  getCode(pos?: number): number
  eat(type: any): boolean
  readKeyWord(): void
  readIngoreString(): void
  finishToken(type: Token, value?: any): void
  readToken(code: number, prevCode: number): void
}
