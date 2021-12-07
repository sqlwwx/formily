'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useParentForm = void 0
var core_1 = require('@formily/core')
var vue_demi_1 = require('vue-demi')
var useField_1 = require('./useField')
var useForm_1 = require('./useForm')
var useParentForm = function () {
  var field = (0, useField_1.useField)()
  var form = (0, useForm_1.useForm)()
  var findObjectParent = function (field) {
    if (!field) return form.value
    if ((0, core_1.isObjectField)(field)) return field
    return findObjectParent(
      field === null || field === void 0 ? void 0 : field.parent
    )
  }
  return (0, vue_demi_1.computed)(function () {
    return findObjectParent(field.value)
  })
}
exports.useParentForm = useParentForm
//# sourceMappingURL=useParentForm.js.map
