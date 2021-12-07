'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.isSegmentEqual =
  exports.isEqual =
  exports.isAssignable =
  exports.toArr =
  exports.isNumberLike =
  exports.isRegExp =
  exports.isObj =
  exports.isNum =
  exports.isBool =
  exports.isStr =
  exports.isPlainObj =
  exports.isArr =
  exports.isFn =
    void 0
var toString = Object.prototype.toString
var isType = function (type) {
  return function (obj) {
    return toString.call(obj) === '[object '.concat(type, ']')
  }
}
exports.isFn = isType('Function')
exports.isArr = Array.isArray || isType('Array')
exports.isPlainObj = isType('Object')
exports.isStr = isType('String')
exports.isBool = isType('Boolean')
exports.isNum = isType('Number')
var isObj = function (val) {
  return typeof val === 'object'
}
exports.isObj = isObj
exports.isRegExp = isType('RegExp')
var isNumberLike = function (t) {
  return (0, exports.isNum)(t) || /^(\d+)(\.\d+)?$/.test(t)
}
exports.isNumberLike = isNumberLike
var isArray = exports.isArr
var keyList = Object.keys
var hasProp = Object.prototype.hasOwnProperty
var toArr = function (val) {
  return Array.isArray(val) ? val : val !== undefined ? [val] : []
}
exports.toArr = toArr
var isAssignable = function (val) {
  return typeof val === 'object' || typeof val === 'function'
}
exports.isAssignable = isAssignable
var isEqual = function (a, b) {
  if (a === b) {
    return true
  }
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    var arrA = isArray(a)
    var arrB = isArray(b)
    var i = void 0
    var length = void 0
    var key = void 0
    if (arrA && arrB) {
      length = a.length
      if (length !== b.length) {
        return false
      }
      for (i = length; i-- !== 0; ) {
        if (!(0, exports.isEqual)(a[i], b[i])) {
          return false
        }
      }
      return true
    }
    if (arrA !== arrB) {
      return false
    }
    var keys = keyList(a)
    length = keys.length
    if (length !== keyList(b).length) {
      return false
    }
    for (i = length; i-- !== 0; ) {
      if (!hasProp.call(b, keys[i])) {
        return false
      }
    }
    for (i = length; i-- !== 0; ) {
      key = keys[i]
      if (!(0, exports.isEqual)(a[key], b[key])) {
        return false
      }
    }
    return true
  }
  return a !== a && b !== b
}
exports.isEqual = isEqual
var isSegmentEqual = function (a, b) {
  a = typeof a === 'symbol' ? a : ''.concat(a)
  b = typeof b === 'symbol' ? b : ''.concat(b)
  return a === b
}
exports.isSegmentEqual = isSegmentEqual
//# sourceMappingURL=shared.js.map
