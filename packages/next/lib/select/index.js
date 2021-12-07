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
exports.Select = void 0
var react_1 = require('@formily/react')
var core_1 = require('@formily/core')
var next_1 = require('@alifd/next')
var preview_text_1 = require('../preview-text')
var __builtins__1 = require('../__builtins__')
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
exports.Select = (0, react_1.connect)(
  next_1.Select,
  (0, react_1.mapProps)(
    function (props, field) {
      var _a
      if ((0, core_1.isVoidField)(field)) {
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
    __builtins__1.mapSize,
    __builtins__1.mapStatus
  ),
  (0, react_1.mapReadPretty)(preview_text_1.PreviewText.Select)
)
exports.default = exports.Select
//# sourceMappingURL=index.js.map
