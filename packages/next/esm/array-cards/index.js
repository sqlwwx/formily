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
import React from 'react'
import { Card } from '@alifd/next'
import {
  useField,
  observer,
  useFieldSchema,
  RecursionField,
} from '@formily/react'
import { usePrefixCls } from '../__builtins__'
import { ArrayBase } from '../array-base'
import cls from 'classnames'
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
var Empty = function () {
  return React.createElement(
    'div',
    { className: 'next-empty' },
    React.createElement(
      'div',
      { className: 'next-empty-image' },
      React.createElement(
        'svg',
        {
          className: 'ant-empty-img-default',
          width: '184',
          height: '152',
          viewBox: '0 0 184 152',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        React.createElement(
          'g',
          { fill: 'none', fillRule: 'evenodd' },
          React.createElement(
            'g',
            { transform: 'translate(24 31.67)' },
            React.createElement('ellipse', {
              className: 'ant-empty-img-default-ellipse',
              cx: '67.797',
              cy: '106.89',
              rx: '67.797',
              ry: '12.668',
            }),
            React.createElement('path', {
              className: 'ant-empty-img-default-path-1',
              d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
            }),
            React.createElement('path', {
              className: 'ant-empty-img-default-path-2',
              d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
              transform: 'translate(13.56)',
            }),
            React.createElement('path', {
              className: 'ant-empty-img-default-path-3',
              d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
            }),
            React.createElement('path', {
              className: 'ant-empty-img-default-path-4',
              d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
            })
          ),
          React.createElement('path', {
            className: 'ant-empty-img-default-path-5',
            d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
          }),
          React.createElement(
            'g',
            {
              className: 'ant-empty-img-default-g',
              transform: 'translate(149.65 15.383)',
            },
            React.createElement('ellipse', {
              cx: '20.654',
              cy: '3.167',
              rx: '2.849',
              ry: '2.815',
            }),
            React.createElement('path', {
              d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z',
            })
          )
        )
      )
    )
  )
}
export var ArrayCards = observer(function (props) {
  var field = useField()
  var schema = useFieldSchema()
  var dataSource = Array.isArray(field.value) ? field.value : []
  var prefixCls = usePrefixCls('formily-array-cards', props)
  var renderItems = function () {
    return dataSource === null || dataSource === void 0
      ? void 0
      : dataSource.map(function (item, index) {
          var items = Array.isArray(schema.items)
            ? schema.items[index] || schema.items[0]
            : schema.items
          var title = React.createElement(
            'span',
            null,
            React.createElement(RecursionField, {
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
          var extra = React.createElement(
            'span',
            null,
            React.createElement(RecursionField, {
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
          var content = React.createElement(RecursionField, {
            schema: items,
            name: index,
            filterProperties: function (schema) {
              if (isIndexComponent(schema)) return false
              if (isOperationComponent(schema)) return false
              return true
            },
          })
          return React.createElement(
            ArrayBase.Item,
            { key: index, index: index, record: item },
            React.createElement(
              Card,
              __assign({ contentHeight: 'auto' }, props, {
                onChange: function () {},
                className: cls(''.concat(prefixCls, '-item'), props.className),
                title: title,
                extra: extra,
              }),
              content
            )
          )
        })
  }
  var renderAddition = function () {
    return schema.reduceProperties(function (addition, schema, key) {
      if (isAdditionComponent(schema)) {
        return React.createElement(RecursionField, {
          schema: schema,
          name: key,
        })
      }
      return addition
    }, null)
  }
  var renderEmpty = function () {
    if (
      dataSource === null || dataSource === void 0 ? void 0 : dataSource.length
    )
      return
    return React.createElement(
      Card,
      __assign({ contentHeight: 'auto' }, props, {
        className: cls(''.concat(prefixCls, '-item'), props.className),
        title: props.title || field.title,
        onChange: function () {},
      }),
      React.createElement(Empty, null)
    )
  }
  return React.createElement(
    ArrayBase,
    null,
    renderEmpty(),
    renderItems(),
    renderAddition()
  )
})
ArrayCards.displayName = 'ArrayCards'
ArrayBase.mixin(ArrayCards)
export default ArrayCards
//# sourceMappingURL=index.js.map
