!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define('formily.grid', ['exports'], e)
    : e(
        (((t =
          'undefined' != typeof globalThis ? globalThis : t || self).Formily =
          t.Formily || {}),
        (t.Formily.Grid = {}))
      )
})(this, function (t) {
  'use strict'
  !(function () {
    const t = { NODE_ENV: 'production' }
    try {
      if (process)
        return (
          (process.env = Object.assign({}, process.env)),
          void Object.assign(process.env, t)
        )
    } catch (t) {}
    globalThis.process = { env: t }
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
  var e = function () {
    return (
      (e =
        Object.assign ||
        function (t) {
          for (var e, i = 1, n = arguments.length; i < n; i++)
            for (var o in (e = arguments[i]))
              Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
          return t
        }),
      e.apply(this, arguments)
    )
  }
  var i = function (t) {
      return 1 === t.nodeType
    },
    n = (function () {
      function t(t) {
        var n = this
        ;(this.childList = []),
          (this.handler = function (t) {
            t.forEach(function (t) {
              'childList' === t.type &&
                (t.addedNodes.forEach(function (t) {
                  i(t) && n.addObserver(t)
                }),
                t.removedNodes.forEach(function (t) {
                  i(t) && n.removeObserver(t)
                }))
            }),
              n.callback(t, n.observer)
          }),
          (this.observe = function (t, i) {
            ;(n.init = i),
              n.observeChildList(t),
              n.observer.observe(
                t,
                e(e({}, n.init), {
                  subtree: !1,
                  childList: !0,
                  characterData: !1,
                  characterDataOldValue: !1,
                  attributeOldValue: !1,
                })
              )
          }),
          (this.disconnect = function () {
            n.observer.disconnect()
          }),
          (this.callback = t),
          (this.observer = new MutationObserver(this.handler))
      }
      return (
        (t.prototype.observeChildList = function (t) {
          var e = this
          Array.from(t.children).forEach(function (t) {
            e.addObserver(t)
          })
        }),
        (t.prototype.addObserver = function (t) {
          var i = this
          if (
            !this.childList.find(function (e) {
              return e.element === t
            })
          ) {
            var n = this.childList.length,
              o = {
                element: t,
                observer: new MutationObserver(this.callback),
                dispose: function () {
                  o.observer &&
                    (o.observer.disconnect(),
                    delete o.observer,
                    i.childList.splice(n, 1))
                },
              }
            o.observer.observe(
              o.element,
              e(e({}, this.init), {
                subtree: !1,
                childList: !1,
                characterData: !1,
                characterDataOldValue: !1,
                attributeOldValue: !1,
              })
            ),
              this.childList.push(o)
          }
        }),
        (t.prototype.removeObserver = function (t) {
          var e,
            i = this.childList.find(function (e) {
              return e.element === t
            })
          i && (null === (e = i.dispose) || void 0 === e || e.call(i))
        }),
        t
      )
    })(),
    o = /span\s*(\d+)/,
    r = function (t, e) {
      return (
        void 0 === e && (e = !1),
        t.reduce(function (t, i) {
          var n
          return e || i.visible
            ? -1 === i.originSpan
              ? t + (null !== (n = i.span) && void 0 !== n ? n : 1)
              : t + i.span
            : t
        }, 0)
      )
    },
    s = function (t, e) {
      return (
        void 0 === e && (e = !1),
        t.reduce(function (t, i) {
          var n
          return e || i.visible
            ? -1 === i.originSpan
              ? t + (null !== (n = i.span) && void 0 !== n ? n : 1)
              : t + i.originSpan
            : t
        }, 0)
      )
    },
    l = function (t, e, i, n, o, r) {
      for (var s = [], l = i; l <= e; l++) {
        var a = t - (l - 1) * r,
          c = a / l
        c >= o && c <= n
          ? s.push(l)
          : c < o
          ? s.push(Math.min(Math.floor(a / o), e))
          : c > n && s.push(Math.min(Math.floor(a / n), e))
      }
      return Math.max.apply(
        Math,
        (function (t, e) {
          for (var i = 0, n = e.length, o = t.length; i < n; i++, o++)
            t[o] = e[i]
          return t
        })(
          [],
          (function (t, e) {
            var i = 'function' == typeof Symbol && t[Symbol.iterator]
            if (!i) return t
            var n,
              o,
              r = i.call(t),
              s = []
            try {
              for (; (void 0 === e || e-- > 0) && !(n = r.next()).done; )
                s.push(n.value)
            } catch (t) {
              o = { error: t }
            } finally {
              try {
                n && !n.done && (i = r.return) && i.call(r)
              } finally {
                if (o) throw o.error
              }
            }
            return s
          })(s)
        )
      )
    },
    a = function (t) {
      var e, i
      return Number(
        null !==
          (i =
            null === (e = String(t).match(o)) || void 0 === e
              ? void 0
              : e[1]) && void 0 !== i
          ? i
          : 1
      )
    },
    c = function (t, e) {
      return (function (t) {
        return null != t
      })(t)
        ? (function (t, e) {
            var i
            return Array.isArray(t)
              ? -1 === e
                ? t[0]
                : null !== (i = t[e]) && void 0 !== i
                ? i
                : t[t.length - 1]
              : t
          })(t, e.breakpoint)
        : t
    },
    u = function (t) {
      return Promise.resolve(0).then(t)
    },
    h = (function () {
      function t(t) {
        var i = this
        ;(this.width = 0),
          (this.height = 0),
          (this.children = []),
          (this.childTotalColumns = 0),
          (this.shadowChildTotalColumns = 0),
          (this.childOriginTotalColumns = 0),
          (this.shadowChildOriginTotalColumns = 0),
          (this.ready = !1),
          (this.connect = function (t) {
            if (t) {
              i.container = t
              var o = Formily.Reactive.batch.bound(function () {
                  l(), (i.ready = !0)
                }),
                l = Formily.Reactive.batch.bound(function () {
                  var t
                  ;(i.children =
                    ((t = i.container.children),
                    Array.from(t).reduce(function (t, e, i) {
                      var n,
                        o = getComputedStyle(e),
                        r = !('none' === o.display),
                        s = e.getAttribute('data-grid-span'),
                        l =
                          null !== (n = a(o.gridColumnStart)) && void 0 !== n
                            ? n
                            : 1,
                        c = {
                          index: i,
                          span: l,
                          visible: r,
                          originSpan: Number(null != s ? s : l),
                          element: e,
                        }
                      return (
                        s || e.setAttribute('data-grid-span', String(l)),
                        t.concat(c)
                      )
                    }, []))),
                    (i.childTotalColumns = r(i.children)),
                    (i.shadowChildTotalColumns = r(i.children, !0)),
                    (i.childOriginTotalColumns = s(i.children)),
                    (i.shadowChildOriginTotalColumns = s(i.children, !0))
                  var e,
                    n,
                    o,
                    l,
                    c,
                    h = i.container.getBoundingClientRect()
                  h.width &&
                    h.height &&
                    ((i.width = h.width), (i.height = h.height)),
                    (n = 0),
                    (o = 0),
                    (l = 0),
                    (c = 0),
                    (e = i).ready &&
                      (e.children = e.children.map(function (t) {
                        var i,
                          r = n % e.columns,
                          s = o % e.columns,
                          a = e.columns - r,
                          u = t.originSpan,
                          h = u > e.columns ? e.columns : u,
                          d = e.options.strictAutoFit ? h : h > a ? a : h,
                          p =
                            -1 === u
                              ? 'span '.concat(a, ' / -1')
                              : 'span '.concat(d, ' / auto')
                        return (
                          t.element.style.gridColumn !== p &&
                            (t.element.style.gridColumn = p),
                          t.visible && (n += d),
                          (o += d),
                          0 === r && l++,
                          0 == s && c++,
                          (t.shadowRow = c),
                          (t.shadowColumn = s + 1),
                          t.visible && ((t.row = l), (t.column = r + 1)),
                          (null === (i = e.options) || void 0 === i
                            ? void 0
                            : i.shouldVisible) &&
                            (e.options.shouldVisible(t, e)
                              ? (t.visible || (t.element.style.display = ''),
                                (t.visible = !0))
                              : (t.visible &&
                                  (t.element.style.display = 'none'),
                                (t.visible = !1))),
                          t
                        )
                      })),
                    u(function () {
                      var t, e
                      null ===
                        (e =
                          null === (t = i.options) || void 0 === t
                            ? void 0
                            : t.onDigest) ||
                        void 0 === e ||
                        e.call(t, i)
                    }),
                    i.ready ||
                      u(function () {
                        var t, e
                        null ===
                          (e =
                            null === (t = i.options) || void 0 === t
                              ? void 0
                              : t.onInitialized) ||
                          void 0 === e ||
                          e.call(t, i)
                      })
                }),
                c = new n(l),
                h = new ResizeObserver(l),
                d = Formily.Reactive.reaction(function () {
                  return e({}, i.options)
                }, l)
              return (
                h.observe(i.container),
                c.observe(i.container, {
                  attributeFilter: ['style', 'class', 'data-grid-span'],
                  attributes: !0,
                }),
                o(),
                function () {
                  h.unobserve(i.container),
                    h.disconnect(),
                    c.disconnect(),
                    d(),
                    (i.children = [])
                }
              )
            }
            return function () {}
          }),
          (this.options = e(
            {
              breakpoints: [720, 1280, 1920],
              columnGap: 8,
              rowGap: 4,
              minWidth: 100,
              colWrap: !0,
              strictAutoFit: !1,
            },
            t
          )),
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
      return (
        Object.defineProperty(t.prototype, 'breakpoints', {
          get: function () {
            return this.options.breakpoints
          },
          set: function (t) {
            this.options.breakpoints = t
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'breakpoint', {
          get: function () {
            return (function (t, e) {
              if (Array.isArray(t))
                for (var i = 0; i < t.length; i++) if (e <= t[i]) return i
              return -1
            })(this.options.breakpoints, this.width)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'maxWidth', {
          get: function () {
            var t
            return null !== (t = c(this.options.maxWidth, this)) && void 0 !== t
              ? t
              : 1 / 0
          },
          set: function (t) {
            this.options.maxWidth = t
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'minWidth', {
          get: function () {
            var t
            return null !== (t = c(this.options.minWidth, this)) && void 0 !== t
              ? t
              : 100
          },
          set: function (t) {
            this.options.minWidth = t
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'maxColumns', {
          get: function () {
            var t
            return null !== (t = c(this.options.maxColumns, this)) &&
              void 0 !== t
              ? t
              : 1 / 0
          },
          set: function (t) {
            this.options.maxColumns = t
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'maxRows', {
          get: function () {
            var t
            return null !== (t = this.options.maxRows) && void 0 !== t
              ? t
              : 1 / 0
          },
          set: function (t) {
            this.options.maxRows = t
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'minColumns', {
          get: function () {
            var t
            return null !== (t = c(this.options.minColumns, this)) &&
              void 0 !== t
              ? t
              : 1
          },
          set: function (t) {
            this.options.minColumns = t
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'rowGap', {
          get: function () {
            var t
            return null !== (t = c(this.options.rowGap, this)) && void 0 !== t
              ? t
              : 5
          },
          set: function (t) {
            this.options.rowGap = t
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'columnGap', {
          get: function () {
            var t
            return null !== (t = c(this.options.columnGap, this)) &&
              void 0 !== t
              ? t
              : 10
          },
          set: function (t) {
            this.options.columnGap = t
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'colWrap', {
          get: function () {
            var t
            return (
              null === (t = c(this.options.colWrap, this)) || void 0 === t || t
            )
          },
          set: function (t) {
            this.options.colWrap = t
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'columns', {
          get: function () {
            if (!this.ready) return 0
            var t = this.childOriginTotalColumns
            if (!1 === this.colWrap) return t
            var e = this.childSize,
              i = Math.min(
                t,
                Math.round(this.width / (this.maxWidth + this.columnGap))
              ),
              n = Math.min(
                t,
                Math.round(this.width / (this.minWidth + this.columnGap))
              ),
              o = Math.min(e, i, n),
              r = Math.max(e, i, n),
              s = l(
                this.width,
                r,
                o,
                this.maxWidth,
                this.minWidth,
                this.columnGap
              )
            return s >= this.maxColumns
              ? this.maxColumns
              : s <= this.minColumns
              ? this.minColumns
              : s
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'rows', {
          get: function () {
            return Math.ceil(this.childTotalColumns / this.columns)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'shadowRows', {
          get: function () {
            return Math.ceil(this.shadowChildTotalColumns / this.columns)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'templateColumns', {
          get: function () {
            if (!this.width) return ''
            if (this.maxWidth === 1 / 0)
              return 'repeat('.concat(this.columns, ',1fr)')
            if (!0 !== this.options.strictAutoFit) {
              var t =
                (this.width - (this.columns - 1) * this.columnGap) /
                this.columns
              if (t < this.minWidth || t > this.maxWidth)
                return 'repeat('.concat(this.columns, ',1fr)')
            }
            return 'repeat('
              .concat(this.columns, ',minmax(')
              .concat(this.minWidth, 'px,')
              .concat(this.maxWidth, 'px))')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'gap', {
          get: function () {
            return ''.concat(this.rowGap, 'px ').concat(this.columnGap, 'px')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'childSize', {
          get: function () {
            return this.children.length
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'fullnessLastColumn', {
          get: function () {
            var t
            return (
              this.columns ===
              (null === (t = this.children[this.childSize - 1]) || void 0 === t
                ? void 0
                : t.span)
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.id = function (t) {
          return (
            void 0 === t && (t = {}),
            JSON.stringify(
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
              ].map(function (e) {
                return t[e]
              })
            )
          )
        }),
        t
      )
    })()
  ;(t.Grid = h), Object.defineProperty(t, '__esModule', { value: !0 })
})
//# sourceMappingURL=formily.grid.umd.production.js.map
