import { isObjectField } from '@formily/core'
import { computed } from 'vue-demi'
import { useField } from './useField'
import { useForm } from './useForm'
export var useParentForm = function () {
  var field = useField()
  var form = useForm()
  var findObjectParent = function (field) {
    if (!field) return form.value
    if (isObjectField(field)) return field
    return findObjectParent(
      field === null || field === void 0 ? void 0 : field.parent
    )
  }
  return computed(function () {
    return findObjectParent(field.value)
  })
}
//# sourceMappingURL=useParentForm.js.map
