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
Object.defineProperty(exports, '__esModule', { value: true })
exports.observer = void 0
var useObserver_1 = require('../hooks/useObserver')
/* istanbul ignore next */
var observer = function (opts, options) {
  var name =
    (options === null || options === void 0 ? void 0 : options.name) ||
    opts.name ||
    'ObservableComponent'
  return __assign(__assign({ name: name }, opts), {
    setup: function (props, context) {
      var _a
      ;(0, useObserver_1.useObserver)()
      return (_a = opts === null || opts === void 0 ? void 0 : opts.setup) ===
        null || _a === void 0
        ? void 0
        : _a.call(opts, props, context)
    },
  })
}
exports.observer = observer
//# sourceMappingURL=observerInVue3.js.map
