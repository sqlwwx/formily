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
exports.Password = void 0
var input_1 = require('../input')
var vue_1 = require('@formily/vue')
var preview_text_1 = require('../preview-text')
exports.Password = (0, vue_1.connect)(
  input_1.Input,
  (0, vue_1.mapProps)(function (props) {
    return __assign(__assign({}, props), { showPassword: true })
  }),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.Input)
)
exports.default = exports.Password
//# sourceMappingURL=index.js.map
