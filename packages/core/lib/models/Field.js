'use strict'
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
Object.defineProperty(exports, '__esModule', { value: true })
exports.Field = void 0
var shared_1 = require('@formily/shared')
var validator_1 = require('@formily/validator')
var reactive_1 = require('@formily/reactive')
var types_1 = require('../types')
var internals_1 = require('../shared/internals')
var BaseField_1 = require('./BaseField')
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
      ;(0, internals_1.updateFeedback)(_this, feedback)
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
      ;(0, internals_1.setValidatorRule)(_this, name, value)
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
      ;(0, internals_1.setLoading)(_this, loading)
    }
    _this.setValidating = function (validating) {
      ;(0, internals_1.setValidating)(_this, validating)
    }
    _this.setSubmitting = function (submitting) {
      ;(0, internals_1.setSubmitting)(_this, submitting)
    }
    _this.setState = (0, internals_1.createStateSetter)(_this)
    _this.getState = (0, internals_1.createStateGetter)(_this)
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
                if (!(0, internals_1.isHTMLInputEvent)(args[0]))
                  return [2 /*return*/]
              }
              values = (0, internals_1.getValuesFromEvent)(args)
              value = values[0]
              this.caches.inputting = true
              this.inputValue = value
              this.inputValues = values
              this.value = value
              this.modify()
              this.notify(types_1.LifeCycleTypes.ON_FIELD_INPUT_VALUE_CHANGE)
              this.notify(
                types_1.LifeCycleTypes.ON_FORM_INPUT_CHANGE,
                this.form
              )
              return [
                4 /*yield*/,
                (0, internals_1.validateSelf)(this, 'onInput'),
              ]
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
                if (!(0, internals_1.isHTMLInputEvent)(args[0], false))
                  return [2 /*return*/]
              }
              this.active = true
              this.visited = true
              return [
                4 /*yield*/,
                (0, internals_1.validateSelf)(this, 'onFocus'),
              ]
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
                if (!(0, internals_1.isHTMLInputEvent)(args[0], false))
                  return [2 /*return*/]
              }
              this.active = false
              return [
                4 /*yield*/,
                (0, internals_1.validateSelf)(this, 'onBlur'),
              ]
            case 1:
              _b.sent()
              return [2 /*return*/]
          }
        })
      })
    }
    _this.validate = function (triggerType) {
      return (0, internals_1.batchValidate)(
        _this,
        ''.concat(_this.address, '.**'),
        triggerType
      )
    }
    _this.submit = function (onSubmit) {
      return (0, internals_1.batchSubmit)(_this, onSubmit)
    }
    _this.reset = function (options) {
      return (0, internals_1.batchReset)(
        _this,
        ''.concat(_this.address, '.**'),
        options
      )
    }
    _this.queryFeedbacks = function (search) {
      return (0, internals_1.queryFeedbacks)(_this, search)
    }
    _this.modify = function () {
      return (0, internals_1.modifySelf)(_this)
    }
    _this.form = form
    _this.props = props
    _this.designable = designable
    ;(0, internals_1.initializeStart)()
    _this.makeIndexes(address)
    _this.initialize()
    _this.makeObservable()
    _this.makeReactive()
    _this.onInit()
    ;(0, internals_1.initializeEnd)()
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
    this.value = (0, internals_1.getValidFieldDefaultValue)(
      this.props.value,
      this.props.initialValue
    )
    this.initialValue = this.props.initialValue
    this.data = this.props.data
    this.decorator = (0, shared_1.toArr)(this.props.decorator)
    this.component = (0, shared_1.toArr)(this.props.component)
  }
  Field.prototype.makeObservable = function () {
    if (this.designable) return
    ;(0, reactive_1.define)(this, {
      title: reactive_1.observable.ref,
      description: reactive_1.observable.ref,
      dataSource: reactive_1.observable.ref,
      selfDisplay: reactive_1.observable.ref,
      selfPattern: reactive_1.observable.ref,
      loading: reactive_1.observable.ref,
      validating: reactive_1.observable.ref,
      submitting: reactive_1.observable.ref,
      selfModified: reactive_1.observable.ref,
      modified: reactive_1.observable.ref,
      active: reactive_1.observable.ref,
      visited: reactive_1.observable.ref,
      initialized: reactive_1.observable.ref,
      mounted: reactive_1.observable.ref,
      unmounted: reactive_1.observable.ref,
      inputValue: reactive_1.observable.ref,
      inputValues: reactive_1.observable.ref,
      decoratorType: reactive_1.observable.ref,
      componentType: reactive_1.observable.ref,
      content: reactive_1.observable.ref,
      decoratorProps: reactive_1.observable,
      componentProps: reactive_1.observable,
      validator: reactive_1.observable.shallow,
      feedbacks: reactive_1.observable.shallow,
      data: reactive_1.observable.shallow,
      component: reactive_1.observable.computed,
      decorator: reactive_1.observable.computed,
      errors: reactive_1.observable.computed,
      warnings: reactive_1.observable.computed,
      successes: reactive_1.observable.computed,
      valid: reactive_1.observable.computed,
      invalid: reactive_1.observable.computed,
      selfErrors: reactive_1.observable.computed,
      selfWarnings: reactive_1.observable.computed,
      selfSuccesses: reactive_1.observable.computed,
      selfValid: reactive_1.observable.computed,
      selfInvalid: reactive_1.observable.computed,
      validateStatus: reactive_1.observable.computed,
      value: reactive_1.observable.computed,
      initialValue: reactive_1.observable.computed,
      display: reactive_1.observable.computed,
      pattern: reactive_1.observable.computed,
      required: reactive_1.observable.computed,
      hidden: reactive_1.observable.computed,
      visible: reactive_1.observable.computed,
      disabled: reactive_1.observable.computed,
      readOnly: reactive_1.observable.computed,
      readPretty: reactive_1.observable.computed,
      editable: reactive_1.observable.computed,
      setDisplay: reactive_1.action,
      setTitle: reactive_1.action,
      setDescription: reactive_1.action,
      setDataSource: reactive_1.action,
      setValue: reactive_1.action,
      setPattern: reactive_1.action,
      setInitialValue: reactive_1.action,
      setLoading: reactive_1.action,
      setValidating: reactive_1.action,
      setFeedback: reactive_1.action,
      setSelfErrors: reactive_1.action,
      setSelfWarnings: reactive_1.action,
      setSelfSuccesses: reactive_1.action,
      setValidator: reactive_1.action,
      setRequired: reactive_1.action,
      setComponent: reactive_1.action,
      setComponentProps: reactive_1.action,
      setDecorator: reactive_1.action,
      setDecoratorProps: reactive_1.action,
      setData: reactive_1.action,
      setContent: reactive_1.action,
      validate: reactive_1.action,
      reset: reactive_1.action,
      onInit: reactive_1.batch,
      onInput: reactive_1.batch,
      onMount: reactive_1.batch,
      onUnmount: reactive_1.batch,
      onFocus: reactive_1.batch,
      onBlur: reactive_1.batch,
    })
  }
  Field.prototype.makeReactive = function () {
    var _this = this
    if (this.designable) return
    this.disposers.push(
      (0, reactive_1.reaction)(
        function () {
          return _this.value
        },
        function (value) {
          _this.notify(types_1.LifeCycleTypes.ON_FIELD_VALUE_CHANGE)
          if (
            (0, shared_1.isValid)(value) &&
            _this.selfModified &&
            !_this.caches.inputting
          ) {
            ;(0, internals_1.validateSelf)(_this)
          }
        }
      ),
      (0, reactive_1.reaction)(
        function () {
          return _this.initialValue
        },
        function () {
          _this.notify(types_1.LifeCycleTypes.ON_FIELD_INITIAL_VALUE_CHANGE)
        }
      ),
      (0, reactive_1.reaction)(
        function () {
          return _this.display
        },
        function (display) {
          var value = _this.value
          if (display === 'visible') {
            if ((0, shared_1.isEmpty)(value)) {
              _this.setValue(_this.caches.value)
              _this.caches.value = undefined
            }
          } else {
            _this.caches.value = (0, reactive_1.toJS)(value)
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
      (0, reactive_1.reaction)(
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
    ;(0, internals_1.createReactions)(this)
  }
  Object.defineProperty(Field.prototype, 'selfErrors', {
    get: function () {
      return (0, internals_1.queryFeedbackMessages)(this, {
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
      return this.form.errors.filter(
        (0, internals_1.createChildrenFeedbackFilter)(this)
      )
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'selfWarnings', {
    get: function () {
      return (0, internals_1.queryFeedbackMessages)(this, {
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
      return this.form.warnings.filter(
        (0, internals_1.createChildrenFeedbackFilter)(this)
      )
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Field.prototype, 'selfSuccesses', {
    get: function () {
      return (0, internals_1.queryFeedbackMessages)(this, {
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
      return this.form.successes.filter(
        (0, internals_1.createChildrenFeedbackFilter)(this)
      )
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
        if (
          !(0, internals_1.allowAssignDefaultValue)(this.value, value) &&
          !this.designable
        ) {
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
          !(0, internals_1.allowAssignDefaultValue)(
            this.initialValue,
            initialValue
          ) &&
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
      return (0, validator_1.parseValidatorDescriptions)(this.validator).some(
        function (desc) {
          return desc.required
        }
      )
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
})(BaseField_1.BaseField)
exports.Field = Field
//# sourceMappingURL=Field.js.map
