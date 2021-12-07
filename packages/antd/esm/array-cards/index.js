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
import React, { Fragment, useState, useEffect } from 'react'
import { Card, Empty, Pagination, Space, Select, Badge } from 'antd'
import {
  useForm,
  useField,
  observer,
  useFieldSchema,
  RecursionField,
} from '@formily/react'
import { isBool } from '@formily/shared'
import cls from 'classnames'
import { usePrefixCls } from '../__builtins__'
import { ArrayBase } from '../array-base'
import FormGrid from '../form-grid'
var GridColumn = FormGrid.GridColumn
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
var isCopyComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('Copy')) > -1
  )
}
var isOperationComponent = function (schema) {
  return (
    isAdditionComponent(schema) ||
    isRemoveComponent(schema) ||
    isMoveDownComponent(schema) ||
    isMoveUpComponent(schema) ||
    isCopyComponent(schema)
  )
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
var ArrayCardsPagination = function (props) {
  var _a
  var _b = __read(useState(1), 2),
    current = _b[0],
    setCurrent = _b[1]
  var prefixCls = usePrefixCls('formily-array-cards')
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
export var ArrayCards = observer(function (props) {
  var field = useField()
  var schema = useFieldSchema()
  var dataSource = Array.isArray(field.value) ? field.value : []
  var pagination = isBool(props.pagination) ? {} : props.pagination
  var prefixCls = usePrefixCls('formily-array-cards', props)
  if (!schema) throw new Error('can not found schema object')
  var defaultRowKey = function (record) {
    return dataSource.indexOf(record)
  }
  var renderItems = function (dataSource) {
    return dataSource === null || dataSource === void 0
      ? void 0
      : dataSource.map(function (item) {
          var index = defaultRowKey(item)
          var items = Array.isArray(schema.items)
            ? schema.items[index] || schema.items[0]
            : schema.items
          var title = React.createElement(
            'span',
            null,
            React.createElement(RecursionField, {
              schema: items,
              name: index,
              filterProperties: function (schema) {
                if (!isIndexComponent(schema)) return false
                return true
              },
              onlyRenderProperties: true,
            }),
            props.title || field.title
          )
          var extra = React.createElement(
            'span',
            null,
            React.createElement(RecursionField, {
              schema: items,
              name: index,
              filterProperties: function (schema) {
                if (!isOperationComponent(schema)) return false
                return true
              },
              onlyRenderProperties: true,
            }),
            props.extra
          )
          var content = React.createElement(RecursionField, {
            schema: items,
            name: index,
            filterProperties: function (schema) {
              if (isIndexComponent(schema)) return false
              if (isOperationComponent(schema)) return false
              return true
            },
          })
          return React.createElement(
            ArrayBase.Item,
            { key: index, index: index, record: item },
            React.createElement(
              GridColumn,
              null,
              React.createElement(
                Card,
                __assign({}, props, {
                  onChange: function () {},
                  className: cls(
                    ''.concat(prefixCls, '-item'),
                    props.className
                  ),
                  title: title,
                  extra: extra,
                }),
                content
              )
            )
          )
        })
  }
  var renderAddition = function () {
    return schema.reduceProperties(function (addition, schema, key) {
      if (isAdditionComponent(schema)) {
        return React.createElement(RecursionField, {
          schema: schema,
          name: key,
        })
      }
      return addition
    }, null)
  }
  return React.createElement(
    Fragment,
    null,
    !(dataSource === null || dataSource === void 0
      ? void 0
      : dataSource.length) &&
      React.createElement(
        Card,
        __assign({}, props, {
          onChange: function () {},
          className: cls(''.concat(prefixCls, '-item'), props.className),
          title: props.title || field.title,
        }),
        React.createElement(Empty, null)
      ),
    React.createElement(
      ArrayCardsPagination,
      __assign({}, pagination, { dataSource: dataSource }),
      function (ds, pager) {
        return React.createElement(
          ArrayBase,
          null,
          React.createElement(
            FormGrid,
            __assign({}, props.grid || { maxColumns: 1 }),
            renderItems(ds)
          ),
          React.createElement(
            'div',
            { style: { marginTop: 5, marginBottom: 5 } },
            pager
          ),
          renderAddition()
        )
      }
    )
  )
})
ArrayCards.displayName = 'ArrayCards'
ArrayBase.mixin(ArrayCards)
export default ArrayCards
//# sourceMappingURL=index.js.map
