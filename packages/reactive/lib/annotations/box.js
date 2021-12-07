'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.box = void 0
var environment_1 = require('../environment')
var internals_1 = require('../internals')
var tree_1 = require('../tree')
var reaction_1 = require('../reaction')
exports.box = (0, internals_1.createAnnotation)(function (_a) {
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
  environment_1.ProxyRaw.set(proxy, store)
  environment_1.RawProxy.set(store, proxy)
  ;(0, tree_1.buildDataTree)(target, key, store)
  function get() {
    ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
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
      ;(0, reaction_1.runReactionsFromTargetKey)({
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
