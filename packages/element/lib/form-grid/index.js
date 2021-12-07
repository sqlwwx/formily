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
Object.defineProperty(exports, '__esModule', { value: true })
exports.FormGrid =
  exports.useGridColumn =
  exports.useFormGrid =
  exports.createFormGrid =
    void 0
var composition_api_1 = require('@vue/composition-api')
var vue_1 = require('@formily/vue')
var reactive_vue_1 = require('@formily/reactive-vue')
var reactive_1 = require('@formily/reactive')
var grid_1 = require('@formily/grid')
var configs_1 = require('../__builtins__/configs')
var shared_1 = require('../__builtins__/shared')
var form_layout_1 = require('../form-layout')
var composition_api_2 = require('@vue/composition-api')
var FormGridSymbol = Symbol('FormGridContext')
var createFormGrid = function (props) {
  return (0, reactive_1.markRaw)(new grid_1.Grid(props))
}
exports.createFormGrid = createFormGrid
var useFormGrid = function () {
  return (0, composition_api_2.inject)(FormGridSymbol)
}
exports.useFormGrid = useFormGrid
/**
 * @deprecated
 */
var useGridSpan = function (gridSpan) {
  return gridSpan
}
/**
 * @deprecated
 */
var useGridColumn = function (gridSpan) {
  if (gridSpan === void 0) {
    gridSpan = 1
  }
  return gridSpan
}
exports.useGridColumn = useGridColumn
var FormGridInner = (0, reactive_vue_1.observer)(
  (0, composition_api_1.defineComponent)({
    name: 'FFormGrid',
    props: {
      columnGap: {
        type: Number,
      },
      rowGap: {
        type: Number,
      },
      minColumns: {
        type: [Number, Array],
      },
      minWidth: {
        type: [Number, Array],
      },
      maxColumns: {
        type: [Number, Array],
      },
      maxWidth: {
        type: [Number, Array],
      },
      breakpoints: {
        type: Array,
      },
      colWrap: {
        type: Boolean,
        default: true,
      },
      strictAutoFit: {
        type: Boolean,
        default: false,
      },
      shouldVisible: {
        type: Function,
        default: function () {
          return function () {
            return true
          }
        },
      },
      grid: {
        type: Object,
      },
    },
    setup: function (props) {
      var layout = (0, form_layout_1.useFormLayout)()
      var gridInstance = (0, composition_api_1.computed)(function () {
        var _a, _b, _c, _d
        var newProps = {}
        Object.keys(props).forEach(function (key) {
          if (typeof props[key] !== 'undefined') {
            newProps[key] = props[key]
          }
        })
        var options = __assign(
          {
            columnGap:
              (_b =
                (_a = layout.value) === null || _a === void 0
                  ? void 0
                  : _a.gridColumnGap) !== null && _b !== void 0
                ? _b
                : 8,
            rowGap:
              (_d =
                (_c = layout.value) === null || _c === void 0
                  ? void 0
                  : _c.gridRowGap) !== null && _d !== void 0
                ? _d
                : 4,
          },
          newProps
        )
        return (0,
        reactive_1.markRaw)((options === null || options === void 0 ? void 0 : options.grid) ? options.grid : new grid_1.Grid(options))
      })
      var prefixCls = ''.concat(configs_1.stylePrefix, '-form-grid')
      var root = (0, composition_api_1.ref)(null)
      ;(0, composition_api_1.provide)(FormGridSymbol, gridInstance)
      ;(0, composition_api_1.onMounted)(function () {
        ;(0, composition_api_1.watchEffect)(function (onInvalidate) {
          var dispose = gridInstance.value.connect(root.value)
          onInvalidate(function () {
            dispose()
          })
        })
      })
      return {
        prefixCls: prefixCls,
        root: root,
        gridInstance: gridInstance,
      }
    },
    render: function () {
      var _this = this
      var _a = this,
        prefixCls = _a.prefixCls,
        gridInstance = _a.gridInstance
      return (0, vue_1.h)(
        'div',
        {
          attrs: {
            class: ''.concat(prefixCls),
          },
          style: {
            gridTemplateColumns: gridInstance.templateColumns,
            gap: gridInstance.gap,
          },
          ref: 'root',
        },
        {
          default: function () {
            return _this.$slots.default
          },
        }
      )
    },
  })
)
var FormGridColumn = (0, reactive_vue_1.observer)(
  (0, composition_api_1.defineComponent)({
    name: 'FFormGridColumn',
    props: {
      gridSpan: {
        type: Number,
        default: 1,
      },
    },
    setup: function (props, _a) {
      var slots = _a.slots
      return function () {
        return (0, vue_1.h)(
          'div',
          {
            attrs: {
              'data-grid-span': props.gridSpan,
            },
          },
          slots
        )
      }
    },
  })
)
exports.FormGrid = (0, shared_1.composeExport)(FormGridInner, {
  GridColumn: FormGridColumn,
  useGridSpan: useGridSpan,
  useFormGrid: exports.useFormGrid,
  createFormGrid: exports.createFormGrid,
})
exports.default = exports.FormGrid
//# sourceMappingURL=index.js.map
