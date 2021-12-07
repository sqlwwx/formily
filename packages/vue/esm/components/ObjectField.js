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
import { provide, defineComponent, computed, watch } from 'vue-demi'
import { useField, useForm } from '../hooks'
import { useAttach } from '../hooks/useAttach'
import ReactiveField from './ReactiveField'
import { observer } from '@formily/reactive-vue'
import { FieldSymbol } from '../shared/context'
import h from '../shared/h'
import { getRawComponent } from '../utils/getRawComponent'
export default observer(
  defineComponent({
    name: 'ObjectField',
    props: {
      name: {},
      title: {},
      description: {},
      value: {},
      initialValue: {},
      basePath: {},
      decorator: Array,
      component: Array,
      display: String,
      pattern: String,
      required: {
        type: Boolean,
        default: undefined,
      },
      validateFirst: {
        type: Boolean,
        default: undefined,
      },
      hidden: {
        type: Boolean,
        default: undefined,
      },
      visible: {
        type: Boolean,
        default: undefined,
      },
      editable: {
        type: Boolean,
        default: undefined,
      },
      disabled: {
        type: Boolean,
        default: undefined,
      },
      readOnly: {
        type: Boolean,
        default: undefined,
      },
      readPretty: {
        type: Boolean,
        default: undefined,
      },
      dataSource: {},
      validator: {},
      reactions: [Array, Function],
    },
    setup: function (props, _a) {
      var slots = _a.slots
      var formRef = useForm()
      var parentRef = useField()
      var basePath = computed(function () {
        var _a
        return props.basePath !== undefined
          ? props.basePath
          : (_a =
              parentRef === null || parentRef === void 0
                ? void 0
                : parentRef.value) === null || _a === void 0
          ? void 0
          : _a.address
      })
      var createField = function () {
        return formRef.value.createObjectField(
          __assign(
            __assign(__assign({}, props), { basePath: basePath.value }),
            getRawComponent(props)
          )
        )
      }
      var _b = __read(useAttach(createField()), 2),
        fieldRef = _b[0],
        checker = _b[1]
      watch(
        function () {
          return props
        },
        function () {
          return (fieldRef.value = checker(createField()))
        },
        { deep: true }
      )
      watch([formRef, parentRef], function () {
        return (fieldRef.value = checker(createField()))
      })
      provide(FieldSymbol, fieldRef)
      return function () {
        var field = fieldRef.value
        var componentData = {
          props: {
            field: field,
          },
        }
        var children = __assign({}, slots)
        if (slots.default) {
          children.default = function () {
            return slots.default({
              field: field,
              form: field.form,
            })
          }
        }
        return h(ReactiveField, componentData, children)
      }
    },
  })
)
//# sourceMappingURL=ObjectField.js.map
