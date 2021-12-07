import {
  isValid,
  isFn,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isPlainObj,
  isArr,
} from './checkers'
import {
  ProxyRaw,
  MakeObservableSymbol,
  DependencyCollected,
  RawNode,
} from './environment'
var RAW_TYPE = Symbol('RAW_TYPE')
var OBSERVABLE_TYPE = Symbol('OBSERVABLE_TYPE')
var hasOwnProperty = Object.prototype.hasOwnProperty
export var isObservable = function (target) {
  return ProxyRaw.has(target)
}
export var isAnnotation = function (target) {
  return target && !!target[MakeObservableSymbol]
}
export var isSupportObservable = function (target) {
  if (!isValid(target)) return false
  if (isArr(target)) return true
  if (isPlainObj(target)) {
    if (target[RAW_TYPE]) {
      return false
    }
    if (target[OBSERVABLE_TYPE]) {
      return true
    }
    if ('$$typeof' in target && '_owner' in target) {
      return false
    }
    if (target['_isAMomentObject']) {
      return false
    }
    if (target['_isJSONSchemaObject']) {
      return false
    }
    if (isFn(target['toJS'])) {
      return false
    }
    if (isFn(target['toJSON'])) {
      return false
    }
    return true
  }
  if (isMap(target) || isWeakMap(target) || isSet(target) || isWeakSet(target))
    return true
  return false
}
export var markRaw = function (target) {
  if (!target) return
  if (isFn(target)) {
    target.prototype[RAW_TYPE] = true
  } else {
    target[RAW_TYPE] = true
  }
  return target
}
export var markObservable = function (target) {
  if (!target) return
  if (isFn(target)) {
    target.prototype[OBSERVABLE_TYPE] = true
  } else {
    target[OBSERVABLE_TYPE] = true
  }
  return target
}
export var raw = function (target) {
  return ProxyRaw.get(target)
}
export var toJS = function (values) {
  var visited = new WeakSet()
  var _toJS = function (values) {
    if (visited.has(values)) {
      return values
    }
    if (values && values[RAW_TYPE]) return values
    if (isArr(values)) {
      if (isObservable(values)) {
        visited.add(values)
        var res_1 = []
        values.forEach(function (item) {
          res_1.push(_toJS(item))
        })
        visited.delete(values)
        return res_1
      }
    } else if (isPlainObj(values)) {
      if (isObservable(values)) {
        visited.add(values)
        var res = {}
        for (var key in values) {
          if (hasOwnProperty.call(values, key)) {
            res[key] = _toJS(values[key])
          }
        }
        visited.delete(values)
        return res
      }
    }
    return values
  }
  return _toJS(values)
}
export var contains = function (target, property) {
  var targetRaw = ProxyRaw.get(target) || target
  var propertyRaw = ProxyRaw.get(property) || property
  if (targetRaw === propertyRaw) return true
  var targetNode = RawNode.get(targetRaw)
  var propertyNode = RawNode.get(propertyRaw)
  if (!targetNode) return false
  if (!propertyNode) return false
  return targetNode.contains(propertyNode)
}
export var hasCollected = function (callback) {
  DependencyCollected.value = false
  callback === null || callback === void 0 ? void 0 : callback()
  return DependencyCollected.value
}
//# sourceMappingURL=externals.js.map
