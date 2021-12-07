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
import { connect, mapReadPretty, mapProps } from '@formily/react'
import { Cascader as AntdCascader } from 'antd'
import { PreviewText } from '../preview-text'
import { LoadingOutlined } from '@ant-design/icons'
export var Cascader = connect(
  AntdCascader,
  mapProps(
    {
      dataSource: 'options',
    },
    function (props, field) {
      return __assign(__assign({}, props), {
        suffixIcon:
          (field === null || field === void 0 ? void 0 : field['loading']) ||
          (field === null || field === void 0 ? void 0 : field['validating'])
            ? React.createElement(LoadingOutlined, null)
            : props.suffixIcon,
      })
    }
  ),
  mapReadPretty(PreviewText.Cascader)
)
export default Cascader
//# sourceMappingURL=index.js.map
