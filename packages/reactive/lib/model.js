'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.model = exports.define = void 0
var checkers_1 = require('./checkers')
var tree_1 = require('./tree')
var observable_1 = require('./observable')
var internals_1 = require('./internals')
var externals_1 = require('./externals')
var action_1 = require('./action')
var environment_1 = require('./environment')
function define(target, annotations) {
  if ((0, externals_1.isObservable)(target)) return target
  if (!(0, externals_1.isSupportObservable)(target)) return target
  ;(0, tree_1.buildDataTree)(undefined, undefined, target)
  environment_1.ProxyRaw.set(target, target)
  environment_1.RawProxy.set(target, target)
  for (var key in annotations) {
    var annotation = annotations[key]
    if ((0, externals_1.isAnnotation)(annotation)) {
      ;(0, internals_1.getObservableMaker)(annotation)({
        target: target,
        key: key,
      })
    }
  }
  return target
}
exports.define = define
function model(target) {
  var annotations = Object.keys(target || {}).reduce(function (buf, key) {
    var descriptor = Object.getOwnPropertyDescriptor(target, key)
    if (descriptor && descriptor.get) {
      buf[key] = observable_1.observable.computed
    } else if ((0, checkers_1.isFn)(target[key])) {
      buf[key] = action_1.action
    } else {
      buf[key] = observable_1.observable
    }
    return buf
  }, {})
  return define(target, annotations)
}
exports.model = model
//# sourceMappingURL=model.js.map
