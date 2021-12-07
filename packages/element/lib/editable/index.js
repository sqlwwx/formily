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
exports.Editable = void 0
var composition_api_1 = require('@vue/composition-api')
var reactive_vue_1 = require('@formily/reactive-vue')
var reactive_1 = require('@formily/reactive')
var core_1 = require('@formily/core')
var vue_1 = require('@formily/vue')
var element_ui_1 = require('element-ui')
var configs_1 = require('../__builtins__/configs')
var form_item_1 = require('../form-item')
var shared_1 = require('../__builtins__/shared')
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
  if ((0, core_1.isVoidField)(field)) return {}
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
var EditableInner = (0, reactive_vue_1.observer)(
  (0, composition_api_1.defineComponent)({
    name: 'FEditable',
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots,
        refs = _a.refs
      var fieldRef = (0, vue_1.useField)()
      var prefixCls = ''.concat(configs_1.stylePrefix, '-editable')
      var setEditable = function (payload) {
        var pattern = getParentPattern(fieldRef)
        if (pattern !== 'editable') return
        fieldRef.value.setPattern(payload ? 'editable' : 'readPretty')
      }
      var dispose = (0, reactive_1.reaction)(
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
      ;(0, composition_api_1.onBeforeUnmount)(dispose)
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
          return (0, vue_1.h)(
            form_item_1.FormBaseItem,
            {
              attrs: __assign(__assign({}, attrs), itemProps),
            },
            {
              default: function () {
                return (0, vue_1.h)(
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
          return (0, vue_1.h)(
            form_item_1.FormBaseItem,
            {
              attrs: __assign({}, attrs),
            },
            {
              default: function () {
                return (0, vue_1.h)(
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
        return (0, vue_1.h)(
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
              return (0, vue_1.h)(
                'div',
                {
                  class: ''.concat(prefixCls, '-content'),
                },
                {
                  default: function () {
                    return [
                      (0, vue_1.h)(
                        form_item_1.FormBaseItem,
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
var EditablePopover = (0, reactive_vue_1.observer)(
  (0, composition_api_1.defineComponent)({
    name: 'FEditablePopover',
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots
      var fieldRef = (0, vue_1.useField)()
      var prefixCls = ''.concat(configs_1.stylePrefix, '-editable')
      var visible = (0, composition_api_1.ref)(false)
      return function () {
        var field = fieldRef.value
        var pattern = getParentPattern(fieldRef)
        return (0, vue_1.h)(
          element_ui_1.Popover,
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
              return (0, vue_1.h)(
                form_item_1.FormBaseItem,
                { class: [''.concat(prefixCls, '-trigger')] },
                {
                  default: function () {
                    return (0, vue_1.h)(
                      'div',
                      {
                        class: [''.concat(prefixCls, '-content')],
                      },
                      {
                        default: function () {
                          return [
                            (0, vue_1.h)(
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
                            (0, vue_1.h)(
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
exports.Editable = (0, shared_1.composeExport)(EditableInner, {
  Popover: EditablePopover,
})
exports.default = exports.Editable
//# sourceMappingURL=index.js.map
