;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define('formily.vue', ['exports'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        ((global.Formily = global.Formily || {}), (global.Formily.Vue = {}))
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

  var __assign$3 =
    (undefined && undefined.__assign) ||
    function () {
      __assign$3 =
        Object.assign ||
        function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i]
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
          }
          return t
        }
      return __assign$3.apply(this, arguments)
    }
  var __read$2 =
    (undefined && undefined.__read) ||
    function (o, n) {
      var m = typeof Symbol === 'function' && o[Symbol.iterator]
      if (!m) return o
      var i = m.call(o),
        r,
        ar = [],
        e
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value)
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
    var _a = __read$2(String(pattern).split(/\s*#\s*/), 2),
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
            __assign$3(__assign$3({}, scope), { $target: state })
          )
        })
      }
      if (request.schema) {
        field.form.setFieldState(target, function (state) {
          return patchSchemaCompile(
            state,
            request.schema,
            __assign$3(__assign$3({}, scope), { $target: state }),
            demand
          )
        })
      }
      if (Formily.Shared.isStr(runner) && runner) {
        field.form.setFieldState(target, function (state) {
          shallowCompile(
            '{{function(){'.concat(runner, '}}}'),
            __assign$3(__assign$3({}, scope), { $target: state })
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
    return __assign$3(__assign$3({}, options.scope), {
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
          var scope = __assign$3(__assign$3({}, baseScope), {
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

  var __assign$2 =
    (undefined && undefined.__assign) ||
    function () {
      __assign$2 =
        Object.assign ||
        function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i]
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
          }
          return t
        }
      return __assign$2.apply(this, arguments)
    }

  var patches = []
  var polyfills = {}
  var reducePatches = function (schema) {
    return patches.reduce(function (buf, patch) {
      return patch(buf)
    }, __assign$2({}, schema))
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

  var __assign$1 =
    (undefined && undefined.__assign) ||
    function () {
      __assign$1 =
        Object.assign ||
        function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i]
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
          }
          return t
        }
      return __assign$1.apply(this, arguments)
    }
  var __read$1 =
    (undefined && undefined.__read) ||
    function (o, n) {
      var m = typeof Symbol === 'function' && o[Symbol.iterator]
      if (!m) return o
      var i = m.call(o),
        r,
        ar = [],
        e
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value)
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
  var __spreadArray$1 =
    (undefined && undefined.__spreadArray) ||
    function (to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i)
            ar[i] = from[i]
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from))
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
                __assign$1({ version: '1.0' }, item.schema)
              ),
            },
            otherwise: {
              schema: SpecificationV1Polyfill(
                __assign$1({ version: '1.0' }, item.otherwise)
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
      __spreadArray$1([], __read$1(components), false)
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

  function install(_vue) {
    _vue = _vue || Vue
    if (_vue && !_vue['__composition_api_installed__'])
      Vue.use(VueCompositionAPI)
  }

  install(Vue)
  Vue
  Vue.version

  /**VCA-EXPORTS**/
  VueCompositionAPI.EffectScope
  const _global_VueCompositionAPI_computed = VueCompositionAPI.computed
  VueCompositionAPI.createApp
  VueCompositionAPI.createRef
  VueCompositionAPI.customRef
  VueCompositionAPI.defineAsyncComponent
  const _global_VueCompositionAPI_defineComponent =
    VueCompositionAPI.defineComponent
  VueCompositionAPI.del
  VueCompositionAPI.effectScope
  VueCompositionAPI.getCurrentInstance
  VueCompositionAPI.getCurrentScope
  const _global_VueCompositionAPI_h = VueCompositionAPI.h
  const _global_VueCompositionAPI_inject = VueCompositionAPI.inject
  VueCompositionAPI.isRaw
  VueCompositionAPI.isReactive
  VueCompositionAPI.isReadonly
  VueCompositionAPI.isRef
  const _global_VueCompositionAPI_markRaw = VueCompositionAPI.markRaw
  VueCompositionAPI.nextTick
  VueCompositionAPI.onActivated
  VueCompositionAPI.onBeforeMount
  const _global_VueCompositionAPI_onBeforeUnmount =
    VueCompositionAPI.onBeforeUnmount
  VueCompositionAPI.onBeforeUpdate
  VueCompositionAPI.onDeactivated
  VueCompositionAPI.onErrorCaptured
  const _global_VueCompositionAPI_onMounted = VueCompositionAPI.onMounted
  VueCompositionAPI.onScopeDispose
  VueCompositionAPI.onServerPrefetch
  VueCompositionAPI.onUnmounted
  VueCompositionAPI.onUpdated
  const _global_VueCompositionAPI_provide = VueCompositionAPI.provide
  VueCompositionAPI.proxyRefs
  VueCompositionAPI.reactive
  VueCompositionAPI.readonly
  const _global_VueCompositionAPI_ref = VueCompositionAPI.ref
  VueCompositionAPI.set
  VueCompositionAPI.shallowReactive
  VueCompositionAPI.shallowReadonly
  const _global_VueCompositionAPI_shallowRef = VueCompositionAPI.shallowRef
  const _global_VueCompositionAPI_toRaw = VueCompositionAPI.toRaw
  VueCompositionAPI.toRef
  VueCompositionAPI.toRefs
  VueCompositionAPI.triggerRef
  VueCompositionAPI.unref
  VueCompositionAPI.useAttrs
  VueCompositionAPI.useCSSModule
  VueCompositionAPI.useCssModule
  VueCompositionAPI.useSlots
  VueCompositionAPI.warn
  const _global_VueCompositionAPI_watch = VueCompositionAPI.watch
  VueCompositionAPI.watchEffect
  VueCompositionAPI.watchPostEffect
  VueCompositionAPI.watchSyncEffect
  /**VCA-EXPORTS**/

  Vue

  var FormSymbol = Symbol('form')
  var FieldSymbol = Symbol('field')
  var SchemaMarkupSymbol = Symbol('schemaMarkup')
  var SchemaSymbol = Symbol('schema')
  var SchemaExpressionScopeSymbol = Symbol('schemaExpression')
  var SchemaOptionsSymbol = Symbol('schemaOptions')

  var useAttach = function (target) {
    var oldTargetRef = _global_VueCompositionAPI_shallowRef(null)
    oldTargetRef.value = target
    _global_VueCompositionAPI_onMounted(function () {
      target.onMount()
    })
    _global_VueCompositionAPI_onBeforeUnmount(function () {
      var _a
      ;(_a = oldTargetRef.value) === null || _a === void 0
        ? void 0
        : _a.onUnmount()
    })
    var checker = function (target) {
      if (target !== oldTargetRef.value) {
        if (oldTargetRef.value) {
          oldTargetRef.value.onUnmount()
        }
        oldTargetRef.value = target
        target.onMount()
      }
      return oldTargetRef.value
    }
    return [oldTargetRef, checker]
  }

  var useInjectionCleaner = function (injectionKeys) {
    injectionKeys.forEach(function (key) {
      return _global_VueCompositionAPI_provide(
        key,
        _global_VueCompositionAPI_ref()
      )
    })
  }

  var $placeholder = Symbol()

  var $fakeParent = Symbol()

  var nextSiblingPatched = Symbol()

  var childNodesPatched = Symbol()

  var isFrag = function isFrag(node) {
    return 'frag' in node
  }

  function patchParentNode(node, fakeParent) {
    if ($fakeParent in node) {
      return
    }
    node[$fakeParent] = fakeParent
    Object.defineProperty(node, 'parentNode', {
      get: function get() {
        return this[$fakeParent] || this.parentElement
      },
    })
  }

  function patchNextSibling(node) {
    if (nextSiblingPatched in node) {
      return
    }
    node[nextSiblingPatched] = true
    Object.defineProperty(node, 'nextSibling', {
      get: function get() {
        var childNodes = this.parentNode.childNodes
        var index = childNodes.indexOf(this)
        if (index > -1) {
          return childNodes[index + 1] || null
        }
        return null
      },
    })
  }

  function getTopFragment(node, fromParent) {
    while (node.parentNode !== fromParent) {
      var _node = node,
        parentNode = _node.parentNode
      if (parentNode) {
        node = parentNode
      }
    }
    return node
  }

  var getChildNodes

  function getChildNodesWithFragments(node) {
    if (!getChildNodes) {
      var childNodesDescriptor = Object.getOwnPropertyDescriptor(
        Node.prototype,
        'childNodes'
      )
      getChildNodes = childNodesDescriptor.get
    }
    var realChildNodes = getChildNodes.apply(node)
    var childNodes = Array.from(realChildNodes).map(function (childNode) {
      return getTopFragment(childNode, node)
    })
    return childNodes.filter(function (childNode, index) {
      return childNode !== childNodes[index - 1]
    })
  }

  function patchChildNodes(node) {
    if (childNodesPatched in node) {
      return
    }
    node[childNodesPatched] = true
    Object.defineProperties(node, {
      childNodes: {
        get: function get() {
          return this.frag || getChildNodesWithFragments(this)
        },
      },
      firstChild: {
        get: function get() {
          return this.childNodes[0] || null
        },
      },
    })
    node.hasChildNodes = function () {
      return this.childNodes.length > 0
    }
  }

  function before() {
    var _this$frag$
    ;(_this$frag$ = this.frag[0]).before.apply(_this$frag$, arguments)
  }

  function remove() {
    var frag = this.frag
    var removed = frag.splice(0, frag.length)
    removed.forEach(function (node) {
      node.remove()
    })
  }

  var getFragmentLeafNodes = function getFragmentLeafNodes(children) {
    var _Array$prototype
    return (_Array$prototype = Array.prototype).concat.apply(
      _Array$prototype,
      children.map(function (childNode) {
        return isFrag(childNode)
          ? getFragmentLeafNodes(childNode.frag)
          : childNode
      })
    )
  }

  function addPlaceholder(node, insertBeforeNode) {
    var placeholder = node[$placeholder]
    insertBeforeNode.before(placeholder)
    patchParentNode(placeholder, node)
    node.frag.unshift(placeholder)
  }

  function removeChild(node) {
    if (isFrag(this)) {
      var hasChildInFragment = this.frag.indexOf(node)
      if (hasChildInFragment > -1) {
        var _this$frag$splice = this.frag.splice(hasChildInFragment, 1),
          removedNode = _this$frag$splice[0]
        if (this.frag.length === 0) {
          addPlaceholder(this, removedNode)
        }
        node.remove()
      }
    } else {
      var children = getChildNodesWithFragments(this)
      var hasChild = children.indexOf(node)
      if (hasChild > -1) {
        node.remove()
      }
    }
    return node
  }

  function insertBefore(insertNode, insertBeforeNode) {
    var _this = this
    var insertNodes = insertNode.frag || [insertNode]
    if (isFrag(this)) {
      var _frag = this.frag
      if (insertBeforeNode) {
        var index = _frag.indexOf(insertBeforeNode)
        if (index > -1) {
          _frag.splice.apply(_frag, [index, 0].concat(insertNodes))
          insertBeforeNode.before.apply(insertBeforeNode, insertNodes)
        }
      } else {
        var _lastNode = _frag[_frag.length - 1]
        _frag.push.apply(_frag, insertNodes)
        _lastNode.after.apply(_lastNode, insertNodes)
      }
      removePlaceholder(this)
    } else if (insertBeforeNode) {
      if (this.childNodes.includes(insertBeforeNode)) {
        insertBeforeNode.before.apply(insertBeforeNode, insertNodes)
      }
    } else {
      this.append.apply(this, insertNodes)
    }
    insertNodes.forEach(function (node) {
      patchParentNode(node, _this)
    })
    var lastNode = insertNodes[insertNodes.length - 1]
    patchNextSibling(lastNode)
    return insertNode
  }

  function appendChild(node) {
    var frag = this.frag
    var lastChild = frag[frag.length - 1]
    lastChild.after(node)
    patchParentNode(node, this)
    removePlaceholder(this)
    frag.push(node)
    return node
  }

  function removePlaceholder(node) {
    var placeholder = node[$placeholder]
    if (node.frag[0] === placeholder) {
      node.frag.shift()
      placeholder.remove()
    }
  }

  var frag = {
    inserted: function inserted(element) {
      var parentNode = element.parentNode,
        nextSibling = element.nextSibling,
        previousSibling = element.previousSibling
      var childNodes = Array.from(element.childNodes)
      var placeholder = document.createComment('')
      if (childNodes.length === 0) {
        childNodes.push(placeholder)
      }
      element.frag = childNodes
      element[$placeholder] = placeholder
      var fragment = document.createDocumentFragment()
      fragment.append.apply(fragment, getFragmentLeafNodes(childNodes))
      element.replaceWith(fragment)
      childNodes.forEach(function (node) {
        patchParentNode(node, element)
        patchNextSibling(node)
      })
      patchChildNodes(element)
      Object.assign(element, {
        remove: remove,
        appendChild: appendChild,
        insertBefore: insertBefore,
        removeChild: removeChild,
        before: before,
      })
      Object.defineProperty(element, 'innerHTML', {
        set: function set(htmlString) {
          var _this2 = this
          var domify = document.createElement('div')
          domify.innerHTML = htmlString
          var oldNodesIndex = this.frag.length
          Array.from(domify.childNodes).forEach(function (node) {
            _this2.appendChild(node)
          })
          domify.append.apply(domify, this.frag.splice(0, oldNodesIndex))
        },
        get: function get() {
          return ''
        },
      })
      if (parentNode) {
        Object.assign(parentNode, {
          removeChild: removeChild,
          insertBefore: insertBefore,
        })
        patchParentNode(element, parentNode)
        patchChildNodes(parentNode)
      }
      if (nextSibling) {
        patchNextSibling(element)
      }
      if (previousSibling) {
        patchNextSibling(previousSibling)
      }
    },
    unbind: function unbind(element) {
      element.remove()
    },
  }

  var Fragment = '#fragment'
  exports.FragmentComponent = void 0
  {
    exports.FragmentComponent = {
      name: 'Fragment',
      directives: {
        frag: frag,
      },
      render: function (h) {
        var _a, _b
        var vm = this
        return h(
          'div',
          {
            directives: [
              {
                name: 'frag',
              },
            ],
          },
          (_b =
            (_a = vm === null || vm === void 0 ? void 0 : vm.$scopedSlots) ===
              null || _a === void 0
              ? void 0
              : _a.default) === null || _b === void 0
            ? void 0
            : _b.call(_a, vm.$attrs)
        )
      },
    }
  }

  var compatibleCreateElement = function (tag, data, components) {
    /* istanbul ignore else */
    {
      var hInVue2_1 = _global_VueCompositionAPI_h
      var scopedSlots = components // 默认全部作为 scopedSlots 处理
      var children_1 = []
      /**
       * scopedSlots 不会映射为slots，所以这里手动映射一遍
       * 主要为了解决 slots.x 问题
       */
      Object.keys(components).forEach(function (key) {
        var func = components[key]
        // 转换为 slots 传递
        if (typeof func === 'function' && func.length === 0) {
          /**
           * func 参数为0的判断不准确，因为composition-api包了一层，导致全部为0
           * try catch 解决scoped slots 转换参数异常问题
           * */
          try {
            var child = func()
            children_1.push(
              key === 'default'
                ? child
                : hInVue2_1(exports.FragmentComponent, { slot: key }, [child])
            )
          } catch (error) {}
        }
      })
      var newData = Object.assign({}, data)
      if (Object.keys(scopedSlots).length > 0) {
        if (!newData.scopedSlots) {
          newData.scopedSlots = scopedSlots
        } else {
          newData.scopedSlots = __assign(
            __assign({}, newData.scopedSlots),
            scopedSlots
          )
        }
      }
      if (tag === Fragment) {
        if (Object.keys(newData).length === 0 && children_1.length === 1) {
          if (!Array.isArray(children_1[0])) {
            return children_1[0]
          } else if (children_1[0].length === 1) {
            return children_1[0][0]
          }
        }
        tag = exports.FragmentComponent
      }
      return hInVue2_1(tag, newData, children_1)
    }
  }

  var FormProvider$1 = _global_VueCompositionAPI_defineComponent({
    name: 'FormProvider',
    inheritAttrs: false,
    props: {
      form: {
        type: Object,
        required: true,
      },
    },
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots
      var getForm = function () {
        return props.form
      }
      var _b = __read(useAttach(getForm()), 2),
        formRef = _b[0],
        checker = _b[1]
      _global_VueCompositionAPI_watch(
        function () {
          return props.form
        },
        function () {
          return (formRef.value = checker(getForm()))
        }
      )
      _global_VueCompositionAPI_provide(FormSymbol, formRef)
      useInjectionCleaner([
        FieldSymbol,
        SchemaMarkupSymbol,
        SchemaSymbol,
        SchemaExpressionScopeSymbol,
        SchemaOptionsSymbol,
      ])
      return function () {
        return compatibleCreateElement(Fragment, { attrs: attrs }, slots)
      }
    },
  })

  var useForm = function () {
    var form = _global_VueCompositionAPI_inject(
      FormSymbol,
      _global_VueCompositionAPI_ref()
    )
    return form
  }

  var useField = function () {
    return _global_VueCompositionAPI_inject(
      FieldSymbol,
      _global_VueCompositionAPI_ref()
    )
  }

  var useFormEffects = function (effects) {
    var formRef = useForm()
    var id = Formily.Shared.uid()
    formRef.value.addEffects(id, effects)
    _global_VueCompositionAPI_onBeforeUnmount(function () {
      formRef.value.removeEffects(id)
    })
  }

  var useFieldSchema = function () {
    return _global_VueCompositionAPI_inject(
      SchemaSymbol,
      _global_VueCompositionAPI_ref()
    )
  }

  var useParentForm = function () {
    var field = useField()
    var form = useForm()
    var findObjectParent = function (field) {
      if (!field) return form.value
      if (Formily.Core.isObjectField(field)) return field
      return findObjectParent(
        field === null || field === void 0 ? void 0 : field.parent
      )
    }
    return _global_VueCompositionAPI_computed(function () {
      return findObjectParent(field.value)
    })
  }

  var FormConsumer$1 = Formily.ReactiveVue.observer(
    _global_VueCompositionAPI_defineComponent({
      name: 'FormConsumer',
      inheritAttrs: false,
      setup: function (props, _a) {
        var slots = _a.slots
        var formRef = useForm()
        return function () {
          var children = __assign({}, slots)
          if (slots.default) {
            children.default = function () {
              return slots.default({
                form: formRef.value,
              })
            }
          }
          return compatibleCreateElement(Fragment, {}, children)
        }
      },
    })
  )

  function mapProps() {
    var args = []
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i]
    }
    return function (target) {
      return Formily.ReactiveVue.observer(
        _global_VueCompositionAPI_defineComponent({
          // listeners is needed for vue2
          setup: function (props, _a) {
            var attrs = _a.attrs,
              slots = _a.slots,
              listeners = _a.listeners
            var fieldRef = useField()
            var transform = function (input, field) {
              return args.reduce(function (props, mapper) {
                if (Formily.Shared.isFn(mapper)) {
                  props = Object.assign(props, mapper(props, field))
                } else {
                  Formily.Shared.each(mapper, function (to, extract) {
                    var extractValue = Formily.Shared.FormPath.getIn(
                      field,
                      extract
                    )
                    var targetValue = Formily.Shared.isStr(to) ? to : extract
                    if (extract === 'value') {
                      if (to !== extract) {
                        delete props['value']
                      }
                    }
                    Formily.Shared.FormPath.setIn(
                      props,
                      targetValue,
                      extractValue
                    )
                  })
                }
                return props
              }, input)
            }
            return function () {
              var newAttrs = fieldRef.value
                ? transform(__assign({}, attrs), fieldRef.value)
                : __assign({}, attrs)
              return compatibleCreateElement(
                target,
                {
                  attrs: __assign({}, newAttrs),
                  on: listeners,
                },
                slots
              )
            }
          },
        })
      )
    }
  }
  function mapReadPretty(component, readPrettyProps) {
    return function (target) {
      return Formily.ReactiveVue.observer(
        _global_VueCompositionAPI_defineComponent({
          setup: function (props, _a) {
            var attrs = _a.attrs,
              slots = _a.slots,
              listeners = _a.listeners
            var fieldRef = useField()
            return function () {
              var field = fieldRef.value
              return compatibleCreateElement(
                field &&
                  !Formily.Core.isVoidField(field) &&
                  field.pattern === 'readPretty'
                  ? component
                  : target,
                {
                  attrs: __assign(__assign({}, readPrettyProps), attrs),
                  on: listeners,
                },
                slots
              )
            }
          },
        })
      )
    }
  }
  function connect(target) {
    var args = []
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i]
    }
    var Component = args.reduce(function (target, mapper) {
      return mapper(target)
    }, target)
    /* istanbul ignore else */
    var functionalComponent
    {
      var functionalComponent = {
        functional: true,
        render: function (h, context) {
          return h(Component, context.data, context.children)
        },
      }
      return _global_VueCompositionAPI_markRaw(functionalComponent)
    }
  }

  var createRawForm = function () {
    var args = []
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i]
    }
    var form = Formily.Core.createForm.apply(
      void 0,
      __spreadArray([], __read(args))
    )
    return _global_VueCompositionAPI_markRaw(form)
  }

  function isVueOptions(options) {
    if (!options) {
      return false
    }
    return (
      typeof options.template === 'string' ||
      typeof options.render === 'function' ||
      typeof options.setup === 'function'
    )
  }
  var ReactiveField = Formily.ReactiveVue.observer(
    _global_VueCompositionAPI_defineComponent({
      name: 'ReactiveField',
      props: ['field'],
      setup: function (props, _a) {
        var slots = _a.slots
        var optionsRef = _global_VueCompositionAPI_inject(
          SchemaOptionsSymbol,
          _global_VueCompositionAPI_ref(null)
        )
        var key = Math.floor(Date.now() * Math.random()).toString(16)
        var mergeChildren = function (slots, content) {
          var _a
          if (!Object.keys(slots).length && !content) return {}
          var defaultSlot = (
            slots === null || slots === void 0 ? void 0 : slots.default
          )
            ? slots === null || slots === void 0
              ? void 0
              : slots.default(props.field, props.field.form)
            : []
          if (typeof content === 'string') {
            slots['default'] = function () {
              return __spreadArray(
                __spreadArray([], __read(defaultSlot), false),
                [content]
              )
            }
          } else if (isVueOptions(content) || typeof content === 'function') {
            // scoped slot for class component
            if (
              isVueOptions(content) &&
              ((_a =
                content === null || content === void 0
                  ? void 0
                  : content.render) === null || _a === void 0
                ? void 0
                : _a.length) > 1
            ) {
              slots['default'] = function (scopedProps) {
                return __spreadArray(
                  __spreadArray([], __read(defaultSlot), false),
                  [compatibleCreateElement(content, { props: scopedProps }, {})]
                )
              }
            } else {
              slots['default'] = function () {
                return __spreadArray(
                  __spreadArray([], __read(defaultSlot), false),
                  [compatibleCreateElement(content, {}, {})]
                )
              }
            }
          } else if (content && typeof content === 'object') {
            // for named slots
            Object.keys(content).forEach(function (key) {
              var _a
              var child = content[key]
              var slot = (
                slots === null || slots === void 0 ? void 0 : slots[key]
              )
                ? slots === null || slots === void 0
                  ? void 0
                  : slots[key]()
                : []
              if (typeof child === 'string') {
                slots[key] = function () {
                  return __spreadArray(__spreadArray([], __read(slot), false), [
                    child,
                  ])
                }
              } else if (isVueOptions(child) || typeof child === 'function') {
                // scoped slot for class component
                if (
                  isVueOptions(child) &&
                  ((_a =
                    child === null || child === void 0
                      ? void 0
                      : child.render) === null || _a === void 0
                    ? void 0
                    : _a.length) > 1
                ) {
                  slots[key] = function (scopedProps) {
                    return __spreadArray(
                      __spreadArray([], __read(slot), false),
                      [
                        compatibleCreateElement(
                          child,
                          { props: scopedProps },
                          {}
                        ),
                      ]
                    )
                  }
                } else {
                  slots[key] = function () {
                    return __spreadArray(
                      __spreadArray([], __read(slot), false),
                      [compatibleCreateElement(child, {}, {})]
                    )
                  }
                }
              }
            })
          }
          return slots
        }
        return function () {
          var field = props.field
          var children = {}
          if (!field) {
            children = slots
          } else if (field.display !== 'visible') {
            children = __assign(__assign({}, slots), {
              default: function () {
                return [compatibleCreateElement('template', {}, {})]
              },
            })
          } else {
            var renderDecorator = function (childNodes) {
              var _a, _b, _c
              if (
                !((_a =
                  field === null || field === void 0
                    ? void 0
                    : field.decorator) === null || _a === void 0
                  ? void 0
                  : _a[0])
              ) {
                return {
                  default: function () {
                    return childNodes
                  },
                }
              } else {
                var decorator_1 =
                  (_c = Formily.Shared.FormPath.getIn(
                    (_b = optionsRef.value) === null || _b === void 0
                      ? void 0
                      : _b.components,
                    field.decorator[0]
                  )) !== null && _c !== void 0
                    ? _c
                    : field.decorator[0]
                var decoratorData_1 =
                  Formily.Reactive.toJS(field.decorator[1]) || {}
                var style_1 =
                  decoratorData_1 === null || decoratorData_1 === void 0
                    ? void 0
                    : decoratorData_1.style
                var classes_1 =
                  decoratorData_1 === null || decoratorData_1 === void 0
                    ? void 0
                    : decoratorData_1.class
                delete decoratorData_1.style
                delete decoratorData_1.class
                return {
                  default: function () {
                    return compatibleCreateElement(
                      decorator_1,
                      {
                        style: style_1,
                        class: classes_1,
                        attrs: __assign({}, decoratorData_1),
                      },
                      {
                        default: function () {
                          return childNodes
                        },
                      }
                    )
                  },
                }
              }
            }
            var renderComponent = function () {
              var _a, _b, _c
              if (
                !((_a =
                  field === null || field === void 0
                    ? void 0
                    : field.component) === null || _a === void 0
                  ? void 0
                  : _a[0])
              ) {
                return compatibleCreateElement(
                  Fragment,
                  {},
                  {
                    default: function () {
                      var _a
                      return (_a = slots.default) === null || _a === void 0
                        ? void 0
                        : _a.call(slots, {
                            field: props.field,
                            form: props.field.form,
                          })
                    },
                  }
                )
              }
              var component =
                (_c = Formily.Shared.FormPath.getIn(
                  (_b = optionsRef.value) === null || _b === void 0
                    ? void 0
                    : _b.components,
                  field.component[0]
                )) !== null && _c !== void 0
                  ? _c
                  : field.component[0]
              var originData = Formily.Reactive.toJS(field.component[1]) || {}
              var events = {}
              var originChange = originData['@change'] || originData['onChange']
              var originFocus = originData['@focus'] || originData['onFocus']
              var originBlur = originData['@blur'] || originData['onBlur']
              // '@xxx' has higher priority
              Object.keys(originData)
                .filter(function (key) {
                  return key.startsWith('on')
                })
                .forEach(function (eventKey) {
                  var eventName = ''
                    .concat(eventKey[2].toLowerCase())
                    .concat(eventKey.slice(3))
                  events[eventName] = originData[eventKey]
                })
              Object.keys(originData)
                .filter(function (key) {
                  return key.startsWith('@')
                })
                .forEach(function (eventKey) {
                  events[eventKey.slice(1)] = originData[eventKey]
                  delete originData[eventKey]
                })
              events.change = function () {
                var args = []
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i]
                }
                if (!Formily.Core.isVoidField(field))
                  field.onInput.apply(field, __spreadArray([], __read(args)))
                originChange === null || originChange === void 0
                  ? void 0
                  : originChange.apply(void 0, __spreadArray([], __read(args)))
              }
              events.focus = function () {
                var args = []
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i]
                }
                if (!Formily.Core.isVoidField(field))
                  field.onFocus.apply(field, __spreadArray([], __read(args)))
                originFocus === null || originFocus === void 0
                  ? void 0
                  : originFocus.apply(void 0, __spreadArray([], __read(args)))
              }
              events.blur = function () {
                var args = []
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i]
                }
                if (!Formily.Core.isVoidField(field))
                  field.onBlur.apply(field, __spreadArray([], __read(args)))
                originBlur === null || originBlur === void 0
                  ? void 0
                  : originBlur.apply(void 0, __spreadArray([], __read(args)))
              }
              var style =
                originData === null || originData === void 0
                  ? void 0
                  : originData.style
              var classes =
                originData === null || originData === void 0
                  ? void 0
                  : originData.class
              delete originData.style
              delete originData.class
              var attrs = __assign(
                __assign(
                  {
                    disabled: !Formily.Core.isVoidField(field)
                      ? field.pattern === 'disabled' ||
                        field.pattern === 'readPretty'
                      : undefined,
                    readOnly: !Formily.Core.isVoidField(field)
                      ? field.pattern === 'readOnly'
                      : undefined,
                  },
                  originData
                ),
                {
                  // toJS is used to avoid some render loop.
                  value: !Formily.Core.isVoidField(field)
                    ? Formily.Reactive.toJS(field.value)
                    : undefined,
                }
              )
              var componentData = {
                attrs: attrs,
                style: style,
                class: classes,
                on: events,
              }
              var componentChildren = mergeChildren(
                __assign({}, slots),
                field.content
              )
              return compatibleCreateElement(
                component,
                componentData,
                componentChildren
              )
            }
            children = renderDecorator([renderComponent()])
          }
          return compatibleCreateElement(Fragment, { key: key }, children)
        }
      },
    })
  )

  var getRawComponent = function (props) {
    var component = props.component,
      decorator = props.decorator
    var newComponent
    var newDecorator
    if (Array.isArray(component)) {
      newComponent = [
        _global_VueCompositionAPI_toRaw(component[0]),
        component[1],
      ]
    }
    if (Array.isArray(decorator)) {
      newDecorator = [
        _global_VueCompositionAPI_toRaw(decorator[0]),
        decorator[1],
      ]
    }
    return { component: newComponent, decorator: newDecorator }
  }

  var ArrayField$1 = Formily.ReactiveVue.observer(
    _global_VueCompositionAPI_defineComponent({
      name: 'ArrayField',
      props: {
        name: {},
        title: {},
        description: {},
        value: {},
        initialValue: {},
        basePath: {},
        decorator: Array,
        component: Array,
        display: String,
        pattern: String,
        required: {
          type: Boolean,
          default: undefined,
        },
        validateFirst: {
          type: Boolean,
          default: undefined,
        },
        hidden: {
          type: Boolean,
          default: undefined,
        },
        visible: {
          type: Boolean,
          default: undefined,
        },
        editable: {
          type: Boolean,
          default: undefined,
        },
        disabled: {
          type: Boolean,
          default: undefined,
        },
        readOnly: {
          type: Boolean,
          default: undefined,
        },
        readPretty: {
          type: Boolean,
          default: undefined,
        },
        dataSource: {},
        validator: {},
        reactions: [Array, Function],
      },
      setup: function (props, _a) {
        var slots = _a.slots
        var formRef = useForm()
        var parentRef = useField()
        var basePath = _global_VueCompositionAPI_computed(function () {
          var _a
          return props.basePath !== undefined
            ? props.basePath
            : (_a =
                parentRef === null || parentRef === void 0
                  ? void 0
                  : parentRef.value) === null || _a === void 0
            ? void 0
            : _a.address
        })
        var createField = function () {
          return formRef.value.createArrayField(
            __assign(
              __assign(__assign({}, props), { basePath: basePath.value }),
              getRawComponent(props)
            )
          )
        }
        var _b = __read(useAttach(createField()), 2),
          fieldRef = _b[0],
          checker = _b[1]
        _global_VueCompositionAPI_watch(
          function () {
            return props
          },
          function () {
            return (fieldRef.value = checker(createField()))
          },
          { deep: true }
        )
        _global_VueCompositionAPI_watch([formRef, parentRef], function () {
          return (fieldRef.value = checker(createField()))
        })
        _global_VueCompositionAPI_provide(FieldSymbol, fieldRef)
        return function () {
          var field = fieldRef.value
          var componentData = {
            props: {
              field: field,
            },
          }
          var children = __assign({}, slots)
          if (slots.default) {
            children.default = function () {
              return slots.default({
                field: field,
                form: field.form,
              })
            }
          }
          return compatibleCreateElement(ReactiveField, componentData, children)
        }
      },
    })
  )

  var ObjectField$1 = Formily.ReactiveVue.observer(
    _global_VueCompositionAPI_defineComponent({
      name: 'ObjectField',
      props: {
        name: {},
        title: {},
        description: {},
        value: {},
        initialValue: {},
        basePath: {},
        decorator: Array,
        component: Array,
        display: String,
        pattern: String,
        required: {
          type: Boolean,
          default: undefined,
        },
        validateFirst: {
          type: Boolean,
          default: undefined,
        },
        hidden: {
          type: Boolean,
          default: undefined,
        },
        visible: {
          type: Boolean,
          default: undefined,
        },
        editable: {
          type: Boolean,
          default: undefined,
        },
        disabled: {
          type: Boolean,
          default: undefined,
        },
        readOnly: {
          type: Boolean,
          default: undefined,
        },
        readPretty: {
          type: Boolean,
          default: undefined,
        },
        dataSource: {},
        validator: {},
        reactions: [Array, Function],
      },
      setup: function (props, _a) {
        var slots = _a.slots
        var formRef = useForm()
        var parentRef = useField()
        var basePath = _global_VueCompositionAPI_computed(function () {
          var _a
          return props.basePath !== undefined
            ? props.basePath
            : (_a =
                parentRef === null || parentRef === void 0
                  ? void 0
                  : parentRef.value) === null || _a === void 0
            ? void 0
            : _a.address
        })
        var createField = function () {
          return formRef.value.createObjectField(
            __assign(
              __assign(__assign({}, props), { basePath: basePath.value }),
              getRawComponent(props)
            )
          )
        }
        var _b = __read(useAttach(createField()), 2),
          fieldRef = _b[0],
          checker = _b[1]
        _global_VueCompositionAPI_watch(
          function () {
            return props
          },
          function () {
            return (fieldRef.value = checker(createField()))
          },
          { deep: true }
        )
        _global_VueCompositionAPI_watch([formRef, parentRef], function () {
          return (fieldRef.value = checker(createField()))
        })
        _global_VueCompositionAPI_provide(FieldSymbol, fieldRef)
        return function () {
          var field = fieldRef.value
          var componentData = {
            props: {
              field: field,
            },
          }
          var children = __assign({}, slots)
          if (slots.default) {
            children.default = function () {
              return slots.default({
                field: field,
                form: field.form,
              })
            }
          }
          return compatibleCreateElement(ReactiveField, componentData, children)
        }
      },
    })
  )

  var VoidField$1 = _global_VueCompositionAPI_defineComponent({
    name: 'VoidField',
    props: {
      name: {},
      title: {},
      description: {},
      basePath: {},
      decorator: Array,
      component: Array,
      display: String,
      pattern: String,
      hidden: {
        type: Boolean,
        default: undefined,
      },
      visible: {
        type: Boolean,
        default: undefined,
      },
      editable: {
        type: Boolean,
        default: undefined,
      },
      disabled: {
        type: Boolean,
        default: undefined,
      },
      readOnly: {
        type: Boolean,
        default: undefined,
      },
      readPretty: {
        type: Boolean,
        default: undefined,
      },
      reactions: [Array, Function],
    },
    setup: function (props, _a) {
      var slots = _a.slots
      var formRef = useForm()
      var parentRef = useField()
      var basePath = _global_VueCompositionAPI_computed(function () {
        var _a
        return props.basePath !== undefined
          ? props.basePath
          : (_a =
              parentRef === null || parentRef === void 0
                ? void 0
                : parentRef.value) === null || _a === void 0
          ? void 0
          : _a.address
      })
      var createField = function () {
        return formRef.value.createVoidField(
          __assign(
            __assign(__assign({}, props), { basePath: basePath.value }),
            getRawComponent(props)
          )
        )
      }
      var _b = __read(useAttach(createField()), 2),
        fieldRef = _b[0],
        checker = _b[1]
      _global_VueCompositionAPI_watch(
        function () {
          return props
        },
        function () {
          return (fieldRef.value = checker(createField()))
        },
        { deep: true }
      )
      _global_VueCompositionAPI_watch([formRef, parentRef], function () {
        return (fieldRef.value = checker(createField()))
      })
      _global_VueCompositionAPI_provide(FieldSymbol, fieldRef)
      return function () {
        var field = fieldRef.value
        var componentData = {
          props: {
            field: field,
          },
        }
        var children = __assign({}, slots)
        if (slots.default) {
          children.default = function () {
            return slots.default({
              field: field,
              form: field.form,
            })
          }
        }
        return compatibleCreateElement(ReactiveField, componentData, children)
      }
    },
  })

  var Field$1 = _global_VueCompositionAPI_defineComponent({
    name: 'Field',
    props: {
      name: {},
      title: {},
      description: {},
      value: {},
      initialValue: {},
      basePath: {},
      decorator: Array,
      component: Array,
      display: String,
      pattern: String,
      required: {
        type: Boolean,
        default: undefined,
      },
      validateFirst: {
        type: Boolean,
        default: undefined,
      },
      hidden: {
        type: Boolean,
        default: undefined,
      },
      visible: {
        type: Boolean,
        default: undefined,
      },
      editable: {
        type: Boolean,
        default: undefined,
      },
      disabled: {
        type: Boolean,
        default: undefined,
      },
      readOnly: {
        type: Boolean,
        default: undefined,
      },
      readPretty: {
        type: Boolean,
        default: undefined,
      },
      dataSource: {},
      validator: {},
      reactions: [Array, Function],
    },
    setup: function (props, _a) {
      var slots = _a.slots
      var formRef = useForm()
      var parentRef = useField()
      var basePath = _global_VueCompositionAPI_computed(function () {
        var _a
        return props.basePath !== undefined
          ? props.basePath
          : (_a =
              parentRef === null || parentRef === void 0
                ? void 0
                : parentRef.value) === null || _a === void 0
          ? void 0
          : _a.address
      })
      var createField = function () {
        return formRef.value.createField(
          __assign(
            __assign(__assign({}, props), { basePath: basePath.value }),
            getRawComponent(props)
          )
        )
      }
      var _b = __read(useAttach(createField()), 2),
        fieldRef = _b[0],
        checker = _b[1]
      _global_VueCompositionAPI_watch(
        function () {
          return props
        },
        function () {
          return (fieldRef.value = checker(createField()))
        },
        { deep: true }
      )
      _global_VueCompositionAPI_watch([formRef, parentRef], function () {
        return (fieldRef.value = checker(createField()))
      })
      _global_VueCompositionAPI_provide(FieldSymbol, fieldRef)
      return function () {
        var field = fieldRef.value
        var componentData = {
          props: {
            field: field,
          },
        }
        var children = __assign({}, slots)
        if (slots.default) {
          children.default = function () {
            return slots.default({
              field: field,
              form: field.form,
            })
          }
        }
        return compatibleCreateElement(ReactiveField, componentData, children)
      }
    },
  })

  var RecursionField$1 = Formily.ReactiveVue.observer(
    _global_VueCompositionAPI_defineComponent({
      name: 'RecursionField',
      inheritAttrs: false,
      props: {
        schema: {
          required: true,
        },
        name: [String, Number],
        basePath: {},
        onlyRenderProperties: {
          type: Boolean,
          default: undefined,
        },
        onlyRenderSelf: {
          type: Boolean,
          default: undefined,
        },
        mapProperties: {},
        filterProperties: {},
      },
      setup: function (props) {
        var parentRef = useField()
        var optionsRef = _global_VueCompositionAPI_inject(SchemaOptionsSymbol)
        var scopeRef = _global_VueCompositionAPI_inject(
          SchemaExpressionScopeSymbol
        )
        var createSchema = function (schemaProp) {
          return new Formily.JSONSchema.Schema(schemaProp)
        }
        var fieldSchemaRef = _global_VueCompositionAPI_shallowRef(
          createSchema(props.schema)
        )
        _global_VueCompositionAPI_watch(
          [
            function () {
              return props.schema
            },
          ],
          function () {
            fieldSchemaRef.value = createSchema(props.schema)
          }
        )
        var getPropsFromSchema = function (schema) {
          var _a
          return (_a =
            schema === null || schema === void 0
              ? void 0
              : schema.toFieldProps) === null || _a === void 0
            ? void 0
            : _a.call(
                schema,
                __assign(__assign({}, optionsRef.value), {
                  get scope() {
                    return __assign(
                      __assign({}, optionsRef.value.scope),
                      scopeRef.value
                    )
                  },
                })
              )
        }
        var fieldPropsRef = _global_VueCompositionAPI_shallowRef(
          getPropsFromSchema(fieldSchemaRef.value)
        )
        _global_VueCompositionAPI_watch(
          [fieldSchemaRef, optionsRef],
          function () {
            fieldPropsRef.value = getPropsFromSchema(fieldSchemaRef.value)
          }
        )
        var getBasePath = function () {
          var _a, _b
          if (props.onlyRenderProperties) {
            return (
              props.basePath ||
              ((_a =
                parentRef === null || parentRef === void 0
                  ? void 0
                  : parentRef.value) === null || _a === void 0
                ? void 0
                : _a.address.concat(props.name))
            )
          }
          return (
            props.basePath ||
            ((_b =
              parentRef === null || parentRef === void 0
                ? void 0
                : parentRef.value) === null || _b === void 0
              ? void 0
              : _b.address)
          )
        }
        _global_VueCompositionAPI_provide(SchemaSymbol, fieldSchemaRef)
        return function () {
          var basePath = getBasePath()
          var fieldProps = fieldPropsRef.value
          var renderProperties = function (field) {
            if (props.onlyRenderSelf) return
            var properties = Formily.JSONSchema.Schema.getOrderProperties(
              fieldSchemaRef.value
            )
            if (!properties.length) return
            var children = properties.map(function (_a) {
              var item = _a.schema,
                name = _a.key
              var base =
                (field === null || field === void 0 ? void 0 : field.address) ||
                basePath
              var schema = item
              if (Formily.Shared.isFn(props.mapProperties)) {
                var mapped = props.mapProperties(item, name)
                if (mapped) {
                  schema = mapped
                }
              }
              if (Formily.Shared.isFn(props.filterProperties)) {
                if (props.filterProperties(schema, name) === false) {
                  return null
                }
              }
              return compatibleCreateElement(
                RecursionField$1,
                {
                  key: name,
                  attrs: {
                    schema: schema,
                    name: name,
                    basePath: base,
                  },
                },
                {}
              )
            })
            var slots = {}
            if (children.length > 0) {
              slots.default = function () {
                return __spreadArray([], __read(children))
              }
            }
            return compatibleCreateElement(Fragment, {}, slots)
          }
          var render = function () {
            if (!Formily.Shared.isValid(props.name)) return renderProperties()
            if (fieldSchemaRef.value.type === 'object') {
              if (props.onlyRenderProperties) return renderProperties()
              return compatibleCreateElement(
                ObjectField$1,
                {
                  attrs: __assign(__assign({}, fieldProps), {
                    name: props.name,
                    basePath: basePath,
                  }),
                },
                {
                  default: function (_a) {
                    var field = _a.field
                    return [renderProperties(field)]
                  },
                }
              )
            } else if (fieldSchemaRef.value.type === 'array') {
              return compatibleCreateElement(
                ArrayField$1,
                {
                  attrs: __assign(__assign({}, fieldProps), {
                    name: props.name,
                    basePath: basePath,
                  }),
                },
                {}
              )
            } else if (fieldSchemaRef.value.type === 'void') {
              if (props.onlyRenderProperties) return renderProperties()
              return compatibleCreateElement(
                VoidField$1,
                {
                  attrs: __assign(__assign({}, fieldProps), {
                    name: props.name,
                    basePath: basePath,
                  }),
                },
                {
                  default: function (_a) {
                    var field = _a.field
                    return [renderProperties(field)]
                  },
                }
              )
            }
            return compatibleCreateElement(
              Field$1,
              {
                attrs: __assign(__assign({}, fieldProps), {
                  name: props.name,
                  basePath: basePath,
                }),
              },
              {}
            )
          }
          if (!fieldSchemaRef.value) return
          return render()
        }
      },
    })
  )

  var resolveSchemaProps = function (props) {
    var newProps = {}
    Object.keys(props).forEach(function (key) {
      if (key.indexOf('x') === 0 && key.indexOf('x-') === -1) {
        newProps[Formily.Shared.paramCase(key)] = props[key]
      } else {
        newProps[key] = props[key]
      }
    })
    return newProps
  }

  var env = {
    nonameId: 0,
  }
  var getRandomName = function () {
    return 'NO_NAME_FIELD_$'.concat(env.nonameId++)
  }
  var markupProps = {
    version: String,
    name: [String, Number],
    title: {},
    description: {},
    default: {},
    readOnly: {
      type: Boolean,
      default: undefined,
    },
    writeOnly: {
      type: Boolean,
      default: undefined,
    },
    enum: {},
    const: {},
    multipleOf: Number,
    maximum: Number,
    exclusiveMaximum: Number,
    minimum: Number,
    exclusiveMinimum: Number,
    maxLength: Number,
    minLength: Number,
    pattern: {},
    maxItems: Number,
    minItems: Number,
    uniqueItems: {
      type: Boolean,
      default: undefined,
    },
    maxProperties: Number,
    minProperties: Number,
    required: {
      type: [Boolean, Array, String],
      default: undefined,
    },
    format: String,
    properties: {},
    items: {},
    additionalItems: {},
    patternProperties: {},
    additionalProperties: {},
    xIndex: Number,
    xPattern: {},
    xDisplay: {},
    xValidator: {},
    xDecorator: {},
    xDecoratorProps: {},
    xComponent: {},
    xComponentProps: {},
    xReactions: {},
    xContent: {},
    xVisible: {
      type: Boolean,
      default: undefined,
    },
    xHidden: {
      type: Boolean,
      default: undefined,
    },
    xDisabled: {
      type: Boolean,
      default: undefined,
    },
    xEditable: {
      type: Boolean,
      default: undefined,
    },
    xReadOnly: {
      type: Boolean,
      default: undefined,
    },
    xReadPretty: {
      type: Boolean,
      default: undefined,
    },
  }
  function createSchemaField$1(options) {
    var SchemaField = _global_VueCompositionAPI_defineComponent({
      name: 'SchemaField',
      inheritAttrs: false,
      props: {
        schema: {},
        scope: {},
        components: {},
        basePath: {},
        title: {},
        description: {},
        value: {},
        initialValue: {},
        validator: {},
        dataSource: {},
        name: [String, Number],
        decorator: Array,
        component: Array,
        reactions: Array,
        display: String,
        pattern: String,
        required: {
          type: Boolean,
          default: undefined,
        },
        validateFirst: {
          type: Boolean,
          default: undefined,
        },
        hidden: {
          type: Boolean,
          default: undefined,
        },
        visible: {
          type: Boolean,
          default: undefined,
        },
        editable: {
          type: Boolean,
          default: undefined,
        },
        disabled: {
          type: Boolean,
          default: undefined,
        },
        readOnly: {
          type: Boolean,
          default: undefined,
        },
        readPretty: {
          type: Boolean,
          default: undefined,
        },
      },
      setup: function (props, _a) {
        var slots = _a.slots
        var schemaRef = _global_VueCompositionAPI_computed(function () {
          return Formily.JSONSchema.Schema.isSchemaInstance(props.schema)
            ? props.schema
            : new Formily.JSONSchema.Schema(
                __assign({ type: 'object' }, props.schema)
              )
        })
        var scopeRef = _global_VueCompositionAPI_computed(function () {
          return __assign(__assign({}, options.scope), props.scope)
        })
        var optionsRef = _global_VueCompositionAPI_computed(function () {
          return __assign(__assign({}, options), {
            components: __assign(
              __assign({}, options.components),
              props.components
            ),
          })
        })
        _global_VueCompositionAPI_provide(SchemaMarkupSymbol, schemaRef)
        _global_VueCompositionAPI_provide(SchemaOptionsSymbol, optionsRef)
        _global_VueCompositionAPI_provide(SchemaExpressionScopeSymbol, scopeRef)
        return function () {
          env.nonameId = 0
          return compatibleCreateElement(
            Fragment,
            {},
            {
              default: function () {
                var children = []
                if (slots.default) {
                  children.push(
                    compatibleCreateElement(
                      'template',
                      {},
                      {
                        default: function () {
                          return slots.default()
                        },
                      }
                    )
                  )
                }
                children.push(
                  compatibleCreateElement(
                    RecursionField$1,
                    {
                      attrs: __assign(__assign({}, props), {
                        schema: schemaRef.value,
                      }),
                    },
                    {}
                  )
                )
                return children
              },
            }
          )
        }
      },
    })
    var MarkupField = _global_VueCompositionAPI_defineComponent({
      name: 'MarkupField',
      props: Object.assign({}, markupProps, { type: String }),
      setup: function (props, _a) {
        var slots = _a.slots
        var parentRef = _global_VueCompositionAPI_inject(
          SchemaMarkupSymbol,
          null
        )
        if (!parentRef || !parentRef.value)
          return function () {
            return compatibleCreateElement(Fragment, {}, {})
          }
        var resolvedProps = resolveSchemaProps(props)
        var name = props.name || getRandomName()
        var appendArraySchema = function (schema) {
          if (parentRef.value.items) {
            return parentRef.value.addProperty(name, schema)
          } else {
            return parentRef.value.setItems(resolvedProps)
          }
        }
        var schemaRef = _global_VueCompositionAPI_shallowRef(null)
        _global_VueCompositionAPI_watch(
          parentRef,
          function () {
            if (
              parentRef.value.type === 'object' ||
              parentRef.value.type === 'void'
            ) {
              schemaRef.value = parentRef.value.addProperty(name, resolvedProps)
            } else if (parentRef.value.type === 'array') {
              var schema = appendArraySchema(resolvedProps)
              schemaRef.value = Array.isArray(schema) ? schema[0] : schema
            }
          },
          { immediate: true }
        )
        _global_VueCompositionAPI_provide(SchemaMarkupSymbol, schemaRef)
        return function () {
          var children = {}
          if (slots.default) {
            children.default = function () {
              return slots.default()
            }
          }
          return compatibleCreateElement(Fragment, {}, children)
        }
      },
    })
    var SchemaFieldFactory = function (type, name) {
      return _global_VueCompositionAPI_defineComponent({
        name: name,
        props: Object.assign({}, markupProps),
        setup: function (props, _a) {
          var slots = _a.slots
          return function () {
            return compatibleCreateElement(
              MarkupField,
              {
                attrs: __assign(__assign({}, props), { type: type }),
              },
              slots
            )
          }
        },
      })
    }
    return {
      SchemaField: SchemaField,
      SchemaMarkupField: MarkupField,
      SchemaStringField: SchemaFieldFactory('string', 'SchemaStringField'),
      SchemaObjectField: SchemaFieldFactory('object', 'SchemaObjectField'),
      SchemaArrayField: SchemaFieldFactory('array', 'SchemaArrayField'),
      SchemaBooleanField: SchemaFieldFactory('boolean', 'SchemaBooleanField'),
      SchemaDateField: SchemaFieldFactory('date', 'SchemaDateField'),
      SchemaDateTimeField: SchemaFieldFactory(
        'datetime',
        'SchemaDatetimeField'
      ),
      SchemaVoidField: SchemaFieldFactory('void', 'SchemaVoidField'),
      SchemaNumberField: SchemaFieldFactory('number', 'SchemaNumberField'),
    }
  }

  var _Field = Field$1,
    _ArrayField = ArrayField$1,
    _FormConsumer = FormConsumer$1,
    _FormProvider = FormProvider$1,
    _ObjectField = ObjectField$1,
    _RecursionField = RecursionField$1,
    _VoidField = VoidField$1,
    _createSchemaField = createSchemaField$1
  var Field = _Field
  var ArrayField = _ArrayField
  var ObjectField = _ObjectField
  var VoidField = _VoidField
  var RecursionField = _RecursionField
  var FormConsumer = _FormConsumer
  var FormProvider = _FormProvider
  var createSchemaField = _createSchemaField

  var vue2Components = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Field: Field,
    ArrayField: ArrayField,
    ObjectField: ObjectField,
    VoidField: VoidField,
    RecursionField: RecursionField,
    FormConsumer: FormConsumer,
    FormProvider: FormProvider,
    createSchemaField: createSchemaField,
  })

  exports.ArrayField = ArrayField$1
  exports.Field = Field$1
  exports.FieldSymbol = FieldSymbol
  exports.FormConsumer = FormConsumer$1
  exports.FormProvider = FormProvider$1
  exports.FormSymbol = FormSymbol
  exports.Fragment = Fragment
  exports.ObjectField = ObjectField$1
  exports.RecursionField = RecursionField$1
  exports.Schema = Schema
  exports.SchemaExpressionScopeSymbol = SchemaExpressionScopeSymbol
  exports.SchemaMarkupSymbol = SchemaMarkupSymbol
  exports.SchemaOptionsSymbol = SchemaOptionsSymbol
  exports.SchemaSymbol = SchemaSymbol
  exports.VoidField = VoidField$1
  exports.Vue2Components = vue2Components
  exports.connect = connect
  exports.createForm = createRawForm
  exports.createSchemaField = createSchemaField$1
  exports.h = compatibleCreateElement
  exports.mapProps = mapProps
  exports.mapReadPretty = mapReadPretty
  exports.useField = useField
  exports.useFieldSchema = useFieldSchema
  exports.useForm = useForm
  exports.useFormEffects = useFormEffects
  exports.useParentForm = useParentForm

  Object.defineProperty(exports, '__esModule', { value: true })
})
//# sourceMappingURL=formily.vue.umd.development.js.map
