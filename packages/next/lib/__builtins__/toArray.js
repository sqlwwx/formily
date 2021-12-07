'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.toArray = void 0
var react_1 = __importDefault(require('react'))
var react_is_1 = require('react-is')
function toArray(children, option) {
  if (option === void 0) {
    option = {}
  }
  var ret = []
  react_1.default.Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child))
    } else if ((0, react_is_1.isFragment)(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option))
    } else {
      ret.push(child)
    }
  })
  return ret
}
exports.toArray = toArray
//# sourceMappingURL=toArray.js.map
