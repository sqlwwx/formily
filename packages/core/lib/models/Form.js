'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Form = void 0
var reactive_1 = require('@formily/reactive')
var shared_1 = require('@formily/shared')
var Heart_1 = require('./Heart')
var Field_1 = require('./Field')
var types_1 = require('../types')
var internals_1 = require('../shared/internals')
var checkers_1 = require('../shared/checkers')
var effective_1 = require('../shared/effective')
var ArrayField_1 = require('./ArrayField')
var ObjectField_1 = require('./ObjectField')
var VoidField_1 = require('./VoidField')
var Query_1 = require('./Query')
var Graph_1 = require('./Graph')
var DEV_TOOLS_HOOK = '__FORMILY_DEV_TOOLS_HOOK__'
var Form = /** @class */ (function () {
  function Form(props) {
    var _this = this
    this.displayName = 'Form'
    this.fields = {}
    this.requests = {}
    this.indexes = {}
    this.disposers = []
    /** 创建字段 **/
    this.createField = function (props) {
      var address = shared_1.FormPath.parse(props.basePath).concat(props.name)
      var identifier = address.toString()
      if (!identifier) return
      if (!_this.fields[identifier] || _this.props.designable) {
        ;(0, reactive_1.batch)(function () {
          new Field_1.Field(address, props, _this, _this.props.designable)
        })
        _this.notify(types_1.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
      }
      return _this.fields[identifier]
    }
    this.createArrayField = function (props) {
      var address = shared_1.FormPath.parse(props.basePath).concat(props.name)
      var identifier = address.toString()
      if (!identifier) return
      if (!_this.fields[identifier] || _this.props.designable) {
        ;(0, reactive_1.batch)(function () {
          new ArrayField_1.ArrayField(
            address,
            __assign(__assign({}, props), {
              value: (0, shared_1.isArr)(props.value) ? props.value : [],
            }),
            _this,
            _this.props.designable
          )
        })
        _this.notify(types_1.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
      }
      return _this.fields[identifier]
    }
    this.createObjectField = function (props) {
      var address = shared_1.FormPath.parse(props.basePath).concat(props.name)
      var identifier = address.toString()
      if (!identifier) return
      if (!_this.fields[identifier] || _this.props.designable) {
        ;(0, reactive_1.batch)(function () {
          new ObjectField_1.ObjectField(
            address,
            __assign(__assign({}, props), {
              value: (0, shared_1.isObj)(props.value) ? props.value : {},
            }),
            _this,
            _this.props.designable
          )
        })
        _this.notify(types_1.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
      }
      return _this.fields[identifier]
    }
    this.createVoidField = function (props) {
      var address = shared_1.FormPath.parse(props.basePath).concat(props.name)
      var identifier = address.toString()
      if (!identifier) return
      if (!_this.fields[identifier] || _this.props.designable) {
        ;(0, reactive_1.batch)(function () {
          new VoidField_1.VoidField(
            address,
            props,
            _this,
            _this.props.designable
          )
        })
        _this.notify(types_1.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
      }
      return _this.fields[identifier]
    }
    /** 状态操作模型 **/
    this.setValues = function (values, strategy) {
      if (strategy === void 0) {
        strategy = 'merge'
      }
      if (!(0, shared_1.isPlainObj)(values)) return
      if (strategy === 'merge' || strategy === 'deepMerge') {
        _this.values = (0, shared_1.merge)(_this.values, values, {
          arrayMerge: function (target, source) {
            return source
          },
        })
      } else if (strategy === 'shallowMerge') {
        _this.values = Object.assign(_this.values, values)
      } else {
        _this.values = values
      }
    }
    this.setInitialValues = function (initialValues, strategy) {
      if (strategy === void 0) {
        strategy = 'merge'
      }
      if (!(0, shared_1.isPlainObj)(initialValues)) return
      if (strategy === 'merge' || strategy === 'deepMerge') {
        _this.initialValues = (0, shared_1.merge)(
          _this.initialValues,
          initialValues,
          {
            arrayMerge: function (target, source) {
              return source
            },
          }
        )
      } else if (strategy === 'shallowMerge') {
        _this.initialValues = Object.assign(_this.initialValues, initialValues)
      } else {
        _this.initialValues = initialValues
      }
    }
    this.setValuesIn = function (pattern, value) {
      shared_1.FormPath.setIn(_this.values, pattern, value)
    }
    this.deleteValuesIn = function (pattern) {
      shared_1.FormPath.deleteIn(_this.values, pattern)
    }
    this.existValuesIn = function (pattern) {
      return shared_1.FormPath.existIn(_this.values, pattern)
    }
    this.getValuesIn = function (pattern) {
      return shared_1.FormPath.getIn(_this.values, pattern)
    }
    this.setInitialValuesIn = function (pattern, initialValue) {
      shared_1.FormPath.setIn(_this.initialValues, pattern, initialValue)
    }
    this.deleteInitialValuesIn = function (pattern) {
      shared_1.FormPath.deleteIn(_this.initialValues, pattern)
    }
    this.existInitialValuesIn = function (pattern) {
      return shared_1.FormPath.existIn(_this.initialValues, pattern)
    }
    this.getInitialValuesIn = function (pattern) {
      return shared_1.FormPath.getIn(_this.initialValues, pattern)
    }
    this.setLoading = function (loading) {
      ;(0, internals_1.setLoading)(_this, loading)
    }
    this.setSubmitting = function (submitting) {
      ;(0, internals_1.setSubmitting)(_this, submitting)
    }
    this.setValidating = function (validating) {
      ;(0, internals_1.setValidating)(_this, validating)
    }
    this.setDisplay = function (display) {
      _this.display = display
    }
    this.setPattern = function (pattern) {
      _this.pattern = pattern
    }
    this.addEffects = function (id, effects) {
      if (!_this.heart.hasLifeCycles(id)) {
        _this.heart.addLifeCycles(
          id,
          (0, effective_1.runEffects)(_this, effects)
        )
      }
    }
    this.removeEffects = function (id) {
      _this.heart.removeLifeCycles(id)
    }
    this.setEffects = function (effects) {
      _this.heart.setLifeCycles((0, effective_1.runEffects)(_this, effects))
    }
    this.clearErrors = function (pattern) {
      if (pattern === void 0) {
        pattern = '*'
      }
      _this.query(pattern).forEach(function (field) {
        if (!(0, checkers_1.isVoidField)(field)) {
          field.setFeedback({
            type: 'error',
            messages: [],
          })
        }
      })
    }
    this.clearWarnings = function (pattern) {
      if (pattern === void 0) {
        pattern = '*'
      }
      _this.query(pattern).forEach(function (field) {
        if (!(0, checkers_1.isVoidField)(field)) {
          field.setFeedback({
            type: 'warning',
            messages: [],
          })
        }
      })
    }
    this.clearSuccesses = function (pattern) {
      if (pattern === void 0) {
        pattern = '*'
      }
      _this.query(pattern).forEach(function (field) {
        if (!(0, checkers_1.isVoidField)(field)) {
          field.setFeedback({
            type: 'success',
            messages: [],
          })
        }
      })
    }
    this.query = function (pattern) {
      return new Query_1.Query({
        pattern: pattern,
        base: '',
        form: _this,
      })
    }
    this.queryFeedbacks = function (search) {
      return _this
        .query(search.address || search.path || '*')
        .reduce(function (messages, field) {
          if ((0, checkers_1.isVoidField)(field)) return messages
          return messages.concat(
            field
              .queryFeedbacks(search)
              .map(function (feedback) {
                return __assign(__assign({}, feedback), {
                  address: field.address.toString(),
                  path: field.path.toString(),
                })
              })
              .filter(function (feedback) {
                return feedback.messages.length > 0
              })
          )
        }, [])
    }
    this.notify = function (type, payload) {
      _this.heart.publish(
        type,
        payload !== null && payload !== void 0 ? payload : _this
      )
    }
    this.subscribe = function (subscriber) {
      return _this.heart.subscribe(subscriber)
    }
    this.unsubscribe = function (id) {
      _this.heart.unsubscribe(id)
    }
    /**事件钩子**/
    this.onInit = function () {
      _this.initialized = true
      _this.notify(types_1.LifeCycleTypes.ON_FORM_INIT)
    }
    this.onMount = function () {
      _this.mounted = true
      _this.notify(types_1.LifeCycleTypes.ON_FORM_MOUNT)
      if (
        shared_1.globalThisPolyfill[DEV_TOOLS_HOOK] &&
        !_this.props.designable
      ) {
        shared_1.globalThisPolyfill[DEV_TOOLS_HOOK].inject(_this.id, _this)
      }
    }
    this.onUnmount = function () {
      _this.notify(types_1.LifeCycleTypes.ON_FORM_UNMOUNT)
      _this.query('*').forEach(function (field) {
        return field.destroy()
      })
      _this.disposers.forEach(function (dispose) {
        return dispose()
      })
      _this.unmounted = true
      _this.indexes = {}
      _this.heart.clear()
      if (
        shared_1.globalThisPolyfill[DEV_TOOLS_HOOK] &&
        !_this.props.designable
      ) {
        shared_1.globalThisPolyfill[DEV_TOOLS_HOOK].unmount(_this.id)
      }
    }
    this.setState = (0, internals_1.createStateSetter)(this)
    this.getState = (0, internals_1.createStateGetter)(this)
    this.setFormState = (0, internals_1.createStateSetter)(this)
    this.getFormState = (0, internals_1.createStateGetter)(this)
    this.setFieldState = (0, internals_1.createBatchStateSetter)(this)
    this.getFieldState = (0, internals_1.createBatchStateGetter)(this)
    this.getFormGraph = function () {
      return _this.graph.getGraph()
    }
    this.setFormGraph = function (graph) {
      _this.graph.setGraph(graph)
    }
    this.clearFormGraph = function (pattern) {
      if (pattern === void 0) {
        pattern = '*'
      }
      _this.query(pattern).forEach(function (field) {
        field.destroy()
      })
    }
    this.validate = function (pattern) {
      if (pattern === void 0) {
        pattern = '*'
      }
      return (0, internals_1.batchValidate)(_this, pattern)
    }
    this.submit = function (onSubmit) {
      return (0, internals_1.batchSubmit)(_this, onSubmit)
    }
    this.reset = function (pattern, options) {
      if (pattern === void 0) {
        pattern = '*'
      }
      return (0, internals_1.batchReset)(_this, pattern, options)
    }
    this.initialize(props)
    this.makeObservable()
    this.makeReactive()
    this.makeValues()
    this.onInit()
  }
  Form.prototype.initialize = function (props) {
    this.id = (0, shared_1.uid)()
    this.props = __assign({}, props)
    this.initialized = false
    this.submitting = false
    this.validating = false
    this.loading = false
    this.modified = false
    this.mounted = false
    this.unmounted = false
    this.display = this.props.display || 'visible'
    this.pattern = this.props.pattern || 'editable'
    this.editable = this.props.editable
    this.disabled = this.props.disabled
    this.readOnly = this.props.readOnly
    this.readPretty = this.props.readPretty
    this.visible = this.props.visible
    this.hidden = this.props.hidden
    this.graph = new Graph_1.Graph(this)
    this.heart = new Heart_1.Heart({
      lifecycles: this.lifecycles,
      context: this,
    })
  }
  Form.prototype.makeValues = function () {
    this.values = (0, internals_1.getValidFormValues)(this.props.values)
    this.initialValues = (0, internals_1.getValidFormValues)(
      this.props.initialValues
    )
  }
  Form.prototype.makeObservable = function () {
    ;(0, reactive_1.define)(this, {
      fields: reactive_1.observable.shallow,
      initialized: reactive_1.observable.ref,
      validating: reactive_1.observable.ref,
      submitting: reactive_1.observable.ref,
      loading: reactive_1.observable.ref,
      modified: reactive_1.observable.ref,
      pattern: reactive_1.observable.ref,
      display: reactive_1.observable.ref,
      mounted: reactive_1.observable.ref,
      unmounted: reactive_1.observable.ref,
      values: reactive_1.observable,
      initialValues: reactive_1.observable,
      valid: reactive_1.observable.computed,
      invalid: reactive_1.observable.computed,
      errors: reactive_1.observable.computed,
      warnings: reactive_1.observable.computed,
      successes: reactive_1.observable.computed,
      hidden: reactive_1.observable.computed,
      visible: reactive_1.observable.computed,
      editable: reactive_1.observable.computed,
      readOnly: reactive_1.observable.computed,
      readPretty: reactive_1.observable.computed,
      disabled: reactive_1.observable.computed,
      setValues: reactive_1.action,
      setValuesIn: reactive_1.action,
      setInitialValues: reactive_1.action,
      setInitialValuesIn: reactive_1.action,
      setPattern: reactive_1.action,
      setDisplay: reactive_1.action,
      setState: reactive_1.action,
      deleteInitialValuesIn: reactive_1.action,
      deleteValuesIn: reactive_1.action,
      setSubmitting: reactive_1.action,
      setValidating: reactive_1.action,
      setFormGraph: reactive_1.action,
      clearFormGraph: reactive_1.action,
      reset: reactive_1.action,
      submit: reactive_1.action,
      validate: reactive_1.action,
      onMount: reactive_1.batch,
      onUnmount: reactive_1.batch,
      onInit: reactive_1.batch,
    })
  }
  Form.prototype.makeReactive = function () {
    var _this = this
    this.disposers.push(
      (0, reactive_1.observe)(
        this,
        function (change) {
          ;(0, internals_1.triggerFormInitialValuesChange)(_this, change)
          ;(0, internals_1.triggerFormValuesChange)(_this, change)
        },
        true
      )
    )
  }
  Object.defineProperty(Form.prototype, 'valid', {
    get: function () {
      return !this.invalid
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Form.prototype, 'invalid', {
    get: function () {
      return this.errors.length > 0
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Form.prototype, 'errors', {
    get: function () {
      return this.queryFeedbacks({
        type: 'error',
      })
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Form.prototype, 'warnings', {
    get: function () {
      return this.queryFeedbacks({
        type: 'warning',
      })
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Form.prototype, 'successes', {
    get: function () {
      return this.queryFeedbacks({
        type: 'success',
      })
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Form.prototype, 'lifecycles', {
    get: function () {
      return (0, effective_1.runEffects)(this, this.props.effects)
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Form.prototype, 'hidden', {
    get: function () {
      return this.display === 'hidden'
    },
    set: function (hidden) {
      if (!(0, shared_1.isValid)(hidden)) return
      if (hidden) {
        this.display = 'hidden'
      } else {
        this.display = 'visible'
      }
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Form.prototype, 'visible', {
    get: function () {
      return this.display === 'visible'
    },
    set: function (visible) {
      if (!(0, shared_1.isValid)(visible)) return
      if (visible) {
        this.display = 'visible'
      } else {
        this.display = 'none'
      }
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Form.prototype, 'editable', {
    get: function () {
      return this.pattern === 'editable'
    },
    set: function (editable) {
      if (!(0, shared_1.isValid)(editable)) return
      if (editable) {
        this.pattern = 'editable'
      } else {
        this.pattern = 'readPretty'
      }
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Form.prototype, 'readOnly', {
    get: function () {
      return this.pattern === 'readOnly'
    },
    set: function (readOnly) {
      if (!(0, shared_1.isValid)(readOnly)) return
      if (readOnly) {
        this.pattern = 'readOnly'
      } else {
        this.pattern = 'editable'
      }
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Form.prototype, 'disabled', {
    get: function () {
      return this.pattern === 'disabled'
    },
    set: function (disabled) {
      if (!(0, shared_1.isValid)(disabled)) return
      if (disabled) {
        this.pattern = 'disabled'
      } else {
        this.pattern = 'editable'
      }
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Form.prototype, 'readPretty', {
    get: function () {
      return this.pattern === 'readPretty'
    },
    set: function (readPretty) {
      if (!(0, shared_1.isValid)(readPretty)) return
      if (readPretty) {
        this.pattern = 'readPretty'
      } else {
        this.pattern = 'editable'
      }
    },
    enumerable: false,
    configurable: true,
  })
  return Form
})()
exports.Form = Form
//# sourceMappingURL=Form.js.map
