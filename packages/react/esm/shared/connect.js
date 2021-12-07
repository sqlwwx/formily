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
import React from 'react'
import { isFn, isStr, FormPath, each, isValid } from '@formily/shared'
import { isVoidField } from '@formily/core'
import { observer, Observer } from '@formily/reactive-react'
import { useField } from '../hooks'
import hoistNonReactStatics from 'hoist-non-react-statics'
export function mapProps() {
  var args = []
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i]
  }
  return function (target) {
    return observer(
      function (props) {
        var field = useField()
        var results = args.reduce(function (props, mapper) {
          if (isFn(mapper)) {
            props = Object.assign(props, mapper(props, field))
          } else {
            each(mapper, function (to, extract) {
              var extractValue = FormPath.getIn(field, extract)
              var targetValue = isStr(to) ? to : extract
              var originalValue = FormPath.getIn(props, targetValue)
              if (extract === 'value') {
                if (to !== extract) {
                  delete props.value
                }
              }
              if (isValid(originalValue) && !isValid(extractValue)) return
              FormPath.setIn(props, targetValue, extractValue)
            })
          }
          return props
        }, __assign({}, props))
        return React.createElement(target, results)
      },
      {
        forwardRef: true,
      }
    )
  }
}
export function mapReadPretty(component, readPrettyProps) {
  return function (target) {
    return observer(
      function (props) {
        var field = useField()
        if (
          !isVoidField(field) &&
          (field === null || field === void 0 ? void 0 : field.pattern) ===
            'readPretty'
        ) {
          return React.createElement(
            component,
            __assign(__assign({}, readPrettyProps), props)
          )
        }
        return React.createElement(target, props)
      },
      {
        forwardRef: true,
      }
    )
  }
}
export function connect(target) {
  var args = []
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i]
  }
  var Target = args.reduce(function (target, mapper) {
    return mapper(target)
  }, target)
  var Destination = React.forwardRef(function (props, ref) {
    return React.createElement(
      Target,
      __assign(__assign({}, props), { ref: ref })
    )
  })
  if (target) hoistNonReactStatics(Destination, target)
  return Destination
}
export { observer, Observer }
//# sourceMappingURL=connect.js.map
