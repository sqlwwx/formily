import { defineComponent, computed } from '@vue/composition-api'
import {
  createContext,
  resolveComponent,
  useContext,
  composeExport,
} from '../__builtins__/shared'
import { observer } from '@formily/reactive-vue'
import { h, useField } from '@formily/vue'
import { isArr, isValid } from '@formily/shared'
import { stylePrefix } from '../__builtins__/configs'
import { Space } from '../space'
import Tag from 'element-ui/lib/tag'
import { formatDate } from 'element-ui/src/utils/date-util'
var prefixCls = ''.concat(stylePrefix, '-preview-text')
var PlaceholderContext = createContext('N/A')
export var usePlaceholder = function (value) {
  var placeholderCtx = useContext(PlaceholderContext)
  var placeholder = computed(function () {
    return isValid(value) && value !== ''
      ? value
      : resolveComponent(placeholderCtx.value) || 'N/A'
  })
  return placeholder
}
var Input = defineComponent({
  name: 'FPreviewTextInput',
  props: [],
  setup: function (_props, _a) {
    var attrs = _a.attrs,
      slots = _a.slots
    var placeholder = usePlaceholder(attrs.value)
    return function () {
      return h(
        Space,
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
var Select = observer(
  defineComponent({
    name: 'FPreviewTextSelect',
    props: [],
    setup: function (_props, _a) {
      var _b, _c
      var attrs = _a.attrs
      var fieldRef = useField()
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
      var placeholder = usePlaceholder()
      var getSelected = function () {
        var value = props.value
        if (props.multiple) {
          return isArr(value)
            ? value.map(function (val) {
                return { label: val, value: val }
              })
            : []
        } else {
          return isValid(value) ? [{ label: value, value: value }] : []
        }
      }
      var getLabels = function () {
        var selected = getSelected()
        if (!selected.length) {
          return h(
            Tag,
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
          return h(
            Tag,
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
        return h(
          Space,
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
var Cascader = observer(
  defineComponent({
    name: 'FPreviewTextCascader',
    props: [],
    setup: function (_props, _a) {
      var _b, _c, _d, _e
      var attrs = _a.attrs
      var fieldRef = useField()
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
      var placeholder = usePlaceholder()
      var valueKey =
        ((_d = props.props) === null || _d === void 0 ? void 0 : _d.value) ||
        'value'
      var labelKey =
        ((_e = props.props) === null || _e === void 0 ? void 0 : _e.label) ||
        'label'
      var getSelected = function () {
        return isArr(props.value) ? props.value : []
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
          return h(
            Tag,
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
          return h(
            Tag,
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
        return h(
          Space,
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
var DatePicker = defineComponent({
  name: 'FPreviewTextDatePicker',
  props: [],
  setup: function (_props, _a) {
    var attrs = _a.attrs
    var props = attrs
    var placeholder = usePlaceholder()
    var getLabels = function () {
      if (isArr(props.value)) {
        var labels = props.value.map(function (value) {
          return formatDate(value, props.format) || placeholder.value
        })
        return labels.join('~')
      } else {
        return formatDate(props.value, props.format) || placeholder.value
      }
    }
    return function () {
      return h(
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
var TimePicker = defineComponent({
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
    var placeholder = usePlaceholder()
    var getLabels = function () {
      if (isArr(props.value)) {
        var labels = props.value.map(function (value) {
          return formatDate(value, format) || placeholder.value
        })
        return labels.join('~')
      } else {
        return formatDate(props.value, format) || placeholder.value
      }
    }
    return function () {
      return h(
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
var Text = defineComponent({
  name: 'FPreviewText',
  setup: function (_props, _a) {
    var attrs = _a.attrs
    var placeholder = usePlaceholder()
    return function () {
      return h(
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
export var PreviewText = composeExport(Text, {
  Input: Input,
  Select: Select,
  Cascader: Cascader,
  DatePicker: DatePicker,
  TimePicker: TimePicker,
  Placeholder: PlaceholderContext.Provider,
  usePlaceholder: usePlaceholder,
})
export default PreviewText
//# sourceMappingURL=index.js.map
