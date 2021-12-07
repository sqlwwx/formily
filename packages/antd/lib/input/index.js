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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Input = void 0
var react_1 = __importDefault(require('react'))
var react_2 = require('@formily/react')
var antd_1 = require('antd')
var preview_text_1 = require('../preview-text')
var icons_1 = require('@ant-design/icons')
exports.Input = (0, react_2.connect)(
  antd_1.Input,
  (0, react_2.mapProps)(function (props, field) {
    return __assign(__assign({}, props), {
      suffix: react_1.default.createElement(
        'span',
        null,
        (field === null || field === void 0 ? void 0 : field['loading']) ||
          (field === null || field === void 0 ? void 0 : field['validating'])
          ? react_1.default.createElement(icons_1.LoadingOutlined, null)
          : props.suffix
      ),
    })
  }),
  (0, react_2.mapReadPretty)(preview_text_1.PreviewText.Input)
)
exports.Input.TextArea = (0, react_2.connect)(
  antd_1.Input.TextArea,
  (0, react_2.mapReadPretty)(preview_text_1.PreviewText.Input)
)
exports.default = exports.Input
//# sourceMappingURL=index.js.map
