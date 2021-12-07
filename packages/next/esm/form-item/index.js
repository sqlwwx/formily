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
import React, { useState, useRef, useEffect } from 'react'
import cls from 'classnames'
import {
  usePrefixCls,
  pickDataProps,
  QuestionCircleOutlinedIcon,
  CloseCircleOutlinedIcon,
  CheckCircleOutlinedIcon,
  ExclamationCircleOutlinedIcon,
} from '../__builtins__'
import { isVoidField } from '@formily/core'
import { connect, mapProps } from '@formily/react'
import { useFormLayout, FormLayoutShallowContext } from '../form-layout'
import { Balloon } from '@alifd/next'
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
        : React.createElement(QuestionCircleOutlinedIcon, null),
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
  error: React.createElement(CloseCircleOutlinedIcon, null),
  success: React.createElement(CheckCircleOutlinedIcon, null),
  warning: React.createElement(ExclamationCircleOutlinedIcon, null),
}
export var BaseItem = function (props) {
  var _a, _b, _c, _d, _e
  var children = props.children,
    others = __rest(props, ['children'])
  var _f = __read(useState(false), 2),
    active = _f[0],
    setActive = _f[1]
  var formLayout = useFormItemLayout(others)
  var _g = useOverflow(),
    containerRef = _g.containerRef,
    contentRef = _g.contentRef,
    overflow = _g.overflow
  var label = formLayout.label,
    style = formLayout.style,
    layout = formLayout.layout,
    _h = formLayout.colon,
    colon = _h === void 0 ? true : _h,
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
    _j = formLayout.bordered,
    bordered = _j === void 0 ? true : _j,
    labelWidth = formLayout.labelWidth,
    wrapperWidth = formLayout.wrapperWidth,
    labelCol = formLayout.labelCol,
    wrapperCol = formLayout.wrapperCol,
    labelAlign = formLayout.labelAlign,
    _k = formLayout.wrapperAlign,
    wrapperAlign = _k === void 0 ? 'left' : _k,
    size = formLayout.size,
    labelWrap = formLayout.labelWrap,
    wrapperWrap = formLayout.wrapperWrap,
    tooltip = formLayout.tooltip,
    tooltipLayout = formLayout.tooltipLayout,
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
  var prefix = usePrefixCls()
  var formatChildren =
    feedbackLayout === 'popover'
      ? React.createElement(
          Balloon,
          {
            needAdjust: true,
            align: 't',
            closable: false,
            trigger: children,
            visible: !!feedbackText,
          },
          React.createElement(
            'div',
            {
              className: cls(
                ((_a = {}),
                (_a[''.concat(prefixCls, '-').concat(feedbackStatus, '-help')] =
                  !!feedbackStatus),
                (_a[''.concat(prefixCls, '-help')] = true),
                _a)
              ),
            },
            ICON_MAP[feedbackStatus],
            ' ',
            feedbackText
          )
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
      {
        className: cls(''.concat(prefixCls, '-label-content')),
        ref: containerRef,
      },
      asterisk &&
        React.createElement(
          'span',
          { className: cls(''.concat(prefixCls, '-asterisk')) },
          '*'
        ),
      React.createElement('label', { ref: contentRef }, label)
    )
    if ((tooltipLayout === 'text' && tooltip) || overflow) {
      return React.createElement(
        Balloon.Tooltip,
        { align: 't', trigger: labelChildren },
        getOverflowTooltip()
      )
    }
    return labelChildren
  }
  var renderTooltipIcon = function () {
    if (tooltip && tooltipLayout === 'icon' && !overflow) {
      return React.createElement(
        'span',
        { className: cls(''.concat(prefixCls, '-label-tooltip-icon')) },
        React.createElement(
          Balloon.Tooltip,
          { align: 't', trigger: tooltipIcon },
          tooltip
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
          { className: cls(''.concat(prefixCls, '-colon')) },
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
        ((_b = {}),
        (_b[''.concat(prefixCls)] = true),
        (_b[''.concat(prefixCls, '-layout-').concat(layout)] = true),
        (_b[''.concat(prefixCls, '-').concat(feedbackStatus)] =
          !!feedbackStatus),
        (_b[''.concat(prefixCls, '-feedback-has-text')] = !!feedbackText),
        (_b[''.concat(prefixCls, '-size-').concat(size)] = !!size),
        (_b[''.concat(prefixCls, '-feedback-layout-').concat(feedbackLayout)] =
          !!feedbackLayout),
        (_b[''.concat(prefixCls, '-fullness')] =
          !!fullness || !!inset || !!feedbackIcon),
        (_b[''.concat(prefixCls, '-inset')] = !!inset),
        (_b[''.concat(prefix, '-input')] = !!inset),
        (_b[''.concat(prefixCls, '-active')] = active),
        (_b[''.concat(prefix, '-focus')] = active),
        (_b[''.concat(prefixCls, '-inset-active')] = !!inset && active),
        (_b[''.concat(prefixCls, '-label-align-').concat(labelAlign)] = true),
        (_b[
          ''.concat(prefixCls, '-control-align-').concat(wrapperAlign)
        ] = true),
        (_b[''.concat(prefixCls, '-label-wrap')] = !!labelWrap),
        (_b[''.concat(prefixCls, '-control-wrap')] = !!wrapperWrap),
        (_b[''.concat(prefixCls, '-bordered-none')] = bordered === false),
        (_b[props.className] = !!props.className),
        _b)
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
          ((_c = {}),
          (_c[''.concat(prefixCls, '-control')] = true),
          (_c[''.concat(prefixCls, '-item-col-').concat(wrapperCol)] =
            enableCol && !!wrapperCol && label),
          _c)
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
              ((_d = {}),
              (_d[''.concat(prefixCls, '-control-content-component')] = true),
              (_d[
                ''.concat(
                  prefixCls,
                  '-control-content-component-has-feedback-icon'
                )
              ] = !!feedbackIcon),
              (_d[''.concat(prefix, '-input')] = !!feedbackIcon),
              (_d[''.concat(prefixCls, '-active')] = active),
              (_d[''.concat(prefix, '-focus')] = active),
              _d)
            ),
          },
          React.createElement(
            FormLayoutShallowContext.Provider,
            { value: { size: size } },
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
              ((_e = {}),
              (_e[''.concat(prefixCls, '-').concat(feedbackStatus, '-help')] =
                !!feedbackStatus),
              (_e[''.concat(prefixCls, '-help')] = true),
              (_e[''.concat(prefixCls, '-help-enter')] = true),
              (_e[''.concat(prefixCls, '-help-enter-active')] = true),
              _e)
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
FormItem.defaultProps = {
  fullness: true,
}
FormItem.BaseItem = BaseItem
export default FormItem
//# sourceMappingURL=index.js.map
