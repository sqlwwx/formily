'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useInjectionCleaner = void 0
var vue_demi_1 = require('vue-demi')
var useInjectionCleaner = function (injectionKeys) {
  injectionKeys.forEach(function (key) {
    return (0, vue_demi_1.provide)(key, (0, vue_demi_1.ref)())
  })
}
exports.useInjectionCleaner = useInjectionCleaner
//# sourceMappingURL=useInjectionCleaner.js.map
