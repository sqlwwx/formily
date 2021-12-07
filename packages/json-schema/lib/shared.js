'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.patchStateFormSchema =
  exports.createDataSource =
  exports.isNoNeedCompileObject =
  exports.traverseSchema =
  exports.traverse =
  exports.hasOwnProperty =
  exports.SchemaValidatorKeys =
  exports.SchemaNormalKeys =
  exports.SchemaValidatorMap =
  exports.SchemaStateMap =
  exports.SchemaNestedMap =
    void 0
var shared_1 = require('@formily/shared')
var reactive_1 = require('@formily/reactive')
var schema_1 = require('./schema')
var REVA_ACTIONS_KEY = Symbol.for('__REVA_ACTIONS')
exports.SchemaNestedMap = {
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
exports.SchemaStateMap = {
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
exports.SchemaValidatorMap = {
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
exports.SchemaNormalKeys = Object.keys(exports.SchemaStateMap)
exports.SchemaValidatorKeys = Object.keys(exports.SchemaValidatorMap)
exports.hasOwnProperty = Object.prototype.hasOwnProperty
var traverse = function (target, visitor) {
  var seenObjects = []
  var root = target
  var traverse = function (target, path) {
    if (path === void 0) {
      path = []
    }
    if ((0, shared_1.isPlainObj)(target)) {
      var seenIndex = seenObjects.indexOf(target)
      if (seenIndex > -1) {
        return
      }
      var addIndex = seenObjects.length
      seenObjects.push(target)
      if ((0, exports.isNoNeedCompileObject)(target) && root !== target) {
        visitor(target, path)
        return
      }
      ;(0, shared_1.each)(target, function (value, key) {
        traverse(value, path.concat(key))
      })
      seenObjects.splice(addIndex, 1)
    } else {
      visitor(target, path)
    }
  }
  traverse(target)
}
exports.traverse = traverse
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
    if (String(path[0]).indexOf('x-') == -1 && (0, shared_1.isFn)(target))
      return
    if (exports.SchemaNestedMap[path[0]]) return
    if ((0, shared_1.isPlainObj)(target)) {
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
      if ((0, exports.isNoNeedCompileObject)(target) && root !== target) {
        visitor(target, path)
        return
      }
      ;(0, shared_1.each)(target, function (value, key) {
        traverse(value, path.concat(key))
      })
      seenObjects.splice(addIndex, 1)
    } else {
      visitor(target, path)
    }
  }
  traverse(schema)
}
exports.traverseSchema = traverseSchema
var isNoNeedCompileObject = function (source) {
  if ('$$typeof' in source && '_owner' in source) {
    return true
  }
  if (source['_isAMomentObject']) {
    return true
  }
  if (schema_1.Schema.isSchemaInstance(source)) {
    return true
  }
  if (source[REVA_ACTIONS_KEY]) {
    return true
  }
  if ((0, shared_1.isFn)(source['toJS'])) {
    return true
  }
  if ((0, shared_1.isFn)(source['toJSON'])) {
    return true
  }
  if ((0, reactive_1.isObservable)(source)) {
    return true
  }
  return false
}
exports.isNoNeedCompileObject = isNoNeedCompileObject
var createDataSource = function (source) {
  return (0, shared_1.toArr)(source).map(function (item) {
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
exports.createDataSource = createDataSource
var patchStateFormSchema = function (targetState, pattern, compiled) {
  ;(0, reactive_1.untracked)(function () {
    var _a
    var path = shared_1.FormPath.parse(pattern)
    var segments = path.segments
    var key = segments[0]
    var isEnum = key === 'enum' && (0, shared_1.isArr)(compiled)
    var schemaMapKey = exports.SchemaStateMap[key]
    if (schemaMapKey) {
      shared_1.FormPath.setIn(
        targetState,
        [schemaMapKey].concat(segments.slice(1)),
        isEnum ? (0, exports.createDataSource)(compiled) : compiled
      )
    } else {
      var isValidatorKey = exports.SchemaValidatorMap[key]
      if (isValidatorKey) {
        ;(_a = targetState['setValidatorRule']) === null || _a === void 0
          ? void 0
          : _a.call(targetState, key, compiled)
      }
    }
  })
}
exports.patchStateFormSchema = patchStateFormSchema
//# sourceMappingURL=shared.js.map
