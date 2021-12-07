import { createAnnotation, createObservable } from '../internals'
import {
  bindTargetKeyWithCurrentReaction,
  runReactionsFromTargetKey,
} from '../reaction'
export var shallow = createAnnotation(function (_a) {
  var target = _a.target,
    key = _a.key,
    value = _a.value
  var store = {
    value: createObservable(target, key, target ? target[key] : value, true),
  }
  function get() {
    bindTargetKeyWithCurrentReaction({
      target: target,
      key: key,
      type: 'get',
    })
    return store.value
  }
  function set(value) {
    var oldValue = store.value
    value = createObservable(target, key, value, true)
    store.value = value
    if (oldValue === value) return
    runReactionsFromTargetKey({
      target: target,
      key: key,
      type: 'set',
      oldValue: oldValue,
      value: value,
    })
  }
  if (target) {
    Object.defineProperty(target, key, {
      set: set,
      get: get,
      enumerable: true,
      configurable: false,
    })
    return target
  }
  return store.value
})
//# sourceMappingURL=shallow.js.map
