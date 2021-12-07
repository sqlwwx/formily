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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          },
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.ArrayCollapse = void 0
var react_1 = __importStar(require('react'))
var next_1 = require('@alifd/next')
var react_2 = require('@formily/react')
var shared_1 = require('@formily/shared')
var classnames_1 = __importDefault(require('classnames'))
var array_base_1 = __importDefault(require('../array-base'))
var __builtins__1 = require('../__builtins__')
var isAdditionComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('Addition')) > -1
  )
}
var isIndexComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('Index')) > -1
  )
}
var isRemoveComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('Remove')) > -1
  )
}
var isMoveUpComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('MoveUp')) > -1
  )
}
var isMoveDownComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('MoveDown')) > -1
  )
}
var isOperationComponent = function (schema) {
  return (
    isAdditionComponent(schema) ||
    isRemoveComponent(schema) ||
    isMoveDownComponent(schema) ||
    isMoveUpComponent(schema)
  )
}
var range = function (count) {
  return Array.from({ length: count }).map(function (_, i) {
    return i
  })
}
var takeDefaultExpandedKeys = function (
  dataSourceLength,
  defaultOpenPanelCount
) {
  if (dataSourceLength < defaultOpenPanelCount) return range(dataSourceLength)
  return range(defaultOpenPanelCount)
}
var insertExpandedKeys = function (expandedKeys, index) {
  if (expandedKeys.length <= index) return expandedKeys.concat(index)
  return expandedKeys.reduce(function (buf, key) {
    if (key < index) return buf.concat(key)
    if (key === index) return buf.concat([key, key + 1])
    return buf.concat(key + 1)
  }, [])
}
exports.ArrayCollapse = (0, react_2.observer)(function (_a) {
  var defaultOpenPanelCount = _a.defaultOpenPanelCount,
    props = __rest(_a, ['defaultOpenPanelCount'])
  var field = (0, react_2.useField)()
  var dataSource = Array.isArray(field.value) ? field.value : []
  var _b = __read(
      (0, react_1.useState)(
        takeDefaultExpandedKeys(dataSource.length, defaultOpenPanelCount)
      ),
      2
    ),
    expandKeys = _b[0],
    setExpandKeys = _b[1]
  var schema = (0, react_2.useFieldSchema)()
  var prefixCls = (0, __builtins__1.usePrefixCls)(
    'formily-array-collapse',
    props
  )
  ;(0, react_1.useEffect)(
    function () {
      if (!field.modified && dataSource.length) {
        setExpandKeys(
          takeDefaultExpandedKeys(dataSource.length, defaultOpenPanelCount)
        )
      }
    },
    [dataSource.length, field]
  )
  if (!schema) throw new Error('can not found schema object')
  var renderAddition = function () {
    return schema.reduceProperties(function (addition, schema, key) {
      if (isAdditionComponent(schema)) {
        return react_1.default.createElement(react_2.RecursionField, {
          schema: schema,
          name: key,
        })
      }
      return addition
    }, null)
  }
  var renderEmpty = function () {
    if (dataSource.length) return
    return react_1.default.createElement(
      next_1.Card,
      {
        className: (0, classnames_1.default)(
          ''.concat(prefixCls, '-item'),
          props.className
        ),
      },
      react_1.default.createElement(__builtins__1.Empty, null)
    )
  }
  var renderItems = function () {
    return react_1.default.createElement(
      next_1.Collapse,
      __assign({}, props, {
        expandedKeys: expandKeys.map(String),
        onExpand: function (keys) {
          return setExpandKeys((0, shared_1.toArr)(keys).map(Number))
        },
        className: (0, classnames_1.default)(
          ''.concat(prefixCls, '-item'),
          props.className
        ),
      }),
      dataSource.map(function (item, index) {
        var items = Array.isArray(schema.items)
          ? schema.items[index] || schema.items[0]
          : schema.items
        var panelProps = field
          .query(''.concat(field.address, '.').concat(index))
          .get('componentProps')
        var props = items['x-component-props']
        var title = function () {
          var title = ''.concat(
            (panelProps === null || panelProps === void 0
              ? void 0
              : panelProps.title) ||
              (props === null || props === void 0 ? void 0 : props.title) ||
              field.title
          )
          var path = field.address.concat(index)
          var errors = field.form.queryFeedbacks({
            type: 'error',
            address: ''.concat(path, '.**'),
          })
          return react_1.default.createElement(
            array_base_1.default.Item,
            { index: index, record: item },
            react_1.default.createElement(
              'div',
              {
                className: (0, classnames_1.default)(
                  ''.concat(prefixCls, '-item-title'),
                  props.className
                ),
              },
              react_1.default.createElement(
                'div',
                null,
                react_1.default.createElement(react_2.RecursionField, {
                  schema: items,
                  name: index,
                  filterProperties: function (schema) {
                    if (!isIndexComponent(schema)) return false
                    return true
                  },
                  onlyRenderProperties: true,
                }),
                errors.length
                  ? react_1.default.createElement(
                      next_1.Badge,
                      { className: 'errors-badge', count: errors.length },
                      title
                    )
                  : title
              ),
              react_1.default.createElement(
                'div',
                null,
                react_1.default.createElement(react_2.RecursionField, {
                  schema: items,
                  name: index,
                  filterProperties: function (schema) {
                    if (!isOperationComponent(schema)) return false
                    return true
                  },
                  onlyRenderProperties: true,
                })
              )
            )
          )
        }
        var content = react_1.default.createElement(react_2.RecursionField, {
          schema: items,
          name: index,
          filterProperties: function (schema) {
            if (isIndexComponent(schema)) return false
            if (isOperationComponent(schema)) return false
            return true
          },
        })
        return react_1.default.createElement(
          next_1.Collapse.Panel,
          __assign({}, props, panelProps, { key: index, title: title() }),
          react_1.default.createElement(
            array_base_1.default.Item,
            { index: index, key: index, record: item },
            content
          )
        )
      })
    )
  }
  return react_1.default.createElement(
    array_base_1.default,
    {
      onAdd: function (index) {
        setExpandKeys(insertExpandedKeys(expandKeys, index))
      },
    },
    renderEmpty(),
    renderItems(),
    renderAddition()
  )
})
var CollapsePanel = function (_a) {
  var children = _a.children
  return react_1.default.createElement(react_1.Fragment, null, children)
}
CollapsePanel.displayName = 'CollapsePanel'
exports.ArrayCollapse.defaultProps = {
  defaultOpenPanelCount: 5,
}
exports.ArrayCollapse.displayName = 'ArrayCollapse'
exports.ArrayCollapse.CollapsePanel = CollapsePanel
array_base_1.default.mixin(exports.ArrayCollapse)
exports.default = exports.ArrayCollapse
//# sourceMappingURL=index.js.map
