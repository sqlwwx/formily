import {
  defineComponent,
  provide,
  inject,
  readonly,
  ref,
  toRef,
} from '@vue/composition-api'
export var createContext = function (defaultValue) {
  var injectKey = Symbol()
  return {
    Provider: defineComponent({
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
        var value = toRef(props, 'value')
        provide(injectKey, readonly(value))
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
    Consumer: defineComponent({
      name: 'ContextConsumer',
      setup: function (_props, _a) {
        var slots = _a.slots
        var value = inject(injectKey)
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
export var useContext = function (context) {
  var key = context.injectKey
  return inject(key, ref(null))
}
//# sourceMappingURL=create-context.js.map
