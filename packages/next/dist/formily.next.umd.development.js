;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('react-is'))
    : typeof define === 'function' && define.amd
    ? define('formily.next', ['exports', 'react-is'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        ((global.Formily = global.Formily || {}), (global.Formily.Next = {}))
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

  var __assign$2 = function () {
    __assign$2 =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign$2.apply(this, arguments)
  }

  function __rest(s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }

  function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this
        }),
      g
    )
    function verb(n) {
      return function (v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }

  function __read$1(o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator]
    if (!m) return o
    var i = m.call(o),
      r,
      ar = [],
      e
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
    } catch (error) {
      e = { error: error }
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i)
      } finally {
        if (e) throw e.error
      }
    }
    return ar
  }

  function __spreadArray$1(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i]
    return to
  }

  function _extends() {
    _extends =
      Object.assign ||
      function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }

        return target
      }

    return _extends.apply(this, arguments)
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
  }

  function _iterableToArrayLimit(arr, i) {
    var _i =
      arr == null
        ? null
        : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
          arr['@@iterator']

    if (_i == null) return
    var _arr = []
    var _n = true
    var _d = false

    var _s, _e

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value)

        if (i && _arr.length === i) break
      }
    } catch (err) {
      _d = true
      _e = err
    } finally {
      try {
        if (!_n && _i['return'] != null) _i['return']()
      } finally {
        if (_d) throw _e
      }
    }

    return _arr
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i]
    }

    return arr2
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
    var n = Object.prototype.toString.call(o).slice(8, -1)
    if (n === 'Object' && o.constructor) n = o.constructor.name
    if (n === 'Map' || n === 'Set') return Array.from(o)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen)
  }

  function _nonIterableRest() {
    throw new TypeError(
      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    )
  }

  function _slicedToArray(arr, i) {
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimit(arr, i) ||
      _unsupportedIterableToArray(arr, i) ||
      _nonIterableRest()
    )
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      })
    } else {
      obj[key] = value
    }

    return obj
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? Object(arguments[i]) : {}
      var ownKeys = Object.keys(source)

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys.push.apply(
          ownKeys,
          Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable
          })
        )
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key])
      })
    }

    return target
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps)
    if (staticProps) _defineProperties(Constructor, staticProps)
    return Constructor
  }

  function getDefaultExportFromCjs(x) {
    return x &&
      x.__esModule &&
      Object.prototype.hasOwnProperty.call(x, 'default')
      ? x['default']
      : x
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} }
    return fn(module, module.exports), module.exports
  }

  var _typeof_1 = createCommonjsModule(function (module) {
    function _typeof(obj) {
      '@babel/helpers - typeof'

      if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
        module.exports = _typeof = function _typeof(obj) {
          return typeof obj
        }

        ;(module.exports['default'] = module.exports),
          (module.exports.__esModule = true)
      } else {
        module.exports = _typeof = function _typeof(obj) {
          return obj &&
            typeof Symbol === 'function' &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? 'symbol'
            : typeof obj
        }

        ;(module.exports['default'] = module.exports),
          (module.exports.__esModule = true)
      }

      return _typeof(obj)
    }

    module.exports = _typeof
    ;(module.exports['default'] = module.exports),
      (module.exports.__esModule = true)
  })

  var _typeof = /*@__PURE__*/ getDefaultExportFromCjs(_typeof_1)

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }

    return self
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
      return call
    } else if (call !== void 0) {
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      )
    }

    return _assertThisInitialized(self)
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o)
        }
    return _getPrototypeOf(o)
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf =
      Object.setPrototypeOf ||
      function _setPrototypeOf(o, p) {
        o.__proto__ = p
        return o
      }

    return _setPrototypeOf(o, p)
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function')
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true,
      },
    })
    if (superClass) _setPrototypeOf(subClass, superClass)
  }

  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols
  var hasOwnProperty = Object.prototype.hasOwnProperty
  var propIsEnumerable = Object.prototype.propertyIsEnumerable

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError(
        'Object.assign cannot be called with null or undefined'
      )
    }

    return Object(val)
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc') // eslint-disable-line no-new-wrappers
      test1[5] = 'de'
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {}
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n]
      })
      if (order2.join('') !== '0123456789') {
        return false
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {}
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter
      })
      if (
        Object.keys(Object.assign({}, test3)).join('') !==
        'abcdefghijklmnopqrst'
      ) {
        return false
      }

      return true
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false
    }
  }

  var objectAssign = shouldUseNative()
    ? Object.assign
    : function (target, source) {
        var from
        var to = toObject(target)
        var symbols

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s])

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key]
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from)
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]]
              }
            }
          }
        }

        return to
      }

  var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'

  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1

  var printWarning$1 = function () {}

  if (process.env.NODE_ENV !== 'production') {
    var ReactPropTypesSecret = ReactPropTypesSecret_1
    var loggedTypeFailures = {}
    var has$1 = Function.call.bind(Object.prototype.hasOwnProperty)

    printWarning$1 = function (text) {
      var message = 'Warning: ' + text
      if (typeof console !== 'undefined') {
        console.error(message)
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message)
      } catch (x) {}
    }
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(
    typeSpecs,
    values,
    location,
    componentName,
    getStack
  ) {
    if (process.env.NODE_ENV !== 'production') {
      for (var typeSpecName in typeSpecs) {
        if (has$1(typeSpecs, typeSpecName)) {
          var error
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') +
                  ': ' +
                  location +
                  ' type `' +
                  typeSpecName +
                  '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' +
                  typeof typeSpecs[typeSpecName] +
                  '`.'
              )
              err.name = 'Invariant Violation'
              throw err
            }
            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret
            )
          } catch (ex) {
            error = ex
          }
          if (error && !(error instanceof Error)) {
            printWarning$1(
              (componentName || 'React class') +
                ': type specification of ' +
                location +
                ' `' +
                typeSpecName +
                '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' +
                typeof error +
                '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
            )
          }
          if (
            error instanceof Error &&
            !(error.message in loggedTypeFailures)
          ) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true

            var stack = getStack ? getStack() : ''

            printWarning$1(
              'Failed ' +
                location +
                ' type: ' +
                error.message +
                (stack != null ? stack : '')
            )
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function () {
    if (process.env.NODE_ENV !== 'production') {
      loggedTypeFailures = {}
    }
  }

  var checkPropTypes_1 = checkPropTypes

  const _global_ReactIs = ReactIs

  var has = Function.call.bind(Object.prototype.hasOwnProperty)
  var printWarning = function () {}

  if (process.env.NODE_ENV !== 'production') {
    printWarning = function (text) {
      var message = 'Warning: ' + text
      if (typeof console !== 'undefined') {
        console.error(message)
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message)
      } catch (x) {}
    }
  }

  function emptyFunctionThatReturnsNull() {
    return null
  }

  var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator
    var FAUX_ITERATOR_SYMBOL = '@@iterator' // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn =
        maybeIterable &&
        ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL])
      if (typeof iteratorFn === 'function') {
        return iteratorFn
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>'

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    }

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message
      this.stack = ''
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype

    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== 'production') {
        var manualPropTypeCallCache = {}
        var manualPropTypeWarningCount = 0
      }
      function checkType(
        isRequired,
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        componentName = componentName || ANONYMOUS
        propFullName = propFullName || propName

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
            )
            err.name = 'Invariant Violation'
            throw err
          } else if (
            process.env.NODE_ENV !== 'production' &&
            typeof console !== 'undefined'
          ) {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning(
                'You are manually calling a React.PropTypes validation ' +
                  'function for the `' +
                  propFullName +
                  '` prop on `' +
                  componentName +
                  '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' +
                  'for details.'
              )
              manualPropTypeCallCache[cacheKey] = true
              manualPropTypeWarningCount++
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError(
                'The ' +
                  location +
                  ' `' +
                  propFullName +
                  '` is marked as required ' +
                  ('in `' + componentName + '`, but its value is `null`.')
              )
            }
            return new PropTypeError(
              'The ' +
                location +
                ' `' +
                propFullName +
                '` is marked as required in ' +
                ('`' + componentName + '`, but its value is `undefined`.')
            )
          }
          return null
        } else {
          return validate(
            props,
            propName,
            componentName,
            location,
            propFullName
          )
        }
      }

      var chainedCheckType = checkType.bind(null, false)
      chainedCheckType.isRequired = checkType.bind(null, true)

      return chainedCheckType
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue)

          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                preciseType +
                '` supplied to `' +
                componentName +
                '`, expected ') +
              ('`' + expectedType + '`.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull)
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError(
            'Property `' +
              propFullName +
              '` of component `' +
              componentName +
              '` has invalid PropType notation inside arrayOf.'
          )
        }
        var propValue = props[propName]
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected an array.')
          )
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(
            propValue,
            i,
            componentName,
            location,
            propFullName + '[' + i + ']',
            ReactPropTypesSecret_1
          )
          if (error instanceof Error) {
            return error
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createElementTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected a single ReactElement.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createElementTypeTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        if (!_global_ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected a single ReactElement type.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS
          var actualClassName = getClassName(props[propName])
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                actualClassName +
                '` supplied to `' +
                componentName +
                '`, expected ') +
              ('instance of `' + expectedClassName + '`.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== 'production') {
          if (arguments.length > 1) {
            printWarning(
              'Invalid arguments supplied to oneOf, expected an array, got ' +
                arguments.length +
                ' arguments. ' +
                'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            )
          } else {
            printWarning(
              'Invalid argument supplied to oneOf, expected an array.'
            )
          }
        }
        return emptyFunctionThatReturnsNull
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null
          }
        }

        var valuesString = JSON.stringify(
          expectedValues,
          function replacer(key, value) {
            var type = getPreciseType(value)
            if (type === 'symbol') {
              return String(value)
            }
            return value
          }
        )
        return new PropTypeError(
          'Invalid ' +
            location +
            ' `' +
            propFullName +
            '` of value `' +
            String(propValue) +
            '` ' +
            ('supplied to `' +
              componentName +
              '`, expected one of ' +
              valuesString +
              '.')
        )
      }
      return createChainableTypeChecker(validate)
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError(
            'Property `' +
              propFullName +
              '` of component `' +
              componentName +
              '` has invalid PropType notation inside objectOf.'
          )
        }
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected an object.')
          )
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(
              propValue,
              key,
              componentName,
              location,
              propFullName + '.' + key,
              ReactPropTypesSecret_1
            )
            if (error instanceof Error) {
              return error
            }
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== 'production'
          ? printWarning(
              'Invalid argument supplied to oneOfType, expected an instance of array.'
            )
          : void 0
        return emptyFunctionThatReturnsNull
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i]
        if (typeof checker !== 'function') {
          printWarning(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' +
              getPostfixForTypeWarning(checker) +
              ' at index ' +
              i +
              '.'
          )
          return emptyFunctionThatReturnsNull
        }
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i]
          if (
            checker(
              props,
              propName,
              componentName,
              location,
              propFullName,
              ReactPropTypesSecret_1
            ) == null
          ) {
            return null
          }
        }

        return new PropTypeError(
          'Invalid ' +
            location +
            ' `' +
            propFullName +
            '` supplied to ' +
            ('`' + componentName + '`.')
        )
      }
      return createChainableTypeChecker(validate)
    }

    function createNodeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!isNode(props[propName])) {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` supplied to ' +
              ('`' + componentName + '`, expected a ReactNode.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type `' +
              propType +
              '` ' +
              ('supplied to `' + componentName + '`, expected `object`.')
          )
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key]
          if (!checker) {
            continue
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + '.' + key,
            ReactPropTypesSecret_1
          )
          if (error) {
            return error
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type `' +
              propType +
              '` ' +
              ('supplied to `' + componentName + '`, expected `object`.')
          )
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = objectAssign({}, props[propName], shapeTypes)
        for (var key in allKeys) {
          var checker = shapeTypes[key]
          if (!checker) {
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` key `' +
                key +
                '` supplied to `' +
                componentName +
                '`.' +
                '\nBad object: ' +
                JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +
                JSON.stringify(Object.keys(shapeTypes), null, '  ')
            )
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + '.' + key,
            ReactPropTypesSecret_1
          )
          if (error) {
            return error
          }
        }
        return null
      }

      return createChainableTypeChecker(validate)
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true
        case 'boolean':
          return !propValue
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode)
          }
          if (propValue === null || isValidElement(propValue)) {
            return true
          }

          var iteratorFn = getIteratorFn(propValue)
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue)
            var step
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false
                  }
                }
              }
            }
          } else {
            return false
          }

          return true
        default:
          return false
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true
      }

      return false
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue
      if (Array.isArray(propValue)) {
        return 'array'
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object'
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol'
      }
      return propType
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue
      }
      var propType = getPropType(propValue)
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date'
        } else if (propValue instanceof RegExp) {
          return 'regexp'
        }
      }
      return propType
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value)
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type
        default:
          return type
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS
      }
      return propValue.constructor.name
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1
    ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache
    ReactPropTypes.PropTypes = ReactPropTypes

    return ReactPropTypes
  }

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction

  var factoryWithThrowingShims = function () {
    function shim(
      props,
      propName,
      componentName,
      location,
      propFullName,
      secret
    ) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
          'Use PropTypes.checkPropTypes() to call them. ' +
          'Read more at http://fb.me/use-check-prop-types'
      )
      err.name = 'Invariant Violation'
      throw err
    }
    shim.isRequired = shim
    function getShim() {
      return shim
    } // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction,
    }

    ReactPropTypes.PropTypes = ReactPropTypes

    return ReactPropTypes
  }

  var propTypes$2 = createCommonjsModule(function (module) {
    if (process.env.NODE_ENV !== 'production') {
      var ReactIs = _global_ReactIs

      // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod
      var throwOnDirectAccess = true
      module.exports = factoryWithTypeCheckers(
        ReactIs.isElement,
        throwOnDirectAccess
      )
    } else {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      module.exports = factoryWithThrowingShims()
    }
  })

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var NODE_ENV = process.env.NODE_ENV

  var invariant = function (condition, format, a, b, c, d, e, f) {
    if (NODE_ENV !== 'production') {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument')
      }
    }

    if (!condition) {
      var error
      if (format === undefined) {
        error = new Error(
          'Minified exception occurred; use the non-minified dev environment ' +
            'for the full error message and additional helpful warnings.'
        )
      } else {
        var args = [a, b, c, d, e, f]
        var argIndex = 0
        error = new Error(
          format.replace(/%s/g, function () {
            return args[argIndex++]
          })
        )
        error.name = 'Invariant Violation'
      }

      error.framesToPop = 1 // we don't care about invariant's own frame
      throw error
    }
  }

  var invariant_1 = invariant

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr)
  }

  function _iterableToArray(iter) {
    if (
      (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
      iter['@@iterator'] != null
    )
      return Array.from(iter)
  }

  function _nonIterableSpread() {
    throw new TypeError(
      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    )
  }

  function _toConsumableArray(arr) {
    return (
      _arrayWithoutHoles(arr) ||
      _iterableToArray(arr) ||
      _unsupportedIterableToArray(arr) ||
      _nonIterableSpread()
    )
  }

  var Manager = (function () {
    function Manager() {
      _classCallCheck(this, Manager)

      _defineProperty(this, 'refs', {})
    }

    _createClass(Manager, [
      {
        key: 'add',
        value: function add(collection, ref) {
          if (!this.refs[collection]) {
            this.refs[collection] = []
          }

          this.refs[collection].push(ref)
        },
      },
      {
        key: 'remove',
        value: function remove(collection, ref) {
          var index = this.getIndex(collection, ref)

          if (index !== -1) {
            this.refs[collection].splice(index, 1)
          }
        },
      },
      {
        key: 'isActive',
        value: function isActive() {
          return this.active
        },
      },
      {
        key: 'getActive',
        value: function getActive() {
          var _this = this

          return this.refs[this.active.collection].find(function (_ref) {
            var node = _ref.node
            return node.sortableInfo.index == _this.active.index
          })
        },
      },
      {
        key: 'getIndex',
        value: function getIndex(collection, ref) {
          return this.refs[collection].indexOf(ref)
        },
      },
      {
        key: 'getOrderedRefs',
        value: function getOrderedRefs() {
          var collection =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.active.collection
          return this.refs[collection].sort(sortByIndex)
        },
      },
    ])

    return Manager
  })()

  function sortByIndex(_ref2, _ref3) {
    var index1 = _ref2.node.sortableInfo.index
    var index2 = _ref3.node.sortableInfo.index
    return index1 - index2
  }
  function omit$1(obj, keysToOmit) {
    return Object.keys(obj).reduce(function (acc, key) {
      if (keysToOmit.indexOf(key) === -1) {
        acc[key] = obj[key]
      }

      return acc
    }, {})
  }
  var events = {
    end: ['touchend', 'touchcancel', 'mouseup'],
    move: ['touchmove', 'mousemove'],
    start: ['touchstart', 'mousedown'],
  }
  var vendorPrefix = (function () {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return ''
    }

    var styles = window.getComputedStyle(document.documentElement, '') || [
      '-moz-hidden-iframe',
    ]
    var pre = (Array.prototype.slice
      .call(styles)
      .join('')
      .match(/-(moz|webkit|ms)-/) ||
      (styles.OLink === '' && ['', 'o']))[1]

    switch (pre) {
      case 'ms':
        return 'ms'

      default:
        return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : ''
    }
  })()
  function setInlineStyles(node, styles) {
    Object.keys(styles).forEach(function (key) {
      node.style[key] = styles[key]
    })
  }
  function setTranslate3d(node, translate) {
    node.style[''.concat(vendorPrefix, 'Transform')] =
      translate == null
        ? ''
        : 'translate3d('.concat(translate.x, 'px,').concat(translate.y, 'px,0)')
  }
  function setTransitionDuration(node, duration) {
    node.style[''.concat(vendorPrefix, 'TransitionDuration')] =
      duration == null ? '' : ''.concat(duration, 'ms')
  }
  function closest(el, fn) {
    while (el) {
      if (fn(el)) {
        return el
      }

      el = el.parentNode
    }

    return null
  }
  function limit(min, max, value) {
    return Math.max(min, Math.min(value, max))
  }

  function getPixelValue(stringValue) {
    if (stringValue.substr(-2) === 'px') {
      return parseFloat(stringValue)
    }

    return 0
  }

  function getElementMargin(element) {
    var style = window.getComputedStyle(element)
    return {
      bottom: getPixelValue(style.marginBottom),
      left: getPixelValue(style.marginLeft),
      right: getPixelValue(style.marginRight),
      top: getPixelValue(style.marginTop),
    }
  }
  function provideDisplayName(prefix, Component$$1) {
    var componentName = Component$$1.displayName || Component$$1.name
    return componentName
      ? ''.concat(prefix, '(').concat(componentName, ')')
      : prefix
  }
  function getScrollAdjustedBoundingClientRect(node, scrollDelta) {
    var boundingClientRect = node.getBoundingClientRect()
    return {
      top: boundingClientRect.top + scrollDelta.top,
      left: boundingClientRect.left + scrollDelta.left,
    }
  }
  function getPosition(event) {
    if (event.touches && event.touches.length) {
      return {
        x: event.touches[0].pageX,
        y: event.touches[0].pageY,
      }
    } else if (event.changedTouches && event.changedTouches.length) {
      return {
        x: event.changedTouches[0].pageX,
        y: event.changedTouches[0].pageY,
      }
    } else {
      return {
        x: event.pageX,
        y: event.pageY,
      }
    }
  }
  function isTouchEvent(event) {
    return (
      (event.touches && event.touches.length) ||
      (event.changedTouches && event.changedTouches.length)
    )
  }
  function getEdgeOffset(node, parent) {
    var offset =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : {
            left: 0,
            top: 0,
          }

    if (!node) {
      return undefined
    }

    var nodeOffset = {
      left: offset.left + node.offsetLeft,
      top: offset.top + node.offsetTop,
    }

    if (node.parentNode === parent) {
      return nodeOffset
    }

    return getEdgeOffset(node.parentNode, parent, nodeOffset)
  }
  function getTargetIndex(newIndex, prevIndex, oldIndex) {
    if (newIndex < oldIndex && newIndex > prevIndex) {
      return newIndex - 1
    } else if (newIndex > oldIndex && newIndex < prevIndex) {
      return newIndex + 1
    } else {
      return newIndex
    }
  }
  function getLockPixelOffset(_ref) {
    var lockOffset = _ref.lockOffset,
      width = _ref.width,
      height = _ref.height
    var offsetX = lockOffset
    var offsetY = lockOffset
    var unit = 'px'

    if (typeof lockOffset === 'string') {
      var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset)
      invariant_1(
        match !== null,
        'lockOffset value should be a number or a string of a ' +
          'number followed by "px" or "%". Given %s',
        lockOffset
      )
      offsetX = parseFloat(lockOffset)
      offsetY = parseFloat(lockOffset)
      unit = match[1]
    }

    invariant_1(
      isFinite(offsetX) && isFinite(offsetY),
      'lockOffset value should be a finite. Given %s',
      lockOffset
    )

    if (unit === '%') {
      offsetX = (offsetX * width) / 100
      offsetY = (offsetY * height) / 100
    }

    return {
      x: offsetX,
      y: offsetY,
    }
  }
  function getLockPixelOffsets(_ref2) {
    var height = _ref2.height,
      width = _ref2.width,
      lockOffset = _ref2.lockOffset
    var offsets = Array.isArray(lockOffset)
      ? lockOffset
      : [lockOffset, lockOffset]
    invariant_1(
      offsets.length === 2,
      'lockOffset prop of SortableContainer should be a single ' +
        'value or an array of exactly two values. Given %s',
      lockOffset
    )

    var _offsets = _slicedToArray(offsets, 2),
      minLockOffset = _offsets[0],
      maxLockOffset = _offsets[1]

    return [
      getLockPixelOffset({
        height: height,
        lockOffset: minLockOffset,
        width: width,
      }),
      getLockPixelOffset({
        height: height,
        lockOffset: maxLockOffset,
        width: width,
      }),
    ]
  }

  function isScrollable(el) {
    var computedStyle = window.getComputedStyle(el)
    var overflowRegex = /(auto|scroll)/
    var properties = ['overflow', 'overflowX', 'overflowY']
    return properties.find(function (property) {
      return overflowRegex.test(computedStyle[property])
    })
  }

  function getScrollingParent(el) {
    if (!(el instanceof HTMLElement)) {
      return null
    } else if (isScrollable(el)) {
      return el
    } else {
      return getScrollingParent(el.parentNode)
    }
  }
  function getContainerGridGap(element) {
    var style = window.getComputedStyle(element)

    if (style.display === 'grid') {
      return {
        x: getPixelValue(style.gridColumnGap),
        y: getPixelValue(style.gridRowGap),
      }
    }

    return {
      x: 0,
      y: 0,
    }
  }
  var KEYCODE = {
    TAB: 9,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  }
  var NodeType = {
    Anchor: 'A',
    Button: 'BUTTON',
    Canvas: 'CANVAS',
    Input: 'INPUT',
    Option: 'OPTION',
    Textarea: 'TEXTAREA',
    Select: 'SELECT',
  }
  function cloneNode(node) {
    var selector = 'input, textarea, select, canvas, [contenteditable]'
    var fields = node.querySelectorAll(selector)
    var clonedNode = node.cloneNode(true)

    var clonedFields = _toConsumableArray(clonedNode.querySelectorAll(selector))

    clonedFields.forEach(function (field, i) {
      if (field.type !== 'file') {
        field.value = fields[i].value
      }

      if (field.type === 'radio' && field.name) {
        field.name = '__sortableClone__'.concat(field.name)
      }

      if (
        field.tagName === NodeType.Canvas &&
        fields[i].width > 0 &&
        fields[i].height > 0
      ) {
        var destCtx = field.getContext('2d')
        destCtx.drawImage(fields[i], 0, 0)
      }
    })
    return clonedNode
  }

  function sortableHandle(WrappedComponent) {
    var _class, _temp

    var config =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : {
            withRef: false,
          }
    return (
      (_temp = _class =
        (function (_React$Component) {
          _inherits(WithSortableHandle, _React$Component)

          function WithSortableHandle() {
            _classCallCheck(this, WithSortableHandle)

            return _possibleConstructorReturn(
              this,
              _getPrototypeOf(WithSortableHandle).apply(this, arguments)
            )
          }

          _createClass(WithSortableHandle, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                var node = ReactDOM.findDOMNode(this)
                node.sortableHandle = true
              },
            },
            {
              key: 'getWrappedInstance',
              value: function getWrappedInstance() {
                invariant_1(
                  config.withRef,
                  'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call'
                )
                return this.refs.wrappedInstance
              },
            },
            {
              key: 'render',
              value: function render() {
                var ref = config.withRef ? 'wrappedInstance' : null
                return React.createElement(
                  WrappedComponent,
                  _extends(
                    {
                      ref: ref,
                    },
                    this.props
                  )
                )
              },
            },
          ])

          return WithSortableHandle
        })(React.Component)),
      _defineProperty(
        _class,
        'displayName',
        provideDisplayName('sortableHandle', WrappedComponent)
      ),
      _temp
    )
  }
  function isSortableHandle(node) {
    return node.sortableHandle != null
  }

  var AutoScroller = (function () {
    function AutoScroller(container, onScrollCallback) {
      _classCallCheck(this, AutoScroller)

      this.container = container
      this.onScrollCallback = onScrollCallback
    }

    _createClass(AutoScroller, [
      {
        key: 'clear',
        value: function clear() {
          if (this.interval == null) {
            return
          }

          clearInterval(this.interval)
          this.interval = null
        },
      },
      {
        key: 'update',
        value: function update(_ref) {
          var _this = this

          var translate = _ref.translate,
            minTranslate = _ref.minTranslate,
            maxTranslate = _ref.maxTranslate,
            width = _ref.width,
            height = _ref.height
          var direction = {
            x: 0,
            y: 0,
          }
          var speed = {
            x: 1,
            y: 1,
          }
          var acceleration = {
            x: 10,
            y: 10,
          }
          var _this$container = this.container,
            scrollTop = _this$container.scrollTop,
            scrollLeft = _this$container.scrollLeft,
            scrollHeight = _this$container.scrollHeight,
            scrollWidth = _this$container.scrollWidth,
            clientHeight = _this$container.clientHeight,
            clientWidth = _this$container.clientWidth
          var isTop = scrollTop === 0
          var isBottom = scrollHeight - scrollTop - clientHeight === 0
          var isLeft = scrollLeft === 0
          var isRight = scrollWidth - scrollLeft - clientWidth === 0

          if (translate.y >= maxTranslate.y - height / 2 && !isBottom) {
            direction.y = 1
            speed.y =
              acceleration.y *
              Math.abs((maxTranslate.y - height / 2 - translate.y) / height)
          } else if (translate.x >= maxTranslate.x - width / 2 && !isRight) {
            direction.x = 1
            speed.x =
              acceleration.x *
              Math.abs((maxTranslate.x - width / 2 - translate.x) / width)
          } else if (translate.y <= minTranslate.y + height / 2 && !isTop) {
            direction.y = -1
            speed.y =
              acceleration.y *
              Math.abs((translate.y - height / 2 - minTranslate.y) / height)
          } else if (translate.x <= minTranslate.x + width / 2 && !isLeft) {
            direction.x = -1
            speed.x =
              acceleration.x *
              Math.abs((translate.x - width / 2 - minTranslate.x) / width)
          }

          if (this.interval) {
            this.clear()
            this.isAutoScrolling = false
          }

          if (direction.x !== 0 || direction.y !== 0) {
            this.interval = setInterval(function () {
              _this.isAutoScrolling = true
              var offset = {
                left: speed.x * direction.x,
                top: speed.y * direction.y,
              }
              _this.container.scrollTop += offset.top
              _this.container.scrollLeft += offset.left

              _this.onScrollCallback(offset)
            }, 5)
          }
        },
      },
    ])

    return AutoScroller
  })()

  function defaultGetHelperDimensions(_ref) {
    var node = _ref.node
    return {
      height: node.offsetHeight,
      width: node.offsetWidth,
    }
  }

  function defaultShouldCancelStart(event) {
    var interactiveElements = [
      NodeType.Input,
      NodeType.Textarea,
      NodeType.Select,
      NodeType.Option,
      NodeType.Button,
    ]

    if (interactiveElements.indexOf(event.target.tagName) !== -1) {
      return true
    }

    if (
      closest(event.target, function (el) {
        return el.contentEditable === 'true'
      })
    ) {
      return true
    }

    return false
  }

  var propTypes = {
    axis: propTypes$2.oneOf(['x', 'y', 'xy']),
    contentWindow: propTypes$2.any,
    disableAutoscroll: propTypes$2.bool,
    distance: propTypes$2.number,
    getContainer: propTypes$2.func,
    getHelperDimensions: propTypes$2.func,
    helperClass: propTypes$2.string,
    helperContainer: propTypes$2.oneOfType([
      propTypes$2.func,
      typeof HTMLElement === 'undefined'
        ? propTypes$2.any
        : propTypes$2.instanceOf(HTMLElement),
    ]),
    hideSortableGhost: propTypes$2.bool,
    keyboardSortingTransitionDuration: propTypes$2.number,
    lockAxis: propTypes$2.string,
    lockOffset: propTypes$2.oneOfType([
      propTypes$2.number,
      propTypes$2.string,
      propTypes$2.arrayOf(
        propTypes$2.oneOfType([propTypes$2.number, propTypes$2.string])
      ),
    ]),
    lockToContainerEdges: propTypes$2.bool,
    onSortEnd: propTypes$2.func,
    onSortMove: propTypes$2.func,
    onSortOver: propTypes$2.func,
    onSortStart: propTypes$2.func,
    pressDelay: propTypes$2.number,
    pressThreshold: propTypes$2.number,
    keyCodes: propTypes$2.shape({
      lift: propTypes$2.arrayOf(propTypes$2.number),
      drop: propTypes$2.arrayOf(propTypes$2.number),
      cancel: propTypes$2.arrayOf(propTypes$2.number),
      up: propTypes$2.arrayOf(propTypes$2.number),
      down: propTypes$2.arrayOf(propTypes$2.number),
    }),
    shouldCancelStart: propTypes$2.func,
    transitionDuration: propTypes$2.number,
    updateBeforeSortStart: propTypes$2.func,
    useDragHandle: propTypes$2.bool,
    useWindowAsScrollContainer: propTypes$2.bool,
  }
  var defaultKeyCodes = {
    lift: [KEYCODE.SPACE],
    drop: [KEYCODE.SPACE],
    cancel: [KEYCODE.ESC],
    up: [KEYCODE.UP, KEYCODE.LEFT],
    down: [KEYCODE.DOWN, KEYCODE.RIGHT],
  }
  var defaultProps = {
    axis: 'y',
    disableAutoscroll: false,
    distance: 0,
    getHelperDimensions: defaultGetHelperDimensions,
    hideSortableGhost: true,
    lockOffset: '50%',
    lockToContainerEdges: false,
    pressDelay: 0,
    pressThreshold: 5,
    keyCodes: defaultKeyCodes,
    shouldCancelStart: defaultShouldCancelStart,
    transitionDuration: 300,
    useWindowAsScrollContainer: false,
  }
  var omittedProps = Object.keys(propTypes)
  function validateProps(props) {
    invariant_1(
      !(props.distance && props.pressDelay),
      'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.'
    )
  }

  function _finallyRethrows(body, finalizer) {
    try {
      var result = body()
    } catch (e) {
      return finalizer(true, e)
    }

    if (result && result.then) {
      return result.then(
        finalizer.bind(null, false),
        finalizer.bind(null, true)
      )
    }

    return finalizer(false, value)
  }
  function sortableContainer(WrappedComponent) {
    var _class, _temp

    var config =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : {
            withRef: false,
          }
    return (
      (_temp = _class =
        (function (_React$Component) {
          _inherits(WithSortableContainer, _React$Component)

          function WithSortableContainer(props) {
            var _this

            _classCallCheck(this, WithSortableContainer)

            _this = _possibleConstructorReturn(
              this,
              _getPrototypeOf(WithSortableContainer).call(this, props)
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'state',
              {}
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'handleStart',
              function (event) {
                var _this$props = _this.props,
                  distance = _this$props.distance,
                  shouldCancelStart = _this$props.shouldCancelStart

                if (event.button === 2 || shouldCancelStart(event)) {
                  return
                }

                _this.touched = true
                _this.position = getPosition(event)
                var node = closest(event.target, function (el) {
                  return el.sortableInfo != null
                })

                if (
                  node &&
                  node.sortableInfo &&
                  _this.nodeIsChild(node) &&
                  !_this.state.sorting
                ) {
                  var useDragHandle = _this.props.useDragHandle
                  var _node$sortableInfo = node.sortableInfo,
                    index = _node$sortableInfo.index,
                    collection = _node$sortableInfo.collection,
                    disabled = _node$sortableInfo.disabled

                  if (disabled) {
                    return
                  }

                  if (
                    useDragHandle &&
                    !closest(event.target, isSortableHandle)
                  ) {
                    return
                  }

                  _this.manager.active = {
                    collection: collection,
                    index: index,
                  }

                  if (
                    !isTouchEvent(event) &&
                    event.target.tagName === NodeType.Anchor
                  ) {
                    event.preventDefault()
                  }

                  if (!distance) {
                    if (_this.props.pressDelay === 0) {
                      _this.handlePress(event)
                    } else {
                      _this.pressTimer = setTimeout(function () {
                        return _this.handlePress(event)
                      }, _this.props.pressDelay)
                    }
                  }
                }
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'nodeIsChild',
              function (node) {
                return node.sortableInfo.manager === _this.manager
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'handleMove',
              function (event) {
                var _this$props2 = _this.props,
                  distance = _this$props2.distance,
                  pressThreshold = _this$props2.pressThreshold

                if (
                  !_this.state.sorting &&
                  _this.touched &&
                  !_this._awaitingUpdateBeforeSortStart
                ) {
                  var position = getPosition(event)
                  var delta = {
                    x: _this.position.x - position.x,
                    y: _this.position.y - position.y,
                  }
                  var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y)
                  _this.delta = delta

                  if (
                    !distance &&
                    (!pressThreshold || combinedDelta >= pressThreshold)
                  ) {
                    clearTimeout(_this.cancelTimer)
                    _this.cancelTimer = setTimeout(_this.cancel, 0)
                  } else if (
                    distance &&
                    combinedDelta >= distance &&
                    _this.manager.isActive()
                  ) {
                    _this.handlePress(event)
                  }
                }
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'handleEnd',
              function () {
                _this.touched = false

                _this.cancel()
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'cancel',
              function () {
                var distance = _this.props.distance
                var sorting = _this.state.sorting

                if (!sorting) {
                  if (!distance) {
                    clearTimeout(_this.pressTimer)
                  }

                  _this.manager.active = null
                }
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'handlePress',
              function (event) {
                try {
                  var active = _this.manager.getActive()

                  var _temp6 = (function () {
                    if (active) {
                      var _temp7 = function _temp7() {
                        var index = _node.sortableInfo.index
                        var margin = getElementMargin(_node)
                        var gridGap = getContainerGridGap(_this.container)

                        var containerBoundingRect =
                          _this.scrollContainer.getBoundingClientRect()

                        var dimensions = _getHelperDimensions({
                          index: index,
                          node: _node,
                          collection: _collection,
                        })

                        _this.node = _node
                        _this.margin = margin
                        _this.gridGap = gridGap
                        _this.width = dimensions.width
                        _this.height = dimensions.height
                        _this.marginOffset = {
                          x:
                            _this.margin.left +
                            _this.margin.right +
                            _this.gridGap.x,
                          y: Math.max(
                            _this.margin.top,
                            _this.margin.bottom,
                            _this.gridGap.y
                          ),
                        }
                        _this.boundingClientRect = _node.getBoundingClientRect()
                        _this.containerBoundingRect = containerBoundingRect
                        _this.index = index
                        _this.newIndex = index
                        _this.axis = {
                          x: _axis.indexOf('x') >= 0,
                          y: _axis.indexOf('y') >= 0,
                        }
                        _this.offsetEdge = getEdgeOffset(_node, _this.container)

                        if (_isKeySorting) {
                          _this.initialOffset = getPosition(
                            _objectSpread({}, event, {
                              pageX: _this.boundingClientRect.left,
                              pageY: _this.boundingClientRect.top,
                            })
                          )
                        } else {
                          _this.initialOffset = getPosition(event)
                        }

                        _this.initialScroll = {
                          left: _this.scrollContainer.scrollLeft,
                          top: _this.scrollContainer.scrollTop,
                        }
                        _this.initialWindowScroll = {
                          left: window.pageXOffset,
                          top: window.pageYOffset,
                        }
                        _this.helper = _this.helperContainer.appendChild(
                          cloneNode(_node)
                        )
                        setInlineStyles(_this.helper, {
                          boxSizing: 'border-box',
                          height: ''.concat(_this.height, 'px'),
                          left: ''.concat(
                            _this.boundingClientRect.left - margin.left,
                            'px'
                          ),
                          pointerEvents: 'none',
                          position: 'fixed',
                          top: ''.concat(
                            _this.boundingClientRect.top - margin.top,
                            'px'
                          ),
                          width: ''.concat(_this.width, 'px'),
                        })

                        if (_isKeySorting) {
                          _this.helper.focus()
                        }

                        if (_hideSortableGhost) {
                          _this.sortableGhost = _node
                          setInlineStyles(_node, {
                            opacity: 0,
                            visibility: 'hidden',
                          })
                        }

                        _this.minTranslate = {}
                        _this.maxTranslate = {}

                        if (_isKeySorting) {
                          var _ref = _useWindowAsScrollContainer
                              ? {
                                  top: 0,
                                  left: 0,
                                  width: _this.contentWindow.innerWidth,
                                  height: _this.contentWindow.innerHeight,
                                }
                              : _this.containerBoundingRect,
                            containerTop = _ref.top,
                            containerLeft = _ref.left,
                            containerWidth = _ref.width,
                            containerHeight = _ref.height

                          var containerBottom = containerTop + containerHeight
                          var containerRight = containerLeft + containerWidth

                          if (_this.axis.x) {
                            _this.minTranslate.x =
                              containerLeft - _this.boundingClientRect.left
                            _this.maxTranslate.x =
                              containerRight -
                              (_this.boundingClientRect.left + _this.width)
                          }

                          if (_this.axis.y) {
                            _this.minTranslate.y =
                              containerTop - _this.boundingClientRect.top
                            _this.maxTranslate.y =
                              containerBottom -
                              (_this.boundingClientRect.top + _this.height)
                          }
                        } else {
                          if (_this.axis.x) {
                            _this.minTranslate.x =
                              (_useWindowAsScrollContainer
                                ? 0
                                : containerBoundingRect.left) -
                              _this.boundingClientRect.left -
                              _this.width / 2
                            _this.maxTranslate.x =
                              (_useWindowAsScrollContainer
                                ? _this.contentWindow.innerWidth
                                : containerBoundingRect.left +
                                  containerBoundingRect.width) -
                              _this.boundingClientRect.left -
                              _this.width / 2
                          }

                          if (_this.axis.y) {
                            _this.minTranslate.y =
                              (_useWindowAsScrollContainer
                                ? 0
                                : containerBoundingRect.top) -
                              _this.boundingClientRect.top -
                              _this.height / 2
                            _this.maxTranslate.y =
                              (_useWindowAsScrollContainer
                                ? _this.contentWindow.innerHeight
                                : containerBoundingRect.top +
                                  containerBoundingRect.height) -
                              _this.boundingClientRect.top -
                              _this.height / 2
                          }
                        }

                        if (_helperClass) {
                          _helperClass.split(' ').forEach(function (className) {
                            return _this.helper.classList.add(className)
                          })
                        }

                        _this.listenerNode = event.touches
                          ? _node
                          : _this.contentWindow

                        if (_isKeySorting) {
                          _this.listenerNode.addEventListener(
                            'wheel',
                            _this.handleKeyEnd,
                            true
                          )

                          _this.listenerNode.addEventListener(
                            'mousedown',
                            _this.handleKeyEnd,
                            true
                          )

                          _this.listenerNode.addEventListener(
                            'keydown',
                            _this.handleKeyDown
                          )
                        } else {
                          events.move.forEach(function (eventName) {
                            return _this.listenerNode.addEventListener(
                              eventName,
                              _this.handleSortMove,
                              false
                            )
                          })
                          events.end.forEach(function (eventName) {
                            return _this.listenerNode.addEventListener(
                              eventName,
                              _this.handleSortEnd,
                              false
                            )
                          })
                        }

                        _this.setState({
                          sorting: true,
                          sortingIndex: index,
                        })

                        if (_onSortStart) {
                          _onSortStart(
                            {
                              node: _node,
                              index: index,
                              collection: _collection,
                              isKeySorting: _isKeySorting,
                              nodes: _this.manager.getOrderedRefs(),
                              helper: _this.helper,
                            },
                            event
                          )
                        }

                        if (_isKeySorting) {
                          _this.keyMove(0)
                        }
                      }

                      var _this$props3 = _this.props,
                        _axis = _this$props3.axis,
                        _getHelperDimensions = _this$props3.getHelperDimensions,
                        _helperClass = _this$props3.helperClass,
                        _hideSortableGhost = _this$props3.hideSortableGhost,
                        updateBeforeSortStart =
                          _this$props3.updateBeforeSortStart,
                        _onSortStart = _this$props3.onSortStart,
                        _useWindowAsScrollContainer =
                          _this$props3.useWindowAsScrollContainer
                      var _node = active.node,
                        _collection = active.collection
                      var _isKeySorting = _this.manager.isKeySorting

                      var _temp8 = (function () {
                        if (typeof updateBeforeSortStart === 'function') {
                          _this._awaitingUpdateBeforeSortStart = true

                          var _temp9 = _finallyRethrows(
                            function () {
                              var index = _node.sortableInfo.index
                              return Promise.resolve(
                                updateBeforeSortStart(
                                  {
                                    collection: _collection,
                                    index: index,
                                    node: _node,
                                    isKeySorting: _isKeySorting,
                                  },
                                  event
                                )
                              ).then(function () {})
                            },
                            function (_wasThrown, _result) {
                              _this._awaitingUpdateBeforeSortStart = false
                              if (_wasThrown) throw _result
                              return _result
                            }
                          )

                          if (_temp9 && _temp9.then)
                            return _temp9.then(function () {})
                        }
                      })()

                      return _temp8 && _temp8.then
                        ? _temp8.then(_temp7)
                        : _temp7(_temp8)
                    }
                  })()

                  return Promise.resolve(
                    _temp6 && _temp6.then ? _temp6.then(function () {}) : void 0
                  )
                } catch (e) {
                  return Promise.reject(e)
                }
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'handleSortMove',
              function (event) {
                var onSortMove = _this.props.onSortMove

                if (typeof event.preventDefault === 'function') {
                  event.preventDefault()
                }

                _this.updateHelperPosition(event)

                _this.animateNodes()

                _this.autoscroll()

                if (onSortMove) {
                  onSortMove(event)
                }
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'handleSortEnd',
              function (event) {
                var _this$props4 = _this.props,
                  hideSortableGhost = _this$props4.hideSortableGhost,
                  onSortEnd = _this$props4.onSortEnd
                var _this$manager = _this.manager,
                  collection = _this$manager.active.collection,
                  isKeySorting = _this$manager.isKeySorting

                var nodes = _this.manager.getOrderedRefs()

                if (_this.listenerNode) {
                  if (isKeySorting) {
                    _this.listenerNode.removeEventListener(
                      'wheel',
                      _this.handleKeyEnd,
                      true
                    )

                    _this.listenerNode.removeEventListener(
                      'mousedown',
                      _this.handleKeyEnd,
                      true
                    )

                    _this.listenerNode.removeEventListener(
                      'keydown',
                      _this.handleKeyDown
                    )
                  } else {
                    events.move.forEach(function (eventName) {
                      return _this.listenerNode.removeEventListener(
                        eventName,
                        _this.handleSortMove
                      )
                    })
                    events.end.forEach(function (eventName) {
                      return _this.listenerNode.removeEventListener(
                        eventName,
                        _this.handleSortEnd
                      )
                    })
                  }
                }

                _this.helper.parentNode.removeChild(_this.helper)

                if (hideSortableGhost && _this.sortableGhost) {
                  setInlineStyles(_this.sortableGhost, {
                    opacity: '',
                    visibility: '',
                  })
                }

                for (var i = 0, len = nodes.length; i < len; i++) {
                  var _node2 = nodes[i]
                  var el = _node2.node
                  _node2.edgeOffset = null
                  _node2.boundingClientRect = null
                  setTranslate3d(el, null)
                  setTransitionDuration(el, null)
                  _node2.translate = null
                }

                _this.autoScroller.clear()

                _this.manager.active = null
                _this.manager.isKeySorting = false

                _this.setState({
                  sorting: false,
                  sortingIndex: null,
                })

                if (typeof onSortEnd === 'function') {
                  onSortEnd(
                    {
                      collection: collection,
                      newIndex: _this.newIndex,
                      oldIndex: _this.index,
                      isKeySorting: isKeySorting,
                      nodes: nodes,
                    },
                    event
                  )
                }

                _this.touched = false
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'autoscroll',
              function () {
                var disableAutoscroll = _this.props.disableAutoscroll
                var isKeySorting = _this.manager.isKeySorting

                if (disableAutoscroll) {
                  _this.autoScroller.clear()

                  return
                }

                if (isKeySorting) {
                  var translate = _objectSpread({}, _this.translate)

                  var scrollX = 0
                  var scrollY = 0

                  if (_this.axis.x) {
                    translate.x = Math.min(
                      _this.maxTranslate.x,
                      Math.max(_this.minTranslate.x, _this.translate.x)
                    )
                    scrollX = _this.translate.x - translate.x
                  }

                  if (_this.axis.y) {
                    translate.y = Math.min(
                      _this.maxTranslate.y,
                      Math.max(_this.minTranslate.y, _this.translate.y)
                    )
                    scrollY = _this.translate.y - translate.y
                  }

                  _this.translate = translate
                  setTranslate3d(_this.helper, _this.translate)
                  _this.scrollContainer.scrollLeft += scrollX
                  _this.scrollContainer.scrollTop += scrollY
                  return
                }

                _this.autoScroller.update({
                  height: _this.height,
                  maxTranslate: _this.maxTranslate,
                  minTranslate: _this.minTranslate,
                  translate: _this.translate,
                  width: _this.width,
                })
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'onAutoScroll',
              function (offset) {
                _this.translate.x += offset.left
                _this.translate.y += offset.top

                _this.animateNodes()
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'handleKeyDown',
              function (event) {
                var keyCode = event.keyCode
                var _this$props5 = _this.props,
                  shouldCancelStart = _this$props5.shouldCancelStart,
                  _this$props5$keyCodes = _this$props5.keyCodes,
                  customKeyCodes =
                    _this$props5$keyCodes === void 0
                      ? {}
                      : _this$props5$keyCodes

                var keyCodes = _objectSpread(
                  {},
                  defaultKeyCodes,
                  customKeyCodes
                )

                if (
                  (_this.manager.active && !_this.manager.isKeySorting) ||
                  (!_this.manager.active &&
                    (!keyCodes.lift.includes(keyCode) ||
                      shouldCancelStart(event) ||
                      !_this.isValidSortingTarget(event)))
                ) {
                  return
                }

                event.stopPropagation()
                event.preventDefault()

                if (keyCodes.lift.includes(keyCode) && !_this.manager.active) {
                  _this.keyLift(event)
                } else if (
                  keyCodes.drop.includes(keyCode) &&
                  _this.manager.active
                ) {
                  _this.keyDrop(event)
                } else if (keyCodes.cancel.includes(keyCode)) {
                  _this.newIndex = _this.manager.active.index

                  _this.keyDrop(event)
                } else if (keyCodes.up.includes(keyCode)) {
                  _this.keyMove(-1)
                } else if (keyCodes.down.includes(keyCode)) {
                  _this.keyMove(1)
                }
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'keyLift',
              function (event) {
                var target = event.target
                var node = closest(target, function (el) {
                  return el.sortableInfo != null
                })
                var _node$sortableInfo2 = node.sortableInfo,
                  index = _node$sortableInfo2.index,
                  collection = _node$sortableInfo2.collection
                _this.initialFocusedNode = target
                _this.manager.isKeySorting = true
                _this.manager.active = {
                  index: index,
                  collection: collection,
                }

                _this.handlePress(event)
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'keyMove',
              function (shift) {
                var nodes = _this.manager.getOrderedRefs()

                var lastIndex = nodes[nodes.length - 1].node.sortableInfo.index
                var newIndex = _this.newIndex + shift
                var prevIndex = _this.newIndex

                if (newIndex < 0 || newIndex > lastIndex) {
                  return
                }

                _this.prevIndex = prevIndex
                _this.newIndex = newIndex
                var targetIndex = getTargetIndex(
                  _this.newIndex,
                  _this.prevIndex,
                  _this.index
                )
                var target = nodes.find(function (_ref2) {
                  var node = _ref2.node
                  return node.sortableInfo.index === targetIndex
                })
                var targetNode = target.node
                var scrollDelta = _this.containerScrollDelta
                var targetBoundingClientRect =
                  target.boundingClientRect ||
                  getScrollAdjustedBoundingClientRect(targetNode, scrollDelta)
                var targetTranslate = target.translate || {
                  x: 0,
                  y: 0,
                }
                var targetPosition = {
                  top:
                    targetBoundingClientRect.top +
                    targetTranslate.y -
                    scrollDelta.top,
                  left:
                    targetBoundingClientRect.left +
                    targetTranslate.x -
                    scrollDelta.left,
                }
                var shouldAdjustForSize = prevIndex < newIndex
                var sizeAdjustment = {
                  x:
                    shouldAdjustForSize && _this.axis.x
                      ? targetNode.offsetWidth - _this.width
                      : 0,
                  y:
                    shouldAdjustForSize && _this.axis.y
                      ? targetNode.offsetHeight - _this.height
                      : 0,
                }

                _this.handleSortMove({
                  pageX: targetPosition.left + sizeAdjustment.x,
                  pageY: targetPosition.top + sizeAdjustment.y,
                  ignoreTransition: shift === 0,
                })
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'keyDrop',
              function (event) {
                _this.handleSortEnd(event)

                if (_this.initialFocusedNode) {
                  _this.initialFocusedNode.focus()
                }
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'handleKeyEnd',
              function (event) {
                if (_this.manager.active) {
                  _this.keyDrop(event)
                }
              }
            )

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'isValidSortingTarget',
              function (event) {
                var useDragHandle = _this.props.useDragHandle
                var target = event.target
                var node = closest(target, function (el) {
                  return el.sortableInfo != null
                })
                return (
                  node &&
                  node.sortableInfo &&
                  !node.sortableInfo.disabled &&
                  (useDragHandle
                    ? isSortableHandle(target)
                    : target.sortableInfo)
                )
              }
            )

            validateProps(props)
            _this.manager = new Manager()
            _this.events = {
              end: _this.handleEnd,
              move: _this.handleMove,
              start: _this.handleStart,
            }
            return _this
          }

          _createClass(WithSortableContainer, [
            {
              key: 'getChildContext',
              value: function getChildContext() {
                return {
                  manager: this.manager,
                }
              },
            },
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                var _this2 = this

                var useWindowAsScrollContainer =
                  this.props.useWindowAsScrollContainer
                var container = this.getContainer()
                Promise.resolve(container).then(function (containerNode) {
                  _this2.container = containerNode
                  _this2.document = _this2.container.ownerDocument || document
                  var contentWindow =
                    _this2.props.contentWindow ||
                    _this2.document.defaultView ||
                    window
                  _this2.contentWindow =
                    typeof contentWindow === 'function'
                      ? contentWindow()
                      : contentWindow
                  _this2.scrollContainer = useWindowAsScrollContainer
                    ? _this2.document.scrollingElement ||
                      _this2.document.documentElement
                    : getScrollingParent(_this2.container) || _this2.container
                  _this2.autoScroller = new AutoScroller(
                    _this2.scrollContainer,
                    _this2.onAutoScroll
                  )
                  Object.keys(_this2.events).forEach(function (key) {
                    return events[key].forEach(function (eventName) {
                      return _this2.container.addEventListener(
                        eventName,
                        _this2.events[key],
                        false
                      )
                    })
                  })

                  _this2.container.addEventListener(
                    'keydown',
                    _this2.handleKeyDown
                  )
                })
              },
            },
            {
              key: 'componentWillUnmount',
              value: function componentWillUnmount() {
                var _this3 = this

                if (this.helper && this.helper.parentNode) {
                  this.helper.parentNode.removeChild(this.helper)
                }

                if (!this.container) {
                  return
                }

                Object.keys(this.events).forEach(function (key) {
                  return events[key].forEach(function (eventName) {
                    return _this3.container.removeEventListener(
                      eventName,
                      _this3.events[key]
                    )
                  })
                })
                this.container.removeEventListener(
                  'keydown',
                  this.handleKeyDown
                )
              },
            },
            {
              key: 'updateHelperPosition',
              value: function updateHelperPosition(event) {
                var _this$props6 = this.props,
                  lockAxis = _this$props6.lockAxis,
                  lockOffset = _this$props6.lockOffset,
                  lockToContainerEdges = _this$props6.lockToContainerEdges,
                  transitionDuration = _this$props6.transitionDuration,
                  _this$props6$keyboard =
                    _this$props6.keyboardSortingTransitionDuration,
                  keyboardSortingTransitionDuration =
                    _this$props6$keyboard === void 0
                      ? transitionDuration
                      : _this$props6$keyboard
                var isKeySorting = this.manager.isKeySorting
                var ignoreTransition = event.ignoreTransition
                var offset = getPosition(event)
                var translate = {
                  x: offset.x - this.initialOffset.x,
                  y: offset.y - this.initialOffset.y,
                }
                translate.y -= window.pageYOffset - this.initialWindowScroll.top
                translate.x -=
                  window.pageXOffset - this.initialWindowScroll.left
                this.translate = translate

                if (lockToContainerEdges) {
                  var _getLockPixelOffsets = getLockPixelOffsets({
                      height: this.height,
                      lockOffset: lockOffset,
                      width: this.width,
                    }),
                    _getLockPixelOffsets2 = _slicedToArray(
                      _getLockPixelOffsets,
                      2
                    ),
                    minLockOffset = _getLockPixelOffsets2[0],
                    maxLockOffset = _getLockPixelOffsets2[1]

                  var minOffset = {
                    x: this.width / 2 - minLockOffset.x,
                    y: this.height / 2 - minLockOffset.y,
                  }
                  var maxOffset = {
                    x: this.width / 2 - maxLockOffset.x,
                    y: this.height / 2 - maxLockOffset.y,
                  }
                  translate.x = limit(
                    this.minTranslate.x + minOffset.x,
                    this.maxTranslate.x - maxOffset.x,
                    translate.x
                  )
                  translate.y = limit(
                    this.minTranslate.y + minOffset.y,
                    this.maxTranslate.y - maxOffset.y,
                    translate.y
                  )
                }

                if (lockAxis === 'x') {
                  translate.y = 0
                } else if (lockAxis === 'y') {
                  translate.x = 0
                }

                if (
                  isKeySorting &&
                  keyboardSortingTransitionDuration &&
                  !ignoreTransition
                ) {
                  setTransitionDuration(
                    this.helper,
                    keyboardSortingTransitionDuration
                  )
                }

                setTranslate3d(this.helper, translate)
              },
            },
            {
              key: 'animateNodes',
              value: function animateNodes() {
                var _this$props7 = this.props,
                  transitionDuration = _this$props7.transitionDuration,
                  hideSortableGhost = _this$props7.hideSortableGhost,
                  onSortOver = _this$props7.onSortOver
                var containerScrollDelta = this.containerScrollDelta,
                  windowScrollDelta = this.windowScrollDelta
                var nodes = this.manager.getOrderedRefs()
                var sortingOffset = {
                  left:
                    this.offsetEdge.left +
                    this.translate.x +
                    containerScrollDelta.left,
                  top:
                    this.offsetEdge.top +
                    this.translate.y +
                    containerScrollDelta.top,
                }
                var isKeySorting = this.manager.isKeySorting
                var prevIndex = this.newIndex
                this.newIndex = null

                for (var i = 0, len = nodes.length; i < len; i++) {
                  var _node3 = nodes[i].node
                  var index = _node3.sortableInfo.index
                  var width = _node3.offsetWidth
                  var height = _node3.offsetHeight
                  var offset = {
                    height: this.height > height ? height / 2 : this.height / 2,
                    width: this.width > width ? width / 2 : this.width / 2,
                  }
                  var mustShiftBackward =
                    isKeySorting && index > this.index && index <= prevIndex
                  var mustShiftForward =
                    isKeySorting && index < this.index && index >= prevIndex
                  var translate = {
                    x: 0,
                    y: 0,
                  }
                  var edgeOffset = nodes[i].edgeOffset

                  if (!edgeOffset) {
                    edgeOffset = getEdgeOffset(_node3, this.container)
                    nodes[i].edgeOffset = edgeOffset

                    if (isKeySorting) {
                      nodes[i].boundingClientRect =
                        getScrollAdjustedBoundingClientRect(
                          _node3,
                          containerScrollDelta
                        )
                    }
                  }

                  var nextNode = i < nodes.length - 1 && nodes[i + 1]
                  var prevNode = i > 0 && nodes[i - 1]

                  if (nextNode && !nextNode.edgeOffset) {
                    nextNode.edgeOffset = getEdgeOffset(
                      nextNode.node,
                      this.container
                    )

                    if (isKeySorting) {
                      nextNode.boundingClientRect =
                        getScrollAdjustedBoundingClientRect(
                          nextNode.node,
                          containerScrollDelta
                        )
                    }
                  }

                  if (index === this.index) {
                    if (hideSortableGhost) {
                      this.sortableGhost = _node3
                      setInlineStyles(_node3, {
                        opacity: 0,
                        visibility: 'hidden',
                      })
                    }

                    continue
                  }

                  if (transitionDuration) {
                    setTransitionDuration(_node3, transitionDuration)
                  }

                  if (this.axis.x) {
                    if (this.axis.y) {
                      if (
                        mustShiftForward ||
                        (index < this.index &&
                          ((sortingOffset.left +
                            windowScrollDelta.left -
                            offset.width <=
                            edgeOffset.left &&
                            sortingOffset.top + windowScrollDelta.top <=
                              edgeOffset.top + offset.height) ||
                            sortingOffset.top +
                              windowScrollDelta.top +
                              offset.height <=
                              edgeOffset.top))
                      ) {
                        translate.x = this.width + this.marginOffset.x

                        if (
                          edgeOffset.left + translate.x >
                          this.containerBoundingRect.width - offset.width
                        ) {
                          if (nextNode) {
                            translate.x =
                              nextNode.edgeOffset.left - edgeOffset.left
                            translate.y =
                              nextNode.edgeOffset.top - edgeOffset.top
                          }
                        }

                        if (this.newIndex === null) {
                          this.newIndex = index
                        }
                      } else if (
                        mustShiftBackward ||
                        (index > this.index &&
                          ((sortingOffset.left +
                            windowScrollDelta.left +
                            offset.width >=
                            edgeOffset.left &&
                            sortingOffset.top +
                              windowScrollDelta.top +
                              offset.height >=
                              edgeOffset.top) ||
                            sortingOffset.top +
                              windowScrollDelta.top +
                              offset.height >=
                              edgeOffset.top + height))
                      ) {
                        translate.x = -(this.width + this.marginOffset.x)

                        if (
                          edgeOffset.left + translate.x <
                          this.containerBoundingRect.left + offset.width
                        ) {
                          if (prevNode) {
                            translate.x =
                              prevNode.edgeOffset.left - edgeOffset.left
                            translate.y =
                              prevNode.edgeOffset.top - edgeOffset.top
                          }
                        }

                        this.newIndex = index
                      }
                    } else {
                      if (
                        mustShiftBackward ||
                        (index > this.index &&
                          sortingOffset.left +
                            windowScrollDelta.left +
                            offset.width >=
                            edgeOffset.left)
                      ) {
                        translate.x = -(this.width + this.marginOffset.x)
                        this.newIndex = index
                      } else if (
                        mustShiftForward ||
                        (index < this.index &&
                          sortingOffset.left + windowScrollDelta.left <=
                            edgeOffset.left + offset.width)
                      ) {
                        translate.x = this.width + this.marginOffset.x

                        if (this.newIndex == null) {
                          this.newIndex = index
                        }
                      }
                    }
                  } else if (this.axis.y) {
                    if (
                      mustShiftBackward ||
                      (index > this.index &&
                        sortingOffset.top +
                          windowScrollDelta.top +
                          offset.height >=
                          edgeOffset.top)
                    ) {
                      translate.y = -(this.height + this.marginOffset.y)
                      this.newIndex = index
                    } else if (
                      mustShiftForward ||
                      (index < this.index &&
                        sortingOffset.top + windowScrollDelta.top <=
                          edgeOffset.top + offset.height)
                    ) {
                      translate.y = this.height + this.marginOffset.y

                      if (this.newIndex == null) {
                        this.newIndex = index
                      }
                    }
                  }

                  setTranslate3d(_node3, translate)
                  nodes[i].translate = translate
                }

                if (this.newIndex == null) {
                  this.newIndex = this.index
                }

                if (isKeySorting) {
                  this.newIndex = prevIndex
                }

                var oldIndex = isKeySorting ? this.prevIndex : prevIndex

                if (onSortOver && this.newIndex !== oldIndex) {
                  onSortOver({
                    collection: this.manager.active.collection,
                    index: this.index,
                    newIndex: this.newIndex,
                    oldIndex: oldIndex,
                    isKeySorting: isKeySorting,
                    nodes: nodes,
                    helper: this.helper,
                  })
                }
              },
            },
            {
              key: 'getWrappedInstance',
              value: function getWrappedInstance() {
                invariant_1(
                  config.withRef,
                  'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call'
                )
                return this.refs.wrappedInstance
              },
            },
            {
              key: 'getContainer',
              value: function getContainer() {
                var getContainer = this.props.getContainer

                if (typeof getContainer !== 'function') {
                  return ReactDOM.findDOMNode(this)
                }

                return getContainer(
                  config.withRef ? this.getWrappedInstance() : undefined
                )
              },
            },
            {
              key: 'render',
              value: function render() {
                var ref = config.withRef ? 'wrappedInstance' : null
                return React.createElement(
                  WrappedComponent,
                  _extends(
                    {
                      ref: ref,
                    },
                    omit$1(this.props, omittedProps)
                  )
                )
              },
            },
            {
              key: 'helperContainer',
              get: function get() {
                var helperContainer = this.props.helperContainer

                if (typeof helperContainer === 'function') {
                  return helperContainer()
                }

                return this.props.helperContainer || this.document.body
              },
            },
            {
              key: 'containerScrollDelta',
              get: function get() {
                var useWindowAsScrollContainer =
                  this.props.useWindowAsScrollContainer

                if (useWindowAsScrollContainer) {
                  return {
                    left: 0,
                    top: 0,
                  }
                }

                return {
                  left:
                    this.scrollContainer.scrollLeft - this.initialScroll.left,
                  top: this.scrollContainer.scrollTop - this.initialScroll.top,
                }
              },
            },
            {
              key: 'windowScrollDelta',
              get: function get() {
                return {
                  left:
                    this.contentWindow.pageXOffset -
                    this.initialWindowScroll.left,
                  top:
                    this.contentWindow.pageYOffset -
                    this.initialWindowScroll.top,
                }
              },
            },
          ])

          return WithSortableContainer
        })(React.Component)),
      _defineProperty(
        _class,
        'displayName',
        provideDisplayName('sortableList', WrappedComponent)
      ),
      _defineProperty(_class, 'defaultProps', defaultProps),
      _defineProperty(_class, 'propTypes', propTypes),
      _defineProperty(_class, 'childContextTypes', {
        manager: propTypes$2.object.isRequired,
      }),
      _temp
    )
  }

  var propTypes$1 = {
    index: propTypes$2.number.isRequired,
    collection: propTypes$2.oneOfType([propTypes$2.number, propTypes$2.string]),
    disabled: propTypes$2.bool,
  }
  var omittedProps$1 = Object.keys(propTypes$1)
  function sortableElement(WrappedComponent) {
    var _class, _temp

    var config =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : {
            withRef: false,
          }
    return (
      (_temp = _class =
        (function (_React$Component) {
          _inherits(WithSortableElement, _React$Component)

          function WithSortableElement() {
            _classCallCheck(this, WithSortableElement)

            return _possibleConstructorReturn(
              this,
              _getPrototypeOf(WithSortableElement).apply(this, arguments)
            )
          }

          _createClass(WithSortableElement, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                this.register()
              },
            },
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate(prevProps) {
                if (this.node) {
                  if (prevProps.index !== this.props.index) {
                    this.node.sortableInfo.index = this.props.index
                  }

                  if (prevProps.disabled !== this.props.disabled) {
                    this.node.sortableInfo.disabled = this.props.disabled
                  }
                }

                if (prevProps.collection !== this.props.collection) {
                  this.unregister(prevProps.collection)
                  this.register()
                }
              },
            },
            {
              key: 'componentWillUnmount',
              value: function componentWillUnmount() {
                this.unregister()
              },
            },
            {
              key: 'register',
              value: function register() {
                var _this$props = this.props,
                  collection = _this$props.collection,
                  disabled = _this$props.disabled,
                  index = _this$props.index
                var node = ReactDOM.findDOMNode(this)
                node.sortableInfo = {
                  collection: collection,
                  disabled: disabled,
                  index: index,
                  manager: this.context.manager,
                }
                this.node = node
                this.ref = {
                  node: node,
                }
                this.context.manager.add(collection, this.ref)
              },
            },
            {
              key: 'unregister',
              value: function unregister() {
                var collection =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : this.props.collection
                this.context.manager.remove(collection, this.ref)
              },
            },
            {
              key: 'getWrappedInstance',
              value: function getWrappedInstance() {
                invariant_1(
                  config.withRef,
                  'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call'
                )
                return this.refs.wrappedInstance
              },
            },
            {
              key: 'render',
              value: function render() {
                var ref = config.withRef ? 'wrappedInstance' : null
                return React.createElement(
                  WrappedComponent,
                  _extends(
                    {
                      ref: ref,
                    },
                    omit$1(this.props, omittedProps$1)
                  )
                )
              },
            },
          ])

          return WithSortableElement
        })(React.Component)),
      _defineProperty(
        _class,
        'displayName',
        provideDisplayName('sortableElement', WrappedComponent)
      ),
      _defineProperty(_class, 'contextTypes', {
        manager: propTypes$2.object.isRequired,
      }),
      _defineProperty(_class, 'propTypes', propTypes$1),
      _defineProperty(_class, 'defaultProps', {
        collection: 0,
      }),
      _temp
    )
  }

  var momentable = function (value, format) {
    return Array.isArray(value)
      ? value.map(function (val) {
          return moment(val, format)
        })
      : value
      ? moment(value, format)
      : value
  }
  var formatMomentValue = function (value, format, placeholder) {
    var formatDate = function (date, format, i) {
      if (i === void 0) {
        i = 0
      }
      if (!date) return placeholder
      if (Formily.Shared.isArr(format)) {
        var _format = format[i]
        if (Formily.Shared.isFn(_format)) {
          return _format(date)
        }
        return (date === null || date === void 0 ? void 0 : date.format)
          ? date.format(_format)
          : date
      } else {
        if (Formily.Shared.isFn(format)) {
          return format(date)
        }
        return (date === null || date === void 0 ? void 0 : date.format)
          ? date.format(format)
          : date
      }
    }
    if (Formily.Shared.isArr(value)) {
      return value.map(function (val, index) {
        return formatDate(val, format, index)
      })
    } else {
      return value ? formatDate(value, format) : value || placeholder
    }
  }

  var defaultEvent = 'click'
  function getTargetElement(target, defaultElement) {
    if (!target) {
      return defaultElement
    }
    var targetElement
    if (typeof target === 'function') {
      targetElement = target()
    } else if ('current' in target) {
      targetElement = target.current
    } else {
      targetElement = target
    }
    return targetElement
  }
  var useClickAway = function (onClickAway, target, eventName) {
    if (eventName === void 0) {
      eventName = defaultEvent
    }
    var onClickAwayRef = React.useRef(onClickAway)
    onClickAwayRef.current = onClickAway
    React.useEffect(
      function () {
        var handler = function (event) {
          var targets = Array.isArray(target) ? target : [target]
          if (
            targets.some(function (targetItem) {
              var targetElement = getTargetElement(targetItem)
              return (
                !targetElement ||
                (targetElement === null || targetElement === void 0
                  ? void 0
                  : targetElement.contains(event.target))
              )
            })
          ) {
            return
          }
          onClickAwayRef.current(event)
        }
        document.addEventListener(eventName, handler)
        return function () {
          document.removeEventListener(eventName, handler)
        }
      },
      [target, eventName]
    )
  }

  var usePrefixCls = function (tag, props) {
    var _a, _b, _c
    var getContext = Next.ConfigProvider['getContext']
    var prefix =
      (_c =
        (_a = props === null || props === void 0 ? void 0 : props.prefix) !==
          null && _a !== void 0
          ? _a
          : (_b = getContext()) === null || _b === void 0
          ? void 0
          : _b.prefix) !== null && _c !== void 0
        ? _c
        : 'next-'
    return ''.concat(prefix).concat(tag !== null && tag !== void 0 ? tag : '')
  }

  function toArray(children, option) {
    if (option === void 0) {
      option = {}
    }
    var ret = []
    React.Children.forEach(children, function (child) {
      if ((child === undefined || child === null) && !option.keepEmpty) {
        return
      }
      if (Array.isArray(child)) {
        ret = ret.concat(toArray(child))
      } else if (ReactIs.isFragment(child) && child.props) {
        ret = ret.concat(toArray(child.props.children, option))
      } else {
        ret.push(child)
      }
    })
    return ret
  }

  var mapStatus = function (props, field) {
    var takeStatus = function () {
      var _a, _b
      if (!field) return
      if (field['loading'] || field['validating']) return 'loading'
      if (field['invalid']) return 'error'
      if (
        (_a = field['warnings']) === null || _a === void 0 ? void 0 : _a.length
      )
        return 'warning'
      return (_b = field.decoratorProps) === null || _b === void 0
        ? void 0
        : _b.feedbackStatus
    }
    var takeState = function (state) {
      if (state === 'validating' || state === 'pending') return 'loading'
      return state
    }
    return __assign$2(__assign$2({}, props), {
      state: takeState(props.state) || takeStatus(),
    })
  }

  var calcBreakpointIndex$1 = function (breakpoints, width) {
    for (var i = 0; i < breakpoints.length; i++) {
      if (width <= breakpoints[i]) {
        return i
      }
    }
  }
  var calcFactor$1 = function (value, breakpointIndex) {
    var _a
    if (Array.isArray(value)) {
      if (breakpointIndex === -1) return value[0]
      return (_a = value[breakpointIndex]) !== null && _a !== void 0
        ? _a
        : value[value.length - 1]
    } else {
      return value
    }
  }
  var factor$1 = function (value, breakpointIndex) {
    return Formily.Shared.isValid(value)
      ? calcFactor$1(value, breakpointIndex)
      : value
  }
  var calculateProps = function (target, props) {
    var clientWidth = target.clientWidth
    var breakpoints = props.breakpoints,
      layout = props.layout,
      labelAlign = props.labelAlign,
      wrapperAlign = props.wrapperAlign,
      labelCol = props.labelCol,
      wrapperCol = props.wrapperCol,
      otherProps = __rest(props, [
        'breakpoints',
        'layout',
        'labelAlign',
        'wrapperAlign',
        'labelCol',
        'wrapperCol',
      ])
    var breakpointIndex = calcBreakpointIndex$1(breakpoints, clientWidth)
    return __assign$2(
      {
        layout: factor$1(layout, breakpointIndex),
        labelAlign: factor$1(labelAlign, breakpointIndex),
        wrapperAlign: factor$1(wrapperAlign, breakpointIndex),
        labelCol: factor$1(labelCol, breakpointIndex),
        wrapperCol: factor$1(wrapperCol, breakpointIndex),
      },
      otherProps
    )
  }
  var useResponsiveFormLayout = function (props) {
    var ref = React.useRef(null)
    var breakpoints = props.breakpoints
    if (!Formily.Shared.isArr(breakpoints)) {
      return { ref: ref, props: props }
    }
    var _a = __read$1(React.useState(props), 2),
      layoutProps = _a[0],
      setLayout = _a[1]
    var updateUI = function () {
      setLayout(calculateProps(ref.current, props))
    }
    React.useEffect(function () {
      var observer = function () {
        updateUI()
      }
      var resizeObserver = new ResizeObserver(observer)
      if (ref.current) {
        resizeObserver.observe(ref.current)
      }
      updateUI()
      return function () {
        resizeObserver.disconnect()
      }
    }, [])
    return {
      ref: ref,
      props: layoutProps,
    }
  }

  var classnames = createCommonjsModule(function (module) {
    /* global define */

    ;(function () {
      var hasOwn = {}.hasOwnProperty

      function classNames() {
        var classes = []

        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i]
          if (!arg) continue

          var argType = typeof arg

          if (argType === 'string' || argType === 'number') {
            classes.push(arg)
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg)
              if (inner) {
                classes.push(inner)
              }
            }
          } else if (argType === 'object') {
            if (arg.toString === Object.prototype.toString) {
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key)
                }
              }
            } else {
              classes.push(arg.toString())
            }
          }
        }

        return classes.join(' ')
      }

      if (module.exports) {
        classNames.default = classNames
        module.exports = classNames
      } else {
        window.classNames = classNames
      }
    })()
  })

  var FormLayoutDeepContext = React.createContext(null)
  var FormLayoutShallowContext = React.createContext(null)
  var useFormDeepLayout = function () {
    return React.useContext(FormLayoutDeepContext)
  }
  var useFormShallowLayout = function () {
    return React.useContext(FormLayoutShallowContext)
  }
  var useFormLayout = function () {
    return __assign$2(
      __assign$2({}, useFormDeepLayout()),
      useFormShallowLayout()
    )
  }
  var FormLayout = function (_a) {
    var _b
    var shallow = _a.shallow,
      children = _a.children,
      prefix = _a.prefix,
      className = _a.className,
      style = _a.style,
      otherProps = __rest(_a, [
        'shallow',
        'children',
        'prefix',
        'className',
        'style',
      ])
    var _c = useResponsiveFormLayout(otherProps),
      ref = _c.ref,
      props = _c.props
    var deepLayout = useFormDeepLayout()
    var formPrefixCls = usePrefixCls('form', { prefix: prefix })
    var layoutPrefixCls = usePrefixCls('formily-layout', { prefix: prefix })
    var layoutClassName = classnames(
      layoutPrefixCls,
      ((_b = {}),
      (_b[''.concat(formPrefixCls, '-').concat(props.layout)] = true),
      (_b[''.concat(formPrefixCls, '-rtl')] = props.direction === 'rtl'),
      (_b[''.concat(formPrefixCls, '-').concat(props.size)] = props.size),
      _b),
      className
    )
    var renderChildren = function () {
      var newDeepLayout = __assign$2({}, deepLayout)
      if (!shallow) {
        Object.assign(newDeepLayout, props)
      } else {
        if (props.size) {
          newDeepLayout.size = props.size
        }
        if (props.colon) {
          newDeepLayout.colon = props.colon
        }
      }
      return React.createElement(
        FormLayoutDeepContext.Provider,
        { value: newDeepLayout },
        React.createElement(
          FormLayoutShallowContext.Provider,
          { value: shallow ? props : undefined },
          children
        )
      )
    }
    return React.createElement(
      'div',
      { ref: ref, className: layoutClassName, style: style },
      renderChildren()
    )
  }
  FormLayout.defaultProps = {
    shallow: true,
  }
  FormLayout.useFormDeepLayout = useFormDeepLayout
  FormLayout.useFormShallowLayout = useFormShallowLayout
  FormLayout.useFormLayout = useFormLayout

  var mapSize = function (props) {
    var layout = __assign$2(
      __assign$2({}, useFormShallowLayout()),
      useFormLayout()
    )
    var takeSize = function () {
      return layout.size === 'default' ? 'medium' : layout.size
    }
    return __assign$2(__assign$2({}, props), { size: props.size || takeSize() })
  }

  var Empty$1 = function () {
    return React.createElement(
      'div',
      { className: 'next-empty' },
      React.createElement(
        'div',
        { className: 'next-empty-image' },
        React.createElement(
          'svg',
          {
            className: 'ant-empty-img-default',
            width: '184',
            height: '120',
            viewBox: '0 0 184 152',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          React.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            React.createElement(
              'g',
              { transform: 'translate(24 31.67)' },
              React.createElement('ellipse', {
                className: 'ant-empty-img-default-ellipse',
                cx: '67.797',
                cy: '106.89',
                rx: '67.797',
                ry: '12.668',
              }),
              React.createElement('path', {
                className: 'ant-empty-img-default-path-1',
                d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
              }),
              React.createElement('path', {
                className: 'ant-empty-img-default-path-2',
                d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
                transform: 'translate(13.56)',
              }),
              React.createElement('path', {
                className: 'ant-empty-img-default-path-3',
                d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
              }),
              React.createElement('path', {
                className: 'ant-empty-img-default-path-4',
                d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
              })
            ),
            React.createElement('path', {
              className: 'ant-empty-img-default-path-5',
              d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
            }),
            React.createElement(
              'g',
              {
                className: 'ant-empty-img-default-g',
                transform: 'translate(149.65 15.383)',
              },
              React.createElement('ellipse', {
                cx: '20.654',
                cy: '3.167',
                rx: '2.849',
                ry: '2.815',
              }),
              React.createElement('path', {
                d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z',
              })
            )
          )
        )
      )
    )
  }

  var loading = function (title, processor) {
    if (title === void 0) {
      title = 'Loading...'
    }
    return __awaiter(void 0, void 0, void 0, function () {
      var loading
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            loading = setTimeout(function () {
              Next.Message.loading(title)
            }, 100)
            _a.label = 1
          case 1:
            _a.trys.push([1, , 3, 4])
            return [4 /*yield*/, processor()]
          case 2:
            return [2 /*return*/, _a.sent()]
          case 3:
            Next.Message.hide()
            clearTimeout(loading)
            return [7 /*endfinally*/]
          case 4:
            return [2 /*return*/]
        }
      })
    })
  }

  var PortalMap = Formily.Reactive.observable(new Map())
  var createPortalProvider = function (id) {
    var Portal = function (props) {
      if (props.id && !PortalMap.has(props.id)) {
        PortalMap.set(props.id, null)
      }
      return React.createElement(
        React.Fragment,
        null,
        props.children,
        React.createElement(Formily.React.Observer, null, function () {
          if (!props.id) return null
          var portal = PortalMap.get(props.id)
          if (portal) return ReactDOM.createPortal(portal, document.body)
          return null
        })
      )
    }
    Portal.defaultProps = {
      id: id,
    }
    return Portal
  }
  function createPortalRoot(host, id) {
    function render(renderer) {
      if (PortalMap.has(id)) {
        PortalMap.set(
          id,
          renderer === null || renderer === void 0 ? void 0 : renderer()
        )
      } else if (host) {
        ReactDOM.render(
          React.createElement(
            React.Fragment,
            null,
            renderer === null || renderer === void 0 ? void 0 : renderer()
          ),
          host
        )
      }
    }
    function unmount() {
      var _a
      if (PortalMap.has(id)) {
        PortalMap.set(id, null)
      } else if (host) {
        ReactDOM.unmountComponentAtNode(host)
        ;(_a = host.parentNode) === null || _a === void 0
          ? void 0
          : _a.removeChild(host)
      }
    }
    return {
      render: render,
      unmount: unmount,
    }
  }

  var pickDataProps = function (props) {
    if (props === void 0) {
      props = {}
    }
    return Object.keys(props).reduce(function (buf, key) {
      if (key.includes('data-')) {
        buf[key] = props[key]
      }
      return buf
    }, {})
  }

  var Icon = React.forwardRef(function (props, ref) {
    var prefix = usePrefixCls('formily-icon')
    return React.createElement(
      'svg',
      __assign$2({}, props, {
        ref: ref,
        className: classnames(prefix, props.className),
        style: __assign$2(__assign$2({}, props.style), {
          cursor: props.onClick ? 'pointer' : '',
          display: 'inline-block',
          verticalAlign: 'middle',
        }),
        viewBox: '64 64 896 896',
        fill: 'currentColor',
        width: '1em',
        height: '1em',
        focusable: 'false',
        'aria-hidden': 'true',
      }),
      props.children
    )
  })
  var MenuOutlinedIcon = React.forwardRef(function (props, ref) {
    return React.createElement(
      Icon,
      __assign$2({}, props, { ref: ref }),
      React.createElement('path', {
        d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z',
      })
    )
  })
  var PlusOutlinedIcon = React.forwardRef(function (props, ref) {
    return React.createElement(
      Icon,
      __assign$2({}, props, { ref: ref }),
      React.createElement('path', {
        d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z',
      }),
      React.createElement('path', {
        d: 'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z',
      })
    )
  })
  var UpOutlinedIcon = React.forwardRef(function (props, ref) {
    return React.createElement(
      Icon,
      __assign$2({}, props, { ref: ref }),
      React.createElement('path', {
        d: 'M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z',
      })
    )
  })
  var DownOutlinedIcon = React.forwardRef(function (props, ref) {
    return React.createElement(
      Icon,
      __assign$2({}, props, { ref: ref }),
      React.createElement('path', {
        d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
      })
    )
  })
  var DeleteOutlinedIcon = React.forwardRef(function (props, ref) {
    return React.createElement(
      Icon,
      __assign$2({}, props, { ref: ref }),
      React.createElement('path', {
        d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z',
      })
    )
  })
  var QuestionCircleOutlinedIcon = React.forwardRef(function (props, ref) {
    return React.createElement(
      Icon,
      __assign$2({}, props, { ref: ref }),
      React.createElement('path', {
        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
      }),
      React.createElement('path', {
        d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z',
      })
    )
  })
  var CloseCircleOutlinedIcon = React.forwardRef(function (props, ref) {
    return React.createElement(
      Icon,
      __assign$2({}, props, { ref: ref }),
      React.createElement('path', {
        d: 'M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z',
      }),
      React.createElement('path', {
        d: 'M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
      })
    )
  })
  var CheckCircleOutlinedIcon = React.forwardRef(function (props, ref) {
    return React.createElement(
      Icon,
      __assign$2({}, props, { ref: ref }),
      React.createElement('path', {
        d: 'M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z',
      }),
      React.createElement('path', {
        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
      })
    )
  })
  var ExclamationCircleOutlinedIcon = React.forwardRef(function (props, ref) {
    return React.createElement(
      Icon,
      __assign$2({}, props, { ref: ref }),
      React.createElement('path', {
        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
      }),
      React.createElement('path', {
        d: 'M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z',
      })
    )
  })
  var EditOutlinedIcon = React.forwardRef(function (props, ref) {
    return React.createElement(
      Icon,
      __assign$2({}, props, { ref: ref }),
      React.createElement('path', {
        d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z',
      }),
      ' '
    )
  })
  var CloseOutlinedIcon = React.forwardRef(function (props, ref) {
    return React.createElement(
      Icon,
      __assign$2({}, props, { ref: ref }),
      React.createElement('path', {
        d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
      })
    )
  })
  var MessageOutlinedIcon = React.forwardRef(function (props, ref) {
    return React.createElement(
      Icon,
      __assign$2({}, props, { ref: ref }),
      React.createElement('path', {
        d: 'M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z',
      })
    )
  })

  var ArrayBaseContext = React.createContext(null)
  var ItemContext = React.createContext(null)
  var useArray = function () {
    return React.useContext(ArrayBaseContext)
  }
  var useIndex = function (index) {
    var ctx = React.useContext(ItemContext)
    return ctx ? ctx.index : index
  }
  var useRecord = function (record) {
    var ctx = React.useContext(ItemContext)
    return ctx ? ctx.record : record
  }
  var getDefaultValue = function (defaultValue, schema) {
    var _a, _b, _c, _d, _e, _f, _g
    if (Formily.Shared.isValid(defaultValue))
      return Formily.Shared.clone(defaultValue)
    if (
      Array.isArray(
        schema === null || schema === void 0 ? void 0 : schema.items
      )
    )
      return getDefaultValue(defaultValue, schema.items[0])
    if (
      ((_a = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _a === void 0
        ? void 0
        : _a.type) === 'array'
    )
      return []
    if (
      ((_b = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _b === void 0
        ? void 0
        : _b.type) === 'boolean'
    )
      return true
    if (
      ((_c = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _c === void 0
        ? void 0
        : _c.type) === 'date'
    )
      return ''
    if (
      ((_d = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _d === void 0
        ? void 0
        : _d.type) === 'datetime'
    )
      return ''
    if (
      ((_e = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _e === void 0
        ? void 0
        : _e.type) === 'number'
    )
      return 0
    if (
      ((_f = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _f === void 0
        ? void 0
        : _f.type) === 'object'
    )
      return {}
    if (
      ((_g = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _g === void 0
        ? void 0
        : _g.type) === 'string'
    )
      return ''
    return null
  }
  var ArrayBase = function (props) {
    var field = Formily.React.useField()
    var schema = Formily.React.useFieldSchema()
    return React.createElement(
      ArrayBaseContext.Provider,
      { value: { field: field, schema: schema, props: props } },
      props.children
    )
  }
  ArrayBase.Item = function (_a) {
    var children = _a.children,
      props = __rest(_a, ['children'])
    return React.createElement(ItemContext.Provider, { value: props }, children)
  }
  var SortHandle = sortableHandle(function (props) {
    var prefixCls = usePrefixCls('formily-array-base')
    return React.createElement(
      MenuOutlinedIcon,
      __assign$2({}, props, {
        className: classnames(
          ''.concat(prefixCls, '-sort-handle'),
          props.className
        ),
        style: __assign$2({}, props.style),
      })
    )
  })
  ArrayBase.SortHandle = function () {
    var _a
    var array = useArray()
    if (!array) return null
    if (
      ((_a = array.field) === null || _a === void 0 ? void 0 : _a.pattern) !==
      'editable'
    )
      return null
    return React.createElement(SortHandle, null)
  }
  ArrayBase.Index = function (props) {
    var index = useIndex()
    var prefixCls = usePrefixCls('formily-array-base')
    return React.createElement(
      'span',
      __assign$2({}, props, { className: ''.concat(prefixCls, '-index') }),
      '#',
      index + 1,
      '.'
    )
  }
  ArrayBase.Addition = function (props) {
    var _a, _b, _c
    var self = Formily.React.useField()
    var array = useArray()
    var prefixCls = usePrefixCls('formily-array-base')
    if (!array) return null
    if (
      ((_a = array.field) === null || _a === void 0 ? void 0 : _a.pattern) !==
        'editable' &&
      ((_b = array.field) === null || _b === void 0 ? void 0 : _b.pattern) !==
        'disabled'
    )
      return null
    return React.createElement(
      Next.Button,
      __assign$2({}, props, {
        disabled:
          (_c = array.field) === null || _c === void 0 ? void 0 : _c.disabled,
        className: classnames(
          ''.concat(prefixCls, '-addition'),
          props.className
        ),
        style: __assign$2({ display: 'block', width: '100%' }, props.style),
        onClick: function (e) {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l
          if (
            (_a = array.props) === null || _a === void 0 ? void 0 : _a.disabled
          )
            return
          e.stopPropagation()
          var defaultValue = getDefaultValue(props.defaultValue, array.schema)
          if (props.method === 'unshift') {
            ;(_c =
              (_b = array.field) === null || _b === void 0
                ? void 0
                : _b.unshift) === null || _c === void 0
              ? void 0
              : _c.call(_b, defaultValue)
            ;(_e =
              (_d = array.props) === null || _d === void 0
                ? void 0
                : _d.onAdd) === null || _e === void 0
              ? void 0
              : _e.call(_d, 0)
          } else {
            ;(_g =
              (_f = array.field) === null || _f === void 0
                ? void 0
                : _f.push) === null || _g === void 0
              ? void 0
              : _g.call(_f, defaultValue)
            ;(_j =
              (_h = array.props) === null || _h === void 0
                ? void 0
                : _h.onAdd) === null || _j === void 0
              ? void 0
              : _j.call(
                  _h,
                  ((_l =
                    (_k =
                      array === null || array === void 0
                        ? void 0
                        : array.field) === null || _k === void 0
                      ? void 0
                      : _k.value) === null || _l === void 0
                    ? void 0
                    : _l.length) - 1
                )
          }
          if (props.onClick) {
            props.onClick(e)
          }
        },
      }),
      React.createElement(PlusOutlinedIcon, null),
      props.title || self.title
    )
  }
  ArrayBase.Remove = React.forwardRef(function (props, ref) {
    var _a
    var index = useIndex(props.index)
    var array = useArray()
    var prefixCls = usePrefixCls('formily-array-base')
    if (!array) return null
    if (
      ((_a = array.field) === null || _a === void 0 ? void 0 : _a.pattern) !==
      'editable'
    )
      return null
    return React.createElement(
      DeleteOutlinedIcon,
      __assign$2({}, props, {
        className: classnames(''.concat(prefixCls, '-remove'), props.className),
        ref: ref,
        onClick: function (e) {
          var _a, _b, _c, _d, _e
          if (
            (_a = array.props) === null || _a === void 0 ? void 0 : _a.disabled
          )
            return
          e.stopPropagation()
          ;(_c =
            (_b = array.field) === null || _b === void 0
              ? void 0
              : _b.remove) === null || _c === void 0
            ? void 0
            : _c.call(_b, index)
          ;(_e =
            (_d = array.props) === null || _d === void 0
              ? void 0
              : _d.onRemove) === null || _e === void 0
            ? void 0
            : _e.call(_d, index)
          if (props.onClick) {
            props.onClick(e)
          }
        },
      })
    )
  })
  ArrayBase.MoveDown = React.forwardRef(function (props, ref) {
    var _a
    var index = useIndex(props.index)
    var array = useArray()
    var prefixCls = usePrefixCls('formily-array-base')
    if (!array) return null
    if (
      ((_a = array.field) === null || _a === void 0 ? void 0 : _a.pattern) !==
      'editable'
    )
      return null
    return React.createElement(
      DownOutlinedIcon,
      __assign$2({}, props, {
        className: classnames(
          ''.concat(prefixCls, '-move-down'),
          props.className
        ),
        ref: ref,
        onClick: function (e) {
          var _a, _b, _c, _d, _e
          if (
            (_a = array.props) === null || _a === void 0 ? void 0 : _a.disabled
          )
            return
          e.stopPropagation()
          ;(_c =
            (_b = array.field) === null || _b === void 0
              ? void 0
              : _b.moveDown) === null || _c === void 0
            ? void 0
            : _c.call(_b, index)
          ;(_e =
            (_d = array.props) === null || _d === void 0
              ? void 0
              : _d.onMoveDown) === null || _e === void 0
            ? void 0
            : _e.call(_d, index)
          if (props.onClick) {
            props.onClick(e)
          }
        },
      })
    )
  })
  ArrayBase.MoveUp = React.forwardRef(function (props, ref) {
    var _a
    var index = useIndex(props.index)
    var array = useArray()
    var prefixCls = usePrefixCls('formily-array-base')
    if (!array) return null
    if (
      ((_a = array.field) === null || _a === void 0 ? void 0 : _a.pattern) !==
      'editable'
    )
      return null
    return React.createElement(
      UpOutlinedIcon,
      __assign$2({}, props, {
        className: classnames(
          ''.concat(prefixCls, '-move-up'),
          props.className
        ),
        ref: ref,
        onClick: function (e) {
          var _a, _b, _c, _d
          if (
            (_a = array.props) === null || _a === void 0 ? void 0 : _a.disabled
          )
            return
          e.stopPropagation()
          ;(_b = array === null || array === void 0 ? void 0 : array.field) ===
            null || _b === void 0
            ? void 0
            : _b.moveUp(index)
          ;(_d =
            (_c = array === null || array === void 0 ? void 0 : array.props) ===
              null || _c === void 0
              ? void 0
              : _c.onMoveUp) === null || _d === void 0
            ? void 0
            : _d.call(_c, index)
          if (props.onClick) {
            props.onClick(e)
          }
        },
      })
    )
  })
  ArrayBase.useArray = useArray
  ArrayBase.useIndex = useIndex
  ArrayBase.useRecord = useRecord
  ArrayBase.mixin = function (target) {
    target.Index = ArrayBase.Index
    target.SortHandle = ArrayBase.SortHandle
    target.Addition = ArrayBase.Addition
    target.Remove = ArrayBase.Remove
    target.MoveDown = ArrayBase.MoveDown
    target.MoveUp = ArrayBase.MoveUp
    target.useArray = ArrayBase.useArray
    target.useIndex = ArrayBase.useIndex
    target.useRecord = ArrayBase.useRecord
    return target
  }

  var isColumnComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Column')) > -1
    )
  }
  var isOperationsComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Operations')) > -1
    )
  }
  var isAdditionComponent$3 = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Addition')) > -1
    )
  }
  var useArrayTableSources = function () {
    var arrayField = Formily.React.useField()
    var schema = Formily.React.useFieldSchema()
    var parseSources = function (schema) {
      var _a, _b, _c
      if (
        isColumnComponent(schema) ||
        isOperationsComponent(schema) ||
        isAdditionComponent$3(schema)
      ) {
        if (
          !((_a = schema['x-component-props']) === null || _a === void 0
            ? void 0
            : _a['dataIndex']) &&
          !schema['name']
        )
          return []
        var name_1 =
          ((_b = schema['x-component-props']) === null || _b === void 0
            ? void 0
            : _b['dataIndex']) || schema['name']
        var field = arrayField.query(arrayField.address.concat(name_1)).take()
        var columnProps =
          ((_c =
            field === null || field === void 0 ? void 0 : field.component) ===
            null || _c === void 0
            ? void 0
            : _c[1]) ||
          schema['x-component-props'] ||
          {}
        var display =
          (field === null || field === void 0 ? void 0 : field.display) ||
          schema['x-display']
        return [
          {
            name: name_1,
            display: display,
            field: field,
            schema: schema,
            columnProps: columnProps,
          },
        ]
      } else if (schema.properties) {
        return schema.reduceProperties(function (buf, schema) {
          return buf.concat(parseSources(schema))
        }, [])
      }
    }
    var parseArrayItems = function (schema) {
      if (!schema) return []
      var sources = []
      var items = Formily.Shared.isArr(schema) ? schema : [schema]
      return items.reduce(function (columns, schema) {
        var item = parseSources(schema)
        if (item) {
          return columns.concat(item)
        }
        return columns
      }, sources)
    }
    return parseArrayItems(schema.items)
  }
  var useArrayTableColumns = function (dataSource, sources) {
    return sources.reduce(function (buf, _a, key) {
      var name = _a.name,
        columnProps = _a.columnProps,
        schema = _a.schema,
        display = _a.display
      if (display !== 'visible') return buf
      if (!isColumnComponent(schema)) return buf
      return buf.concat(
        __assign$2(__assign$2({}, columnProps), {
          key: key,
          dataIndex: name,
          cell: function (value, _, record) {
            var index = dataSource.indexOf(record)
            var children = React.createElement(
              ArrayBase.Item,
              { key: index, index: index, record: record },
              React.createElement(Formily.React.RecursionField, {
                schema: schema,
                name: index,
                onlyRenderProperties: true,
              })
            )
            return children
          },
        })
      )
    }, [])
  }
  var useAddition$1 = function () {
    var schema = Formily.React.useFieldSchema()
    return schema.reduceProperties(function (addition, schema, key) {
      if (isAdditionComponent$3(schema)) {
        return React.createElement(Formily.React.RecursionField, {
          schema: schema,
          name: key,
        })
      }
      return addition
    }, null)
  }
  var StatusSelect = Formily.React.observer(function (_a) {
    var _b
    var pageSize = _a.pageSize,
      props = __rest(_a, ['pageSize'])
    var form = Formily.React.useForm()
    var field = Formily.React.useField()
    var prefixCls = usePrefixCls('formily-array-table')
    var errors = form.queryFeedbacks({
      type: 'error',
      address: ''.concat(field.address, '.*'),
    })
    var parseIndex = function (address) {
      var _a
      return Number(
        (_a = address
          .slice(address.indexOf(field.address.toString()) + 1)
          .match(/(\d+)/)) === null || _a === void 0
          ? void 0
          : _a[1]
      )
    }
    var options =
      (_b = props.dataSource) === null || _b === void 0
        ? void 0
        : _b.map(function (_a) {
            var label = _a.label,
              value = _a.value
            var hasError = errors.some(function (_a) {
              var address = _a.address
              var currentIndex = parseIndex(address)
              var startIndex = (value - 1) * pageSize
              var endIndex = value * pageSize
              return currentIndex >= startIndex && currentIndex <= endIndex
            })
            return {
              label: hasError
                ? React.createElement(Next.Badge, { dot: true }, label)
                : label,
              value: value,
            }
          })
    return React.createElement(
      Next.Select,
      __assign$2({}, props, {
        value: props.value,
        onChange: props.onChange,
        dataSource: options,
        useVirtual: true,
        className: classnames(''.concat(prefixCls, '-status-select'), {
          'has-error':
            errors === null || errors === void 0 ? void 0 : errors.length,
        }),
      })
    )
  })
  var ArrayTablePagination = function (_a) {
    var _b
    var dataSource = _a.dataSource,
      props = __rest(_a, ['dataSource'])
    var _c = __read$1(React.useState(1), 2),
      current = _c[0],
      setCurrent = _c[1]
    var prefixCls = usePrefixCls('formily-array-table')
    var pageSize = props.pageSize || 10
    var size = props.size || 'medium'
    var sources = dataSource || []
    var startIndex = (current - 1) * pageSize
    var endIndex = startIndex + pageSize - 1
    var total =
      (sources === null || sources === void 0 ? void 0 : sources.length) || 0
    var totalPage = Math.ceil(total / pageSize)
    var pages = Array.from(new Array(totalPage)).map(function (_, index) {
      var page = index + 1
      return {
        label: page,
        value: page,
      }
    })
    var handleChange = function (current) {
      setCurrent(current)
    }
    React.useEffect(
      function () {
        if (totalPage > 0 && totalPage < current) {
          handleChange(totalPage)
        }
      },
      [totalPage, current]
    )
    var renderPagination = function () {
      if (totalPage <= 1) return
      return React.createElement(
        'div',
        { className: ''.concat(prefixCls, '-pagination') },
        React.createElement(StatusSelect, {
          value: current,
          pageSize: pageSize,
          onChange: handleChange,
          dataSource: pages,
          notFoundContent: false,
        }),
        React.createElement(
          Next.Pagination,
          __assign$2({}, props, {
            pageSize: pageSize,
            current: current,
            total: dataSource.length,
            size: size,
            pageSizeSelector: false,
            onChange: handleChange,
          })
        )
      )
    }
    return React.createElement(
      React.Fragment,
      null,
      (_b = props.children) === null || _b === void 0
        ? void 0
        : _b.call(
            props,
            dataSource === null || dataSource === void 0
              ? void 0
              : dataSource.slice(startIndex, endIndex + 1),
            renderPagination()
          )
    )
  }
  var omit = function (props, keys) {
    return Object.keys(props)
      .filter(function (key) {
        return !(keys === null || keys === void 0 ? void 0 : keys.includes(key))
      })
      .reduce(function (buf, key) {
        buf[key] = props[key]
        return buf
      }, {})
  }
  var ArrayTable = Formily.React.observer(function (props) {
    var ref = React.useRef()
    var field = Formily.React.useField()
    var prefixCls = usePrefixCls('formily-array-table')
    var dataSource = Array.isArray(field.value) ? field.value.slice() : []
    var sources = useArrayTableSources()
    var columns = useArrayTableColumns(dataSource, sources)
    var pagination = Formily.Shared.isBool(props.pagination)
      ? {}
      : props.pagination
    var addition = useAddition$1()
    return React.createElement(
      ArrayTablePagination,
      __assign$2({}, pagination, { dataSource: dataSource }),
      function (dataSource, pager) {
        return React.createElement(
          'div',
          { ref: ref, className: prefixCls },
          React.createElement(
            ArrayBase,
            null,
            React.createElement(
              Next.Table,
              __assign$2(
                { size: 'small' },
                omit(props, ['value', 'onChange', 'pagination']),
                { columns: columns, dataSource: dataSource }
              )
            ),
            React.createElement(
              'div',
              { style: { marginTop: 5, marginBottom: 5 } },
              pager
            ),
            sources.map(function (column, key) {
              //专门用来承接对Column的状态管理
              if (!isColumnComponent(column.schema)) return
              return React.createElement(Formily.React.RecursionField, {
                name: column.name,
                schema: column.schema,
                onlyRenderSelf: true,
                key: key,
              })
            }),
            addition
          )
        )
      }
    )
  })
  ArrayTable.displayName = 'ArrayTable'
  ArrayTable.Column = function () {
    return React.createElement(React.Fragment, null)
  }
  ArrayBase.mixin(ArrayTable)

  var isAdditionComponent$2 = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Addition')) > -1
    )
  }
  var isIndexComponent$1 = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Index')) > -1
    )
  }
  var isRemoveComponent$1 = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Remove')) > -1
    )
  }
  var isMoveUpComponent$1 = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('MoveUp')) > -1
    )
  }
  var isMoveDownComponent$1 = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('MoveDown')) > -1
    )
  }
  var isOperationComponent$1 = function (schema) {
    return (
      isAdditionComponent$2(schema) ||
      isRemoveComponent$1(schema) ||
      isMoveDownComponent$1(schema) ||
      isMoveUpComponent$1(schema)
    )
  }
  var Empty = function () {
    return React.createElement(
      'div',
      { className: 'next-empty' },
      React.createElement(
        'div',
        { className: 'next-empty-image' },
        React.createElement(
          'svg',
          {
            className: 'ant-empty-img-default',
            width: '184',
            height: '152',
            viewBox: '0 0 184 152',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          React.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            React.createElement(
              'g',
              { transform: 'translate(24 31.67)' },
              React.createElement('ellipse', {
                className: 'ant-empty-img-default-ellipse',
                cx: '67.797',
                cy: '106.89',
                rx: '67.797',
                ry: '12.668',
              }),
              React.createElement('path', {
                className: 'ant-empty-img-default-path-1',
                d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
              }),
              React.createElement('path', {
                className: 'ant-empty-img-default-path-2',
                d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
                transform: 'translate(13.56)',
              }),
              React.createElement('path', {
                className: 'ant-empty-img-default-path-3',
                d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
              }),
              React.createElement('path', {
                className: 'ant-empty-img-default-path-4',
                d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
              })
            ),
            React.createElement('path', {
              className: 'ant-empty-img-default-path-5',
              d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
            }),
            React.createElement(
              'g',
              {
                className: 'ant-empty-img-default-g',
                transform: 'translate(149.65 15.383)',
              },
              React.createElement('ellipse', {
                cx: '20.654',
                cy: '3.167',
                rx: '2.849',
                ry: '2.815',
              }),
              React.createElement('path', {
                d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z',
              })
            )
          )
        )
      )
    )
  }
  var ArrayCards = Formily.React.observer(function (props) {
    var field = Formily.React.useField()
    var schema = Formily.React.useFieldSchema()
    var dataSource = Array.isArray(field.value) ? field.value : []
    var prefixCls = usePrefixCls('formily-array-cards', props)
    var renderItems = function () {
      return dataSource === null || dataSource === void 0
        ? void 0
        : dataSource.map(function (item, index) {
            var items = Array.isArray(schema.items)
              ? schema.items[index] || schema.items[0]
              : schema.items
            var title = React.createElement(
              'span',
              null,
              React.createElement(Formily.React.RecursionField, {
                schema: items,
                name: index,
                filterProperties: function (schema) {
                  if (!isIndexComponent$1(schema)) return false
                  return true
                },
                onlyRenderProperties: true,
              }),
              props.title || field.title
            )
            var extra = React.createElement(
              'span',
              null,
              React.createElement(Formily.React.RecursionField, {
                schema: items,
                name: index,
                filterProperties: function (schema) {
                  if (!isOperationComponent$1(schema)) return false
                  return true
                },
                onlyRenderProperties: true,
              }),
              props.extra
            )
            var content = React.createElement(Formily.React.RecursionField, {
              schema: items,
              name: index,
              filterProperties: function (schema) {
                if (isIndexComponent$1(schema)) return false
                if (isOperationComponent$1(schema)) return false
                return true
              },
            })
            return React.createElement(
              ArrayBase.Item,
              { key: index, index: index, record: item },
              React.createElement(
                Next.Card,
                __assign$2({ contentHeight: 'auto' }, props, {
                  onChange: function () {},
                  className: classnames(
                    ''.concat(prefixCls, '-item'),
                    props.className
                  ),
                  title: title,
                  extra: extra,
                }),
                content
              )
            )
          })
    }
    var renderAddition = function () {
      return schema.reduceProperties(function (addition, schema, key) {
        if (isAdditionComponent$2(schema)) {
          return React.createElement(Formily.React.RecursionField, {
            schema: schema,
            name: key,
          })
        }
        return addition
      }, null)
    }
    var renderEmpty = function () {
      if (
        dataSource === null || dataSource === void 0
          ? void 0
          : dataSource.length
      )
        return
      return React.createElement(
        Next.Card,
        __assign$2({ contentHeight: 'auto' }, props, {
          className: classnames(''.concat(prefixCls, '-item'), props.className),
          title: props.title || field.title,
          onChange: function () {},
        }),
        React.createElement(Empty, null)
      )
    }
    return React.createElement(
      ArrayBase,
      null,
      renderEmpty(),
      renderItems(),
      renderAddition()
    )
  })
  ArrayCards.displayName = 'ArrayCards'
  ArrayBase.mixin(ArrayCards)

  var isAdditionComponent$1 = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Addition')) > -1
    )
  }
  var isIndexComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Index')) > -1
    )
  }
  var isRemoveComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Remove')) > -1
    )
  }
  var isMoveUpComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('MoveUp')) > -1
    )
  }
  var isMoveDownComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('MoveDown')) > -1
    )
  }
  var isOperationComponent = function (schema) {
    return (
      isAdditionComponent$1(schema) ||
      isRemoveComponent(schema) ||
      isMoveDownComponent(schema) ||
      isMoveUpComponent(schema)
    )
  }
  var range = function (count) {
    return Array.from({ length: count }).map(function (_, i) {
      return i
    })
  }
  var takeDefaultExpandedKeys = function (
    dataSourceLength,
    defaultOpenPanelCount
  ) {
    if (dataSourceLength < defaultOpenPanelCount) return range(dataSourceLength)
    return range(defaultOpenPanelCount)
  }
  var insertExpandedKeys = function (expandedKeys, index) {
    if (expandedKeys.length <= index) return expandedKeys.concat(index)
    return expandedKeys.reduce(function (buf, key) {
      if (key < index) return buf.concat(key)
      if (key === index) return buf.concat([key, key + 1])
      return buf.concat(key + 1)
    }, [])
  }
  var ArrayCollapse = Formily.React.observer(function (_a) {
    var defaultOpenPanelCount = _a.defaultOpenPanelCount,
      props = __rest(_a, ['defaultOpenPanelCount'])
    var field = Formily.React.useField()
    var dataSource = Array.isArray(field.value) ? field.value : []
    var _b = __read$1(
        React.useState(
          takeDefaultExpandedKeys(dataSource.length, defaultOpenPanelCount)
        ),
        2
      ),
      expandKeys = _b[0],
      setExpandKeys = _b[1]
    var schema = Formily.React.useFieldSchema()
    var prefixCls = usePrefixCls('formily-array-collapse', props)
    React.useEffect(
      function () {
        if (!field.modified && dataSource.length) {
          setExpandKeys(
            takeDefaultExpandedKeys(dataSource.length, defaultOpenPanelCount)
          )
        }
      },
      [dataSource.length, field]
    )
    if (!schema) throw new Error('can not found schema object')
    var renderAddition = function () {
      return schema.reduceProperties(function (addition, schema, key) {
        if (isAdditionComponent$1(schema)) {
          return React.createElement(Formily.React.RecursionField, {
            schema: schema,
            name: key,
          })
        }
        return addition
      }, null)
    }
    var renderEmpty = function () {
      if (dataSource.length) return
      return React.createElement(
        Next.Card,
        {
          className: classnames(''.concat(prefixCls, '-item'), props.className),
        },
        React.createElement(Empty$1, null)
      )
    }
    var renderItems = function () {
      return React.createElement(
        Next.Collapse,
        __assign$2({}, props, {
          expandedKeys: expandKeys.map(String),
          onExpand: function (keys) {
            return setExpandKeys(Formily.Shared.toArr(keys).map(Number))
          },
          className: classnames(''.concat(prefixCls, '-item'), props.className),
        }),
        dataSource.map(function (item, index) {
          var items = Array.isArray(schema.items)
            ? schema.items[index] || schema.items[0]
            : schema.items
          var panelProps = field
            .query(''.concat(field.address, '.').concat(index))
            .get('componentProps')
          var props = items['x-component-props']
          var title = function () {
            var title = ''.concat(
              (panelProps === null || panelProps === void 0
                ? void 0
                : panelProps.title) ||
                (props === null || props === void 0 ? void 0 : props.title) ||
                field.title
            )
            var path = field.address.concat(index)
            var errors = field.form.queryFeedbacks({
              type: 'error',
              address: ''.concat(path, '.**'),
            })
            return React.createElement(
              ArrayBase.Item,
              { index: index, record: item },
              React.createElement(
                'div',
                {
                  className: classnames(
                    ''.concat(prefixCls, '-item-title'),
                    props.className
                  ),
                },
                React.createElement(
                  'div',
                  null,
                  React.createElement(Formily.React.RecursionField, {
                    schema: items,
                    name: index,
                    filterProperties: function (schema) {
                      if (!isIndexComponent(schema)) return false
                      return true
                    },
                    onlyRenderProperties: true,
                  }),
                  errors.length
                    ? React.createElement(
                        Next.Badge,
                        { className: 'errors-badge', count: errors.length },
                        title
                      )
                    : title
                ),
                React.createElement(
                  'div',
                  null,
                  React.createElement(Formily.React.RecursionField, {
                    schema: items,
                    name: index,
                    filterProperties: function (schema) {
                      if (!isOperationComponent(schema)) return false
                      return true
                    },
                    onlyRenderProperties: true,
                  })
                )
              )
            )
          }
          var content = React.createElement(Formily.React.RecursionField, {
            schema: items,
            name: index,
            filterProperties: function (schema) {
              if (isIndexComponent(schema)) return false
              if (isOperationComponent(schema)) return false
              return true
            },
          })
          return React.createElement(
            Next.Collapse.Panel,
            __assign$2({}, props, panelProps, { key: index, title: title() }),
            React.createElement(
              ArrayBase.Item,
              { index: index, key: index, record: item },
              content
            )
          )
        })
      )
    }
    return React.createElement(
      ArrayBase,
      {
        onAdd: function (index) {
          setExpandKeys(insertExpandedKeys(expandKeys, index))
        },
      },
      renderEmpty(),
      renderItems(),
      renderAddition()
    )
  })
  var CollapsePanel$1 = function (_a) {
    var children = _a.children
    return React.createElement(React.Fragment, null, children)
  }
  CollapsePanel$1.displayName = 'CollapsePanel'
  ArrayCollapse.defaultProps = {
    defaultOpenPanelCount: 5,
  }
  ArrayCollapse.displayName = 'ArrayCollapse'
  ArrayCollapse.CollapsePanel = CollapsePanel$1
  ArrayBase.mixin(ArrayCollapse)

  var SortableItem = sortableElement(function (props) {
    var prefixCls = usePrefixCls('formily-array-items')
    return React.createElement(
      'div',
      __assign$2({}, props, {
        className: classnames(''.concat(prefixCls, '-item'), props.className),
      }),
      props.children
    )
  })
  var SortableList = sortableContainer(function (props) {
    var prefixCls = usePrefixCls('formily-array-items')
    return React.createElement(
      'div',
      __assign$2({}, props, {
        className: classnames(''.concat(prefixCls, '-list'), props.className),
      }),
      props.children
    )
  })
  var isAdditionComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Addition')) > -1
    )
  }
  var useAddition = function () {
    var schema = Formily.React.useFieldSchema()
    return schema.reduceProperties(function (addition, schema, key) {
      if (isAdditionComponent(schema)) {
        return React.createElement(Formily.React.RecursionField, {
          schema: schema,
          name: key,
        })
      }
      return addition
    }, null)
  }
  var ArrayItems = Formily.React.observer(function (props) {
    var field = Formily.React.useField()
    var prefixCls = usePrefixCls('formily-array-items')
    var schema = Formily.React.useFieldSchema()
    var addition = useAddition()
    var dataSource = Array.isArray(field.value) ? field.value : []
    return React.createElement(
      ArrayBase,
      null,
      React.createElement(
        'div',
        __assign$2({}, props, {
          onChange: function () {},
          className: classnames(prefixCls, props.className),
        }),
        React.createElement(
          SortableList,
          {
            useDragHandle: true,
            lockAxis: 'y',
            helperClass: ''.concat(prefixCls, '-sort-helper'),
            onSortEnd: function (_a) {
              var oldIndex = _a.oldIndex,
                newIndex = _a.newIndex
              field.move(oldIndex, newIndex)
            },
          },
          dataSource === null || dataSource === void 0
            ? void 0
            : dataSource.map(function (item, index) {
                var items = Array.isArray(schema.items)
                  ? schema.items[index] || schema.items[0]
                  : schema.items
                return React.createElement(
                  ArrayBase.Item,
                  { key: index, index: index, record: item },
                  React.createElement(
                    SortableItem,
                    { key: 'item-'.concat(index), index: index },
                    React.createElement(
                      'div',
                      { className: ''.concat(prefixCls, '-item-inner') },
                      React.createElement(Formily.React.RecursionField, {
                        schema: items,
                        name: index,
                      })
                    )
                  )
                )
              })
        ),
        addition
      )
    )
  })
  ArrayItems.displayName = 'ArrayItems'
  ArrayItems.Item = function (props) {
    var prefixCls = usePrefixCls('formily-array-items')
    return React.createElement(
      'div',
      __assign$2({}, props, {
        onChange: function () {},
        className: classnames(
          ''.concat(prefixCls, '-').concat(props.type || 'card'),
          props.className
        ),
      }),
      props.children
    )
  }
  ArrayBase.mixin(ArrayItems)

  var getContext$1 = Next.ConfigProvider['getContext']
  var isModalTitle = function (props) {
    return (
      Formily.Shared.isNum(props) ||
      Formily.Shared.isStr(props) ||
      Formily.Shared.isBool(props) ||
      React.isValidElement(props)
    )
  }
  var getModelProps = function (props) {
    if (isModalTitle(props)) {
      return {
        title: props,
      }
    } else {
      return props
    }
  }
  function FormDialog(title, id, renderer) {
    var _this = this
    if (Formily.Shared.isFn(id) || React.isValidElement(id)) {
      renderer = id
      id = 'form-dialog'
    }
    var env = {
      host: document.createElement('div'),
      form: null,
      promise: null,
      openMiddlewares: [],
      confirmMiddlewares: [],
      cancelMiddlewares: [],
    }
    var root = createPortalRoot(env.host, id)
    var props = getModelProps(title)
    var modal = __assign$2(__assign$2({}, props), {
      style: __assign$2({ width: '40%' }, props.style),
      afterClose: function () {
        var _a
        ;(_a =
          props === null || props === void 0 ? void 0 : props.afterClose) ===
          null || _a === void 0
          ? void 0
          : _a.call(props)
        root.unmount()
      },
    })
    var DialogContent = Formily.React.observer(function () {
      return React.createElement(
        React.Fragment,
        null,
        Formily.Shared.isFn(renderer) ? renderer(env.form) : renderer
      )
    })
    var renderDialog = function (visible, resolve, reject) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k
      if (visible === void 0) {
        visible = true
      }
      var ctx = getContext$1()
      var prefix = modal.prefix || ctx.prefix || 'next'
      var okProps = __assign$2(
        __assign$2(
          {
            children:
              ((_b =
                (_a = ctx === null || ctx === void 0 ? void 0 : ctx.locale) ===
                  null || _a === void 0
                  ? void 0
                  : _a.Dialog) === null || _b === void 0
                ? void 0
                : _b.ok) || '确定',
          },
          ((_d =
            (_c =
              ctx === null || ctx === void 0
                ? void 0
                : ctx.defaultPropsConfig) === null || _c === void 0
              ? void 0
              : _c.Dialog) === null || _d === void 0
            ? void 0
            : _d.okProps) || {}
        ),
        modal.okProps || {}
      )
      var cancelProps = __assign$2(
        __assign$2(
          {
            children:
              ((_f =
                (_e = ctx === null || ctx === void 0 ? void 0 : ctx.locale) ===
                  null || _e === void 0
                  ? void 0
                  : _e.Dialog) === null || _f === void 0
                ? void 0
                : _f.cancel) || '取消',
          },
          ((_h =
            (_g =
              ctx === null || ctx === void 0
                ? void 0
                : ctx.defaultPropsConfig) === null || _g === void 0
              ? void 0
              : _g.Dialog) === null || _h === void 0
            ? void 0
            : _h.cancelProps) || {}
        ),
        modal.cancelProps || {}
      )
      var buttonMap = {
        ok: React.createElement(
          Next.Button,
          __assign$2(
            {
              key: 'ok',
              type: 'primary',
              className: prefix + '-dialog-btn',
              loading: env.form.submitting,
              onClick: function (e) {
                var _a
                if (
                  ((_a =
                    modal === null || modal === void 0
                      ? void 0
                      : modal.onOk) === null || _a === void 0
                    ? void 0
                    : _a.call(modal, e)) !== false
                ) {
                  resolve()
                }
              },
            },
            okProps
          )
        ),
        cancel: React.createElement(
          Next.Button,
          __assign$2(
            {
              key: 'cancel',
              className: prefix + '-dialog-btn',
              onClick: function (e) {
                var _a
                if (
                  ((_a =
                    modal === null || modal === void 0
                      ? void 0
                      : modal.onCancel) === null || _a === void 0
                    ? void 0
                    : _a.call(modal, e)) !== false
                ) {
                  reject()
                }
              },
            },
            cancelProps
          )
        ),
      }
      var footerActions = ((_k =
        (_j =
          ctx === null || ctx === void 0 ? void 0 : ctx.defaultPropsConfig) ===
          null || _j === void 0
          ? void 0
          : _j.Dialog) === null || _k === void 0
        ? void 0
        : _k.footerActions) ||
        modal.footerActions || ['cancel', 'ok']
      return React.createElement(
        Next.ConfigProvider,
        __assign$2({}, ctx),
        React.createElement(Formily.React.Observer, null, function () {
          return React.createElement(
            Next.Dialog,
            __assign$2({}, modal, {
              visible: visible,
              footer: React.createElement(
                React.Fragment,
                null,
                footerActions.map(function (item) {
                  return buttonMap[item]
                })
              ),
              onClose: function (trigger, e) {
                var _a
                ;(_a =
                  modal === null || modal === void 0
                    ? void 0
                    : modal.onClose) === null || _a === void 0
                  ? void 0
                  : _a.call(modal, trigger, e)
                reject()
              },
            }),
            React.createElement(
              Formily.React.FormProvider,
              { form: env.form },
              React.createElement(DialogContent, null)
            )
          )
        })
      )
    }
    document.body.appendChild(env.host)
    var formDialog = {
      forOpen: function (middleware) {
        if (Formily.Shared.isFn(middleware)) {
          env.openMiddlewares.push(middleware)
        }
        return formDialog
      },
      forConfirm: function (middleware) {
        if (Formily.Shared.isFn(middleware)) {
          env.confirmMiddlewares.push(middleware)
        }
        return formDialog
      },
      forCancel: function (middleware) {
        if (Formily.Shared.isFn(middleware)) {
          env.cancelMiddlewares.push(middleware)
        }
        return formDialog
      },
      open: function (props) {
        return __awaiter(_this, void 0, void 0, function () {
          var _this = this
          return __generator(this, function (_a) {
            if (env.promise) return [2 /*return*/, env.promise]
            env.promise = new Promise(function (resolve, reject) {
              return __awaiter(_this, void 0, void 0, function () {
                var e_1
                var _this = this
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      _a.trys.push([0, 2, , 3])
                      return [
                        4 /*yield*/,
                        loading(modal.loadingText, function () {
                          return Formily.Shared.applyMiddleware(
                            props,
                            env.openMiddlewares
                          )
                        }),
                      ]
                    case 1:
                      props = _a.sent()
                      env.form = env.form || Formily.Core.createForm(props)
                      return [3 /*break*/, 3]
                    case 2:
                      e_1 = _a.sent()
                      reject(e_1)
                      return [3 /*break*/, 3]
                    case 3:
                      root.render(function () {
                        return renderDialog(
                          true,
                          function () {
                            env.form
                              .submit(function () {
                                return __awaiter(
                                  _this,
                                  void 0,
                                  void 0,
                                  function () {
                                    return __generator(this, function (_a) {
                                      switch (_a.label) {
                                        case 0:
                                          return [
                                            4 /*yield*/,
                                            Formily.Shared.applyMiddleware(
                                              env.form,
                                              env.confirmMiddlewares
                                            ),
                                          ]
                                        case 1:
                                          _a.sent()
                                          resolve(
                                            Formily.Reactive.toJS(
                                              env.form.values
                                            )
                                          )
                                          formDialog.close()
                                          return [2 /*return*/]
                                      }
                                    })
                                  }
                                )
                              })
                              .catch(function () {})
                          },
                          function () {
                            return __awaiter(
                              _this,
                              void 0,
                              void 0,
                              function () {
                                return __generator(this, function (_a) {
                                  switch (_a.label) {
                                    case 0:
                                      return [
                                        4 /*yield*/,
                                        loading(modal.loadingText, function () {
                                          return Formily.Shared.applyMiddleware(
                                            env.form,
                                            env.cancelMiddlewares
                                          )
                                        }),
                                      ]
                                    case 1:
                                      _a.sent()
                                      formDialog.close()
                                      return [2 /*return*/]
                                  }
                                })
                              }
                            )
                          }
                        )
                      })
                      return [2 /*return*/]
                  }
                })
              })
            })
            return [2 /*return*/, env.promise]
          })
        })
      },
      close: function () {
        if (!env.host) return
        root.render(function () {
          return renderDialog(false)
        })
      },
    }
    return formDialog
  }
  var DialogFooter = function (props) {
    var ref = React.useRef()
    var _a = __read$1(React.useState(), 2),
      footer = _a[0],
      setFooter = _a[1]
    var footerRef = React.useRef()
    var prefixCls = usePrefixCls('dialog')
    React.useLayoutEffect(function () {
      var _a
      var content =
        (_a = ref.current) === null || _a === void 0
          ? void 0
          : _a.closest('.'.concat(prefixCls))
      if (content) {
        if (!footerRef.current) {
          footerRef.current = content.querySelector(
            '.'.concat(prefixCls, '-footer')
          )
          if (!footerRef.current) {
            footerRef.current = document.createElement('div')
            footerRef.current.classList.add(''.concat(prefixCls, '-footer'))
            content.appendChild(footerRef.current)
          }
        }
        setFooter(footerRef.current)
      }
    })
    footerRef.current = footer
    return React.createElement(
      'div',
      { ref: ref, style: { display: 'none' } },
      footer && ReactDOM.createPortal(props.children, footer)
    )
  }
  FormDialog.Footer = DialogFooter
  FormDialog.Portal = createPortalProvider('form-dialog')

  var getContext = Next.ConfigProvider['getContext']
  var isDrawerTitle = function (props) {
    return (
      Formily.Shared.isNum(props) ||
      Formily.Shared.isStr(props) ||
      Formily.Shared.isBool(props) ||
      React.isValidElement(props)
    )
  }
  var getDrawerProps = function (props) {
    if (isDrawerTitle(props)) {
      return {
        title: props,
      }
    } else {
      return props
    }
  }
  function FormDrawer(title, id, renderer) {
    var _this = this
    if (Formily.Shared.isFn(id) || React.isValidElement(id)) {
      renderer = id
      id = 'form-drawer'
    }
    var env = {
      host: document.createElement('div'),
      form: null,
      promise: null,
      openMiddlewares: [],
    }
    var root = createPortalRoot(env.host, id)
    var props = getDrawerProps(title)
    var drawer = __assign$2(__assign$2({ width: '40%' }, props), {
      onClose: function (reason, e) {
        var _a
        if (
          ((_a =
            props === null || props === void 0 ? void 0 : props.onClose) ===
            null || _a === void 0
            ? void 0
            : _a.call(props, reason, e)) !== false
        ) {
          formDrawer.close()
        }
      },
      afterClose: function () {
        var _a
        ;(_a =
          props === null || props === void 0 ? void 0 : props.afterClose) ===
          null || _a === void 0
          ? void 0
          : _a.call(props)
        root.unmount()
      },
    })
    var DrawerContent = Formily.React.observer(function () {
      return React.createElement(
        React.Fragment,
        null,
        Formily.Shared.isFn(renderer) ? renderer(env.form) : renderer
      )
    })
    var renderDrawer = function (visible) {
      if (visible === void 0) {
        visible = true
      }
      return React.createElement(
        Next.ConfigProvider,
        __assign$2({}, getContext()),
        React.createElement(Formily.React.Observer, null, function () {
          return React.createElement(
            Next.Drawer,
            __assign$2({}, drawer, { visible: visible }),
            React.createElement(
              Formily.React.FormProvider,
              { form: env.form },
              React.createElement(DrawerContent, null)
            )
          )
        })
      )
    }
    document.body.appendChild(env.host)
    var formDrawer = {
      forOpen: function (middleware) {
        if (Formily.Shared.isFn(middleware)) {
          env.openMiddlewares.push(middleware)
        }
        return formDrawer
      },
      open: function (props) {
        if (env.promise) return env.promise
        env.promise = new Promise(function (resolve, reject) {
          return __awaiter(_this, void 0, void 0, function () {
            var e_1
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  _a.trys.push([0, 2, , 3])
                  return [
                    4 /*yield*/,
                    loading(drawer.loadingText, function () {
                      return Formily.Shared.applyMiddleware(
                        props,
                        env.openMiddlewares
                      )
                    }),
                  ]
                case 1:
                  props = _a.sent()
                  env.form =
                    env.form ||
                    Formily.Core.createForm(
                      __assign$2(__assign$2({}, props), {
                        effects: function (form) {
                          var _a
                          Formily.Core.onFormSubmitSuccess(function () {
                            resolve(Formily.Reactive.toJS(form.values))
                            formDrawer.close()
                          })
                          ;(_a =
                            props === null || props === void 0
                              ? void 0
                              : props.effects) === null || _a === void 0
                            ? void 0
                            : _a.call(props, form)
                        },
                      })
                    )
                  return [3 /*break*/, 3]
                case 2:
                  e_1 = _a.sent()
                  reject(e_1)
                  return [3 /*break*/, 3]
                case 3:
                  root.render(function () {
                    return renderDrawer(false)
                  })
                  setTimeout(function () {
                    root.render(function () {
                      return renderDrawer(true)
                    })
                  }, 16)
                  return [2 /*return*/]
              }
            })
          })
        })
        return env.promise
      },
      close: function () {
        if (!env.host) return
        root.render(function () {
          return renderDrawer(false)
        })
      },
    }
    return formDrawer
  }
  var DrawerFooter = function (props) {
    var ref = React.useRef()
    var _a = __read$1(React.useState(), 2),
      footer = _a[0],
      setFooter = _a[1]
    var footerRef = React.useRef()
    var prefixCls = usePrefixCls('drawer')
    React.useLayoutEffect(function () {
      var _a
      var content =
        (_a = ref.current) === null || _a === void 0
          ? void 0
          : _a.closest('.'.concat(prefixCls))
      if (content) {
        if (!footerRef.current) {
          footerRef.current = content.querySelector(
            '.'.concat(prefixCls, '-footer')
          )
          var body = content.querySelector('.'.concat(prefixCls, '-body'))
          if (!footerRef.current && body) {
            footerRef.current = document.createElement('div')
            footerRef.current.classList.add(''.concat(prefixCls, '-footer'))
            footerRef.current.style.padding = '20px'
            footerRef.current.style.borderTop = '1px solid #eee'
            body.after(footerRef.current)
          }
        }
        setFooter(footerRef.current)
      }
    })
    footerRef.current = footer
    return React.createElement(
      'div',
      { ref: ref, style: { display: 'none' } },
      footer && ReactDOM.createPortal(props.children, footer)
    )
  }
  FormDrawer.Footer = DrawerFooter
  FormDrawer.Portal = createPortalProvider('form-drawer')

  var __assign$1 =
    (undefined && undefined.__assign) ||
    function () {
      __assign$1 =
        Object.assign ||
        function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i]
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
          }
          return t
        }
      return __assign$1.apply(this, arguments)
    }
  var isHTMLElement = function (node) {
    return node.nodeType === 1
  }
  var ChildListMutationObserver = /** @class */ (function () {
    function ChildListMutationObserver(callback) {
      var _this = this
      this.childList = []
      this.handler = function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(function (node) {
              if (isHTMLElement(node)) {
                _this.addObserver(node)
              }
            })
            mutation.removedNodes.forEach(function (node) {
              if (isHTMLElement(node)) {
                _this.removeObserver(node)
              }
            })
          }
        })
        _this.callback(mutations, _this.observer)
      }
      this.observe = function (element, init) {
        _this.init = init
        _this.observeChildList(element)
        _this.observer.observe(
          element,
          __assign$1(__assign$1({}, _this.init), {
            subtree: false,
            childList: true,
            characterData: false,
            characterDataOldValue: false,
            attributeOldValue: false,
          })
        )
      }
      this.disconnect = function () {
        _this.observer.disconnect()
      }
      this.callback = callback
      this.observer = new MutationObserver(this.handler)
    }
    ChildListMutationObserver.prototype.observeChildList = function (element) {
      var _this = this
      Array.from(element.children).forEach(function (node) {
        _this.addObserver(node)
      })
    }
    ChildListMutationObserver.prototype.addObserver = function (element) {
      var _this = this
      var child = this.childList.find(function (t) {
        return t.element === element
      })
      if (!child) {
        var childIndex_1 = this.childList.length
        var child_1 = {
          element: element,
          observer: new MutationObserver(this.callback),
          dispose: function () {
            if (child_1.observer) {
              child_1.observer.disconnect()
              delete child_1.observer
              _this.childList.splice(childIndex_1, 1)
            }
          },
        }
        child_1.observer.observe(
          child_1.element,
          __assign$1(__assign$1({}, this.init), {
            subtree: false,
            childList: false,
            characterData: false,
            characterDataOldValue: false,
            attributeOldValue: false,
          })
        )
        this.childList.push(child_1)
      }
    }
    ChildListMutationObserver.prototype.removeObserver = function (element) {
      var _a
      var child = this.childList.find(function (t) {
        return t.element === element
      })
      if (child) {
        ;(_a = child.dispose) === null || _a === void 0
          ? void 0
          : _a.call(child)
      }
    }
    return ChildListMutationObserver
  })()

  var __assign =
    (undefined && undefined.__assign) ||
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
  var __read =
    (undefined && undefined.__read) ||
    function (o, n) {
      var m = typeof Symbol === 'function' && o[Symbol.iterator]
      if (!m) return o
      var i = m.call(o),
        r,
        ar = [],
        e
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value)
      } catch (error) {
        e = { error: error }
      } finally {
        try {
          if (r && !r.done && (m = i['return'])) m.call(i)
        } finally {
          if (e) throw e.error
        }
      }
      return ar
    }
  var __spreadArray =
    (undefined && undefined.__spreadArray) ||
    function (to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i)
            ar[i] = from[i]
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from))
    }
  var SpanRegExp = /span\s*(\d+)/
  var isValid = function (value) {
    return value !== undefined && value !== null
  }
  var calcBreakpointIndex = function (breakpoints, width) {
    if (Array.isArray(breakpoints)) {
      for (var i = 0; i < breakpoints.length; i++) {
        if (width <= breakpoints[i]) {
          return i
        }
      }
    }
    return -1
  }
  var calcFactor = function (value, breakpointIndex) {
    var _a
    if (Array.isArray(value)) {
      if (breakpointIndex === -1) return value[0]
      return (_a = value[breakpointIndex]) !== null && _a !== void 0
        ? _a
        : value[value.length - 1]
    } else {
      return value
    }
  }
  var parseGridNode = function (elements) {
    return Array.from(elements).reduce(function (buf, element, index) {
      var _a
      var style = getComputedStyle(element)
      var visible = !(style.display === 'none')
      var origin = element.getAttribute('data-grid-span')
      var span =
        (_a = parseSpan(style.gridColumnStart)) !== null && _a !== void 0
          ? _a
          : 1
      var originSpan = Number(
        origin !== null && origin !== void 0 ? origin : span
      )
      var node = {
        index: index,
        span: span,
        visible: visible,
        originSpan: originSpan,
        element: element,
      }
      if (!origin) {
        element.setAttribute('data-grid-span', String(span))
      }
      return buf.concat(node)
    }, [])
  }
  var calcChildTotalColumns = function (nodes, shadow) {
    if (shadow === void 0) {
      shadow = false
    }
    return nodes.reduce(function (buf, node) {
      var _a
      if (!shadow) {
        if (!node.visible) return buf
      }
      if (node.originSpan === -1)
        return buf + ((_a = node.span) !== null && _a !== void 0 ? _a : 1)
      return buf + node.span
    }, 0)
  }
  var calcChildOriginTotalColumns = function (nodes, shadow) {
    if (shadow === void 0) {
      shadow = false
    }
    return nodes.reduce(function (buf, node) {
      var _a
      if (!shadow) {
        if (!node.visible) return buf
      }
      if (node.originSpan === -1)
        return buf + ((_a = node.span) !== null && _a !== void 0 ? _a : 1)
      return buf + node.originSpan
    }, 0)
  }
  var calcSatisfyColumns = function (
    width,
    maxColumns,
    minColumns,
    maxWidth,
    minWidth,
    gap
  ) {
    var results = []
    for (var columns = minColumns; columns <= maxColumns; columns++) {
      var innerWidth_1 = width - (columns - 1) * gap
      var columnWidth = innerWidth_1 / columns
      if (columnWidth >= minWidth && columnWidth <= maxWidth) {
        results.push(columns)
      } else if (columnWidth < minWidth) {
        results.push(Math.min(Math.floor(innerWidth_1 / minWidth), maxColumns))
      } else if (columnWidth > maxWidth) {
        results.push(Math.min(Math.floor(innerWidth_1 / maxWidth), maxColumns))
      }
    }
    return Math.max.apply(Math, __spreadArray([], __read(results), false))
  }
  var parseSpan = function (gridColumnStart) {
    var _a, _b
    return Number(
      (_b =
        (_a = String(gridColumnStart).match(SpanRegExp)) === null ||
        _a === void 0
          ? void 0
          : _a[1]) !== null && _b !== void 0
        ? _b
        : 1
    )
  }
  var factor = function (value, grid) {
    return isValid(value) ? calcFactor(value, grid.breakpoint) : value
  }
  var resolveChildren = function (grid) {
    var walked = 0,
      shadowWalked = 0,
      rowIndex = 0,
      shadowRowIndex = 0
    if (!grid.ready) return
    grid.children = grid.children.map(function (node) {
      var _a
      var columnIndex = walked % grid.columns
      var shadowColumnIndex = shadowWalked % grid.columns
      var remainColumns = grid.columns - columnIndex
      var originSpan = node.originSpan
      var targetSpan = originSpan > grid.columns ? grid.columns : originSpan
      var span = grid.options.strictAutoFit
        ? targetSpan
        : targetSpan > remainColumns
        ? remainColumns
        : targetSpan
      var gridColumn =
        originSpan === -1
          ? 'span '.concat(remainColumns, ' / -1')
          : 'span '.concat(span, ' / auto')
      if (node.element.style.gridColumn !== gridColumn) {
        node.element.style.gridColumn = gridColumn
      }
      if (node.visible) {
        walked += span
      }
      shadowWalked += span
      if (columnIndex === 0) {
        rowIndex++
      }
      if (shadowColumnIndex == 0) {
        shadowRowIndex++
      }
      node.shadowRow = shadowRowIndex
      node.shadowColumn = shadowColumnIndex + 1
      if (node.visible) {
        node.row = rowIndex
        node.column = columnIndex + 1
      }
      if (
        (_a = grid.options) === null || _a === void 0
          ? void 0
          : _a.shouldVisible
      ) {
        if (!grid.options.shouldVisible(node, grid)) {
          if (node.visible) {
            node.element.style.display = 'none'
          }
          node.visible = false
        } else {
          if (!node.visible) {
            node.element.style.display = ''
          }
          node.visible = true
        }
      }
      return node
    })
  }
  var nextTick = function (callback) {
    return Promise.resolve(0).then(callback)
  }
  var Grid = /** @class */ (function () {
    function Grid(options) {
      var _this = this
      this.width = 0
      this.height = 0
      this.children = []
      this.childTotalColumns = 0
      this.shadowChildTotalColumns = 0
      this.childOriginTotalColumns = 0
      this.shadowChildOriginTotalColumns = 0
      this.ready = false
      this.connect = function (container) {
        if (container) {
          _this.container = container
          var initialize = Formily.Reactive.batch.bound(function () {
            digest_1()
            _this.ready = true
          })
          var digest_1 = Formily.Reactive.batch.bound(function () {
            _this.children = parseGridNode(_this.container.children)
            _this.childTotalColumns = calcChildTotalColumns(_this.children)
            _this.shadowChildTotalColumns = calcChildTotalColumns(
              _this.children,
              true
            )
            _this.childOriginTotalColumns = calcChildOriginTotalColumns(
              _this.children
            )
            _this.shadowChildOriginTotalColumns = calcChildOriginTotalColumns(
              _this.children,
              true
            )
            var rect = _this.container.getBoundingClientRect()
            if (rect.width && rect.height) {
              _this.width = rect.width
              _this.height = rect.height
            }
            resolveChildren(_this)
            nextTick(function () {
              var _a, _b
              ;(_b =
                (_a = _this.options) === null || _a === void 0
                  ? void 0
                  : _a.onDigest) === null || _b === void 0
                ? void 0
                : _b.call(_a, _this)
            })
            if (!_this.ready) {
              nextTick(function () {
                var _a, _b
                ;(_b =
                  (_a = _this.options) === null || _a === void 0
                    ? void 0
                    : _a.onInitialized) === null || _b === void 0
                  ? void 0
                  : _b.call(_a, _this)
              })
            }
          })
          var mutationObserver_1 = new ChildListMutationObserver(digest_1)
          var resizeObserver_1 = new ResizeObserver(digest_1)
          var dispose_1 = Formily.Reactive.reaction(function () {
            return __assign({}, _this.options)
          }, digest_1)
          resizeObserver_1.observe(_this.container)
          mutationObserver_1.observe(_this.container, {
            attributeFilter: ['style', 'class', 'data-grid-span'],
            attributes: true,
          })
          initialize()
          return function () {
            resizeObserver_1.unobserve(_this.container)
            resizeObserver_1.disconnect()
            mutationObserver_1.disconnect()
            dispose_1()
            _this.children = []
          }
        }
        return function () {}
      }
      this.options = __assign(
        {
          breakpoints: [720, 1280, 1920],
          columnGap: 8,
          rowGap: 4,
          minWidth: 100,
          colWrap: true,
          strictAutoFit: false,
        },
        options
      )
      Formily.Reactive.define(this, {
        options: Formily.Reactive.observable.shallow,
        width: Formily.Reactive.observable.ref,
        height: Formily.Reactive.observable.ref,
        ready: Formily.Reactive.observable.ref,
        children: Formily.Reactive.observable.ref,
        childOriginTotalColumns: Formily.Reactive.observable.ref,
        shadowChildOriginTotalColumns: Formily.Reactive.observable.ref,
        shadowChildTotalColumns: Formily.Reactive.observable.ref,
        childTotalColumns: Formily.Reactive.observable.ref,
        columns: Formily.Reactive.observable.computed,
        templateColumns: Formily.Reactive.observable.computed,
        gap: Formily.Reactive.observable.computed,
        maxColumns: Formily.Reactive.observable.computed,
        minColumns: Formily.Reactive.observable.computed,
        maxWidth: Formily.Reactive.observable.computed,
        minWidth: Formily.Reactive.observable.computed,
        breakpoints: Formily.Reactive.observable.computed,
        breakpoint: Formily.Reactive.observable.computed,
        rowGap: Formily.Reactive.observable.computed,
        columnGap: Formily.Reactive.observable.computed,
        colWrap: Formily.Reactive.observable.computed,
      })
    }
    Object.defineProperty(Grid.prototype, 'breakpoints', {
      get: function () {
        return this.options.breakpoints
      },
      set: function (breakpoints) {
        this.options.breakpoints = breakpoints
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'breakpoint', {
      get: function () {
        return calcBreakpointIndex(this.options.breakpoints, this.width)
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'maxWidth', {
      get: function () {
        var _a
        return (_a = factor(this.options.maxWidth, this)) !== null &&
          _a !== void 0
          ? _a
          : Infinity
      },
      set: function (maxWidth) {
        this.options.maxWidth = maxWidth
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'minWidth', {
      get: function () {
        var _a
        return (_a = factor(this.options.minWidth, this)) !== null &&
          _a !== void 0
          ? _a
          : 100
      },
      set: function (minWidth) {
        this.options.minWidth = minWidth
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'maxColumns', {
      get: function () {
        var _a
        return (_a = factor(this.options.maxColumns, this)) !== null &&
          _a !== void 0
          ? _a
          : Infinity
      },
      set: function (maxColumns) {
        this.options.maxColumns = maxColumns
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'maxRows', {
      get: function () {
        var _a
        return (_a = this.options.maxRows) !== null && _a !== void 0
          ? _a
          : Infinity
      },
      set: function (maxRows) {
        this.options.maxRows = maxRows
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'minColumns', {
      get: function () {
        var _a
        return (_a = factor(this.options.minColumns, this)) !== null &&
          _a !== void 0
          ? _a
          : 1
      },
      set: function (minColumns) {
        this.options.minColumns = minColumns
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'rowGap', {
      get: function () {
        var _a
        return (_a = factor(this.options.rowGap, this)) !== null &&
          _a !== void 0
          ? _a
          : 5
      },
      set: function (rowGap) {
        this.options.rowGap = rowGap
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'columnGap', {
      get: function () {
        var _a
        return (_a = factor(this.options.columnGap, this)) !== null &&
          _a !== void 0
          ? _a
          : 10
      },
      set: function (columnGap) {
        this.options.columnGap = columnGap
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'colWrap', {
      get: function () {
        var _a
        return (_a = factor(this.options.colWrap, this)) !== null &&
          _a !== void 0
          ? _a
          : true
      },
      set: function (colWrap) {
        this.options.colWrap = colWrap
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'columns', {
      get: function () {
        if (!this.ready) return 0
        var originTotalColumns = this.childOriginTotalColumns
        if (this.colWrap === false) {
          return originTotalColumns
        }
        var baseColumns = this.childSize
        var maxWidthColumns = Math.min(
          originTotalColumns,
          Math.round(this.width / (this.maxWidth + this.columnGap))
        )
        var minWidthColumns = Math.min(
          originTotalColumns,
          Math.round(this.width / (this.minWidth + this.columnGap))
        )
        var minCalculatedColumns = Math.min(
          baseColumns,
          maxWidthColumns,
          minWidthColumns
        )
        var maxCalculatedColumns = Math.max(
          baseColumns,
          maxWidthColumns,
          minWidthColumns
        )
        var finalColumns = calcSatisfyColumns(
          this.width,
          maxCalculatedColumns,
          minCalculatedColumns,
          this.maxWidth,
          this.minWidth,
          this.columnGap
        )
        if (finalColumns >= this.maxColumns) {
          return this.maxColumns
        }
        if (finalColumns <= this.minColumns) {
          return this.minColumns
        }
        return finalColumns
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'rows', {
      get: function () {
        return Math.ceil(this.childTotalColumns / this.columns)
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'shadowRows', {
      get: function () {
        return Math.ceil(this.shadowChildTotalColumns / this.columns)
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'templateColumns', {
      get: function () {
        if (!this.width) return ''
        if (this.maxWidth === Infinity) {
          return 'repeat('.concat(this.columns, ',1fr)')
        }
        if (this.options.strictAutoFit !== true) {
          var columnWidth =
            (this.width - (this.columns - 1) * this.columnGap) / this.columns
          if (columnWidth < this.minWidth || columnWidth > this.maxWidth) {
            return 'repeat('.concat(this.columns, ',1fr)')
          }
        }
        return 'repeat('
          .concat(this.columns, ',minmax(')
          .concat(this.minWidth, 'px,')
          .concat(this.maxWidth, 'px))')
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'gap', {
      get: function () {
        return ''.concat(this.rowGap, 'px ').concat(this.columnGap, 'px')
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'childSize', {
      get: function () {
        return this.children.length
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'fullnessLastColumn', {
      get: function () {
        var _a
        return (
          this.columns ===
          ((_a = this.children[this.childSize - 1]) === null || _a === void 0
            ? void 0
            : _a.span)
        )
      },
      enumerable: false,
      configurable: true,
    })
    Grid.id = function (options) {
      if (options === void 0) {
        options = {}
      }
      return JSON.stringify(
        [
          'maxRows',
          'maxColumns',
          'minColumns',
          'maxWidth',
          'minWidth',
          'breakpoints',
          'columnGap',
          'rowGap',
          'colWrap',
          'strictAutoFit',
        ].map(function (key) {
          return options[key]
        })
      )
    }
    return Grid
  })()

  var FormGridContext = React.createContext(null)
  var createFormGrid = function (props) {
    return Formily.Reactive.markRaw(new Grid(props))
  }
  var useFormGrid = function () {
    return React.useContext(FormGridContext)
  }
  /**
   * @deprecated
   */
  var useGridSpan = function (gridSpan) {
    if (gridSpan === void 0) {
      gridSpan = 1
    }
    return gridSpan
  }
  /**
   * @deprecated
   */
  var useGridColumn = function (gridSpan) {
    if (gridSpan === void 0) {
      gridSpan = 1
    }
    return gridSpan
  }
  var FormGrid = Formily.React.observer(
    function (_a) {
      var _b, _c
      var children = _a.children,
        className = _a.className,
        style = _a.style,
        props = __rest(_a, ['children', 'className', 'style'])
      var layout = useFormLayout()
      var options = __assign$2(
        {
          columnGap:
            (_b =
              layout === null || layout === void 0
                ? void 0
                : layout.gridColumnGap) !== null && _b !== void 0
              ? _b
              : 8,
          rowGap:
            (_c =
              layout === null || layout === void 0
                ? void 0
                : layout.gridRowGap) !== null && _c !== void 0
              ? _c
              : 4,
        },
        props
      )
      var grid = React.useMemo(
        function () {
          return Formily.Reactive.markRaw(
            (options === null || options === void 0 ? void 0 : options.grid)
              ? options.grid
              : new Grid(options)
          )
        },
        [Grid.id(options)]
      )
      var ref = React.useRef()
      var prefixCls = usePrefixCls('formily-grid', props)
      var dataProps = pickDataProps(props)
      React.useLayoutEffect(
        function () {
          return grid.connect(ref.current)
        },
        [grid]
      )
      return React.createElement(
        FormGridContext.Provider,
        { value: grid },
        React.createElement(
          'div',
          __assign$2({}, dataProps, {
            className: classnames(''.concat(prefixCls, '-layout'), className),
            style: __assign$2(__assign$2({}, style), {
              gridTemplateColumns: grid.templateColumns,
              gap: grid.gap,
            }),
            ref: ref,
          }),
          children
        )
      )
    },
    {
      forwardRef: true,
    }
  )
  var GridColumn = Formily.React.observer(function (_a) {
    var gridSpan = _a.gridSpan,
      children = _a.children,
      props = __rest(_a, ['gridSpan', 'children'])
    return React.createElement(
      'div',
      __assign$2({}, props, { 'data-grid-span': gridSpan }),
      children
    )
  })
  GridColumn.defaultProps = {
    gridSpan: 1,
  }
  FormGrid.createFormGrid = createFormGrid
  FormGrid.useFormGrid = useFormGrid
  FormGrid.useGridSpan = useGridSpan
  FormGrid.useGridColumn = useGridColumn
  FormGrid.GridColumn = GridColumn

  var useFormItemLayout = function (props) {
    var _a,
      _b,
      _c,
      _d,
      _e,
      _f,
      _g,
      _h,
      _j,
      _k,
      _l,
      _m,
      _o,
      _p,
      _q,
      _r,
      _s,
      _t,
      _u,
      _v,
      _w,
      _x,
      _y,
      _z
    var layout = useFormLayout()
    return __assign$2(__assign$2({}, props), {
      layout:
        (_b =
          (_a = props.layout) !== null && _a !== void 0
            ? _a
            : layout.layout) !== null && _b !== void 0
          ? _b
          : 'horizontal',
      colon: (_c = props.colon) !== null && _c !== void 0 ? _c : layout.colon,
      labelAlign:
        layout.layout === 'vertical'
          ? (_e =
              (_d = props.labelAlign) !== null && _d !== void 0
                ? _d
                : layout.labelAlign) !== null && _e !== void 0
            ? _e
            : 'left'
          : (_g =
              (_f = props.labelAlign) !== null && _f !== void 0
                ? _f
                : layout.labelAlign) !== null && _g !== void 0
          ? _g
          : 'right',
      labelWrap:
        (_h = props.labelWrap) !== null && _h !== void 0
          ? _h
          : layout.labelWrap,
      labelWidth:
        (_j = props.labelWidth) !== null && _j !== void 0
          ? _j
          : layout.labelWidth,
      wrapperWidth:
        (_k = props.wrapperWidth) !== null && _k !== void 0
          ? _k
          : layout.wrapperWidth,
      labelCol:
        (_l = props.labelCol) !== null && _l !== void 0 ? _l : layout.labelCol,
      wrapperCol:
        (_m = props.wrapperCol) !== null && _m !== void 0
          ? _m
          : layout.wrapperCol,
      wrapperAlign:
        (_o = props.wrapperAlign) !== null && _o !== void 0
          ? _o
          : layout.wrapperAlign,
      wrapperWrap:
        (_p = props.wrapperWrap) !== null && _p !== void 0
          ? _p
          : layout.wrapperWrap,
      fullness:
        (_q = props.fullness) !== null && _q !== void 0 ? _q : layout.fullness,
      size: (_r = props.size) !== null && _r !== void 0 ? _r : layout.size,
      inset: (_s = props.inset) !== null && _s !== void 0 ? _s : layout.inset,
      asterisk: props.asterisk,
      bordered:
        (_t = props.bordered) !== null && _t !== void 0 ? _t : layout.bordered,
      feedbackIcon: props.feedbackIcon,
      feedbackLayout:
        (_v =
          (_u = props.feedbackLayout) !== null && _u !== void 0
            ? _u
            : layout.feedbackLayout) !== null && _v !== void 0
          ? _v
          : 'loose',
      tooltipLayout:
        (_x =
          (_w = props.tooltipLayout) !== null && _w !== void 0
            ? _w
            : layout.tooltipLayout) !== null && _x !== void 0
          ? _x
          : 'icon',
      tooltipIcon:
        (_z =
          (_y = props.tooltipIcon) !== null && _y !== void 0
            ? _y
            : layout.tooltipIcon) !== null && _z !== void 0
          ? _z
          : React.createElement(QuestionCircleOutlinedIcon, null),
    })
  }
  function useOverflow() {
    var _a = __read$1(React.useState(false), 2),
      overflow = _a[0],
      setOverflow = _a[1]
    var containerRef = React.useRef()
    var contentRef = React.useRef()
    React.useEffect(function () {
      if (containerRef.current && contentRef.current) {
        var contentWidth = contentRef.current.getBoundingClientRect().width
        var containerWidth = containerRef.current.getBoundingClientRect().width
        if (contentWidth && containerWidth && containerWidth < contentWidth) {
          if (!overflow) setOverflow(true)
        } else {
          if (overflow) setOverflow(false)
        }
      }
    }, [])
    return {
      overflow: overflow,
      containerRef: containerRef,
      contentRef: contentRef,
    }
  }
  var ICON_MAP = {
    error: React.createElement(CloseCircleOutlinedIcon, null),
    success: React.createElement(CheckCircleOutlinedIcon, null),
    warning: React.createElement(ExclamationCircleOutlinedIcon, null),
  }
  var BaseItem = function (props) {
    var _a, _b, _c, _d, _e
    var children = props.children,
      others = __rest(props, ['children'])
    var _f = __read$1(React.useState(false), 2),
      active = _f[0],
      setActive = _f[1]
    var formLayout = useFormItemLayout(others)
    var _g = useOverflow(),
      containerRef = _g.containerRef,
      contentRef = _g.contentRef,
      overflow = _g.overflow
    var label = formLayout.label,
      style = formLayout.style,
      layout = formLayout.layout,
      _h = formLayout.colon,
      colon = _h === void 0 ? true : _h,
      addonBefore = formLayout.addonBefore,
      addonAfter = formLayout.addonAfter,
      asterisk = formLayout.asterisk,
      feedbackStatus = formLayout.feedbackStatus,
      extra = formLayout.extra,
      feedbackText = formLayout.feedbackText,
      fullness = formLayout.fullness,
      feedbackLayout = formLayout.feedbackLayout,
      feedbackIcon = formLayout.feedbackIcon,
      inset = formLayout.inset,
      _j = formLayout.bordered,
      bordered = _j === void 0 ? true : _j,
      labelWidth = formLayout.labelWidth,
      wrapperWidth = formLayout.wrapperWidth,
      labelCol = formLayout.labelCol,
      wrapperCol = formLayout.wrapperCol,
      labelAlign = formLayout.labelAlign,
      _k = formLayout.wrapperAlign,
      wrapperAlign = _k === void 0 ? 'left' : _k,
      size = formLayout.size,
      labelWrap = formLayout.labelWrap,
      wrapperWrap = formLayout.wrapperWrap,
      tooltip = formLayout.tooltip,
      tooltipLayout = formLayout.tooltipLayout,
      tooltipIcon = formLayout.tooltipIcon
    var labelStyle = __assign$2({}, formLayout.labelStyle)
    var wrapperStyle = __assign$2({}, formLayout.wrapperStyle)
    // 固定宽度
    var enableCol = false
    if (labelWidth || wrapperWidth) {
      if (labelWidth) {
        labelStyle.width = labelWidth === 'auto' ? undefined : labelWidth
        labelStyle.maxWidth = labelWidth === 'auto' ? undefined : labelWidth
      }
      if (wrapperWidth) {
        wrapperStyle.width = wrapperWidth === 'auto' ? undefined : wrapperWidth
        wrapperStyle.maxWidth =
          wrapperWidth === 'auto' ? undefined : wrapperWidth
      }
      // 栅格模式
    }
    if (labelCol || wrapperCol) {
      if (!labelStyle.width && !wrapperStyle.width) {
        enableCol = true
      }
    }
    var prefixCls = usePrefixCls('formily-item', props)
    var prefix = usePrefixCls()
    var formatChildren =
      feedbackLayout === 'popover'
        ? React.createElement(
            Next.Balloon,
            {
              needAdjust: true,
              align: 't',
              closable: false,
              trigger: children,
              visible: !!feedbackText,
            },
            React.createElement(
              'div',
              {
                className: classnames(
                  ((_a = {}),
                  (_a[
                    ''.concat(prefixCls, '-').concat(feedbackStatus, '-help')
                  ] = !!feedbackStatus),
                  (_a[''.concat(prefixCls, '-help')] = true),
                  _a)
                ),
              },
              ICON_MAP[feedbackStatus],
              ' ',
              feedbackText
            )
          )
        : children
    var gridStyles = {}
    var getOverflowTooltip = function () {
      if (overflow) {
        return React.createElement(
          'div',
          null,
          React.createElement('div', null, label),
          React.createElement('div', null, tooltip)
        )
      }
      return tooltip
    }
    var renderLabelText = function () {
      var labelChildren = React.createElement(
        'div',
        {
          className: classnames(''.concat(prefixCls, '-label-content')),
          ref: containerRef,
        },
        asterisk &&
          React.createElement(
            'span',
            { className: classnames(''.concat(prefixCls, '-asterisk')) },
            '*'
          ),
        React.createElement('label', { ref: contentRef }, label)
      )
      if ((tooltipLayout === 'text' && tooltip) || overflow) {
        return React.createElement(
          Next.Balloon.Tooltip,
          { align: 't', trigger: labelChildren },
          getOverflowTooltip()
        )
      }
      return labelChildren
    }
    var renderTooltipIcon = function () {
      if (tooltip && tooltipLayout === 'icon' && !overflow) {
        return React.createElement(
          'span',
          {
            className: classnames(''.concat(prefixCls, '-label-tooltip-icon')),
          },
          React.createElement(
            Next.Balloon.Tooltip,
            { align: 't', trigger: tooltipIcon },
            tooltip
          )
        )
      }
    }
    var renderLabel = function () {
      var _a
      if (!label) return null
      return React.createElement(
        'div',
        {
          className: classnames(
            ((_a = {}),
            (_a[''.concat(prefixCls, '-label')] = true),
            (_a[''.concat(prefixCls, '-label-tooltip')] =
              (tooltip && tooltipLayout === 'text') || overflow),
            (_a[''.concat(prefixCls, '-item-col-').concat(labelCol)] =
              enableCol && !!labelCol),
            _a)
          ),
          style: labelStyle,
        },
        renderLabelText(),
        renderTooltipIcon(),
        label !== ' ' &&
          React.createElement(
            'span',
            { className: classnames(''.concat(prefixCls, '-colon')) },
            colon ? ':' : ''
          )
      )
    }
    return React.createElement(
      'div',
      __assign$2({}, pickDataProps(props), {
        style: __assign$2(__assign$2({}, style), gridStyles),
        'data-grid-span': props.gridSpan,
        className: classnames(
          ((_b = {}),
          (_b[''.concat(prefixCls)] = true),
          (_b[''.concat(prefixCls, '-layout-').concat(layout)] = true),
          (_b[''.concat(prefixCls, '-').concat(feedbackStatus)] =
            !!feedbackStatus),
          (_b[''.concat(prefixCls, '-feedback-has-text')] = !!feedbackText),
          (_b[''.concat(prefixCls, '-size-').concat(size)] = !!size),
          (_b[
            ''.concat(prefixCls, '-feedback-layout-').concat(feedbackLayout)
          ] = !!feedbackLayout),
          (_b[''.concat(prefixCls, '-fullness')] =
            !!fullness || !!inset || !!feedbackIcon),
          (_b[''.concat(prefixCls, '-inset')] = !!inset),
          (_b[''.concat(prefix, '-input')] = !!inset),
          (_b[''.concat(prefixCls, '-active')] = active),
          (_b[''.concat(prefix, '-focus')] = active),
          (_b[''.concat(prefixCls, '-inset-active')] = !!inset && active),
          (_b[''.concat(prefixCls, '-label-align-').concat(labelAlign)] = true),
          (_b[
            ''.concat(prefixCls, '-control-align-').concat(wrapperAlign)
          ] = true),
          (_b[''.concat(prefixCls, '-label-wrap')] = !!labelWrap),
          (_b[''.concat(prefixCls, '-control-wrap')] = !!wrapperWrap),
          (_b[''.concat(prefixCls, '-bordered-none')] = bordered === false),
          (_b[props.className] = !!props.className),
          _b)
        ),
        onFocus: function () {
          if (feedbackIcon || inset) {
            setActive(true)
          }
        },
        onBlur: function () {
          if (feedbackIcon || inset) {
            setActive(false)
          }
        },
      }),
      renderLabel(),
      React.createElement(
        'div',
        {
          className: classnames(
            ((_c = {}),
            (_c[''.concat(prefixCls, '-control')] = true),
            (_c[''.concat(prefixCls, '-item-col-').concat(wrapperCol)] =
              enableCol && !!wrapperCol && label),
            _c)
          ),
        },
        React.createElement(
          'div',
          { className: classnames(''.concat(prefixCls, '-control-content')) },
          addonBefore &&
            React.createElement(
              'div',
              { className: classnames(''.concat(prefixCls, '-addon-before')) },
              addonBefore
            ),
          React.createElement(
            'div',
            {
              style: wrapperStyle,
              className: classnames(
                ((_d = {}),
                (_d[''.concat(prefixCls, '-control-content-component')] = true),
                (_d[
                  ''.concat(
                    prefixCls,
                    '-control-content-component-has-feedback-icon'
                  )
                ] = !!feedbackIcon),
                (_d[''.concat(prefix, '-input')] = !!feedbackIcon),
                (_d[''.concat(prefixCls, '-active')] = active),
                (_d[''.concat(prefix, '-focus')] = active),
                _d)
              ),
            },
            React.createElement(
              FormLayoutShallowContext.Provider,
              { value: { size: size } },
              formatChildren
            ),
            feedbackIcon &&
              React.createElement(
                'div',
                {
                  className: classnames(''.concat(prefixCls, '-feedback-icon')),
                },
                feedbackIcon
              )
          ),
          addonAfter &&
            React.createElement(
              'div',
              { className: classnames(''.concat(prefixCls, '-addon-after')) },
              addonAfter
            )
        ),
        !!feedbackText &&
          feedbackLayout !== 'popover' &&
          feedbackLayout !== 'none' &&
          React.createElement(
            'div',
            {
              className: classnames(
                ((_e = {}),
                (_e[''.concat(prefixCls, '-').concat(feedbackStatus, '-help')] =
                  !!feedbackStatus),
                (_e[''.concat(prefixCls, '-help')] = true),
                (_e[''.concat(prefixCls, '-help-enter')] = true),
                (_e[''.concat(prefixCls, '-help-enter-active')] = true),
                _e)
              ),
            },
            feedbackText
          ),
        extra &&
          React.createElement(
            'div',
            { className: classnames(''.concat(prefixCls, '-extra')) },
            extra
          )
      )
    )
  }
  // 适配
  var FormItem = Formily.React.connect(
    BaseItem,
    Formily.React.mapProps(
      { validateStatus: true, title: 'label', required: true },
      function (props, field) {
        if (Formily.Core.isVoidField(field))
          return {
            extra: props.extra || field.description,
          }
        if (!field) return props
        var takeMessage = function () {
          var split = function (messages) {
            return messages.reduce(function (buf, text, index) {
              if (!text) return buf
              return index < messages.length - 1
                ? buf.concat([text, ', '])
                : buf.concat([text])
            }, [])
          }
          if (field.validating) return
          if (props.feedbackText) return props.feedbackText
          if (field.selfErrors.length) return split(field.selfErrors)
          if (field.selfWarnings.length) return split(field.selfWarnings)
          if (field.selfSuccesses.length) return split(field.selfSuccesses)
        }
        return {
          feedbackText: takeMessage(),
          extra: props.extra || field.description,
        }
      },
      function (props, field) {
        var _a
        if (Formily.Core.isVoidField(field)) return props
        if (!field) return props
        return {
          feedbackStatus:
            field.validateStatus === 'validating'
              ? 'pending'
              : ((_a = field.decorator[1]) === null || _a === void 0
                  ? void 0
                  : _a.feedbackStatus) || field.validateStatus,
        }
      },
      function (props, field) {
        if (Formily.Core.isVoidField(field)) return props
        if (!field) return props
        var asterisk = false
        if (field.required && field.pattern !== 'readPretty') {
          asterisk = true
        }
        if ('asterisk' in props) {
          asterisk = props.asterisk
        }
        return {
          asterisk: asterisk,
        }
      }
    )
  )
  FormItem.defaultProps = {
    fullness: true,
  }
  FormItem.BaseItem = BaseItem

  var PlaceholderContext = React.createContext('N/A')
  var Placeholder = PlaceholderContext.Provider
  var usePlaceholder = function (value) {
    var placeholder = React.useContext(PlaceholderContext) || 'N/A'
    return !Formily.Shared.isEmpty(value) ? value : placeholder
  }
  var Input$1 = function (props) {
    var prefixCls = usePrefixCls('form-text', props)
    return React.createElement(
      'div',
      { className: classnames(prefixCls, props.className) },
      props.addonBefore,
      props.innerBefore,
      usePlaceholder(props.value),
      props.innerAfter,
      props.addonAfter
    )
  }
  var Select$1 = Formily.React.observer(function (props) {
    var _a, _b
    var field = Formily.React.useField()
    var prefixCls = usePrefixCls('form-text', props)
    var dataSource = (
      (_a = field === null || field === void 0 ? void 0 : field.dataSource) ===
        null || _a === void 0
        ? void 0
        : _a.length
    )
      ? field.dataSource
      : (
          (_b =
            props === null || props === void 0 ? void 0 : props.dataSource) ===
            null || _b === void 0
            ? void 0
            : _b.length
        )
      ? props.dataSource
      : []
    var placeholder = usePlaceholder()
    var getSelected = function () {
      var value = props.value
      if (props.mode === 'multiple' || props.mode === 'tag') {
        if (props.useDetailValue) {
          return Formily.Shared.isArr(value) ? value : []
        } else {
          return Formily.Shared.isArr(value)
            ? value.map(function (val) {
                return { label: val, value: val }
              })
            : []
        }
      } else {
        if (props.useDetailValue) {
          return Formily.Shared.isValid(value) ? [value] : []
        } else {
          return Formily.Shared.isValid(value)
            ? [{ label: value, value: value }]
            : []
        }
      }
    }
    var getLabel = function (target) {
      var _a
      return (
        ((_a =
          dataSource === null || dataSource === void 0
            ? void 0
            : dataSource.find(function (item) {
                return (
                  item.value ==
                  (target === null || target === void 0 ? void 0 : target.value)
                )
              })) === null || _a === void 0
          ? void 0
          : _a.label) ||
        target.label ||
        placeholder
      )
    }
    var getLabels = function () {
      var selected = getSelected()
      if (!selected.length) return placeholder
      if (selected.length === 1) return getLabel(selected[0])
      return selected.map(function (item, key) {
        return React.createElement(
          Next.Tag,
          { type: 'primary', size: 'small', key: key },
          getLabel(item)
        )
      })
    }
    return React.createElement(
      'div',
      { className: classnames(prefixCls, props.className) },
      getLabels()
    )
  })
  var TreeSelect$1 = Formily.React.observer(function (props) {
    var _a, _b
    var field = Formily.React.useField()
    var placeholder = usePlaceholder()
    var prefixCls = usePrefixCls('form-text', props)
    var dataSource = (
      (_a = field === null || field === void 0 ? void 0 : field.dataSource) ===
        null || _a === void 0
        ? void 0
        : _a.length
    )
      ? field.dataSource
      : (
          (_b =
            props === null || props === void 0 ? void 0 : props.dataSource) ===
            null || _b === void 0
            ? void 0
            : _b.length
        )
      ? props.dataSource
      : []
    var getSelected = function () {
      var value = props.value
      if (props.multiple) {
        if (props['useDetailValue']) {
          return Formily.Shared.isArr(value) ? value : []
        } else {
          return Formily.Shared.isArr(value)
            ? value.map(function (val) {
                return { label: val, value: val }
              })
            : []
        }
      } else {
        if (props['useDetailValue']) {
          return value ? [value] : []
        } else {
          return value ? [{ label: value, value: value }] : []
        }
      }
    }
    var findLabel = function (value, dataSource) {
      for (
        var i = 0;
        i <
        (dataSource === null || dataSource === void 0
          ? void 0
          : dataSource.length);
        i++
      ) {
        var item = dataSource[i]
        if (
          (item === null || item === void 0 ? void 0 : item.value) === value
        ) {
          return item === null || item === void 0 ? void 0 : item.label
        } else {
          var childLabel = findLabel(
            value,
            item === null || item === void 0 ? void 0 : item.children
          )
          if (childLabel) return childLabel
        }
      }
    }
    var getLabels = function () {
      var selected = getSelected()
      if (
        !(selected === null || selected === void 0 ? void 0 : selected.length)
      )
        return React.createElement(
          Next.Tag,
          { type: 'primary', size: 'small' },
          placeholder
        )
      return selected.map(function (_a, key) {
        var value = _a.value,
          label = _a.label
        return React.createElement(
          Next.Tag,
          { type: 'primary', size: 'small', key: key },
          findLabel(value, dataSource) || label || placeholder
        )
      })
    }
    return React.createElement(
      'div',
      { className: classnames(prefixCls, props.className) },
      getLabels()
    )
  })
  var Cascader$1 = Formily.React.observer(function (props) {
    var _a, _b
    var field = Formily.React.useField()
    var placeholder = usePlaceholder()
    var prefixCls = usePrefixCls('form-text', props)
    var dataSource = (
      (_a = field === null || field === void 0 ? void 0 : field.dataSource) ===
        null || _a === void 0
        ? void 0
        : _a.length
    )
      ? field.dataSource
      : (
          (_b =
            props === null || props === void 0 ? void 0 : props.dataSource) ===
            null || _b === void 0
            ? void 0
            : _b.length
        )
      ? props.dataSource
      : []
    var getSelected = function () {
      return Formily.Shared.isArr(props.value) ? props.value : []
    }
    var getLabels = function () {
      var selected = getSelected()
      return selected
        .map(function (value) {
          var _a
          return (
            ((_a =
              dataSource === null || dataSource === void 0
                ? void 0
                : dataSource.find(function (item) {
                    return item.value == value
                  })) === null || _a === void 0
              ? void 0
              : _a.label) || placeholder
          )
        })
        .join('/')
    }
    return React.createElement(
      'div',
      { className: classnames(prefixCls, props.className) },
      getLabels()
    )
  })
  var DatePicker$1 = function (props) {
    var placeholder = usePlaceholder()
    var prefixCls = usePrefixCls('form-text', props)
    var getLabels = function () {
      var labels = formatMomentValue(props.value, props.format, placeholder)
      return Formily.Shared.isArr(labels) ? labels.join('~') : labels
    }
    return React.createElement(
      'div',
      { className: classnames(prefixCls, props.className) },
      getLabels()
    )
  }
  var DateRangePicker = function (props) {
    var placeholder = usePlaceholder()
    var prefixCls = usePrefixCls('form-text', props)
    var getLabels = function () {
      var labels = formatMomentValue(props.value, props.format, placeholder)
      return Formily.Shared.isArr(labels) ? labels.join('~') : labels
    }
    return React.createElement(
      'div',
      { className: classnames(prefixCls, props.className) },
      getLabels()
    )
  }
  var TimePicker$1 = function (props) {
    var placeholder = usePlaceholder()
    var prefixCls = usePrefixCls('form-text', props)
    var getLabels = function () {
      var labels = formatMomentValue(props.value, props.format, placeholder)
      return Formily.Shared.isArr(labels) ? labels.join('~') : labels
    }
    return React.createElement(
      'div',
      { className: classnames(prefixCls, props.className) },
      getLabels()
    )
  }
  var Text = function (props) {
    var prefixCls = usePrefixCls('form-text', props)
    return React.createElement(
      'div',
      { className: classnames(prefixCls, props.className), style: props.style },
      usePlaceholder(props.value)
    )
  }
  Text.Input = Input$1
  Text.Select = Select$1
  Text.TreeSelect = TreeSelect$1
  Text.Cascader = Cascader$1
  Text.DatePicker = DatePicker$1
  Text.DateRangePicker = DateRangePicker
  Text.TimePicker = TimePicker$1
  Text.Placeholder = Placeholder
  Text.usePlaceholder = usePlaceholder
  var PreviewText = Text

  var Form = function (_a) {
    var _b, _c, _d
    var form = _a.form,
      component = _a.component,
      onAutoSubmit = _a.onAutoSubmit,
      onAutoSubmitFailed = _a.onAutoSubmitFailed,
      previewTextPlaceholder = _a.previewTextPlaceholder,
      props = __rest(_a, [
        'form',
        'component',
        'onAutoSubmit',
        'onAutoSubmitFailed',
        'previewTextPlaceholder',
      ])
    var top = Formily.React.useForm()
    var lang =
      (_d =
        (_c =
          (_b = Next.ConfigProvider.getContext()) === null || _b === void 0
            ? void 0
            : _b.locale) === null || _c === void 0
          ? void 0
          : _c.momentLocale) !== null && _d !== void 0
        ? _d
        : 'zh-CN'
    React.useMemo(
      function () {
        var validateLanguage = Formily.Core.getValidateLocaleIOSCode(lang)
        Formily.Core.setValidateLanguage(validateLanguage)
      },
      [lang]
    )
    var renderContent = function (form) {
      return React.createElement(
        PreviewText.Placeholder,
        { value: previewTextPlaceholder },
        React.createElement(
          FormLayout,
          __assign$2({}, props),
          React.createElement(
            component,
            {
              onSubmit: function (e) {
                var _a, _b
                ;(_a =
                  e === null || e === void 0 ? void 0 : e.stopPropagation) ===
                  null || _a === void 0
                  ? void 0
                  : _a.call(e)
                ;(_b =
                  e === null || e === void 0 ? void 0 : e.preventDefault) ===
                  null || _b === void 0
                  ? void 0
                  : _b.call(e)
                form.submit(onAutoSubmit).catch(onAutoSubmitFailed)
              },
            },
            props.children
          )
        )
      )
    }
    if (form)
      return React.createElement(
        Formily.React.FormProvider,
        { form: form },
        renderContent(form)
      )
    if (!top) throw new Error('must pass form instance by createForm')
    return renderContent(top)
  }
  Form.defaultProps = {
    component: 'form',
  }

  var parseSteps = function (schema) {
    var steps = []
    schema.mapProperties(function (schema, name) {
      var _a
      if (
        ((_a = schema['x-component']) === null || _a === void 0
          ? void 0
          : _a.indexOf('StepPane')) > -1
      ) {
        steps.push({
          name: name,
          props: schema['x-component-props'],
          schema: schema,
        })
      }
    })
    return steps
  }
  var createFormStep = function (defaultCurrent) {
    if (defaultCurrent === void 0) {
      defaultCurrent = 0
    }
    var env = {
      form: null,
      field: null,
      steps: [],
    }
    var setDisplay = Formily.Reactive.action.bound(function (target) {
      var currentStep = env.steps[target]
      env.steps.forEach(function (_a) {
        var name = _a.name
        env.form
          .query(''.concat(env.field.address, '.').concat(name))
          .take(function (field) {
            if (name === currentStep.name) {
              field.setDisplay('visible')
            } else {
              field.setDisplay('hidden')
            }
          })
      })
    })
    var next = function () {
      if (formStep.allowNext) {
        setDisplay(formStep.current + 1)
        formStep.setCurrent(formStep.current + 1)
      }
    }
    var back = function () {
      if (formStep.allowBack) {
        setDisplay(formStep.current - 1)
        formStep.setCurrent(formStep.current - 1)
      }
    }
    var formStep = Formily.Reactive.model({
      connect: function (steps, field) {
        env.steps = steps
        env.form = field === null || field === void 0 ? void 0 : field.form
        env.field = field
      },
      current: defaultCurrent,
      setCurrent: function (key) {
        formStep.current = key
      },
      get allowNext() {
        return formStep.current < env.steps.length - 1
      },
      get allowBack() {
        return formStep.current > 0
      },
      next: function () {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_b) {
            switch (_b.label) {
              case 0:
                _b.trys.push([0, 2, , 3])
                return [4 /*yield*/, env.form.validate()]
              case 1:
                _b.sent()
                next()
                return [3 /*break*/, 3]
              case 2:
                _b.sent()
                return [3 /*break*/, 3]
              case 3:
                return [2 /*return*/]
            }
          })
        })
      },
      back: function () {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            back()
            return [2 /*return*/]
          })
        })
      },
      submit: function (onSubmit) {
        var _a, _b
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_c) {
            return [
              2 /*return*/,
              (_b =
                (_a = env.form) === null || _a === void 0
                  ? void 0
                  : _a.submit) === null || _b === void 0
                ? void 0
                : _b.call(_a, onSubmit),
            ]
          })
        })
      },
    })
    return Formily.Reactive.markRaw(formStep)
  }
  var FormStep = Formily.React.connect(
    Formily.React.observer(function (_a) {
      var _b
      var formStep = _a.formStep,
        className = _a.className,
        props = __rest(_a, ['formStep', 'className'])
      var field = Formily.React.useField()
      var prefixCls = usePrefixCls('formily-step', props)
      var schema = Formily.React.useFieldSchema()
      var steps = parseSteps(schema)
      var current =
        props.current ||
        (formStep === null || formStep === void 0
          ? void 0
          : formStep.current) ||
        0
      ;(_b =
        formStep === null || formStep === void 0
          ? void 0
          : formStep.connect) === null || _b === void 0
        ? void 0
        : _b.call(formStep, steps, field)
      return React.createElement(
        'div',
        { className: classnames(prefixCls, className) },
        React.createElement(
          Next.Step,
          __assign$2({}, props, {
            style: __assign$2({ marginBottom: 10 }, props.style),
            current: current,
          }),
          steps.map(function (_a, key) {
            var props = _a.props
            return React.createElement(
              Next.Step.Item,
              __assign$2({}, props, { key: key })
            )
          })
        ),
        steps.map(function (_a, key) {
          var name = _a.name,
            schema = _a.schema
          if (key !== current) return
          return React.createElement(Formily.React.RecursionField, {
            key: key,
            name: name,
            schema: schema,
          })
        })
      )
    })
  )
  var StepPane = function (_a) {
    var children = _a.children
    return React.createElement(React.Fragment, null, children)
  }
  FormStep.StepPane = StepPane
  FormStep.createFormStep = createFormStep

  var useTabs = function () {
    var tabsField = Formily.React.useField()
    var schema = Formily.React.useFieldSchema()
    var tabs = []
    schema.mapProperties(function (schema, name) {
      var _a, _b
      var field = tabsField.query(tabsField.address.concat(name)).take()
      if (
        (field === null || field === void 0 ? void 0 : field.display) ===
          'none' ||
        (field === null || field === void 0 ? void 0 : field.display) ===
          'hidden'
      )
        return
      if (
        ((_a = schema['x-component']) === null || _a === void 0
          ? void 0
          : _a.indexOf('TabPane')) > -1
      ) {
        tabs.push({
          name: name,
          props: __assign$2(
            {
              key:
                ((_b =
                  schema === null || schema === void 0
                    ? void 0
                    : schema['x-component-props']) === null || _b === void 0
                  ? void 0
                  : _b.key) || name,
            },
            schema === null || schema === void 0
              ? void 0
              : schema['x-component-props']
          ),
          schema: schema,
        })
      }
    })
    return tabs
  }
  var createFormTab = function (defaultActiveKey) {
    var formTab = Formily.Reactive.model({
      activeKey: defaultActiveKey,
      setActiveKey: function (key) {
        formTab.activeKey = key
      },
    })
    return Formily.Reactive.markRaw(formTab)
  }
  var FormTab = Formily.React.observer(function (_a) {
    var formTab = _a.formTab,
      props = __rest(_a, ['formTab'])
    var field = Formily.React.useField()
    var tabs = useTabs()
    var _formTab = React.useMemo(function () {
      return formTab ? formTab : createFormTab()
    }, [])
    var prefixCls = usePrefixCls('formily-tab', props)
    var activeKey =
      props.activeKey ||
      (_formTab === null || _formTab === void 0 ? void 0 : _formTab.activeKey)
    var badgedTab = function (key, props) {
      var errors = field.form.queryFeedbacks({
        type: 'error',
        address: ''.concat(field.address.concat(key), '.*'),
      })
      if (errors.length) {
        return React.createElement(
          Next.Badge,
          { className: 'errors-badge', count: errors.length },
          props.tab
        )
      }
      return props.tab
    }
    return React.createElement(
      Next.Tab,
      __assign$2(
        {},
        props,
        Formily.Shared.isValid(activeKey) && { activeKey: activeKey },
        {
          className: classnames(prefixCls, props.className),
          onChange: function (key) {
            var _a, _b
            ;(_a = props.onChange) === null || _a === void 0
              ? void 0
              : _a.call(props, key)
            ;(_b =
              formTab === null || formTab === void 0
                ? void 0
                : formTab.setActiveKey) === null || _b === void 0
              ? void 0
              : _b.call(formTab, key)
          },
          lazyLoad: false,
        }
      ),
      tabs.map(function (_a, key) {
        var props = _a.props,
          schema = _a.schema,
          name = _a.name
        return React.createElement(
          Next.Tab.Item,
          __assign$2({ key: key }, props, { tab: badgedTab(name, props) }),
          React.createElement(Formily.React.RecursionField, {
            schema: schema,
            name: name,
          })
        )
      })
    )
  })
  var TabPane = function (_a) {
    var children = _a.children
    return React.createElement(React.Fragment, null, children)
  }
  FormTab.TabPane = TabPane
  FormTab.createFormTab = createFormTab

  var usePanels = function () {
    var collapseField = Formily.React.useField()
    var schema = Formily.React.useFieldSchema()
    var panels = []
    schema.mapProperties(function (schema, name) {
      var _a, _b, _c
      var field = collapseField.query(collapseField.address.concat(name)).take()
      if (
        (field === null || field === void 0 ? void 0 : field.display) ===
          'none' ||
        (field === null || field === void 0 ? void 0 : field.display) ===
          'hidden'
      )
        return
      if (
        ((_a = schema['x-component']) === null || _a === void 0
          ? void 0
          : _a.indexOf('CollapsePanel')) > -1
      ) {
        panels.push({
          name: name,
          props: __assign$2(
            __assign$2(
              {},
              schema === null || schema === void 0
                ? void 0
                : schema['x-component-props']
            ),
            {
              title:
                ((_b =
                  schema === null || schema === void 0
                    ? void 0
                    : schema['x-component-props']) === null || _b === void 0
                  ? void 0
                  : _b.title) ||
                (schema === null || schema === void 0 ? void 0 : schema.title),
              key:
                ((_c =
                  schema === null || schema === void 0
                    ? void 0
                    : schema['x-component-props']) === null || _c === void 0
                  ? void 0
                  : _c.key) || name,
            }
          ),
          schema: schema,
        })
      }
    })
    return panels
  }
  var createFormCollapse = function (defaultActiveKeys) {
    var formCollapse = Formily.Reactive.model({
      activeKeys: defaultActiveKeys,
      setActiveKeys: function (keys) {
        formCollapse.activeKeys = keys
      },
      hasActiveKey: function (key) {
        if (Array.isArray(formCollapse.activeKeys)) {
          if (formCollapse.activeKeys.includes(key)) {
            return true
          }
        } else if (formCollapse.activeKeys == key) {
          return true
        }
        return false
      },
      addActiveKey: function (key) {
        if (formCollapse.hasActiveKey(key)) return
        formCollapse.activeKeys = Formily.Shared.toArr(
          formCollapse.activeKeys
        ).concat(key)
      },
      removeActiveKey: function (key) {
        if (Array.isArray(formCollapse.activeKeys)) {
          formCollapse.activeKeys = formCollapse.activeKeys.filter(function (
            item
          ) {
            return item != key
          })
        } else {
          formCollapse.activeKeys = []
        }
      },
      toggleActiveKey: function (key) {
        if (formCollapse.hasActiveKey(key)) {
          formCollapse.removeActiveKey(key)
        } else {
          formCollapse.addActiveKey(key)
        }
      },
    })
    return Formily.Reactive.markRaw(formCollapse)
  }
  var FormCollapse = Formily.React.observer(function (_a) {
    var formCollapse = _a.formCollapse,
      props = __rest(_a, ['formCollapse'])
    var field = Formily.React.useField()
    var panels = usePanels()
    var prefixCls = usePrefixCls('formily-collapse', props)
    var _formCollapse = React.useMemo(function () {
      return formCollapse ? formCollapse : createFormCollapse()
    }, [])
    var takeExpandedKeys = function () {
      var _a
      if (props.expandedKeys) return props.expandedKeys
      if (
        _formCollapse === null || _formCollapse === void 0
          ? void 0
          : _formCollapse.activeKeys
      )
        return _formCollapse === null || _formCollapse === void 0
          ? void 0
          : _formCollapse.activeKeys
      if (props.accordion)
        return (_a = panels[0]) === null || _a === void 0 ? void 0 : _a.name
      return panels.map(function (item) {
        return item.name
      })
    }
    var badgedHeader = function (key, props) {
      var errors = field.form.queryFeedbacks({
        type: 'error',
        address: ''.concat(field.address.concat(key), '.*'),
      })
      if (errors.length) {
        return React.createElement(
          Next.Badge,
          { className: 'errors-badge', count: errors.length },
          props.title
        )
      }
      return props.title
    }
    return React.createElement(
      Next.Collapse,
      __assign$2({}, props, {
        className: classnames(prefixCls, props.className),
        expandedKeys: takeExpandedKeys(),
        onExpand: function (keys) {
          var _a, _b
          ;(_a =
            props === null || props === void 0 ? void 0 : props.onExpand) ===
            null || _a === void 0
            ? void 0
            : _a.call(props, keys)
          ;(_b =
            _formCollapse === null || _formCollapse === void 0
              ? void 0
              : _formCollapse.setActiveKeys) === null || _b === void 0
            ? void 0
            : _b.call(_formCollapse, keys)
        },
      }),
      panels.map(function (_a, index) {
        var props = _a.props,
          schema = _a.schema,
          name = _a.name
        return React.createElement(
          Next.Collapse.Panel,
          __assign$2({ key: index }, props, {
            title: badgedHeader(name, props),
          }),
          React.createElement(Formily.React.RecursionField, {
            schema: schema,
            name: name,
          })
        )
      })
    )
  })
  var CollapsePanel = function (_a) {
    var children = _a.children
    return React.createElement(React.Fragment, null, children)
  }
  FormCollapse.CollapsePanel = CollapsePanel
  FormCollapse.createFormCollapse = createFormCollapse

  var setPrototypeOf = createCommonjsModule(function (module) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(o, p) {
          o.__proto__ = p
          return o
        }

      ;(module.exports['default'] = module.exports),
        (module.exports.__esModule = true)
      return _setPrototypeOf(o, p)
    }

    module.exports = _setPrototypeOf
    ;(module.exports['default'] = module.exports),
      (module.exports.__esModule = true)
  })

  var inheritsLoose = createCommonjsModule(function (module) {
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype)
      subClass.prototype.constructor = subClass
      setPrototypeOf(subClass, superClass)
    }

    module.exports = _inheritsLoose
    ;(module.exports['default'] = module.exports),
      (module.exports.__esModule = true)
  })

  var _inheritsLoose = /*@__PURE__*/ getDefaultExportFromCjs(inheritsLoose)

  /**
   * A collection of shims that provide minimal functionality of the ES6 collections.
   *
   * These implementations are not meant to be used outside of the ResizeObserver
   * modules as they cover only a limited range of use cases.
   */
  /* eslint-disable require-jsdoc, valid-jsdoc */
  var MapShim = (function () {
    if (typeof Map !== 'undefined') {
      return Map
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
      var result = -1
      arr.some(function (entry, index) {
        if (entry[0] === key) {
          result = index
          return true
        }
        return false
      })
      return result
    }
    return /** @class */ (function () {
      function class_1() {
        this.__entries__ = []
      }
      Object.defineProperty(class_1.prototype, 'size', {
        /**
         * @returns {boolean}
         */
        get: function () {
          return this.__entries__.length
        },
        enumerable: true,
        configurable: true,
      })
      /**
       * @param {*} key
       * @returns {*}
       */
      class_1.prototype.get = function (key) {
        var index = getIndex(this.__entries__, key)
        var entry = this.__entries__[index]
        return entry && entry[1]
      }
      /**
       * @param {*} key
       * @param {*} value
       * @returns {void}
       */
      class_1.prototype.set = function (key, value) {
        var index = getIndex(this.__entries__, key)
        if (~index) {
          this.__entries__[index][1] = value
        } else {
          this.__entries__.push([key, value])
        }
      }
      /**
       * @param {*} key
       * @returns {void}
       */
      class_1.prototype.delete = function (key) {
        var entries = this.__entries__
        var index = getIndex(entries, key)
        if (~index) {
          entries.splice(index, 1)
        }
      }
      /**
       * @param {*} key
       * @returns {void}
       */
      class_1.prototype.has = function (key) {
        return !!~getIndex(this.__entries__, key)
      }
      /**
       * @returns {void}
       */
      class_1.prototype.clear = function () {
        this.__entries__.splice(0)
      }
      /**
       * @param {Function} callback
       * @param {*} [ctx=null]
       * @returns {void}
       */
      class_1.prototype.forEach = function (callback, ctx) {
        if (ctx === void 0) {
          ctx = null
        }
        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i]
          callback.call(ctx, entry[1], entry[0])
        }
      }
      return class_1
    })()
  })()

  /**
   * Detects whether window and document objects are available in current environment.
   */
  var isBrowser =
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    window.document === document

  // Returns global object of a current environment.
  var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
      return global
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
      return self
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
      return window
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')()
  })()

  /**
   * A shim for the requestAnimationFrame which falls back to the setTimeout if
   * first one is not supported.
   *
   * @returns {number} Requests' identifier.
   */
  var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
      // It's required to use a bounded function because IE sometimes throws
      // an "Invalid calling object" error if rAF is invoked without the global
      // object on the left hand side.
      return requestAnimationFrame.bind(global$1)
    }
    return function (callback) {
      return setTimeout(function () {
        return callback(Date.now())
      }, 1000 / 60)
    }
  })()

  // Defines minimum timeout before adding a trailing call.
  var trailingTimeout = 2
  /**
   * Creates a wrapper function which ensures that provided callback will be
   * invoked only once during the specified delay period.
   *
   * @param {Function} callback - Function to be invoked after the delay period.
   * @param {number} delay - Delay after which to invoke callback.
   * @returns {Function}
   */
  function throttle(callback, delay) {
    var leadingCall = false,
      trailingCall = false,
      lastCallTime = 0
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
      if (leadingCall) {
        leadingCall = false
        callback()
      }
      if (trailingCall) {
        proxy()
      }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
      requestAnimationFrame$1(resolvePending)
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
      var timeStamp = Date.now()
      if (leadingCall) {
        // Reject immediately following calls.
        if (timeStamp - lastCallTime < trailingTimeout) {
          return
        }
        // Schedule new call to be in invoked when the pending one is resolved.
        // This is important for "transitions" which never actually start
        // immediately so there is a chance that we might miss one if change
        // happens amids the pending invocation.
        trailingCall = true
      } else {
        leadingCall = true
        trailingCall = false
        setTimeout(timeoutCallback, delay)
      }
      lastCallTime = timeStamp
    }
    return proxy
  }

  // Minimum delay before invoking the update of observers.
  var REFRESH_DELAY = 20
  // A list of substrings of CSS properties used to find transition events that
  // might affect dimensions of observed elements.
  var transitionKeys = [
    'top',
    'right',
    'bottom',
    'left',
    'width',
    'height',
    'size',
    'weight',
  ]
  // Check if MutationObserver is available.
  var mutationObserverSupported = typeof MutationObserver !== 'undefined'
  /**
   * Singleton controller class which handles updates of ResizeObserver instances.
   */
  var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
      /**
       * Indicates whether DOM listeners have been added.
       *
       * @private {boolean}
       */
      this.connected_ = false
      /**
       * Tells that controller has subscribed for Mutation Events.
       *
       * @private {boolean}
       */
      this.mutationEventsAdded_ = false
      /**
       * Keeps reference to the instance of MutationObserver.
       *
       * @private {MutationObserver}
       */
      this.mutationsObserver_ = null
      /**
       * A list of connected observers.
       *
       * @private {Array<ResizeObserverSPI>}
       */
      this.observers_ = []
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)
      this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY)
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer)
      }
      // Add listeners if they haven't been added yet.
      if (!this.connected_) {
        this.connect_()
      }
    }
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
      var observers = this.observers_
      var index = observers.indexOf(observer)
      // Remove observer if it's present in registry.
      if (~index) {
        observers.splice(index, 1)
      }
      // Remove listeners if controller has no connected observers.
      if (!observers.length && this.connected_) {
        this.disconnect_()
      }
    }
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
      var changesDetected = this.updateObservers_()
      // Continue running updates if changes have been detected as there might
      // be future ones caused by CSS transitions.
      if (changesDetected) {
        this.refresh()
      }
    }
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
      // Collect observers that have active observations.
      var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive()
      })
      // Deliver notifications in a separate cycle in order to avoid any
      // collisions between observers, e.g. when multiple instances of
      // ResizeObserver are tracking the same element and the callback of one
      // of them changes content dimensions of the observed target. Sometimes
      // this may result in notifications being blocked for the rest of observers.
      activeObservers.forEach(function (observer) {
        return observer.broadcastActive()
      })
      return activeObservers.length > 0
    }
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already added.
      if (!isBrowser || this.connected_) {
        return
      }
      // Subscription to the "Transitionend" event is used as a workaround for
      // delayed transitions. This way it's possible to capture at least the
      // final state of an element.
      document.addEventListener('transitionend', this.onTransitionEnd_)
      window.addEventListener('resize', this.refresh)
      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh)
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true,
        })
      } else {
        document.addEventListener('DOMSubtreeModified', this.refresh)
        this.mutationEventsAdded_ = true
      }
      this.connected_ = true
    }
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already removed.
      if (!isBrowser || !this.connected_) {
        return
      }
      document.removeEventListener('transitionend', this.onTransitionEnd_)
      window.removeEventListener('resize', this.refresh)
      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect()
      }
      if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh)
      }
      this.mutationsObserver_ = null
      this.mutationEventsAdded_ = false
      this.connected_ = false
    }
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
      var _b = _a.propertyName,
        propertyName = _b === void 0 ? '' : _b
      // Detect whether transition may affect dimensions of an element.
      var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key)
      })
      if (isReflowProperty) {
        this.refresh()
      }
    }
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController()
      }
      return this.instance_
    }
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null
    return ResizeObserverController
  })()

  /**
   * Defines non-writable/enumerable properties of the provided target object.
   *
   * @param {Object} target - Object for which to define properties.
   * @param {Object} props - Properties to be defined.
   * @returns {Object} Target object.
   */
  var defineConfigurable = function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
      var key = _a[_i]
      Object.defineProperty(target, key, {
        value: props[key],
        enumerable: false,
        writable: false,
        configurable: true,
      })
    }
    return target
  }

  /**
   * Returns the global object associated with provided element.
   *
   * @param {Object} target
   * @returns {Object}
   */
  var getWindowOf = function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal =
      target && target.ownerDocument && target.ownerDocument.defaultView
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1
  }

  // Placeholder of an empty content rectangle.
  var emptyRect = createRectInit(0, 0, 0, 0)
  /**
   * Converts provided string to a number.
   *
   * @param {number|string} value
   * @returns {number}
   */
  function toFloat(value) {
    return parseFloat(value) || 0
  }
  /**
   * Extracts borders size from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @param {...string} positions - Borders positions (top, right, ...)
   * @returns {number}
   */
  function getBordersSize(styles) {
    var positions = []
    for (var _i = 1; _i < arguments.length; _i++) {
      positions[_i - 1] = arguments[_i]
    }
    return positions.reduce(function (size, position) {
      var value = styles['border-' + position + '-width']
      return size + toFloat(value)
    }, 0)
  }
  /**
   * Extracts paddings sizes from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @returns {Object} Paddings box.
   */
  function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left']
    var paddings = {}
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
      var position = positions_1[_i]
      var value = styles['padding-' + position]
      paddings[position] = toFloat(value)
    }
    return paddings
  }
  /**
   * Calculates content rectangle of provided SVG element.
   *
   * @param {SVGGraphicsElement} target - Element content rectangle of which needs
   *      to be calculated.
   * @returns {DOMRectInit}
   */
  function getSVGContentRect(target) {
    var bbox = target.getBBox()
    return createRectInit(0, 0, bbox.width, bbox.height)
  }
  /**
   * Calculates content rectangle of provided HTMLElement.
   *
   * @param {HTMLElement} target - Element for which to calculate the content rectangle.
   * @returns {DOMRectInit}
   */
  function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth,
      clientHeight = target.clientHeight
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
      return emptyRect
    }
    var styles = getWindowOf(target).getComputedStyle(target)
    var paddings = getPaddings(styles)
    var horizPad = paddings.left + paddings.right
    var vertPad = paddings.top + paddings.bottom
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
      height = toFloat(styles.height)
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
      // Following conditions are required to handle Internet Explorer which
      // doesn't include paddings and borders to computed CSS dimensions.
      //
      // We can say that if CSS dimensions + paddings are equal to the "client"
      // properties then it's either IE, and thus we don't need to subtract
      // anything, or an element merely doesn't have paddings/borders styles.
      if (Math.round(width + horizPad) !== clientWidth) {
        width -= getBordersSize(styles, 'left', 'right') + horizPad
      }
      if (Math.round(height + vertPad) !== clientHeight) {
        height -= getBordersSize(styles, 'top', 'bottom') + vertPad
      }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
      // In some browsers (only in Firefox, actually) CSS width & height
      // include scroll bars size which can be removed at this step as scroll
      // bars are the only difference between rounded dimensions + paddings
      // and "client" properties, though that is not always true in Chrome.
      var vertScrollbar = Math.round(width + horizPad) - clientWidth
      var horizScrollbar = Math.round(height + vertPad) - clientHeight
      // Chrome has a rather weird rounding of "client" properties.
      // E.g. for an element with content width of 314.2px it sometimes gives
      // the client width of 315px and for the width of 314.7px it may give
      // 314px. And it doesn't happen all the time. So just ignore this delta
      // as a non-relevant.
      if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar
      }
      if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar
      }
    }
    return createRectInit(paddings.left, paddings.top, width, height)
  }
  /**
   * Checks whether provided element is an instance of the SVGGraphicsElement.
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */
  var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
      return function (target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement
      }
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) {
      return (
        target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'
      )
    }
  })()
  /**
   * Checks whether provided element is a document element (<html>).
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */
  function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement
  }
  /**
   * Calculates an appropriate content rectangle for provided html or svg element.
   *
   * @param {Element} target - Element content rectangle of which needs to be calculated.
   * @returns {DOMRectInit}
   */
  function getContentRect(target) {
    if (!isBrowser) {
      return emptyRect
    }
    if (isSVGGraphicsElement(target)) {
      return getSVGContentRect(target)
    }
    return getHTMLElementContentRect(target)
  }
  /**
   * Creates rectangle with an interface of the DOMRectReadOnly.
   * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
   *
   * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
   * @returns {DOMRectReadOnly}
   */
  function createReadOnlyRect(_a) {
    var x = _a.x,
      y = _a.y,
      width = _a.width,
      height = _a.height
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr =
      typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object
    var rect = Object.create(Constr.prototype)
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
      x: x,
      y: y,
      width: width,
      height: height,
      top: y,
      right: x + width,
      bottom: height + y,
      left: x,
    })
    return rect
  }
  /**
   * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
   * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
   *
   * @param {number} x - X coordinate.
   * @param {number} y - Y coordinate.
   * @param {number} width - Rectangle's width.
   * @param {number} height - Rectangle's height.
   * @returns {DOMRectInit}
   */
  function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height }
  }

  /**
   * Class that is responsible for computations of the content rectangle of
   * provided DOM element and for keeping track of it's changes.
   */
  var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
      /**
       * Broadcasted width of content rectangle.
       *
       * @type {number}
       */
      this.broadcastWidth = 0
      /**
       * Broadcasted height of content rectangle.
       *
       * @type {number}
       */
      this.broadcastHeight = 0
      /**
       * Reference to the last observed content rectangle.
       *
       * @private {DOMRectInit}
       */
      this.contentRect_ = createRectInit(0, 0, 0, 0)
      this.target = target
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
      var rect = getContentRect(this.target)
      this.contentRect_ = rect
      return (
        rect.width !== this.broadcastWidth ||
        rect.height !== this.broadcastHeight
      )
    }
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
      var rect = this.contentRect_
      this.broadcastWidth = rect.width
      this.broadcastHeight = rect.height
      return rect
    }
    return ResizeObservation
  })()

  var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit)
      // According to the specification following properties are not writable
      // and are also not enumerable in the native implementation.
      //
      // Property accessors are not being used as they'd require to define a
      // private WeakMap storage which may cause memory leaks in browsers that
      // don't support this type of collections.
      defineConfigurable(this, { target: target, contentRect: contentRect })
    }
    return ResizeObserverEntry
  })()

  var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
      /**
       * Collection of resize observations that have detected changes in dimensions
       * of elements.
       *
       * @private {Array<ResizeObservation>}
       */
      this.activeObservations_ = []
      /**
       * Registry of the ResizeObservation instances.
       *
       * @private {Map<Element, ResizeObservation>}
       */
      this.observations_ = new MapShim()
      if (typeof callback !== 'function') {
        throw new TypeError(
          'The callback provided as parameter 1 is not a function.'
        )
      }
      this.callback_ = callback
      this.controller_ = controller
      this.callbackCtx_ = callbackCtx
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.')
      }
      // Do nothing if current environment doesn't have the Element interface.
      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".')
      }
      var observations = this.observations_
      // Do nothing if element is already being observed.
      if (observations.has(target)) {
        return
      }
      observations.set(target, new ResizeObservation(target))
      this.controller_.addObserver(this)
      // Force the update of observations.
      this.controller_.refresh()
    }
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.')
      }
      // Do nothing if current environment doesn't have the Element interface.
      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".')
      }
      var observations = this.observations_
      // Do nothing if element is not being observed.
      if (!observations.has(target)) {
        return
      }
      observations.delete(target)
      if (!observations.size) {
        this.controller_.removeObserver(this)
      }
    }
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
      this.clearActive()
      this.observations_.clear()
      this.controller_.removeObserver(this)
    }
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
      var _this = this
      this.clearActive()
      this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation)
        }
      })
    }
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
      // Do nothing if observer doesn't have active observations.
      if (!this.hasActive()) {
        return
      }
      var ctx = this.callbackCtx_
      // Create ResizeObserverEntry instance for every active observation.
      var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(
          observation.target,
          observation.broadcastRect()
        )
      })
      this.callback_.call(ctx, entries, ctx)
      this.clearActive()
    }
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
      this.activeObservations_.splice(0)
    }
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
      return this.activeObservations_.length > 0
    }
    return ResizeObserverSPI
  })()

  // Registry of internal observers. If WeakMap is not available use current shim
  // for the Map collection as it has all required methods and because WeakMap
  // can't be fully polyfilled anyway.
  var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim()
  /**
   * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
   * exposing only those methods and properties that are defined in the spec.
   */
  var ResizeObserver$1 = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
      if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.')
      }
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.')
      }
      var controller = ResizeObserverController.getInstance()
      var observer = new ResizeObserverSPI(callback, controller, this)
      observers.set(this, observer)
    }
    return ResizeObserver
  })()
  // Expose public methods of ResizeObserver.
  ;['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver$1.prototype[method] = function () {
      var _a
      return (_a = observers.get(this))[method].apply(_a, arguments)
    }
  })

  var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
      return global$1.ResizeObserver
    }
    return ResizeObserver$1
  })()

  var getScrollParent = function (node) {
    var parent = node

    while ((parent = parent.parentElement)) {
      var overflowYVal = getComputedStyle(parent, null).getPropertyValue(
        'overflow-y'
      )
      if (parent === document.body) return window
      if (overflowYVal === 'auto' || overflowYVal === 'scroll') return parent
    }

    return window
  }

  var offsetTill = function (node, target) {
    var current = node
    var offset = 0 // If target is not an offsetParent itself, subtract its offsetTop and set correct target

    if (target.firstChild && target.firstChild.offsetParent !== target) {
      offset += node.offsetTop - target.offsetTop
      target = node.offsetParent
      offset += -node.offsetTop
    }

    do {
      offset += current.offsetTop
      current = current.offsetParent
    } while (current && current !== target)

    return offset
  }

  var stickyProp = null

  if (typeof CSS !== 'undefined' && CSS.supports) {
    if (CSS.supports('position', 'sticky')) stickyProp = 'sticky'
    else if (CSS.supports('position', '-webkit-sticky'))
      stickyProp = '-webkit-sticky'
  } // Inspired by https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection

  var passiveArg = false

  try {
    var opts = Object.defineProperty({}, 'passive', {
      // eslint-disable-next-line getter-return
      get: function get() {
        passiveArg = {
          passive: true,
        }
      },
    })
    window.addEventListener('testPassive', null, opts)
    window.removeEventListener('testPassive', null, opts)
  } catch (e) {}

  var StickyBox =
    /*#__PURE__*/
    (function (_React$Component) {
      _inheritsLoose(StickyBox, _React$Component)

      function StickyBox(props) {
        var _this = _React$Component.call(this, props) || this

        _this.addListener = function (element, event, handler, passive) {
          element.addEventListener(event, handler, passive)

          _this.unsubscribes.push(function () {
            return element.removeEventListener(event, handler)
          })
        }

        _this.addResizeObserver = function (node, handler) {
          var ro = new index(handler)
          ro.observe(node)

          _this.unsubscribes.push(function () {
            return ro.disconnect()
          })
        }

        _this.registerContainerRef = function (n) {
          if (!stickyProp) return
          _this.node = n

          if (n) {
            _this.scrollPane = getScrollParent(_this.node)
            _this.latestScrollY =
              _this.scrollPane === window
                ? window.scrollY
                : _this.scrollPane.scrollTop

            _this.addListener(
              _this.scrollPane,
              'scroll',
              _this.handleScroll,
              passiveArg
            )

            _this.addListener(
              _this.scrollPane,
              'mousewheel',
              _this.handleScroll,
              passiveArg
            )

            if (_this.scrollPane === window) {
              _this.addListener(window, 'resize', _this.handleWindowResize)

              _this.handleWindowResize()
            } else {
              _this.addResizeObserver(
                _this.scrollPane,
                _this.handleScrollPaneResize
              )

              _this.handleScrollPaneResize()
            }

            _this.addResizeObserver(
              _this.node.parentNode,
              _this.handleParentNodeResize
            )

            _this.handleParentNodeResize()

            _this.addResizeObserver(_this.node, _this.handleNodeResize)

            _this.handleNodeResize({
              initial: true,
            })

            _this.initial()
          } else {
            _this.unsubscribes.forEach(function (fn) {
              return fn()
            })

            _this.unsubscribes = []
            _this.scrollPane = null
          }
        }

        _this.getCurrentOffset = function () {
          if (_this.mode === 'relative') return _this.offset
          var _this$props = _this.props,
            offsetTop = _this$props.offsetTop,
            offsetBottom = _this$props.offsetBottom

          if (_this.mode === 'stickyTop') {
            return Math.max(
              0,
              _this.scrollPaneOffset +
                _this.latestScrollY -
                _this.naturalTop +
                offsetTop
            )
          }

          if (_this.mode === 'stickyBottom') {
            return Math.max(
              0,
              _this.scrollPaneOffset +
                _this.latestScrollY +
                _this.viewPortHeight -
                (_this.naturalTop + _this.nodeHeight + offsetBottom)
            )
          }
        }

        _this.handleWindowResize = function () {
          _this.viewPortHeight = window.innerHeight
          _this.scrollPaneOffset = 0

          _this.handleScroll()
        }

        _this.handleScrollPaneResize = function () {
          _this.viewPortHeight = _this.scrollPane.offsetHeight

          if (
            process.env.NODE_ENV !== 'production' &&
            _this.viewPortHeight === 0
          ) {
            console.warn(
              "react-sticky-box's scroll pane has a height of 0. This seems odd. Please check this node:",
              _this.scrollPane
            )
          } // Only applicable if scrollPane is an offsetParent

          if (_this.scrollPane.firstChild.offsetParent === _this.scrollPane) {
            _this.scrollPaneOffset =
              _this.scrollPane.getBoundingClientRect().top
          } else {
            _this.scrollPaneOffset = 0
          }

          _this.handleScroll()
        }

        _this.handleParentNodeResize = function () {
          var parentNode = _this.node.parentNode
          var computedParentStyle = getComputedStyle(parentNode, null)
          var parentPaddingTop = parseInt(
            computedParentStyle.getPropertyValue('padding-top'),
            10
          )
          var parentPaddingBottom = parseInt(
            computedParentStyle.getPropertyValue('padding-bottom'),
            10
          )
          _this.naturalTop =
            offsetTill(parentNode, _this.scrollPane) +
            parentPaddingTop +
            _this.scrollPaneOffset
          var oldParentHeight = _this.parentHeight
          _this.parentHeight =
            parentNode.getBoundingClientRect().height -
            (parentPaddingTop + parentPaddingBottom)

          if (_this.mode === 'relative') {
            if (_this.props.bottom) {
              _this.changeMode('relative')
            } else {
              // If parent height decreased...
              if (oldParentHeight > _this.parentHeight) {
                _this.changeToStickyBottomIfBoxTooLow(_this.latestScrollY)
              }
            }
          }

          if (
            oldParentHeight !== _this.parentHeight &&
            _this.mode === 'relative'
          ) {
            _this.latestScrollY = Number.POSITIVE_INFINITY

            _this.handleScroll()
          }
        }

        _this.handleNodeResize = function (_temp) {
          var _ref = _temp === void 0 ? {} : _temp,
            initial = _ref.initial

          var prevHeight = _this.nodeHeight
          _this.nodeHeight = _this.node.getBoundingClientRect().height

          if (!initial && prevHeight !== _this.nodeHeight) {
            var _this$props2 = _this.props,
              offsetTop = _this$props2.offsetTop,
              offsetBottom = _this$props2.offsetBottom,
              bottom = _this$props2.bottom

            if (
              _this.nodeHeight + offsetTop + offsetBottom <=
              _this.viewPortHeight
            ) {
              // Just make it sticky if node smaller than viewport
              _this.mode = undefined

              _this.initial()
            } else {
              var diff = prevHeight - _this.nodeHeight
              var lowestPossible = _this.parentHeight - _this.nodeHeight
              var nextOffset = Math.min(
                lowestPossible,
                _this.getCurrentOffset() + (bottom ? diff : 0)
              )
              _this.offset = Math.max(0, nextOffset)
              if (!bottom || _this.mode !== 'stickyBottom')
                _this.changeMode('relative')
            }
          }
        }

        _this.handleScroll = function () {
          var _this$props3 = _this.props,
            offsetTop = _this$props3.offsetTop,
            offsetBottom = _this$props3.offsetBottom
          var scrollY =
            _this.scrollPane === window
              ? window.scrollY
              : _this.scrollPane.scrollTop
          if (scrollY === _this.latestScrollY) return

          if (
            _this.nodeHeight + offsetTop + offsetBottom <=
            _this.viewPortHeight
          ) {
            // Just make it sticky if node smaller than viewport
            _this.initial()

            _this.latestScrollY = scrollY
            return
          }

          var scrollDelta = scrollY - _this.latestScrollY
          _this.offset = _this.getCurrentOffset()

          if (scrollDelta > 0) {
            // scroll down
            if (_this.mode === 'stickyTop') {
              if (
                scrollY + _this.scrollPaneOffset + offsetTop >
                _this.naturalTop
              ) {
                if (
                  scrollY + _this.scrollPaneOffset + _this.viewPortHeight <=
                  _this.naturalTop +
                    _this.nodeHeight +
                    _this.offset +
                    offsetBottom
                ) {
                  _this.changeMode('relative')
                } else {
                  _this.changeMode('stickyBottom')
                }
              }
            } else if (_this.mode === 'relative') {
              _this.changeToStickyBottomIfBoxTooLow(scrollY)
            }
          } else {
            // scroll up
            if (_this.mode === 'stickyBottom') {
              if (
                _this.scrollPaneOffset + scrollY + _this.viewPortHeight <
                _this.naturalTop + _this.parentHeight + offsetBottom
              ) {
                if (
                  _this.scrollPaneOffset + scrollY + offsetTop >=
                  _this.naturalTop + _this.offset
                ) {
                  _this.changeMode('relative')
                } else {
                  _this.changeMode('stickyTop')
                }
              }
            } else if (_this.mode === 'relative') {
              if (
                _this.scrollPaneOffset + scrollY + offsetTop <
                _this.naturalTop + _this.offset
              ) {
                _this.changeMode('stickyTop')
              }
            }
          }

          _this.latestScrollY = scrollY
        }

        if (props.offset && process.env.NODE_ENV !== 'production') {
          console.warn(
            'react-sticky-box\'s "offset" prop is deprecated. Please use "offsetTop" instead. It\'ll be removed in v0.8.'
          )
        }

        _this.unsubscribes = []
        return _this
      }

      var _proto = StickyBox.prototype

      _proto.changeMode = function changeMode(newMode) {
        var _this$props4 = this.props,
          onChangeMode = _this$props4.onChangeMode,
          offsetTop = _this$props4.offsetTop,
          offsetBottom = _this$props4.offsetBottom,
          bottom = _this$props4.bottom
        if (this.mode !== newMode) onChangeMode(this.mode, newMode)
        this.mode = newMode

        if (newMode === 'relative') {
          this.node.style.position = 'relative'

          if (bottom) {
            var nextBottom = Math.max(
              0,
              this.parentHeight - this.nodeHeight - this.offset
            )
            this.node.style.bottom = nextBottom + 'px'
          } else {
            this.node.style.top = this.offset + 'px'
          }
        } else {
          this.node.style.position = stickyProp

          if (newMode === 'stickyBottom') {
            if (bottom) {
              this.node.style.bottom = offsetBottom + 'px'
            } else {
              this.node.style.top =
                this.viewPortHeight - this.nodeHeight - offsetBottom + 'px'
            }
          } else {
            // stickyTop
            if (bottom) {
              this.node.style.bottom =
                this.viewPortHeight - this.nodeHeight - offsetBottom + 'px'
            } else {
              this.node.style.top = offsetTop + 'px'
            }
          }
        }

        this.offset = this.getCurrentOffset()
      }

      _proto.initial = function initial() {
        var bottom = this.props.bottom

        if (bottom) {
          if (this.mode !== 'stickyBottom') this.changeMode('stickyBottom')
        } else {
          if (this.mode !== 'stickyTop') this.changeMode('stickyTop')
        }
      }

      _proto.changeToStickyBottomIfBoxTooLow =
        function changeToStickyBottomIfBoxTooLow(scrollY) {
          var offsetBottom = this.props.offsetBottom

          if (
            scrollY + this.scrollPaneOffset + this.viewPortHeight >=
            this.naturalTop + this.nodeHeight + this.offset + offsetBottom
          ) {
            this.changeMode('stickyBottom')
          }
        }

      _proto.render = function render() {
        var _this$props5 = this.props,
          children = _this$props5.children,
          className = _this$props5.className,
          style = _this$props5.style
        return React.createElement(
          'div',
          {
            className: className,
            style: style,
            ref: this.registerContainerRef,
          },
          children
        )
      }

      return StickyBox
    })(React.Component)
  StickyBox.defaultProps = {
    onChangeMode: function onChangeMode() {},
    offsetTop: 0,
    offsetBottom: 0,
  }
  process.env.NODE_ENV !== 'production'
    ? (StickyBox.propTypes = {
        onChangeMode: propTypes$2.func,
        offsetTop: propTypes$2.number,
        offsetBottom: propTypes$2.number,
        bottom: propTypes$2.bool,
      })
    : void 0

  var spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
  }
  var Space = function (_a) {
    var _b
    var direction = _a.direction,
      size = _a.size,
      align = _a.align,
      props = __rest(_a, ['direction', 'size', 'align'])
    var layout = useFormLayout()
    var prefix = usePrefixCls('space', props)
    var getDirection = function () {
      if (direction === 'horizontal') {
        return 'row'
      } else {
        return 'column'
      }
    }
    var getAlign = function () {
      if (align === 'start') {
        return 'flex-start'
      } else if (align === 'end') {
        return 'flex-end'
      } else {
        return 'center'
      }
    }
    var _size =
      (_b =
        size !== null && size !== void 0
          ? size
          : layout === null || layout === void 0
          ? void 0
          : layout.spaceGap) !== null && _b !== void 0
        ? _b
        : 8
    var _align = getAlign()
    return React.createElement(
      Next.Box,
      __assign$2({}, props, {
        spacing: Formily.Shared.isNumberLike(_size)
          ? _size
          : spaceSize[_size] || 8,
        style: __assign$2(
          { alignItems: _align, display: 'inline-flex' },
          props.style
        ),
        align: _align,
        direction: getDirection(),
      }),
      toArray(props.children, { keepEmpty: true }).map(function (child, index) {
        return React.createElement(
          'div',
          { className: ''.concat(prefix, '-item'), key: index },
          child
        )
      })
    )
  }
  Space.defaultProps = {
    direction: 'horizontal',
    align: 'start',
  }

  function getInheritedBackgroundColor(el) {
    // get default style for current browser
    var defaultStyle = getDefaultBackground() // typically "rgba(0, 0, 0, 0)"
    // get computed color for el
    var backgroundColor = window.getComputedStyle(el).backgroundColor
    // if we got a real value, return it
    if (backgroundColor != defaultStyle) return backgroundColor
    // if we've reached the top parent el without getting an explicit color, return default
    if (!el.parentElement) return defaultStyle
    // otherwise, recurse and try again on parent element
    return getInheritedBackgroundColor(el.parentElement)
  }
  function getDefaultBackground() {
    // have to add to the document in order to use getComputedStyle
    var div = document.createElement('div')
    document.head.appendChild(div)
    var bg = window.getComputedStyle(div).backgroundColor
    document.head.removeChild(div)
    return bg
  }
  var FormButtonGroup = function (_a) {
    var align = _a.align,
      gutter = _a.gutter,
      props = __rest(_a, ['align', 'gutter'])
    var prefixCls = usePrefixCls('formily-button-group')
    return React.createElement(
      Space,
      __assign$2({}, props, {
        size: gutter,
        className: classnames(prefixCls, props.className),
        style: __assign$2(__assign$2({}, props.style), {
          justifyContent:
            align === 'left'
              ? 'flex-start'
              : align === 'right'
              ? 'flex-end'
              : 'center',
          display: 'flex',
        }),
      }),
      props.children
    )
  }
  FormButtonGroup.defaultProps = {
    align: 'left',
  }
  FormButtonGroup.FormItem = function (_a) {
    var _b
    var gutter = _a.gutter,
      props = __rest(_a, ['gutter'])
    return React.createElement(
      BaseItem,
      __assign$2({}, props, {
        label: ' ',
        style: __assign$2(__assign$2({ margin: 0, padding: 0 }, props.style), {
          width: '100%',
        }),
        colon: false,
      }),
      ((_b = props.children) === null || _b === void 0 ? void 0 : _b['length'])
        ? React.createElement(Space, { size: gutter }, props.children)
        : props.children
    )
  }
  FormButtonGroup.Sticky = function (_a) {
    var align = _a.align,
      props = __rest(_a, ['align'])
    var ref = React.useRef()
    var _b = __read$1(React.useState('transparent'), 2),
      color = _b[0],
      setColor = _b[1]
    var prefixCls = usePrefixCls('formily-button-group')
    React.useLayoutEffect(function () {
      if (ref.current) {
        var computed = getInheritedBackgroundColor(ref.current)
        if (computed !== color) {
          setColor(computed)
        }
      }
    })
    return React.createElement(
      StickyBox,
      __assign$2({}, props, {
        className: classnames(''.concat(prefixCls, '-sticky'), props.className),
        style: __assign$2({ backgroundColor: color }, props.style),
        bottom: true,
      }),
      React.createElement(
        'div',
        {
          ref: ref,
          className: ''.concat(prefixCls, '-sticky-inner'),
          style: __assign$2(__assign$2({}, props.style), {
            justifyContent:
              align === 'left'
                ? 'flex-start'
                : align === 'right'
                ? 'flex-end'
                : 'center',
          }),
        },
        props.children
      )
    )
  }
  FormButtonGroup.Sticky.defaultProps = {
    align: 'left',
  }

  var Input = Formily.React.connect(
    Next.Input,
    Formily.React.mapProps(mapSize, mapStatus),
    Formily.React.mapReadPretty(PreviewText.Input)
  )
  Input.TextArea = Formily.React.connect(
    Next.Input.TextArea,
    Formily.React.mapProps(mapSize, mapStatus),
    Formily.React.mapReadPretty(PreviewText.Input)
  )

  var isNum = function (c) {
    return c >= 48 && c <= 57
  }
  var isLower = function (c) {
    return c >= 97 && c <= 122
  }
  var isUpper = function (c) {
    return c >= 65 && c <= 90
  }
  var isSymbol = function (c) {
    return !(isLower(c) || isUpper(c) || isNum(c))
  }
  var isLetter = function (c) {
    return isLower(c) || isUpper(c)
  }
  var getStrength = function (val) {
    if (!val) return 0
    var num = 0
    var lower = 0
    var upper = 0
    var symbol = 0
    var MNS = 0
    var rep = 0
    var repC = 0
    var consecutive = 0
    var sequential = 0
    var len = function () {
      return num + lower + upper + symbol
    }
    var callme = function () {
      var re = num > 0 ? 1 : 0
      re += lower > 0 ? 1 : 0
      re += upper > 0 ? 1 : 0
      re += symbol > 0 ? 1 : 0
      if (re > 2 && len() >= 8) {
        return re + 1
      } else {
        return 0
      }
    }
    for (var i = 0; i < val.length; i++) {
      var c = val.charCodeAt(i)
      if (isNum(c)) {
        num++
        if (i !== 0 && i !== val.length - 1) {
          MNS++
        }
        if (i > 0 && isNum(val.charCodeAt(i - 1))) {
          consecutive++
        }
      } else if (isLower(c)) {
        lower++
        if (i > 0 && isLower(val.charCodeAt(i - 1))) {
          consecutive++
        }
      } else if (isUpper(c)) {
        upper++
        if (i > 0 && isUpper(val.charCodeAt(i - 1))) {
          consecutive++
        }
      } else {
        symbol++
        if (i !== 0 && i !== val.length - 1) {
          MNS++
        }
      }
      var exists = false
      for (var j = 0; j < val.length; j++) {
        if (val[i] === val[j] && i !== j) {
          exists = true
          repC += Math.abs(val.length / (j - i))
        }
      }
      if (exists) {
        rep++
        var unique = val.length - rep
        repC = unique ? Math.ceil(repC / unique) : Math.ceil(repC)
      }
      if (i > 1) {
        var last1 = val.charCodeAt(i - 1)
        var last2 = val.charCodeAt(i - 2)
        if (isLetter(c)) {
          if (isLetter(last1) && isLetter(last2)) {
            var v = val.toLowerCase()
            var vi = v.charCodeAt(i)
            var vi1 = v.charCodeAt(i - 1)
            var vi2 = v.charCodeAt(i - 2)
            if (vi - vi1 === vi1 - vi2 && Math.abs(vi - vi1) === 1) {
              sequential++
            }
          }
        } else if (isNum(c)) {
          if (isNum(last1) && isNum(last2)) {
            if (c - last1 === last1 - last2 && Math.abs(c - last1) === 1) {
              sequential++
            }
          }
        } else {
          if (isSymbol(last1) && isSymbol(last2)) {
            if (c - last1 === last1 - last2 && Math.abs(c - last1) === 1) {
              sequential++
            }
          }
        }
      }
    }
    var sum = 0
    var length = len()
    sum += 4 * length
    if (lower > 0) {
      sum += 2 * (length - lower)
    }
    if (upper > 0) {
      sum += 2 * (length - upper)
    }
    if (num !== length) {
      sum += 4 * num
    }
    sum += 6 * symbol
    sum += 2 * MNS
    sum += 2 * callme()
    if (length === lower + upper) {
      sum -= length
    }
    if (length === num) {
      sum -= num
    }
    sum -= repC
    sum -= 2 * consecutive
    sum -= 3 * sequential
    sum = sum < 0 ? 0 : sum
    sum = sum > 100 ? 100 : sum
    if (sum >= 80) {
      return 100
    } else if (sum >= 60) {
      return 80
    } else if (sum >= 40) {
      return 60
    } else if (sum >= 20) {
      return 40
    } else {
      return 20
    }
  }
  var PasswordStrength = function (props) {
    if (Formily.Shared.isFn(props.children)) {
      return props.children(getStrength(String(props.value)))
    } else {
      return React.createElement(React.Fragment, null, props.children)
    }
  }

  var Password = Formily.React.connect(
    function (props) {
      var value = props.value,
        className = props.className,
        checkStrength = props.checkStrength,
        others = __rest(props, ['value', 'className', 'checkStrength'])
      var blockStyle = {
        position: 'absolute',
        zIndex: 1,
        height: 8,
        top: 0,
        background: '#fff',
        width: 1,
        transform: 'translate(-50%, 0)',
      }
      return React.createElement(
        'span',
        { className: className },
        React.createElement(
          Next.Input.Password,
          __assign$2({}, others, {
            style: __assign$2(__assign$2({}, others.style), { width: '100%' }),
            value: value,
          })
        ),
        checkStrength &&
          React.createElement(
            PasswordStrength,
            { value: String(value) },
            function (score) {
              return React.createElement(
                'div',
                {
                  style: {
                    background: '#e0e0e0',
                    marginBottom: 3,
                    position: 'relative',
                  },
                },
                React.createElement('div', {
                  style: __assign$2(__assign$2({}, blockStyle), {
                    left: '20%',
                  }),
                }),
                React.createElement('div', {
                  style: __assign$2(__assign$2({}, blockStyle), {
                    left: '40%',
                  }),
                }),
                React.createElement('div', {
                  style: __assign$2(__assign$2({}, blockStyle), {
                    left: '60%',
                  }),
                }),
                React.createElement('div', {
                  style: __assign$2(__assign$2({}, blockStyle), {
                    left: '80%',
                  }),
                }),
                React.createElement('div', {
                  style: {
                    position: 'relative',
                    backgroundImage:
                      '-webkit-linear-gradient(left, #ff5500, #ff9300)',
                    transition: 'all 0.35s ease-in-out',
                    height: 8,
                    width: '100%',
                    marginTop: 5,
                    clipPath: 'polygon(0 0,'
                      .concat(score, '% 0,')
                      .concat(score, '% 100%,0 100%)'),
                  },
                })
              )
            }
          )
      )
    },
    Formily.React.mapProps(mapSize, mapStatus),
    Formily.React.mapReadPretty(PreviewText.Input)
  )

  var Radio = Formily.React.connect(
    Next.Radio,
    Formily.React.mapProps(
      {
        value: 'checked',
      },
      mapSize
    )
  )
  Radio.Group = Formily.React.connect(
    Next.Radio.Group,
    Formily.React.mapProps(
      {
        dataSource: true,
      },
      mapSize
    ),
    Formily.React.mapReadPretty(PreviewText.Select)
  )

  var Checkbox = Formily.React.connect(
    Next.Checkbox,
    Formily.React.mapProps(
      {
        value: 'checked',
        onInput: 'onChange',
      },
      mapSize
    )
  )
  Checkbox.Group = Formily.React.connect(
    Next.Checkbox.Group,
    Formily.React.mapProps(
      {
        dataSource: true,
      },
      mapSize
    ),
    Formily.React.mapReadPretty(PreviewText.Select, {
      mode: 'multiple',
    })
  )

  var patchDataSource = function (dataSource) {
    if (dataSource === void 0) {
      dataSource = []
    }
    var removeEmptyChildren = function (data) {
      var result = __assign$2({}, data)
      if (!result.children || result.children.length === 0) {
        delete result.children
      } else {
        result.children = result.children.map(removeEmptyChildren)
      }
      return result
    }
    return dataSource.map(removeEmptyChildren)
  }
  var Select = Formily.React.connect(
    Next.Select,
    Formily.React.mapProps(
      function (props, field) {
        var _a
        if (Formily.Core.isVoidField(field)) {
          return props
        }
        return __assign$2(__assign$2({}, props), {
          dataSource: patchDataSource(
            (_a = props.dataSource) !== null && _a !== void 0
              ? _a
              : field === null || field === void 0
              ? void 0
              : field.dataSource
          ),
        })
      },
      mapSize,
      mapStatus
    ),
    Formily.React.mapReadPretty(PreviewText.Select)
  )

  var Cascader = Formily.React.connect(
    Next.CascaderSelect,
    Formily.React.mapProps(
      {
        dataSource: true,
      },
      mapSize,
      mapStatus
    ),
    Formily.React.mapReadPretty(PreviewText.Cascader)
  )

  var TreeSelect = Formily.React.connect(
    Next.TreeSelect,
    Formily.React.mapProps(
      {
        dataSource: true,
      },
      mapSize,
      mapStatus
    ),
    Formily.React.mapReadPretty(PreviewText.TreeSelect)
  )

  var Transfer = Formily.React.connect(
    Next.Transfer,
    Formily.React.mapProps({
      dataSource: true,
    })
  )

  var mapDateFormat = function (type) {
    var getDefaultFormat = function (props) {
      var _type = props['type'] || type
      if (_type === 'month') {
        return 'YYYY-MM'
      } else if (_type === 'year') {
        return 'YYYY'
      } else if (_type === 'week') {
        return 'YYYY-wo'
      }
      return props['showTime'] ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
    }
    return function (props) {
      var format = props['format'] || getDefaultFormat(props)
      var onChange = props.onChange
      return __assign$2(__assign$2({}, props), {
        format: format === 'YYYY-MM-DD HH:mm:ss' ? 'YYYY-MM-DD' : format,
        value: momentable(
          props.value,
          format === 'YYYY-wo' ? 'YYYY-w' : format
        ),
        onChange: function (value) {
          if (onChange) {
            onChange(formatMomentValue(value, format))
          }
        },
      })
    }
  }
  var DatePicker = Formily.React.connect(
    Next.DatePicker,
    Formily.React.mapProps(mapDateFormat(), mapSize, mapStatus),
    Formily.React.mapReadPretty(PreviewText.DatePicker)
  )
  DatePicker.RangePicker = Formily.React.connect(
    Next.DatePicker.RangePicker,
    Formily.React.mapProps(mapDateFormat(), mapSize, mapStatus),
    Formily.React.mapReadPretty(PreviewText.DateRangePicker)
  )
  DatePicker.YearPicker = Formily.React.connect(
    Next.DatePicker.YearPicker,
    Formily.React.mapProps(mapDateFormat('year'), mapSize, mapStatus),
    Formily.React.mapReadPretty(PreviewText.DatePicker)
  )
  DatePicker.MonthPicker = Formily.React.connect(
    Next.DatePicker.MonthPicker,
    Formily.React.mapProps(mapDateFormat('month'), mapSize, mapStatus),
    Formily.React.mapReadPretty(PreviewText.DatePicker)
  )
  DatePicker.WeekPicker = Formily.React.connect(
    Next.DatePicker.WeekPicker,
    Formily.React.mapProps(mapDateFormat('week'), mapSize, mapStatus),
    Formily.React.mapReadPretty(PreviewText.DatePicker)
  )

  var mapTimeFormat = function () {
    return function (props) {
      var format = props['format'] || 'HH:mm:ss'
      var onChange = props.onChange
      return __assign$2(__assign$2({}, props), {
        format: format,
        value: momentable(props.value, format),
        onChange: function (value) {
          if (onChange) {
            onChange(formatMomentValue(value, format))
          }
        },
      })
    }
  }
  var TimePicker = Formily.React.connect(
    Next.TimePicker,
    Formily.React.mapProps(mapTimeFormat(), mapSize, mapStatus),
    Formily.React.mapReadPretty(PreviewText.TimePicker)
  )

  var NumberPicker = Formily.React.connect(
    Next.NumberPicker,
    Formily.React.mapProps(mapSize, mapStatus),
    Formily.React.mapReadPretty(PreviewText.Input)
  )

  var Switch = Formily.React.connect(
    Next.Switch,
    Formily.React.mapProps(
      {
        value: 'checked',
      },
      mapSize,
      mapStatus
    )
  )

  var UPLOAD_PLACEHOLDER = [
    {
      ext: /\.docx?$/i,
      icon: '//img.alicdn.com/tfs/TB1n8jfr1uSBuNjy1XcXXcYjFXa-200-200.png',
    },
    {
      ext: /\.pptx?$/i,
      icon: '//img.alicdn.com/tfs/TB1ItgWr_tYBeNjy1XdXXXXyVXa-200-200.png',
    },
    {
      ext: /\.jpe?g$/i,
      icon: '//img.alicdn.com/tfs/TB1wrT5r9BYBeNjy0FeXXbnmFXa-200-200.png',
    },
    {
      ext: /\.pdf$/i,
      icon: '//img.alicdn.com/tfs/TB1GwD8r9BYBeNjy0FeXXbnmFXa-200-200.png',
    },
    {
      ext: /\.png$/i,
      icon: '//img.alicdn.com/tfs/TB1BHT5r9BYBeNjy0FeXXbnmFXa-200-200.png',
    },
    {
      ext: /\.eps$/i,
      icon: '//img.alicdn.com/tfs/TB1G_iGrVOWBuNjy0FiXXXFxVXa-200-200.png',
    },
    {
      ext: /\.ai$/i,
      icon: '//img.alicdn.com/tfs/TB1B2cVr_tYBeNjy1XdXXXXyVXa-200-200.png',
    },
    {
      ext: /\.gif$/i,
      icon: '//img.alicdn.com/tfs/TB1DTiGrVOWBuNjy0FiXXXFxVXa-200-200.png',
    },
    {
      ext: /\.svg$/i,
      icon: '//img.alicdn.com/tfs/TB1uUm9rY9YBuNjy0FgXXcxcXXa-200-200.png',
    },
    {
      ext: /\.xlsx?$/i,
      icon: '//img.alicdn.com/tfs/TB1any1r1OSBuNjy0FdXXbDnVXa-200-200.png',
    },
    {
      ext: /\.psd?$/i,
      icon: '//img.alicdn.com/tfs/TB1_nu1r1OSBuNjy0FdXXbDnVXa-200-200.png',
    },
    {
      ext: /\.(wav|aif|aiff|au|mp1|mp2|mp3|ra|rm|ram|mid|rmi)$/i,
      icon: '//img.alicdn.com/tfs/TB1jPvwr49YBuNjy0FfXXXIsVXa-200-200.png',
    },
    {
      ext: /\.(avi|wmv|mpg|mpeg|vob|dat|3gp|mp4|mkv|rm|rmvb|mov|flv)$/i,
      icon: '//img.alicdn.com/tfs/TB1FrT5r9BYBeNjy0FeXXbnmFXa-200-200.png',
    },
    {
      ext: /\.(zip|rar|arj|z|gz|iso|jar|ace|tar|uue|dmg|pkg|lzh|cab)$/i,
      icon: '//img.alicdn.com/tfs/TB10jmfr29TBuNjy0FcXXbeiFXa-200-200.png',
    },
    {
      ext: /\.[^.]+$/i,
      icon: '//img.alicdn.com/tfs/TB10.R4r3mTBuNjy1XbXXaMrVXa-200-200.png',
    },
  ]

  var testOpts = function (ext, options) {
    if (options && Formily.Shared.isArr(options.include)) {
      return options.include.some(function (url) {
        return ext.test(url)
      })
    }
    if (options && Formily.Shared.isArr(options.exclude)) {
      return !options.exclude.some(function (url) {
        return ext.test(url)
      })
    }
    return true
  }
  var getImageByUrl = function (url, options) {
    for (var i = 0; i < UPLOAD_PLACEHOLDER.length; i++) {
      if (
        UPLOAD_PLACEHOLDER[i].ext.test(url) &&
        testOpts(UPLOAD_PLACEHOLDER[i].ext, options)
      ) {
        return UPLOAD_PLACEHOLDER[i].icon || url
      }
    }
    return url
  }
  var getURL = function (target) {
    return (
      (target === null || target === void 0 ? void 0 : target['url']) ||
      (target === null || target === void 0 ? void 0 : target['downloadURL']) ||
      (target === null || target === void 0 ? void 0 : target['imgURL'])
    )
  }
  var getThumbURL = function (target) {
    return (
      (target === null || target === void 0 ? void 0 : target['thumbUrl']) ||
      (target === null || target === void 0 ? void 0 : target['url']) ||
      (target === null || target === void 0 ? void 0 : target['downloadURL']) ||
      (target === null || target === void 0 ? void 0 : target['imgURL'])
    )
  }
  var getSuccess = function (target) {
    return (
      (target === null || target === void 0 ? void 0 : target.success) ||
      (target === null || target === void 0 ? void 0 : target.status) ===
        'done' ||
      (target === null || target === void 0 ? void 0 : target.status) ===
        'success' ||
      (target === null || target === void 0 ? void 0 : target.state) ===
        'done' ||
      (target === null || target === void 0 ? void 0 : target.state) ===
        'success'
    )
  }
  var getErrorMessage = function (target) {
    return (
      (target === null || target === void 0 ? void 0 : target.errorMessage) ||
      (target === null || target === void 0 ? void 0 : target.errMsg) ||
      (target === null || target === void 0 ? void 0 : target.errorMsg) ||
      (target === null || target === void 0 ? void 0 : target.message) ||
      (typeof (target === null || target === void 0 ? void 0 : target.error) ===
      'string'
        ? target.error
        : '')
    )
  }
  var getState = function (target) {
    if (
      (target === null || target === void 0 ? void 0 : target.success) === false
    )
      return 'error'
    if (
      (target === null || target === void 0 ? void 0 : target.failed) === true
    )
      return 'error'
    if (target === null || target === void 0 ? void 0 : target.error)
      return 'error'
    return (
      (target === null || target === void 0 ? void 0 : target.state) ||
      (target === null || target === void 0 ? void 0 : target.status)
    )
  }
  var normalizeFileList = function (fileList) {
    if (fileList && fileList.length) {
      return fileList.map(function (_a, index) {
        var file = __rest(_a, [])
        delete file['originFileObj']
        return __assign$2(__assign$2({}, file), {
          uid: file.uid || index,
          state:
            getState(
              file === null || file === void 0 ? void 0 : file.response
            ) || getState(file),
          downloadURL:
            getURL(file) ||
            getURL(file === null || file === void 0 ? void 0 : file.response),
          imgURL: getImageByUrl(
            getThumbURL(file) ||
              getThumbURL(
                file === null || file === void 0 ? void 0 : file.response
              ),
            {
              exclude: ['.png', '.jpg', '.jpeg', '.gif'],
            }
          ),
        })
      })
    }
    return []
  }
  var useValidator = function (validator) {
    var field = Formily.React.useField()
    React.useEffect(function () {
      var dispose = Formily.Reactive.reaction(
        function () {
          return field.value
        },
        function (value) {
          var message = validator(value)
          field.setFeedback({
            type: 'error',
            code: 'UploadError',
            messages: message ? [message] : [],
          })
        }
      )
      return function () {
        dispose()
      }
    }, [])
  }
  var useUploadValidator = function (serviceErrorMessage) {
    if (serviceErrorMessage === void 0) {
      serviceErrorMessage = 'Upload Service Error'
    }
    useValidator(function (value) {
      var _a, _b
      var list = Formily.Shared.toArr(value)
      for (var i = 0; i < list.length; i++) {
        if (
          ((_a = list[i]) === null || _a === void 0 ? void 0 : _a.state) ===
          'error'
        ) {
          return (
            getErrorMessage(
              (_b = list[i]) === null || _b === void 0 ? void 0 : _b.response
            ) ||
            getErrorMessage(list[i]) ||
            serviceErrorMessage
          )
        }
      }
    })
  }
  function useUploadProps(_a) {
    var serviceErrorMessage = _a.serviceErrorMessage,
      props = __rest(_a, ['serviceErrorMessage'])
    useUploadValidator(serviceErrorMessage)
    var onChange = function (fileList) {
      var _a
      ;(_a = props.onChange) === null || _a === void 0
        ? void 0
        : _a.call(
            props,
            normalizeFileList(__spreadArray$1([], __read$1(fileList)))
          )
    }
    var formatter = function (res, file) {
      var _a
      var response =
        (_a = props === null || props === void 0 ? void 0 : props.formatter) ===
          null || _a === void 0
          ? void 0
          : _a.call(props, res, file)
      return __assign$2(
        __assign$2(__assign$2({}, res), { success: getSuccess(res) }),
        response
      )
    }
    return __assign$2(__assign$2({}, props), {
      onChange: onChange,
      formatter: formatter,
    })
  }
  var getPlaceholder = function (props) {
    if (props.shape !== 'card') {
      return React.createElement(
        Next.Button,
        null,
        React.createElement(Next.Icon, { type: 'upload' }),
        props.textContent
      )
    }
    return React.createElement(Next.Icon, {
      type: 'upload',
      style: { fontSize: 20 },
    })
  }
  var Upload = function (props) {
    return React.createElement(
      Next.Upload,
      __assign$2({ listType: 'text' }, useUploadProps(props)),
      props.children || getPlaceholder(props)
    )
  }
  Upload.Dragger = function (props) {
    return React.createElement(
      Next.Upload.Dragger,
      __assign$2({ listType: 'text' }, useUploadProps(props))
    )
  }
  Upload.Card = function (props) {
    return React.createElement(
      Next.Upload.Card,
      __assign$2({ listType: 'card' }, useUploadProps(props))
    )
  }

  var Submit = Formily.React.observer(
    function (_a) {
      var onSubmit = _a.onSubmit,
        onSubmitFailed = _a.onSubmitFailed,
        onSubmitSuccess = _a.onSubmitSuccess,
        props = __rest(_a, ['onSubmit', 'onSubmitFailed', 'onSubmitSuccess'])
      var form = Formily.React.useParentForm()
      return React.createElement(
        Next.Button,
        __assign$2(
          { htmlType: onSubmit ? 'button' : 'submit', type: 'primary' },
          props,
          {
            loading:
              props.loading !== undefined ? props.loading : form.submitting,
            onClick: function (e) {
              if (props.onClick) {
                if (props.onClick(e) === false) return
              }
              if (onSubmit) {
                form
                  .submit(onSubmit)
                  .then(onSubmitSuccess)
                  .catch(onSubmitFailed)
              }
            },
          }
        ),
        props.children
      )
    },
    {
      forwardRef: true,
    }
  )

  var Reset = function (_a) {
    var forceClear = _a.forceClear,
      validate = _a.validate,
      onResetValidateFailed = _a.onResetValidateFailed,
      onResetValidateSuccess = _a.onResetValidateSuccess,
      props = __rest(_a, [
        'forceClear',
        'validate',
        'onResetValidateFailed',
        'onResetValidateSuccess',
      ])
    var form = Formily.React.useParentForm()
    return React.createElement(
      Next.Button,
      __assign$2({}, props, {
        onClick: function (e) {
          if (props.onClick) {
            if (props.onClick(e) === false) return
          }
          form
            .reset('*', {
              forceClear: forceClear,
              validate: validate,
            })
            .then(onResetValidateSuccess)
            .catch(onResetValidateFailed)
        },
      }),
      props.children
    )
  }

  var useParentPattern = function () {
    var _a, _b
    var field = Formily.React.useField()
    return (
      ((_a = field === null || field === void 0 ? void 0 : field.parent) ===
        null || _a === void 0
        ? void 0
        : _a.pattern) ||
      ((_b = field === null || field === void 0 ? void 0 : field.form) ===
        null || _b === void 0
        ? void 0
        : _b.pattern)
    )
  }
  var useEditable = function () {
    var pattern = useParentPattern()
    var field = Formily.React.useField()
    React.useLayoutEffect(
      function () {
        if (pattern === 'editable') {
          field.setPattern('readPretty')
        }
      },
      [pattern]
    )
    return [
      field.pattern === 'editable',
      function (pyaload) {
        if (pattern !== 'editable') return
        field.setPattern(pyaload ? 'editable' : 'readPretty')
      },
    ]
  }
  var useFormItemProps = function () {
    var field = Formily.React.useField()
    if (Formily.Core.isVoidField(field)) return {}
    if (!field) return {}
    var takeMessage = function () {
      if (field.selfErrors.length) return field.selfErrors
      if (field.selfWarnings.length) return field.selfWarnings
      if (field.selfSuccesses.length) return field.selfSuccesses
    }
    return {
      feedbackStatus:
        field.validateStatus === 'validating'
          ? 'pending'
          : field.validateStatus,
      feedbackText: takeMessage(),
      extra: field.description,
    }
  }
  var Editable = Formily.React.observer(function (props) {
    var _a = __read$1(useEditable(), 2),
      editable = _a[0],
      setEditable = _a[1]
    var pattern = useParentPattern()
    var itemProps = useFormItemProps()
    var field = Formily.React.useField()
    var basePrefixCls = usePrefixCls()
    var prefixCls = usePrefixCls('formily-editable')
    var ref = React.useRef()
    var innerRef = React.useRef()
    var recover = function () {
      var _a
      if (
        ref.current &&
        !((_a = field === null || field === void 0 ? void 0 : field.errors) ===
          null || _a === void 0
          ? void 0
          : _a.length)
      ) {
        setEditable(false)
      }
    }
    var renderEditHelper = function () {
      if (editable) return
      return React.createElement(
        BaseItem,
        __assign$2({}, props, itemProps),
        pattern === 'editable' &&
          React.createElement(EditOutlinedIcon, {
            className: ''.concat(prefixCls, '-edit-btn'),
          }),
        pattern !== 'editable' &&
          React.createElement(MessageOutlinedIcon, {
            className: ''.concat(prefixCls, '-edit-btn'),
          })
      )
    }
    var renderCloseHelper = function () {
      if (!editable) return
      return React.createElement(
        BaseItem,
        __assign$2({}, props),
        React.createElement(CloseOutlinedIcon, {
          className: ''.concat(prefixCls, '-close-btn'),
        })
      )
    }
    useClickAway(function (e) {
      var target = e.target
      if (
        target === null || target === void 0
          ? void 0
          : target.closest('.'.concat(basePrefixCls, '-overlay-wrapper'))
      )
        return
      recover()
    }, innerRef)
    var onClick = function (e) {
      var target = e.target
      var close = innerRef.current.querySelector(
        '.'.concat(prefixCls, '-close-btn')
      )
      if (
        (target === null || target === void 0
          ? void 0
          : target.contains(close)) ||
        (close === null || close === void 0 ? void 0 : close.contains(target))
      ) {
        recover()
      } else if (!ref.current) {
        setTimeout(function () {
          setEditable(true)
          setTimeout(function () {
            var _a
            ;(_a = innerRef.current.querySelector('input')) === null ||
            _a === void 0
              ? void 0
              : _a.focus()
          })
        })
      }
    }
    ref.current = editable
    return React.createElement(
      'div',
      { className: prefixCls, ref: innerRef, onClick: onClick },
      React.createElement(
        'div',
        { className: ''.concat(prefixCls, '-content') },
        React.createElement(
          BaseItem,
          __assign$2({}, props, itemProps),
          props.children
        ),
        renderEditHelper(),
        renderCloseHelper()
      )
    )
  })
  Editable.Popover = Formily.React.observer(function (_a) {
    var props = __rest(_a, [])
    var field = Formily.React.useField()
    var pattern = useParentPattern()
    var _b = __read$1(React.useState(false), 2),
      visible = _b[0],
      setVisible = _b[1]
    var prefixCls = usePrefixCls('formily-editable')
    var closePopover = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var errors
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, , 2, 3])
              return [
                4 /*yield*/,
                field.form.validate(''.concat(field.address, '.*')),
              ]
            case 1:
              _a.sent()
              return [3 /*break*/, 3]
            case 2:
              errors = field.form.queryFeedbacks({
                type: 'error',
                address: ''.concat(field.address, '.*'),
              })
              if (errors === null || errors === void 0 ? void 0 : errors.length)
                return [2 /*return*/]
              setVisible(false)
              return [7 /*endfinally*/]
            case 3:
              return [2 /*return*/]
          }
        })
      })
    }
    var openPopover = function () {
      setVisible(true)
    }
    return React.createElement(
      Next.Balloon,
      __assign$2({}, props, {
        title: field.title,
        visible: visible,
        className: props.className,
        onVisibleChange: function (visible) {
          if (visible) {
            openPopover()
          } else {
            closePopover()
          }
        },
        align: 't',
        triggerType: 'click',
        closable: false,
        trigger: React.createElement(
          'div',
          { style: { display: 'inline-flex' } },
          React.createElement(
            BaseItem,
            { className: ''.concat(prefixCls, '-trigger') },
            React.createElement(
              'div',
              { className: ''.concat(prefixCls, '-content') },
              React.createElement(
                'span',
                { className: ''.concat(prefixCls, '-preview') },
                props.title || field.title
              ),
              pattern === 'editable' &&
                React.createElement(EditOutlinedIcon, {
                  className: ''.concat(prefixCls, '-edit-btn'),
                }),
              pattern !== 'editable' &&
                React.createElement(MessageOutlinedIcon, {
                  className: ''.concat(prefixCls, '-edit-btn'),
                })
            )
          )
        ),
      }),
      props.children
    )
  })

  exports.ArrayBase = ArrayBase
  exports.ArrayCards = ArrayCards
  exports.ArrayCollapse = ArrayCollapse
  exports.ArrayItems = ArrayItems
  exports.ArrayTable = ArrayTable
  exports.BaseItem = BaseItem
  exports.Cascader = Cascader
  exports.Checkbox = Checkbox
  exports.DatePicker = DatePicker
  exports.Editable = Editable
  exports.Form = Form
  exports.FormButtonGroup = FormButtonGroup
  exports.FormCollapse = FormCollapse
  exports.FormDialog = FormDialog
  exports.FormDrawer = FormDrawer
  exports.FormGrid = FormGrid
  exports.FormItem = FormItem
  exports.FormLayout = FormLayout
  exports.FormLayoutDeepContext = FormLayoutDeepContext
  exports.FormLayoutShallowContext = FormLayoutShallowContext
  exports.FormStep = FormStep
  exports.FormTab = FormTab
  exports.GridColumn = GridColumn
  exports.Input = Input
  exports.NumberPicker = NumberPicker
  exports.Password = Password
  exports.PreviewText = PreviewText
  exports.Radio = Radio
  exports.Reset = Reset
  exports.Select = Select
  exports.Space = Space
  exports.Submit = Submit
  exports.Switch = Switch
  exports.TimePicker = TimePicker
  exports.Transfer = Transfer
  exports.TreeSelect = TreeSelect
  exports.Upload = Upload
  exports.createFormGrid = createFormGrid
  exports.useFormDeepLayout = useFormDeepLayout
  exports.useFormGrid = useFormGrid
  exports.useFormLayout = useFormLayout
  exports.useFormShallowLayout = useFormShallowLayout
  exports.useGridColumn = useGridColumn
  exports.useGridSpan = useGridSpan

  Object.defineProperty(exports, '__esModule', { value: true })
})
//# sourceMappingURL=formily.next.umd.development.js.map
