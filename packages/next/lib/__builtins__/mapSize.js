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
exports.mapSize = void 0
var form_layout_1 = require('../form-layout')
var mapSize = function (props) {
  var layout = __assign(
    __assign({}, (0, form_layout_1.useFormShallowLayout)()),
    (0, form_layout_1.useFormLayout)()
  )
  var takeSize = function () {
    return layout.size === 'default' ? 'medium' : layout.size
  }
  return __assign(__assign({}, props), { size: props.size || takeSize() })
}
exports.mapSize = mapSize
//# sourceMappingURL=mapSize.js.map
