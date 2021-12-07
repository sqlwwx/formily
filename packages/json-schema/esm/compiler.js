import {
  isArr,
  isFn,
  isPlainObj,
  isStr,
  reduce,
  FormPath,
} from '@formily/shared'
import { untracked, hasCollected } from '@formily/reactive'
import {
  traverse,
  traverseSchema,
  isNoNeedCompileObject,
  hasOwnProperty,
  patchStateFormSchema,
} from './shared'
var ExpRE = /^\s*\{\{([\s\S]*)\}\}\s*$/
var Registry = {
  silent: false,
  compile: function (expression, scope) {
    if (scope === void 0) {
      scope = {}
    }
    if (Registry.silent) {
      try {
        return new Function(
          '$root',
          'with($root) { return ('.concat(expression, '); }')
        )(scope)
      } catch (_a) {}
    } else {
      return new Function(
        '$root',
        'with($root) { return ('.concat(expression, '); }')
      )(scope)
    }
  },
}
export var silent = function (value) {
  if (value === void 0) {
    value = true
  }
  Registry.silent = !!value
}
export var registerCompiler = function (compiler) {
  if (isFn(compiler)) {
    Registry.compile = compiler
  }
}
export var shallowCompile = function (source, scope) {
  if (isStr(source)) {
    var matched = source.match(ExpRE)
    if (!matched) return source
    return Registry.compile(matched[1], scope)
  }
  return source
}
export var compile = function (source, scope) {
  var seenObjects = []
  var compile = function (source) {
    if (isStr(source)) {
      return shallowCompile(source, scope)
    } else if (isArr(source)) {
      return source.map(function (value) {
        return compile(value)
      })
    } else if (isPlainObj(source)) {
      if (isNoNeedCompileObject(source)) return source
      var seenIndex = seenObjects.indexOf(source)
      if (seenIndex > -1) {
        return source
      }
      var addIndex = seenObjects.length
      seenObjects.push(source)
      var results = reduce(
        source,
        function (buf, value, key) {
          buf[key] = compile(value)
          return buf
        },
        {}
      )
      seenObjects.splice(addIndex, 1)
      return results
    }
    return source
  }
  return compile(source)
}
export var patchCompile = function (targetState, sourceState, scope) {
  traverse(sourceState, function (value, pattern) {
    var path = FormPath.parse(pattern)
    var compiled = compile(value, scope)
    var key = path.segments[0]
    if (compiled === undefined) return
    if (hasOwnProperty.call(targetState, key)) {
      untracked(function () {
        return FormPath.setIn(targetState, path, compiled)
      })
    }
  })
}
export var patchSchemaCompile = function (
  targetState,
  sourceSchema,
  scope,
  demand
) {
  if (demand === void 0) {
    demand = false
  }
  traverseSchema(sourceSchema, function (value, path) {
    var compiled = value
    var collected = hasCollected(function () {
      compiled = compile(value, scope)
    })
    if (compiled === undefined) return
    if (demand) {
      if (collected || !targetState.initialized) {
        patchStateFormSchema(targetState, path, compiled)
      }
    } else {
      patchStateFormSchema(targetState, path, compiled)
    }
  })
}
//# sourceMappingURL=compiler.js.map
