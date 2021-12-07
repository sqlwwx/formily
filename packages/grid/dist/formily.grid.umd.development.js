;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define('formily.grid', ['exports'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        ((global.Formily = global.Formily || {}), (global.Formily.Grid = {}))
      ))
})(this, function (exports) {
  'use strict'

  ;(function () {
    const env = { NODE_ENV: 'development' }
    try {
      if (process) {
        process.env = Object.assign({}, process.env)
        Object.assign(process.env, env)
        return
      }
    } catch (e) {} // avoid ReferenceError: process is not defined
    globalThis.process = { env: env }
  })()

  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

  var __assign = function () {
    __assign =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }

  function __read(o, n) {
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

  function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i]
    return to
  }

  var isHTMLElement = function (node) {
    return node.nodeType === 1
  }
  var ChildListMutationObserver = /** @class */ (function () {
    function ChildListMutationObserver(callback) {
      var _this = this
      this.childList = []
      this.handler = function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(function (node) {
              if (isHTMLElement(node)) {
                _this.addObserver(node)
              }
            })
            mutation.removedNodes.forEach(function (node) {
              if (isHTMLElement(node)) {
                _this.removeObserver(node)
              }
            })
          }
        })
        _this.callback(mutations, _this.observer)
      }
      this.observe = function (element, init) {
        _this.init = init
        _this.observeChildList(element)
        _this.observer.observe(
          element,
          __assign(__assign({}, _this.init), {
            subtree: false,
            childList: true,
            characterData: false,
            characterDataOldValue: false,
            attributeOldValue: false,
          })
        )
      }
      this.disconnect = function () {
        _this.observer.disconnect()
      }
      this.callback = callback
      this.observer = new MutationObserver(this.handler)
    }
    ChildListMutationObserver.prototype.observeChildList = function (element) {
      var _this = this
      Array.from(element.children).forEach(function (node) {
        _this.addObserver(node)
      })
    }
    ChildListMutationObserver.prototype.addObserver = function (element) {
      var _this = this
      var child = this.childList.find(function (t) {
        return t.element === element
      })
      if (!child) {
        var childIndex_1 = this.childList.length
        var child_1 = {
          element: element,
          observer: new MutationObserver(this.callback),
          dispose: function () {
            if (child_1.observer) {
              child_1.observer.disconnect()
              delete child_1.observer
              _this.childList.splice(childIndex_1, 1)
            }
          },
        }
        child_1.observer.observe(
          child_1.element,
          __assign(__assign({}, this.init), {
            subtree: false,
            childList: false,
            characterData: false,
            characterDataOldValue: false,
            attributeOldValue: false,
          })
        )
        this.childList.push(child_1)
      }
    }
    ChildListMutationObserver.prototype.removeObserver = function (element) {
      var _a
      var child = this.childList.find(function (t) {
        return t.element === element
      })
      if (child) {
        ;(_a = child.dispose) === null || _a === void 0
          ? void 0
          : _a.call(child)
      }
    }
    return ChildListMutationObserver
  })()

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
        (_a = parseSpan(style.gridColumnStart)) !== null && _a !== void 0
          ? _a
          : 1
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
    return Math.max.apply(Math, __spreadArray([], __read(results)))
  }
  var parseSpan = function (gridColumnStart) {
    var _a, _b
    return Number(
      (_b =
        (_a = String(gridColumnStart).match(SpanRegExp)) === null ||
        _a === void 0
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
        (_a = grid.options) === null || _a === void 0
          ? void 0
          : _a.shouldVisible
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
          var initialize = Formily.Reactive.batch.bound(function () {
            digest_1()
            _this.ready = true
          })
          var digest_1 = Formily.Reactive.batch.bound(function () {
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
          var mutationObserver_1 = new ChildListMutationObserver(digest_1)
          var resizeObserver_1 = new ResizeObserver(digest_1)
          var dispose_1 = Formily.Reactive.reaction(function () {
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
      Formily.Reactive.define(this, {
        options: Formily.Reactive.observable.shallow,
        width: Formily.Reactive.observable.ref,
        height: Formily.Reactive.observable.ref,
        ready: Formily.Reactive.observable.ref,
        children: Formily.Reactive.observable.ref,
        childOriginTotalColumns: Formily.Reactive.observable.ref,
        shadowChildOriginTotalColumns: Formily.Reactive.observable.ref,
        shadowChildTotalColumns: Formily.Reactive.observable.ref,
        childTotalColumns: Formily.Reactive.observable.ref,
        columns: Formily.Reactive.observable.computed,
        templateColumns: Formily.Reactive.observable.computed,
        gap: Formily.Reactive.observable.computed,
        maxColumns: Formily.Reactive.observable.computed,
        minColumns: Formily.Reactive.observable.computed,
        maxWidth: Formily.Reactive.observable.computed,
        minWidth: Formily.Reactive.observable.computed,
        breakpoints: Formily.Reactive.observable.computed,
        breakpoint: Formily.Reactive.observable.computed,
        rowGap: Formily.Reactive.observable.computed,
        columnGap: Formily.Reactive.observable.computed,
        colWrap: Formily.Reactive.observable.computed,
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
        return (_a = factor(this.options.rowGap, this)) !== null &&
          _a !== void 0
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
        return (_a = factor(this.options.colWrap, this)) !== null &&
          _a !== void 0
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

  Object.defineProperty(exports, '__esModule', { value: true })
})
//# sourceMappingURL=formily.grid.umd.development.js.map
