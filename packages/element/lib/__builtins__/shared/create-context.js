'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useContext = exports.createContext = void 0
var composition_api_1 = require('@vue/composition-api')
var createContext = function (defaultValue) {
  var injectKey = Symbol()
  return {
    Provider: (0, composition_api_1.defineComponent)({
      name: 'ContextProvider',
      props: {
        value: {
          type: null,
          default: function () {
            return defaultValue !== null && defaultValue !== void 0
              ? defaultValue
              : null
          },
        },
      },
      setup: function (props, _a) {
        var slots = _a.slots
        var value = (0, composition_api_1.toRef)(props, 'value')
        ;(0, composition_api_1.provide)(
          injectKey,
          (0, composition_api_1.readonly)(value)
        )
        return function () {
          var _a
          return (_a =
            slots === null || slots === void 0 ? void 0 : slots.default) ===
            null || _a === void 0
            ? void 0
            : _a.call(slots)
        }
      },
    }),
    Consumer: (0, composition_api_1.defineComponent)({
      name: 'ContextConsumer',
      setup: function (_props, _a) {
        var slots = _a.slots
        var value = (0, composition_api_1.inject)(injectKey)
        return function () {
          var _a
          return (_a =
            slots === null || slots === void 0 ? void 0 : slots.default) ===
            null || _a === void 0
            ? void 0
            : _a.call(slots, value)
        }
      },
    }),
    injectKey: injectKey,
  }
}
exports.createContext = createContext
var useContext = function (context) {
  var key = context.injectKey
  return (0, composition_api_1.inject)(key, (0, composition_api_1.ref)(null))
}
exports.useContext = useContext
//# sourceMappingURL=create-context.js.map
