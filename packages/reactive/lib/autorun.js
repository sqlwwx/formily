'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.reaction = exports.autorun = void 0
var reaction_1 = require('./reaction')
var checkers_1 = require('./checkers')
var environment_1 = require('./environment')
var array_1 = require('./array')
var autorun = function (tracker, name) {
  if (name === void 0) {
    name = 'AutoRun'
  }
  var reaction = function () {
    if (!(0, checkers_1.isFn)(tracker)) return
    if (reaction._boundary > 0) return
    if (environment_1.ReactionStack.indexOf(reaction) === -1) {
      ;(0, reaction_1.releaseBindingReactions)(reaction)
      try {
        ;(0, reaction_1.batchStart)()
        environment_1.ReactionStack.push(reaction)
        tracker()
      } finally {
        environment_1.ReactionStack.pop()
        reaction._boundary++
        ;(0, reaction_1.batchEnd)()
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
    ;(0, reaction_1.disposeBindingReactions)(reaction)
    ;(0, reaction_1.disposeEffects)(reaction)
    cleanRefs()
  }
}
exports.autorun = autorun
exports.autorun.memo = function (callback, dependencies) {
  if (!(0, checkers_1.isFn)(callback)) return
  var current =
    environment_1.ReactionStack[environment_1.ReactionStack.length - 1]
  if (!current || !current._memos)
    throw new Error('autorun.memo must used in autorun function body.')
  var deps = (0, array_1.toArray)(dependencies || [])
  var id = current._memos.cursor++
  var old = current._memos.queue[id]
  if (!old || (0, reaction_1.hasDepsChange)(deps, old.deps)) {
    var value = callback()
    current._memos.queue[id] = {
      value: value,
      deps: deps,
    }
    return value
  }
  return old.value
}
exports.autorun.effect = function (callback, dependencies) {
  if (!(0, checkers_1.isFn)(callback)) return
  var current =
    environment_1.ReactionStack[environment_1.ReactionStack.length - 1]
  if (!current || !current._effects)
    throw new Error('autorun.effect must used in autorun function body.')
  var effects = current._effects
  var deps = (0, array_1.toArray)(dependencies || [{}])
  var id = effects.cursor++
  var old = effects.queue[id]
  if (!old || (0, reaction_1.hasDepsChange)(deps, old.deps)) {
    Promise.resolve(0).then(function () {
      if (current._disposed) return
      var dispose = callback()
      if ((0, checkers_1.isFn)(dispose)) {
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
    if ((0, checkers_1.isFn)(realOptions.equals))
      return !realOptions.equals(value.oldValue, value.currentValue)
    return value.oldValue !== value.currentValue
  }
  var fireAction = function () {
    try {
      ;(0, reaction_1.untrackStart)()
      ;(0, reaction_1.batchStart)()
      if ((0, checkers_1.isFn)(subscriber))
        subscriber(value.currentValue, value.oldValue)
    } finally {
      ;(0, reaction_1.batchEnd)()
      ;(0, reaction_1.untrackEnd)()
    }
  }
  var reaction = function () {
    if (environment_1.ReactionStack.indexOf(reaction) === -1) {
      ;(0, reaction_1.releaseBindingReactions)(reaction)
      try {
        environment_1.ReactionStack.push(reaction)
        value.currentValue = tracker()
      } finally {
        environment_1.ReactionStack.pop()
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
    ;(0, reaction_1.disposeBindingReactions)(reaction)
  }
}
exports.reaction = reaction
//# sourceMappingURL=autorun.js.map
