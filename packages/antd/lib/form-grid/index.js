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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.GridColumn =
  exports.FormGrid =
  exports.useGridColumn =
  exports.useGridSpan =
  exports.useFormGrid =
  exports.createFormGrid =
    void 0
var react_1 = __importStar(require('react'))
var reactive_1 = require('@formily/reactive')
var react_2 = require('@formily/react')
var grid_1 = require('@formily/grid')
var __builtins__1 = require('../__builtins__')
var form_layout_1 = require('../form-layout')
var classnames_1 = __importDefault(require('classnames'))
var FormGridContext = react_1.default.createContext(null)
var createFormGrid = function (props) {
  return (0, reactive_1.markRaw)(new grid_1.Grid(props))
}
exports.createFormGrid = createFormGrid
var useFormGrid = function () {
  return (0, react_1.useContext)(FormGridContext)
}
exports.useFormGrid = useFormGrid
/**
 * @deprecated
 */
var useGridSpan = function (gridSpan) {
  if (gridSpan === void 0) {
    gridSpan = 1
  }
  return gridSpan
}
exports.useGridSpan = useGridSpan
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
exports.FormGrid = (0, react_2.observer)(
  function (_a) {
    var _b, _c
    var children = _a.children,
      className = _a.className,
      style = _a.style,
      props = __rest(_a, ['children', 'className', 'style'])
    var layout = (0, form_layout_1.useFormLayout)()
    var options = __assign(
      {
        columnGap:
          (_b =
            layout === null || layout === void 0
              ? void 0
              : layout.gridColumnGap) !== null && _b !== void 0
            ? _b
            : 8,
        rowGap:
          (_c =
            layout === null || layout === void 0
              ? void 0
              : layout.gridRowGap) !== null && _c !== void 0
            ? _c
            : 4,
      },
      props
    )
    var grid = (0, react_1.useMemo)(
      function () {
        return (0, reactive_1.markRaw)(
          (options === null || options === void 0 ? void 0 : options.grid)
            ? options.grid
            : new grid_1.Grid(options)
        )
      },
      [grid_1.Grid.id(options)]
    )
    var ref = (0, react_1.useRef)()
    var prefixCls = (0, __builtins__1.usePrefixCls)('formily-grid', props)
    var dataProps = (0, __builtins__1.pickDataProps)(props)
    ;(0, react_1.useLayoutEffect)(
      function () {
        return grid.connect(ref.current)
      },
      [grid]
    )
    return react_1.default.createElement(
      FormGridContext.Provider,
      { value: grid },
      react_1.default.createElement(
        'div',
        __assign({}, dataProps, {
          className: (0, classnames_1.default)(
            ''.concat(prefixCls, '-layout'),
            className
          ),
          style: __assign(__assign({}, style), {
            gridTemplateColumns: grid.templateColumns,
            gap: grid.gap,
          }),
          ref: ref,
        }),
        children
      )
    )
  },
  {
    forwardRef: true,
  }
)
exports.GridColumn = (0, react_2.observer)(function (_a) {
  var gridSpan = _a.gridSpan,
    children = _a.children,
    props = __rest(_a, ['gridSpan', 'children'])
  return react_1.default.createElement(
    'div',
    __assign({}, props, { style: props.style, 'data-grid-span': gridSpan }),
    children
  )
})
exports.GridColumn.defaultProps = {
  gridSpan: 1,
}
exports.FormGrid.createFormGrid = exports.createFormGrid
exports.FormGrid.useGridSpan = exports.useGridSpan
exports.FormGrid.useGridColumn = exports.useGridColumn
exports.FormGrid.useFormGrid = exports.useFormGrid
exports.FormGrid.GridColumn = exports.GridColumn
exports.default = exports.FormGrid
//# sourceMappingURL=index.js.map
