import { useLayoutEffect, useMemo } from 'react'
import { uid } from '@formily/shared'
import { useForm } from './useForm'
export var useFormEffects = function (effects) {
  var form = useForm()
  var ref = useMemo(function () {
    var id = uid()
    form.addEffects(id, effects)
    var request = setTimeout(function () {
      form.removeEffects(id)
    }, 100)
    return { id: id, request: request }
  }, [])
  useLayoutEffect(function () {
    clearTimeout(ref.request)
    return function () {
      form.removeEffects(ref.id)
    }
  }, [])
}
//# sourceMappingURL=useFormEffects.js.map
