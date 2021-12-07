'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Graph = void 0
var reactive_1 = require('@formily/reactive')
var shared_1 = require('@formily/shared')
var checkers_1 = require('../shared/checkers')
var Graph = /** @class */ (function () {
  function Graph(form) {
    var _this = this
    this.getGraph = function () {
      var graph = {}
      graph[''] = _this.form.getState()
      ;(0, shared_1.each)(_this.form.fields, function (field, identifier) {
        graph[identifier] = field.getState()
      })
      return graph
    }
    this.setGraph = function (graph) {
      var form = _this.form
      var createField = function (identifier, state) {
        var address = shared_1.FormPath.parse(identifier)
        var name = address.segments[address.segments.length - 1]
        var basePath = address.parent()
        if ((0, checkers_1.isFieldState)(state)) {
          return _this.form.createField({ name: name, basePath: basePath })
        } else if ((0, checkers_1.isArrayFieldState)(state)) {
          return _this.form.createArrayField({ name: name, basePath: basePath })
        } else if ((0, checkers_1.isObjectFieldState)(state)) {
          return _this.form.createObjectField({
            name: name,
            basePath: basePath,
          })
        } else {
          return _this.form.createVoidField({ name: name, basePath: basePath })
        }
      }
      ;(0, shared_1.each)(graph, function (state, address) {
        if ((0, checkers_1.isFormState)(state)) {
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
    ;(0, reactive_1.define)(this, {
      setGraph: reactive_1.batch,
    })
  }
  return Graph
})()
exports.Graph = Graph
//# sourceMappingURL=Graph.js.map
