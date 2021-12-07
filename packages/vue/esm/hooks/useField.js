import { inject, ref } from 'vue-demi'
import { FieldSymbol } from '../shared/context'
export var useField = function () {
  return inject(FieldSymbol, ref())
}
//# sourceMappingURL=useField.js.map
