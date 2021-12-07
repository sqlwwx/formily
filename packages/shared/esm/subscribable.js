import { isFn } from './checkers'
import { each } from './array'
var Subscribable = /** @class */ (function () {
  function Subscribable() {
    var _this = this
    this.subscribers = {
      index: 0,
    }
    this.subscribe = function (callback) {
      if (isFn(callback)) {
        var index = _this.subscribers.index + 1
        _this.subscribers[index] = callback
        _this.subscribers.index++
        return index
      }
    }
    this.unsubscribe = function (index) {
      if (_this.subscribers[index]) {
        delete _this.subscribers[index]
      } else if (!index) {
        _this.subscribers = {
          index: 0,
        }
      }
    }
    this.notify = function (payload, silent) {
      if (_this.subscription) {
        if (_this.subscription && isFn(_this.subscription.notify)) {
          if (_this.subscription.notify.call(_this, payload) === false) {
            return
          }
        }
      }
      if (silent) return
      var filter = function (payload) {
        if (_this.subscription && isFn(_this.subscription.filter)) {
          return _this.subscription.filter.call(_this, payload)
        }
        return payload
      }
      each(_this.subscribers, function (callback) {
        if (isFn(callback)) callback(filter(payload))
      })
    }
  }
  return Subscribable
})()
export { Subscribable }
//# sourceMappingURL=subscribable.js.map
