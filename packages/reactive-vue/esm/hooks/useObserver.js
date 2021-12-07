import { autorun } from '@formily/reactive'
import { getCurrentInstance, onBeforeUnmount, isVue3 } from 'vue-demi'
/* istanbul ignore next */
export var useObserver = function () {
  if (isVue3) {
    var vm_1 = getCurrentInstance()
    var dispose_1
    onBeforeUnmount(function () {
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
        dispose_1 = autorun(newValue)
        vm_1['_updateEffect'] = newValue
      },
    })
  }
}
//# sourceMappingURL=useObserver.js.map
