'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.FragmentComponent = exports.Fragment = void 0
var vue_frag_1 = __importDefault(require('vue-frag'))
var vue_demi_1 = require('vue-demi')
exports.Fragment = '#fragment'
var FragmentComponent
exports.FragmentComponent = FragmentComponent
if (vue_demi_1.isVue2) {
  exports.FragmentComponent = FragmentComponent = {
    name: 'Fragment',
    directives: {
      frag: vue_frag_1.default,
    },
    render: function (h) {
      var _a, _b
      var vm = this
      return h(
        'div',
        {
          directives: [
            {
              name: 'frag',
            },
          ],
        },
        (_b =
          (_a = vm === null || vm === void 0 ? void 0 : vm.$scopedSlots) ===
            null || _a === void 0
            ? void 0
            : _a.default) === null || _b === void 0
          ? void 0
          : _b.call(_a, vm.$attrs)
      )
    },
  }
} else {
  /* istanbul ignore next */
  exports.FragmentComponent = FragmentComponent = (0,
  vue_demi_1.defineComponent)({
    name: 'Fragment',
    setup: function (props, _a) {
      var slots = _a.slots,
        attrs = _a.attrs
      return function () {
        var _a
        return (_a =
          slots === null || slots === void 0 ? void 0 : slots.default) ===
          null || _a === void 0
          ? void 0
          : _a.call(slots, attrs)
      }
    },
  })
}
//# sourceMappingURL=fragment.js.map
