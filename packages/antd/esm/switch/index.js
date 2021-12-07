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
import { Switch as AntdSwitch } from 'antd'
import { connect, mapProps } from '@formily/react'
export var Switch = connect(
  AntdSwitch,
  mapProps(
    {
      value: 'checked',
    },
    function (props) {
      var onChange = props.onChange
      delete props['value']
      return __assign(__assign({}, props), {
        onChange: function (checked) {
          onChange === null || onChange === void 0
            ? void 0
            : onChange(checked, null)
        },
      })
    }
  )
)
export default Switch
//# sourceMappingURL=index.js.map
