import { defineComponent, onBeforeUnmount } from '@vue/composition-api'
import { h, Fragment } from '@formily/vue'
var PortalMap = new Map()
export var createPortalProvider = function (id) {
  var Portal = defineComponent({
    name: 'ProtalProvider',
    props: {
      id: {
        type: [String, Symbol],
        default: id,
      },
    },
    setup: function (props) {
      onBeforeUnmount(function () {
        var id = props.id
        if (id && PortalMap.has(id)) {
          PortalMap.delete(id)
        }
      })
    },
    render: function () {
      var id = this.id
      if (id && !PortalMap.has(id)) {
        PortalMap.set(id, this)
      }
      return h(Fragment, {}, this.$scopedSlots)
    },
  })
  return Portal
}
export function getProtalContext(id) {
  return PortalMap.get(id)
}
//# sourceMappingURL=portal.js.map
