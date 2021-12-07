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
import { Space as AntdSpace } from 'antd'
import { useFormLayout } from '../form-layout'
export var Space = function (props) {
  var _a
  var layout = useFormLayout()
  return React.createElement(
    AntdSpace,
    __assign(
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
export default Space
//# sourceMappingURL=index.js.map
