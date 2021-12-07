'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useFormEffects = void 0
var vue_demi_1 = require('vue-demi')
var shared_1 = require('@formily/shared')
var useForm_1 = require('./useForm')
var useFormEffects = function (effects) {
  var formRef = (0, useForm_1.useForm)()
  var id = (0, shared_1.uid)()
  formRef.value.addEffects(id, effects)
  ;(0, vue_demi_1.onBeforeUnmount)(function () {
    formRef.value.removeEffects(id)
  })
}
exports.useFormEffects = useFormEffects
//# sourceMappingURL=useFormEffects.js.map
