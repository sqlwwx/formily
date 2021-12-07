'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.GarbageCollector = void 0
var global_1 = require('./global')
var registry =
  global_1.globalThisPolyfill['FinalizationRegistry'] &&
  new global_1.globalThisPolyfill['FinalizationRegistry'](function (token) {
    var _a
    return (_a = token === null || token === void 0 ? void 0 : token.clean) ===
      null || _a === void 0
      ? void 0
      : _a.call(token)
  })
var GarbageCollector = /** @class */ (function () {
  function GarbageCollector(clean, expireTime) {
    if (expireTime === void 0) {
      expireTime = 10000
    }
    this.token = {
      clean: clean,
    }
    this.expireTime = expireTime
  }
  GarbageCollector.prototype.open = function (target) {
    var _this = this
    if (registry) {
      registry.register(target, this.token, this.token)
    } else {
      this.request = setTimeout(function () {
        var _a, _b
        ;(_b =
          (_a = _this.token) === null || _a === void 0 ? void 0 : _a.clean) ===
          null || _b === void 0
          ? void 0
          : _b.call(_a)
      }, this.expireTime)
    }
  }
  GarbageCollector.prototype.close = function () {
    if (registry) {
      registry.unregister(this.token)
    } else {
      clearTimeout(this.request)
    }
  }
  return GarbageCollector
})()
exports.GarbageCollector = GarbageCollector
//# sourceMappingURL=gc.js.map
