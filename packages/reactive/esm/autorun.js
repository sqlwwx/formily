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
import {
  batchEnd,
  batchStart,
  disposeBindingReactions,
  releaseBindingReactions,
  disposeEffects,
  hasDepsChange,
  untrackStart,
  untrackEnd,
} from './reaction'
import { isFn } from './checkers'
import { ReactionStack } from './environment'
import { toArray } from './array'
export var autorun = function (tracker, name) {
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
export var reaction = function (tracker, subscriber, options) {
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
//# sourceMappingURL=autorun.js.map
