'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useFormEffects = void 0
var react_1 = require('react')
var shared_1 = require('@formily/shared')
var useForm_1 = require('./useForm')
var useFormEffects = function (effects) {
  var form = (0, useForm_1.useForm)()
  var ref = (0, react_1.useMemo)(function () {
    var id = (0, shared_1.uid)()
    form.addEffects(id, effects)
    var request = setTimeout(function () {
      form.removeEffects(id)
    }, 100)
    return { id: id, request: request }
  }, [])
  ;(0, react_1.useLayoutEffect)(function () {
    clearTimeout(ref.request)
    return function () {
      form.removeEffects(ref.id)
    }
  }, [])
}
exports.useFormEffects = useFormEffects
//# sourceMappingURL=useFormEffects.js.map
