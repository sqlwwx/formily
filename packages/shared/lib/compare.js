'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.isEqual = void 0
var checkers_1 = require('./checkers')
var instanceof_1 = require('./instanceof')
var isArray = checkers_1.isArr
var keyList = Object.keys
var hasProp = Object.prototype.hasOwnProperty
/* eslint-disable */
function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) {
    return true
  }
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    var arrA = isArray(a)
    var arrB = isArray(b)
    var i = void 0
    var length_1
    var key = void 0
    if (arrA && arrB) {
      length_1 = a.length
      if (length_1 !== b.length) {
        return false
      }
      for (i = length_1; i-- !== 0; ) {
        if (!equal(a[i], b[i])) {
          return false
        }
      }
      return true
    }
    if (arrA !== arrB) {
      return false
    }
    var momentA = a && a._isAMomentObject
    var momentB = b && b._isAMomentObject
    if (momentA !== momentB) return false
    if (momentA && momentB) return a.isSame(b)
    var immutableA = a && a.toJS
    var immutableB = b && b.toJS
    if (immutableA !== immutableB) return false
    if (immutableA) return a.is ? a.is(b) : a === b
    var dateA = (0, instanceof_1.instOf)(a, 'Date')
    var dateB = (0, instanceof_1.instOf)(b, 'Date')
    if (dateA !== dateB) {
      return false
    }
    if (dateA && dateB) {
      return a.getTime() === b.getTime()
    }
    var regexpA = (0, instanceof_1.instOf)(a, 'RegExp')
    var regexpB = (0, instanceof_1.instOf)(b, 'RegExp')
    if (regexpA !== regexpB) {
      return false
    }
    if (regexpA && regexpB) {
      return a.toString() === b.toString()
    }
    var urlA = (0, instanceof_1.instOf)(a, 'URL')
    var urlB = (0, instanceof_1.instOf)(b, 'URL')
    if (urlA !== urlB) {
      return false
    }
    if (urlA && urlB) {
      return a.href === b.href
    }
    var schemaA = a && a.toJSON
    var schemaB = b && b.toJSON
    if (schemaA !== schemaB) return false
    if (schemaA && schemaB) return equal(a.toJSON(), b.toJSON())
    var keys = keyList(a)
    length_1 = keys.length
    if (length_1 !== keyList(b).length) {
      return false
    }
    for (i = length_1; i-- !== 0; ) {
      if (!hasProp.call(b, keys[i])) {
        return false
      }
    }
    // end fast-deep-equal
    // Custom handling for React
    for (i = length_1; i-- !== 0; ) {
      key = keys[i]
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) {
          return false
        }
      }
    }
    // fast-deep-equal index.js 2.0.1
    return true
  }
  return a !== a && b !== b
}
// end fast-deep-equal
var isEqual = function exportedEqual(a, b) {
  try {
    return equal(a, b)
  } catch (error) {
    /* istanbul ignore next */
    if (
      (error.message && error.message.match(/stack|recursion/i)) ||
      error.number === -2146828260
    ) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn(
        'Warning: react-fast-compare does not handle circular references.',
        error.name,
        error.message
      )
      return false
    }
    // some other error. we should definitely know about these
    /* istanbul ignore next */
    throw error
  }
}
exports.isEqual = isEqual
//# sourceMappingURL=compare.js.map
