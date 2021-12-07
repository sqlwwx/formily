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
exports.Space = void 0
var react_1 = __importDefault(require('react'))
var antd_1 = require('antd')
var form_layout_1 = require('../form-layout')
var Space = function (props) {
  var _a
  var layout = (0, form_layout_1.useFormLayout)()
  return react_1.default.createElement(
    antd_1.Space,
    __assign(
      {
        size:
          (_a = props.size) !== null && _a !== void 0
            ? _a
            : layout === null || layout === void 0
            ? void 0
            : layout.spaceGap,
      },
      props
    )
  )
}
exports.Space = Space
exports.default = exports.Space
//# sourceMappingURL=index.js.map
