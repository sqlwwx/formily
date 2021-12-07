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
import { defineComponent, ref, onBeforeUnmount } from '@vue/composition-api'
import { observer } from '@formily/reactive-vue'
import { reaction } from '@formily/reactive'
import { isVoidField } from '@formily/core'
import { h, useField } from '@formily/vue'
import Popover from 'element-ui/lib/popover'
import { stylePrefix } from '../__builtins__/configs'
import { FormBaseItem } from '../form-item'
import { composeExport } from '../__builtins__/shared'
var getParentPattern = function (fieldRef) {
  var _a, _b
  var field = fieldRef.value
  return (
    ((_a = field === null || field === void 0 ? void 0 : field.parent) ===
      null || _a === void 0
      ? void 0
      : _a.pattern) ||
    ((_b = field === null || field === void 0 ? void 0 : field.form) === null ||
    _b === void 0
      ? void 0
      : _b.pattern)
  )
}
var getFormItemProps = function (fieldRef) {
  var field = fieldRef.value
  if (isVoidField(field)) return {}
  if (!field) return {}
  var takeMessage = function () {
    if (field.selfErrors.length) return field.selfErrors[0]
    if (field.selfWarnings.length) return field.selfWarnings[0]
    if (field.selfSuccesses.length) return field.selfSuccesses[0]
  }
  return {
    feedbackStatus:
      field.validateStatus === 'validating' ? 'pending' : field.validateStatus,
    feedbackText: takeMessage(),
    extra: field.description,
  }
}
var EditableInner = observer(
  defineComponent({
    name: 'FEditable',
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots,
        refs = _a.refs
      var fieldRef = useField()
      var prefixCls = ''.concat(stylePrefix, '-editable')
      var setEditable = function (payload) {
        var pattern = getParentPattern(fieldRef)
        if (pattern !== 'editable') return
        fieldRef.value.setPattern(payload ? 'editable' : 'readPretty')
      }
      var dispose = reaction(
        function () {
          var pattern = getParentPattern(fieldRef)
          return pattern
        },
        function (pattern) {
          if (pattern === 'editable') {
            fieldRef.value.setPattern('readPretty')
          }
        },
        {
          fireImmediately: true,
        }
      )
      onBeforeUnmount(dispose)
      return function () {
        var field = fieldRef.value
        var editable = field.pattern === 'editable'
        var pattern = getParentPattern(fieldRef)
        var itemProps = getFormItemProps(fieldRef)
        var recover = function () {
          var _a, _b
          if (
            editable &&
            !((_b =
              (_a = fieldRef.value) === null || _a === void 0
                ? void 0
                : _a.errors) === null || _b === void 0
              ? void 0
              : _b.length)
          ) {
            setEditable(false)
          }
        }
        var onClick = function (e) {
          var innerRef = refs.innerRef
          var target = e.target
          var close = innerRef.querySelector(
            '.'.concat(prefixCls, '-close-btn')
          )
          if (
            (target === null || target === void 0
              ? void 0
              : target.contains(close)) ||
            (close === null || close === void 0
              ? void 0
              : close.contains(target))
          ) {
            recover()
          } else if (!editable) {
            setTimeout(function () {
              setEditable(true)
              setTimeout(function () {
                var _a
                ;(_a = innerRef.querySelector('input')) === null ||
                _a === void 0
                  ? void 0
                  : _a.focus()
              })
            })
          }
        }
        var renderEditHelper = function () {
          if (editable) return null
          return h(
            FormBaseItem,
            {
              attrs: __assign(__assign({}, attrs), itemProps),
            },
            {
              default: function () {
                return h(
                  'i',
                  {
                    class: [
                      ''.concat(prefixCls, '-edit-btn'),
                      pattern === 'editable'
                        ? 'el-icon-edit'
                        : 'el-icon-chat-dot-round',
                    ],
                  },
                  {}
                )
              },
            }
          )
        }
        var renderCloseHelper = function () {
          if (!editable) return null
          return h(
            FormBaseItem,
            {
              attrs: __assign({}, attrs),
            },
            {
              default: function () {
                return h(
                  'i',
                  {
                    class: [
                      ''.concat(prefixCls, '-close-btn'),
                      'el-icon-close',
                    ],
                  },
                  {}
                )
              },
            }
          )
        }
        return h(
          'div',
          {
            class: prefixCls,
            ref: 'innerRef',
            on: {
              click: onClick,
            },
          },
          {
            default: function () {
              return h(
                'div',
                {
                  class: ''.concat(prefixCls, '-content'),
                },
                {
                  default: function () {
                    return [
                      h(
                        FormBaseItem,
                        {
                          attrs: __assign(__assign({}, attrs), itemProps),
                        },
                        slots
                      ),
                      renderEditHelper(),
                      renderCloseHelper(),
                    ]
                  },
                }
              )
            },
          }
        )
      }
    },
  })
)
var EditablePopover = observer(
  defineComponent({
    name: 'FEditablePopover',
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots
      var fieldRef = useField()
      var prefixCls = ''.concat(stylePrefix, '-editable')
      var visible = ref(false)
      return function () {
        var field = fieldRef.value
        var pattern = getParentPattern(fieldRef)
        return h(
          Popover,
          {
            class: [prefixCls],
            attrs: __assign(__assign({}, attrs), {
              title: attrs.title || field.title,
              value: visible.value,
              trigger: 'click',
            }),
            on: {
              input: function (value) {
                visible.value = value
              },
            },
          },
          {
            default: function () {
              return [slots.default()]
            },
            reference: function () {
              return h(
                FormBaseItem,
                { class: [''.concat(prefixCls, '-trigger')] },
                {
                  default: function () {
                    return h(
                      'div',
                      {
                        class: [''.concat(prefixCls, '-content')],
                      },
                      {
                        default: function () {
                          return [
                            h(
                              'span',
                              {
                                class: [''.concat(prefixCls, '-preview')],
                              },
                              {
                                default: function () {
                                  return [attrs.title || field.title]
                                },
                              }
                            ),
                            h(
                              'i',
                              {
                                class: [
                                  ''.concat(prefixCls, '-edit-btn'),
                                  pattern === 'editable'
                                    ? 'el-icon-edit'
                                    : 'el-icon-chat-dot-round',
                                ],
                              },
                              {}
                            ),
                          ]
                        },
                      }
                    )
                  },
                }
              )
            },
          }
        )
      }
    },
  })
)
export var Editable = composeExport(EditableInner, {
  Popover: EditablePopover,
})
export default Editable
//# sourceMappingURL=index.js.map
