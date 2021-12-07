'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.render = void 0
var react_1 = __importDefault(require('react'))
var react_dom_1 = require('react-dom')
var shared_1 = require('@formily/shared')
var env = {
  portalDOM: null,
}
var render = function (element) {
  if (shared_1.globalThisPolyfill['document']) {
    env.portalDOM =
      env.portalDOM ||
      shared_1.globalThisPolyfill['document'].createElement('div')
    return (0, react_dom_1.createPortal)(element, env.portalDOM)
  } else {
    return react_1.default.createElement('template', {}, element)
  }
}
exports.render = render
//# sourceMappingURL=render.js.map
