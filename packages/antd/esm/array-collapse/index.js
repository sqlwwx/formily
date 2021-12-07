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
import { Badge, Card, Collapse, Empty } from 'antd'
import {
  RecursionField,
  useField,
  useFieldSchema,
  observer,
} from '@formily/react'
import { toArr } from '@formily/shared'
import cls from 'classnames'
import ArrayBase from '../array-base'
import { usePrefixCls } from '../__builtins__'
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
var takeDefaultActiveKeys = function (dataSourceLength, defaultOpenPanelCount) {
  if (dataSourceLength < defaultOpenPanelCount) return range(dataSourceLength)
  return range(defaultOpenPanelCount)
}
var insertActiveKeys = function (activeKeys, index) {
  if (activeKeys.length <= index) return activeKeys.concat(index)
  return activeKeys.reduce(function (buf, key) {
    if (key < index) return buf.concat(key)
    if (key === index) return buf.concat([key, key + 1])
    return buf.concat(key + 1)
  }, [])
}
export var ArrayCollapse = observer(function (props) {
  var field = useField()
  var dataSource = Array.isArray(field.value) ? field.value : []
  var _a = __read(
      useState(
        takeDefaultActiveKeys(dataSource.length, props.defaultOpenPanelCount)
      ),
      2
    ),
    activeKeys = _a[0],
    setActiveKeys = _a[1]
  var schema = useFieldSchema()
  var prefixCls = usePrefixCls('formily-array-collapse', props)
  useEffect(
    function () {
      if (!field.modified && dataSource.length) {
        setActiveKeys(
          takeDefaultActiveKeys(dataSource.length, props.defaultOpenPanelCount)
        )
      }
    },
    [dataSource.length, field]
  )
  if (!schema) throw new Error('can not found schema object')
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
  var renderEmpty = function () {
    if (dataSource.length) return
    return React.createElement(
      Card,
      { className: cls(''.concat(prefixCls, '-item'), props.className) },
      React.createElement(Empty, null)
    )
  }
  var renderItems = function () {
    return React.createElement(
      Collapse,
      __assign({}, props, {
        activeKey: activeKeys,
        onChange: function (keys) {
          return setActiveKeys(toArr(keys).map(Number))
        },
        className: cls(''.concat(prefixCls, '-item'), props.className),
      }),
      dataSource.map(function (item, index) {
        var items = Array.isArray(schema.items)
          ? schema.items[index] || schema.items[0]
          : schema.items
        var panelProps = field
          .query(''.concat(field.address, '.').concat(index))
          .get('componentProps')
        var props = items['x-component-props']
        var header = function () {
          var header = ''.concat(
            (panelProps === null || panelProps === void 0
              ? void 0
              : panelProps.header) ||
              props.header ||
              field.title
          )
          var path = field.address.concat(index)
          var errors = field.form.queryFeedbacks({
            type: 'error',
            address: ''.concat(path, '.**'),
          })
          return React.createElement(
            ArrayBase.Item,
            { index: index, record: item },
            React.createElement(RecursionField, {
              schema: items,
              name: index,
              filterProperties: function (schema) {
                if (!isIndexComponent(schema)) return false
                return true
              },
              onlyRenderProperties: true,
            }),
            errors.length
              ? React.createElement(
                  Badge,
                  {
                    size: 'small',
                    className: 'errors-badge',
                    count: errors.length,
                  },
                  header
                )
              : header
          )
        }
        var extra = React.createElement(
          ArrayBase.Item,
          { index: index, record: item },
          React.createElement(RecursionField, {
            schema: items,
            name: index,
            filterProperties: function (schema) {
              if (!isOperationComponent(schema)) return false
              return true
            },
            onlyRenderProperties: true,
          }),
          props === null || props === void 0 ? void 0 : props.extra
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
          Collapse.Panel,
          __assign({}, props, panelProps, {
            forceRender: true,
            key: index,
            header: header(),
            extra: extra,
          }),
          React.createElement(
            ArrayBase.Item,
            { index: index, key: index, record: item },
            content
          )
        )
      })
    )
  }
  return React.createElement(
    ArrayBase,
    {
      onAdd: function (index) {
        setActiveKeys(insertActiveKeys(activeKeys, index))
      },
    },
    renderEmpty(),
    renderItems(),
    renderAddition()
  )
})
var CollapsePanel = function (_a) {
  var children = _a.children
  return React.createElement(Fragment, null, children)
}
CollapsePanel.displayName = 'CollapsePanel'
ArrayCollapse.defaultProps = {
  defaultOpenPanelCount: 5,
}
ArrayCollapse.displayName = 'ArrayCollapse'
ArrayCollapse.CollapsePanel = CollapsePanel
ArrayBase.mixin(ArrayCollapse)
export default ArrayCollapse
//# sourceMappingURL=index.js.map
