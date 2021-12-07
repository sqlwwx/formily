;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('react-is'))
    : typeof define === 'function' && define.amd
    ? define('formily.reactive-react', ['exports', 'react-is'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        ((global.Formily = global.Formily || {}),
        (global.Formily.ReactiveReact = {}))
      ))
})(this, function (exports) {
  'use strict'

  ;(function () {
    const env = { NODE_ENV: 'development' }
    try {
      if (process) {
        process.env = Object.assign({}, process.env)
        Object.assign(process.env, env)
        return
      }
    } catch (e) {} // avoid ReferenceError: process is not defined
    globalThis.process = { env: env }
  })()

  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

  var __assign = function () {
    __assign =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }

  function __read(o, n) {
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

  const _global_ReactIs = ReactIs

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true,
  }
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true,
  }
  var FORWARD_REF_STATICS = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
  }
  var MEMO_STATICS = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true,
  }
  var TYPE_STATICS = {}
  TYPE_STATICS[_global_ReactIs.ForwardRef] = FORWARD_REF_STATICS
  TYPE_STATICS[_global_ReactIs.Memo] = MEMO_STATICS

  function getStatics(component) {
    // React v16.11 and below
    if (_global_ReactIs.isMemo(component)) {
      return MEMO_STATICS
    } // React v16.12 and above

    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS
  }

  var defineProperty = Object.defineProperty
  var getOwnPropertyNames = Object.getOwnPropertyNames
  var getOwnPropertySymbols = Object.getOwnPropertySymbols
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
  var getPrototypeOf = Object.getPrototypeOf
  var objectPrototype = Object.prototype
  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
      // don't hoist over string (html) components
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent)

        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist)
        }
      }

      var keys = getOwnPropertyNames(sourceComponent)

      if (getOwnPropertySymbols) {
        keys = keys.concat(getOwnPropertySymbols(sourceComponent))
      }

      var targetStatics = getStatics(targetComponent)
      var sourceStatics = getStatics(sourceComponent)

      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i]

        if (
          !KNOWN_STATICS[key] &&
          !(blacklist && blacklist[key]) &&
          !(sourceStatics && sourceStatics[key]) &&
          !(targetStatics && targetStatics[key])
        ) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key)

          try {
            // Avoid failures from read-only properties
            defineProperty(targetComponent, key, descriptor)
          } catch (e) {}
        }
      }
    }

    return targetComponent
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics

  /* istanbul ignore next */
  function globalSelf() {
    try {
      if (typeof self !== 'undefined') {
        return self
      }
    } catch (e) {}
    try {
      if (typeof window !== 'undefined') {
        return window
      }
    } catch (e) {}
    try {
      if (typeof global !== 'undefined') {
        return global
      }
    } catch (e) {}
    return Function('return this')()
  }
  var globalThisPolyfill = globalSelf()

  var registry =
    globalThisPolyfill['FinalizationRegistry'] &&
    new globalThisPolyfill['FinalizationRegistry'](function (token) {
      var _a
      return (_a =
        token === null || token === void 0 ? void 0 : token.clean) === null ||
        _a === void 0
        ? void 0
        : _a.call(token)
    })
  var GarbageCollector = /** @class */ (function () {
    function GarbageCollector(clean, expireTime) {
      if (expireTime === void 0) {
        expireTime = 10000
      }
      this.token = {
        clean: clean,
      }
      this.expireTime = expireTime
    }
    GarbageCollector.prototype.open = function (target) {
      var _this = this
      if (registry) {
        registry.register(target, this.token, this.token)
      } else {
        this.request = setTimeout(function () {
          var _a, _b
          ;(_b =
            (_a = _this.token) === null || _a === void 0
              ? void 0
              : _a.clean) === null || _b === void 0
            ? void 0
            : _b.call(_a)
        }, this.expireTime)
      }
    }
    GarbageCollector.prototype.close = function () {
      if (registry) {
        registry.unregister(this.token)
      } else {
        clearTimeout(this.request)
      }
    }
    return GarbageCollector
  })()

  var immediate = function (callback) {
    var disposed = false
    Promise.resolve(0).then(function () {
      if (disposed) {
        disposed = false
        return
      }
      callback()
    })
    return function () {
      disposed = true
    }
  }

  var useDidUpdate = function (callback) {
    var request = React.useRef(null)
    request.current = immediate(callback)
    React.useLayoutEffect(function () {
      request.current()
      callback()
    })
  }

  var EMPTY_ARRAY = []
  var RENDER_COUNT = { value: 0 }
  var RENDER_QUEUE = new Set()
  function useForceUpdate() {
    var _a = __read(React.useState([]), 2),
      setState = _a[1]
    var unMountRef = React.useRef(false)
    React.useEffect(function () {
      unMountRef.current = false
      return function () {
        unMountRef.current = true
      }
    }, EMPTY_ARRAY)
    var update = React.useCallback(function () {
      if (unMountRef.current) return
      setState([])
    }, EMPTY_ARRAY)
    var scheduler = React.useCallback(function () {
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

  var ObjectToBeRetainedByReact = /** @class */ (function () {
    function ObjectToBeRetainedByReact() {}
    return ObjectToBeRetainedByReact
  })()
  function objectToBeRetainedByReactFactory() {
    return new ObjectToBeRetainedByReact()
  }
  var useObserver = function (view, options) {
    var forceUpdate = useForceUpdate()
    var unMountRef = React.useRef(false)
    var trackerRef = React.useRef(null)
    var gcRef = React.useRef()
    var _a = __read(React.useState(objectToBeRetainedByReactFactory), 1),
      objectRetainedByReact = _a[0]
    if (!trackerRef.current) {
      trackerRef.current = new Formily.Reactive.Tracker(
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

  function observer(component, options) {
    var realOptions = __assign({ forwardRef: false }, options)
    var wrappedComponent = realOptions.forwardRef
      ? React.forwardRef(function (props, ref) {
          return useObserver(function () {
            return component(__assign(__assign({}, props), { ref: ref }))
          }, realOptions)
        })
      : function (props) {
          return useObserver(function () {
            return component(props)
          }, realOptions)
        }
    var memoComponent = React.memo(wrappedComponent)
    hoistNonReactStatics_cjs(memoComponent, component)
    if (realOptions.displayName) {
      memoComponent.displayName = realOptions.displayName
    }
    return memoComponent
  }
  var Observer = observer(function (props) {
    var children =
      typeof props.children === 'function' ? props.children() : props.children
    return React.createElement(React.Fragment, {}, children)
  })

  exports.Observer = Observer
  exports.observer = observer

  Object.defineProperty(exports, '__esModule', { value: true })
})
//# sourceMappingURL=formily.reactive-react.umd.development.js.map
