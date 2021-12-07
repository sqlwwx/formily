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
exports.ArrayCards = void 0
var composition_api_1 = require('@vue/composition-api')
var element_ui_1 = require('element-ui')
var vue_1 = require('@formily/vue')
var reactive_vue_1 = require('@formily/reactive-vue')
var configs_1 = require('../__builtins__/configs')
var array_base_1 = require('../array-base')
var shared_1 = require('../__builtins__/shared')
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
var ArrayCardsInner = (0, reactive_vue_1.observer)(
  (0, composition_api_1.defineComponent)({
    name: 'FArrayCards',
    props: [],
    setup: function (props, _a) {
      var attrs = _a.attrs
      var fieldRef = (0, vue_1.useField)()
      var schemaRef = (0, vue_1.useFieldSchema)()
      var prefixCls = ''.concat(configs_1.stylePrefix, '-array-cards')
      var _b = array_base_1.ArrayBase.useKey(schemaRef.value),
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
                var title = (0, vue_1.h)(
                  'span',
                  {},
                  {
                    default: function () {
                      return [
                        (0, vue_1.h)(
                          vue_1.RecursionField,
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
                var extra = (0, vue_1.h)(
                  'span',
                  {},
                  {
                    default: function () {
                      return [
                        (0, vue_1.h)(
                          vue_1.RecursionField,
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
                var content = (0, vue_1.h)(
                  vue_1.RecursionField,
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
                return (0, vue_1.h)(
                  array_base_1.ArrayBase.Item,
                  {
                    key: getKey(item, index),
                    props: {
                      index: index,
                      record: item,
                    },
                  },
                  {
                    default: function () {
                      return (0, vue_1.h)(
                        element_ui_1.Card,
                        {
                          class: [''.concat(prefixCls, '-item')],
                          attrs: __assign({ shadow: 'never' }, attrs),
                        },
                        {
                          default: function () {
                            return [content]
                          },
                          header: function () {
                            return (0, vue_1.h)(
                              element_ui_1.Row,
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
        var renderEmpty = function () {
          if (
            dataSource === null || dataSource === void 0
              ? void 0
              : dataSource.length
          )
            return
          return (0, vue_1.h)(
            element_ui_1.Card,
            {
              class: [''.concat(prefixCls, '-item')],
              attrs: __assign(__assign({ shadow: 'never' }, attrs), {
                header: attrs.title || field.title,
              }),
            },
            {
              default: function () {
                return (0, vue_1.h)(
                  element_ui_1.Empty,
                  { props: { description: 'No Data', imageSize: 100 } },
                  {}
                )
              },
            }
          )
        }
        return (0, vue_1.h)(
          'div',
          {
            class: [prefixCls],
          },
          {
            default: function () {
              return (0, vue_1.h)(
                array_base_1.ArrayBase,
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
exports.ArrayCards = (0, shared_1.composeExport)(ArrayCardsInner, {
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
exports.default = exports.ArrayCards
//# sourceMappingURL=index.js.map
