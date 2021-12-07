var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
import { isFn, isPlainObj } from './checkers'
export var shallowClone = function (values) {
  if (Array.isArray(values)) {
    return values.slice(0)
  } else if (isPlainObj(values)) {
    if ('$$typeof' in values && '_owner' in values) {
      return values
    }
    if (values['_isAMomentObject']) {
      return values
    }
    if (values['_isJSONSchemaObject']) {
      return values
    }
    if (isFn(values['toJS'])) {
      return values
    }
    if (isFn(values['toJSON'])) {
      return values
    }
    return __assign({}, values)
  } else if (typeof values === 'object') {
    return new values.constructor(values)
  }
  return values
}
export var clone = function (values) {
  if (Array.isArray(values)) {
    var res_1 = []
    values.forEach(function (item) {
      res_1.push(clone(item))
    })
    return res_1
  } else if (isPlainObj(values)) {
    if ('$$typeof' in values && '_owner' in values) {
      return values
    }
    if (values['_isAMomentObject']) {
      return values
    }
    if (values['_isJSONSchemaObject']) {
      return values
    }
    if (isFn(values['toJS'])) {
      return values['toJS']()
    }
    if (isFn(values['toJSON'])) {
      return values['toJSON']()
    }
    var res = {}
    for (var key in values) {
      if (Object.hasOwnProperty.call(values, key)) {
        res[key] = clone(values[key])
      }
    }
    return res
  } else {
    return values
  }
}
//# sourceMappingURL=clone.js.map
