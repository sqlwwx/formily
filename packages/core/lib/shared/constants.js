'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.NumberIndexReg =
  exports.GlobalState =
  exports.RESPONSE_REQUEST_DURATION =
  exports.MutuallyExclusiveProperties =
  exports.ReadOnlyProperties =
  exports.ReservedProperties =
    void 0
exports.ReservedProperties = {
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
exports.ReadOnlyProperties = {
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
exports.MutuallyExclusiveProperties = {
  pattern: SELF_PATTERN,
  editable: SELF_PATTERN,
  readOnly: SELF_PATTERN,
  readPretty: SELF_PATTERN,
  disabled: SELF_PATTERN,
  display: SELF_DISPLAY,
  hidden: SELF_DISPLAY,
  visible: SELF_DISPLAY,
}
exports.RESPONSE_REQUEST_DURATION = 100
exports.GlobalState = {
  lifecycles: [],
  context: [],
  effectStart: false,
  effectEnd: false,
  initializing: false,
}
exports.NumberIndexReg = /^\.(\d+)/
//# sourceMappingURL=constants.js.map
