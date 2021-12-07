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
export var Reset = observer(
  defineComponent({
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
      var formRef = useParentForm()
      var listeners = context.listeners,
        slots = context.slots
      return function () {
        var form =
          formRef === null || formRef === void 0 ? void 0 : formRef.value
        return h(
          ElButton,
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
export default Reset
//# sourceMappingURL=index.js.map
