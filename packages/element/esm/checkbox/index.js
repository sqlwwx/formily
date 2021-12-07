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
import { default as ElCheckbox } from 'element-ui/lib/checkbox'
import { default as ElCheckboxGroup } from 'element-ui/lib/checkbox-group'
import { default as ElCheckboxButton } from 'element-ui/lib/checkbox-button'
import { PreviewText } from '../preview-text'
var CheckboxOption = defineComponent({
  name: 'Checkbox',
  inheritAttrs: false,
  props: {
    option: {
      type: Object,
      default: null,
    },
  },
  setup: function (curtomProps, _a) {
    var attrs = _a.attrs,
      slots = _a.slots,
      listeners = _a.listeners
    return function () {
      var props = attrs
      var option =
        curtomProps === null || curtomProps === void 0
          ? void 0
          : curtomProps.option
      if (option) {
        var children = {
          default: function () {
            var _a
            return [
              resolveComponent(
                (_a = slots.default) !== null && _a !== void 0
                  ? _a
                  : option.label,
                { option: option }
              ),
            ]
          },
        }
        var newProps = {}
        Object.assign(newProps, option)
        newProps.label = option.value
        delete newProps.value
        return h(
          attrs.optionType === 'button' ? ElCheckboxButton : ElCheckbox,
          {
            attrs: __assign({}, newProps),
          },
          children
        )
      }
      return h(
        ElCheckbox,
        {
          attrs: __assign({}, props),
          on: listeners,
        },
        slots
      )
    }
  },
})
var TransformElCheckboxGroup = transformComponent(ElCheckboxGroup, {
  change: 'input',
})
var CheckboxGroupOption = defineComponent({
  name: 'CheckboxGroup',
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
      var children =
        options.length !== 0
          ? {
              default: function () {
                return options.map(function (option) {
                  if (typeof option === 'string') {
                    return h(
                      Checkbox,
                      {
                        props: {
                          option: {
                            label: option,
                            value: option,
                          },
                        },
                        attrs: {
                          optionType: customProps.optionType,
                        },
                      },
                      (
                        slots === null || slots === void 0
                          ? void 0
                          : slots.option
                      )
                        ? {
                            default: function () {
                              return slots.option({ option: option })
                            },
                          }
                        : {}
                    )
                  } else {
                    return h(
                      Checkbox,
                      {
                        props: {
                          option: option,
                        },
                        attrs: {
                          optionType: customProps.optionType,
                        },
                      },
                      (
                        slots === null || slots === void 0
                          ? void 0
                          : slots.option
                      )
                        ? {
                            default: function () {
                              return slots.option({ option: option })
                            },
                          }
                        : {}
                    )
                  }
                })
              },
            }
          : slots
      return h(
        TransformElCheckboxGroup,
        {
          attrs: __assign({}, attrs),
          on: listeners,
        },
        children
      )
    }
  },
})
var CheckboxGroup = connect(
  CheckboxGroupOption,
  mapProps({ dataSource: 'options' }),
  mapReadPretty(PreviewText.Select, {
    multiple: true,
  })
)
export var Checkbox = composeExport(connect(CheckboxOption), {
  Group: CheckboxGroup,
})
//# sourceMappingURL=index.js.map
