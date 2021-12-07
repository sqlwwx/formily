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
import {
  composeExport,
  transformComponent,
  resolveComponent,
} from '../__builtins__/shared'
import { PreviewText } from '../preview-text'
import { default as ElRadio } from 'element-ui/lib/radio'
import { default as ElRadioGroup } from 'element-ui/lib/radio-group'
import RadioButton from 'element-ui/lib/radio-button'
var TransformElRadioGroup = transformComponent(ElRadioGroup, {
  change: 'input',
})
var RadioGroupOption = defineComponent({
  name: 'FRadioGroup',
  props: {
    options: {
      type: Array,
      default: function () {
        return []
      },
    },
    optionType: {
      type: String,
      default: 'default',
    },
  },
  setup: function (customProps, _a) {
    var attrs = _a.attrs,
      slots = _a.slots,
      listeners = _a.listeners
    return function () {
      var options = customProps.options || []
      var OptionType =
        customProps.optionType === 'button' ? RadioButton : ElRadio
      var children =
        options.length !== 0
          ? {
              default: function () {
                return options.map(function (option) {
                  if (typeof option === 'string') {
                    return h(
                      OptionType,
                      { props: { label: option } },
                      {
                        default: function () {
                          var _a
                          return [
                            resolveComponent(
                              (_a =
                                slots === null || slots === void 0
                                  ? void 0
                                  : slots.option) !== null && _a !== void 0
                                ? _a
                                : option,
                              { option: option }
                            ),
                          ]
                        },
                      }
                    )
                  } else {
                    return h(
                      OptionType,
                      {
                        props: __assign(__assign({}, option), {
                          value: undefined,
                          label: option.value,
                        }),
                      },
                      {
                        default: function () {
                          var _a
                          return [
                            resolveComponent(
                              (_a =
                                slots === null || slots === void 0
                                  ? void 0
                                  : slots.option) !== null && _a !== void 0
                                ? _a
                                : option.label,
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
        TransformElRadioGroup,
        {
          attrs: __assign({}, attrs),
          on: listeners,
        },
        children
      )
    }
  },
})
var RadioGroup = connect(
  RadioGroupOption,
  mapProps({ dataSource: 'options' }),
  mapReadPretty(PreviewText.Select)
)
export var Radio = composeExport(ElRadio, {
  Group: RadioGroup,
})
export default Radio
//# sourceMappingURL=index.js.map
