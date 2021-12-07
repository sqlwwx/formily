;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define('formily.shared', ['exports'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        ((global.Formily = global.Formily || {}), (global.Formily.Shared = {}))
      ))
})(this, function (exports) {
  'use strict'

  ;(function () {
    const env = { NODE_ENV: 'development' }
    try {
      if (process) {
        process.env = Object.assign({}, process.env)
        Object.assign(process.env, env)
        return
      }
    } catch (e) {} // avoid ReferenceError: process is not defined
    globalThis.process = { env: env }
  })()

  var isType = function (type) {
    return function (obj) {
      return getType(obj) === '[object '.concat(type, ']')
    }
  }
  var getType = function (obj) {
    return Object.prototype.toString.call(obj)
  }
  var isFn = function (val) {
    return typeof val === 'function'
  }
  var isArr = Array.isArray
  var isPlainObj = isType('Object')
  var isStr = isType('String')
  var isBool = isType('Boolean')
  var isNum = isType('Number')
  var isMap = function (val) {
    return val && val instanceof Map
  }
  var isSet = function (val) {
    return val && val instanceof Set
  }
  var isWeakMap = function (val) {
    return val && val instanceof WeakMap
  }
  var isWeakSet = function (val) {
    return val && val instanceof WeakSet
  }
  var isNumberLike = function (index) {
    return isNum(index) || /^\d+$/.test(index)
  }
  var isObj = function (val) {
    return typeof val === 'object'
  }
  var isRegExp = isType('RegExp')
  var isReactElement$1 = function (obj) {
    return obj && obj['$$typeof'] && obj['_owner']
  }
  var isHTMLElement = function (target) {
    return Object.prototype.toString.call(target).indexOf('HTML') > -1
  }

  var toArr = function (val) {
    return isArr(val) ? val : val ? [val] : []
  }
  function each(val, iterator, revert) {
    if (isArr(val) || isStr(val)) {
      if (revert) {
        for (var i = val.length - 1; i >= 0; i--) {
          if (iterator(val[i], i) === false) {
            return
          }
        }
      } else {
        for (var i = 0; i < val.length; i++) {
          if (iterator(val[i], i) === false) {
            return
          }
        }
      }
    } else if (isObj(val)) {
      var key = void 0
      for (key in val) {
        if (Object.hasOwnProperty.call(val, key)) {
          if (iterator(val[key], key) === false) {
            return
          }
        }
      }
    }
  }
  function map(val, iterator, revert) {
    var res = isArr(val) || isStr(val) ? [] : {}
    each(
      val,
      function (item, key) {
        var value = iterator(item, key)
        if (isArr(res)) {
          res.push(value)
        } else {
          res[key] = value
        }
      },
      revert
    )
    return res
  }
  function reduce(val, iterator, accumulator, revert) {
    var result = accumulator
    each(
      val,
      function (item, key) {
        result = iterator(result, item, key)
      },
      revert
    )
    return result
  }
  function every(val, iterator, revert) {
    var res = true
    each(
      val,
      function (item, key) {
        if (!iterator(item, key)) {
          res = false
          return false
        }
      },
      revert
    )
    return res
  }
  function some(val, iterator, revert) {
    var res = false
    each(
      val,
      function (item, key) {
        if (iterator(item, key)) {
          res = true
          return false
        }
      },
      revert
    )
    return res
  }
  function findIndex(val, iterator, revert) {
    var res = -1
    each(
      val,
      function (item, key) {
        if (iterator(item, key)) {
          res = key
          return false
        }
      },
      revert
    )
    return res
  }
  function find(val, iterator, revert) {
    var res
    each(
      val,
      function (item, key) {
        if (iterator(item, key)) {
          res = item
          return false
        }
      },
      revert
    )
    return res
  }
  function includes(val, searchElement, revert) {
    if (isStr(val)) return val.includes(searchElement)
    return some(
      val,
      function (item) {
        return item === searchElement
      },
      revert
    )
  }

  /* istanbul ignore next */
  function globalSelf() {
    try {
      if (typeof self !== 'undefined') {
        return self
      }
    } catch (e) {}
    try {
      if (typeof window !== 'undefined') {
        return window
      }
    } catch (e) {}
    try {
      if (typeof global !== 'undefined') {
        return global
      }
    } catch (e) {}
    return Function('return this')()
  }
  var globalThisPolyfill = globalSelf()

  var instOf = function (value, cls) {
    if (isFn(cls)) return value instanceof cls
    if (isStr(cls))
      return globalThisPolyfill[cls]
        ? value instanceof globalThisPolyfill[cls]
        : false
    return false
  }

  var isArray = isArr
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
      var dateA = instOf(a, 'Date')
      var dateB = instOf(b, 'Date')
      if (dateA !== dateB) {
        return false
      }
      if (dateA && dateB) {
        return a.getTime() === b.getTime()
      }
      var regexpA = instOf(a, 'RegExp')
      var regexpB = instOf(b, 'RegExp')
      if (regexpA !== regexpB) {
        return false
      }
      if (regexpA && regexpB) {
        return a.toString() === b.toString()
      }
      var urlA = instOf(a, 'URL')
      var urlB = instOf(b, 'URL')
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

  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

  var __assign = function () {
    __assign =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }

  var shallowClone = function (values) {
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
  var clone = function (values) {
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

  var has = Object.prototype.hasOwnProperty
  var toString = Object.prototype.toString
  var isValid = function (val) {
    return val !== undefined && val !== null
  }
  function isEmpty(val, strict) {
    if (strict === void 0) {
      strict = false
    }
    // Null and Undefined...
    if (val == null) {
      return true
    }
    // Booleans...
    if (typeof val === 'boolean') {
      return false
    }
    // Numbers...
    if (typeof val === 'number') {
      return false
    }
    // Strings...
    if (typeof val === 'string') {
      return val.length === 0
    }
    // Functions...
    if (typeof val === 'function') {
      return val.length === 0
    }
    // Arrays...
    if (Array.isArray(val)) {
      if (val.length === 0) {
        return true
      }
      for (var i = 0; i < val.length; i++) {
        if (strict) {
          if (val[i] !== undefined && val[i] !== null) {
            return false
          }
        } else {
          if (
            val[i] !== undefined &&
            val[i] !== null &&
            val[i] !== '' &&
            val[i] !== 0
          ) {
            return false
          }
        }
      }
      return true
    }
    // Errors...
    if (instOf(val, 'Error')) {
      return val.message === ''
    }
    // Objects...
    if (val.toString === toString) {
      switch (val.toString()) {
        // Maps, Sets, Files and Errors...
        case '[object File]':
        case '[object Map]':
        case '[object Set]': {
          return val.size === 0
        }
        // Plain objects...
        case '[object Object]': {
          for (var key in val) {
            if (has.call(val, key)) {
              return false
            }
          }
          return true
        }
      }
    }
    // Anything else...
    return false
  }

  /**
   * Lower case as a function.
   */
  function lowerCase(str) {
    return str.toLowerCase()
  }

  // Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
  var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g]
  // Remove all non-word characters.
  var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi
  /**
   * Normalize the string into something other libraries can manipulate easier.
   */
  function noCase(input, options) {
    if (options === void 0) {
      options = {}
    }
    var _a = options.splitRegexp,
      splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a,
      _b = options.stripRegexp,
      stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b,
      _c = options.transform,
      transform = _c === void 0 ? lowerCase : _c,
      _d = options.delimiter,
      delimiter = _d === void 0 ? ' ' : _d
    var result = replace(
      replace(input, splitRegexp, '$1\0$2'),
      stripRegexp,
      '\0'
    )
    var start = 0
    var end = result.length
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === '\0') start++
    while (result.charAt(end - 1) === '\0') end--
    // Transform each token independently.
    return result.slice(start, end).split('\0').map(transform).join(delimiter)
  }
  /**
   * Replace `re` in the input string with the replacement value.
   */
  function replace(input, re, value) {
    if (re instanceof RegExp) return input.replace(re, value)
    return re.reduce(function (input, re) {
      return input.replace(re, value)
    }, input)
  }

  function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0)
    var lowerChars = input.substr(1).toLowerCase()
    if (index > 0 && firstChar >= '0' && firstChar <= '9') {
      return '_' + firstChar + lowerChars
    }
    return '' + firstChar.toUpperCase() + lowerChars
  }
  function pascalCase(input, options) {
    if (options === void 0) {
      options = {}
    }
    return noCase(
      input,
      __assign({ delimiter: '', transform: pascalCaseTransform }, options)
    )
  }

  function camelCaseTransform(input, index) {
    if (index === 0) return input.toLowerCase()
    return pascalCaseTransform(input, index)
  }
  function camelCase(input, options) {
    if (options === void 0) {
      options = {}
    }
    return pascalCase(
      input,
      __assign({ transform: camelCaseTransform }, options)
    )
  }

  /**
   * Upper case as a function.
   */
  function upperCase(str) {
    return str.toUpperCase()
  }

  function dotCase(input, options) {
    if (options === void 0) {
      options = {}
    }
    return noCase(input, __assign({ delimiter: '.' }, options))
  }

  function paramCase(input, options) {
    if (options === void 0) {
      options = {}
    }
    return dotCase(input, __assign({ delimiter: '-' }, options))
  }

  // ansiRegex
  var ansiRegex = function () {
    var pattern = [
      '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)',
      '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))',
    ].join('|')
    return new RegExp(pattern, 'g')
  }
  // astralRegex
  var regex = '[\uD800-\uDBFF][\uDC00-\uDFFF]'
  var astralRegex = function (opts) {
    return opts && opts.exact
      ? new RegExp('^'.concat(regex, '$'))
      : new RegExp(regex, 'g')
  }
  // stripAnsi
  var stripAnsi = function (input) {
    return typeof input === 'string' ? input.replace(ansiRegex(), '') : input
  }
  var stringLength = function (input) {
    return stripAnsi(input).replace(astralRegex(), ' ').length
  }

  const _global_Formily_Path_Path = Formily.Path.Path

  var caches = {}
  function deprecate(method, message, help) {
    if (isFn(method)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return function (p1, p2, p3, p4, p5) {
        deprecate(message, help)
        return method.apply(this, arguments)
      }
    }
    if (isStr(method) && !caches[method]) {
      caches[method] = true
      console.warn(
        new Error(
          ''
            .concat(
              method,
              ' has been deprecated. Do not continue to use this api.'
            )
            .concat(message || '')
        )
      )
    }
  }

  var Subscribable = /** @class */ (function () {
    function Subscribable() {
      var _this = this
      this.subscribers = {
        index: 0,
      }
      this.subscribe = function (callback) {
        if (isFn(callback)) {
          var index = _this.subscribers.index + 1
          _this.subscribers[index] = callback
          _this.subscribers.index++
          return index
        }
      }
      this.unsubscribe = function (index) {
        if (_this.subscribers[index]) {
          delete _this.subscribers[index]
        } else if (!index) {
          _this.subscribers = {
            index: 0,
          }
        }
      }
      this.notify = function (payload, silent) {
        if (_this.subscription) {
          if (_this.subscription && isFn(_this.subscription.notify)) {
            if (_this.subscription.notify.call(_this, payload) === false) {
              return
            }
          }
        }
        if (silent) return
        var filter = function (payload) {
          if (_this.subscription && isFn(_this.subscription.filter)) {
            return _this.subscription.filter.call(_this, payload)
          }
          return payload
        }
        each(_this.subscribers, function (callback) {
          if (isFn(callback)) callback(filter(payload))
        })
      }
    }
    return Subscribable
  })()

  var applyMiddleware = function (payload, fns) {
    if (fns === void 0) {
      fns = []
    }
    var compose = function (payload, fns) {
      var prevPayload = payload
      return Promise.resolve(
        fns[0](payload, function (payload) {
          return compose(
            payload !== null && payload !== void 0 ? payload : prevPayload,
            fns.slice(1)
          )
        })
      )
    }
    return new Promise(function (resolve, reject) {
      compose(
        payload,
        fns.concat(function (payload) {
          resolve(payload)
        })
      ).catch(reject)
    })
  }

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
    if (!isValid(target)) return []
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
  var merge = deepmerge

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

  var IDX = 36,
    HEX = ''
  while (IDX--) HEX += IDX.toString(36)
  function uid(len) {
    var str = '',
      num = len || 11
    while (num--) str += HEX[(Math.random() * 36) | 0]
    return str
  }

  exports.FormPath = _global_Formily_Path_Path
  exports.Subscribable = Subscribable
  exports.applyMiddleware = applyMiddleware
  exports.camelCase = camelCase
  exports.clone = clone
  exports.defaults = defaults
  exports.deprecate = deprecate
  exports.each = each
  exports.every = every
  exports.find = find
  exports.findIndex = findIndex
  exports.getType = getType
  exports.globalThisPolyfill = globalThisPolyfill
  exports.includes = includes
  exports.instOf = instOf
  exports.isArr = isArr
  exports.isBool = isBool
  exports.isEmpty = isEmpty
  exports.isEqual = isEqual
  exports.isFn = isFn
  exports.isHTMLElement = isHTMLElement
  exports.isMap = isMap
  exports.isNum = isNum
  exports.isNumberLike = isNumberLike
  exports.isObj = isObj
  exports.isPlainObj = isPlainObj
  exports.isReactElement = isReactElement$1
  exports.isRegExp = isRegExp
  exports.isSet = isSet
  exports.isStr = isStr
  exports.isValid = isValid
  exports.isWeakMap = isWeakMap
  exports.isWeakSet = isWeakSet
  exports.lowerCase = lowerCase
  exports.map = map
  exports.merge = merge
  exports.paramCase = paramCase
  exports.pascalCase = pascalCase
  exports.reduce = reduce
  exports.shallowClone = shallowClone
  exports.some = some
  exports.stringLength = stringLength
  exports.toArr = toArr
  exports.uid = uid
  exports.upperCase = upperCase

  Object.defineProperty(exports, '__esModule', { value: true })
})
//# sourceMappingURL=formily.shared.umd.development.js.map
