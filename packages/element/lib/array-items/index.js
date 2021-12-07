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
exports.ArrayItems = void 0
var composition_api_1 = require('@vue/composition-api')
var vue_1 = require('@formily/vue')
var reactive_vue_1 = require('@formily/reactive-vue')
var configs_1 = require('../__builtins__/configs')
var array_base_1 = require('../array-base')
var vue_slicksort_1 = require('vue-slicksort')
var shared_1 = require('../__builtins__/shared')
var isAdditionComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('Addition')) > -1
  )
}
var ArrayItemsInner = (0, reactive_vue_1.observer)(
  (0, composition_api_1.defineComponent)({
    name: 'FArrayItems',
    setup: function (props, _a) {
      var attrs = _a.attrs
      var fieldRef = (0, vue_1.useField)()
      var schemaRef = (0, vue_1.useFieldSchema)()
      var prefixCls = ''.concat(configs_1.stylePrefix, '-array-items')
      var _b = array_base_1.ArrayBase.useKey(schemaRef.value),
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
                  return (0, vue_1.h)(
                    array_base_1.ArrayBase.Item,
                    {
                      key: key,
                      props: {
                        index: index,
                        record: item,
                      },
                    },
                    {
                      default: function () {
                        return (0, vue_1.h)(
                          vue_slicksort_1.SlickItem,
                          {
                            class: [''.concat(prefixCls, '-item-inner')],
                            props: {
                              index: index,
                            },
                            key: key,
                          },
                          {
                            default: function () {
                              return (0, vue_1.h)(
                                vue_1.RecursionField,
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
          return (0, vue_1.h)(
            vue_slicksort_1.SlickList,
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
              return (0, vue_1.h)(
                vue_1.RecursionField,
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
        return (0, vue_1.h)(
          array_base_1.ArrayBase,
          {
            props: {
              keyMap: keyMap,
            },
          },
          {
            default: function () {
              return (0, vue_1.h)(
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
var ArrayItemsItem = (0, composition_api_1.defineComponent)({
  name: 'FArrayItemsItem',
  props: ['type'],
  setup: function (props, _a) {
    var attrs = _a.attrs,
      slots = _a.slots
    var prefixCls = ''.concat(configs_1.stylePrefix, '-array-items')
    return function () {
      return (0, vue_1.h)(
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
exports.ArrayItems = (0, shared_1.composeExport)(ArrayItemsInner, {
  Item: ArrayItemsItem,
  Index: array_base_1.ArrayBase.Index,
  SortHandle: array_base_1.ArrayBase.SortHandle,
  Addition: array_base_1.ArrayBase.Addition,
  Remove: array_base_1.ArrayBase.Remove,
  MoveDown: array_base_1.ArrayBase.MoveDown,
  MoveUp: array_base_1.ArrayBase.MoveUp,
  useArray: array_base_1.ArrayBase.useArray,
  useIndex: array_base_1.ArrayBase.useIndex,
  useRecord: array_base_1.ArrayBase.useRecord,
})
exports.default = exports.ArrayItems
//# sourceMappingURL=index.js.map
