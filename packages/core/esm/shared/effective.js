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
import { isFn, isValid } from '@formily/shared'
import { LifeCycle } from '../models'
import { isForm } from './checkers'
import { GlobalState } from './constants'
export var createEffectHook = function (type, callback) {
  return function () {
    var args = []
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i]
    }
    if (GlobalState.effectStart) {
      GlobalState.lifecycles.push(
        new LifeCycle(type, function (payload, ctx) {
          if (isFn(callback)) {
            callback
              .apply(
                void 0,
                __spreadArray(
                  [payload, ctx],
                  __read(GlobalState.context),
                  false
                )
              )
              .apply(void 0, __spreadArray([], __read(args), false))
          }
        })
      )
    } else {
      throw new Error(
        'Effect hooks cannot be used in asynchronous function body'
      )
    }
  }
}
export var createEffectContext = function (defaultValue) {
  var index
  return {
    provide: function (value) {
      if (GlobalState.effectStart) {
        index = GlobalState.context.length
        GlobalState.context[index] = isValid(value) ? value : defaultValue
      } else {
        throw new Error(
          'Provide method cannot be used in asynchronous function body'
        )
      }
    },
    consume: function () {
      if (!GlobalState.effectStart) {
        throw new Error(
          'Consume method cannot be used in asynchronous function body'
        )
      }
      return GlobalState.context[index]
    },
  }
}
var FormEffectContext = createEffectContext()
export var useEffectForm = FormEffectContext.consume
export var runEffects = function (context) {
  var args = []
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i]
  }
  GlobalState.lifecycles = []
  GlobalState.context = []
  GlobalState.effectStart = true
  GlobalState.effectEnd = false
  if (isForm(context)) {
    FormEffectContext.provide(context)
  }
  args.forEach(function (effects) {
    if (isFn(effects)) {
      effects(context)
    }
  })
  GlobalState.context = []
  GlobalState.effectStart = false
  GlobalState.effectEnd = true
  return GlobalState.lifecycles
}
//# sourceMappingURL=effective.js.map
