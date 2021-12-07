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
import React from 'react'
import { Tracker } from '@formily/reactive'
import { GarbageCollector } from '../shared'
import { useForceUpdate } from './useForceUpdate'
var ObjectToBeRetainedByReact = /** @class */ (function () {
  function ObjectToBeRetainedByReact() {}
  return ObjectToBeRetainedByReact
})()
function objectToBeRetainedByReactFactory() {
  return new ObjectToBeRetainedByReact()
}
export var useObserver = function (view, options) {
  var forceUpdate = useForceUpdate()
  var unMountRef = React.useRef(false)
  var trackerRef = React.useRef(null)
  var gcRef = React.useRef()
  var _a = __read(React.useState(objectToBeRetainedByReactFactory), 1),
    objectRetainedByReact = _a[0]
  if (!trackerRef.current) {
    trackerRef.current = new Tracker(
      function () {
        if (
          typeof (options === null || options === void 0
            ? void 0
            : options.scheduler) === 'function'
        ) {
          options.scheduler(forceUpdate)
        } else {
          forceUpdate()
        }
      },
      options === null || options === void 0 ? void 0 : options.displayName
    )
  }
  //StrictMode/ConcurrentMode会导致组件无法正确触发UnMount，所以只能自己做垃圾回收
  if (!gcRef.current) {
    gcRef.current = new GarbageCollector(function () {
      if (trackerRef.current) {
        trackerRef.current.dispose()
      }
    })
    gcRef.current.open(objectRetainedByReact)
  }
  React.useEffect(function () {
    unMountRef.current = false
    gcRef.current.close()
    return function () {
      unMountRef.current = true
      if (trackerRef.current) {
        trackerRef.current.dispose()
        trackerRef.current = null
      }
    }
  }, [])
  return trackerRef.current.track(view)
}
//# sourceMappingURL=useObserver.js.map
