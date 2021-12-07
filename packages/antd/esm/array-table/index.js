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
import React, { Fragment, useState, useRef, useEffect } from 'react'
import { Table, Pagination, Space, Select, Badge } from 'antd'
import cls from 'classnames'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import {
  useForm,
  useField,
  observer,
  useFieldSchema,
  RecursionField,
} from '@formily/react'
import { isArr, isBool } from '@formily/shared'
import { usePrefixCls } from '../__builtins__'
import { ArrayBase } from '../array-base'
var SortableRow = SortableElement(function (props) {
  return React.createElement('tr', __assign({}, props))
})
var SortableBody = SortableContainer(function (props) {
  return React.createElement('tbody', __assign({}, props))
})
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
var useArrayTableSources = function () {
  var arrayField = useField()
  var schema = useFieldSchema()
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
          : _a['dataIndex']) &&
        !schema['name']
      )
        return []
      var name_1 =
        ((_b = schema['x-component-props']) === null || _b === void 0
          ? void 0
          : _b['dataIndex']) || schema['name']
      var field = arrayField.query(arrayField.address.concat(name_1)).take()
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
      return [
        {
          name: name_1,
          display: display,
          field: field,
          schema: schema,
          columnProps: columnProps,
        },
      ]
    } else if (schema.properties) {
      return schema.reduceProperties(function (buf, schema) {
        return buf.concat(parseSources(schema))
      }, [])
    }
  }
  var parseArrayItems = function (schema) {
    if (!schema) return []
    var sources = []
    var items = isArr(schema) ? schema : [schema]
    return items.reduce(function (columns, schema) {
      var item = parseSources(schema)
      if (item) {
        return columns.concat(item)
      }
      return columns
    }, sources)
  }
  if (!schema) throw new Error('can not found schema object')
  return parseArrayItems(schema.items)
}
var useArrayTableColumns = function (dataSource, sources) {
  return sources.reduce(function (buf, _a, key) {
    var name = _a.name,
      columnProps = _a.columnProps,
      schema = _a.schema,
      display = _a.display
    if (display !== 'visible') return buf
    if (!isColumnComponent(schema)) return buf
    return buf.concat(
      __assign(__assign({}, columnProps), {
        key: key,
        dataIndex: name,
        render: function (value, record) {
          var index = dataSource.indexOf(record)
          var children = React.createElement(
            ArrayBase.Item,
            { index: index, record: record },
            React.createElement(RecursionField, {
              schema: schema,
              name: index,
              onlyRenderProperties: true,
            })
          )
          return children
        },
      })
    )
  }, [])
}
var useAddition = function () {
  var schema = useFieldSchema()
  return schema.reduceProperties(function (addition, schema, key) {
    if (isAdditionComponent(schema)) {
      return React.createElement(RecursionField, { schema: schema, name: key })
    }
    return addition
  }, null)
}
var StatusSelect = observer(function (props) {
  var _a
  var form = useForm()
  var field = useField()
  var prefixCls = usePrefixCls('formily-array-table')
  var errors = form.queryFeedbacks({
    type: 'error',
    address: ''.concat(field.address, '.*'),
  })
  var parseIndex = function (address) {
    var _a
    return Number(
      (_a = address
        .slice(address.indexOf(field.address.toString()) + 1)
        .match(/(\d+)/)) === null || _a === void 0
        ? void 0
        : _a[1]
    )
  }
  var options =
    (_a = props.options) === null || _a === void 0
      ? void 0
      : _a.map(function (_a) {
          var label = _a.label,
            value = _a.value
          var hasError = errors.some(function (_a) {
            var address = _a.address
            var currentIndex = parseIndex(address)
            var startIndex = (value - 1) * props.pageSize
            var endIndex = value * props.pageSize
            return currentIndex >= startIndex && currentIndex <= endIndex
          })
          return {
            label: hasError
              ? React.createElement(Badge, { dot: true }, label)
              : label,
            value: value,
          }
        })
  var width =
    String(options === null || options === void 0 ? void 0 : options.length)
      .length * 15
  return React.createElement(Select, {
    value: props.value,
    onChange: props.onChange,
    options: options,
    virtual: true,
    style: {
      width: width < 60 ? 60 : width,
    },
    className: cls(''.concat(prefixCls, '-status-select'), {
      'has-error':
        errors === null || errors === void 0 ? void 0 : errors.length,
    }),
  })
})
var ArrayTablePagination = function (props) {
  var _a
  var _b = __read(useState(1), 2),
    current = _b[0],
    setCurrent = _b[1]
  var prefixCls = usePrefixCls('formily-array-table')
  var pageSize = props.pageSize || 10
  var size = props.size || 'default'
  var dataSource = props.dataSource || []
  var startIndex = (current - 1) * pageSize
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
  var handleChange = function (current) {
    setCurrent(current)
  }
  useEffect(
    function () {
      if (totalPage > 0 && totalPage < current) {
        handleChange(totalPage)
      }
    },
    [totalPage, current]
  )
  var renderPagination = function () {
    if (totalPage <= 1) return
    return React.createElement(
      'div',
      { className: ''.concat(prefixCls, '-pagination') },
      React.createElement(
        Space,
        null,
        React.createElement(StatusSelect, {
          value: current,
          pageSize: pageSize,
          onChange: handleChange,
          options: pages,
          notFoundContent: false,
        }),
        React.createElement(
          Pagination,
          __assign({}, props, {
            pageSize: pageSize,
            current: current,
            total: dataSource.length,
            size: size,
            showSizeChanger: false,
            onChange: handleChange,
          })
        )
      )
    )
  }
  return React.createElement(
    Fragment,
    null,
    (_a = props.children) === null || _a === void 0
      ? void 0
      : _a.call(
          props,
          dataSource === null || dataSource === void 0
            ? void 0
            : dataSource.slice(startIndex, endIndex + 1),
          renderPagination()
        )
  )
}
var RowComp = function (props) {
  return React.createElement(
    SortableRow,
    __assign({ index: props['data-row-key'] || 0 }, props)
  )
}
export var ArrayTable = observer(function (props) {
  var ref = useRef()
  var field = useField()
  var prefixCls = usePrefixCls('formily-array-table')
  var dataSource = Array.isArray(field.value) ? field.value.slice() : []
  var sources = useArrayTableSources()
  var columns = useArrayTableColumns(dataSource, sources)
  var pagination = isBool(props.pagination) ? {} : props.pagination
  var addition = useAddition()
  var defaultRowKey = function (record) {
    return dataSource.indexOf(record)
  }
  var addTdStyles = function (node) {
    var helper = document.body.querySelector(
      '.'.concat(prefixCls, '-sort-helper')
    )
    if (helper) {
      var tds_1 = node.querySelectorAll('td')
      requestAnimationFrame(function () {
        helper.querySelectorAll('td').forEach(function (td, index) {
          if (tds_1[index]) {
            td.style.width = getComputedStyle(tds_1[index]).width
          }
        })
      })
    }
  }
  return React.createElement(
    ArrayTablePagination,
    __assign({}, pagination, { dataSource: dataSource }),
    function (dataSource, pager) {
      return React.createElement(
        'div',
        { ref: ref, className: prefixCls },
        React.createElement(
          ArrayBase,
          null,
          React.createElement(
            Table,
            __assign(
              { size: 'small', bordered: true, rowKey: defaultRowKey },
              props,
              {
                onChange: function () {},
                pagination: false,
                columns: columns,
                dataSource: dataSource,
                components: {
                  body: {
                    wrapper: function (props) {
                      return React.createElement(
                        SortableBody,
                        __assign(
                          {
                            useDragHandle: true,
                            lockAxis: 'y',
                            helperClass: ''.concat(prefixCls, '-sort-helper'),
                            helperContainer: function () {
                              var _a
                              return (_a = ref.current) === null ||
                                _a === void 0
                                ? void 0
                                : _a.querySelector('tbody')
                            },
                            onSortStart: function (_a) {
                              var node = _a.node
                              addTdStyles(node)
                            },
                            onSortEnd: function (_a) {
                              var oldIndex = _a.oldIndex,
                                newIndex = _a.newIndex
                              field.move(oldIndex, newIndex)
                            },
                          },
                          props
                        )
                      )
                    },
                    row: RowComp,
                  },
                },
              }
            )
          ),
          React.createElement(
            'div',
            { style: { marginTop: 5, marginBottom: 5 } },
            pager
          ),
          sources.map(function (column, key) {
            //专门用来承接对Column的状态管理
            if (!isColumnComponent(column.schema)) return
            return React.createElement(RecursionField, {
              name: column.name,
              schema: column.schema,
              onlyRenderSelf: true,
              key: key,
            })
          }),
          addition
        )
      )
    }
  )
})
ArrayTable.displayName = 'ArrayTable'
ArrayTable.Column = function () {
  return React.createElement(Fragment, null)
}
ArrayBase.mixin(ArrayTable)
export default ArrayTable
//# sourceMappingURL=index.js.map
