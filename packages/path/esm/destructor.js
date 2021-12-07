import {
  isArrayPattern,
  isObjectPattern,
  isIdentifier,
  isDestructorExpression,
} from './types'
import { isNum } from './shared'
var DestructorCache = new Map()
var isValid = function (val) {
  return val !== undefined && val !== null
}
export var getDestructor = function (source) {
  return DestructorCache.get(source)
}
export var setDestructor = function (source, rules) {
  DestructorCache.set(source, rules)
}
export var parseDestructorRules = function (node) {
  var rules = []
  if (isObjectPattern(node)) {
    var index_1 = 0
    node.properties.forEach(function (child) {
      rules[index_1] = {
        path: [],
      }
      rules[index_1].key = child.key.value
      rules[index_1].path.push(child.key.value)
      if (isIdentifier(child.value)) {
        rules[index_1].key = child.value.value
      }
      var basePath = rules[index_1].path
      var childRules = parseDestructorRules(child.value)
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
  } else if (isArrayPattern(node)) {
    var index_2 = 0
    node.elements.forEach(function (child, key) {
      rules[index_2] = {
        path: [],
      }
      rules[index_2].key = key
      rules[index_2].path.push(key)
      if (isIdentifier(child)) {
        rules[index_2].key = child.value
      }
      var basePath = rules[index_2].path
      var childRules = parseDestructorRules(child)
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
  if (isDestructorExpression(node)) {
    return parseDestructorRules(node.value)
  }
  return rules
}
export var setInByDestructor = function (source, rules, value, mutators) {
  rules.forEach(function (_a) {
    var key = _a.key,
      path = _a.path
    mutators.setIn([key], source, mutators.getIn(path, value))
  })
}
export var getInByDestructor = function (source, rules, mutators) {
  var response = {}
  if (rules.length) {
    if (isNum(rules[0].path[0])) {
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
export var deleteInByDestructor = function (source, rules, mutators) {
  rules.forEach(function (_a) {
    var key = _a.key
    mutators.deleteIn([key], source)
  })
}
export var existInByDestructor = function (source, rules, start, mutators) {
  return rules.every(function (_a) {
    var key = _a.key
    return mutators.existIn([key], source, start)
  })
}
//# sourceMappingURL=destructor.js.map
