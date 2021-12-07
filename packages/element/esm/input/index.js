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
import { composeExport, transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { PreviewText } from '../preview-text'
import { default as ElInput } from 'element-ui/lib/input'
var TransformElInput = transformComponent(ElInput, {
  change: 'input',
})
var InnerInput = connect(
  TransformElInput,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.Input)
)
var TextArea = connect(
  InnerInput,
  mapProps(function (props) {
    return __assign(__assign({}, props), { type: 'textarea' })
  }),
  mapReadPretty(PreviewText.Input)
)
export var Input = composeExport(InnerInput, {
  TextArea: TextArea,
})
export default Input
//# sourceMappingURL=index.js.map
