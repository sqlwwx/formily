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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          },
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
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
exports.FormLayout =
  exports.useFormLayout =
  exports.useFormShallowLayout =
  exports.useFormDeepLayout =
  exports.FormLayoutShallowContext =
  exports.FormLayoutDeepContext =
    void 0
var react_1 = __importStar(require('react'))
var useResponsiveFormLayout_1 = require('./useResponsiveFormLayout')
var __builtins__1 = require('../__builtins__')
var classnames_1 = __importDefault(require('classnames'))
exports.FormLayoutDeepContext = (0, react_1.createContext)(null)
exports.FormLayoutShallowContext = (0, react_1.createContext)(null)
var useFormDeepLayout = function () {
  return (0, react_1.useContext)(exports.FormLayoutDeepContext)
}
exports.useFormDeepLayout = useFormDeepLayout
var useFormShallowLayout = function () {
  return (0, react_1.useContext)(exports.FormLayoutShallowContext)
}
exports.useFormShallowLayout = useFormShallowLayout
var useFormLayout = function () {
  return __assign(
    __assign({}, (0, exports.useFormDeepLayout)()),
    (0, exports.useFormShallowLayout)()
  )
}
exports.useFormLayout = useFormLayout
var FormLayout = function (_a) {
  var _b
  var shallow = _a.shallow,
    children = _a.children,
    prefixCls = _a.prefixCls,
    className = _a.className,
    style = _a.style,
    otherProps = __rest(_a, [
      'shallow',
      'children',
      'prefixCls',
      'className',
      'style',
    ])
  var _c = (0, useResponsiveFormLayout_1.useResponsiveFormLayout)(otherProps),
    ref = _c.ref,
    props = _c.props
  var deepLayout = (0, exports.useFormDeepLayout)()
  var formPrefixCls = (0, __builtins__1.usePrefixCls)('form', {
    prefixCls: prefixCls,
  })
  var layoutPrefixCls = (0, __builtins__1.usePrefixCls)('formily-layout', {
    prefixCls: prefixCls,
  })
  var layoutClassName = (0, classnames_1.default)(
    layoutPrefixCls,
    ((_b = {}),
    (_b[''.concat(formPrefixCls, '-').concat(props.layout)] = true),
    (_b[''.concat(formPrefixCls, '-rtl')] = props.direction === 'rtl'),
    (_b[''.concat(formPrefixCls, '-').concat(props.size)] = props.size),
    _b),
    className
  )
  var renderChildren = function () {
    var newDeepLayout = __assign({}, deepLayout)
    if (!shallow) {
      Object.assign(newDeepLayout, props)
    } else {
      if (props.size) {
        newDeepLayout.size = props.size
      }
      if (props.colon) {
        newDeepLayout.colon = props.colon
      }
    }
    return react_1.default.createElement(
      exports.FormLayoutDeepContext.Provider,
      { value: newDeepLayout },
      react_1.default.createElement(
        exports.FormLayoutShallowContext.Provider,
        { value: shallow ? props : undefined },
        children
      )
    )
  }
  return react_1.default.createElement(
    'div',
    { ref: ref, className: layoutClassName, style: style },
    renderChildren()
  )
}
exports.FormLayout = FormLayout
exports.FormLayout.defaultProps = {
  shallow: true,
}
exports.FormLayout.useFormDeepLayout = exports.useFormDeepLayout
exports.FormLayout.useFormShallowLayout = exports.useFormShallowLayout
exports.FormLayout.useFormLayout = exports.useFormLayout
exports.default = exports.FormLayout
//# sourceMappingURL=index.js.map
