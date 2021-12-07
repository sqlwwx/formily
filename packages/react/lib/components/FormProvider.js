'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.FormProvider = void 0
var react_1 = __importDefault(require('react'))
var useAttach_1 = require('../hooks/useAttach')
var shared_1 = require('../shared')
var FormProvider = function (props) {
  var form = (0, useAttach_1.useAttach)(props.form)
  return react_1.default.createElement(
    shared_1.ContextCleaner,
    null,
    react_1.default.createElement(
      shared_1.FormContext.Provider,
      { value: form },
      props.children
    )
  )
}
exports.FormProvider = FormProvider
exports.FormProvider.displayName = 'FormProvider'
//# sourceMappingURL=FormProvider.js.map
