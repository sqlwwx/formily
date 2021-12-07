'use strict'
// https://github.com/mobxjs/mobx-vue/blob/master/src/observer.ts
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Observer = exports.observer = void 0
/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2018-05-22 16:39
 */
var reactive_1 = require('@formily/reactive')
var collectData_1 = __importDefault(require('./collectData'))
var vue_demi_1 = require('vue-demi')
var noop = function () {}
var disposerSymbol = Symbol('disposerSymbol')
function observer(Component, observerOptions) {
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
      return (0, collectData_1.default)(vm || this, dataDefinition)
    },
    // overrider the cached constructor to avoid extending skip
    // @see https://github.com/vuejs/vue/blob/6cc070063bd211229dff5108c99f7d11b6778550/src/core/global-api/extend.js#L24
    _Ctor: {},
  })
  // we couldn't use the Component as super class when Component was a VueClass, that will invoke the lifecycle twice after we called Component.extend
  var superProto =
    typeof Component === 'function' &&
    Object.getPrototypeOf(Component.prototype)
  var Super =
    superProto instanceof vue_demi_1.Vue2
      ? superProto.constructor
      : vue_demi_1.Vue2
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
    var tracker = new reactive_1.Tracker(reactiveRender)
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
exports.observer = observer
exports.Observer = observer
//# sourceMappingURL=observerInVue2.js.map
