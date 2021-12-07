'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.PreviewText = exports.usePlaceholder = void 0
var composition_api_1 = require('@vue/composition-api')
var shared_1 = require('../__builtins__/shared')
var reactive_vue_1 = require('@formily/reactive-vue')
var vue_1 = require('@formily/vue')
var shared_2 = require('@formily/shared')
var configs_1 = require('../__builtins__/configs')
var space_1 = require('../space')
var element_ui_1 = require('element-ui')
var date_util_1 = require('element-ui/src/utils/date-util')
var prefixCls = ''.concat(configs_1.stylePrefix, '-preview-text')
var PlaceholderContext = (0, shared_1.createContext)('N/A')
var usePlaceholder = function (value) {
  var placeholderCtx = (0, shared_1.useContext)(PlaceholderContext)
  var placeholder = (0, composition_api_1.computed)(function () {
    return (0, shared_2.isValid)(value) && value !== ''
      ? value
      : (0, shared_1.resolveComponent)(placeholderCtx.value) || 'N/A'
  })
  return placeholder
}
exports.usePlaceholder = usePlaceholder
var Input = (0, composition_api_1.defineComponent)({
  name: 'FPreviewTextInput',
  props: [],
  setup: function (_props, _a) {
    var attrs = _a.attrs,
      slots = _a.slots
    var placeholder = (0, exports.usePlaceholder)(attrs.value)
    return function () {
      return (0, vue_1.h)(
        space_1.Space,
        {
          class: [prefixCls],
          style: attrs.style,
        },
        {
          default: function () {
            var _a, _b, _c, _d
            return [
              (_a =
                slots === null || slots === void 0 ? void 0 : slots.prepend) ===
                null || _a === void 0
                ? void 0
                : _a.call(slots),
              (_b =
                slots === null || slots === void 0 ? void 0 : slots.prefix) ===
                null || _b === void 0
                ? void 0
                : _b.call(slots),
              placeholder.value,
              (_c =
                slots === null || slots === void 0 ? void 0 : slots.suffix) ===
                null || _c === void 0
                ? void 0
                : _c.call(slots),
              (_d =
                slots === null || slots === void 0 ? void 0 : slots.append) ===
                null || _d === void 0
                ? void 0
                : _d.call(slots),
            ]
          },
        }
      )
    }
  },
})
var Select = (0, reactive_vue_1.observer)(
  (0, composition_api_1.defineComponent)({
    name: 'FPreviewTextSelect',
    props: [],
    setup: function (_props, _a) {
      var _b, _c
      var attrs = _a.attrs
      var fieldRef = (0, vue_1.useField)()
      var field = fieldRef.value
      var props = attrs
      var dataSource = (
        (_b =
          field === null || field === void 0 ? void 0 : field.dataSource) ===
          null || _b === void 0
          ? void 0
          : _b.length
      )
        ? field.dataSource
        : (
            (_c =
              props === null || props === void 0 ? void 0 : props.options) ===
              null || _c === void 0
              ? void 0
              : _c.length
          )
        ? props.options
        : []
      var placeholder = (0, exports.usePlaceholder)()
      var getSelected = function () {
        var value = props.value
        if (props.multiple) {
          return (0, shared_2.isArr)(value)
            ? value.map(function (val) {
                return { label: val, value: val }
              })
            : []
        } else {
          return (0, shared_2.isValid)(value)
            ? [{ label: value, value: value }]
            : []
        }
      }
      var getLabels = function () {
        var selected = getSelected()
        if (!selected.length) {
          return (0, vue_1.h)(
            element_ui_1.Tag,
            {},
            {
              default: function () {
                return placeholder.value
              },
            }
          )
        }
        return selected.map(function (_a, key) {
          var _b
          var value = _a.value,
            label = _a.label
          var text =
            ((_b =
              dataSource === null || dataSource === void 0
                ? void 0
                : dataSource.find(function (item) {
                    return item.value == value
                  })) === null || _b === void 0
              ? void 0
              : _b.label) || label
          return (0, vue_1.h)(
            element_ui_1.Tag,
            {
              key: key,
              props: {
                type: 'info',
                effect: 'light',
              },
            },
            {
              default: function () {
                return text || placeholder.value
              },
            }
          )
        })
      }
      return function () {
        return (0, vue_1.h)(
          space_1.Space,
          {
            class: [prefixCls],
            style: attrs.style,
          },
          {
            default: function () {
              return getLabels()
            },
          }
        )
      }
    },
  })
)
var Cascader = (0, reactive_vue_1.observer)(
  (0, composition_api_1.defineComponent)({
    name: 'FPreviewTextCascader',
    props: [],
    setup: function (_props, _a) {
      var _b, _c, _d, _e
      var attrs = _a.attrs
      var fieldRef = (0, vue_1.useField)()
      var field = fieldRef.value
      var props = attrs
      var dataSource = (
        (_b =
          field === null || field === void 0 ? void 0 : field.dataSource) ===
          null || _b === void 0
          ? void 0
          : _b.length
      )
        ? field.dataSource
        : (
            (_c =
              props === null || props === void 0 ? void 0 : props.options) ===
              null || _c === void 0
              ? void 0
              : _c.length
          )
        ? props.options
        : []
      var placeholder = (0, exports.usePlaceholder)()
      var valueKey =
        ((_d = props.props) === null || _d === void 0 ? void 0 : _d.value) ||
        'value'
      var labelKey =
        ((_e = props.props) === null || _e === void 0 ? void 0 : _e.label) ||
        'label'
      var getSelected = function () {
        return (0, shared_2.isArr)(props.value) ? props.value : []
      }
      var findLabel = function (value, dataSource) {
        for (
          var i = 0;
          i <
          (dataSource === null || dataSource === void 0
            ? void 0
            : dataSource.length);
          i++
        ) {
          var item = dataSource[i]
          if (
            (item === null || item === void 0 ? void 0 : item[valueKey]) ===
            value
          ) {
            return item === null || item === void 0 ? void 0 : item[labelKey]
          } else {
            var childLabel = findLabel(
              value,
              item === null || item === void 0 ? void 0 : item.children
            )
            if (childLabel) return childLabel
          }
        }
      }
      var getLabels = function () {
        var selected = getSelected()
        if (
          !(selected === null || selected === void 0 ? void 0 : selected.length)
        ) {
          return (0, vue_1.h)(
            element_ui_1.Tag,
            {},
            {
              default: function () {
                return placeholder.value
              },
            }
          )
        }
        return selected.map(function (value, key) {
          var text = findLabel(value, dataSource)
          return (0, vue_1.h)(
            element_ui_1.Tag,
            {
              key: key,
              props: {
                type: 'info',
                effect: 'light',
              },
            },
            {
              default: function () {
                return text || placeholder.value
              },
            }
          )
        })
      }
      return function () {
        return (0, vue_1.h)(
          space_1.Space,
          {
            class: [prefixCls],
            style: attrs.style,
          },
          {
            default: function () {
              return getLabels()
            },
          }
        )
      }
    },
  })
)
var DatePicker = (0, composition_api_1.defineComponent)({
  name: 'FPreviewTextDatePicker',
  props: [],
  setup: function (_props, _a) {
    var attrs = _a.attrs
    var props = attrs
    var placeholder = (0, exports.usePlaceholder)()
    var getLabels = function () {
      if ((0, shared_2.isArr)(props.value)) {
        var labels = props.value.map(function (value) {
          return (
            (0, date_util_1.formatDate)(value, props.format) ||
            placeholder.value
          )
        })
        return labels.join('~')
      } else {
        return (
          (0, date_util_1.formatDate)(props.value, props.format) ||
          placeholder.value
        )
      }
    }
    return function () {
      return (0, vue_1.h)(
        'div',
        {
          class: [prefixCls],
          style: attrs.style,
        },
        {
          default: function () {
            return getLabels()
          },
        }
      )
    }
  },
})
var TimePicker = (0, composition_api_1.defineComponent)({
  name: 'FPreviewTextTimePicker',
  props: [],
  setup: function (_props, _a) {
    var _b
    var attrs = _a.attrs
    var props = attrs
    var format =
      ((_b = props.pickerOptions) === null || _b === void 0
        ? void 0
        : _b.format) || 'HH:mm:ss'
    var placeholder = (0, exports.usePlaceholder)()
    var getLabels = function () {
      if ((0, shared_2.isArr)(props.value)) {
        var labels = props.value.map(function (value) {
          return (0, date_util_1.formatDate)(value, format) || placeholder.value
        })
        return labels.join('~')
      } else {
        return (
          (0, date_util_1.formatDate)(props.value, format) || placeholder.value
        )
      }
    }
    return function () {
      return (0, vue_1.h)(
        'div',
        {
          class: [prefixCls],
          style: attrs.style,
        },
        {
          default: function () {
            return getLabels()
          },
        }
      )
    }
  },
})
var Text = (0, composition_api_1.defineComponent)({
  name: 'FPreviewText',
  setup: function (_props, _a) {
    var attrs = _a.attrs
    var placeholder = (0, exports.usePlaceholder)()
    return function () {
      return (0, vue_1.h)(
        'div',
        {
          class: [prefixCls],
          style: attrs.style,
        },
        {
          default: function () {
            return placeholder.value
          },
        }
      )
    }
  },
})
exports.PreviewText = (0, shared_1.composeExport)(Text, {
  Input: Input,
  Select: Select,
  Cascader: Cascader,
  DatePicker: DatePicker,
  TimePicker: TimePicker,
  Placeholder: PlaceholderContext.Provider,
  usePlaceholder: exports.usePlaceholder,
})
exports.default = exports.PreviewText
//# sourceMappingURL=index.js.map
