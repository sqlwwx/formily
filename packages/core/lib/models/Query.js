'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Query = void 0
var shared_1 = require('@formily/shared')
var output = function (field, taker) {
  if (!field) return
  if ((0, shared_1.isFn)(taker)) {
    return taker(field, field.address)
  }
  return field
}
var Query = /** @class */ (function () {
  function Query(props) {
    var _this = this
    this.addresses = []
    this.pattern = shared_1.FormPath.parse(props.pattern, props.base)
    this.form = props.form
    if (!this.pattern.isMatchPattern) {
      var identifier = this.pattern.toString()
      var indexIdentifier = this.form.indexes[identifier]
      var absoluteField = this.form.fields[identifier]
      var indexField = this.form.fields[indexIdentifier]
      if (absoluteField) {
        this.addresses = [identifier]
      } else if (indexField) {
        this.addresses = [indexIdentifier]
      }
    } else {
      ;(0, shared_1.each)(this.form.fields, function (field, address) {
        if (field.match(_this.pattern)) {
          _this.addresses.push(address)
        }
      })
    }
  }
  Query.prototype.take = function (taker) {
    return output(this.form.fields[this.addresses[0]], taker)
  }
  Query.prototype.map = function (iterator) {
    var _this = this
    return this.addresses.map(function (address) {
      return output(_this.form.fields[address], iterator)
    })
  }
  Query.prototype.forEach = function (iterator) {
    var _this = this
    return this.addresses.forEach(function (address) {
      return output(_this.form.fields[address], iterator)
    })
  }
  Query.prototype.reduce = function (reducer, initial) {
    var _this = this
    return this.addresses.reduce(function (value, address) {
      return output(_this.form.fields[address], function (field, address) {
        return reducer(value, field, address)
      })
    }, initial)
  }
  Query.prototype.get = function (key) {
    var results = this.take()
    if (results) {
      return results[key]
    }
  }
  Query.prototype.getIn = function (pattern) {
    return shared_1.FormPath.getIn(this.take(), pattern)
  }
  Query.prototype.value = function () {
    return this.form.getValuesIn(this.pattern)
  }
  Query.prototype.initialValue = function () {
    return this.form.getInitialValuesIn(this.pattern)
  }
  return Query
})()
exports.Query = Query
//# sourceMappingURL=Query.js.map
