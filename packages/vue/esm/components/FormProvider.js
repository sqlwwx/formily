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
import { provide, defineComponent, watch } from 'vue-demi'
import {
  FormSymbol,
  FieldSymbol,
  SchemaMarkupSymbol,
  SchemaSymbol,
  SchemaExpressionScopeSymbol,
  SchemaOptionsSymbol,
} from '../shared/context'
import { useAttach } from '../hooks/useAttach'
import { useInjectionCleaner } from '../hooks/useInjectionCleaner'
import h from '../shared/h'
import { Fragment } from '../shared/fragment'
export default defineComponent({
  name: 'FormProvider',
  inheritAttrs: false,
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  setup: function (props, _a) {
    var attrs = _a.attrs,
      slots = _a.slots
    var getForm = function () {
      return props.form
    }
    var _b = __read(useAttach(getForm()), 2),
      formRef = _b[0],
      checker = _b[1]
    watch(
      function () {
        return props.form
      },
      function () {
        return (formRef.value = checker(getForm()))
      }
    )
    provide(FormSymbol, formRef)
    useInjectionCleaner([
      FieldSymbol,
      SchemaMarkupSymbol,
      SchemaSymbol,
      SchemaExpressionScopeSymbol,
      SchemaOptionsSymbol,
    ])
    return function () {
      return h(Fragment, { attrs: attrs }, slots)
    }
  },
})
//# sourceMappingURL=FormProvider.js.map
