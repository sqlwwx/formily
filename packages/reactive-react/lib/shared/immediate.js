'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.immediate = void 0
var immediate = function (callback) {
  var disposed = false
  Promise.resolve(0).then(function () {
    if (disposed) {
      disposed = false
      return
    }
    callback()
  })
  return function () {
    disposed = true
  }
}
exports.immediate = immediate
//# sourceMappingURL=immediate.js.map
