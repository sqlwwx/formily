'use strict'
// https://github.com/mobxjs/mobx-vue/blob/master/src/collectData.ts
Object.defineProperty(exports, '__esModule', { value: true })
/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2018-06-08 10:16
 */
var reactive_1 = require('@formily/reactive')
function collectData(vm, data) {
  var dataDefinition =
    typeof data === 'function' ? data.call(vm, vm) : data || {}
  var filteredData = Object.keys(dataDefinition).reduce(function (
    result,
    field
  ) {
    var value = dataDefinition[field]
    if ((0, reactive_1.isObservable)(value)) {
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
exports.default = collectData
//# sourceMappingURL=collectData.js.map
