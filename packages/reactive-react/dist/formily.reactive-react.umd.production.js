!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('react-is'))
    : 'function' == typeof define && define.amd
    ? define('formily.reactive-react', ['exports', 'react-is'], t)
    : t(
        (((e =
          'undefined' != typeof globalThis ? globalThis : e || self).Formily =
          e.Formily || {}),
        (e.Formily.ReactiveReact = {}))
      )
})(this, function (e) {
  'use strict'
  !(function () {
    const e = { NODE_ENV: 'production' }
    try {
      if (process)
        return (
          (process.env = Object.assign({}, process.env)),
          void Object.assign(process.env, e)
        )
    } catch (e) {}
    globalThis.process = { env: e }
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
  var t = function () {
    return (
      (t =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          return e
        }),
      t.apply(this, arguments)
    )
  }
  function r(e, t) {
    var r = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!r) return e
    var n,
      o,
      c = r.call(e),
      i = []
    try {
      for (; (void 0 === t || t-- > 0) && !(n = c.next()).done; )
        i.push(n.value)
    } catch (e) {
      o = { error: e }
    } finally {
      try {
        n && !n.done && (r = c.return) && r.call(c)
      } finally {
        if (o) throw o.error
      }
    }
    return i
  }
  const n = ReactIs
  var o = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    c = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    i = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    u = {}
  function a(e) {
    return n.isMemo(e) ? i : u[e.$$typeof] || o
  }
  ;(u[n.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  }),
    (u[n.Memo] = i)
  var f = Object.defineProperty,
    l = Object.getOwnPropertyNames,
    s = Object.getOwnPropertySymbols,
    p = Object.getOwnPropertyDescriptor,
    y = Object.getPrototypeOf,
    d = Object.prototype
  var v = function e(t, r, n) {
    if ('string' != typeof r) {
      if (d) {
        var o = y(r)
        o && o !== d && e(t, o, n)
      }
      var i = l(r)
      s && (i = i.concat(s(r)))
      for (var u = a(t), v = a(r), h = 0; h < i.length; ++h) {
        var m = i[h]
        if (!(c[m] || (n && n[m]) || (v && v[m]) || (u && u[m]))) {
          var R = p(r, m)
          try {
            f(t, m, R)
          } catch (e) {}
        }
      }
    }
    return t
  }
  var h = (function () {
      try {
        if ('undefined' != typeof self) return self
      } catch (e) {}
      try {
        if ('undefined' != typeof window) return window
      } catch (e) {}
      try {
        if ('undefined' != typeof global) return global
      } catch (e) {}
      return Function('return this')()
    })(),
    m =
      h.FinalizationRegistry &&
      new h.FinalizationRegistry(function (e) {
        var t
        return null === (t = null == e ? void 0 : e.clean) || void 0 === t
          ? void 0
          : t.call(e)
      }),
    R = (function () {
      function e(e, t) {
        void 0 === t && (t = 1e4),
          (this.token = { clean: e }),
          (this.expireTime = t)
      }
      return (
        (e.prototype.open = function (e) {
          var t = this
          m
            ? m.register(e, this.token, this.token)
            : (this.request = setTimeout(function () {
                var e, r
                null ===
                  (r =
                    null === (e = t.token) || void 0 === e
                      ? void 0
                      : e.clean) ||
                  void 0 === r ||
                  r.call(e)
              }, this.expireTime))
        }),
        (e.prototype.close = function () {
          m ? m.unregister(this.token) : clearTimeout(this.request)
        }),
        e
      )
    })(),
    g = function (e) {
      var t = React.useRef(null)
      ;(t.current = (function (e) {
        var t = !1
        return (
          Promise.resolve(0).then(function () {
            t ? (t = !1) : e()
          }),
          function () {
            t = !0
          }
        )
      })(e)),
        React.useLayoutEffect(function () {
          t.current(), e()
        })
    },
    b = [],
    w = { value: 0 },
    O = new Set()
  var T = function () {}
  function P() {
    return new T()
  }
  var j = function (e, t) {
    var n = (function () {
        var e = r(React.useState([]), 2)[1],
          t = React.useRef(!1)
        React.useEffect(function () {
          return (
            (t.current = !1),
            function () {
              t.current = !0
            }
          )
        }, b)
        var n = React.useCallback(function () {
            t.current || e([])
          }, b),
          o = React.useCallback(function () {
            0 === w.value ? n() : O.add(n)
          }, b)
        return (
          w.value++,
          g(function () {
            w.value > 0 && w.value--,
              0 === w.value &&
                O.forEach(function (e) {
                  O.delete(e), e()
                })
          }),
          o
        )
      })(),
      o = React.useRef(!1),
      c = React.useRef(null),
      i = React.useRef(),
      u = r(React.useState(P), 1)[0]
    return (
      c.current ||
        (c.current = new Formily.Reactive.Tracker(
          function () {
            'function' == typeof (null == t ? void 0 : t.scheduler)
              ? t.scheduler(n)
              : n()
          },
          null == t ? void 0 : t.displayName
        )),
      i.current ||
        ((i.current = new R(function () {
          c.current && c.current.dispose()
        })),
        i.current.open(u)),
      React.useEffect(function () {
        return (
          (o.current = !1),
          i.current.close(),
          function () {
            ;(o.current = !0),
              c.current && (c.current.dispose(), (c.current = null))
          }
        )
      }, []),
      c.current.track(e)
    )
  }
  function F(e, r) {
    var n = t({ forwardRef: !1 }, r),
      o = n.forwardRef
        ? React.forwardRef(function (r, o) {
            return j(function () {
              return e(t(t({}, r), { ref: o }))
            }, n)
          })
        : function (t) {
            return j(function () {
              return e(t)
            }, n)
          },
      c = React.memo(o)
    return v(c, e), n.displayName && (c.displayName = n.displayName), c
  }
  var x = F(function (e) {
    var t = 'function' == typeof e.children ? e.children() : e.children
    return React.createElement(React.Fragment, {}, t)
  })
  ;(e.Observer = x),
    (e.observer = F),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
//# sourceMappingURL=formily.reactive-react.umd.production.js.map
