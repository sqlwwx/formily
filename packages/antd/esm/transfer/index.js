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
import { connect, mapProps } from '@formily/react'
import { Transfer as AntdTransfer } from 'antd'
import { isVoidField } from '@formily/core'
export var Transfer = connect(
  AntdTransfer,
  mapProps(
    {
      value: 'targetKeys',
    },
    function (props, field) {
      var _a
      if (isVoidField(field)) return props
      return __assign(__assign({}, props), {
        dataSource:
          ((_a = field.dataSource) === null || _a === void 0
            ? void 0
            : _a.map(function (item) {
                return __assign(__assign({}, item), {
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
export default Transfer
//# sourceMappingURL=index.js.map
