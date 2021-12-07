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
exports.Select = void 0
var vue_1 = require('@formily/vue')
var composition_api_1 = require('@vue/composition-api')
var preview_text_1 = require('../preview-text')
var element_ui_1 = require('element-ui')
var __builtins__1 = require('../__builtins__')
var SelectOption = (0, composition_api_1.defineComponent)({
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
                    return (0, vue_1.h)(
                      element_ui_1.Option,
                      { props: { value: option, label: option } },
                      {
                        default: function () {
                          return [
                            (0, __builtins__1.resolveComponent)(
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
                    return (0, vue_1.h)(
                      element_ui_1.Option,
                      {
                        props: __assign({}, option),
                      },
                      {
                        default: function () {
                          return [
                            (0, __builtins__1.resolveComponent)(
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
      return (0, vue_1.h)(
        element_ui_1.Select,
        {
          attrs: __assign({}, attrs),
          on: listeners,
        },
        children
      )
    }
  },
})
exports.Select = (0, vue_1.connect)(
  SelectOption,
  (0, vue_1.mapProps)({ dataSource: 'options', loading: true }),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.Select)
)
exports.default = exports.Select
//# sourceMappingURL=index.js.map
