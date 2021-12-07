'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.getRawComponent = void 0
var vue_demi_1 = require('vue-demi')
var getRawComponent = function (props) {
  var component = props.component,
    decorator = props.decorator
  var newComponent
  var newDecorator
  if (Array.isArray(component)) {
    newComponent = [(0, vue_demi_1.toRaw)(component[0]), component[1]]
  }
  if (Array.isArray(decorator)) {
    newDecorator = [(0, vue_demi_1.toRaw)(decorator[0]), decorator[1]]
  }
  return { component: newComponent, decorator: newDecorator }
}
exports.getRawComponent = getRawComponent
//# sourceMappingURL=getRawComponent.js.map
