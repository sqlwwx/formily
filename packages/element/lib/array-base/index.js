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
Object.defineProperty(exports, '__esModule', { value: true })
exports.ArrayBase = void 0
var composition_api_1 = require('@vue/composition-api')
var vue_1 = require('@formily/vue')
var shared_1 = require('@formily/shared')
var configs_1 = require('../__builtins__/configs')
var element_ui_1 = require('element-ui')
var vue_slicksort_1 = require('vue-slicksort')
var shared_2 = require('../__builtins__/shared')
var ArrayBaseSymbol = Symbol('ArrayBaseContext')
var ItemSymbol = Symbol('ItemContext')
var useArray = function () {
  return (0, composition_api_1.inject)(ArrayBaseSymbol, null)
}
var useIndex = function (index) {
  var indexRef = (0, composition_api_1.toRefs)(
    (0, composition_api_1.inject)(ItemSymbol)
  ).index
  return indexRef !== null && indexRef !== void 0
    ? indexRef
    : (0, composition_api_1.ref)(index)
}
var useRecord = function (record) {
  var recordRef = (0, composition_api_1.toRefs)(
    (0, composition_api_1.inject)(ItemSymbol)
  ).record
  return recordRef !== null && recordRef !== void 0
    ? recordRef
    : (0, composition_api_1.ref)(record)
}
var isObjectValue = function (schema) {
  var _a, _b
  if (
    Array.isArray(schema === null || schema === void 0 ? void 0 : schema.items)
  )
    return isObjectValue(schema.items[0])
  if (
    ((_a = schema === null || schema === void 0 ? void 0 : schema.items) ===
      null || _a === void 0
      ? void 0
      : _a.type) === 'array' ||
    ((_b = schema === null || schema === void 0 ? void 0 : schema.items) ===
      null || _b === void 0
      ? void 0
      : _b.type) === 'object'
  ) {
    return true
  }
  return false
}
var useKey = function (schema) {
  var isObject = isObjectValue(schema)
  var keyMap = null
  if (isObject) {
    keyMap = new WeakMap()
  } else {
    keyMap = []
  }
  ;(0, composition_api_1.onBeforeUnmount)(function () {
    keyMap = null
  })
  return {
    keyMap: keyMap,
    getKey: function (record, index) {
      if (keyMap instanceof WeakMap) {
        if (!keyMap.has(record)) {
          keyMap.set(record, (0, shared_1.uid)())
        }
        return ''.concat(keyMap.get(record), '-').concat(index)
      }
      if (!keyMap[index]) {
        keyMap[index] = (0, shared_1.uid)()
      }
      return ''.concat(keyMap[index], '-').concat(index)
    },
  }
}
var getDefaultValue = function (defaultValue, schema) {
  var _a, _b, _c, _d, _e, _f, _g
  if ((0, shared_1.isValid)(defaultValue))
    return (0, shared_1.clone)(defaultValue)
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
var ArrayBaseInner = (0, composition_api_1.defineComponent)({
  name: 'ArrayBase',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    keyMap: {
      type: [WeakMap, Array],
    },
  },
  setup: function (props, _a) {
    var slots = _a.slots,
      listeners = _a.listeners
    var field = (0, vue_1.useField)()
    var schema = (0, vue_1.useFieldSchema)()
    ;(0, composition_api_1.provide)(ArrayBaseSymbol, {
      field: field,
      schema: schema,
      props: props,
      listeners: listeners,
      keyMap: props.keyMap,
    })
    return function () {
      return (0, vue_1.h)(vue_1.Fragment, {}, slots)
    }
  },
})
var ArrayBaseItem = (0, composition_api_1.defineComponent)({
  name: 'ArrayBaseItem',
  props: ['index', 'record'],
  setup: function (props, _a) {
    var slots = _a.slots
    ;(0, composition_api_1.provide)(ItemSymbol, props)
    return function () {
      return (0, vue_1.h)(vue_1.Fragment, {}, slots)
    }
  },
})
var ArrayBaseSortHandle = (0, composition_api_1.defineComponent)({
  name: 'ArrayBaseSortHandle',
  props: ['index'],
  directives: {
    handle: vue_slicksort_1.HandleDirective,
  },
  setup: function (props, _a) {
    var attrs = _a.attrs
    var array = useArray()
    var prefixCls = ''.concat(configs_1.stylePrefix, '-array-base')
    return function () {
      var _a
      if (!array) return null
      if (
        ((_a = array.field.value) === null || _a === void 0
          ? void 0
          : _a.pattern) !== 'editable'
      )
        return null
      return (0, vue_1.h)(
        element_ui_1.Button,
        {
          directives: [{ name: 'handle' }],
          class: [''.concat(prefixCls, '-sort-handle')],
          attrs: __assign(
            { size: 'mini', type: 'text', icon: 'el-icon-rank' },
            attrs
          ),
        },
        {}
      )
    }
  },
})
var ArrayBaseIndex = (0, composition_api_1.defineComponent)({
  name: 'ArrayBaseIndex',
  setup: function (props, _a) {
    var attrs = _a.attrs
    var index = useIndex()
    var prefixCls = ''.concat(configs_1.stylePrefix, '-array-base')
    return function () {
      return (0, vue_1.h)(
        'span',
        {
          class: ''.concat(prefixCls, '-index'),
          attrs: attrs,
        },
        {
          default: function () {
            return ['#'.concat(index.value + 1, '.')]
          },
        }
      )
    }
  },
})
var ArrayBaseAddition = (0, composition_api_1.defineComponent)({
  name: 'ArrayBaseAddition',
  props: ['title', 'method', 'defaultValue'],
  setup: function (props, _a) {
    var listeners = _a.listeners
    var self = (0, vue_1.useField)()
    var array = useArray()
    var prefixCls = ''.concat(configs_1.stylePrefix, '-array-base')
    return function () {
      if (!array) return null
      if (
        (array === null || array === void 0
          ? void 0
          : array.field.value.pattern) !== 'editable'
      )
        return null
      return (0, vue_1.h)(
        element_ui_1.Button,
        {
          class: ''.concat(prefixCls, '-addition'),
          attrs: __assign(
            { type: 'ghost', icon: 'qax-icon-Alone-Plus' },
            props
          ),
          on: __assign(__assign({}, listeners), {
            click: function (e) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k
              if (
                (_a = array.props) === null || _a === void 0
                  ? void 0
                  : _a.disabled
              )
                return
              var defaultValue = getDefaultValue(
                props.defaultValue,
                array === null || array === void 0 ? void 0 : array.schema.value
              )
              if (props.method === 'unshift') {
                ;(_b =
                  array === null || array === void 0 ? void 0 : array.field) ===
                  null || _b === void 0
                  ? void 0
                  : _b.value.unshift(defaultValue)
                ;(_d =
                  (_c = array.listeners) === null || _c === void 0
                    ? void 0
                    : _c.add) === null || _d === void 0
                  ? void 0
                  : _d.call(_c, 0)
              } else {
                ;(_e =
                  array === null || array === void 0 ? void 0 : array.field) ===
                  null || _e === void 0
                  ? void 0
                  : _e.value.push(defaultValue)
                ;(_g =
                  (_f = array.listeners) === null || _f === void 0
                    ? void 0
                    : _f.add) === null || _g === void 0
                  ? void 0
                  : _g.call(
                      _f,
                      ((_k =
                        (_j =
                          (_h =
                            array === null || array === void 0
                              ? void 0
                              : array.field) === null || _h === void 0
                            ? void 0
                            : _h.value) === null || _j === void 0
                          ? void 0
                          : _j.value) === null || _k === void 0
                        ? void 0
                        : _k.length) - 1
                    )
              }
              if (listeners.click) {
                listeners.click(e)
              }
            },
          }),
        },
        {
          default: function () {
            return [self.value.title || props.title]
          },
        }
      )
    }
  },
})
var ArrayBaseRemove = (0, composition_api_1.defineComponent)({
  name: 'ArrayBaseRemove',
  props: ['title', 'index'],
  setup: function (props, _a) {
    var attrs = _a.attrs,
      listeners = _a.listeners
    var indexRef = useIndex(props.index)
    var base = useArray()
    var prefixCls = ''.concat(configs_1.stylePrefix, '-array-base')
    return function () {
      if (
        (base === null || base === void 0
          ? void 0
          : base.field.value.pattern) !== 'editable'
      )
        return null
      return (0, vue_1.h)(
        element_ui_1.Button,
        {
          class: ''.concat(prefixCls, '-remove'),
          attrs: __assign(
            { type: 'text', size: 'mini', icon: 'el-icon-delete' },
            attrs
          ),
          on: __assign(__assign({}, listeners), {
            click: function (e) {
              var _a, _b, _c
              e.stopPropagation()
              if (
                Array.isArray(
                  base === null || base === void 0 ? void 0 : base.keyMap
                )
              ) {
                ;(_a =
                  base === null || base === void 0 ? void 0 : base.keyMap) ===
                  null || _a === void 0
                  ? void 0
                  : _a.splice(indexRef.value, 1)
              }
              base === null || base === void 0
                ? void 0
                : base.field.value.remove(indexRef.value)
              ;(_c =
                (_b =
                  base === null || base === void 0
                    ? void 0
                    : base.listeners) === null || _b === void 0
                  ? void 0
                  : _b.remove) === null || _c === void 0
                ? void 0
                : _c.call(_b, indexRef.value)
              if (listeners.click) {
                listeners.click(e)
              }
            },
          }),
        },
        {
          default: function () {
            return [props.title]
          },
        }
      )
    }
  },
})
var ArrayBaseMoveDown = (0, composition_api_1.defineComponent)({
  name: 'ArrayBaseMoveDown',
  props: ['title', 'index'],
  setup: function (props, _a) {
    var attrs = _a.attrs,
      listeners = _a.listeners
    var indexRef = useIndex(props.index)
    var base = useArray()
    var prefixCls = ''.concat(configs_1.stylePrefix, '-array-base')
    return function () {
      if (
        (base === null || base === void 0
          ? void 0
          : base.field.value.pattern) !== 'editable'
      )
        return null
      return (0, vue_1.h)(
        element_ui_1.Button,
        {
          class: ''.concat(prefixCls, '-move-down'),
          attrs: __assign(
            { size: 'mini', type: 'text', icon: 'el-icon-arrow-down' },
            attrs
          ),
          on: __assign(__assign({}, listeners), {
            click: function (e) {
              var _a, _b
              e.stopPropagation()
              if (
                Array.isArray(
                  base === null || base === void 0 ? void 0 : base.keyMap
                )
              ) {
                base.keyMap.splice(
                  indexRef.value + 1,
                  0,
                  base.keyMap.splice(indexRef.value, 1)[0]
                )
              }
              base === null || base === void 0
                ? void 0
                : base.field.value.moveDown(indexRef.value)
              ;(_b =
                (_a =
                  base === null || base === void 0
                    ? void 0
                    : base.listeners) === null || _a === void 0
                  ? void 0
                  : _a.moveDown) === null || _b === void 0
                ? void 0
                : _b.call(_a, indexRef.value)
              if (listeners.click) {
                listeners.click(e)
              }
            },
          }),
        },
        {
          default: function () {
            return [props.title]
          },
        }
      )
    }
  },
})
var ArrayBaseMoveUp = (0, composition_api_1.defineComponent)({
  name: 'ArrayBaseMoveUp',
  props: ['title', 'index'],
  setup: function (props, _a) {
    var attrs = _a.attrs,
      listeners = _a.listeners
    var indexRef = useIndex(props.index)
    var base = useArray()
    var prefixCls = ''.concat(configs_1.stylePrefix, '-array-base')
    return function () {
      if (
        (base === null || base === void 0
          ? void 0
          : base.field.value.pattern) !== 'editable'
      )
        return null
      return (0, vue_1.h)(
        element_ui_1.Button,
        {
          class: ''.concat(prefixCls, '-move-up'),
          attrs: __assign(
            { size: 'mini', type: 'text', icon: 'el-icon-arrow-up' },
            attrs
          ),
          on: __assign(__assign({}, listeners), {
            click: function (e) {
              var _a, _b
              e.stopPropagation()
              if (
                Array.isArray(
                  base === null || base === void 0 ? void 0 : base.keyMap
                )
              ) {
                base.keyMap.splice(
                  indexRef.value - 1,
                  0,
                  base.keyMap.splice(indexRef.value, 1)[0]
                )
              }
              base === null || base === void 0
                ? void 0
                : base.field.value.moveUp(indexRef.value)
              ;(_b =
                (_a =
                  base === null || base === void 0
                    ? void 0
                    : base.listeners) === null || _a === void 0
                  ? void 0
                  : _a.moveUp) === null || _b === void 0
                ? void 0
                : _b.call(_a, indexRef.value)
              if (listeners.click) {
                listeners.click(e)
              }
            },
          }),
        },
        {
          default: function () {
            return [props.title]
          },
        }
      )
    }
  },
})
exports.ArrayBase = (0, shared_2.composeExport)(ArrayBaseInner, {
  Index: ArrayBaseIndex,
  Item: ArrayBaseItem,
  SortHandle: ArrayBaseSortHandle,
  Addition: ArrayBaseAddition,
  Remove: ArrayBaseRemove,
  MoveDown: ArrayBaseMoveDown,
  MoveUp: ArrayBaseMoveUp,
  useArray: useArray,
  useIndex: useIndex,
  useKey: useKey,
  useRecord: useRecord,
})
//# sourceMappingURL=index.js.map
