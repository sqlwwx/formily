'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.patchSchemaCompile =
  exports.patchCompile =
  exports.compile =
  exports.shallowCompile =
  exports.registerCompiler =
  exports.silent =
    void 0
var shared_1 = require('@formily/shared')
var reactive_1 = require('@formily/reactive')
var shared_2 = require('./shared')
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
var silent = function (value) {
  if (value === void 0) {
    value = true
  }
  Registry.silent = !!value
}
exports.silent = silent
var registerCompiler = function (compiler) {
  if ((0, shared_1.isFn)(compiler)) {
    Registry.compile = compiler
  }
}
exports.registerCompiler = registerCompiler
var shallowCompile = function (source, scope) {
  if ((0, shared_1.isStr)(source)) {
    var matched = source.match(ExpRE)
    if (!matched) return source
    return Registry.compile(matched[1], scope)
  }
  return source
}
exports.shallowCompile = shallowCompile
var compile = function (source, scope) {
  var seenObjects = []
  var compile = function (source) {
    if ((0, shared_1.isStr)(source)) {
      return (0, exports.shallowCompile)(source, scope)
    } else if ((0, shared_1.isArr)(source)) {
      return source.map(function (value) {
        return compile(value)
      })
    } else if ((0, shared_1.isPlainObj)(source)) {
      if ((0, shared_2.isNoNeedCompileObject)(source)) return source
      var seenIndex = seenObjects.indexOf(source)
      if (seenIndex > -1) {
        return source
      }
      var addIndex = seenObjects.length
      seenObjects.push(source)
      var results = (0, shared_1.reduce)(
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
exports.compile = compile
var patchCompile = function (targetState, sourceState, scope) {
  ;(0, shared_2.traverse)(sourceState, function (value, pattern) {
    var path = shared_1.FormPath.parse(pattern)
    var compiled = (0, exports.compile)(value, scope)
    var key = path.segments[0]
    if (compiled === undefined) return
    if (shared_2.hasOwnProperty.call(targetState, key)) {
      ;(0, reactive_1.untracked)(function () {
        return shared_1.FormPath.setIn(targetState, path, compiled)
      })
    }
  })
}
exports.patchCompile = patchCompile
var patchSchemaCompile = function (targetState, sourceSchema, scope, demand) {
  if (demand === void 0) {
    demand = false
  }
  ;(0, shared_2.traverseSchema)(sourceSchema, function (value, path) {
    var compiled = value
    var collected = (0, reactive_1.hasCollected)(function () {
      compiled = (0, exports.compile)(value, scope)
    })
    if (compiled === undefined) return
    if (demand) {
      if (collected || !targetState.initialized) {
        ;(0, shared_2.patchStateFormSchema)(targetState, path, compiled)
      }
    } else {
      ;(0, shared_2.patchStateFormSchema)(targetState, path, compiled)
    }
  })
}
exports.patchSchemaCompile = patchSchemaCompile
//# sourceMappingURL=compiler.js.map
