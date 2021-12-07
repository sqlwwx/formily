'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.LifeCycle = void 0
var shared_1 = require('@formily/shared')
var LifeCycle = /** @class */ (function () {
  function LifeCycle() {
    var _this = this
    var params = []
    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i]
    }
    this.buildListener = function (params) {
      return function (payload, ctx) {
        var _this = this
        for (var index = 0; index < params.length; index++) {
          var item = params[index]
          if ((0, shared_1.isFn)(item)) {
            item.call(this, payload, ctx)
          } else if (
            (0, shared_1.isStr)(item) &&
            (0, shared_1.isFn)(params[index + 1])
          ) {
            if (item === payload.type) {
              params[index + 1].call(this, payload.payload, ctx)
            }
            index++
          } else {
            ;(0, shared_1.each)(item, function (handler, type) {
              if ((0, shared_1.isFn)(handler) && (0, shared_1.isStr)(type)) {
                if (type === payload.type) {
                  handler.call(_this, payload.payload, ctx)
                  return false
                }
              }
            })
          }
        }
      }
    }
    this.notify = function (type, payload, ctx) {
      if ((0, shared_1.isStr)(type)) {
        _this.listener.call(ctx, { type: type, payload: payload }, ctx)
      }
    }
    this.listener = this.buildListener(params)
  }
  return LifeCycle
})()
exports.LifeCycle = LifeCycle
//# sourceMappingURL=LifeCycle.js.map
