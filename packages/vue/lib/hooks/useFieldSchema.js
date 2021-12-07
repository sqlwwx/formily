'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useFieldSchema = void 0
var vue_demi_1 = require('vue-demi')
var context_1 = require('../shared/context')
var useFieldSchema = function () {
  return (0, vue_demi_1.inject)(context_1.SchemaSymbol, (0, vue_demi_1.ref)())
}
exports.useFieldSchema = useFieldSchema
//# sourceMappingURL=useFieldSchema.js.map
