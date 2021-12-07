'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.collectData = exports.observer = void 0
var vue_demi_1 = require('vue-demi')
var observerInVue2_1 = require('./observerInVue2')
var observerInVue3_1 = require('./observerInVue3')
var collectData_1 = __importDefault(require('./collectData'))
exports.collectData = collectData_1.default
function observer(baseComponent, options) {
  if (vue_demi_1.isVue2) {
    return (0, observerInVue2_1.observer)(baseComponent, options)
  } else {
    return (0, observerInVue3_1.observer)(baseComponent, options)
  }
}
exports.observer = observer
//# sourceMappingURL=index.js.map
