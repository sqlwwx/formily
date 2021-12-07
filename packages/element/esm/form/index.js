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
import { FormProvider as _FormProvider, h, useForm } from '@formily/vue'
import { defineComponent } from '@vue/composition-api'
import { FormLayout } from '../form-layout'
import { PreviewText } from '../preview-text'
var FormProvider = _FormProvider
export var Form = defineComponent({
  name: 'FForm',
  props: [
    'form',
    'component',
    'previewTextPlaceholder',
    'onAutoSubmit',
    'onAutoSubmitFailed',
  ],
  setup: function (props, _a) {
    var attrs = _a.attrs,
      slots = _a.slots,
      listeners = _a.listeners
    var top = useForm()
    return function () {
      var form = props.form,
        _a = props.component,
        component = _a === void 0 ? 'form' : _a,
        _b = props.onAutoSubmit,
        onAutoSubmit =
          _b === void 0
            ? listeners === null || listeners === void 0
              ? void 0
              : listeners.autoSubmit
            : _b,
        _c = props.onAutoSubmitFailed,
        onAutoSubmitFailed =
          _c === void 0
            ? listeners === null || listeners === void 0
              ? void 0
              : listeners.autoSubmitFailed
            : _c,
        _d = props.previewTextPlaceholder,
        previewTextPlaceholder =
          _d === void 0
            ? slots === null || slots === void 0
              ? void 0
              : slots.previewTextPlaceholder
            : _d
      var renderContent = function (form) {
        return h(
          PreviewText.Placeholder,
          {
            props: {
              value: previewTextPlaceholder,
            },
          },
          {
            default: function () {
              return [
                h(
                  FormLayout,
                  {
                    attrs: __assign({}, attrs),
                  },
                  {
                    default: function () {
                      return [
                        h(
                          component,
                          {
                            on: {
                              submit: function (e) {
                                var _a, _b
                                ;(_a =
                                  e === null || e === void 0
                                    ? void 0
                                    : e.stopPropagation) === null ||
                                _a === void 0
                                  ? void 0
                                  : _a.call(e)
                                ;(_b =
                                  e === null || e === void 0
                                    ? void 0
                                    : e.preventDefault) === null ||
                                _b === void 0
                                  ? void 0
                                  : _b.call(e)
                                form
                                  .submit(onAutoSubmit)
                                  .catch(onAutoSubmitFailed)
                              },
                            },
                          },
                          slots
                        ),
                      ]
                    },
                  }
                ),
              ]
            },
          }
        )
      }
      if (form) {
        return h(
          FormProvider,
          { props: { form: form } },
          {
            default: function () {
              return renderContent(form)
            },
          }
        )
      }
      if (!top.value) throw new Error('must pass form instance by createForm')
      return renderContent(top.value)
    }
  },
})
export default Form
//# sourceMappingURL=index.js.map
