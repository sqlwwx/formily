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
import { useForm, useField } from '../hooks'
import { useAttach } from '../hooks/useAttach'
import { ReactiveField } from './ReactiveField'
import { FieldContext } from '../shared'
export var ObjectField = function (props) {
  var form = useForm()
  var parent = useField()
  var field = useAttach(
    form.createObjectField(
      __assign(
        {
          basePath:
            parent === null || parent === void 0 ? void 0 : parent.address,
        },
        props
      )
    )
  )
  return React.createElement(
    FieldContext.Provider,
    { value: field },
    React.createElement(ReactiveField, { field: field }, props.children)
  )
}
ObjectField.displayName = 'ObjectField'
//# sourceMappingURL=ObjectField.js.map
