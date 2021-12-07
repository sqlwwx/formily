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
Object.defineProperty(exports, '__esModule', { value: true })
exports.ObjectField = void 0
var reactive_1 = require('@formily/reactive')
var internals_1 = require('../shared/internals')
var Field_1 = require('./Field')
var ObjectField = /** @class */ (function (_super) {
  __extends(ObjectField, _super)
  function ObjectField(address, props, form, designable) {
    var _this = _super.call(this, address, props, form, designable) || this
    _this.displayName = 'ObjectField'
    _this.additionalProperties = []
    _this.addProperty = function (key, value) {
      _this.form.setValuesIn(_this.path.concat(key), value)
      _this.additionalProperties.push(key)
      return _this.onInput(_this.value)
    }
    _this.removeProperty = function (key) {
      _this.form.deleteValuesIn(_this.path.concat(key))
      _this.additionalProperties.splice(
        _this.additionalProperties.indexOf(key),
        1
      )
      return _this.onInput(_this.value)
    }
    _this.existProperty = function (key) {
      return _this.form.existValuesIn(_this.path.concat(key))
    }
    _this.makeAutoCleanable()
    return _this
  }
  ObjectField.prototype.makeAutoCleanable = function () {
    var _this = this
    this.disposers.push(
      (0, reactive_1.reaction)(
        function () {
          return Object.keys(_this.value || {})
        },
        function (newKeys) {
          var filterKeys = _this.additionalProperties.filter(function (key) {
            return !newKeys.includes(key)
          })
          ;(0, internals_1.cleanupObjectChildren)(_this, filterKeys)
        }
      )
    )
  }
  return ObjectField
})(Field_1.Field)
exports.ObjectField = ObjectField
//# sourceMappingURL=ObjectField.js.map
