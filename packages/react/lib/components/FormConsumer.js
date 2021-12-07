'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          },
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.FormConsumer = void 0
var react_1 = __importStar(require('react'))
var shared_1 = require('@formily/shared')
var reactive_react_1 = require('@formily/reactive-react')
var hooks_1 = require('../hooks')
exports.FormConsumer = (0, reactive_react_1.observer)(function (props) {
  var children = (0, shared_1.isFn)(props.children)
    ? props.children((0, hooks_1.useForm)())
    : null
  return react_1.default.createElement(react_1.Fragment, null, children)
})
exports.FormConsumer.displayName = 'FormConsumer'
//# sourceMappingURL=FormConsumer.js.map
