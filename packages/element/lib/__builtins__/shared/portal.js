'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.getProtalContext = exports.createPortalProvider = void 0
var composition_api_1 = require('@vue/composition-api')
var vue_1 = require('@formily/vue')
var PortalMap = new Map()
var createPortalProvider = function (id) {
  var Portal = (0, composition_api_1.defineComponent)({
    name: 'ProtalProvider',
    props: {
      id: {
        type: [String, Symbol],
        default: id,
      },
    },
    setup: function (props) {
      ;(0, composition_api_1.onBeforeUnmount)(function () {
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
      return (0, vue_1.h)(vue_1.Fragment, {}, this.$scopedSlots)
    },
  })
  return Portal
}
exports.createPortalProvider = createPortalProvider
function getProtalContext(id) {
  return PortalMap.get(id)
}
exports.getProtalContext = getProtalContext
//# sourceMappingURL=portal.js.map
