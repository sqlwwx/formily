import { inject, ref } from 'vue-demi'
import { FormSymbol } from '../shared/context'
export var useForm = function () {
  var form = inject(FormSymbol, ref())
  return form
}
//# sourceMappingURL=useForm.js.map
