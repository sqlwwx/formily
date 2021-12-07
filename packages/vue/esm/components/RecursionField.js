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
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator]
    if (!m) return o
    var i = m.call(o),
      r,
      ar = [],
      e
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
    } catch (error) {
      e = { error: error }
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i)
      } finally {
        if (e) throw e.error
      }
    }
    return ar
  }
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i)
          ar[i] = from[i]
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from))
  }
import { inject, provide, watch, defineComponent, shallowRef } from 'vue-demi'
import { isFn, isValid } from '@formily/shared'
import { Schema } from '@formily/json-schema'
import { observer } from '@formily/reactive-vue'
import {
  SchemaSymbol,
  SchemaOptionsSymbol,
  SchemaExpressionScopeSymbol,
} from '../shared'
import { useField } from '../hooks'
import ObjectField from './ObjectField'
import ArrayField from './ArrayField'
import Field from './Field'
import VoidField from './VoidField'
import { h } from '../shared/h'
import { Fragment } from '../shared/fragment'
var RecursionField = observer(
  defineComponent({
    name: 'RecursionField',
    inheritAttrs: false,
    props: {
      schema: {
        required: true,
      },
      name: [String, Number],
      basePath: {},
      onlyRenderProperties: {
        type: Boolean,
        default: undefined,
      },
      onlyRenderSelf: {
        type: Boolean,
        default: undefined,
      },
      mapProperties: {},
      filterProperties: {},
    },
    setup: function (props) {
      var parentRef = useField()
      var optionsRef = inject(SchemaOptionsSymbol)
      var scopeRef = inject(SchemaExpressionScopeSymbol)
      var createSchema = function (schemaProp) {
        return new Schema(schemaProp)
      }
      var fieldSchemaRef = shallowRef(createSchema(props.schema))
      watch(
        [
          function () {
            return props.schema
          },
        ],
        function () {
          fieldSchemaRef.value = createSchema(props.schema)
        }
      )
      var getPropsFromSchema = function (schema) {
        var _a
        return (_a =
          schema === null || schema === void 0
            ? void 0
            : schema.toFieldProps) === null || _a === void 0
          ? void 0
          : _a.call(
              schema,
              __assign(__assign({}, optionsRef.value), {
                get scope() {
                  return __assign(
                    __assign({}, optionsRef.value.scope),
                    scopeRef.value
                  )
                },
              })
            )
      }
      var fieldPropsRef = shallowRef(getPropsFromSchema(fieldSchemaRef.value))
      watch([fieldSchemaRef, optionsRef], function () {
        fieldPropsRef.value = getPropsFromSchema(fieldSchemaRef.value)
      })
      var getBasePath = function () {
        var _a, _b
        if (props.onlyRenderProperties) {
          return (
            props.basePath ||
            ((_a =
              parentRef === null || parentRef === void 0
                ? void 0
                : parentRef.value) === null || _a === void 0
              ? void 0
              : _a.address.concat(props.name))
          )
        }
        return (
          props.basePath ||
          ((_b =
            parentRef === null || parentRef === void 0
              ? void 0
              : parentRef.value) === null || _b === void 0
            ? void 0
            : _b.address)
        )
      }
      provide(SchemaSymbol, fieldSchemaRef)
      return function () {
        var basePath = getBasePath()
        var fieldProps = fieldPropsRef.value
        var renderProperties = function (field) {
          if (props.onlyRenderSelf) return
          var properties = Schema.getOrderProperties(fieldSchemaRef.value)
          if (!properties.length) return
          var children = properties.map(function (_a) {
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
            return h(
              RecursionField,
              {
                key: name,
                attrs: {
                  schema: schema,
                  name: name,
                  basePath: base,
                },
              },
              {}
            )
          })
          var slots = {}
          if (children.length > 0) {
            slots.default = function () {
              return __spreadArray([], __read(children), false)
            }
          }
          return h(Fragment, {}, slots)
        }
        var render = function () {
          if (!isValid(props.name)) return renderProperties()
          if (fieldSchemaRef.value.type === 'object') {
            if (props.onlyRenderProperties) return renderProperties()
            return h(
              ObjectField,
              {
                attrs: __assign(__assign({}, fieldProps), {
                  name: props.name,
                  basePath: basePath,
                }),
              },
              {
                default: function (_a) {
                  var field = _a.field
                  return [renderProperties(field)]
                },
              }
            )
          } else if (fieldSchemaRef.value.type === 'array') {
            return h(
              ArrayField,
              {
                attrs: __assign(__assign({}, fieldProps), {
                  name: props.name,
                  basePath: basePath,
                }),
              },
              {}
            )
          } else if (fieldSchemaRef.value.type === 'void') {
            if (props.onlyRenderProperties) return renderProperties()
            return h(
              VoidField,
              {
                attrs: __assign(__assign({}, fieldProps), {
                  name: props.name,
                  basePath: basePath,
                }),
              },
              {
                default: function (_a) {
                  var field = _a.field
                  return [renderProperties(field)]
                },
              }
            )
          }
          return h(
            Field,
            {
              attrs: __assign(__assign({}, fieldProps), {
                name: props.name,
                basePath: basePath,
              }),
            },
            {}
          )
        }
        if (!fieldSchemaRef.value) return
        return render()
      }
    },
  })
)
export default RecursionField
//# sourceMappingURL=RecursionField.js.map
