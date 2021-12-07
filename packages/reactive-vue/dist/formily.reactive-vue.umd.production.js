!(function (o, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define('formily.reactive-vue', ['exports'], e)
    : e(
        (((o =
          'undefined' != typeof globalThis ? globalThis : o || self).Formily =
          o.Formily || {}),
        (o.Formily.ReactiveVue = {}))
      )
})(this, function (o) {
  'use strict'
  var e
  !(function () {
    const o = { NODE_ENV: 'production' }
    try {
      if (process)
        return (
          (process.env = Object.assign({}, process.env)),
          void Object.assign(process.env, o)
        )
    } catch (o) {}
    globalThis.process = { env: o }
  })(),
    (e = (e = Vue) || Vue) &&
      !e.__composition_api_installed__ &&
      Vue.use(VueCompositionAPI)
  var t = Vue
  Vue.version,
    VueCompositionAPI.EffectScope,
    VueCompositionAPI.computed,
    VueCompositionAPI.createApp,
    VueCompositionAPI.createRef,
    VueCompositionAPI.customRef,
    VueCompositionAPI.defineAsyncComponent,
    VueCompositionAPI.defineComponent,
    VueCompositionAPI.del,
    VueCompositionAPI.effectScope,
    VueCompositionAPI.getCurrentInstance,
    VueCompositionAPI.getCurrentScope,
    VueCompositionAPI.h,
    VueCompositionAPI.inject,
    VueCompositionAPI.isRaw,
    VueCompositionAPI.isReactive,
    VueCompositionAPI.isReadonly,
    VueCompositionAPI.isRef,
    VueCompositionAPI.markRaw,
    VueCompositionAPI.nextTick,
    VueCompositionAPI.onActivated,
    VueCompositionAPI.onBeforeMount,
    VueCompositionAPI.onBeforeUnmount,
    VueCompositionAPI.onBeforeUpdate,
    VueCompositionAPI.onDeactivated,
    VueCompositionAPI.onErrorCaptured,
    VueCompositionAPI.onMounted,
    VueCompositionAPI.onScopeDispose,
    VueCompositionAPI.onServerPrefetch,
    VueCompositionAPI.onUnmounted,
    VueCompositionAPI.onUpdated,
    VueCompositionAPI.provide,
    VueCompositionAPI.proxyRefs,
    VueCompositionAPI.reactive,
    VueCompositionAPI.readonly,
    VueCompositionAPI.ref,
    VueCompositionAPI.set,
    VueCompositionAPI.shallowReactive,
    VueCompositionAPI.shallowReadonly,
    VueCompositionAPI.shallowRef,
    VueCompositionAPI.toRaw,
    VueCompositionAPI.toRef,
    VueCompositionAPI.toRefs,
    VueCompositionAPI.triggerRef,
    VueCompositionAPI.unref,
    VueCompositionAPI.useAttrs,
    VueCompositionAPI.useCSSModule,
    VueCompositionAPI.useCssModule,
    VueCompositionAPI.useSlots,
    VueCompositionAPI.warn,
    VueCompositionAPI.watch,
    VueCompositionAPI.watchEffect,
    VueCompositionAPI.watchPostEffect,
    VueCompositionAPI.watchSyncEffect,
    Vue
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
  var i = function () {
    return (
      (i =
        Object.assign ||
        function (o) {
          for (var e, t = 1, i = arguments.length; t < i; t++)
            for (var n in (e = arguments[t]))
              Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n])
          return o
        }),
      i.apply(this, arguments)
    )
  }
  function n(o, e) {
    var t = 'function' == typeof e ? e.call(o, o) : e || {}
    return Object.keys(t).reduce(function (e, i) {
      var n = t[i]
      return (
        Formily.Reactive.isObservable(n)
          ? Object.defineProperty(o, i, {
              configurable: !0,
              get: function () {
                return n
              },
              set: function () {},
            })
          : (e[i] = n),
        e
      )
    }, {})
  }
  var s = function () {},
    u = Symbol('disposerSymbol')
  ;(o.collectData = n),
    (o.observer = function (o, e) {
      return (function (o, e) {
        var r =
            (null == e ? void 0 : e.name) ||
            o.name ||
            o._componentTag ||
            (o.constructor && o.constructor.name) ||
            '<component>',
          p = 'object' == typeof o ? o : o.options,
          c = p.data,
          a = i(i({ name: r }, p), {
            data: function (o) {
              return n(o || this, c)
            },
            _Ctor: {},
          }),
          m = 'function' == typeof o && Object.getPrototypeOf(o.prototype),
          f = (m instanceof t ? m.constructor : t).extend(a),
          C = f.prototype,
          P = C.$mount,
          V = C.$destroy
        return (
          (f.prototype.$mount = function () {
            for (var o = this, e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            var i,
              n = !1
            this[u] = s
            var r = function () {
                return (
                  p.track(function () {
                    n
                      ? i.call(o, o)
                      : (P.apply(o, e),
                        (n = !0),
                        (i = o._watcher.getter),
                        (o._watcher.getter = r))
                  }),
                  o
                )
              },
              p = new Formily.Reactive.Tracker(r)
            return (this[u] = p.dispose), r()
          }),
          (f.prototype.$destroy = function () {
            this[u](), V.apply(this)
          }),
          !0 ===
            (Object.getOwnPropertyDescriptor(f, 'name') || {}).configurable &&
            Object.defineProperty(f, 'name', {
              writable: !1,
              value: r,
              enumerable: !1,
              configurable: !1,
            }),
          f
        )
      })(o, e)
    }),
    (o.useObserver = function () {}),
    Object.defineProperty(o, '__esModule', { value: !0 })
})
//# sourceMappingURL=formily.reactive-vue.umd.production.js.map
