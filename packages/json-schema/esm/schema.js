import { map, each, isFn, instOf, FormPath, isStr } from '@formily/shared'
import { compile, silent, shallowCompile, registerCompiler } from './compiler'
import { transformFieldProps } from './transformer'
import {
  reducePatches,
  registerPatches,
  registerPolyfills,
  enablePolyfills,
} from './patches'
import {
  registerVoidComponents,
  registerTypeDefaultComponents,
} from './polyfills'
import { SchemaNestedMap } from './shared'
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
      if (!ref || !_this.root || !isStr(ref)) return
      if (ref.indexOf('#/') !== 0) return
      return FormPath.getIn(_this.root, ref.substring(2).split('/'))
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
      each(_this, function (value, key) {
        if (isFn(value) && !key.includes('x-')) return
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
      each(reducePatches(json), function (value, key) {
        if (isFn(value) && !key.includes('x-')) return
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
      each(_this, function (value, key) {
        var _a, _b
        if (
          (isFn(value) && !key.includes('x-')) ||
          key === 'parent' ||
          key === 'root'
        )
          return
        if (key === 'properties' || key === 'patternProperties') {
          if (!recursion) return
          results[key] = map(value, function (item) {
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
    return instOf(value, Schema)
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
export { Schema }
//# sourceMappingURL=schema.js.map
