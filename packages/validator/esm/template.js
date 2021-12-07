import { isFn, isStr, FormPath } from '@formily/shared'
import { getValidateMessageTemplateEngine } from './registry'
export var render = function (result, rules) {
  var message = result.message
  if (isStr(result.message)) {
    var template = getValidateMessageTemplateEngine()
    if (isFn(template)) {
      result.message = template(message, rules)
    }
    result.message = result.message.replace(
      /\{\{\s*([\w.]+)\s*\}\}/g,
      function (_, $0) {
        return FormPath.getIn(rules, $0)
      }
    )
  }
  return result
}
//# sourceMappingURL=template.js.map
