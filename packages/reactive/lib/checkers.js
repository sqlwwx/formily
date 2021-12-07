'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.isNormalType =
  exports.isCollectionType =
  exports.isValid =
  exports.isPlainObj =
  exports.isArr =
  exports.isFn =
  exports.isWeakSet =
  exports.isWeakMap =
  exports.isSet =
  exports.isMap =
    void 0
var isMap = function (val) {
  return val && val instanceof Map
}
exports.isMap = isMap
var isSet = function (val) {
  return val && val instanceof Set
}
exports.isSet = isSet
var isWeakMap = function (val) {
  return val && val instanceof WeakMap
}
exports.isWeakMap = isWeakMap
var isWeakSet = function (val) {
  return val && val instanceof WeakSet
}
exports.isWeakSet = isWeakSet
var isFn = function (val) {
  return typeof val === 'function'
}
exports.isFn = isFn
exports.isArr = Array.isArray
var isPlainObj = function (val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}
exports.isPlainObj = isPlainObj
var isValid = function (val) {
  return val !== null && val !== undefined
}
exports.isValid = isValid
var isCollectionType = function (target) {
  return (
    (0, exports.isMap)(target) ||
    (0, exports.isWeakMap)(target) ||
    (0, exports.isSet)(target) ||
    (0, exports.isWeakSet)(target)
  )
}
exports.isCollectionType = isCollectionType
var isNormalType = function (target) {
  return (0, exports.isPlainObj)(target) || (0, exports.isArr)(target)
}
exports.isNormalType = isNormalType
//# sourceMappingURL=checkers.js.map
