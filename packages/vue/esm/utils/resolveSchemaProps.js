import { paramCase } from '@formily/shared'
export var resolveSchemaProps = function (props) {
  var newProps = {}
  Object.keys(props).forEach(function (key) {
    if (key.indexOf('x') === 0 && key.indexOf('x-') === -1) {
      newProps[paramCase(key)] = props[key]
    } else {
      newProps[key] = props[key]
    }
  })
  return newProps
}
//# sourceMappingURL=resolveSchemaProps.js.map
