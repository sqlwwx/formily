'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.onFormReact =
  exports.onFormLoading =
  exports.onFormGraphChange =
  exports.onFormValidateEnd =
  exports.onFormValidateFailed =
  exports.onFormValidateSuccess =
  exports.onFormValidateStart =
  exports.onFormSubmitValidateEnd =
  exports.onFormSubmitValidateFailed =
  exports.onFormSubmitValidateSuccess =
  exports.onFormSubmitValidateStart =
  exports.onFormSubmitFailed =
  exports.onFormSubmitSuccess =
  exports.onFormSubmitEnd =
  exports.onFormSubmitStart =
  exports.onFormReset =
  exports.onFormSubmit =
  exports.onFormInputChange =
  exports.onFormInitialValuesChange =
  exports.onFormValuesChange =
  exports.onFormUnmount =
  exports.onFormMount =
  exports.onFormInit =
    void 0
var reactive_1 = require('@formily/reactive')
var types_1 = require('../types')
var effective_1 = require('../shared/effective')
function createFormEffect(type) {
  return (0, effective_1.createEffectHook)(type, function (form) {
    return function (callback) {
      ;(0, reactive_1.batch)(function () {
        callback(form)
      })
    }
  })
}
exports.onFormInit = createFormEffect(types_1.LifeCycleTypes.ON_FORM_INIT)
exports.onFormMount = createFormEffect(types_1.LifeCycleTypes.ON_FORM_MOUNT)
exports.onFormUnmount = createFormEffect(types_1.LifeCycleTypes.ON_FORM_UNMOUNT)
exports.onFormValuesChange = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_VALUES_CHANGE
)
exports.onFormInitialValuesChange = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_INITIAL_VALUES_CHANGE
)
exports.onFormInputChange = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_INPUT_CHANGE
)
exports.onFormSubmit = createFormEffect(types_1.LifeCycleTypes.ON_FORM_SUBMIT)
exports.onFormReset = createFormEffect(types_1.LifeCycleTypes.ON_FORM_RESET)
exports.onFormSubmitStart = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_SUBMIT_START
)
exports.onFormSubmitEnd = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_SUBMIT_END
)
exports.onFormSubmitSuccess = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_SUBMIT_SUCCESS
)
exports.onFormSubmitFailed = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_SUBMIT_FAILED
)
exports.onFormSubmitValidateStart = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_START
)
exports.onFormSubmitValidateSuccess = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_SUCCESS
)
exports.onFormSubmitValidateFailed = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_FAILED
)
exports.onFormSubmitValidateEnd = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_END
)
exports.onFormValidateStart = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_VALIDATE_START
)
exports.onFormValidateSuccess = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_VALIDATE_SUCCESS
)
exports.onFormValidateFailed = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_VALIDATE_FAILED
)
exports.onFormValidateEnd = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_VALIDATE_END
)
exports.onFormGraphChange = createFormEffect(
  types_1.LifeCycleTypes.ON_FORM_GRAPH_CHANGE
)
exports.onFormLoading = createFormEffect(types_1.LifeCycleTypes.ON_FORM_LOADING)
function onFormReact(callback) {
  var dispose = null
  ;(0, exports.onFormInit)(function (form) {
    dispose = (0, reactive_1.autorun)(function () {
      callback(form)
    })
  })
  ;(0, exports.onFormUnmount)(function () {
    dispose()
  })
}
exports.onFormReact = onFormReact
//# sourceMappingURL=onFormEffects.js.map
