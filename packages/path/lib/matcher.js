'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Matcher = void 0
var types_1 = require('./types')
var shared_1 = require('./shared')
var isValid = function (val) {
  return val !== undefined && val !== null && val !== ''
}
var Matcher = /** @class */ (function () {
  function Matcher(tree, record) {
    var _this = this
    this.matchNext = function (node, path) {
      return node.after
        ? _this.matchAtom(path, node.after)
        : isValid(path[_this.pos])
    }
    this.tree = tree
    this.pos = 0
    this.excluding = false
    this.record = record
    this.stack = []
  }
  Matcher.prototype.currentElement = function (path) {
    return String(path[this.pos] || '').replace(/\s*/g, '')
  }
  Matcher.prototype.recordMatch = function (match) {
    var _this = this
    return function () {
      var result = match()
      if (result) {
        if (_this.record && _this.record.score !== undefined) {
          _this.record.score++
        }
      }
      return result
    }
  }
  Matcher.prototype.matchIdentifier = function (path, node) {
    var _this = this
    this.tail = node
    if (isValid(path[this.pos + 1]) && !node.after) {
      if (this.stack.length) {
        for (var i = this.stack.length - 1; i >= 0; i--) {
          if (!this.stack[i].after || !this.stack[i].filter) {
            return false
          }
        }
      } else {
        return false
      }
    }
    var current
    var next = function () {
      return _this.matchNext(node, path)
    }
    if ((0, types_1.isExpandOperator)(node.after)) {
      current = this.recordMatch(function () {
        return (
          node.value === String(path[_this.pos]).substring(0, node.value.length)
        )
      })
    } else {
      current = this.recordMatch(function () {
        return (0,
        shared_1.isEqual)(String(node.value), String(path[_this.pos]))
      })
    }
    if (this.excluding) {
      if (node.after) {
        if (this.pos < path.length) {
          return current() && next()
        } else {
          if (node.after && (0, types_1.isWildcardOperator)(node.after.after)) {
            return true
          }
          return false
        }
      } else {
        if (this.pos >= path.length) {
          return true
        }
        return current()
      }
    }
    return current() && next()
  }
  Matcher.prototype.matchIgnoreExpression = function (path, node) {
    return (
      (0, shared_1.isEqual)(node.value, this.currentElement(path)) &&
      this.matchNext(node, path)
    )
  }
  Matcher.prototype.matchDestructorExpression = function (path, node) {
    return (
      (0, shared_1.isEqual)(node.source, this.currentElement(path)) &&
      this.matchNext(node, path)
    )
  }
  Matcher.prototype.matchExpandOperator = function (path, node) {
    return this.matchAtom(path, node.after)
  }
  Matcher.prototype.matchWildcardOperator = function (path, node) {
    this.tail = node
    this.stack.push(node)
    var matched = false
    if (node.filter) {
      if (node.after) {
        matched =
          this.matchAtom(path, node.filter) && this.matchAtom(path, node.after)
      } else {
        matched = this.matchAtom(path, node.filter)
      }
    } else if (node.optional) {
      matched = true
    } else {
      matched = this.matchNext(node, path)
    }
    this.stack.pop()
    return matched
  }
  Matcher.prototype.matchGroupExpression = function (path, node) {
    var _this = this
    var current = this.pos
    this.excluding = !!node.isExclude
    var method = this.excluding ? 'every' : 'some'
    var result = (0, shared_1.toArr)(node.value)[method](function (_node) {
      _this.pos = current
      return _this.excluding
        ? !_this.matchAtom(path, _node)
        : _this.matchAtom(path, _node)
    })
    this.excluding = false
    return result
  }
  Matcher.prototype.matchRangeExpression = function (path, node) {
    if (node.start) {
      if (node.end) {
        return (
          path[this.pos] >= parseInt(node.start.value) &&
          path[this.pos] <= parseInt(node.end.value)
        )
      } else {
        return path[this.pos] >= parseInt(node.start.value)
      }
    } else {
      if (node.end) {
        return path[this.pos] <= parseInt(node.end.value)
      } else {
        return true
      }
    }
  }
  Matcher.prototype.matchDotOperator = function (path, node) {
    this.pos++
    return this.matchNext(node, path)
  }
  Matcher.prototype.matchAtom = function (path, node) {
    if (!node) {
      if (this.stack.length > 0) return true
      if (isValid(path[this.pos + 1])) return false
      if (this.pos == path.length - 1) return true
    }
    if ((0, types_1.isIdentifier)(node)) {
      return this.matchIdentifier(path, node)
    } else if ((0, types_1.isIgnoreExpression)(node)) {
      return this.matchIgnoreExpression(path, node)
    } else if ((0, types_1.isDestructorExpression)(node)) {
      return this.matchDestructorExpression(path, node)
    } else if ((0, types_1.isExpandOperator)(node)) {
      return this.matchExpandOperator(path, node)
    } else if ((0, types_1.isWildcardOperator)(node)) {
      return this.matchWildcardOperator(path, node)
    } else if ((0, types_1.isGroupExpression)(node)) {
      return this.matchGroupExpression(path, node)
    } else if ((0, types_1.isRangeExpression)(node)) {
      return this.matchRangeExpression(path, node)
    } else if ((0, types_1.isDotOperator)(node)) {
      return this.matchDotOperator(path, node)
    }
    return true
  }
  Matcher.prototype.match = function (path) {
    var matched = this.matchAtom(path, this.tree)
    if (!this.tail) return { matched: false }
    if (this.tail == this.tree && (0, types_1.isWildcardOperator)(this.tail)) {
      return { matched: true }
    }
    return { matched: matched, record: this.record }
  }
  Matcher.matchSegments = function (source, target, record) {
    var pos = 0
    if (source.length !== target.length) return false
    var match = function (pos) {
      var current = function () {
        var res = (0, shared_1.isSegmentEqual)(source[pos], target[pos])
        if (record && record.score !== undefined) {
          record.score++
        }
        return res
      }
      var next = function () {
        return pos < source.length - 1 ? match(pos + 1) : true
      }
      return current() && next()
    }
    return { matched: match(pos), record: record }
  }
  return Matcher
})()
exports.Matcher = Matcher
//# sourceMappingURL=matcher.js.map
