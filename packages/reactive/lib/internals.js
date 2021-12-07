'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.createBoundaryAnnotation =
  exports.createBindFunction =
  exports.createBoundaryFunction =
  exports.getObservableMaker =
  exports.createAnnotation =
  exports.createObservable =
    void 0
var checkers_1 = require('./checkers')
var environment_1 = require('./environment')
var handlers_1 = require('./handlers')
var tree_1 = require('./tree')
var externals_1 = require('./externals')
var createNormalProxy = function (target, shallow) {
  var proxy = new Proxy(target, handlers_1.baseHandlers)
  environment_1.ProxyRaw.set(proxy, target)
  if (shallow) {
    environment_1.RawShallowProxy.set(target, proxy)
  } else {
    environment_1.RawProxy.set(target, proxy)
  }
  return proxy
}
var createCollectionProxy = function (target, shallow) {
  var proxy = new Proxy(target, handlers_1.collectionHandlers)
  environment_1.ProxyRaw.set(proxy, target)
  if (shallow) {
    environment_1.RawShallowProxy.set(target, proxy)
  } else {
    environment_1.RawProxy.set(target, proxy)
  }
  return proxy
}
var createShallowProxy = function (target) {
  if ((0, checkers_1.isNormalType)(target))
    return createNormalProxy(target, true)
  if ((0, checkers_1.isCollectionType)(target))
    return createCollectionProxy(target, true)
  return target
}
var createObservable = function (target, key, value, shallow) {
  if (typeof value !== 'object') return value
  var raw = environment_1.ProxyRaw.get(value)
  if (!!raw) {
    var node = environment_1.RawNode.get(raw)
    node.key = key
    return value
  }
  if (!(0, externals_1.isSupportObservable)(value)) return value
  if (target) {
    var parentRaw = environment_1.ProxyRaw.get(target) || target
    var isShallowParent = environment_1.RawShallowProxy.get(parentRaw)
    if (isShallowParent) return value
  }
  ;(0, tree_1.buildDataTree)(target, key, value)
  if (shallow) return createShallowProxy(value)
  if ((0, checkers_1.isNormalType)(value)) return createNormalProxy(value)
  if ((0, checkers_1.isCollectionType)(value))
    return createCollectionProxy(value)
  return value
}
exports.createObservable = createObservable
var createAnnotation = function (maker) {
  var annotation = function (target) {
    return maker({ value: target })
  }
  if ((0, checkers_1.isFn)(maker)) {
    annotation[environment_1.MakeObservableSymbol] = maker
  }
  return annotation
}
exports.createAnnotation = createAnnotation
var getObservableMaker = function (target) {
  if (target[environment_1.MakeObservableSymbol]) {
    if (
      !target[environment_1.MakeObservableSymbol][
        environment_1.MakeObservableSymbol
      ]
    ) {
      return target[environment_1.MakeObservableSymbol]
    }
    return (0, exports.getObservableMaker)(
      target[environment_1.MakeObservableSymbol]
    )
  }
}
exports.getObservableMaker = getObservableMaker
var createBoundaryFunction = function (start, end) {
  function boundary(fn) {
    var results
    try {
      start()
      if ((0, checkers_1.isFn)(fn)) {
        results = fn()
      }
    } finally {
      end()
    }
    return results
  }
  boundary.bound = (0, exports.createBindFunction)(boundary)
  return boundary
}
exports.createBoundaryFunction = createBoundaryFunction
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
exports.createBindFunction = createBindFunction
var createBoundaryAnnotation = function (start, end) {
  var boundary = (0, exports.createBoundaryFunction)(start, end)
  var annotation = (0, exports.createAnnotation)(function (_a) {
    var target = _a.target,
      key = _a.key
    target[key] = boundary.bound(target[key], target)
    return target
  })
  boundary[environment_1.MakeObservableSymbol] = annotation
  boundary.bound[environment_1.MakeObservableSymbol] = annotation
  return boundary
}
exports.createBoundaryAnnotation = createBoundaryAnnotation
//# sourceMappingURL=internals.js.map
