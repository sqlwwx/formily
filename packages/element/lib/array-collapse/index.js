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
exports.ArrayCollapse =
  exports.ArrayCollapseItem =
  exports.ArrayCollapseInner =
    void 0
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
exports.ArrayCollapseInner = (0, reactive_vue_1.observer)(
  (0, composition_api_1.defineComponent)({
    name: 'FArrayCollapse',
    props: {
      defaultOpenPanelCount: {
        type: Number,
        default: 5,
      },
    },
    setup: function (props, _a) {
      var attrs = _a.attrs
      var fieldRef = (0, vue_1.useField)()
      var schemaRef = (0, vue_1.useFieldSchema)()
      var prefixCls = ''.concat(configs_1.stylePrefix, '-array-collapse')
      var activeKeys = (0, composition_api_1.ref)([])
      ;(0, composition_api_1.watchEffect)(function () {
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
      var _b = array_base_1.ArrayBase.useKey(schemaRef.value),
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
                  var title = (0, vue_1.h)(
                    array_base_1.ArrayBase.Item,
                    {
                      props: {
                        index: index,
                        record: item,
                      },
                    },
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
                          errors.length
                            ? (0, vue_1.h)(
                                element_ui_1.Badge,
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
                  var extra = (0, vue_1.h)(
                    array_base_1.ArrayBase.Item,
                    {
                      props: {
                        index: index,
                        record: item,
                      },
                    },
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
                    element_ui_1.CollapseItem,
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
                          (0, vue_1.h)(
                            array_base_1.ArrayBase.Item,
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
                        return (0, vue_1.h)(
                          element_ui_1.Row,
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
                                (0, vue_1.h)(
                                  'span',
                                  {},
                                  {
                                    default: function () {
                                      return title
                                    },
                                  }
                                ),
                                (0, vue_1.h)(
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
          return (0, vue_1.h)(
            element_ui_1.Collapse,
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
exports.ArrayCollapseItem = (0, composition_api_1.defineComponent)({
  name: 'FArrayCollapseItem',
  setup: function (_props, _a) {
    var slots = _a.slots
    return function () {
      return (0, vue_1.h)(vue_1.Fragment, {}, slots)
    }
  },
})
exports.ArrayCollapse = (0, shared_1.composeExport)(
  exports.ArrayCollapseInner,
  {
    Item: exports.ArrayCollapseItem,
    Index: array_base_1.ArrayBase.Index,
    SortHandle: array_base_1.ArrayBase.SortHandle,
    Addition: array_base_1.ArrayBase.Addition,
    Remove: array_base_1.ArrayBase.Remove,
    MoveDown: array_base_1.ArrayBase.MoveDown,
    MoveUp: array_base_1.ArrayBase.MoveUp,
    useArray: array_base_1.ArrayBase.useArray,
    useIndex: array_base_1.ArrayBase.useIndex,
    useRecord: array_base_1.ArrayBase.useRecord,
  }
)
exports.default = exports.ArrayCollapse
//# sourceMappingURL=index.js.map
