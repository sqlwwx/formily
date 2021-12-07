import frag from 'vue-frag'
import { isVue2, defineComponent } from 'vue-demi'
export var Fragment = '#fragment'
var FragmentComponent
if (isVue2) {
  FragmentComponent = {
    name: 'Fragment',
    directives: {
      frag: frag,
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
  FragmentComponent = defineComponent({
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
export { FragmentComponent }
//# sourceMappingURL=fragment.js.map
