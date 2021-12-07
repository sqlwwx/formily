'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.isQuery =
  exports.isVoidFieldState =
  exports.isObjectFieldState =
  exports.isDataFieldState =
  exports.isDataField =
  exports.isArrayFieldState =
  exports.isGeneralFieldState =
  exports.isFieldState =
  exports.isFormState =
  exports.isVoidField =
  exports.isObjectField =
  exports.isArrayField =
  exports.isGeneralField =
  exports.isField =
  exports.isForm =
    void 0
var shared_1 = require('@formily/shared')
var models_1 = require('../models')
var isForm = function (node) {
  return node instanceof models_1.Form
}
exports.isForm = isForm
var isField = function (node) {
  return node instanceof models_1.Field
}
exports.isField = isField
var isGeneralField = function (node) {
  return node instanceof models_1.Field || node instanceof models_1.VoidField
}
exports.isGeneralField = isGeneralField
var isArrayField = function (node) {
  return node instanceof models_1.ArrayField
}
exports.isArrayField = isArrayField
var isObjectField = function (node) {
  return node instanceof models_1.ObjectField
}
exports.isObjectField = isObjectField
var isVoidField = function (node) {
  return node instanceof models_1.VoidField
}
exports.isVoidField = isVoidField
var isFormState = function (state) {
  if (
    (0, shared_1.isFn)(
      state === null || state === void 0 ? void 0 : state.initialize
    )
  )
    return false
  return (
    (state === null || state === void 0 ? void 0 : state.displayName) === 'Form'
  )
}
exports.isFormState = isFormState
var isFieldState = function (state) {
  if (
    (0, shared_1.isFn)(
      state === null || state === void 0 ? void 0 : state.initialize
    )
  )
    return false
  return (
    (state === null || state === void 0 ? void 0 : state.displayName) ===
    'Field'
  )
}
exports.isFieldState = isFieldState
var isGeneralFieldState = function (node) {
  var _a
  if (
    (0, shared_1.isFn)(
      node === null || node === void 0 ? void 0 : node.initialize
    )
  )
    return false
  return (
    ((_a = node === null || node === void 0 ? void 0 : node.displayName) ===
      null || _a === void 0
      ? void 0
      : _a.indexOf('Field')) > -1
  )
}
exports.isGeneralFieldState = isGeneralFieldState
var isArrayFieldState = function (state) {
  if (
    (0, shared_1.isFn)(
      state === null || state === void 0 ? void 0 : state.initialize
    )
  )
    return false
  return (
    (state === null || state === void 0 ? void 0 : state.displayName) ===
    'ArrayField'
  )
}
exports.isArrayFieldState = isArrayFieldState
var isDataField = function (node) {
  return (
    (0, exports.isField)(node) ||
    (0, exports.isArrayField)(node) ||
    (0, exports.isObjectField)(node)
  )
}
exports.isDataField = isDataField
var isDataFieldState = function (node) {
  return (
    (0, exports.isFieldState)(node) ||
    (0, exports.isObjectFieldState)(node) ||
    (0, exports.isArrayFieldState)(node)
  )
}
exports.isDataFieldState = isDataFieldState
var isObjectFieldState = function (state) {
  if (
    (0, shared_1.isFn)(
      state === null || state === void 0 ? void 0 : state.initialize
    )
  )
    return false
  return (
    (state === null || state === void 0 ? void 0 : state.displayName) ===
    'ObjectField'
  )
}
exports.isObjectFieldState = isObjectFieldState
var isVoidFieldState = function (state) {
  if (
    (0, shared_1.isFn)(
      state === null || state === void 0 ? void 0 : state.initialize
    )
  )
    return false
  return (
    (state === null || state === void 0 ? void 0 : state.displayName) ===
    'VoidField'
  )
}
exports.isVoidFieldState = isVoidFieldState
var isQuery = function (query) {
  return query && query instanceof models_1.Query
}
exports.isQuery = isQuery
//# sourceMappingURL=checkers.js.map
