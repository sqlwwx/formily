'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ref = void 0
var environment_1 = require('../environment')
var internals_1 = require('../internals')
var tree_1 = require('../tree')
var reaction_1 = require('../reaction')
exports.ref = (0, internals_1.createAnnotation)(function (_a) {
  var target = _a.target,
    key = _a.key,
    value = _a.value
  var store = {
    value: target ? target[key] : value,
  }
  var proxy = {}
  var context = target ? target : store
  var property = target ? key : 'value'
  ;(0, tree_1.buildDataTree)(target, key, store)
  environment_1.ProxyRaw.set(proxy, store)
  environment_1.RawProxy.set(store, proxy)
  function get() {
    ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
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
      ;(0, reaction_1.runReactionsFromTargetKey)({
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
