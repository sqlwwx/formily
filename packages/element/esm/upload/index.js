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
import { defineComponent } from '@vue/composition-api'
import { connect, mapProps, h, useField, Fragment } from '@formily/vue'
import { default as ElUpload } from 'element-ui/lib/upload'
import { default as ElButton } from 'element-ui/lib/button'
var UploadWrapper = defineComponent({
  name: 'FUpload',
  props: {
    textContent: {
      type: String,
      default: '',
    },
    errorAdaptor: {
      type: Function,
      default: function (error) {
        return (
          (error === null || error === void 0 ? void 0 : error.message) || ''
        )
      },
    },
  },
  setup: function (curProps, _a) {
    var slots = _a.slots,
      attrs = _a.attrs,
      listeners = _a.listeners,
      emit = _a.emit
    return function () {
      var fieldRef = useField()
      var setFeedBack = function (error) {
        var message = curProps.errorAdaptor(error)
        fieldRef.value.setFeedback({
          type: 'error',
          code: 'UploadError',
          messages: message ? [message] : [],
        })
      }
      var props = __assign(__assign({}, attrs), {
        onChange: function (file, fileList) {
          var _a
          ;(_a = attrs.onChange) === null || _a === void 0
            ? void 0
            : _a(file, fileList)
          setFeedBack()
          emit('change', fileList)
        },
        onRemove: function (file, fileList) {
          var _a
          ;(_a = attrs.onRemove) === null || _a === void 0
            ? void 0
            : _a(file, fileList)
          setFeedBack()
          emit('change', fileList)
        },
        onError: function (error, file, fileList) {
          var _a
          ;(_a = attrs.onError) === null || _a === void 0
            ? void 0
            : _a(error, file, fileList)
          setTimeout(function () {
            setFeedBack(error)
          }, 0)
        },
      })
      var children = __assign({}, slots)
      if (!slots.default) {
        children.default = function () {
          var listType = attrs.listType
          var drag = attrs.drag
          if (drag) {
            return h(
              Fragment,
              {},
              {
                default: function () {
                  return [
                    h('i', { staticClass: 'el-icon-upload' }, {}),
                    h(
                      'div',
                      { staticClass: 'el-upload__text' },
                      {
                        default: function () {
                          return [curProps.textContent]
                        },
                      }
                    ),
                  ]
                },
              }
            )
          }
          if (listType === 'picture-card') {
            return h(
              'i',
              {
                staticClass: 'el-icon-plus',
              },
              {}
            )
          }
          return h(
            ElButton,
            { props: { icon: 'el-icon-upload2' } },
            {
              default: function () {
                return [curProps.textContent]
              },
            }
          )
        }
      }
      return h(ElUpload, { attrs: props, on: listeners }, children)
    }
  },
})
export var Upload = connect(
  UploadWrapper,
  mapProps({ readOnly: 'readonly', value: 'fileList' })
)
export default Upload
//# sourceMappingURL=index.js.map
