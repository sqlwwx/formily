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
import React, { Fragment, useState, useEffect } from 'react'
import { Badge, Card, Collapse } from '@alifd/next'
import {
  RecursionField,
  useField,
  useFieldSchema,
  observer,
} from '@formily/react'
import { toArr } from '@formily/shared'
import cls from 'classnames'
import ArrayBase from '../array-base'
import { usePrefixCls, Empty } from '../__builtins__'
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
var takeDefaultExpandedKeys = function (
  dataSourceLength,
  defaultOpenPanelCount
) {
  if (dataSourceLength < defaultOpenPanelCount) return range(dataSourceLength)
  return range(defaultOpenPanelCount)
}
var insertExpandedKeys = function (expandedKeys, index) {
  if (expandedKeys.length <= index) return expandedKeys.concat(index)
  return expandedKeys.reduce(function (buf, key) {
    if (key < index) return buf.concat(key)
    if (key === index) return buf.concat([key, key + 1])
    return buf.concat(key + 1)
  }, [])
}
export var ArrayCollapse = observer(function (_a) {
  var defaultOpenPanelCount = _a.defaultOpenPanelCount,
    props = __rest(_a, ['defaultOpenPanelCount'])
  var field = useField()
  var dataSource = Array.isArray(field.value) ? field.value : []
  var _b = __read(
      useState(
        takeDefaultExpandedKeys(dataSource.length, defaultOpenPanelCount)
      ),
      2
    ),
    expandKeys = _b[0],
    setExpandKeys = _b[1]
  var schema = useFieldSchema()
  var prefixCls = usePrefixCls('formily-array-collapse', props)
  useEffect(
    function () {
      if (!field.modified && dataSource.length) {
        setExpandKeys(
          takeDefaultExpandedKeys(dataSource.length, defaultOpenPanelCount)
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
        expandedKeys: expandKeys.map(String),
        onExpand: function (keys) {
          return setExpandKeys(toArr(keys).map(Number))
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
        var title = function () {
          var title = ''.concat(
            (panelProps === null || panelProps === void 0
              ? void 0
              : panelProps.title) ||
              (props === null || props === void 0 ? void 0 : props.title) ||
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
            React.createElement(
              'div',
              {
                className: cls(
                  ''.concat(prefixCls, '-item-title'),
                  props.className
                ),
              },
              React.createElement(
                'div',
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
                errors.length
                  ? React.createElement(
                      Badge,
                      { className: 'errors-badge', count: errors.length },
                      title
                    )
                  : title
              ),
              React.createElement(
                'div',
                null,
                React.createElement(RecursionField, {
                  schema: items,
                  name: index,
                  filterProperties: function (schema) {
                    if (!isOperationComponent(schema)) return false
                    return true
                  },
                  onlyRenderProperties: true,
                })
              )
            )
          )
        }
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
          __assign({}, props, panelProps, { key: index, title: title() }),
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
        setExpandKeys(insertExpandedKeys(expandKeys, index))
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
