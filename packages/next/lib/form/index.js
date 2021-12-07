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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          },
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Form = void 0
var react_1 = __importStar(require('react'))
var react_2 = require('@formily/react')
var form_layout_1 = require('../form-layout')
var next_1 = require('@alifd/next')
var core_1 = require('@formily/core')
var preview_text_1 = require('../preview-text')
var Form = function (_a) {
  var _b, _c, _d
  var form = _a.form,
    component = _a.component,
    onAutoSubmit = _a.onAutoSubmit,
    onAutoSubmitFailed = _a.onAutoSubmitFailed,
    previewTextPlaceholder = _a.previewTextPlaceholder,
    props = __rest(_a, [
      'form',
      'component',
      'onAutoSubmit',
      'onAutoSubmitFailed',
      'previewTextPlaceholder',
    ])
  var top = (0, react_2.useForm)()
  var lang =
    (_d =
      (_c =
        (_b = next_1.ConfigProvider.getContext()) === null || _b === void 0
          ? void 0
          : _b.locale) === null || _c === void 0
        ? void 0
        : _c.momentLocale) !== null && _d !== void 0
      ? _d
      : 'zh-CN'
  ;(0, react_1.useMemo)(
    function () {
      var validateLanguage = (0, core_1.getValidateLocaleIOSCode)(lang)
      ;(0, core_1.setValidateLanguage)(validateLanguage)
    },
    [lang]
  )
  var renderContent = function (form) {
    return react_1.default.createElement(
      preview_text_1.PreviewText.Placeholder,
      { value: previewTextPlaceholder },
      react_1.default.createElement(
        form_layout_1.FormLayout,
        __assign({}, props),
        react_1.default.createElement(
          component,
          {
            onSubmit: function (e) {
              var _a, _b
              ;(_a =
                e === null || e === void 0 ? void 0 : e.stopPropagation) ===
                null || _a === void 0
                ? void 0
                : _a.call(e)
              ;(_b = e === null || e === void 0 ? void 0 : e.preventDefault) ===
                null || _b === void 0
                ? void 0
                : _b.call(e)
              form.submit(onAutoSubmit).catch(onAutoSubmitFailed)
            },
          },
          props.children
        )
      )
    )
  }
  if (form)
    return react_1.default.createElement(
      react_2.FormProvider,
      { form: form },
      renderContent(form)
    )
  if (!top) throw new Error('must pass form instance by createForm')
  return renderContent(top)
}
exports.Form = Form
exports.Form.defaultProps = {
  component: 'form',
}
exports.default = exports.Form
//# sourceMappingURL=index.js.map
