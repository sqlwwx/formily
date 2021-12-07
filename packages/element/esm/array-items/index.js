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
import { useField, useFieldSchema, RecursionField, h } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { stylePrefix } from '../__builtins__/configs'
import { ArrayBase } from '../array-base'
import { SlickList, SlickItem } from 'vue-slicksort'
import { composeExport } from '../__builtins__/shared'
var isAdditionComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('Addition')) > -1
  )
}
var ArrayItemsInner = observer(
  defineComponent({
    name: 'FArrayItems',
    setup: function (props, _a) {
      var attrs = _a.attrs
      var fieldRef = useField()
      var schemaRef = useFieldSchema()
      var prefixCls = ''.concat(stylePrefix, '-array-items')
      var _b = ArrayBase.useKey(schemaRef.value),
        getKey = _b.getKey,
        keyMap = _b.keyMap
      return function () {
        var field = fieldRef.value
        var schema = schemaRef.value
        var dataSource = Array.isArray(field.value) ? field.value.slice() : []
        var renderItems = function () {
          var items =
            dataSource === null || dataSource === void 0
              ? void 0
              : dataSource.map(function (item, index) {
                  var items = Array.isArray(schema.items)
                    ? schema.items[index] || schema.items[0]
                    : schema.items
                  var key = getKey(item, index)
                  return h(
                    ArrayBase.Item,
                    {
                      key: key,
                      props: {
                        index: index,
                        record: item,
                      },
                    },
                    {
                      default: function () {
                        return h(
                          SlickItem,
                          {
                            class: [''.concat(prefixCls, '-item-inner')],
                            props: {
                              index: index,
                            },
                            key: key,
                          },
                          {
                            default: function () {
                              return h(
                                RecursionField,
                                {
                                  props: {
                                    schema: items,
                                    name: index,
                                  },
                                },
                                {}
                              )
                            },
                          }
                        )
                      },
                    }
                  )
                })
          return h(
            SlickList,
            {
              class: [''.concat(prefixCls, '-list')],
              props: {
                useDragHandle: true,
                lockAxis: 'y',
                helperClass: ''.concat(prefixCls, '-sort-helper'),
                value: [],
              },
              on: {
                'sort-end': function (_a) {
                  var oldIndex = _a.oldIndex,
                    newIndex = _a.newIndex
                  if (Array.isArray(keyMap)) {
                    keyMap.splice(newIndex, 0, keyMap.splice(oldIndex, 1)[0])
                  }
                  field.move(oldIndex, newIndex)
                },
              },
            },
            {
              default: function () {
                return items
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
        return h(
          ArrayBase,
          {
            props: {
              keyMap: keyMap,
            },
          },
          {
            default: function () {
              return h(
                'div',
                {
                  class: [prefixCls],
                  on: {
                    change: function () {},
                  },
                },
                {
                  default: function () {
                    return [renderItems(), renderAddition()]
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
var ArrayItemsItem = defineComponent({
  name: 'FArrayItemsItem',
  props: ['type'],
  setup: function (props, _a) {
    var attrs = _a.attrs,
      slots = _a.slots
    var prefixCls = ''.concat(stylePrefix, '-array-items')
    return function () {
      return h(
        'div',
        {
          class: [''.concat(prefixCls, '-').concat(props.type || 'card')],
          attrs: __assign({}, attrs),
          on: {
            change: function () {},
          },
        },
        slots
      )
    }
  },
})
export var ArrayItems = composeExport(ArrayItemsInner, {
  Item: ArrayItemsItem,
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
export default ArrayItems
//# sourceMappingURL=index.js.map
