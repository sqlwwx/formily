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
import { defineComponent } from '@vue/composition-api'
import Card from 'element-ui/lib/card'
import Empty from 'element-ui/lib/empty'
import Row from 'element-ui/lib/row'
import { useField, useFieldSchema, RecursionField, h } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { stylePrefix } from '../__builtins__/configs'
import { ArrayBase } from '../array-base'
import { composeExport } from '../__builtins__/shared'
var isAdditionComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('Addition')) > -1
  )
}
var isIndexComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('Index')) > -1
  )
}
var isRemoveComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('Remove')) > -1
  )
}
var isMoveUpComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('MoveUp')) > -1
  )
}
var isMoveDownComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('MoveDown')) > -1
  )
}
var isOperationComponent = function (schema) {
  return (
    isAdditionComponent(schema) ||
    isRemoveComponent(schema) ||
    isMoveDownComponent(schema) ||
    isMoveUpComponent(schema)
  )
}
var ArrayCardsInner = observer(
  defineComponent({
    name: 'FArrayCards',
    props: [],
    setup: function (props, _a) {
      var attrs = _a.attrs
      var fieldRef = useField()
      var schemaRef = useFieldSchema()
      var prefixCls = ''.concat(stylePrefix, '-array-cards')
      var _b = ArrayBase.useKey(schemaRef.value),
        getKey = _b.getKey,
        keyMap = _b.keyMap
      return function () {
        var field = fieldRef.value
        var schema = schemaRef.value
        var dataSource = Array.isArray(field.value) ? field.value : []
        if (!schema) throw new Error('can not found schema object')
        var renderItems = function () {
          return dataSource === null || dataSource === void 0
            ? void 0
            : dataSource.map(function (item, index) {
                var items = Array.isArray(schema.items)
                  ? schema.items[index] || schema.items[0]
                  : schema.items
                var title = h(
                  'span',
                  {},
                  {
                    default: function () {
                      return [
                        h(
                          RecursionField,
                          {
                            props: {
                              schema: items,
                              name: index,
                              filterProperties: function (schema) {
                                if (!isIndexComponent(schema)) return false
                                return true
                              },
                              onlyRenderProperties: true,
                            },
                          },
                          {}
                        ),
                        attrs.title || field.title,
                      ]
                    },
                  }
                )
                var extra = h(
                  'span',
                  {},
                  {
                    default: function () {
                      return [
                        h(
                          RecursionField,
                          {
                            props: {
                              schema: items,
                              name: index,
                              filterProperties: function (schema) {
                                if (!isOperationComponent(schema)) return false
                                return true
                              },
                              onlyRenderProperties: true,
                            },
                          },
                          {}
                        ),
                        attrs.extra,
                      ]
                    },
                  }
                )
                var content = h(
                  RecursionField,
                  {
                    props: {
                      schema: items,
                      name: index,
                      filterProperties: function (schema) {
                        if (isIndexComponent(schema)) return false
                        if (isOperationComponent(schema)) return false
                        return true
                      },
                    },
                  },
                  {}
                )
                return h(
                  ArrayBase.Item,
                  {
                    key: getKey(item, index),
                    props: {
                      index: index,
                      record: item,
                    },
                  },
                  {
                    default: function () {
                      return h(
                        Card,
                        {
                          class: [''.concat(prefixCls, '-item')],
                          attrs: __assign({ shadow: 'never' }, attrs),
                        },
                        {
                          default: function () {
                            return [content]
                          },
                          header: function () {
                            return h(
                              Row,
                              {
                                props: {
                                  type: 'flex',
                                  justify: 'space-between',
                                },
                              },
                              {
                                default: function () {
                                  return [title, extra]
                                },
                              }
                            )
                          },
                        }
                      )
                    },
                  }
                )
              })
        }
        var renderAddition = function () {
          return schema.reduceProperties(function (addition, schema) {
            if (isAdditionComponent(schema)) {
              return h(
                RecursionField,
                {
                  props: {
                    schema: schema,
                    name: 'addition',
                  },
                },
                {}
              )
            }
            return addition
          }, null)
        }
        var renderEmpty = function () {
          if (
            dataSource === null || dataSource === void 0
              ? void 0
              : dataSource.length
          )
            return
          return h(
            Card,
            {
              class: [''.concat(prefixCls, '-item')],
              attrs: __assign(__assign({ shadow: 'never' }, attrs), {
                header: attrs.title || field.title,
              }),
            },
            {
              default: function () {
                return h(
                  Empty,
                  { props: { description: 'No Data', imageSize: 100 } },
                  {}
                )
              },
            }
          )
        }
        return h(
          'div',
          {
            class: [prefixCls],
          },
          {
            default: function () {
              return h(
                ArrayBase,
                {
                  props: {
                    keyMap: keyMap,
                  },
                },
                {
                  default: function () {
                    return [renderEmpty(), renderItems(), renderAddition()]
                  },
                }
              )
            },
          }
        )
      }
    },
  })
)
export var ArrayCards = composeExport(ArrayCardsInner, {
  Index: ArrayBase.Index,
  SortHandle: ArrayBase.SortHandle,
  Addition: ArrayBase.Addition,
  Remove: ArrayBase.Remove,
  MoveDown: ArrayBase.MoveDown,
  MoveUp: ArrayBase.MoveUp,
  useArray: ArrayBase.useArray,
  useIndex: ArrayBase.useIndex,
  useRecord: ArrayBase.useRecord,
})
export default ArrayCards
//# sourceMappingURL=index.js.map
