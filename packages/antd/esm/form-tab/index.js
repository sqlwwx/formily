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
import React, { Fragment, useMemo } from 'react'
import { Tabs, Badge } from 'antd'
import { model, markRaw } from '@formily/reactive'
import {
  useField,
  observer,
  useFieldSchema,
  RecursionField,
} from '@formily/react'
import cls from 'classnames'
import { usePrefixCls } from '../__builtins__'
var useTabs = function () {
  var tabsField = useField()
  var schema = useFieldSchema()
  var tabs = []
  schema.mapProperties(function (schema, name) {
    var _a, _b
    var field = tabsField.query(tabsField.address.concat(name)).take()
    if (
      (field === null || field === void 0 ? void 0 : field.display) ===
        'none' ||
      (field === null || field === void 0 ? void 0 : field.display) === 'hidden'
    )
      return
    if (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('TabPane')) > -1
    ) {
      tabs.push({
        name: name,
        props: __assign(
          {
            key:
              ((_b =
                schema === null || schema === void 0
                  ? void 0
                  : schema['x-component-props']) === null || _b === void 0
                ? void 0
                : _b.key) || name,
          },
          schema === null || schema === void 0
            ? void 0
            : schema['x-component-props']
        ),
        schema: schema,
      })
    }
  })
  return tabs
}
var createFormTab = function (defaultActiveKey) {
  var formTab = model({
    activeKey: defaultActiveKey,
    setActiveKey: function (key) {
      formTab.activeKey = key
    },
  })
  return markRaw(formTab)
}
export var FormTab = observer(function (_a) {
  var formTab = _a.formTab,
    props = __rest(_a, ['formTab'])
  var field = useField()
  var tabs = useTabs()
  var _formTab = useMemo(function () {
    return formTab ? formTab : createFormTab()
  }, [])
  var prefixCls = usePrefixCls('formily-tab', props)
  var activeKey =
    props.activeKey ||
    (_formTab === null || _formTab === void 0 ? void 0 : _formTab.activeKey)
  var badgedTab = function (key, props) {
    var errors = field.form.queryFeedbacks({
      type: 'error',
      address: ''.concat(field.address.concat(key), '.*'),
    })
    if (errors.length) {
      return React.createElement(
        Badge,
        { size: 'small', className: 'errors-badge', count: errors.length },
        props.tab
      )
    }
    return props.tab
  }
  return React.createElement(
    Tabs,
    __assign({}, props, {
      className: cls(prefixCls, props.className),
      activeKey: activeKey,
      onChange: function (key) {
        var _a, _b
        ;(_a = props.onChange) === null || _a === void 0
          ? void 0
          : _a.call(props, key)
        ;(_b =
          formTab === null || formTab === void 0
            ? void 0
            : formTab.setActiveKey) === null || _b === void 0
          ? void 0
          : _b.call(formTab, key)
      },
    }),
    tabs.map(function (_a, key) {
      var props = _a.props,
        schema = _a.schema,
        name = _a.name
      return React.createElement(
        Tabs.TabPane,
        __assign({ key: key }, props, {
          tab: badgedTab(name, props),
          forceRender: true,
        }),
        React.createElement(RecursionField, { schema: schema, name: name })
      )
    })
  )
})
var TabPane = function (_a) {
  var children = _a.children
  return React.createElement(Fragment, null, children)
}
FormTab.TabPane = TabPane
FormTab.createFormTab = createFormTab
export default FormTab
//# sourceMappingURL=index.js.map
