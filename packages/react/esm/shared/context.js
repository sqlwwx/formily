import React, { createContext } from 'react'
var createContextCleaner = function () {
  var contexts = []
  for (var _i = 0; _i < arguments.length; _i++) {
    contexts[_i] = arguments[_i]
  }
  return function (_a) {
    var children = _a.children
    return contexts.reduce(function (buf, ctx) {
      return React.createElement(ctx.Provider, { value: undefined }, buf)
    }, children)
  }
}
export var FormContext = createContext(null)
export var FieldContext = createContext(null)
export var SchemaMarkupContext = createContext(null)
export var SchemaContext = createContext(null)
export var SchemaExpressionScopeContext = createContext(null)
export var SchemaOptionsContext = createContext(null)
export var ContextCleaner = createContextCleaner(
  FieldContext,
  SchemaMarkupContext,
  SchemaContext,
  SchemaExpressionScopeContext,
  SchemaOptionsContext
)
//# sourceMappingURL=context.js.map
