import { FormPath, isFn, toArr } from '@formily/shared'
import { autorun, reaction, batch } from '@formily/reactive'
import { LifeCycleTypes } from '../types'
import { createEffectHook, useEffectForm } from '../shared/effective'
import { onFormUnmount } from './onFormEffects'
function createFieldEffect(type) {
  return createEffectHook(type, function (field, form) {
    return function (pattern, callback) {
      if (FormPath.parse(pattern).matchAliasGroup(field.address, field.path)) {
        batch(function () {
          callback(field, form)
        })
      }
    }
  })
}
var _onFieldInit = createFieldEffect(LifeCycleTypes.ON_FIELD_INIT)
export var onFieldMount = createFieldEffect(LifeCycleTypes.ON_FIELD_MOUNT)
export var onFieldUnmount = createFieldEffect(LifeCycleTypes.ON_FIELD_UNMOUNT)
export var onFieldValueChange = createFieldEffect(
  LifeCycleTypes.ON_FIELD_VALUE_CHANGE
)
export var onFieldInitialValueChange = createFieldEffect(
  LifeCycleTypes.ON_FIELD_INITIAL_VALUE_CHANGE
)
export var onFieldInputValueChange = createFieldEffect(
  LifeCycleTypes.ON_FIELD_INPUT_VALUE_CHANGE
)
export var onFieldValidateStart = createFieldEffect(
  LifeCycleTypes.ON_FIELD_VALIDATE_START
)
export var onFieldValidateEnd = createFieldEffect(
  LifeCycleTypes.ON_FIELD_VALIDATE_END
)
export var onFieldValidating = createFieldEffect(
  LifeCycleTypes.ON_FIELD_VALIDATING
)
export var onFieldValidateFailed = createFieldEffect(
  LifeCycleTypes.ON_FIELD_VALIDATE_FAILED
)
export var onFieldValidateSuccess = createFieldEffect(
  LifeCycleTypes.ON_FIELD_VALIDATE_SUCCESS
)
export var onFieldSubmit = createFieldEffect(LifeCycleTypes.ON_FIELD_SUBMIT)
export var onFieldSubmitStart = createFieldEffect(
  LifeCycleTypes.ON_FIELD_SUBMIT_START
)
export var onFieldSubmitEnd = createFieldEffect(
  LifeCycleTypes.ON_FIELD_SUBMIT_END
)
export var onFieldSubmitValidateStart = createFieldEffect(
  LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_START
)
export var onFieldSubmitValidateEnd = createFieldEffect(
  LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_END
)
export var onFieldSubmitSuccess = createFieldEffect(
  LifeCycleTypes.ON_FIELD_SUBMIT_SUCCESS
)
export var onFieldSubmitFailed = createFieldEffect(
  LifeCycleTypes.ON_FIELD_SUBMIT_FAILED
)
export var onFieldSubmitValidateSuccess = createFieldEffect(
  LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_SUCCESS
)
export var onFieldSubmitValidateFailed = createFieldEffect(
  LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_FAILED
)
export var onFieldReset = createFieldEffect(LifeCycleTypes.ON_FIELD_RESET)
export var onFieldLoading = createFieldEffect(LifeCycleTypes.ON_FIELD_LOADING)
export function onFieldInit(pattern, callback) {
  var form = useEffectForm()
  var count = form.query(pattern).reduce(function (count, field) {
    callback(field, form)
    return count + 1
  }, 0)
  if (count === 0) {
    _onFieldInit(pattern, callback)
  }
}
export function onFieldReact(pattern, callback) {
  var disposers = []
  onFieldInit(pattern, function (field, form) {
    disposers.push(
      autorun(function () {
        if (isFn(callback)) callback(field, form)
      })
    )
  })
  onFormUnmount(function () {
    disposers.forEach(function (dispose) {
      dispose()
    })
  })
}
export function onFieldChange(pattern, watches, callback) {
  if (isFn(watches)) {
    callback = watches
    watches = ['value']
  } else {
    watches = watches || ['value']
  }
  var disposers = []
  onFieldInit(pattern, function (field, form) {
    if (isFn(callback)) callback(field, form)
    disposers.push(
      reaction(
        function () {
          return toArr(watches).map(function (key) {
            return field[key]
          })
        },
        function () {
          if (isFn(callback)) callback(field, form)
        }
      )
    )
  })
  onFormUnmount(function () {
    disposers.forEach(function (dispose) {
      dispose()
    })
  })
}
//# sourceMappingURL=onFieldEffects.js.map
