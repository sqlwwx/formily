import { isFn } from '@formily/shared'
import {
  Form,
  Field,
  ArrayField,
  ObjectField,
  VoidField,
  Query,
} from '../models'
export var isForm = function (node) {
  return node instanceof Form
}
export var isField = function (node) {
  return node instanceof Field
}
export var isGeneralField = function (node) {
  return node instanceof Field || node instanceof VoidField
}
export var isArrayField = function (node) {
  return node instanceof ArrayField
}
export var isObjectField = function (node) {
  return node instanceof ObjectField
}
export var isVoidField = function (node) {
  return node instanceof VoidField
}
export var isFormState = function (state) {
  if (isFn(state === null || state === void 0 ? void 0 : state.initialize))
    return false
  return (
    (state === null || state === void 0 ? void 0 : state.displayName) === 'Form'
  )
}
export var isFieldState = function (state) {
  if (isFn(state === null || state === void 0 ? void 0 : state.initialize))
    return false
  return (
    (state === null || state === void 0 ? void 0 : state.displayName) ===
    'Field'
  )
}
export var isGeneralFieldState = function (node) {
  var _a
  if (isFn(node === null || node === void 0 ? void 0 : node.initialize))
    return false
  return (
    ((_a = node === null || node === void 0 ? void 0 : node.displayName) ===
      null || _a === void 0
      ? void 0
      : _a.indexOf('Field')) > -1
  )
}
export var isArrayFieldState = function (state) {
  if (isFn(state === null || state === void 0 ? void 0 : state.initialize))
    return false
  return (
    (state === null || state === void 0 ? void 0 : state.displayName) ===
    'ArrayField'
  )
}
export var isDataField = function (node) {
  return isField(node) || isArrayField(node) || isObjectField(node)
}
export var isDataFieldState = function (node) {
  return (
    isFieldState(node) || isObjectFieldState(node) || isArrayFieldState(node)
  )
}
export var isObjectFieldState = function (state) {
  if (isFn(state === null || state === void 0 ? void 0 : state.initialize))
    return false
  return (
    (state === null || state === void 0 ? void 0 : state.displayName) ===
    'ObjectField'
  )
}
export var isVoidFieldState = function (state) {
  if (isFn(state === null || state === void 0 ? void 0 : state.initialize))
    return false
  return (
    (state === null || state === void 0 ? void 0 : state.displayName) ===
    'VoidField'
  )
}
export var isQuery = function (query) {
  return query && query instanceof Query
}
//# sourceMappingURL=checkers.js.map
