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
import React, { Fragment, useContext } from 'react'
import { toJS } from '@formily/reactive'
import { observer } from '@formily/reactive-react'
import { isFn, FormPath } from '@formily/shared'
import { isVoidField } from '@formily/core'
import { SchemaOptionsContext } from '../shared'
var mergeChildren = function (children, content) {
  if (!children && !content) return
  return React.createElement(Fragment, null, children, content)
}
var renderChildren = function (children) {
  var args = []
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i]
  }
  return isFn(children)
    ? children.apply(void 0, __spreadArray([], __read(args), false))
    : children
}
var ReactiveInternal = function (props) {
  var _a
  var options = useContext(SchemaOptionsContext)
  if (!props.field) {
    return React.createElement(Fragment, null, renderChildren(props.children))
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
      return React.createElement(Fragment, null, children)
    }
    var finalComponent =
      (_a = FormPath.getIn(
        options === null || options === void 0 ? void 0 : options.components,
        field.decorator[0]
      )) !== null && _a !== void 0
        ? _a
        : field.decorator[0]
    return React.createElement(
      finalComponent,
      toJS(field.decorator[1]),
      children
    )
  }
  var renderComponent = function () {
    var _a, _b, _c, _d
    if (!field.component[0]) return content
    var value = !isVoidField(field) ? field.value : undefined
    var onChange = !isVoidField(field)
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
    var onFocus = !isVoidField(field)
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
    var onBlur = !isVoidField(field)
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
    var disabled = !isVoidField(field)
      ? field.pattern === 'disabled' || field.pattern === 'readPretty'
      : undefined
    var readOnly = !isVoidField(field)
      ? field.pattern === 'readOnly'
      : undefined
    var finalComponent =
      (_d = FormPath.getIn(
        options === null || options === void 0 ? void 0 : options.components,
        field.component[0]
      )) !== null && _d !== void 0
        ? _d
        : field.component[0]
    return React.createElement(
      finalComponent,
      __assign(
        __assign(
          { disabled: disabled, readOnly: readOnly },
          toJS(field.component[1])
        ),
        { value: value, onChange: onChange, onFocus: onFocus, onBlur: onBlur }
      ),
      content
    )
  }
  return renderDecorator(renderComponent())
}
ReactiveInternal.displayName = 'ReactiveField'
export var ReactiveField = observer(ReactiveInternal, {
  forwardRef: true,
})
//# sourceMappingURL=ReactiveField.js.map
