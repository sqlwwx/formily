import React, { Fragment } from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import { observable } from '@formily/reactive'
import { Observer } from '@formily/react'
var PortalMap = observable(new Map())
export var createPortalProvider = function (id) {
  var Portal = function (props) {
    if (props.id && !PortalMap.has(props.id)) {
      PortalMap.set(props.id, null)
    }
    return React.createElement(
      Fragment,
      null,
      props.children,
      React.createElement(Observer, null, function () {
        if (!props.id) return null
        var portal = PortalMap.get(props.id)
        if (portal) return createPortal(portal, document.body)
        return null
      })
    )
  }
  Portal.defaultProps = {
    id: id,
  }
  return Portal
}
export function createPortalRoot(host, id) {
  function render(renderer) {
    if (PortalMap.has(id)) {
      PortalMap.set(
        id,
        renderer === null || renderer === void 0 ? void 0 : renderer()
      )
    } else if (host) {
      ReactDOM.render(
        React.createElement(
          Fragment,
          null,
          renderer === null || renderer === void 0 ? void 0 : renderer()
        ),
        host
      )
    }
  }
  function unmount() {
    var _a
    if (PortalMap.has(id)) {
      PortalMap.set(id, null)
    } else if (host) {
      ReactDOM.unmountComponentAtNode(host)
      ;(_a = host.parentNode) === null || _a === void 0
        ? void 0
        : _a.removeChild(host)
    }
  }
  return {
    render: render,
    unmount: unmount,
  }
}
//# sourceMappingURL=portal.js.map
