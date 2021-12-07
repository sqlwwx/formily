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
Object.defineProperty(exports, '__esModule', { value: true })
exports.useResponsiveFormLayout = void 0
var react_1 = require('react')
var shared_1 = require('@formily/shared')
var calcBreakpointIndex = function (breakpoints, width) {
  for (var i = 0; i < breakpoints.length; i++) {
    if (width <= breakpoints[i]) {
      return i
    }
  }
}
var calcFactor = function (value, breakpointIndex) {
  var _a
  if (Array.isArray(value)) {
    if (breakpointIndex === -1) return value[0]
    return (_a = value[breakpointIndex]) !== null && _a !== void 0
      ? _a
      : value[value.length - 1]
  } else {
    return value
  }
}
var factor = function (value, breakpointIndex) {
  return (0, shared_1.isValid)(value)
    ? calcFactor(value, breakpointIndex)
    : value
}
var calculateProps = function (target, props) {
  var clientWidth = target.clientWidth
  var breakpoints = props.breakpoints,
    layout = props.layout,
    labelAlign = props.labelAlign,
    wrapperAlign = props.wrapperAlign,
    labelCol = props.labelCol,
    wrapperCol = props.wrapperCol,
    otherProps = __rest(props, [
      'breakpoints',
      'layout',
      'labelAlign',
      'wrapperAlign',
      'labelCol',
      'wrapperCol',
    ])
  var breakpointIndex = calcBreakpointIndex(breakpoints, clientWidth)
  return __assign(
    {
      layout: factor(layout, breakpointIndex),
      labelAlign: factor(labelAlign, breakpointIndex),
      wrapperAlign: factor(wrapperAlign, breakpointIndex),
      labelCol: factor(labelCol, breakpointIndex),
      wrapperCol: factor(wrapperCol, breakpointIndex),
    },
    otherProps
  )
}
var useResponsiveFormLayout = function (props) {
  var ref = (0, react_1.useRef)(null)
  var breakpoints = props.breakpoints
  if (!(0, shared_1.isArr)(breakpoints)) {
    return { ref: ref, props: props }
  }
  var _a = __read((0, react_1.useState)(props), 2),
    layoutProps = _a[0],
    setLayout = _a[1]
  var updateUI = function () {
    setLayout(calculateProps(ref.current, props))
  }
  ;(0, react_1.useEffect)(function () {
    var observer = function () {
      updateUI()
    }
    var resizeObserver = new ResizeObserver(observer)
    if (ref.current) {
      resizeObserver.observe(ref.current)
    }
    updateUI()
    return function () {
      resizeObserver.disconnect()
    }
  }, [])
  return {
    ref: ref,
    props: layoutProps,
  }
}
exports.useResponsiveFormLayout = useResponsiveFormLayout
//# sourceMappingURL=useResponsiveFormLayout.js.map
