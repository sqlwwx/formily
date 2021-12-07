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
import { connect, mapReadPretty, mapProps } from '@formily/react'
import { isVoidField } from '@formily/core'
import { Select as NextSelect } from '@alifd/next'
import { PreviewText } from '../preview-text'
import { mapSize, mapStatus } from '../__builtins__'
var patchDataSource = function (dataSource) {
  if (dataSource === void 0) {
    dataSource = []
  }
  var removeEmptyChildren = function (data) {
    var result = __assign({}, data)
    if (!result.children || result.children.length === 0) {
      delete result.children
    } else {
      result.children = result.children.map(removeEmptyChildren)
    }
    return result
  }
  return dataSource.map(removeEmptyChildren)
}
export var Select = connect(
  NextSelect,
  mapProps(
    function (props, field) {
      var _a
      if (isVoidField(field)) {
        return props
      }
      return __assign(__assign({}, props), {
        dataSource: patchDataSource(
          (_a = props.dataSource) !== null && _a !== void 0
            ? _a
            : field === null || field === void 0
            ? void 0
            : field.dataSource
        ),
      })
    },
    mapSize,
    mapStatus
  ),
  mapReadPretty(PreviewText.Select)
)
export default Select
//# sourceMappingURL=index.js.map
