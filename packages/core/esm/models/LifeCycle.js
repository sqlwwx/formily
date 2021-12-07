import { isFn, isStr, each } from '@formily/shared'
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
          if (isFn(item)) {
            item.call(this, payload, ctx)
          } else if (isStr(item) && isFn(params[index + 1])) {
            if (item === payload.type) {
              params[index + 1].call(this, payload.payload, ctx)
            }
            index++
          } else {
            each(item, function (handler, type) {
              if (isFn(handler) && isStr(type)) {
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
      if (isStr(type)) {
        _this.listener.call(ctx, { type: type, payload: payload }, ctx)
      }
    }
    this.listener = this.buildListener(params)
  }
  return LifeCycle
})()
export { LifeCycle }
//# sourceMappingURL=LifeCycle.js.map
