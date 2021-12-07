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
Object.defineProperty(exports, '__esModule', { value: true })
exports.useForceUpdate = void 0
var react_1 = require('react')
var useDidUpdate_1 = require('./useDidUpdate')
var EMPTY_ARRAY = []
var RENDER_COUNT = { value: 0 }
var RENDER_QUEUE = new Set()
function useForceUpdate() {
  var _a = __read((0, react_1.useState)([]), 2),
    setState = _a[1]
  var unMountRef = (0, react_1.useRef)(false)
  ;(0, react_1.useEffect)(function () {
    unMountRef.current = false
    return function () {
      unMountRef.current = true
    }
  }, EMPTY_ARRAY)
  var update = (0, react_1.useCallback)(function () {
    if (unMountRef.current) return
    setState([])
  }, EMPTY_ARRAY)
  var scheduler = (0, react_1.useCallback)(function () {
    if (RENDER_COUNT.value === 0) {
      update()
    } else {
      RENDER_QUEUE.add(update)
    }
  }, EMPTY_ARRAY)
  RENDER_COUNT.value++
  ;(0, useDidUpdate_1.useDidUpdate)(function () {
    if (RENDER_COUNT.value > 0) {
      RENDER_COUNT.value--
    }
    if (RENDER_COUNT.value === 0) {
      RENDER_QUEUE.forEach(function (update) {
        RENDER_QUEUE.delete(update)
        update()
      })
    }
  })
  return scheduler
}
exports.useForceUpdate = useForceUpdate
//# sourceMappingURL=useForceUpdate.js.map
