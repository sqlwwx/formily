'use strict'
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
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator]
    if (!m) return o
    var i = m.call(o),
      r,
      ar = [],
      e
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
    } catch (error) {
      e = { error: error }
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i)
      } finally {
        if (e) throw e.error
      }
    }
    return ar
  }
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i)
          ar[i] = from[i]
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from))
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.ArrayField = void 0
var shared_1 = require('@formily/shared')
var reactive_1 = require('@formily/reactive')
var internals_1 = require('../shared/internals')
var Field_1 = require('./Field')
var ArrayField = /** @class */ (function (_super) {
  __extends(ArrayField, _super)
  function ArrayField(address, props, form, designable) {
    var _this = _super.call(this, address, props, form, designable) || this
    _this.displayName = 'ArrayField'
    _this.push = function () {
      var items = []
      for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i]
      }
      return (0, reactive_1.action)(function () {
        var _a
        if (!(0, shared_1.isArr)(_this.value)) {
          _this.value = []
        }
        ;(_a = _this.value).push.apply(
          _a,
          __spreadArray([], __read(items), false)
        )
        return _this.onInput(_this.value)
      })
    }
    _this.pop = function () {
      if (!(0, shared_1.isArr)(_this.value)) return
      return (0, reactive_1.action)(function () {
        var index = _this.value.length - 1
        ;(0, internals_1.spliceArrayState)(_this, {
          startIndex: index,
          deleteCount: 1,
        })
        _this.value.pop()
        return _this.onInput(_this.value)
      })
    }
    _this.insert = function (index) {
      var items = []
      for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i]
      }
      return (0, reactive_1.action)(function () {
        var _a
        if (!(0, shared_1.isArr)(_this.value)) {
          _this.value = []
        }
        ;(0, internals_1.spliceArrayState)(_this, {
          startIndex: index,
          insertCount: items.length,
        })
        ;(_a = _this.value).splice.apply(
          _a,
          __spreadArray([index, 0], __read(items), false)
        )
        return _this.onInput(_this.value)
      })
    }
    _this.remove = function (index) {
      if (!(0, shared_1.isArr)(_this.value)) return
      return (0, reactive_1.action)(function () {
        ;(0, internals_1.spliceArrayState)(_this, {
          startIndex: index,
          deleteCount: 1,
        })
        _this.value.splice(index, 1)
        return _this.onInput(_this.value)
      })
    }
    _this.copy = function (index) {
      if (!(0, shared_1.isArr)(_this.value)) return
      return (0, reactive_1.action)(function () {
        var fromItem = _this.value[index]
        _this.value.splice(index, 0, (0, shared_1.clone)(fromItem))
        return _this.onInput(_this.value)
      })
    }
    _this.shift = function () {
      if (!(0, shared_1.isArr)(_this.value)) return
      return (0, reactive_1.action)(function () {
        _this.value.shift()
        return _this.onInput(_this.value)
      })
    }
    _this.unshift = function () {
      var items = []
      for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i]
      }
      return (0, reactive_1.action)(function () {
        var _a
        if (!(0, shared_1.isArr)(_this.value)) {
          _this.value = []
        }
        ;(0, internals_1.spliceArrayState)(_this, {
          startIndex: 0,
          insertCount: items.length,
        })
        ;(_a = _this.value).unshift.apply(
          _a,
          __spreadArray([], __read(items), false)
        )
        return _this.onInput(_this.value)
      })
    }
    _this.move = function (fromIndex, toIndex) {
      if (!(0, shared_1.isArr)(_this.value)) return
      if (fromIndex === toIndex) return
      return (0, reactive_1.action)(function () {
        var fromItem = _this.value[fromIndex]
        _this.value.splice(fromIndex, 1)
        _this.value.splice(toIndex, 0, fromItem)
        ;(0, internals_1.exchangeArrayState)(_this, {
          fromIndex: fromIndex,
          toIndex: toIndex,
        })
        return _this.onInput(_this.value)
      })
    }
    _this.moveUp = function (index) {
      if (!(0, shared_1.isArr)(_this.value)) return
      return _this.move(
        index,
        index - 1 < 0 ? _this.value.length - 1 : index - 1
      )
    }
    _this.moveDown = function (index) {
      if (!(0, shared_1.isArr)(_this.value)) return
      return _this.move(index, index + 1 >= _this.value.length ? 0 : index + 1)
    }
    _this.makeAutoCleanable()
    return _this
  }
  ArrayField.prototype.makeAutoCleanable = function () {
    var _this = this
    this.disposers.push(
      (0, reactive_1.reaction)(
        function () {
          var _a
          return (_a = _this.value) === null || _a === void 0
            ? void 0
            : _a.length
        },
        function (newLength, oldLength) {
          if (oldLength && !newLength) {
            ;(0, internals_1.cleanupArrayChildren)(_this, 0)
          } else if (newLength < oldLength) {
            ;(0, internals_1.cleanupArrayChildren)(_this, newLength)
          }
        }
      )
    )
  }
  return ArrayField
})(Field_1.Field)
exports.ArrayField = ArrayField
//# sourceMappingURL=ArrayField.js.map
