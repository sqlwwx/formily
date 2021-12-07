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
import {
  inject,
  provide,
  defineComponent,
  computed,
  shallowRef,
  watch,
} from 'vue-demi'
import { Schema } from '@formily/json-schema'
import { RecursionField } from '../components'
import {
  SchemaMarkupSymbol,
  SchemaExpressionScopeSymbol,
  SchemaOptionsSymbol,
} from '../shared'
import { resolveSchemaProps } from '../utils/resolveSchemaProps'
import { h } from '../shared/h'
import { Fragment } from '../shared/fragment'
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
export function createSchemaField(options) {
  var SchemaField = defineComponent({
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
      var schemaRef = computed(function () {
        return Schema.isSchemaInstance(props.schema)
          ? props.schema
          : new Schema(__assign({ type: 'object' }, props.schema))
      })
      var scopeRef = computed(function () {
        return __assign(__assign({}, options.scope), props.scope)
      })
      var optionsRef = computed(function () {
        return __assign(__assign({}, options), {
          components: __assign(
            __assign({}, options.components),
            props.components
          ),
        })
      })
      provide(SchemaMarkupSymbol, schemaRef)
      provide(SchemaOptionsSymbol, optionsRef)
      provide(SchemaExpressionScopeSymbol, scopeRef)
      return function () {
        env.nonameId = 0
        return h(
          Fragment,
          {},
          {
            default: function () {
              var children = []
              if (slots.default) {
                children.push(
                  h(
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
                h(
                  RecursionField,
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
  var MarkupField = defineComponent({
    name: 'MarkupField',
    props: Object.assign({}, markupProps, { type: String }),
    setup: function (props, _a) {
      var slots = _a.slots
      var parentRef = inject(SchemaMarkupSymbol, null)
      if (!parentRef || !parentRef.value)
        return function () {
          return h(Fragment, {}, {})
        }
      var resolvedProps = resolveSchemaProps(props)
      var name = props.name || getRandomName()
      var appendArraySchema = function (schema) {
        if (parentRef.value.items) {
          return parentRef.value.addProperty(name, schema)
        } else {
          return parentRef.value.setItems(resolvedProps)
        }
      }
      var schemaRef = shallowRef(null)
      watch(
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
      provide(SchemaMarkupSymbol, schemaRef)
      return function () {
        var children = {}
        if (slots.default) {
          children.default = function () {
            return slots.default()
          }
        }
        return h(Fragment, {}, children)
      }
    },
  })
  var SchemaFieldFactory = function (type, name) {
    return defineComponent({
      name: name,
      props: Object.assign({}, markupProps),
      setup: function (props, _a) {
        var slots = _a.slots
        return function () {
          return h(
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
//# sourceMappingURL=SchemaField.js.map
