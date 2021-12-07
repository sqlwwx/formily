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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
import { FormProvider as _FormProvider, createForm } from '@formily/vue'
import { default as ElFormComponent } from 'element-ui/lib/form'
var FormProvider = _FormProvider
export var ElForm = {
  functional: true,
  render: function (h, context) {
    var _a
    var _b = context.props,
      _c = _b.form,
      form = _c === void 0 ? createForm({}) : _c,
      _d = _b.component,
      component = _d === void 0 ? ElFormComponent : _d,
      _e = _b.onAutoSubmit,
      onAutoSubmit =
        _e === void 0
          ? (_a = context.listeners) === null || _a === void 0
            ? void 0
            : _a.autoSubmit
          : _e,
      props = __rest(_b, ['form', 'component', 'onAutoSubmit'])
    var submitHandler = Array.isArray(onAutoSubmit)
      ? onAutoSubmit[0]
      : onAutoSubmit
    return h(FormProvider, { props: { form: form } }, [
      h(
        component,
        __assign(__assign({}, context.data), {
          props: props,
          nativeOn: {
            submit: function (e) {
              var _a, _b
              ;(_a =
                e === null || e === void 0 ? void 0 : e.stopPropagation) ===
                null || _a === void 0
                ? void 0
                : _a.call(e)
              ;(_b = e === null || e === void 0 ? void 0 : e.preventDefault) ===
                null || _b === void 0
                ? void 0
                : _b.call(e)
              form.submit(submitHandler)
            },
          },
        }),
        context.children
      ),
    ])
  },
}
export default ElForm
//# sourceMappingURL=index.js.map
