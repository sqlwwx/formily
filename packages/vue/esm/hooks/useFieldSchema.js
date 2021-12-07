import { inject, ref } from 'vue-demi'
import { SchemaSymbol } from '../shared/context'
export var useFieldSchema = function () {
  return inject(SchemaSymbol, ref())
}
//# sourceMappingURL=useFieldSchema.js.map
