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
import {
  defineComponent,
  provide,
  inject,
  toRefs,
  ref,
  onBeforeUnmount,
} from '@vue/composition-api'
import { Fragment, useField, useFieldSchema, h } from '@formily/vue'
import { isValid, uid, clone } from '@formily/shared'
import { stylePrefix } from '../__builtins__/configs'
import Button from 'element-ui/lib/button'
import { HandleDirective } from 'vue-slicksort'
import { composeExport } from '../__builtins__/shared'
var ArrayBaseSymbol = Symbol('ArrayBaseContext')
var ItemSymbol = Symbol('ItemContext')
var useArray = function () {
  return inject(ArrayBaseSymbol, null)
}
var useIndex = function (index) {
  var indexRef = toRefs(inject(ItemSymbol)).index
  return indexRef !== null && indexRef !== void 0 ? indexRef : ref(index)
}
var useRecord = function (record) {
  var recordRef = toRefs(inject(ItemSymbol)).record
  return recordRef !== null && recordRef !== void 0 ? recordRef : ref(record)
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
  onBeforeUnmount(function () {
    keyMap = null
  })
  return {
    keyMap: keyMap,
    getKey: function (record, index) {
      if (keyMap instanceof WeakMap) {
        if (!keyMap.has(record)) {
          keyMap.set(record, uid())
        }
        return ''.concat(keyMap.get(record), '-').concat(index)
      }
      if (!keyMap[index]) {
        keyMap[index] = uid()
      }
      return ''.concat(keyMap[index], '-').concat(index)
    },
  }
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
var ArrayBaseInner = defineComponent({
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
    var field = useField()
    var schema = useFieldSchema()
    provide(ArrayBaseSymbol, {
      field: field,
      schema: schema,
      props: props,
      listeners: listeners,
      keyMap: props.keyMap,
    })
    return function () {
      return h(Fragment, {}, slots)
    }
  },
})
var ArrayBaseItem = defineComponent({
  name: 'ArrayBaseItem',
  props: ['index', 'record'],
  setup: function (props, _a) {
    var slots = _a.slots
    provide(ItemSymbol, props)
    return function () {
      return h(Fragment, {}, slots)
    }
  },
})
var ArrayBaseSortHandle = defineComponent({
  name: 'ArrayBaseSortHandle',
  props: ['index'],
  directives: {
    handle: HandleDirective,
  },
  setup: function (props, _a) {
    var attrs = _a.attrs
    var array = useArray()
    var prefixCls = ''.concat(stylePrefix, '-array-base')
    return function () {
      var _a
      if (!array) return null
      if (
        ((_a = array.field.value) === null || _a === void 0
          ? void 0
          : _a.pattern) !== 'editable'
      )
        return null
      return h(
        Button,
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
var ArrayBaseIndex = defineComponent({
  name: 'ArrayBaseIndex',
  setup: function (props, _a) {
    var attrs = _a.attrs
    var index = useIndex()
    var prefixCls = ''.concat(stylePrefix, '-array-base')
    return function () {
      return h(
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
var ArrayBaseAddition = defineComponent({
  name: 'ArrayBaseAddition',
  props: ['title', 'method', 'defaultValue'],
  setup: function (props, _a) {
    var listeners = _a.listeners
    var self = useField()
    var array = useArray()
    var prefixCls = ''.concat(stylePrefix, '-array-base')
    return function () {
      if (!array) return null
      if (
        (array === null || array === void 0
          ? void 0
          : array.field.value.pattern) !== 'editable'
      )
        return null
      return h(
        Button,
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
var ArrayBaseRemove = defineComponent({
  name: 'ArrayBaseRemove',
  props: ['title', 'index'],
  setup: function (props, _a) {
    var attrs = _a.attrs,
      listeners = _a.listeners
    var indexRef = useIndex(props.index)
    var base = useArray()
    var prefixCls = ''.concat(stylePrefix, '-array-base')
    return function () {
      if (
        (base === null || base === void 0
          ? void 0
          : base.field.value.pattern) !== 'editable'
      )
        return null
      return h(
        Button,
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
var ArrayBaseMoveDown = defineComponent({
  name: 'ArrayBaseMoveDown',
  props: ['title', 'index'],
  setup: function (props, _a) {
    var attrs = _a.attrs,
      listeners = _a.listeners
    var indexRef = useIndex(props.index)
    var base = useArray()
    var prefixCls = ''.concat(stylePrefix, '-array-base')
    return function () {
      if (
        (base === null || base === void 0
          ? void 0
          : base.field.value.pattern) !== 'editable'
      )
        return null
      return h(
        Button,
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
var ArrayBaseMoveUp = defineComponent({
  name: 'ArrayBaseMoveUp',
  props: ['title', 'index'],
  setup: function (props, _a) {
    var attrs = _a.attrs,
      listeners = _a.listeners
    var indexRef = useIndex(props.index)
    var base = useArray()
    var prefixCls = ''.concat(stylePrefix, '-array-base')
    return function () {
      if (
        (base === null || base === void 0
          ? void 0
          : base.field.value.pattern) !== 'editable'
      )
        return null
      return h(
        Button,
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
export var ArrayBase = composeExport(ArrayBaseInner, {
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
