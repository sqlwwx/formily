var isType = function (type) {
  return function (obj) {
    return getType(obj) === '[object '.concat(type, ']')
  }
}
export var getType = function (obj) {
  return Object.prototype.toString.call(obj)
}
export var isFn = function (val) {
  return typeof val === 'function'
}
export var isArr = Array.isArray
export var isPlainObj = isType('Object')
export var isStr = isType('String')
export var isBool = isType('Boolean')
export var isNum = isType('Number')
export var isMap = function (val) {
  return val && val instanceof Map
}
export var isSet = function (val) {
  return val && val instanceof Set
}
export var isWeakMap = function (val) {
  return val && val instanceof WeakMap
}
export var isWeakSet = function (val) {
  return val && val instanceof WeakSet
}
export var isNumberLike = function (index) {
  return isNum(index) || /^\d+$/.test(index)
}
export var isObj = function (val) {
  return typeof val === 'object'
}
export var isRegExp = isType('RegExp')
export var isReactElement = function (obj) {
  return obj && obj['$$typeof'] && obj['_owner']
}
export var isHTMLElement = function (target) {
  return Object.prototype.toString.call(target).indexOf('HTML') > -1
}
//# sourceMappingURL=checkers.js.map
