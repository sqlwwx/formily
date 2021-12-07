import { autorun, batch } from '@formily/reactive'
import { LifeCycleTypes } from '../types'
import { createEffectHook } from '../shared/effective'
function createFormEffect(type) {
  return createEffectHook(type, function (form) {
    return function (callback) {
      batch(function () {
        callback(form)
      })
    }
  })
}
export var onFormInit = createFormEffect(LifeCycleTypes.ON_FORM_INIT)
export var onFormMount = createFormEffect(LifeCycleTypes.ON_FORM_MOUNT)
export var onFormUnmount = createFormEffect(LifeCycleTypes.ON_FORM_UNMOUNT)
export var onFormValuesChange = createFormEffect(
  LifeCycleTypes.ON_FORM_VALUES_CHANGE
)
export var onFormInitialValuesChange = createFormEffect(
  LifeCycleTypes.ON_FORM_INITIAL_VALUES_CHANGE
)
export var onFormInputChange = createFormEffect(
  LifeCycleTypes.ON_FORM_INPUT_CHANGE
)
export var onFormSubmit = createFormEffect(LifeCycleTypes.ON_FORM_SUBMIT)
export var onFormReset = createFormEffect(LifeCycleTypes.ON_FORM_RESET)
export var onFormSubmitStart = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_START
)
export var onFormSubmitEnd = createFormEffect(LifeCycleTypes.ON_FORM_SUBMIT_END)
export var onFormSubmitSuccess = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_SUCCESS
)
export var onFormSubmitFailed = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_FAILED
)
export var onFormSubmitValidateStart = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_START
)
export var onFormSubmitValidateSuccess = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_SUCCESS
)
export var onFormSubmitValidateFailed = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_FAILED
)
export var onFormSubmitValidateEnd = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_END
)
export var onFormValidateStart = createFormEffect(
  LifeCycleTypes.ON_FORM_VALIDATE_START
)
export var onFormValidateSuccess = createFormEffect(
  LifeCycleTypes.ON_FORM_VALIDATE_SUCCESS
)
export var onFormValidateFailed = createFormEffect(
  LifeCycleTypes.ON_FORM_VALIDATE_FAILED
)
export var onFormValidateEnd = createFormEffect(
  LifeCycleTypes.ON_FORM_VALIDATE_END
)
export var onFormGraphChange = createFormEffect(
  LifeCycleTypes.ON_FORM_GRAPH_CHANGE
)
export var onFormLoading = createFormEffect(LifeCycleTypes.ON_FORM_LOADING)
export function onFormReact(callback) {
  var dispose = null
  onFormInit(function (form) {
    dispose = autorun(function () {
      callback(form)
    })
  })
  onFormUnmount(function () {
    dispose()
  })
}
//# sourceMappingURL=onFormEffects.js.map
