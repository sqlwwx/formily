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
import {
  provide,
  inject,
  defineComponent,
  ref,
  watch,
} from '@vue/composition-api'
import { h } from '@formily/vue'
import { stylePrefix } from '../__builtins__/configs'
import { useResponsiveFormLayout } from './useResponsiveFormLayout'
export var FormLayoutDeepContext = Symbol('FormLayoutDeepContext')
export var FormLayoutShallowContext = Symbol('FormLayoutShallowContext')
export var useFormDeepLayout = function () {
  return inject(FormLayoutDeepContext, ref({}))
}
export var useFormShallowLayout = function () {
  return inject(FormLayoutShallowContext, ref({}))
}
export var useFormLayout = function () {
  var shallowLayout = useFormShallowLayout()
  var deepLayout = useFormDeepLayout()
  var formLayout = ref(
    __assign(__assign({}, deepLayout.value), shallowLayout.value)
  )
  watch(
    [shallowLayout, deepLayout],
    function () {
      formLayout.value = __assign(
        __assign({}, deepLayout.value),
        shallowLayout.value
      )
    },
    {
      deep: true,
    }
  )
  return formLayout
}
export var FormLayout = defineComponent({
  name: 'FFormLayout',
  props: {
    className: {},
    colon: { default: true },
    labelAlign: {},
    wrapperAlign: {},
    labelWrap: { default: false },
    labelWidth: {},
    wrapperWidth: {},
    wrapperWrap: { default: false },
    labelCol: {},
    wrapperCol: {},
    fullness: { default: false },
    size: { default: 'default' },
    layout: { default: 'horizontal' },
    direction: { default: 'ltr' },
    shallow: { default: true },
    feedbackLayout: {},
    tooltipLayout: {},
    bordered: { default: true },
    inset: { default: false },
    breakpoints: {},
    spaceGap: {},
    gridColumnGap: {},
    gridRowGap: {},
  },
  setup: function (customProps, _a) {
    var slots = _a.slots,
      refs = _a.refs
    var props = useResponsiveFormLayout(customProps, refs).props
    var deepLayout = useFormDeepLayout()
    var newDeepLayout = ref(__assign({}, deepLayout))
    var shallowProps = ref({})
    watch(
      [props, deepLayout],
      function () {
        shallowProps.value = props.value.shallow ? props.value : undefined
        if (!props.value.shallow) {
          Object.assign(newDeepLayout.value, props.value)
        } else {
          if (props.value.size) {
            newDeepLayout.value.size = props.value.size
          }
          if (props.value.colon) {
            newDeepLayout.value.colon = props.value.colon
          }
        }
      },
      { deep: true, immediate: true }
    )
    provide(FormLayoutDeepContext, newDeepLayout)
    provide(FormLayoutShallowContext, shallowProps)
    var formPrefixCls = ''.concat(stylePrefix, '-form')
    return function () {
      var _a
      var classNames =
        ((_a = {}),
        (_a[''.concat(formPrefixCls, '-').concat(props.value.layout)] = true),
        (_a[''.concat(formPrefixCls, '-rtl')] =
          props.value.direction === 'rtl'),
        (_a[''.concat(formPrefixCls, '-').concat(props.value.size)] =
          props.value.size !== undefined),
        (_a[''.concat(props.value.className)] =
          props.value.className !== undefined),
        _a)
      return h(
        'div',
        {
          ref: 'root',
          class: classNames,
        },
        slots
      )
    }
  },
})
export default FormLayout
//# sourceMappingURL=index.js.map
