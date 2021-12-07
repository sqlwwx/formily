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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var vue_demi_1 = require('vue-demi')
var hooks_1 = require('../hooks')
var useAttach_1 = require('../hooks/useAttach')
var ReactiveField_1 = __importDefault(require('./ReactiveField'))
var reactive_vue_1 = require('@formily/reactive-vue')
var context_1 = require('../shared/context')
var h_1 = __importDefault(require('../shared/h'))
var getRawComponent_1 = require('../utils/getRawComponent')
exports.default = (0, reactive_vue_1.observer)(
  (0, vue_demi_1.defineComponent)({
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
      var formRef = (0, hooks_1.useForm)()
      var parentRef = (0, hooks_1.useField)()
      var basePath = (0, vue_demi_1.computed)(function () {
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
            (0, getRawComponent_1.getRawComponent)(props)
          )
        )
      }
      var _b = __read((0, useAttach_1.useAttach)(createField()), 2),
        fieldRef = _b[0],
        checker = _b[1]
      ;(0, vue_demi_1.watch)(
        function () {
          return props
        },
        function () {
          return (fieldRef.value = checker(createField()))
        },
        { deep: true }
      )
      ;(0, vue_demi_1.watch)([formRef, parentRef], function () {
        return (fieldRef.value = checker(createField()))
      })
      ;(0, vue_demi_1.provide)(context_1.FieldSymbol, fieldRef)
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
        return (0, h_1.default)(
          ReactiveField_1.default,
          componentData,
          children
        )
      }
    },
  })
)
//# sourceMappingURL=ObjectField.js.map
