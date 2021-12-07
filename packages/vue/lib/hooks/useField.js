'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useField = void 0
var vue_demi_1 = require('vue-demi')
var context_1 = require('../shared/context')
var useField = function () {
  return (0, vue_demi_1.inject)(context_1.FieldSymbol, (0, vue_demi_1.ref)())
}
exports.useField = useField
//# sourceMappingURL=useField.js.map
