'use strict'
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
Object.defineProperty(exports, '__esModule', { value: true })
exports.Transfer = void 0
var react_1 = require('@formily/react')
var antd_1 = require('antd')
var core_1 = require('@formily/core')
exports.Transfer = (0, react_1.connect)(
  antd_1.Transfer,
  (0, react_1.mapProps)(
    {
      value: 'targetKeys',
    },
    function (props, field) {
      var _a
      if ((0, core_1.isVoidField)(field)) return props
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
exports.Transfer.defaultProps = {
  render: function (item) {
    return item.title
  },
}
exports.default = exports.Transfer
//# sourceMappingURL=index.js.map
