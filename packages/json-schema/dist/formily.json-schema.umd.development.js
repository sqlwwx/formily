;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define('formily.json-schema', ['exports'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        ((global.Formily = global.Formily || {}),
        (global.Formily.JSONSchema = {}))
      ))
})(this, function (exports) {
  'use strict'

  ;(function () {
    const env = { NODE_ENV: 'development' }
    try {
      if (process) {
        process.env = Object.assign({}, process.env)
        Object.assign(process.env, env)
        return
      }
    } catch (e) {} // avoid ReferenceError: process is not defined
    globalThis.process = { env: env }
  })()

  var REVA_ACTIONS_KEY = Symbol.for('__REVA_ACTIONS')
  var SchemaNestedMap = {
    parent: true,
    root: true,
    properties: true,
    patternProperties: true,
    additionalProperties: true,
    items: true,
    additionalItems: true,
    'x-linkages': true,
    'x-reactions': true,
  }
  var SchemaStateMap = {
    title: 'title',
    description: 'description',
    default: 'initialValue',
    enum: 'dataSource',
    readOnly: 'readOnly',
    writeOnly: 'editable',
    'x-content': 'content',
    'x-data': 'data',
    'x-value': 'value',
    'x-editable': 'editable',
    'x-disabled': 'disabled',
    'x-read-pretty': 'readPretty',
    'x-read-only': 'readOnly',
    'x-visible': 'visible',
    'x-hidden': 'hidden',
    'x-display': 'display',
    'x-pattern': 'pattern',
    'x-validator': 'validator',
    'x-decorator': 'decoratorType',
    'x-component': 'componentType',
    'x-decorator-props': 'decoratorProps',
    'x-component-props': 'componentProps',
  }
  var SchemaValidatorMap = {
    required: true,
    format: true,
    maxItems: true,
    minItems: true,
    maxLength: true,
    minLength: true,
    maximum: true,
    minimum: true,
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    pattern: true,
    const: true,
    multipleOf: true,
    maxProperties: true,
    minProperties: true,
    uniqueItems: true,
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty
  var traverse = function (target, visitor) {
    var seenObjects = []
    var root = target
    var traverse = function (target, path) {
      if (path === void 0) {
        path = []
      }
      if (Formily.Shared.isPlainObj(target)) {
        var seenIndex = seenObjects.indexOf(target)
        if (seenIndex > -1) {
          return
        }
        var addIndex = seenObjects.length
        seenObjects.push(target)
        if (isNoNeedCompileObject(target) && root !== target) {
          visitor(target, path)
          return
        }
        Formily.Shared.each(target, function (value, key) {
          traverse(value, path.concat(key))
        })
        seenObjects.splice(addIndex, 1)
      } else {
        visitor(target, path)
      }
    }
    traverse(target)
  }
  var traverseSchema = function (schema, visitor) {
    if (schema['x-validator'] !== undefined) {
      visitor(schema['x-validator'], ['x-validator'])
    }
    var seenObjects = []
    var root = schema
    var traverse = function (target, path) {
      if (path === void 0) {
        path = []
      }
      if (
        path[0] === 'x-validator' ||
        path[0] === 'version' ||
        path[0] === '_isJSONSchemaObject'
      )
        return
      if (String(path[0]).indexOf('x-') == -1 && Formily.Shared.isFn(target))
        return
      if (SchemaNestedMap[path[0]]) return
      if (Formily.Shared.isPlainObj(target)) {
        if (path[0] === 'default' || path[0] === 'x-value') {
          visitor(target, path)
          return
        }
        var seenIndex = seenObjects.indexOf(target)
        if (seenIndex > -1) {
          return
        }
        var addIndex = seenObjects.length
        seenObjects.push(target)
        if (isNoNeedCompileObject(target) && root !== target) {
          visitor(target, path)
          return
        }
        Formily.Shared.each(target, function (value, key) {
          traverse(value, path.concat(key))
        })
        seenObjects.splice(addIndex, 1)
      } else {
        visitor(target, path)
      }
    }
    traverse(schema)
  }
  var isNoNeedCompileObject = function (source) {
    if ('$$typeof' in source && '_owner' in source) {
      return true
    }
    if (source['_isAMomentObject']) {
      return true
    }
    if (Schema.isSchemaInstance(source)) {
      return true
    }
    if (source[REVA_ACTIONS_KEY]) {
      return true
    }
    if (Formily.Shared.isFn(source['toJS'])) {
      return true
    }
    if (Formily.Shared.isFn(source['toJSON'])) {
      return true
    }
    if (Formily.Reactive.isObservable(source)) {
      return true
    }
    return false
  }
  var createDataSource = function (source) {
    return Formily.Shared.toArr(source).map(function (item) {
      if (typeof item === 'object') {
        return item
      } else {
        return {
          label: item,
          value: item,
        }
      }
    })
  }
  var patchStateFormSchema = function (targetState, pattern, compiled) {
    Formily.Reactive.untracked(function () {
      var _a
      var path = Formily.Shared.FormPath.parse(pattern)
      var segments = path.segments
      var key = segments[0]
      var isEnum = key === 'enum' && Formily.Shared.isArr(compiled)
      var schemaMapKey = SchemaStateMap[key]
      if (schemaMapKey) {
        Formily.Shared.FormPath.setIn(
          targetState,
          [schemaMapKey].concat(segments.slice(1)),
          isEnum ? createDataSource(compiled) : compiled
        )
      } else {
        var isValidatorKey = SchemaValidatorMap[key]
        if (isValidatorKey) {
          ;(_a = targetState['setValidatorRule']) === null || _a === void 0
            ? void 0
            : _a.call(targetState, key, compiled)
        }
      }
    })
  }

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
  var registerCompiler = function (compiler) {
    if (Formily.Shared.isFn(compiler)) {
      Registry.compile = compiler
    }
  }
  var shallowCompile = function (source, scope) {
    if (Formily.Shared.isStr(source)) {
      var matched = source.match(ExpRE)
      if (!matched) return source
      return Registry.compile(matched[1], scope)
    }
    return source
  }
  var compile = function (source, scope) {
    var seenObjects = []
    var compile = function (source) {
      if (Formily.Shared.isStr(source)) {
        return shallowCompile(source, scope)
      } else if (Formily.Shared.isArr(source)) {
        return source.map(function (value) {
          return compile(value)
        })
      } else if (Formily.Shared.isPlainObj(source)) {
        if (isNoNeedCompileObject(source)) return source
        var seenIndex = seenObjects.indexOf(source)
        if (seenIndex > -1) {
          return source
        }
        var addIndex = seenObjects.length
        seenObjects.push(source)
        var results = Formily.Shared.reduce(
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
  var patchCompile = function (targetState, sourceState, scope) {
    traverse(sourceState, function (value, pattern) {
      var path = Formily.Shared.FormPath.parse(pattern)
      var compiled = compile(value, scope)
      var key = path.segments[0]
      if (compiled === undefined) return
      if (hasOwnProperty.call(targetState, key)) {
        Formily.Reactive.untracked(function () {
          return Formily.Shared.FormPath.setIn(targetState, path, compiled)
        })
      }
    })
  }
  var patchSchemaCompile = function (targetState, sourceSchema, scope, demand) {
    if (demand === void 0) {
      demand = false
    }
    traverseSchema(sourceSchema, function (value, path) {
      var compiled = value
      var collected = Formily.Reactive.hasCollected(function () {
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

  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

  var __assign = function () {
    __assign =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }

  function __read(o, n) {
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

  function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i]
    return to
  }

  var FieldEffects = {
    onFieldInit: Formily.Core.onFieldInit,
    onFieldMount: Formily.Core.onFieldMount,
    onFieldUnmount: Formily.Core.onFieldUnmount,
    onFieldValueChange: Formily.Core.onFieldValueChange,
    onFieldInputValueChange: Formily.Core.onFieldInputValueChange,
    onFieldInitialValueChange: Formily.Core.onFieldInitialValueChange,
    onFieldValidateStart: Formily.Core.onFieldValidateStart,
    onFieldValidateEnd: Formily.Core.onFieldValidateEnd,
    onFieldValidateFailed: Formily.Core.onFieldValidateFailed,
    onFieldValidateSuccess: Formily.Core.onFieldValidateSuccess,
  }
  var DefaultFieldEffects = ['onFieldInit', 'onFieldValueChange']
  var getDependencyValue = function (field, pattern, property) {
    var _a = __read(String(pattern).split(/\s*#\s*/), 2),
      target = _a[0],
      path = _a[1]
    return field.query(target).getIn(path || property || 'value')
  }
  var getDependencies = function (field, dependencies) {
    if (Formily.Shared.isArr(dependencies)) {
      var results_1 = []
      dependencies.forEach(function (pattern) {
        if (Formily.Shared.isStr(pattern)) {
          results_1.push(getDependencyValue(field, pattern))
        } else if (Formily.Shared.isPlainObj(pattern)) {
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
    } else if (Formily.Shared.isPlainObj(dependencies)) {
      return Formily.Shared.reduce(
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
          return patchCompile(
            state,
            request.state,
            __assign(__assign({}, scope), { $target: state })
          )
        })
      }
      if (request.schema) {
        field.form.setFieldState(target, function (state) {
          return patchSchemaCompile(
            state,
            request.schema,
            __assign(__assign({}, scope), { $target: state }),
            demand
          )
        })
      }
      if (Formily.Shared.isStr(runner) && runner) {
        field.form.setFieldState(target, function (state) {
          shallowCompile(
            '{{function(){'.concat(runner, '}}}'),
            __assign(__assign({}, scope), { $target: state })
          )()
        })
      }
    } else {
      if (request.state) {
        field.setState(function (state) {
          return patchCompile(state, request.state, scope)
        })
      }
      if (request.schema) {
        field.setState(function (state) {
          return patchSchemaCompile(state, request.schema, scope, demand)
        })
      }
      if (Formily.Shared.isStr(runner) && runner) {
        shallowCompile('{{function(){'.concat(runner, '}}}'), scope)()
      }
    }
  }
  var getBaseScope = function (field, options) {
    if (options === void 0) {
      options = {}
    }
    var $observable = function (target, deps) {
      return Formily.Reactive.autorun.memo(function () {
        return Formily.Reactive.observable(target)
      }, deps)
    }
    var $props = function (props) {
      return field.setComponentProps(props)
    }
    var $effect = Formily.Reactive.autorun.effect
    var $memo = Formily.Reactive.autorun.memo
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
      var reactions = Formily.Shared.toArr(schema['x-reactions'])
      var baseScope = getBaseScope(field, options)
      reactions.forEach(function (unCompiled) {
        var reaction = shallowCompile(unCompiled, baseScope)
        if (!reaction) return
        if (Formily.Shared.isFn(reaction)) {
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
          var compiledWhen = shallowCompile(when, scope)
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
          Formily.Reactive.autorun.memo(function () {
            Formily.Reactive.untracked(function () {
              Formily.Shared.each(reaction.effects, function (type) {
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

  var patches = []
  var polyfills = {}
  var reducePatches = function (schema) {
    return patches.reduce(function (buf, patch) {
      return patch(buf)
    }, __assign({}, schema))
  }
  var registerPatches = function () {
    var args = []
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i]
    }
    args.forEach(function (patch) {
      if (Formily.Shared.isFn(patch)) {
        patches.push(patch)
      }
    })
  }
  var registerPolyfills = function (version, patch) {
    if (version && Formily.Shared.isFn(patch)) {
      polyfills[version] = polyfills[version] || []
      polyfills[version].push(patch)
    }
  }
  var enablePolyfills = function (versions) {
    if (Formily.Shared.isArr(versions)) {
      versions.forEach(function (version) {
        if (Formily.Shared.isArr(polyfills[version])) {
          polyfills[version].forEach(function (patch) {
            registerPatches(patch)
          })
        }
      })
    }
  }

  var VOID_COMPONENTS = [
    'card',
    'block',
    'grid-col',
    'grid-row',
    'grid',
    'layout',
    'step',
    'tab',
    'text-box',
  ]
  var TYPE_DEFAULT_COMPONENTS = {}
  var transformCondition = function (condition) {
    if (Formily.Shared.isStr(condition)) {
      return condition.replace(/\$value/, '$self.value')
    }
  }
  var transformXLinkage = function (linkages) {
    if (Formily.Shared.isArr(linkages)) {
      return linkages.reduce(function (buf, item) {
        if (!item) return buf
        if (item.type === 'value:visible') {
          return buf.concat({
            target: item.target,
            when: transformCondition(item.condition),
            fulfill: {
              state: {
                visible: true,
              },
            },
            otherwise: {
              state: {
                visible: false,
              },
            },
          })
        } else if (item.type === 'value:schema') {
          return buf.concat({
            target: item.target,
            when: transformCondition(item.condition),
            fulfill: {
              schema: SpecificationV1Polyfill(
                __assign({ version: '1.0' }, item.schema)
              ),
            },
            otherwise: {
              schema: SpecificationV1Polyfill(
                __assign({ version: '1.0' }, item.otherwise)
              ),
            },
          })
        } else if (item.type === 'value:state') {
          return buf.concat({
            target: item.target,
            when: transformCondition(item.condition),
            fulfill: {
              state: item.state,
            },
            otherwise: {
              state: item.otherwise,
            },
          })
        }
      }, [])
    }
    return []
  }
  var SpecificationV1Polyfill = function (schema) {
    if (Formily.Shared.isValid(schema['editable'])) {
      schema['x-editable'] = schema['x-editable'] || schema['editable']
      delete schema['editable']
    }
    if (Formily.Shared.isValid(schema['visible'])) {
      schema['x-visible'] = schema['x-visible'] || schema['visible']
      delete schema['visible']
    }
    if (Formily.Shared.isValid(schema['display'])) {
      schema['x-display'] =
        schema['x-display'] || (schema['display'] ? 'visible' : 'hidden')
      delete schema['display']
    }
    if (Formily.Shared.isValid(schema['x-props'])) {
      schema['x-decorator-props'] =
        schema['x-decorator-props'] || schema['x-props']
      delete schema['display']
    }
    if (schema['x-linkages']) {
      schema['x-reactions'] = Formily.Shared.toArr(
        schema['x-reactions']
      ).concat(transformXLinkage(schema['x-linkages']))
      delete schema['x-linkages']
    }
    if (schema['x-component']) {
      if (
        VOID_COMPONENTS.some(function (component) {
          return (
            Formily.Shared.lowerCase(component) ===
            Formily.Shared.lowerCase(schema['x-component'])
          )
        })
      ) {
        schema['type'] = 'void'
      }
    } else {
      if (TYPE_DEFAULT_COMPONENTS[schema['type']]) {
        schema['x-component'] = TYPE_DEFAULT_COMPONENTS[schema['type']]
      }
    }
    if (
      !schema['x-decorator'] &&
      schema['type'] !== 'void' &&
      schema['type'] !== 'object'
    ) {
      schema['x-decorator'] = schema['x-decorator'] || 'FormItem'
    }
    if (schema['x-rules']) {
      schema['x-validator'] = []
        .concat(schema['x-validator'] || [])
        .concat(schema['x-rules'])
    }
    return schema
  }
  registerPolyfills('1.0', SpecificationV1Polyfill)
  var registerVoidComponents = function (components) {
    VOID_COMPONENTS.push.apply(
      VOID_COMPONENTS,
      __spreadArray([], __read(components))
    )
  }
  var registerTypeDefaultComponents = function (maps) {
    Object.assign(TYPE_DEFAULT_COMPONENTS, maps)
  }

  var Schema = /** @class */ (function () {
    function Schema(json, parent) {
      var _this = this
      this._isJSONSchemaObject = true
      this.version = '2.0'
      this.addProperty = function (key, schema) {
        _this.properties = _this.properties || {}
        _this.properties[key] = new Schema(schema, _this)
        _this.properties[key].name = key
        return _this.properties[key]
      }
      this.removeProperty = function (key) {
        var schema = _this.properties[key]
        delete _this.properties[key]
        return schema
      }
      this.setProperties = function (properties) {
        for (var key in properties) {
          _this.addProperty(key, properties[key])
        }
        return _this
      }
      this.addPatternProperty = function (key, schema) {
        if (!schema) return
        _this.patternProperties = _this.patternProperties || {}
        _this.patternProperties[key] = new Schema(schema, _this)
        _this.patternProperties[key].name = key
        return _this.patternProperties[key]
      }
      this.removePatternProperty = function (key) {
        var schema = _this.patternProperties[key]
        delete _this.patternProperties[key]
        return schema
      }
      this.setPatternProperties = function (properties) {
        if (!properties) return _this
        for (var key in properties) {
          _this.addPatternProperty(key, properties[key])
        }
        return _this
      }
      this.setAdditionalProperties = function (properties) {
        if (!properties) return
        _this.additionalProperties = new Schema(properties)
        return _this.additionalProperties
      }
      this.setItems = function (schema) {
        if (!schema) return
        if (Array.isArray(schema)) {
          _this.items = schema.map(function (item) {
            return new Schema(item, _this)
          })
        } else {
          _this.items = new Schema(schema, _this)
        }
        return _this.items
      }
      this.setAdditionalItems = function (items) {
        if (!items) return
        _this.additionalItems = new Schema(items, _this)
        return _this.additionalItems
      }
      this.findDefinitions = function (ref) {
        if (!ref || !_this.root || !Formily.Shared.isStr(ref)) return
        if (ref.indexOf('#/') !== 0) return
        return Formily.Shared.FormPath.getIn(
          _this.root,
          ref.substring(2).split('/')
        )
      }
      this.mapProperties = function (callback) {
        return Schema.getOrderProperties(_this).map(function (_a, index) {
          var schema = _a.schema,
            key = _a.key
          return callback(schema, key, index)
        })
      }
      this.mapPatternProperties = function (callback) {
        return Schema.getOrderProperties(_this, 'patternProperties').map(
          function (_a, index) {
            var schema = _a.schema,
              key = _a.key
            return callback(schema, key, index)
          }
        )
      }
      this.reduceProperties = function (callback, predicate) {
        var results = predicate
        Schema.getOrderProperties(_this, 'properties').forEach(function (
          _a,
          index
        ) {
          var schema = _a.schema,
            key = _a.key
          results = callback(results, schema, key, index)
        })
        return results
      }
      this.reducePatternProperties = function (callback, predicate) {
        var results = predicate
        Schema.getOrderProperties(_this, 'patternProperties').forEach(function (
          _a,
          index
        ) {
          var schema = _a.schema,
            key = _a.key
          results = callback(results, schema, key, index)
        })
        return results
      }
      this.compile = function (scope) {
        var schema = new Schema({}, _this.parent)
        Formily.Shared.each(_this, function (value, key) {
          if (Formily.Shared.isFn(value) && !key.includes('x-')) return
          if (key === 'parent' || key === 'root') return
          if (!SchemaNestedMap[key]) {
            schema[key] = value ? compile(value, scope) : value
          } else {
            schema[key] = value ? shallowCompile(value, scope) : value
          }
        })
        return schema
      }
      this.fromJSON = function (json) {
        if (!json) return _this
        if (Schema.isSchemaInstance(json)) return json
        Formily.Shared.each(reducePatches(json), function (value, key) {
          if (Formily.Shared.isFn(value) && !key.includes('x-')) return
          if (key === 'properties') {
            _this.setProperties(value)
          } else if (key === 'patternProperties') {
            _this.setPatternProperties(value)
          } else if (key === 'additionalProperties') {
            _this.setAdditionalProperties(value)
          } else if (key === 'items') {
            _this.setItems(value)
          } else if (key === 'additionalItems') {
            _this.setAdditionalItems(value)
          } else if (key === '$ref') {
            _this.fromJSON(_this.findDefinitions(value))
          } else {
            _this[key] = value
          }
        })
        return _this
      }
      this.toJSON = function (recursion) {
        if (recursion === void 0) {
          recursion = true
        }
        var results = {}
        Formily.Shared.each(_this, function (value, key) {
          var _a, _b
          if (
            (Formily.Shared.isFn(value) && !key.includes('x-')) ||
            key === 'parent' ||
            key === 'root'
          )
            return
          if (key === 'properties' || key === 'patternProperties') {
            if (!recursion) return
            results[key] = Formily.Shared.map(value, function (item) {
              var _a
              return (_a =
                item === null || item === void 0 ? void 0 : item.toJSON) ===
                null || _a === void 0
                ? void 0
                : _a.call(item)
            })
          } else if (
            key === 'additionalProperties' ||
            key === 'additionalItems'
          ) {
            if (!recursion) return
            results[key] =
              (_a =
                value === null || value === void 0 ? void 0 : value.toJSON) ===
                null || _a === void 0
                ? void 0
                : _a.call(value)
          } else if (key === 'items') {
            if (!recursion) return
            if (Array.isArray(value)) {
              results[key] = value.map(function (item) {
                var _a
                return (_a =
                  item === null || item === void 0 ? void 0 : item.toJSON) ===
                  null || _a === void 0
                  ? void 0
                  : _a.call(item)
              })
            } else {
              results[key] =
                (_b =
                  value === null || value === void 0
                    ? void 0
                    : value.toJSON) === null || _b === void 0
                  ? void 0
                  : _b.call(value)
            }
          } else {
            results[key] = value
          }
        })
        return results
      }
      this.toFieldProps = function (options) {
        return transformFieldProps(_this, options)
      }
      if (parent) {
        this.parent = parent
        this.root = parent.root
      } else {
        this.root = this
      }
      return this.fromJSON(json)
    }
    Schema.getOrderProperties = function (schema, propertiesName) {
      if (schema === void 0) {
        schema = {}
      }
      if (propertiesName === void 0) {
        propertiesName = 'properties'
      }
      var orderProperties = []
      var unorderProperties = []
      for (var key in schema[propertiesName]) {
        var item = schema[propertiesName][key]
        var index = item['x-index']
        if (!isNaN(index)) {
          orderProperties[index] = { schema: item, key: key }
        } else {
          unorderProperties.push({ schema: item, key: key })
        }
      }
      return orderProperties.concat(unorderProperties).filter(function (item) {
        return !!item
      })
    }
    Schema.compile = function (expression, scope) {
      return compile(expression, scope)
    }
    Schema.shallowCompile = function (expression, scope) {
      return shallowCompile(expression, scope)
    }
    Schema.isSchemaInstance = function (value) {
      return Formily.Shared.instOf(value, Schema)
    }
    Schema.registerCompiler = registerCompiler
    Schema.registerPatches = registerPatches
    Schema.registerVoidComponents = registerVoidComponents
    Schema.registerTypeDefaultComponents = registerTypeDefaultComponents
    Schema.registerPolyfills = registerPolyfills
    Schema.enablePolyfills = enablePolyfills
    Schema.silent = silent
    return Schema
  })()

  exports.Schema = Schema

  Object.defineProperty(exports, '__esModule', { value: true })
})
//# sourceMappingURL=formily.json-schema.umd.development.js.map
