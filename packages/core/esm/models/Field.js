var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        )
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this
        }),
      g
    )
    function verb(n) {
      return function (v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
import { isValid, isEmpty, toArr } from '@formily/shared'
import { parseValidatorDescriptions } from '@formily/validator'
import {
  define,
  observable,
  reaction,
  batch,
  toJS,
  action,
} from '@formily/reactive'
import { LifeCycleTypes } from '../types'
import {
  updateFeedback,
  queryFeedbacks,
  allowAssignDefaultValue,
  queryFeedbackMessages,
  getValuesFromEvent,
  createReactions,
  createStateSetter,
  createStateGetter,
  isHTMLInputEvent,
  setValidatorRule,
  batchValidate,
  batchSubmit,
  batchReset,
  setValidating,
  setSubmitting,
  setLoading,
  validateSelf,
  modifySelf,
  getValidFieldDefaultValue,
  initializeStart,
  initializeEnd,
  createChildrenFeedbackFilter,
} from '../shared/internals'
import { BaseField } from './BaseField'
var Field = /** @class */ (function (_super) {
  __extends(Field, _super)
  function Field(address, props, form, designable) {
    var _this = _super.call(this) || this
    _this.displayName = 'Field'
    _this.caches = {}
    _this.requests = {}
    _this.setDataSource = function (dataSource) {
      _this.dataSource = dataSource
    }
    _this.setFeedback = function (feedback) {
      updateFeedback(_this, feedback)
    }
    _this.setSelfErrors = function (messages) {
      _this.selfErrors = messages
    }
    _this.setSelfWarnings = function (messages) {
      _this.selfWarnings = messages
    }
    _this.setSelfSuccesses = function (messages) {
      _this.selfSuccesses = messages
    }
    _this.setValidator = function (validator) {
      _this.validator = validator
    }
    _this.setValidatorRule = function (name, value) {
      setValidatorRule(_this, name, value)
    }
    _this.setRequired = function (required) {
      _this.required = required
    }
    _this.setValue = function (value) {
      _this.value = value
    }
    _this.setInitialValue = function (initialValue) {
      _this.initialValue = initialValue
    }
    _this.setLoading = function (loading) {
      setLoading(_this, loading)
    }
    _this.setValidating = function (validating) {
      setValidating(_this, validating)
    }
    _this.setSubmitting = function (submitting) {
      setSubmitting(_this, submitting)
    }
    _this.setState = createStateSetter(_this)
    _this.getState = createStateGetter(_this)
    _this.onInput = function () {
      var args = []
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
      }
      return __awaiter(_this, void 0, void 0, function () {
        var values, value
        var _a
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              if (
                (_a = args[0]) === null || _a === void 0 ? void 0 : _a.target
              ) {
                if (!isHTMLInputEvent(args[0])) return [2 /*return*/]
              }
              values = getValuesFromEvent(args)
              value = values[0]
              this.caches.inputting = true
              this.inputValue = value
              this.inputValues = values
              this.value = value
              this.modify()
              this.notify(LifeCycleTypes.ON_FIELD_INPUT_VALUE_CHANGE)
              this.notify(LifeCycleTypes.ON_FORM_INPUT_CHANGE, this.form)
              return [4 /*yield*/, validateSelf(this, 'onInput')]
            case 1:
              _b.sent()
              this.caches.inputting = false
              return [2 /*return*/]
          }
        })
      })
    }
    _this.onFocus = function () {
      var args = []
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
      }
      return __awaiter(_this, void 0, void 0, function () {
        var _a
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              if (
                (_a = args[0]) === null || _a === void 0 ? void 0 : _a.target
              ) {
                if (!isHTMLInputEvent(args[0], false)) return [2 /*return*/]
              }
              this.active = true
              this.visited = true
              return [4 /*yield*/, validateSelf(this, 'onFocus')]
            case 1:
              _b.sent()
              return [2 /*return*/]
          }
        })
      })
    }
    _this.onBlur = function () {
      var args = []
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
      }
      return __awaiter(_this, void 0, void 0, function () {
        var _a
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              if (
                (_a = args[0]) === null || _a === void 0 ? void 0 : _a.target
              ) {
                if (!isHTMLInputEvent(args[0], false)) return [2 /*return*/]
              }
              this.active = false
              return [4 /*yield*/, validateSelf(this, 'onBlur')]
            case 1:
              _b.sent()
              return [2 /*return*/]
          }
        })
      })
    }
    _this.validate = function (triggerType) {
      return batchValidate(_this, ''.concat(_this.address, '.**'), triggerType)
    }
    _this.submit = function (onSubmit) {
      return batchSubmit(_this, onSubmit)
    }
    _this.reset = function (options) {
      return batchReset(_this, ''.concat(_this.address, '.**'), options)
    }
    _this.queryFeedbacks = function (search) {
      return queryFeedbacks(_this, search)
    }
    _this.modify = function () {
      return modifySelf(_this)
    }
    _this.form = form
    _this.props = props
    _this.designable = designable
    initializeStart()
    _this.makeIndexes(address)
    _this.initialize()
    _this.makeObservable()
    _this.makeReactive()
    _this.onInit()
    initializeEnd()
    return _this
  }
  Field.prototype.initialize = function () {
    this.initialized = false
    this.loading = false
    this.validating = false
    this.submitting = false
    this.selfModified = false
    this.active = false
    this.visited = false
    this.mounted = false
    this.unmounted = false
    this.inputValues = []
    this.inputValue = null
    this.feedbacks = []
    this.title = this.props.title
    this.description = this.props.description
    this.display = this.props.display
    this.pattern = this.props.pattern
    this.editable = this.props.editable
    this.disabled = this.props.disabled
    this.readOnly = this.props.readOnly
    this.readPretty = this.props.readPretty
    this.visible = this.props.visible
    this.hidden = this.props.hidden
    this.dataSource = this.props.dataSource
    this.validator = this.props.validator
    this.required = this.props.required
    this.content = this.props.content
    this.value = getValidFieldDefaultValue(
      this.props.value,
      this.props.initialValue
    )
    this.initialValue = this.props.initialValue
    this.data = this.props.data
    this.decorator = toArr(this.props.decorator)
    this.component = toArr(this.props.component)
  }
  Field.prototype.makeObservable = function () {
    if (this.designable) return
    define(this, {
      title: observable.ref,
      description: observable.ref,
      dataSource: observable.ref,
      selfDisplay: observable.ref,
      selfPattern: observable.ref,
      loading: observable.ref,
      validating: observable.ref,
      submitting: observable.ref,
      selfModified: observable.ref,
      modified: observable.ref,
      active: observable.ref,
      visited: observable.ref,
      initialized: observable.ref,
      mounted: observable.ref,
      unmounted: observable.ref,
      inputValue: observable.ref,
      inputValues: observable.ref,
      decoratorType: observable.ref,
      componentType: observable.ref,
      content: observable.ref,
      decoratorProps: observable,
      componentProps: observable,
      validator: observable.shallow,
      feedbacks: observable.shallow,
      data: observable.shallow,
      component: observable.computed,
      decorator: observable.computed,
      errors: observable.computed,
      warnings: observable.computed,
      successes: observable.computed,
      valid: observable.computed,
      invalid: observable.computed,
      selfErrors: observable.computed,
      selfWarnings: observable.computed,
      selfSuccesses: observable.computed,
      selfValid: observable.computed,
      selfInvalid: observable.computed,
      validateStatus: observable.computed,
      value: observable.computed,
      initialValue: observable.computed,
      display: observable.computed,
      pattern: observable.computed,
      required: observable.computed,
      hidden: observable.computed,
      visible: observable.computed,
      disabled: observable.computed,
      readOnly: observable.computed,
      readPretty: observable.computed,
      editable: observable.computed,
      setDisplay: action,
      setTitle: action,
      setDescription: action,
      setDataSource: action,
      setValue: action,
      setPattern: action,
      setInitialValue: action,
      setLoading: action,
      setValidating: action,
      setFeedback: action,
      setSelfErrors: action,
      setSelfWarnings: action,
      setSelfSuccesses: action,
      setValidator: action,
      setRequired: action,
      setComponent: action,
      setComponentProps: action,
      setDecorator: action,
      setDecoratorProps: action,
      setData: action,
      setContent: action,
      validate: action,
      reset: action,
      onInit: batch,
      onInput: batch,
      onMount: batch,
      onUnmount: batch,
      onFocus: batch,
      onBlur: batch,
    })
  }
  Field.prototype.makeReactive = function () {
    var _this = this
    if (this.designable) return
    this.disposers.push(
      reaction(
        function () {
          return _this.value
        },
        function (value) {
          _this.notify(LifeCycleTypes.ON_FIELD_VALUE_CHANGE)
          if (isValid(value) && _this.selfModified && !_this.caches.inputting) {
            validateSelf(_this)
          }
        }
      ),
      reaction(
        function () {
          return _this.initialValue
        },
        function () {
          _this.notify(LifeCycleTypes.ON_FIELD_INITIAL_VALUE_CHANGE)
        }
      ),
      reaction(
        function () {
          return _this.display
        },
        function (display) {
          var value = _this.value
          if (display === 'visible') {
            if (isEmpty(value)) {
              _this.setValue(_this.caches.value)
              _this.caches.value = undefined
            }
          } else {
            _this.caches.value = toJS(value)
            if (display === 'none') {
              _this.form.deleteValuesIn(_this.path)
            }
          }
          if (display === 'none' || display === 'hidden') {
            _this.setFeedback({
              type: 'error',
              messages: [],
            })
          }
        }
      ),
      reaction(
        function () {
          return _this.pattern
        },
        function (pattern) {
          if (pattern !== 'editable') {
            _this.setFeedback({
              type: 'error',
              messages: [],
            })
          }
        }
      )
    )
    createReactions(this)
  }
  Object.defineProperty(Field.prototype, 'selfErrors', {
    get: function () {
      return queryFeedbackMessages(this, {
        type: 'error',
      })
    },
    set: function (messages) {
      this.setFeedback({
        type: 'error',
        code: 'EffectError',
        messages: messages,
      })
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'errors', {
    get: function () {
      return this.form.errors.filter(createChildrenFeedbackFilter(this))
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'selfWarnings', {
    get: function () {
      return queryFeedbackMessages(this, {
        type: 'warning',
      })
    },
    set: function (messages) {
      this.setFeedback({
        type: 'warning',
        code: 'EffectWarning',
        messages: messages,
      })
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'warnings', {
    get: function () {
      return this.form.warnings.filter(createChildrenFeedbackFilter(this))
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'selfSuccesses', {
    get: function () {
      return queryFeedbackMessages(this, {
        type: 'success',
      })
    },
    set: function (messages) {
      this.setFeedback({
        type: 'success',
        code: 'EffectSuccess',
        messages: messages,
      })
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'successes', {
    get: function () {
      return this.form.successes.filter(createChildrenFeedbackFilter(this))
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'selfValid', {
    get: function () {
      return !this.selfErrors.length
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'valid', {
    get: function () {
      return !this.errors.length
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'selfInvalid', {
    get: function () {
      return !this.selfValid
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'invalid', {
    get: function () {
      return !this.valid
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'value', {
    get: function () {
      return this.form.getValuesIn(this.path)
    },
    set: function (value) {
      if (!this.initialized) {
        if (this.display === 'none') {
          this.caches.value = value
          return
        }
        if (!allowAssignDefaultValue(this.value, value) && !this.designable) {
          return
        }
      }
      this.form.setValuesIn(this.path, value)
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'initialValue', {
    get: function () {
      return this.form.getInitialValuesIn(this.path)
    },
    set: function (initialValue) {
      if (!this.initialized) {
        if (
          !allowAssignDefaultValue(this.initialValue, initialValue) &&
          !this.designable
        ) {
          return
        }
      }
      this.form.setInitialValuesIn(this.path, initialValue)
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'required', {
    get: function () {
      return parseValidatorDescriptions(this.validator).some(function (desc) {
        return desc.required
      })
    },
    set: function (required) {
      if (this.required === required) return
      this.setValidatorRule('required', required)
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'validateStatus', {
    get: function () {
      if (this.validating) return 'validating'
      if (this.selfInvalid) return 'error'
      if (this.selfWarnings.length) return 'warning'
      if (this.selfSuccesses.length) return 'success'
    },
    enumerable: false,
    configurable: true,
  })
  return Field
})(BaseField)
export { Field }
//# sourceMappingURL=Field.js.map
