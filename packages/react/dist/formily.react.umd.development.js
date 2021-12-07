;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('react-is'))
    : typeof define === 'function' && define.amd
    ? define('formily.react', ['exports', 'react-is'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        ((global.Formily = global.Formily || {}), (global.Formily.React = {}))
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

  var useAttach = function (target) {
    var oldTargetRef = React.useRef(null)
    React.useEffect(
      function () {
        if (oldTargetRef.current && target !== oldTargetRef.current) {
          oldTargetRef.current.onUnmount()
        }
        oldTargetRef.current = target
        target.onMount()
        return function () {
          target.onUnmount()
        }
      },
      [target]
    )
    return target
  }

  var createContextCleaner = function () {
    var contexts = []
    for (var _i = 0; _i < arguments.length; _i++) {
      contexts[_i] = arguments[_i]
    }
    return function (_a) {
      var children = _a.children
      return contexts.reduce(function (buf, ctx) {
        return React.createElement(ctx.Provider, { value: undefined }, buf)
      }, children)
    }
  }
  var FormContext = React.createContext(null)
  var FieldContext = React.createContext(null)
  var SchemaMarkupContext = React.createContext(null)
  var SchemaContext = React.createContext(null)
  var SchemaExpressionScopeContext = React.createContext(null)
  var SchemaOptionsContext = React.createContext(null)
  var ContextCleaner = createContextCleaner(
    FieldContext,
    SchemaMarkupContext,
    SchemaContext,
    SchemaExpressionScopeContext,
    SchemaOptionsContext
  )

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

  var useForm = function () {
    return React.useContext(FormContext)
  }

  var useField = function () {
    return React.useContext(FieldContext)
  }

  var useParentForm = function () {
    var field = useField()
    var form = useForm()
    var findObjectParent = function (field) {
      if (!field) return form
      if (Formily.Core.isObjectField(field)) return field
      return findObjectParent(
        field === null || field === void 0 ? void 0 : field.parent
      )
    }
    return findObjectParent(field)
  }

  var useFieldSchema = function () {
    return React.useContext(SchemaContext)
  }

  var useFormEffects = function (effects) {
    var form = useForm()
    var ref = React.useMemo(function () {
      var id = Formily.Shared.uid()
      form.addEffects(id, effects)
      var request = setTimeout(function () {
        form.removeEffects(id)
      }, 100)
      return { id: id, request: request }
    }, [])
    React.useLayoutEffect(function () {
      clearTimeout(ref.request)
      return function () {
        form.removeEffects(ref.id)
      }
    }, [])
  }

  const _global_ReactIs = ReactIs

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true,
  }
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true,
  }
  var FORWARD_REF_STATICS = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
  }
  var MEMO_STATICS = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true,
  }
  var TYPE_STATICS = {}
  TYPE_STATICS[_global_ReactIs.ForwardRef] = FORWARD_REF_STATICS
  TYPE_STATICS[_global_ReactIs.Memo] = MEMO_STATICS

  function getStatics(component) {
    // React v16.11 and below
    if (_global_ReactIs.isMemo(component)) {
      return MEMO_STATICS
    } // React v16.12 and above

    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS
  }

  var defineProperty = Object.defineProperty
  var getOwnPropertyNames = Object.getOwnPropertyNames
  var getOwnPropertySymbols = Object.getOwnPropertySymbols
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
  var getPrototypeOf = Object.getPrototypeOf
  var objectPrototype = Object.prototype
  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
      // don't hoist over string (html) components
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent)

        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist)
        }
      }

      var keys = getOwnPropertyNames(sourceComponent)

      if (getOwnPropertySymbols) {
        keys = keys.concat(getOwnPropertySymbols(sourceComponent))
      }

      var targetStatics = getStatics(targetComponent)
      var sourceStatics = getStatics(sourceComponent)

      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i]

        if (
          !KNOWN_STATICS[key] &&
          !(blacklist && blacklist[key]) &&
          !(sourceStatics && sourceStatics[key]) &&
          !(targetStatics && targetStatics[key])
        ) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key)

          try {
            // Avoid failures from read-only properties
            defineProperty(targetComponent, key, descriptor)
          } catch (e) {}
        }
      }
    }

    return targetComponent
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics

  function mapProps() {
    var args = []
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i]
    }
    return function (target) {
      return Formily.ReactiveReact.observer(
        function (props) {
          var field = useField()
          var results = args.reduce(function (props, mapper) {
            if (Formily.Shared.isFn(mapper)) {
              props = Object.assign(props, mapper(props, field))
            } else {
              Formily.Shared.each(mapper, function (to, extract) {
                var extractValue = Formily.Shared.FormPath.getIn(field, extract)
                var targetValue = Formily.Shared.isStr(to) ? to : extract
                var originalValue = Formily.Shared.FormPath.getIn(
                  props,
                  targetValue
                )
                if (extract === 'value') {
                  if (to !== extract) {
                    delete props.value
                  }
                }
                if (
                  Formily.Shared.isValid(originalValue) &&
                  !Formily.Shared.isValid(extractValue)
                )
                  return
                Formily.Shared.FormPath.setIn(props, targetValue, extractValue)
              })
            }
            return props
          }, __assign({}, props))
          return React.createElement(target, results)
        },
        {
          forwardRef: true,
        }
      )
    }
  }
  function mapReadPretty(component, readPrettyProps) {
    return function (target) {
      return Formily.ReactiveReact.observer(
        function (props) {
          var field = useField()
          if (
            !Formily.Core.isVoidField(field) &&
            (field === null || field === void 0 ? void 0 : field.pattern) ===
              'readPretty'
          ) {
            return React.createElement(
              component,
              __assign(__assign({}, readPrettyProps), props)
            )
          }
          return React.createElement(target, props)
        },
        {
          forwardRef: true,
        }
      )
    }
  }
  function connect(target) {
    var args = []
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i]
    }
    var Target = args.reduce(function (target, mapper) {
      return mapper(target)
    }, target)
    var Destination = React.forwardRef(function (props, ref) {
      return React.createElement(
        Target,
        __assign(__assign({}, props), { ref: ref })
      )
    })
    if (target) hoistNonReactStatics_cjs(Destination, target)
    return Destination
  }
  const _global_Formily_ReactiveReact_observer = Formily.ReactiveReact.observer
  const _global_Formily_ReactiveReact_Observer = Formily.ReactiveReact.Observer

  var FormProvider = function (props) {
    var form = useAttach(props.form)
    return React.createElement(
      ContextCleaner,
      null,
      React.createElement(FormContext.Provider, { value: form }, props.children)
    )
  }
  FormProvider.displayName = 'FormProvider'

  var FormConsumer = Formily.ReactiveReact.observer(function (props) {
    var children = Formily.Shared.isFn(props.children)
      ? props.children(useForm())
      : null
    return React.createElement(React.Fragment, null, children)
  })
  FormConsumer.displayName = 'FormConsumer'

  var mergeChildren = function (children, content) {
    if (!children && !content) return
    return React.createElement(React.Fragment, null, children, content)
  }
  var renderChildren = function (children) {
    var args = []
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i]
    }
    return Formily.Shared.isFn(children)
      ? children.apply(void 0, __spreadArray([], __read(args)))
      : children
  }
  var ReactiveInternal = function (props) {
    var _a
    var options = React.useContext(SchemaOptionsContext)
    if (!props.field) {
      return React.createElement(
        React.Fragment,
        null,
        renderChildren(props.children)
      )
    }
    var field = props.field
    var content = mergeChildren(
      renderChildren(props.children, field, field.form),
      (_a = field.content) !== null && _a !== void 0
        ? _a
        : field.component[1].children
    )
    if (field.display !== 'visible') return null
    var renderDecorator = function (children) {
      var _a
      if (!field.decorator[0]) {
        return React.createElement(React.Fragment, null, children)
      }
      var finalComponent =
        (_a = Formily.Shared.FormPath.getIn(
          options === null || options === void 0 ? void 0 : options.components,
          field.decorator[0]
        )) !== null && _a !== void 0
          ? _a
          : field.decorator[0]
      return React.createElement(
        finalComponent,
        Formily.Reactive.toJS(field.decorator[1]),
        children
      )
    }
    var renderComponent = function () {
      var _a, _b, _c, _d
      if (!field.component[0]) return content
      var value = !Formily.Core.isVoidField(field) ? field.value : undefined
      var onChange = !Formily.Core.isVoidField(field)
        ? function () {
            var _a, _b
            var args = []
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i]
            }
            field.onInput.apply(field, __spreadArray([], __read(args)))
            ;(_b =
              (_a = field.component[1]) === null || _a === void 0
                ? void 0
                : _a.onChange) === null || _b === void 0
              ? void 0
              : _b.call.apply(_b, __spreadArray([_a], __read(args)))
          }
        : (_a = field.component[1]) === null || _a === void 0
        ? void 0
        : _a.onChange
      var onFocus = !Formily.Core.isVoidField(field)
        ? function () {
            var _a, _b
            var args = []
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i]
            }
            field.onFocus.apply(field, __spreadArray([], __read(args)))
            ;(_b =
              (_a = field.component[1]) === null || _a === void 0
                ? void 0
                : _a.onFocus) === null || _b === void 0
              ? void 0
              : _b.call.apply(_b, __spreadArray([_a], __read(args)))
          }
        : (_b = field.component[1]) === null || _b === void 0
        ? void 0
        : _b.onFocus
      var onBlur = !Formily.Core.isVoidField(field)
        ? function () {
            var _a, _b
            var args = []
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i]
            }
            field.onBlur.apply(field, __spreadArray([], __read(args)))
            ;(_b =
              (_a = field.component[1]) === null || _a === void 0
                ? void 0
                : _a.onBlur) === null || _b === void 0
              ? void 0
              : _b.call.apply(_b, __spreadArray([_a], __read(args)))
          }
        : (_c = field.component[1]) === null || _c === void 0
        ? void 0
        : _c.onBlur
      var disabled = !Formily.Core.isVoidField(field)
        ? field.pattern === 'disabled' || field.pattern === 'readPretty'
        : undefined
      var readOnly = !Formily.Core.isVoidField(field)
        ? field.pattern === 'readOnly'
        : undefined
      var finalComponent =
        (_d = Formily.Shared.FormPath.getIn(
          options === null || options === void 0 ? void 0 : options.components,
          field.component[0]
        )) !== null && _d !== void 0
          ? _d
          : field.component[0]
      return React.createElement(
        finalComponent,
        __assign(
          __assign(
            { disabled: disabled, readOnly: readOnly },
            Formily.Reactive.toJS(field.component[1])
          ),
          { value: value, onChange: onChange, onFocus: onFocus, onBlur: onBlur }
        ),
        content
      )
    }
    return renderDecorator(renderComponent())
  }
  ReactiveInternal.displayName = 'ReactiveField'
  var ReactiveField = Formily.ReactiveReact.observer(ReactiveInternal, {
    forwardRef: true,
  })

  var ArrayField = function (props) {
    var form = useForm()
    var parent = useField()
    var field = useAttach(
      form.createArrayField(
        __assign(
          {
            basePath:
              parent === null || parent === void 0 ? void 0 : parent.address,
          },
          props
        )
      )
    )
    return React.createElement(
      FieldContext.Provider,
      { value: field },
      React.createElement(ReactiveField, { field: field }, props.children)
    )
  }
  ArrayField.displayName = 'ArrayField'

  var ObjectField = function (props) {
    var form = useForm()
    var parent = useField()
    var field = useAttach(
      form.createObjectField(
        __assign(
          {
            basePath:
              parent === null || parent === void 0 ? void 0 : parent.address,
          },
          props
        )
      )
    )
    return React.createElement(
      FieldContext.Provider,
      { value: field },
      React.createElement(ReactiveField, { field: field }, props.children)
    )
  }
  ObjectField.displayName = 'ObjectField'

  var VoidField = function (props) {
    var form = useForm()
    var parent = useField()
    var field = useAttach(
      form.createVoidField(
        __assign(
          {
            basePath:
              parent === null || parent === void 0 ? void 0 : parent.address,
          },
          props
        )
      )
    )
    return React.createElement(
      FieldContext.Provider,
      { value: field },
      React.createElement(ReactiveField, { field: field }, props.children)
    )
  }
  VoidField.displayName = 'VoidField'

  var Field = function (props) {
    var form = useForm()
    var parent = useField()
    var field = useAttach(
      form.createField(
        __assign(
          {
            basePath:
              parent === null || parent === void 0 ? void 0 : parent.address,
          },
          props
        )
      )
    )
    return React.createElement(
      FieldContext.Provider,
      { value: field },
      React.createElement(ReactiveField, { field: field }, props.children)
    )
  }
  Field.displayName = 'Field'

  var useFieldProps = function (schema) {
    var options = React.useContext(SchemaOptionsContext)
    var scope = React.useContext(SchemaExpressionScopeContext)
    var scopeRef = React.useRef()
    scopeRef.current = scope
    return schema.toFieldProps(
      __assign(__assign({}, options), {
        get scope() {
          return __assign(__assign({}, options.scope), scopeRef.current)
        },
      })
    )
  }
  var useBasePath = function (props) {
    var parent = useField()
    if (props.onlyRenderProperties) {
      return (
        props.basePath ||
        (parent === null || parent === void 0
          ? void 0
          : parent.address.concat(props.name))
      )
    }
    return (
      props.basePath ||
      (parent === null || parent === void 0 ? void 0 : parent.address)
    )
  }
  var RecursionField = function (props) {
    var basePath = useBasePath(props)
    var fieldSchema = React.useMemo(
      function () {
        return new Formily.JSONSchema.Schema(props.schema)
      },
      [props.schema]
    )
    var fieldProps = useFieldProps(fieldSchema)
    var renderProperties = function (field) {
      if (props.onlyRenderSelf) return
      var properties = Formily.JSONSchema.Schema.getOrderProperties(fieldSchema)
      if (!properties.length) return
      return React.createElement(
        React.Fragment,
        null,
        properties.map(function (_a, index) {
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
          return React.createElement(RecursionField, {
            schema: schema,
            key: ''.concat(index, '-').concat(name),
            name: name,
            basePath: base,
          })
        })
      )
    }
    var render = function () {
      if (!Formily.Shared.isValid(props.name)) return renderProperties()
      if (fieldSchema.type === 'object') {
        if (props.onlyRenderProperties) return renderProperties()
        return React.createElement(
          ObjectField,
          __assign({}, fieldProps, { name: props.name, basePath: basePath }),
          renderProperties
        )
      } else if (fieldSchema.type === 'array') {
        return React.createElement(
          ArrayField,
          __assign({}, fieldProps, { name: props.name, basePath: basePath })
        )
      } else if (fieldSchema.type === 'void') {
        if (props.onlyRenderProperties) return renderProperties()
        return React.createElement(
          VoidField,
          __assign({}, fieldProps, { name: props.name, basePath: basePath }),
          renderProperties
        )
      }
      return React.createElement(
        Field,
        __assign({}, fieldProps, { name: props.name, basePath: basePath })
      )
    }
    if (!fieldSchema) return React.createElement(React.Fragment, null)
    return React.createElement(
      SchemaContext.Provider,
      { value: fieldSchema },
      render()
    )
  }

  var env$1 = {
    portalDOM: null,
  }
  var render = function (element) {
    if (Formily.Shared.globalThisPolyfill['document']) {
      env$1.portalDOM =
        env$1.portalDOM ||
        Formily.Shared.globalThisPolyfill['document'].createElement('div')
      return ReactDOM.createPortal(element, env$1.portalDOM)
    } else {
      return React.createElement('template', {}, element)
    }
  }

  var env = {
    nonameId: 0,
  }
  var getRandomName = function () {
    return 'NO_NAME_FIELD_$'.concat(env.nonameId++)
  }
  function createSchemaField(options) {
    if (options === void 0) {
      options = {}
    }
    function SchemaField(props) {
      var schema = Formily.JSONSchema.Schema.isSchemaInstance(props.schema)
        ? props.schema
        : new Formily.JSONSchema.Schema(
            __assign({ type: 'object' }, props.schema)
          )
      var renderMarkup = function () {
        env.nonameId = 0
        if (props.schema) return null
        return render(
          React.createElement(
            SchemaMarkupContext.Provider,
            { value: schema },
            props.children
          )
        )
      }
      var renderChildren = function () {
        return React.createElement(
          RecursionField,
          __assign({}, props, { schema: schema })
        )
      }
      return React.createElement(
        SchemaOptionsContext.Provider,
        {
          value: __assign(__assign({}, options), {
            components: __assign(
              __assign({}, options.components),
              props.components
            ),
          }),
        },
        React.createElement(
          SchemaExpressionScopeContext.Provider,
          { value: __assign(__assign({}, options.scope), props.scope) },
          renderMarkup(),
          renderChildren()
        )
      )
    }
    SchemaField.displayName = 'SchemaField'
    function MarkupField(props) {
      var parent = React.useContext(SchemaMarkupContext)
      if (!parent) return React.createElement(React.Fragment, null)
      var renderChildren = function () {
        return React.createElement(React.Fragment, null, props.children)
      }
      var appendArraySchema = function (schema) {
        if (parent.items) {
          return parent.addProperty(name, schema)
        } else {
          return parent.setItems(props)
        }
      }
      var name = props.name || getRandomName()
      if (parent.type === 'object' || parent.type === 'void') {
        var schema = parent.addProperty(name, props)
        return React.createElement(
          SchemaMarkupContext.Provider,
          { value: schema },
          renderChildren()
        )
      } else if (parent.type === 'array') {
        var schema = appendArraySchema(props)
        return React.createElement(
          SchemaMarkupContext.Provider,
          { value: Array.isArray(schema) ? schema[0] : schema },
          props.children
        )
      } else {
        return renderChildren()
      }
    }
    MarkupField.displayName = 'MarkupField'
    function StringField(props) {
      return React.createElement(
        MarkupField,
        __assign({}, props, { type: 'string' })
      )
    }
    StringField.displayName = 'StringField'
    function ObjectField(props) {
      return React.createElement(
        MarkupField,
        __assign({}, props, { type: 'object' })
      )
    }
    ObjectField.displayName = 'ObjectField'
    function ArrayField(props) {
      return React.createElement(
        MarkupField,
        __assign({}, props, { type: 'array' })
      )
    }
    ArrayField.displayName = 'ArrayField'
    function BooleanField(props) {
      return React.createElement(
        MarkupField,
        __assign({}, props, { type: 'boolean' })
      )
    }
    BooleanField.displayName = 'BooleanField'
    function NumberField(props) {
      return React.createElement(
        MarkupField,
        __assign({}, props, { type: 'number' })
      )
    }
    NumberField.displayName = 'NumberField'
    function DateField(props) {
      return React.createElement(
        MarkupField,
        __assign({}, props, { type: 'date' })
      )
    }
    DateField.displayName = 'DateField'
    function DateTimeField(props) {
      return React.createElement(
        MarkupField,
        __assign({}, props, { type: 'datetime' })
      )
    }
    DateTimeField.displayName = 'DateTimeField'
    function VoidField(props) {
      return React.createElement(
        MarkupField,
        __assign({}, props, { type: 'void' })
      )
    }
    VoidField.displayName = 'VoidField'
    SchemaField.Markup = MarkupField
    SchemaField.String = StringField
    SchemaField.Object = ObjectField
    SchemaField.Array = ArrayField
    SchemaField.Boolean = BooleanField
    SchemaField.Date = DateField
    SchemaField.DateTime = DateTimeField
    SchemaField.Void = VoidField
    SchemaField.Number = NumberField
    return SchemaField
  }

  exports.ArrayField = ArrayField
  exports.ContextCleaner = ContextCleaner
  exports.Field = Field
  exports.FieldContext = FieldContext
  exports.FormConsumer = FormConsumer
  exports.FormContext = FormContext
  exports.FormProvider = FormProvider
  exports.ObjectField = ObjectField
  exports.Observer = _global_Formily_ReactiveReact_Observer
  exports.RecursionField = RecursionField
  exports.Schema = Schema
  exports.SchemaContext = SchemaContext
  exports.SchemaExpressionScopeContext = SchemaExpressionScopeContext
  exports.SchemaMarkupContext = SchemaMarkupContext
  exports.SchemaOptionsContext = SchemaOptionsContext
  exports.VoidField = VoidField
  exports.connect = connect
  exports.createSchemaField = createSchemaField
  exports.mapProps = mapProps
  exports.mapReadPretty = mapReadPretty
  exports.observer = _global_Formily_ReactiveReact_observer
  exports.useField = useField
  exports.useFieldSchema = useFieldSchema
  exports.useForm = useForm
  exports.useFormEffects = useFormEffects
  exports.useParentForm = useParentForm

  Object.defineProperty(exports, '__esModule', { value: true })
})
//# sourceMappingURL=formily.react.umd.development.js.map
