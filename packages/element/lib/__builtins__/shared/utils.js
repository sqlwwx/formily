'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.composeExport =
  exports.isVueOptions =
  exports.isVnode =
  exports.isValidElement =
    void 0
function isValidElement(element) {
  return (
    isVueOptions(element) ||
    (element &&
      typeof element === 'object' &&
      'componentOptions' in element &&
      'context' in element &&
      element.tag !== undefined)
  ) // remove text node
}
exports.isValidElement = isValidElement
function isVnode(element) {
  return (
    element &&
    typeof element === 'object' &&
    'componentOptions' in element &&
    'context' in element &&
    element.tag !== undefined
  )
}
exports.isVnode = isVnode
function isVueOptions(options) {
  return (
    options &&
    (typeof options.template === 'string' ||
      typeof options.render === 'function')
  )
}
exports.isVueOptions = isVueOptions
function composeExport(s0, s1) {
  return Object.assign(s0, s1)
}
exports.composeExport = composeExport
//# sourceMappingURL=utils.js.map
