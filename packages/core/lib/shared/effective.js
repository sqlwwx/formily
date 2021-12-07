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
Object.defineProperty(exports, '__esModule', { value: true })
exports.runEffects =
  exports.useEffectForm =
  exports.createEffectContext =
  exports.createEffectHook =
    void 0
var shared_1 = require('@formily/shared')
var models_1 = require('../models')
var checkers_1 = require('./checkers')
var constants_1 = require('./constants')
var createEffectHook = function (type, callback) {
  return function () {
    var args = []
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i]
    }
    if (constants_1.GlobalState.effectStart) {
      constants_1.GlobalState.lifecycles.push(
        new models_1.LifeCycle(type, function (payload, ctx) {
          if ((0, shared_1.isFn)(callback)) {
            callback
              .apply(
                void 0,
                __spreadArray(
                  [payload, ctx],
                  __read(constants_1.GlobalState.context),
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
exports.createEffectHook = createEffectHook
var createEffectContext = function (defaultValue) {
  var index
  return {
    provide: function (value) {
      if (constants_1.GlobalState.effectStart) {
        index = constants_1.GlobalState.context.length
        constants_1.GlobalState.context[index] = (0, shared_1.isValid)(value)
          ? value
          : defaultValue
      } else {
        throw new Error(
          'Provide method cannot be used in asynchronous function body'
        )
      }
    },
    consume: function () {
      if (!constants_1.GlobalState.effectStart) {
        throw new Error(
          'Consume method cannot be used in asynchronous function body'
        )
      }
      return constants_1.GlobalState.context[index]
    },
  }
}
exports.createEffectContext = createEffectContext
var FormEffectContext = (0, exports.createEffectContext)()
exports.useEffectForm = FormEffectContext.consume
var runEffects = function (context) {
  var args = []
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i]
  }
  constants_1.GlobalState.lifecycles = []
  constants_1.GlobalState.context = []
  constants_1.GlobalState.effectStart = true
  constants_1.GlobalState.effectEnd = false
  if ((0, checkers_1.isForm)(context)) {
    FormEffectContext.provide(context)
  }
  args.forEach(function (effects) {
    if ((0, shared_1.isFn)(effects)) {
      effects(context)
    }
  })
  constants_1.GlobalState.context = []
  constants_1.GlobalState.effectStart = false
  constants_1.GlobalState.effectEnd = true
  return constants_1.GlobalState.lifecycles
}
exports.runEffects = runEffects
//# sourceMappingURL=effective.js.map
