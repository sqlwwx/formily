'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.pickDataProps = void 0
var pickDataProps = function (props) {
  if (props === void 0) {
    props = {}
  }
  var results = {}
  for (var key in props) {
    if (key.indexOf('data-') > -1) {
      results[key] = props[key]
    }
  }
  return results
}
exports.pickDataProps = pickDataProps
//# sourceMappingURL=pickDataProps.js.map
