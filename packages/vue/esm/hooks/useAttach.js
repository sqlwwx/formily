import { onBeforeUnmount, onMounted, shallowRef } from 'vue-demi'
export var useAttach = function (target) {
  var oldTargetRef = shallowRef(null)
  oldTargetRef.value = target
  onMounted(function () {
    target.onMount()
  })
  onBeforeUnmount(function () {
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
//# sourceMappingURL=useAttach.js.map
