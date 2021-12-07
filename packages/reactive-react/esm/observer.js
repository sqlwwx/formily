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
import React, { forwardRef, memo, Fragment } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { useObserver } from './hooks'
export function observer(component, options) {
  var realOptions = __assign({ forwardRef: false }, options)
  var wrappedComponent = realOptions.forwardRef
    ? forwardRef(function (props, ref) {
        return useObserver(function () {
          return component(__assign(__assign({}, props), { ref: ref }))
        }, realOptions)
      })
    : function (props) {
        return useObserver(function () {
          return component(props)
        }, realOptions)
      }
  var memoComponent = memo(wrappedComponent)
  hoistNonReactStatics(memoComponent, component)
  if (realOptions.displayName) {
    memoComponent.displayName = realOptions.displayName
  }
  return memoComponent
}
export var Observer = observer(function (props) {
  var children =
    typeof props.children === 'function' ? props.children() : props.children
  return React.createElement(Fragment, {}, children)
})
//# sourceMappingURL=observer.js.map
