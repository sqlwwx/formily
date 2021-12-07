;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define('formily.validator', ['exports'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        ((global.Formily = global.Formily || {}),
        (global.Formily.Validator = {}))
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

  var isValidateResult = function (obj) {
    return !!obj['type'] && !!obj['message']
  }

  var getIn = Formily.Shared.FormPath.getIn
  var self = Formily.Shared.globalThisPolyfill
  var defaultLanguage = 'en'
  var getBrowserlanguage = function () {
    /* istanbul ignore next */
    if (!self.navigator) {
      return defaultLanguage
    }
    return (
      self.navigator.browserlanguage ||
      self.navigator.language ||
      defaultLanguage
    )
  }
  var registry = {
    locales: {
      messages: {},
      language: getBrowserlanguage(),
    },
    formats: {},
    rules: {},
    template: null,
  }
  var getISOCode = function (language) {
    var isoCode = registry.locales.language
    var lang = Formily.Shared.lowerCase(language)
    if (registry.locales.messages[language]) {
      return language
    }
    Formily.Shared.each(registry.locales.messages, function (messages, key) {
      var target = Formily.Shared.lowerCase(key)
      if (target.indexOf(lang) > -1 || lang.indexOf(target) > -1) {
        isoCode = key
        return false
      }
    })
    return isoCode
  }
  var getValidateLocaleIOSCode = getISOCode
  var setValidateLanguage = function (lang) {
    registry.locales.language = lang || defaultLanguage
  }
  var getValidateLanguage = function () {
    return registry.locales.language
  }
  var getLocaleByPath = function (path, lang) {
    if (lang === void 0) {
      lang = registry.locales.language
    }
    return getIn(
      registry.locales.messages,
      ''.concat(getISOCode(lang), '.').concat(path)
    )
  }
  var getValidateLocale = function (path) {
    var message = getLocaleByPath(path)
    return (
      message ||
      getLocaleByPath('pattern') ||
      getLocaleByPath('pattern', defaultLanguage)
    )
  }
  var getValidateMessageTemplateEngine = function () {
    return registry.template
  }
  var getValidateFormats = function (key) {
    return key ? registry.formats[key] : registry.formats
  }
  var getValidateRules = function (key) {
    return key ? registry.rules[key] : registry.rules
  }
  var registerValidateLocale = function (locale) {
    registry.locales.messages = Formily.Shared.merge(
      registry.locales.messages,
      locale
    )
  }
  var registerValidateRules = function (rules) {
    Formily.Shared.each(rules, function (rule, key) {
      if (Formily.Shared.isFn(rule)) {
        registry.rules[key] = rule
      }
    })
  }
  var registerValidateFormats = function (formats) {
    Formily.Shared.each(formats, function (pattern, key) {
      if (Formily.Shared.isStr(pattern) || pattern instanceof RegExp) {
        registry.formats[key] = new RegExp(pattern)
      }
    })
  }
  var registerValidateMessageTemplateEngine = function (template) {
    registry.template = template
  }

  var render = function (result, rules) {
    var message = result.message
    if (Formily.Shared.isStr(result.message)) {
      var template = getValidateMessageTemplateEngine()
      if (Formily.Shared.isFn(template)) {
        result.message = template(message, rules)
      }
      result.message = result.message.replace(
        /\{\{\s*([\w.]+)\s*\}\}/g,
        function (_, $0) {
          return Formily.Shared.FormPath.getIn(rules, $0)
        }
      )
    }
    return result
  }

  var getRuleMessage = function (rule, type) {
    if (rule.format) {
      return rule.message || getValidateLocale(rule.format)
    }
    return rule.message || getValidateLocale(type)
  }
  var parseValidatorDescription = function (description) {
    var rules = {}
    if (Formily.Shared.isStr(description)) {
      rules.format = description
    } else if (Formily.Shared.isFn(description)) {
      rules.validator = description
    } else {
      rules = Object.assign(rules, description)
    }
    rules.triggerType = rules.triggerType || 'onInput'
    return rules
  }
  var parseValidatorDescriptions = function (validator) {
    var array = Formily.Shared.isArr(validator) ? validator : [validator]
    return array.map(function (description) {
      return parseValidatorDescription(description)
    })
  }
  var parseValidatorRules = function (rules) {
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
                if (Formily.Shared.isBool(results)) {
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
  var parseValidator = function (validator, options) {
    if (options === void 0) {
      options = {}
    }
    var array = Formily.Shared.isArr(validator) ? validator : [validator]
    return array.reduce(function (buf, description) {
      var rules = parseValidatorDescription(description)
      if (
        (options === null || options === void 0
          ? void 0
          : options.triggerType) &&
        options.triggerType !== rules.triggerType
      )
        return buf
      return rules ? buf.concat(parseValidatorRules(rules)) : buf
    }, [])
  }

  var locales = {
    en: {
      pattern: 'This field is invalid',
      invalid: 'This field is invalid',
      required: 'The field value is required',
      number: 'The field value is not a number',
      integer: 'The field value is not an integer number',
      url: 'The field value is a invalid url',
      email: 'The field value is not a email format',
      ipv6: 'The field value is not a ipv6 format',
      ipv4: 'The field value is not a ipv4 format',
      idcard: 'The field value is not an idcard format',
      qq: 'The field value is not a qq number format',
      phone: 'The field value is not a phone number format',
      money: 'The field value is not a currency format',
      zh: 'The field value is not a chinese string',
      date: 'The field value is not a valid date format',
      zip: 'The field value is not a zip format',
      len: 'The length or number of entries must be {{len}}',
      min: 'The length or number of entries must be at least {{min}}',
      minLength:
        'The length or number of entries must be at least {{minLength}}',
      minItems: 'The length or number of entries must be at least {{minItems}}',
      maximum: 'The field value cannot be greater than {{maximum}}',
      exclusiveMaximum:
        'The field value must be less than {{exclusiveMaximum}}',
      minimum: 'The field value cannot be less than {{minimum}}',
      exclusiveMinimum:
        'The field value must be greater than {{exclusiveMinimum}}',
      max: 'The field length or number of entries must be at most {{max}}',
      maxLength:
        'The field length or number of entries must be at most {{maxLength}}',
      maxItems:
        'The field length or number of entries must be at most {{maxItems}}',
      whitespace: 'This field value cannot be blank string.',
      enum: 'The field value must be one of {{enum}}',
      const: 'The field value must be equal to {{const}}',
      multipleOf: 'The field value must be divisible by {{multipleOf}}',
      maxProperties:
        'The number of field properties cannot be greater than {{maxProperties}}',
      minProperties:
        'The number of field properties cannot be less than {{maxProperties}}',
      uniqueItems: 'Array elements are not unique',
    },
    zh: {
      pattern: '该字段不是一个合法的字段',
      invalid: '该字段不是一个合法的字段',
      required: '该字段是必填字段',
      number: '该字段不是合法的数字',
      integer: '该字段不是合法的整型数字',
      url: '该字段不是合法的url',
      email: '该字段不是合法的邮箱格式',
      ipv6: '该字段不是合法的ipv6格式',
      ipv4: '该字段不是合法的ipv4格式',
      idcard: '该字段不是合法的身份证格式',
      qq: '该字段不符合QQ号格式',
      phone: '该字段不是有效的手机号',
      money: '该字段不是有效货币格式',
      zh: '该字段不是合法的中文字符串',
      date: '该字段不是合法的日期格式',
      zip: '该字段不是合法的邮编格式',
      len: '长度或条目数必须为{{len}}',
      min: '长度或条目数不能小于{{min}}',
      minLength: '长度或条目数不能小于{{minLength}}',
      minItems: '长度或条目数不能小于{{minItems}}',
      max: '长度或条目数不能大于{{max}}',
      maxLength: '长度或条目数不能大于{{maxLength}}',
      maxItems: '长度或条目数不能大于{{maxItems}}',
      maximum: '数值不能大于{{maximum}}',
      exclusiveMaximum: '数值必须小于{{exclusiveMaximum}}',
      minimum: '数值不能小于{{minimum}}',
      exclusiveMinimum: '数值必须大于{{exclusiveMinimum}}',
      whitespace: '不能为纯空白字符串',
      enum: '字段值必须为{{enum}}其中一个',
      const: '字段值必须等于{{const}}',
      multipleOf: '字段值不能被{{multipleOf}}整除',
      maxProperties: '字段属性数量不能大于{{maxProperties}}',
      minProperties: '字段属性数量不能小于{{minProperties}}',
      uniqueItems: '数组元素不唯一',
    },
    'en-US': {
      pattern: 'This field is invalid',
      invalid: 'This field is invalid',
      required: 'The field value is required',
      number: 'The field value is not a number',
      integer: 'The field value is not an integer number',
      url: 'The field value is a invalid url',
      email: 'The field value is not a email format',
      ipv6: 'The field value is not a ipv6 format',
      ipv4: 'The field value is not a ipv4 format',
      idcard: 'The field value is not an idcard format',
      qq: 'The field value is not a qq number format',
      phone: 'The field value is not a phone number format',
      money: 'The field value is not a currency format',
      zh: 'The field value is not a chinese string',
      date: 'The field value is not a valid date format',
      zip: 'The field value is not a zip format',
      len: 'The length or number of entries must be {{len}}',
      min: 'The length or number of entries must be at least {{min}}',
      minLength:
        'The length or number of entries must be at least {{minLength}}',
      minItems: 'The length or number of entries must be at least {{minItems}}',
      maximum: 'The field value cannot be greater than {{maximum}}',
      exclusiveMaximum:
        'The field value must be less than {{exclusiveMaximum}}',
      minimum: 'The field value cannot be less than {{minimum}}',
      exclusiveMinimum:
        'The field value must be greater than {{exclusiveMinimum}}',
      max: 'The field length or number of entries must be at most {{max}}',
      maxLength:
        'The field length or number of entries must be at most {{maxLength}}',
      maxItems:
        'The field length or number of entries must be at most {{maxItems}}',
      whitespace: 'This field value cannot be blank string.',
      enum: 'The field value must be one of {{enum}}',
      const: 'The field value must be equal to {{const}}',
      multipleOf: 'The field value must be divisible by {{multipleOf}}',
      maxProperties:
        'The number of field properties cannot be greater than {{maxProperties}}',
      minProperties:
        'The number of field properties cannot be less than {{maxProperties}}',
      uniqueItems: 'Array elements are not unique',
    },
    'zh-CN': {
      pattern: '该字段不是一个合法的字段',
      invalid: '该字段不是一个合法的字段',
      required: '该字段是必填字段',
      number: '该字段不是合法的数字',
      integer: '该字段不是合法的整型数字',
      url: '该字段不是合法的url',
      email: '该字段不是合法的邮箱格式',
      ipv6: '该字段不是合法的ipv6格式',
      ipv4: '该字段不是合法的ipv4格式',
      idcard: '该字段不是合法的身份证格式',
      qq: '该字段不符合QQ号格式',
      phone: '该字段不是有效的手机号',
      money: '该字段不是有效货币格式',
      zh: '该字段不是合法的中文字符串',
      date: '该字段不是合法的日期格式',
      zip: '该字段不是合法的邮编格式',
      len: '长度或条目数必须为{{len}}',
      min: '长度或条目数不能小于{{min}}',
      minLength: '长度或条目数不能小于{{minLength}}',
      minItems: '长度或条目数不能小于{{minItems}}',
      maxLength: '长度或条目数不能大于{{maxLength}}',
      maxItems: '长度或条目数不能大于{{maxItems}}',
      max: '长度或条目数不能大于{{max}}',
      maximum: '数值不能大于{{maximum}}',
      exclusiveMaximum: '数值必须小于{{exclusiveMaximum}}',
      minimum: '数值不能小于{{minimum}}',
      exclusiveMinimum: '数值必须大于{{exclusiveMinimum}}',
      whitespace: '不能为纯空白字符串',
      enum: '字段值必须为{{enum}}其中一个',
      const: '字段值必须等于{{const}}',
      multipleOf: '字段值不能被{{multipleOf}}整除',
      maxProperties: '字段属性数量不能大于{{maxProperties}}',
      minProperties: '字段属性数量不能小于{{minProperties}}',
      uniqueItems: '数组元素不唯一',
    },
    'zh-TW': {
      pattern: '該字段不是一個合法的字段',
      invalid: '該字段不是一個合法的字段',
      required: '該字段是必填字段',
      number: '該字段不是合法的數字',
      integer: '該字段不是合法的整型數字',
      url: '該字段不是合法的url',
      email: '該字段不是合法的郵箱格式',
      ipv6: '該字段不是合法的ipv6格式',
      ipv4: '該字段不是合法的ipv4格式',
      idcard: '該字段不是合法的身份證格式',
      qq: '該字段不符合QQ號格式',
      phone: '該字段不是有效的手機號',
      money: '該字段不是有效貨幣格式',
      zh: '該字段不是合法的中文字符串',
      date: '該字段不是合法的日期格式',
      zip: '該字段不是合法的郵編格式',
      len: '長度或條目數必須為{{len}}',
      min: '長度或條目數不能小於{{min}}',
      minItems: '長度或條目數不能小於{{minItems}}',
      minLength: '長度或條目數不能小於{{minLength}}',
      max: '長度或條目數不能大於{{max}}',
      maxItems: '長度或條目數不能大於{{maxItems}}',
      maxLength: '長度或條目數不能大於{{maxLength}}',
      maximum: '數值不能大於{{maximum}}',
      exclusiveMaximum: '數值必須小於{{exclusiveMaximum}}',
      minimum: '數值不能小於{{minimum}}',
      exclusiveMinimum: '數值必須大於{{exclusiveMinimum}}',
      whitespace: '不能為純空白字符串',
      enum: '字段值必須為{{enum}}其中一個',
      const: '字段值必須等於{{const}}',
      multipleOf: '字段值不能被{{multipleOf}}整除',
      maxProperties: '字段屬性數量不能大於{{maxProperties}}',
      minProperties: '字段屬性數量不能小於{{minProperties}}',
      uniqueItems: '數組元素不唯一',
    },
    ja: {
      url: 'このフィールドは無効なURLです',
      whitespace: 'このフィールドを空の文字列にすることはできません。',
      zh: 'このフィールドは中国語の文字列ではありません',
      zip: 'このフィールドはzip形式ではありません',
      date: 'このフィールドは有効な日付形式ではありません',
      email: 'このフィールドはメール形式ではありません',
      exclusiveMaximum: '値は{{exclusiveMaximum}}未満である必要があります',
      exclusiveMinimum: '値は{{exclusiveMinimum}}より大きい必要があります',
      idcard: 'このフィールドはIDカード形式ではありません',
      integer: 'このフィールドは整数ではありません',
      ipv4: 'このフィールドはIPv4形式ではありません',
      ipv6: 'このフィールドはIPv6形式ではありません',
      len: 'エントリの長さまたは数は{{len}}でなければなりません',
      max: 'エントリの長さまたは数は最大{{max}}でなければなりません',
      maxItems: 'エントリの長さまたは数は最大{{maxItems}}でなければなりません',
      maxLength:
        'エントリの長さまたは数は最大{{maxLength}}でなければなりません',
      maximum: '値は{{最大}}を超えることはできません',
      min: 'エントリの長さまたは数は、少なくとも{{min}}である必要があります',
      minItems:
        'エントリの長さまたは数は、少なくとも{{minItems}}である必要があります',
      minLength:
        'エントリの長さまたは数は、少なくとも{{minLength}}である必要があります',
      minimum: '値は{{minimum}}以上にする必要があります',
      money: 'このフィールドは通貨形式ではありません',
      number: 'このフィールドは数値ではありません',
      pattern: 'このフィールドはどのパターンとも一致しません',
      invalid: 'このフィールドはどのパターンとも一致しません',
      phone: 'このフィールドは電話番号の形式ではありません',
      qq: 'このフィールドはqq数値形式ではありません',
      required: 'この項目は必須です',
      enum: 'フィールド値は{{enum}}のいずれかである必要があります',
      cons: 'フィールド値は{{const}}と等しくなければなりません',
      multipleOf: 'フィールド値を{{multipleOf}}で割り切れない',
      maxProperties:
        'フィールドプロパティの数は{{maxProperties}}を超えることはできません',
      minProperties:
        'フィールドプロパティの数は{{minProperties}}未満にすることはできません',
      uniqueItems: '配列要素は一意ではありません',
    },
  }

  var formats = {
    url: new RegExp(
      // protocol identifier
      '^(?:(?:(?:https?|ftp|rtmp):)?//)' +
        // user:pass authentication
        '(?:\\S+(?::\\S*)?@)?' +
        '(?:' +
        // IP address exclusion - private & local networks
        // Reference: https://www.arin.net/knowledge/address_filters.html
        // filter 10.*.*.* and 127.*.*.* adresses
        '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
        // filter 169.254.*.* and 192.168.*.*
        '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
        // filter 172.16.0.0 - 172.31.255.255
        // TODO: add test to validate that it invalides address in 16-31 range
        '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
        // IP address dotted notation octets
        // excludes loopback network 0.0.0.0
        // excludes reserved space >= 224.0.0.0
        // excludes network & broacast addresses
        // (first & last IP address of each class)
        // filter 1. part for 1-223
        '(?:22[0-3]|2[01]\\d|[1-9]\\d?|1\\d\\d)' +
        // filter 2. and 3. part for 0-255
        '(?:\\.(?:25[0-5]|2[0-4]\\d|1?\\d{1,2})){2}' +
        // filter 4. part for 1-254
        '(?:\\.(?:25[0-4]|2[0-4]\\d|1\\d\\d|[1-9]\\d?))' +
        '|' +
        // host name
        '(?:(?:[a-z\\u00a1-\\uffff0-9_]-*)*[a-z\\u00a1-\\uffff0-9_]+)' +
        // domain name
        '(?:\\.(?:[a-z\\u00a1-\\uffff0-9_]-*)*[a-z\\u00a1-\\uffff0-9_]+)*' +
        // TLD identifier
        '(?:\\.(?:[a-z\\u00a1-\\uffff_]{2,}))' +
        ')' +
        // port number
        '(?::\\d{2,5})?' +
        // resource path
        '(?:/?\\S*)?$'
    ),
    email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
    ipv4: /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/,
    number: /^[+-]?\d+(\.\d+)?$/,
    integer: /^[+-]?\d+$/,
    qq: /^(\+?[1-9]\d*|0)$/,
    phone: /^\d{3}-\d{8}$|^\d{4}-\d{7}$|^\d{11}$/,
    idcard: /^\d{15}$|^\d{17}(\d|x|X)$/,
    money:
      /^([\u0024\u00A2\u00A3\u00A4\u20AC\u00A5\u20B1\20B9\uFFE5]\s*)(\d+,?)+\.?\d*\s*$/,
    zh: /^[\u4e00-\u9fa5]+$/,
    date: /^[0-9]+[./-][0-9]+[./-][0-9]+\s*(?:[0-9]+\s*:\s*[0-9]+\s*:\s*[0-9]+)?$/,
    zip: /^[0-9]{6}$/,
  }

  var isValidateEmpty = function (value) {
    var _a
    if (Formily.Shared.isArr(value)) {
      for (var i = 0; i < value.length; i++) {
        if (Formily.Shared.isValid(value[i])) return false
      }
      return true
    } else {
      //compat to draft-js
      if (
        value === null || value === void 0 ? void 0 : value.getCurrentContent
      ) {
        /* istanbul ignore next */
        return !((_a = value.getCurrentContent()) === null || _a === void 0
          ? void 0
          : _a.hasText())
      }
      return Formily.Shared.isEmpty(value)
    }
  }
  var getLength = function (value) {
    return Formily.Shared.isStr(value)
      ? Formily.Shared.stringLength(value)
      : value
      ? value.length
      : 0
  }
  var extendSameRules = function (rules, names) {
    Formily.Shared.each(names, function (realName, name) {
      rules[name] = function (value, rule) {
        var _a
        var args = []
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i]
        }
        return rules[realName].apply(
          rules,
          __spreadArray(
            [
              value,
              __assign(
                __assign({}, rule),
                ((_a = {}), (_a[realName] = rule[name]), _a)
              ),
            ],
            __read(args)
          )
        )
      }
    })
  }
  var RULES = {
    format: function (value, rule) {
      if (isValidateEmpty(value)) return ''
      return !new RegExp(getValidateFormats(rule.format) || '').test(value)
        ? rule.message
        : ''
    },
    required: function (value, rule) {
      if (rule.required === false) return ''
      return isValidateEmpty(value) ? rule.message : ''
    },
    max: function (value, rule) {
      if (isValidateEmpty(value)) return ''
      var length = Formily.Shared.isNum(value) ? value : getLength(value)
      var max = Number(rule.max)
      return length > max ? rule.message : ''
    },
    min: function (value, rule) {
      if (isValidateEmpty(value)) return ''
      var length = Formily.Shared.isNum(value) ? value : getLength(value)
      var min = Number(rule.min)
      return length < min ? rule.message : ''
    },
    exclusiveMaximum: function (value, rule) {
      if (isValidateEmpty(value)) return ''
      var length = Formily.Shared.isNum(value) ? value : getLength(value)
      var max = Number(rule.exclusiveMaximum)
      return length >= max ? rule.message : ''
    },
    exclusiveMinimum: function (value, rule) {
      if (isValidateEmpty(value)) return ''
      var length = Formily.Shared.isNum(value) ? value : getLength(value)
      var min = Number(rule.exclusiveMinimum)
      return length <= min ? rule.message : ''
    },
    len: function (value, rule) {
      if (isValidateEmpty(value)) return ''
      var length = getLength(value)
      var len = Number(rule.len)
      return length !== len ? rule.message : ''
    },
    pattern: function (value, rule) {
      if (isValidateEmpty(value)) return ''
      return !new RegExp(rule.pattern).test(value) ? rule.message : ''
    },
    validator: function (value, rule, context, format) {
      return __awaiter(this, void 0, void 0, function () {
        var response
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!Formily.Shared.isFn(rule.validator)) return [3 /*break*/, 2]
              return [
                4 /*yield*/,
                Promise.resolve(rule.validator(value, rule, context, format)),
              ]
            case 1:
              response = _a.sent()
              if (Formily.Shared.isBool(response)) {
                return [2 /*return*/, !response ? rule.message : '']
              } else {
                return [2 /*return*/, response]
              }
            case 2:
              /* istanbul ignore next */
              throw new Error(
                "The rule's validator property must be a function."
              )
          }
        })
      })
    },
    whitespace: function (value, rule) {
      if (isValidateEmpty(value)) return ''
      if (rule.whitespace) {
        return /^\s+$/.test(value) ? rule.message : ''
      }
    },
    enum: function (value, rule) {
      if (isValidateEmpty(value)) return ''
      var enums = Formily.Shared.toArr(rule.enum)
      return enums.indexOf(value) === -1 ? rule.message : ''
    },
    const: function (value, rule) {
      if (isValidateEmpty(value)) return ''
      return rule.const !== value ? rule.message : ''
    },
    multipleOf: function (value, rule) {
      if (isValidateEmpty(value)) return ''
      return Number(value) % Number(rule.multipleOf) !== 0 ? rule.message : ''
    },
    uniqueItems: function (value, rule) {
      if (isValidateEmpty(value)) return ''
      value = Formily.Shared.toArr(value)
      return value.some(function (item, index) {
        for (var i = 0; i < value.length; i++) {
          if (i !== index && !Formily.Shared.isEqual(value[i], item)) {
            return false
          }
        }
        return true
      })
        ? ''
        : rule.message
    },
    maxProperties: function (value, rule) {
      if (isValidateEmpty(value)) return ''
      return Object.keys(value || {}).length <= Number(rule.maxProperties)
        ? ''
        : rule.message
    },
    minProperties: function (value, rule) {
      if (isValidateEmpty(value)) return ''
      return Object.keys(value || {}).length >= Number(rule.minProperties)
        ? ''
        : rule.message
    },
  }
  extendSameRules(RULES, {
    maximum: 'max',
    minimum: 'min',
    maxItems: 'max',
    minItems: 'min',
    maxLength: 'max',
    minLength: 'min',
  })

  registerValidateRules(RULES)
  registerValidateLocale(locales)
  registerValidateFormats(formats)
  var validate = function (value, validator, options) {
    return __awaiter(void 0, void 0, void 0, function () {
      var validates, results, i, result, type, message
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            validates = parseValidator(validator, options)
            results = {
              error: [],
              success: [],
              warning: [],
            }
            i = 0
            _a.label = 1
          case 1:
            if (!(i < validates.length)) return [3 /*break*/, 4]
            return [
              4 /*yield*/,
              validates[i](
                value,
                options === null || options === void 0
                  ? void 0
                  : options.context
              ),
            ]
          case 2:
            result = _a.sent()
            ;(type = result.type), (message = result.message)
            results[type] = results[type] || []
            if (message) {
              results[type].push(message)
              if (
                options === null || options === void 0
                  ? void 0
                  : options.validateFirst
              )
                return [3 /*break*/, 4]
            }
            _a.label = 3
          case 3:
            i++
            return [3 /*break*/, 1]
          case 4:
            return [2 /*return*/, results]
        }
      })
    })
  }

  exports.getLocaleByPath = getLocaleByPath
  exports.getValidateFormats = getValidateFormats
  exports.getValidateLanguage = getValidateLanguage
  exports.getValidateLocale = getValidateLocale
  exports.getValidateLocaleIOSCode = getValidateLocaleIOSCode
  exports.getValidateMessageTemplateEngine = getValidateMessageTemplateEngine
  exports.getValidateRules = getValidateRules
  exports.isValidateResult = isValidateResult
  exports.parseValidator = parseValidator
  exports.parseValidatorDescription = parseValidatorDescription
  exports.parseValidatorDescriptions = parseValidatorDescriptions
  exports.parseValidatorRules = parseValidatorRules
  exports.registerValidateFormats = registerValidateFormats
  exports.registerValidateLocale = registerValidateLocale
  exports.registerValidateMessageTemplateEngine =
    registerValidateMessageTemplateEngine
  exports.registerValidateRules = registerValidateRules
  exports.setValidateLanguage = setValidateLanguage
  exports.validate = validate

  Object.defineProperty(exports, '__esModule', { value: true })
})
//# sourceMappingURL=formily.validator.umd.development.js.map
