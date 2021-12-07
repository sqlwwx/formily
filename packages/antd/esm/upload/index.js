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
import React, { useEffect } from 'react'
import { connect, mapProps, useField } from '@formily/react'
import { Upload as AntdUpload, Button } from 'antd'
import { InboxOutlined, UploadOutlined } from '@ant-design/icons'
import { reaction } from '@formily/reactive'
import { isArr, toArr } from '@formily/shared'
import { UPLOAD_PLACEHOLDER } from './placeholder'
import { usePrefixCls } from '../__builtins__'
var testOpts = function (ext, options) {
  if (options && isArr(options.include)) {
    return options.include.some(function (url) {
      return ext.test(url)
    })
  }
  if (options && isArr(options.exclude)) {
    return !options.exclude.some(function (url) {
      return ext.test(url)
    })
  }
  return true
}
var getImageByUrl = function (url, options) {
  for (var i = 0; i < UPLOAD_PLACEHOLDER.length; i++) {
    if (
      UPLOAD_PLACEHOLDER[i].ext.test(url) &&
      testOpts(UPLOAD_PLACEHOLDER[i].ext, options)
    ) {
      return UPLOAD_PLACEHOLDER[i].icon || url
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
  var field = useField()
  useEffect(function () {
    var dispose = reaction(
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
    var list = toArr(value)
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
    return React.createElement(
      Button,
      null,
      React.createElement(UploadOutlined, null),
      props.textContent
    )
  }
  return React.createElement(UploadOutlined, { style: { fontSize: 20 } })
}
export var Upload = connect(
  function (props) {
    return React.createElement(
      AntdUpload,
      __assign({}, useUploadProps(props)),
      props.children || getPlaceholder(props)
    )
  },
  mapProps({
    value: 'fileList',
  })
)
var Dragger = connect(
  function (props) {
    return React.createElement(
      'div',
      { className: usePrefixCls('upload-dragger') },
      React.createElement(
        AntdUpload.Dragger,
        __assign({}, useUploadProps(props)),
        props.children ||
          React.createElement(
            React.Fragment,
            null,
            React.createElement(
              'p',
              { className: 'ant-upload-drag-icon' },
              React.createElement(InboxOutlined, null)
            ),
            props.textContent &&
              React.createElement(
                'p',
                { className: 'ant-upload-text' },
                props.textContent
              )
          )
      )
    )
  },
  mapProps({
    value: 'fileList',
  })
)
Upload.Dragger = Dragger
export default Upload
//# sourceMappingURL=index.js.map
