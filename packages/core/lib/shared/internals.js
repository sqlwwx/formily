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
exports.initializeEnd =
  exports.initializeStart =
  exports.createReactions =
  exports.allowAssignDefaultValue =
  exports.getValidFieldDefaultValue =
  exports.getValidFormValues =
  exports.modifySelf =
  exports.resetSelf =
  exports.validateSelf =
  exports.batchReset =
  exports.batchValidate =
  exports.batchSubmit =
  exports.setLoading =
  exports.setSubmitting =
  exports.setValidating =
  exports.triggerFormValuesChange =
  exports.triggerFormInitialValuesChange =
  exports.createBatchStateGetter =
  exports.createBatchStateSetter =
  exports.createStateGetter =
  exports.createStateSetter =
  exports.createChildrenFeedbackFilter =
  exports.serialize =
  exports.deserialize =
  exports.subscribeUpdate =
  exports.initFieldUpdate =
  exports.cleanupObjectChildren =
  exports.cleanupArrayChildren =
  exports.exchangeArrayState =
  exports.spliceArrayState =
  exports.setValidatorRule =
  exports.validateToFeedbacks =
  exports.updateFeedback =
  exports.queryFeedbackMessages =
  exports.queryFeedbacks =
  exports.matchFeedback =
  exports.patchFormValues =
  exports.patchFieldStates =
  exports.buildNodeIndexes =
  exports.buildFieldPath =
  exports.getValuesFromEvent =
  exports.isHTMLInputEvent =
    void 0
