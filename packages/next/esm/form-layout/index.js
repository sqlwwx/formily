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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
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
import React, { createContext, useContext } from 'react'
import { useResponsiveFormLayout } from './useResponsiveFormLayout'
import { usePrefixCls } from '../__builtins__'
import cls from 'classnames'
export var FormLayoutDeepContext = createContext(null)
export var FormLayoutShallowContext = createContext(null)
export var useFormDeepLayout = function () {
  return useContext(FormLayoutDeepContext)
}
export var useFormShallowLayout = function () {
  return useContext(FormLayoutShallowContext)
}
export var useFormLayout = function () {
  return __assign(__assign({}, useFormDeepLayout()), useFormShallowLayout())
}
export var FormLayout = function (_a) {
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
  var layoutClassName = cls(
    layoutPrefixCls,
    ((_b = {}),
    (_b[''.concat(formPrefixCls, '-').concat(props.layout)] = true),
    (_b[''.concat(formPrefixCls, '-rtl')] = props.direction === 'rtl'),
    (_b[''.concat(formPrefixCls, '-').concat(props.size)] = props.size),
    _b),
    className
  )
  var renderChildren = function () {
    var newDeepLayout = __assign({}, deepLayout)
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
export default FormLayout
//# sourceMappingURL=index.js.map
