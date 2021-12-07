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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Space = void 0
var react_1 = __importDefault(require('react'))
var next_1 = require('@alifd/next')
var shared_1 = require('@formily/shared')
var __builtins__1 = require('../__builtins__')
var form_layout_1 = require('../form-layout')
var spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
}
var Space = function (_a) {
  var _b
  var direction = _a.direction,
    size = _a.size,
    align = _a.align,
    props = __rest(_a, ['direction', 'size', 'align'])
  var layout = (0, form_layout_1.useFormLayout)()
  var prefix = (0, __builtins__1.usePrefixCls)('space', props)
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
  return react_1.default.createElement(
    next_1.Box,
    __assign({}, props, {
      spacing: (0, shared_1.isNumberLike)(_size)
        ? _size
        : spaceSize[_size] || 8,
      style: __assign(
        { alignItems: _align, display: 'inline-flex' },
        props.style
      ),
      align: _align,
      direction: getDirection(),
    }),
    (0, __builtins__1.toArray)(props.children, { keepEmpty: true }).map(
      function (child, index) {
        return react_1.default.createElement(
          'div',
          { className: ''.concat(prefix, '-item'), key: index },
          child
        )
      }
    )
  )
}
exports.Space = Space
exports.Space.defaultProps = {
  direction: 'horizontal',
  align: 'start',
}
exports.default = exports.Space
//# sourceMappingURL=index.js.map
