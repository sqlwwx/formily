import React, { createContext, useContext } from 'react'
import { isArr, isValid } from '@formily/shared'
import { observer, useField } from '@formily/react'
import { Tag, Space } from 'antd'
import cls from 'classnames'
import { formatMomentValue, usePrefixCls } from '../__builtins__'
var PlaceholderContext = createContext('N/A')
var Placeholder = PlaceholderContext.Provider
var usePlaceholder = function (value) {
  var placeholder = useContext(PlaceholderContext) || 'N/A'
  return isValid(value) && value !== '' ? value : placeholder
}
var Input = function (props) {
  var prefixCls = usePrefixCls('form-text', props)
  return React.createElement(
    Space,
    { className: cls(prefixCls, props.className), style: props.style },
    props.addonBefore,
    props.prefix,
    usePlaceholder(props.value),
    props.suffix,
    props.addonAfter
  )
}
var Select = observer(function (props) {
  var _a, _b
  var field = useField()
  var prefixCls = usePrefixCls('form-text', props)
  var dataSource = (
    (_a = field === null || field === void 0 ? void 0 : field.dataSource) ===
      null || _a === void 0
      ? void 0
      : _a.length
  )
    ? field.dataSource
    : (
        (_b = props === null || props === void 0 ? void 0 : props.options) ===
          null || _b === void 0
          ? void 0
          : _b.length
      )
    ? props.options
    : []
  var placeholder = usePlaceholder()
  var getSelected = function () {
    var value = props.value
    if (props.mode === 'multiple' || props.mode === 'tags') {
      if (props.labelInValue) {
        return isArr(value) ? value : []
      } else {
        return isArr(value)
          ? value.map(function (val) {
              return { label: val, value: val }
            })
          : []
      }
    } else {
      if (props.labelInValue) {
        return isValid(value) ? [value] : []
      } else {
        return isValid(value) ? [{ label: value, value: value }] : []
      }
    }
  }
  var getLabel = function (target) {
    var _a
    return (
      ((_a =
        dataSource === null || dataSource === void 0
          ? void 0
          : dataSource.find(function (item) {
              return (
                item.value ==
                (target === null || target === void 0 ? void 0 : target.value)
              )
            })) === null || _a === void 0
        ? void 0
        : _a.label) ||
      target.label ||
      placeholder
    )
  }
  var getLabels = function () {
    var selected = getSelected()
    if (!selected.length) return placeholder
    if (selected.length === 1) return getLabel(selected[0])
    return selected.map(function (item, key) {
      return React.createElement(Tag, { key: key }, getLabel(item))
    })
  }
  return React.createElement(
    'div',
    { className: cls(prefixCls, props.className), style: props.style },
    getLabels()
  )
})
var TreeSelect = observer(function (props) {
  var _a, _b
  var field = useField()
  var placeholder = usePlaceholder()
  var prefixCls = usePrefixCls('form-text', props)
  var dataSource = (
    (_a = field === null || field === void 0 ? void 0 : field.dataSource) ===
      null || _a === void 0
      ? void 0
      : _a.length
  )
    ? field.dataSource
    : (
        (_b = props === null || props === void 0 ? void 0 : props.options) ===
          null || _b === void 0
          ? void 0
          : _b.length
      )
    ? props.options
    : []
  var getSelected = function () {
    var value = props.value
    if (props.multiple) {
      if (props.labelInValue) {
        return isArr(value) ? value : []
      } else {
        return isArr(value)
          ? value.map(function (val) {
              return { label: val, value: val }
            })
          : []
      }
    } else {
      if (props.labelInValue) {
        return value ? [value] : []
      } else {
        return value ? [{ label: value, value: value }] : []
      }
    }
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
      if ((item === null || item === void 0 ? void 0 : item.value) === value) {
        return item === null || item === void 0 ? void 0 : item.label
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
    if (!(selected === null || selected === void 0 ? void 0 : selected.length))
      return React.createElement(Tag, null, placeholder)
    return selected.map(function (_a, key) {
      var value = _a.value,
        label = _a.label
      return React.createElement(
        Tag,
        { key: key },
        findLabel(value, dataSource) || label || placeholder
      )
    })
  }
  return React.createElement(
    'div',
    { className: cls(prefixCls, props.className), style: props.style },
    getLabels()
  )
})
var Cascader = observer(function (props) {
  var _a, _b
  var field = useField()
  var placeholder = usePlaceholder()
  var prefixCls = usePrefixCls('form-text', props)
  var dataSource = (
    (_a = field === null || field === void 0 ? void 0 : field.dataSource) ===
      null || _a === void 0
      ? void 0
      : _a.length
  )
    ? field.dataSource
    : (
        (_b = props === null || props === void 0 ? void 0 : props.options) ===
          null || _b === void 0
          ? void 0
          : _b.length
      )
    ? props.options
    : []
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
      if ((item === null || item === void 0 ? void 0 : item.value) === value) {
        return item === null || item === void 0 ? void 0 : item.label
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
      return placeholder
    }
    return selected
      .map(function (value) {
        return findLabel(value, dataSource) || placeholder
      })
      .join('/')
  }
  return React.createElement(
    'div',
    { className: cls(prefixCls, props.className), style: props.style },
    getLabels()
  )
})
var DatePicker = function (props) {
  var placeholder = usePlaceholder()
  var prefixCls = usePrefixCls('form-text', props)
  var getLabels = function () {
    var labels = formatMomentValue(props.value, props.format, placeholder)
    return isArr(labels) ? labels.join('~') : labels
  }
  return React.createElement(
    'div',
    { className: cls(prefixCls, props.className) },
    getLabels()
  )
}
var DateRangePicker = function (props) {
  var placeholder = usePlaceholder()
  var prefixCls = usePrefixCls('form-text', props)
  var getLabels = function () {
    var labels = formatMomentValue(props.value, props.format, placeholder)
    return isArr(labels) ? labels.join('~') : labels
  }
  return React.createElement(
    'div',
    { className: cls(prefixCls, props.className), style: props.style },
    getLabels()
  )
}
var TimePicker = function (props) {
  var placeholder = usePlaceholder()
  var prefixCls = usePrefixCls('form-text', props)
  var getLabels = function () {
    var labels = formatMomentValue(props.value, props.format, placeholder)
    return isArr(labels) ? labels.join('~') : labels
  }
  return React.createElement(
    'div',
    { className: cls(prefixCls, props.className), style: props.style },
    getLabels()
  )
}
var TimeRangePicker = function (props) {
  var placeholder = usePlaceholder()
  var prefixCls = usePrefixCls('form-text', props)
  var getLabels = function () {
    var labels = formatMomentValue(props.value, props.format, placeholder)
    return isArr(labels) ? labels.join('~') : labels
  }
  return React.createElement(
    'div',
    { className: cls(prefixCls, props.className), style: props.style },
    getLabels()
  )
}
var Text = function (props) {
  var prefixCls = usePrefixCls('form-text', props)
  return React.createElement(
    'div',
    { className: cls(prefixCls, props.className), style: props.style },
    usePlaceholder(props.value)
  )
}
Text.Input = Input
Text.Select = Select
Text.TreeSelect = TreeSelect
Text.Cascader = Cascader
Text.DatePicker = DatePicker
Text.DateRangePicker = DateRangePicker
Text.TimePicker = TimePicker
Text.TimeRangePicker = TimeRangePicker
Text.Placeholder = Placeholder
Text.usePlaceholder = usePlaceholder
export var PreviewText = Text
export default PreviewText
//# sourceMappingURL=index.js.map
