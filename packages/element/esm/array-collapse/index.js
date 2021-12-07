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
import { defineComponent, ref, watchEffect } from '@vue/composition-api'
import Card from 'element-ui/lib/card'
import Collapse from 'element-ui/lib/collapse'
import CollapseItem from 'element-ui/lib/collapse-item'
import Empty from 'element-ui/lib/empty'
import Row from 'element-ui/lib/row'
import Badge from 'element-ui/lib/badge'
import {
  useField,
  useFieldSchema,
  RecursionField,
  h,
  Fragment,
} from '@formily/vue'
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
var range = function (count) {
  return Array.from({ length: count }).map(function (_, i) {
    return i
  })
}
var takeDefaultActiveKeys = function (
  dataSourceLength,
  defaultOpenPanelCount,
  accordion
) {
  if (accordion === void 0) {
    accordion = false
  }
  if (accordion) {
    return 0
  }
  if (dataSourceLength < defaultOpenPanelCount) return range(dataSourceLength)
  return range(defaultOpenPanelCount)
}
var insertActiveKeys = function (activeKeys, index, accordion) {
  if (accordion === void 0) {
    accordion = false
  }
  if (accordion) return index
  if (activeKeys.length <= index) return activeKeys.concat(index)
  return activeKeys.reduce(function (buf, key) {
    if (key < index) return buf.concat(key)
    if (key === index) return buf.concat([key, key + 1])
    return buf.concat(key + 1)
  }, [])
}
export var ArrayCollapseInner = observer(
  defineComponent({
    name: 'FArrayCollapse',
    props: {
      defaultOpenPanelCount: {
        type: Number,
        default: 5,
      },
    },
    setup: function (props, _a) {
      var attrs = _a.attrs
      var fieldRef = useField()
      var schemaRef = useFieldSchema()
      var prefixCls = ''.concat(stylePrefix, '-array-collapse')
      var activeKeys = ref([])
      watchEffect(function () {
        var field = fieldRef.value
        var dataSource = Array.isArray(field.value) ? field.value.slice() : []
        if (!field.modified && dataSource.length) {
          activeKeys.value = takeDefaultActiveKeys(
            dataSource.length,
            props.defaultOpenPanelCount,
            attrs.accordion
          )
        }
      })
      var _b = ArrayBase.useKey(schemaRef.value),
        getKey = _b.getKey,
        keyMap = _b.keyMap
      return function () {
        var field = fieldRef.value
        var schema = schemaRef.value
        var dataSource = Array.isArray(field.value) ? field.value.slice() : []
        if (!schema) throw new Error('can not found schema object')
        var renderItems = function () {
          if (!dataSource.length) {
            return null
          }
          var items =
            dataSource === null || dataSource === void 0
              ? void 0
              : dataSource.map(function (item, index) {
                  var items = Array.isArray(schema.items)
                    ? schema.items[index] || schema.items[0]
                    : schema.items
                  var key = getKey(item, index)
                  var panelProps = field
                    .query(''.concat(field.address, '.').concat(index))
                    .get('componentProps')
                  var props = items['x-component-props']
                  var headerTitle =
                    (panelProps === null || panelProps === void 0
                      ? void 0
                      : panelProps.title) ||
                    props.title ||
                    field.title
                  var path = field.address.concat(index)
                  var errors = field.form.queryFeedbacks({
                    type: 'error',
                    address: ''.concat(path, '.**'),
                  })
                  var title = h(
                    ArrayBase.Item,
                    {
                      props: {
                        index: index,
                        record: item,
                      },
                    },
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
                          errors.length
                            ? h(
                                Badge,
                                {
                                  class: [
                                    ''.concat(prefixCls, '-errors-badge'),
                                  ],
                                  props: {
                                    value: errors.length,
                                  },
                                },
                                {
                                  default: function () {
                                    return headerTitle
                                  },
                                }
                              )
                            : headerTitle,
                        ]
                      },
                    }
                  )
                  var extra = h(
                    ArrayBase.Item,
                    {
                      props: {
                        index: index,
                        record: item,
                      },
                    },
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
                                  if (!isOperationComponent(schema))
                                    return false
                                  return true
                                },
                                onlyRenderProperties: true,
                              },
                            },
                            {}
                          ),
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
                    CollapseItem,
                    {
                      attrs: __assign(
                        __assign(__assign({}, props), panelProps),
                        { name: index }
                      ),
                      key: key,
                    },
                    {
                      default: function () {
                        return [
                          h(
                            ArrayBase.Item,
                            {
                              props: {
                                index: index,
                                record: item,
                              },
                            },
                            {
                              default: function () {
                                return [content]
                              },
                            }
                          ),
                        ]
                      },
                      title: function () {
                        return h(
                          Row,
                          {
                            style: { flex: 1 },
                            props: {
                              type: 'flex',
                              justify: 'space-between',
                            },
                          },
                          {
                            default: function () {
                              return [
                                h(
                                  'span',
                                  {},
                                  {
                                    default: function () {
                                      return title
                                    },
                                  }
                                ),
                                h(
                                  'span',
                                  {},
                                  {
                                    default: function () {
                                      return extra
                                    },
                                  }
                                ),
                              ]
                            },
                          }
                        )
                      },
                    }
                  )
                })
          return h(
            Collapse,
            {
              class: [''.concat(prefixCls, '-item')],
              attrs: __assign(__assign({}, attrs), { value: activeKeys.value }),
              on: {
                change: function (keys) {
                  activeKeys.value = keys
                },
              },
            },
            {
              default: function () {
                return [items]
              },
            }
          )
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
                  on: {
                    add: function (index) {
                      activeKeys.value = insertActiveKeys(
                        activeKeys.value,
                        index,
                        attrs.accordion
                      )
                    },
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
export var ArrayCollapseItem = defineComponent({
  name: 'FArrayCollapseItem',
  setup: function (_props, _a) {
    var slots = _a.slots
    return function () {
      return h(Fragment, {}, slots)
    }
  },
})
export var ArrayCollapse = composeExport(ArrayCollapseInner, {
  Item: ArrayCollapseItem,
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
export default ArrayCollapse
//# sourceMappingURL=index.js.map
