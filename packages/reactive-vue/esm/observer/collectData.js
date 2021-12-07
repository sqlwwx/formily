// https://github.com/mobxjs/mobx-vue/blob/master/src/collectData.ts
/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2018-06-08 10:16
 */
import { isObservable } from '@formily/reactive'
export default function collectData(vm, data) {
  var dataDefinition =
    typeof data === 'function' ? data.call(vm, vm) : data || {}
  var filteredData = Object.keys(dataDefinition).reduce(function (
    result,
    field
  ) {
    var value = dataDefinition[field]
    if (isObservable(value)) {
      Object.defineProperty(vm, field, {
        configurable: true,
        get: function () {
          return value
        },
        set: function () {},
      })
    } else {
      result[field] = value
    }
    return result
  },
  {})
  return filteredData
}
//# sourceMappingURL=collectData.js.map
