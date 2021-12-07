import { RawNode, ProxyRaw, ObserverListeners } from './environment'
import { isFn } from './checkers'
import { DataChange } from './tree'
export var observe = function (target, observer, deep) {
  if (deep === void 0) {
    deep = true
  }
  var addListener = function (target) {
    var raw = ProxyRaw.get(target) || target
    var node = RawNode.get(raw)
    var listener = function (operation) {
      var targetRaw = ProxyRaw.get(operation.target) || operation.target
      var targetNode = RawNode.get(targetRaw)
      if (deep) {
        if (node.contains(targetNode)) {
          observer(new DataChange(operation, targetNode))
          return
        }
      }
      if (
        node === targetNode ||
        (node.targetRaw === targetRaw && node.key === operation.key)
      ) {
        observer(new DataChange(operation, targetNode))
      }
    }
    if (node && isFn(observer)) {
      ObserverListeners.add(listener)
    }
    return function () {
      ObserverListeners.delete(listener)
    }
  }
  if (target && typeof target !== 'object')
    throw Error('Can not observe '.concat(typeof target, ' type.'))
  return addListener(target)
}
//# sourceMappingURL=observe.js.map
