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
exports.enablePolyfills =
  exports.registerPolyfills =
  exports.registerPatches =
  exports.reducePatches =
    void 0
var shared_1 = require('@formily/shared')
var patches = []
var polyfills = {}
var reducePatches = function (schema) {
  return patches.reduce(function (buf, patch) {
    return patch(buf)
  }, __assign({}, schema))
}
exports.reducePatches = reducePatches
var registerPatches = function () {
  var args = []
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i]
  }
  args.forEach(function (patch) {
    if ((0, shared_1.isFn)(patch)) {
      patches.push(patch)
    }
  })
}
exports.registerPatches = registerPatches
var registerPolyfills = function (version, patch) {
  if (version && (0, shared_1.isFn)(patch)) {
    polyfills[version] = polyfills[version] || []
    polyfills[version].push(patch)
  }
}
exports.registerPolyfills = registerPolyfills
var enablePolyfills = function (versions) {
  if ((0, shared_1.isArr)(versions)) {
    versions.forEach(function (version) {
      if ((0, shared_1.isArr)(polyfills[version])) {
        polyfills[version].forEach(function (patch) {
          ;(0, exports.registerPatches)(patch)
        })
      }
    })
  }
}
exports.enablePolyfills = enablePolyfills
//# sourceMappingURL=patches.js.map
