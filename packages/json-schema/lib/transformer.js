'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
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
Object.defineProperty(exports, '__esModule', { value: true })
exports.transformFieldProps = void 0
/* istanbul ignore file */
var reactive_1 = require('@formily/reactive')
var shared_1 = require('@formily/shared')
var core_1 = require('@formily/core')
var compiler_1 = require('./compiler')
var FieldEffects = {
  onFieldInit: core_1.onFieldInit,
  onFieldMount: core_1.onFieldMount,
  onFieldUnmount: core_1.onFieldUnmount,
  onFieldValueChange: core_1.onFieldValueChange,
  onFieldInputValueChange: core_1.onFieldInputValueChange,
  onFieldInitialValueChange: core_1.onFieldInitialValueChange,
  onFieldValidateStart: core_1.onFieldValidateStart,
  onFieldValidateEnd: core_1.onFieldValidateEnd,
  onFieldValidateFailed: core_1.onFieldValidateFailed,
  onFieldValidateSuccess: core_1.onFieldValidateSuccess,
}
var DefaultFieldEffects = ['onFieldInit', 'onFieldValueChange']
var getDependencyValue = function (field, pattern, property) {
  var _a = __read(String(pattern).split(/\s*#\s*/), 2),
    target = _a[0],
    path = _a[1]
  return field.query(target).getIn(path || property || 'value')
}
var getDependencies = function (field, dependencies) {
  if ((0, shared_1.isArr)(dependencies)) {
    var results_1 = []
    dependencies.forEach(function (pattern) {
      if ((0, shared_1.isStr)(pattern)) {
        results_1.push(getDependencyValue(field, pattern))
      } else if ((0, shared_1.isPlainObj)(pattern)) {
        if (pattern.name && pattern.source) {
          results_1[pattern.name] = getDependencyValue(
            field,
            pattern.source,
            pattern.property
          )
        }
      }
    })
    return results_1
  } else if ((0, shared_1.isPlainObj)(dependencies)) {
    return (0, shared_1.reduce)(
      dependencies,
      function (buf, pattern, key) {
        buf[key] = getDependencyValue(field, pattern)
        return buf
      },
      {}
    )
  }
  return []
}
var setSchemaFieldState = function (options, demand) {
  if (demand === void 0) {
    demand = false
  }
  var _a = options || {},
    request = _a.request,
    target = _a.target,
    runner = _a.runner,
    field = _a.field,
    scope = _a.scope
  if (!request) return
  if (target) {
    if (request.state) {
      field.form.setFieldState(target, function (state) {
        return (0,
        compiler_1.patchCompile)(state, request.state, __assign(__assign({}, scope), { $target: state }))
      })
    }
    if (request.schema) {
      field.form.setFieldState(target, function (state) {
        return (0,
        compiler_1.patchSchemaCompile)(state, request.schema, __assign(__assign({}, scope), { $target: state }), demand)
      })
    }
    if ((0, shared_1.isStr)(runner) && runner) {
      field.form.setFieldState(target, function (state) {
        ;(0, compiler_1.shallowCompile)(
          '{{function(){'.concat(runner, '}}}'),
          __assign(__assign({}, scope), { $target: state })
        )()
      })
    }
  } else {
    if (request.state) {
      field.setState(function (state) {
        return (0, compiler_1.patchCompile)(state, request.state, scope)
      })
    }
    if (request.schema) {
      field.setState(function (state) {
        return (0,
        compiler_1.patchSchemaCompile)(state, request.schema, scope, demand)
      })
    }
    if ((0, shared_1.isStr)(runner) && runner) {
      ;(0, compiler_1.shallowCompile)(
        '{{function(){'.concat(runner, '}}}'),
        scope
      )()
    }
  }
}
var getBaseScope = function (field, options) {
  if (options === void 0) {
    options = {}
  }
  var $observable = function (target, deps) {
    return reactive_1.autorun.memo(function () {
      return (0, reactive_1.observable)(target)
    }, deps)
  }
  var $props = function (props) {
    return field.setComponentProps(props)
  }
  var $effect = reactive_1.autorun.effect
  var $memo = reactive_1.autorun.memo
  var $self = field
  var $form = field.form
  var $values = field.form.values
  return __assign(__assign({}, options.scope), {
    $form: $form,
    $self: $self,
    $observable: $observable,
    $effect: $effect,
    $memo: $memo,
    $props: $props,
    $values: $values,
  })
}
var getBaseReactions = function (schema, options) {
  return function (field) {
    setSchemaFieldState(
      {
        field: field,
        request: { schema: schema },
        scope: getBaseScope(field, options),
      },
      true
    )
  }
}
var getUserReactions = function (schema, options) {
  return function (field) {
    var reactions = (0, shared_1.toArr)(schema['x-reactions'])
    var baseScope = getBaseScope(field, options)
    reactions.forEach(function (unCompiled) {
      var reaction = (0, compiler_1.shallowCompile)(unCompiled, baseScope)
      if (!reaction) return
      if ((0, shared_1.isFn)(reaction)) {
        return reaction(field)
      }
      var when = reaction.when,
        fulfill = reaction.fulfill,
        otherwise = reaction.otherwise,
        target = reaction.target,
        effects = reaction.effects
      var run = function () {
        var $deps = getDependencies(field, reaction.dependencies)
        var $dependencies = $deps
        var scope = __assign(__assign({}, baseScope), {
          $target: null,
          $deps: $deps,
          $dependencies: $dependencies,
        })
        var compiledWhen = (0, compiler_1.shallowCompile)(when, scope)
        var condition = when ? compiledWhen : true
        var request = condition ? fulfill : otherwise
        var runner = condition
          ? fulfill === null || fulfill === void 0
            ? void 0
            : fulfill.run
          : otherwise === null || otherwise === void 0
          ? void 0
          : otherwise.run
        setSchemaFieldState({
          field: field,
          target: target,
          request: request,
          runner: runner,
          scope: scope,
        })
      }
      if (target) {
        reaction.effects = (
          effects === null || effects === void 0 ? void 0 : effects.length
        )
          ? effects
          : DefaultFieldEffects
      }
      if (reaction.effects) {
        reactive_1.autorun.memo(function () {
          ;(0, reactive_1.untracked)(function () {
            ;(0, shared_1.each)(reaction.effects, function (type) {
              if (FieldEffects[type]) {
                FieldEffects[type](field.address, run)
              }
            })
          })
        }, [])
      } else {
        run()
      }
    })
  }
}
var transformFieldProps = function (schema, options) {
  return {
    name: schema.name,
    reactions: [
      getBaseReactions(schema, options),
      getUserReactions(schema, options),
    ],
  }
}
exports.transformFieldProps = transformFieldProps
//# sourceMappingURL=transformer.js.map
