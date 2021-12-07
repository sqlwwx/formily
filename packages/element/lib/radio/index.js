'use strict'
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
Object.defineProperty(exports, '__esModule', { value: true })
exports.Radio = void 0
var vue_1 = require('@formily/vue')
var composition_api_1 = require('@vue/composition-api')
var shared_1 = require('../__builtins__/shared')
var preview_text_1 = require('../preview-text')
var element_ui_1 = require('element-ui')
var TransformElRadioGroup = (0, shared_1.transformComponent)(
  element_ui_1.RadioGroup,
  {
    change: 'input',
  }
)
var RadioGroupOption = (0, composition_api_1.defineComponent)({
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
        customProps.optionType === 'button'
          ? element_ui_1.RadioButton
          : element_ui_1.Radio
      var children =
        options.length !== 0
          ? {
              default: function () {
                return options.map(function (option) {
                  if (typeof option === 'string') {
                    return (0, vue_1.h)(
                      OptionType,
                      { props: { label: option } },
                      {
                        default: function () {
                          var _a
                          return [
                            (0, shared_1.resolveComponent)(
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
                    return (0, vue_1.h)(
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
                            (0, shared_1.resolveComponent)(
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
      return (0, vue_1.h)(
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
var RadioGroup = (0, vue_1.connect)(
  RadioGroupOption,
  (0, vue_1.mapProps)({ dataSource: 'options' }),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.Select)
)
exports.Radio = (0, shared_1.composeExport)(element_ui_1.Radio, {
  Group: RadioGroup,
})
exports.default = exports.Radio
//# sourceMappingURL=index.js.map
