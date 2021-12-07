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
import { useFormLayout, useFormShallowLayout } from '../form-layout'
export var mapSize = function (props) {
  var layout = __assign(__assign({}, useFormShallowLayout()), useFormLayout())
  var takeSize = function () {
    return layout.size === 'default' ? 'medium' : layout.size
  }
  return __assign(__assign({}, props), { size: props.size || takeSize() })
}
//# sourceMappingURL=mapSize.js.map
