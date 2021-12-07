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
import { merge } from '@formily/shared'
import { h } from '@formily/vue'
import { isVue2, defineComponent } from 'vue-demi'
export var transformComponent = function (tag, transformRules, defaultProps) {
  if (isVue2) {
    return defineComponent({
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
            data.attrs = merge(defaultProps, data.attrs)
          }
          return h(tag, data, slots)
        }
      },
    })
  } else {
    return defineComponent({
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
            data = merge(defaultProps, data)
          }
          return h(tag, data, slots)
        }
      },
    })
  }
}
//# sourceMappingURL=transform-component.js.map
