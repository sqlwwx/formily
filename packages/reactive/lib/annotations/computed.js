'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.computed = void 0
var environment_1 = require('../environment')
var internals_1 = require('../internals')
var tree_1 = require('../tree')
var reaction_1 = require('../reaction')
exports.computed = (0, internals_1.createAnnotation)(function (_a) {
  var target = _a.target,
    key = _a.key,
    value = _a.value
  var store = {}
  var proxy = {}
  var context = target ? target : store
  var property = target ? key : 'value'
  var getter = getGetter(context)
  var setter = getSetter(context)
  function getGetter(target) {
    if (!target) {
      if (value && value.get) return value.get
      return value
    }
    var descriptor = Object.getOwnPropertyDescriptor(target, property)
    if (descriptor && descriptor.get) return descriptor.get
    return getGetter(Object.getPrototypeOf(target))
  }
  function getSetter(target) {
    if (!target) {
      if (value && value.set) return value.set
      return
    }
    var descriptor = Object.getOwnPropertyDescriptor(target, property)
    if (descriptor && descriptor.set) return descriptor.set
    return getSetter(Object.getPrototypeOf(target))
  }
  function compute() {
    var _a
    store.value =
      (_a = getter === null || getter === void 0 ? void 0 : getter.call) ===
        null || _a === void 0
        ? void 0
        : _a.call(getter, context)
  }
  function reaction() {
    if (environment_1.ReactionStack.indexOf(reaction) === -1) {
      ;(0, reaction_1.releaseBindingReactions)(reaction)
      try {
        environment_1.ReactionStack.push(reaction)
        compute()
      } finally {
        environment_1.ReactionStack.pop()
      }
    }
  }
  reaction._name = 'ComputedReaction'
  reaction._scheduler = function () {
    reaction._dirty = true
    ;(0, reaction_1.runReactionsFromTargetKey)({
      target: context,
      key: property,
      value: store.value,
      type: 'set',
    })
  }
  reaction._isComputed = true
  reaction._dirty = true
  reaction._context = context
  reaction._property = property
  environment_1.ProxyRaw.set(proxy, store)
  environment_1.RawProxy.set(store, proxy)
  ;(0, tree_1.buildDataTree)(target, key, store)
  function get() {
    if ((0, reaction_1.hasRunningReaction)()) {
      ;(0, reaction_1.bindComputedReactions)(reaction)
    }
    if (!(0, reaction_1.isUntracking)()) {
      //如果允许untracked过程中收集依赖，那么永远不会存在绑定，因为_dirty已经设置为false
      if (reaction._dirty) {
        reaction()
        reaction._dirty = false
      }
    } else {
      compute()
    }
    ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
      target: context,
      key: property,
      type: 'get',
    })
    return store.value
  }
  function set(value) {
    var _a
    try {
      ;(0, reaction_1.batchStart)()
      ;(_a = setter === null || setter === void 0 ? void 0 : setter.call) ===
        null || _a === void 0
        ? void 0
        : _a.call(setter, context, value)
    } finally {
      ;(0, reaction_1.batchEnd)()
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
//# sourceMappingURL=computed.js.map
