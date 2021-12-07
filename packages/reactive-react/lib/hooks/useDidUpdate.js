'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useDidUpdate = void 0
var react_1 = require('react')
var shared_1 = require('../shared')
var useDidUpdate = function (callback) {
  var request = (0, react_1.useRef)(null)
  request.current = (0, shared_1.immediate)(callback)
  ;(0, react_1.useLayoutEffect)(function () {
    request.current()
    callback()
  })
}
exports.useDidUpdate = useDidUpdate
//# sourceMappingURL=useDidUpdate.js.map
