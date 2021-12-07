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
import React, { useContext, Fragment } from 'react'
import { Schema } from '@formily/json-schema'
import { RecursionField } from '.'
import { render } from '../shared/render'
import {
  SchemaMarkupContext,
  SchemaExpressionScopeContext,
  SchemaOptionsContext,
} from '../shared'
var env = {
  nonameId: 0,
}
var getRandomName = function () {
  return 'NO_NAME_FIELD_$'.concat(env.nonameId++)
}
export function createSchemaField(options) {
  if (options === void 0) {
    options = {}
  }
  function SchemaField(props) {
    var schema = Schema.isSchemaInstance(props.schema)
      ? props.schema
      : new Schema(__assign({ type: 'object' }, props.schema))
    var renderMarkup = function () {
      env.nonameId = 0
      if (props.schema) return null
      return render(
        React.createElement(
          SchemaMarkupContext.Provider,
          { value: schema },
          props.children
        )
      )
    }
    var renderChildren = function () {
      return React.createElement(
        RecursionField,
        __assign({}, props, { schema: schema })
      )
    }
    return React.createElement(
      SchemaOptionsContext.Provider,
      {
        value: __assign(__assign({}, options), {
          components: __assign(
            __assign({}, options.components),
            props.components
          ),
        }),
      },
      React.createElement(
        SchemaExpressionScopeContext.Provider,
        { value: __assign(__assign({}, options.scope), props.scope) },
        renderMarkup(),
        renderChildren()
      )
    )
  }
  SchemaField.displayName = 'SchemaField'
  function MarkupField(props) {
    var parent = useContext(SchemaMarkupContext)
    if (!parent) return React.createElement(Fragment, null)
    var renderChildren = function () {
      return React.createElement(React.Fragment, null, props.children)
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
      return React.createElement(
        SchemaMarkupContext.Provider,
        { value: schema },
        renderChildren()
      )
    } else if (parent.type === 'array') {
      var schema = appendArraySchema(props)
      return React.createElement(
        SchemaMarkupContext.Provider,
        { value: Array.isArray(schema) ? schema[0] : schema },
        props.children
      )
    } else {
      return renderChildren()
    }
  }
  MarkupField.displayName = 'MarkupField'
  function StringField(props) {
    return React.createElement(
      MarkupField,
      __assign({}, props, { type: 'string' })
    )
  }
  StringField.displayName = 'StringField'
  function ObjectField(props) {
    return React.createElement(
      MarkupField,
      __assign({}, props, { type: 'object' })
    )
  }
  ObjectField.displayName = 'ObjectField'
  function ArrayField(props) {
    return React.createElement(
      MarkupField,
      __assign({}, props, { type: 'array' })
    )
  }
  ArrayField.displayName = 'ArrayField'
  function BooleanField(props) {
    return React.createElement(
      MarkupField,
      __assign({}, props, { type: 'boolean' })
    )
  }
  BooleanField.displayName = 'BooleanField'
  function NumberField(props) {
    return React.createElement(
      MarkupField,
      __assign({}, props, { type: 'number' })
    )
  }
  NumberField.displayName = 'NumberField'
  function DateField(props) {
    return React.createElement(
      MarkupField,
      __assign({}, props, { type: 'date' })
    )
  }
  DateField.displayName = 'DateField'
  function DateTimeField(props) {
    return React.createElement(
      MarkupField,
      __assign({}, props, { type: 'datetime' })
    )
  }
  DateTimeField.displayName = 'DateTimeField'
  function VoidField(props) {
    return React.createElement(
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
//# sourceMappingURL=SchemaField.js.map
