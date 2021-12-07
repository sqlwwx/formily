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
import { isFn, isArr } from '@formily/shared'
var patches = []
var polyfills = {}
export var reducePatches = function (schema) {
  return patches.reduce(function (buf, patch) {
    return patch(buf)
  }, __assign({}, schema))
}
export var registerPatches = function () {
  var args = []
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i]
  }
  args.forEach(function (patch) {
    if (isFn(patch)) {
      patches.push(patch)
    }
  })
}
export var registerPolyfills = function (version, patch) {
  if (version && isFn(patch)) {
    polyfills[version] = polyfills[version] || []
    polyfills[version].push(patch)
  }
}
export var enablePolyfills = function (versions) {
  if (isArr(versions)) {
    versions.forEach(function (version) {
      if (isArr(polyfills[version])) {
        polyfills[version].forEach(function (patch) {
          registerPatches(patch)
        })
      }
    })
  }
}
//# sourceMappingURL=patches.js.map
