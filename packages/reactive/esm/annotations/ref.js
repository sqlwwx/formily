import { ProxyRaw, RawProxy } from '../environment'
import { createAnnotation } from '../internals'
import { buildDataTree } from '../tree'
import {
  bindTargetKeyWithCurrentReaction,
  runReactionsFromTargetKey,
} from '../reaction'
export var ref = createAnnotation(function (_a) {
  var target = _a.target,
    key = _a.key,
    value = _a.value
  var store = {
    value: target ? target[key] : value,
  }
  var proxy = {}
  var context = target ? target : store
  var property = target ? key : 'value'
  buildDataTree(target, key, store)
  ProxyRaw.set(proxy, store)
  RawProxy.set(store, proxy)
  function get() {
    bindTargetKeyWithCurrentReaction({
      target: context,
      key: property,
      type: 'get',
    })
    return store.value
  }
  function set(value) {
    var oldValue = store.value
    store.value = value
    if (oldValue !== value) {
      runReactionsFromTargetKey({
        target: context,
        key: property,
        type: 'set',
        oldValue: oldValue,
        value: value,
      })
    }
  }
  if (target) {
    Object.defineProperty(target, key, {
      get: get,
      set: set,
      enumerable: true,
      configurable: false,
    })
    return target
  } else {
    Object.defineProperty(proxy, 'value', {
      set: set,
      get: get,
    })
  }
  return proxy
})
//# sourceMappingURL=ref.js.map
