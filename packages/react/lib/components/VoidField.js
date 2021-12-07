'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.VoidField = void 0
var react_1 = __importDefault(require('react'))
var hooks_1 = require('../hooks')
var useAttach_1 = require('../hooks/useAttach')
var ReactiveField_1 = require('./ReactiveField')
var shared_1 = require('../shared')
var VoidField = function (props) {
  var form = (0, hooks_1.useForm)()
  var parent = (0, hooks_1.useField)()
  var field = (0, useAttach_1.useAttach)(
    form.createVoidField(
      __assign(
        {
          basePath:
            parent === null || parent === void 0 ? void 0 : parent.address,
        },
        props
      )
    )
  )
  return react_1.default.createElement(
    shared_1.FieldContext.Provider,
    { value: field },
    react_1.default.createElement(
      ReactiveField_1.ReactiveField,
      { field: field },
      props.children
    )
  )
}
exports.VoidField = VoidField
exports.VoidField.displayName = 'VoidField'
//# sourceMappingURL=VoidField.js.map
