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
import React, { createContext, useContext } from 'react'
import { Button } from '@alifd/next'
import { isValid, clone } from '@formily/shared'
import { useField, useFieldSchema } from '@formily/react'
import { SortableHandle } from 'react-sortable-hoc'
import {
  usePrefixCls,
  PlusOutlinedIcon,
  DeleteOutlinedIcon,
  DownOutlinedIcon,
  UpOutlinedIcon,
  MenuOutlinedIcon,
} from '../__builtins__'
import cls from 'classnames'
var ArrayBaseContext = createContext(null)
var ItemContext = createContext(null)
var useArray = function () {
  return useContext(ArrayBaseContext)
}
var useIndex = function (index) {
  var ctx = useContext(ItemContext)
  return ctx ? ctx.index : index
}
var useRecord = function (record) {
  var ctx = useContext(ItemContext)
  return ctx ? ctx.record : record
}
var getDefaultValue = function (defaultValue, schema) {
  var _a, _b, _c, _d, _e, _f, _g
  if (isValid(defaultValue)) return clone(defaultValue)
  if (
    Array.isArray(schema === null || schema === void 0 ? void 0 : schema.items)
  )
    return getDefaultValue(defaultValue, schema.items[0])
  if (
    ((_a = schema === null || schema === void 0 ? void 0 : schema.items) ===
      null || _a === void 0
      ? void 0
      : _a.type) === 'array'
  )
    return []
  if (
    ((_b = schema === null || schema === void 0 ? void 0 : schema.items) ===
      null || _b === void 0
      ? void 0
      : _b.type) === 'boolean'
  )
    return true
  if (
    ((_c = schema === null || schema === void 0 ? void 0 : schema.items) ===
      null || _c === void 0
      ? void 0
      : _c.type) === 'date'
  )
    return ''
  if (
    ((_d = schema === null || schema === void 0 ? void 0 : schema.items) ===
      null || _d === void 0
      ? void 0
      : _d.type) === 'datetime'
  )
    return ''
  if (
    ((_e = schema === null || schema === void 0 ? void 0 : schema.items) ===
      null || _e === void 0
      ? void 0
      : _e.type) === 'number'
  )
    return 0
  if (
    ((_f = schema === null || schema === void 0 ? void 0 : schema.items) ===
      null || _f === void 0
      ? void 0
      : _f.type) === 'object'
  )
    return {}
  if (
    ((_g = schema === null || schema === void 0 ? void 0 : schema.items) ===
      null || _g === void 0
      ? void 0
      : _g.type) === 'string'
  )
    return ''
  return null
}
export var ArrayBase = function (props) {
  var field = useField()
  var schema = useFieldSchema()
  return React.createElement(
    ArrayBaseContext.Provider,
    { value: { field: field, schema: schema, props: props } },
    props.children
  )
}
ArrayBase.Item = function (_a) {
  var children = _a.children,
    props = __rest(_a, ['children'])
  return React.createElement(ItemContext.Provider, { value: props }, children)
}
var SortHandle = SortableHandle(function (props) {
  var prefixCls = usePrefixCls('formily-array-base')
  return React.createElement(
    MenuOutlinedIcon,
    __assign({}, props, {
      className: cls(''.concat(prefixCls, '-sort-handle'), props.className),
      style: __assign({}, props.style),
    })
  )
})
ArrayBase.SortHandle = function () {
  var _a
  var array = useArray()
  if (!array) return null
  if (
    ((_a = array.field) === null || _a === void 0 ? void 0 : _a.pattern) !==
    'editable'
  )
    return null
  return React.createElement(SortHandle, null)
}
ArrayBase.Index = function (props) {
  var index = useIndex()
  var prefixCls = usePrefixCls('formily-array-base')
  return React.createElement(
    'span',
    __assign({}, props, { className: ''.concat(prefixCls, '-index') }),
    '#',
    index + 1,
    '.'
  )
}
ArrayBase.Addition = function (props) {
  var _a, _b, _c
  var self = useField()
  var array = useArray()
  var prefixCls = usePrefixCls('formily-array-base')
  if (!array) return null
  if (
    ((_a = array.field) === null || _a === void 0 ? void 0 : _a.pattern) !==
      'editable' &&
    ((_b = array.field) === null || _b === void 0 ? void 0 : _b.pattern) !==
      'disabled'
  )
    return null
  return React.createElement(
    Button,
    __assign({}, props, {
      disabled:
        (_c = array.field) === null || _c === void 0 ? void 0 : _c.disabled,
      className: cls(''.concat(prefixCls, '-addition'), props.className),
      style: __assign({ display: 'block', width: '100%' }, props.style),
      onClick: function (e) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l
        if ((_a = array.props) === null || _a === void 0 ? void 0 : _a.disabled)
          return
        e.stopPropagation()
        var defaultValue = getDefaultValue(props.defaultValue, array.schema)
        if (props.method === 'unshift') {
          ;(_c =
            (_b = array.field) === null || _b === void 0
              ? void 0
              : _b.unshift) === null || _c === void 0
            ? void 0
            : _c.call(_b, defaultValue)
          ;(_e =
            (_d = array.props) === null || _d === void 0
              ? void 0
              : _d.onAdd) === null || _e === void 0
            ? void 0
            : _e.call(_d, 0)
        } else {
          ;(_g =
            (_f = array.field) === null || _f === void 0 ? void 0 : _f.push) ===
            null || _g === void 0
            ? void 0
            : _g.call(_f, defaultValue)
          ;(_j =
            (_h = array.props) === null || _h === void 0
              ? void 0
              : _h.onAdd) === null || _j === void 0
            ? void 0
            : _j.call(
                _h,
                ((_l =
                  (_k =
                    array === null || array === void 0
                      ? void 0
                      : array.field) === null || _k === void 0
                    ? void 0
                    : _k.value) === null || _l === void 0
                  ? void 0
                  : _l.length) - 1
              )
        }
        if (props.onClick) {
          props.onClick(e)
        }
      },
    }),
    React.createElement(PlusOutlinedIcon, null),
    props.title || self.title
  )
}
ArrayBase.Remove = React.forwardRef(function (props, ref) {
  var _a
  var index = useIndex(props.index)
  var array = useArray()
  var prefixCls = usePrefixCls('formily-array-base')
  if (!array) return null
  if (
    ((_a = array.field) === null || _a === void 0 ? void 0 : _a.pattern) !==
    'editable'
  )
    return null
  return React.createElement(
    DeleteOutlinedIcon,
    __assign({}, props, {
      className: cls(''.concat(prefixCls, '-remove'), props.className),
      ref: ref,
      onClick: function (e) {
        var _a, _b, _c, _d, _e
        if ((_a = array.props) === null || _a === void 0 ? void 0 : _a.disabled)
          return
        e.stopPropagation()
        ;(_c =
          (_b = array.field) === null || _b === void 0 ? void 0 : _b.remove) ===
          null || _c === void 0
          ? void 0
          : _c.call(_b, index)
        ;(_e =
          (_d = array.props) === null || _d === void 0
            ? void 0
            : _d.onRemove) === null || _e === void 0
          ? void 0
          : _e.call(_d, index)
        if (props.onClick) {
          props.onClick(e)
        }
      },
    })
  )
})
ArrayBase.MoveDown = React.forwardRef(function (props, ref) {
  var _a
  var index = useIndex(props.index)
  var array = useArray()
  var prefixCls = usePrefixCls('formily-array-base')
  if (!array) return null
  if (
    ((_a = array.field) === null || _a === void 0 ? void 0 : _a.pattern) !==
    'editable'
  )
    return null
  return React.createElement(
    DownOutlinedIcon,
    __assign({}, props, {
      className: cls(''.concat(prefixCls, '-move-down'), props.className),
      ref: ref,
      onClick: function (e) {
        var _a, _b, _c, _d, _e
        if ((_a = array.props) === null || _a === void 0 ? void 0 : _a.disabled)
          return
        e.stopPropagation()
        ;(_c =
          (_b = array.field) === null || _b === void 0
            ? void 0
            : _b.moveDown) === null || _c === void 0
          ? void 0
          : _c.call(_b, index)
        ;(_e =
          (_d = array.props) === null || _d === void 0
            ? void 0
            : _d.onMoveDown) === null || _e === void 0
          ? void 0
          : _e.call(_d, index)
        if (props.onClick) {
          props.onClick(e)
        }
      },
    })
  )
})
ArrayBase.MoveUp = React.forwardRef(function (props, ref) {
  var _a
  var index = useIndex(props.index)
  var array = useArray()
  var prefixCls = usePrefixCls('formily-array-base')
  if (!array) return null
  if (
    ((_a = array.field) === null || _a === void 0 ? void 0 : _a.pattern) !==
    'editable'
  )
    return null
  return React.createElement(
    UpOutlinedIcon,
    __assign({}, props, {
      className: cls(''.concat(prefixCls, '-move-up'), props.className),
      ref: ref,
      onClick: function (e) {
        var _a, _b, _c, _d
        if ((_a = array.props) === null || _a === void 0 ? void 0 : _a.disabled)
          return
        e.stopPropagation()
        ;(_b = array === null || array === void 0 ? void 0 : array.field) ===
          null || _b === void 0
          ? void 0
          : _b.moveUp(index)
        ;(_d =
          (_c = array === null || array === void 0 ? void 0 : array.props) ===
            null || _c === void 0
            ? void 0
            : _c.onMoveUp) === null || _d === void 0
          ? void 0
          : _d.call(_c, index)
        if (props.onClick) {
          props.onClick(e)
        }
      },
    })
  )
})
ArrayBase.useArray = useArray
ArrayBase.useIndex = useIndex
ArrayBase.useRecord = useRecord
ArrayBase.mixin = function (target) {
  target.Index = ArrayBase.Index
  target.SortHandle = ArrayBase.SortHandle
  target.Addition = ArrayBase.Addition
  target.Remove = ArrayBase.Remove
  target.MoveDown = ArrayBase.MoveDown
  target.MoveUp = ArrayBase.MoveUp
  target.useArray = ArrayBase.useArray
  target.useIndex = ArrayBase.useIndex
  target.useRecord = ArrayBase.useRecord
  return target
}
export default ArrayBase
//# sourceMappingURL=index.js.map
