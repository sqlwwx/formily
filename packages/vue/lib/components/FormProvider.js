'use strict'
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
var context_1 = require('../shared/context')
var useAttach_1 = require('../hooks/useAttach')
var useInjectionCleaner_1 = require('../hooks/useInjectionCleaner')
var h_1 = __importDefault(require('../shared/h'))
var fragment_1 = require('../shared/fragment')
exports.default = (0, vue_demi_1.defineComponent)({
  name: 'FormProvider',
  inheritAttrs: false,
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  setup: function (props, _a) {
    var attrs = _a.attrs,
      slots = _a.slots
    var getForm = function () {
      return props.form
    }
    var _b = __read((0, useAttach_1.useAttach)(getForm()), 2),
      formRef = _b[0],
      checker = _b[1]
    ;(0, vue_demi_1.watch)(
      function () {
        return props.form
      },
      function () {
        return (formRef.value = checker(getForm()))
      }
    )
    ;(0, vue_demi_1.provide)(context_1.FormSymbol, formRef)
    ;(0, useInjectionCleaner_1.useInjectionCleaner)([
      context_1.FieldSymbol,
      context_1.SchemaMarkupSymbol,
      context_1.SchemaSymbol,
      context_1.SchemaExpressionScopeSymbol,
      context_1.SchemaOptionsSymbol,
    ])
    return function () {
      return (0, h_1.default)(fragment_1.Fragment, { attrs: attrs }, slots)
    }
  },
})
//# sourceMappingURL=FormProvider.js.map
