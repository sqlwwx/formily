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
import { defineComponent } from 'vue-demi'
import { observer } from '@formily/reactive-vue'
import { useForm } from '../hooks'
import h from '../shared/h'
import { Fragment } from '../shared/fragment'
export default observer(
  defineComponent({
    name: 'FormConsumer',
    inheritAttrs: false,
    setup: function (props, _a) {
      var slots = _a.slots
      var formRef = useForm()
      return function () {
        var children = __assign({}, slots)
        if (slots.default) {
          children.default = function () {
            return slots.default({
              form: formRef.value,
            })
          }
        }
        return h(Fragment, {}, children)
      }
    },
  })
)
//# sourceMappingURL=FormConsumer.js.map
