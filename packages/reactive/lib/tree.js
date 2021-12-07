'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.buildDataTree = exports.DataNode = exports.DataChange = void 0
var environment_1 = require('./environment')
var DataChange = /** @class */ (function () {
  function DataChange(operation, node) {
    this.key = operation.key
    this.type = operation.type
    this.object = operation.target
    this.value = operation.value
    this.oldValue = operation.oldValue
    this.path = node.path.concat(operation.key)
  }
  return DataChange
})()
exports.DataChange = DataChange
var DataNode = /** @class */ (function () {
  function DataNode(target, key, value) {
    this.target = target
    this.key = key
    this.value = value
  }
  Object.defineProperty(DataNode.prototype, 'path', {
    get: function () {
      if (!this.parent) return this.key ? [this.key] : []
      return this.parent.path.concat(this.key)
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(DataNode.prototype, 'targetRaw', {
    get: function () {
      return environment_1.ProxyRaw.get(this.target) || this.target
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(DataNode.prototype, 'parent', {
    get: function () {
      if (!this.target) return
      return environment_1.RawNode.get(this.targetRaw)
    },
    enumerable: false,
    configurable: true,
  })
  DataNode.prototype.isEqual = function (node) {
    if (this.key) {
      return node.targetRaw === this.targetRaw && node.key === this.key
    }
    return node.value === this.value
  }
  DataNode.prototype.contains = function (node) {
    if (node === this) return true
    var parent = node.parent
    while (!!parent) {
      if (this.isEqual(parent)) return true
      parent = parent.parent
    }
    return false
  }
  return DataNode
})()
exports.DataNode = DataNode
var buildDataTree = function (target, key, value) {
  var currentNode = environment_1.RawNode.get(
    environment_1.ProxyRaw.get(value) || value
  )
  if (currentNode) return currentNode
  environment_1.RawNode.set(value, new DataNode(target, key, value))
}
exports.buildDataTree = buildDataTree
//# sourceMappingURL=tree.js.map
