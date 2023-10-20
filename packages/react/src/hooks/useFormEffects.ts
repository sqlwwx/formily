import { unstable_useCompatFactory } from '@formily-x/reactive-react'
import { Form } from '@formily-x/core'
import { uid } from '@formily-x/shared'
import { useForm } from './useForm'

export const useFormEffects = (effects?: (form: Form) => void) => {
  const form = useForm()
  unstable_useCompatFactory(() => {
    const id = uid()
    form.addEffects(id, effects)
    return {
      dispose() {
        form.removeEffects(id)
      },
    }
  })
}
