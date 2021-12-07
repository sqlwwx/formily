'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.observe = void 0
var environment_1 = require('./environment')
var checkers_1 = require('./checkers')
var tree_1 = require('./tree')
var observe = function (target, observer, deep) {
  if (deep === void 0) {
    deep = true
  }
  var addListener = function (target) {
    var raw = environment_1.ProxyRaw.get(target) || target
    var node = environment_1.RawNode.get(raw)
    var listener = function (operation) {
      var targetRaw =
        environment_1.ProxyRaw.get(operation.target) || operation.target
      var targetNode = environment_1.RawNode.get(targetRaw)
      if (deep) {
        if (node.contains(targetNode)) {
          observer(new tree_1.DataChange(operation, targetNode))
          return
        }
      }
      if (
        node === targetNode ||
        (node.targetRaw === targetRaw && node.key === operation.key)
      ) {
        observer(new tree_1.DataChange(operation, targetNode))
      }
    }
    if (node && (0, checkers_1.isFn)(observer)) {
      environment_1.ObserverListeners.add(listener)
    }
    return function () {
      environment_1.ObserverListeners.delete(listener)
    }
  }
  if (target && typeof target !== 'object')
    throw Error('Can not observe '.concat(typeof target, ' type.'))
  return addListener(target)
}
exports.observe = observe
//# sourceMappingURL=observe.js.map
