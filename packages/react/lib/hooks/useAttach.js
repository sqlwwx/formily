'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useAttach = void 0
var react_1 = require('react')
var useAttach = function (target) {
  var oldTargetRef = (0, react_1.useRef)(null)
  ;(0, react_1.useEffect)(
    function () {
      if (oldTargetRef.current && target !== oldTargetRef.current) {
        oldTargetRef.current.onUnmount()
      }
      oldTargetRef.current = target
      target.onMount()
      return function () {
        target.onUnmount()
      }
    },
    [target]
  )
  return target
}
exports.useAttach = useAttach
//# sourceMappingURL=useAttach.js.map
