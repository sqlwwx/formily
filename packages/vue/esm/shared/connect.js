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
import { isVue2, markRaw, defineComponent } from 'vue-demi'
import { isFn, isStr, FormPath, each } from '@formily/shared'
import { isVoidField } from '@formily/core'
import { observer } from '@formily/reactive-vue'
import { useField } from '../hooks/useField'
import h from './h'
export function mapProps() {
  var args = []
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i]
  }
  return function (target) {
    return observer(
      defineComponent({
        // listeners is needed for vue2
        setup: function (props, _a) {
          var attrs = _a.attrs,
            slots = _a.slots,
            listeners = _a.listeners
          var fieldRef = useField()
          var transform = function (input, field) {
            return args.reduce(function (props, mapper) {
              if (isFn(mapper)) {
                props = Object.assign(props, mapper(props, field))
              } else {
                each(mapper, function (to, extract) {
                  var extractValue = FormPath.getIn(field, extract)
                  var targetValue = isStr(to) ? to : extract
                  if (extract === 'value') {
                    if (to !== extract) {
                      delete props['value']
                    }
                  }
                  FormPath.setIn(props, targetValue, extractValue)
                })
              }
              return props
            }, input)
          }
          return function () {
            var newAttrs = fieldRef.value
              ? transform(__assign({}, attrs), fieldRef.value)
              : __assign({}, attrs)
            return h(
              target,
              {
                attrs: __assign({}, newAttrs),
                on: listeners,
              },
              slots
            )
          }
        },
      })
    )
  }
}
export function mapReadPretty(component, readPrettyProps) {
  return function (target) {
    return observer(
      defineComponent({
        setup: function (props, _a) {
          var attrs = _a.attrs,
            slots = _a.slots,
            listeners = _a.listeners
          var fieldRef = useField()
          return function () {
            var field = fieldRef.value
            return h(
              field && !isVoidField(field) && field.pattern === 'readPretty'
                ? component
                : target,
              {
                attrs: __assign(__assign({}, readPrettyProps), attrs),
                on: listeners,
              },
              slots
            )
          }
        },
      })
    )
  }
}
export function connect(target) {
  var args = []
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i]
  }
  var Component = args.reduce(function (target, mapper) {
    return mapper(target)
  }, target)
  /* istanbul ignore else */
  if (isVue2) {
    var functionalComponent = {
      functional: true,
      render: function (h, context) {
        return h(Component, context.data, context.children)
      },
    }
    return markRaw(functionalComponent)
  } else {
    var functionalComponent = defineComponent({
      setup: function (props, _a) {
        var attrs = _a.attrs,
          slots = _a.slots
        return function () {
          return h(Component, { props: props, attrs: attrs }, slots)
        }
      },
    })
    return markRaw(functionalComponent)
  }
}
//# sourceMappingURL=connect.js.map
