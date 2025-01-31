import { inject, Ref, ref } from 'vue-demi'
import { Form } from '@formily-x/core'
import { FormSymbol } from '../shared/context'

export const useForm = (): Ref<Form> => {
  const form = inject(FormSymbol, ref())
  return form
}
