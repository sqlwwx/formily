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
import React, { useMemo } from 'react'
import { FormProvider, useForm } from '@formily/react'
import { FormLayout } from '../form-layout'
import { ConfigProvider } from '@alifd/next'
import { getValidateLocaleIOSCode, setValidateLanguage } from '@formily/core'
import { PreviewText } from '../preview-text'
export var Form = function (_a) {
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
  var top = useForm()
  var lang =
    (_d =
      (_c =
        (_b = ConfigProvider.getContext()) === null || _b === void 0
          ? void 0
          : _b.locale) === null || _c === void 0
        ? void 0
        : _c.momentLocale) !== null && _d !== void 0
      ? _d
      : 'zh-CN'
  useMemo(
    function () {
      var validateLanguage = getValidateLocaleIOSCode(lang)
      setValidateLanguage(validateLanguage)
    },
    [lang]
  )
  var renderContent = function (form) {
    return React.createElement(
      PreviewText.Placeholder,
      { value: previewTextPlaceholder },
      React.createElement(
        FormLayout,
        __assign({}, props),
        React.createElement(
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
    return React.createElement(
      FormProvider,
      { form: form },
      renderContent(form)
    )
  if (!top) throw new Error('must pass form instance by createForm')
  return renderContent(top)
}
Form.defaultProps = {
  component: 'form',
}
export default Form
//# sourceMappingURL=index.js.map
