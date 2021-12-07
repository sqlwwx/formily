import { provide, ref } from 'vue-demi'
export var useInjectionCleaner = function (injectionKeys) {
  injectionKeys.forEach(function (key) {
    return provide(key, ref())
  })
}
//# sourceMappingURL=useInjectionCleaner.js.map
