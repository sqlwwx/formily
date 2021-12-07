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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var vue_demi_1 = require('vue-demi')
var reactive_vue_1 = require('@formily/reactive-vue')
var hooks_1 = require('../hooks')
var h_1 = __importDefault(require('../shared/h'))
var fragment_1 = require('../shared/fragment')
exports.default = (0, reactive_vue_1.observer)(
  (0, vue_demi_1.defineComponent)({
    name: 'FormConsumer',
    inheritAttrs: false,
    setup: function (props, _a) {
      var slots = _a.slots
      var formRef = (0, hooks_1.useForm)()
      return function () {
        var children = __assign({}, slots)
        if (slots.default) {
          children.default = function () {
            return slots.default({
              form: formRef.value,
            })
          }
        }
        return (0, h_1.default)(fragment_1.Fragment, {}, children)
      }
    },
  })
)
//# sourceMappingURL=FormConsumer.js.map
