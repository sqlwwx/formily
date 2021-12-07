export var ReservedProperties = {
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
export var ReadOnlyProperties = {
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
export var MutuallyExclusiveProperties = {
  pattern: SELF_PATTERN,
  editable: SELF_PATTERN,
  readOnly: SELF_PATTERN,
  readPretty: SELF_PATTERN,
  disabled: SELF_PATTERN,
  display: SELF_DISPLAY,
  hidden: SELF_DISPLAY,
  visible: SELF_DISPLAY,
}
export var RESPONSE_REQUEST_DURATION = 100
export var GlobalState = {
  lifecycles: [],
  context: [],
  effectStart: false,
  effectEnd: false,
  initializing: false,
}
export var NumberIndexReg = /^\.(\d+)/
//# sourceMappingURL=constants.js.map
