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
exports.createSchemaField = void 0
var react_1 = __importStar(require('react'))
var json_schema_1 = require('@formily/json-schema')
var _1 = require('.')
var render_1 = require('../shared/render')
var shared_1 = require('../shared')
var env = {
  nonameId: 0,
}
var getRandomName = function () {
  return 'NO_NAME_FIELD_$'.concat(env.nonameId++)
}
function createSchemaField(options) {
  if (options === void 0) {
    options = {}
  }
  function SchemaField(props) {
    var schema = json_schema_1.Schema.isSchemaInstance(props.schema)
      ? props.schema
      : new json_schema_1.Schema(__assign({ type: 'object' }, props.schema))
    var renderMarkup = function () {
      env.nonameId = 0
      if (props.schema) return null
      return (0, render_1.render)(
        react_1.default.createElement(
          shared_1.SchemaMarkupContext.Provider,
          { value: schema },
          props.children
        )
      )
    }
    var renderChildren = function () {
      return react_1.default.createElement(
        _1.RecursionField,
        __assign({}, props, { schema: schema })
      )
    }
    return react_1.default.createElement(
      shared_1.SchemaOptionsContext.Provider,
      {
        value: __assign(__assign({}, options), {
          components: __assign(
            __assign({}, options.components),
            props.components
          ),
        }),
      },
      react_1.default.createElement(
        shared_1.SchemaExpressionScopeContext.Provider,
        { value: __assign(__assign({}, options.scope), props.scope) },
        renderMarkup(),
        renderChildren()
      )
    )
  }
  SchemaField.displayName = 'SchemaField'
  function MarkupField(props) {
    var parent = (0, react_1.useContext)(shared_1.SchemaMarkupContext)
    if (!parent) return react_1.default.createElement(react_1.Fragment, null)
    var renderChildren = function () {
      return react_1.default.createElement(
        react_1.default.Fragment,
        null,
        props.children
      )
    }
    var appendArraySchema = function (schema) {
      if (parent.items) {
        return parent.addProperty(name, schema)
      } else {
        return parent.setItems(props)
      }
    }
    var name = props.name || getRandomName()
    if (parent.type === 'object' || parent.type === 'void') {
      var schema = parent.addProperty(name, props)
      return react_1.default.createElement(
        shared_1.SchemaMarkupContext.Provider,
        { value: schema },
        renderChildren()
      )
    } else if (parent.type === 'array') {
      var schema = appendArraySchema(props)
      return react_1.default.createElement(
        shared_1.SchemaMarkupContext.Provider,
        { value: Array.isArray(schema) ? schema[0] : schema },
        props.children
      )
    } else {
      return renderChildren()
    }
  }
  MarkupField.displayName = 'MarkupField'
  function StringField(props) {
    return react_1.default.createElement(
      MarkupField,
      __assign({}, props, { type: 'string' })
    )
  }
  StringField.displayName = 'StringField'
  function ObjectField(props) {
    return react_1.default.createElement(
      MarkupField,
      __assign({}, props, { type: 'object' })
    )
  }
  ObjectField.displayName = 'ObjectField'
  function ArrayField(props) {
    return react_1.default.createElement(
      MarkupField,
      __assign({}, props, { type: 'array' })
    )
  }
  ArrayField.displayName = 'ArrayField'
  function BooleanField(props) {
    return react_1.default.createElement(
      MarkupField,
      __assign({}, props, { type: 'boolean' })
    )
  }
  BooleanField.displayName = 'BooleanField'
  function NumberField(props) {
    return react_1.default.createElement(
      MarkupField,
      __assign({}, props, { type: 'number' })
    )
  }
  NumberField.displayName = 'NumberField'
  function DateField(props) {
    return react_1.default.createElement(
      MarkupField,
      __assign({}, props, { type: 'date' })
    )
  }
  DateField.displayName = 'DateField'
  function DateTimeField(props) {
    return react_1.default.createElement(
      MarkupField,
      __assign({}, props, { type: 'datetime' })
    )
  }
  DateTimeField.displayName = 'DateTimeField'
  function VoidField(props) {
    return react_1.default.createElement(
      MarkupField,
      __assign({}, props, { type: 'void' })
    )
  }
  VoidField.displayName = 'VoidField'
  SchemaField.Markup = MarkupField
  SchemaField.String = StringField
  SchemaField.Object = ObjectField
  SchemaField.Array = ArrayField
  SchemaField.Boolean = BooleanField
  SchemaField.Date = DateField
  SchemaField.DateTime = DateTimeField
  SchemaField.Void = VoidField
  SchemaField.Number = NumberField
  return SchemaField
}
exports.createSchemaField = createSchemaField
//# sourceMappingURL=SchemaField.js.map
