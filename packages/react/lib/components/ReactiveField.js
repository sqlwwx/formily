'use strict'
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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          },
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __read =
  (this && this.__read) ||
  function (o, n) {
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
var __spreadArray =
  (this && this.__spreadArray) ||
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
Object.defineProperty(exports, '__esModule', { value: true })
exports.ReactiveField = void 0
var react_1 = __importStar(require('react'))
var reactive_1 = require('@formily/reactive')
var reactive_react_1 = require('@formily/reactive-react')
var shared_1 = require('@formily/shared')
var core_1 = require('@formily/core')
var shared_2 = require('../shared')
var mergeChildren = function (children, content) {
  if (!children && !content) return
  return react_1.default.createElement(
    react_1.Fragment,
    null,
    children,
    content
  )
}
var renderChildren = function (children) {
  var args = []
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i]
  }
  return (0, shared_1.isFn)(children)
    ? children.apply(void 0, __spreadArray([], __read(args), false))
    : children
}
var ReactiveInternal = function (props) {
  var _a
  var options = (0, react_1.useContext)(shared_2.SchemaOptionsContext)
  if (!props.field) {
    return react_1.default.createElement(
      react_1.Fragment,
      null,
      renderChildren(props.children)
    )
  }
  var field = props.field
  var content = mergeChildren(
    renderChildren(props.children, field, field.form),
    (_a = field.content) !== null && _a !== void 0
      ? _a
      : field.component[1].children
  )
  if (field.display !== 'visible') return null
  var renderDecorator = function (children) {
    var _a
    if (!field.decorator[0]) {
      return react_1.default.createElement(react_1.Fragment, null, children)
    }
    var finalComponent =
      (_a = shared_1.FormPath.getIn(
        options === null || options === void 0 ? void 0 : options.components,
        field.decorator[0]
      )) !== null && _a !== void 0
        ? _a
        : field.decorator[0]
    return react_1.default.createElement(
      finalComponent,
      (0, reactive_1.toJS)(field.decorator[1]),
      children
    )
  }
  var renderComponent = function () {
    var _a, _b, _c, _d
    if (!field.component[0]) return content
    var value = !(0, core_1.isVoidField)(field) ? field.value : undefined
    var onChange = !(0, core_1.isVoidField)(field)
      ? function () {
          var _a, _b
          var args = []
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i]
          }
          field.onInput.apply(field, __spreadArray([], __read(args), false))
          ;(_b =
            (_a = field.component[1]) === null || _a === void 0
              ? void 0
              : _a.onChange) === null || _b === void 0
            ? void 0
            : _b.call.apply(_b, __spreadArray([_a], __read(args), false))
        }
      : (_a = field.component[1]) === null || _a === void 0
      ? void 0
      : _a.onChange
    var onFocus = !(0, core_1.isVoidField)(field)
      ? function () {
          var _a, _b
          var args = []
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i]
          }
          field.onFocus.apply(field, __spreadArray([], __read(args), false))
          ;(_b =
            (_a = field.component[1]) === null || _a === void 0
              ? void 0
              : _a.onFocus) === null || _b === void 0
            ? void 0
            : _b.call.apply(_b, __spreadArray([_a], __read(args), false))
        }
      : (_b = field.component[1]) === null || _b === void 0
      ? void 0
      : _b.onFocus
    var onBlur = !(0, core_1.isVoidField)(field)
      ? function () {
          var _a, _b
          var args = []
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i]
          }
          field.onBlur.apply(field, __spreadArray([], __read(args), false))
          ;(_b =
            (_a = field.component[1]) === null || _a === void 0
              ? void 0
              : _a.onBlur) === null || _b === void 0
            ? void 0
            : _b.call.apply(_b, __spreadArray([_a], __read(args), false))
        }
      : (_c = field.component[1]) === null || _c === void 0
      ? void 0
      : _c.onBlur
    var disabled = !(0, core_1.isVoidField)(field)
      ? field.pattern === 'disabled' || field.pattern === 'readPretty'
      : undefined
    var readOnly = !(0, core_1.isVoidField)(field)
      ? field.pattern === 'readOnly'
      : undefined
    var finalComponent =
      (_d = shared_1.FormPath.getIn(
        options === null || options === void 0 ? void 0 : options.components,
        field.component[0]
      )) !== null && _d !== void 0
        ? _d
        : field.component[0]
    return react_1.default.createElement(
      finalComponent,
      __assign(
        __assign(
          { disabled: disabled, readOnly: readOnly },
          (0, reactive_1.toJS)(field.component[1])
        ),
        { value: value, onChange: onChange, onFocus: onFocus, onBlur: onBlur }
      ),
      content
    )
  }
  return renderDecorator(renderComponent())
}
ReactiveInternal.displayName = 'ReactiveField'
exports.ReactiveField = (0, reactive_react_1.observer)(ReactiveInternal, {
  forwardRef: true,
})
//# sourceMappingURL=ReactiveField.js.map
