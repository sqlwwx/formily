'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.disposeEffects =
  exports.hasDepsChange =
  exports.executeBatchEndpoints =
  exports.executePendingReactions =
  exports.isUntracking =
  exports.isScopeBatching =
  exports.isBatching =
  exports.untrackEnd =
  exports.untrackStart =
  exports.batchScopeEnd =
  exports.batchScopeStart =
  exports.batchEnd =
  exports.batchStart =
  exports.disposeBindingReactions =
  exports.suspendComputedReactions =
  exports.releaseBindingReactions =
  exports.hasRunningReaction =
  exports.runReactionsFromTargetKey =
  exports.bindComputedReactions =
  exports.bindTargetKeyWithCurrentReaction =
    void 0
var checkers_1 = require('./checkers')
var array_1 = require('./array')
var environment_1 = require('./environment')
var ITERATION_KEY = Symbol('iteration key')
var addRawReactionsMap = function (target, key, reaction) {
  var reactionsMap = environment_1.RawReactionsMap.get(target)
  if (reactionsMap) {
    var reactions = reactionsMap.get(key)
    if (reactions) {
      reactions.add(reaction)
    } else {
      reactionsMap.set(key, new array_1.ArraySet([reaction]))
    }
    return reactionsMap
  } else {
    var reactionsMap_1 = new Map([[key, new array_1.ArraySet([reaction])]])
    environment_1.RawReactionsMap.set(target, reactionsMap_1)
    return reactionsMap_1
  }
}
var addReactionsMapToReaction = function (reaction, reactionsMap) {
  var bindSet = reaction._reactionsSet
  if (bindSet) {
    bindSet.add(reactionsMap)
  } else {
    reaction._reactionsSet = new array_1.ArraySet([reactionsMap])
  }
  return bindSet
}
var getReactionsFromTargetKey = function (target, key) {
  var reactionsMap = environment_1.RawReactionsMap.get(target)
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
  var prevUntrackCount = environment_1.UntrackCount.value
  environment_1.UntrackCount.value = 0
  for (var i = 0, len = reactions.length; i < len; i++) {
    var reaction = reactions[i]
    if (reaction._isComputed) {
      reaction._scheduler(reaction)
    } else if ((0, exports.isScopeBatching)()) {
      environment_1.PendingScopeReactions.add(reaction)
    } else if ((0, exports.isBatching)()) {
      environment_1.PendingReactions.add(reaction)
    } else {
      if ((0, checkers_1.isFn)(reaction._scheduler)) {
        reaction._scheduler(reaction)
      } else {
        reaction()
      }
    }
  }
  environment_1.UntrackCount.value = prevUntrackCount
}
var notifyObservers = function (operation) {
  environment_1.ObserverListeners.forEach(function (fn) {
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
  var current =
    environment_1.ReactionStack[environment_1.ReactionStack.length - 1]
  if ((0, exports.isUntracking)()) return
  if (current) {
    environment_1.DependencyCollected.value = true
    addReactionsMapToReaction(current, addRawReactionsMap(target, key, current))
  }
}
exports.bindTargetKeyWithCurrentReaction = bindTargetKeyWithCurrentReaction
var bindComputedReactions = function (reaction) {
  if ((0, checkers_1.isFn)(reaction)) {
    var current =
      environment_1.ReactionStack[environment_1.ReactionStack.length - 1]
    if (current) {
      var computes = current._computesSet
      if (computes) {
        computes.add(reaction)
      } else {
        current._computesSet = new array_1.ArraySet([reaction])
      }
    }
  }
}
exports.bindComputedReactions = bindComputedReactions
var runReactionsFromTargetKey = function (operation) {
  var key = operation.key,
    type = operation.type,
    target = operation.target,
    oldTarget = operation.oldTarget
  ;(0, exports.batchStart)()
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
  ;(0, exports.batchEnd)()
}
exports.runReactionsFromTargetKey = runReactionsFromTargetKey
var hasRunningReaction = function () {
  return environment_1.ReactionStack.length > 0
}
exports.hasRunningReaction = hasRunningReaction
var releaseBindingReactions = function (reaction) {
  var _a
  ;(_a = reaction._reactionsSet) === null || _a === void 0
    ? void 0
    : _a.forEach(function (reactionsMap) {
        reactionsMap.forEach(function (reactions) {
          reactions.delete(reaction)
        })
      })
  environment_1.PendingReactions.delete(reaction)
  environment_1.PendingScopeReactions.delete(reaction)
  delete reaction._reactionsSet
}
exports.releaseBindingReactions = releaseBindingReactions
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
          ;(0, exports.disposeBindingReactions)(reaction)
          reaction._dirty = true
        }
      })
}
exports.suspendComputedReactions = suspendComputedReactions
var disposeBindingReactions = function (reaction) {
  reaction._disposed = true
  ;(0, exports.releaseBindingReactions)(reaction)
  ;(0, exports.suspendComputedReactions)(reaction)
}
exports.disposeBindingReactions = disposeBindingReactions
var batchStart = function () {
  environment_1.BatchCount.value++
}
exports.batchStart = batchStart
var batchEnd = function () {
  environment_1.BatchCount.value--
  if (environment_1.BatchCount.value === 0) {
    var prevUntrackCount = environment_1.UntrackCount.value
    environment_1.UntrackCount.value = 0
    ;(0, exports.executePendingReactions)()
    ;(0, exports.executeBatchEndpoints)()
    environment_1.UntrackCount.value = prevUntrackCount
  }
}
exports.batchEnd = batchEnd
var batchScopeStart = function () {
  environment_1.BatchScope.value = true
}
exports.batchScopeStart = batchScopeStart
var batchScopeEnd = function () {
  var prevUntrackCount = environment_1.UntrackCount.value
  environment_1.BatchScope.value = false
  environment_1.UntrackCount.value = 0
  environment_1.PendingScopeReactions.forEachDelete(function (reaction) {
    if ((0, checkers_1.isFn)(reaction._scheduler)) {
      reaction._scheduler(reaction)
    } else {
      reaction()
    }
  })
  environment_1.UntrackCount.value = prevUntrackCount
}
exports.batchScopeEnd = batchScopeEnd
var untrackStart = function () {
  environment_1.UntrackCount.value++
}
exports.untrackStart = untrackStart
var untrackEnd = function () {
  environment_1.UntrackCount.value--
}
exports.untrackEnd = untrackEnd
var isBatching = function () {
  return environment_1.BatchCount.value > 0
}
exports.isBatching = isBatching
var isScopeBatching = function () {
  return environment_1.BatchScope.value
}
exports.isScopeBatching = isScopeBatching
var isUntracking = function () {
  return environment_1.UntrackCount.value > 0
}
exports.isUntracking = isUntracking
var executePendingReactions = function () {
  environment_1.PendingReactions.forEachDelete(function (reaction) {
    if ((0, checkers_1.isFn)(reaction._scheduler)) {
      reaction._scheduler(reaction)
    } else {
      reaction()
    }
  })
}
exports.executePendingReactions = executePendingReactions
var executeBatchEndpoints = function () {
  environment_1.BatchEndpoints.forEachDelete(function (callback) {
    callback()
  })
}
exports.executeBatchEndpoints = executeBatchEndpoints
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
exports.hasDepsChange = hasDepsChange
var disposeEffects = function (reaction) {
  if (reaction._effects) {
    try {
      ;(0, exports.batchStart)()
      reaction._effects.queue.forEach(function (item) {
        if (!item || !item.dispose) return
        item.dispose()
      })
    } finally {
      ;(0, exports.batchEnd)()
    }
  }
}
exports.disposeEffects = disposeEffects
//# sourceMappingURL=reaction.js.map
