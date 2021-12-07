;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define('formily.reactive-vue', ['exports'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        ((global.Formily = global.Formily || {}),
        (global.Formily.ReactiveVue = {}))
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

  function install(_vue) {
    _vue = _vue || Vue
    if (_vue && !_vue['__composition_api_installed__'])
      Vue.use(VueCompositionAPI)
  }

  install(Vue)
  var Vue2 = Vue
  Vue.version

  /**VCA-EXPORTS**/
  VueCompositionAPI.EffectScope
  VueCompositionAPI.computed
  VueCompositionAPI.createApp
  VueCompositionAPI.createRef
  VueCompositionAPI.customRef
  VueCompositionAPI.defineAsyncComponent
  VueCompositionAPI.defineComponent
  VueCompositionAPI.del
  VueCompositionAPI.effectScope
  VueCompositionAPI.getCurrentInstance
  VueCompositionAPI.getCurrentScope
  VueCompositionAPI.h
  VueCompositionAPI.inject
  VueCompositionAPI.isRaw
  VueCompositionAPI.isReactive
  VueCompositionAPI.isReadonly
  VueCompositionAPI.isRef
  VueCompositionAPI.markRaw
  VueCompositionAPI.nextTick
  VueCompositionAPI.onActivated
  VueCompositionAPI.onBeforeMount
  VueCompositionAPI.onBeforeUnmount
  VueCompositionAPI.onBeforeUpdate
  VueCompositionAPI.onDeactivated
  VueCompositionAPI.onErrorCaptured
  VueCompositionAPI.onMounted
  VueCompositionAPI.onScopeDispose
  VueCompositionAPI.onServerPrefetch
  VueCompositionAPI.onUnmounted
  VueCompositionAPI.onUpdated
  VueCompositionAPI.provide
  VueCompositionAPI.proxyRefs
  VueCompositionAPI.reactive
  VueCompositionAPI.readonly
  VueCompositionAPI.ref
  VueCompositionAPI.set
  VueCompositionAPI.shallowReactive
  VueCompositionAPI.shallowReadonly
  VueCompositionAPI.shallowRef
  VueCompositionAPI.toRaw
  VueCompositionAPI.toRef
  VueCompositionAPI.toRefs
  VueCompositionAPI.triggerRef
  VueCompositionAPI.unref
  VueCompositionAPI.useAttrs
  VueCompositionAPI.useCSSModule
  VueCompositionAPI.useCssModule
  VueCompositionAPI.useSlots
  VueCompositionAPI.warn
  VueCompositionAPI.watch
  VueCompositionAPI.watchEffect
  VueCompositionAPI.watchPostEffect
  VueCompositionAPI.watchSyncEffect
  /**VCA-EXPORTS**/

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

  // https://github.com/mobxjs/mobx-vue/blob/master/src/collectData.ts
  /**
   * @author Kuitos
   * @homepage https://github.com/kuitos/
   * @since 2018-06-08 10:16
   */

  function collectData(vm, data) {
    var dataDefinition =
      typeof data === 'function' ? data.call(vm, vm) : data || {}
    var filteredData = Object.keys(dataDefinition).reduce(function (
      result,
      field
    ) {
      var value = dataDefinition[field]
      if (Formily.Reactive.isObservable(value)) {
        Object.defineProperty(vm, field, {
          configurable: true,
          get: function () {
            return value
          },
          set: function () {},
        })
      } else {
        result[field] = value
      }
      return result
    },
    {})
    return filteredData
  }

  var noop = function () {}
  var disposerSymbol = Symbol('disposerSymbol')
  function observer$1(Component, observerOptions) {
    var name =
      (observerOptions === null || observerOptions === void 0
        ? void 0
        : observerOptions.name) ||
      Component.name ||
      Component._componentTag ||
      (Component.constructor && Component.constructor.name) ||
      '<component>'
    var originalOptions =
      typeof Component === 'object' ? Component : Component.options
    // To not mutate the original component options, we need to construct a new one
    var dataDefinition = originalOptions.data
    var options = __assign(__assign({ name: name }, originalOptions), {
      data: function (vm) {
        return collectData(vm || this, dataDefinition)
      },
      // overrider the cached constructor to avoid extending skip
      // @see https://github.com/vuejs/vue/blob/6cc070063bd211229dff5108c99f7d11b6778550/src/core/global-api/extend.js#L24
      _Ctor: {},
    })
    // we couldn't use the Component as super class when Component was a VueClass, that will invoke the lifecycle twice after we called Component.extend
    var superProto =
      typeof Component === 'function' &&
      Object.getPrototypeOf(Component.prototype)
    var Super = superProto instanceof Vue2 ? superProto.constructor : Vue2
    var ExtendedComponent = Super.extend(options)
    var _a = ExtendedComponent.prototype,
      $mount = _a.$mount,
      $destroy = _a.$destroy
    ExtendedComponent.prototype.$mount = function () {
      var _this = this
      var args = []
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
      }
      var mounted = false
      this[disposerSymbol] = noop
      var nativeRenderOfVue
      var reactiveRender = function () {
        tracker.track(function () {
          if (!mounted) {
            $mount.apply(_this, args)
            mounted = true
            nativeRenderOfVue = _this._watcher.getter
            // rewrite the native render method of vue with our reactive tracker render
            // thus if component updated by vue watcher, we could re track and collect dependencies by @formily/reactive
            _this._watcher.getter = reactiveRender
          } else {
            nativeRenderOfVue.call(_this, _this)
          }
        })
        return _this
      }
      var tracker = new Formily.Reactive.Tracker(reactiveRender)
      this[disposerSymbol] = tracker.dispose
      return reactiveRender()
    }
    ExtendedComponent.prototype.$destroy = function () {
      this[disposerSymbol]()
      $destroy.apply(this)
    }
    var extendedComponentNamePropertyDescriptor =
      Object.getOwnPropertyDescriptor(ExtendedComponent, 'name') || {}
    if (extendedComponentNamePropertyDescriptor.configurable === true) {
      Object.defineProperty(ExtendedComponent, 'name', {
        writable: false,
        value: name,
        enumerable: false,
        configurable: false,
      })
    }
    return ExtendedComponent
  }

  /* istanbul ignore next */
  var useObserver = function () {}

  function observer(baseComponent, options) {
    {
      return observer$1(baseComponent, options)
    }
  }

  exports.collectData = collectData
  exports.observer = observer
  exports.useObserver = useObserver

  Object.defineProperty(exports, '__esModule', { value: true })
})
//# sourceMappingURL=formily.reactive-vue.umd.development.js.map
