'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Schema = void 0
var shared_1 = require('@formily/shared')
var compiler_1 = require('./compiler')
var transformer_1 = require('./transformer')
var patches_1 = require('./patches')
var polyfills_1 = require('./polyfills')
var shared_2 = require('./shared')
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
      if (!ref || !_this.root || !(0, shared_1.isStr)(ref)) return
      if (ref.indexOf('#/') !== 0) return
      return shared_1.FormPath.getIn(_this.root, ref.substring(2).split('/'))
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
      ;(0, shared_1.each)(_this, function (value, key) {
        if ((0, shared_1.isFn)(value) && !key.includes('x-')) return
        if (key === 'parent' || key === 'root') return
        if (!shared_2.SchemaNestedMap[key]) {
          schema[key] = value ? (0, compiler_1.compile)(value, scope) : value
        } else {
          schema[key] = value
            ? (0, compiler_1.shallowCompile)(value, scope)
            : value
        }
      })
      return schema
    }
    this.fromJSON = function (json) {
      if (!json) return _this
      if (Schema.isSchemaInstance(json)) return json
      ;(0, shared_1.each)(
        (0, patches_1.reducePatches)(json),
        function (value, key) {
          if ((0, shared_1.isFn)(value) && !key.includes('x-')) return
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
        }
      )
      return _this
    }
    this.toJSON = function (recursion) {
      if (recursion === void 0) {
        recursion = true
      }
      var results = {}
      ;(0, shared_1.each)(_this, function (value, key) {
        var _a, _b
        if (
          ((0, shared_1.isFn)(value) && !key.includes('x-')) ||
          key === 'parent' ||
          key === 'root'
        )
          return
        if (key === 'properties' || key === 'patternProperties') {
          if (!recursion) return
          results[key] = (0, shared_1.map)(value, function (item) {
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
                value === null || value === void 0 ? void 0 : value.toJSON) ===
                null || _b === void 0
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
      return (0, transformer_1.transformFieldProps)(_this, options)
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
    return (0, compiler_1.compile)(expression, scope)
  }
  Schema.shallowCompile = function (expression, scope) {
    return (0, compiler_1.shallowCompile)(expression, scope)
  }
  Schema.isSchemaInstance = function (value) {
    return (0, shared_1.instOf)(value, Schema)
  }
  Schema.registerCompiler = compiler_1.registerCompiler
  Schema.registerPatches = patches_1.registerPatches
  Schema.registerVoidComponents = polyfills_1.registerVoidComponents
  Schema.registerTypeDefaultComponents =
    polyfills_1.registerTypeDefaultComponents
  Schema.registerPolyfills = patches_1.registerPolyfills
  Schema.enablePolyfills = patches_1.enablePolyfills
  Schema.silent = compiler_1.silent
  return Schema
})()
exports.Schema = Schema
//# sourceMappingURL=schema.js.map
