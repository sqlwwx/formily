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
import {
  defineComponent,
  provide,
  ref,
  onMounted,
  computed,
  watchEffect,
} from '@vue/composition-api'
import { h } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { markRaw } from '@formily/reactive'
import { Grid } from '@formily/grid'
import { stylePrefix } from '../__builtins__/configs'
import { composeExport } from '../__builtins__/shared'
import { useFormLayout } from '../form-layout'
import { inject } from '@vue/composition-api'
var FormGridSymbol = Symbol('FormGridContext')
export var createFormGrid = function (props) {
  return markRaw(new Grid(props))
}
export var useFormGrid = function () {
  return inject(FormGridSymbol)
}
/**
 * @deprecated
 */
var useGridSpan = function (gridSpan) {
  return gridSpan
}
/**
 * @deprecated
 */
export var useGridColumn = function (gridSpan) {
  if (gridSpan === void 0) {
    gridSpan = 1
  }
  return gridSpan
}
var FormGridInner = observer(
  defineComponent({
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
      var layout = useFormLayout()
      var gridInstance = computed(function () {
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
        return markRaw(
          (options === null || options === void 0 ? void 0 : options.grid)
            ? options.grid
            : new Grid(options)
        )
      })
      var prefixCls = ''.concat(stylePrefix, '-form-grid')
      var root = ref(null)
      provide(FormGridSymbol, gridInstance)
      onMounted(function () {
        watchEffect(function (onInvalidate) {
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
      return h(
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
var FormGridColumn = observer(
  defineComponent({
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
        return h(
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
export var FormGrid = composeExport(FormGridInner, {
  GridColumn: FormGridColumn,
  useGridSpan: useGridSpan,
  useFormGrid: useFormGrid,
  createFormGrid: createFormGrid,
})
export default FormGrid
//# sourceMappingURL=index.js.map
