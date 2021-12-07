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
import { h, useParentForm } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { defineComponent } from '@vue/composition-api'
import { default as ElButton } from 'element-ui/lib/button'
export var Submit = observer(
  defineComponent({
    name: 'FSubmit',
    props: ['onClick', 'onSubmit', 'onSubmitSuccess', 'onSubmitFailed'],
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots,
        listeners = _a.listeners
      var formRef = useParentForm()
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
        return h(
          ElButton,
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
export default Submit
//# sourceMappingURL=index.js.map
