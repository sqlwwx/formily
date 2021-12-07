interface ITokenProps {
  expectNext?: (next?: Token) => boolean
  expectPrev?: (prev?: Token) => boolean
  updateContext?: (prev?: Token) => void
}
export declare type Token = ITokenProps & {
  flag: string
}
export declare const nameTok: Token
export declare const starTok: Token
export declare const dbStarTok: Token
export declare const dotTok: Token
export declare const bangTok: Token
export declare const colonTok: Token
export declare const braceLTok: Token
export declare const braceRTok: Token
export declare const bracketLTok: Token
export declare const bracketRTok: Token
export declare const bracketDLTok: Token
export declare const bracketDRTok: Token
export declare const parenLTok: Token
export declare const parenRTok: Token
export declare const commaTok: Token
export declare const ignoreTok: Token
export declare const expandTok: Token
export declare const eofTok: Token
export {}
