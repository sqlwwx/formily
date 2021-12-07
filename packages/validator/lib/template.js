'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.render = void 0
var shared_1 = require('@formily/shared')
var registry_1 = require('./registry')
var render = function (result, rules) {
  var message = result.message
  if ((0, shared_1.isStr)(result.message)) {
    var template = (0, registry_1.getValidateMessageTemplateEngine)()
    if ((0, shared_1.isFn)(template)) {
      result.message = template(message, rules)
    }
    result.message = result.message.replace(
      /\{\{\s*([\w.]+)\s*\}\}/g,
      function (_, $0) {
        return shared_1.FormPath.getIn(rules, $0)
      }
    )
  }
  return result
}
exports.render = render
//# sourceMappingURL=template.js.map
