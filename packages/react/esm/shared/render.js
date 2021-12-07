import React from 'react'
import { createPortal } from 'react-dom'
import { globalThisPolyfill } from '@formily/shared'
var env = {
  portalDOM: null,
}
export var render = function (element) {
  if (globalThisPolyfill['document']) {
    env.portalDOM =
      env.portalDOM || globalThisPolyfill['document'].createElement('div')
    return createPortal(element, env.portalDOM)
  } else {
    return React.createElement('template', {}, element)
  }
}
//# sourceMappingURL=render.js.map
