var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        )
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
import { isStr, isArr, Subscribable } from '@formily/shared'
import { LifeCycle } from './LifeCycle'
var Heart = /** @class */ (function (_super) {
  __extends(Heart, _super)
  function Heart(_a) {
    var _b = _a === void 0 ? {} : _a,
      lifecycles = _b.lifecycles,
      context = _b.context
    var _this = _super.call(this) || this
    _this.lifecycles = []
    _this.outerLifecycles = new Map()
    _this.buildLifeCycles = function (lifecycles) {
      return lifecycles.reduce(function (buf, item) {
        if (item instanceof LifeCycle) {
          return buf.concat(item)
        } else {
          if (isArr(item)) {
            return _this.buildLifeCycles(item)
          } else if (typeof item === 'object') {
            _this.context = item
            return buf
          }
          return buf
        }
      }, [])
    }
    _this.addLifeCycles = function (id, lifecycles) {
      if (lifecycles === void 0) {
        lifecycles = []
      }
      var observers = _this.buildLifeCycles(lifecycles)
      if (observers.length) {
        _this.outerLifecycles.set(id, observers)
      }
    }
    _this.hasLifeCycles = function (id) {
      return _this.outerLifecycles.has(id)
    }
    _this.removeLifeCycles = function (id) {
      _this.outerLifecycles.delete(id)
    }
    _this.setLifeCycles = function (lifecycles) {
      if (lifecycles === void 0) {
        lifecycles = []
      }
      _this.lifecycles = _this.buildLifeCycles(lifecycles)
    }
    _this.publish = function (type, payload, context) {
      if (isStr(type)) {
        _this.lifecycles.forEach(function (lifecycle) {
          lifecycle.notify(type, payload, context || _this.context)
        })
        _this.outerLifecycles.forEach(function (lifecycles) {
          lifecycles.forEach(function (lifecycle) {
            lifecycle.notify(type, payload, context || _this.context)
          })
        })
        _this.notify({
          type: type,
          payload: payload,
        })
      }
    }
    _this.clear = function () {
      _this.lifecycles = []
      _this.outerLifecycles.clear()
      _this.unsubscribe()
    }
    _this.lifecycles = _this.buildLifeCycles(lifecycles || [])
    _this.context = context
    return _this
  }
  return Heart
})(Subscribable)
export { Heart }
//# sourceMappingURL=Heart.js.map
