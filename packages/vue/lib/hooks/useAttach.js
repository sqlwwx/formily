'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useAttach = void 0
var vue_demi_1 = require('vue-demi')
var useAttach = function (target) {
  var oldTargetRef = (0, vue_demi_1.shallowRef)(null)
  oldTargetRef.value = target
  ;(0, vue_demi_1.onMounted)(function () {
    target.onMount()
  })
  ;(0, vue_demi_1.onBeforeUnmount)(function () {
    var _a
    ;(_a = oldTargetRef.value) === null || _a === void 0
      ? void 0
      : _a.onUnmount()
  })
  var checker = function (target) {
    if (target !== oldTargetRef.value) {
      if (oldTargetRef.value) {
        oldTargetRef.value.onUnmount()
      }
      oldTargetRef.value = target
      target.onMount()
    }
    return oldTargetRef.value
  }
  return [oldTargetRef, checker]
}
exports.useAttach = useAttach
//# sourceMappingURL=useAttach.js.map
