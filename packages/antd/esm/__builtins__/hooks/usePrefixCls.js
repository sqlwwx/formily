import { useContext } from 'react'
import { ConfigProvider } from 'antd'
export var usePrefixCls = function (tag, props) {
  var getPrefixCls = useContext(ConfigProvider.ConfigContext).getPrefixCls
  return getPrefixCls(
    tag,
    props === null || props === void 0 ? void 0 : props.prefixCls
  )
}
//# sourceMappingURL=usePrefixCls.js.map
