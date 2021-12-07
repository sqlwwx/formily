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
exports.Submit = void 0
var vue_1 = require('@formily/vue')
var reactive_vue_1 = require('@formily/reactive-vue')
var composition_api_1 = require('@vue/composition-api')
var element_ui_1 = require('element-ui')
exports.Submit = (0, reactive_vue_1.observer)(
  (0, composition_api_1.defineComponent)({
    name: 'FSubmit',
    props: ['onClick', 'onSubmit', 'onSubmitSuccess', 'onSubmitFailed'],
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots,
        listeners = _a.listeners
      var formRef = (0, vue_1.useParentForm)()
      return function () {
        var _a = props.onClick,
          onClick =
            _a === void 0
              ? listeners === null || listeners === void 0
                ? void 0
                : listeners.click
              : _a,
          _b = props.onSubmit,
          onSubmit =
            _b === void 0
              ? listeners === null || listeners === void 0
                ? void 0
                : listeners.submit
              : _b,
          _c = props.onSubmitSuccess,
          onSubmitSuccess =
            _c === void 0
              ? listeners === null || listeners === void 0
                ? void 0
                : listeners.submitSuccess
              : _c,
          _d = props.onSubmitFailed,
          onSubmitFailed =
            _d === void 0
              ? listeners === null || listeners === void 0
                ? void 0
                : listeners.submitFailed
              : _d
        var form =
          formRef === null || formRef === void 0 ? void 0 : formRef.value
        return (0, vue_1.h)(
          element_ui_1.Button,
          {
            attrs: __assign(
              __assign(
                {
                  nativeType: (
                    listeners === null || listeners === void 0
                      ? void 0
                      : listeners.submit
                  )
                    ? 'button'
                    : 'submit',
                  type: 'primary',
                },
                attrs
              ),
              {
                loading:
                  attrs.loading !== undefined
                    ? attrs.loading
                    : form === null || form === void 0
                    ? void 0
                    : form.submitting,
              }
            ),
            on: __assign(__assign({}, listeners), {
              click: function (e) {
                if (onClick) {
                  if (onClick(e) === false) return
                }
                if (onSubmit) {
                  form === null || form === void 0
                    ? void 0
                    : form
                        .submit(onSubmit)
                        .then(onSubmitSuccess)
                        .catch(onSubmitFailed)
                }
              },
            }),
          },
          slots
        )
      }
    },
  })
)
exports.default = exports.Submit
//# sourceMappingURL=index.js.map
