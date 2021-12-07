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
import { connect, mapProps, h, mapReadPretty } from '@formily/vue'
import { defineComponent } from '@vue/composition-api'
import { PreviewText } from '../preview-text'
import { default as ElSelect } from 'element-ui/lib/select'
import { default as ElOption } from 'element-ui/lib/option'
import { resolveComponent } from '../__builtins__'
var SelectOption = defineComponent({
  name: 'FSelect',
  props: ['options'],
  setup: function (customProps, _a) {
    var attrs = _a.attrs,
      slots = _a.slots,
      listeners = _a.listeners
    return function () {
      var options = customProps.options || []
      var children =
        options.length !== 0
          ? {
              default: function () {
                return options.map(function (option) {
                  if (typeof option === 'string') {
                    return h(
                      ElOption,
                      { props: { value: option, label: option } },
                      {
                        default: function () {
                          return [
                            resolveComponent(
                              slots === null || slots === void 0
                                ? void 0
                                : slots.option,
                              { option: option }
                            ),
                          ]
                        },
                      }
                    )
                  } else {
                    return h(
                      ElOption,
                      {
                        props: __assign({}, option),
                      },
                      {
                        default: function () {
                          return [
                            resolveComponent(
                              slots === null || slots === void 0
                                ? void 0
                                : slots.option,
                              {
                                option: option,
                              }
                            ),
                          ]
                        },
                      }
                    )
                  }
                })
              },
            }
          : slots
      return h(
        ElSelect,
        {
          attrs: __assign({}, attrs),
          on: listeners,
        },
        children
      )
    }
  },
})
export var Select = connect(
  SelectOption,
  mapProps({ dataSource: 'options', loading: true }),
  mapReadPretty(PreviewText.Select)
)
export default Select
//# sourceMappingURL=index.js.map
