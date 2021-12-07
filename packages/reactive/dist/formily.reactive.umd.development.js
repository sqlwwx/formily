;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define('formily.reactive', ['exports'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        ((global.Formily = global.Formily || {}),
        (global.Formily.Reactive = {}))
      ))
})(this, function (exports) {
  'use strict'

  ;(function () {
    const env = { NODE_ENV: 'development' }
    try {
      if (process) {
        process.env = Object.assign({}, process.env)
        Object.assign(process.env, env)
        return
      }
    } catch (e) {} // avoid ReferenceError: process is not defined
    globalThis.process = { env: env }
  })()

  var isMap = function (val) {
    return val && val instanceof Map
  }
  var isSet = function (val) {
    return val && val instanceof Set
  }
  var isWeakMap = function (val) {
    return val && val instanceof WeakMap
  }
  var isWeakSet = function (val) {
    return val && val instanceof WeakSet
  }
  var isFn = function (val) {
    return typeof val === 'function'
  }
  var isArr = Array.isArray
  var isPlainObj = function (val) {
    return Object.prototype.toString.call(val) === '[object Object]'
  }
  var isValid = function (val) {
    return val !== null && val !== undefined
  }
  var isCollectionType = function (target) {
    return (
      isMap(target) || isWeakMap(target) || isSet(target) || isWeakSet(target)
    )
  }
  var isNormalType = function (target) {
    return isPlainObj(target) || isArr(target)
  }

  var toArray = function (value) {
    return Array.isArray(value)
      ? value
      : value !== undefined && value !== null
      ? [value]
      : []
  }
  var ArraySet = /** @class */ (function () {
    function ArraySet(value) {
      if (value === void 0) {
        value = []
      }
      this.batchDeleting = false
      this.value = value
    }
    ArraySet.prototype.add = function (item) {
      if (!this.has(item)) {
        this.value.push(item)
      }
    }
    ArraySet.prototype.has = function (item) {
      return this.value.indexOf(item) > -1
    }
    ArraySet.prototype.delete = function (item) {
      if (this.batchDeleting) return //批量删除时禁止单独删除，会影响计数执行器
      var index = this.value.indexOf(item)
      if (index > -1) {
        this.value.splice(index, 1)
      }
    }
    ArraySet.prototype.forEach = function (callback) {
      if (this.value.length === 0) return
      for (var index = 0, len = this.value.length; index < len; index++) {
        callback(this.value[index])
      }
    }
    ArraySet.prototype.forEachDelete = function (callback) {
      if (this.value.length === 0) return
      this.batchDeleting = true
      for (var index = 0; index < this.value.length; index++) {
        var item = this.value[index]
        this.value.splice(index, 1)
        callback(item)
        index--
      }
      this.batchDeleting = false
    }
    ArraySet.prototype.clear = function () {
      this.value.length = 0
    }
    return ArraySet
  })()

  var ProxyRaw = new WeakMap()
  var RawProxy = new WeakMap()
  var RawShallowProxy = new WeakMap()
  var RawNode = new WeakMap()
  var RawReactionsMap = new WeakMap()
  var ReactionStack = []
  var BatchCount = { value: 0 }
  var UntrackCount = { value: 0 }
  var BatchScope = { value: false }
  var DependencyCollected = { value: false }
  var PendingReactions = new ArraySet()
  var PendingScopeReactions = new ArraySet()
  var BatchEndpoints = new ArraySet()
  var MakeObservableSymbol = Symbol('MakeObservableSymbol')
  var ObserverListeners = new ArraySet()

  var ITERATION_KEY = Symbol('iteration key')
  var addRawReactionsMap = function (target, key, reaction) {
    var reactionsMap = RawReactionsMap.get(target)
    if (reactionsMap) {
      var reactions = reactionsMap.get(key)
      if (reactions) {
        reactions.add(reaction)
      } else {
        reactionsMap.set(key, new ArraySet([reaction]))
      }
      return reactionsMap
    } else {
      var reactionsMap_1 = new Map([[key, new ArraySet([reaction])]])
      RawReactionsMap.set(target, reactionsMap_1)
      return reactionsMap_1
    }
  }
  var addReactionsMapToReaction = function (reaction, reactionsMap) {
    var bindSet = reaction._reactionsSet
    if (bindSet) {
      bindSet.add(reactionsMap)
    } else {
      reaction._reactionsSet = new ArraySet([reactionsMap])
    }
    return bindSet
  }
  var getReactionsFromTargetKey = function (target, key) {
    var reactionsMap = RawReactionsMap.get(target)
    var reactions = []
    if (reactionsMap) {
      var map = reactionsMap.get(key)
      if (map) {
        map.forEach(function (reaction) {
          if (reactions.indexOf(reaction) === -1) {
            reactions.push(reaction)
          }
        })
      }
    }
    return reactions
  }
  var runReactions = function (target, key) {
    var reactions = getReactionsFromTargetKey(target, key)
    var prevUntrackCount = UntrackCount.value
    UntrackCount.value = 0
    for (var i = 0, len = reactions.length; i < len; i++) {
      var reaction = reactions[i]
      if (reaction._isComputed) {
        reaction._scheduler(reaction)
      } else if (isScopeBatching()) {
        PendingScopeReactions.add(reaction)
      } else if (isBatching()) {
        PendingReactions.add(reaction)
      } else {
        if (isFn(reaction._scheduler)) {
          reaction._scheduler(reaction)
        } else {
          reaction()
        }
      }
    }
    UntrackCount.value = prevUntrackCount
  }
  var notifyObservers = function (operation) {
    ObserverListeners.forEach(function (fn) {
      return fn(operation)
    })
  }
  var bindTargetKeyWithCurrentReaction = function (operation) {
    var key = operation.key,
      type = operation.type,
      target = operation.target
    if (type === 'iterate') {
      key = ITERATION_KEY
    }
    var current = ReactionStack[ReactionStack.length - 1]
    if (isUntracking()) return
    if (current) {
      DependencyCollected.value = true
      addReactionsMapToReaction(
        current,
        addRawReactionsMap(target, key, current)
      )
    }
  }
  var bindComputedReactions = function (reaction) {
    if (isFn(reaction)) {
      var current = ReactionStack[ReactionStack.length - 1]
      if (current) {
        var computes = current._computesSet
        if (computes) {
          computes.add(reaction)
        } else {
          current._computesSet = new ArraySet([reaction])
        }
      }
    }
  }
  var runReactionsFromTargetKey = function (operation) {
    var key = operation.key,
      type = operation.type,
      target = operation.target,
      oldTarget = operation.oldTarget
    batchStart()
    notifyObservers(operation)
    if (type === 'clear') {
      oldTarget.forEach(function (_, key) {
        runReactions(target, key)
      })
    } else {
      runReactions(target, key)
    }
    if (type === 'add' || type === 'delete' || type === 'clear') {
      var newKey = Array.isArray(target) ? 'length' : ITERATION_KEY
      runReactions(target, newKey)
    }
    batchEnd()
  }
  var hasRunningReaction = function () {
    return ReactionStack.length > 0
  }
  var releaseBindingReactions = function (reaction) {
    var _a
    ;(_a = reaction._reactionsSet) === null || _a === void 0
      ? void 0
      : _a.forEach(function (reactionsMap) {
          reactionsMap.forEach(function (reactions) {
            reactions.delete(reaction)
          })
        })
    PendingReactions.delete(reaction)
    PendingScopeReactions.delete(reaction)
    delete reaction._reactionsSet
  }
  var suspendComputedReactions = function (current) {
    var _a
    ;(_a = current._computesSet) === null || _a === void 0
      ? void 0
      : _a.forEach(function (reaction) {
          var reactions = getReactionsFromTargetKey(
            reaction._context,
            reaction._property
          )
          if (reactions.length === 0) {
            disposeBindingReactions(reaction)
            reaction._dirty = true
          }
        })
  }
  var disposeBindingReactions = function (reaction) {
    reaction._disposed = true
    releaseBindingReactions(reaction)
    suspendComputedReactions(reaction)
  }
  var batchStart = function () {
    BatchCount.value++
  }
  var batchEnd = function () {
    BatchCount.value--
    if (BatchCount.value === 0) {
      var prevUntrackCount = UntrackCount.value
      UntrackCount.value = 0
      executePendingReactions()
      executeBatchEndpoints()
      UntrackCount.value = prevUntrackCount
    }
  }
  var batchScopeStart = function () {
    BatchScope.value = true
  }
  var batchScopeEnd = function () {
    var prevUntrackCount = UntrackCount.value
    BatchScope.value = false
    UntrackCount.value = 0
    PendingScopeReactions.forEachDelete(function (reaction) {
      if (isFn(reaction._scheduler)) {
        reaction._scheduler(reaction)
      } else {
        reaction()
      }
    })
    UntrackCount.value = prevUntrackCount
  }
  var untrackStart = function () {
    UntrackCount.value++
  }
  var untrackEnd = function () {
    UntrackCount.value--
  }
  var isBatching = function () {
    return BatchCount.value > 0
  }
  var isScopeBatching = function () {
    return BatchScope.value
  }
  var isUntracking = function () {
    return UntrackCount.value > 0
  }
  var executePendingReactions = function () {
    PendingReactions.forEachDelete(function (reaction) {
      if (isFn(reaction._scheduler)) {
        reaction._scheduler(reaction)
      } else {
        reaction()
      }
    })
  }
  var executeBatchEndpoints = function () {
    BatchEndpoints.forEachDelete(function (callback) {
      callback()
    })
  }
  var hasDepsChange = function (newDeps, oldDeps) {
    if (newDeps === oldDeps) return false
    if (newDeps.length !== oldDeps.length) return true
    if (
      newDeps.some(function (value, index) {
        return value !== oldDeps[index]
      })
    )
      return true
    return false
  }
  var disposeEffects = function (reaction) {
    if (reaction._effects) {
      try {
        batchStart()
        reaction._effects.queue.forEach(function (item) {
          if (!item || !item.dispose) return
          item.dispose()
        })
      } finally {
        batchEnd()
      }
    }
  }

  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

  var __assign = function () {
    __assign =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }

  function __read(o, n) {
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

  function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i]
    return to
  }

  var RAW_TYPE = Symbol('RAW_TYPE')
  var OBSERVABLE_TYPE = Symbol('OBSERVABLE_TYPE')
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty
  var isObservable = function (target) {
    return ProxyRaw.has(target)
  }
  var isAnnotation = function (target) {
    return target && !!target[MakeObservableSymbol]
  }
  var isSupportObservable = function (target) {
    if (!isValid(target)) return false
    if (isArr(target)) return true
    if (isPlainObj(target)) {
      if (target[RAW_TYPE]) {
        return false
      }
      if (target[OBSERVABLE_TYPE]) {
        return true
      }
      if ('$$typeof' in target && '_owner' in target) {
        return false
      }
      if (target['_isAMomentObject']) {
        return false
      }
      if (target['_isJSONSchemaObject']) {
        return false
      }
      if (isFn(target['toJS'])) {
        return false
      }
      if (isFn(target['toJSON'])) {
        return false
      }
      return true
    }
    if (
      isMap(target) ||
      isWeakMap(target) ||
      isSet(target) ||
      isWeakSet(target)
    )
      return true
    return false
  }
  var markRaw = function (target) {
    if (!target) return
    if (isFn(target)) {
      target.prototype[RAW_TYPE] = true
    } else {
      target[RAW_TYPE] = true
    }
    return target
  }
  var markObservable = function (target) {
    if (!target) return
    if (isFn(target)) {
      target.prototype[OBSERVABLE_TYPE] = true
    } else {
      target[OBSERVABLE_TYPE] = true
    }
    return target
  }
  var raw = function (target) {
    return ProxyRaw.get(target)
  }
  var toJS = function (values) {
    var visited = new WeakSet()
    var _toJS = function (values) {
      if (visited.has(values)) {
        return values
      }
      if (values && values[RAW_TYPE]) return values
      if (isArr(values)) {
        if (isObservable(values)) {
          visited.add(values)
          var res_1 = []
          values.forEach(function (item) {
            res_1.push(_toJS(item))
          })
          visited.delete(values)
          return res_1
        }
      } else if (isPlainObj(values)) {
        if (isObservable(values)) {
          visited.add(values)
          var res = {}
          for (var key in values) {
            if (hasOwnProperty$1.call(values, key)) {
              res[key] = _toJS(values[key])
            }
          }
          visited.delete(values)
          return res
        }
      }
      return values
    }
    return _toJS(values)
  }
  var contains = function (target, property) {
    var targetRaw = ProxyRaw.get(target) || target
    var propertyRaw = ProxyRaw.get(property) || property
    if (targetRaw === propertyRaw) return true
    var targetNode = RawNode.get(targetRaw)
    var propertyNode = RawNode.get(propertyRaw)
    if (!targetNode) return false
    if (!propertyNode) return false
    return targetNode.contains(propertyNode)
  }
  var hasCollected = function (callback) {
    DependencyCollected.value = false
    callback === null || callback === void 0 ? void 0 : callback()
    return DependencyCollected.value
  }

  var _a
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
    var observableObj = RawProxy.get(value)
    if (observableObj) {
      return observableObj
    }
    if (!isObservable(value) && isSupportObservable(value)) {
      return createObservable(target, key, value)
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
        var target = ProxyRaw.get(this)
        var proto = Reflect.getPrototypeOf(this)
        bindTargetKeyWithCurrentReaction({
          target: target,
          key: key,
          type: 'has',
        })
        return proto.has.apply(target, arguments)
      },
      get: function (key) {
        var target = ProxyRaw.get(this)
        var proto = Reflect.getPrototypeOf(this)
        bindTargetKeyWithCurrentReaction({
          target: target,
          key: key,
          type: 'get',
        })
        return findObservable(target, key, proto.get.apply(target, arguments))
      },
      add: function (key) {
        var target = ProxyRaw.get(this)
        var proto = Reflect.getPrototypeOf(this)
        var hadKey = proto.has.call(target, key)
        // forward the operation before queueing reactions
        var result = proto.add.apply(target, arguments)
        if (!hadKey) {
          runReactionsFromTargetKey({
            target: target,
            key: key,
            value: key,
            type: 'add',
          })
        }
        return result
      },
      set: function (key, value) {
        var target = ProxyRaw.get(this)
        var proto = Reflect.getPrototypeOf(this)
        var hadKey = proto.has.call(target, key)
        var oldValue = proto.get.call(target, key)
        // forward the operation before queueing reactions
        var result = proto.set.apply(target, arguments)
        if (!hadKey) {
          runReactionsFromTargetKey({
            target: target,
            key: key,
            value: value,
            type: 'add',
          })
        } else if (value !== oldValue) {
          runReactionsFromTargetKey({
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
        var target = ProxyRaw.get(this)
        var proto = Reflect.getPrototypeOf(this)
        var hadKey = proto.has.call(target, key)
        var oldValue = proto.get ? proto.get.call(target, key) : undefined
        // forward the operation before queueing reactions
        var result = proto.delete.apply(target, arguments)
        if (hadKey) {
          runReactionsFromTargetKey({
            target: target,
            key: key,
            oldValue: oldValue,
            type: 'delete',
          })
        }
        return result
      },
      clear: function () {
        var target = ProxyRaw.get(this)
        var proto = Reflect.getPrototypeOf(this)
        var hadItems = target.size !== 0
        var oldTarget =
          target instanceof Map ? new Map(target) : new Set(target)
        // forward the operation before queueing reactions
        var result = proto.clear.apply(target, arguments)
        if (hadItems) {
          runReactionsFromTargetKey({
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
        var target = ProxyRaw.get(this)
        var proto = Reflect.getPrototypeOf(this)
        bindTargetKeyWithCurrentReaction({ target: target, type: 'iterate' })
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
              __read(args)
            )
          )
        }
        return (_a = proto.forEach).call.apply(
          _a,
          __spreadArray([target, wrappedCb], __read(args))
        )
      },
      keys: function () {
        var target = ProxyRaw.get(this)
        var proto = Reflect.getPrototypeOf(this)
        bindTargetKeyWithCurrentReaction({ target: target, type: 'iterate' })
        return proto.keys.apply(target, arguments)
      },
      values: function () {
        var target = ProxyRaw.get(this)
        var proto = Reflect.getPrototypeOf(this)
        bindTargetKeyWithCurrentReaction({ target: target, type: 'iterate' })
        var iterator = proto.values.apply(target, arguments)
        return patchIterator(target, '', iterator, false)
      },
      entries: function () {
        var target = ProxyRaw.get(this)
        var proto = Reflect.getPrototypeOf(this)
        bindTargetKeyWithCurrentReaction({ target: target, type: 'iterate' })
        var iterator = proto.entries.apply(target, arguments)
        return patchIterator(target, '', iterator, true)
      },
    }),
    (_a[Symbol.iterator] = function () {
      var target = ProxyRaw.get(this)
      var proto = Reflect.getPrototypeOf(this)
      bindTargetKeyWithCurrentReaction({ target: target, type: 'iterate' })
      var iterator = proto[Symbol.iterator].apply(target, arguments)
      return patchIterator(target, '', iterator, target instanceof Map)
    }),
    Object.defineProperty(_a, 'size', {
      get: function () {
        var target = ProxyRaw.get(this)
        var proto = Reflect.getPrototypeOf(this)
        bindTargetKeyWithCurrentReaction({ target: target, type: 'iterate' })
        return Reflect.get(proto, 'size', target)
      },
      enumerable: false,
      configurable: true,
    }),
    _a)
  var collectionHandlers = {
    get: function (target, key, receiver) {
      // instrument methods and property accessors to be reactive
      target = hasOwnProperty.call(instrumentations, key)
        ? instrumentations
        : target
      return Reflect.get(target, key, receiver)
    },
  }
  var baseHandlers = {
    get: function (target, key, receiver) {
      var result = target[key] // use Reflect.get is too slow
      if (typeof key === 'symbol' && wellKnownSymbols.has(key)) {
        return result
      }
      bindTargetKeyWithCurrentReaction({
        target: target,
        key: key,
        receiver: receiver,
        type: 'get',
      })
      var observableResult = RawProxy.get(result)
      if (observableResult) {
        return observableResult
      }
      if (!isObservable(result) && isSupportObservable(result)) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, key)
        if (
          !descriptor ||
          !(descriptor.writable === false && descriptor.configurable === false)
        ) {
          return createObservable(target, key, result)
        }
      }
      return result
    },
    has: function (target, key) {
      var result = Reflect.has(target, key)
      bindTargetKeyWithCurrentReaction({
        target: target,
        key: key,
        type: 'has',
      })
      return result
    },
    ownKeys: function (target) {
      var keys = Reflect.ownKeys(target)
      bindTargetKeyWithCurrentReaction({ target: target, type: 'iterate' })
      return keys
    },
    set: function (target, key, value, receiver) {
      var hadKey = hasOwnProperty.call(target, key)
      var newValue = createObservable(target, key, value)
      var oldValue = target[key]
      target[key] = newValue // use Reflect.set is too slow
      if (!hadKey) {
        runReactionsFromTargetKey({
          target: target,
          key: key,
          value: newValue,
          oldValue: oldValue,
          receiver: receiver,
          type: 'add',
        })
      } else if (value !== oldValue) {
        runReactionsFromTargetKey({
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
      runReactionsFromTargetKey({
        target: target,
        key: key,
        oldValue: oldValue,
        type: 'delete',
      })
      return true
    },
  }

  var DataChange = /** @class */ (function () {
    function DataChange(operation, node) {
      this.key = operation.key
      this.type = operation.type
      this.object = operation.target
      this.value = operation.value
      this.oldValue = operation.oldValue
      this.path = node.path.concat(operation.key)
    }
    return DataChange
  })()
  var DataNode = /** @class */ (function () {
    function DataNode(target, key, value) {
      this.target = target
      this.key = key
      this.value = value
    }
    Object.defineProperty(DataNode.prototype, 'path', {
      get: function () {
        if (!this.parent) return this.key ? [this.key] : []
        return this.parent.path.concat(this.key)
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(DataNode.prototype, 'targetRaw', {
      get: function () {
        return ProxyRaw.get(this.target) || this.target
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(DataNode.prototype, 'parent', {
      get: function () {
        if (!this.target) return
        return RawNode.get(this.targetRaw)
      },
      enumerable: false,
      configurable: true,
    })
    DataNode.prototype.isEqual = function (node) {
      if (this.key) {
        return node.targetRaw === this.targetRaw && node.key === this.key
      }
      return node.value === this.value
    }
    DataNode.prototype.contains = function (node) {
      if (node === this) return true
      var parent = node.parent
      while (!!parent) {
        if (this.isEqual(parent)) return true
        parent = parent.parent
      }
      return false
    }
    return DataNode
  })()
  var buildDataTree = function (target, key, value) {
    var currentNode = RawNode.get(ProxyRaw.get(value) || value)
    if (currentNode) return currentNode
    RawNode.set(value, new DataNode(target, key, value))
  }

  var createNormalProxy = function (target, shallow) {
    var proxy = new Proxy(target, baseHandlers)
    ProxyRaw.set(proxy, target)
    if (shallow) {
      RawShallowProxy.set(target, proxy)
    } else {
      RawProxy.set(target, proxy)
    }
    return proxy
  }
  var createCollectionProxy = function (target, shallow) {
    var proxy = new Proxy(target, collectionHandlers)
    ProxyRaw.set(proxy, target)
    if (shallow) {
      RawShallowProxy.set(target, proxy)
    } else {
      RawProxy.set(target, proxy)
    }
    return proxy
  }
  var createShallowProxy = function (target) {
    if (isNormalType(target)) return createNormalProxy(target, true)
    if (isCollectionType(target)) return createCollectionProxy(target, true)
    return target
  }
  var createObservable = function (target, key, value, shallow) {
    if (typeof value !== 'object') return value
    var raw = ProxyRaw.get(value)
    if (!!raw) {
      var node = RawNode.get(raw)
      node.key = key
      return value
    }
    if (!isSupportObservable(value)) return value
    if (target) {
      var parentRaw = ProxyRaw.get(target) || target
      var isShallowParent = RawShallowProxy.get(parentRaw)
      if (isShallowParent) return value
    }
    buildDataTree(target, key, value)
    if (shallow) return createShallowProxy(value)
    if (isNormalType(value)) return createNormalProxy(value)
    if (isCollectionType(value)) return createCollectionProxy(value)
    return value
  }
  var createAnnotation = function (maker) {
    var annotation = function (target) {
      return maker({ value: target })
    }
    if (isFn(maker)) {
      annotation[MakeObservableSymbol] = maker
    }
    return annotation
  }
  var getObservableMaker = function (target) {
    if (target[MakeObservableSymbol]) {
      if (!target[MakeObservableSymbol][MakeObservableSymbol]) {
        return target[MakeObservableSymbol]
      }
      return getObservableMaker(target[MakeObservableSymbol])
    }
  }
  var createBoundaryFunction = function (start, end) {
    function boundary(fn) {
      var results
      try {
        start()
        if (isFn(fn)) {
          results = fn()
        }
      } finally {
        end()
      }
      return results
    }
    boundary.bound = createBindFunction(boundary)
    return boundary
  }
  var createBindFunction = function (boundary) {
    function bind(callback, context) {
      return function () {
        var args = []
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i]
        }
        return boundary(function () {
          return callback.apply(context, args)
        })
      }
    }
    return bind
  }
  var createBoundaryAnnotation = function (start, end) {
    var boundary = createBoundaryFunction(start, end)
    var annotation = createAnnotation(function (_a) {
      var target = _a.target,
        key = _a.key
      target[key] = boundary.bound(target[key], target)
      return target
    })
    boundary[MakeObservableSymbol] = annotation
    boundary.bound[MakeObservableSymbol] = annotation
    return boundary
  }

  var batch = createBoundaryAnnotation(batchStart, batchEnd)
  batch.scope = createBoundaryAnnotation(batchScopeStart, batchScopeEnd)
  batch.endpoint = function (callback) {
    if (!isFn(callback)) return
    if (BatchCount.value === 0) {
      callback()
    } else {
      BatchEndpoints.add(callback)
    }
  }

  var action = createBoundaryAnnotation(
    function () {
      batchStart()
      untrackStart()
    },
    function () {
      untrackEnd()
      batchEnd()
    }
  )
  action.scope = createBoundaryAnnotation(
    function () {
      batchScopeStart()
      untrackStart()
    },
    function () {
      untrackEnd()
      batchScopeEnd()
    }
  )

  var untracked = createBoundaryFunction(untrackStart, untrackEnd)

  var observable$1 = createAnnotation(function (_a) {
    var target = _a.target,
      key = _a.key,
      value = _a.value
    var store = {
      value: createObservable(target, key, target ? target[key] : value),
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
      value = createObservable(target, key, value)
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

  var box = createAnnotation(function (_a) {
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

  var ref = createAnnotation(function (_a) {
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

  var shallow = createAnnotation(function (_a) {
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

  var computed = createAnnotation(function (_a) {
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

  function observable(target) {
    return createObservable(null, null, target)
  }
  observable.box = box
  observable.ref = ref
  observable.deep = observable$1
  observable.shallow = shallow
  observable.computed = computed
  observable[MakeObservableSymbol] = observable$1

  function define(target, annotations) {
    if (isObservable(target)) return target
    if (!isSupportObservable(target)) return target
    buildDataTree(undefined, undefined, target)
    ProxyRaw.set(target, target)
    RawProxy.set(target, target)
    for (var key in annotations) {
      var annotation = annotations[key]
      if (isAnnotation(annotation)) {
        getObservableMaker(annotation)({
          target: target,
          key: key,
        })
      }
    }
    return target
  }
  function model(target) {
    var annotations = Object.keys(target || {}).reduce(function (buf, key) {
      var descriptor = Object.getOwnPropertyDescriptor(target, key)
      if (descriptor && descriptor.get) {
        buf[key] = observable.computed
      } else if (isFn(target[key])) {
        buf[key] = action
      } else {
        buf[key] = observable
      }
      return buf
    }, {})
    return define(target, annotations)
  }

  var autorun = function (tracker, name) {
    if (name === void 0) {
      name = 'AutoRun'
    }
    var reaction = function () {
      if (!isFn(tracker)) return
      if (reaction._boundary > 0) return
      if (ReactionStack.indexOf(reaction) === -1) {
        releaseBindingReactions(reaction)
        try {
          batchStart()
          ReactionStack.push(reaction)
          tracker()
        } finally {
          ReactionStack.pop()
          reaction._boundary++
          batchEnd()
          reaction._boundary = 0
          reaction._memos.cursor = 0
          reaction._effects.cursor = 0
        }
      }
    }
    var cleanRefs = function () {
      reaction._memos = {
        queue: [],
        cursor: 0,
      }
      reaction._effects = {
        queue: [],
        cursor: 0,
      }
    }
    reaction._boundary = 0
    reaction._name = name
    cleanRefs()
    reaction()
    return function () {
      disposeBindingReactions(reaction)
      disposeEffects(reaction)
      cleanRefs()
    }
  }
  autorun.memo = function (callback, dependencies) {
    if (!isFn(callback)) return
    var current = ReactionStack[ReactionStack.length - 1]
    if (!current || !current._memos)
      throw new Error('autorun.memo must used in autorun function body.')
    var deps = toArray(dependencies || [])
    var id = current._memos.cursor++
    var old = current._memos.queue[id]
    if (!old || hasDepsChange(deps, old.deps)) {
      var value = callback()
      current._memos.queue[id] = {
        value: value,
        deps: deps,
      }
      return value
    }
    return old.value
  }
  autorun.effect = function (callback, dependencies) {
    if (!isFn(callback)) return
    var current = ReactionStack[ReactionStack.length - 1]
    if (!current || !current._effects)
      throw new Error('autorun.effect must used in autorun function body.')
    var effects = current._effects
    var deps = toArray(dependencies || [{}])
    var id = effects.cursor++
    var old = effects.queue[id]
    if (!old || hasDepsChange(deps, old.deps)) {
      Promise.resolve(0).then(function () {
        if (current._disposed) return
        var dispose = callback()
        if (isFn(dispose)) {
          effects.queue[id].dispose = dispose
        }
      })
      effects.queue[id] = {
        deps: deps,
      }
    }
  }
  var reaction = function (tracker, subscriber, options) {
    var realOptions = __assign({ name: 'Reaction' }, options)
    var value = {}
    var dirtyCheck = function () {
      if (isFn(realOptions.equals))
        return !realOptions.equals(value.oldValue, value.currentValue)
      return value.oldValue !== value.currentValue
    }
    var fireAction = function () {
      try {
        untrackStart()
        batchStart()
        if (isFn(subscriber)) subscriber(value.currentValue, value.oldValue)
      } finally {
        batchEnd()
        untrackEnd()
      }
    }
    var reaction = function () {
      if (ReactionStack.indexOf(reaction) === -1) {
        releaseBindingReactions(reaction)
        try {
          ReactionStack.push(reaction)
          value.currentValue = tracker()
        } finally {
          ReactionStack.pop()
        }
      }
    }
    reaction._scheduler = function (looping) {
      looping()
      if (dirtyCheck()) fireAction()
      value.oldValue = value.currentValue
    }
    reaction._name = realOptions.name
    reaction()
    value.oldValue = value.currentValue
    if (realOptions.fireImmediately) {
      fireAction()
    }
    return function () {
      disposeBindingReactions(reaction)
    }
  }

  var Tracker = /** @class */ (function () {
    function Tracker(scheduler, name) {
      var _this = this
      if (name === void 0) {
        name = 'TrackerReaction'
      }
      this.track = function (tracker) {
        if (!isFn(tracker)) return _this.results
        if (_this.track._boundary > 0) return
        if (ReactionStack.indexOf(_this.track) === -1) {
          releaseBindingReactions(_this.track)
          try {
            batchStart()
            ReactionStack.push(_this.track)
            _this.results = tracker()
          } finally {
            ReactionStack.pop()
            _this.track._boundary++
            batchEnd()
            _this.track._boundary = 0
          }
        }
        return _this.results
      }
      this.dispose = function () {
        disposeBindingReactions(_this.track)
      }
      this.track._scheduler = function (callback) {
        if (_this.track._boundary === 0) _this.dispose()
        if (isFn(callback)) scheduler(callback)
      }
      this.track._name = name
      this.track._boundary = 0
    }
    return Tracker
  })()

  var observe = function (target, observer, deep) {
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

  exports.DataChange = DataChange
  exports.DataNode = DataNode
  exports.Tracker = Tracker
  exports.action = action
  exports.autorun = autorun
  exports.batch = batch
  exports.buildDataTree = buildDataTree
  exports.contains = contains
  exports.define = define
  exports.hasCollected = hasCollected
  exports.isAnnotation = isAnnotation
  exports.isObservable = isObservable
  exports.isSupportObservable = isSupportObservable
  exports.markObservable = markObservable
  exports.markRaw = markRaw
  exports.model = model
  exports.observable = observable
  exports.observe = observe
  exports.raw = raw
  exports.reaction = reaction
  exports.toJS = toJS
  exports.untracked = untracked

  Object.defineProperty(exports, '__esModule', { value: true })
})
//# sourceMappingURL=formily.reactive.umd.development.js.map
