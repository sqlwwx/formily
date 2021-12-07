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
exports.ArrayCards = void 0
var react_1 = __importStar(require('react'))
var antd_1 = require('antd')
var react_2 = require('@formily/react')
var shared_1 = require('@formily/shared')
var classnames_1 = __importDefault(require('classnames'))
var __builtins__1 = require('../__builtins__')
var array_base_1 = require('../array-base')
var form_grid_1 = __importDefault(require('../form-grid'))
var GridColumn = form_grid_1.default.GridColumn
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
var isCopyComponent = function (schema) {
  var _a
  return (
    ((_a = schema['x-component']) === null || _a === void 0
      ? void 0
      : _a.indexOf('Copy')) > -1
  )
}
var isOperationComponent = function (schema) {
  return (
    isAdditionComponent(schema) ||
    isRemoveComponent(schema) ||
    isMoveDownComponent(schema) ||
    isMoveUpComponent(schema) ||
    isCopyComponent(schema)
  )
}
var StatusSelect = (0, react_2.observer)(function (props) {
  var _a
  var form = (0, react_2.useForm)()
  var field = (0, react_2.useField)()
  var prefixCls = (0, __builtins__1.usePrefixCls)('formily-array-table')
  var errors = form.queryFeedbacks({
    type: 'error',
    address: ''.concat(field.address, '.*'),
  })
  var parseIndex = function (address) {
    var _a
    return Number(
      (_a = address
        .slice(address.indexOf(field.address.toString()) + 1)
        .match(/(\d+)/)) === null || _a === void 0
        ? void 0
        : _a[1]
    )
  }
  var options =
    (_a = props.options) === null || _a === void 0
      ? void 0
      : _a.map(function (_a) {
          var label = _a.label,
            value = _a.value
          var hasError = errors.some(function (_a) {
            var address = _a.address
            var currentIndex = parseIndex(address)
            var startIndex = (value - 1) * props.pageSize
            var endIndex = value * props.pageSize
            return currentIndex >= startIndex && currentIndex <= endIndex
          })
          return {
            label: hasError
              ? react_1.default.createElement(
                  antd_1.Badge,
                  { dot: true },
                  label
                )
              : label,
            value: value,
          }
        })
  var width =
    String(options === null || options === void 0 ? void 0 : options.length)
      .length * 15
  return react_1.default.createElement(antd_1.Select, {
    value: props.value,
    onChange: props.onChange,
    options: options,
    virtual: true,
    style: {
      width: width < 60 ? 60 : width,
    },
    className: (0, classnames_1.default)(
      ''.concat(prefixCls, '-status-select'),
      {
        'has-error':
          errors === null || errors === void 0 ? void 0 : errors.length,
      }
    ),
  })
})
var ArrayCardsPagination = function (props) {
  var _a
  var _b = __read((0, react_1.useState)(1), 2),
    current = _b[0],
    setCurrent = _b[1]
  var prefixCls = (0, __builtins__1.usePrefixCls)('formily-array-cards')
  var pageSize = props.pageSize || 10
  var size = props.size || 'default'
  var dataSource = props.dataSource || []
  var startIndex = (current - 1) * pageSize
  var endIndex = startIndex + pageSize - 1
  var total =
    (dataSource === null || dataSource === void 0
      ? void 0
      : dataSource.length) || 0
  var totalPage = Math.ceil(total / pageSize)
  var pages = Array.from(new Array(totalPage)).map(function (_, index) {
    var page = index + 1
    return {
      label: page,
      value: page,
    }
  })
  var handleChange = function (current) {
    setCurrent(current)
  }
  ;(0, react_1.useEffect)(
    function () {
      if (totalPage > 0 && totalPage < current) {
        handleChange(totalPage)
      }
    },
    [totalPage, current]
  )
  var renderPagination = function () {
    if (totalPage <= 1) return
    return react_1.default.createElement(
      'div',
      { className: ''.concat(prefixCls, '-pagination') },
      react_1.default.createElement(
        antd_1.Space,
        null,
        react_1.default.createElement(StatusSelect, {
          value: current,
          pageSize: pageSize,
          onChange: handleChange,
          options: pages,
          notFoundContent: false,
        }),
        react_1.default.createElement(
          antd_1.Pagination,
          __assign({}, props, {
            pageSize: pageSize,
            current: current,
            total: dataSource.length,
            size: size,
            showSizeChanger: false,
            onChange: handleChange,
          })
        )
      )
    )
  }
  return react_1.default.createElement(
    react_1.Fragment,
    null,
    (_a = props.children) === null || _a === void 0
      ? void 0
      : _a.call(
          props,
          dataSource === null || dataSource === void 0
            ? void 0
            : dataSource.slice(startIndex, endIndex + 1),
          renderPagination()
        )
  )
}
exports.ArrayCards = (0, react_2.observer)(function (props) {
  var field = (0, react_2.useField)()
  var schema = (0, react_2.useFieldSchema)()
  var dataSource = Array.isArray(field.value) ? field.value : []
  var pagination = (0, shared_1.isBool)(props.pagination)
    ? {}
    : props.pagination
  var prefixCls = (0, __builtins__1.usePrefixCls)('formily-array-cards', props)
  if (!schema) throw new Error('can not found schema object')
  var defaultRowKey = function (record) {
    return dataSource.indexOf(record)
  }
  var renderItems = function (dataSource) {
    return dataSource === null || dataSource === void 0
      ? void 0
      : dataSource.map(function (item) {
          var index = defaultRowKey(item)
          var items = Array.isArray(schema.items)
            ? schema.items[index] || schema.items[0]
            : schema.items
          var title = react_1.default.createElement(
            'span',
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
            props.title || field.title
          )
          var extra = react_1.default.createElement(
            'span',
            null,
            react_1.default.createElement(react_2.RecursionField, {
              schema: items,
              name: index,
              filterProperties: function (schema) {
                if (!isOperationComponent(schema)) return false
                return true
              },
              onlyRenderProperties: true,
            }),
            props.extra
          )
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
            array_base_1.ArrayBase.Item,
            { key: index, index: index, record: item },
            react_1.default.createElement(
              GridColumn,
              null,
              react_1.default.createElement(
                antd_1.Card,
                __assign({}, props, {
                  onChange: function () {},
                  className: (0, classnames_1.default)(
                    ''.concat(prefixCls, '-item'),
                    props.className
                  ),
                  title: title,
                  extra: extra,
                }),
                content
              )
            )
          )
        })
  }
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
  return react_1.default.createElement(
    react_1.Fragment,
    null,
    !(dataSource === null || dataSource === void 0
      ? void 0
      : dataSource.length) &&
      react_1.default.createElement(
        antd_1.Card,
        __assign({}, props, {
          onChange: function () {},
          className: (0, classnames_1.default)(
            ''.concat(prefixCls, '-item'),
            props.className
          ),
          title: props.title || field.title,
        }),
        react_1.default.createElement(antd_1.Empty, null)
      ),
    react_1.default.createElement(
      ArrayCardsPagination,
      __assign({}, pagination, { dataSource: dataSource }),
      function (ds, pager) {
        return react_1.default.createElement(
          array_base_1.ArrayBase,
          null,
          react_1.default.createElement(
            form_grid_1.default,
            __assign({}, props.grid || { maxColumns: 1 }),
            renderItems(ds)
          ),
          react_1.default.createElement(
            'div',
            { style: { marginTop: 5, marginBottom: 5 } },
            pager
          ),
          renderAddition()
        )
      }
    )
  )
})
exports.ArrayCards.displayName = 'ArrayCards'
array_base_1.ArrayBase.mixin(exports.ArrayCards)
exports.default = exports.ArrayCards
//# sourceMappingURL=index.js.map
