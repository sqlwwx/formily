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
import React, { Fragment, useContext, useRef, useMemo } from 'react'
import { isFn, isValid } from '@formily/shared'
import { Schema } from '@formily/json-schema'
import {
  SchemaContext,
  SchemaOptionsContext,
  SchemaExpressionScopeContext,
} from '../shared'
import { useField } from '../hooks'
import { ObjectField } from './ObjectField'
import { ArrayField } from './ArrayField'
import { Field } from './Field'
import { VoidField } from './VoidField'
var useFieldProps = function (schema) {
  var options = useContext(SchemaOptionsContext)
  var scope = useContext(SchemaExpressionScopeContext)
  var scopeRef = useRef()
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
  var parent = useField()
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
export var RecursionField = function (props) {
  var basePath = useBasePath(props)
  var fieldSchema = useMemo(
    function () {
      return new Schema(props.schema)
    },
    [props.schema]
  )
  var fieldProps = useFieldProps(fieldSchema)
  var renderProperties = function (field) {
    if (props.onlyRenderSelf) return
    var properties = Schema.getOrderProperties(fieldSchema)
    if (!properties.length) return
    return React.createElement(
      Fragment,
      null,
      properties.map(function (_a, index) {
        var item = _a.schema,
          name = _a.key
        var base =
          (field === null || field === void 0 ? void 0 : field.address) ||
          basePath
        var schema = item
        if (isFn(props.mapProperties)) {
          var mapped = props.mapProperties(item, name)
          if (mapped) {
            schema = mapped
          }
        }
        if (isFn(props.filterProperties)) {
          if (props.filterProperties(schema, name) === false) {
            return null
          }
        }
        return React.createElement(RecursionField, {
          schema: schema,
          key: ''.concat(index, '-').concat(name),
          name: name,
          basePath: base,
        })
      })
    )
  }
  var render = function () {
    if (!isValid(props.name)) return renderProperties()
    if (fieldSchema.type === 'object') {
      if (props.onlyRenderProperties) return renderProperties()
      return React.createElement(
        ObjectField,
        __assign({}, fieldProps, { name: props.name, basePath: basePath }),
        renderProperties
      )
    } else if (fieldSchema.type === 'array') {
      return React.createElement(
        ArrayField,
        __assign({}, fieldProps, { name: props.name, basePath: basePath })
      )
    } else if (fieldSchema.type === 'void') {
      if (props.onlyRenderProperties) return renderProperties()
      return React.createElement(
        VoidField,
        __assign({}, fieldProps, { name: props.name, basePath: basePath }),
        renderProperties
      )
    }
    return React.createElement(
      Field,
      __assign({}, fieldProps, { name: props.name, basePath: basePath })
    )
  }
  if (!fieldSchema) return React.createElement(Fragment, null)
  return React.createElement(
    SchemaContext.Provider,
    { value: fieldSchema },
    render()
  )
}
//# sourceMappingURL=RecursionField.js.map
