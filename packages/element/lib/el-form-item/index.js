'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ElFormItem = void 0
var core_1 = require('@formily/core')
var vue_1 = require('@formily/vue')
var element_ui_1 = require('element-ui')
exports.ElFormItem = (0, vue_1.connect)(
  element_ui_1.FormItem,
  (0, vue_1.mapProps)(
    { title: 'label', required: true },
    function (props, field) {
      return {
        error: !(0, core_1.isVoidField)(field)
          ? field.errors.length
            ? field.errors.join('，')
            : undefined
          : undefined,
      }
    }
  )
)
exports.default = exports.ElFormItem
//# sourceMappingURL=index.js.map
