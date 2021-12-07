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
exports.Grid = void 0
var reactive_1 = require('@formily/reactive')
var observer_1 = require('./observer')
var SpanRegExp = /span\s*(\d+)/
var isValid = function (value) {
  return value !== undefined && value !== null
}
var calcBreakpointIndex = function (breakpoints, width) {
  if (Array.isArray(breakpoints)) {
    for (var i = 0; i < breakpoints.length; i++) {
      if (width <= breakpoints[i]) {
        return i
      }
    }
  }
  return -1
}
var calcFactor = function (value, breakpointIndex) {
  var _a
  if (Array.isArray(value)) {
    if (breakpointIndex === -1) return value[0]
    return (_a = value[breakpointIndex]) !== null && _a !== void 0
      ? _a
      : value[value.length - 1]
  } else {
    return value
  }
}
var parseGridNode = function (elements) {
  return Array.from(elements).reduce(function (buf, element, index) {
    var _a
    var style = getComputedStyle(element)
    var visible = !(style.display === 'none')
    var origin = element.getAttribute('data-grid-span')
    var span =
      (_a = parseSpan(style.gridColumnStart)) !== null && _a !== void 0 ? _a : 1
    var originSpan = Number(
      origin !== null && origin !== void 0 ? origin : span
    )
    var node = {
      index: index,
      span: span,
      visible: visible,
      originSpan: originSpan,
      element: element,
    }
    if (!origin) {
      element.setAttribute('data-grid-span', String(span))
    }
    return buf.concat(node)
  }, [])
}
var calcChildTotalColumns = function (nodes, shadow) {
  if (shadow === void 0) {
    shadow = false
  }
  return nodes.reduce(function (buf, node) {
    var _a
    if (!shadow) {
      if (!node.visible) return buf
    }
    if (node.originSpan === -1)
      return buf + ((_a = node.span) !== null && _a !== void 0 ? _a : 1)
    return buf + node.span
  }, 0)
}
var calcChildOriginTotalColumns = function (nodes, shadow) {
  if (shadow === void 0) {
    shadow = false
  }
  return nodes.reduce(function (buf, node) {
    var _a
    if (!shadow) {
      if (!node.visible) return buf
    }
    if (node.originSpan === -1)
      return buf + ((_a = node.span) !== null && _a !== void 0 ? _a : 1)
    return buf + node.originSpan
  }, 0)
}
var calcSatisfyColumns = function (
  width,
  maxColumns,
  minColumns,
  maxWidth,
  minWidth,
  gap
) {
  var results = []
  for (var columns = minColumns; columns <= maxColumns; columns++) {
    var innerWidth_1 = width - (columns - 1) * gap
    var columnWidth = innerWidth_1 / columns
    if (columnWidth >= minWidth && columnWidth <= maxWidth) {
      results.push(columns)
    } else if (columnWidth < minWidth) {
      results.push(Math.min(Math.floor(innerWidth_1 / minWidth), maxColumns))
    } else if (columnWidth > maxWidth) {
      results.push(Math.min(Math.floor(innerWidth_1 / maxWidth), maxColumns))
    }
  }
  return Math.max.apply(Math, __spreadArray([], __read(results), false))
}
var parseSpan = function (gridColumnStart) {
  var _a, _b
  return Number(
    (_b =
      (_a = String(gridColumnStart).match(SpanRegExp)) === null || _a === void 0
        ? void 0
        : _a[1]) !== null && _b !== void 0
      ? _b
      : 1
  )
}
var factor = function (value, grid) {
  return isValid(value) ? calcFactor(value, grid.breakpoint) : value
}
var resolveChildren = function (grid) {
  var walked = 0,
    shadowWalked = 0,
    rowIndex = 0,
    shadowRowIndex = 0
  if (!grid.ready) return
  grid.children = grid.children.map(function (node) {
    var _a
    var columnIndex = walked % grid.columns
    var shadowColumnIndex = shadowWalked % grid.columns
    var remainColumns = grid.columns - columnIndex
    var originSpan = node.originSpan
    var targetSpan = originSpan > grid.columns ? grid.columns : originSpan
    var span = grid.options.strictAutoFit
      ? targetSpan
      : targetSpan > remainColumns
      ? remainColumns
      : targetSpan
    var gridColumn =
      originSpan === -1
        ? 'span '.concat(remainColumns, ' / -1')
        : 'span '.concat(span, ' / auto')
    if (node.element.style.gridColumn !== gridColumn) {
      node.element.style.gridColumn = gridColumn
    }
    if (node.visible) {
      walked += span
    }
    shadowWalked += span
    if (columnIndex === 0) {
      rowIndex++
    }
    if (shadowColumnIndex == 0) {
      shadowRowIndex++
    }
    node.shadowRow = shadowRowIndex
    node.shadowColumn = shadowColumnIndex + 1
    if (node.visible) {
      node.row = rowIndex
      node.column = columnIndex + 1
    }
    if (
      (_a = grid.options) === null || _a === void 0 ? void 0 : _a.shouldVisible
    ) {
      if (!grid.options.shouldVisible(node, grid)) {
        if (node.visible) {
          node.element.style.display = 'none'
        }
        node.visible = false
      } else {
        if (!node.visible) {
          node.element.style.display = ''
        }
        node.visible = true
      }
    }
    return node
  })
}
var nextTick = function (callback) {
  return Promise.resolve(0).then(callback)
}
var Grid = /** @class */ (function () {
  function Grid(options) {
    var _this = this
    this.width = 0
    this.height = 0
    this.children = []
    this.childTotalColumns = 0
    this.shadowChildTotalColumns = 0
    this.childOriginTotalColumns = 0
    this.shadowChildOriginTotalColumns = 0
    this.ready = false
    this.connect = function (container) {
      if (container) {
        _this.container = container
        var initialize = reactive_1.batch.bound(function () {
          digest_1()
          _this.ready = true
        })
        var digest_1 = reactive_1.batch.bound(function () {
          _this.children = parseGridNode(_this.container.children)
          _this.childTotalColumns = calcChildTotalColumns(_this.children)
          _this.shadowChildTotalColumns = calcChildTotalColumns(
            _this.children,
            true
          )
          _this.childOriginTotalColumns = calcChildOriginTotalColumns(
            _this.children
          )
          _this.shadowChildOriginTotalColumns = calcChildOriginTotalColumns(
            _this.children,
            true
          )
          var rect = _this.container.getBoundingClientRect()
          if (rect.width && rect.height) {
            _this.width = rect.width
            _this.height = rect.height
          }
          resolveChildren(_this)
          nextTick(function () {
            var _a, _b
            ;(_b =
              (_a = _this.options) === null || _a === void 0
                ? void 0
                : _a.onDigest) === null || _b === void 0
              ? void 0
              : _b.call(_a, _this)
          })
          if (!_this.ready) {
            nextTick(function () {
              var _a, _b
              ;(_b =
                (_a = _this.options) === null || _a === void 0
                  ? void 0
                  : _a.onInitialized) === null || _b === void 0
                ? void 0
                : _b.call(_a, _this)
            })
          }
        })
        var mutationObserver_1 = new observer_1.ChildListMutationObserver(
          digest_1
        )
        var resizeObserver_1 = new ResizeObserver(digest_1)
        var dispose_1 = (0, reactive_1.reaction)(function () {
          return __assign({}, _this.options)
        }, digest_1)
        resizeObserver_1.observe(_this.container)
        mutationObserver_1.observe(_this.container, {
          attributeFilter: ['style', 'class', 'data-grid-span'],
          attributes: true,
        })
        initialize()
        return function () {
          resizeObserver_1.unobserve(_this.container)
          resizeObserver_1.disconnect()
          mutationObserver_1.disconnect()
          dispose_1()
          _this.children = []
        }
      }
      return function () {}
    }
    this.options = __assign(
      {
        breakpoints: [720, 1280, 1920],
        columnGap: 8,
        rowGap: 4,
        minWidth: 100,
        colWrap: true,
        strictAutoFit: false,
      },
      options
    )
    ;(0, reactive_1.define)(this, {
      options: reactive_1.observable.shallow,
      width: reactive_1.observable.ref,
      height: reactive_1.observable.ref,
      ready: reactive_1.observable.ref,
      children: reactive_1.observable.ref,
      childOriginTotalColumns: reactive_1.observable.ref,
      shadowChildOriginTotalColumns: reactive_1.observable.ref,
      shadowChildTotalColumns: reactive_1.observable.ref,
      childTotalColumns: reactive_1.observable.ref,
      columns: reactive_1.observable.computed,
      templateColumns: reactive_1.observable.computed,
      gap: reactive_1.observable.computed,
      maxColumns: reactive_1.observable.computed,
      minColumns: reactive_1.observable.computed,
      maxWidth: reactive_1.observable.computed,
      minWidth: reactive_1.observable.computed,
      breakpoints: reactive_1.observable.computed,
      breakpoint: reactive_1.observable.computed,
      rowGap: reactive_1.observable.computed,
      columnGap: reactive_1.observable.computed,
      colWrap: reactive_1.observable.computed,
    })
  }
  Object.defineProperty(Grid.prototype, 'breakpoints', {
    get: function () {
      return this.options.breakpoints
    },
    set: function (breakpoints) {
      this.options.breakpoints = breakpoints
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'breakpoint', {
    get: function () {
      return calcBreakpointIndex(this.options.breakpoints, this.width)
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'maxWidth', {
    get: function () {
      var _a
      return (_a = factor(this.options.maxWidth, this)) !== null &&
        _a !== void 0
        ? _a
        : Infinity
    },
    set: function (maxWidth) {
      this.options.maxWidth = maxWidth
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'minWidth', {
    get: function () {
      var _a
      return (_a = factor(this.options.minWidth, this)) !== null &&
        _a !== void 0
        ? _a
        : 100
    },
    set: function (minWidth) {
      this.options.minWidth = minWidth
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'maxColumns', {
    get: function () {
      var _a
      return (_a = factor(this.options.maxColumns, this)) !== null &&
        _a !== void 0
        ? _a
        : Infinity
    },
    set: function (maxColumns) {
      this.options.maxColumns = maxColumns
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'maxRows', {
    get: function () {
      var _a
      return (_a = this.options.maxRows) !== null && _a !== void 0
        ? _a
        : Infinity
    },
    set: function (maxRows) {
      this.options.maxRows = maxRows
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'minColumns', {
    get: function () {
      var _a
      return (_a = factor(this.options.minColumns, this)) !== null &&
        _a !== void 0
        ? _a
        : 1
    },
    set: function (minColumns) {
      this.options.minColumns = minColumns
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'rowGap', {
    get: function () {
      var _a
      return (_a = factor(this.options.rowGap, this)) !== null && _a !== void 0
        ? _a
        : 5
    },
    set: function (rowGap) {
      this.options.rowGap = rowGap
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'columnGap', {
    get: function () {
      var _a
      return (_a = factor(this.options.columnGap, this)) !== null &&
        _a !== void 0
        ? _a
        : 10
    },
    set: function (columnGap) {
      this.options.columnGap = columnGap
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'colWrap', {
    get: function () {
      var _a
      return (_a = factor(this.options.colWrap, this)) !== null && _a !== void 0
        ? _a
        : true
    },
    set: function (colWrap) {
      this.options.colWrap = colWrap
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'columns', {
    get: function () {
      if (!this.ready) return 0
      var originTotalColumns = this.childOriginTotalColumns
      if (this.colWrap === false) {
        return originTotalColumns
      }
      var baseColumns = this.childSize
      var maxWidthColumns = Math.min(
        originTotalColumns,
        Math.round(this.width / (this.maxWidth + this.columnGap))
      )
      var minWidthColumns = Math.min(
        originTotalColumns,
        Math.round(this.width / (this.minWidth + this.columnGap))
      )
      var minCalculatedColumns = Math.min(
        baseColumns,
        maxWidthColumns,
        minWidthColumns
      )
      var maxCalculatedColumns = Math.max(
        baseColumns,
        maxWidthColumns,
        minWidthColumns
      )
      var finalColumns = calcSatisfyColumns(
        this.width,
        maxCalculatedColumns,
        minCalculatedColumns,
        this.maxWidth,
        this.minWidth,
        this.columnGap
      )
      if (finalColumns >= this.maxColumns) {
        return this.maxColumns
      }
      if (finalColumns <= this.minColumns) {
        return this.minColumns
      }
      return finalColumns
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'rows', {
    get: function () {
      return Math.ceil(this.childTotalColumns / this.columns)
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'shadowRows', {
    get: function () {
      return Math.ceil(this.shadowChildTotalColumns / this.columns)
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'templateColumns', {
    get: function () {
      if (!this.width) return ''
      if (this.maxWidth === Infinity) {
        return 'repeat('.concat(this.columns, ',1fr)')
      }
      if (this.options.strictAutoFit !== true) {
        var columnWidth =
          (this.width - (this.columns - 1) * this.columnGap) / this.columns
        if (columnWidth < this.minWidth || columnWidth > this.maxWidth) {
          return 'repeat('.concat(this.columns, ',1fr)')
        }
      }
      return 'repeat('
        .concat(this.columns, ',minmax(')
        .concat(this.minWidth, 'px,')
        .concat(this.maxWidth, 'px))')
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'gap', {
    get: function () {
      return ''.concat(this.rowGap, 'px ').concat(this.columnGap, 'px')
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'childSize', {
    get: function () {
      return this.children.length
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Grid.prototype, 'fullnessLastColumn', {
    get: function () {
      var _a
      return (
        this.columns ===
        ((_a = this.children[this.childSize - 1]) === null || _a === void 0
          ? void 0
          : _a.span)
      )
    },
    enumerable: false,
    configurable: true,
  })
  Grid.id = function (options) {
    if (options === void 0) {
      options = {}
    }
    return JSON.stringify(
      [
        'maxRows',
        'maxColumns',
        'minColumns',
        'maxWidth',
        'minWidth',
        'breakpoints',
        'columnGap',
        'rowGap',
        'colWrap',
        'strictAutoFit',
      ].map(function (key) {
        return options[key]
      })
    )
  }
  return Grid
})()
exports.Grid = Grid
//# sourceMappingURL=index.js.map
