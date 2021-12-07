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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Observer =
  exports.observer =
  exports.connect =
  exports.mapReadPretty =
  exports.mapProps =
    void 0
var react_1 = __importDefault(require('react'))
var shared_1 = require('@formily/shared')
var core_1 = require('@formily/core')
var reactive_react_1 = require('@formily/reactive-react')
Object.defineProperty(exports, 'observer', {
  enumerable: true,
  get: function () {
    return reactive_react_1.observer
  },
})
Object.defineProperty(exports, 'Observer', {
  enumerable: true,
  get: function () {
    return reactive_react_1.Observer
  },
})
var hooks_1 = require('../hooks')
var hoist_non_react_statics_1 = __importDefault(
  require('hoist-non-react-statics')
)
function mapProps() {
  var args = []
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i]
  }
  return function (target) {
    return (0, reactive_react_1.observer)(
      function (props) {
        var field = (0, hooks_1.useField)()
        var results = args.reduce(function (props, mapper) {
          if ((0, shared_1.isFn)(mapper)) {
            props = Object.assign(props, mapper(props, field))
          } else {
            ;(0, shared_1.each)(mapper, function (to, extract) {
              var extractValue = shared_1.FormPath.getIn(field, extract)
              var targetValue = (0, shared_1.isStr)(to) ? to : extract
              var originalValue = shared_1.FormPath.getIn(props, targetValue)
              if (extract === 'value') {
                if (to !== extract) {
                  delete props.value
                }
              }
              if (
                (0, shared_1.isValid)(originalValue) &&
                !(0, shared_1.isValid)(extractValue)
              )
                return
              shared_1.FormPath.setIn(props, targetValue, extractValue)
            })
          }
          return props
        }, __assign({}, props))
        return react_1.default.createElement(target, results)
      },
      {
        forwardRef: true,
      }
    )
  }
}
exports.mapProps = mapProps
function mapReadPretty(component, readPrettyProps) {
  return function (target) {
    return (0, reactive_react_1.observer)(
      function (props) {
        var field = (0, hooks_1.useField)()
        if (
          !(0, core_1.isVoidField)(field) &&
          (field === null || field === void 0 ? void 0 : field.pattern) ===
            'readPretty'
        ) {
          return react_1.default.createElement(
            component,
            __assign(__assign({}, readPrettyProps), props)
          )
        }
        return react_1.default.createElement(target, props)
      },
      {
        forwardRef: true,
      }
    )
  }
}
exports.mapReadPretty = mapReadPretty
function connect(target) {
  var args = []
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i]
  }
  var Target = args.reduce(function (target, mapper) {
    return mapper(target)
  }, target)
  var Destination = react_1.default.forwardRef(function (props, ref) {
    return react_1.default.createElement(
      Target,
      __assign(__assign({}, props), { ref: ref })
    )
  })
  if (target) (0, hoist_non_react_statics_1.default)(Destination, target)
  return Destination
}
exports.connect = connect
//# sourceMappingURL=connect.js.map
