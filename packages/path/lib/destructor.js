'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.existInByDestructor =
  exports.deleteInByDestructor =
  exports.getInByDestructor =
  exports.setInByDestructor =
  exports.parseDestructorRules =
  exports.setDestructor =
  exports.getDestructor =
    void 0
var types_1 = require('./types')
var shared_1 = require('./shared')
var DestructorCache = new Map()
var isValid = function (val) {
  return val !== undefined && val !== null
}
var getDestructor = function (source) {
  return DestructorCache.get(source)
}
exports.getDestructor = getDestructor
var setDestructor = function (source, rules) {
  DestructorCache.set(source, rules)
}
exports.setDestructor = setDestructor
var parseDestructorRules = function (node) {
  var rules = []
  if ((0, types_1.isObjectPattern)(node)) {
    var index_1 = 0
    node.properties.forEach(function (child) {
      rules[index_1] = {
        path: [],
      }
      rules[index_1].key = child.key.value
      rules[index_1].path.push(child.key.value)
      if ((0, types_1.isIdentifier)(child.value)) {
        rules[index_1].key = child.value.value
      }
      var basePath = rules[index_1].path
      var childRules = (0, exports.parseDestructorRules)(child.value)
      var k = index_1
      childRules.forEach(function (rule) {
        if (rules[k]) {
          rules[k].key = rule.key
          rules[k].path = basePath.concat(rule.path)
        } else {
          rules[k] = {
            key: rule.key,
            path: basePath.concat(rule.path),
          }
        }
        k++
      })
      if (k > index_1) {
        index_1 = k
      } else {
        index_1++
      }
    })
    return rules
  } else if ((0, types_1.isArrayPattern)(node)) {
    var index_2 = 0
    node.elements.forEach(function (child, key) {
      rules[index_2] = {
        path: [],
      }
      rules[index_2].key = key
      rules[index_2].path.push(key)
      if ((0, types_1.isIdentifier)(child)) {
        rules[index_2].key = child.value
      }
      var basePath = rules[index_2].path
      var childRules = (0, exports.parseDestructorRules)(child)
      var k = index_2
      childRules.forEach(function (rule) {
        if (rules[k]) {
          rules[k].key = rule.key
          rules[k].path = basePath.concat(rule.path)
        } else {
          rules[k] = {
            key: rule.key,
            path: basePath.concat(rule.path),
          }
        }
        k++
      })
      if (k > index_2) {
        index_2 = k
      } else {
        index_2++
      }
    })
    return rules
  }
  if ((0, types_1.isDestructorExpression)(node)) {
    return (0, exports.parseDestructorRules)(node.value)
  }
  return rules
}
exports.parseDestructorRules = parseDestructorRules
var setInByDestructor = function (source, rules, value, mutators) {
  rules.forEach(function (_a) {
    var key = _a.key,
      path = _a.path
    mutators.setIn([key], source, mutators.getIn(path, value))
  })
}
exports.setInByDestructor = setInByDestructor
var getInByDestructor = function (source, rules, mutators) {
  var response = {}
  if (rules.length) {
    if ((0, shared_1.isNum)(rules[0].path[0])) {
      response = []
    }
  }
  source = isValid(source) ? source : {}
  rules.forEach(function (_a) {
    var key = _a.key,
      path = _a.path
    mutators.setIn(path, response, source[key])
  })
  return response
}
exports.getInByDestructor = getInByDestructor
var deleteInByDestructor = function (source, rules, mutators) {
  rules.forEach(function (_a) {
    var key = _a.key
    mutators.deleteIn([key], source)
  })
}
exports.deleteInByDestructor = deleteInByDestructor
var existInByDestructor = function (source, rules, start, mutators) {
  return rules.every(function (_a) {
    var key = _a.key
    return mutators.existIn([key], source, start)
  })
}
exports.existInByDestructor = existInByDestructor
//# sourceMappingURL=destructor.js.map
