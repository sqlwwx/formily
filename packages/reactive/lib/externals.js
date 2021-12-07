'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.hasCollected =
  exports.contains =
  exports.toJS =
  exports.raw =
  exports.markObservable =
  exports.markRaw =
  exports.isSupportObservable =
  exports.isAnnotation =
  exports.isObservable =
    void 0
var checkers_1 = require('./checkers')
var environment_1 = require('./environment')
var RAW_TYPE = Symbol('RAW_TYPE')
var OBSERVABLE_TYPE = Symbol('OBSERVABLE_TYPE')
var hasOwnProperty = Object.prototype.hasOwnProperty
var isObservable = function (target) {
  return environment_1.ProxyRaw.has(target)
}
exports.isObservable = isObservable
var isAnnotation = function (target) {
  return target && !!target[environment_1.MakeObservableSymbol]
}
exports.isAnnotation = isAnnotation
var isSupportObservable = function (target) {
  if (!(0, checkers_1.isValid)(target)) return false
  if ((0, checkers_1.isArr)(target)) return true
  if ((0, checkers_1.isPlainObj)(target)) {
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
    if ((0, checkers_1.isFn)(target['toJS'])) {
      return false
    }
    if ((0, checkers_1.isFn)(target['toJSON'])) {
      return false
    }
    return true
  }
  if (
    (0, checkers_1.isMap)(target) ||
    (0, checkers_1.isWeakMap)(target) ||
    (0, checkers_1.isSet)(target) ||
    (0, checkers_1.isWeakSet)(target)
  )
    return true
  return false
}
exports.isSupportObservable = isSupportObservable
var markRaw = function (target) {
  if (!target) return
  if ((0, checkers_1.isFn)(target)) {
    target.prototype[RAW_TYPE] = true
  } else {
    target[RAW_TYPE] = true
  }
  return target
}
exports.markRaw = markRaw
var markObservable = function (target) {
  if (!target) return
  if ((0, checkers_1.isFn)(target)) {
    target.prototype[OBSERVABLE_TYPE] = true
  } else {
    target[OBSERVABLE_TYPE] = true
  }
  return target
}
exports.markObservable = markObservable
var raw = function (target) {
  return environment_1.ProxyRaw.get(target)
}
exports.raw = raw
var toJS = function (values) {
  var visited = new WeakSet()
  var _toJS = function (values) {
    if (visited.has(values)) {
      return values
    }
    if (values && values[RAW_TYPE]) return values
    if ((0, checkers_1.isArr)(values)) {
      if ((0, exports.isObservable)(values)) {
        visited.add(values)
        var res_1 = []
        values.forEach(function (item) {
          res_1.push(_toJS(item))
        })
        visited.delete(values)
        return res_1
      }
    } else if ((0, checkers_1.isPlainObj)(values)) {
      if ((0, exports.isObservable)(values)) {
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
exports.toJS = toJS
var contains = function (target, property) {
  var targetRaw = environment_1.ProxyRaw.get(target) || target
  var propertyRaw = environment_1.ProxyRaw.get(property) || property
  if (targetRaw === propertyRaw) return true
  var targetNode = environment_1.RawNode.get(targetRaw)
  var propertyNode = environment_1.RawNode.get(propertyRaw)
  if (!targetNode) return false
  if (!propertyNode) return false
  return targetNode.contains(propertyNode)
}
exports.contains = contains
var hasCollected = function (callback) {
  environment_1.DependencyCollected.value = false
  callback === null || callback === void 0 ? void 0 : callback()
  return environment_1.DependencyCollected.value
}
exports.hasCollected = hasCollected
//# sourceMappingURL=externals.js.map
