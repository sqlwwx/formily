'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.defaults = void 0
var array_1 = require('./array')
var isEmpty_1 = require('./isEmpty')
var checkers_1 = require('./checkers')
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
var defaults = function (defaults_, targets) {
  if (
    (0, checkers_1.getType)(defaults_) !== (0, checkers_1.getType)(targets) ||
    !isEnumerableObject(defaults_) ||
    !isEnumerableObject(targets)
  ) {
    return !(0, isEmpty_1.isEmpty)(targets) ? targets : defaults_
  } else {
    var results_1 = (0, checkers_1.isArr)(defaults_)
      ? []
      : (0, checkers_1.isPlainObj)(defaults_)
      ? {}
      : defaults_
    ;(0, array_1.each)(targets, function (value, key) {
      results_1[key] = (0, exports.defaults)(defaults_[key], value)
    })
    ;(0, array_1.each)(defaults_, function (value, key) {
      if (!(0, isEmpty_1.isValid)(results_1[key])) {
        results_1[key] = value
      }
    })
    return results_1
  }
}
exports.defaults = defaults
//# sourceMappingURL=defaults.js.map
