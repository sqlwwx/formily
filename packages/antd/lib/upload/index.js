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
exports.Upload = void 0
var react_1 = __importStar(require('react'))
var react_2 = require('@formily/react')
var antd_1 = require('antd')
var icons_1 = require('@ant-design/icons')
var reactive_1 = require('@formily/reactive')
var shared_1 = require('@formily/shared')
var placeholder_1 = require('./placeholder')
var __builtins__1 = require('../__builtins__')
var testOpts = function (ext, options) {
  if (options && (0, shared_1.isArr)(options.include)) {
    return options.include.some(function (url) {
      return ext.test(url)
    })
  }
  if (options && (0, shared_1.isArr)(options.exclude)) {
    return !options.exclude.some(function (url) {
      return ext.test(url)
    })
  }
  return true
}
var getImageByUrl = function (url, options) {
  for (var i = 0; i < placeholder_1.UPLOAD_PLACEHOLDER.length; i++) {
    if (
      placeholder_1.UPLOAD_PLACEHOLDER[i].ext.test(url) &&
      testOpts(placeholder_1.UPLOAD_PLACEHOLDER[i].ext, options)
    ) {
      return placeholder_1.UPLOAD_PLACEHOLDER[i].icon || url
    }
  }
  return url
}
var getURL = function (target) {
  return (
    (target === null || target === void 0 ? void 0 : target['url']) ||
    (target === null || target === void 0 ? void 0 : target['downloadURL']) ||
    (target === null || target === void 0 ? void 0 : target['imgURL'])
  )
}
var getThumbURL = function (target) {
  return (
    (target === null || target === void 0 ? void 0 : target['thumbUrl']) ||
    (target === null || target === void 0 ? void 0 : target['url']) ||
    (target === null || target === void 0 ? void 0 : target['downloadURL']) ||
    (target === null || target === void 0 ? void 0 : target['imgURL'])
  )
}
var getErrorMessage = function (target) {
  return (
    (target === null || target === void 0 ? void 0 : target.errorMessage) ||
    (target === null || target === void 0 ? void 0 : target.errMsg) ||
    (target === null || target === void 0 ? void 0 : target.errorMsg) ||
    (target === null || target === void 0 ? void 0 : target.message) ||
    (typeof (target === null || target === void 0 ? void 0 : target.error) ===
    'string'
      ? target.error
      : '')
  )
}
var getState = function (target) {
  if (
    (target === null || target === void 0 ? void 0 : target.success) === false
  )
    return 'error'
  if ((target === null || target === void 0 ? void 0 : target.failed) === true)
    return 'error'
  if (target === null || target === void 0 ? void 0 : target.error)
    return 'error'
  return (
    (target === null || target === void 0 ? void 0 : target.state) ||
    (target === null || target === void 0 ? void 0 : target.status)
  )
}
var normalizeFileList = function (fileList) {
  if (fileList && fileList.length) {
    return fileList.map(function (file, index) {
      return __assign(__assign({}, file), {
        uid: file.uid || ''.concat(index),
        status: getState(file.response) || getState(file),
        url:
          getURL(file) ||
          getURL(file === null || file === void 0 ? void 0 : file.response),
        thumbUrl: getImageByUrl(
          getThumbURL(file) ||
            getThumbURL(
              file === null || file === void 0 ? void 0 : file.response
            ),
          {
            exclude: ['.png', '.jpg', '.jpeg', '.gif'],
          }
        ),
      })
    })
  }
  return []
}
var useValidator = function (validator) {
  var field = (0, react_2.useField)()
  ;(0, react_1.useEffect)(function () {
    var dispose = (0, reactive_1.reaction)(
      function () {
        return field.value
      },
      function (value) {
        var message = validator(value)
        field.setFeedback({
          type: 'error',
          code: 'UploadError',
          messages: message ? [message] : [],
        })
      }
    )
    return function () {
      dispose()
    }
  }, [])
}
var useUploadValidator = function (serviceErrorMessage) {
  if (serviceErrorMessage === void 0) {
    serviceErrorMessage = 'Upload Service Error'
  }
  useValidator(function (value) {
    var _a, _b
    var list = (0, shared_1.toArr)(value)
    for (var i = 0; i < list.length; i++) {
      if (
        ((_a = list[i]) === null || _a === void 0 ? void 0 : _a.status) ===
        'error'
      ) {
        return (
          getErrorMessage(
            (_b = list[i]) === null || _b === void 0 ? void 0 : _b.response
          ) ||
          getErrorMessage(list[i]) ||
          serviceErrorMessage
        )
      }
    }
  })
}
function useUploadProps(_a) {
  var serviceErrorMessage = _a.serviceErrorMessage,
    props = __rest(_a, ['serviceErrorMessage'])
  useUploadValidator(serviceErrorMessage)
  var onChange = function (param) {
    var _a
    ;(_a = props.onChange) === null || _a === void 0
      ? void 0
      : _a.call(
          props,
          normalizeFileList(__spreadArray([], __read(param.fileList), false))
        )
  }
  return __assign(__assign({}, props), { onChange: onChange })
}
var getPlaceholder = function (props) {
  if (props.listType !== 'picture-card') {
    return react_1.default.createElement(
      antd_1.Button,
      null,
      react_1.default.createElement(icons_1.UploadOutlined, null),
      props.textContent
    )
  }
  return react_1.default.createElement(icons_1.UploadOutlined, {
    style: { fontSize: 20 },
  })
}
exports.Upload = (0, react_2.connect)(
  function (props) {
    return react_1.default.createElement(
      antd_1.Upload,
      __assign({}, useUploadProps(props)),
      props.children || getPlaceholder(props)
    )
  },
  (0, react_2.mapProps)({
    value: 'fileList',
  })
)
var Dragger = (0, react_2.connect)(
  function (props) {
    return react_1.default.createElement(
      'div',
      { className: (0, __builtins__1.usePrefixCls)('upload-dragger') },
      react_1.default.createElement(
        antd_1.Upload.Dragger,
        __assign({}, useUploadProps(props)),
        props.children ||
          react_1.default.createElement(
            react_1.default.Fragment,
            null,
            react_1.default.createElement(
              'p',
              { className: 'ant-upload-drag-icon' },
              react_1.default.createElement(icons_1.InboxOutlined, null)
            ),
            props.textContent &&
              react_1.default.createElement(
                'p',
                { className: 'ant-upload-text' },
                props.textContent
              )
          )
      )
    )
  },
  (0, react_2.mapProps)({
    value: 'fileList',
  })
)
exports.Upload.Dragger = Dragger
exports.default = exports.Upload
//# sourceMappingURL=index.js.map
