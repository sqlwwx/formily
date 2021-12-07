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
import { isArr, isValid } from '@formily/shared'
import { onMounted, ref } from 'vue-demi'
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
  return isValid(value) ? calcFactor(value, breakpointIndex) : value
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
export var useResponsiveFormLayout = function (props, refs) {
  var root = ref(null)
  var breakpoints = props.breakpoints
  if (!isArr(breakpoints)) {
    return { props: ref(props) }
  }
  var layoutProps = ref(props)
  var updateUI = function () {
    layoutProps.value = calculateProps(root.value, props)
  }
  onMounted(function () {
    root.value = refs.root
    var observer = function () {
      updateUI()
    }
    var resizeObserver = new ResizeObserver(observer)
    if (root.value) {
      resizeObserver.observe(root.value)
    }
    updateUI()
    return function () {
      resizeObserver.disconnect()
    }
  })
  return {
    props: layoutProps,
  }
}
//# sourceMappingURL=useResponsiveFormLayout.js.map
