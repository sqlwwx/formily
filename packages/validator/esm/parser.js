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
import { isArr, isBool, isFn, isStr } from '@formily/shared'
import { isValidateResult } from './types'
import { getValidateRules, getValidateLocale } from './registry'
import { render } from './template'
var getRuleMessage = function (rule, type) {
  if (rule.format) {
    return rule.message || getValidateLocale(rule.format)
  }
  return rule.message || getValidateLocale(type)
}
export var parseValidatorDescription = function (description) {
  var rules = {}
  if (isStr(description)) {
    rules.format = description
  } else if (isFn(description)) {
    rules.validator = description
  } else {
    rules = Object.assign(rules, description)
  }
  rules.triggerType = rules.triggerType || 'onInput'
  return rules
}
export var parseValidatorDescriptions = function (validator) {
  var array = isArr(validator) ? validator : [validator]
  return array.map(function (description) {
    return parseValidatorDescription(description)
  })
}
export var parseValidatorRules = function (rules) {
  if (rules === void 0) {
    rules = {}
  }
  var getRulesKeys = function () {
    var keys = []
    if ('required' in rules) {
      keys.push('required')
    }
    for (var key in rules) {
      if (key === 'required' || key === 'validator') continue
      keys.push(key)
    }
    if ('validator' in rules) {
      keys.push('validator')
    }
    return keys
  }
  var getContext = function (context, value) {
    return __assign(__assign(__assign({}, rules), context), { value: value })
  }
  var createValidate = function (callback, message) {
    return function (value, context) {
      return __awaiter(void 0, void 0, void 0, function () {
        var context_, results, e_1
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              context_ = getContext(context, value)
              _a.label = 1
            case 1:
              _a.trys.push([1, 3, , 4])
              return [
                4 /*yield*/,
                callback(
                  value,
                  __assign(__assign({}, rules), { message: message }),
                  context_,
                  function (message, scope) {
                    var _a
                    return (_a = render(
                      {
                        type: 'error',
                        message: message,
                      },
                      Object.assign(context_, scope)
                    )) === null || _a === void 0
                      ? void 0
                      : _a.message
                  }
                ),
              ]
            case 2:
              results = _a.sent()
              if (isBool(results)) {
                if (!results) {
                  return [
                    2 /*return*/,
                    render(
                      {
                        type: 'error',
                        message: message,
                      },
                      context_
                    ),
                  ]
                }
                return [
                  2 /*return*/,
                  {
                    type: 'error',
                    message: undefined,
                  },
                ]
              } else if (results) {
                if (isValidateResult(results)) {
                  return [2 /*return*/, render(results, context_)]
                }
                return [
                  2 /*return*/,
                  render(
                    {
                      type: 'error',
                      message: results,
                    },
                    context_
                  ),
                ]
              }
              return [
                2 /*return*/,
                {
                  type: 'error',
                  message: undefined,
                },
              ]
            case 3:
              e_1 = _a.sent()
              return [
                2 /*return*/,
                {
                  type: 'error',
                  message:
                    (e_1 === null || e_1 === void 0 ? void 0 : e_1.message) ||
                    e_1,
                },
              ]
            case 4:
              return [2 /*return*/]
          }
        })
      })
    }
  }
  return getRulesKeys().reduce(function (buf, key) {
    var callback = getValidateRules(key)
    if (callback) {
      var validator = createValidate(callback, getRuleMessage(rules, key))
      return buf.concat(validator)
    }
    return buf
  }, [])
}
export var parseValidator = function (validator, options) {
  if (options === void 0) {
    options = {}
  }
  var array = isArr(validator) ? validator : [validator]
  return array.reduce(function (buf, description) {
    var rules = parseValidatorDescription(description)
    if (
      (options === null || options === void 0 ? void 0 : options.triggerType) &&
      options.triggerType !== rules.triggerType
    )
      return buf
    return rules ? buf.concat(parseValidatorRules(rules)) : buf
  }, [])
}
//# sourceMappingURL=parser.js.map
