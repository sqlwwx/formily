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
import React from 'react'
import { Box } from '@alifd/next'
import { isNumberLike } from '@formily/shared'
import { toArray, usePrefixCls } from '../__builtins__'
import { useFormLayout } from '../form-layout'
var spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
}
export var Space = function (_a) {
  var _b
  var direction = _a.direction,
    size = _a.size,
    align = _a.align,
    props = __rest(_a, ['direction', 'size', 'align'])
  var layout = useFormLayout()
  var prefix = usePrefixCls('space', props)
  var getDirection = function () {
    if (direction === 'horizontal') {
      return 'row'
    } else {
      return 'column'
    }
  }
  var getAlign = function () {
    if (align === 'start') {
      return 'flex-start'
    } else if (align === 'end') {
      return 'flex-end'
    } else {
      return 'center'
    }
  }
  var _size =
    (_b =
      size !== null && size !== void 0
        ? size
        : layout === null || layout === void 0
        ? void 0
        : layout.spaceGap) !== null && _b !== void 0
      ? _b
      : 8
  var _align = getAlign()
  return React.createElement(
    Box,
    __assign({}, props, {
      spacing: isNumberLike(_size) ? _size : spaceSize[_size] || 8,
      style: __assign(
        { alignItems: _align, display: 'inline-flex' },
        props.style
      ),
      align: _align,
      direction: getDirection(),
    }),
    toArray(props.children, { keepEmpty: true }).map(function (child, index) {
      return React.createElement(
        'div',
        { className: ''.concat(prefix, '-item'), key: index },
        child
      )
    })
  )
}
Space.defaultProps = {
  direction: 'horizontal',
  align: 'start',
}
export default Space
//# sourceMappingURL=index.js.map
