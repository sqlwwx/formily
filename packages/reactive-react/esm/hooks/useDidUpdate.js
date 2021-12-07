import { useLayoutEffect, useRef } from 'react'
import { immediate } from '../shared'
export var useDidUpdate = function (callback) {
  var request = useRef(null)
  request.current = immediate(callback)
  useLayoutEffect(function () {
    request.current()
    callback()
  })
}
//# sourceMappingURL=useDidUpdate.js.map
