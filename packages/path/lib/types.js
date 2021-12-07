'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.isArrayPattern =
  exports.isObjectPatternProperty =
  exports.isObjectPattern =
  exports.isDestructorExpression =
  exports.isRangeExpression =
  exports.isGroupExpression =
  exports.isExpandOperator =
  exports.isWildcardOperator =
  exports.isDotOperator =
  exports.isIgnoreExpression =
  exports.isIdentifier =
  exports.isType =
    void 0
var isType = function (type) {
  return function (obj) {
    return obj && obj.type === type
  }
}
exports.isType = isType
exports.isIdentifier = (0, exports.isType)('Identifier')
exports.isIgnoreExpression = (0, exports.isType)('IgnoreExpression')
exports.isDotOperator = (0, exports.isType)('DotOperator')
exports.isWildcardOperator = (0, exports.isType)('WildcardOperator')
exports.isExpandOperator = (0, exports.isType)('ExpandOperator')
exports.isGroupExpression = (0, exports.isType)('GroupExpression')
exports.isRangeExpression = (0, exports.isType)('RangeExpression')
exports.isDestructorExpression = (0, exports.isType)('DestructorExpression')
exports.isObjectPattern = (0, exports.isType)('ObjectPattern')
exports.isObjectPatternProperty = (0, exports.isType)('ObjectPatternProperty')
exports.isArrayPattern = (0, exports.isType)('ArrayPattern')
//# sourceMappingURL=types.js.map
