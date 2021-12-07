'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.resolveSchemaProps = void 0
var shared_1 = require('@formily/shared')
var resolveSchemaProps = function (props) {
  var newProps = {}
  Object.keys(props).forEach(function (key) {
    if (key.indexOf('x') === 0 && key.indexOf('x-') === -1) {
      newProps[(0, shared_1.paramCase)(key)] = props[key]
    } else {
      newProps[key] = props[key]
    }
  })
  return newProps
}
exports.resolveSchemaProps = resolveSchemaProps
//# sourceMappingURL=resolveSchemaProps.js.map
