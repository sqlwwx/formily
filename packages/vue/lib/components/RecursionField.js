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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var vue_demi_1 = require('vue-demi')
var shared_1 = require('@formily/shared')
var json_schema_1 = require('@formily/json-schema')
var reactive_vue_1 = require('@formily/reactive-vue')
var shared_2 = require('../shared')
var hooks_1 = require('../hooks')
var ObjectField_1 = __importDefault(require('./ObjectField'))
var ArrayField_1 = __importDefault(require('./ArrayField'))
var Field_1 = __importDefault(require('./Field'))
var VoidField_1 = __importDefault(require('./VoidField'))
var h_1 = require('../shared/h')
var fragment_1 = require('../shared/fragment')
var RecursionField = (0, reactive_vue_1.observer)(
  (0, vue_demi_1.defineComponent)({
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
      var parentRef = (0, hooks_1.useField)()
      var optionsRef = (0, vue_demi_1.inject)(shared_2.SchemaOptionsSymbol)
      var scopeRef = (0, vue_demi_1.inject)(
        shared_2.SchemaExpressionScopeSymbol
      )
      var createSchema = function (schemaProp) {
        return new json_schema_1.Schema(schemaProp)
      }
      var fieldSchemaRef = (0, vue_demi_1.shallowRef)(
        createSchema(props.schema)
      )
      ;(0, vue_demi_1.watch)(
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
      var fieldPropsRef = (0, vue_demi_1.shallowRef)(
        getPropsFromSchema(fieldSchemaRef.value)
      )
      ;(0, vue_demi_1.watch)([fieldSchemaRef, optionsRef], function () {
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
      ;(0, vue_demi_1.provide)(shared_2.SchemaSymbol, fieldSchemaRef)
      return function () {
        var basePath = getBasePath()
        var fieldProps = fieldPropsRef.value
        var renderProperties = function (field) {
          if (props.onlyRenderSelf) return
          var properties = json_schema_1.Schema.getOrderProperties(
            fieldSchemaRef.value
          )
          if (!properties.length) return
          var children = properties.map(function (_a) {
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
            return (0, h_1.h)(
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
          return (0, h_1.h)(fragment_1.Fragment, {}, slots)
        }
        var render = function () {
          if (!(0, shared_1.isValid)(props.name)) return renderProperties()
          if (fieldSchemaRef.value.type === 'object') {
            if (props.onlyRenderProperties) return renderProperties()
            return (0, h_1.h)(
              ObjectField_1.default,
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
            return (0, h_1.h)(
              ArrayField_1.default,
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
            return (0, h_1.h)(
              VoidField_1.default,
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
          return (0, h_1.h)(
            Field_1.default,
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
exports.default = RecursionField
//# sourceMappingURL=RecursionField.js.map
