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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.ArrayTable = void 0
var composition_api_1 = require('@vue/composition-api')
var reactive_1 = require('@formily/reactive')
var vue_1 = require('@formily/vue')
var reactive_vue_1 = require('@formily/reactive-vue')
var shared_1 = require('@formily/shared')
var array_base_1 = require('../array-base')
var configs_1 = require('../__builtins__/configs')
var shared_2 = require('../__builtins__/shared')
var element_ui_1 = require('element-ui')
var space_1 = require('../space')
var RecursionField = vue_1.RecursionField
var isColumnComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('Column')) > -1
  )
}
var isOperationsComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('Operations')) > -1
  )
}
var isAdditionComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('Addition')) > -1
  )
}
var getArrayTableSources = function (arrayFieldRef, schemaRef) {
  var arrayField = arrayFieldRef.value
  var parseSources = function (schema) {
    var _a, _b, _c
    if (
      isColumnComponent(schema) ||
      isOperationsComponent(schema) ||
      isAdditionComponent(schema)
    ) {
      if (
        !((_a = schema['x-component-props']) === null || _a === void 0
          ? void 0
          : _a['prop']) &&
        !schema['name']
      )
        return []
      var name_1 =
        ((_b = schema['x-component-props']) === null || _b === void 0
          ? void 0
          : _b['prop']) || schema['name']
      var field = arrayField.query(arrayField.address.concat(name_1)).take()
      var fieldProps =
        (field === null || field === void 0 ? void 0 : field.props) ||
        schema.toFieldProps()
      var columnProps =
        ((_c =
          field === null || field === void 0 ? void 0 : field.component) ===
          null || _c === void 0
          ? void 0
          : _c[1]) ||
        schema['x-component-props'] ||
        {}
      var display =
        (field === null || field === void 0 ? void 0 : field.display) ||
        schema['x-display']
      var required = schema.reduceProperties(function (required, property) {
        if (required) {
          return required
        }
        return !!property.required
      }, false)
      return [
        {
          name: name_1,
          display: display,
          required: required,
          field: field,
          fieldProps: fieldProps,
          schema: schema,
          columnProps: columnProps,
        },
      ]
    } else if (schema.properties) {
      return schema.reduceProperties(function (buf, schema) {
        return buf.concat(parseSources(schema))
      }, [])
    } else {
      return []
    }
  }
  var parseArrayTable = function (schema) {
    if (!schema) return []
    var sources = []
    var items = (0, shared_1.isArr)(schema) ? schema : [schema]
    return items.reduce(function (columns, schema) {
      var item = parseSources(schema)
      if (item) {
        return columns.concat(item)
      }
      return columns
    }, sources)
  }
  if (!schemaRef.value) throw new Error('can not found schema object')
  return parseArrayTable(schemaRef.value.items)
}
var getArrayTableColumns = function (reactiveDataSource, sources) {
  return sources.reduce(function (buf, _a, key) {
    var name = _a.name,
      columnProps = _a.columnProps,
      schema = _a.schema,
      display = _a.display,
      required = _a.required
    var title = columnProps.title,
      asterisk = columnProps.asterisk,
      props = __rest(columnProps, ['title', 'asterisk'])
    if (display !== 'visible') return buf
    if (!isColumnComponent(schema)) return buf
    var render =
      (columnProps === null || columnProps === void 0
        ? void 0
        : columnProps.type) &&
      (columnProps === null || columnProps === void 0
        ? void 0
        : columnProps.type) !== 'default'
        ? undefined
        : function (props) {
            // let index = props.$index
            var index = reactiveDataSource.value.indexOf(props.row)
            var children = (0, vue_1.h)(
              array_base_1.ArrayBase.Item,
              {
                props: { index: index, record: props.row },
                key: ''.concat(key).concat(index),
              },
              {
                default: function () {
                  return (0, vue_1.h)(
                    RecursionField,
                    {
                      props: {
                        schema: schema,
                        name: index,
                        onlyRenderProperties: true,
                      },
                    },
                    {}
                  )
                },
              }
            )
            return children
          }
    return buf.concat(
      __assign(__assign({ label: title }, props), {
        key: key,
        prop: name,
        asterisk:
          asterisk !== null && asterisk !== void 0 ? asterisk : required,
        render: render,
      })
    )
  }, [])
}
var renderAddition = function () {
  var schema = (0, vue_1.useFieldSchema)()
  return schema.value.reduceProperties(function (addition, schema) {
    if (isAdditionComponent(schema)) {
      return (0, vue_1.h)(
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
var StatusSelect = (0, reactive_vue_1.observer)(
  (0, composition_api_1.defineComponent)({
    props: {
      value: Number,
      onChange: Function,
      options: Array,
      pageSize: Number,
    },
    setup: function (props) {
      var _a
      var formRef = (0, vue_1.useForm)()
      var fieldRef = (0, vue_1.useField)()
      var prefixCls = ''.concat(configs_1.stylePrefix, '-array-table')
      var width =
        String(
          (_a = props.options) === null || _a === void 0 ? void 0 : _a.length
        ).length * 15
      return function () {
        var form = formRef.value
        var field = fieldRef.value
        var errors = form.queryFeedbacks({
          type: 'error',
          address: ''.concat(field.address, '.*'),
        })
        var createIndexPattern = function (page) {
          var pattern = ''
            .concat(field.address, '.*[')
            .concat((page - 1) * props.pageSize, ':')
            .concat(page * props.pageSize, '].*')
          return shared_1.FormPath.parse(pattern)
        }
        return (0, vue_1.h)(
          element_ui_1.Select,
          {
            style: {
              width: ''.concat(width < 60 ? 60 : width, 'px'),
            },
            class: [
              ''.concat(prefixCls, '-status-select'),
              {
                'has-error':
                  errors === null || errors === void 0 ? void 0 : errors.length,
              },
            ],
            props: {
              value: props.value,
              popperClass: ''.concat(prefixCls, '-status-select-dropdown'),
            },
            on: {
              input: props.onChange,
            },
          },
          {
            default: function () {
              var _a
              return (_a = props.options) === null || _a === void 0
                ? void 0
                : _a.map(function (_a) {
                    var label = _a.label,
                      value = _a.value
                    var hasError = errors.some(function (_a) {
                      var address = _a.address
                      return createIndexPattern(value).match(address)
                    })
                    return (0, vue_1.h)(
                      element_ui_1.Option,
                      {
                        key: value,
                        props: {
                          label: label,
                          value: value,
                        },
                      },
                      {
                        default: function () {
                          if (hasError) {
                            return (0, vue_1.h)(
                              element_ui_1.Badge,
                              {
                                props: {
                                  isDot: true,
                                },
                              },
                              {
                                default: function () {
                                  return label
                                },
                              }
                            )
                          }
                          return label
                        },
                      }
                    )
                  })
            },
          }
        )
      }
    },
  })
)
var ArrayTablePagination = (0, composition_api_1.defineComponent)({
  inheritAttrs: false,
  props: [],
  setup: function (props, _a) {
    var attrs = _a.attrs,
      slots = _a.slots
    var prefixCls = ''.concat(configs_1.stylePrefix, '-array-table')
    var current = (0, composition_api_1.ref)(1)
    return function () {
      var props = attrs
      var pageSize = props.pageSize || 10
      var dataSource = props.dataSource || []
      var startIndex = (current.value - 1) * pageSize
      var endIndex = startIndex + pageSize - 1
      var total =
        (dataSource === null || dataSource === void 0
          ? void 0
          : dataSource.length) || 0
      var totalPage = Math.ceil(total / pageSize)
      var pages = Array.from(new Array(totalPage)).map(function (_, index) {
        var page = index + 1
        return {
          label: page,
          value: page,
        }
      })
      var renderPagination = function () {
        if (totalPage <= 1) return
        return (0, vue_1.h)(
          'div',
          {
            class: [''.concat(prefixCls, '-pagination')],
          },
          {
            default: function () {
              return (0, vue_1.h)(
                space_1.Space,
                {},
                {
                  default: function () {
                    return [
                      (0, vue_1.h)(
                        StatusSelect,
                        {
                          props: {
                            value: current.value,
                            onChange: function (val) {
                              current.value = val
                            },
                            pageSize: pageSize,
                            options: pages,
                          },
                        },
                        {}
                      ),
                      (0, vue_1.h)(
                        element_ui_1.Pagination,
                        {
                          props: __assign(
                            __assign(
                              { background: true, layout: 'prev, pager, next' },
                              props
                            ),
                            {
                              pageSize: pageSize,
                              pageCount: totalPage,
                              currentPage: current.value,
                            }
                          ),
                          on: {
                            'current-change': function (val) {
                              current.value = val
                            },
                          },
                        },
                        {}
                      ),
                    ]
                  },
                }
              )
            },
          }
        )
      }
      return (0, vue_1.h)(
        vue_1.Fragment,
        {},
        {
          default: function () {
            var _a
            return (_a =
              slots === null || slots === void 0 ? void 0 : slots.default) ===
              null || _a === void 0
              ? void 0
              : _a.call(
                  slots,
                  dataSource === null || dataSource === void 0
                    ? void 0
                    : dataSource.slice(startIndex, endIndex + 1),
                  renderPagination
                )
          },
        }
      )
    }
  },
})
var ArrayTableInner = (0, reactive_vue_1.observer)(
  (0, composition_api_1.defineComponent)({
    name: 'FArrayTable',
    inheritAttrs: false,
    setup: function (props, _a) {
      var attrs = _a.attrs,
        listeners = _a.listeners,
        slots = _a.slots
      var fieldRef = (0, vue_1.useField)()
      var schemaRef = (0, vue_1.useFieldSchema)()
      var prefixCls = ''.concat(configs_1.stylePrefix, '-array-table')
      var _b = array_base_1.ArrayBase.useKey(schemaRef.value),
        getKey = _b.getKey,
        keyMap = _b.keyMap
      var defaultRowKey = function (record) {
        return getKey(record)
      }
      var reactiveDataSource = (0, composition_api_1.shallowRef)([])
      var dispose = (0, reactive_1.observe)(
        fieldRef.value,
        function () {
          reactiveDataSource.value = fieldRef.value.value
        },
        false
      )
      ;(0, composition_api_1.onBeforeUnmount)(dispose)
      return function () {
        var props = attrs
        var field = fieldRef.value
        var dataSource = Array.isArray(field.value) ? field.value.slice() : []
        var pagination = props.pagination
        var sources = getArrayTableSources(fieldRef, schemaRef)
        var columns = getArrayTableColumns(reactiveDataSource, sources)
        var renderColumns = function () {
          return columns.map(function (_a) {
            var key = _a.key,
              render = _a.render,
              asterisk = _a.asterisk,
              props = __rest(_a, ['key', 'render', 'asterisk'])
            var children = {}
            if (render) {
              children.default = render
            }
            if (asterisk) {
              children.header = function (_a) {
                var column = _a.column
                return (0, vue_1.h)(
                  'span',
                  {},
                  {
                    default: function () {
                      return [
                        (0, vue_1.h)(
                          'span',
                          { class: ''.concat(prefixCls, '-asterisk') },
                          {
                            default: function () {
                              return ['*']
                            },
                          }
                        ),
                        column.label,
                      ]
                    },
                  }
                )
              }
            }
            return (0, vue_1.h)(
              element_ui_1.TableColumn,
              {
                key: key,
                props: props,
              },
              children
            )
          })
        }
        var renderStateManager = function () {
          return sources.map(function (column, key) {
            //专门用来承接对Column的状态管理
            if (!isColumnComponent(column.schema)) return
            return (0, vue_1.h)(
              RecursionField,
              {
                props: {
                  name: column.name,
                  schema: column.schema,
                  onlyRenderSelf: true,
                },
                key: key,
              },
              {}
            )
          })
        }
        var renderTable = function (dataSource, pager) {
          return (0, vue_1.h)(
            'div',
            { class: prefixCls },
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
                      return [
                        (0, vue_1.h)(
                          element_ui_1.Table,
                          {
                            props: __assign(
                              __assign({ rowKey: defaultRowKey }, attrs),
                              { data: dataSource }
                            ),
                            on: listeners,
                          },
                          __assign(__assign({}, slots), {
                            default: renderColumns,
                          })
                        ),
                        pager === null || pager === void 0 ? void 0 : pager(),
                        renderStateManager(),
                        renderAddition(),
                      ]
                    },
                  }
                )
              },
            }
          )
        }
        if (!pagination) {
          return renderTable(dataSource, null)
        }
        return (0, vue_1.h)(
          ArrayTablePagination,
          {
            attrs: __assign(
              __assign({}, (0, shared_1.isBool)(pagination) ? {} : pagination),
              { dataSource: dataSource }
            ),
          },
          { default: renderTable }
        )
      }
    },
  })
)
var ArrayTableColumn = {
  name: 'FArrayTableColumn',
  render: function (h) {
    return h()
  },
}
exports.ArrayTable = (0, shared_2.composeExport)(ArrayTableInner, {
  Column: ArrayTableColumn,
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
exports.default = exports.ArrayTable
//# sourceMappingURL=index.js.map
