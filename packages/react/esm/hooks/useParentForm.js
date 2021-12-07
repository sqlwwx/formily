import { isObjectField } from '@formily/core'
import { useField } from './useField'
import { useForm } from './useForm'
export var useParentForm = function () {
  var field = useField()
  var form = useForm()
  var findObjectParent = function (field) {
    if (!field) return form
    if (isObjectField(field)) return field
    return findObjectParent(
      field === null || field === void 0 ? void 0 : field.parent
    )
  }
  return findObjectParent(field)
}
//# sourceMappingURL=useParentForm.js.map
