import { ProxyRaw, RawProxy } from '../environment'
import { createAnnotation } from '../internals'
import { buildDataTree } from '../tree'
import {
  bindTargetKeyWithCurrentReaction,
  runReactionsFromTargetKey,
} from '../reaction'
export var box = createAnnotation(function (_a) {
  var target = _a.target,
    key = _a.key,
    value = _a.value
  var store = {
    value: target ? target[key] : value,
  }
  var proxy = {
    set: set,
    get: get,
  }
  ProxyRaw.set(proxy, store)
  RawProxy.set(store, proxy)
  buildDataTree(target, key, store)
  function get() {
    bindTargetKeyWithCurrentReaction({
      target: store,
      key: key,
      type: 'get',
    })
    return store.value
  }
  function set(value) {
    var oldValue = store.value
    store.value = value
    if (oldValue !== value) {
      runReactionsFromTargetKey({
        target: store,
        key: key,
        type: 'set',
        oldValue: oldValue,
        value: value,
      })
    }
  }
  if (target) {
    Object.defineProperty(target, key, {
      value: proxy,
      enumerable: true,
      configurable: false,
      writable: false,
    })
    return target
  }
  return proxy
})
//# sourceMappingURL=box.js.map
