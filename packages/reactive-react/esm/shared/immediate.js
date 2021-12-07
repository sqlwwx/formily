export var immediate = function (callback) {
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
//# sourceMappingURL=immediate.js.map
