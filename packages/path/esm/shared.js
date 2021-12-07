var toString = Object.prototype.toString
var isType = function (type) {
  return function (obj) {
    return toString.call(obj) === '[object '.concat(type, ']')
  }
}
export var isFn = isType('Function')
export var isArr = Array.isArray || isType('Array')
export var isPlainObj = isType('Object')
export var isStr = isType('String')
export var isBool = isType('Boolean')
export var isNum = isType('Number')
export var isObj = function (val) {
  return typeof val === 'object'
}
export var isRegExp = isType('RegExp')
export var isNumberLike = function (t) {
  return isNum(t) || /^(\d+)(\.\d+)?$/.test(t)
}
var isArray = isArr
var keyList = Object.keys
var hasProp = Object.prototype.hasOwnProperty
export var toArr = function (val) {
  return Array.isArray(val) ? val : val !== undefined ? [val] : []
}
export var isAssignable = function (val) {
  return typeof val === 'object' || typeof val === 'function'
}
export var isEqual = function (a, b) {
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
        if (!isEqual(a[i], b[i])) {
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
      if (!isEqual(a[key], b[key])) {
        return false
      }
    }
    return true
  }
  return a !== a && b !== b
}
export var isSegmentEqual = function (a, b) {
  a = typeof a === 'symbol' ? a : ''.concat(a)
  b = typeof b === 'symbol' ? b : ''.concat(b)
  return a === b
}
//# sourceMappingURL=shared.js.map
