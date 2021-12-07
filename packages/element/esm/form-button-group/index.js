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
import { h } from '@formily/vue'
import { defineComponent } from '@vue/composition-api'
import { Space } from '../space'
import { FormBaseItem } from '../form-item'
import { stylePrefix } from '../__builtins__/configs'
export var FormButtonGroup = defineComponent({
  name: 'FFormButtonGroup',
  props: {
    align: {
      type: String,
      default: 'left',
    },
    gutter: {
      type: Number,
      default: 8,
    },
    alignFormItem: {
      type: Boolean,
      default: false,
    },
  },
  setup: function (props, _a) {
    var slots = _a.slots,
      attrs = _a.attrs
    var prefixCls = ''.concat(stylePrefix, '-form-button-group')
    return function () {
      if (props.alignFormItem) {
        return h(
          FormBaseItem,
          {
            style: {
              margin: 0,
              padding: 0,
              width: '100%',
            },
            attrs: __assign({ colon: false, label: ' ' }, attrs),
          },
          {
            default: function () {
              return h(Space, { props: { size: props.gutter } }, slots)
            },
          }
        )
      } else {
        return h(
          Space,
          {
            class: [prefixCls],
            style: {
              justifyContent:
                props.align === 'left'
                  ? 'flex-start'
                  : props.align === 'right'
                  ? 'flex-end'
                  : 'center',
              display: 'flex',
            },
            props: __assign(__assign({}, attrs), { size: props.gutter }),
            attrs: attrs,
          },
          slots
        )
      }
    }
  },
})
export default FormButtonGroup
//# sourceMappingURL=index.js.map
