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
import React, { useState } from 'react'
import { Tabs, Badge } from 'antd'
import {
  useField,
  observer,
  useFieldSchema,
  RecursionField,
} from '@formily/react'
export var ArrayTabs = observer(function (props) {
  var field = useField()
  var schema = useFieldSchema()
  var _a = __read(useState('tab-0'), 2),
    activeKey = _a[0],
    setActiveKey = _a[1]
  var value = Array.isArray(field.value) ? field.value : []
  var dataSource = (value === null || value === void 0 ? void 0 : value.length)
    ? value
    : [{}]
  var onEdit = function (targetKey, type) {
    var _a, _b
    if (type == 'add') {
      var id = dataSource.length
      if (
        (_a = field === null || field === void 0 ? void 0 : field.value) ===
          null || _a === void 0
          ? void 0
          : _a.length
      ) {
        field.push(null)
      } else {
        field.push(null, null)
      }
      setActiveKey('tab-'.concat(id))
    } else if (type == 'remove') {
      var index =
        (_b = targetKey.match(/-(\d+)/)) === null || _b === void 0
          ? void 0
          : _b[1]
      field.remove(Number(index))
      if (activeKey === targetKey) {
        setActiveKey('tab-'.concat(index - 1))
      }
    }
  }
  var badgedTab = function (index) {
    var tab = ''.concat(field.title || 'Untitled', ' ').concat(index + 1)
    var path = field.address.concat(index)
    var errors = field.form.queryFeedbacks({
      type: 'error',
      address: ''.concat(path, '.**'),
    })
    if (errors.length) {
      return React.createElement(
        Badge,
        { size: 'small', className: 'errors-badge', count: errors.length },
        tab
      )
    }
    return tab
  }
  return React.createElement(
    Tabs,
    __assign({}, props, {
      activeKey: activeKey,
      onChange: function (key) {
        setActiveKey(key)
      },
      type: 'editable-card',
      onEdit: onEdit,
    }),
    dataSource === null || dataSource === void 0
      ? void 0
      : dataSource.map(function (item, index) {
          var items = Array.isArray(schema.items)
            ? schema.items[index]
            : schema.items
          var key = 'tab-'.concat(index)
          return React.createElement(
            Tabs.TabPane,
            { key: key, closable: index !== 0, tab: badgedTab(index) },
            React.createElement(RecursionField, { schema: items, name: index })
          )
        })
  )
})
export default ArrayTabs
//# sourceMappingURL=index.js.map
