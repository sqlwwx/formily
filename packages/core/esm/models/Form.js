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
import { define, observable, batch, action, observe } from '@formily/reactive'
import {
  FormPath,
  isValid,
  uid,
  globalThisPolyfill,
  merge,
  isPlainObj,
  isArr,
  isObj,
} from '@formily/shared'
import { Heart } from './Heart'
import { Field } from './Field'
import { LifeCycleTypes } from '../types'
import {
  createStateGetter,
  createStateSetter,
  createBatchStateSetter,
  createBatchStateGetter,
  triggerFormInitialValuesChange,
  triggerFormValuesChange,
  batchValidate,
  batchReset,
  batchSubmit,
  setValidating,
  setSubmitting,
  setLoading,
  getValidFormValues,
} from '../shared/internals'
import { isVoidField } from '../shared/checkers'
import { runEffects } from '../shared/effective'
import { ArrayField } from './ArrayField'
import { ObjectField } from './ObjectField'
import { VoidField } from './VoidField'
import { Query } from './Query'
import { Graph } from './Graph'
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
      var address = FormPath.parse(props.basePath).concat(props.name)
      var identifier = address.toString()
      if (!identifier) return
      if (!_this.fields[identifier] || _this.props.designable) {
        batch(function () {
          new Field(address, props, _this, _this.props.designable)
        })
        _this.notify(LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
      }
      return _this.fields[identifier]
    }
    this.createArrayField = function (props) {
      var address = FormPath.parse(props.basePath).concat(props.name)
      var identifier = address.toString()
      if (!identifier) return
      if (!_this.fields[identifier] || _this.props.designable) {
        batch(function () {
          new ArrayField(
            address,
            __assign(__assign({}, props), {
              value: isArr(props.value) ? props.value : [],
            }),
            _this,
            _this.props.designable
          )
        })
        _this.notify(LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
      }
      return _this.fields[identifier]
    }
    this.createObjectField = function (props) {
      var address = FormPath.parse(props.basePath).concat(props.name)
      var identifier = address.toString()
      if (!identifier) return
      if (!_this.fields[identifier] || _this.props.designable) {
        batch(function () {
          new ObjectField(
            address,
            __assign(__assign({}, props), {
              value: isObj(props.value) ? props.value : {},
            }),
            _this,
            _this.props.designable
          )
        })
        _this.notify(LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
      }
      return _this.fields[identifier]
    }
    this.createVoidField = function (props) {
      var address = FormPath.parse(props.basePath).concat(props.name)
      var identifier = address.toString()
      if (!identifier) return
      if (!_this.fields[identifier] || _this.props.designable) {
        batch(function () {
          new VoidField(address, props, _this, _this.props.designable)
        })
        _this.notify(LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
      }
      return _this.fields[identifier]
    }
    /** 状态操作模型 **/
    this.setValues = function (values, strategy) {
      if (strategy === void 0) {
        strategy = 'merge'
      }
      if (!isPlainObj(values)) return
      if (strategy === 'merge' || strategy === 'deepMerge') {
        _this.values = merge(_this.values, values, {
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
      if (!isPlainObj(initialValues)) return
      if (strategy === 'merge' || strategy === 'deepMerge') {
        _this.initialValues = merge(_this.initialValues, initialValues, {
          arrayMerge: function (target, source) {
            return source
          },
        })
      } else if (strategy === 'shallowMerge') {
        _this.initialValues = Object.assign(_this.initialValues, initialValues)
      } else {
        _this.initialValues = initialValues
      }
    }
    this.setValuesIn = function (pattern, value) {
      FormPath.setIn(_this.values, pattern, value)
    }
    this.deleteValuesIn = function (pattern) {
      FormPath.deleteIn(_this.values, pattern)
    }
    this.existValuesIn = function (pattern) {
      return FormPath.existIn(_this.values, pattern)
    }
    this.getValuesIn = function (pattern) {
      return FormPath.getIn(_this.values, pattern)
    }
    this.setInitialValuesIn = function (pattern, initialValue) {
      FormPath.setIn(_this.initialValues, pattern, initialValue)
    }
    this.deleteInitialValuesIn = function (pattern) {
      FormPath.deleteIn(_this.initialValues, pattern)
    }
    this.existInitialValuesIn = function (pattern) {
      return FormPath.existIn(_this.initialValues, pattern)
    }
    this.getInitialValuesIn = function (pattern) {
      return FormPath.getIn(_this.initialValues, pattern)
    }
    this.setLoading = function (loading) {
      setLoading(_this, loading)
    }
    this.setSubmitting = function (submitting) {
      setSubmitting(_this, submitting)
    }
    this.setValidating = function (validating) {
      setValidating(_this, validating)
    }
    this.setDisplay = function (display) {
      _this.display = display
    }
    this.setPattern = function (pattern) {
      _this.pattern = pattern
    }
    this.addEffects = function (id, effects) {
      if (!_this.heart.hasLifeCycles(id)) {
        _this.heart.addLifeCycles(id, runEffects(_this, effects))
      }
    }
    this.removeEffects = function (id) {
      _this.heart.removeLifeCycles(id)
    }
    this.setEffects = function (effects) {
      _this.heart.setLifeCycles(runEffects(_this, effects))
    }
    this.clearErrors = function (pattern) {
      if (pattern === void 0) {
        pattern = '*'
      }
      _this.query(pattern).forEach(function (field) {
        if (!isVoidField(field)) {
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
        if (!isVoidField(field)) {
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
        if (!isVoidField(field)) {
          field.setFeedback({
            type: 'success',
            messages: [],
          })
        }
      })
    }
    this.query = function (pattern) {
      return new Query({
        pattern: pattern,
        base: '',
        form: _this,
      })
    }
    this.queryFeedbacks = function (search) {
      return _this
        .query(search.address || search.path || '*')
        .reduce(function (messages, field) {
          if (isVoidField(field)) return messages
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
      _this.notify(LifeCycleTypes.ON_FORM_INIT)
    }
    this.onMount = function () {
      _this.mounted = true
      _this.notify(LifeCycleTypes.ON_FORM_MOUNT)
      if (globalThisPolyfill[DEV_TOOLS_HOOK] && !_this.props.designable) {
        globalThisPolyfill[DEV_TOOLS_HOOK].inject(_this.id, _this)
      }
    }
    this.onUnmount = function () {
      _this.notify(LifeCycleTypes.ON_FORM_UNMOUNT)
      _this.query('*').forEach(function (field) {
        return field.destroy()
      })
      _this.disposers.forEach(function (dispose) {
        return dispose()
      })
      _this.unmounted = true
      _this.indexes = {}
      _this.heart.clear()
      if (globalThisPolyfill[DEV_TOOLS_HOOK] && !_this.props.designable) {
        globalThisPolyfill[DEV_TOOLS_HOOK].unmount(_this.id)
      }
    }
    this.setState = createStateSetter(this)
    this.getState = createStateGetter(this)
    this.setFormState = createStateSetter(this)
    this.getFormState = createStateGetter(this)
    this.setFieldState = createBatchStateSetter(this)
    this.getFieldState = createBatchStateGetter(this)
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
      return batchValidate(_this, pattern)
    }
    this.submit = function (onSubmit) {
      return batchSubmit(_this, onSubmit)
    }
    this.reset = function (pattern, options) {
      if (pattern === void 0) {
        pattern = '*'
      }
      return batchReset(_this, pattern, options)
    }
    this.initialize(props)
    this.makeObservable()
    this.makeReactive()
    this.makeValues()
    this.onInit()
  }
  Form.prototype.initialize = function (props) {
    this.id = uid()
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
    this.graph = new Graph(this)
    this.heart = new Heart({
      lifecycles: this.lifecycles,
      context: this,
    })
  }
  Form.prototype.makeValues = function () {
    this.values = getValidFormValues(this.props.values)
    this.initialValues = getValidFormValues(this.props.initialValues)
  }
  Form.prototype.makeObservable = function () {
    define(this, {
      fields: observable.shallow,
      initialized: observable.ref,
      validating: observable.ref,
      submitting: observable.ref,
      loading: observable.ref,
      modified: observable.ref,
      pattern: observable.ref,
      display: observable.ref,
      mounted: observable.ref,
      unmounted: observable.ref,
      values: observable,
      initialValues: observable,
      valid: observable.computed,
      invalid: observable.computed,
      errors: observable.computed,
      warnings: observable.computed,
      successes: observable.computed,
      hidden: observable.computed,
      visible: observable.computed,
      editable: observable.computed,
      readOnly: observable.computed,
      readPretty: observable.computed,
      disabled: observable.computed,
      setValues: action,
      setValuesIn: action,
      setInitialValues: action,
      setInitialValuesIn: action,
      setPattern: action,
      setDisplay: action,
      setState: action,
      deleteInitialValuesIn: action,
      deleteValuesIn: action,
      setSubmitting: action,
      setValidating: action,
      setFormGraph: action,
      clearFormGraph: action,
      reset: action,
      submit: action,
      validate: action,
      onMount: batch,
      onUnmount: batch,
      onInit: batch,
    })
  }
  Form.prototype.makeReactive = function () {
    var _this = this
    this.disposers.push(
      observe(
        this,
        function (change) {
          triggerFormInitialValuesChange(_this, change)
          triggerFormValuesChange(_this, change)
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
      return runEffects(this, this.props.effects)
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Form.prototype, 'hidden', {
    get: function () {
      return this.display === 'hidden'
    },
    set: function (hidden) {
      if (!isValid(hidden)) return
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
      if (!isValid(visible)) return
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
      if (!isValid(editable)) return
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
      if (!isValid(readOnly)) return
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
      if (!isValid(disabled)) return
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
      if (!isValid(readPretty)) return
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
export { Form }
//# sourceMappingURL=Form.js.map
