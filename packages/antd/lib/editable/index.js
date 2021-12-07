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
exports.Editable = void 0
var react_1 = __importStar(require('react'))
var core_1 = require('@formily/core')
var react_2 = require('@formily/react')
var antd_1 = require('antd')
var icons_1 = require('@ant-design/icons')
var form_item_1 = require('../form-item')
var __builtins__1 = require('../__builtins__')
var classnames_1 = __importDefault(require('classnames'))
var useParentPattern = function () {
  var _a, _b
  var field = (0, react_2.useField)()
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
  var field = (0, react_2.useField)()
  ;(0, react_1.useLayoutEffect)(
    function () {
      if (pattern === 'editable') {
        return field.setPattern('readPretty')
      }
    },
    [pattern]
  )
  return [
    field.pattern === 'editable',
    function (payload) {
      if (pattern !== 'editable') return
      field.setPattern(payload ? 'editable' : 'readPretty')
    },
  ]
}
var useFormItemProps = function () {
  var field = (0, react_2.useField)()
  if ((0, core_1.isVoidField)(field)) return {}
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
exports.Editable = (0, react_2.observer)(function (props) {
  var _a = __read(useEditable(), 2),
    editable = _a[0],
    setEditable = _a[1]
  var pattern = useParentPattern()
  var itemProps = useFormItemProps()
  var field = (0, react_2.useField)()
  var basePrefixCls = (0, __builtins__1.usePrefixCls)()
  var prefixCls = (0, __builtins__1.usePrefixCls)('formily-editable')
  var ref = (0, react_1.useRef)()
  var innerRef = (0, react_1.useRef)()
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
    return react_1.default.createElement(
      form_item_1.BaseItem,
      __assign({}, props, itemProps),
      pattern === 'editable' &&
        react_1.default.createElement(icons_1.EditOutlined, {
          className: ''.concat(prefixCls, '-edit-btn'),
        }),
      pattern !== 'editable' &&
        react_1.default.createElement(icons_1.MessageOutlined, {
          className: ''.concat(prefixCls, '-edit-btn'),
        })
    )
  }
  var renderCloseHelper = function () {
    if (!editable) return
    return react_1.default.createElement(
      form_item_1.BaseItem,
      __assign({}, props),
      react_1.default.createElement(icons_1.CloseOutlined, {
        className: ''.concat(prefixCls, '-close-btn'),
      })
    )
  }
  ;(0, __builtins__1.useClickAway)(function (e) {
    var target = e.target
    if (
      target === null || target === void 0
        ? void 0
        : target.closest('.'.concat(basePrefixCls, '-select-dropdown'))
    )
      return
    if (
      target === null || target === void 0
        ? void 0
        : target.closest('.'.concat(basePrefixCls, '-picker-dropdown'))
    )
      return
    if (
      target === null || target === void 0
        ? void 0
        : target.closest('.'.concat(basePrefixCls, '-cascader-menus'))
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
  return react_1.default.createElement(
    'div',
    { className: prefixCls, ref: innerRef, onClick: onClick },
    react_1.default.createElement(
      'div',
      { className: ''.concat(prefixCls, '-content') },
      react_1.default.createElement(
        form_item_1.BaseItem,
        __assign({}, props, itemProps),
        props.children
      ),
      renderEditHelper(),
      renderCloseHelper()
    )
  )
})
exports.Editable.Popover = (0, react_2.observer)(function (props) {
  var field = (0, react_2.useField)()
  var pattern = useParentPattern()
  var _a = __read((0, react_1.useState)(false), 2),
    visible = _a[0],
    setVisible = _a[1]
  var prefixCls = (0, __builtins__1.usePrefixCls)('formily-editable')
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
  return react_1.default.createElement(
    antd_1.Popover,
    __assign({}, props, {
      title: props.title || field.title,
      visible: visible,
      className: (0, classnames_1.default)(prefixCls, props.className),
      content: props.children,
      trigger: 'click',
      destroyTooltipOnHide: true,
      onVisibleChange: function (visible) {
        if (visible) {
          openPopover()
        } else {
          closePopover()
        }
      },
    }),
    react_1.default.createElement(
      'div',
      null,
      react_1.default.createElement(
        form_item_1.BaseItem,
        { className: ''.concat(prefixCls, '-trigger') },
        react_1.default.createElement(
          'div',
          { className: ''.concat(prefixCls, '-content') },
          react_1.default.createElement(
            'span',
            { className: ''.concat(prefixCls, '-preview') },
            props.title || field.title
          ),
          pattern === 'editable' &&
            react_1.default.createElement(icons_1.EditOutlined, {
              className: ''.concat(prefixCls, '-edit-btn'),
            }),
          pattern !== 'editable' &&
            react_1.default.createElement(icons_1.MessageOutlined, {
              className: ''.concat(prefixCls, '-edit-btn'),
            })
        )
      )
    )
  )
})
exports.default = exports.Editable
//# sourceMappingURL=index.js.map
