'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.resolveComponent = void 0
var composition_api_1 = require('@vue/composition-api')
var utils_1 = require('./utils')
var resolveComponent = function (child, props) {
  if (child) {
    if (typeof child === 'string' || typeof child === 'number') {
      return child
    } else if (typeof child === 'function') {
      return child(props)
    } else if ((0, utils_1.isVnode)(child)) {
      return child
    } else {
      return (0, composition_api_1.h)((0, composition_api_1.toRaw)(child), {
        props: props,
      })
    }
  }
  return null
}
exports.resolveComponent = resolveComponent
//# sourceMappingURL=resolve-component.js.map
