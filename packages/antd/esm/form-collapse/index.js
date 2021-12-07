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
import { Collapse, Badge } from 'antd'
import { model, markRaw } from '@formily/reactive'
import {
  useField,
  observer,
  useFieldSchema,
  RecursionField,
} from '@formily/react'
import cls from 'classnames'
import { usePrefixCls } from '../__builtins__'
import { toArr } from '@formily/shared'
var usePanels = function () {
  var collapseField = useField()
  var schema = useFieldSchema()
  var panels = []
  schema.mapProperties(function (schema, name) {
    var _a, _b
    var field = collapseField.query(collapseField.address.concat(name)).take()
    if (
      (field === null || field === void 0 ? void 0 : field.display) ===
        'none' ||
      (field === null || field === void 0 ? void 0 : field.display) === 'hidden'
    )
      return
    if (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('CollapsePanel')) > -1
    ) {
      panels.push({
        name: name,
        props: __assign(
          __assign(
            {},
            schema === null || schema === void 0
              ? void 0
              : schema['x-component-props']
          ),
          {
            key:
              ((_b =
                schema === null || schema === void 0
                  ? void 0
                  : schema['x-component-props']) === null || _b === void 0
                ? void 0
                : _b.key) || name,
          }
        ),
        schema: schema,
      })
    }
  })
  return panels
}
var createFormCollapse = function (defaultActiveKeys) {
  var formCollapse = model({
    activeKeys: defaultActiveKeys,
    setActiveKeys: function (keys) {
      formCollapse.activeKeys = keys
    },
    hasActiveKey: function (key) {
      if (Array.isArray(formCollapse.activeKeys)) {
        if (formCollapse.activeKeys.includes(key)) {
          return true
        }
      } else if (formCollapse.activeKeys == key) {
        return true
      }
      return false
    },
    addActiveKey: function (key) {
      if (formCollapse.hasActiveKey(key)) return
      formCollapse.activeKeys = toArr(formCollapse.activeKeys).concat(key)
    },
    removeActiveKey: function (key) {
      if (Array.isArray(formCollapse.activeKeys)) {
        formCollapse.activeKeys = formCollapse.activeKeys.filter(function (
          item
        ) {
          return item != key
        })
      } else {
        formCollapse.activeKeys = ''
      }
    },
    toggleActiveKey: function (key) {
      if (formCollapse.hasActiveKey(key)) {
        formCollapse.removeActiveKey(key)
      } else {
        formCollapse.addActiveKey(key)
      }
    },
  })
  return markRaw(formCollapse)
}
export var FormCollapse = observer(function (_a) {
  var formCollapse = _a.formCollapse,
    props = __rest(_a, ['formCollapse'])
  var field = useField()
  var panels = usePanels()
  var prefixCls = usePrefixCls('formily-collapse', props)
  var _formCollapse = useMemo(function () {
    return formCollapse ? formCollapse : createFormCollapse()
  }, [])
  var takeActiveKeys = function () {
    var _a
    if (props.activeKey) return props.activeKey
    if (
      _formCollapse === null || _formCollapse === void 0
        ? void 0
        : _formCollapse.activeKeys
    )
      return _formCollapse === null || _formCollapse === void 0
        ? void 0
        : _formCollapse.activeKeys
    if (props.accordion)
      return (_a = panels[0]) === null || _a === void 0 ? void 0 : _a.name
    return panels.map(function (item) {
      return item.name
    })
  }
  var badgedHeader = function (key, props) {
    var errors = field.form.queryFeedbacks({
      type: 'error',
      address: ''.concat(field.address.concat(key), '.*'),
    })
    if (errors.length) {
      return React.createElement(
        Badge,
        { size: 'small', className: 'errors-badge', count: errors.length },
        props.header
      )
    }
    return props.header
  }
  return React.createElement(
    Collapse,
    __assign({}, props, {
      className: cls(prefixCls, props.className),
      activeKey: takeActiveKeys(),
      onChange: function (key) {
        var _a, _b
        ;(_a = props === null || props === void 0 ? void 0 : props.onChange) ===
          null || _a === void 0
          ? void 0
          : _a.call(props, key)
        ;(_b =
          _formCollapse === null || _formCollapse === void 0
            ? void 0
            : _formCollapse.setActiveKeys) === null || _b === void 0
          ? void 0
          : _b.call(_formCollapse, key)
      },
    }),
    panels.map(function (_a, index) {
      var props = _a.props,
        schema = _a.schema,
        name = _a.name
      return React.createElement(
        Collapse.Panel,
        __assign({ key: index }, props, {
          header: badgedHeader(name, props),
          forceRender: true,
        }),
        React.createElement(RecursionField, { schema: schema, name: name })
      )
    })
  )
})
var CollapsePanel = function (_a) {
  var children = _a.children
  return React.createElement(Fragment, null, children)
}
FormCollapse.CollapsePanel = CollapsePanel
FormCollapse.createFormCollapse = createFormCollapse
export default FormCollapse
//# sourceMappingURL=index.js.map
