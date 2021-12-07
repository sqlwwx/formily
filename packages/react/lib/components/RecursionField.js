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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          },
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.RecursionField = void 0
var react_1 = __importStar(require('react'))
var shared_1 = require('@formily/shared')
var json_schema_1 = require('@formily/json-schema')
var shared_2 = require('../shared')
var hooks_1 = require('../hooks')
var ObjectField_1 = require('./ObjectField')
var ArrayField_1 = require('./ArrayField')
var Field_1 = require('./Field')
var VoidField_1 = require('./VoidField')
var useFieldProps = function (schema) {
  var options = (0, react_1.useContext)(shared_2.SchemaOptionsContext)
  var scope = (0, react_1.useContext)(shared_2.SchemaExpressionScopeContext)
  var scopeRef = (0, react_1.useRef)()
  scopeRef.current = scope
  return schema.toFieldProps(
    __assign(__assign({}, options), {
      get scope() {
        return __assign(__assign({}, options.scope), scopeRef.current)
      },
    })
  )
}
var useBasePath = function (props) {
  var parent = (0, hooks_1.useField)()
  if (props.onlyRenderProperties) {
    return (
      props.basePath ||
      (parent === null || parent === void 0
        ? void 0
        : parent.address.concat(props.name))
    )
  }
  return (
    props.basePath ||
    (parent === null || parent === void 0 ? void 0 : parent.address)
  )
}
var RecursionField = function (props) {
  var basePath = useBasePath(props)
  var fieldSchema = (0, react_1.useMemo)(
    function () {
      return new json_schema_1.Schema(props.schema)
    },
    [props.schema]
  )
  var fieldProps = useFieldProps(fieldSchema)
  var renderProperties = function (field) {
    if (props.onlyRenderSelf) return
    var properties = json_schema_1.Schema.getOrderProperties(fieldSchema)
    if (!properties.length) return
    return react_1.default.createElement(
      react_1.Fragment,
      null,
      properties.map(function (_a, index) {
        var item = _a.schema,
          name = _a.key
        var base =
          (field === null || field === void 0 ? void 0 : field.address) ||
          basePath
        var schema = item
        if ((0, shared_1.isFn)(props.mapProperties)) {
          var mapped = props.mapProperties(item, name)
          if (mapped) {
            schema = mapped
          }
        }
        if ((0, shared_1.isFn)(props.filterProperties)) {
          if (props.filterProperties(schema, name) === false) {
            return null
          }
        }
        return react_1.default.createElement(exports.RecursionField, {
          schema: schema,
          key: ''.concat(index, '-').concat(name),
          name: name,
          basePath: base,
        })
      })
    )
  }
  var render = function () {
    if (!(0, shared_1.isValid)(props.name)) return renderProperties()
    if (fieldSchema.type === 'object') {
      if (props.onlyRenderProperties) return renderProperties()
      return react_1.default.createElement(
        ObjectField_1.ObjectField,
        __assign({}, fieldProps, { name: props.name, basePath: basePath }),
        renderProperties
      )
    } else if (fieldSchema.type === 'array') {
      return react_1.default.createElement(
        ArrayField_1.ArrayField,
        __assign({}, fieldProps, { name: props.name, basePath: basePath })
      )
    } else if (fieldSchema.type === 'void') {
      if (props.onlyRenderProperties) return renderProperties()
      return react_1.default.createElement(
        VoidField_1.VoidField,
        __assign({}, fieldProps, { name: props.name, basePath: basePath }),
        renderProperties
      )
    }
    return react_1.default.createElement(
      Field_1.Field,
      __assign({}, fieldProps, { name: props.name, basePath: basePath })
    )
  }
  if (!fieldSchema) return react_1.default.createElement(react_1.Fragment, null)
  return react_1.default.createElement(
    shared_2.SchemaContext.Provider,
    { value: fieldSchema },
    render()
  )
}
exports.RecursionField = RecursionField
//# sourceMappingURL=RecursionField.js.map
