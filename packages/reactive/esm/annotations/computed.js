import { ProxyRaw, RawProxy, ReactionStack } from '../environment'
import { createAnnotation } from '../internals'
import { buildDataTree } from '../tree'
import {
  bindTargetKeyWithCurrentReaction,
  runReactionsFromTargetKey,
  bindComputedReactions,
  hasRunningReaction,
  isUntracking,
  batchStart,
  batchEnd,
  releaseBindingReactions,
} from '../reaction'
export var computed = createAnnotation(function (_a) {
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
    if (ReactionStack.indexOf(reaction) === -1) {
      releaseBindingReactions(reaction)
      try {
        ReactionStack.push(reaction)
        compute()
      } finally {
        ReactionStack.pop()
      }
    }
  }
  reaction._name = 'ComputedReaction'
  reaction._scheduler = function () {
    reaction._dirty = true
    runReactionsFromTargetKey({
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
  ProxyRaw.set(proxy, store)
  RawProxy.set(store, proxy)
  buildDataTree(target, key, store)
  function get() {
    if (hasRunningReaction()) {
      bindComputedReactions(reaction)
    }
    if (!isUntracking()) {
      //如果允许untracked过程中收集依赖，那么永远不会存在绑定，因为_dirty已经设置为false
      if (reaction._dirty) {
        reaction()
        reaction._dirty = false
      }
    } else {
      compute()
    }
    bindTargetKeyWithCurrentReaction({
      target: context,
      key: property,
      type: 'get',
    })
    return store.value
  }
  function set(value) {
    var _a
    try {
      batchStart()
      ;(_a = setter === null || setter === void 0 ? void 0 : setter.call) ===
        null || _a === void 0
        ? void 0
        : _a.call(setter, context, value)
    } finally {
      batchEnd()
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
