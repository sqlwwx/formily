'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useForm = void 0
var vue_demi_1 = require('vue-demi')
var context_1 = require('../shared/context')
var useForm = function () {
  var form = (0, vue_demi_1.inject)(context_1.FormSymbol, (0, vue_demi_1.ref)())
  return form
}
exports.useForm = useForm
//# sourceMappingURL=useForm.js.map
