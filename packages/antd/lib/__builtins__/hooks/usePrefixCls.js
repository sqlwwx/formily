'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.usePrefixCls = void 0
var react_1 = require('react')
var antd_1 = require('antd')
var usePrefixCls = function (tag, props) {
  var getPrefixCls = (0, react_1.useContext)(
    antd_1.ConfigProvider.ConfigContext
  ).getPrefixCls
  return getPrefixCls(
    tag,
    props === null || props === void 0 ? void 0 : props.prefixCls
  )
}
exports.usePrefixCls = usePrefixCls
//# sourceMappingURL=usePrefixCls.js.map
