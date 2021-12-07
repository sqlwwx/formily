'use strict'
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
Object.defineProperty(exports, '__esModule', { value: true })
exports.transformComponent = void 0
var shared_1 = require('@formily/shared')
var vue_1 = require('@formily/vue')
var vue_demi_1 = require('vue-demi')
var transformComponent = function (tag, transformRules, defaultProps) {
  if (vue_demi_1.isVue2) {
    return (0, vue_demi_1.defineComponent)({
      setup: function (props, _a) {
        var attrs = _a.attrs,
          slots = _a.slots,
          listeners = _a.listeners
        return function () {
          var data = {
            attrs: __assign({}, attrs),
            on: __assign({}, listeners),
          }
          if (transformRules) {
            var transformListeners_1 = transformRules
            Object.keys(transformListeners_1).forEach(function (extract) {
              if (data.on !== undefined) {
                data.on[transformListeners_1[extract]] = listeners[extract]
              }
            })
          }
          if (defaultProps) {
            data.attrs = (0, shared_1.merge)(defaultProps, data.attrs)
          }
          return (0, vue_1.h)(tag, data, slots)
        }
      },
    })
  } else {
    return (0, vue_demi_1.defineComponent)({
      setup: function (props, _a) {
        var attrs = _a.attrs,
          slots = _a.slots
        return function () {
          var data = __assign({}, attrs)
          if (transformRules) {
            var listeners_1 = transformRules
            Object.keys(listeners_1).forEach(function (extract) {
              var event = listeners_1[extract]
              data['on'.concat(event[0].toUpperCase()).concat(event.slice(1))] =
                attrs[
                  'on'.concat(extract[0].toUpperCase()).concat(extract.slice(1))
                ]
            })
          }
          if (defaultProps) {
            data = (0, shared_1.merge)(defaultProps, data)
          }
          return (0, vue_1.h)(tag, data, slots)
        }
      },
    })
  }
}
exports.transformComponent = transformComponent
//# sourceMappingURL=transform-component.js.map
