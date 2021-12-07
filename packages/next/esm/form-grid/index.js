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
import React, { useLayoutEffect, useRef, useMemo, useContext } from 'react'
import { markRaw } from '@formily/reactive'
import { observer } from '@formily/react'
import { Grid } from '@formily/grid'
import { usePrefixCls, pickDataProps } from '../__builtins__'
import { useFormLayout } from '../form-layout'
import cls from 'classnames'
var FormGridContext = React.createContext(null)
export var createFormGrid = function (props) {
  return markRaw(new Grid(props))
}
export var useFormGrid = function () {
  return useContext(FormGridContext)
}
/**
 * @deprecated
 */
export var useGridSpan = function (gridSpan) {
  if (gridSpan === void 0) {
    gridSpan = 1
  }
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
export var FormGrid = observer(
  function (_a) {
    var _b, _c
    var children = _a.children,
      className = _a.className,
      style = _a.style,
      props = __rest(_a, ['children', 'className', 'style'])
    var layout = useFormLayout()
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
    var grid = useMemo(
      function () {
        return markRaw(
          (options === null || options === void 0 ? void 0 : options.grid)
            ? options.grid
            : new Grid(options)
        )
      },
      [Grid.id(options)]
    )
    var ref = useRef()
    var prefixCls = usePrefixCls('formily-grid', props)
    var dataProps = pickDataProps(props)
    useLayoutEffect(
      function () {
        return grid.connect(ref.current)
      },
      [grid]
    )
    return React.createElement(
      FormGridContext.Provider,
      { value: grid },
      React.createElement(
        'div',
        __assign({}, dataProps, {
          className: cls(''.concat(prefixCls, '-layout'), className),
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
export var GridColumn = observer(function (_a) {
  var gridSpan = _a.gridSpan,
    children = _a.children,
    props = __rest(_a, ['gridSpan', 'children'])
  return React.createElement(
    'div',
    __assign({}, props, { 'data-grid-span': gridSpan }),
    children
  )
})
GridColumn.defaultProps = {
  gridSpan: 1,
}
FormGrid.createFormGrid = createFormGrid
FormGrid.useFormGrid = useFormGrid
FormGrid.useGridSpan = useGridSpan
FormGrid.useGridColumn = useGridColumn
FormGrid.GridColumn = GridColumn
export default FormGrid
//# sourceMappingURL=index.js.map
