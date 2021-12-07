import {
  FormPath,
  each,
  lowerCase,
  globalThisPolyfill,
  merge as deepmerge,
  isFn,
  isStr,
} from '@formily/shared'
var getIn = FormPath.getIn
var self = globalThisPolyfill
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
  var lang = lowerCase(language)
  if (registry.locales.messages[language]) {
    return language
  }
  each(registry.locales.messages, function (messages, key) {
    var target = lowerCase(key)
    if (target.indexOf(lang) > -1 || lang.indexOf(target) > -1) {
      isoCode = key
      return false
    }
  })
  return isoCode
}
export var getValidateLocaleIOSCode = getISOCode
export var setValidateLanguage = function (lang) {
  registry.locales.language = lang || defaultLanguage
}
export var getValidateLanguage = function () {
  return registry.locales.language
}
export var getLocaleByPath = function (path, lang) {
  if (lang === void 0) {
    lang = registry.locales.language
  }
  return getIn(
    registry.locales.messages,
    ''.concat(getISOCode(lang), '.').concat(path)
  )
}
export var getValidateLocale = function (path) {
  var message = getLocaleByPath(path)
  return (
    message ||
    getLocaleByPath('pattern') ||
    getLocaleByPath('pattern', defaultLanguage)
  )
}
export var getValidateMessageTemplateEngine = function () {
  return registry.template
}
export var getValidateFormats = function (key) {
  return key ? registry.formats[key] : registry.formats
}
export var getValidateRules = function (key) {
  return key ? registry.rules[key] : registry.rules
}
export var registerValidateLocale = function (locale) {
  registry.locales.messages = deepmerge(registry.locales.messages, locale)
}
export var registerValidateRules = function (rules) {
  each(rules, function (rule, key) {
    if (isFn(rule)) {
      registry.rules[key] = rule
    }
  })
}
export var registerValidateFormats = function (formats) {
  each(formats, function (pattern, key) {
    if (isStr(pattern) || pattern instanceof RegExp) {
      registry.formats[key] = new RegExp(pattern)
    }
  })
}
export var registerValidateMessageTemplateEngine = function (template) {
  registry.template = template
}
//# sourceMappingURL=registry.js.map
