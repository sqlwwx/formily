'use strict'
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator]
    if (!m) return o
    var i = m.call(o),
      r,
      ar = [],
      e
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
    } catch (error) {
      e = { error: error }
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i)
      } finally {
        if (e) throw e.error
      }
    }
    return ar
  }
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i)
          ar[i] = from[i]
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from))
  }
var _a
Object.defineProperty(exports, '__esModule', { value: true })
exports.baseHandlers = exports.collectionHandlers = void 0
var reaction_1 = require('./reaction')
var environment_1 = require('./environment')
var externals_1 = require('./externals')
var internals_1 = require('./internals')
var wellKnownSymbols = new Set(
  Object.getOwnPropertyNames(Symbol)
    .map(function (key) {
      return Symbol[key]
    })
    .filter(function (value) {
      return typeof value === 'symbol'
    })
)
var hasOwnProperty = Object.prototype.hasOwnProperty
function findObservable(target, key, value) {
  var observableObj = environment_1.RawProxy.get(value)
  if (observableObj) {
    return observableObj
  }
  if (
    !(0, externals_1.isObservable)(value) &&
    (0, externals_1.isSupportObservable)(value)
  ) {
    return (0, internals_1.createObservable)(target, key, value)
  }
  return value
}
function patchIterator(target, key, iterator, isEntries) {
  var originalNext = iterator.next
  iterator.next = function () {
    var _a = originalNext.call(iterator),
      done = _a.done,
      value = _a.value
    if (!done) {
      if (isEntries) {
        value[1] = findObservable(target, key, value[1])
      } else {
        value = findObservable(target, key, value)
      }
    }
    return { done: done, value: value }
  }
  return iterator
}
var instrumentations =
  ((_a = {
    has: function (key) {
      var target = environment_1.ProxyRaw.get(this)
      var proto = Reflect.getPrototypeOf(this)
      ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
        target: target,
        key: key,
        type: 'has',
      })
      return proto.has.apply(target, arguments)
    },
    get: function (key) {
      var target = environment_1.ProxyRaw.get(this)
      var proto = Reflect.getPrototypeOf(this)
      ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
        target: target,
        key: key,
        type: 'get',
      })
      return findObservable(target, key, proto.get.apply(target, arguments))
    },
    add: function (key) {
      var target = environment_1.ProxyRaw.get(this)
      var proto = Reflect.getPrototypeOf(this)
      var hadKey = proto.has.call(target, key)
      // forward the operation before queueing reactions
      var result = proto.add.apply(target, arguments)
      if (!hadKey) {
        ;(0, reaction_1.runReactionsFromTargetKey)({
          target: target,
          key: key,
          value: key,
          type: 'add',
        })
      }
      return result
    },
    set: function (key, value) {
      var target = environment_1.ProxyRaw.get(this)
      var proto = Reflect.getPrototypeOf(this)
      var hadKey = proto.has.call(target, key)
      var oldValue = proto.get.call(target, key)
      // forward the operation before queueing reactions
      var result = proto.set.apply(target, arguments)
      if (!hadKey) {
        ;(0, reaction_1.runReactionsFromTargetKey)({
          target: target,
          key: key,
          value: value,
          type: 'add',
        })
      } else if (value !== oldValue) {
        ;(0, reaction_1.runReactionsFromTargetKey)({
          target: target,
          key: key,
          value: value,
          oldValue: oldValue,
          type: 'set',
        })
      }
      return result
    },
    delete: function (key) {
      var target = environment_1.ProxyRaw.get(this)
      var proto = Reflect.getPrototypeOf(this)
      var hadKey = proto.has.call(target, key)
      var oldValue = proto.get ? proto.get.call(target, key) : undefined
      // forward the operation before queueing reactions
      var result = proto.delete.apply(target, arguments)
      if (hadKey) {
        ;(0, reaction_1.runReactionsFromTargetKey)({
          target: target,
          key: key,
          oldValue: oldValue,
          type: 'delete',
        })
      }
      return result
    },
    clear: function () {
      var target = environment_1.ProxyRaw.get(this)
      var proto = Reflect.getPrototypeOf(this)
      var hadItems = target.size !== 0
      var oldTarget = target instanceof Map ? new Map(target) : new Set(target)
      // forward the operation before queueing reactions
      var result = proto.clear.apply(target, arguments)
      if (hadItems) {
        ;(0, reaction_1.runReactionsFromTargetKey)({
          target: target,
          oldTarget: oldTarget,
          type: 'clear',
        })
      }
      return result
    },
    forEach: function (cb) {
      var _a
      var args = []
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i]
      }
      var target = environment_1.ProxyRaw.get(this)
      var proto = Reflect.getPrototypeOf(this)
      ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
        target: target,
        type: 'iterate',
      })
      // swap out the raw values with their observable pairs
      // before passing them to the callback
      var wrappedCb = function (value, key) {
        var args = []
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i]
        }
        return cb.apply(
          void 0,
          __spreadArray(
            [findObservable(target, key, value), key],
            __read(args),
            false
          )
        )
      }
      return (_a = proto.forEach).call.apply(
        _a,
        __spreadArray([target, wrappedCb], __read(args), false)
      )
    },
    keys: function () {
      var target = environment_1.ProxyRaw.get(this)
      var proto = Reflect.getPrototypeOf(this)
      ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
        target: target,
        type: 'iterate',
      })
      return proto.keys.apply(target, arguments)
    },
    values: function () {
      var target = environment_1.ProxyRaw.get(this)
      var proto = Reflect.getPrototypeOf(this)
      ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
        target: target,
        type: 'iterate',
      })
      var iterator = proto.values.apply(target, arguments)
      return patchIterator(target, '', iterator, false)
    },
    entries: function () {
      var target = environment_1.ProxyRaw.get(this)
      var proto = Reflect.getPrototypeOf(this)
      ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
        target: target,
        type: 'iterate',
      })
      var iterator = proto.entries.apply(target, arguments)
      return patchIterator(target, '', iterator, true)
    },
  }),
  (_a[Symbol.iterator] = function () {
    var target = environment_1.ProxyRaw.get(this)
    var proto = Reflect.getPrototypeOf(this)
    ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
      target: target,
      type: 'iterate',
    })
    var iterator = proto[Symbol.iterator].apply(target, arguments)
    return patchIterator(target, '', iterator, target instanceof Map)
  }),
  Object.defineProperty(_a, 'size', {
    get: function () {
      var target = environment_1.ProxyRaw.get(this)
      var proto = Reflect.getPrototypeOf(this)
      ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
        target: target,
        type: 'iterate',
      })
      return Reflect.get(proto, 'size', target)
    },
    enumerable: false,
    configurable: true,
  }),
  _a)
