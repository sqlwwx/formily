;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define('formily.core', ['exports'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        ((global.Formily = global.Formily || {}), (global.Formily.Core = {}))
      ))
})(this, function (exports) {
  'use strict'

  ;(function () {
    const env = { NODE_ENV: 'development' }
    try {
      if (process) {
        process.env = Object.assign({}, process.env)
        Object.assign(process.env, env)
        return
      }
    } catch (e) {} // avoid ReferenceError: process is not defined
    globalThis.process = { env: env }
  })()

  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
  /* global Reflect, Promise */

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

  function __extends(d, b) {
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

  var __assign = function () {
    __assign =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }

  function __awaiter(thisArg, _arguments, P, generator) {
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

  function __generator(thisArg, body) {
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

  function __read(o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator]
    if (!m) return o
    var i = m.call(o),
      r,
      ar = [],
      e
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
    } catch (error) {
      e = { error: error }
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i)
      } finally {
        if (e) throw e.error
      }
    }
    return ar
  }

  function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i]
    return to
  }

  var LifeCycle = /** @class */ (function () {
    function LifeCycle() {
      var _this = this
      var params = []
      for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i]
      }
      this.buildListener = function (params) {
        return function (payload, ctx) {
          var _this = this
          for (var index = 0; index < params.length; index++) {
            var item = params[index]
            if (Formily.Shared.isFn(item)) {
              item.call(this, payload, ctx)
            } else if (
              Formily.Shared.isStr(item) &&
              Formily.Shared.isFn(params[index + 1])
            ) {
              if (item === payload.type) {
                params[index + 1].call(this, payload.payload, ctx)
              }
              index++
            } else {
              Formily.Shared.each(item, function (handler, type) {
                if (
                  Formily.Shared.isFn(handler) &&
                  Formily.Shared.isStr(type)
                ) {
                  if (type === payload.type) {
                    handler.call(_this, payload.payload, ctx)
                    return false
                  }
                }
              })
            }
          }
        }
      }
      this.notify = function (type, payload, ctx) {
        if (Formily.Shared.isStr(type)) {
          _this.listener.call(ctx, { type: type, payload: payload }, ctx)
        }
      }
      this.listener = this.buildListener(params)
    }
    return LifeCycle
  })()

  var Heart = /** @class */ (function (_super) {
    __extends(Heart, _super)
    function Heart(_a) {
      var _b = _a === void 0 ? {} : _a,
        lifecycles = _b.lifecycles,
        context = _b.context
      var _this = _super.call(this) || this
      _this.lifecycles = []
      _this.outerLifecycles = new Map()
      _this.buildLifeCycles = function (lifecycles) {
        return lifecycles.reduce(function (buf, item) {
          if (item instanceof LifeCycle) {
            return buf.concat(item)
          } else {
            if (Formily.Shared.isArr(item)) {
              return _this.buildLifeCycles(item)
            } else if (typeof item === 'object') {
              _this.context = item
              return buf
            }
            return buf
          }
        }, [])
      }
      _this.addLifeCycles = function (id, lifecycles) {
        if (lifecycles === void 0) {
          lifecycles = []
        }
        var observers = _this.buildLifeCycles(lifecycles)
        if (observers.length) {
          _this.outerLifecycles.set(id, observers)
        }
      }
      _this.hasLifeCycles = function (id) {
        return _this.outerLifecycles.has(id)
      }
      _this.removeLifeCycles = function (id) {
        _this.outerLifecycles.delete(id)
      }
      _this.setLifeCycles = function (lifecycles) {
        if (lifecycles === void 0) {
          lifecycles = []
        }
        _this.lifecycles = _this.buildLifeCycles(lifecycles)
      }
      _this.publish = function (type, payload, context) {
        if (Formily.Shared.isStr(type)) {
          _this.lifecycles.forEach(function (lifecycle) {
            lifecycle.notify(type, payload, context || _this.context)
          })
          _this.outerLifecycles.forEach(function (lifecycles) {
            lifecycles.forEach(function (lifecycle) {
              lifecycle.notify(type, payload, context || _this.context)
            })
          })
          _this.notify({
            type: type,
            payload: payload,
          })
        }
      }
      _this.clear = function () {
        _this.lifecycles = []
        _this.outerLifecycles.clear()
        _this.unsubscribe()
      }
      _this.lifecycles = _this.buildLifeCycles(lifecycles || [])
      _this.context = context
      return _this
    }
    return Heart
  })(Formily.Shared.Subscribable)

  var isForm = function (node) {
    return node instanceof Form
  }
  var isField = function (node) {
    return node instanceof Field
  }
  var isGeneralField = function (node) {
    return node instanceof Field || node instanceof VoidField
  }
  var isArrayField = function (node) {
    return node instanceof ArrayField
  }
  var isObjectField = function (node) {
    return node instanceof ObjectField
  }
  var isVoidField = function (node) {
    return node instanceof VoidField
  }
  var isFormState = function (state) {
    if (
      Formily.Shared.isFn(
        state === null || state === void 0 ? void 0 : state.initialize
      )
    )
      return false
    return (
      (state === null || state === void 0 ? void 0 : state.displayName) ===
      'Form'
    )
  }
  var isFieldState = function (state) {
    if (
      Formily.Shared.isFn(
        state === null || state === void 0 ? void 0 : state.initialize
      )
    )
      return false
    return (
      (state === null || state === void 0 ? void 0 : state.displayName) ===
      'Field'
    )
  }
  var isGeneralFieldState = function (node) {
    var _a
    if (
      Formily.Shared.isFn(
        node === null || node === void 0 ? void 0 : node.initialize
      )
    )
      return false
    return (
      ((_a = node === null || node === void 0 ? void 0 : node.displayName) ===
        null || _a === void 0
        ? void 0
        : _a.indexOf('Field')) > -1
    )
  }
  var isArrayFieldState = function (state) {
    if (
      Formily.Shared.isFn(
        state === null || state === void 0 ? void 0 : state.initialize
      )
    )
      return false
    return (
      (state === null || state === void 0 ? void 0 : state.displayName) ===
      'ArrayField'
    )
  }
  var isDataField = function (node) {
    return isField(node) || isArrayField(node) || isObjectField(node)
  }
  var isDataFieldState = function (node) {
    return (
      isFieldState(node) || isObjectFieldState(node) || isArrayFieldState(node)
    )
  }
  var isObjectFieldState = function (state) {
    if (
      Formily.Shared.isFn(
        state === null || state === void 0 ? void 0 : state.initialize
      )
    )
      return false
    return (
      (state === null || state === void 0 ? void 0 : state.displayName) ===
      'ObjectField'
    )
  }
  var isVoidFieldState = function (state) {
    if (
      Formily.Shared.isFn(
        state === null || state === void 0 ? void 0 : state.initialize
      )
    )
      return false
    return (
      (state === null || state === void 0 ? void 0 : state.displayName) ===
      'VoidField'
    )
  }
  var isQuery = function (query) {
    return query && query instanceof Query
  }

  var Graph = /** @class */ (function () {
    function Graph(form) {
      var _this = this
      this.getGraph = function () {
        var graph = {}
        graph[''] = _this.form.getState()
        Formily.Shared.each(_this.form.fields, function (field, identifier) {
          graph[identifier] = field.getState()
        })
        return graph
      }
      this.setGraph = function (graph) {
        var form = _this.form
        var createField = function (identifier, state) {
          var address = Formily.Shared.FormPath.parse(identifier)
          var name = address.segments[address.segments.length - 1]
          var basePath = address.parent()
          if (isFieldState(state)) {
            return _this.form.createField({ name: name, basePath: basePath })
          } else if (isArrayFieldState(state)) {
            return _this.form.createArrayField({
              name: name,
              basePath: basePath,
            })
          } else if (isObjectFieldState(state)) {
            return _this.form.createObjectField({
              name: name,
              basePath: basePath,
            })
          } else {
            return _this.form.createVoidField({
              name: name,
              basePath: basePath,
            })
          }
        }
        Formily.Shared.each(graph, function (state, address) {
          if (isFormState(state)) {
            form.setState(state)
          } else {
            var field = form.fields[address]
            if (field) {
              field.setState(state)
            } else {
              createField(address, state).setState(state)
            }
          }
        })
      }
      this.form = form
      Formily.Reactive.define(this, {
        setGraph: Formily.Reactive.batch,
      })
    }
    return Graph
  })()

  var output = function (field, taker) {
    if (!field) return
    if (Formily.Shared.isFn(taker)) {
      return taker(field, field.address)
    }
    return field
  }
  var Query = /** @class */ (function () {
    function Query(props) {
      var _this = this
      this.addresses = []
      this.pattern = Formily.Shared.FormPath.parse(props.pattern, props.base)
      this.form = props.form
      if (!this.pattern.isMatchPattern) {
        var identifier = this.pattern.toString()
        var indexIdentifier = this.form.indexes[identifier]
        var absoluteField = this.form.fields[identifier]
        var indexField = this.form.fields[indexIdentifier]
        if (absoluteField) {
          this.addresses = [identifier]
        } else if (indexField) {
          this.addresses = [indexIdentifier]
        }
      } else {
        Formily.Shared.each(this.form.fields, function (field, address) {
          if (field.match(_this.pattern)) {
            _this.addresses.push(address)
          }
        })
      }
    }
    Query.prototype.take = function (taker) {
      return output(this.form.fields[this.addresses[0]], taker)
    }
    Query.prototype.map = function (iterator) {
      var _this = this
      return this.addresses.map(function (address) {
        return output(_this.form.fields[address], iterator)
      })
    }
    Query.prototype.forEach = function (iterator) {
      var _this = this
      return this.addresses.forEach(function (address) {
        return output(_this.form.fields[address], iterator)
      })
    }
    Query.prototype.reduce = function (reducer, initial) {
      var _this = this
      return this.addresses.reduce(function (value, address) {
        return output(_this.form.fields[address], function (field, address) {
          return reducer(value, field, address)
        })
      }, initial)
    }
    Query.prototype.get = function (key) {
      var results = this.take()
      if (results) {
        return results[key]
      }
    }
    Query.prototype.getIn = function (pattern) {
      return Formily.Shared.FormPath.getIn(this.take(), pattern)
    }
    Query.prototype.value = function () {
      return this.form.getValuesIn(this.pattern)
    }
    Query.prototype.initialValue = function () {
      return this.form.getInitialValuesIn(this.pattern)
    }
    return Query
  })()

  exports.LifeCycleTypes = void 0
  ;(function (LifeCycleTypes) {
    /**
     * Form LifeCycle
     **/
    LifeCycleTypes['ON_FORM_INIT'] = 'onFormInit'
    LifeCycleTypes['ON_FORM_MOUNT'] = 'onFormMount'
    LifeCycleTypes['ON_FORM_UNMOUNT'] = 'onFormUnmount'
    LifeCycleTypes['ON_FORM_INPUT_CHANGE'] = 'onFormInputChange'
    LifeCycleTypes['ON_FORM_VALUES_CHANGE'] = 'onFormValuesChange'
    LifeCycleTypes['ON_FORM_INITIAL_VALUES_CHANGE'] =
      'onFormInitialValuesChange'
    LifeCycleTypes['ON_FORM_SUBMIT'] = 'onFormSubmit'
    LifeCycleTypes['ON_FORM_RESET'] = 'onFormReset'
    LifeCycleTypes['ON_FORM_SUBMIT_START'] = 'onFormSubmitStart'
    LifeCycleTypes['ON_FORM_SUBMITTING'] = 'onFormSubmitting'
    LifeCycleTypes['ON_FORM_SUBMIT_END'] = 'onFormSubmitEnd'
    LifeCycleTypes['ON_FORM_SUBMIT_VALIDATE_START'] =
      'onFormSubmitValidateStart'
    LifeCycleTypes['ON_FORM_SUBMIT_VALIDATE_SUCCESS'] =
      'onFormSubmitValidateSuccess'
    LifeCycleTypes['ON_FORM_SUBMIT_VALIDATE_FAILED'] =
      'onFormSubmitValidateFailed'
    LifeCycleTypes['ON_FORM_SUBMIT_VALIDATE_END'] = 'onFormSubmitValidateEnd'
    LifeCycleTypes['ON_FORM_SUBMIT_SUCCESS'] = 'onFormSubmitSuccess'
    LifeCycleTypes['ON_FORM_SUBMIT_FAILED'] = 'onFormSubmitFailed'
    LifeCycleTypes['ON_FORM_VALIDATE_START'] = 'onFormValidateStart'
    LifeCycleTypes['ON_FORM_VALIDATING'] = 'onFormValidating'
    LifeCycleTypes['ON_FORM_VALIDATE_SUCCESS'] = 'onFormValidateSuccess'
    LifeCycleTypes['ON_FORM_VALIDATE_FAILED'] = 'onFormValidateFailed'
    LifeCycleTypes['ON_FORM_VALIDATE_END'] = 'onFormValidateEnd'
    LifeCycleTypes['ON_FORM_GRAPH_CHANGE'] = 'onFormGraphChange'
    LifeCycleTypes['ON_FORM_LOADING'] = 'onFormLoading'
    /**
     * Field LifeCycle
     **/
    LifeCycleTypes['ON_FIELD_INIT'] = 'onFieldInit'
    LifeCycleTypes['ON_FIELD_INPUT_VALUE_CHANGE'] = 'onFieldInputValueChange'
    LifeCycleTypes['ON_FIELD_VALUE_CHANGE'] = 'onFieldValueChange'
    LifeCycleTypes['ON_FIELD_INITIAL_VALUE_CHANGE'] =
      'onFieldInitialValueChange'
    LifeCycleTypes['ON_FIELD_SUBMIT'] = 'onFieldSubmit'
    LifeCycleTypes['ON_FIELD_SUBMIT_START'] = 'onFieldSubmitStart'
    LifeCycleTypes['ON_FIELD_SUBMITTING'] = 'onFieldSubmitting'
    LifeCycleTypes['ON_FIELD_SUBMIT_END'] = 'onFieldSubmitEnd'
    LifeCycleTypes['ON_FIELD_SUBMIT_VALIDATE_START'] =
      'onFieldSubmitValidateStart'
    LifeCycleTypes['ON_FIELD_SUBMIT_VALIDATE_SUCCESS'] =
      'onFieldSubmitValidateSuccess'
    LifeCycleTypes['ON_FIELD_SUBMIT_VALIDATE_FAILED'] =
      'onFieldSubmitValidateFailed'
    LifeCycleTypes['ON_FIELD_SUBMIT_VALIDATE_END'] = 'onFieldSubmitValidateEnd'
    LifeCycleTypes['ON_FIELD_SUBMIT_SUCCESS'] = 'onFieldSubmitSuccess'
    LifeCycleTypes['ON_FIELD_SUBMIT_FAILED'] = 'onFieldSubmitFailed'
    LifeCycleTypes['ON_FIELD_VALIDATE_START'] = 'onFieldValidateStart'
    LifeCycleTypes['ON_FIELD_VALIDATING'] = 'onFieldValidating'
    LifeCycleTypes['ON_FIELD_VALIDATE_SUCCESS'] = 'onFieldValidateSuccess'
    LifeCycleTypes['ON_FIELD_VALIDATE_FAILED'] = 'onFieldValidateFailed'
    LifeCycleTypes['ON_FIELD_VALIDATE_END'] = 'onFieldValidateEnd'
    LifeCycleTypes['ON_FIELD_LOADING'] = 'onFieldLoading'
    LifeCycleTypes['ON_FIELD_RESET'] = 'onFieldReset'
    LifeCycleTypes['ON_FIELD_MOUNT'] = 'onFieldMount'
    LifeCycleTypes['ON_FIELD_UNMOUNT'] = 'onFieldUnmount'
  })(exports.LifeCycleTypes || (exports.LifeCycleTypes = {}))

  var ReservedProperties = {
    form: true,
    parent: true,
    props: true,
    caches: true,
    requests: true,
    disposers: true,
    heart: true,
    graph: true,
    indexes: true,
    fields: true,
    lifecycles: true,
    componentType: true,
    componentProps: true,
    decoratorType: true,
    decoratorProps: true,
  }
  var ReadOnlyProperties = {
    address: true,
    path: true,
    valid: true,
    invalid: true,
    selfValid: true,
    selfInvalid: true,
    errors: true,
    successes: true,
    warnings: true,
    validateStatus: true,
  }
  var SELF_DISPLAY = 'selfDisplay'
  var SELF_PATTERN = 'selfPattern'
  var MutuallyExclusiveProperties = {
    pattern: SELF_PATTERN,
    editable: SELF_PATTERN,
    readOnly: SELF_PATTERN,
    readPretty: SELF_PATTERN,
    disabled: SELF_PATTERN,
    display: SELF_DISPLAY,
    hidden: SELF_DISPLAY,
    visible: SELF_DISPLAY,
  }
  var RESPONSE_REQUEST_DURATION = 100
  var GlobalState = {
    lifecycles: [],
    context: [],
    effectStart: false,
    effectEnd: false,
    initializing: false,
  }
  var NumberIndexReg = /^\.(\d+)/

  var hasOwnProperty = Object.prototype.hasOwnProperty
  var notify = function (target, formType, fieldType) {
    if (isForm(target)) {
      target.notify(formType)
    } else {
      target.notify(fieldType)
    }
  }
  var isHTMLInputEvent = function (event, stopPropagation) {
    var _a
    if (stopPropagation === void 0) {
      stopPropagation = true
    }
    if (event === null || event === void 0 ? void 0 : event.target) {
      if (
        Formily.Shared.isValid(event.target.value) ||
        Formily.Shared.isValid(event.target.checked)
      )
        return true
      if (
        event.target.tagName &&
        event.target.tagName !== 'INPUT' &&
        event.target.tagName !== 'TEXTAREA' &&
        event.target.tagName !== 'SELECT'
      ) {
        return false
      }
      if (stopPropagation)
        (_a = event.stopPropagation) === null || _a === void 0
          ? void 0
          : _a.call(event)
      return true
    }
    return false
  }
  var getValuesFromEvent = function (args) {
    return args.map(function (event) {
      if (event === null || event === void 0 ? void 0 : event.target) {
        if (Formily.Shared.isValid(event.target.value))
          return event.target.value
        if (Formily.Shared.isValid(event.target.checked))
          return event.target.checked
        return
      }
      return event
    })
  }
  var buildFieldPath = function (field) {
    var prevArray = false
    var fields = field.form.fields
    var segments = field.address.segments
    var path = segments.reduce(function (path, key, index) {
      var currentPath = path.concat(key)
      var currentAddress = segments.slice(0, index + 1)
      var current = fields[currentAddress.join('.')]
      if (prevArray) {
        prevArray = false
        return path
      }
      if (index >= segments.length - 1) {
        if (isVoidField(field)) {
          return currentPath
        }
        return currentPath
      }
      if (isVoidField(current)) {
        var parentAddress = segments.slice(0, index)
        var parent_1 = fields[parentAddress.join('.')]
        if (isArrayField(parent_1) && Formily.Shared.isNumberLike(key)) {
          prevArray = true
          return currentPath
        }
        return path
      } else {
        prevArray = false
      }
      return currentPath
    }, [])
    return new Formily.Shared.FormPath(path)
  }
  var buildNodeIndexes = function (field, address) {
    field.address = Formily.Shared.FormPath.parse(address)
    field.path = buildFieldPath(field)
    field.form.indexes[field.path.toString()] = field.address.toString()
    return field
  }
  var patchFieldStates = function (target, patches) {
    patches.forEach(function (_a) {
      var _b
      var type = _a.type,
        address = _a.address,
        oldAddress = _a.oldAddress,
        payload = _a.payload
      if (type === 'remove') {
        ;(_b = target[address]) === null || _b === void 0
          ? void 0
          : _b.dispose()
        delete target[address]
      } else if (type === 'update') {
        if (payload) {
          target[address] = payload
          if (target[oldAddress] === payload) delete target[oldAddress]
        }
        if (address && payload) {
          buildNodeIndexes(payload, address)
        }
      }
    })
  }
  var patchFormValues = function (form, path, source) {
    var update = function (path, source) {
      if (path.length) {
        form.setValuesIn(path, Formily.Shared.clone(source))
      } else {
        Object.assign(form.values, Formily.Shared.clone(source))
      }
    }
    var patch = function (source, path) {
      if (path === void 0) {
        path = []
      }
      var targetValue = form.getValuesIn(path)
      var targetField = form.query(path).take()
      if (allowAssignDefaultValue(targetValue, source)) {
        update(path, source)
      } else {
        if (Formily.Shared.isEmpty(source)) return
        if (GlobalState.initializing) return
        if (
          Formily.Shared.isPlainObj(targetValue) &&
          Formily.Shared.isPlainObj(source)
        ) {
          Formily.Shared.each(source, function (value, key) {
            patch(value, path.concat(key))
          })
        } else {
          if (targetField) {
            if (!isVoidField(targetField) && !targetField.selfModified) {
              update(path, source)
            }
          } else if (form.initialized) {
            update(path, source)
          }
        }
      }
    }
    patch(source, path)
  }
  var matchFeedback = function (search, feedback) {
    if (!search || !feedback) return false
    if (search.type && search.type !== feedback.type) return false
    if (search.code && search.code !== feedback.code) return false
    if (search.path && feedback.path) {
      if (!Formily.Shared.FormPath.parse(search.path).match(feedback.path))
        return false
    }
    if (search.address && feedback.address) {
      if (
        !Formily.Shared.FormPath.parse(search.address).match(feedback.address)
      )
        return false
    }
    if (search.triggerType && search.triggerType !== feedback.triggerType)
      return false
    return true
  }
  var queryFeedbacks = function (field, search) {
    return field.feedbacks.filter(function (feedback) {
      var _a, _b, _c
      if (
        !((_a = feedback.messages) === null || _a === void 0
          ? void 0
          : _a.length)
      )
        return false
      return matchFeedback(
        search,
        __assign(__assign({}, feedback), {
          address:
            (_b = field.address) === null || _b === void 0
              ? void 0
              : _b.toString(),
          path:
            (_c = field.path) === null || _c === void 0
              ? void 0
              : _c.toString(),
        })
      )
    })
  }
  var queryFeedbackMessages = function (field, search) {
    return queryFeedbacks(field, search).reduce(function (buf, info) {
      return Formily.Shared.isEmpty(info.messages)
        ? buf
        : buf.concat(info.messages)
    }, [])
  }
  var updateFeedback = function (field, feedback) {
    if (!feedback) return
    return Formily.Reactive.batch(function () {
      var _a, _b
      if (!field.feedbacks.length) {
        if (
          !((_a = feedback.messages) === null || _a === void 0
            ? void 0
            : _a.length)
        ) {
          return
        }
        field.feedbacks = [feedback]
      } else {
        var searched_1 = queryFeedbacks(field, feedback)
        if (searched_1.length) {
          field.feedbacks = field.feedbacks.reduce(function (buf, item) {
            var _a
            if (searched_1.includes(item)) {
              if (
                (_a = feedback.messages) === null || _a === void 0
                  ? void 0
                  : _a.length
              ) {
                item.messages = feedback.messages
                return buf.concat(item)
              } else {
                return buf
              }
            } else {
              return buf.concat(item)
            }
          }, [])
          return
        } else if (
          (_b = feedback.messages) === null || _b === void 0
            ? void 0
            : _b.length
        ) {
          field.feedbacks = field.feedbacks.concat(feedback)
        }
      }
    })
  }
  var validateToFeedbacks = function (field, triggerType) {
    return __awaiter(void 0, void 0, void 0, function () {
      var results
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              Formily.Validator.validate(field.value, field.validator, {
                triggerType: triggerType,
                validateFirst:
                  field.props.validateFirst || field.form.props.validateFirst,
                context: { field: field, form: field.form },
              }),
            ]
          case 1:
            results = _a.sent()
            Formily.Reactive.batch(function () {
              Formily.Shared.each(results, function (messages, type) {
                field.setFeedback({
                  triggerType: triggerType,
                  type: type,
                  code: Formily.Shared.pascalCase('validate-'.concat(type)),
                  messages: messages,
                })
              })
            })
            return [2 /*return*/, results]
        }
      })
    })
  }
  var setValidatorRule = function (field, name, value) {
    var _a, _b
    if (!Formily.Shared.isValid(value)) return
    var hasRule = Formily.Validator.parseValidatorDescriptions(
      field.validator
    ).some(function (desc) {
      return name in desc
    })
    var rule = ((_a = {}), (_a[name] = value), _a)
    if (hasRule) {
      if (Formily.Shared.isArr(field.validator)) {
        field.validator = field.validator.map(function (desc) {
          if (
            Formily.Shared.isPlainObj(desc) &&
            hasOwnProperty.call(desc, name)
          ) {
            desc[name] = value
            return desc
          }
          return desc
        })
      } else if (Formily.Shared.isPlainObj(field.validator)) {
        field.validator[name] = value
      } else {
        field.validator = ((_b = {}), (_b[name] = value), _b)
      }
    } else {
      if (Formily.Shared.isArr(field.validator)) {
        if (name === 'required') {
          field.validator.unshift(rule)
        } else {
          field.validator.push(rule)
        }
      } else {
        if (name === 'required') {
          field.validator = [rule, field.validator]
        } else if (Formily.Shared.isPlainObj(field.validator)) {
          field.validator[name] = value
        } else if (field.validator) {
          field.validator = [field.validator, rule]
        } else {
          field.validator = rule
        }
      }
    }
  }
  var spliceArrayState = function (field, props) {
    var _a = __assign({ startIndex: 0, deleteCount: 0, insertCount: 0 }, props),
      startIndex = _a.startIndex,
      deleteCount = _a.deleteCount,
      insertCount = _a.insertCount
    var address = field.address.toString()
    var addrLength = address.length
    var fields = field.form.fields
    var fieldPatches = []
    var offset = insertCount - deleteCount
    var isArrayChildren = function (identifier) {
      return identifier.indexOf(address) === 0 && identifier.length > addrLength
    }
    var isAfterNode = function (identifier) {
      var _a
      var afterStr = identifier.substring(addrLength)
      var number =
        (_a = afterStr.match(NumberIndexReg)) === null || _a === void 0
          ? void 0
          : _a[1]
      if (number === undefined) return false
      var index = Number(number)
      return index > startIndex + deleteCount - 1
    }
    var isInsertNode = function (identifier) {
      var _a
      var afterStr = identifier.substring(addrLength)
      var number =
        (_a = afterStr.match(NumberIndexReg)) === null || _a === void 0
          ? void 0
          : _a[1]
      if (number === undefined) return false
      var index = Number(number)
      return index >= startIndex && index < startIndex + insertCount
    }
    var isDeleteNode = function (identifier) {
      var _a
      var preStr = identifier.substring(0, addrLength)
      var afterStr = identifier.substring(addrLength)
      var number =
        (_a = afterStr.match(NumberIndexReg)) === null || _a === void 0
          ? void 0
          : _a[1]
      if (number === undefined) return false
      var index = Number(number)
      return (
        index >= startIndex &&
        !fields[
          ''
            .concat(preStr)
            .concat(afterStr.replace(/^\.\d+/, '.'.concat(index + deleteCount)))
        ]
      )
    }
    var moveIndex = function (identifier) {
      var _a
      if (offset === 0) return identifier
      var preStr = identifier.substring(0, addrLength)
      var afterStr = identifier.substring(addrLength)
      var number =
        (_a = afterStr.match(NumberIndexReg)) === null || _a === void 0
          ? void 0
          : _a[1]
      if (number === undefined) return identifier
      var index = Number(number) + offset
      return ''
        .concat(preStr)
        .concat(afterStr.replace(/^\.\d+/, '.'.concat(index)))
    }
    Formily.Reactive.batch(function () {
      Formily.Shared.each(fields, function (field, identifier) {
        if (isArrayChildren(identifier)) {
          if (isAfterNode(identifier)) {
            var newIdentifier = moveIndex(identifier)
            fieldPatches.push({
              type: 'update',
              address: newIdentifier,
              oldAddress: identifier,
              payload: field,
            })
          }
          if (isInsertNode(identifier) || isDeleteNode(identifier)) {
            fieldPatches.push({ type: 'remove', address: identifier })
          }
        }
      })
      patchFieldStates(fields, fieldPatches)
    })
    field.form.notify(exports.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
  }
  var exchangeArrayState = function (field, props) {
    var _a = __assign({ fromIndex: 0, toIndex: 0 }, props),
      fromIndex = _a.fromIndex,
      toIndex = _a.toIndex
    var address = field.address.toString()
    var fields = field.form.fields
    var addrLength = address.length
    var fieldPatches = []
    var isArrayChildren = function (identifier) {
      return identifier.indexOf(address) === 0 && identifier.length > addrLength
    }
    var isDown = fromIndex < toIndex
    var isMoveNode = function (identifier) {
      var _a
      var afterStr = identifier.slice(address.length)
      var number =
        (_a = afterStr.match(NumberIndexReg)) === null || _a === void 0
          ? void 0
          : _a[1]
      if (number === undefined) return false
      var index = Number(number)
      return isDown
        ? index > fromIndex && index <= toIndex
        : index < fromIndex && index >= toIndex
    }
    var isFromNode = function (identifier) {
      var _a
      var afterStr = identifier.substring(addrLength)
      var number =
        (_a = afterStr.match(NumberIndexReg)) === null || _a === void 0
          ? void 0
          : _a[1]
      if (number === undefined) return false
      var index = Number(number)
      return index === fromIndex
    }
    var moveIndex = function (identifier) {
      var preStr = identifier.substring(0, addrLength)
      var afterStr = identifier.substring(addrLength)
      var number = afterStr.match(NumberIndexReg)[1]
      var current = Number(number)
      var index = current
      if (index === fromIndex) {
        index = toIndex
      } else {
        index += isDown ? -1 : 1
      }
      return ''
        .concat(preStr)
        .concat(afterStr.replace(/^\.\d+/, '.'.concat(index)))
    }
    Formily.Reactive.batch(function () {
      Formily.Shared.each(fields, function (field, identifier) {
        if (isArrayChildren(identifier)) {
          if (isMoveNode(identifier) || isFromNode(identifier)) {
            var newIdentifier = moveIndex(identifier)
            fieldPatches.push({
              type: 'update',
              address: newIdentifier,
              oldAddress: identifier,
              payload: field,
            })
            if (!fields[newIdentifier]) {
              fieldPatches.push({
                type: 'remove',
                address: identifier,
              })
            }
          }
        }
      })
      patchFieldStates(fields, fieldPatches)
    })
    field.form.notify(exports.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
  }
  var cleanupArrayChildren = function (field, start) {
    var address = field.address.toString()
    var fields = field.form.fields
    var isArrayChildren = function (identifier) {
      return (
        identifier.indexOf(address) === 0 && identifier.length > address.length
      )
    }
    var isNeedCleanup = function (identifier) {
      var _a
      var afterStr = identifier.slice(address.length)
      var number =
        (_a = afterStr.match(NumberIndexReg)) === null || _a === void 0
          ? void 0
          : _a[1]
      if (number === undefined) return false
      var index = Number(number)
      return index >= start
    }
    Formily.Reactive.batch(function () {
      Formily.Shared.each(fields, function (field, identifier) {
        if (isArrayChildren(identifier) && isNeedCleanup(identifier)) {
          field.destroy()
        }
      })
    })
  }
  var cleanupObjectChildren = function (field, keys) {
    if (keys.length === 0) return
    var address = field.address.toString()
    var fields = field.form.fields
    var isObjectChildren = function (identifier) {
      return (
        identifier.indexOf(address) === 0 && identifier.length > address.length
      )
    }
    var isNeedCleanup = function (identifier) {
      var _a
      var afterStr = identifier.slice(address.length)
      var key =
        (_a = afterStr.match(/^\.([^.]+)/)) === null || _a === void 0
          ? void 0
          : _a[1]
      if (key === undefined) return false
      return keys.includes(key)
    }
    Formily.Reactive.batch(function () {
      Formily.Shared.each(fields, function (field, identifier) {
        if (isObjectChildren(identifier) && isNeedCleanup(identifier)) {
          field.destroy()
        }
      })
    })
  }
  var initFieldUpdate = Formily.Reactive.batch.scope.bound(function (field) {
    var form = field.form
    var updates = Formily.Shared.FormPath.ensureIn(form, 'requests.updates', [])
    var indexes = Formily.Shared.FormPath.ensureIn(
      form,
      'requests.updateIndexes',
      {}
    )
    for (var index = 0; index < updates.length; index++) {
      var _a = updates[index],
        pattern = _a.pattern,
        callbacks = _a.callbacks
      var removed = false
      if (field.match(pattern)) {
        callbacks.forEach(function (callback) {
          field.setState(callback)
        })
        if (!pattern.isWildMatchPattern && !pattern.isMatchPattern) {
          updates.splice(index--, 1)
          removed = true
        }
      }
      if (!removed) {
        indexes[pattern.toString()] = index
      } else {
        delete indexes[pattern.toString()]
      }
    }
  })
  var subscribeUpdate = function (form, pattern, callback) {
    var updates = Formily.Shared.FormPath.ensureIn(form, 'requests.updates', [])
    var indexes = Formily.Shared.FormPath.ensureIn(
      form,
      'requests.updateIndexes',
      {}
    )
    var id = pattern.toString()
    var current = indexes[id]
    if (Formily.Shared.isValid(current)) {
      if (
        updates[current] &&
        !updates[current].callbacks.some(function (fn) {
          return fn.toString() === callback.toString() ? fn === callback : false
        })
      ) {
        updates[current].callbacks.push(callback)
      }
    } else {
      indexes[id] = updates.length
      updates.push({
        pattern: pattern,
        callbacks: [callback],
      })
    }
  }
  var deserialize = function (model, setter) {
    if (!model) return
    if (Formily.Shared.isFn(setter)) {
      setter(model)
    } else {
      for (var key in setter) {
        if (!hasOwnProperty.call(setter, key)) continue
        if (ReadOnlyProperties[key] || ReservedProperties[key]) continue
        var MutuallyExclusiveKey = MutuallyExclusiveProperties[key]
        if (
          MutuallyExclusiveKey &&
          hasOwnProperty.call(setter, MutuallyExclusiveKey) &&
          !Formily.Shared.isValid(setter[MutuallyExclusiveKey])
        )
          continue
        var value = setter[key]
        if (Formily.Shared.isFn(value)) continue
        model[key] = value
      }
    }
    return model
  }
  var serialize = function (model, getter) {
    if (Formily.Shared.isFn(getter)) {
      return getter(model)
    } else {
      var results = {}
      for (var key in model) {
        if (!hasOwnProperty.call(model, key)) continue
        if (ReservedProperties[key]) continue
        if (key === 'address' || key === 'path') {
          results[key] = model[key].toString()
          continue
        }
        var value = model[key]
        if (Formily.Shared.isFn(value)) continue
        results[key] = Formily.Reactive.toJS(value)
      }
      return results
    }
  }
  var createChildrenFeedbackFilter = function (field) {
    var _a
    var identifier =
      (_a = field.address) === null || _a === void 0 ? void 0 : _a.toString()
    return function (_a) {
      var address = _a.address
      return address.indexOf(identifier) === 0
    }
  }
  var createStateSetter = function (model) {
    return Formily.Reactive.batch.bound(function (setter) {
      return deserialize(model, setter)
    })
  }
  var createStateGetter = function (model) {
    return function (getter) {
      return serialize(model, getter)
    }
  }
  var createBatchStateSetter = function (form) {
    return Formily.Reactive.batch.bound(function (pattern, payload) {
      if (isQuery(pattern)) {
        pattern.forEach(function (field) {
          field.setState(payload)
        })
      } else if (isGeneralField(pattern)) {
        pattern.setState(payload)
      } else {
        var matchCount_1 = 0,
          path = Formily.Shared.FormPath.parse(pattern)
        form.query(path).forEach(function (field) {
          field.setState(payload)
          matchCount_1++
        })
        if (matchCount_1 === 0 || path.isWildMatchPattern) {
          subscribeUpdate(form, path, payload)
        }
      }
    })
  }
  var createBatchStateGetter = function (form) {
    return function (pattern, payload) {
      if (isQuery(pattern)) {
        return pattern.take(payload)
      } else if (isGeneralField(pattern)) {
        return pattern.getState(payload)
      } else {
        return form.query(pattern).take(function (field) {
          return field.getState(payload)
        })
      }
    }
  }
  var triggerFormInitialValuesChange = function (form, change) {
    var path = change.path
    if (Array.isArray(change.object) && change.key === 'length') return
    if (
      Formily.Reactive.contains(form.initialValues, change.object) ||
      Formily.Reactive.contains(form.initialValues, change.value)
    ) {
      if (change.type === 'add' || change.type === 'set') {
        patchFormValues(form, path.slice(1), change.value)
      }
      if (form.initialized) {
        form.notify(exports.LifeCycleTypes.ON_FORM_INITIAL_VALUES_CHANGE)
      }
    }
  }
  var triggerFormValuesChange = function (form, change) {
    if (Array.isArray(change.object) && change.key === 'length') return
    if (
      (Formily.Reactive.contains(form.values, change.object) ||
        Formily.Reactive.contains(form.values, change.value)) &&
      form.initialized
    ) {
      form.notify(exports.LifeCycleTypes.ON_FORM_VALUES_CHANGE)
    }
  }
  var setValidating = function (target, validating) {
    clearTimeout(target.requests.validate)
    if (validating) {
      target.requests.validate = setTimeout(function () {
        Formily.Reactive.batch(function () {
          target.validating = validating
          notify(
            target,
            exports.LifeCycleTypes.ON_FORM_VALIDATING,
            exports.LifeCycleTypes.ON_FIELD_VALIDATING
          )
        })
      }, RESPONSE_REQUEST_DURATION)
      notify(
        target,
        exports.LifeCycleTypes.ON_FORM_VALIDATE_START,
        exports.LifeCycleTypes.ON_FIELD_VALIDATE_START
      )
    } else {
      if (target.validating !== validating) {
        target.validating = validating
      }
      notify(
        target,
        exports.LifeCycleTypes.ON_FORM_VALIDATE_END,
        exports.LifeCycleTypes.ON_FIELD_VALIDATE_END
      )
    }
  }
  var setSubmitting = function (target, submitting) {
    clearTimeout(target.requests.submit)
    if (submitting) {
      target.requests.submit = setTimeout(function () {
        Formily.Reactive.batch(function () {
          target.submitting = submitting
          notify(
            target,
            exports.LifeCycleTypes.ON_FORM_SUBMITTING,
            exports.LifeCycleTypes.ON_FIELD_SUBMITTING
          )
        })
      }, RESPONSE_REQUEST_DURATION)
      notify(
        target,
        exports.LifeCycleTypes.ON_FORM_SUBMIT_START,
        exports.LifeCycleTypes.ON_FIELD_SUBMIT_START
      )
    } else {
      if (target.submitting !== submitting) {
        target.submitting = submitting
      }
      notify(
        target,
        exports.LifeCycleTypes.ON_FORM_SUBMIT_END,
        exports.LifeCycleTypes.ON_FIELD_SUBMIT_END
      )
    }
  }
  var setLoading = function (target, loading) {
    clearTimeout(target.requests.loading)
    if (loading) {
      target.requests.loading = setTimeout(function () {
        Formily.Reactive.batch(function () {
          target.loading = loading
          notify(
            target,
            exports.LifeCycleTypes.ON_FORM_LOADING,
            exports.LifeCycleTypes.ON_FIELD_LOADING
          )
        })
      }, RESPONSE_REQUEST_DURATION)
    } else if (target.loading !== loading) {
      target.loading = loading
    }
  }
  var batchSubmit = function (target, onSubmit) {
    return __awaiter(void 0, void 0, void 0, function () {
      var getValues, results, e_2
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            getValues = function (target) {
              if (isForm(target)) {
                return Formily.Reactive.toJS(target.values)
              }
              return Formily.Reactive.toJS(target.value)
            }
            target.setSubmitting(true)
            _a.label = 1
          case 1:
            _a.trys.push([1, 3, , 4])
            notify(
              target,
              exports.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_START,
              exports.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_START
            )
            return [4 /*yield*/, target.validate()]
          case 2:
            _a.sent()
            notify(
              target,
              exports.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_SUCCESS,
              exports.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_SUCCESS
            )
            return [3 /*break*/, 4]
          case 3:
            _a.sent()
            notify(
              target,
              exports.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_FAILED,
              exports.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_FAILED
            )
            return [3 /*break*/, 4]
          case 4:
            notify(
              target,
              exports.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_END,
              exports.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_END
            )
            _a.label = 5
          case 5:
            _a.trys.push([5, 9, , 10])
            if (target.invalid) {
              throw target.errors
            }
            if (!Formily.Shared.isFn(onSubmit)) return [3 /*break*/, 7]
            return [4 /*yield*/, onSubmit(getValues(target))]
          case 6:
            results = _a.sent()
            return [3 /*break*/, 8]
          case 7:
            results = getValues(target)
            _a.label = 8
          case 8:
            notify(
              target,
              exports.LifeCycleTypes.ON_FORM_SUBMIT_SUCCESS,
              exports.LifeCycleTypes.ON_FIELD_SUBMIT_SUCCESS
            )
            return [3 /*break*/, 10]
          case 9:
            e_2 = _a.sent()
            target.setSubmitting(false)
            notify(
              target,
              exports.LifeCycleTypes.ON_FORM_SUBMIT_FAILED,
              exports.LifeCycleTypes.ON_FIELD_SUBMIT_FAILED
            )
            notify(
              target,
              exports.LifeCycleTypes.ON_FORM_SUBMIT,
              exports.LifeCycleTypes.ON_FIELD_SUBMIT
            )
            throw e_2
          case 10:
            target.setSubmitting(false)
            notify(
              target,
              exports.LifeCycleTypes.ON_FORM_SUBMIT,
              exports.LifeCycleTypes.ON_FIELD_SUBMIT
            )
            return [2 /*return*/, results]
        }
      })
    })
  }
  var batchValidate = function (target, pattern, triggerType) {
    return __awaiter(void 0, void 0, void 0, function () {
      var tasks
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (isForm(target)) target.setValidating(true)
            else {
              if (target.pattern !== 'editable' || target.display !== 'visible')
                return [2 /*return*/]
            }
            tasks = []
            target.query(pattern).forEach(function (field) {
              if (!isVoidField(field)) {
                tasks.push(validateSelf(field, triggerType, field === target))
              }
            })
            return [4 /*yield*/, Promise.all(tasks)]
          case 1:
            _a.sent()
            if (isForm(target)) target.setValidating(false)
            if (target.invalid) {
              notify(
                target,
                exports.LifeCycleTypes.ON_FORM_VALIDATE_FAILED,
                exports.LifeCycleTypes.ON_FIELD_VALIDATE_FAILED
              )
              throw target.errors
            }
            notify(
              target,
              exports.LifeCycleTypes.ON_FORM_VALIDATE_SUCCESS,
              exports.LifeCycleTypes.ON_FIELD_VALIDATE_SUCCESS
            )
            return [2 /*return*/]
        }
      })
    })
  }
  var batchReset = function (target, pattern, options) {
    return __awaiter(void 0, void 0, void 0, function () {
      var tasks
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            tasks = []
            target.query(pattern).forEach(function (field) {
              if (!isVoidField(field)) {
                tasks.push(resetSelf(field, options, target === field))
              }
            })
            if (isForm(target)) {
              target.modified = false
            }
            notify(
              target,
              exports.LifeCycleTypes.ON_FORM_RESET,
              exports.LifeCycleTypes.ON_FIELD_RESET
            )
            return [4 /*yield*/, Promise.all(tasks)]
          case 1:
            _a.sent()
            return [2 /*return*/]
        }
      })
    })
  }
  var validateSelf = Formily.Reactive.batch.bound(function (
    target,
    triggerType,
    noEmit
  ) {
    if (noEmit === void 0) {
      noEmit = false
    }
    return __awaiter(void 0, void 0, void 0, function () {
      var start, end, allTriggerTypes, results_1, i, payload, results
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            start = function () {
              setValidating(target, true)
            }
            end = function () {
              setValidating(target, false)
              if (noEmit) return
              if (target.selfValid) {
                target.notify(exports.LifeCycleTypes.ON_FIELD_VALIDATE_SUCCESS)
              } else {
                target.notify(exports.LifeCycleTypes.ON_FIELD_VALIDATE_FAILED)
              }
            }
            if (target.pattern !== 'editable' || target.display !== 'visible')
              return [2 /*return*/, {}]
            start()
            if (!!triggerType) return [3 /*break*/, 5]
            allTriggerTypes = Formily.Validator.parseValidatorDescriptions(
              target.validator
            ).reduce(function (types, desc) {
              return types.indexOf(desc.triggerType) > -1
                ? types
                : types.concat(desc.triggerType)
            }, [])
            results_1 = {}
            i = 0
            _a.label = 1
          case 1:
            if (!(i < allTriggerTypes.length)) return [3 /*break*/, 4]
            return [
              4 /*yield*/,
              validateToFeedbacks(target, allTriggerTypes[i]),
            ]
          case 2:
            payload = _a.sent()
            Formily.Shared.each(payload, function (result, key) {
              results_1[key] = results_1[key] || []
              results_1[key] = results_1[key].concat(result)
            })
            _a.label = 3
          case 3:
            i++
            return [3 /*break*/, 1]
          case 4:
            end()
            return [2 /*return*/, results_1]
          case 5:
            return [4 /*yield*/, validateToFeedbacks(target, triggerType)]
          case 6:
            results = _a.sent()
            end()
            return [2 /*return*/, results]
        }
      })
    })
  })
  var resetSelf = Formily.Reactive.batch.bound(function (
    target,
    options,
    noEmit
  ) {
    if (noEmit === void 0) {
      noEmit = false
    }
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            target.modified = false
            target.selfModified = false
            target.visited = false
            target.feedbacks = []
            target.inputValue = undefined
            target.inputValues = []
            target.caches = {}
            if (
              options === null || options === void 0
                ? void 0
                : options.forceClear
            ) {
              if (isArrayField(target)) {
                target.value = []
              } else if (isObjectField(target)) {
                target.value = {}
              } else {
                target.value = undefined
              }
            } else if (Formily.Shared.isValid(target.value)) {
              target.value = Formily.Reactive.toJS(target.initialValue)
            }
            if (!noEmit) {
              target.notify(exports.LifeCycleTypes.ON_FIELD_RESET)
            }
            if (
              !(options === null || options === void 0
                ? void 0
                : options.validate)
            )
              return [3 /*break*/, 2]
            return [4 /*yield*/, validateSelf(target)]
          case 1:
            return [2 /*return*/, _a.sent()]
          case 2:
            return [2 /*return*/]
        }
      })
    })
  })
  var modifySelf = function (target) {
    if (target.selfModified) return
    target.selfModified = true
    target.modified = true
    var parent = target.parent
    while (parent) {
      if (isDataField(parent)) {
        if (parent.modified) return
        parent.modified = true
      }
      parent = parent.parent
    }
    target.form.modified = true
  }
  var getValidFormValues = function (values) {
    if (Formily.Reactive.isObservable(values)) return values
    return Formily.Shared.clone(values || {})
  }
  var getValidFieldDefaultValue = function (value, initialValue) {
    if (allowAssignDefaultValue(value, initialValue))
      return Formily.Shared.clone(initialValue)
    return value
  }
  var allowAssignDefaultValue = function (target, source) {
    var isEmptyTarget = Formily.Shared.isEmpty(target)
    var isEmptySource = Formily.Shared.isEmpty(source)
    var isValidTarget = Formily.Shared.isValid(target)
    var isValidSource = Formily.Shared.isValid(source)
    if (!isValidTarget) {
      if (isValidSource) {
        return true
      }
      return false
    }
    if (isEmptyTarget) {
      if (isEmptySource) {
        return false
      } else {
        return true
      }
    }
    return false
  }
  var createReactions = function (field) {
    var reactions = Formily.Shared.toArr(field.props.reactions)
    field.form.addEffects(field, function () {
      reactions.forEach(function (reaction) {
        if (Formily.Shared.isFn(reaction)) {
          field.disposers.push(
            Formily.Reactive.autorun(
              Formily.Reactive.batch.scope.bound(function () {
                return reaction(field)
              })
            )
          )
        }
      })
    })
  }
  var initializeStart = function () {
    GlobalState.initializing = true
  }
  var initializeEnd = function () {
    Formily.Reactive.batch.endpoint(function () {
      GlobalState.initializing = false
    })
  }

  var BaseField = /** @class */ (function () {
    function BaseField() {
      var _this = this
      this.disposers = []
      this.setTitle = function (title) {
        _this.title = title
      }
      this.setDescription = function (description) {
        _this.description = description
      }
      this.setDisplay = function (type) {
        _this.display = type
      }
      this.setPattern = function (type) {
        _this.pattern = type
      }
      this.setComponent = function (component, props) {
        if (component) {
          _this.componentType = component
        }
        if (props) {
          _this.componentProps = _this.componentProps || {}
          Object.assign(_this.componentProps, props)
        }
      }
      this.setComponentProps = function (props) {
        if (props) {
          _this.componentProps = _this.componentProps || {}
          Object.assign(_this.componentProps, props)
        }
      }
      this.setDecorator = function (component, props) {
        if (component) {
          _this.decoratorType = component
        }
        if (props) {
          _this.decoratorProps = _this.decoratorProps || {}
          Object.assign(_this.decoratorProps, props)
        }
      }
      this.setDecoratorProps = function (props) {
        if (props) {
          _this.decoratorProps = _this.decoratorProps || {}
          Object.assign(_this.decoratorProps, props)
        }
      }
      this.setData = function (data) {
        _this.data = data
      }
      this.setContent = function (content) {
        _this.content = content
      }
      this.onInit = function () {
        _this.initialized = true
        initFieldUpdate(_this)
        _this.notify(exports.LifeCycleTypes.ON_FIELD_INIT)
      }
      this.onMount = function () {
        _this.mounted = true
        _this.unmounted = false
        _this.notify(exports.LifeCycleTypes.ON_FIELD_MOUNT)
      }
      this.onUnmount = function () {
        _this.mounted = false
        _this.unmounted = true
        _this.notify(exports.LifeCycleTypes.ON_FIELD_UNMOUNT)
      }
      this.query = function (pattern) {
        return new Query({
          pattern: pattern,
          base: _this.address,
          form: _this.form,
        })
      }
      this.notify = function (type, payload) {
        return _this.form.notify(
          type,
          payload !== null && payload !== void 0 ? payload : _this
        )
      }
      this.dispose = function () {
        _this.disposers.forEach(function (dispose) {
          dispose()
        })
        _this.form.removeEffects(_this)
      }
      this.destroy = function () {
        _this.dispose()
        delete _this.form.fields[_this.address.toString()]
      }
      this.match = function (pattern) {
        return Formily.Shared.FormPath.parse(pattern).matchAliasGroup(
          _this.address,
          _this.path
        )
      }
    }
    BaseField.prototype.makeIndexes = function (address) {
      this.form.fields[address.toString()] = this
      buildNodeIndexes(this, address)
    }
    Object.defineProperty(BaseField.prototype, 'component', {
      get: function () {
        return [this.componentType, this.componentProps]
      },
      set: function (value) {
        var component = Formily.Shared.toArr(value)
        this.componentType = component[0]
        this.componentProps = component[1] || {}
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(BaseField.prototype, 'decorator', {
      get: function () {
        return [this.decoratorType, this.decoratorProps]
      },
      set: function (value) {
        var decorator = Formily.Shared.toArr(value)
        this.decoratorType = decorator[0]
        this.decoratorProps = decorator[1] || {}
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(BaseField.prototype, 'parent', {
      get: function () {
        var parent = this.address.parent()
        var identifier = parent.toString()
        while (!this.form.fields[identifier]) {
          parent = parent.parent()
          identifier = parent.toString()
          if (!identifier) return
        }
        return this.form.fields[identifier]
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(BaseField.prototype, 'display', {
      get: function () {
        var _a
        var parentDisplay =
          (_a = this.parent) === null || _a === void 0 ? void 0 : _a.display
        if (parentDisplay && parentDisplay !== 'visible') {
          if (this.selfDisplay && this.selfDisplay !== 'visible')
            return this.selfDisplay
          return parentDisplay
        }
        if (Formily.Shared.isValid(this.selfDisplay)) return this.selfDisplay
        return parentDisplay || this.form.display || 'visible'
      },
      set: function (display) {
        this.selfDisplay = display
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(BaseField.prototype, 'pattern', {
      get: function () {
        var _a
        var parentPattern =
          (_a = this.parent) === null || _a === void 0 ? void 0 : _a.pattern
        if (Formily.Shared.isValid(this.selfPattern)) return this.selfPattern
        return parentPattern || this.form.pattern || 'editable'
      },
      set: function (pattern) {
        this.selfPattern = pattern
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(BaseField.prototype, 'editable', {
      get: function () {
        return this.pattern === 'editable'
      },
      set: function (editable) {
        if (!Formily.Shared.isValid(editable)) return
        if (editable) {
          this.pattern = 'editable'
        } else {
          this.pattern = 'readPretty'
        }
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(BaseField.prototype, 'disabled', {
      get: function () {
        return this.pattern === 'disabled'
      },
      set: function (disabled) {
        if (!Formily.Shared.isValid(disabled)) return
        if (disabled) {
          this.pattern = 'disabled'
        } else {
          this.pattern = 'editable'
        }
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(BaseField.prototype, 'readOnly', {
      get: function () {
        return this.pattern === 'readOnly'
      },
      set: function (readOnly) {
        if (!Formily.Shared.isValid(readOnly)) return
        if (readOnly) {
          this.pattern = 'readOnly'
        } else {
          this.pattern = 'editable'
        }
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(BaseField.prototype, 'readPretty', {
      get: function () {
        return this.pattern === 'readPretty'
      },
      set: function (readPretty) {
        if (!Formily.Shared.isValid(readPretty)) return
        if (readPretty) {
          this.pattern = 'readPretty'
        } else {
          this.pattern = 'editable'
        }
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(BaseField.prototype, 'hidden', {
      get: function () {
        return this.display === 'hidden'
      },
      set: function (hidden) {
        if (!Formily.Shared.isValid(hidden)) return
        if (hidden) {
          this.display = 'hidden'
        } else {
          this.display = 'visible'
        }
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(BaseField.prototype, 'visible', {
      get: function () {
        return this.display === 'visible'
      },
      set: function (visible) {
        if (!Formily.Shared.isValid(visible)) return
        if (visible) {
          this.display = 'visible'
        } else {
          this.display = 'none'
        }
      },
      enumerable: false,
      configurable: true,
    })
    return BaseField
  })()

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
                this.notify(exports.LifeCycleTypes.ON_FIELD_INPUT_VALUE_CHANGE)
                this.notify(
                  exports.LifeCycleTypes.ON_FORM_INPUT_CHANGE,
                  this.form
                )
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
        return batchValidate(
          _this,
          ''.concat(_this.address, '.**'),
          triggerType
        )
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
      this.decorator = Formily.Shared.toArr(this.props.decorator)
      this.component = Formily.Shared.toArr(this.props.component)
    }
    Field.prototype.makeObservable = function () {
      if (this.designable) return
      Formily.Reactive.define(this, {
        title: Formily.Reactive.observable.ref,
        description: Formily.Reactive.observable.ref,
        dataSource: Formily.Reactive.observable.ref,
        selfDisplay: Formily.Reactive.observable.ref,
        selfPattern: Formily.Reactive.observable.ref,
        loading: Formily.Reactive.observable.ref,
        validating: Formily.Reactive.observable.ref,
        submitting: Formily.Reactive.observable.ref,
        selfModified: Formily.Reactive.observable.ref,
        modified: Formily.Reactive.observable.ref,
        active: Formily.Reactive.observable.ref,
        visited: Formily.Reactive.observable.ref,
        initialized: Formily.Reactive.observable.ref,
        mounted: Formily.Reactive.observable.ref,
        unmounted: Formily.Reactive.observable.ref,
        inputValue: Formily.Reactive.observable.ref,
        inputValues: Formily.Reactive.observable.ref,
        decoratorType: Formily.Reactive.observable.ref,
        componentType: Formily.Reactive.observable.ref,
        content: Formily.Reactive.observable.ref,
        decoratorProps: Formily.Reactive.observable,
        componentProps: Formily.Reactive.observable,
        validator: Formily.Reactive.observable.shallow,
        feedbacks: Formily.Reactive.observable.shallow,
        data: Formily.Reactive.observable.shallow,
        component: Formily.Reactive.observable.computed,
        decorator: Formily.Reactive.observable.computed,
        errors: Formily.Reactive.observable.computed,
        warnings: Formily.Reactive.observable.computed,
        successes: Formily.Reactive.observable.computed,
        valid: Formily.Reactive.observable.computed,
        invalid: Formily.Reactive.observable.computed,
        selfErrors: Formily.Reactive.observable.computed,
        selfWarnings: Formily.Reactive.observable.computed,
        selfSuccesses: Formily.Reactive.observable.computed,
        selfValid: Formily.Reactive.observable.computed,
        selfInvalid: Formily.Reactive.observable.computed,
        validateStatus: Formily.Reactive.observable.computed,
        value: Formily.Reactive.observable.computed,
        initialValue: Formily.Reactive.observable.computed,
        display: Formily.Reactive.observable.computed,
        pattern: Formily.Reactive.observable.computed,
        required: Formily.Reactive.observable.computed,
        hidden: Formily.Reactive.observable.computed,
        visible: Formily.Reactive.observable.computed,
        disabled: Formily.Reactive.observable.computed,
        readOnly: Formily.Reactive.observable.computed,
        readPretty: Formily.Reactive.observable.computed,
        editable: Formily.Reactive.observable.computed,
        setDisplay: Formily.Reactive.action,
        setTitle: Formily.Reactive.action,
        setDescription: Formily.Reactive.action,
        setDataSource: Formily.Reactive.action,
        setValue: Formily.Reactive.action,
        setPattern: Formily.Reactive.action,
        setInitialValue: Formily.Reactive.action,
        setLoading: Formily.Reactive.action,
        setValidating: Formily.Reactive.action,
        setFeedback: Formily.Reactive.action,
        setSelfErrors: Formily.Reactive.action,
        setSelfWarnings: Formily.Reactive.action,
        setSelfSuccesses: Formily.Reactive.action,
        setValidator: Formily.Reactive.action,
        setRequired: Formily.Reactive.action,
        setComponent: Formily.Reactive.action,
        setComponentProps: Formily.Reactive.action,
        setDecorator: Formily.Reactive.action,
        setDecoratorProps: Formily.Reactive.action,
        setData: Formily.Reactive.action,
        setContent: Formily.Reactive.action,
        validate: Formily.Reactive.action,
        reset: Formily.Reactive.action,
        onInit: Formily.Reactive.batch,
        onInput: Formily.Reactive.batch,
        onMount: Formily.Reactive.batch,
        onUnmount: Formily.Reactive.batch,
        onFocus: Formily.Reactive.batch,
        onBlur: Formily.Reactive.batch,
      })
    }
    Field.prototype.makeReactive = function () {
      var _this = this
      if (this.designable) return
      this.disposers.push(
        Formily.Reactive.reaction(
          function () {
            return _this.value
          },
          function (value) {
            _this.notify(exports.LifeCycleTypes.ON_FIELD_VALUE_CHANGE)
            if (
              Formily.Shared.isValid(value) &&
              _this.selfModified &&
              !_this.caches.inputting
            ) {
              validateSelf(_this)
            }
          }
        ),
        Formily.Reactive.reaction(
          function () {
            return _this.initialValue
          },
          function () {
            _this.notify(exports.LifeCycleTypes.ON_FIELD_INITIAL_VALUE_CHANGE)
          }
        ),
        Formily.Reactive.reaction(
          function () {
            return _this.display
          },
          function (display) {
            var value = _this.value
            if (display === 'visible') {
              if (Formily.Shared.isEmpty(value)) {
                _this.setValue(_this.caches.value)
                _this.caches.value = undefined
              }
            } else {
              _this.caches.value = Formily.Reactive.toJS(value)
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
        Formily.Reactive.reaction(
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
        return Formily.Validator.parseValidatorDescriptions(
          this.validator
        ).some(function (desc) {
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

  var createEffectHook = function (type, callback) {
    return function () {
      var args = []
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
      }
      if (GlobalState.effectStart) {
        GlobalState.lifecycles.push(
          new LifeCycle(type, function (payload, ctx) {
            if (Formily.Shared.isFn(callback)) {
              callback
                .apply(
                  void 0,
                  __spreadArray([payload, ctx], __read(GlobalState.context))
                )
                .apply(void 0, __spreadArray([], __read(args)))
            }
          })
        )
      } else {
        throw new Error(
          'Effect hooks cannot be used in asynchronous function body'
        )
      }
    }
  }
  var createEffectContext = function (defaultValue) {
    var index
    return {
      provide: function (value) {
        if (GlobalState.effectStart) {
          index = GlobalState.context.length
          GlobalState.context[index] = Formily.Shared.isValid(value)
            ? value
            : defaultValue
        } else {
          throw new Error(
            'Provide method cannot be used in asynchronous function body'
          )
        }
      },
      consume: function () {
        if (!GlobalState.effectStart) {
          throw new Error(
            'Consume method cannot be used in asynchronous function body'
          )
        }
        return GlobalState.context[index]
      },
    }
  }
  var FormEffectContext = createEffectContext()
  var useEffectForm = FormEffectContext.consume
  var runEffects = function (context) {
    var args = []
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i]
    }
    GlobalState.lifecycles = []
    GlobalState.context = []
    GlobalState.effectStart = true
    GlobalState.effectEnd = false
    if (isForm(context)) {
      FormEffectContext.provide(context)
    }
    args.forEach(function (effects) {
      if (Formily.Shared.isFn(effects)) {
        effects(context)
      }
    })
    GlobalState.context = []
    GlobalState.effectStart = false
    GlobalState.effectEnd = true
    return GlobalState.lifecycles
  }

  var ArrayField = /** @class */ (function (_super) {
    __extends(ArrayField, _super)
    function ArrayField(address, props, form, designable) {
      var _this = _super.call(this, address, props, form, designable) || this
      _this.displayName = 'ArrayField'
      _this.push = function () {
        var items = []
        for (var _i = 0; _i < arguments.length; _i++) {
          items[_i] = arguments[_i]
        }
        return Formily.Reactive.action(function () {
          var _a
          if (!Formily.Shared.isArr(_this.value)) {
            _this.value = []
          }
          ;(_a = _this.value).push.apply(_a, __spreadArray([], __read(items)))
          return _this.onInput(_this.value)
        })
      }
      _this.pop = function () {
        if (!Formily.Shared.isArr(_this.value)) return
        return Formily.Reactive.action(function () {
          var index = _this.value.length - 1
          spliceArrayState(_this, {
            startIndex: index,
            deleteCount: 1,
          })
          _this.value.pop()
          return _this.onInput(_this.value)
        })
      }
      _this.insert = function (index) {
        var items = []
        for (var _i = 1; _i < arguments.length; _i++) {
          items[_i - 1] = arguments[_i]
        }
        return Formily.Reactive.action(function () {
          var _a
          if (!Formily.Shared.isArr(_this.value)) {
            _this.value = []
          }
          spliceArrayState(_this, {
            startIndex: index,
            insertCount: items.length,
          })
          ;(_a = _this.value).splice.apply(
            _a,
            __spreadArray([index, 0], __read(items))
          )
          return _this.onInput(_this.value)
        })
      }
      _this.remove = function (index) {
        if (!Formily.Shared.isArr(_this.value)) return
        return Formily.Reactive.action(function () {
          spliceArrayState(_this, {
            startIndex: index,
            deleteCount: 1,
          })
          _this.value.splice(index, 1)
          return _this.onInput(_this.value)
        })
      }
      _this.copy = function (index) {
        if (!Formily.Shared.isArr(_this.value)) return
        return Formily.Reactive.action(function () {
          var fromItem = _this.value[index]
          _this.value.splice(index, 0, Formily.Shared.clone(fromItem))
          return _this.onInput(_this.value)
        })
      }
      _this.shift = function () {
        if (!Formily.Shared.isArr(_this.value)) return
        return Formily.Reactive.action(function () {
          _this.value.shift()
          return _this.onInput(_this.value)
        })
      }
      _this.unshift = function () {
        var items = []
        for (var _i = 0; _i < arguments.length; _i++) {
          items[_i] = arguments[_i]
        }
        return Formily.Reactive.action(function () {
          var _a
          if (!Formily.Shared.isArr(_this.value)) {
            _this.value = []
          }
          spliceArrayState(_this, {
            startIndex: 0,
            insertCount: items.length,
          })
          ;(_a = _this.value).unshift.apply(
            _a,
            __spreadArray([], __read(items))
          )
          return _this.onInput(_this.value)
        })
      }
      _this.move = function (fromIndex, toIndex) {
        if (!Formily.Shared.isArr(_this.value)) return
        if (fromIndex === toIndex) return
        return Formily.Reactive.action(function () {
          var fromItem = _this.value[fromIndex]
          _this.value.splice(fromIndex, 1)
          _this.value.splice(toIndex, 0, fromItem)
          exchangeArrayState(_this, {
            fromIndex: fromIndex,
            toIndex: toIndex,
          })
          return _this.onInput(_this.value)
        })
      }
      _this.moveUp = function (index) {
        if (!Formily.Shared.isArr(_this.value)) return
        return _this.move(
          index,
          index - 1 < 0 ? _this.value.length - 1 : index - 1
        )
      }
      _this.moveDown = function (index) {
        if (!Formily.Shared.isArr(_this.value)) return
        return _this.move(
          index,
          index + 1 >= _this.value.length ? 0 : index + 1
        )
      }
      _this.makeAutoCleanable()
      return _this
    }
    ArrayField.prototype.makeAutoCleanable = function () {
      var _this = this
      this.disposers.push(
        Formily.Reactive.reaction(
          function () {
            var _a
            return (_a = _this.value) === null || _a === void 0
              ? void 0
              : _a.length
          },
          function (newLength, oldLength) {
            if (oldLength && !newLength) {
              cleanupArrayChildren(_this, 0)
            } else if (newLength < oldLength) {
              cleanupArrayChildren(_this, newLength)
            }
          }
        )
      )
    }
    return ArrayField
  })(Field)

  var ObjectField = /** @class */ (function (_super) {
    __extends(ObjectField, _super)
    function ObjectField(address, props, form, designable) {
      var _this = _super.call(this, address, props, form, designable) || this
      _this.displayName = 'ObjectField'
      _this.additionalProperties = []
      _this.addProperty = function (key, value) {
        _this.form.setValuesIn(_this.path.concat(key), value)
        _this.additionalProperties.push(key)
        return _this.onInput(_this.value)
      }
      _this.removeProperty = function (key) {
        _this.form.deleteValuesIn(_this.path.concat(key))
        _this.additionalProperties.splice(
          _this.additionalProperties.indexOf(key),
          1
        )
        return _this.onInput(_this.value)
      }
      _this.existProperty = function (key) {
        return _this.form.existValuesIn(_this.path.concat(key))
      }
      _this.makeAutoCleanable()
      return _this
    }
    ObjectField.prototype.makeAutoCleanable = function () {
      var _this = this
      this.disposers.push(
        Formily.Reactive.reaction(
          function () {
            return Object.keys(_this.value || {})
          },
          function (newKeys) {
            var filterKeys = _this.additionalProperties.filter(function (key) {
              return !newKeys.includes(key)
            })
            cleanupObjectChildren(_this, filterKeys)
          }
        )
      )
    }
    return ObjectField
  })(Field)

  var VoidField = /** @class */ (function (_super) {
    __extends(VoidField, _super)
    function VoidField(address, props, form, designable) {
      var _this = _super.call(this) || this
      _this.displayName = 'VoidField'
      _this.setState = createStateSetter(_this)
      _this.getState = createStateGetter(_this)
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
    VoidField.prototype.initialize = function () {
      this.mounted = false
      this.unmounted = false
      this.initialized = false
      this.title = this.props.title
      this.description = this.props.description
      this.pattern = this.props.pattern
      this.display = this.props.display
      this.hidden = this.props.hidden
      this.editable = this.props.editable
      this.disabled = this.props.disabled
      this.readOnly = this.props.readOnly
      this.readPretty = this.props.readPretty
      this.visible = this.props.visible
      this.content = this.props.content
      this.data = this.props.data
      this.decorator = Formily.Shared.toArr(this.props.decorator)
      this.component = Formily.Shared.toArr(this.props.component)
    }
    VoidField.prototype.makeObservable = function () {
      if (this.designable) return
      Formily.Reactive.define(this, {
        title: Formily.Reactive.observable.ref,
        description: Formily.Reactive.observable.ref,
        selfDisplay: Formily.Reactive.observable.ref,
        selfPattern: Formily.Reactive.observable.ref,
        initialized: Formily.Reactive.observable.ref,
        mounted: Formily.Reactive.observable.ref,
        unmounted: Formily.Reactive.observable.ref,
        decoratorType: Formily.Reactive.observable.ref,
        componentType: Formily.Reactive.observable.ref,
        content: Formily.Reactive.observable.ref,
        data: Formily.Reactive.observable.shallow,
        decoratorProps: Formily.Reactive.observable,
        componentProps: Formily.Reactive.observable,
        display: Formily.Reactive.observable.computed,
        pattern: Formily.Reactive.observable.computed,
        hidden: Formily.Reactive.observable.computed,
        visible: Formily.Reactive.observable.computed,
        disabled: Formily.Reactive.observable.computed,
        readOnly: Formily.Reactive.observable.computed,
        readPretty: Formily.Reactive.observable.computed,
        editable: Formily.Reactive.observable.computed,
        component: Formily.Reactive.observable.computed,
        decorator: Formily.Reactive.observable.computed,
        setTitle: Formily.Reactive.action,
        setDescription: Formily.Reactive.action,
        setDisplay: Formily.Reactive.action,
        setPattern: Formily.Reactive.action,
        setComponent: Formily.Reactive.action,
        setComponentProps: Formily.Reactive.action,
        setDecorator: Formily.Reactive.action,
        setDecoratorProps: Formily.Reactive.action,
        setData: Formily.Reactive.action,
        setContent: Formily.Reactive.action,
        onInit: Formily.Reactive.batch,
        onMount: Formily.Reactive.batch,
        onUnmount: Formily.Reactive.batch,
      })
    }
    VoidField.prototype.makeReactive = function () {
      if (this.designable) return
      createReactions(this)
    }
    return VoidField
  })(BaseField)

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
        var address = Formily.Shared.FormPath.parse(props.basePath).concat(
          props.name
        )
        var identifier = address.toString()
        if (!identifier) return
        if (!_this.fields[identifier] || _this.props.designable) {
          Formily.Reactive.batch(function () {
            new Field(address, props, _this, _this.props.designable)
          })
          _this.notify(exports.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
        }
        return _this.fields[identifier]
      }
      this.createArrayField = function (props) {
        var address = Formily.Shared.FormPath.parse(props.basePath).concat(
          props.name
        )
        var identifier = address.toString()
        if (!identifier) return
        if (!_this.fields[identifier] || _this.props.designable) {
          Formily.Reactive.batch(function () {
            new ArrayField(
              address,
              __assign(__assign({}, props), {
                value: Formily.Shared.isArr(props.value) ? props.value : [],
              }),
              _this,
              _this.props.designable
            )
          })
          _this.notify(exports.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
        }
        return _this.fields[identifier]
      }
      this.createObjectField = function (props) {
        var address = Formily.Shared.FormPath.parse(props.basePath).concat(
          props.name
        )
        var identifier = address.toString()
        if (!identifier) return
        if (!_this.fields[identifier] || _this.props.designable) {
          Formily.Reactive.batch(function () {
            new ObjectField(
              address,
              __assign(__assign({}, props), {
                value: Formily.Shared.isObj(props.value) ? props.value : {},
              }),
              _this,
              _this.props.designable
            )
          })
          _this.notify(exports.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
        }
        return _this.fields[identifier]
      }
      this.createVoidField = function (props) {
        var address = Formily.Shared.FormPath.parse(props.basePath).concat(
          props.name
        )
        var identifier = address.toString()
        if (!identifier) return
        if (!_this.fields[identifier] || _this.props.designable) {
          Formily.Reactive.batch(function () {
            new VoidField(address, props, _this, _this.props.designable)
          })
          _this.notify(exports.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
        }
        return _this.fields[identifier]
      }
      /** 状态操作模型 **/
      this.setValues = function (values, strategy) {
        if (strategy === void 0) {
          strategy = 'merge'
        }
        if (!Formily.Shared.isPlainObj(values)) return
        if (strategy === 'merge' || strategy === 'deepMerge') {
          _this.values = Formily.Shared.merge(_this.values, values, {
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
        if (!Formily.Shared.isPlainObj(initialValues)) return
        if (strategy === 'merge' || strategy === 'deepMerge') {
          _this.initialValues = Formily.Shared.merge(
            _this.initialValues,
            initialValues,
            {
              arrayMerge: function (target, source) {
                return source
              },
            }
          )
        } else if (strategy === 'shallowMerge') {
          _this.initialValues = Object.assign(
            _this.initialValues,
            initialValues
          )
        } else {
          _this.initialValues = initialValues
        }
      }
      this.setValuesIn = function (pattern, value) {
        Formily.Shared.FormPath.setIn(_this.values, pattern, value)
      }
      this.deleteValuesIn = function (pattern) {
        Formily.Shared.FormPath.deleteIn(_this.values, pattern)
      }
      this.existValuesIn = function (pattern) {
        return Formily.Shared.FormPath.existIn(_this.values, pattern)
      }
      this.getValuesIn = function (pattern) {
        return Formily.Shared.FormPath.getIn(_this.values, pattern)
      }
      this.setInitialValuesIn = function (pattern, initialValue) {
        Formily.Shared.FormPath.setIn(
          _this.initialValues,
          pattern,
          initialValue
        )
      }
      this.deleteInitialValuesIn = function (pattern) {
        Formily.Shared.FormPath.deleteIn(_this.initialValues, pattern)
      }
      this.existInitialValuesIn = function (pattern) {
        return Formily.Shared.FormPath.existIn(_this.initialValues, pattern)
      }
      this.getInitialValuesIn = function (pattern) {
        return Formily.Shared.FormPath.getIn(_this.initialValues, pattern)
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
        _this.notify(exports.LifeCycleTypes.ON_FORM_INIT)
      }
      this.onMount = function () {
        _this.mounted = true
        _this.notify(exports.LifeCycleTypes.ON_FORM_MOUNT)
        if (
          Formily.Shared.globalThisPolyfill[DEV_TOOLS_HOOK] &&
          !_this.props.designable
        ) {
          Formily.Shared.globalThisPolyfill[DEV_TOOLS_HOOK].inject(
            _this.id,
            _this
          )
        }
      }
      this.onUnmount = function () {
        _this.notify(exports.LifeCycleTypes.ON_FORM_UNMOUNT)
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
          Formily.Shared.globalThisPolyfill[DEV_TOOLS_HOOK] &&
          !_this.props.designable
        ) {
          Formily.Shared.globalThisPolyfill[DEV_TOOLS_HOOK].unmount(_this.id)
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
      this.id = Formily.Shared.uid()
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
      Formily.Reactive.define(this, {
        fields: Formily.Reactive.observable.shallow,
        initialized: Formily.Reactive.observable.ref,
        validating: Formily.Reactive.observable.ref,
        submitting: Formily.Reactive.observable.ref,
        loading: Formily.Reactive.observable.ref,
        modified: Formily.Reactive.observable.ref,
        pattern: Formily.Reactive.observable.ref,
        display: Formily.Reactive.observable.ref,
        mounted: Formily.Reactive.observable.ref,
        unmounted: Formily.Reactive.observable.ref,
        values: Formily.Reactive.observable,
        initialValues: Formily.Reactive.observable,
        valid: Formily.Reactive.observable.computed,
        invalid: Formily.Reactive.observable.computed,
        errors: Formily.Reactive.observable.computed,
        warnings: Formily.Reactive.observable.computed,
        successes: Formily.Reactive.observable.computed,
        hidden: Formily.Reactive.observable.computed,
        visible: Formily.Reactive.observable.computed,
        editable: Formily.Reactive.observable.computed,
        readOnly: Formily.Reactive.observable.computed,
        readPretty: Formily.Reactive.observable.computed,
        disabled: Formily.Reactive.observable.computed,
        setValues: Formily.Reactive.action,
        setValuesIn: Formily.Reactive.action,
        setInitialValues: Formily.Reactive.action,
        setInitialValuesIn: Formily.Reactive.action,
        setPattern: Formily.Reactive.action,
        setDisplay: Formily.Reactive.action,
        setState: Formily.Reactive.action,
        deleteInitialValuesIn: Formily.Reactive.action,
        deleteValuesIn: Formily.Reactive.action,
        setSubmitting: Formily.Reactive.action,
        setValidating: Formily.Reactive.action,
        setFormGraph: Formily.Reactive.action,
        clearFormGraph: Formily.Reactive.action,
        reset: Formily.Reactive.action,
        submit: Formily.Reactive.action,
        validate: Formily.Reactive.action,
        onMount: Formily.Reactive.batch,
        onUnmount: Formily.Reactive.batch,
        onInit: Formily.Reactive.batch,
      })
    }
    Form.prototype.makeReactive = function () {
      var _this = this
      this.disposers.push(
        Formily.Reactive.observe(
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
        if (!Formily.Shared.isValid(hidden)) return
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
        if (!Formily.Shared.isValid(visible)) return
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
        if (!Formily.Shared.isValid(editable)) return
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
        if (!Formily.Shared.isValid(readOnly)) return
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
        if (!Formily.Shared.isValid(disabled)) return
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
        if (!Formily.Shared.isValid(readPretty)) return
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

  var createForm = function (options) {
    return new Form(options)
  }
  const _global_Formily_Shared_FormPath = Formily.Shared.FormPath
  const _global_Formily_Validator_getValidateLocaleIOSCode =
    Formily.Validator.getValidateLocaleIOSCode
  const _global_Formily_Validator_setValidateLanguage =
    Formily.Validator.setValidateLanguage
  const _global_Formily_Validator_registerValidateFormats =
    Formily.Validator.registerValidateFormats
  const _global_Formily_Validator_registerValidateLocale =
    Formily.Validator.registerValidateLocale
  const _global_Formily_Validator_registerValidateMessageTemplateEngine =
    Formily.Validator.registerValidateMessageTemplateEngine
  const _global_Formily_Validator_registerValidateRules =
    Formily.Validator.registerValidateRules

  function createFormEffect(type) {
    return createEffectHook(type, function (form) {
      return function (callback) {
        Formily.Reactive.batch(function () {
          callback(form)
        })
      }
    })
  }
  var onFormInit = createFormEffect(exports.LifeCycleTypes.ON_FORM_INIT)
  var onFormMount = createFormEffect(exports.LifeCycleTypes.ON_FORM_MOUNT)
  var onFormUnmount = createFormEffect(exports.LifeCycleTypes.ON_FORM_UNMOUNT)
  var onFormValuesChange = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_VALUES_CHANGE
  )
  var onFormInitialValuesChange = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_INITIAL_VALUES_CHANGE
  )
  var onFormInputChange = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_INPUT_CHANGE
  )
  var onFormSubmit = createFormEffect(exports.LifeCycleTypes.ON_FORM_SUBMIT)
  var onFormReset = createFormEffect(exports.LifeCycleTypes.ON_FORM_RESET)
  var onFormSubmitStart = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_SUBMIT_START
  )
  var onFormSubmitEnd = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_SUBMIT_END
  )
  var onFormSubmitSuccess = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_SUBMIT_SUCCESS
  )
  var onFormSubmitFailed = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_SUBMIT_FAILED
  )
  var onFormSubmitValidateStart = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_START
  )
  var onFormSubmitValidateSuccess = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_SUCCESS
  )
  var onFormSubmitValidateFailed = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_FAILED
  )
  var onFormSubmitValidateEnd = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_END
  )
  var onFormValidateStart = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_VALIDATE_START
  )
  var onFormValidateSuccess = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_VALIDATE_SUCCESS
  )
  var onFormValidateFailed = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_VALIDATE_FAILED
  )
  var onFormValidateEnd = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_VALIDATE_END
  )
  var onFormGraphChange = createFormEffect(
    exports.LifeCycleTypes.ON_FORM_GRAPH_CHANGE
  )
  var onFormLoading = createFormEffect(exports.LifeCycleTypes.ON_FORM_LOADING)
  function onFormReact(callback) {
    var dispose = null
    onFormInit(function (form) {
      dispose = Formily.Reactive.autorun(function () {
        callback(form)
      })
    })
    onFormUnmount(function () {
      dispose()
    })
  }

  function createFieldEffect(type) {
    return createEffectHook(type, function (field, form) {
      return function (pattern, callback) {
        if (
          Formily.Shared.FormPath.parse(pattern).matchAliasGroup(
            field.address,
            field.path
          )
        ) {
          Formily.Reactive.batch(function () {
            callback(field, form)
          })
        }
      }
    })
  }
  var _onFieldInit = createFieldEffect(exports.LifeCycleTypes.ON_FIELD_INIT)
  var onFieldMount = createFieldEffect(exports.LifeCycleTypes.ON_FIELD_MOUNT)
  var onFieldUnmount = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_UNMOUNT
  )
  var onFieldValueChange = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_VALUE_CHANGE
  )
  var onFieldInitialValueChange = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_INITIAL_VALUE_CHANGE
  )
  var onFieldInputValueChange = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_INPUT_VALUE_CHANGE
  )
  var onFieldValidateStart = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_VALIDATE_START
  )
  var onFieldValidateEnd = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_VALIDATE_END
  )
  var onFieldValidating = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_VALIDATING
  )
  var onFieldValidateFailed = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_VALIDATE_FAILED
  )
  var onFieldValidateSuccess = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_VALIDATE_SUCCESS
  )
  var onFieldSubmit = createFieldEffect(exports.LifeCycleTypes.ON_FIELD_SUBMIT)
  var onFieldSubmitStart = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_SUBMIT_START
  )
  var onFieldSubmitEnd = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_SUBMIT_END
  )
  var onFieldSubmitValidateStart = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_START
  )
  var onFieldSubmitValidateEnd = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_END
  )
  var onFieldSubmitSuccess = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_SUBMIT_SUCCESS
  )
  var onFieldSubmitFailed = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_SUBMIT_FAILED
  )
  var onFieldSubmitValidateSuccess = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_SUCCESS
  )
  var onFieldSubmitValidateFailed = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_FAILED
  )
  var onFieldReset = createFieldEffect(exports.LifeCycleTypes.ON_FIELD_RESET)
  var onFieldLoading = createFieldEffect(
    exports.LifeCycleTypes.ON_FIELD_LOADING
  )
  function onFieldInit(pattern, callback) {
    var form = useEffectForm()
    var count = form.query(pattern).reduce(function (count, field) {
      callback(field, form)
      return count + 1
    }, 0)
    if (count === 0) {
      _onFieldInit(pattern, callback)
    }
  }
  function onFieldReact(pattern, callback) {
    var disposers = []
    onFieldInit(pattern, function (field, form) {
      disposers.push(
        Formily.Reactive.autorun(function () {
          if (Formily.Shared.isFn(callback)) callback(field, form)
        })
      )
    })
    onFormUnmount(function () {
      disposers.forEach(function (dispose) {
        dispose()
      })
    })
  }
  function onFieldChange(pattern, watches, callback) {
    if (Formily.Shared.isFn(watches)) {
      callback = watches
      watches = ['value']
    } else {
      watches = watches || ['value']
    }
    var disposers = []
    onFieldInit(pattern, function (field, form) {
      if (Formily.Shared.isFn(callback)) callback(field, form)
      disposers.push(
        Formily.Reactive.reaction(
          function () {
            return Formily.Shared.toArr(watches).map(function (key) {
              return field[key]
            })
          },
          function () {
            if (Formily.Shared.isFn(callback)) callback(field, form)
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

  exports.FormPath = _global_Formily_Shared_FormPath
  exports.createEffectContext = createEffectContext
  exports.createEffectHook = createEffectHook
  exports.createForm = createForm
  exports.getValidateLocaleIOSCode =
    _global_Formily_Validator_getValidateLocaleIOSCode
  exports.isArrayField = isArrayField
  exports.isArrayFieldState = isArrayFieldState
  exports.isDataField = isDataField
  exports.isDataFieldState = isDataFieldState
  exports.isField = isField
  exports.isFieldState = isFieldState
  exports.isForm = isForm
  exports.isFormState = isFormState
  exports.isGeneralField = isGeneralField
  exports.isGeneralFieldState = isGeneralFieldState
  exports.isObjectField = isObjectField
  exports.isObjectFieldState = isObjectFieldState
  exports.isQuery = isQuery
  exports.isVoidField = isVoidField
  exports.isVoidFieldState = isVoidFieldState
  exports.onFieldChange = onFieldChange
  exports.onFieldInit = onFieldInit
  exports.onFieldInitialValueChange = onFieldInitialValueChange
  exports.onFieldInputValueChange = onFieldInputValueChange
  exports.onFieldLoading = onFieldLoading
  exports.onFieldMount = onFieldMount
  exports.onFieldReact = onFieldReact
  exports.onFieldReset = onFieldReset
  exports.onFieldSubmit = onFieldSubmit
  exports.onFieldSubmitEnd = onFieldSubmitEnd
  exports.onFieldSubmitFailed = onFieldSubmitFailed
  exports.onFieldSubmitStart = onFieldSubmitStart
  exports.onFieldSubmitSuccess = onFieldSubmitSuccess
  exports.onFieldSubmitValidateEnd = onFieldSubmitValidateEnd
  exports.onFieldSubmitValidateFailed = onFieldSubmitValidateFailed
  exports.onFieldSubmitValidateStart = onFieldSubmitValidateStart
  exports.onFieldSubmitValidateSuccess = onFieldSubmitValidateSuccess
  exports.onFieldUnmount = onFieldUnmount
  exports.onFieldValidateEnd = onFieldValidateEnd
  exports.onFieldValidateFailed = onFieldValidateFailed
  exports.onFieldValidateStart = onFieldValidateStart
  exports.onFieldValidateSuccess = onFieldValidateSuccess
  exports.onFieldValidating = onFieldValidating
  exports.onFieldValueChange = onFieldValueChange
  exports.onFormGraphChange = onFormGraphChange
  exports.onFormInit = onFormInit
  exports.onFormInitialValuesChange = onFormInitialValuesChange
  exports.onFormInputChange = onFormInputChange
  exports.onFormLoading = onFormLoading
  exports.onFormMount = onFormMount
  exports.onFormReact = onFormReact
  exports.onFormReset = onFormReset
  exports.onFormSubmit = onFormSubmit
  exports.onFormSubmitEnd = onFormSubmitEnd
  exports.onFormSubmitFailed = onFormSubmitFailed
  exports.onFormSubmitStart = onFormSubmitStart
  exports.onFormSubmitSuccess = onFormSubmitSuccess
  exports.onFormSubmitValidateEnd = onFormSubmitValidateEnd
  exports.onFormSubmitValidateFailed = onFormSubmitValidateFailed
  exports.onFormSubmitValidateStart = onFormSubmitValidateStart
  exports.onFormSubmitValidateSuccess = onFormSubmitValidateSuccess
  exports.onFormUnmount = onFormUnmount
  exports.onFormValidateEnd = onFormValidateEnd
  exports.onFormValidateFailed = onFormValidateFailed
  exports.onFormValidateStart = onFormValidateStart
  exports.onFormValidateSuccess = onFormValidateSuccess
  exports.onFormValuesChange = onFormValuesChange
  exports.registerValidateFormats =
    _global_Formily_Validator_registerValidateFormats
  exports.registerValidateLocale =
    _global_Formily_Validator_registerValidateLocale
  exports.registerValidateMessageTemplateEngine =
    _global_Formily_Validator_registerValidateMessageTemplateEngine
  exports.registerValidateRules =
    _global_Formily_Validator_registerValidateRules
  exports.setValidateLanguage = _global_Formily_Validator_setValidateLanguage
  exports.useEffectForm = useEffectForm

  Object.defineProperty(exports, '__esModule', { value: true })
})
//# sourceMappingURL=formily.core.umd.development.js.map
