'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.registerValidateMessageTemplateEngine =
  exports.registerValidateFormats =
  exports.registerValidateRules =
  exports.registerValidateLocale =
  exports.getValidateRules =
  exports.getValidateFormats =
  exports.getValidateMessageTemplateEngine =
  exports.getValidateLocale =
  exports.getLocaleByPath =
  exports.getValidateLanguage =
  exports.setValidateLanguage =
  exports.getValidateLocaleIOSCode =
    void 0
var shared_1 = require('@formily/shared')
var getIn = shared_1.FormPath.getIn
var self = shared_1.globalThisPolyfill
var defaultLanguage = 'en'
var getBrowserlanguage = function () {
  /* istanbul ignore next */
  if (!self.navigator) {
    return defaultLanguage
  }
  return (
    self.navigator.browserlanguage || self.navigator.language || defaultLanguage
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
  var lang = (0, shared_1.lowerCase)(language)
  if (registry.locales.messages[language]) {
    return language
  }
  ;(0, shared_1.each)(registry.locales.messages, function (messages, key) {
    var target = (0, shared_1.lowerCase)(key)
    if (target.indexOf(lang) > -1 || lang.indexOf(target) > -1) {
      isoCode = key
      return false
    }
  })
  return isoCode
}
exports.getValidateLocaleIOSCode = getISOCode
var setValidateLanguage = function (lang) {
  registry.locales.language = lang || defaultLanguage
}
exports.setValidateLanguage = setValidateLanguage
var getValidateLanguage = function () {
  return registry.locales.language
}
exports.getValidateLanguage = getValidateLanguage
var getLocaleByPath = function (path, lang) {
  if (lang === void 0) {
    lang = registry.locales.language
  }
  return getIn(
    registry.locales.messages,
    ''.concat(getISOCode(lang), '.').concat(path)
  )
}
exports.getLocaleByPath = getLocaleByPath
var getValidateLocale = function (path) {
  var message = (0, exports.getLocaleByPath)(path)
  return (
    message ||
    (0, exports.getLocaleByPath)('pattern') ||
    (0, exports.getLocaleByPath)('pattern', defaultLanguage)
  )
}
exports.getValidateLocale = getValidateLocale
var getValidateMessageTemplateEngine = function () {
  return registry.template
}
exports.getValidateMessageTemplateEngine = getValidateMessageTemplateEngine
var getValidateFormats = function (key) {
  return key ? registry.formats[key] : registry.formats
}
exports.getValidateFormats = getValidateFormats
var getValidateRules = function (key) {
  return key ? registry.rules[key] : registry.rules
}
exports.getValidateRules = getValidateRules
var registerValidateLocale = function (locale) {
  registry.locales.messages = (0, shared_1.merge)(
    registry.locales.messages,
    locale
  )
}
exports.registerValidateLocale = registerValidateLocale
var registerValidateRules = function (rules) {
  ;(0, shared_1.each)(rules, function (rule, key) {
    if ((0, shared_1.isFn)(rule)) {
      registry.rules[key] = rule
    }
  })
}
exports.registerValidateRules = registerValidateRules
var registerValidateFormats = function (formats) {
  ;(0, shared_1.each)(formats, function (pattern, key) {
    if ((0, shared_1.isStr)(pattern) || pattern instanceof RegExp) {
      registry.formats[key] = new RegExp(pattern)
    }
  })
}
exports.registerValidateFormats = registerValidateFormats
var registerValidateMessageTemplateEngine = function (template) {
  registry.template = template
}
exports.registerValidateMessageTemplateEngine =
  registerValidateMessageTemplateEngine
//# sourceMappingURL=registry.js.map
