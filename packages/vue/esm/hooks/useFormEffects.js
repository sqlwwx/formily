import { onBeforeUnmount } from 'vue-demi'
import { uid } from '@formily/shared'
import { useForm } from './useForm'
export var useFormEffects = function (effects) {
  var formRef = useForm()
  var id = uid()
  formRef.value.addEffects(id, effects)
  onBeforeUnmount(function () {
    formRef.value.removeEffects(id)
  })
}
//# sourceMappingURL=useFormEffects.js.map
