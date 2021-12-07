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
var __spreadArray =
  (this && this.__spreadArray) ||
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
Object.defineProperty(exports, '__esModule', { value: true })
exports.registerTypeDefaultComponents = exports.registerVoidComponents = void 0
var patches_1 = require('../patches')
var shared_1 = require('@formily/shared')
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
  if ((0, shared_1.isStr)(condition)) {
    return condition.replace(/\$value/, '$self.value')
  }
}
var transformXLinkage = function (linkages) {
  if ((0, shared_1.isArr)(linkages)) {
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
  if ((0, shared_1.isValid)(schema['editable'])) {
    schema['x-editable'] = schema['x-editable'] || schema['editable']
    delete schema['editable']
  }
  if ((0, shared_1.isValid)(schema['visible'])) {
    schema['x-visible'] = schema['x-visible'] || schema['visible']
    delete schema['visible']
  }
  if ((0, shared_1.isValid)(schema['display'])) {
    schema['x-display'] =
      schema['x-display'] || (schema['display'] ? 'visible' : 'hidden')
    delete schema['display']
  }
  if ((0, shared_1.isValid)(schema['x-props'])) {
    schema['x-decorator-props'] =
      schema['x-decorator-props'] || schema['x-props']
    delete schema['display']
  }
  if (schema['x-linkages']) {
    schema['x-reactions'] = (0, shared_1.toArr)(schema['x-reactions']).concat(
      transformXLinkage(schema['x-linkages'])
    )
    delete schema['x-linkages']
  }
  if (schema['x-component']) {
    if (
      VOID_COMPONENTS.some(function (component) {
        return (
          (0, shared_1.lowerCase)(component) ===
          (0, shared_1.lowerCase)(schema['x-component'])
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
;(0, patches_1.registerPolyfills)('1.0', SpecificationV1Polyfill)
var registerVoidComponents = function (components) {
  VOID_COMPONENTS.push.apply(
    VOID_COMPONENTS,
    __spreadArray([], __read(components), false)
  )
}
exports.registerVoidComponents = registerVoidComponents
var registerTypeDefaultComponents = function (maps) {
  Object.assign(TYPE_DEFAULT_COMPONENTS, maps)
}
exports.registerTypeDefaultComponents = registerTypeDefaultComponents
//# sourceMappingURL=SPECIFICATION_1_0.js.map
