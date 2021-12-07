'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.merge = void 0
var isEmpty_1 = require('./isEmpty')
function defaultIsMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value)
}
function isNonNullObject(value) {
  return !!value && typeof value === 'object'
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value)
  return (
    stringValue === '[object RegExp]' ||
    stringValue === '[object Date]' ||
    isReactElement(value)
  )
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {}
}
function cloneUnlessOtherwiseSpecified(value, options) {
  if (options.clone !== false && options.isMergeableObject(value)) {
    return deepmerge(emptyTarget(value), value, options)
  }
  return value
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options)
  })
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge
  }
  var customMerge = options.customMerge(key)
  return typeof customMerge === 'function' ? customMerge : deepmerge
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
        return target.propertyIsEnumerable(symbol)
      })
    : []
}
function getKeys(target) {
  if (!(0, isEmpty_1.isValid)(target)) return []
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}
function propertyIsOnObject(object, property) {
  /* istanbul ignore next */
  try {
    return property in object
  } catch (_) {
    return false
  }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
  return (
    propertyIsOnObject(target, key) && // Properties are safe to merge if they don't exist in the target yet,
    !(
      Object.hasOwnProperty.call(target, key) && // unsafe if they exist up the prototype chain,
      Object.propertyIsEnumerable.call(target, key)
    )
  ) // and also unsafe if they're nonenumerable.
}
function mergeObject(target, source, options) {
  var destination = options.assign ? target || {} : {}
  if (!options.isMergeableObject(target)) return target
  if (!options.assign) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options)
    })
  }
  getKeys(source).forEach(function (key) {
    /* istanbul ignore next */
    if (propertyIsUnsafe(target, key)) {
      return
    }
    if (!target[key]) {
      destination[key] = source[key]
    }
    if (
      propertyIsOnObject(target, key) &&
      options.isMergeableObject(source[key])
    ) {
      destination[key] = getMergeFunction(key, options)(
        target[key],
        source[key],
        options
      )
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options)
    }
  })
  return destination
}
function deepmerge(target, source, options) {
  options = options || {}
  options.arrayMerge = options.arrayMerge || defaultArrayMerge
  options.isMergeableObject =
    options.isMergeableObject || defaultIsMergeableObject
  // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  // implementations can use it. The caller may not replace it.
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified
  var sourceIsArray = Array.isArray(source)
  var targetIsArray = Array.isArray(target)
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options)
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options)
  } else {
    return mergeObject(target, source, options)
  }
}
exports.merge = deepmerge
//# sourceMappingURL=merge.js.map
