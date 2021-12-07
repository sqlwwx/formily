import { each } from './array'
import { isEmpty, isValid } from './isEmpty'
import { getType, isArr, isPlainObj } from './checkers'
var isUnNormalObject = function (value) {
  if (
    (value === null || value === void 0 ? void 0 : value._owner) &&
    (value === null || value === void 0 ? void 0 : value.$$typeof)
  ) {
    return true
  }
  if (
    (value === null || value === void 0 ? void 0 : value._isAMomentObject) ||
    (value === null || value === void 0 ? void 0 : value._isJSONSchemaObject)
  ) {
    return true
  }
  if (
    (value === null || value === void 0 ? void 0 : value.toJS) ||
    (value === null || value === void 0 ? void 0 : value.toJSON)
  ) {
    return true
  }
}
var isEnumerableObject = function (val) {
  if (isUnNormalObject(val)) {
    return false
  }
  return typeof val === 'object'
}
/**
 *
 * @param defaults
 * @param targets
 */
export var defaults = function (defaults_, targets) {
  if (
    getType(defaults_) !== getType(targets) ||
    !isEnumerableObject(defaults_) ||
    !isEnumerableObject(targets)
  ) {
    return !isEmpty(targets) ? targets : defaults_
  } else {
    var results_1 = isArr(defaults_)
      ? []
      : isPlainObj(defaults_)
      ? {}
      : defaults_
    each(targets, function (value, key) {
      results_1[key] = defaults(defaults_[key], value)
    })
    each(defaults_, function (value, key) {
      if (!isValid(results_1[key])) {
        results_1[key] = value
      }
    })
    return results_1
  }
}
//# sourceMappingURL=defaults.js.map
