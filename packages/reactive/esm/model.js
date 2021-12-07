import { isFn } from './checkers'
import { buildDataTree } from './tree'
import { observable } from './observable'
import { getObservableMaker } from './internals'
import { isObservable, isAnnotation, isSupportObservable } from './externals'
import { action } from './action'
import { ProxyRaw, RawProxy } from './environment'
export function define(target, annotations) {
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
export function model(target) {
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
//# sourceMappingURL=model.js.map
