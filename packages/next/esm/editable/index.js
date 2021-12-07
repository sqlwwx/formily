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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this
        }),
      g
    )
    function verb(n) {
      return function (v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
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
import React, { useLayoutEffect, useRef, useState } from 'react'
import { isVoidField } from '@formily/core'
import { useField, observer } from '@formily/react'
import { Balloon } from '@alifd/next'
import { BaseItem } from '../form-item'
import {
  useClickAway,
  usePrefixCls,
  EditOutlinedIcon,
  CloseOutlinedIcon,
  MessageOutlinedIcon,
} from '../__builtins__'
var useParentPattern = function () {
  var _a, _b
  var field = useField()
  return (
    ((_a = field === null || field === void 0 ? void 0 : field.parent) ===
      null || _a === void 0
      ? void 0
      : _a.pattern) ||
    ((_b = field === null || field === void 0 ? void 0 : field.form) === null ||
    _b === void 0
      ? void 0
      : _b.pattern)
  )
}
var useEditable = function () {
  var pattern = useParentPattern()
  var field = useField()
  useLayoutEffect(
    function () {
      if (pattern === 'editable') {
        field.setPattern('readPretty')
      }
    },
    [pattern]
  )
  return [
    field.pattern === 'editable',
    function (pyaload) {
      if (pattern !== 'editable') return
      field.setPattern(pyaload ? 'editable' : 'readPretty')
    },
  ]
}
var useFormItemProps = function () {
  var field = useField()
  if (isVoidField(field)) return {}
  if (!field) return {}
  var takeMessage = function () {
    if (field.selfErrors.length) return field.selfErrors
    if (field.selfWarnings.length) return field.selfWarnings
    if (field.selfSuccesses.length) return field.selfSuccesses
  }
  return {
    feedbackStatus:
      field.validateStatus === 'validating' ? 'pending' : field.validateStatus,
    feedbackText: takeMessage(),
    extra: field.description,
  }
}
export var Editable = observer(function (props) {
  var _a = __read(useEditable(), 2),
    editable = _a[0],
    setEditable = _a[1]
  var pattern = useParentPattern()
  var itemProps = useFormItemProps()
  var field = useField()
  var basePrefixCls = usePrefixCls()
  var prefixCls = usePrefixCls('formily-editable')
  var ref = useRef()
  var innerRef = useRef()
  var recover = function () {
    var _a
    if (
      ref.current &&
      !((_a = field === null || field === void 0 ? void 0 : field.errors) ===
        null || _a === void 0
        ? void 0
        : _a.length)
    ) {
      setEditable(false)
    }
  }
  var renderEditHelper = function () {
    if (editable) return
    return React.createElement(
      BaseItem,
      __assign({}, props, itemProps),
      pattern === 'editable' &&
        React.createElement(EditOutlinedIcon, {
          className: ''.concat(prefixCls, '-edit-btn'),
        }),
      pattern !== 'editable' &&
        React.createElement(MessageOutlinedIcon, {
          className: ''.concat(prefixCls, '-edit-btn'),
        })
    )
  }
  var renderCloseHelper = function () {
    if (!editable) return
    return React.createElement(
      BaseItem,
      __assign({}, props),
      React.createElement(CloseOutlinedIcon, {
        className: ''.concat(prefixCls, '-close-btn'),
      })
    )
  }
  useClickAway(function (e) {
    var target = e.target
    if (
      target === null || target === void 0
        ? void 0
        : target.closest('.'.concat(basePrefixCls, '-overlay-wrapper'))
    )
      return
    recover()
  }, innerRef)
  var onClick = function (e) {
    var target = e.target
    var close = innerRef.current.querySelector(
      '.'.concat(prefixCls, '-close-btn')
    )
    if (
      (target === null || target === void 0
        ? void 0
        : target.contains(close)) ||
      (close === null || close === void 0 ? void 0 : close.contains(target))
    ) {
      recover()
    } else if (!ref.current) {
      setTimeout(function () {
        setEditable(true)
        setTimeout(function () {
          var _a
          ;(_a = innerRef.current.querySelector('input')) === null ||
          _a === void 0
            ? void 0
            : _a.focus()
        })
      })
    }
  }
  ref.current = editable
  return React.createElement(
    'div',
    { className: prefixCls, ref: innerRef, onClick: onClick },
    React.createElement(
      'div',
      { className: ''.concat(prefixCls, '-content') },
      React.createElement(
        BaseItem,
        __assign({}, props, itemProps),
        props.children
      ),
      renderEditHelper(),
      renderCloseHelper()
    )
  )
})
Editable.Popover = observer(function (_a) {
  var props = __rest(_a, [])
  var field = useField()
  var pattern = useParentPattern()
  var _b = __read(useState(false), 2),
    visible = _b[0],
    setVisible = _b[1]
  var prefixCls = usePrefixCls('formily-editable')
  var closePopover = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var errors
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, , 2, 3])
            return [
              4 /*yield*/,
              field.form.validate(''.concat(field.address, '.*')),
            ]
          case 1:
            _a.sent()
            return [3 /*break*/, 3]
          case 2:
            errors = field.form.queryFeedbacks({
              type: 'error',
              address: ''.concat(field.address, '.*'),
            })
            if (errors === null || errors === void 0 ? void 0 : errors.length)
              return [2 /*return*/]
            setVisible(false)
            return [7 /*endfinally*/]
          case 3:
            return [2 /*return*/]
        }
      })
    })
  }
  var openPopover = function () {
    setVisible(true)
  }
  return React.createElement(
    Balloon,
    __assign({}, props, {
      title: field.title,
      visible: visible,
      className: props.className,
      onVisibleChange: function (visible) {
        if (visible) {
          openPopover()
        } else {
          closePopover()
        }
      },
      align: 't',
      triggerType: 'click',
      closable: false,
      trigger: React.createElement(
        'div',
        { style: { display: 'inline-flex' } },
        React.createElement(
          BaseItem,
          { className: ''.concat(prefixCls, '-trigger') },
          React.createElement(
            'div',
            { className: ''.concat(prefixCls, '-content') },
            React.createElement(
              'span',
              { className: ''.concat(prefixCls, '-preview') },
              props.title || field.title
            ),
            pattern === 'editable' &&
              React.createElement(EditOutlinedIcon, {
                className: ''.concat(prefixCls, '-edit-btn'),
              }),
            pattern !== 'editable' &&
              React.createElement(MessageOutlinedIcon, {
                className: ''.concat(prefixCls, '-edit-btn'),
              })
          )
        )
      ),
    }),
    props.children
  )
})
export default Editable
//# sourceMappingURL=index.js.map
