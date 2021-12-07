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
exports.Reset = void 0
var vue_1 = require('@formily/vue')
var reactive_vue_1 = require('@formily/reactive-vue')
var composition_api_1 = require('@vue/composition-api')
var element_ui_1 = require('element-ui')
exports.Reset = (0, reactive_vue_1.observer)(
  (0, composition_api_1.defineComponent)({
    name: 'FReset',
    props: {
      forceClear: {
        type: Boolean,
        default: false,
      },
      validate: {
        type: Boolean,
        default: false,
      },
    },
    setup: function (props, context) {
      var formRef = (0, vue_1.useParentForm)()
      var listeners = context.listeners,
        slots = context.slots
      return function () {
        var form =
          formRef === null || formRef === void 0 ? void 0 : formRef.value
        return (0, vue_1.h)(
          element_ui_1.Button,
          {
            attrs: context.attrs,
            on: __assign(__assign({}, listeners), {
              click: function (e) {
                if (
                  listeners === null || listeners === void 0
                    ? void 0
                    : listeners.click
                ) {
                  if (listeners.click(e) === false) return
                }
                form === null || form === void 0
                  ? void 0
                  : form
                      .reset('*', {
                        forceClear: props.forceClear,
                        validate: props.validate,
                      })
                      .then(listeners.resetValidateSuccess)
                      .catch(listeners.resetValidateFailed)
              },
            }),
          },
          slots
        )
      }
    },
  })
)
exports.default = exports.Reset
//# sourceMappingURL=index.js.map