exports.collectionHandlers = {
  get: function (target, key, receiver) {
    // instrument methods and property accessors to be reactive
    target = hasOwnProperty.call(instrumentations, key)
      ? instrumentations
      : target
    return Reflect.get(target, key, receiver)
  },
}
exports.baseHandlers = {
  get: function (target, key, receiver) {
    var result = target[key] // use Reflect.get is too slow
    if (typeof key === 'symbol' && wellKnownSymbols.has(key)) {
      return result
    }
    ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
      target: target,
      key: key,
      receiver: receiver,
      type: 'get',
    })
    var observableResult = environment_1.RawProxy.get(result)
    if (observableResult) {
      return observableResult
    }
    if (
      !(0, externals_1.isObservable)(result) &&
      (0, externals_1.isSupportObservable)(result)
    ) {
      var descriptor = Reflect.getOwnPropertyDescriptor(target, key)
      if (
        !descriptor ||
        !(descriptor.writable === false && descriptor.configurable === false)
      ) {
        return (0, internals_1.createObservable)(target, key, result)
      }
    }
    return result
  },
  has: function (target, key) {
    var result = Reflect.has(target, key)
    ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
      target: target,
      key: key,
      type: 'has',
    })
    return result
  },
  ownKeys: function (target) {
    var keys = Reflect.ownKeys(target)
    ;(0, reaction_1.bindTargetKeyWithCurrentReaction)({
      target: target,
      type: 'iterate',
    })
    return keys
  },
  set: function (target, key, value, receiver) {
    var hadKey = hasOwnProperty.call(target, key)
    var newValue = (0, internals_1.createObservable)(target, key, value)
    var oldValue = target[key]
    target[key] = newValue // use Reflect.set is too slow
    if (!hadKey) {
      ;(0, reaction_1.runReactionsFromTargetKey)({
        target: target,
        key: key,
        value: newValue,
        oldValue: oldValue,
        receiver: receiver,
        type: 'add',
      })
    } else if (value !== oldValue) {
      ;(0, reaction_1.runReactionsFromTargetKey)({
        target: target,
        key: key,
        value: newValue,
        oldValue: oldValue,
        receiver: receiver,
        type: 'set',
      })
    }
    return true
  },
  deleteProperty: function (target, key) {
    var oldValue = target[key]
    delete target[key]
    ;(0, reaction_1.runReactionsFromTargetKey)({
      target: target,
      key: key,
      oldValue: oldValue,
      type: 'delete',
    })
    return true
  },
}
//# sourceMappingURL=handlers.js.map