var shared_1 = require('@formily/shared')
var validator_1 = require('@formily/validator')
var reactive_1 = require('@formily/reactive')
var types_1 = require('../types')
var externals_1 = require('./externals')
var constants_1 = require('./constants')
var hasOwnProperty = Object.prototype.hasOwnProperty
var notify = function (target, formType, fieldType) {
  if ((0, externals_1.isForm)(target)) {
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
      (0, shared_1.isValid)(event.target.value) ||
      (0, shared_1.isValid)(event.target.checked)
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
exports.isHTMLInputEvent = isHTMLInputEvent
var getValuesFromEvent = function (args) {
  return args.map(function (event) {
    if (event === null || event === void 0 ? void 0 : event.target) {
      if ((0, shared_1.isValid)(event.target.value)) return event.target.value
      if ((0, shared_1.isValid)(event.target.checked))
        return event.target.checked
      return
    }
    return event
  })
}
exports.getValuesFromEvent = getValuesFromEvent
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
      if ((0, externals_1.isVoidField)(field)) {
        return currentPath
      }
      return currentPath
    }
    if ((0, externals_1.isVoidField)(current)) {
      var parentAddress = segments.slice(0, index)
      var parent_1 = fields[parentAddress.join('.')]
      if (
        (0, externals_1.isArrayField)(parent_1) &&
        (0, shared_1.isNumberLike)(key)
      ) {
        prevArray = true
        return currentPath
      }
      return path
    } else {
      prevArray = false
    }
    return currentPath
  }, [])
  return new shared_1.FormPath(path)
}
exports.buildFieldPath = buildFieldPath
var buildNodeIndexes = function (field, address) {
  field.address = shared_1.FormPath.parse(address)
  field.path = (0, exports.buildFieldPath)(field)
  field.form.indexes[field.path.toString()] = field.address.toString()
  return field
}
exports.buildNodeIndexes = buildNodeIndexes
var patchFieldStates = function (target, patches) {
  patches.forEach(function (_a) {
    var _b
    var type = _a.type,
      address = _a.address,
      oldAddress = _a.oldAddress,
      payload = _a.payload
    if (type === 'remove') {
      ;(_b = target[address]) === null || _b === void 0 ? void 0 : _b.dispose()
      delete target[address]
    } else if (type === 'update') {
      if (payload) {
        target[address] = payload
        if (target[oldAddress] === payload) delete target[oldAddress]
      }
      if (address && payload) {
        ;(0, exports.buildNodeIndexes)(payload, address)
      }
    }
  })
}
exports.patchFieldStates = patchFieldStates
var patchFormValues = function (form, path, source) {
  var update = function (path, source) {
    if (path.length) {
      form.setValuesIn(path, (0, shared_1.clone)(source))
    } else {
      Object.assign(form.values, (0, shared_1.clone)(source))
    }
  }
  var patch = function (source, path) {
    if (path === void 0) {
      path = []
    }
    var targetValue = form.getValuesIn(path)
    var targetField = form.query(path).take()
    if ((0, exports.allowAssignDefaultValue)(targetValue, source)) {
      update(path, source)
    } else {
      if ((0, shared_1.isEmpty)(source)) return
      if (constants_1.GlobalState.initializing) return
      if (
        (0, shared_1.isPlainObj)(targetValue) &&
        (0, shared_1.isPlainObj)(source)
      ) {
        ;(0, shared_1.each)(source, function (value, key) {
          patch(value, path.concat(key))
        })
      } else {
        if (targetField) {
          if (
            !(0, externals_1.isVoidField)(targetField) &&
            !targetField.selfModified
          ) {
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
exports.patchFormValues = patchFormValues
var matchFeedback = function (search, feedback) {
  if (!search || !feedback) return false
  if (search.type && search.type !== feedback.type) return false
  if (search.code && search.code !== feedback.code) return false
  if (search.path && feedback.path) {
    if (!shared_1.FormPath.parse(search.path).match(feedback.path)) return false
  }
  if (search.address && feedback.address) {
    if (!shared_1.FormPath.parse(search.address).match(feedback.address))
      return false
  }
  if (search.triggerType && search.triggerType !== feedback.triggerType)
    return false
  return true
}
exports.matchFeedback = matchFeedback
var queryFeedbacks = function (field, search) {
  return field.feedbacks.filter(function (feedback) {
    var _a, _b, _c
    if (
      !((_a = feedback.messages) === null || _a === void 0 ? void 0 : _a.length)
    )
      return false
    return (0,
    exports.matchFeedback)(search, __assign(__assign({}, feedback), { address: (_b = field.address) === null || _b === void 0 ? void 0 : _b.toString(), path: (_c = field.path) === null || _c === void 0 ? void 0 : _c.toString() }))
  })
}
exports.queryFeedbacks = queryFeedbacks
var queryFeedbackMessages = function (field, search) {
  return (0, exports.queryFeedbacks)(field, search).reduce(function (
    buf,
    info
  ) {
    return (0, shared_1.isEmpty)(info.messages)
      ? buf
      : buf.concat(info.messages)
  },
  [])
}
exports.queryFeedbackMessages = queryFeedbackMessages
var updateFeedback = function (field, feedback) {
  if (!feedback) return
  return (0, reactive_1.batch)(function () {
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
      var searched_1 = (0, exports.queryFeedbacks)(field, feedback)
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
        (_b = feedback.messages) === null || _b === void 0 ? void 0 : _b.length
      ) {
        field.feedbacks = field.feedbacks.concat(feedback)
      }
    }
  })
}
exports.updateFeedback = updateFeedback
var validateToFeedbacks = function (field, triggerType) {
  return __awaiter(void 0, void 0, void 0, function () {
    var results
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4 /*yield*/,
            (0, validator_1.validate)(field.value, field.validator, {
              triggerType: triggerType,
              validateFirst:
                field.props.validateFirst || field.form.props.validateFirst,
              context: { field: field, form: field.form },
            }),
          ]
        case 1:
          results = _a.sent()
          ;(0, reactive_1.batch)(function () {
            ;(0, shared_1.each)(results, function (messages, type) {
              field.setFeedback({
                triggerType: triggerType,
                type: type,
                code: (0, shared_1.pascalCase)('validate-'.concat(type)),
                messages: messages,
              })
            })
          })
          return [2 /*return*/, results]
      }
    })
  })
}
exports.validateToFeedbacks = validateToFeedbacks
var setValidatorRule = function (field, name, value) {
  var _a, _b
  if (!(0, shared_1.isValid)(value)) return
  var hasRule = (0, validator_1.parseValidatorDescriptions)(
    field.validator
  ).some(function (desc) {
    return name in desc
  })
  var rule = ((_a = {}), (_a[name] = value), _a)
  if (hasRule) {
    if ((0, shared_1.isArr)(field.validator)) {
      field.validator = field.validator.map(function (desc) {
        if ((0, shared_1.isPlainObj)(desc) && hasOwnProperty.call(desc, name)) {
          desc[name] = value
          return desc
        }
        return desc
      })
    } else if ((0, shared_1.isPlainObj)(field.validator)) {
      field.validator[name] = value
    } else {
      field.validator = ((_b = {}), (_b[name] = value), _b)
    }
  } else {
    if ((0, shared_1.isArr)(field.validator)) {
      if (name === 'required') {
        field.validator.unshift(rule)
      } else {
        field.validator.push(rule)
      }
    } else {
      if (name === 'required') {
        field.validator = [rule, field.validator]
      } else if ((0, shared_1.isPlainObj)(field.validator)) {
        field.validator[name] = value
      } else if (field.validator) {
        field.validator = [field.validator, rule]
      } else {
        field.validator = rule
      }
    }
  }
}
exports.setValidatorRule = setValidatorRule
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
      (_a = afterStr.match(constants_1.NumberIndexReg)) === null ||
      _a === void 0
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
      (_a = afterStr.match(constants_1.NumberIndexReg)) === null ||
      _a === void 0
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
      (_a = afterStr.match(constants_1.NumberIndexReg)) === null ||
      _a === void 0
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
      (_a = afterStr.match(constants_1.NumberIndexReg)) === null ||
      _a === void 0
        ? void 0
        : _a[1]
    if (number === undefined) return identifier
    var index = Number(number) + offset
    return ''
      .concat(preStr)
      .concat(afterStr.replace(/^\.\d+/, '.'.concat(index)))
  }
  ;(0, reactive_1.batch)(function () {
    ;(0, shared_1.each)(fields, function (field, identifier) {
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
    ;(0, exports.patchFieldStates)(fields, fieldPatches)
  })
  field.form.notify(types_1.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
}
exports.spliceArrayState = spliceArrayState
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
      (_a = afterStr.match(constants_1.NumberIndexReg)) === null ||
      _a === void 0
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
      (_a = afterStr.match(constants_1.NumberIndexReg)) === null ||
      _a === void 0
        ? void 0
        : _a[1]
    if (number === undefined) return false
    var index = Number(number)
    return index === fromIndex
  }
  var moveIndex = function (identifier) {
    var preStr = identifier.substring(0, addrLength)
    var afterStr = identifier.substring(addrLength)
    var number = afterStr.match(constants_1.NumberIndexReg)[1]
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
  ;(0, reactive_1.batch)(function () {
    ;(0, shared_1.each)(fields, function (field, identifier) {
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
    ;(0, exports.patchFieldStates)(fields, fieldPatches)
  })
  field.form.notify(types_1.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
}
exports.exchangeArrayState = exchangeArrayState
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
      (_a = afterStr.match(constants_1.NumberIndexReg)) === null ||
      _a === void 0
        ? void 0
        : _a[1]
    if (number === undefined) return false
    var index = Number(number)
    return index >= start
  }
  ;(0, reactive_1.batch)(function () {
    ;(0, shared_1.each)(fields, function (field, identifier) {
      if (isArrayChildren(identifier) && isNeedCleanup(identifier)) {
        field.destroy()
      }
    })
  })
}
exports.cleanupArrayChildren = cleanupArrayChildren
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
  ;(0, reactive_1.batch)(function () {
    ;(0, shared_1.each)(fields, function (field, identifier) {
      if (isObjectChildren(identifier) && isNeedCleanup(identifier)) {
        field.destroy()
      }
    })
  })
}
exports.cleanupObjectChildren = cleanupObjectChildren
exports.initFieldUpdate = reactive_1.batch.scope.bound(function (field) {
  var form = field.form
  var updates = shared_1.FormPath.ensureIn(form, 'requests.updates', [])
  var indexes = shared_1.FormPath.ensureIn(form, 'requests.updateIndexes', {})
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
  var updates = shared_1.FormPath.ensureIn(form, 'requests.updates', [])
  var indexes = shared_1.FormPath.ensureIn(form, 'requests.updateIndexes', {})
  var id = pattern.toString()
  var current = indexes[id]
  if ((0, shared_1.isValid)(current)) {
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
exports.subscribeUpdate = subscribeUpdate
var deserialize = function (model, setter) {
  if (!model) return
  if ((0, shared_1.isFn)(setter)) {
    setter(model)
  } else {
    for (var key in setter) {
      if (!hasOwnProperty.call(setter, key)) continue
      if (
        constants_1.ReadOnlyProperties[key] ||
        constants_1.ReservedProperties[key]
      )
        continue
      var MutuallyExclusiveKey = constants_1.MutuallyExclusiveProperties[key]
      if (
        MutuallyExclusiveKey &&
        hasOwnProperty.call(setter, MutuallyExclusiveKey) &&
        !(0, shared_1.isValid)(setter[MutuallyExclusiveKey])
      )
        continue
      var value = setter[key]
      if ((0, shared_1.isFn)(value)) continue
      model[key] = value
    }
  }
  return model
}
exports.deserialize = deserialize
var serialize = function (model, getter) {
  if ((0, shared_1.isFn)(getter)) {
    return getter(model)
  } else {
    var results = {}
    for (var key in model) {
      if (!hasOwnProperty.call(model, key)) continue
      if (constants_1.ReservedProperties[key]) continue
      if (key === 'address' || key === 'path') {
        results[key] = model[key].toString()
        continue
      }
      var value = model[key]
      if ((0, shared_1.isFn)(value)) continue
      results[key] = (0, reactive_1.toJS)(value)
    }
    return results
  }
}
exports.serialize = serialize
var createChildrenFeedbackFilter = function (field) {
  var _a
  var identifier =
    (_a = field.address) === null || _a === void 0 ? void 0 : _a.toString()
  return function (_a) {
    var address = _a.address
    return address.indexOf(identifier) === 0
  }
}
exports.createChildrenFeedbackFilter = createChildrenFeedbackFilter
var createStateSetter = function (model) {
  return reactive_1.batch.bound(function (setter) {
    return (0, exports.deserialize)(model, setter)
  })
}
exports.createStateSetter = createStateSetter
var createStateGetter = function (model) {
  return function (getter) {
    return (0, exports.serialize)(model, getter)
  }
}
exports.createStateGetter = createStateGetter
var createBatchStateSetter = function (form) {
  return reactive_1.batch.bound(function (pattern, payload) {
    if ((0, externals_1.isQuery)(pattern)) {
      pattern.forEach(function (field) {
        field.setState(payload)
      })
    } else if ((0, externals_1.isGeneralField)(pattern)) {
      pattern.setState(payload)
    } else {
      var matchCount_1 = 0,
        path = shared_1.FormPath.parse(pattern)
      form.query(path).forEach(function (field) {
        field.setState(payload)
        matchCount_1++
      })
      if (matchCount_1 === 0 || path.isWildMatchPattern) {
        ;(0, exports.subscribeUpdate)(form, path, payload)
      }
    }
  })
}
exports.createBatchStateSetter = createBatchStateSetter
var createBatchStateGetter = function (form) {
  return function (pattern, payload) {
    if ((0, externals_1.isQuery)(pattern)) {
      return pattern.take(payload)
    } else if ((0, externals_1.isGeneralField)(pattern)) {
      return pattern.getState(payload)
    } else {
      return form.query(pattern).take(function (field) {
        return field.getState(payload)
      })
    }
  }
}
exports.createBatchStateGetter = createBatchStateGetter
var triggerFormInitialValuesChange = function (form, change) {
  var path = change.path
  if (Array.isArray(change.object) && change.key === 'length') return
  if (
    (0, reactive_1.contains)(form.initialValues, change.object) ||
    (0, reactive_1.contains)(form.initialValues, change.value)
  ) {
    if (change.type === 'add' || change.type === 'set') {
      ;(0, exports.patchFormValues)(form, path.slice(1), change.value)
    }
    if (form.initialized) {
      form.notify(types_1.LifeCycleTypes.ON_FORM_INITIAL_VALUES_CHANGE)
    }
  }
}
exports.triggerFormInitialValuesChange = triggerFormInitialValuesChange
var triggerFormValuesChange = function (form, change) {
  if (Array.isArray(change.object) && change.key === 'length') return
  if (
    ((0, reactive_1.contains)(form.values, change.object) ||
      (0, reactive_1.contains)(form.values, change.value)) &&
    form.initialized
  ) {
    form.notify(types_1.LifeCycleTypes.ON_FORM_VALUES_CHANGE)
  }
}
exports.triggerFormValuesChange = triggerFormValuesChange
var setValidating = function (target, validating) {
  clearTimeout(target.requests.validate)
  if (validating) {
    target.requests.validate = setTimeout(function () {
      ;(0, reactive_1.batch)(function () {
        target.validating = validating
        notify(
          target,
          types_1.LifeCycleTypes.ON_FORM_VALIDATING,
          types_1.LifeCycleTypes.ON_FIELD_VALIDATING
        )
      })
    }, constants_1.RESPONSE_REQUEST_DURATION)
    notify(
      target,
      types_1.LifeCycleTypes.ON_FORM_VALIDATE_START,
      types_1.LifeCycleTypes.ON_FIELD_VALIDATE_START
    )
  } else {
    if (target.validating !== validating) {
      target.validating = validating
    }
    notify(
      target,
      types_1.LifeCycleTypes.ON_FORM_VALIDATE_END,
      types_1.LifeCycleTypes.ON_FIELD_VALIDATE_END
    )
  }
}
exports.setValidating = setValidating
var setSubmitting = function (target, submitting) {
  clearTimeout(target.requests.submit)
  if (submitting) {
    target.requests.submit = setTimeout(function () {
      ;(0, reactive_1.batch)(function () {
        target.submitting = submitting
        notify(
          target,
          types_1.LifeCycleTypes.ON_FORM_SUBMITTING,
          types_1.LifeCycleTypes.ON_FIELD_SUBMITTING
        )
      })
    }, constants_1.RESPONSE_REQUEST_DURATION)
    notify(
      target,
      types_1.LifeCycleTypes.ON_FORM_SUBMIT_START,
      types_1.LifeCycleTypes.ON_FIELD_SUBMIT_START
    )
  } else {
    if (target.submitting !== submitting) {
      target.submitting = submitting
    }
    notify(
      target,
      types_1.LifeCycleTypes.ON_FORM_SUBMIT_END,
      types_1.LifeCycleTypes.ON_FIELD_SUBMIT_END
    )
  }
}
exports.setSubmitting = setSubmitting
var setLoading = function (target, loading) {
  clearTimeout(target.requests.loading)
  if (loading) {
    target.requests.loading = setTimeout(function () {
      ;(0, reactive_1.batch)(function () {
        target.loading = loading
        notify(
          target,
          types_1.LifeCycleTypes.ON_FORM_LOADING,
          types_1.LifeCycleTypes.ON_FIELD_LOADING
        )
      })
    }, constants_1.RESPONSE_REQUEST_DURATION)
  } else if (target.loading !== loading) {
    target.loading = loading
  }
}
exports.setLoading = setLoading
var batchSubmit = function (target, onSubmit) {
  return __awaiter(void 0, void 0, void 0, function () {
    var getValues, e_1, results, e_2
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          getValues = function (target) {
            if ((0, externals_1.isForm)(target)) {
              return (0, reactive_1.toJS)(target.values)
            }
            return (0, reactive_1.toJS)(target.value)
          }
          target.setSubmitting(true)
          _a.label = 1
        case 1:
          _a.trys.push([1, 3, , 4])
          notify(
            target,
            types_1.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_START,
            types_1.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_START
          )
          return [4 /*yield*/, target.validate()]
        case 2:
          _a.sent()
          notify(
            target,
            types_1.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_SUCCESS,
            types_1.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_SUCCESS
          )
          return [3 /*break*/, 4]
        case 3:
          e_1 = _a.sent()
          notify(
            target,
            types_1.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_FAILED,
            types_1.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_FAILED
          )
          return [3 /*break*/, 4]
        case 4:
          notify(
            target,
            types_1.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_END,
            types_1.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_END
          )
          _a.label = 5
        case 5:
          _a.trys.push([5, 9, , 10])
          if (target.invalid) {
            throw target.errors
          }
          if (!(0, shared_1.isFn)(onSubmit)) return [3 /*break*/, 7]
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
            types_1.LifeCycleTypes.ON_FORM_SUBMIT_SUCCESS,
            types_1.LifeCycleTypes.ON_FIELD_SUBMIT_SUCCESS
          )
          return [3 /*break*/, 10]
        case 9:
          e_2 = _a.sent()
          target.setSubmitting(false)
          notify(
            target,
            types_1.LifeCycleTypes.ON_FORM_SUBMIT_FAILED,
            types_1.LifeCycleTypes.ON_FIELD_SUBMIT_FAILED
          )
          notify(
            target,
            types_1.LifeCycleTypes.ON_FORM_SUBMIT,
            types_1.LifeCycleTypes.ON_FIELD_SUBMIT
          )
          throw e_2
        case 10:
          target.setSubmitting(false)
          notify(
            target,
            types_1.LifeCycleTypes.ON_FORM_SUBMIT,
            types_1.LifeCycleTypes.ON_FIELD_SUBMIT
          )
          return [2 /*return*/, results]
      }
    })
  })
}
exports.batchSubmit = batchSubmit
var batchValidate = function (target, pattern, triggerType) {
  return __awaiter(void 0, void 0, void 0, function () {
    var tasks
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if ((0, externals_1.isForm)(target)) target.setValidating(true)
          else {
            if (target.pattern !== 'editable' || target.display !== 'visible')
              return [2 /*return*/]
          }
          tasks = []
          target.query(pattern).forEach(function (field) {
            if (!(0, externals_1.isVoidField)(field)) {
              tasks.push(
                (0, exports.validateSelf)(field, triggerType, field === target)
              )
            }
          })
          return [4 /*yield*/, Promise.all(tasks)]
        case 1:
          _a.sent()
          if ((0, externals_1.isForm)(target)) target.setValidating(false)
          if (target.invalid) {
            notify(
              target,
              types_1.LifeCycleTypes.ON_FORM_VALIDATE_FAILED,
              types_1.LifeCycleTypes.ON_FIELD_VALIDATE_FAILED
            )
            throw target.errors
          }
          notify(
            target,
            types_1.LifeCycleTypes.ON_FORM_VALIDATE_SUCCESS,
            types_1.LifeCycleTypes.ON_FIELD_VALIDATE_SUCCESS
          )
          return [2 /*return*/]
      }
    })
  })
}
exports.batchValidate = batchValidate
var batchReset = function (target, pattern, options) {
  return __awaiter(void 0, void 0, void 0, function () {
    var tasks
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          tasks = []
          target.query(pattern).forEach(function (field) {
            if (!(0, externals_1.isVoidField)(field)) {
              tasks.push(
                (0, exports.resetSelf)(field, options, target === field)
              )
            }
          })
          if ((0, externals_1.isForm)(target)) {
            target.modified = false
          }
          notify(
            target,
            types_1.LifeCycleTypes.ON_FORM_RESET,
            types_1.LifeCycleTypes.ON_FIELD_RESET
          )
          return [4 /*yield*/, Promise.all(tasks)]
        case 1:
          _a.sent()
          return [2 /*return*/]
      }
    })
  })
}
exports.batchReset = batchReset
exports.validateSelf = reactive_1.batch.bound(function (
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
            ;(0, exports.setValidating)(target, true)
          }
          end = function () {
            ;(0, exports.setValidating)(target, false)
            if (noEmit) return
            if (target.selfValid) {
              target.notify(types_1.LifeCycleTypes.ON_FIELD_VALIDATE_SUCCESS)
            } else {
              target.notify(types_1.LifeCycleTypes.ON_FIELD_VALIDATE_FAILED)
            }
          }
          if (target.pattern !== 'editable' || target.display !== 'visible')
            return [2 /*return*/, {}]
          start()
          if (!!triggerType) return [3 /*break*/, 5]
          allTriggerTypes = (0, validator_1.parseValidatorDescriptions)(
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
            (0, exports.validateToFeedbacks)(target, allTriggerTypes[i]),
          ]
        case 2:
          payload = _a.sent()
          ;(0, shared_1.each)(payload, function (result, key) {
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
          return [
            4 /*yield*/,
            (0, exports.validateToFeedbacks)(target, triggerType),
          ]
        case 6:
          results = _a.sent()
          end()
          return [2 /*return*/, results]
      }
    })
  })
})
exports.resetSelf = reactive_1.batch.bound(function (target, options, noEmit) {
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
            options === null || options === void 0 ? void 0 : options.forceClear
          ) {
            if ((0, externals_1.isArrayField)(target)) {
              target.value = []
            } else if ((0, externals_1.isObjectField)(target)) {
              target.value = {}
            } else {
              target.value = undefined
            }
          } else if ((0, shared_1.isValid)(target.value)) {
            target.value = (0, reactive_1.toJS)(target.initialValue)
          }
          if (!noEmit) {
            target.notify(types_1.LifeCycleTypes.ON_FIELD_RESET)
          }
          if (
            !(options === null || options === void 0
              ? void 0
              : options.validate)
          )
            return [3 /*break*/, 2]
          return [4 /*yield*/, (0, exports.validateSelf)(target)]
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
    if ((0, externals_1.isDataField)(parent)) {
      if (parent.modified) return
      parent.modified = true
    }
    parent = parent.parent
  }
  target.form.modified = true
}
exports.modifySelf = modifySelf
var getValidFormValues = function (values) {
  if ((0, reactive_1.isObservable)(values)) return values
  return (0, shared_1.clone)(values || {})
}
exports.getValidFormValues = getValidFormValues
var getValidFieldDefaultValue = function (value, initialValue) {
  if ((0, exports.allowAssignDefaultValue)(value, initialValue))
    return (0, shared_1.clone)(initialValue)
  return value
}
exports.getValidFieldDefaultValue = getValidFieldDefaultValue
var allowAssignDefaultValue = function (target, source) {
  var isEmptyTarget = (0, shared_1.isEmpty)(target)
  var isEmptySource = (0, shared_1.isEmpty)(source)
  var isValidTarget = (0, shared_1.isValid)(target)
  var isValidSource = (0, shared_1.isValid)(source)
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
exports.allowAssignDefaultValue = allowAssignDefaultValue
var createReactions = function (field) {
  var reactions = (0, shared_1.toArr)(field.props.reactions)
  field.form.addEffects(field, function () {
    reactions.forEach(function (reaction) {
      if ((0, shared_1.isFn)(reaction)) {
        field.disposers.push(
          (0, reactive_1.autorun)(
            reactive_1.batch.scope.bound(function () {
              return reaction(field)
            })
          )
        )
      }
    })
  })
}
exports.createReactions = createReactions
var initializeStart = function () {
  constants_1.GlobalState.initializing = true
}
exports.initializeStart = initializeStart
var initializeEnd = function () {
  reactive_1.batch.endpoint(function () {
    constants_1.GlobalState.initializing = false
  })
}
exports.initializeEnd = initializeEnd
//# sourceMappingURL=internals.js.map
