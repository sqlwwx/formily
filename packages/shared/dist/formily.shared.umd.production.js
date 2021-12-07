!(function (r, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define('formily.shared', ['exports'], e)
    : e(
        (((r =
          'undefined' != typeof globalThis ? globalThis : r || self).Formily =
          r.Formily || {}),
        (r.Formily.Shared = {}))
      )
})(this, function (r) {
  'use strict'
  !(function () {
    const r = { NODE_ENV: 'production' }
    try {
      if (process)
        return (
          (process.env = Object.assign({}, process.env)),
          void Object.assign(process.env, r)
        )
    } catch (r) {}
    globalThis.process = { env: r }
  })()
  var e = function (r) {
      return function (e) {
        return t(e) === '[object '.concat(r, ']')
      }
    },
    t = function (r) {
      return Object.prototype.toString.call(r)
    },
    n = function (r) {
      return 'function' == typeof r
    },
    i = Array.isArray,
    o = e('Object'),
    u = e('String'),
    c = e('Boolean'),
    f = e('Number'),
    a = function (r) {
      return 'object' == typeof r
    },
    s = e('RegExp')
  function l(r, e, t) {
    if (i(r) || u(r)) {
      if (t) {
        for (var n = r.length - 1; n >= 0; n--) if (!1 === e(r[n], n)) return
      } else for (n = 0; n < r.length; n++) if (!1 === e(r[n], n)) return
    } else if (a(r)) {
      var o = void 0
      for (o in r)
        if (Object.hasOwnProperty.call(r, o) && !1 === e(r[o], o)) return
    }
  }
  function p(r, e, t) {
    var n = !1
    return (
      l(
        r,
        function (r, t) {
          if (e(r, t)) return (n = !0), !1
        },
        t
      ),
      n
    )
  }
  var b = (function () {
      try {
        if ('undefined' != typeof self) return self
      } catch (r) {}
      try {
        if ('undefined' != typeof window) return window
      } catch (r) {}
      try {
        if ('undefined' != typeof global) return global
      } catch (r) {}
      return Function('return this')()
    })(),
    y = function (r, e) {
      return n(e) ? r instanceof e : !!u(e) && !!b[e] && r instanceof b[e]
    },
    d = i,
    v = Object.keys,
    g = Object.prototype.hasOwnProperty
  function h(r, e) {
    if (r === e) return !0
    if (r && e && 'object' == typeof r && 'object' == typeof e) {
      var t,
        n = d(r),
        i = d(e),
        o = void 0,
        u = void 0
      if (n && i) {
        if ((t = r.length) !== e.length) return !1
        for (o = t; 0 != o--; ) if (!h(r[o], e[o])) return !1
        return !0
      }
      if (n !== i) return !1
      var c = r && r._isAMomentObject,
        f = e && e._isAMomentObject
      if (c !== f) return !1
      if (c && f) return r.isSame(e)
      var a = r && r.toJS
      if (a !== (e && e.toJS)) return !1
      if (a) return r.is ? r.is(e) : r === e
      var s = y(r, 'Date'),
        l = y(e, 'Date')
      if (s !== l) return !1
      if (s && l) return r.getTime() === e.getTime()
      var p = y(r, 'RegExp'),
        b = y(e, 'RegExp')
      if (p !== b) return !1
      if (p && b) return r.toString() === e.toString()
      var m = y(r, 'URL'),
        O = y(e, 'URL')
      if (m !== O) return !1
      if (m && O) return r.href === e.href
      var j = r && r.toJSON,
        S = e && e.toJSON
      if (j !== S) return !1
      if (j && S) return h(r.toJSON(), e.toJSON())
      var w = v(r)
      if ((t = w.length) !== v(e).length) return !1
      for (o = t; 0 != o--; ) if (!g.call(e, w[o])) return !1
      for (o = t; 0 != o--; )
        if (!(('_owner' === (u = w[o]) && r.$$typeof) || h(r[u], e[u])))
          return !1
      return !0
    }
    return r != r && e != e
  }
  var m = function () {
      return (
        (m =
          Object.assign ||
          function (r) {
            for (var e, t = 1, n = arguments.length; t < n; t++)
              for (var i in (e = arguments[t]))
                Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i])
            return r
          }),
        m.apply(this, arguments)
      )
    },
    O = function (r) {
      if (Array.isArray(r)) {
        var e = []
        return (
          r.forEach(function (r) {
            e.push(O(r))
          }),
          e
        )
      }
      if (o(r)) {
        if ('$$typeof' in r && '_owner' in r) return r
        if (r._isAMomentObject) return r
        if (r._isJSONSchemaObject) return r
        if (n(r.toJS)) return r.toJS()
        if (n(r.toJSON)) return r.toJSON()
        var t = {}
        for (var i in r) Object.hasOwnProperty.call(r, i) && (t[i] = O(r[i]))
        return t
      }
      return r
    },
    j = Object.prototype.hasOwnProperty,
    S = Object.prototype.toString,
    w = function (r) {
      return null != r
    }
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
    ***************************************************************************** */ function A(
    r,
    e
  ) {
    if ((void 0 === e && (e = !1), null == r)) return !0
    if ('boolean' == typeof r) return !1
    if ('number' == typeof r) return !1
    if ('string' == typeof r) return 0 === r.length
    if ('function' == typeof r) return 0 === r.length
    if (Array.isArray(r)) {
      if (0 === r.length) return !0
      for (var t = 0; t < r.length; t++)
        if (e) {
          if (void 0 !== r[t] && null !== r[t]) return !1
        } else if (
          void 0 !== r[t] &&
          null !== r[t] &&
          '' !== r[t] &&
          0 !== r[t]
        )
          return !1
      return !0
    }
    if (y(r, 'Error')) return '' === r.message
    if (r.toString === S)
      switch (r.toString()) {
        case '[object File]':
        case '[object Map]':
        case '[object Set]':
          return 0 === r.size
        case '[object Object]':
          for (var n in r) if (j.call(r, n)) return !1
          return !0
      }
    return !1
  }
  function M(r) {
    return r.toLowerCase()
  }
  var E = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
    x = /[^A-Z0-9]+/gi
  function J(r, e) {
    void 0 === e && (e = {})
    for (
      var t = e.splitRegexp,
        n = void 0 === t ? E : t,
        i = e.stripRegexp,
        o = void 0 === i ? x : i,
        u = e.transform,
        c = void 0 === u ? M : u,
        f = e.delimiter,
        a = void 0 === f ? ' ' : f,
        s = P(P(r, n, '$1\0$2'), o, '\0'),
        l = 0,
        p = s.length;
      '\0' === s.charAt(l);

    )
      l++
    for (; '\0' === s.charAt(p - 1); ) p--
    return s.slice(l, p).split('\0').map(c).join(a)
  }
  function P(r, e, t) {
    return e instanceof RegExp
      ? r.replace(e, t)
      : e.reduce(function (r, e) {
          return r.replace(e, t)
        }, r)
  }
  function _(r, e) {
    var t = r.charAt(0),
      n = r.substr(1).toLowerCase()
    return e > 0 && t >= '0' && t <= '9'
      ? '_' + t + n
      : '' + t.toUpperCase() + n
  }
  function N(r, e) {
    return void 0 === e && (e = {}), J(r, m({ delimiter: '', transform: _ }, e))
  }
  function $(r, e) {
    return 0 === e ? r.toLowerCase() : _(r, e)
  }
  var R = '[\ud800-\udbff][\udc00-\udfff]',
    C = function (r) {
      return 'string' == typeof r
        ? r.replace(
            ((e = [
              '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)',
              '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))',
            ].join('|')),
            new RegExp(e, 'g')),
            ''
          )
        : r
      var e
    }
  const L = Formily.Path.Path
  var T = {}
  var k = function () {
    var r = this
    ;(this.subscribers = { index: 0 }),
      (this.subscribe = function (e) {
        if (n(e)) {
          var t = r.subscribers.index + 1
          return (r.subscribers[t] = e), r.subscribers.index++, t
        }
      }),
      (this.unsubscribe = function (e) {
        r.subscribers[e]
          ? delete r.subscribers[e]
          : e || (r.subscribers = { index: 0 })
      }),
      (this.notify = function (e, t) {
        ;(r.subscription &&
          r.subscription &&
          n(r.subscription.notify) &&
          !1 === r.subscription.notify.call(r, e)) ||
          t ||
          l(r.subscribers, function (t) {
            n(t) &&
              t(
                (function (e) {
                  return r.subscription && n(r.subscription.filter)
                    ? r.subscription.filter.call(r, e)
                    : e
                })(e)
              )
          })
      })
  }
  function F(r) {
    return (
      (function (r) {
        return !!r && 'object' == typeof r
      })(r) &&
      !(function (r) {
        var e = Object.prototype.toString.call(r)
        return (
          '[object RegExp]' === e ||
          '[object Date]' === e ||
          (function (r) {
            return r.$$typeof === Z
          })(r)
        )
      })(r)
    )
  }
  var Z =
    'function' == typeof Symbol && Symbol.for
      ? Symbol.for('react.element')
      : 60103
  function z(r, e) {
    return !1 !== e.clone && e.isMergeableObject(r)
      ? I(((t = r), Array.isArray(t) ? [] : {}), r, e)
      : r
    var t
  }
  function D(r, e, t) {
    return r.concat(e).map(function (r) {
      return z(r, t)
    })
  }
  function U(r) {
    return w(r)
      ? Object.keys(r).concat(
          (function (r) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(r).filter(function (e) {
                  return r.propertyIsEnumerable(e)
                })
              : []
          })(r)
        )
      : []
  }
  function W(r, e) {
    try {
      return e in r
    } catch (r) {
      return !1
    }
  }
  function B(r, e, t) {
    var n = (t.assign && r) || {}
    return t.isMergeableObject(r)
      ? (t.assign ||
          U(r).forEach(function (e) {
            n[e] = z(r[e], t)
          }),
        U(e).forEach(function (i) {
          ;(function (r, e) {
            return (
              W(r, e) &&
              !(
                Object.hasOwnProperty.call(r, e) &&
                Object.propertyIsEnumerable.call(r, e)
              )
            )
          })(r, i) ||
            (r[i] || (n[i] = e[i]),
            W(r, i) && t.isMergeableObject(e[i])
              ? (n[i] = (function (r, e) {
                  if (!e.customMerge) return I
                  var t = e.customMerge(r)
                  return 'function' == typeof t ? t : I
                })(i, t)(r[i], e[i], t))
              : (n[i] = z(e[i], t)))
        }),
        n)
      : r
  }
  function I(r, e, t) {
    ;((t = t || {}).arrayMerge = t.arrayMerge || D),
      (t.isMergeableObject = t.isMergeableObject || F),
      (t.cloneUnlessOtherwiseSpecified = z)
    var n = Array.isArray(e)
    return n === Array.isArray(r)
      ? n
        ? t.arrayMerge(r, e, t)
        : B(r, e, t)
      : z(e, t)
  }
  for (
    var q = I,
      H = function (r) {
        return (
          !(
            ((null == (e = r) ? void 0 : e._owner) &&
              (null == e ? void 0 : e.$$typeof)) ||
            (null == e ? void 0 : e._isAMomentObject) ||
            (null == e ? void 0 : e._isJSONSchemaObject) ||
            (null == e ? void 0 : e.toJS) ||
            (null == e ? void 0 : e.toJSON)
          ) && 'object' == typeof r
        )
        var e
      },
      V = function (r, e) {
        if (t(r) === t(e) && H(r) && H(e)) {
          var n = i(r) ? [] : o(r) ? {} : r
          return (
            l(e, function (e, t) {
              n[t] = V(r[t], e)
            }),
            l(r, function (r, e) {
              w(n[e]) || (n[e] = r)
            }),
            n
          )
        }
        return A(e) ? r : e
      },
      G = 36,
      K = '';
    G--;

  )
    K += G.toString(36)
  ;(r.FormPath = L),
    (r.Subscribable = k),
    (r.applyMiddleware = function (r, e) {
      void 0 === e && (e = [])
      var t = function (r, e) {
        var n = r
        return Promise.resolve(
          e[0](r, function (r) {
            return t(null != r ? r : n, e.slice(1))
          })
        )
      }
      return new Promise(function (n, i) {
        t(
          r,
          e.concat(function (r) {
            n(r)
          })
        ).catch(i)
      })
    }),
    (r.camelCase = function (r, e) {
      return void 0 === e && (e = {}), N(r, m({ transform: $ }, e))
    }),
    (r.clone = O),
    (r.defaults = V),
    (r.deprecate = function r(e, t, i) {
      if (n(e))
        return function (n, o, u, c, f) {
          return r(t, i), e.apply(this, arguments)
        }
      u(e) &&
        !T[e] &&
        ((T[e] = !0),
        console.warn(
          new Error(
            ''
              .concat(
                e,
                ' has been deprecated. Do not continue to use this api.'
              )
              .concat(t || '')
          )
        ))
    }),
    (r.each = l),
    (r.every = function (r, e, t) {
      var n = !0
      return (
        l(
          r,
          function (r, t) {
            if (!e(r, t)) return (n = !1), !1
          },
          t
        ),
        n
      )
    }),
    (r.find = function (r, e, t) {
      var n
      return (
        l(
          r,
          function (r, t) {
            if (e(r, t)) return (n = r), !1
          },
          t
        ),
        n
      )
    }),
    (r.findIndex = function (r, e, t) {
      var n = -1
      return (
        l(
          r,
          function (r, t) {
            if (e(r, t)) return (n = t), !1
          },
          t
        ),
        n
      )
    }),
    (r.getType = t),
    (r.globalThisPolyfill = b),
    (r.includes = function (r, e, t) {
      return u(r)
        ? r.includes(e)
        : p(
            r,
            function (r) {
              return r === e
            },
            t
          )
    }),
    (r.instOf = y),
    (r.isArr = i),
    (r.isBool = c),
    (r.isEmpty = A),
    (r.isEqual = function (r, e) {
      try {
        return h(r, e)
      } catch (r) {
        if (
          (r.message && r.message.match(/stack|recursion/i)) ||
          -2146828260 === r.number
        )
          return (
            console.warn(
              'Warning: react-fast-compare does not handle circular references.',
              r.name,
              r.message
            ),
            !1
          )
        throw r
      }
    }),
    (r.isFn = n),
    (r.isHTMLElement = function (r) {
      return Object.prototype.toString.call(r).indexOf('HTML') > -1
    }),
    (r.isMap = function (r) {
      return r && r instanceof Map
    }),
    (r.isNum = f),
    (r.isNumberLike = function (r) {
      return f(r) || /^\d+$/.test(r)
    }),
    (r.isObj = a),
    (r.isPlainObj = o),
    (r.isReactElement = function (r) {
      return r && r.$$typeof && r._owner
    }),
    (r.isRegExp = s),
    (r.isSet = function (r) {
      return r && r instanceof Set
    }),
    (r.isStr = u),
    (r.isValid = w),
    (r.isWeakMap = function (r) {
      return r && r instanceof WeakMap
    }),
    (r.isWeakSet = function (r) {
      return r && r instanceof WeakSet
    }),
    (r.lowerCase = M),
    (r.map = function (r, e, t) {
      var n = i(r) || u(r) ? [] : {}
      return (
        l(
          r,
          function (r, t) {
            var o = e(r, t)
            i(n) ? n.push(o) : (n[t] = o)
          },
          t
        ),
        n
      )
    }),
    (r.merge = q),
    (r.paramCase = function (r, e) {
      return (
        void 0 === e && (e = {}),
        (function (r, e) {
          return void 0 === e && (e = {}), J(r, m({ delimiter: '.' }, e))
        })(r, m({ delimiter: '-' }, e))
      )
    }),
    (r.pascalCase = N),
    (r.reduce = function (r, e, t, n) {
      var i = t
      return (
        l(
          r,
          function (r, t) {
            i = e(i, r, t)
          },
          n
        ),
        i
      )
    }),
    (r.shallowClone = function (r) {
      return Array.isArray(r)
        ? r.slice(0)
        : o(r)
        ? ('$$typeof' in r && '_owner' in r) ||
          r._isAMomentObject ||
          r._isJSONSchemaObject ||
          n(r.toJS) ||
          n(r.toJSON)
          ? r
          : m({}, r)
        : 'object' == typeof r
        ? new r.constructor(r)
        : r
    }),
    (r.some = p),
    (r.stringLength = function (r) {
      return C(r).replace(
        e && e.exact ? new RegExp('^'.concat(R, '$')) : new RegExp(R, 'g'),
        ' '
      ).length
      var e
    }),
    (r.toArr = function (r) {
      return i(r) ? r : r ? [r] : []
    }),
    (r.uid = function (r) {
      for (var e = '', t = r || 11; t--; ) e += K[(36 * Math.random()) | 0]
      return e
    }),
    (r.upperCase = function (r) {
      return r.toUpperCase()
    }),
    Object.defineProperty(r, '__esModule', { value: !0 })
})
//# sourceMappingURL=formily.shared.umd.production.js.map
