export var isType = function (type) {
  return function (obj) {
    return obj && obj.type === type
  }
}
export var isIdentifier = isType('Identifier')
export var isIgnoreExpression = isType('IgnoreExpression')
export var isDotOperator = isType('DotOperator')
export var isWildcardOperator = isType('WildcardOperator')
export var isExpandOperator = isType('ExpandOperator')
export var isGroupExpression = isType('GroupExpression')
export var isRangeExpression = isType('RangeExpression')
export var isDestructorExpression = isType('DestructorExpression')
export var isObjectPattern = isType('ObjectPattern')
export var isObjectPatternProperty = isType('ObjectPatternProperty')
export var isArrayPattern = isType('ArrayPattern')
//# sourceMappingURL=types.js.map
