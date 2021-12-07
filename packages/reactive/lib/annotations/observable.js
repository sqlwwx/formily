'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.observable = void 0
var internals_1 = require('../internals')
var reaction_1 = require('../reaction')
exports.observable = (0, internals_1.createAnnotation)(function (_a) {
  var target = _a.target,
    key = _a.key,
    value = _a.value
  var store = {
    value: (0, internals_1.createObservable)(
      target,
      key,
      target ? target[key] : value
    ),
  }
  function get() {
    ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
      target: target,
      key: key,
      type: 'get',
    })
    return store.value
  }
  function set(value) {
    var oldValue = store.value
    value = (0, internals_1.createObservable)(target, key, value)
    store.value = value
    if (oldValue === value) return
    ;(0, reaction_1.runReactionsFromTargetKey)({
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
//# sourceMappingURL=observable.js.map
