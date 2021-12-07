import { ConfigProvider } from '@alifd/next'
export var usePrefixCls = function (tag, props) {
  var _a, _b, _c
  var getContext = ConfigProvider['getContext']
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
//# sourceMappingURL=usePrefixCls.js.map
