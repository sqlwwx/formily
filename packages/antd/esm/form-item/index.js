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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator]
    if (!m) return o
    var i = m.call(o),
      r,
      ar = [],
      e
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
    } catch (error) {
      e = { error: error }
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i)
      } finally {
        if (e) throw e.error
      }
    }
    return ar
  }
import React, { useEffect, useRef, useState } from 'react'
import cls from 'classnames'
import { usePrefixCls, pickDataProps } from '../__builtins__'
import { isVoidField } from '@formily/core'
import { connect, mapProps } from '@formily/react'
import { useFormLayout, FormLayoutShallowContext } from '../form-layout'
import { Tooltip, Popover } from 'antd'
import {
  QuestionCircleOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
var useFormItemLayout = function (props) {
  var _a,
    _b,
    _c,
    _d,
    _e,
    _f,
    _g,
    _h,
    _j,
    _k,
    _l,
    _m,
    _o,
    _p,
    _q,
    _r,
    _s,
    _t,
    _u,
    _v,
    _w,
    _x,
    _y,
    _z
  var layout = useFormLayout()
  return __assign(__assign({}, props), {
    layout:
      (_b =
        (_a = props.layout) !== null && _a !== void 0 ? _a : layout.layout) !==
        null && _b !== void 0
        ? _b
        : 'horizontal',
    colon: (_c = props.colon) !== null && _c !== void 0 ? _c : layout.colon,
    labelAlign:
      layout.layout === 'vertical'
        ? (_e =
            (_d = props.labelAlign) !== null && _d !== void 0
              ? _d
              : layout.labelAlign) !== null && _e !== void 0
          ? _e
          : 'left'
        : (_g =
            (_f = props.labelAlign) !== null && _f !== void 0
              ? _f
              : layout.labelAlign) !== null && _g !== void 0
        ? _g
        : 'right',
    labelWrap:
      (_h = props.labelWrap) !== null && _h !== void 0 ? _h : layout.labelWrap,
    labelWidth:
      (_j = props.labelWidth) !== null && _j !== void 0
        ? _j
        : layout.labelWidth,
    wrapperWidth:
      (_k = props.wrapperWidth) !== null && _k !== void 0
        ? _k
        : layout.wrapperWidth,
    labelCol:
      (_l = props.labelCol) !== null && _l !== void 0 ? _l : layout.labelCol,
    wrapperCol:
      (_m = props.wrapperCol) !== null && _m !== void 0
        ? _m
        : layout.wrapperCol,
    wrapperAlign:
      (_o = props.wrapperAlign) !== null && _o !== void 0
        ? _o
        : layout.wrapperAlign,
    wrapperWrap:
      (_p = props.wrapperWrap) !== null && _p !== void 0
        ? _p
        : layout.wrapperWrap,
    fullness:
      (_q = props.fullness) !== null && _q !== void 0 ? _q : layout.fullness,
    size: (_r = props.size) !== null && _r !== void 0 ? _r : layout.size,
    inset: (_s = props.inset) !== null && _s !== void 0 ? _s : layout.inset,
    asterisk: props.asterisk,
    bordered:
      (_t = props.bordered) !== null && _t !== void 0 ? _t : layout.bordered,
    feedbackIcon: props.feedbackIcon,
    feedbackLayout:
      (_v =
        (_u = props.feedbackLayout) !== null && _u !== void 0
          ? _u
          : layout.feedbackLayout) !== null && _v !== void 0
        ? _v
        : 'loose',
    tooltipLayout:
      (_x =
        (_w = props.tooltipLayout) !== null && _w !== void 0
          ? _w
          : layout.tooltipLayout) !== null && _x !== void 0
        ? _x
        : 'icon',
    tooltipIcon:
      (_z =
        (_y = props.tooltipIcon) !== null && _y !== void 0
          ? _y
          : layout.tooltipIcon) !== null && _z !== void 0
        ? _z
        : React.createElement(QuestionCircleOutlined, null),
  })
}
function useOverflow() {
  var _a = __read(useState(false), 2),
    overflow = _a[0],
    setOverflow = _a[1]
  var containerRef = useRef()
  var contentRef = useRef()
  useEffect(function () {
    if (containerRef.current && contentRef.current) {
      var contentWidth = contentRef.current.getBoundingClientRect().width
      var containerWidth = containerRef.current.getBoundingClientRect().width
      if (contentWidth && containerWidth && containerWidth < contentWidth) {
        if (!overflow) setOverflow(true)
      } else {
        if (overflow) setOverflow(false)
      }
    }
  }, [])
  return {
    overflow: overflow,
    containerRef: containerRef,
    contentRef: contentRef,
  }
}
var ICON_MAP = {
  error: React.createElement(CloseCircleOutlined, null),
  success: React.createElement(CheckCircleOutlined, null),
  warning: React.createElement(ExclamationCircleOutlined, null),
}
export var BaseItem = function (_a) {
  var _b, _c, _d, _e, _f
  var children = _a.children,
    props = __rest(_a, ['children'])
  var _g = __read(useState(false), 2),
    active = _g[0],
    setActive = _g[1]
  var formLayout = useFormItemLayout(props)
  var _h = useOverflow(),
    containerRef = _h.containerRef,
    contentRef = _h.contentRef,
    overflow = _h.overflow
  var label = formLayout.label,
    style = formLayout.style,
    layout = formLayout.layout,
    _j = formLayout.colon,
    colon = _j === void 0 ? true : _j,
    addonBefore = formLayout.addonBefore,
    addonAfter = formLayout.addonAfter,
    asterisk = formLayout.asterisk,
    feedbackStatus = formLayout.feedbackStatus,
    extra = formLayout.extra,
    feedbackText = formLayout.feedbackText,
    fullness = formLayout.fullness,
    feedbackLayout = formLayout.feedbackLayout,
    feedbackIcon = formLayout.feedbackIcon,
    inset = formLayout.inset,
    _k = formLayout.bordered,
    bordered = _k === void 0 ? true : _k,
    labelWidth = formLayout.labelWidth,
    wrapperWidth = formLayout.wrapperWidth,
    labelCol = formLayout.labelCol,
    wrapperCol = formLayout.wrapperCol,
    labelAlign = formLayout.labelAlign,
    _l = formLayout.wrapperAlign,
    wrapperAlign = _l === void 0 ? 'left' : _l,
    size = formLayout.size,
    labelWrap = formLayout.labelWrap,
    wrapperWrap = formLayout.wrapperWrap,
    tooltipLayout = formLayout.tooltipLayout,
    tooltip = formLayout.tooltip,
    tooltipIcon = formLayout.tooltipIcon
  var labelStyle = __assign({}, formLayout.labelStyle)
  var wrapperStyle = __assign({}, formLayout.wrapperStyle)
  // 固定宽度
  var enableCol = false
  if (labelWidth || wrapperWidth) {
    if (labelWidth) {
      labelStyle.width = labelWidth === 'auto' ? undefined : labelWidth
      labelStyle.maxWidth = labelWidth === 'auto' ? undefined : labelWidth
    }
    if (wrapperWidth) {
      wrapperStyle.width = wrapperWidth === 'auto' ? undefined : wrapperWidth
      wrapperStyle.maxWidth = wrapperWidth === 'auto' ? undefined : wrapperWidth
    }
    // 栅格模式
  }
  if (labelCol || wrapperCol) {
    if (!labelStyle.width && !wrapperStyle.width) {
      enableCol = true
    }
  }
  var prefixCls = usePrefixCls('formily-item', props)
  var formatChildren =
    feedbackLayout === 'popover'
      ? React.createElement(
          Popover,
          {
            autoAdjustOverflow: true,
            placement: 'top',
            content: React.createElement(
              'div',
              {
                className: cls(
                  ((_b = {}),
                  (_b[
                    ''.concat(prefixCls, '-').concat(feedbackStatus, '-help')
                  ] = !!feedbackStatus),
                  (_b[''.concat(prefixCls, '-help')] = true),
                  _b)
                ),
              },
              ICON_MAP[feedbackStatus],
              ' ',
              feedbackText
            ),
            visible: !!feedbackText,
          },
          children
        )
      : children
  var gridStyles = {}
  var getOverflowTooltip = function () {
    if (overflow) {
      return React.createElement(
        'div',
        null,
        React.createElement('div', null, label),
        React.createElement('div', null, tooltip)
      )
    }
    return tooltip
  }
  var renderLabelText = function () {
    var labelChildren = React.createElement(
      'div',
      { className: ''.concat(prefixCls, '-label-content'), ref: containerRef },
      asterisk &&
        React.createElement(
          'span',
          { className: ''.concat(prefixCls, '-asterisk') },
          '*'
        ),
      React.createElement('label', { ref: contentRef }, label)
    )
    if ((tooltipLayout === 'text' && tooltip) || overflow) {
      return React.createElement(
        Tooltip,
        {
          placement: 'top',
          align: { offset: [0, 10] },
          title: getOverflowTooltip(),
        },
        labelChildren
      )
    }
    return labelChildren
  }
  var renderTooltipIcon = function () {
    if (tooltip && tooltipLayout === 'icon' && !overflow) {
      return React.createElement(
        'span',
        { className: ''.concat(prefixCls, '-label-tooltip-icon') },
        React.createElement(
          Tooltip,
          { placement: 'top', align: { offset: [0, 2] }, title: tooltip },
          tooltipIcon
        )
      )
    }
  }
  var renderLabel = function () {
    var _a
    if (!label) return null
    return React.createElement(
      'div',
      {
        className: cls(
          ((_a = {}),
          (_a[''.concat(prefixCls, '-label')] = true),
          (_a[''.concat(prefixCls, '-label-tooltip')] =
            (tooltip && tooltipLayout === 'text') || overflow),
          (_a[''.concat(prefixCls, '-item-col-').concat(labelCol)] =
            enableCol && !!labelCol),
          _a)
        ),
        style: labelStyle,
      },
      renderLabelText(),
      renderTooltipIcon(),
      label !== ' ' &&
        React.createElement(
          'span',
          { className: ''.concat(prefixCls, '-colon') },
          colon ? ':' : ''
        )
    )
  }
  return React.createElement(
    'div',
    __assign({}, pickDataProps(props), {
      style: __assign(__assign({}, style), gridStyles),
      'data-grid-span': props.gridSpan,
      className: cls(
        ((_c = {}),
        (_c[''.concat(prefixCls)] = true),
        (_c[''.concat(prefixCls, '-layout-').concat(layout)] = true),
        (_c[''.concat(prefixCls, '-').concat(feedbackStatus)] =
          !!feedbackStatus),
        (_c[''.concat(prefixCls, '-feedback-has-text')] = !!feedbackText),
        (_c[''.concat(prefixCls, '-size-').concat(size)] = !!size),
        (_c[''.concat(prefixCls, '-feedback-layout-').concat(feedbackLayout)] =
          !!feedbackLayout),
        (_c[''.concat(prefixCls, '-fullness')] =
          !!fullness || !!inset || !!feedbackIcon),
        (_c[''.concat(prefixCls, '-inset')] = !!inset),
        (_c[''.concat(prefixCls, '-active')] = active),
        (_c[''.concat(prefixCls, '-inset-active')] = !!inset && active),
        (_c[''.concat(prefixCls, '-label-align-').concat(labelAlign)] = true),
        (_c[
          ''.concat(prefixCls, '-control-align-').concat(wrapperAlign)
        ] = true),
        (_c[''.concat(prefixCls, '-label-wrap')] = !!labelWrap),
        (_c[''.concat(prefixCls, '-control-wrap')] = !!wrapperWrap),
        (_c[''.concat(prefixCls, '-bordered-none')] =
          bordered === false || !!inset || !!feedbackIcon),
        (_c[props.className] = !!props.className),
        _c)
      ),
      onFocus: function () {
        if (feedbackIcon || inset) {
          setActive(true)
        }
      },
      onBlur: function () {
        if (feedbackIcon || inset) {
          setActive(false)
        }
      },
    }),
    renderLabel(),
    React.createElement(
      'div',
      {
        className: cls(
          ((_d = {}),
          (_d[''.concat(prefixCls, '-control')] = true),
          (_d[''.concat(prefixCls, '-item-col-').concat(wrapperCol)] =
            enableCol && !!wrapperCol && label),
          _d)
        ),
      },
      React.createElement(
        'div',
        { className: cls(''.concat(prefixCls, '-control-content')) },
        addonBefore &&
          React.createElement(
            'div',
            { className: cls(''.concat(prefixCls, '-addon-before')) },
            addonBefore
          ),
        React.createElement(
          'div',
          {
            style: wrapperStyle,
            className: cls(
              ((_e = {}),
              (_e[''.concat(prefixCls, '-control-content-component')] = true),
              (_e[
                ''.concat(
                  prefixCls,
                  '-control-content-component-has-feedback-icon'
                )
              ] = !!feedbackIcon),
              _e)
            ),
          },
          React.createElement(
            FormLayoutShallowContext.Provider,
            { value: undefined },
            formatChildren
          ),
          feedbackIcon &&
            React.createElement(
              'div',
              { className: cls(''.concat(prefixCls, '-feedback-icon')) },
              feedbackIcon
            )
        ),
        addonAfter &&
          React.createElement(
            'div',
            { className: cls(''.concat(prefixCls, '-addon-after')) },
            addonAfter
          )
      ),
      !!feedbackText &&
        feedbackLayout !== 'popover' &&
        feedbackLayout !== 'none' &&
        React.createElement(
          'div',
          {
            className: cls(
              ((_f = {}),
              (_f[''.concat(prefixCls, '-').concat(feedbackStatus, '-help')] =
                !!feedbackStatus),
              (_f[''.concat(prefixCls, '-help')] = true),
              (_f[''.concat(prefixCls, '-help-enter')] = true),
              (_f[''.concat(prefixCls, '-help-enter-active')] = true),
              _f)
            ),
          },
          feedbackText
        ),
      extra &&
        React.createElement(
          'div',
          { className: cls(''.concat(prefixCls, '-extra')) },
          extra
        )
    )
  )
}
// 适配
export var FormItem = connect(
  BaseItem,
  mapProps(
    { validateStatus: true, title: 'label', required: true },
    function (props, field) {
      if (isVoidField(field))
        return {
          extra: props.extra || field.description,
        }
      if (!field) return props
      var takeMessage = function () {
        var split = function (messages) {
          return messages.reduce(function (buf, text, index) {
            if (!text) return buf
            return index < messages.length - 1
              ? buf.concat([text, ', '])
              : buf.concat([text])
          }, [])
        }
        if (field.validating) return
        if (props.feedbackText) return props.feedbackText
        if (field.selfErrors.length) return split(field.selfErrors)
        if (field.selfWarnings.length) return split(field.selfWarnings)
        if (field.selfSuccesses.length) return split(field.selfSuccesses)
      }
      return {
        feedbackText: takeMessage(),
        extra: props.extra || field.description,
      }
    },
    function (props, field) {
      var _a
      if (isVoidField(field)) return props
      if (!field) return props
      return {
        feedbackStatus:
          field.validateStatus === 'validating'
            ? 'pending'
            : ((_a = field.decorator[1]) === null || _a === void 0
                ? void 0
                : _a.feedbackStatus) || field.validateStatus,
      }
    },
    function (props, field) {
      if (isVoidField(field)) return props
      if (!field) return props
      var asterisk = false
      if (field.required && field.pattern !== 'readPretty') {
        asterisk = true
      }
      if ('asterisk' in props) {
        asterisk = props.asterisk
      }
      return {
        asterisk: asterisk,
      }
    }
  )
)
FormItem.BaseItem = BaseItem
export default FormItem
//# sourceMappingURL=index.js.map
