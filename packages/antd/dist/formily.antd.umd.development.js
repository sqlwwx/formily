;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('react-is'))
    : typeof define === 'function' && define.amd
    ? define('formily.antd', ['exports', 'react-is'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        ((global.Formily = global.Formily || {}), (global.Formily.Antd = {}))
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
  function omit(obj, keysToOmit) {
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
                    omit(this.props, omittedProps)
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
                    omit(this.props, omittedProps$1)
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
    var getPrefixCls = React.useContext(
      Antd.ConfigProvider.ConfigContext
    ).getPrefixCls
    return getPrefixCls(
      tag,
      props === null || props === void 0 ? void 0 : props.prefixCls
    )
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

  var loading = function (title, processor) {
    if (title === void 0) {
      title = 'Loading...'
    }
    return __awaiter(void 0, void 0, void 0, function () {
      var hide, loading
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            hide = null
            loading = setTimeout(function () {
              hide = Antd.message.loading(title)
            }, 100)
            _a.label = 1
          case 1:
            _a.trys.push([1, , 3, 4])
            return [4 /*yield*/, processor()]
          case 2:
            return [2 /*return*/, _a.sent()]
          case 3:
            hide === null || hide === void 0 ? void 0 : hide()
            clearTimeout(loading)
            return [7 /*endfinally*/]
          case 4:
            return [2 /*return*/]
        }
      })
    })
  }

  var pickDataProps = function (props) {
    if (props === void 0) {
      props = {}
    }
    var results = {}
    for (var key in props) {
      if (key.indexOf('data-') > -1) {
        results[key] = props[key]
      }
    }
    return results
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
      icons.MenuOutlined,
      __assign$2({}, props, {
        className: classnames(
          ''.concat(prefixCls, '-sort-handle'),
          props.className
        ),
        style: __assign$2({}, props.style),
      })
    )
  })
  ArrayBase.SortHandle = function (props) {
    var _a
    var array = useArray()
    if (!array) return null
    if (
      ((_a = array.field) === null || _a === void 0 ? void 0 : _a.pattern) !==
      'editable'
    )
      return null
    return React.createElement(SortHandle, __assign$2({}, props))
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
      Antd.Button,
      __assign$2({ type: 'dashed', block: true }, props, {
        disabled:
          (_c = array.field) === null || _c === void 0 ? void 0 : _c.disabled,
        className: classnames(
          ''.concat(prefixCls, '-addition'),
          props.className
        ),
        onClick: function (e) {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l
          if (
            (_a = array.props) === null || _a === void 0 ? void 0 : _a.disabled
          )
            return
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
        icon: React.createElement(icons.PlusOutlined, null),
      }),
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
      icons.DeleteOutlined,
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
  ArrayBase.Copy = React.forwardRef(function (props, ref) {
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
      icons.CopyOutlined,
      __assign$2({}, props, {
        className: classnames(''.concat(prefixCls, '-copy'), props.className),
        ref: ref,
        onClick: function (e) {
          var _a, _b, _c, _d, _e
          if (
            (_a = array.props) === null || _a === void 0 ? void 0 : _a.disabled
          )
            return
          e.stopPropagation()
          ;(_c =
            (_b = array.field) === null || _b === void 0 ? void 0 : _b.copy) ===
            null || _c === void 0
            ? void 0
            : _c.call(_b, index)
          ;(_e =
            (_d = array.props) === null || _d === void 0
              ? void 0
              : _d.onCopy) === null || _e === void 0
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
      icons.DownOutlined,
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
      icons.UpOutlined,
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
    target.Copy = ArrayBase.Copy
    target.MoveDown = ArrayBase.MoveDown
    target.MoveUp = ArrayBase.MoveUp
    target.useArray = ArrayBase.useArray
    target.useIndex = ArrayBase.useIndex
    target.useRecord = ArrayBase.useRecord
    return target
  }

  var SortableRow = sortableElement(function (props) {
    return React.createElement('tr', __assign$2({}, props))
  })
  var SortableBody = sortableContainer(function (props) {
    return React.createElement('tbody', __assign$2({}, props))
  })
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
    if (!schema) throw new Error('can not found schema object')
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
          render: function (value, record) {
            var index = dataSource.indexOf(record)
            var children = React.createElement(
              ArrayBase.Item,
              { index: index, record: record },
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
  var StatusSelect$1 = Formily.React.observer(function (props) {
    var _a
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
      (_a = props.options) === null || _a === void 0
        ? void 0
        : _a.map(function (_a) {
            var label = _a.label,
              value = _a.value
            var hasError = errors.some(function (_a) {
              var address = _a.address
              var currentIndex = parseIndex(address)
              var startIndex = (value - 1) * props.pageSize
              var endIndex = value * props.pageSize
              return currentIndex >= startIndex && currentIndex <= endIndex
            })
            return {
              label: hasError
                ? React.createElement(Antd.Badge, { dot: true }, label)
                : label,
              value: value,
            }
          })
    var width =
      String(options === null || options === void 0 ? void 0 : options.length)
        .length * 15
    return React.createElement(Antd.Select, {
      value: props.value,
      onChange: props.onChange,
      options: options,
      virtual: true,
      style: {
        width: width < 60 ? 60 : width,
      },
      className: classnames(''.concat(prefixCls, '-status-select'), {
        'has-error':
          errors === null || errors === void 0 ? void 0 : errors.length,
      }),
    })
  })
  var ArrayTablePagination = function (props) {
    var _a
    var _b = __read$1(React.useState(1), 2),
      current = _b[0],
      setCurrent = _b[1]
    var prefixCls = usePrefixCls('formily-array-table')
    var pageSize = props.pageSize || 10
    var size = props.size || 'default'
    var dataSource = props.dataSource || []
    var startIndex = (current - 1) * pageSize
    var endIndex = startIndex + pageSize - 1
    var total =
      (dataSource === null || dataSource === void 0
        ? void 0
        : dataSource.length) || 0
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
        React.createElement(
          Antd.Space,
          null,
          React.createElement(StatusSelect$1, {
            value: current,
            pageSize: pageSize,
            onChange: handleChange,
            options: pages,
            notFoundContent: false,
          }),
          React.createElement(
            Antd.Pagination,
            __assign$2({}, props, {
              pageSize: pageSize,
              current: current,
              total: dataSource.length,
              size: size,
              showSizeChanger: false,
              onChange: handleChange,
            })
          )
        )
      )
    }
    return React.createElement(
      React.Fragment,
      null,
      (_a = props.children) === null || _a === void 0
        ? void 0
        : _a.call(
            props,
            dataSource === null || dataSource === void 0
              ? void 0
              : dataSource.slice(startIndex, endIndex + 1),
            renderPagination()
          )
    )
  }
  var RowComp = function (props) {
    return React.createElement(
      SortableRow,
      __assign$2({ index: props['data-row-key'] || 0 }, props)
    )
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
    var defaultRowKey = function (record) {
      return dataSource.indexOf(record)
    }
    var addTdStyles = function (node) {
      var helper = document.body.querySelector(
        '.'.concat(prefixCls, '-sort-helper')
      )
      if (helper) {
        var tds_1 = node.querySelectorAll('td')
        requestAnimationFrame(function () {
          helper.querySelectorAll('td').forEach(function (td, index) {
            if (tds_1[index]) {
              td.style.width = getComputedStyle(tds_1[index]).width
            }
          })
        })
      }
    }
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
              Antd.Table,
              __assign$2(
                { size: 'small', bordered: true, rowKey: defaultRowKey },
                props,
                {
                  onChange: function () {},
                  pagination: false,
                  columns: columns,
                  dataSource: dataSource,
                  components: {
                    body: {
                      wrapper: function (props) {
                        return React.createElement(
                          SortableBody,
                          __assign$2(
                            {
                              useDragHandle: true,
                              lockAxis: 'y',
                              helperClass: ''.concat(prefixCls, '-sort-helper'),
                              helperContainer: function () {
                                var _a
                                return (_a = ref.current) === null ||
                                  _a === void 0
                                  ? void 0
                                  : _a.querySelector('tbody')
                              },
                              onSortStart: function (_a) {
                                var node = _a.node
                                addTdStyles(node)
                              },
                              onSortEnd: function (_a) {
                                var oldIndex = _a.oldIndex,
                                  newIndex = _a.newIndex
                                field.move(oldIndex, newIndex)
                              },
                            },
                            props
                          )
                        )
                      },
                      row: RowComp,
                    },
                  },
                }
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

  var ArrayTabs = Formily.React.observer(function (props) {
    var field = Formily.React.useField()
    var schema = Formily.React.useFieldSchema()
    var _a = __read$1(React.useState('tab-0'), 2),
      activeKey = _a[0],
      setActiveKey = _a[1]
    var value = Array.isArray(field.value) ? field.value : []
    var dataSource = (
      value === null || value === void 0 ? void 0 : value.length
    )
      ? value
      : [{}]
    var onEdit = function (targetKey, type) {
      var _a, _b
      if (type == 'add') {
        var id = dataSource.length
        if (
          (_a = field === null || field === void 0 ? void 0 : field.value) ===
            null || _a === void 0
            ? void 0
            : _a.length
        ) {
          field.push(null)
        } else {
          field.push(null, null)
        }
        setActiveKey('tab-'.concat(id))
      } else if (type == 'remove') {
        var index =
          (_b = targetKey.match(/-(\d+)/)) === null || _b === void 0
            ? void 0
            : _b[1]
        field.remove(Number(index))
        if (activeKey === targetKey) {
          setActiveKey('tab-'.concat(index - 1))
        }
      }
    }
    var badgedTab = function (index) {
      var tab = ''.concat(field.title || 'Untitled', ' ').concat(index + 1)
      var path = field.address.concat(index)
      var errors = field.form.queryFeedbacks({
        type: 'error',
        address: ''.concat(path, '.**'),
      })
      if (errors.length) {
        return React.createElement(
          Antd.Badge,
          { size: 'small', className: 'errors-badge', count: errors.length },
          tab
        )
      }
      return tab
    }
    return React.createElement(
      Antd.Tabs,
      __assign$2({}, props, {
        activeKey: activeKey,
        onChange: function (key) {
          setActiveKey(key)
        },
        type: 'editable-card',
        onEdit: onEdit,
      }),
      dataSource === null || dataSource === void 0
        ? void 0
        : dataSource.map(function (item, index) {
            var items = Array.isArray(schema.items)
              ? schema.items[index]
              : schema.items
            var key = 'tab-'.concat(index)
            return React.createElement(
              Antd.Tabs.TabPane,
              { key: key, closable: index !== 0, tab: badgedTab(index) },
              React.createElement(Formily.React.RecursionField, {
                schema: items,
                name: index,
              })
            )
          })
    )
  })

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
  var calcBreakpointIndex$1 = function (breakpoints, width) {
    if (Array.isArray(breakpoints)) {
      for (var i = 0; i < breakpoints.length; i++) {
        if (width <= breakpoints[i]) {
          return i
        }
      }
    }
    return -1
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
  var factor$1 = function (value, grid) {
    return isValid(value) ? calcFactor$1(value, grid.breakpoint) : value
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
        return calcBreakpointIndex$1(this.options.breakpoints, this.width)
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'maxWidth', {
      get: function () {
        var _a
        return (_a = factor$1(this.options.maxWidth, this)) !== null &&
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
        return (_a = factor$1(this.options.minWidth, this)) !== null &&
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
        return (_a = factor$1(this.options.maxColumns, this)) !== null &&
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
        return (_a = factor$1(this.options.minColumns, this)) !== null &&
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
        return (_a = factor$1(this.options.rowGap, this)) !== null &&
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
        return (_a = factor$1(this.options.columnGap, this)) !== null &&
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
        return (_a = factor$1(this.options.colWrap, this)) !== null &&
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

  var calcBreakpointIndex = function (breakpoints, width) {
    for (var i = 0; i < breakpoints.length; i++) {
      if (width <= breakpoints[i]) {
        return i
      }
    }
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
  var factor = function (value, breakpointIndex) {
    return Formily.Shared.isValid(value)
      ? calcFactor(value, breakpointIndex)
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
    var breakpointIndex = calcBreakpointIndex(breakpoints, clientWidth)
    return __assign$2(
      {
        layout: factor(layout, breakpointIndex),
        labelAlign: factor(labelAlign, breakpointIndex),
        wrapperAlign: factor(wrapperAlign, breakpointIndex),
        labelCol: factor(labelCol, breakpointIndex),
        wrapperCol: factor(wrapperCol, breakpointIndex),
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
      prefixCls = _a.prefixCls,
      className = _a.className,
      style = _a.style,
      otherProps = __rest(_a, [
        'shallow',
        'children',
        'prefixCls',
        'className',
        'style',
      ])
    var _c = useResponsiveFormLayout(otherProps),
      ref = _c.ref,
      props = _c.props
    var deepLayout = useFormDeepLayout()
    var formPrefixCls = usePrefixCls('form', { prefixCls: prefixCls })
    var layoutPrefixCls = usePrefixCls('formily-layout', {
      prefixCls: prefixCls,
    })
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
  var GridColumn$1 = Formily.React.observer(function (_a) {
    var gridSpan = _a.gridSpan,
      children = _a.children,
      props = __rest(_a, ['gridSpan', 'children'])
    return React.createElement(
      'div',
      __assign$2({}, props, { style: props.style, 'data-grid-span': gridSpan }),
      children
    )
  })
  GridColumn$1.defaultProps = {
    gridSpan: 1,
  }
  FormGrid.createFormGrid = createFormGrid
  FormGrid.useGridSpan = useGridSpan
  FormGrid.useGridColumn = useGridColumn
  FormGrid.useFormGrid = useFormGrid
  FormGrid.GridColumn = GridColumn$1

  var GridColumn = FormGrid.GridColumn
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
  var isCopyComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Copy')) > -1
    )
  }
  var isOperationComponent$1 = function (schema) {
    return (
      isAdditionComponent$2(schema) ||
      isRemoveComponent$1(schema) ||
      isMoveDownComponent$1(schema) ||
      isMoveUpComponent$1(schema) ||
      isCopyComponent(schema)
    )
  }
  var StatusSelect = Formily.React.observer(function (props) {
    var _a
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
      (_a = props.options) === null || _a === void 0
        ? void 0
        : _a.map(function (_a) {
            var label = _a.label,
              value = _a.value
            var hasError = errors.some(function (_a) {
              var address = _a.address
              var currentIndex = parseIndex(address)
              var startIndex = (value - 1) * props.pageSize
              var endIndex = value * props.pageSize
              return currentIndex >= startIndex && currentIndex <= endIndex
            })
            return {
              label: hasError
                ? React.createElement(Antd.Badge, { dot: true }, label)
                : label,
              value: value,
            }
          })
    var width =
      String(options === null || options === void 0 ? void 0 : options.length)
        .length * 15
    return React.createElement(Antd.Select, {
      value: props.value,
      onChange: props.onChange,
      options: options,
      virtual: true,
      style: {
        width: width < 60 ? 60 : width,
      },
      className: classnames(''.concat(prefixCls, '-status-select'), {
        'has-error':
          errors === null || errors === void 0 ? void 0 : errors.length,
      }),
    })
  })
  var ArrayCardsPagination = function (props) {
    var _a
    var _b = __read$1(React.useState(1), 2),
      current = _b[0],
      setCurrent = _b[1]
    var prefixCls = usePrefixCls('formily-array-cards')
    var pageSize = props.pageSize || 10
    var size = props.size || 'default'
    var dataSource = props.dataSource || []
    var startIndex = (current - 1) * pageSize
    var endIndex = startIndex + pageSize - 1
    var total =
      (dataSource === null || dataSource === void 0
        ? void 0
        : dataSource.length) || 0
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
        React.createElement(
          Antd.Space,
          null,
          React.createElement(StatusSelect, {
            value: current,
            pageSize: pageSize,
            onChange: handleChange,
            options: pages,
            notFoundContent: false,
          }),
          React.createElement(
            Antd.Pagination,
            __assign$2({}, props, {
              pageSize: pageSize,
              current: current,
              total: dataSource.length,
              size: size,
              showSizeChanger: false,
              onChange: handleChange,
            })
          )
        )
      )
    }
    return React.createElement(
      React.Fragment,
      null,
      (_a = props.children) === null || _a === void 0
        ? void 0
        : _a.call(
            props,
            dataSource === null || dataSource === void 0
              ? void 0
              : dataSource.slice(startIndex, endIndex + 1),
            renderPagination()
          )
    )
  }
  var ArrayCards = Formily.React.observer(function (props) {
    var field = Formily.React.useField()
    var schema = Formily.React.useFieldSchema()
    var dataSource = Array.isArray(field.value) ? field.value : []
    var pagination = Formily.Shared.isBool(props.pagination)
      ? {}
      : props.pagination
    var prefixCls = usePrefixCls('formily-array-cards', props)
    if (!schema) throw new Error('can not found schema object')
    var defaultRowKey = function (record) {
      return dataSource.indexOf(record)
    }
    var renderItems = function (dataSource) {
      return dataSource === null || dataSource === void 0
        ? void 0
        : dataSource.map(function (item) {
            var index = defaultRowKey(item)
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
                GridColumn,
                null,
                React.createElement(
                  Antd.Card,
                  __assign$2({}, props, {
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
    return React.createElement(
      React.Fragment,
      null,
      !(dataSource === null || dataSource === void 0
        ? void 0
        : dataSource.length) &&
        React.createElement(
          Antd.Card,
          __assign$2({}, props, {
            onChange: function () {},
            className: classnames(
              ''.concat(prefixCls, '-item'),
              props.className
            ),
            title: props.title || field.title,
          }),
          React.createElement(Antd.Empty, null)
        ),
      React.createElement(
        ArrayCardsPagination,
        __assign$2({}, pagination, { dataSource: dataSource }),
        function (ds, pager) {
          return React.createElement(
            ArrayBase,
            null,
            React.createElement(
              FormGrid,
              __assign$2({}, props.grid || { maxColumns: 1 }),
              renderItems(ds)
            ),
            React.createElement(
              'div',
              { style: { marginTop: 5, marginBottom: 5 } },
              pager
            ),
            renderAddition()
          )
        }
      )
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
  var takeDefaultActiveKeys = function (
    dataSourceLength,
    defaultOpenPanelCount
  ) {
    if (dataSourceLength < defaultOpenPanelCount) return range(dataSourceLength)
    return range(defaultOpenPanelCount)
  }
  var insertActiveKeys = function (activeKeys, index) {
    if (activeKeys.length <= index) return activeKeys.concat(index)
    return activeKeys.reduce(function (buf, key) {
      if (key < index) return buf.concat(key)
      if (key === index) return buf.concat([key, key + 1])
      return buf.concat(key + 1)
    }, [])
  }
  var ArrayCollapse = Formily.React.observer(function (props) {
    var field = Formily.React.useField()
    var dataSource = Array.isArray(field.value) ? field.value : []
    var _a = __read$1(
        React.useState(
          takeDefaultActiveKeys(dataSource.length, props.defaultOpenPanelCount)
        ),
        2
      ),
      activeKeys = _a[0],
      setActiveKeys = _a[1]
    var schema = Formily.React.useFieldSchema()
    var prefixCls = usePrefixCls('formily-array-collapse', props)
    React.useEffect(
      function () {
        if (!field.modified && dataSource.length) {
          setActiveKeys(
            takeDefaultActiveKeys(
              dataSource.length,
              props.defaultOpenPanelCount
            )
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
        Antd.Card,
        {
          className: classnames(''.concat(prefixCls, '-item'), props.className),
        },
        React.createElement(Antd.Empty, null)
      )
    }
    var renderItems = function () {
      return React.createElement(
        Antd.Collapse,
        __assign$2({}, props, {
          activeKey: activeKeys,
          onChange: function (keys) {
            return setActiveKeys(Formily.Shared.toArr(keys).map(Number))
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
          var header = function () {
            var header = ''.concat(
              (panelProps === null || panelProps === void 0
                ? void 0
                : panelProps.header) ||
                props.header ||
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
                    Antd.Badge,
                    {
                      size: 'small',
                      className: 'errors-badge',
                      count: errors.length,
                    },
                    header
                  )
                : header
            )
          }
          var extra = React.createElement(
            ArrayBase.Item,
            { index: index, record: item },
            React.createElement(Formily.React.RecursionField, {
              schema: items,
              name: index,
              filterProperties: function (schema) {
                if (!isOperationComponent(schema)) return false
                return true
              },
              onlyRenderProperties: true,
            }),
            props === null || props === void 0 ? void 0 : props.extra
          )
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
            Antd.Collapse.Panel,
            __assign$2({}, props, panelProps, {
              forceRender: true,
              key: index,
              header: header(),
              extra: extra,
            }),
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
          setActiveKeys(insertActiveKeys(activeKeys, index))
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
    if (!schema) throw new Error('can not found schema object')
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
      if (visible === void 0) {
        visible = true
      }
      return React.createElement(Formily.React.Observer, null, function () {
        return React.createElement(
          Antd.Modal,
          __assign$2({}, modal, {
            visible: visible,
            confirmLoading: env.form.submitting,
            onCancel: function (e) {
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
            onOk: function (e) {
              return __awaiter(_this, void 0, void 0, function () {
                var _a
                return __generator(this, function (_b) {
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
                  return [2 /*return*/]
                })
              })
            },
          }),
          React.createElement(
            Formily.React.FormProvider,
            { form: env.form },
            React.createElement(DialogContent, null)
          )
        )
      })
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
    var prefixCls = usePrefixCls('modal')
    React.useLayoutEffect(function () {
      var _a
      var content =
        (_a = ref.current) === null || _a === void 0
          ? void 0
          : _a.closest('.'.concat(prefixCls, '-content'))
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
      openMiddlewares: [],
      form: null,
      promise: null,
    }
    var root = createPortalRoot(env.host, id)
    var props = getDrawerProps(title)
    var drawer = __assign$2(__assign$2({ width: '40%' }, props), {
      onClose: function (e) {
        var _a
        if (
          ((_a =
            props === null || props === void 0 ? void 0 : props.onClose) ===
            null || _a === void 0
            ? void 0
            : _a.call(props, e)) !== false
        ) {
          formDrawer.close()
        }
      },
      afterVisibleChange: function (visible) {
        var _a
        ;(_a =
          props === null || props === void 0
            ? void 0
            : props.afterVisibleChange) === null || _a === void 0
          ? void 0
          : _a.call(props, visible)
        if (visible) return
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
        Antd.Drawer,
        __assign$2({}, drawer, { visible: visible }),
        React.createElement(
          Formily.React.FormProvider,
          { form: env.form },
          React.createElement(DrawerContent, null)
        )
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
          : _a.closest('.'.concat(prefixCls, '-wrapper-body'))
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
  FormDrawer.Footer = DrawerFooter
  FormDrawer.Portal = createPortalProvider('form-drawer')

  var PlaceholderContext = React.createContext('N/A')
  var Placeholder = PlaceholderContext.Provider
  var usePlaceholder = function (value) {
    var placeholder = React.useContext(PlaceholderContext) || 'N/A'
    return Formily.Shared.isValid(value) && value !== '' ? value : placeholder
  }
  var Input$1 = function (props) {
    var prefixCls = usePrefixCls('form-text', props)
    return React.createElement(
      Antd.Space,
      { className: classnames(prefixCls, props.className), style: props.style },
      props.addonBefore,
      props.prefix,
      usePlaceholder(props.value),
      props.suffix,
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
          (_b = props === null || props === void 0 ? void 0 : props.options) ===
            null || _b === void 0
            ? void 0
            : _b.length
        )
      ? props.options
      : []
    var placeholder = usePlaceholder()
    var getSelected = function () {
      var value = props.value
      if (props.mode === 'multiple' || props.mode === 'tags') {
        if (props.labelInValue) {
          return Formily.Shared.isArr(value) ? value : []
        } else {
          return Formily.Shared.isArr(value)
            ? value.map(function (val) {
                return { label: val, value: val }
              })
            : []
        }
      } else {
        if (props.labelInValue) {
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
        return React.createElement(Antd.Tag, { key: key }, getLabel(item))
      })
    }
    return React.createElement(
      'div',
      { className: classnames(prefixCls, props.className), style: props.style },
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
          (_b = props === null || props === void 0 ? void 0 : props.options) ===
            null || _b === void 0
            ? void 0
            : _b.length
        )
      ? props.options
      : []
    var getSelected = function () {
      var value = props.value
      if (props.multiple) {
        if (props.labelInValue) {
          return Formily.Shared.isArr(value) ? value : []
        } else {
          return Formily.Shared.isArr(value)
            ? value.map(function (val) {
                return { label: val, value: val }
              })
            : []
        }
      } else {
        if (props.labelInValue) {
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
        return React.createElement(Antd.Tag, null, placeholder)
      return selected.map(function (_a, key) {
        var value = _a.value,
          label = _a.label
        return React.createElement(
          Antd.Tag,
          { key: key },
          findLabel(value, dataSource) || label || placeholder
        )
      })
    }
    return React.createElement(
      'div',
      { className: classnames(prefixCls, props.className), style: props.style },
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
          (_b = props === null || props === void 0 ? void 0 : props.options) ===
            null || _b === void 0
            ? void 0
            : _b.length
        )
      ? props.options
      : []
    var getSelected = function () {
      return Formily.Shared.isArr(props.value) ? props.value : []
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
      ) {
        return placeholder
      }
      return selected
        .map(function (value) {
          return findLabel(value, dataSource) || placeholder
        })
        .join('/')
    }
    return React.createElement(
      'div',
      { className: classnames(prefixCls, props.className), style: props.style },
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
      { className: classnames(prefixCls, props.className), style: props.style },
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
      { className: classnames(prefixCls, props.className), style: props.style },
      getLabels()
    )
  }
  var TimeRangePicker = function (props) {
    var placeholder = usePlaceholder()
    var prefixCls = usePrefixCls('form-text', props)
    var getLabels = function () {
      var labels = formatMomentValue(props.value, props.format, placeholder)
      return Formily.Shared.isArr(labels) ? labels.join('~') : labels
    }
    return React.createElement(
      'div',
      { className: classnames(prefixCls, props.className), style: props.style },
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
  Text.TimeRangePicker = TimeRangePicker
  Text.Placeholder = Placeholder
  Text.usePlaceholder = usePlaceholder
  var PreviewText = Text

  var Form = function (_a) {
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
          : React.createElement(icons.QuestionCircleOutlined, null),
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
    error: React.createElement(icons.CloseCircleOutlined, null),
    success: React.createElement(icons.CheckCircleOutlined, null),
    warning: React.createElement(icons.ExclamationCircleOutlined, null),
  }
  var BaseItem = function (_a) {
    var _b, _c, _d, _e, _f
    var children = _a.children,
      props = __rest(_a, ['children'])
    var _g = __read$1(React.useState(false), 2),
      active = _g[0],
      setActive = _g[1]
    var formLayout = useFormItemLayout(props)
    var _h = useOverflow(),
      containerRef = _h.containerRef,
      contentRef = _h.contentRef,
      overflow = _h.overflow
    var label = formLayout.label,
      style = formLayout.style,
      layout = formLayout.layout,
      _j = formLayout.colon,
      colon = _j === void 0 ? true : _j,
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
      _k = formLayout.bordered,
      bordered = _k === void 0 ? true : _k,
      labelWidth = formLayout.labelWidth,
      wrapperWidth = formLayout.wrapperWidth,
      labelCol = formLayout.labelCol,
      wrapperCol = formLayout.wrapperCol,
      labelAlign = formLayout.labelAlign,
      _l = formLayout.wrapperAlign,
      wrapperAlign = _l === void 0 ? 'left' : _l,
      size = formLayout.size,
      labelWrap = formLayout.labelWrap,
      wrapperWrap = formLayout.wrapperWrap,
      tooltipLayout = formLayout.tooltipLayout,
      tooltip = formLayout.tooltip,
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
    var formatChildren =
      feedbackLayout === 'popover'
        ? React.createElement(
            Antd.Popover,
            {
              autoAdjustOverflow: true,
              placement: 'top',
              content: React.createElement(
                'div',
                {
                  className: classnames(
                    ((_b = {}),
                    (_b[
                      ''.concat(prefixCls, '-').concat(feedbackStatus, '-help')
                    ] = !!feedbackStatus),
                    (_b[''.concat(prefixCls, '-help')] = true),
                    _b)
                  ),
                },
                ICON_MAP[feedbackStatus],
                ' ',
                feedbackText
              ),
              visible: !!feedbackText,
            },
            children
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
          className: ''.concat(prefixCls, '-label-content'),
          ref: containerRef,
        },
        asterisk &&
          React.createElement(
            'span',
            { className: ''.concat(prefixCls, '-asterisk') },
            '*'
          ),
        React.createElement('label', { ref: contentRef }, label)
      )
      if ((tooltipLayout === 'text' && tooltip) || overflow) {
        return React.createElement(
          Antd.Tooltip,
          {
            placement: 'top',
            align: { offset: [0, 10] },
            title: getOverflowTooltip(),
          },
          labelChildren
        )
      }
      return labelChildren
    }
    var renderTooltipIcon = function () {
      if (tooltip && tooltipLayout === 'icon' && !overflow) {
        return React.createElement(
          'span',
          { className: ''.concat(prefixCls, '-label-tooltip-icon') },
          React.createElement(
            Antd.Tooltip,
            { placement: 'top', align: { offset: [0, 2] }, title: tooltip },
            tooltipIcon
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
            { className: ''.concat(prefixCls, '-colon') },
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
          ((_c = {}),
          (_c[''.concat(prefixCls)] = true),
          (_c[''.concat(prefixCls, '-layout-').concat(layout)] = true),
          (_c[''.concat(prefixCls, '-').concat(feedbackStatus)] =
            !!feedbackStatus),
          (_c[''.concat(prefixCls, '-feedback-has-text')] = !!feedbackText),
          (_c[''.concat(prefixCls, '-size-').concat(size)] = !!size),
          (_c[
            ''.concat(prefixCls, '-feedback-layout-').concat(feedbackLayout)
          ] = !!feedbackLayout),
          (_c[''.concat(prefixCls, '-fullness')] =
            !!fullness || !!inset || !!feedbackIcon),
          (_c[''.concat(prefixCls, '-inset')] = !!inset),
          (_c[''.concat(prefixCls, '-active')] = active),
          (_c[''.concat(prefixCls, '-inset-active')] = !!inset && active),
          (_c[''.concat(prefixCls, '-label-align-').concat(labelAlign)] = true),
          (_c[
            ''.concat(prefixCls, '-control-align-').concat(wrapperAlign)
          ] = true),
          (_c[''.concat(prefixCls, '-label-wrap')] = !!labelWrap),
          (_c[''.concat(prefixCls, '-control-wrap')] = !!wrapperWrap),
          (_c[''.concat(prefixCls, '-bordered-none')] =
            bordered === false || !!inset || !!feedbackIcon),
          (_c[props.className] = !!props.className),
          _c)
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
            ((_d = {}),
            (_d[''.concat(prefixCls, '-control')] = true),
            (_d[''.concat(prefixCls, '-item-col-').concat(wrapperCol)] =
              enableCol && !!wrapperCol && label),
            _d)
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
                ((_e = {}),
                (_e[''.concat(prefixCls, '-control-content-component')] = true),
                (_e[
                  ''.concat(
                    prefixCls,
                    '-control-content-component-has-feedback-icon'
                  )
                ] = !!feedbackIcon),
                _e)
              ),
            },
            React.createElement(
              FormLayoutShallowContext.Provider,
              { value: undefined },
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
                ((_f = {}),
                (_f[''.concat(prefixCls, '-').concat(feedbackStatus, '-help')] =
                  !!feedbackStatus),
                (_f[''.concat(prefixCls, '-help')] = true),
                (_f[''.concat(prefixCls, '-help-enter')] = true),
                (_f[''.concat(prefixCls, '-help-enter-active')] = true),
                _f)
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
  FormItem.BaseItem = BaseItem

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
    var next = Formily.Reactive.action.bound(function () {
      if (formStep.allowNext) {
        setDisplay(formStep.current + 1)
        formStep.setCurrent(formStep.current + 1)
      }
    })
    var back = Formily.Reactive.action.bound(function () {
      if (formStep.allowBack) {
        setDisplay(formStep.current - 1)
        formStep.setCurrent(formStep.current - 1)
      }
    })
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
          Antd.Steps,
          __assign$2({}, props, {
            style: __assign$2({ marginBottom: 10 }, props.style),
            current: current,
          }),
          steps.map(function (_a, key) {
            var props = _a.props
            return React.createElement(
              Antd.Steps.Step,
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
          Antd.Badge,
          { size: 'small', className: 'errors-badge', count: errors.length },
          props.tab
        )
      }
      return props.tab
    }
    return React.createElement(
      Antd.Tabs,
      __assign$2({}, props, {
        className: classnames(prefixCls, props.className),
        activeKey: activeKey,
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
      }),
      tabs.map(function (_a, key) {
        var props = _a.props,
          schema = _a.schema,
          name = _a.name
        return React.createElement(
          Antd.Tabs.TabPane,
          __assign$2({ key: key }, props, {
            tab: badgedTab(name, props),
            forceRender: true,
          }),
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
      var _a, _b
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
              key:
                ((_b =
                  schema === null || schema === void 0
                    ? void 0
                    : schema['x-component-props']) === null || _b === void 0
                  ? void 0
                  : _b.key) || name,
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
          formCollapse.activeKeys = ''
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
    var takeActiveKeys = function () {
      var _a
      if (props.activeKey) return props.activeKey
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
          Antd.Badge,
          { size: 'small', className: 'errors-badge', count: errors.length },
          props.header
        )
      }
      return props.header
    }
    return React.createElement(
      Antd.Collapse,
      __assign$2({}, props, {
        className: classnames(prefixCls, props.className),
        activeKey: takeActiveKeys(),
        onChange: function (key) {
          var _a, _b
          ;(_a =
            props === null || props === void 0 ? void 0 : props.onChange) ===
            null || _a === void 0
            ? void 0
            : _a.call(props, key)
          ;(_b =
            _formCollapse === null || _formCollapse === void 0
              ? void 0
              : _formCollapse.setActiveKeys) === null || _b === void 0
            ? void 0
            : _b.call(_formCollapse, key)
        },
      }),
      panels.map(function (_a, index) {
        var props = _a.props,
          schema = _a.schema,
          name = _a.name
        return React.createElement(
          Antd.Collapse.Panel,
          __assign$2({ key: index }, props, {
            header: badgedHeader(name, props),
            forceRender: true,
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
      Antd.Space,
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
        ? React.createElement(Antd.Space, { size: gutter }, props.children)
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
    Antd.Input,
    Formily.React.mapProps(function (props, field) {
      return __assign$2(__assign$2({}, props), {
        suffix: React.createElement(
          'span',
          null,
          (field === null || field === void 0 ? void 0 : field['loading']) ||
            (field === null || field === void 0 ? void 0 : field['validating'])
            ? React.createElement(icons.LoadingOutlined, null)
            : props.suffix
        ),
      })
    }),
    Formily.React.mapReadPretty(PreviewText.Input)
  )
  Input.TextArea = Formily.React.connect(
    Antd.Input.TextArea,
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

  var Password = Formily.React.connect(function (props) {
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
        Antd.Input.Password,
        __assign$2({}, others, { value: value })
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
                style: __assign$2(__assign$2({}, blockStyle), { left: '20%' }),
              }),
              React.createElement('div', {
                style: __assign$2(__assign$2({}, blockStyle), { left: '40%' }),
              }),
              React.createElement('div', {
                style: __assign$2(__assign$2({}, blockStyle), { left: '60%' }),
              }),
              React.createElement('div', {
                style: __assign$2(__assign$2({}, blockStyle), { left: '80%' }),
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
  }, Formily.React.mapReadPretty(PreviewText.Input))

  var Cascader = Formily.React.connect(
    Antd.Cascader,
    Formily.React.mapProps(
      {
        dataSource: 'options',
      },
      function (props, field) {
        return __assign$2(__assign$2({}, props), {
          suffixIcon:
            (field === null || field === void 0 ? void 0 : field['loading']) ||
            (field === null || field === void 0 ? void 0 : field['validating'])
              ? React.createElement(icons.LoadingOutlined, null)
              : props.suffixIcon,
        })
      }
    ),
    Formily.React.mapReadPretty(PreviewText.Cascader)
  )

  var Space = function (props) {
    var _a
    var layout = useFormLayout()
    return React.createElement(
      Antd.Space,
      __assign$2(
        {
          size:
            (_a = props.size) !== null && _a !== void 0
              ? _a
              : layout === null || layout === void 0
              ? void 0
              : layout.spaceGap,
        },
        props
      )
    )
  }

  var Radio = Formily.React.connect(
    Antd.Radio,
    Formily.React.mapProps({
      value: 'checked',
      onInput: 'onChange',
    })
  )
  Radio.__ANT_RADIO = true
  Radio.Group = Formily.React.connect(
    Antd.Radio.Group,
    Formily.React.mapProps({
      dataSource: 'options',
    }),
    Formily.React.mapReadPretty(PreviewText.Select)
  )

  var Checkbox = Formily.React.connect(
    Antd.Checkbox,
    Formily.React.mapProps({
      value: 'checked',
      onInput: 'onChange',
    })
  )
  Checkbox.__ANT_CHECKBOX = true
  Checkbox.Group = Formily.React.connect(
    Antd.Checkbox.Group,
    Formily.React.mapProps({
      dataSource: 'options',
    }),
    Formily.React.mapReadPretty(PreviewText.Select, {
      mode: 'tags',
    })
  )

  var Select = Formily.React.connect(
    Antd.Select,
    Formily.React.mapProps(
      {
        dataSource: 'options',
        loading: true,
      },
      function (props, field) {
        return __assign$2(__assign$2({}, props), {
          suffixIcon:
            (field === null || field === void 0 ? void 0 : field['loading']) ||
            (field === null || field === void 0 ? void 0 : field['validating'])
              ? React.createElement(icons.LoadingOutlined, null)
              : props.suffixIcon,
        })
      }
    ),
    Formily.React.mapReadPretty(PreviewText.Select)
  )

  var TreeSelect = Formily.React.connect(
    Antd.TreeSelect,
    Formily.React.mapProps(
      {
        dataSource: 'treeData',
      },
      function (props, field) {
        return __assign$2(__assign$2({}, props), {
          suffixIcon:
            (field === null || field === void 0 ? void 0 : field['loading']) ||
            (field === null || field === void 0 ? void 0 : field['validating'])
              ? React.createElement(icons.LoadingOutlined, null)
              : props.suffixIcon,
        })
      }
    ),
    Formily.React.mapReadPretty(PreviewText.TreeSelect)
  )

  var Transfer = Formily.React.connect(
    Antd.Transfer,
    Formily.React.mapProps(
      {
        value: 'targetKeys',
      },
      function (props, field) {
        var _a
        if (Formily.Core.isVoidField(field)) return props
        return __assign$2(__assign$2({}, props), {
          dataSource:
            ((_a = field.dataSource) === null || _a === void 0
              ? void 0
              : _a.map(function (item) {
                  return __assign$2(__assign$2({}, item), {
                    title: item.title || item.label,
                    key: item.key || item.value,
                  })
                })) || [],
        })
      }
    )
  )
  Transfer.defaultProps = {
    render: function (item) {
      return item.title
    },
  }

  var mapDateFormat = function () {
    var getDefaultFormat = function (props) {
      if (props['picker'] === 'month') {
        return 'YYYY-MM'
      } else if (props['picker'] === 'quarter') {
        return 'YYYY-\\QQ'
      } else if (props['picker'] === 'year') {
        return 'YYYY'
      } else if (props['picker'] === 'week') {
        return 'gggg-wo'
      }
      return props['showTime'] ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
    }
    return function (props) {
      var format = props['format'] || getDefaultFormat(props)
      var onChange = props.onChange
      return __assign$2(__assign$2({}, props), {
        format: format,
        value: momentable(
          props.value,
          format === 'gggg-wo' ? 'gggg-ww' : format
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
    Antd.DatePicker,
    Formily.React.mapProps(mapDateFormat()),
    Formily.React.mapReadPretty(PreviewText.DatePicker)
  )
  DatePicker.RangePicker = Formily.React.connect(
    Antd.DatePicker.RangePicker,
    Formily.React.mapProps(mapDateFormat()),
    Formily.React.mapReadPretty(PreviewText.DateRangePicker)
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
    Antd.TimePicker,
    Formily.React.mapProps(mapTimeFormat()),
    Formily.React.mapReadPretty(PreviewText.TimePicker)
  )
  TimePicker.RangePicker = Formily.React.connect(
    Antd.TimePicker.RangePicker,
    Formily.React.mapProps(mapTimeFormat()),
    Formily.React.mapReadPretty(PreviewText.TimeRangePicker)
  )

  var NumberPicker = Formily.React.connect(
    Antd.InputNumber,
    Formily.React.mapReadPretty(PreviewText.Input)
  )

  var Switch = Formily.React.connect(
    Antd.Switch,
    Formily.React.mapProps(
      {
        value: 'checked',
      },
      function (props) {
        var onChange = props.onChange
        delete props['value']
        return __assign$2(__assign$2({}, props), {
          onChange: function (checked) {
            onChange === null || onChange === void 0
              ? void 0
              : onChange(checked, null)
          },
        })
      }
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
      return fileList.map(function (file, index) {
        return __assign$2(__assign$2({}, file), {
          uid: file.uid || ''.concat(index),
          status: getState(file.response) || getState(file),
          url:
            getURL(file) ||
            getURL(file === null || file === void 0 ? void 0 : file.response),
          thumbUrl: getImageByUrl(
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
          ((_a = list[i]) === null || _a === void 0 ? void 0 : _a.status) ===
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
    var onChange = function (param) {
      var _a
      ;(_a = props.onChange) === null || _a === void 0
        ? void 0
        : _a.call(
            props,
            normalizeFileList(__spreadArray$1([], __read$1(param.fileList)))
          )
    }
    return __assign$2(__assign$2({}, props), { onChange: onChange })
  }
  var getPlaceholder = function (props) {
    if (props.listType !== 'picture-card') {
      return React.createElement(
        Antd.Button,
        null,
        React.createElement(icons.UploadOutlined, null),
        props.textContent
      )
    }
    return React.createElement(icons.UploadOutlined, {
      style: { fontSize: 20 },
    })
  }
  var Upload = Formily.React.connect(
    function (props) {
      return React.createElement(
        Antd.Upload,
        __assign$2({}, useUploadProps(props)),
        props.children || getPlaceholder(props)
      )
    },
    Formily.React.mapProps({
      value: 'fileList',
    })
  )
  var Dragger = Formily.React.connect(
    function (props) {
      return React.createElement(
        'div',
        { className: usePrefixCls('upload-dragger') },
        React.createElement(
          Antd.Upload.Dragger,
          __assign$2({}, useUploadProps(props)),
          props.children ||
            React.createElement(
              React.Fragment,
              null,
              React.createElement(
                'p',
                { className: 'ant-upload-drag-icon' },
                React.createElement(icons.InboxOutlined, null)
              ),
              props.textContent &&
                React.createElement(
                  'p',
                  { className: 'ant-upload-text' },
                  props.textContent
                )
            )
        )
      )
    },
    Formily.React.mapProps({
      value: 'fileList',
    })
  )
  Upload.Dragger = Dragger

  var Submit = Formily.React.observer(
    function (_a) {
      var onSubmit = _a.onSubmit,
        onSubmitFailed = _a.onSubmitFailed,
        onSubmitSuccess = _a.onSubmitSuccess,
        props = __rest(_a, ['onSubmit', 'onSubmitFailed', 'onSubmitSuccess'])
      var form = Formily.React.useParentForm()
      return React.createElement(
        Antd.Button,
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
      onResetValidateSuccess = _a.onResetValidateSuccess,
      onResetValidateFailed = _a.onResetValidateFailed,
      props = __rest(_a, [
        'forceClear',
        'validate',
        'onResetValidateSuccess',
        'onResetValidateFailed',
      ])
    var form = Formily.React.useParentForm()
    return React.createElement(
      Antd.Button,
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
          return field.setPattern('readPretty')
        }
      },
      [pattern]
    )
    return [
      field.pattern === 'editable',
      function (payload) {
        if (pattern !== 'editable') return
        field.setPattern(payload ? 'editable' : 'readPretty')
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
          React.createElement(icons.EditOutlined, {
            className: ''.concat(prefixCls, '-edit-btn'),
          }),
        pattern !== 'editable' &&
          React.createElement(icons.MessageOutlined, {
            className: ''.concat(prefixCls, '-edit-btn'),
          })
      )
    }
    var renderCloseHelper = function () {
      if (!editable) return
      return React.createElement(
        BaseItem,
        __assign$2({}, props),
        React.createElement(icons.CloseOutlined, {
          className: ''.concat(prefixCls, '-close-btn'),
        })
      )
    }
    useClickAway(function (e) {
      var target = e.target
      if (
        target === null || target === void 0
          ? void 0
          : target.closest('.'.concat(basePrefixCls, '-select-dropdown'))
      )
        return
      if (
        target === null || target === void 0
          ? void 0
          : target.closest('.'.concat(basePrefixCls, '-picker-dropdown'))
      )
        return
      if (
        target === null || target === void 0
          ? void 0
          : target.closest('.'.concat(basePrefixCls, '-cascader-menus'))
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
  Editable.Popover = Formily.React.observer(function (props) {
    var field = Formily.React.useField()
    var pattern = useParentPattern()
    var _a = __read$1(React.useState(false), 2),
      visible = _a[0],
      setVisible = _a[1]
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
      Antd.Popover,
      __assign$2({}, props, {
        title: props.title || field.title,
        visible: visible,
        className: classnames(prefixCls, props.className),
        content: props.children,
        trigger: 'click',
        destroyTooltipOnHide: true,
        onVisibleChange: function (visible) {
          if (visible) {
            openPopover()
          } else {
            closePopover()
          }
        },
      }),
      React.createElement(
        'div',
        null,
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
              React.createElement(icons.EditOutlined, {
                className: ''.concat(prefixCls, '-edit-btn'),
              }),
            pattern !== 'editable' &&
              React.createElement(icons.MessageOutlined, {
                className: ''.concat(prefixCls, '-edit-btn'),
              })
          )
        )
      )
    )
  })

  exports.ArrayBase = ArrayBase
  exports.ArrayCards = ArrayCards
  exports.ArrayCollapse = ArrayCollapse
  exports.ArrayItems = ArrayItems
  exports.ArrayTable = ArrayTable
  exports.ArrayTabs = ArrayTabs
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
  exports.GridColumn = GridColumn$1
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
//# sourceMappingURL=formily.antd.umd.development.js.map
