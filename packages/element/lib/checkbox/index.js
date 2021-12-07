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
exports.Checkbox = void 0
var vue_1 = require('@formily/vue')
var composition_api_1 = require('@vue/composition-api')
var shared_1 = require('../__builtins__/shared')
var element_ui_1 = require('element-ui')
var preview_text_1 = require('../preview-text')
var CheckboxOption = (0, composition_api_1.defineComponent)({
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
              (0, shared_1.resolveComponent)(
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
        return (0, vue_1.h)(
          attrs.optionType === 'button'
            ? element_ui_1.CheckboxButton
            : element_ui_1.Checkbox,
          {
            attrs: __assign({}, newProps),
          },
          children
        )
      }
      return (0, vue_1.h)(
        element_ui_1.Checkbox,
        {
          attrs: __assign({}, props),
          on: listeners,
        },
        slots
      )
    }
  },
})
var TransformElCheckboxGroup = (0, shared_1.transformComponent)(
  element_ui_1.CheckboxGroup,
  {
    change: 'input',
  }
)
var CheckboxGroupOption = (0, composition_api_1.defineComponent)({
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
                    return (0, vue_1.h)(
                      exports.Checkbox,
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
                    return (0, vue_1.h)(
                      exports.Checkbox,
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
      return (0, vue_1.h)(
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
var CheckboxGroup = (0, vue_1.connect)(
  CheckboxGroupOption,
  (0, vue_1.mapProps)({ dataSource: 'options' }),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.Select, {
    multiple: true,
  })
)
exports.Checkbox = (0, shared_1.composeExport)(
  (0, vue_1.connect)(CheckboxOption),
  {
    Group: CheckboxGroup,
  }
)
//# sourceMappingURL=index.js.map
