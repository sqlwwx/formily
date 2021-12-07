'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.onFieldChange =
  exports.onFieldReact =
  exports.onFieldInit =
  exports.onFieldLoading =
  exports.onFieldReset =
  exports.onFieldSubmitValidateFailed =
  exports.onFieldSubmitValidateSuccess =
  exports.onFieldSubmitFailed =
  exports.onFieldSubmitSuccess =
  exports.onFieldSubmitValidateEnd =
  exports.onFieldSubmitValidateStart =
  exports.onFieldSubmitEnd =
  exports.onFieldSubmitStart =
  exports.onFieldSubmit =
  exports.onFieldValidateSuccess =
  exports.onFieldValidateFailed =
  exports.onFieldValidating =
  exports.onFieldValidateEnd =
  exports.onFieldValidateStart =
  exports.onFieldInputValueChange =
  exports.onFieldInitialValueChange =
  exports.onFieldValueChange =
  exports.onFieldUnmount =
  exports.onFieldMount =
    void 0
var shared_1 = require('@formily/shared')
var reactive_1 = require('@formily/reactive')
var types_1 = require('../types')
var effective_1 = require('../shared/effective')
var onFormEffects_1 = require('./onFormEffects')
function createFieldEffect(type) {
  return (0, effective_1.createEffectHook)(type, function (field, form) {
    return function (pattern, callback) {
      if (
        shared_1.FormPath.parse(pattern).matchAliasGroup(
          field.address,
          field.path
        )
      ) {
        ;(0, reactive_1.batch)(function () {
          callback(field, form)
        })
      }
    }
  })
}
var _onFieldInit = createFieldEffect(types_1.LifeCycleTypes.ON_FIELD_INIT)
exports.onFieldMount = createFieldEffect(types_1.LifeCycleTypes.ON_FIELD_MOUNT)
exports.onFieldUnmount = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_UNMOUNT
)
exports.onFieldValueChange = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_VALUE_CHANGE
)
exports.onFieldInitialValueChange = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_INITIAL_VALUE_CHANGE
)
exports.onFieldInputValueChange = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_INPUT_VALUE_CHANGE
)
exports.onFieldValidateStart = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_VALIDATE_START
)
exports.onFieldValidateEnd = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_VALIDATE_END
)
exports.onFieldValidating = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_VALIDATING
)
exports.onFieldValidateFailed = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_VALIDATE_FAILED
)
exports.onFieldValidateSuccess = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_VALIDATE_SUCCESS
)
exports.onFieldSubmit = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_SUBMIT
)
exports.onFieldSubmitStart = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_SUBMIT_START
)
exports.onFieldSubmitEnd = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_SUBMIT_END
)
exports.onFieldSubmitValidateStart = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_START
)
exports.onFieldSubmitValidateEnd = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_END
)
exports.onFieldSubmitSuccess = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_SUBMIT_SUCCESS
)
exports.onFieldSubmitFailed = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_SUBMIT_FAILED
)
exports.onFieldSubmitValidateSuccess = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_SUCCESS
)
exports.onFieldSubmitValidateFailed = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_FAILED
)
exports.onFieldReset = createFieldEffect(types_1.LifeCycleTypes.ON_FIELD_RESET)
exports.onFieldLoading = createFieldEffect(
  types_1.LifeCycleTypes.ON_FIELD_LOADING
)
function onFieldInit(pattern, callback) {
  var form = (0, effective_1.useEffectForm)()
  var count = form.query(pattern).reduce(function (count, field) {
    callback(field, form)
    return count + 1
  }, 0)
  if (count === 0) {
    _onFieldInit(pattern, callback)
  }
}
exports.onFieldInit = onFieldInit
function onFieldReact(pattern, callback) {
  var disposers = []
  onFieldInit(pattern, function (field, form) {
    disposers.push(
      (0, reactive_1.autorun)(function () {
        if ((0, shared_1.isFn)(callback)) callback(field, form)
      })
    )
  })
  ;(0, onFormEffects_1.onFormUnmount)(function () {
    disposers.forEach(function (dispose) {
      dispose()
    })
  })
}
exports.onFieldReact = onFieldReact
function onFieldChange(pattern, watches, callback) {
  if ((0, shared_1.isFn)(watches)) {
    callback = watches
    watches = ['value']
  } else {
    watches = watches || ['value']
  }
  var disposers = []
  onFieldInit(pattern, function (field, form) {
    if ((0, shared_1.isFn)(callback)) callback(field, form)
    disposers.push(
      (0, reactive_1.reaction)(
        function () {
          return (0, shared_1.toArr)(watches).map(function (key) {
            return field[key]
          })
        },
        function () {
          if ((0, shared_1.isFn)(callback)) callback(field, form)
        }
      )
    )
  })
  ;(0, onFormEffects_1.onFormUnmount)(function () {
    disposers.forEach(function (dispose) {
      dispose()
    })
  })
}
exports.onFieldChange = onFieldChange
//# sourceMappingURL=onFieldEffects.js.map
