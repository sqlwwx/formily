'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useObserver = void 0
var reactive_1 = require('@formily/reactive')
var vue_demi_1 = require('vue-demi')
/* istanbul ignore next */
var useObserver = function () {
  if (vue_demi_1.isVue3) {
    var vm_1 = (0, vue_demi_1.getCurrentInstance)()
    var dispose_1
    ;(0, vue_demi_1.onBeforeUnmount)(function () {
      if (dispose_1) {
        dispose_1()
      }
    })
    Object.defineProperty(vm_1, 'update', {
      get: function () {
        return vm_1['_updateEffect']
      },
      set: function (newValue) {
        if (dispose_1) {
          dispose_1()
        }
        dispose_1 = (0, reactive_1.autorun)(newValue)
        vm_1['_updateEffect'] = newValue
      },
    })
  }
}
exports.useObserver = useObserver
//# sourceMappingURL=useObserver.js.map
