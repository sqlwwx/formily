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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Observer = exports.observer = void 0
var react_1 = __importStar(require('react'))
var hoist_non_react_statics_1 = __importDefault(
  require('hoist-non-react-statics')
)
var hooks_1 = require('./hooks')
function observer(component, options) {
  var realOptions = __assign({ forwardRef: false }, options)
  var wrappedComponent = realOptions.forwardRef
    ? (0, react_1.forwardRef)(function (props, ref) {
        return (0, hooks_1.useObserver)(function () {
          return component(__assign(__assign({}, props), { ref: ref }))
        }, realOptions)
      })
    : function (props) {
        return (0, hooks_1.useObserver)(function () {
          return component(props)
        }, realOptions)
      }
  var memoComponent = (0, react_1.memo)(wrappedComponent)
  ;(0, hoist_non_react_statics_1.default)(memoComponent, component)
  if (realOptions.displayName) {
    memoComponent.displayName = realOptions.displayName
  }
  return memoComponent
}
exports.observer = observer
exports.Observer = observer(function (props) {
  var children =
    typeof props.children === 'function' ? props.children() : props.children
  return react_1.default.createElement(react_1.Fragment, {}, children)
})
//# sourceMappingURL=observer.js.map
