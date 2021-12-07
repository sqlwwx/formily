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
import { useCallback, useEffect, useRef, useState } from 'react'
import { useDidUpdate } from './useDidUpdate'
var EMPTY_ARRAY = []
var RENDER_COUNT = { value: 0 }
var RENDER_QUEUE = new Set()
export function useForceUpdate() {
  var _a = __read(useState([]), 2),
    setState = _a[1]
  var unMountRef = useRef(false)
  useEffect(function () {
    unMountRef.current = false
    return function () {
      unMountRef.current = true
    }
  }, EMPTY_ARRAY)
  var update = useCallback(function () {
    if (unMountRef.current) return
    setState([])
  }, EMPTY_ARRAY)
  var scheduler = useCallback(function () {
    if (RENDER_COUNT.value === 0) {
      update()
    } else {
      RENDER_QUEUE.add(update)
    }
  }, EMPTY_ARRAY)
  RENDER_COUNT.value++
  useDidUpdate(function () {
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
//# sourceMappingURL=useForceUpdate.js.map
