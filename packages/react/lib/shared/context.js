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
exports.ContextCleaner =
  exports.SchemaOptionsContext =
  exports.SchemaExpressionScopeContext =
  exports.SchemaContext =
  exports.SchemaMarkupContext =
  exports.FieldContext =
  exports.FormContext =
    void 0
var react_1 = __importStar(require('react'))
var createContextCleaner = function () {
  var contexts = []
  for (var _i = 0; _i < arguments.length; _i++) {
    contexts[_i] = arguments[_i]
  }
  return function (_a) {
    var children = _a.children
    return contexts.reduce(function (buf, ctx) {
      return react_1.default.createElement(
        ctx.Provider,
        { value: undefined },
        buf
      )
    }, children)
  }
}
exports.FormContext = (0, react_1.createContext)(null)
exports.FieldContext = (0, react_1.createContext)(null)
exports.SchemaMarkupContext = (0, react_1.createContext)(null)
exports.SchemaContext = (0, react_1.createContext)(null)
exports.SchemaExpressionScopeContext = (0, react_1.createContext)(null)
exports.SchemaOptionsContext = (0, react_1.createContext)(null)
exports.ContextCleaner = createContextCleaner(
  exports.FieldContext,
  exports.SchemaMarkupContext,
  exports.SchemaContext,
  exports.SchemaExpressionScopeContext,
  exports.SchemaOptionsContext
)
//# sourceMappingURL=context.js.map
