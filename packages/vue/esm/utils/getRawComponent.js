import { toRaw } from 'vue-demi'
export var getRawComponent = function (props) {
  var component = props.component,
    decorator = props.decorator
  var newComponent
  var newDecorator
  if (Array.isArray(component)) {
    newComponent = [toRaw(component[0]), component[1]]
  }
  if (Array.isArray(decorator)) {
    newDecorator = [toRaw(decorator[0]), decorator[1]]
  }
  return { component: newComponent, decorator: newDecorator }
}
//# sourceMappingURL=getRawComponent.js.map
