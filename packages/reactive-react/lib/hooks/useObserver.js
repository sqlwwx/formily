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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.useObserver = void 0
var react_1 = __importDefault(require('react'))
var reactive_1 = require('@formily/reactive')
var shared_1 = require('../shared')
var useForceUpdate_1 = require('./useForceUpdate')
var ObjectToBeRetainedByReact = /** @class */ (function () {
  function ObjectToBeRetainedByReact() {}
  return ObjectToBeRetainedByReact
})()
function objectToBeRetainedByReactFactory() {
  return new ObjectToBeRetainedByReact()
}
var useObserver = function (view, options) {
  var forceUpdate = (0, useForceUpdate_1.useForceUpdate)()
  var unMountRef = react_1.default.useRef(false)
  var trackerRef = react_1.default.useRef(null)
  var gcRef = react_1.default.useRef()
  var _a = __read(
      react_1.default.useState(objectToBeRetainedByReactFactory),
      1
    ),
    objectRetainedByReact = _a[0]
  if (!trackerRef.current) {
    trackerRef.current = new reactive_1.Tracker(
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
    gcRef.current = new shared_1.GarbageCollector(function () {
      if (trackerRef.current) {
        trackerRef.current.dispose()
      }
    })
    gcRef.current.open(objectRetainedByReact)
  }
  react_1.default.useEffect(function () {
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
exports.useObserver = useObserver
//# sourceMappingURL=useObserver.js.map
