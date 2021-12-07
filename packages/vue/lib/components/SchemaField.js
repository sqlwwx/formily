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
Object.defineProperty(exports, '__esModule', { value: true })
exports.createSchemaField = void 0
var vue_demi_1 = require('vue-demi')
var json_schema_1 = require('@formily/json-schema')
var components_1 = require('../components')
var shared_1 = require('../shared')
var resolveSchemaProps_1 = require('../utils/resolveSchemaProps')
var h_1 = require('../shared/h')
var fragment_1 = require('../shared/fragment')
var env = {
  nonameId: 0,
}
var getRandomName = function () {
  return 'NO_NAME_FIELD_$'.concat(env.nonameId++)
}
var markupProps = {
  version: String,
  name: [String, Number],
  title: {},
  description: {},
  default: {},
  readOnly: {
    type: Boolean,
    default: undefined,
  },
  writeOnly: {
    type: Boolean,
    default: undefined,
  },
  enum: {},
  const: {},
  multipleOf: Number,
  maximum: Number,
  exclusiveMaximum: Number,
  minimum: Number,
  exclusiveMinimum: Number,
  maxLength: Number,
  minLength: Number,
  pattern: {},
  maxItems: Number,
  minItems: Number,
  uniqueItems: {
    type: Boolean,
    default: undefined,
  },
  maxProperties: Number,
  minProperties: Number,
  required: {
    type: [Boolean, Array, String],
    default: undefined,
  },
  format: String,
  properties: {},
  items: {},
  additionalItems: {},
  patternProperties: {},
  additionalProperties: {},
  xIndex: Number,
  xPattern: {},
  xDisplay: {},
  xValidator: {},
  xDecorator: {},
  xDecoratorProps: {},
  xComponent: {},
  xComponentProps: {},
  xReactions: {},
  xContent: {},
  xVisible: {
    type: Boolean,
    default: undefined,
  },
  xHidden: {
    type: Boolean,
    default: undefined,
  },
  xDisabled: {
    type: Boolean,
    default: undefined,
  },
  xEditable: {
    type: Boolean,
    default: undefined,
  },
  xReadOnly: {
    type: Boolean,
    default: undefined,
  },
  xReadPretty: {
    type: Boolean,
    default: undefined,
  },
}
function createSchemaField(options) {
  var SchemaField = (0, vue_demi_1.defineComponent)({
    name: 'SchemaField',
    inheritAttrs: false,
    props: {
      schema: {},
      scope: {},
      components: {},
      basePath: {},
      title: {},
      description: {},
      value: {},
      initialValue: {},
      validator: {},
      dataSource: {},
      name: [String, Number],
      decorator: Array,
      component: Array,
      reactions: Array,
      display: String,
      pattern: String,
      required: {
        type: Boolean,
        default: undefined,
      },
      validateFirst: {
        type: Boolean,
        default: undefined,
      },
      hidden: {
        type: Boolean,
        default: undefined,
      },
      visible: {
        type: Boolean,
        default: undefined,
      },
      editable: {
        type: Boolean,
        default: undefined,
      },
      disabled: {
        type: Boolean,
        default: undefined,
      },
      readOnly: {
        type: Boolean,
        default: undefined,
      },
      readPretty: {
        type: Boolean,
        default: undefined,
      },
    },
    setup: function (props, _a) {
      var slots = _a.slots
      var schemaRef = (0, vue_demi_1.computed)(function () {
        return json_schema_1.Schema.isSchemaInstance(props.schema)
          ? props.schema
          : new json_schema_1.Schema(__assign({ type: 'object' }, props.schema))
      })
      var scopeRef = (0, vue_demi_1.computed)(function () {
        return __assign(__assign({}, options.scope), props.scope)
      })
      var optionsRef = (0, vue_demi_1.computed)(function () {
        return __assign(__assign({}, options), {
          components: __assign(
            __assign({}, options.components),
            props.components
          ),
        })
      })
      ;(0, vue_demi_1.provide)(shared_1.SchemaMarkupSymbol, schemaRef)
      ;(0, vue_demi_1.provide)(shared_1.SchemaOptionsSymbol, optionsRef)
      ;(0, vue_demi_1.provide)(shared_1.SchemaExpressionScopeSymbol, scopeRef)
      return function () {
        env.nonameId = 0
        return (0, h_1.h)(
          fragment_1.Fragment,
          {},
          {
            default: function () {
              var children = []
              if (slots.default) {
                children.push(
                  (0, h_1.h)(
                    'template',
                    {},
                    {
                      default: function () {
                        return slots.default()
                      },
                    }
                  )
                )
              }
              children.push(
                (0, h_1.h)(
                  components_1.RecursionField,
                  {
                    attrs: __assign(__assign({}, props), {
                      schema: schemaRef.value,
                    }),
                  },
                  {}
                )
              )
              return children
            },
          }
        )
      }
    },
  })
  var MarkupField = (0, vue_demi_1.defineComponent)({
    name: 'MarkupField',
    props: Object.assign({}, markupProps, { type: String }),
    setup: function (props, _a) {
      var slots = _a.slots
      var parentRef = (0, vue_demi_1.inject)(shared_1.SchemaMarkupSymbol, null)
      if (!parentRef || !parentRef.value)
        return function () {
          return (0, h_1.h)(fragment_1.Fragment, {}, {})
        }
      var resolvedProps = (0, resolveSchemaProps_1.resolveSchemaProps)(props)
      var name = props.name || getRandomName()
      var appendArraySchema = function (schema) {
        if (parentRef.value.items) {
          return parentRef.value.addProperty(name, schema)
        } else {
          return parentRef.value.setItems(resolvedProps)
        }
      }
      var schemaRef = (0, vue_demi_1.shallowRef)(null)
      ;(0, vue_demi_1.watch)(
        parentRef,
        function () {
          if (
            parentRef.value.type === 'object' ||
            parentRef.value.type === 'void'
          ) {
            schemaRef.value = parentRef.value.addProperty(name, resolvedProps)
          } else if (parentRef.value.type === 'array') {
            var schema = appendArraySchema(resolvedProps)
            schemaRef.value = Array.isArray(schema) ? schema[0] : schema
          }
        },
        { immediate: true }
      )
      ;(0, vue_demi_1.provide)(shared_1.SchemaMarkupSymbol, schemaRef)
      return function () {
        var children = {}
        if (slots.default) {
          children.default = function () {
            return slots.default()
          }
        }
        return (0, h_1.h)(fragment_1.Fragment, {}, children)
      }
    },
  })
  var SchemaFieldFactory = function (type, name) {
    return (0, vue_demi_1.defineComponent)({
      name: name,
      props: Object.assign({}, markupProps),
      setup: function (props, _a) {
        var slots = _a.slots
        return function () {
          return (0, h_1.h)(
            MarkupField,
            {
              attrs: __assign(__assign({}, props), { type: type }),
            },
            slots
          )
        }
      },
    })
  }
  return {
    SchemaField: SchemaField,
    SchemaMarkupField: MarkupField,
    SchemaStringField: SchemaFieldFactory('string', 'SchemaStringField'),
    SchemaObjectField: SchemaFieldFactory('object', 'SchemaObjectField'),
    SchemaArrayField: SchemaFieldFactory('array', 'SchemaArrayField'),
    SchemaBooleanField: SchemaFieldFactory('boolean', 'SchemaBooleanField'),
    SchemaDateField: SchemaFieldFactory('date', 'SchemaDateField'),
    SchemaDateTimeField: SchemaFieldFactory('datetime', 'SchemaDatetimeField'),
    SchemaVoidField: SchemaFieldFactory('void', 'SchemaVoidField'),
    SchemaNumberField: SchemaFieldFactory('number', 'SchemaNumberField'),
  }
}
exports.createSchemaField = createSchemaField
//# sourceMappingURL=SchemaField.js.map
