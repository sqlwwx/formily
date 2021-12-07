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
exports.connect = exports.mapReadPretty = exports.mapProps = void 0
var vue_demi_1 = require('vue-demi')
var shared_1 = require('@formily/shared')
var core_1 = require('@formily/core')
var reactive_vue_1 = require('@formily/reactive-vue')
var useField_1 = require('../hooks/useField')
var h_1 = __importDefault(require('./h'))
function mapProps() {
  var args = []
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i]
  }
  return function (target) {
    return (0, reactive_vue_1.observer)(
      (0, vue_demi_1.defineComponent)({
        // listeners is needed for vue2
        setup: function (props, _a) {
          var attrs = _a.attrs,
            slots = _a.slots,
            listeners = _a.listeners
          var fieldRef = (0, useField_1.useField)()
          var transform = function (input, field) {
            return args.reduce(function (props, mapper) {
              if ((0, shared_1.isFn)(mapper)) {
                props = Object.assign(props, mapper(props, field))
              } else {
                ;(0, shared_1.each)(mapper, function (to, extract) {
                  var extractValue = shared_1.FormPath.getIn(field, extract)
                  var targetValue = (0, shared_1.isStr)(to) ? to : extract
                  if (extract === 'value') {
                    if (to !== extract) {
                      delete props['value']
                    }
                  }
                  shared_1.FormPath.setIn(props, targetValue, extractValue)
                })
              }
              return props
            }, input)
          }
          return function () {
            var newAttrs = fieldRef.value
              ? transform(__assign({}, attrs), fieldRef.value)
              : __assign({}, attrs)
            return (0, h_1.default)(
              target,
              {
                attrs: __assign({}, newAttrs),
                on: listeners,
              },
              slots
            )
          }
        },
      })
    )
  }
}
exports.mapProps = mapProps
function mapReadPretty(component, readPrettyProps) {
  return function (target) {
    return (0, reactive_vue_1.observer)(
      (0, vue_demi_1.defineComponent)({
        setup: function (props, _a) {
          var attrs = _a.attrs,
            slots = _a.slots,
            listeners = _a.listeners
          var fieldRef = (0, useField_1.useField)()
          return function () {
            var field = fieldRef.value
            return (0, h_1.default)(
              field &&
                !(0, core_1.isVoidField)(field) &&
                field.pattern === 'readPretty'
                ? component
                : target,
              {
                attrs: __assign(__assign({}, readPrettyProps), attrs),
                on: listeners,
              },
              slots
            )
          }
        },
      })
    )
  }
}
exports.mapReadPretty = mapReadPretty
function connect(target) {
  var args = []
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i]
  }
  var Component = args.reduce(function (target, mapper) {
    return mapper(target)
  }, target)
  /* istanbul ignore else */
  if (vue_demi_1.isVue2) {
    var functionalComponent = {
      functional: true,
      render: function (h, context) {
        return h(Component, context.data, context.children)
      },
    }
    return (0, vue_demi_1.markRaw)(functionalComponent)
  } else {
    var functionalComponent = (0, vue_demi_1.defineComponent)({
      setup: function (props, _a) {
        var attrs = _a.attrs,
          slots = _a.slots
        return function () {
          return (0, h_1.default)(
            Component,
            { props: props, attrs: attrs },
            slots
          )
        }
      },
    })
    return (0, vue_demi_1.markRaw)(functionalComponent)
  }
}
exports.connect = connect
//# sourceMappingURL=connect.js.map
