'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.usePrefixCls = void 0
var next_1 = require('@alifd/next')
var usePrefixCls = function (tag, props) {
  var _a, _b, _c
  var getContext = next_1.ConfigProvider['getContext']
  var prefix =
    (_c =
      (_a = props === null || props === void 0 ? void 0 : props.prefix) !==
        null && _a !== void 0
        ? _a
        : (_b = getContext()) === null || _b === void 0
        ? void 0
        : _b.prefix) !== null && _c !== void 0
      ? _c
      : 'next-'
  return ''.concat(prefix).concat(tag !== null && tag !== void 0 ? tag : '')
}
exports.usePrefixCls = usePrefixCls
//# sourceMappingURL=usePrefixCls.js.map
