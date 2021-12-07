export var toArray = function (value) {
  return Array.isArray(value)
    ? value
    : value !== undefined && value !== null
    ? [value]
    : []
}
var ArraySet = /** @class */ (function () {
  function ArraySet(value) {
    if (value === void 0) {
      value = []
    }
    this.batchDeleting = false
    this.value = value
  }
  ArraySet.prototype.add = function (item) {
    if (!this.has(item)) {
      this.value.push(item)
    }
  }
  ArraySet.prototype.has = function (item) {
    return this.value.indexOf(item) > -1
  }
  ArraySet.prototype.delete = function (item) {
    if (this.batchDeleting) return //批量删除时禁止单独删除，会影响计数执行器
    var index = this.value.indexOf(item)
    if (index > -1) {
      this.value.splice(index, 1)
    }
  }
  ArraySet.prototype.forEach = function (callback) {
    if (this.value.length === 0) return
    for (var index = 0, len = this.value.length; index < len; index++) {
      callback(this.value[index])
    }
  }
  ArraySet.prototype.forEachDelete = function (callback) {
    if (this.value.length === 0) return
    this.batchDeleting = true
    for (var index = 0; index < this.value.length; index++) {
      var item = this.value[index]
      this.value.splice(index, 1)
      callback(item)
      index--
    }
    this.batchDeleting = false
  }
  ArraySet.prototype.clear = function () {
    this.value.length = 0
  }
  return ArraySet
})()
export { ArraySet }
//# sourceMappingURL=array.js.map
