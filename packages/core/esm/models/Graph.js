import { define, batch } from '@formily/reactive'
import { each, FormPath } from '@formily/shared'
import {
  isFormState,
  isFieldState,
  isArrayFieldState,
  isObjectFieldState,
} from '../shared/checkers'
var Graph = /** @class */ (function () {
  function Graph(form) {
    var _this = this
    this.getGraph = function () {
      var graph = {}
      graph[''] = _this.form.getState()
      each(_this.form.fields, function (field, identifier) {
        graph[identifier] = field.getState()
      })
      return graph
    }
    this.setGraph = function (graph) {
      var form = _this.form
      var createField = function (identifier, state) {
        var address = FormPath.parse(identifier)
        var name = address.segments[address.segments.length - 1]
        var basePath = address.parent()
        if (isFieldState(state)) {
          return _this.form.createField({ name: name, basePath: basePath })
        } else if (isArrayFieldState(state)) {
          return _this.form.createArrayField({ name: name, basePath: basePath })
        } else if (isObjectFieldState(state)) {
          return _this.form.createObjectField({
            name: name,
            basePath: basePath,
          })
        } else {
          return _this.form.createVoidField({ name: name, basePath: basePath })
        }
      }
      each(graph, function (state, address) {
        if (isFormState(state)) {
          form.setState(state)
        } else {
          var field = form.fields[address]
          if (field) {
            field.setState(state)
          } else {
            createField(address, state).setState(state)
          }
        }
      })
    }
    this.form = form
    define(this, {
      setGraph: batch,
    })
  }
  return Graph
})()
export { Graph }
//# sourceMappingURL=Graph.js.map
