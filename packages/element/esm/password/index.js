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
import { Input } from '../input'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { PreviewText } from '../preview-text'
export var Password = connect(
  Input,
  mapProps(function (props) {
    return __assign(__assign({}, props), { showPassword: true })
  }),
  mapReadPretty(PreviewText.Input)
)
export default Password
//# sourceMappingURL=index.js.map
