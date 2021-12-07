import { isFn, each, isPlainObj, isArr, toArr, FormPath } from '@formily/shared'
import { isObservable, untracked } from '@formily/reactive'
import { Schema } from './schema'
var REVA_ACTIONS_KEY = Symbol.for('__REVA_ACTIONS')
export var SchemaNestedMap = {
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
export var SchemaStateMap = {
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
export var SchemaValidatorMap = {
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
export var SchemaNormalKeys = Object.keys(SchemaStateMap)
export var SchemaValidatorKeys = Object.keys(SchemaValidatorMap)
export var hasOwnProperty = Object.prototype.hasOwnProperty
export var traverse = function (target, visitor) {
  var seenObjects = []
  var root = target
  var traverse = function (target, path) {
    if (path === void 0) {
      path = []
    }
    if (isPlainObj(target)) {
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
      each(target, function (value, key) {
        traverse(value, path.concat(key))
      })
      seenObjects.splice(addIndex, 1)
    } else {
      visitor(target, path)
    }
  }
  traverse(target)
}
export var traverseSchema = function (schema, visitor) {
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
    if (String(path[0]).indexOf('x-') == -1 && isFn(target)) return
    if (SchemaNestedMap[path[0]]) return
    if (isPlainObj(target)) {
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
      each(target, function (value, key) {
        traverse(value, path.concat(key))
      })
      seenObjects.splice(addIndex, 1)
    } else {
      visitor(target, path)
    }
  }
  traverse(schema)
}
export var isNoNeedCompileObject = function (source) {
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
  if (isFn(source['toJS'])) {
    return true
  }
  if (isFn(source['toJSON'])) {
    return true
  }
  if (isObservable(source)) {
    return true
  }
  return false
}
export var createDataSource = function (source) {
  return toArr(source).map(function (item) {
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
export var patchStateFormSchema = function (targetState, pattern, compiled) {
  untracked(function () {
    var _a
    var path = FormPath.parse(pattern)
    var segments = path.segments
    var key = segments[0]
    var isEnum = key === 'enum' && isArr(compiled)
    var schemaMapKey = SchemaStateMap[key]
    if (schemaMapKey) {
      FormPath.setIn(
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
//# sourceMappingURL=shared.js.map
