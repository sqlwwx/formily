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
import { Table, Pagination, Select, Badge } from '@alifd/next'
import cls from 'classnames'
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
        cell: function (value, _, record) {
          var index = dataSource.indexOf(record)
          var children = React.createElement(
            ArrayBase.Item,
            { key: index, index: index, record: record },
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
var StatusSelect = observer(function (_a) {
  var _b
  var pageSize = _a.pageSize,
    props = __rest(_a, ['pageSize'])
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
    (_b = props.dataSource) === null || _b === void 0
      ? void 0
      : _b.map(function (_a) {
          var label = _a.label,
            value = _a.value
          var hasError = errors.some(function (_a) {
            var address = _a.address
            var currentIndex = parseIndex(address)
            var startIndex = (value - 1) * pageSize
            var endIndex = value * pageSize
            return currentIndex >= startIndex && currentIndex <= endIndex
          })
          return {
            label: hasError
              ? React.createElement(Badge, { dot: true }, label)
              : label,
            value: value,
          }
        })
  return React.createElement(
    Select,
    __assign({}, props, {
      value: props.value,
      onChange: props.onChange,
      dataSource: options,
      useVirtual: true,
      className: cls(''.concat(prefixCls, '-status-select'), {
        'has-error':
          errors === null || errors === void 0 ? void 0 : errors.length,
      }),
    })
  )
})
var ArrayTablePagination = function (_a) {
  var _b
  var dataSource = _a.dataSource,
    props = __rest(_a, ['dataSource'])
  var _c = __read(useState(1), 2),
    current = _c[0],
    setCurrent = _c[1]
  var prefixCls = usePrefixCls('formily-array-table')
  var pageSize = props.pageSize || 10
  var size = props.size || 'medium'
  var sources = dataSource || []
  var startIndex = (current - 1) * pageSize
  var endIndex = startIndex + pageSize - 1
  var total =
    (sources === null || sources === void 0 ? void 0 : sources.length) || 0
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
      React.createElement(StatusSelect, {
        value: current,
        pageSize: pageSize,
        onChange: handleChange,
        dataSource: pages,
        notFoundContent: false,
      }),
      React.createElement(
        Pagination,
        __assign({}, props, {
          pageSize: pageSize,
          current: current,
          total: dataSource.length,
          size: size,
          pageSizeSelector: false,
          onChange: handleChange,
        })
      )
    )
  }
  return React.createElement(
    Fragment,
    null,
    (_b = props.children) === null || _b === void 0
      ? void 0
      : _b.call(
          props,
          dataSource === null || dataSource === void 0
            ? void 0
            : dataSource.slice(startIndex, endIndex + 1),
          renderPagination()
        )
  )
}
var omit = function (props, keys) {
  return Object.keys(props)
    .filter(function (key) {
      return !(keys === null || keys === void 0 ? void 0 : keys.includes(key))
    })
    .reduce(function (buf, key) {
      buf[key] = props[key]
      return buf
    }, {})
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
              { size: 'small' },
              omit(props, ['value', 'onChange', 'pagination']),
              { columns: columns, dataSource: dataSource }
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
