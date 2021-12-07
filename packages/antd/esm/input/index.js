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
import { connect, mapProps, mapReadPretty } from '@formily/react'
import { Input as AntdInput } from 'antd'
import { PreviewText } from '../preview-text'
import { LoadingOutlined } from '@ant-design/icons'
export var Input = connect(
  AntdInput,
  mapProps(function (props, field) {
    return __assign(__assign({}, props), {
      suffix: React.createElement(
        'span',
        null,
        (field === null || field === void 0 ? void 0 : field['loading']) ||
          (field === null || field === void 0 ? void 0 : field['validating'])
          ? React.createElement(LoadingOutlined, null)
          : props.suffix
      ),
    })
  }),
  mapReadPretty(PreviewText.Input)
)
Input.TextArea = connect(AntdInput.TextArea, mapReadPretty(PreviewText.Input))
export default Input
//# sourceMappingURL=index.js.map
