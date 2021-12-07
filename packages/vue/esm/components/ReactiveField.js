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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i)
          ar[i] = from[i]
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from))
  }
import { defineComponent, inject, ref } from 'vue-demi'
import { isVoidField } from '@formily/core'
import { FormPath } from '@formily/shared'
import { observer } from '@formily/reactive-vue'
import { toJS } from '@formily/reactive'
import { SchemaOptionsSymbol } from '../shared'
import h from '../shared/h'
import { Fragment } from '../shared/fragment'
function isVueOptions(options) {
  if (!options) {
    return false
  }
  return (
    typeof options.template === 'string' ||
    typeof options.render === 'function' ||
    typeof options.setup === 'function'
  )
}
export default observer(
  defineComponent({
    name: 'ReactiveField',
    props: ['field'],
    setup: function (props, _a) {
      var slots = _a.slots
      var optionsRef = inject(SchemaOptionsSymbol, ref(null))
      var key = Math.floor(Date.now() * Math.random()).toString(16)
      var mergeChildren = function (slots, content) {
        var _a
        if (!Object.keys(slots).length && !content) return {}
        var defaultSlot = (
          slots === null || slots === void 0 ? void 0 : slots.default
        )
          ? slots === null || slots === void 0
            ? void 0
            : slots.default(props.field, props.field.form)
          : []
        if (typeof content === 'string') {
          slots['default'] = function () {
            return __spreadArray(
              __spreadArray([], __read(defaultSlot), false),
              [content],
              false
            )
          }
        } else if (isVueOptions(content) || typeof content === 'function') {
          // scoped slot for class component
          if (
            isVueOptions(content) &&
            ((_a =
              content === null || content === void 0
                ? void 0
                : content.render) === null || _a === void 0
              ? void 0
              : _a.length) > 1
          ) {
            slots['default'] = function (scopedProps) {
              return __spreadArray(
                __spreadArray([], __read(defaultSlot), false),
                [h(content, { props: scopedProps }, {})],
                false
              )
            }
          } else {
            slots['default'] = function () {
              return __spreadArray(
                __spreadArray([], __read(defaultSlot), false),
                [h(content, {}, {})],
                false
              )
            }
          }
        } else if (content && typeof content === 'object') {
          // for named slots
          Object.keys(content).forEach(function (key) {
            var _a
            var child = content[key]
            var slot = (
              slots === null || slots === void 0 ? void 0 : slots[key]
            )
              ? slots === null || slots === void 0
                ? void 0
                : slots[key]()
              : []
            if (typeof child === 'string') {
              slots[key] = function () {
                return __spreadArray(
                  __spreadArray([], __read(slot), false),
                  [child],
                  false
                )
              }
            } else if (isVueOptions(child) || typeof child === 'function') {
              // scoped slot for class component
              if (
                isVueOptions(child) &&
                ((_a =
                  child === null || child === void 0
                    ? void 0
                    : child.render) === null || _a === void 0
                  ? void 0
                  : _a.length) > 1
              ) {
                slots[key] = function (scopedProps) {
                  return __spreadArray(
                    __spreadArray([], __read(slot), false),
                    [h(child, { props: scopedProps }, {})],
                    false
                  )
                }
              } else {
                slots[key] = function () {
                  return __spreadArray(
                    __spreadArray([], __read(slot), false),
                    [h(child, {}, {})],
                    false
                  )
                }
              }
            }
          })
        }
        return slots
      }
      return function () {
        var field = props.field
        var children = {}
        if (!field) {
          children = slots
        } else if (field.display !== 'visible') {
          children = __assign(__assign({}, slots), {
            default: function () {
              return [h('template', {}, {})]
            },
          })
        } else {
          var renderDecorator = function (childNodes) {
            var _a, _b, _c
            if (
              !((_a =
                field === null || field === void 0
                  ? void 0
                  : field.decorator) === null || _a === void 0
                ? void 0
                : _a[0])
            ) {
              return {
                default: function () {
                  return childNodes
                },
              }
            } else {
              var decorator_1 =
                (_c = FormPath.getIn(
                  (_b = optionsRef.value) === null || _b === void 0
                    ? void 0
                    : _b.components,
                  field.decorator[0]
                )) !== null && _c !== void 0
                  ? _c
                  : field.decorator[0]
              var decoratorData_1 = toJS(field.decorator[1]) || {}
              var style_1 =
                decoratorData_1 === null || decoratorData_1 === void 0
                  ? void 0
                  : decoratorData_1.style
              var classes_1 =
                decoratorData_1 === null || decoratorData_1 === void 0
                  ? void 0
                  : decoratorData_1.class
              delete decoratorData_1.style
              delete decoratorData_1.class
              return {
                default: function () {
                  return h(
                    decorator_1,
                    {
                      style: style_1,
                      class: classes_1,
                      attrs: __assign({}, decoratorData_1),
                    },
                    {
                      default: function () {
                        return childNodes
                      },
                    }
                  )
                },
              }
            }
          }
          var renderComponent = function () {
            var _a, _b, _c
            if (
              !((_a =
                field === null || field === void 0
                  ? void 0
                  : field.component) === null || _a === void 0
                ? void 0
                : _a[0])
            ) {
              return h(
                Fragment,
                {},
                {
                  default: function () {
                    var _a
                    return (_a = slots.default) === null || _a === void 0
                      ? void 0
                      : _a.call(slots, {
                          field: props.field,
                          form: props.field.form,
                        })
                  },
                }
              )
            }
            var component =
              (_c = FormPath.getIn(
                (_b = optionsRef.value) === null || _b === void 0
                  ? void 0
                  : _b.components,
                field.component[0]
              )) !== null && _c !== void 0
                ? _c
                : field.component[0]
            var originData = toJS(field.component[1]) || {}
            var events = {}
            var originChange = originData['@change'] || originData['onChange']
            var originFocus = originData['@focus'] || originData['onFocus']
            var originBlur = originData['@blur'] || originData['onBlur']
            // '@xxx' has higher priority
            Object.keys(originData)
              .filter(function (key) {
                return key.startsWith('on')
              })
              .forEach(function (eventKey) {
                var eventName = ''
                  .concat(eventKey[2].toLowerCase())
                  .concat(eventKey.slice(3))
                events[eventName] = originData[eventKey]
              })
            Object.keys(originData)
              .filter(function (key) {
                return key.startsWith('@')
              })
              .forEach(function (eventKey) {
                events[eventKey.slice(1)] = originData[eventKey]
                delete originData[eventKey]
              })
            events.change = function () {
              var args = []
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i]
              }
              if (!isVoidField(field))
                field.onInput.apply(
                  field,
                  __spreadArray([], __read(args), false)
                )
              originChange === null || originChange === void 0
                ? void 0
                : originChange.apply(
                    void 0,
                    __spreadArray([], __read(args), false)
                  )
            }
            events.focus = function () {
              var args = []
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i]
              }
              if (!isVoidField(field))
                field.onFocus.apply(
                  field,
                  __spreadArray([], __read(args), false)
                )
              originFocus === null || originFocus === void 0
                ? void 0
                : originFocus.apply(
                    void 0,
                    __spreadArray([], __read(args), false)
                  )
            }
            events.blur = function () {
              var args = []
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i]
              }
              if (!isVoidField(field))
                field.onBlur.apply(
                  field,
                  __spreadArray([], __read(args), false)
                )
              originBlur === null || originBlur === void 0
                ? void 0
                : originBlur.apply(
                    void 0,
                    __spreadArray([], __read(args), false)
                  )
            }
            var style =
              originData === null || originData === void 0
                ? void 0
                : originData.style
            var classes =
              originData === null || originData === void 0
                ? void 0
                : originData.class
            delete originData.style
            delete originData.class
            var attrs = __assign(
              __assign(
                {
                  disabled: !isVoidField(field)
                    ? field.pattern === 'disabled' ||
                      field.pattern === 'readPretty'
                    : undefined,
                  readOnly: !isVoidField(field)
                    ? field.pattern === 'readOnly'
                    : undefined,
                },
                originData
              ),
              {
                // toJS is used to avoid some render loop.
                value: !isVoidField(field) ? toJS(field.value) : undefined,
              }
            )
            var componentData = {
              attrs: attrs,
              style: style,
              class: classes,
              on: events,
            }
            var componentChildren = mergeChildren(
              __assign({}, slots),
              field.content
            )
            return h(component, componentData, componentChildren)
          }
          children = renderDecorator([renderComponent()])
        }
        return h(Fragment, { key: key }, children)
      }
    },
  })
)
//# sourceMappingURL=ReactiveField.js.map
