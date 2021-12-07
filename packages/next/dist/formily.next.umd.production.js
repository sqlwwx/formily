!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('react-is'))
    : 'function' == typeof define && define.amd
    ? define('formily.next', ['exports', 'react-is'], t)
    : t(
        (((e =
          'undefined' != typeof globalThis ? globalThis : e || self).Formily =
          e.Formily || {}),
        (e.Formily.Next = {}))
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
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          return e
        }),
      t.apply(this, arguments)
    )
  }
  function n(e, t) {
    var n = {}
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r])
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var o = 0
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]])
    }
    return n
  }
  function r(e, t, n, r) {
    return new (n || (n = Promise))(function (o, a) {
      function i(e) {
        try {
          c(r.next(e))
        } catch (e) {
          a(e)
        }
      }
      function l(e) {
        try {
          c(r.throw(e))
        } catch (e) {
          a(e)
        }
      }
      function c(e) {
        e.done
          ? o(e.value)
          : (function (e) {
              return e instanceof n
                ? e
                : new n(function (t) {
                    t(e)
                  })
            })(e.value).then(i, l)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
  function o(e, t) {
    var n,
      r,
      o,
      a,
      i = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1]
          return o[1]
        },
        trys: [],
        ops: [],
      }
    return (
      (a = { next: l(0), throw: l(1), return: l(2) }),
      'function' == typeof Symbol &&
        (a[Symbol.iterator] = function () {
          return this
        }),
      a
    )
    function l(a) {
      return function (l) {
        return (function (a) {
          if (n) throw new TypeError('Generator is already executing.')
          for (; i; )
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & a[0]
                      ? r.return
                      : a[0]
                      ? r.throw || ((o = r.return) && o.call(r), 0)
                      : r.next) &&
                  !(o = o.call(r, a[1])).done)
              )
                return o
              switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                case 0:
                case 1:
                  o = a
                  break
                case 4:
                  return i.label++, { value: a[1], done: !1 }
                case 5:
                  i.label++, (r = a[1]), (a = [0])
                  continue
                case 7:
                  ;(a = i.ops.pop()), i.trys.pop()
                  continue
                default:
                  if (
                    !((o = i.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== a[0] && 2 !== a[0]))
                  ) {
                    i = 0
                    continue
                  }
                  if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                    i.label = a[1]
                    break
                  }
                  if (6 === a[0] && i.label < o[1]) {
                    ;(i.label = o[1]), (o = a)
                    break
                  }
                  if (o && i.label < o[2]) {
                    ;(i.label = o[2]), i.ops.push(a)
                    break
                  }
                  o[2] && i.ops.pop(), i.trys.pop()
                  continue
              }
              a = t.call(e, i)
            } catch (e) {
              ;(a = [6, e]), (r = 0)
            } finally {
              n = o = 0
            }
          if (5 & a[0]) throw a[1]
          return { value: a[0] ? a[1] : void 0, done: !0 }
        })([a, l])
      }
    }
  }
  function a(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!n) return e
    var r,
      o,
      a = n.call(e),
      i = []
    try {
      for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
        i.push(r.value)
    } catch (e) {
      o = { error: e }
    } finally {
      try {
        r && !r.done && (n = a.return) && n.call(a)
      } finally {
        if (o) throw o.error
      }
    }
    return i
  }
  function i() {
    return (
      (i =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
      i.apply(this, arguments)
    )
  }
  function l(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
    return r
  }
  function c(e, t) {
    if (e) {
      if ('string' == typeof e) return l(e, t)
      var n = Object.prototype.toString.call(e).slice(8, -1)
      return (
        'Object' === n && e.constructor && (n = e.constructor.name),
        'Map' === n || 'Set' === n
          ? Array.from(e)
          : 'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? l(e, t)
          : void 0
      )
    }
  }
  function s(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator']
        if (null != n) {
          var r,
            o,
            a = [],
            i = !0,
            l = !1
          try {
            for (
              n = n.call(e);
              !(i = (r = n.next()).done) &&
              (a.push(r.value), !t || a.length !== t);
              i = !0
            );
          } catch (e) {
            ;(l = !0), (o = e)
          } finally {
            try {
              i || null == n.return || n.return()
            } finally {
              if (l) throw o
            }
          }
          return a
        }
      })(e, t) ||
      c(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function u(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    )
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? Object(arguments[t]) : {},
        r = Object.keys(n)
      'function' == typeof Object.getOwnPropertySymbols &&
        r.push.apply(
          r,
          Object.getOwnPropertySymbols(n).filter(function (e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          })
        ),
        r.forEach(function (t) {
          u(e, t, n[t])
        })
    }
    return e
  }
  function f(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function')
  }
  function m(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      ;(r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
  }
  function p(e, t, n) {
    return t && m(e.prototype, t), n && m(e, n), e
  }
  function h(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e
  }
  function v(e) {
    var t = { exports: {} }
    return e(t, t.exports), t.exports
  }
  var y = v(function (e) {
      function t(n) {
        return (
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? ((e.exports = t =
                function (e) {
                  return typeof e
                }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0))
            : ((e.exports = t =
                function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0)),
          t(n)
        )
      }
      ;(e.exports = t),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    }),
    g = h(y)
  function b(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return e
  }
  function R(e, t) {
    if (t && ('object' === g(t) || 'function' == typeof t)) return t
    if (void 0 !== t)
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      )
    return b(e)
  }
  function x(e) {
    return (
      (x = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          }),
      x(e)
    )
  }
  function w(e, t) {
    return (
      (w =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e
        }),
      w(e, t)
    )
  }
  function E(e, t) {
    if ('function' != typeof t && null !== t)
      throw new TypeError('Super expression must either be null or a function')
    ;(e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      t && w(e, t)
  }
  var F = Object.getOwnPropertySymbols,
    S = Object.prototype.hasOwnProperty,
    C = Object.prototype.propertyIsEnumerable
  function O(e) {
    if (null == e)
      throw new TypeError(
        'Object.assign cannot be called with null or undefined'
      )
    return Object(e)
  }
  var N = (function () {
      try {
        if (!Object.assign) return !1
        var e = new String('abc')
        if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
        for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
        if (
          '0123456789' !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e]
            })
            .join('')
        )
          return !1
        var r = {}
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function (e) {
            r[e] = e
          }),
          'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
        )
      } catch (e) {
        return !1
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (var n, r, o = O(e), a = 1; a < arguments.length; a++) {
            for (var i in (n = Object(arguments[a])))
              S.call(n, i) && (o[i] = n[i])
            if (F) {
              r = F(n)
              for (var l = 0; l < r.length; l++)
                C.call(n, r[l]) && (o[r[l]] = n[r[l]])
            }
          }
          return o
        },
    k = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
    P = function () {}
  if ('production' !== process.env.NODE_ENV) {
    var T = k,
      A = {},
      M = Function.call.bind(Object.prototype.hasOwnProperty)
    P = function (e) {
      var t = 'Warning: ' + e
      'undefined' != typeof console && console.error(t)
      try {
        throw new Error(t)
      } catch (e) {}
    }
  }
  function I(e, t, n, r, o) {
    if ('production' !== process.env.NODE_ENV)
      for (var a in e)
        if (M(e, a)) {
          var i
          try {
            if ('function' != typeof e[a]) {
              var l = Error(
                (r || 'React class') +
                  ': ' +
                  n +
                  ' type `' +
                  a +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof e[a] +
                  '`.'
              )
              throw ((l.name = 'Invariant Violation'), l)
            }
            i = e[a](t, a, r, n, null, T)
          } catch (e) {
            i = e
          }
          if (
            (!i ||
              i instanceof Error ||
              P(
                (r || 'React class') +
                  ': type specification of ' +
                  n +
                  ' `' +
                  a +
                  '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                  typeof i +
                  '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
              ),
            i instanceof Error && !(i.message in A))
          ) {
            A[i.message] = !0
            var c = o ? o() : ''
            P('Failed ' + n + ' type: ' + i.message + (null != c ? c : ''))
          }
        }
  }
  I.resetWarningCache = function () {
    'production' !== process.env.NODE_ENV && (A = {})
  }
  var _ = I
  const j = ReactIs
  var D = Function.call.bind(Object.prototype.hasOwnProperty),
    z = function () {}
  function L() {
    return null
  }
  'production' !== process.env.NODE_ENV &&
    (z = function (e) {
      var t = 'Warning: ' + e
      'undefined' != typeof console && console.error(t)
      try {
        throw new Error(t)
      } catch (e) {}
    })
  var B = function (e, t) {
    var n = 'function' == typeof Symbol && Symbol.iterator
    var r = '<<anonymous>>',
      o = {
        array: c('array'),
        bool: c('boolean'),
        func: c('function'),
        number: c('number'),
        object: c('object'),
        string: c('string'),
        symbol: c('symbol'),
        any: l(L),
        arrayOf: function (e) {
          return l(function (t, n, r, o, a) {
            if ('function' != typeof e)
              return new i(
                'Property `' +
                  a +
                  '` of component `' +
                  r +
                  '` has invalid PropType notation inside arrayOf.'
              )
            var l = t[n]
            if (!Array.isArray(l))
              return new i(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  u(l) +
                  '` supplied to `' +
                  r +
                  '`, expected an array.'
              )
            for (var c = 0; c < l.length; c++) {
              var s = e(l, c, r, o, a + '[' + c + ']', k)
              if (s instanceof Error) return s
            }
            return null
          })
        },
        element: l(function (t, n, r, o, a) {
          var l = t[n]
          return e(l)
            ? null
            : new i(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  u(l) +
                  '` supplied to `' +
                  r +
                  '`, expected a single ReactElement.'
              )
        }),
        elementType: l(function (e, t, n, r, o) {
          var a = e[t]
          return j.isValidElementType(a)
            ? null
            : new i(
                'Invalid ' +
                  r +
                  ' `' +
                  o +
                  '` of type `' +
                  u(a) +
                  '` supplied to `' +
                  n +
                  '`, expected a single ReactElement type.'
              )
        }),
        instanceOf: function (e) {
          return l(function (t, n, o, a, l) {
            if (!(t[n] instanceof e)) {
              var c = e.name || r
              return new i(
                'Invalid ' +
                  a +
                  ' `' +
                  l +
                  '` of type `' +
                  (((s = t[n]).constructor && s.constructor.name
                    ? s.constructor.name
                    : r) +
                    '` supplied to `') +
                  o +
                  '`, expected instance of `' +
                  c +
                  '`.'
              )
            }
            var s
            return null
          })
        },
        node: l(function (e, t, n, r, o) {
          return s(e[t])
            ? null
            : new i(
                'Invalid ' +
                  r +
                  ' `' +
                  o +
                  '` supplied to `' +
                  n +
                  '`, expected a ReactNode.'
              )
        }),
        objectOf: function (e) {
          return l(function (t, n, r, o, a) {
            if ('function' != typeof e)
              return new i(
                'Property `' +
                  a +
                  '` of component `' +
                  r +
                  '` has invalid PropType notation inside objectOf.'
              )
            var l = t[n],
              c = u(l)
            if ('object' !== c)
              return new i(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  c +
                  '` supplied to `' +
                  r +
                  '`, expected an object.'
              )
            for (var s in l)
              if (D(l, s)) {
                var d = e(l, s, r, o, a + '.' + s, k)
                if (d instanceof Error) return d
              }
            return null
          })
        },
        oneOf: function (e) {
          if (!Array.isArray(e))
            return (
              'production' !== process.env.NODE_ENV &&
                z(
                  arguments.length > 1
                    ? 'Invalid arguments supplied to oneOf, expected an array, got ' +
                        arguments.length +
                        ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                    : 'Invalid argument supplied to oneOf, expected an array.'
                ),
              L
            )
          function t(t, n, r, o, l) {
            for (var c = t[n], s = 0; s < e.length; s++)
              if (a(c, e[s])) return null
            var u = JSON.stringify(e, function (e, t) {
              return 'symbol' === d(t) ? String(t) : t
            })
            return new i(
              'Invalid ' +
                o +
                ' `' +
                l +
                '` of value `' +
                String(c) +
                '` supplied to `' +
                r +
                '`, expected one of ' +
                u +
                '.'
            )
          }
          return l(t)
        },
        oneOfType: function (e) {
          if (!Array.isArray(e))
            return (
              'production' !== process.env.NODE_ENV &&
                z(
                  'Invalid argument supplied to oneOfType, expected an instance of array.'
                ),
              L
            )
          for (var t = 0; t < e.length; t++) {
            var n = e[t]
            if ('function' != typeof n)
              return (
                z(
                  'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                    f(n) +
                    ' at index ' +
                    t +
                    '.'
                ),
                L
              )
          }
          return l(function (t, n, r, o, a) {
            for (var l = 0; l < e.length; l++)
              if (null == (0, e[l])(t, n, r, o, a, k)) return null
            return new i(
              'Invalid ' + o + ' `' + a + '` supplied to `' + r + '`.'
            )
          })
        },
        shape: function (e) {
          return l(function (t, n, r, o, a) {
            var l = t[n],
              c = u(l)
            if ('object' !== c)
              return new i(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  c +
                  '` supplied to `' +
                  r +
                  '`, expected `object`.'
              )
            for (var s in e) {
              var d = e[s]
              if (d) {
                var f = d(l, s, r, o, a + '.' + s, k)
                if (f) return f
              }
            }
            return null
          })
        },
        exact: function (e) {
          return l(function (t, n, r, o, a) {
            var l = t[n],
              c = u(l)
            if ('object' !== c)
              return new i(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  c +
                  '` supplied to `' +
                  r +
                  '`, expected `object`.'
              )
            var s = N({}, t[n], e)
            for (var d in s) {
              var f = e[d]
              if (!f)
                return new i(
                  'Invalid ' +
                    o +
                    ' `' +
                    a +
                    '` key `' +
                    d +
                    '` supplied to `' +
                    r +
                    '`.\nBad object: ' +
                    JSON.stringify(t[n], null, '  ') +
                    '\nValid keys: ' +
                    JSON.stringify(Object.keys(e), null, '  ')
                )
              var m = f(l, d, r, o, a + '.' + d, k)
              if (m) return m
            }
            return null
          })
        },
      }
    function a(e, t) {
      return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
    function i(e) {
      ;(this.message = e), (this.stack = '')
    }
    function l(e) {
      if ('production' !== process.env.NODE_ENV)
        var n = {},
          o = 0
      function a(a, l, c, s, u, d, f) {
        if (((s = s || r), (d = d || c), f !== k)) {
          if (t) {
            var m = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
            )
            throw ((m.name = 'Invariant Violation'), m)
          }
          if (
            'production' !== process.env.NODE_ENV &&
            'undefined' != typeof console
          ) {
            var p = s + ':' + c
            !n[p] &&
              o < 3 &&
              (z(
                'You are manually calling a React.PropTypes validation function for the `' +
                  d +
                  '` prop on `' +
                  s +
                  '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
              ),
              (n[p] = !0),
              o++)
          }
        }
        return null == l[c]
          ? a
            ? null === l[c]
              ? new i(
                  'The ' +
                    u +
                    ' `' +
                    d +
                    '` is marked as required in `' +
                    s +
                    '`, but its value is `null`.'
                )
              : new i(
                  'The ' +
                    u +
                    ' `' +
                    d +
                    '` is marked as required in `' +
                    s +
                    '`, but its value is `undefined`.'
                )
            : null
          : e(l, c, s, u, d)
      }
      var l = a.bind(null, !1)
      return (l.isRequired = a.bind(null, !0)), l
    }
    function c(e) {
      return l(function (t, n, r, o, a, l) {
        var c = t[n]
        return u(c) !== e
          ? new i(
              'Invalid ' +
                o +
                ' `' +
                a +
                '` of type `' +
                d(c) +
                '` supplied to `' +
                r +
                '`, expected `' +
                e +
                '`.'
            )
          : null
      })
    }
    function s(t) {
      switch (typeof t) {
        case 'number':
        case 'string':
        case 'undefined':
          return !0
        case 'boolean':
          return !t
        case 'object':
          if (Array.isArray(t)) return t.every(s)
          if (null === t || e(t)) return !0
          var r = (function (e) {
            var t = e && ((n && e[n]) || e['@@iterator'])
            if ('function' == typeof t) return t
          })(t)
          if (!r) return !1
          var o,
            a = r.call(t)
          if (r !== t.entries) {
            for (; !(o = a.next()).done; ) if (!s(o.value)) return !1
          } else
            for (; !(o = a.next()).done; ) {
              var i = o.value
              if (i && !s(i[1])) return !1
            }
          return !0
        default:
          return !1
      }
    }
    function u(e) {
      var t = typeof e
      return Array.isArray(e)
        ? 'array'
        : e instanceof RegExp
        ? 'object'
        : (function (e, t) {
            return (
              'symbol' === e ||
              (!!t &&
                ('Symbol' === t['@@toStringTag'] ||
                  ('function' == typeof Symbol && t instanceof Symbol)))
            )
          })(t, e)
        ? 'symbol'
        : t
    }
    function d(e) {
      if (null == e) return '' + e
      var t = u(e)
      if ('object' === t) {
        if (e instanceof Date) return 'date'
        if (e instanceof RegExp) return 'regexp'
      }
      return t
    }
    function f(e) {
      var t = d(e)
      switch (t) {
        case 'array':
        case 'object':
          return 'an ' + t
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + t
        default:
          return t
      }
    }
    return (
      (i.prototype = Error.prototype),
      (o.checkPropTypes = _),
      (o.resetWarningCache = _.resetWarningCache),
      (o.PropTypes = o),
      o
    )
  }
  function W() {}
  function H() {}
  H.resetWarningCache = W
  var V = v(function (e) {
      if ('production' !== process.env.NODE_ENV) {
        var t = j
        e.exports = B(t.isElement, !0)
      } else
        e.exports = (function () {
          function e(e, t, n, r, o, a) {
            if (a !== k) {
              var i = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((i.name = 'Invariant Violation'), i)
            }
          }
          function t() {
            return e
          }
          e.isRequired = e
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: H,
            resetWarningCache: W,
          }
          return (n.PropTypes = n), n
        })()
    }),
    Y = process.env.NODE_ENV,
    X = function (e, t, n, r, o, a, i, l) {
      if ('production' !== Y && void 0 === t)
        throw new Error('invariant requires an error message argument')
      if (!e) {
        var c
        if (void 0 === t)
          c = new Error(
            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
          )
        else {
          var s = [n, r, o, a, i, l],
            u = 0
          ;(c = new Error(
            t.replace(/%s/g, function () {
              return s[u++]
            })
          )).name = 'Invariant Violation'
        }
        throw ((c.framesToPop = 1), c)
      }
    }
  function G(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return l(e)
      })(e) ||
      (function (e) {
        if (
          ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e)
      })(e) ||
      c(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  var K = (function () {
    function e() {
      f(this, e), u(this, 'refs', {})
    }
    return (
      p(e, [
        {
          key: 'add',
          value: function (e, t) {
            this.refs[e] || (this.refs[e] = []), this.refs[e].push(t)
          },
        },
        {
          key: 'remove',
          value: function (e, t) {
            var n = this.getIndex(e, t)
            ;-1 !== n && this.refs[e].splice(n, 1)
          },
        },
        {
          key: 'isActive',
          value: function () {
            return this.active
          },
        },
        {
          key: 'getActive',
          value: function () {
            var e = this
            return this.refs[this.active.collection].find(function (t) {
              return t.node.sortableInfo.index == e.active.index
            })
          },
        },
        {
          key: 'getIndex',
          value: function (e, t) {
            return this.refs[e].indexOf(t)
          },
        },
        {
          key: 'getOrderedRefs',
          value: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.active.collection
            return this.refs[e].sort(q)
          },
        },
      ]),
      e
    )
  })()
  function q(e, t) {
    return e.node.sortableInfo.index - t.node.sortableInfo.index
  }
  function U(e, t) {
    return Object.keys(e).reduce(function (n, r) {
      return -1 === t.indexOf(r) && (n[r] = e[r]), n
    }, {})
  }
  var $ = {
      end: ['touchend', 'touchcancel', 'mouseup'],
      move: ['touchmove', 'mousemove'],
      start: ['touchstart', 'mousedown'],
    },
    J = (function () {
      if ('undefined' == typeof window || 'undefined' == typeof document)
        return ''
      var e = window.getComputedStyle(document.documentElement, '') || [
          '-moz-hidden-iframe',
        ],
        t = (Array.prototype.slice
          .call(e)
          .join('')
          .match(/-(moz|webkit|ms)-/) ||
          ('' === e.OLink && ['', 'o']))[1]
      return 'ms' === t
        ? 'ms'
        : t && t.length
        ? t[0].toUpperCase() + t.substr(1)
        : ''
    })()
  function Q(e, t) {
    Object.keys(t).forEach(function (n) {
      e.style[n] = t[n]
    })
  }
  function Z(e, t) {
    e.style[''.concat(J, 'Transform')] =
      null == t ? '' : 'translate3d('.concat(t.x, 'px,').concat(t.y, 'px,0)')
  }
  function ee(e, t) {
    e.style[''.concat(J, 'TransitionDuration')] =
      null == t ? '' : ''.concat(t, 'ms')
  }
  function te(e, t) {
    for (; e; ) {
      if (t(e)) return e
      e = e.parentNode
    }
    return null
  }
  function ne(e, t, n) {
    return Math.max(e, Math.min(n, t))
  }
  function re(e) {
    return 'px' === e.substr(-2) ? parseFloat(e) : 0
  }
  function oe(e) {
    var t = window.getComputedStyle(e)
    return {
      bottom: re(t.marginBottom),
      left: re(t.marginLeft),
      right: re(t.marginRight),
      top: re(t.marginTop),
    }
  }
  function ae(e, t) {
    var n = t.displayName || t.name
    return n ? ''.concat(e, '(').concat(n, ')') : e
  }
  function ie(e, t) {
    var n = e.getBoundingClientRect()
    return { top: n.top + t.top, left: n.left + t.left }
  }
  function le(e) {
    return e.touches && e.touches.length
      ? { x: e.touches[0].pageX, y: e.touches[0].pageY }
      : e.changedTouches && e.changedTouches.length
      ? { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY }
      : { x: e.pageX, y: e.pageY }
  }
  function ce(e) {
    return (
      (e.touches && e.touches.length) ||
      (e.changedTouches && e.changedTouches.length)
    )
  }
  function se(e, t) {
    var n =
      arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : { left: 0, top: 0 }
    if (e) {
      var r = { left: n.left + e.offsetLeft, top: n.top + e.offsetTop }
      return e.parentNode === t ? r : se(e.parentNode, t, r)
    }
  }
  function ue(e, t, n) {
    return e < n && e > t ? e - 1 : e > n && e < t ? e + 1 : e
  }
  function de(e) {
    var t = e.lockOffset,
      n = e.width,
      r = e.height,
      o = t,
      a = t,
      i = 'px'
    if ('string' == typeof t) {
      var l = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t)
      X(
        null !== l,
        'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',
        t
      ),
        (o = parseFloat(t)),
        (a = parseFloat(t)),
        (i = l[1])
    }
    return (
      X(
        isFinite(o) && isFinite(a),
        'lockOffset value should be a finite. Given %s',
        t
      ),
      '%' === i && ((o = (o * n) / 100), (a = (a * r) / 100)),
      { x: o, y: a }
    )
  }
  function fe(e) {
    var t = e.height,
      n = e.width,
      r = e.lockOffset,
      o = Array.isArray(r) ? r : [r, r]
    X(
      2 === o.length,
      'lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s',
      r
    )
    var a = s(o, 2),
      i = a[0],
      l = a[1]
    return [
      de({ height: t, lockOffset: i, width: n }),
      de({ height: t, lockOffset: l, width: n }),
    ]
  }
  function me(e) {
    return e instanceof HTMLElement
      ? (function (e) {
          var t = window.getComputedStyle(e),
            n = /(auto|scroll)/
          return ['overflow', 'overflowX', 'overflowY'].find(function (e) {
            return n.test(t[e])
          })
        })(e)
        ? e
        : me(e.parentNode)
      : null
  }
  function pe(e) {
    var t = window.getComputedStyle(e)
    return 'grid' === t.display
      ? { x: re(t.gridColumnGap), y: re(t.gridRowGap) }
      : { x: 0, y: 0 }
  }
  var he = 27,
    ve = 32,
    ye = 37,
    ge = 38,
    be = 39,
    Re = 40,
    xe = 'A',
    we = 'BUTTON',
    Ee = 'CANVAS',
    Fe = 'INPUT',
    Se = 'OPTION',
    Ce = 'TEXTAREA',
    Oe = 'SELECT'
  function Ne(e) {
    var t = 'input, textarea, select, canvas, [contenteditable]',
      n = e.querySelectorAll(t),
      r = e.cloneNode(!0)
    return (
      G(r.querySelectorAll(t)).forEach(function (e, t) {
        ;('file' !== e.type && (e.value = n[t].value),
        'radio' === e.type &&
          e.name &&
          (e.name = '__sortableClone__'.concat(e.name)),
        e.tagName === Ee && n[t].width > 0 && n[t].height > 0) &&
          e.getContext('2d').drawImage(n[t], 0, 0)
      }),
      r
    )
  }
  function ke(e) {
    return null != e.sortableHandle
  }
  var Pe = (function () {
    function e(t, n) {
      f(this, e), (this.container = t), (this.onScrollCallback = n)
    }
    return (
      p(e, [
        {
          key: 'clear',
          value: function () {
            null != this.interval &&
              (clearInterval(this.interval), (this.interval = null))
          },
        },
        {
          key: 'update',
          value: function (e) {
            var t = this,
              n = e.translate,
              r = e.minTranslate,
              o = e.maxTranslate,
              a = e.width,
              i = e.height,
              l = { x: 0, y: 0 },
              c = { x: 1, y: 1 },
              s = 10,
              u = 10,
              d = this.container,
              f = d.scrollTop,
              m = d.scrollLeft,
              p = d.scrollHeight,
              h = d.scrollWidth,
              v = 0 === f,
              y = p - f - d.clientHeight == 0,
              g = 0 === m,
              b = h - m - d.clientWidth == 0
            n.y >= o.y - i / 2 && !y
              ? ((l.y = 1), (c.y = u * Math.abs((o.y - i / 2 - n.y) / i)))
              : n.x >= o.x - a / 2 && !b
              ? ((l.x = 1), (c.x = s * Math.abs((o.x - a / 2 - n.x) / a)))
              : n.y <= r.y + i / 2 && !v
              ? ((l.y = -1), (c.y = u * Math.abs((n.y - i / 2 - r.y) / i)))
              : n.x <= r.x + a / 2 &&
                !g &&
                ((l.x = -1), (c.x = s * Math.abs((n.x - a / 2 - r.x) / a))),
              this.interval && (this.clear(), (this.isAutoScrolling = !1)),
              (0 === l.x && 0 === l.y) ||
                (this.interval = setInterval(function () {
                  t.isAutoScrolling = !0
                  var e = { left: c.x * l.x, top: c.y * l.y }
                  ;(t.container.scrollTop += e.top),
                    (t.container.scrollLeft += e.left),
                    t.onScrollCallback(e)
                }, 5))
          },
        },
      ]),
      e
    )
  })()
  var Te = {
      axis: V.oneOf(['x', 'y', 'xy']),
      contentWindow: V.any,
      disableAutoscroll: V.bool,
      distance: V.number,
      getContainer: V.func,
      getHelperDimensions: V.func,
      helperClass: V.string,
      helperContainer: V.oneOfType([
        V.func,
        'undefined' == typeof HTMLElement ? V.any : V.instanceOf(HTMLElement),
      ]),
      hideSortableGhost: V.bool,
      keyboardSortingTransitionDuration: V.number,
      lockAxis: V.string,
      lockOffset: V.oneOfType([
        V.number,
        V.string,
        V.arrayOf(V.oneOfType([V.number, V.string])),
      ]),
      lockToContainerEdges: V.bool,
      onSortEnd: V.func,
      onSortMove: V.func,
      onSortOver: V.func,
      onSortStart: V.func,
      pressDelay: V.number,
      pressThreshold: V.number,
      keyCodes: V.shape({
        lift: V.arrayOf(V.number),
        drop: V.arrayOf(V.number),
        cancel: V.arrayOf(V.number),
        up: V.arrayOf(V.number),
        down: V.arrayOf(V.number),
      }),
      shouldCancelStart: V.func,
      transitionDuration: V.number,
      updateBeforeSortStart: V.func,
      useDragHandle: V.bool,
      useWindowAsScrollContainer: V.bool,
    },
    Ae = { lift: [ve], drop: [ve], cancel: [he], up: [ge, ye], down: [Re, be] },
    Me = {
      axis: 'y',
      disableAutoscroll: !1,
      distance: 0,
      getHelperDimensions: function (e) {
        var t = e.node
        return { height: t.offsetHeight, width: t.offsetWidth }
      },
      hideSortableGhost: !0,
      lockOffset: '50%',
      lockToContainerEdges: !1,
      pressDelay: 0,
      pressThreshold: 5,
      keyCodes: Ae,
      shouldCancelStart: function (e) {
        return (
          -1 !== [Fe, Ce, Oe, Se, we].indexOf(e.target.tagName) ||
          !!te(e.target, function (e) {
            return 'true' === e.contentEditable
          })
        )
      },
      transitionDuration: 300,
      useWindowAsScrollContainer: !1,
    },
    Ie = Object.keys(Te)
  function _e(e) {
    X(
      !(e.distance && e.pressDelay),
      'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.'
    )
  }
  function je(e, t) {
    try {
      var n = e()
    } catch (e) {
      return t(!0, e)
    }
    return n && n.then
      ? n.then(t.bind(null, !1), t.bind(null, !0))
      : t(!1, value)
  }
  var De = {
      index: V.number.isRequired,
      collection: V.oneOfType([V.number, V.string]),
      disabled: V.bool,
    },
    ze = Object.keys(De)
  var Le = function (e, t) {
      return Array.isArray(e)
        ? e.map(function (e) {
            return moment(e, t)
          })
        : e
        ? moment(e, t)
        : e
    },
    Be = function (e, t, n) {
      var r = function (e, t, r) {
        if ((void 0 === r && (r = 0), !e)) return n
        if (Formily.Shared.isArr(t)) {
          var o = t[r]
          return Formily.Shared.isFn(o)
            ? o(e)
            : (null == e ? void 0 : e.format)
            ? e.format(o)
            : e
        }
        return Formily.Shared.isFn(t)
          ? t(e)
          : (null == e ? void 0 : e.format)
          ? e.format(t)
          : e
      }
      return Formily.Shared.isArr(e)
        ? e.map(function (e, n) {
            return r(e, t, n)
          })
        : e
        ? r(e, t)
        : e || n
    }
  var We = function (e, t) {
    var n,
      r,
      o,
      a = Next.ConfigProvider.getContext,
      i =
        null !==
          (o =
            null !== (n = null == t ? void 0 : t.prefix) && void 0 !== n
              ? n
              : null === (r = a()) || void 0 === r
              ? void 0
              : r.prefix) && void 0 !== o
          ? o
          : 'next-'
    return ''.concat(i).concat(null != e ? e : '')
  }
  function He(e, t) {
    void 0 === t && (t = {})
    var n = []
    return (
      React.Children.forEach(e, function (e) {
        ;(null != e || t.keepEmpty) &&
          (Array.isArray(e)
            ? (n = n.concat(He(e)))
            : ReactIs.isFragment(e) && e.props
            ? (n = n.concat(He(e.props.children, t)))
            : n.push(e))
      }),
      n
    )
  }
  var Ve = function (e, n) {
      var r
      return t(t({}, e), {
        state:
          ((r = e.state),
          ('validating' === r || 'pending' === r ? 'loading' : r) ||
            (function () {
              var e, t
              if (n)
                return n.loading || n.validating
                  ? 'loading'
                  : n.invalid
                  ? 'error'
                  : (
                      null === (e = n.warnings) || void 0 === e
                        ? void 0
                        : e.length
                    )
                  ? 'warning'
                  : null === (t = n.decoratorProps) || void 0 === t
                  ? void 0
                  : t.feedbackStatus
            })()),
      })
    },
    Ye = function (e, t) {
      return Formily.Shared.isValid(e)
        ? (function (e, t) {
            var n
            return Array.isArray(e)
              ? -1 === t
                ? e[0]
                : null !== (n = e[t]) && void 0 !== n
                ? n
                : e[e.length - 1]
              : e
          })(e, t)
        : e
    },
    Xe = function (e) {
      var r = React.useRef(null),
        o = e.breakpoints
      if (!Formily.Shared.isArr(o)) return { ref: r, props: e }
      var i = a(React.useState(e), 2),
        l = i[0],
        c = i[1],
        s = function () {
          c(
            (function (e, r) {
              var o = e.clientWidth,
                a = r.breakpoints,
                i = r.layout,
                l = r.labelAlign,
                c = r.wrapperAlign,
                s = r.labelCol,
                u = r.wrapperCol,
                d = n(r, [
                  'breakpoints',
                  'layout',
                  'labelAlign',
                  'wrapperAlign',
                  'labelCol',
                  'wrapperCol',
                ]),
                f = (function (e, t) {
                  for (var n = 0; n < e.length; n++) if (t <= e[n]) return n
                })(a, o)
              return t(
                {
                  layout: Ye(i, f),
                  labelAlign: Ye(l, f),
                  wrapperAlign: Ye(c, f),
                  labelCol: Ye(s, f),
                  wrapperCol: Ye(u, f),
                },
                d
              )
            })(r.current, e)
          )
        }
      return (
        React.useEffect(function () {
          var e = new ResizeObserver(function () {
            s()
          })
          return (
            r.current && e.observe(r.current),
            s(),
            function () {
              e.disconnect()
            }
          )
        }, []),
        { ref: r, props: l }
      )
    },
    Ge = v(function (e) {
      !(function () {
        var t = {}.hasOwnProperty
        function n() {
          for (var e = [], r = 0; r < arguments.length; r++) {
            var o = arguments[r]
            if (o) {
              var a = typeof o
              if ('string' === a || 'number' === a) e.push(o)
              else if (Array.isArray(o)) {
                if (o.length) {
                  var i = n.apply(null, o)
                  i && e.push(i)
                }
              } else if ('object' === a)
                if (o.toString === Object.prototype.toString)
                  for (var l in o) t.call(o, l) && o[l] && e.push(l)
                else e.push(o.toString())
            }
          }
          return e.join(' ')
        }
        e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n)
      })()
    }),
    Ke = React.createContext(null),
    qe = React.createContext(null),
    Ue = function () {
      return React.useContext(Ke)
    },
    $e = function () {
      return React.useContext(qe)
    },
    Je = function () {
      return t(t({}, Ue()), $e())
    },
    Qe = function (e) {
      var r,
        o,
        a = e.shallow,
        i = e.children,
        l = e.prefix,
        c = e.className,
        s = e.style,
        u = n(e, ['shallow', 'children', 'prefix', 'className', 'style']),
        d = Xe(u),
        f = d.ref,
        m = d.props,
        p = Ue(),
        h = We('form', { prefix: l }),
        v = We('formily-layout', { prefix: l }),
        y = Ge(
          v,
          (((r = {})[''.concat(h, '-').concat(m.layout)] = !0),
          (r[''.concat(h, '-rtl')] = 'rtl' === m.direction),
          (r[''.concat(h, '-').concat(m.size)] = m.size),
          r),
          c
        )
      return React.createElement(
        'div',
        { ref: f, className: y, style: s },
        ((o = t({}, p)),
        a
          ? (m.size && (o.size = m.size), m.colon && (o.colon = m.colon))
          : Object.assign(o, m),
        React.createElement(
          Ke.Provider,
          { value: o },
          React.createElement(qe.Provider, { value: a ? m : void 0 }, i)
        ))
      )
    }
  ;(Qe.defaultProps = { shallow: !0 }),
    (Qe.useFormDeepLayout = Ue),
    (Qe.useFormShallowLayout = $e),
    (Qe.useFormLayout = Je)
  var Ze = function (e) {
      var n = t(t({}, $e()), Je())
      return t(t({}, e), {
        size: e.size || ('default' === n.size ? 'medium' : n.size),
      })
    },
    et = function () {
      return React.createElement(
        'div',
        { className: 'next-empty' },
        React.createElement(
          'div',
          { className: 'next-empty-image' },
          React.createElement(
            'svg',
            {
              className: 'ant-empty-img-default',
              width: '184',
              height: '120',
              viewBox: '0 0 184 152',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            React.createElement(
              'g',
              { fill: 'none', fillRule: 'evenodd' },
              React.createElement(
                'g',
                { transform: 'translate(24 31.67)' },
                React.createElement('ellipse', {
                  className: 'ant-empty-img-default-ellipse',
                  cx: '67.797',
                  cy: '106.89',
                  rx: '67.797',
                  ry: '12.668',
                }),
                React.createElement('path', {
                  className: 'ant-empty-img-default-path-1',
                  d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
                }),
                React.createElement('path', {
                  className: 'ant-empty-img-default-path-2',
                  d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
                  transform: 'translate(13.56)',
                }),
                React.createElement('path', {
                  className: 'ant-empty-img-default-path-3',
                  d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
                }),
                React.createElement('path', {
                  className: 'ant-empty-img-default-path-4',
                  d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
                })
              ),
              React.createElement('path', {
                className: 'ant-empty-img-default-path-5',
                d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
              }),
              React.createElement(
                'g',
                {
                  className: 'ant-empty-img-default-g',
                  transform: 'translate(149.65 15.383)',
                },
                React.createElement('ellipse', {
                  cx: '20.654',
                  cy: '3.167',
                  rx: '2.849',
                  ry: '2.815',
                }),
                React.createElement('path', {
                  d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z',
                })
              )
            )
          )
        )
      )
    },
    tt = function (e, t) {
      return (
        void 0 === e && (e = 'Loading...'),
        r(void 0, void 0, void 0, function () {
          var n
          return o(this, function (r) {
            switch (r.label) {
              case 0:
                ;(n = setTimeout(function () {
                  Next.Message.loading(e)
                }, 100)),
                  (r.label = 1)
              case 1:
                return r.trys.push([1, , 3, 4]), [4, t()]
              case 2:
                return [2, r.sent()]
              case 3:
                return Next.Message.hide(), clearTimeout(n), [7]
              case 4:
                return [2]
            }
          })
        })
      )
    },
    nt = Formily.Reactive.observable(new Map()),
    rt = function (e) {
      var t = function (e) {
        return (
          e.id && !nt.has(e.id) && nt.set(e.id, null),
          React.createElement(
            React.Fragment,
            null,
            e.children,
            React.createElement(Formily.React.Observer, null, function () {
              if (!e.id) return null
              var t = nt.get(e.id)
              return t ? ReactDOM.createPortal(t, document.body) : null
            })
          )
        )
      }
      return (t.defaultProps = { id: e }), t
    }
  function ot(e, t) {
    return {
      render: function (n) {
        nt.has(t)
          ? nt.set(t, null == n ? void 0 : n())
          : e &&
            ReactDOM.render(
              React.createElement(
                React.Fragment,
                null,
                null == n ? void 0 : n()
              ),
              e
            )
      },
      unmount: function () {
        var n
        nt.has(t)
          ? nt.set(t, null)
          : e &&
            (ReactDOM.unmountComponentAtNode(e),
            null === (n = e.parentNode) || void 0 === n || n.removeChild(e))
      },
    }
  }
  var at = function (e) {
      return (
        void 0 === e && (e = {}),
        Object.keys(e).reduce(function (t, n) {
          return n.includes('data-') && (t[n] = e[n]), t
        }, {})
      )
    },
    it = React.forwardRef(function (e, n) {
      var r = We('formily-icon')
      return React.createElement(
        'svg',
        t({}, e, {
          ref: n,
          className: Ge(r, e.className),
          style: t(t({}, e.style), {
            cursor: e.onClick ? 'pointer' : '',
            display: 'inline-block',
            verticalAlign: 'middle',
          }),
          viewBox: '64 64 896 896',
          fill: 'currentColor',
          width: '1em',
          height: '1em',
          focusable: 'false',
          'aria-hidden': 'true',
        }),
        e.children
      )
    }),
    lt = React.forwardRef(function (e, n) {
      return React.createElement(
        it,
        t({}, e, { ref: n }),
        React.createElement('path', {
          d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z',
        })
      )
    }),
    ct = React.forwardRef(function (e, n) {
      return React.createElement(
        it,
        t({}, e, { ref: n }),
        React.createElement('path', {
          d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z',
        }),
        React.createElement('path', {
          d: 'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z',
        })
      )
    }),
    st = React.forwardRef(function (e, n) {
      return React.createElement(
        it,
        t({}, e, { ref: n }),
        React.createElement('path', {
          d: 'M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z',
        })
      )
    }),
    ut = React.forwardRef(function (e, n) {
      return React.createElement(
        it,
        t({}, e, { ref: n }),
        React.createElement('path', {
          d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
        })
      )
    }),
    dt = React.forwardRef(function (e, n) {
      return React.createElement(
        it,
        t({}, e, { ref: n }),
        React.createElement('path', {
          d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z',
        })
      )
    }),
    ft = React.forwardRef(function (e, n) {
      return React.createElement(
        it,
        t({}, e, { ref: n }),
        React.createElement('path', {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
        }),
        React.createElement('path', {
          d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z',
        })
      )
    }),
    mt = React.forwardRef(function (e, n) {
      return React.createElement(
        it,
        t({}, e, { ref: n }),
        React.createElement('path', {
          d: 'M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z',
        }),
        React.createElement('path', {
          d: 'M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
        })
      )
    }),
    pt = React.forwardRef(function (e, n) {
      return React.createElement(
        it,
        t({}, e, { ref: n }),
        React.createElement('path', {
          d: 'M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z',
        }),
        React.createElement('path', {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
        })
      )
    }),
    ht = React.forwardRef(function (e, n) {
      return React.createElement(
        it,
        t({}, e, { ref: n }),
        React.createElement('path', {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
        }),
        React.createElement('path', {
          d: 'M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z',
        })
      )
    }),
    vt = React.forwardRef(function (e, n) {
      return React.createElement(
        it,
        t({}, e, { ref: n }),
        React.createElement('path', {
          d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z',
        }),
        ' '
      )
    }),
    yt = React.forwardRef(function (e, n) {
      return React.createElement(
        it,
        t({}, e, { ref: n }),
        React.createElement('path', {
          d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
        })
      )
    }),
    gt = React.forwardRef(function (e, n) {
      return React.createElement(
        it,
        t({}, e, { ref: n }),
        React.createElement('path', {
          d: 'M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z',
        })
      )
    }),
    bt = React.createContext(null),
    Rt = React.createContext(null),
    xt = function () {
      return React.useContext(bt)
    },
    wt = function (e) {
      var t = React.useContext(Rt)
      return t ? t.index : e
    },
    Et = function (e, t) {
      var n, r, o, a, i, l, c
      return Formily.Shared.isValid(e)
        ? Formily.Shared.clone(e)
        : Array.isArray(null == t ? void 0 : t.items)
        ? Et(e, t.items[0])
        : 'array' ===
          (null === (n = null == t ? void 0 : t.items) || void 0 === n
            ? void 0
            : n.type)
        ? []
        : 'boolean' ===
            (null === (r = null == t ? void 0 : t.items) || void 0 === r
              ? void 0
              : r.type) ||
          ('date' ===
            (null === (o = null == t ? void 0 : t.items) || void 0 === o
              ? void 0
              : o.type) ||
          'datetime' ===
            (null === (a = null == t ? void 0 : t.items) || void 0 === a
              ? void 0
              : a.type)
            ? ''
            : 'number' ===
              (null === (i = null == t ? void 0 : t.items) || void 0 === i
                ? void 0
                : i.type)
            ? 0
            : 'object' ===
              (null === (l = null == t ? void 0 : t.items) || void 0 === l
                ? void 0
                : l.type)
            ? {}
            : 'string' ===
              (null === (c = null == t ? void 0 : t.items) || void 0 === c
                ? void 0
                : c.type)
            ? ''
            : null)
    },
    Ft = function (e) {
      var t = Formily.React.useField(),
        n = Formily.React.useFieldSchema()
      return React.createElement(
        bt.Provider,
        { value: { field: t, schema: n, props: e } },
        e.children
      )
    }
  Ft.Item = function (e) {
    var t = e.children,
      r = n(e, ['children'])
    return React.createElement(Rt.Provider, { value: r }, t)
  }
  var St = (function (e) {
    var t,
      n,
      r =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { withRef: !1 }
    return (
      (n = t =
        (function (t) {
          function n() {
            return f(this, n), R(this, x(n).apply(this, arguments))
          }
          return (
            E(n, React.Component),
            p(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ReactDOM.findDOMNode(this).sortableHandle = !0
                },
              },
              {
                key: 'getWrappedInstance',
                value: function () {
                  return (
                    X(
                      r.withRef,
                      'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call'
                    ),
                    this.refs.wrappedInstance
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = r.withRef ? 'wrappedInstance' : null
                  return React.createElement(e, i({ ref: t }, this.props))
                },
              },
            ]),
            n
          )
        })()),
      u(t, 'displayName', ae('sortableHandle', e)),
      n
    )
  })(function (e) {
    var n = We('formily-array-base')
    return React.createElement(
      lt,
      t({}, e, {
        className: Ge(''.concat(n, '-sort-handle'), e.className),
        style: t({}, e.style),
      })
    )
  })
  ;(Ft.SortHandle = function () {
    var e,
      t = xt()
    return t
      ? 'editable' !==
        (null === (e = t.field) || void 0 === e ? void 0 : e.pattern)
        ? null
        : React.createElement(St, null)
      : null
  }),
    (Ft.Index = function (e) {
      var n = wt(),
        r = We('formily-array-base')
      return React.createElement(
        'span',
        t({}, e, { className: ''.concat(r, '-index') }),
        '#',
        n + 1,
        '.'
      )
    }),
    (Ft.Addition = function (e) {
      var n,
        r,
        o,
        a = Formily.React.useField(),
        i = xt(),
        l = We('formily-array-base')
      return i
        ? 'editable' !==
            (null === (n = i.field) || void 0 === n ? void 0 : n.pattern) &&
          'disabled' !==
            (null === (r = i.field) || void 0 === r ? void 0 : r.pattern)
          ? null
          : React.createElement(
              Next.Button,
              t({}, e, {
                disabled:
                  null === (o = i.field) || void 0 === o ? void 0 : o.disabled,
                className: Ge(''.concat(l, '-addition'), e.className),
                style: t({ display: 'block', width: '100%' }, e.style),
                onClick: function (t) {
                  var n, r, o, a, l, c, s, u, d, f, m
                  if (
                    !(null === (n = i.props) || void 0 === n
                      ? void 0
                      : n.disabled)
                  ) {
                    t.stopPropagation()
                    var p = Et(e.defaultValue, i.schema)
                    'unshift' === e.method
                      ? (null ===
                          (o =
                            null === (r = i.field) || void 0 === r
                              ? void 0
                              : r.unshift) ||
                          void 0 === o ||
                          o.call(r, p),
                        null ===
                          (l =
                            null === (a = i.props) || void 0 === a
                              ? void 0
                              : a.onAdd) ||
                          void 0 === l ||
                          l.call(a, 0))
                      : (null ===
                          (s =
                            null === (c = i.field) || void 0 === c
                              ? void 0
                              : c.push) ||
                          void 0 === s ||
                          s.call(c, p),
                        null ===
                          (d =
                            null === (u = i.props) || void 0 === u
                              ? void 0
                              : u.onAdd) ||
                          void 0 === d ||
                          d.call(
                            u,
                            (null ===
                              (m =
                                null === (f = null == i ? void 0 : i.field) ||
                                void 0 === f
                                  ? void 0
                                  : f.value) || void 0 === m
                              ? void 0
                              : m.length) - 1
                          )),
                      e.onClick && e.onClick(t)
                  }
                },
              }),
              React.createElement(ct, null),
              e.title || a.title
            )
        : null
    }),
    (Ft.Remove = React.forwardRef(function (e, n) {
      var r,
        o = wt(e.index),
        a = xt(),
        i = We('formily-array-base')
      return a
        ? 'editable' !==
          (null === (r = a.field) || void 0 === r ? void 0 : r.pattern)
          ? null
          : React.createElement(
              dt,
              t({}, e, {
                className: Ge(''.concat(i, '-remove'), e.className),
                ref: n,
                onClick: function (t) {
                  var n, r, i, l, c
                  ;(null === (n = a.props) || void 0 === n
                    ? void 0
                    : n.disabled) ||
                    (t.stopPropagation(),
                    null ===
                      (i =
                        null === (r = a.field) || void 0 === r
                          ? void 0
                          : r.remove) ||
                      void 0 === i ||
                      i.call(r, o),
                    null ===
                      (c =
                        null === (l = a.props) || void 0 === l
                          ? void 0
                          : l.onRemove) ||
                      void 0 === c ||
                      c.call(l, o),
                    e.onClick && e.onClick(t))
                },
              })
            )
        : null
    })),
    (Ft.MoveDown = React.forwardRef(function (e, n) {
      var r,
        o = wt(e.index),
        a = xt(),
        i = We('formily-array-base')
      return a
        ? 'editable' !==
          (null === (r = a.field) || void 0 === r ? void 0 : r.pattern)
          ? null
          : React.createElement(
              ut,
              t({}, e, {
                className: Ge(''.concat(i, '-move-down'), e.className),
                ref: n,
                onClick: function (t) {
                  var n, r, i, l, c
                  ;(null === (n = a.props) || void 0 === n
                    ? void 0
                    : n.disabled) ||
                    (t.stopPropagation(),
                    null ===
                      (i =
                        null === (r = a.field) || void 0 === r
                          ? void 0
                          : r.moveDown) ||
                      void 0 === i ||
                      i.call(r, o),
                    null ===
                      (c =
                        null === (l = a.props) || void 0 === l
                          ? void 0
                          : l.onMoveDown) ||
                      void 0 === c ||
                      c.call(l, o),
                    e.onClick && e.onClick(t))
                },
              })
            )
        : null
    })),
    (Ft.MoveUp = React.forwardRef(function (e, n) {
      var r,
        o = wt(e.index),
        a = xt(),
        i = We('formily-array-base')
      return a
        ? 'editable' !==
          (null === (r = a.field) || void 0 === r ? void 0 : r.pattern)
          ? null
          : React.createElement(
              st,
              t({}, e, {
                className: Ge(''.concat(i, '-move-up'), e.className),
                ref: n,
                onClick: function (t) {
                  var n, r, i, l
                  ;(null === (n = a.props) || void 0 === n
                    ? void 0
                    : n.disabled) ||
                    (t.stopPropagation(),
                    null === (r = null == a ? void 0 : a.field) ||
                      void 0 === r ||
                      r.moveUp(o),
                    null ===
                      (l =
                        null === (i = null == a ? void 0 : a.props) ||
                        void 0 === i
                          ? void 0
                          : i.onMoveUp) ||
                      void 0 === l ||
                      l.call(i, o),
                    e.onClick && e.onClick(t))
                },
              })
            )
        : null
    })),
    (Ft.useArray = xt),
    (Ft.useIndex = wt),
    (Ft.useRecord = function (e) {
      var t = React.useContext(Rt)
      return t ? t.record : e
    }),
    (Ft.mixin = function (e) {
      return (
        (e.Index = Ft.Index),
        (e.SortHandle = Ft.SortHandle),
        (e.Addition = Ft.Addition),
        (e.Remove = Ft.Remove),
        (e.MoveDown = Ft.MoveDown),
        (e.MoveUp = Ft.MoveUp),
        (e.useArray = Ft.useArray),
        (e.useIndex = Ft.useIndex),
        (e.useRecord = Ft.useRecord),
        e
      )
    })
  var Ct = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Column')) > -1
      )
    },
    Ot = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Addition')) > -1
      )
    },
    Nt = Formily.React.observer(function (e) {
      var r,
        o = e.pageSize,
        a = n(e, ['pageSize']),
        i = Formily.React.useForm(),
        l = Formily.React.useField(),
        c = We('formily-array-table'),
        s = i.queryFeedbacks({
          type: 'error',
          address: ''.concat(l.address, '.*'),
        }),
        u =
          null === (r = a.dataSource) || void 0 === r
            ? void 0
            : r.map(function (e) {
                var t = e.label,
                  n = e.value,
                  r = s.some(function (e) {
                    var t = (function (e) {
                      var t
                      return Number(
                        null ===
                          (t = e
                            .slice(e.indexOf(l.address.toString()) + 1)
                            .match(/(\d+)/)) || void 0 === t
                          ? void 0
                          : t[1]
                      )
                    })(e.address)
                    return t >= (n - 1) * o && t <= n * o
                  })
                return {
                  label: r
                    ? React.createElement(Next.Badge, { dot: !0 }, t)
                    : t,
                  value: n,
                }
              })
      return React.createElement(
        Next.Select,
        t({}, a, {
          value: a.value,
          onChange: a.onChange,
          dataSource: u,
          useVirtual: !0,
          className: Ge(''.concat(c, '-status-select'), {
            'has-error': null == s ? void 0 : s.length,
          }),
        })
      )
    }),
    kt = function (e) {
      var r,
        o = e.dataSource,
        i = n(e, ['dataSource']),
        l = a(React.useState(1), 2),
        c = l[0],
        s = l[1],
        u = We('formily-array-table'),
        d = i.pageSize || 10,
        f = i.size || 'medium',
        m = o || [],
        p = (c - 1) * d,
        h = p + d - 1,
        v = (null == m ? void 0 : m.length) || 0,
        y = Math.ceil(v / d),
        g = Array.from(new Array(y)).map(function (e, t) {
          var n = t + 1
          return { label: n, value: n }
        }),
        b = function (e) {
          s(e)
        }
      React.useEffect(
        function () {
          y > 0 && y < c && b(y)
        },
        [y, c]
      )
      return React.createElement(
        React.Fragment,
        null,
        null === (r = i.children) || void 0 === r
          ? void 0
          : r.call(
              i,
              null == o ? void 0 : o.slice(p, h + 1),
              (function () {
                if (!(y <= 1))
                  return React.createElement(
                    'div',
                    { className: ''.concat(u, '-pagination') },
                    React.createElement(Nt, {
                      value: c,
                      pageSize: d,
                      onChange: b,
                      dataSource: g,
                      notFoundContent: !1,
                    }),
                    React.createElement(
                      Next.Pagination,
                      t({}, i, {
                        pageSize: d,
                        current: c,
                        total: o.length,
                        size: f,
                        pageSizeSelector: !1,
                        onChange: b,
                      })
                    )
                  )
              })()
            )
      )
    },
    Pt = Formily.React.observer(function (e) {
      var n,
        r,
        o,
        a = React.useRef(),
        i = Formily.React.useField(),
        l = We('formily-array-table'),
        c = Array.isArray(i.value) ? i.value.slice() : [],
        s =
          ((n = Formily.React.useField()),
          (r = Formily.React.useFieldSchema()),
          (o = function (e) {
            var t, r, a
            if (
              Ct(e) ||
              (function (e) {
                var t
                return (
                  (null === (t = e['x-component']) || void 0 === t
                    ? void 0
                    : t.indexOf('Operations')) > -1
                )
              })(e) ||
              Ot(e)
            ) {
              if (
                !(null === (t = e['x-component-props']) || void 0 === t
                  ? void 0
                  : t.dataIndex) &&
                !e.name
              )
                return []
              var i =
                  (null === (r = e['x-component-props']) || void 0 === r
                    ? void 0
                    : r.dataIndex) || e.name,
                l = n.query(n.address.concat(i)).take(),
                c =
                  (null === (a = null == l ? void 0 : l.component) ||
                  void 0 === a
                    ? void 0
                    : a[1]) ||
                  e['x-component-props'] ||
                  {}
              return [
                {
                  name: i,
                  display: (null == l ? void 0 : l.display) || e['x-display'],
                  field: l,
                  schema: e,
                  columnProps: c,
                },
              ]
            }
            if (e.properties)
              return e.reduceProperties(function (e, t) {
                return e.concat(o(t))
              }, [])
          }),
          (function (e) {
            return e
              ? (Formily.Shared.isArr(e) ? e : [e]).reduce(function (e, t) {
                  var n = o(t)
                  return n ? e.concat(n) : e
                }, [])
              : []
          })(r.items)),
        u = (function (e, n) {
          return n.reduce(function (n, r, o) {
            var a = r.name,
              i = r.columnProps,
              l = r.schema
            return 'visible' !== r.display
              ? n
              : Ct(l)
              ? n.concat(
                  t(t({}, i), {
                    key: o,
                    dataIndex: a,
                    cell: function (t, n, r) {
                      var o = e.indexOf(r)
                      return React.createElement(
                        Ft.Item,
                        { key: o, index: o, record: r },
                        React.createElement(Formily.React.RecursionField, {
                          schema: l,
                          name: o,
                          onlyRenderProperties: !0,
                        })
                      )
                    },
                  })
                )
              : n
          }, [])
        })(c, s),
        d = Formily.Shared.isBool(e.pagination) ? {} : e.pagination,
        f = Formily.React.useFieldSchema().reduceProperties(function (e, t, n) {
          return Ot(t)
            ? React.createElement(Formily.React.RecursionField, {
                schema: t,
                name: n,
              })
            : e
        }, null)
      return React.createElement(
        kt,
        t({}, d, { dataSource: c }),
        function (n, r) {
          return React.createElement(
            'div',
            { ref: a, className: l },
            React.createElement(
              Ft,
              null,
              React.createElement(
                Next.Table,
                t(
                  { size: 'small' },
                  (function (e, t) {
                    return Object.keys(e)
                      .filter(function (e) {
                        return !(null == t ? void 0 : t.includes(e))
                      })
                      .reduce(function (t, n) {
                        return (t[n] = e[n]), t
                      }, {})
                  })(e, ['value', 'onChange', 'pagination']),
                  { columns: u, dataSource: n }
                )
              ),
              React.createElement(
                'div',
                { style: { marginTop: 5, marginBottom: 5 } },
                r
              ),
              s.map(function (e, t) {
                if (Ct(e.schema))
                  return React.createElement(Formily.React.RecursionField, {
                    name: e.name,
                    schema: e.schema,
                    onlyRenderSelf: !0,
                    key: t,
                  })
              }),
              f
            )
          )
        }
      )
    })
  ;(Pt.displayName = 'ArrayTable'),
    (Pt.Column = function () {
      return React.createElement(React.Fragment, null)
    }),
    Ft.mixin(Pt)
  var Tt = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Addition')) > -1
      )
    },
    At = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Index')) > -1
      )
    },
    Mt = function (e) {
      return (
        Tt(e) ||
        (function (e) {
          var t
          return (
            (null === (t = e['x-component']) || void 0 === t
              ? void 0
              : t.indexOf('Remove')) > -1
          )
        })(e) ||
        (function (e) {
          var t
          return (
            (null === (t = e['x-component']) || void 0 === t
              ? void 0
              : t.indexOf('MoveDown')) > -1
          )
        })(e) ||
        (function (e) {
          var t
          return (
            (null === (t = e['x-component']) || void 0 === t
              ? void 0
              : t.indexOf('MoveUp')) > -1
          )
        })(e)
      )
    },
    It = function () {
      return React.createElement(
        'div',
        { className: 'next-empty' },
        React.createElement(
          'div',
          { className: 'next-empty-image' },
          React.createElement(
            'svg',
            {
              className: 'ant-empty-img-default',
              width: '184',
              height: '152',
              viewBox: '0 0 184 152',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            React.createElement(
              'g',
              { fill: 'none', fillRule: 'evenodd' },
              React.createElement(
                'g',
                { transform: 'translate(24 31.67)' },
                React.createElement('ellipse', {
                  className: 'ant-empty-img-default-ellipse',
                  cx: '67.797',
                  cy: '106.89',
                  rx: '67.797',
                  ry: '12.668',
                }),
                React.createElement('path', {
                  className: 'ant-empty-img-default-path-1',
                  d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
                }),
                React.createElement('path', {
                  className: 'ant-empty-img-default-path-2',
                  d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
                  transform: 'translate(13.56)',
                }),
                React.createElement('path', {
                  className: 'ant-empty-img-default-path-3',
                  d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
                }),
                React.createElement('path', {
                  className: 'ant-empty-img-default-path-4',
                  d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
                })
              ),
              React.createElement('path', {
                className: 'ant-empty-img-default-path-5',
                d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
              }),
              React.createElement(
                'g',
                {
                  className: 'ant-empty-img-default-g',
                  transform: 'translate(149.65 15.383)',
                },
                React.createElement('ellipse', {
                  cx: '20.654',
                  cy: '3.167',
                  rx: '2.849',
                  ry: '2.815',
                }),
                React.createElement('path', {
                  d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z',
                })
              )
            )
          )
        )
      )
    },
    _t = Formily.React.observer(function (e) {
      var n = Formily.React.useField(),
        r = Formily.React.useFieldSchema(),
        o = Array.isArray(n.value) ? n.value : [],
        a = We('formily-array-cards', e)
      return React.createElement(
        Ft,
        null,
        (function () {
          if (!(null == o ? void 0 : o.length))
            return React.createElement(
              Next.Card,
              t({ contentHeight: 'auto' }, e, {
                className: Ge(''.concat(a, '-item'), e.className),
                title: e.title || n.title,
                onChange: function () {},
              }),
              React.createElement(It, null)
            )
        })(),
        null == o
          ? void 0
          : o.map(function (o, i) {
              var l = Array.isArray(r.items)
                  ? r.items[i] || r.items[0]
                  : r.items,
                c = React.createElement(
                  'span',
                  null,
                  React.createElement(Formily.React.RecursionField, {
                    schema: l,
                    name: i,
                    filterProperties: function (e) {
                      return !!At(e)
                    },
                    onlyRenderProperties: !0,
                  }),
                  e.title || n.title
                ),
                s = React.createElement(
                  'span',
                  null,
                  React.createElement(Formily.React.RecursionField, {
                    schema: l,
                    name: i,
                    filterProperties: function (e) {
                      return !!Mt(e)
                    },
                    onlyRenderProperties: !0,
                  }),
                  e.extra
                ),
                u = React.createElement(Formily.React.RecursionField, {
                  schema: l,
                  name: i,
                  filterProperties: function (e) {
                    return !At(e) && !Mt(e)
                  },
                })
              return React.createElement(
                Ft.Item,
                { key: i, index: i, record: o },
                React.createElement(
                  Next.Card,
                  t({ contentHeight: 'auto' }, e, {
                    onChange: function () {},
                    className: Ge(''.concat(a, '-item'), e.className),
                    title: c,
                    extra: s,
                  }),
                  u
                )
              )
            }),
        r.reduceProperties(function (e, t, n) {
          return Tt(t)
            ? React.createElement(Formily.React.RecursionField, {
                schema: t,
                name: n,
              })
            : e
        }, null)
      )
    })
  ;(_t.displayName = 'ArrayCards'), Ft.mixin(_t)
  var jt = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Addition')) > -1
      )
    },
    Dt = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Index')) > -1
      )
    },
    zt = function (e) {
      return (
        jt(e) ||
        (function (e) {
          var t
          return (
            (null === (t = e['x-component']) || void 0 === t
              ? void 0
              : t.indexOf('Remove')) > -1
          )
        })(e) ||
        (function (e) {
          var t
          return (
            (null === (t = e['x-component']) || void 0 === t
              ? void 0
              : t.indexOf('MoveDown')) > -1
          )
        })(e) ||
        (function (e) {
          var t
          return (
            (null === (t = e['x-component']) || void 0 === t
              ? void 0
              : t.indexOf('MoveUp')) > -1
          )
        })(e)
      )
    },
    Lt = function (e) {
      return Array.from({ length: e }).map(function (e, t) {
        return t
      })
    },
    Bt = function (e, t) {
      return Lt(e < t ? e : t)
    },
    Wt = Formily.React.observer(function (e) {
      var r = e.defaultOpenPanelCount,
        o = n(e, ['defaultOpenPanelCount']),
        i = Formily.React.useField(),
        l = Array.isArray(i.value) ? i.value : [],
        c = a(React.useState(Bt(l.length, r)), 2),
        s = c[0],
        u = c[1],
        d = Formily.React.useFieldSchema(),
        f = We('formily-array-collapse', o)
      if (
        (React.useEffect(
          function () {
            !i.modified && l.length && u(Bt(l.length, r))
          },
          [l.length, i]
        ),
        !d)
      )
        throw new Error('can not found schema object')
      return React.createElement(
        Ft,
        {
          onAdd: function (e) {
            u(
              (function (e, t) {
                return e.length <= t
                  ? e.concat(t)
                  : e.reduce(function (e, n) {
                      return n < t
                        ? e.concat(n)
                        : n === t
                        ? e.concat([n, n + 1])
                        : e.concat(n + 1)
                    }, [])
              })(s, e)
            )
          },
        },
        (function () {
          if (!l.length)
            return React.createElement(
              Next.Card,
              { className: Ge(''.concat(f, '-item'), o.className) },
              React.createElement(et, null)
            )
        })(),
        React.createElement(
          Next.Collapse,
          t({}, o, {
            expandedKeys: s.map(String),
            onExpand: function (e) {
              return u(Formily.Shared.toArr(e).map(Number))
            },
            className: Ge(''.concat(f, '-item'), o.className),
          }),
          l.map(function (e, n) {
            var r = Array.isArray(d.items) ? d.items[n] || d.items[0] : d.items,
              o = i
                .query(''.concat(i.address, '.').concat(n))
                .get('componentProps'),
              a = r['x-component-props'],
              l = React.createElement(Formily.React.RecursionField, {
                schema: r,
                name: n,
                filterProperties: function (e) {
                  return !Dt(e) && !zt(e)
                },
              })
            return React.createElement(
              Next.Collapse.Panel,
              t({}, a, o, {
                key: n,
                title: (function () {
                  var t = ''.concat(
                      (null == o ? void 0 : o.title) ||
                        (null == a ? void 0 : a.title) ||
                        i.title
                    ),
                    l = i.address.concat(n),
                    c = i.form.queryFeedbacks({
                      type: 'error',
                      address: ''.concat(l, '.**'),
                    })
                  return React.createElement(
                    Ft.Item,
                    { index: n, record: e },
                    React.createElement(
                      'div',
                      {
                        className: Ge(''.concat(f, '-item-title'), a.className),
                      },
                      React.createElement(
                        'div',
                        null,
                        React.createElement(Formily.React.RecursionField, {
                          schema: r,
                          name: n,
                          filterProperties: function (e) {
                            return !!Dt(e)
                          },
                          onlyRenderProperties: !0,
                        }),
                        c.length
                          ? React.createElement(
                              Next.Badge,
                              { className: 'errors-badge', count: c.length },
                              t
                            )
                          : t
                      ),
                      React.createElement(
                        'div',
                        null,
                        React.createElement(Formily.React.RecursionField, {
                          schema: r,
                          name: n,
                          filterProperties: function (e) {
                            return !!zt(e)
                          },
                          onlyRenderProperties: !0,
                        })
                      )
                    )
                  )
                })(),
              }),
              React.createElement(Ft.Item, { index: n, key: n, record: e }, l)
            )
          })
        ),
        d.reduceProperties(function (e, t, n) {
          return jt(t)
            ? React.createElement(Formily.React.RecursionField, {
                schema: t,
                name: n,
              })
            : e
        }, null)
      )
    }),
    Ht = function (e) {
      var t = e.children
      return React.createElement(React.Fragment, null, t)
    }
  ;(Ht.displayName = 'CollapsePanel'),
    (Wt.defaultProps = { defaultOpenPanelCount: 5 }),
    (Wt.displayName = 'ArrayCollapse'),
    (Wt.CollapsePanel = Ht),
    Ft.mixin(Wt)
  var Vt = (function (e) {
      var t,
        n,
        r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { withRef: !1 }
      return (
        (n = t =
          (function (t) {
            function n() {
              return f(this, n), R(this, x(n).apply(this, arguments))
            }
            return (
              E(n, React.Component),
              p(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.register()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    this.node &&
                      (e.index !== this.props.index &&
                        (this.node.sortableInfo.index = this.props.index),
                      e.disabled !== this.props.disabled &&
                        (this.node.sortableInfo.disabled =
                          this.props.disabled)),
                      e.collection !== this.props.collection &&
                        (this.unregister(e.collection), this.register())
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.unregister()
                  },
                },
                {
                  key: 'register',
                  value: function () {
                    var e = this.props,
                      t = e.collection,
                      n = e.disabled,
                      r = e.index,
                      o = ReactDOM.findDOMNode(this)
                    ;(o.sortableInfo = {
                      collection: t,
                      disabled: n,
                      index: r,
                      manager: this.context.manager,
                    }),
                      (this.node = o),
                      (this.ref = { node: o }),
                      this.context.manager.add(t, this.ref)
                  },
                },
                {
                  key: 'unregister',
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.props.collection
                    this.context.manager.remove(e, this.ref)
                  },
                },
                {
                  key: 'getWrappedInstance',
                  value: function () {
                    return (
                      X(
                        r.withRef,
                        'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call'
                      ),
                      this.refs.wrappedInstance
                    )
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = r.withRef ? 'wrappedInstance' : null
                    return React.createElement(
                      e,
                      i({ ref: t }, U(this.props, ze))
                    )
                  },
                },
              ]),
              n
            )
          })()),
        u(t, 'displayName', ae('sortableElement', e)),
        u(t, 'contextTypes', { manager: V.object.isRequired }),
        u(t, 'propTypes', De),
        u(t, 'defaultProps', { collection: 0 }),
        n
      )
    })(function (e) {
      var n = We('formily-array-items')
      return React.createElement(
        'div',
        t({}, e, { className: Ge(''.concat(n, '-item'), e.className) }),
        e.children
      )
    }),
    Yt = (function (e) {
      var t,
        n,
        r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { withRef: !1 }
      return (
        (n = t =
          (function (t) {
            function n(e) {
              var t
              return (
                f(this, n),
                u(b(b((t = R(this, x(n).call(this, e))))), 'state', {}),
                u(b(b(t)), 'handleStart', function (e) {
                  var n = t.props,
                    r = n.distance,
                    o = n.shouldCancelStart
                  if (2 !== e.button && !o(e)) {
                    ;(t.touched = !0), (t.position = le(e))
                    var a = te(e.target, function (e) {
                      return null != e.sortableInfo
                    })
                    if (
                      a &&
                      a.sortableInfo &&
                      t.nodeIsChild(a) &&
                      !t.state.sorting
                    ) {
                      var i = t.props.useDragHandle,
                        l = a.sortableInfo,
                        c = l.index,
                        s = l.collection
                      if (l.disabled) return
                      if (i && !te(e.target, ke)) return
                      ;(t.manager.active = { collection: s, index: c }),
                        ce(e) || e.target.tagName !== xe || e.preventDefault(),
                        r ||
                          (0 === t.props.pressDelay
                            ? t.handlePress(e)
                            : (t.pressTimer = setTimeout(function () {
                                return t.handlePress(e)
                              }, t.props.pressDelay)))
                    }
                  }
                }),
                u(b(b(t)), 'nodeIsChild', function (e) {
                  return e.sortableInfo.manager === t.manager
                }),
                u(b(b(t)), 'handleMove', function (e) {
                  var n = t.props,
                    r = n.distance,
                    o = n.pressThreshold
                  if (
                    !t.state.sorting &&
                    t.touched &&
                    !t._awaitingUpdateBeforeSortStart
                  ) {
                    var a = le(e),
                      i = { x: t.position.x - a.x, y: t.position.y - a.y },
                      l = Math.abs(i.x) + Math.abs(i.y)
                    ;(t.delta = i),
                      r || (o && !(l >= o))
                        ? r &&
                          l >= r &&
                          t.manager.isActive() &&
                          t.handlePress(e)
                        : (clearTimeout(t.cancelTimer),
                          (t.cancelTimer = setTimeout(t.cancel, 0)))
                  }
                }),
                u(b(b(t)), 'handleEnd', function () {
                  ;(t.touched = !1), t.cancel()
                }),
                u(b(b(t)), 'cancel', function () {
                  var e = t.props.distance
                  t.state.sorting ||
                    (e || clearTimeout(t.pressTimer), (t.manager.active = null))
                }),
                u(b(b(t)), 'handlePress', function (e) {
                  try {
                    var n = t.manager.getActive(),
                      r = (function () {
                        if (n) {
                          var r = function () {
                              var n = m.sortableInfo.index,
                                r = oe(m),
                                o = pe(t.container),
                                s = t.scrollContainer.getBoundingClientRect(),
                                v = i({ index: n, node: m, collection: p })
                              if (
                                ((t.node = m),
                                (t.margin = r),
                                (t.gridGap = o),
                                (t.width = v.width),
                                (t.height = v.height),
                                (t.marginOffset = {
                                  x:
                                    t.margin.left +
                                    t.margin.right +
                                    t.gridGap.x,
                                  y: Math.max(
                                    t.margin.top,
                                    t.margin.bottom,
                                    t.gridGap.y
                                  ),
                                }),
                                (t.boundingClientRect =
                                  m.getBoundingClientRect()),
                                (t.containerBoundingRect = s),
                                (t.index = n),
                                (t.newIndex = n),
                                (t.axis = {
                                  x: a.indexOf('x') >= 0,
                                  y: a.indexOf('y') >= 0,
                                }),
                                (t.offsetEdge = se(m, t.container)),
                                (t.initialOffset = le(
                                  h
                                    ? d({}, e, {
                                        pageX: t.boundingClientRect.left,
                                        pageY: t.boundingClientRect.top,
                                      })
                                    : e
                                )),
                                (t.initialScroll = {
                                  left: t.scrollContainer.scrollLeft,
                                  top: t.scrollContainer.scrollTop,
                                }),
                                (t.initialWindowScroll = {
                                  left: window.pageXOffset,
                                  top: window.pageYOffset,
                                }),
                                (t.helper = t.helperContainer.appendChild(
                                  Ne(m)
                                )),
                                Q(t.helper, {
                                  boxSizing: 'border-box',
                                  height: ''.concat(t.height, 'px'),
                                  left: ''.concat(
                                    t.boundingClientRect.left - r.left,
                                    'px'
                                  ),
                                  pointerEvents: 'none',
                                  position: 'fixed',
                                  top: ''.concat(
                                    t.boundingClientRect.top - r.top,
                                    'px'
                                  ),
                                  width: ''.concat(t.width, 'px'),
                                }),
                                h && t.helper.focus(),
                                c &&
                                  ((t.sortableGhost = m),
                                  Q(m, { opacity: 0, visibility: 'hidden' })),
                                (t.minTranslate = {}),
                                (t.maxTranslate = {}),
                                h)
                              ) {
                                var y = f
                                    ? {
                                        top: 0,
                                        left: 0,
                                        width: t.contentWindow.innerWidth,
                                        height: t.contentWindow.innerHeight,
                                      }
                                    : t.containerBoundingRect,
                                  g = y.top,
                                  b = y.left,
                                  R = y.width,
                                  x = g + y.height,
                                  w = b + R
                                t.axis.x &&
                                  ((t.minTranslate.x =
                                    b - t.boundingClientRect.left),
                                  (t.maxTranslate.x =
                                    w - (t.boundingClientRect.left + t.width))),
                                  t.axis.y &&
                                    ((t.minTranslate.y =
                                      g - t.boundingClientRect.top),
                                    (t.maxTranslate.y =
                                      x -
                                      (t.boundingClientRect.top + t.height)))
                              } else
                                t.axis.x &&
                                  ((t.minTranslate.x =
                                    (f ? 0 : s.left) -
                                    t.boundingClientRect.left -
                                    t.width / 2),
                                  (t.maxTranslate.x =
                                    (f
                                      ? t.contentWindow.innerWidth
                                      : s.left + s.width) -
                                    t.boundingClientRect.left -
                                    t.width / 2)),
                                  t.axis.y &&
                                    ((t.minTranslate.y =
                                      (f ? 0 : s.top) -
                                      t.boundingClientRect.top -
                                      t.height / 2),
                                    (t.maxTranslate.y =
                                      (f
                                        ? t.contentWindow.innerHeight
                                        : s.top + s.height) -
                                      t.boundingClientRect.top -
                                      t.height / 2))
                              l &&
                                l.split(' ').forEach(function (e) {
                                  return t.helper.classList.add(e)
                                }),
                                (t.listenerNode = e.touches
                                  ? m
                                  : t.contentWindow),
                                h
                                  ? (t.listenerNode.addEventListener(
                                      'wheel',
                                      t.handleKeyEnd,
                                      !0
                                    ),
                                    t.listenerNode.addEventListener(
                                      'mousedown',
                                      t.handleKeyEnd,
                                      !0
                                    ),
                                    t.listenerNode.addEventListener(
                                      'keydown',
                                      t.handleKeyDown
                                    ))
                                  : ($.move.forEach(function (e) {
                                      return t.listenerNode.addEventListener(
                                        e,
                                        t.handleSortMove,
                                        !1
                                      )
                                    }),
                                    $.end.forEach(function (e) {
                                      return t.listenerNode.addEventListener(
                                        e,
                                        t.handleSortEnd,
                                        !1
                                      )
                                    })),
                                t.setState({ sorting: !0, sortingIndex: n }),
                                u &&
                                  u(
                                    {
                                      node: m,
                                      index: n,
                                      collection: p,
                                      isKeySorting: h,
                                      nodes: t.manager.getOrderedRefs(),
                                      helper: t.helper,
                                    },
                                    e
                                  ),
                                h && t.keyMove(0)
                            },
                            o = t.props,
                            a = o.axis,
                            i = o.getHelperDimensions,
                            l = o.helperClass,
                            c = o.hideSortableGhost,
                            s = o.updateBeforeSortStart,
                            u = o.onSortStart,
                            f = o.useWindowAsScrollContainer,
                            m = n.node,
                            p = n.collection,
                            h = t.manager.isKeySorting,
                            v = (function () {
                              if ('function' == typeof s) {
                                t._awaitingUpdateBeforeSortStart = !0
                                var n = je(
                                  function () {
                                    var t = m.sortableInfo.index
                                    return Promise.resolve(
                                      s(
                                        {
                                          collection: p,
                                          index: t,
                                          node: m,
                                          isKeySorting: h,
                                        },
                                        e
                                      )
                                    ).then(function () {})
                                  },
                                  function (e, n) {
                                    if (
                                      ((t._awaitingUpdateBeforeSortStart = !1),
                                      e)
                                    )
                                      throw n
                                    return n
                                  }
                                )
                                if (n && n.then) return n.then(function () {})
                              }
                            })()
                          return v && v.then ? v.then(r) : r()
                        }
                      })()
                    return Promise.resolve(
                      r && r.then ? r.then(function () {}) : void 0
                    )
                  } catch (e) {
                    return Promise.reject(e)
                  }
                }),
                u(b(b(t)), 'handleSortMove', function (e) {
                  var n = t.props.onSortMove
                  'function' == typeof e.preventDefault && e.preventDefault(),
                    t.updateHelperPosition(e),
                    t.animateNodes(),
                    t.autoscroll(),
                    n && n(e)
                }),
                u(b(b(t)), 'handleSortEnd', function (e) {
                  var n = t.props,
                    r = n.hideSortableGhost,
                    o = n.onSortEnd,
                    a = t.manager,
                    i = a.active.collection,
                    l = a.isKeySorting,
                    c = t.manager.getOrderedRefs()
                  t.listenerNode &&
                    (l
                      ? (t.listenerNode.removeEventListener(
                          'wheel',
                          t.handleKeyEnd,
                          !0
                        ),
                        t.listenerNode.removeEventListener(
                          'mousedown',
                          t.handleKeyEnd,
                          !0
                        ),
                        t.listenerNode.removeEventListener(
                          'keydown',
                          t.handleKeyDown
                        ))
                      : ($.move.forEach(function (e) {
                          return t.listenerNode.removeEventListener(
                            e,
                            t.handleSortMove
                          )
                        }),
                        $.end.forEach(function (e) {
                          return t.listenerNode.removeEventListener(
                            e,
                            t.handleSortEnd
                          )
                        }))),
                    t.helper.parentNode.removeChild(t.helper),
                    r &&
                      t.sortableGhost &&
                      Q(t.sortableGhost, { opacity: '', visibility: '' })
                  for (var s = 0, u = c.length; s < u; s++) {
                    var d = c[s],
                      f = d.node
                    ;(d.edgeOffset = null),
                      (d.boundingClientRect = null),
                      Z(f, null),
                      ee(f, null),
                      (d.translate = null)
                  }
                  t.autoScroller.clear(),
                    (t.manager.active = null),
                    (t.manager.isKeySorting = !1),
                    t.setState({ sorting: !1, sortingIndex: null }),
                    'function' == typeof o &&
                      o(
                        {
                          collection: i,
                          newIndex: t.newIndex,
                          oldIndex: t.index,
                          isKeySorting: l,
                          nodes: c,
                        },
                        e
                      ),
                    (t.touched = !1)
                }),
                u(b(b(t)), 'autoscroll', function () {
                  var e = t.props.disableAutoscroll,
                    n = t.manager.isKeySorting
                  if (e) t.autoScroller.clear()
                  else {
                    if (n) {
                      var r = d({}, t.translate),
                        o = 0,
                        a = 0
                      return (
                        t.axis.x &&
                          ((r.x = Math.min(
                            t.maxTranslate.x,
                            Math.max(t.minTranslate.x, t.translate.x)
                          )),
                          (o = t.translate.x - r.x)),
                        t.axis.y &&
                          ((r.y = Math.min(
                            t.maxTranslate.y,
                            Math.max(t.minTranslate.y, t.translate.y)
                          )),
                          (a = t.translate.y - r.y)),
                        (t.translate = r),
                        Z(t.helper, t.translate),
                        (t.scrollContainer.scrollLeft += o),
                        void (t.scrollContainer.scrollTop += a)
                      )
                    }
                    t.autoScroller.update({
                      height: t.height,
                      maxTranslate: t.maxTranslate,
                      minTranslate: t.minTranslate,
                      translate: t.translate,
                      width: t.width,
                    })
                  }
                }),
                u(b(b(t)), 'onAutoScroll', function (e) {
                  ;(t.translate.x += e.left),
                    (t.translate.y += e.top),
                    t.animateNodes()
                }),
                u(b(b(t)), 'handleKeyDown', function (e) {
                  var n = e.keyCode,
                    r = t.props,
                    o = r.shouldCancelStart,
                    a = r.keyCodes,
                    i = d({}, Ae, void 0 === a ? {} : a)
                  ;(t.manager.active && !t.manager.isKeySorting) ||
                    !(
                      t.manager.active ||
                      (i.lift.includes(n) && !o(e) && t.isValidSortingTarget(e))
                    ) ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    i.lift.includes(n) && !t.manager.active
                      ? t.keyLift(e)
                      : i.drop.includes(n) && t.manager.active
                      ? t.keyDrop(e)
                      : i.cancel.includes(n)
                      ? ((t.newIndex = t.manager.active.index), t.keyDrop(e))
                      : i.up.includes(n)
                      ? t.keyMove(-1)
                      : i.down.includes(n) && t.keyMove(1))
                }),
                u(b(b(t)), 'keyLift', function (e) {
                  var n = e.target,
                    r = te(n, function (e) {
                      return null != e.sortableInfo
                    }).sortableInfo,
                    o = r.index,
                    a = r.collection
                  ;(t.initialFocusedNode = n),
                    (t.manager.isKeySorting = !0),
                    (t.manager.active = { index: o, collection: a }),
                    t.handlePress(e)
                }),
                u(b(b(t)), 'keyMove', function (e) {
                  var n = t.manager.getOrderedRefs(),
                    r = n[n.length - 1].node.sortableInfo.index,
                    o = t.newIndex + e,
                    a = t.newIndex
                  if (!(o < 0 || o > r)) {
                    ;(t.prevIndex = a), (t.newIndex = o)
                    var i = ue(t.newIndex, t.prevIndex, t.index),
                      l = n.find(function (e) {
                        return e.node.sortableInfo.index === i
                      }),
                      c = l.node,
                      s = t.containerScrollDelta,
                      u = l.boundingClientRect || ie(c, s),
                      d = l.translate || { x: 0, y: 0 },
                      f = u.top + d.y - s.top,
                      m = u.left + d.x - s.left,
                      p = a < o,
                      h = p && t.axis.x ? c.offsetWidth - t.width : 0,
                      v = p && t.axis.y ? c.offsetHeight - t.height : 0
                    t.handleSortMove({
                      pageX: m + h,
                      pageY: f + v,
                      ignoreTransition: 0 === e,
                    })
                  }
                }),
                u(b(b(t)), 'keyDrop', function (e) {
                  t.handleSortEnd(e),
                    t.initialFocusedNode && t.initialFocusedNode.focus()
                }),
                u(b(b(t)), 'handleKeyEnd', function (e) {
                  t.manager.active && t.keyDrop(e)
                }),
                u(b(b(t)), 'isValidSortingTarget', function (e) {
                  var n = t.props.useDragHandle,
                    r = e.target,
                    o = te(r, function (e) {
                      return null != e.sortableInfo
                    })
                  return (
                    o &&
                    o.sortableInfo &&
                    !o.sortableInfo.disabled &&
                    (n ? ke(r) : r.sortableInfo)
                  )
                }),
                _e(e),
                (t.manager = new K()),
                (t.events = {
                  end: t.handleEnd,
                  move: t.handleMove,
                  start: t.handleStart,
                }),
                t
              )
            }
            return (
              E(n, React.Component),
              p(n, [
                {
                  key: 'getChildContext',
                  value: function () {
                    return { manager: this.manager }
                  },
                },
                {
                  key: 'componentDidMount',
                  value: function () {
                    var e = this,
                      t = this.props.useWindowAsScrollContainer,
                      n = this.getContainer()
                    Promise.resolve(n).then(function (n) {
                      ;(e.container = n),
                        (e.document = e.container.ownerDocument || document)
                      var r =
                        e.props.contentWindow ||
                        e.document.defaultView ||
                        window
                      ;(e.contentWindow = 'function' == typeof r ? r() : r),
                        (e.scrollContainer = t
                          ? e.document.scrollingElement ||
                            e.document.documentElement
                          : me(e.container) || e.container),
                        (e.autoScroller = new Pe(
                          e.scrollContainer,
                          e.onAutoScroll
                        )),
                        Object.keys(e.events).forEach(function (t) {
                          return $[t].forEach(function (n) {
                            return e.container.addEventListener(
                              n,
                              e.events[t],
                              !1
                            )
                          })
                        }),
                        e.container.addEventListener('keydown', e.handleKeyDown)
                    })
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    var e = this
                    this.helper &&
                      this.helper.parentNode &&
                      this.helper.parentNode.removeChild(this.helper),
                      this.container &&
                        (Object.keys(this.events).forEach(function (t) {
                          return $[t].forEach(function (n) {
                            return e.container.removeEventListener(
                              n,
                              e.events[t]
                            )
                          })
                        }),
                        this.container.removeEventListener(
                          'keydown',
                          this.handleKeyDown
                        ))
                  },
                },
                {
                  key: 'updateHelperPosition',
                  value: function (e) {
                    var t = this.props,
                      n = t.lockAxis,
                      r = t.lockOffset,
                      o = t.lockToContainerEdges,
                      a = t.transitionDuration,
                      i = t.keyboardSortingTransitionDuration,
                      l = void 0 === i ? a : i,
                      c = this.manager.isKeySorting,
                      u = e.ignoreTransition,
                      d = le(e),
                      f = {
                        x: d.x - this.initialOffset.x,
                        y: d.y - this.initialOffset.y,
                      }
                    if (
                      ((f.y -=
                        window.pageYOffset - this.initialWindowScroll.top),
                      (f.x -=
                        window.pageXOffset - this.initialWindowScroll.left),
                      (this.translate = f),
                      o)
                    ) {
                      var m = s(
                          fe({
                            height: this.height,
                            lockOffset: r,
                            width: this.width,
                          }),
                          2
                        ),
                        p = m[0],
                        h = m[1],
                        v = {
                          x: this.width / 2 - p.x,
                          y: this.height / 2 - p.y,
                        },
                        y = {
                          x: this.width / 2 - h.x,
                          y: this.height / 2 - h.y,
                        }
                      ;(f.x = ne(
                        this.minTranslate.x + v.x,
                        this.maxTranslate.x - y.x,
                        f.x
                      )),
                        (f.y = ne(
                          this.minTranslate.y + v.y,
                          this.maxTranslate.y - y.y,
                          f.y
                        ))
                    }
                    'x' === n ? (f.y = 0) : 'y' === n && (f.x = 0),
                      c && l && !u && ee(this.helper, l),
                      Z(this.helper, f)
                  },
                },
                {
                  key: 'animateNodes',
                  value: function () {
                    var e = this.props,
                      t = e.transitionDuration,
                      n = e.hideSortableGhost,
                      r = e.onSortOver,
                      o = this.containerScrollDelta,
                      a = this.windowScrollDelta,
                      i = this.manager.getOrderedRefs(),
                      l = this.offsetEdge.left + this.translate.x + o.left,
                      c = this.offsetEdge.top + this.translate.y + o.top,
                      s = this.manager.isKeySorting,
                      u = this.newIndex
                    this.newIndex = null
                    for (var d = 0, f = i.length; d < f; d++) {
                      var m = i[d].node,
                        p = m.sortableInfo.index,
                        h = m.offsetWidth,
                        v = m.offsetHeight,
                        y = {
                          height: this.height > v ? v / 2 : this.height / 2,
                          width: this.width > h ? h / 2 : this.width / 2,
                        },
                        g = s && p > this.index && p <= u,
                        b = s && p < this.index && p >= u,
                        R = { x: 0, y: 0 },
                        x = i[d].edgeOffset
                      x ||
                        ((x = se(m, this.container)),
                        (i[d].edgeOffset = x),
                        s && (i[d].boundingClientRect = ie(m, o)))
                      var w = d < i.length - 1 && i[d + 1],
                        E = d > 0 && i[d - 1]
                      w &&
                        !w.edgeOffset &&
                        ((w.edgeOffset = se(w.node, this.container)),
                        s && (w.boundingClientRect = ie(w.node, o))),
                        p !== this.index
                          ? (t && ee(m, t),
                            this.axis.x
                              ? this.axis.y
                                ? b ||
                                  (p < this.index &&
                                    ((l + a.left - y.width <= x.left &&
                                      c + a.top <= x.top + y.height) ||
                                      c + a.top + y.height <= x.top))
                                  ? ((R.x = this.width + this.marginOffset.x),
                                    x.left + R.x >
                                      this.containerBoundingRect.width -
                                        y.width &&
                                      w &&
                                      ((R.x = w.edgeOffset.left - x.left),
                                      (R.y = w.edgeOffset.top - x.top)),
                                    null === this.newIndex &&
                                      (this.newIndex = p))
                                  : (g ||
                                      (p > this.index &&
                                        ((l + a.left + y.width >= x.left &&
                                          c + a.top + y.height >= x.top) ||
                                          c + a.top + y.height >=
                                            x.top + v))) &&
                                    ((R.x = -(
                                      this.width + this.marginOffset.x
                                    )),
                                    x.left + R.x <
                                      this.containerBoundingRect.left +
                                        y.width &&
                                      E &&
                                      ((R.x = E.edgeOffset.left - x.left),
                                      (R.y = E.edgeOffset.top - x.top)),
                                    (this.newIndex = p))
                                : g ||
                                  (p > this.index &&
                                    l + a.left + y.width >= x.left)
                                ? ((R.x = -(this.width + this.marginOffset.x)),
                                  (this.newIndex = p))
                                : (b ||
                                    (p < this.index &&
                                      l + a.left <= x.left + y.width)) &&
                                  ((R.x = this.width + this.marginOffset.x),
                                  null == this.newIndex && (this.newIndex = p))
                              : this.axis.y &&
                                (g ||
                                (p > this.index &&
                                  c + a.top + y.height >= x.top)
                                  ? ((R.y = -(
                                      this.height + this.marginOffset.y
                                    )),
                                    (this.newIndex = p))
                                  : (b ||
                                      (p < this.index &&
                                        c + a.top <= x.top + y.height)) &&
                                    ((R.y = this.height + this.marginOffset.y),
                                    null == this.newIndex &&
                                      (this.newIndex = p))),
                            Z(m, R),
                            (i[d].translate = R))
                          : n &&
                            ((this.sortableGhost = m),
                            Q(m, { opacity: 0, visibility: 'hidden' }))
                    }
                    null == this.newIndex && (this.newIndex = this.index),
                      s && (this.newIndex = u)
                    var F = s ? this.prevIndex : u
                    r &&
                      this.newIndex !== F &&
                      r({
                        collection: this.manager.active.collection,
                        index: this.index,
                        newIndex: this.newIndex,
                        oldIndex: F,
                        isKeySorting: s,
                        nodes: i,
                        helper: this.helper,
                      })
                  },
                },
                {
                  key: 'getWrappedInstance',
                  value: function () {
                    return (
                      X(
                        r.withRef,
                        'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call'
                      ),
                      this.refs.wrappedInstance
                    )
                  },
                },
                {
                  key: 'getContainer',
                  value: function () {
                    var e = this.props.getContainer
                    return 'function' != typeof e
                      ? ReactDOM.findDOMNode(this)
                      : e(r.withRef ? this.getWrappedInstance() : void 0)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = r.withRef ? 'wrappedInstance' : null
                    return React.createElement(
                      e,
                      i({ ref: t }, U(this.props, Ie))
                    )
                  },
                },
                {
                  key: 'helperContainer',
                  get: function () {
                    var e = this.props.helperContainer
                    return 'function' == typeof e
                      ? e()
                      : this.props.helperContainer || this.document.body
                  },
                },
                {
                  key: 'containerScrollDelta',
                  get: function () {
                    return this.props.useWindowAsScrollContainer
                      ? { left: 0, top: 0 }
                      : {
                          left:
                            this.scrollContainer.scrollLeft -
                            this.initialScroll.left,
                          top:
                            this.scrollContainer.scrollTop -
                            this.initialScroll.top,
                        }
                  },
                },
                {
                  key: 'windowScrollDelta',
                  get: function () {
                    return {
                      left:
                        this.contentWindow.pageXOffset -
                        this.initialWindowScroll.left,
                      top:
                        this.contentWindow.pageYOffset -
                        this.initialWindowScroll.top,
                    }
                  },
                },
              ]),
              n
            )
          })()),
        u(t, 'displayName', ae('sortableList', e)),
        u(t, 'defaultProps', Me),
        u(t, 'propTypes', Te),
        u(t, 'childContextTypes', { manager: V.object.isRequired }),
        n
      )
    })(function (e) {
      var n = We('formily-array-items')
      return React.createElement(
        'div',
        t({}, e, { className: Ge(''.concat(n, '-list'), e.className) }),
        e.children
      )
    }),
    Xt = Formily.React.observer(function (e) {
      var n = Formily.React.useField(),
        r = We('formily-array-items'),
        o = Formily.React.useFieldSchema(),
        a = Formily.React.useFieldSchema().reduceProperties(function (e, t, n) {
          return (function (e) {
            var t
            return (
              (null === (t = e['x-component']) || void 0 === t
                ? void 0
                : t.indexOf('Addition')) > -1
            )
          })(t)
            ? React.createElement(Formily.React.RecursionField, {
                schema: t,
                name: n,
              })
            : e
        }, null),
        i = Array.isArray(n.value) ? n.value : []
      return React.createElement(
        Ft,
        null,
        React.createElement(
          'div',
          t({}, e, { onChange: function () {}, className: Ge(r, e.className) }),
          React.createElement(
            Yt,
            {
              useDragHandle: !0,
              lockAxis: 'y',
              helperClass: ''.concat(r, '-sort-helper'),
              onSortEnd: function (e) {
                var t = e.oldIndex,
                  r = e.newIndex
                n.move(t, r)
              },
            },
            null == i
              ? void 0
              : i.map(function (e, t) {
                  var n = Array.isArray(o.items)
                    ? o.items[t] || o.items[0]
                    : o.items
                  return React.createElement(
                    Ft.Item,
                    { key: t, index: t, record: e },
                    React.createElement(
                      Vt,
                      { key: 'item-'.concat(t), index: t },
                      React.createElement(
                        'div',
                        { className: ''.concat(r, '-item-inner') },
                        React.createElement(Formily.React.RecursionField, {
                          schema: n,
                          name: t,
                        })
                      )
                    )
                  )
                })
          ),
          a
        )
      )
    })
  ;(Xt.displayName = 'ArrayItems'),
    (Xt.Item = function (e) {
      var n = We('formily-array-items')
      return React.createElement(
        'div',
        t({}, e, {
          onChange: function () {},
          className: Ge(
            ''.concat(n, '-').concat(e.type || 'card'),
            e.className
          ),
        }),
        e.children
      )
    }),
    Ft.mixin(Xt)
  var Gt = Next.ConfigProvider.getContext,
    Kt = function (e) {
      return (function (e) {
        return (
          Formily.Shared.isNum(e) ||
          Formily.Shared.isStr(e) ||
          Formily.Shared.isBool(e) ||
          React.isValidElement(e)
        )
      })(e)
        ? { title: e }
        : e
    }
  function qt(e, n, a) {
    var i = this
    ;(Formily.Shared.isFn(n) || React.isValidElement(n)) &&
      ((a = n), (n = 'form-dialog'))
    var l = {
        host: document.createElement('div'),
        form: null,
        promise: null,
        openMiddlewares: [],
        confirmMiddlewares: [],
        cancelMiddlewares: [],
      },
      c = ot(l.host, n),
      s = Kt(e),
      u = t(t({}, s), {
        style: t({ width: '40%' }, s.style),
        afterClose: function () {
          var e
          null === (e = null == s ? void 0 : s.afterClose) ||
            void 0 === e ||
            e.call(s),
            c.unmount()
        },
      }),
      d = Formily.React.observer(function () {
        return React.createElement(
          React.Fragment,
          null,
          Formily.Shared.isFn(a) ? a(l.form) : a
        )
      }),
      f = function (e, n, r) {
        var o, a, i, c, s, f, m, p, h, v
        void 0 === e && (e = !0)
        var y = Gt(),
          g = u.prefix || y.prefix || 'next',
          b = t(
            t(
              {
                children:
                  (null ===
                    (a =
                      null === (o = null == y ? void 0 : y.locale) ||
                      void 0 === o
                        ? void 0
                        : o.Dialog) || void 0 === a
                    ? void 0
                    : a.ok) || '确定',
              },
              (null ===
                (c =
                  null === (i = null == y ? void 0 : y.defaultPropsConfig) ||
                  void 0 === i
                    ? void 0
                    : i.Dialog) || void 0 === c
                ? void 0
                : c.okProps) || {}
            ),
            u.okProps || {}
          ),
          R = t(
            t(
              {
                children:
                  (null ===
                    (f =
                      null === (s = null == y ? void 0 : y.locale) ||
                      void 0 === s
                        ? void 0
                        : s.Dialog) || void 0 === f
                    ? void 0
                    : f.cancel) || '取消',
              },
              (null ===
                (p =
                  null === (m = null == y ? void 0 : y.defaultPropsConfig) ||
                  void 0 === m
                    ? void 0
                    : m.Dialog) || void 0 === p
                ? void 0
                : p.cancelProps) || {}
            ),
            u.cancelProps || {}
          ),
          x = {
            ok: React.createElement(
              Next.Button,
              t(
                {
                  key: 'ok',
                  type: 'primary',
                  className: g + '-dialog-btn',
                  loading: l.form.submitting,
                  onClick: function (e) {
                    var t
                    !1 !==
                      (null === (t = null == u ? void 0 : u.onOk) ||
                      void 0 === t
                        ? void 0
                        : t.call(u, e)) && n()
                  },
                },
                b
              )
            ),
            cancel: React.createElement(
              Next.Button,
              t(
                {
                  key: 'cancel',
                  className: g + '-dialog-btn',
                  onClick: function (e) {
                    var t
                    !1 !==
                      (null === (t = null == u ? void 0 : u.onCancel) ||
                      void 0 === t
                        ? void 0
                        : t.call(u, e)) && r()
                  },
                },
                R
              )
            ),
          },
          w = (null ===
            (v =
              null === (h = null == y ? void 0 : y.defaultPropsConfig) ||
              void 0 === h
                ? void 0
                : h.Dialog) || void 0 === v
            ? void 0
            : v.footerActions) ||
            u.footerActions || ['cancel', 'ok']
        return React.createElement(
          Next.ConfigProvider,
          t({}, y),
          React.createElement(Formily.React.Observer, null, function () {
            return React.createElement(
              Next.Dialog,
              t({}, u, {
                visible: e,
                footer: React.createElement(
                  React.Fragment,
                  null,
                  w.map(function (e) {
                    return x[e]
                  })
                ),
                onClose: function (e, t) {
                  var n
                  null === (n = null == u ? void 0 : u.onClose) ||
                    void 0 === n ||
                    n.call(u, e, t),
                    r()
                },
              }),
              React.createElement(
                Formily.React.FormProvider,
                { form: l.form },
                React.createElement(d, null)
              )
            )
          })
        )
      }
    document.body.appendChild(l.host)
    var m = {
      forOpen: function (e) {
        return Formily.Shared.isFn(e) && l.openMiddlewares.push(e), m
      },
      forConfirm: function (e) {
        return Formily.Shared.isFn(e) && l.confirmMiddlewares.push(e), m
      },
      forCancel: function (e) {
        return Formily.Shared.isFn(e) && l.cancelMiddlewares.push(e), m
      },
      open: function (e) {
        return r(i, void 0, void 0, function () {
          var t = this
          return o(this, function (n) {
            return (
              l.promise ||
                (l.promise = new Promise(function (n, a) {
                  return r(t, void 0, void 0, function () {
                    var t,
                      i = this
                    return o(this, function (s) {
                      switch (s.label) {
                        case 0:
                          return (
                            s.trys.push([0, 2, , 3]),
                            [
                              4,
                              tt(u.loadingText, function () {
                                return Formily.Shared.applyMiddleware(
                                  e,
                                  l.openMiddlewares
                                )
                              }),
                            ]
                          )
                        case 1:
                          return (
                            (e = s.sent()),
                            (l.form = l.form || Formily.Core.createForm(e)),
                            [3, 3]
                          )
                        case 2:
                          return (t = s.sent()), a(t), [3, 3]
                        case 3:
                          return (
                            c.render(function () {
                              return f(
                                !0,
                                function () {
                                  l.form
                                    .submit(function () {
                                      return r(i, void 0, void 0, function () {
                                        return o(this, function (e) {
                                          switch (e.label) {
                                            case 0:
                                              return [
                                                4,
                                                Formily.Shared.applyMiddleware(
                                                  l.form,
                                                  l.confirmMiddlewares
                                                ),
                                              ]
                                            case 1:
                                              return (
                                                e.sent(),
                                                n(
                                                  Formily.Reactive.toJS(
                                                    l.form.values
                                                  )
                                                ),
                                                m.close(),
                                                [2]
                                              )
                                          }
                                        })
                                      })
                                    })
                                    .catch(function () {})
                                },
                                function () {
                                  return r(i, void 0, void 0, function () {
                                    return o(this, function (e) {
                                      switch (e.label) {
                                        case 0:
                                          return [
                                            4,
                                            tt(u.loadingText, function () {
                                              return Formily.Shared.applyMiddleware(
                                                l.form,
                                                l.cancelMiddlewares
                                              )
                                            }),
                                          ]
                                        case 1:
                                          return e.sent(), m.close(), [2]
                                      }
                                    })
                                  })
                                }
                              )
                            }),
                            [2]
                          )
                      }
                    })
                  })
                })),
              [2, l.promise]
            )
          })
        })
      },
      close: function () {
        l.host &&
          c.render(function () {
            return f(!1)
          })
      },
    }
    return m
  }
  ;(qt.Footer = function (e) {
    var t = React.useRef(),
      n = a(React.useState(), 2),
      r = n[0],
      o = n[1],
      i = React.useRef(),
      l = We('dialog')
    return (
      React.useLayoutEffect(function () {
        var e,
          n =
            null === (e = t.current) || void 0 === e
              ? void 0
              : e.closest('.'.concat(l))
        n &&
          (i.current ||
            ((i.current = n.querySelector('.'.concat(l, '-footer'))),
            i.current ||
              ((i.current = document.createElement('div')),
              i.current.classList.add(''.concat(l, '-footer')),
              n.appendChild(i.current))),
          o(i.current))
      }),
      (i.current = r),
      React.createElement(
        'div',
        { ref: t, style: { display: 'none' } },
        r && ReactDOM.createPortal(e.children, r)
      )
    )
  }),
    (qt.Portal = rt('form-dialog'))
  var Ut = Next.ConfigProvider.getContext,
    $t = function (e) {
      return (function (e) {
        return (
          Formily.Shared.isNum(e) ||
          Formily.Shared.isStr(e) ||
          Formily.Shared.isBool(e) ||
          React.isValidElement(e)
        )
      })(e)
        ? { title: e }
        : e
    }
  function Jt(e, n, a) {
    var i = this
    ;(Formily.Shared.isFn(n) || React.isValidElement(n)) &&
      ((a = n), (n = 'form-drawer'))
    var l = {
        host: document.createElement('div'),
        form: null,
        promise: null,
        openMiddlewares: [],
      },
      c = ot(l.host, n),
      s = $t(e),
      u = t(t({ width: '40%' }, s), {
        onClose: function (e, t) {
          var n
          !1 !==
            (null === (n = null == s ? void 0 : s.onClose) || void 0 === n
              ? void 0
              : n.call(s, e, t)) && m.close()
        },
        afterClose: function () {
          var e
          null === (e = null == s ? void 0 : s.afterClose) ||
            void 0 === e ||
            e.call(s),
            c.unmount()
        },
      }),
      d = Formily.React.observer(function () {
        return React.createElement(
          React.Fragment,
          null,
          Formily.Shared.isFn(a) ? a(l.form) : a
        )
      }),
      f = function (e) {
        return (
          void 0 === e && (e = !0),
          React.createElement(
            Next.ConfigProvider,
            t({}, Ut()),
            React.createElement(Formily.React.Observer, null, function () {
              return React.createElement(
                Next.Drawer,
                t({}, u, { visible: e }),
                React.createElement(
                  Formily.React.FormProvider,
                  { form: l.form },
                  React.createElement(d, null)
                )
              )
            })
          )
        )
      }
    document.body.appendChild(l.host)
    var m = {
      forOpen: function (e) {
        return Formily.Shared.isFn(e) && l.openMiddlewares.push(e), m
      },
      open: function (e) {
        return (
          l.promise ||
            (l.promise = new Promise(function (n, a) {
              return r(i, void 0, void 0, function () {
                var r
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        o.trys.push([0, 2, , 3]),
                        [
                          4,
                          tt(u.loadingText, function () {
                            return Formily.Shared.applyMiddleware(
                              e,
                              l.openMiddlewares
                            )
                          }),
                        ]
                      )
                    case 1:
                      return (
                        (e = o.sent()),
                        (l.form =
                          l.form ||
                          Formily.Core.createForm(
                            t(t({}, e), {
                              effects: function (t) {
                                var r
                                Formily.Core.onFormSubmitSuccess(function () {
                                  n(Formily.Reactive.toJS(t.values)), m.close()
                                }),
                                  null ===
                                    (r = null == e ? void 0 : e.effects) ||
                                    void 0 === r ||
                                    r.call(e, t)
                              },
                            })
                          )),
                        [3, 3]
                      )
                    case 2:
                      return (r = o.sent()), a(r), [3, 3]
                    case 3:
                      return (
                        c.render(function () {
                          return f(!1)
                        }),
                        setTimeout(function () {
                          c.render(function () {
                            return f(!0)
                          })
                        }, 16),
                        [2]
                      )
                  }
                })
              })
            })),
          l.promise
        )
      },
      close: function () {
        l.host &&
          c.render(function () {
            return f(!1)
          })
      },
    }
    return m
  }
  ;(Jt.Footer = function (e) {
    var t = React.useRef(),
      n = a(React.useState(), 2),
      r = n[0],
      o = n[1],
      i = React.useRef(),
      l = We('drawer')
    return (
      React.useLayoutEffect(function () {
        var e,
          n =
            null === (e = t.current) || void 0 === e
              ? void 0
              : e.closest('.'.concat(l))
        if (n) {
          if (!i.current) {
            i.current = n.querySelector('.'.concat(l, '-footer'))
            var r = n.querySelector('.'.concat(l, '-body'))
            !i.current &&
              r &&
              ((i.current = document.createElement('div')),
              i.current.classList.add(''.concat(l, '-footer')),
              (i.current.style.padding = '20px'),
              (i.current.style.borderTop = '1px solid #eee'),
              r.after(i.current))
          }
          o(i.current)
        }
      }),
      (i.current = r),
      React.createElement(
        'div',
        { ref: t, style: { display: 'none' } },
        r && ReactDOM.createPortal(e.children, r)
      )
    )
  }),
    (Jt.Portal = rt('form-drawer'))
  var Qt = function () {
      return (
        (Qt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }),
        Qt.apply(this, arguments)
      )
    },
    Zt = function (e) {
      return 1 === e.nodeType
    },
    en = (function () {
      function e(e) {
        var t = this
        ;(this.childList = []),
          (this.handler = function (e) {
            e.forEach(function (e) {
              'childList' === e.type &&
                (e.addedNodes.forEach(function (e) {
                  Zt(e) && t.addObserver(e)
                }),
                e.removedNodes.forEach(function (e) {
                  Zt(e) && t.removeObserver(e)
                }))
            }),
              t.callback(e, t.observer)
          }),
          (this.observe = function (e, n) {
            ;(t.init = n),
              t.observeChildList(e),
              t.observer.observe(
                e,
                Qt(Qt({}, t.init), {
                  subtree: !1,
                  childList: !0,
                  characterData: !1,
                  characterDataOldValue: !1,
                  attributeOldValue: !1,
                })
              )
          }),
          (this.disconnect = function () {
            t.observer.disconnect()
          }),
          (this.callback = e),
          (this.observer = new MutationObserver(this.handler))
      }
      return (
        (e.prototype.observeChildList = function (e) {
          var t = this
          Array.from(e.children).forEach(function (e) {
            t.addObserver(e)
          })
        }),
        (e.prototype.addObserver = function (e) {
          var t = this
          if (
            !this.childList.find(function (t) {
              return t.element === e
            })
          ) {
            var n = this.childList.length,
              r = {
                element: e,
                observer: new MutationObserver(this.callback),
                dispose: function () {
                  r.observer &&
                    (r.observer.disconnect(),
                    delete r.observer,
                    t.childList.splice(n, 1))
                },
              }
            r.observer.observe(
              r.element,
              Qt(Qt({}, this.init), {
                subtree: !1,
                childList: !1,
                characterData: !1,
                characterDataOldValue: !1,
                attributeOldValue: !1,
              })
            ),
              this.childList.push(r)
          }
        }),
        (e.prototype.removeObserver = function (e) {
          var t,
            n = this.childList.find(function (t) {
              return t.element === e
            })
          n && (null === (t = n.dispose) || void 0 === t || t.call(n))
        }),
        e
      )
    })(),
    tn = function () {
      return (
        (tn =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }),
        tn.apply(this, arguments)
      )
    },
    nn = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        a = n.call(e),
        i = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
          i.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = a.return) && n.call(a)
        } finally {
          if (o) throw o.error
        }
      }
      return i
    },
    rn = function (e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, o = 0, a = t.length; o < a; o++)
          (!r && o in t) ||
            (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
      return e.concat(r || Array.prototype.slice.call(t))
    },
    on = /span\s*(\d+)/,
    an = function (e, t) {
      return (
        void 0 === t && (t = !1),
        e.reduce(function (e, n) {
          var r
          return t || n.visible
            ? -1 === n.originSpan
              ? e + (null !== (r = n.span) && void 0 !== r ? r : 1)
              : e + n.span
            : e
        }, 0)
      )
    },
    ln = function (e, t) {
      return (
        void 0 === t && (t = !1),
        e.reduce(function (e, n) {
          var r
          return t || n.visible
            ? -1 === n.originSpan
              ? e + (null !== (r = n.span) && void 0 !== r ? r : 1)
              : e + n.originSpan
            : e
        }, 0)
      )
    },
    cn = function (e) {
      var t, n
      return Number(
        null !==
          (n =
            null === (t = String(e).match(on)) || void 0 === t
              ? void 0
              : t[1]) && void 0 !== n
          ? n
          : 1
      )
    },
    sn = function (e, t) {
      return (function (e) {
        return null != e
      })(e)
        ? (function (e, t) {
            var n
            return Array.isArray(e)
              ? -1 === t
                ? e[0]
                : null !== (n = e[t]) && void 0 !== n
                ? n
                : e[e.length - 1]
              : e
          })(e, t.breakpoint)
        : e
    },
    un = function (e) {
      return Promise.resolve(0).then(e)
    },
    dn = (function () {
      function e(e) {
        var t = this
        ;(this.width = 0),
          (this.height = 0),
          (this.children = []),
          (this.childTotalColumns = 0),
          (this.shadowChildTotalColumns = 0),
          (this.childOriginTotalColumns = 0),
          (this.shadowChildOriginTotalColumns = 0),
          (this.ready = !1),
          (this.connect = function (e) {
            if (e) {
              t.container = e
              var n = Formily.Reactive.batch.bound(function () {
                  r(), (t.ready = !0)
                }),
                r = Formily.Reactive.batch.bound(function () {
                  var e
                  ;(t.children =
                    ((e = t.container.children),
                    Array.from(e).reduce(function (e, t, n) {
                      var r,
                        o = getComputedStyle(t),
                        a = !('none' === o.display),
                        i = t.getAttribute('data-grid-span'),
                        l =
                          null !== (r = cn(o.gridColumnStart)) && void 0 !== r
                            ? r
                            : 1,
                        c = {
                          index: n,
                          span: l,
                          visible: a,
                          originSpan: Number(null != i ? i : l),
                          element: t,
                        }
                      return (
                        i || t.setAttribute('data-grid-span', String(l)),
                        e.concat(c)
                      )
                    }, []))),
                    (t.childTotalColumns = an(t.children)),
                    (t.shadowChildTotalColumns = an(t.children, !0)),
                    (t.childOriginTotalColumns = ln(t.children)),
                    (t.shadowChildOriginTotalColumns = ln(t.children, !0))
                  var n,
                    r,
                    o,
                    a,
                    i,
                    l = t.container.getBoundingClientRect()
                  l.width &&
                    l.height &&
                    ((t.width = l.width), (t.height = l.height)),
                    (r = 0),
                    (o = 0),
                    (a = 0),
                    (i = 0),
                    (n = t).ready &&
                      (n.children = n.children.map(function (e) {
                        var t,
                          l = r % n.columns,
                          c = o % n.columns,
                          s = n.columns - l,
                          u = e.originSpan,
                          d = u > n.columns ? n.columns : u,
                          f = n.options.strictAutoFit ? d : d > s ? s : d,
                          m =
                            -1 === u
                              ? 'span '.concat(s, ' / -1')
                              : 'span '.concat(f, ' / auto')
                        return (
                          e.element.style.gridColumn !== m &&
                            (e.element.style.gridColumn = m),
                          e.visible && (r += f),
                          (o += f),
                          0 === l && a++,
                          0 == c && i++,
                          (e.shadowRow = i),
                          (e.shadowColumn = c + 1),
                          e.visible && ((e.row = a), (e.column = l + 1)),
                          (null === (t = n.options) || void 0 === t
                            ? void 0
                            : t.shouldVisible) &&
                            (n.options.shouldVisible(e, n)
                              ? (e.visible || (e.element.style.display = ''),
                                (e.visible = !0))
                              : (e.visible &&
                                  (e.element.style.display = 'none'),
                                (e.visible = !1))),
                          e
                        )
                      })),
                    un(function () {
                      var e, n
                      null ===
                        (n =
                          null === (e = t.options) || void 0 === e
                            ? void 0
                            : e.onDigest) ||
                        void 0 === n ||
                        n.call(e, t)
                    }),
                    t.ready ||
                      un(function () {
                        var e, n
                        null ===
                          (n =
                            null === (e = t.options) || void 0 === e
                              ? void 0
                              : e.onInitialized) ||
                          void 0 === n ||
                          n.call(e, t)
                      })
                }),
                o = new en(r),
                a = new ResizeObserver(r),
                i = Formily.Reactive.reaction(function () {
                  return tn({}, t.options)
                }, r)
              return (
                a.observe(t.container),
                o.observe(t.container, {
                  attributeFilter: ['style', 'class', 'data-grid-span'],
                  attributes: !0,
                }),
                n(),
                function () {
                  a.unobserve(t.container),
                    a.disconnect(),
                    o.disconnect(),
                    i(),
                    (t.children = [])
                }
              )
            }
            return function () {}
          }),
          (this.options = tn(
            {
              breakpoints: [720, 1280, 1920],
              columnGap: 8,
              rowGap: 4,
              minWidth: 100,
              colWrap: !0,
              strictAutoFit: !1,
            },
            e
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
        Object.defineProperty(e.prototype, 'breakpoints', {
          get: function () {
            return this.options.breakpoints
          },
          set: function (e) {
            this.options.breakpoints = e
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'breakpoint', {
          get: function () {
            return (function (e, t) {
              if (Array.isArray(e))
                for (var n = 0; n < e.length; n++) if (t <= e[n]) return n
              return -1
            })(this.options.breakpoints, this.width)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'maxWidth', {
          get: function () {
            var e
            return null !== (e = sn(this.options.maxWidth, this)) &&
              void 0 !== e
              ? e
              : 1 / 0
          },
          set: function (e) {
            this.options.maxWidth = e
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'minWidth', {
          get: function () {
            var e
            return null !== (e = sn(this.options.minWidth, this)) &&
              void 0 !== e
              ? e
              : 100
          },
          set: function (e) {
            this.options.minWidth = e
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'maxColumns', {
          get: function () {
            var e
            return null !== (e = sn(this.options.maxColumns, this)) &&
              void 0 !== e
              ? e
              : 1 / 0
          },
          set: function (e) {
            this.options.maxColumns = e
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'maxRows', {
          get: function () {
            var e
            return null !== (e = this.options.maxRows) && void 0 !== e
              ? e
              : 1 / 0
          },
          set: function (e) {
            this.options.maxRows = e
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'minColumns', {
          get: function () {
            var e
            return null !== (e = sn(this.options.minColumns, this)) &&
              void 0 !== e
              ? e
              : 1
          },
          set: function (e) {
            this.options.minColumns = e
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'rowGap', {
          get: function () {
            var e
            return null !== (e = sn(this.options.rowGap, this)) && void 0 !== e
              ? e
              : 5
          },
          set: function (e) {
            this.options.rowGap = e
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'columnGap', {
          get: function () {
            var e
            return null !== (e = sn(this.options.columnGap, this)) &&
              void 0 !== e
              ? e
              : 10
          },
          set: function (e) {
            this.options.columnGap = e
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'colWrap', {
          get: function () {
            var e
            return (
              null === (e = sn(this.options.colWrap, this)) || void 0 === e || e
            )
          },
          set: function (e) {
            this.options.colWrap = e
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'columns', {
          get: function () {
            if (!this.ready) return 0
            var e = this.childOriginTotalColumns
            if (!1 === this.colWrap) return e
            var t = this.childSize,
              n = Math.min(
                e,
                Math.round(this.width / (this.maxWidth + this.columnGap))
              ),
              r = Math.min(
                e,
                Math.round(this.width / (this.minWidth + this.columnGap))
              ),
              o = Math.min(t, n, r),
              a = Math.max(t, n, r),
              i = (function (e, t, n, r, o, a) {
                for (var i = [], l = n; l <= t; l++) {
                  var c = e - (l - 1) * a,
                    s = c / l
                  s >= o && s <= r
                    ? i.push(l)
                    : s < o
                    ? i.push(Math.min(Math.floor(c / o), t))
                    : s > r && i.push(Math.min(Math.floor(c / r), t))
                }
                return Math.max.apply(Math, rn([], nn(i), !1))
              })(this.width, a, o, this.maxWidth, this.minWidth, this.columnGap)
            return i >= this.maxColumns
              ? this.maxColumns
              : i <= this.minColumns
              ? this.minColumns
              : i
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'rows', {
          get: function () {
            return Math.ceil(this.childTotalColumns / this.columns)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'shadowRows', {
          get: function () {
            return Math.ceil(this.shadowChildTotalColumns / this.columns)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'templateColumns', {
          get: function () {
            if (!this.width) return ''
            if (this.maxWidth === 1 / 0)
              return 'repeat('.concat(this.columns, ',1fr)')
            if (!0 !== this.options.strictAutoFit) {
              var e =
                (this.width - (this.columns - 1) * this.columnGap) /
                this.columns
              if (e < this.minWidth || e > this.maxWidth)
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
        Object.defineProperty(e.prototype, 'gap', {
          get: function () {
            return ''.concat(this.rowGap, 'px ').concat(this.columnGap, 'px')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'childSize', {
          get: function () {
            return this.children.length
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'fullnessLastColumn', {
          get: function () {
            var e
            return (
              this.columns ===
              (null === (e = this.children[this.childSize - 1]) || void 0 === e
                ? void 0
                : e.span)
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.id = function (e) {
          return (
            void 0 === e && (e = {}),
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
              ].map(function (t) {
                return e[t]
              })
            )
          )
        }),
        e
      )
    })(),
    fn = React.createContext(null),
    mn = function (e) {
      return Formily.Reactive.markRaw(new dn(e))
    },
    pn = function () {
      return React.useContext(fn)
    },
    hn = function (e) {
      return void 0 === e && (e = 1), e
    },
    vn = function (e) {
      return void 0 === e && (e = 1), e
    },
    yn = Formily.React.observer(
      function (e) {
        var r,
          o,
          a = e.children,
          i = e.className,
          l = e.style,
          c = n(e, ['children', 'className', 'style']),
          s = Je(),
          u = t(
            {
              columnGap:
                null !== (r = null == s ? void 0 : s.gridColumnGap) &&
                void 0 !== r
                  ? r
                  : 8,
              rowGap:
                null !== (o = null == s ? void 0 : s.gridRowGap) && void 0 !== o
                  ? o
                  : 4,
            },
            c
          ),
          d = React.useMemo(
            function () {
              return Formily.Reactive.markRaw(
                (null == u ? void 0 : u.grid) ? u.grid : new dn(u)
              )
            },
            [dn.id(u)]
          ),
          f = React.useRef(),
          m = We('formily-grid', c),
          p = at(c)
        return (
          React.useLayoutEffect(
            function () {
              return d.connect(f.current)
            },
            [d]
          ),
          React.createElement(
            fn.Provider,
            { value: d },
            React.createElement(
              'div',
              t({}, p, {
                className: Ge(''.concat(m, '-layout'), i),
                style: t(t({}, l), {
                  gridTemplateColumns: d.templateColumns,
                  gap: d.gap,
                }),
                ref: f,
              }),
              a
            )
          )
        )
      },
      { forwardRef: !0 }
    ),
    gn = Formily.React.observer(function (e) {
      var r = e.gridSpan,
        o = e.children,
        a = n(e, ['gridSpan', 'children'])
      return React.createElement('div', t({}, a, { 'data-grid-span': r }), o)
    })
  ;(gn.defaultProps = { gridSpan: 1 }),
    (yn.createFormGrid = mn),
    (yn.useFormGrid = pn),
    (yn.useGridSpan = hn),
    (yn.useGridColumn = vn),
    (yn.GridColumn = gn)
  var bn = {
      error: React.createElement(mt, null),
      success: React.createElement(pt, null),
      warning: React.createElement(ht, null),
    },
    Rn = function (e) {
      var r,
        o,
        i,
        l,
        c,
        s = e.children,
        u = n(e, ['children']),
        d = a(React.useState(!1), 2),
        f = d[0],
        m = d[1],
        p = (function (e) {
          var n,
            r,
            o,
            a,
            i,
            l,
            c,
            s,
            u,
            d,
            f,
            m,
            p,
            h,
            v,
            y,
            g,
            b,
            R,
            x,
            w,
            E,
            F,
            S,
            C = Je()
          return t(t({}, e), {
            layout:
              null !==
                (r = null !== (n = e.layout) && void 0 !== n ? n : C.layout) &&
              void 0 !== r
                ? r
                : 'horizontal',
            colon: null !== (o = e.colon) && void 0 !== o ? o : C.colon,
            labelAlign:
              'vertical' === C.layout
                ? null !==
                    (i =
                      null !== (a = e.labelAlign) && void 0 !== a
                        ? a
                        : C.labelAlign) && void 0 !== i
                  ? i
                  : 'left'
                : null !==
                    (c =
                      null !== (l = e.labelAlign) && void 0 !== l
                        ? l
                        : C.labelAlign) && void 0 !== c
                ? c
                : 'right',
            labelWrap:
              null !== (s = e.labelWrap) && void 0 !== s ? s : C.labelWrap,
            labelWidth:
              null !== (u = e.labelWidth) && void 0 !== u ? u : C.labelWidth,
            wrapperWidth:
              null !== (d = e.wrapperWidth) && void 0 !== d
                ? d
                : C.wrapperWidth,
            labelCol:
              null !== (f = e.labelCol) && void 0 !== f ? f : C.labelCol,
            wrapperCol:
              null !== (m = e.wrapperCol) && void 0 !== m ? m : C.wrapperCol,
            wrapperAlign:
              null !== (p = e.wrapperAlign) && void 0 !== p
                ? p
                : C.wrapperAlign,
            wrapperWrap:
              null !== (h = e.wrapperWrap) && void 0 !== h ? h : C.wrapperWrap,
            fullness:
              null !== (v = e.fullness) && void 0 !== v ? v : C.fullness,
            size: null !== (y = e.size) && void 0 !== y ? y : C.size,
            inset: null !== (g = e.inset) && void 0 !== g ? g : C.inset,
            asterisk: e.asterisk,
            bordered:
              null !== (b = e.bordered) && void 0 !== b ? b : C.bordered,
            feedbackIcon: e.feedbackIcon,
            feedbackLayout:
              null !==
                (x =
                  null !== (R = e.feedbackLayout) && void 0 !== R
                    ? R
                    : C.feedbackLayout) && void 0 !== x
                ? x
                : 'loose',
            tooltipLayout:
              null !==
                (E =
                  null !== (w = e.tooltipLayout) && void 0 !== w
                    ? w
                    : C.tooltipLayout) && void 0 !== E
                ? E
                : 'icon',
            tooltipIcon:
              null !==
                (S =
                  null !== (F = e.tooltipIcon) && void 0 !== F
                    ? F
                    : C.tooltipIcon) && void 0 !== S
                ? S
                : React.createElement(ft, null),
          })
        })(u),
        h = (function () {
          var e = a(React.useState(!1), 2),
            t = e[0],
            n = e[1],
            r = React.useRef(),
            o = React.useRef()
          return (
            React.useEffect(function () {
              if (r.current && o.current) {
                var e = o.current.getBoundingClientRect().width,
                  a = r.current.getBoundingClientRect().width
                e && a && a < e ? t || n(!0) : t && n(!1)
              }
            }, []),
            { overflow: t, containerRef: r, contentRef: o }
          )
        })(),
        v = h.containerRef,
        y = h.contentRef,
        g = h.overflow,
        b = p.label,
        R = p.style,
        x = p.layout,
        w = p.colon,
        E = void 0 === w || w,
        F = p.addonBefore,
        S = p.addonAfter,
        C = p.asterisk,
        O = p.feedbackStatus,
        N = p.extra,
        k = p.feedbackText,
        P = p.fullness,
        T = p.feedbackLayout,
        A = p.feedbackIcon,
        M = p.inset,
        I = p.bordered,
        _ = void 0 === I || I,
        j = p.labelWidth,
        D = p.wrapperWidth,
        z = p.labelCol,
        L = p.wrapperCol,
        B = p.labelAlign,
        W = p.wrapperAlign,
        H = void 0 === W ? 'left' : W,
        V = p.size,
        Y = p.labelWrap,
        X = p.wrapperWrap,
        G = p.tooltip,
        K = p.tooltipLayout,
        q = p.tooltipIcon,
        U = t({}, p.labelStyle),
        $ = t({}, p.wrapperStyle),
        J = !1
      ;(j || D) &&
        (j &&
          ((U.width = 'auto' === j ? void 0 : j),
          (U.maxWidth = 'auto' === j ? void 0 : j)),
        D &&
          (($.width = 'auto' === D ? void 0 : D),
          ($.maxWidth = 'auto' === D ? void 0 : D))),
        (z || L) && (U.width || $.width || (J = !0))
      var Q = We('formily-item', e),
        Z = We(),
        ee =
          'popover' === T
            ? React.createElement(
                Next.Balloon,
                {
                  needAdjust: !0,
                  align: 't',
                  closable: !1,
                  trigger: s,
                  visible: !!k,
                },
                React.createElement(
                  'div',
                  {
                    className: Ge(
                      ((r = {}),
                      (r[''.concat(Q, '-').concat(O, '-help')] = !!O),
                      (r[''.concat(Q, '-help')] = !0),
                      r)
                    ),
                  },
                  bn[O],
                  ' ',
                  k
                )
              )
            : s,
        te = function () {
          var e = React.createElement(
            'div',
            { className: Ge(''.concat(Q, '-label-content')), ref: v },
            C &&
              React.createElement(
                'span',
                { className: Ge(''.concat(Q, '-asterisk')) },
                '*'
              ),
            React.createElement('label', { ref: y }, b)
          )
          return ('text' === K && G) || g
            ? React.createElement(
                Next.Balloon.Tooltip,
                { align: 't', trigger: e },
                g
                  ? React.createElement(
                      'div',
                      null,
                      React.createElement('div', null, b),
                      React.createElement('div', null, G)
                    )
                  : G
              )
            : e
        }
      return React.createElement(
        'div',
        t({}, at(e), {
          style: t(t({}, R), {}),
          'data-grid-span': e.gridSpan,
          className: Ge(
            ((o = {}),
            (o[''.concat(Q)] = !0),
            (o[''.concat(Q, '-layout-').concat(x)] = !0),
            (o[''.concat(Q, '-').concat(O)] = !!O),
            (o[''.concat(Q, '-feedback-has-text')] = !!k),
            (o[''.concat(Q, '-size-').concat(V)] = !!V),
            (o[''.concat(Q, '-feedback-layout-').concat(T)] = !!T),
            (o[''.concat(Q, '-fullness')] = !!P || !!M || !!A),
            (o[''.concat(Q, '-inset')] = !!M),
            (o[''.concat(Z, '-input')] = !!M),
            (o[''.concat(Q, '-active')] = f),
            (o[''.concat(Z, '-focus')] = f),
            (o[''.concat(Q, '-inset-active')] = !!M && f),
            (o[''.concat(Q, '-label-align-').concat(B)] = !0),
            (o[''.concat(Q, '-control-align-').concat(H)] = !0),
            (o[''.concat(Q, '-label-wrap')] = !!Y),
            (o[''.concat(Q, '-control-wrap')] = !!X),
            (o[''.concat(Q, '-bordered-none')] = !1 === _),
            (o[e.className] = !!e.className),
            o)
          ),
          onFocus: function () {
            ;(A || M) && m(!0)
          },
          onBlur: function () {
            ;(A || M) && m(!1)
          },
        }),
        (function () {
          var e
          return b
            ? React.createElement(
                'div',
                {
                  className: Ge(
                    ((e = {}),
                    (e[''.concat(Q, '-label')] = !0),
                    (e[''.concat(Q, '-label-tooltip')] =
                      (G && 'text' === K) || g),
                    (e[''.concat(Q, '-item-col-').concat(z)] = J && !!z),
                    e)
                  ),
                  style: U,
                },
                te(),
                (function () {
                  if (G && 'icon' === K && !g)
                    return React.createElement(
                      'span',
                      { className: Ge(''.concat(Q, '-label-tooltip-icon')) },
                      React.createElement(
                        Next.Balloon.Tooltip,
                        { align: 't', trigger: q },
                        G
                      )
                    )
                })(),
                ' ' !== b &&
                  React.createElement(
                    'span',
                    { className: Ge(''.concat(Q, '-colon')) },
                    E ? ':' : ''
                  )
              )
            : null
        })(),
        React.createElement(
          'div',
          {
            className: Ge(
              ((i = {}),
              (i[''.concat(Q, '-control')] = !0),
              (i[''.concat(Q, '-item-col-').concat(L)] = J && !!L && b),
              i)
            ),
          },
          React.createElement(
            'div',
            { className: Ge(''.concat(Q, '-control-content')) },
            F &&
              React.createElement(
                'div',
                { className: Ge(''.concat(Q, '-addon-before')) },
                F
              ),
            React.createElement(
              'div',
              {
                style: $,
                className: Ge(
                  ((l = {}),
                  (l[''.concat(Q, '-control-content-component')] = !0),
                  (l[
                    ''.concat(Q, '-control-content-component-has-feedback-icon')
                  ] = !!A),
                  (l[''.concat(Z, '-input')] = !!A),
                  (l[''.concat(Q, '-active')] = f),
                  (l[''.concat(Z, '-focus')] = f),
                  l)
                ),
              },
              React.createElement(qe.Provider, { value: { size: V } }, ee),
              A &&
                React.createElement(
                  'div',
                  { className: Ge(''.concat(Q, '-feedback-icon')) },
                  A
                )
            ),
            S &&
              React.createElement(
                'div',
                { className: Ge(''.concat(Q, '-addon-after')) },
                S
              )
          ),
          !!k &&
            'popover' !== T &&
            'none' !== T &&
            React.createElement(
              'div',
              {
                className: Ge(
                  ((c = {}),
                  (c[''.concat(Q, '-').concat(O, '-help')] = !!O),
                  (c[''.concat(Q, '-help')] = !0),
                  (c[''.concat(Q, '-help-enter')] = !0),
                  (c[''.concat(Q, '-help-enter-active')] = !0),
                  c)
                ),
              },
              k
            ),
          N &&
            React.createElement(
              'div',
              { className: Ge(''.concat(Q, '-extra')) },
              N
            )
        )
      )
    },
    xn = Formily.React.connect(
      Rn,
      Formily.React.mapProps(
        { validateStatus: !0, title: 'label', required: !0 },
        function (e, t) {
          if (Formily.Core.isVoidField(t))
            return { extra: e.extra || t.description }
          if (!t) return e
          return {
            feedbackText: (function () {
              var n = function (e) {
                return e.reduce(function (t, n, r) {
                  return n
                    ? r < e.length - 1
                      ? t.concat([n, ', '])
                      : t.concat([n])
                    : t
                }, [])
              }
              if (!t.validating)
                return e.feedbackText
                  ? e.feedbackText
                  : t.selfErrors.length
                  ? n(t.selfErrors)
                  : t.selfWarnings.length
                  ? n(t.selfWarnings)
                  : t.selfSuccesses.length
                  ? n(t.selfSuccesses)
                  : void 0
            })(),
            extra: e.extra || t.description,
          }
        },
        function (e, t) {
          var n
          return Formily.Core.isVoidField(t)
            ? e
            : t
            ? {
                feedbackStatus:
                  'validating' === t.validateStatus
                    ? 'pending'
                    : (null === (n = t.decorator[1]) || void 0 === n
                        ? void 0
                        : n.feedbackStatus) || t.validateStatus,
              }
            : e
        },
        function (e, t) {
          if (Formily.Core.isVoidField(t)) return e
          if (!t) return e
          var n = !1
          return (
            t.required && 'readPretty' !== t.pattern && (n = !0),
            'asterisk' in e && (n = e.asterisk),
            { asterisk: n }
          )
        }
      )
    )
  ;(xn.defaultProps = { fullness: !0 }), (xn.BaseItem = Rn)
  var wn = React.createContext('N/A'),
    En = wn.Provider,
    Fn = function (e) {
      var t = React.useContext(wn) || 'N/A'
      return Formily.Shared.isEmpty(e) ? t : e
    },
    Sn = Formily.React.observer(function (e) {
      var t,
        n,
        r,
        o = Formily.React.useField(),
        a = We('form-text', e),
        i = (
          null === (t = null == o ? void 0 : o.dataSource) || void 0 === t
            ? void 0
            : t.length
        )
          ? o.dataSource
          : (
              null === (n = null == e ? void 0 : e.dataSource) || void 0 === n
                ? void 0
                : n.length
            )
          ? e.dataSource
          : [],
        l = Fn(),
        c = function (e) {
          var t
          return (
            (null ===
              (t =
                null == i
                  ? void 0
                  : i.find(function (t) {
                      return t.value == (null == e ? void 0 : e.value)
                    })) || void 0 === t
              ? void 0
              : t.label) ||
            e.label ||
            l
          )
        }
      return React.createElement(
        'div',
        { className: Ge(a, e.className) },
        (r = (function () {
          var t = e.value
          return 'multiple' === e.mode || 'tag' === e.mode
            ? e.useDetailValue
              ? Formily.Shared.isArr(t)
                ? t
                : []
              : Formily.Shared.isArr(t)
              ? t.map(function (e) {
                  return { label: e, value: e }
                })
              : []
            : e.useDetailValue
            ? Formily.Shared.isValid(t)
              ? [t]
              : []
            : Formily.Shared.isValid(t)
            ? [{ label: t, value: t }]
            : []
        })()).length
          ? 1 === r.length
            ? c(r[0])
            : r.map(function (e, t) {
                return React.createElement(
                  Next.Tag,
                  { type: 'primary', size: 'small', key: t },
                  c(e)
                )
              })
          : l
      )
    }),
    Cn = Formily.React.observer(function (e) {
      var t,
        n,
        r,
        o = Formily.React.useField(),
        a = Fn(),
        i = We('form-text', e),
        l = (
          null === (t = null == o ? void 0 : o.dataSource) || void 0 === t
            ? void 0
            : t.length
        )
          ? o.dataSource
          : (
              null === (n = null == e ? void 0 : e.dataSource) || void 0 === n
                ? void 0
                : n.length
            )
          ? e.dataSource
          : [],
        c = function (e, t) {
          for (var n = 0; n < (null == t ? void 0 : t.length); n++) {
            var r = t[n]
            if ((null == r ? void 0 : r.value) === e)
              return null == r ? void 0 : r.label
            var o = c(e, null == r ? void 0 : r.children)
            if (o) return o
          }
        }
      return React.createElement(
        'div',
        { className: Ge(i, e.className) },
        (
          null ==
          (r = (function () {
            var t = e.value
            return e.multiple
              ? e.useDetailValue
                ? Formily.Shared.isArr(t)
                  ? t
                  : []
                : Formily.Shared.isArr(t)
                ? t.map(function (e) {
                    return { label: e, value: e }
                  })
                : []
              : e.useDetailValue
              ? t
                ? [t]
                : []
              : t
              ? [{ label: t, value: t }]
              : []
          })())
            ? void 0
            : r.length
        )
          ? r.map(function (e, t) {
              var n = e.value,
                r = e.label
              return React.createElement(
                Next.Tag,
                { type: 'primary', size: 'small', key: t },
                c(n, l) || r || a
              )
            })
          : React.createElement(Next.Tag, { type: 'primary', size: 'small' }, a)
      )
    }),
    On = Formily.React.observer(function (e) {
      var t,
        n,
        r = Formily.React.useField(),
        o = Fn(),
        a = We('form-text', e),
        i = (
          null === (t = null == r ? void 0 : r.dataSource) || void 0 === t
            ? void 0
            : t.length
        )
          ? r.dataSource
          : (
              null === (n = null == e ? void 0 : e.dataSource) || void 0 === n
                ? void 0
                : n.length
            )
          ? e.dataSource
          : []
      return React.createElement(
        'div',
        { className: Ge(a, e.className) },
        (Formily.Shared.isArr(e.value) ? e.value : [])
          .map(function (e) {
            var t
            return (
              (null ===
                (t =
                  null == i
                    ? void 0
                    : i.find(function (t) {
                        return t.value == e
                      })) || void 0 === t
                ? void 0
                : t.label) || o
            )
          })
          .join('/')
      )
    }),
    Nn = function (e) {
      var t = We('form-text', e)
      return React.createElement(
        'div',
        { className: Ge(t, e.className), style: e.style },
        Fn(e.value)
      )
    }
  ;(Nn.Input = function (e) {
    var t = We('form-text', e)
    return React.createElement(
      'div',
      { className: Ge(t, e.className) },
      e.addonBefore,
      e.innerBefore,
      Fn(e.value),
      e.innerAfter,
      e.addonAfter
    )
  }),
    (Nn.Select = Sn),
    (Nn.TreeSelect = Cn),
    (Nn.Cascader = On),
    (Nn.DatePicker = function (e) {
      var t,
        n = Fn(),
        r = We('form-text', e)
      return React.createElement(
        'div',
        { className: Ge(r, e.className) },
        ((t = Be(e.value, e.format, n)),
        Formily.Shared.isArr(t) ? t.join('~') : t)
      )
    }),
    (Nn.DateRangePicker = function (e) {
      var t,
        n = Fn(),
        r = We('form-text', e)
      return React.createElement(
        'div',
        { className: Ge(r, e.className) },
        ((t = Be(e.value, e.format, n)),
        Formily.Shared.isArr(t) ? t.join('~') : t)
      )
    }),
    (Nn.TimePicker = function (e) {
      var t,
        n = Fn(),
        r = We('form-text', e)
      return React.createElement(
        'div',
        { className: Ge(r, e.className) },
        ((t = Be(e.value, e.format, n)),
        Formily.Shared.isArr(t) ? t.join('~') : t)
      )
    }),
    (Nn.Placeholder = En),
    (Nn.usePlaceholder = Fn)
  var kn = Nn,
    Pn = function (e) {
      var r,
        o,
        a,
        i = e.form,
        l = e.component,
        c = e.onAutoSubmit,
        s = e.onAutoSubmitFailed,
        u = e.previewTextPlaceholder,
        d = n(e, [
          'form',
          'component',
          'onAutoSubmit',
          'onAutoSubmitFailed',
          'previewTextPlaceholder',
        ]),
        f = Formily.React.useForm(),
        m =
          null !==
            (a =
              null ===
                (o =
                  null === (r = Next.ConfigProvider.getContext()) ||
                  void 0 === r
                    ? void 0
                    : r.locale) || void 0 === o
                ? void 0
                : o.momentLocale) && void 0 !== a
            ? a
            : 'zh-CN'
      React.useMemo(
        function () {
          var e = Formily.Core.getValidateLocaleIOSCode(m)
          Formily.Core.setValidateLanguage(e)
        },
        [m]
      )
      var p = function (e) {
        return React.createElement(
          kn.Placeholder,
          { value: u },
          React.createElement(
            Qe,
            t({}, d),
            React.createElement(
              l,
              {
                onSubmit: function (t) {
                  var n, r
                  null === (n = null == t ? void 0 : t.stopPropagation) ||
                    void 0 === n ||
                    n.call(t),
                    null === (r = null == t ? void 0 : t.preventDefault) ||
                      void 0 === r ||
                      r.call(t),
                    e.submit(c).catch(s)
                },
              },
              d.children
            )
          )
        )
      }
      if (i)
        return React.createElement(
          Formily.React.FormProvider,
          { form: i },
          p(i)
        )
      if (!f) throw new Error('must pass form instance by createForm')
      return p(f)
    }
  Pn.defaultProps = { component: 'form' }
  var Tn = Formily.React.connect(
    Formily.React.observer(function (e) {
      var r,
        o = e.formStep,
        a = e.className,
        i = n(e, ['formStep', 'className']),
        l = Formily.React.useField(),
        c = We('formily-step', i),
        s = (function (e) {
          var t = []
          return (
            e.mapProperties(function (e, n) {
              var r
              ;(null === (r = e['x-component']) || void 0 === r
                ? void 0
                : r.indexOf('StepPane')) > -1 &&
                t.push({ name: n, props: e['x-component-props'], schema: e })
            }),
            t
          )
        })(Formily.React.useFieldSchema()),
        u = i.current || (null == o ? void 0 : o.current) || 0
      return (
        null === (r = null == o ? void 0 : o.connect) ||
          void 0 === r ||
          r.call(o, s, l),
        React.createElement(
          'div',
          { className: Ge(c, a) },
          React.createElement(
            Next.Step,
            t({}, i, { style: t({ marginBottom: 10 }, i.style), current: u }),
            s.map(function (e, n) {
              var r = e.props
              return React.createElement(Next.Step.Item, t({}, r, { key: n }))
            })
          ),
          s.map(function (e, t) {
            var n = e.name,
              r = e.schema
            if (t === u)
              return React.createElement(Formily.React.RecursionField, {
                key: t,
                name: n,
                schema: r,
              })
          })
        )
      )
    })
  )
  ;(Tn.StepPane = function (e) {
    var t = e.children
    return React.createElement(React.Fragment, null, t)
  }),
    (Tn.createFormStep = function (e) {
      void 0 === e && (e = 0)
      var t = { form: null, field: null, steps: [] },
        n = Formily.Reactive.action.bound(function (e) {
          var n = t.steps[e]
          t.steps.forEach(function (e) {
            var r = e.name
            t.form
              .query(''.concat(t.field.address, '.').concat(r))
              .take(function (e) {
                r === n.name ? e.setDisplay('visible') : e.setDisplay('hidden')
              })
          })
        }),
        a = Formily.Reactive.model({
          connect: function (e, n) {
            ;(t.steps = e),
              (t.form = null == n ? void 0 : n.form),
              (t.field = n)
          },
          current: e,
          setCurrent: function (e) {
            a.current = e
          },
          get allowNext() {
            return a.current < t.steps.length - 1
          },
          get allowBack() {
            return a.current > 0
          },
          next: function () {
            return r(this, void 0, void 0, function () {
              return o(this, function (e) {
                switch (e.label) {
                  case 0:
                    return e.trys.push([0, 2, , 3]), [4, t.form.validate()]
                  case 1:
                    return (
                      e.sent(),
                      a.allowNext &&
                        (n(a.current + 1), a.setCurrent(a.current + 1)),
                      [3, 3]
                    )
                  case 2:
                    return e.sent(), [3, 3]
                  case 3:
                    return [2]
                }
              })
            })
          },
          back: function () {
            return r(this, void 0, void 0, function () {
              return o(this, function (e) {
                return (
                  a.allowBack &&
                    (n(a.current - 1), a.setCurrent(a.current - 1)),
                  [2]
                )
              })
            })
          },
          submit: function (e) {
            var n, a
            return r(this, void 0, void 0, function () {
              return o(this, function (r) {
                return [
                  2,
                  null ===
                    (a =
                      null === (n = t.form) || void 0 === n
                        ? void 0
                        : n.submit) || void 0 === a
                    ? void 0
                    : a.call(n, e),
                ]
              })
            })
          },
        })
      return Formily.Reactive.markRaw(a)
    })
  var An = function (e) {
      var t = Formily.Reactive.model({
        activeKey: e,
        setActiveKey: function (e) {
          t.activeKey = e
        },
      })
      return Formily.Reactive.markRaw(t)
    },
    Mn = Formily.React.observer(function (e) {
      var r = e.formTab,
        o = n(e, ['formTab']),
        a = Formily.React.useField(),
        i = (function () {
          var e = Formily.React.useField(),
            n = Formily.React.useFieldSchema(),
            r = []
          return (
            n.mapProperties(function (n, o) {
              var a,
                i,
                l = e.query(e.address.concat(o)).take()
              'none' !== (null == l ? void 0 : l.display) &&
                'hidden' !== (null == l ? void 0 : l.display) &&
                (null === (a = n['x-component']) || void 0 === a
                  ? void 0
                  : a.indexOf('TabPane')) > -1 &&
                r.push({
                  name: o,
                  props: t(
                    {
                      key:
                        (null ===
                          (i = null == n ? void 0 : n['x-component-props']) ||
                        void 0 === i
                          ? void 0
                          : i.key) || o,
                    },
                    null == n ? void 0 : n['x-component-props']
                  ),
                  schema: n,
                })
            }),
            r
          )
        })(),
        l = React.useMemo(function () {
          return r || An()
        }, []),
        c = We('formily-tab', o),
        s = o.activeKey || (null == l ? void 0 : l.activeKey),
        u = function (e, t) {
          var n = a.form.queryFeedbacks({
            type: 'error',
            address: ''.concat(a.address.concat(e), '.*'),
          })
          return n.length
            ? React.createElement(
                Next.Badge,
                { className: 'errors-badge', count: n.length },
                t.tab
              )
            : t.tab
        }
      return React.createElement(
        Next.Tab,
        t({}, o, Formily.Shared.isValid(s) && { activeKey: s }, {
          className: Ge(c, o.className),
          onChange: function (e) {
            var t, n
            null === (t = o.onChange) || void 0 === t || t.call(o, e),
              null === (n = null == r ? void 0 : r.setActiveKey) ||
                void 0 === n ||
                n.call(r, e)
          },
          lazyLoad: !1,
        }),
        i.map(function (e, n) {
          var r = e.props,
            o = e.schema,
            a = e.name
          return React.createElement(
            Next.Tab.Item,
            t({ key: n }, r, { tab: u(a, r) }),
            React.createElement(Formily.React.RecursionField, {
              schema: o,
              name: a,
            })
          )
        })
      )
    })
  ;(Mn.TabPane = function (e) {
    var t = e.children
    return React.createElement(React.Fragment, null, t)
  }),
    (Mn.createFormTab = An)
  var In = function (e) {
      var t = Formily.Reactive.model({
        activeKeys: e,
        setActiveKeys: function (e) {
          t.activeKeys = e
        },
        hasActiveKey: function (e) {
          if (Array.isArray(t.activeKeys)) {
            if (t.activeKeys.includes(e)) return !0
          } else if (t.activeKeys == e) return !0
          return !1
        },
        addActiveKey: function (e) {
          t.hasActiveKey(e) ||
            (t.activeKeys = Formily.Shared.toArr(t.activeKeys).concat(e))
        },
        removeActiveKey: function (e) {
          Array.isArray(t.activeKeys)
            ? (t.activeKeys = t.activeKeys.filter(function (t) {
                return t != e
              }))
            : (t.activeKeys = [])
        },
        toggleActiveKey: function (e) {
          t.hasActiveKey(e) ? t.removeActiveKey(e) : t.addActiveKey(e)
        },
      })
      return Formily.Reactive.markRaw(t)
    },
    _n = Formily.React.observer(function (e) {
      var r = e.formCollapse,
        o = n(e, ['formCollapse']),
        a = Formily.React.useField(),
        i = (function () {
          var e = Formily.React.useField(),
            n = Formily.React.useFieldSchema(),
            r = []
          return (
            n.mapProperties(function (n, o) {
              var a,
                i,
                l,
                c = e.query(e.address.concat(o)).take()
              'none' !== (null == c ? void 0 : c.display) &&
                'hidden' !== (null == c ? void 0 : c.display) &&
                (null === (a = n['x-component']) || void 0 === a
                  ? void 0
                  : a.indexOf('CollapsePanel')) > -1 &&
                r.push({
                  name: o,
                  props: t(t({}, null == n ? void 0 : n['x-component-props']), {
                    title:
                      (null ===
                        (i = null == n ? void 0 : n['x-component-props']) ||
                      void 0 === i
                        ? void 0
                        : i.title) || (null == n ? void 0 : n.title),
                    key:
                      (null ===
                        (l = null == n ? void 0 : n['x-component-props']) ||
                      void 0 === l
                        ? void 0
                        : l.key) || o,
                  }),
                  schema: n,
                })
            }),
            r
          )
        })(),
        l = We('formily-collapse', o),
        c = React.useMemo(function () {
          return r || In()
        }, []),
        s = function (e, t) {
          var n = a.form.queryFeedbacks({
            type: 'error',
            address: ''.concat(a.address.concat(e), '.*'),
          })
          return n.length
            ? React.createElement(
                Next.Badge,
                { className: 'errors-badge', count: n.length },
                t.title
              )
            : t.title
        }
      return React.createElement(
        Next.Collapse,
        t({}, o, {
          className: Ge(l, o.className),
          expandedKeys: (function () {
            var e
            return o.expandedKeys
              ? o.expandedKeys
              : (null == c ? void 0 : c.activeKeys)
              ? null == c
                ? void 0
                : c.activeKeys
              : o.accordion
              ? null === (e = i[0]) || void 0 === e
                ? void 0
                : e.name
              : i.map(function (e) {
                  return e.name
                })
          })(),
          onExpand: function (e) {
            var t, n
            null === (t = null == o ? void 0 : o.onExpand) ||
              void 0 === t ||
              t.call(o, e),
              null === (n = null == c ? void 0 : c.setActiveKeys) ||
                void 0 === n ||
                n.call(c, e)
          },
        }),
        i.map(function (e, n) {
          var r = e.props,
            o = e.schema,
            a = e.name
          return React.createElement(
            Next.Collapse.Panel,
            t({ key: n }, r, { title: s(a, r) }),
            React.createElement(Formily.React.RecursionField, {
              schema: o,
              name: a,
            })
          )
        })
      )
    })
  ;(_n.CollapsePanel = function (e) {
    var t = e.children
    return React.createElement(React.Fragment, null, t)
  }),
    (_n.createFormCollapse = In)
  var jn = v(function (e) {
      function t(n, r) {
        return (
          (e.exports = t =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          t(n, r)
        )
      }
      ;(e.exports = t),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    }),
    Dn = h(
      v(function (e) {
        ;(e.exports = function (e, t) {
          ;(e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            jn(e, t)
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0)
      })
    ),
    zn = (function () {
      if ('undefined' != typeof Map) return Map
      function e(e, t) {
        var n = -1
        return (
          e.some(function (e, r) {
            return e[0] === t && ((n = r), !0)
          }),
          n
        )
      }
      return (function () {
        function t() {
          this.__entries__ = []
        }
        return (
          Object.defineProperty(t.prototype, 'size', {
            get: function () {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.get = function (t) {
            var n = e(this.__entries__, t),
              r = this.__entries__[n]
            return r && r[1]
          }),
          (t.prototype.set = function (t, n) {
            var r = e(this.__entries__, t)
            ~r ? (this.__entries__[r][1] = n) : this.__entries__.push([t, n])
          }),
          (t.prototype.delete = function (t) {
            var n = this.__entries__,
              r = e(n, t)
            ~r && n.splice(r, 1)
          }),
          (t.prototype.has = function (t) {
            return !!~e(this.__entries__, t)
          }),
          (t.prototype.clear = function () {
            this.__entries__.splice(0)
          }),
          (t.prototype.forEach = function (e, t) {
            void 0 === t && (t = null)
            for (var n = 0, r = this.__entries__; n < r.length; n++) {
              var o = r[n]
              e.call(t, o[1], o[0])
            }
          }),
          t
        )
      })()
    })(),
    Ln =
      'undefined' != typeof window &&
      'undefined' != typeof document &&
      window.document === document,
    Bn =
      'undefined' != typeof global && global.Math === Math
        ? global
        : 'undefined' != typeof self && self.Math === Math
        ? self
        : 'undefined' != typeof window && window.Math === Math
        ? window
        : Function('return this')(),
    Wn =
      'function' == typeof requestAnimationFrame
        ? requestAnimationFrame.bind(Bn)
        : function (e) {
            return setTimeout(function () {
              return e(Date.now())
            }, 1e3 / 60)
          }
  var Hn = [
      'top',
      'right',
      'bottom',
      'left',
      'width',
      'height',
      'size',
      'weight',
    ],
    Vn = 'undefined' != typeof MutationObserver,
    Yn = (function () {
      function e() {
        ;(this.connected_ = !1),
          (this.mutationEventsAdded_ = !1),
          (this.mutationsObserver_ = null),
          (this.observers_ = []),
          (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
          (this.refresh = (function (e, t) {
            var n = !1,
              r = !1,
              o = 0
            function a() {
              n && ((n = !1), e()), r && l()
            }
            function i() {
              Wn(a)
            }
            function l() {
              var e = Date.now()
              if (n) {
                if (e - o < 2) return
                r = !0
              } else (n = !0), (r = !1), setTimeout(i, t)
              o = e
            }
            return l
          })(this.refresh.bind(this), 20))
      }
      return (
        (e.prototype.addObserver = function (e) {
          ~this.observers_.indexOf(e) || this.observers_.push(e),
            this.connected_ || this.connect_()
        }),
        (e.prototype.removeObserver = function (e) {
          var t = this.observers_,
            n = t.indexOf(e)
          ~n && t.splice(n, 1),
            !t.length && this.connected_ && this.disconnect_()
        }),
        (e.prototype.refresh = function () {
          this.updateObservers_() && this.refresh()
        }),
        (e.prototype.updateObservers_ = function () {
          var e = this.observers_.filter(function (e) {
            return e.gatherActive(), e.hasActive()
          })
          return (
            e.forEach(function (e) {
              return e.broadcastActive()
            }),
            e.length > 0
          )
        }),
        (e.prototype.connect_ = function () {
          Ln &&
            !this.connected_ &&
            (document.addEventListener('transitionend', this.onTransitionEnd_),
            window.addEventListener('resize', this.refresh),
            Vn
              ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                this.mutationsObserver_.observe(document, {
                  attributes: !0,
                  childList: !0,
                  characterData: !0,
                  subtree: !0,
                }))
              : (document.addEventListener('DOMSubtreeModified', this.refresh),
                (this.mutationEventsAdded_ = !0)),
            (this.connected_ = !0))
        }),
        (e.prototype.disconnect_ = function () {
          Ln &&
            this.connected_ &&
            (document.removeEventListener(
              'transitionend',
              this.onTransitionEnd_
            ),
            window.removeEventListener('resize', this.refresh),
            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
            this.mutationEventsAdded_ &&
              document.removeEventListener('DOMSubtreeModified', this.refresh),
            (this.mutationsObserver_ = null),
            (this.mutationEventsAdded_ = !1),
            (this.connected_ = !1))
        }),
        (e.prototype.onTransitionEnd_ = function (e) {
          var t = e.propertyName,
            n = void 0 === t ? '' : t
          Hn.some(function (e) {
            return !!~n.indexOf(e)
          }) && this.refresh()
        }),
        (e.getInstance = function () {
          return this.instance_ || (this.instance_ = new e()), this.instance_
        }),
        (e.instance_ = null),
        e
      )
    })(),
    Xn = function (e, t) {
      for (var n = 0, r = Object.keys(t); n < r.length; n++) {
        var o = r[n]
        Object.defineProperty(e, o, {
          value: t[o],
          enumerable: !1,
          writable: !1,
          configurable: !0,
        })
      }
      return e
    },
    Gn = function (e) {
      return (e && e.ownerDocument && e.ownerDocument.defaultView) || Bn
    },
    Kn = Zn(0, 0, 0, 0)
  function qn(e) {
    return parseFloat(e) || 0
  }
  function Un(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
    return t.reduce(function (t, n) {
      return t + qn(e['border-' + n + '-width'])
    }, 0)
  }
  function $n(e) {
    var t = e.clientWidth,
      n = e.clientHeight
    if (!t && !n) return Kn
    var r = Gn(e).getComputedStyle(e),
      o = (function (e) {
        for (
          var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left'];
          n < r.length;
          n++
        ) {
          var o = r[n],
            a = e['padding-' + o]
          t[o] = qn(a)
        }
        return t
      })(r),
      a = o.left + o.right,
      i = o.top + o.bottom,
      l = qn(r.width),
      c = qn(r.height)
    if (
      ('border-box' === r.boxSizing &&
        (Math.round(l + a) !== t && (l -= Un(r, 'left', 'right') + a),
        Math.round(c + i) !== n && (c -= Un(r, 'top', 'bottom') + i)),
      !(function (e) {
        return e === Gn(e).document.documentElement
      })(e))
    ) {
      var s = Math.round(l + a) - t,
        u = Math.round(c + i) - n
      1 !== Math.abs(s) && (l -= s), 1 !== Math.abs(u) && (c -= u)
    }
    return Zn(o.left, o.top, l, c)
  }
  var Jn =
    'undefined' != typeof SVGGraphicsElement
      ? function (e) {
          return e instanceof Gn(e).SVGGraphicsElement
        }
      : function (e) {
          return e instanceof Gn(e).SVGElement && 'function' == typeof e.getBBox
        }
  function Qn(e) {
    return Ln
      ? Jn(e)
        ? (function (e) {
            var t = e.getBBox()
            return Zn(0, 0, t.width, t.height)
          })(e)
        : $n(e)
      : Kn
  }
  function Zn(e, t, n, r) {
    return { x: e, y: t, width: n, height: r }
  }
  var er = (function () {
      function e(e) {
        ;(this.broadcastWidth = 0),
          (this.broadcastHeight = 0),
          (this.contentRect_ = Zn(0, 0, 0, 0)),
          (this.target = e)
      }
      return (
        (e.prototype.isActive = function () {
          var e = Qn(this.target)
          return (
            (this.contentRect_ = e),
            e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
          )
        }),
        (e.prototype.broadcastRect = function () {
          var e = this.contentRect_
          return (
            (this.broadcastWidth = e.width),
            (this.broadcastHeight = e.height),
            e
          )
        }),
        e
      )
    })(),
    tr = function (e, t) {
      var n,
        r,
        o,
        a,
        i,
        l,
        c,
        s =
          ((r = (n = t).x),
          (o = n.y),
          (a = n.width),
          (i = n.height),
          (l =
            'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
          (c = Object.create(l.prototype)),
          Xn(c, {
            x: r,
            y: o,
            width: a,
            height: i,
            top: o,
            right: r + a,
            bottom: i + o,
            left: r,
          }),
          c)
      Xn(this, { target: e, contentRect: s })
    },
    nr = (function () {
      function e(e, t, n) {
        if (
          ((this.activeObservations_ = []),
          (this.observations_ = new zn()),
          'function' != typeof e)
        )
          throw new TypeError(
            'The callback provided as parameter 1 is not a function.'
          )
        ;(this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n)
      }
      return (
        (e.prototype.observe = function (e) {
          if (!arguments.length)
            throw new TypeError('1 argument required, but only 0 present.')
          if ('undefined' != typeof Element && Element instanceof Object) {
            if (!(e instanceof Gn(e).Element))
              throw new TypeError('parameter 1 is not of type "Element".')
            var t = this.observations_
            t.has(e) ||
              (t.set(e, new er(e)),
              this.controller_.addObserver(this),
              this.controller_.refresh())
          }
        }),
        (e.prototype.unobserve = function (e) {
          if (!arguments.length)
            throw new TypeError('1 argument required, but only 0 present.')
          if ('undefined' != typeof Element && Element instanceof Object) {
            if (!(e instanceof Gn(e).Element))
              throw new TypeError('parameter 1 is not of type "Element".')
            var t = this.observations_
            t.has(e) &&
              (t.delete(e), t.size || this.controller_.removeObserver(this))
          }
        }),
        (e.prototype.disconnect = function () {
          this.clearActive(),
            this.observations_.clear(),
            this.controller_.removeObserver(this)
        }),
        (e.prototype.gatherActive = function () {
          var e = this
          this.clearActive(),
            this.observations_.forEach(function (t) {
              t.isActive() && e.activeObservations_.push(t)
            })
        }),
        (e.prototype.broadcastActive = function () {
          if (this.hasActive()) {
            var e = this.callbackCtx_,
              t = this.activeObservations_.map(function (e) {
                return new tr(e.target, e.broadcastRect())
              })
            this.callback_.call(e, t, e), this.clearActive()
          }
        }),
        (e.prototype.clearActive = function () {
          this.activeObservations_.splice(0)
        }),
        (e.prototype.hasActive = function () {
          return this.activeObservations_.length > 0
        }),
        e
      )
    })(),
    rr = 'undefined' != typeof WeakMap ? new WeakMap() : new zn(),
    or = function e(t) {
      if (!(this instanceof e))
        throw new TypeError('Cannot call a class as a function.')
      if (!arguments.length)
        throw new TypeError('1 argument required, but only 0 present.')
      var n = Yn.getInstance(),
        r = new nr(t, n, this)
      rr.set(this, r)
    }
  ;['observe', 'unobserve', 'disconnect'].forEach(function (e) {
    or.prototype[e] = function () {
      var t
      return (t = rr.get(this))[e].apply(t, arguments)
    }
  })
  var ar = void 0 !== Bn.ResizeObserver ? Bn.ResizeObserver : or,
    ir = null
  'undefined' != typeof CSS &&
    CSS.supports &&
    (CSS.supports('position', 'sticky')
      ? (ir = 'sticky')
      : CSS.supports('position', '-webkit-sticky') && (ir = '-webkit-sticky'))
  var lr = !1
  try {
    var cr = Object.defineProperty({}, 'passive', {
      get: function () {
        lr = { passive: !0 }
      },
    })
    window.addEventListener('testPassive', null, cr),
      window.removeEventListener('testPassive', null, cr)
  } catch (e) {}
  var sr = (function (e) {
    function t(t) {
      var n = e.call(this, t) || this
      return (
        (n.addListener = function (e, t, r, o) {
          e.addEventListener(t, r, o),
            n.unsubscribes.push(function () {
              return e.removeEventListener(t, r)
            })
        }),
        (n.addResizeObserver = function (e, t) {
          var r = new ar(t)
          r.observe(e),
            n.unsubscribes.push(function () {
              return r.disconnect()
            })
        }),
        (n.registerContainerRef = function (e) {
          ir &&
            ((n.node = e),
            e
              ? ((n.scrollPane = (function (e) {
                  for (var t = e; (t = t.parentElement); ) {
                    var n = getComputedStyle(t, null).getPropertyValue(
                      'overflow-y'
                    )
                    if (t === document.body) return window
                    if ('auto' === n || 'scroll' === n) return t
                  }
                  return window
                })(n.node)),
                (n.latestScrollY =
                  n.scrollPane === window
                    ? window.scrollY
                    : n.scrollPane.scrollTop),
                n.addListener(n.scrollPane, 'scroll', n.handleScroll, lr),
                n.addListener(n.scrollPane, 'mousewheel', n.handleScroll, lr),
                n.scrollPane === window
                  ? (n.addListener(window, 'resize', n.handleWindowResize),
                    n.handleWindowResize())
                  : (n.addResizeObserver(
                      n.scrollPane,
                      n.handleScrollPaneResize
                    ),
                    n.handleScrollPaneResize()),
                n.addResizeObserver(
                  n.node.parentNode,
                  n.handleParentNodeResize
                ),
                n.handleParentNodeResize(),
                n.addResizeObserver(n.node, n.handleNodeResize),
                n.handleNodeResize({ initial: !0 }),
                n.initial())
              : (n.unsubscribes.forEach(function (e) {
                  return e()
                }),
                (n.unsubscribes = []),
                (n.scrollPane = null)))
        }),
        (n.getCurrentOffset = function () {
          if ('relative' === n.mode) return n.offset
          var e = n.props,
            t = e.offsetTop,
            r = e.offsetBottom
          return 'stickyTop' === n.mode
            ? Math.max(
                0,
                n.scrollPaneOffset + n.latestScrollY - n.naturalTop + t
              )
            : 'stickyBottom' === n.mode
            ? Math.max(
                0,
                n.scrollPaneOffset +
                  n.latestScrollY +
                  n.viewPortHeight -
                  (n.naturalTop + n.nodeHeight + r)
              )
            : void 0
        }),
        (n.handleWindowResize = function () {
          ;(n.viewPortHeight = window.innerHeight),
            (n.scrollPaneOffset = 0),
            n.handleScroll()
        }),
        (n.handleScrollPaneResize = function () {
          ;(n.viewPortHeight = n.scrollPane.offsetHeight),
            'production' !== process.env.NODE_ENV &&
              0 === n.viewPortHeight &&
              console.warn(
                "react-sticky-box's scroll pane has a height of 0. This seems odd. Please check this node:",
                n.scrollPane
              ),
            n.scrollPane.firstChild.offsetParent === n.scrollPane
              ? (n.scrollPaneOffset = n.scrollPane.getBoundingClientRect().top)
              : (n.scrollPaneOffset = 0),
            n.handleScroll()
        }),
        (n.handleParentNodeResize = function () {
          var e = n.node.parentNode,
            t = getComputedStyle(e, null),
            r = parseInt(t.getPropertyValue('padding-top'), 10),
            o = parseInt(t.getPropertyValue('padding-bottom'), 10)
          n.naturalTop =
            (function (e, t) {
              var n = e,
                r = 0
              t.firstChild &&
                t.firstChild.offsetParent !== t &&
                ((r += e.offsetTop - t.offsetTop),
                (t = e.offsetParent),
                (r += -e.offsetTop))
              do {
                ;(r += n.offsetTop), (n = n.offsetParent)
              } while (n && n !== t)
              return r
            })(e, n.scrollPane) +
            r +
            n.scrollPaneOffset
          var a = n.parentHeight
          ;(n.parentHeight = e.getBoundingClientRect().height - (r + o)),
            'relative' === n.mode &&
              (n.props.bottom
                ? n.changeMode('relative')
                : a > n.parentHeight &&
                  n.changeToStickyBottomIfBoxTooLow(n.latestScrollY)),
            a !== n.parentHeight &&
              'relative' === n.mode &&
              ((n.latestScrollY = Number.POSITIVE_INFINITY), n.handleScroll())
        }),
        (n.handleNodeResize = function (e) {
          var t = (void 0 === e ? {} : e).initial,
            r = n.nodeHeight
          if (
            ((n.nodeHeight = n.node.getBoundingClientRect().height),
            !t && r !== n.nodeHeight)
          ) {
            var o = n.props,
              a = o.offsetTop,
              i = o.offsetBottom,
              l = o.bottom
            if (n.nodeHeight + a + i <= n.viewPortHeight)
              (n.mode = void 0), n.initial()
            else {
              var c = r - n.nodeHeight,
                s = n.parentHeight - n.nodeHeight,
                u = Math.min(s, n.getCurrentOffset() + (l ? c : 0))
              ;(n.offset = Math.max(0, u)),
                (l && 'stickyBottom' === n.mode) || n.changeMode('relative')
            }
          }
        }),
        (n.handleScroll = function () {
          var e = n.props,
            t = e.offsetTop,
            r = e.offsetBottom,
            o =
              n.scrollPane === window ? window.scrollY : n.scrollPane.scrollTop
          if (o !== n.latestScrollY) {
            if (n.nodeHeight + t + r <= n.viewPortHeight)
              return n.initial(), void (n.latestScrollY = o)
            var a = o - n.latestScrollY
            ;(n.offset = n.getCurrentOffset()),
              a > 0
                ? 'stickyTop' === n.mode
                  ? o + n.scrollPaneOffset + t > n.naturalTop &&
                    (o + n.scrollPaneOffset + n.viewPortHeight <=
                    n.naturalTop + n.nodeHeight + n.offset + r
                      ? n.changeMode('relative')
                      : n.changeMode('stickyBottom'))
                  : 'relative' === n.mode &&
                    n.changeToStickyBottomIfBoxTooLow(o)
                : 'stickyBottom' === n.mode
                ? n.scrollPaneOffset + o + n.viewPortHeight <
                    n.naturalTop + n.parentHeight + r &&
                  (n.scrollPaneOffset + o + t >= n.naturalTop + n.offset
                    ? n.changeMode('relative')
                    : n.changeMode('stickyTop'))
                : 'relative' === n.mode &&
                  n.scrollPaneOffset + o + t < n.naturalTop + n.offset &&
                  n.changeMode('stickyTop'),
              (n.latestScrollY = o)
          }
        }),
        t.offset &&
          'production' !== process.env.NODE_ENV &&
          console.warn(
            'react-sticky-box\'s "offset" prop is deprecated. Please use "offsetTop" instead. It\'ll be removed in v0.8.'
          ),
        (n.unsubscribes = []),
        n
      )
    }
    Dn(t, e)
    var n = t.prototype
    return (
      (n.changeMode = function (e) {
        var t = this.props,
          n = t.onChangeMode,
          r = t.offsetTop,
          o = t.offsetBottom,
          a = t.bottom
        if (
          (this.mode !== e && n(this.mode, e),
          (this.mode = e),
          'relative' === e)
        )
          if (((this.node.style.position = 'relative'), a)) {
            var i = Math.max(
              0,
              this.parentHeight - this.nodeHeight - this.offset
            )
            this.node.style.bottom = i + 'px'
          } else this.node.style.top = this.offset + 'px'
        else
          (this.node.style.position = ir),
            'stickyBottom' === e
              ? a
                ? (this.node.style.bottom = o + 'px')
                : (this.node.style.top =
                    this.viewPortHeight - this.nodeHeight - o + 'px')
              : a
              ? (this.node.style.bottom =
                  this.viewPortHeight - this.nodeHeight - o + 'px')
              : (this.node.style.top = r + 'px')
        this.offset = this.getCurrentOffset()
      }),
      (n.initial = function () {
        this.props.bottom
          ? 'stickyBottom' !== this.mode && this.changeMode('stickyBottom')
          : 'stickyTop' !== this.mode && this.changeMode('stickyTop')
      }),
      (n.changeToStickyBottomIfBoxTooLow = function (e) {
        var t = this.props.offsetBottom
        e + this.scrollPaneOffset + this.viewPortHeight >=
          this.naturalTop + this.nodeHeight + this.offset + t &&
          this.changeMode('stickyBottom')
      }),
      (n.render = function () {
        var e = this.props,
          t = e.children,
          n = e.className,
          r = e.style
        return React.createElement(
          'div',
          { className: n, style: r, ref: this.registerContainerRef },
          t
        )
      }),
      t
    )
  })(React.Component)
  ;(sr.defaultProps = {
    onChangeMode: function () {},
    offsetTop: 0,
    offsetBottom: 0,
  }),
    'production' !== process.env.NODE_ENV &&
      (sr.propTypes = {
        onChangeMode: V.func,
        offsetTop: V.number,
        offsetBottom: V.number,
        bottom: V.bool,
      })
  var ur = { small: 8, middle: 16, large: 24 },
    dr = function (e) {
      var r,
        o = e.direction,
        a = e.size,
        i = e.align,
        l = n(e, ['direction', 'size', 'align']),
        c = Je(),
        s = We('space', l),
        u =
          null !== (r = null != a ? a : null == c ? void 0 : c.spaceGap) &&
          void 0 !== r
            ? r
            : 8,
        d = 'start' === i ? 'flex-start' : 'end' === i ? 'flex-end' : 'center'
      return React.createElement(
        Next.Box,
        t({}, l, {
          spacing: Formily.Shared.isNumberLike(u) ? u : ur[u] || 8,
          style: t({ alignItems: d, display: 'inline-flex' }, l.style),
          align: d,
          direction: 'horizontal' === o ? 'row' : 'column',
        }),
        He(l.children, { keepEmpty: !0 }).map(function (e, t) {
          return React.createElement(
            'div',
            { className: ''.concat(s, '-item'), key: t },
            e
          )
        })
      )
    }
  function fr(e) {
    var t = (function () {
        var e = document.createElement('div')
        document.head.appendChild(e)
        var t = window.getComputedStyle(e).backgroundColor
        return document.head.removeChild(e), t
      })(),
      n = window.getComputedStyle(e).backgroundColor
    return n != t ? n : e.parentElement ? fr(e.parentElement) : t
  }
  dr.defaultProps = { direction: 'horizontal', align: 'start' }
  var mr = function (e) {
    var r = e.align,
      o = e.gutter,
      a = n(e, ['align', 'gutter']),
      i = We('formily-button-group')
    return React.createElement(
      dr,
      t({}, a, {
        size: o,
        className: Ge(i, a.className),
        style: t(t({}, a.style), {
          justifyContent:
            'left' === r ? 'flex-start' : 'right' === r ? 'flex-end' : 'center',
          display: 'flex',
        }),
      }),
      a.children
    )
  }
  ;(mr.defaultProps = { align: 'left' }),
    (mr.FormItem = function (e) {
      var r,
        o = e.gutter,
        a = n(e, ['gutter'])
      return React.createElement(
        Rn,
        t({}, a, {
          label: ' ',
          style: t(t({ margin: 0, padding: 0 }, a.style), { width: '100%' }),
          colon: !1,
        }),
        (null === (r = a.children) || void 0 === r ? void 0 : r.length)
          ? React.createElement(dr, { size: o }, a.children)
          : a.children
      )
    }),
    ((mr.Sticky = function (e) {
      var r = e.align,
        o = n(e, ['align']),
        i = React.useRef(),
        l = a(React.useState('transparent'), 2),
        c = l[0],
        s = l[1],
        u = We('formily-button-group')
      return (
        React.useLayoutEffect(function () {
          if (i.current) {
            var e = fr(i.current)
            e !== c && s(e)
          }
        }),
        React.createElement(
          sr,
          t({}, o, {
            className: Ge(''.concat(u, '-sticky'), o.className),
            style: t({ backgroundColor: c }, o.style),
            bottom: !0,
          }),
          React.createElement(
            'div',
            {
              ref: i,
              className: ''.concat(u, '-sticky-inner'),
              style: t(t({}, o.style), {
                justifyContent:
                  'left' === r
                    ? 'flex-start'
                    : 'right' === r
                    ? 'flex-end'
                    : 'center',
              }),
            },
            o.children
          )
        )
      )
    }).defaultProps = { align: 'left' })
  var pr = Formily.React.connect(
    Next.Input,
    Formily.React.mapProps(Ze, Ve),
    Formily.React.mapReadPretty(kn.Input)
  )
  pr.TextArea = Formily.React.connect(
    Next.Input.TextArea,
    Formily.React.mapProps(Ze, Ve),
    Formily.React.mapReadPretty(kn.Input)
  )
  var hr = function (e) {
      return e >= 48 && e <= 57
    },
    vr = function (e) {
      return e >= 97 && e <= 122
    },
    yr = function (e) {
      return e >= 65 && e <= 90
    },
    gr = function (e) {
      return !(vr(e) || yr(e) || hr(e))
    },
    br = function (e) {
      return vr(e) || yr(e)
    },
    Rr = function (e) {
      return Formily.Shared.isFn(e.children)
        ? e.children(
            (function (e) {
              if (!e) return 0
              for (
                var t = 0,
                  n = 0,
                  r = 0,
                  o = 0,
                  a = 0,
                  i = 0,
                  l = 0,
                  c = 0,
                  s = 0,
                  u = function () {
                    return t + n + r + o
                  },
                  d = 0;
                d < e.length;
                d++
              ) {
                var f = e.charCodeAt(d)
                hr(f)
                  ? (t++,
                    0 !== d && d !== e.length - 1 && a++,
                    d > 0 && hr(e.charCodeAt(d - 1)) && c++)
                  : vr(f)
                  ? (n++, d > 0 && vr(e.charCodeAt(d - 1)) && c++)
                  : yr(f)
                  ? (r++, d > 0 && yr(e.charCodeAt(d - 1)) && c++)
                  : (o++, 0 !== d && d !== e.length - 1 && a++)
                for (var m = !1, p = 0; p < e.length; p++)
                  e[d] === e[p] &&
                    d !== p &&
                    ((m = !0), (l += Math.abs(e.length / (p - d))))
                if (m) {
                  i++
                  var h = e.length - i
                  l = h ? Math.ceil(l / h) : Math.ceil(l)
                }
                if (d > 1) {
                  var v = e.charCodeAt(d - 1),
                    y = e.charCodeAt(d - 2)
                  if (br(f)) {
                    if (br(v) && br(y)) {
                      var g = e.toLowerCase(),
                        b = g.charCodeAt(d),
                        R = g.charCodeAt(d - 1)
                      b - R == R - g.charCodeAt(d - 2) &&
                        1 === Math.abs(b - R) &&
                        s++
                    }
                  } else
                    hr(f)
                      ? hr(v) &&
                        hr(y) &&
                        f - v == v - y &&
                        1 === Math.abs(f - v) &&
                        s++
                      : gr(v) &&
                        gr(y) &&
                        f - v == v - y &&
                        1 === Math.abs(f - v) &&
                        s++
                }
              }
              var x,
                w = 0,
                E = u()
              return (
                (w += 4 * E),
                n > 0 && (w += 2 * (E - n)),
                r > 0 && (w += 2 * (E - r)),
                t !== E && (w += 4 * t),
                (w += 6 * o),
                (w += 2 * a),
                (w +=
                  2 *
                  ((x = t > 0 ? 1 : 0),
                  (x += n > 0 ? 1 : 0),
                  (x += r > 0 ? 1 : 0),
                  (x += o > 0 ? 1 : 0) > 2 && u() >= 8 ? x + 1 : 0)),
                E === n + r && (w -= E),
                E === t && (w -= t),
                (w -= l),
                (w -= 2 * c),
                (w = (w = (w -= 3 * s) < 0 ? 0 : w) > 100 ? 100 : w) >= 80
                  ? 100
                  : w >= 60
                  ? 80
                  : w >= 40
                  ? 60
                  : w >= 20
                  ? 40
                  : 20
              )
            })(String(e.value))
          )
        : React.createElement(React.Fragment, null, e.children)
    },
    xr = Formily.React.connect(
      function (e) {
        var r = e.value,
          o = e.className,
          a = e.checkStrength,
          i = n(e, ['value', 'className', 'checkStrength']),
          l = {
            position: 'absolute',
            zIndex: 1,
            height: 8,
            top: 0,
            background: '#fff',
            width: 1,
            transform: 'translate(-50%, 0)',
          }
        return React.createElement(
          'span',
          { className: o },
          React.createElement(
            Next.Input.Password,
            t({}, i, { style: t(t({}, i.style), { width: '100%' }), value: r })
          ),
          a &&
            React.createElement(Rr, { value: String(r) }, function (e) {
              return React.createElement(
                'div',
                {
                  style: {
                    background: '#e0e0e0',
                    marginBottom: 3,
                    position: 'relative',
                  },
                },
                React.createElement('div', {
                  style: t(t({}, l), { left: '20%' }),
                }),
                React.createElement('div', {
                  style: t(t({}, l), { left: '40%' }),
                }),
                React.createElement('div', {
                  style: t(t({}, l), { left: '60%' }),
                }),
                React.createElement('div', {
                  style: t(t({}, l), { left: '80%' }),
                }),
                React.createElement('div', {
                  style: {
                    position: 'relative',
                    backgroundImage:
                      '-webkit-linear-gradient(left, #ff5500, #ff9300)',
                    transition: 'all 0.35s ease-in-out',
                    height: 8,
                    width: '100%',
                    marginTop: 5,
                    clipPath: 'polygon(0 0,'
                      .concat(e, '% 0,')
                      .concat(e, '% 100%,0 100%)'),
                  },
                })
              )
            })
        )
      },
      Formily.React.mapProps(Ze, Ve),
      Formily.React.mapReadPretty(kn.Input)
    ),
    wr = Formily.React.connect(
      Next.Radio,
      Formily.React.mapProps({ value: 'checked' }, Ze)
    )
  wr.Group = Formily.React.connect(
    Next.Radio.Group,
    Formily.React.mapProps({ dataSource: !0 }, Ze),
    Formily.React.mapReadPretty(kn.Select)
  )
  var Er = Formily.React.connect(
    Next.Checkbox,
    Formily.React.mapProps({ value: 'checked', onInput: 'onChange' }, Ze)
  )
  Er.Group = Formily.React.connect(
    Next.Checkbox.Group,
    Formily.React.mapProps({ dataSource: !0 }, Ze),
    Formily.React.mapReadPretty(kn.Select, { mode: 'multiple' })
  )
  var Fr = function (e) {
      void 0 === e && (e = [])
      var n = function (e) {
        var r = t({}, e)
        return (
          r.children && 0 !== r.children.length
            ? (r.children = r.children.map(n))
            : delete r.children,
          r
        )
      }
      return e.map(n)
    },
    Sr = Formily.React.connect(
      Next.Select,
      Formily.React.mapProps(
        function (e, n) {
          var r
          return Formily.Core.isVoidField(n)
            ? e
            : t(t({}, e), {
                dataSource: Fr(
                  null !== (r = e.dataSource) && void 0 !== r
                    ? r
                    : null == n
                    ? void 0
                    : n.dataSource
                ),
              })
        },
        Ze,
        Ve
      ),
      Formily.React.mapReadPretty(kn.Select)
    ),
    Cr = Formily.React.connect(
      Next.CascaderSelect,
      Formily.React.mapProps({ dataSource: !0 }, Ze, Ve),
      Formily.React.mapReadPretty(kn.Cascader)
    ),
    Or = Formily.React.connect(
      Next.TreeSelect,
      Formily.React.mapProps({ dataSource: !0 }, Ze, Ve),
      Formily.React.mapReadPretty(kn.TreeSelect)
    ),
    Nr = Formily.React.connect(
      Next.Transfer,
      Formily.React.mapProps({ dataSource: !0 })
    ),
    kr = function (e) {
      return function (n) {
        var r =
            n.format ||
            (function (t) {
              var n = t.type || e
              return 'month' === n
                ? 'YYYY-MM'
                : 'year' === n
                ? 'YYYY'
                : 'week' === n
                ? 'YYYY-wo'
                : t.showTime
                ? 'YYYY-MM-DD HH:mm:ss'
                : 'YYYY-MM-DD'
            })(n),
          o = n.onChange
        return t(t({}, n), {
          format: 'YYYY-MM-DD HH:mm:ss' === r ? 'YYYY-MM-DD' : r,
          value: Le(n.value, 'YYYY-wo' === r ? 'YYYY-w' : r),
          onChange: function (e) {
            o && o(Be(e, r))
          },
        })
      }
    },
    Pr = Formily.React.connect(
      Next.DatePicker,
      Formily.React.mapProps(kr(), Ze, Ve),
      Formily.React.mapReadPretty(kn.DatePicker)
    )
  ;(Pr.RangePicker = Formily.React.connect(
    Next.DatePicker.RangePicker,
    Formily.React.mapProps(kr(), Ze, Ve),
    Formily.React.mapReadPretty(kn.DateRangePicker)
  )),
    (Pr.YearPicker = Formily.React.connect(
      Next.DatePicker.YearPicker,
      Formily.React.mapProps(kr('year'), Ze, Ve),
      Formily.React.mapReadPretty(kn.DatePicker)
    )),
    (Pr.MonthPicker = Formily.React.connect(
      Next.DatePicker.MonthPicker,
      Formily.React.mapProps(kr('month'), Ze, Ve),
      Formily.React.mapReadPretty(kn.DatePicker)
    )),
    (Pr.WeekPicker = Formily.React.connect(
      Next.DatePicker.WeekPicker,
      Formily.React.mapProps(kr('week'), Ze, Ve),
      Formily.React.mapReadPretty(kn.DatePicker)
    ))
  var Tr = Formily.React.connect(
      Next.TimePicker,
      Formily.React.mapProps(
        function (e) {
          var n = e.format || 'HH:mm:ss',
            r = e.onChange
          return t(t({}, e), {
            format: n,
            value: Le(e.value, n),
            onChange: function (e) {
              r && r(Be(e, n))
            },
          })
        },
        Ze,
        Ve
      ),
      Formily.React.mapReadPretty(kn.TimePicker)
    ),
    Ar = Formily.React.connect(
      Next.NumberPicker,
      Formily.React.mapProps(Ze, Ve),
      Formily.React.mapReadPretty(kn.Input)
    ),
    Mr = Formily.React.connect(
      Next.Switch,
      Formily.React.mapProps({ value: 'checked' }, Ze, Ve)
    ),
    Ir = [
      {
        ext: /\.docx?$/i,
        icon: '//img.alicdn.com/tfs/TB1n8jfr1uSBuNjy1XcXXcYjFXa-200-200.png',
      },
      {
        ext: /\.pptx?$/i,
        icon: '//img.alicdn.com/tfs/TB1ItgWr_tYBeNjy1XdXXXXyVXa-200-200.png',
      },
      {
        ext: /\.jpe?g$/i,
        icon: '//img.alicdn.com/tfs/TB1wrT5r9BYBeNjy0FeXXbnmFXa-200-200.png',
      },
      {
        ext: /\.pdf$/i,
        icon: '//img.alicdn.com/tfs/TB1GwD8r9BYBeNjy0FeXXbnmFXa-200-200.png',
      },
      {
        ext: /\.png$/i,
        icon: '//img.alicdn.com/tfs/TB1BHT5r9BYBeNjy0FeXXbnmFXa-200-200.png',
      },
      {
        ext: /\.eps$/i,
        icon: '//img.alicdn.com/tfs/TB1G_iGrVOWBuNjy0FiXXXFxVXa-200-200.png',
      },
      {
        ext: /\.ai$/i,
        icon: '//img.alicdn.com/tfs/TB1B2cVr_tYBeNjy1XdXXXXyVXa-200-200.png',
      },
      {
        ext: /\.gif$/i,
        icon: '//img.alicdn.com/tfs/TB1DTiGrVOWBuNjy0FiXXXFxVXa-200-200.png',
      },
      {
        ext: /\.svg$/i,
        icon: '//img.alicdn.com/tfs/TB1uUm9rY9YBuNjy0FgXXcxcXXa-200-200.png',
      },
      {
        ext: /\.xlsx?$/i,
        icon: '//img.alicdn.com/tfs/TB1any1r1OSBuNjy0FdXXbDnVXa-200-200.png',
      },
      {
        ext: /\.psd?$/i,
        icon: '//img.alicdn.com/tfs/TB1_nu1r1OSBuNjy0FdXXbDnVXa-200-200.png',
      },
      {
        ext: /\.(wav|aif|aiff|au|mp1|mp2|mp3|ra|rm|ram|mid|rmi)$/i,
        icon: '//img.alicdn.com/tfs/TB1jPvwr49YBuNjy0FfXXXIsVXa-200-200.png',
      },
      {
        ext: /\.(avi|wmv|mpg|mpeg|vob|dat|3gp|mp4|mkv|rm|rmvb|mov|flv)$/i,
        icon: '//img.alicdn.com/tfs/TB1FrT5r9BYBeNjy0FeXXbnmFXa-200-200.png',
      },
      {
        ext: /\.(zip|rar|arj|z|gz|iso|jar|ace|tar|uue|dmg|pkg|lzh|cab)$/i,
        icon: '//img.alicdn.com/tfs/TB10jmfr29TBuNjy0FcXXbeiFXa-200-200.png',
      },
      {
        ext: /\.[^.]+$/i,
        icon: '//img.alicdn.com/tfs/TB10.R4r3mTBuNjy1XbXXaMrVXa-200-200.png',
      },
    ],
    _r = function (e, t) {
      return t && Formily.Shared.isArr(t.include)
        ? t.include.some(function (t) {
            return e.test(t)
          })
        : !t ||
            !Formily.Shared.isArr(t.exclude) ||
            !t.exclude.some(function (t) {
              return e.test(t)
            })
    },
    jr = function (e, t) {
      for (var n = 0; n < Ir.length; n++)
        if (Ir[n].ext.test(e) && _r(Ir[n].ext, t)) return Ir[n].icon || e
      return e
    },
    Dr = function (e) {
      return (
        (null == e ? void 0 : e.url) ||
        (null == e ? void 0 : e.downloadURL) ||
        (null == e ? void 0 : e.imgURL)
      )
    },
    zr = function (e) {
      return (
        (null == e ? void 0 : e.thumbUrl) ||
        (null == e ? void 0 : e.url) ||
        (null == e ? void 0 : e.downloadURL) ||
        (null == e ? void 0 : e.imgURL)
      )
    },
    Lr = function (e) {
      return (
        (null == e ? void 0 : e.errorMessage) ||
        (null == e ? void 0 : e.errMsg) ||
        (null == e ? void 0 : e.errorMsg) ||
        (null == e ? void 0 : e.message) ||
        ('string' == typeof (null == e ? void 0 : e.error) ? e.error : '')
      )
    },
    Br = function (e) {
      return !1 === (null == e ? void 0 : e.success) ||
        !0 === (null == e ? void 0 : e.failed) ||
        (null == e ? void 0 : e.error)
        ? 'error'
        : (null == e ? void 0 : e.state) || (null == e ? void 0 : e.status)
    },
    Wr = function (e) {
      var t, n
      void 0 === e && (e = 'Upload Service Error'),
        (t = function (t) {
          for (var n, r, o = Formily.Shared.toArr(t), a = 0; a < o.length; a++)
            if (
              'error' ===
              (null === (n = o[a]) || void 0 === n ? void 0 : n.state)
            )
              return (
                Lr(null === (r = o[a]) || void 0 === r ? void 0 : r.response) ||
                Lr(o[a]) ||
                e
              )
        }),
        (n = Formily.React.useField()),
        React.useEffect(function () {
          var e = Formily.Reactive.reaction(
            function () {
              return n.value
            },
            function (e) {
              var r = t(e)
              n.setFeedback({
                type: 'error',
                code: 'UploadError',
                messages: r ? [r] : [],
              })
            }
          )
          return function () {
            e()
          }
        }, [])
    }
  function Hr(e) {
    var r = e.serviceErrorMessage,
      o = n(e, ['serviceErrorMessage'])
    Wr(r)
    return t(t({}, o), {
      onChange: function (e) {
        var r
        null === (r = o.onChange) ||
          void 0 === r ||
          r.call(
            o,
            (function (e) {
              return e && e.length
                ? e.map(function (e, r) {
                    var o = n(e, [])
                    return (
                      delete o.originFileObj,
                      t(t({}, o), {
                        uid: o.uid || r,
                        state: Br(null == o ? void 0 : o.response) || Br(o),
                        downloadURL:
                          Dr(o) || Dr(null == o ? void 0 : o.response),
                        imgURL: jr(
                          zr(o) || zr(null == o ? void 0 : o.response),
                          { exclude: ['.png', '.jpg', '.jpeg', '.gif'] }
                        ),
                      })
                    )
                  })
                : []
            })(
              (function (e, t) {
                for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
                  e[o] = t[n]
                return e
              })([], a(e))
            )
          )
      },
      formatter: function (e, n) {
        var r,
          a,
          i =
            null === (r = null == o ? void 0 : o.formatter) || void 0 === r
              ? void 0
              : r.call(o, e, n)
        return t(
          t(t({}, e), {
            success:
              ((a = e),
              (null == a ? void 0 : a.success) ||
                'done' === (null == a ? void 0 : a.status) ||
                'success' === (null == a ? void 0 : a.status) ||
                'done' === (null == a ? void 0 : a.state) ||
                'success' === (null == a ? void 0 : a.state)),
          }),
          i
        )
      },
    })
  }
  var Vr = function (e) {
    return React.createElement(
      Next.Upload,
      t({ listType: 'text' }, Hr(e)),
      e.children ||
        (function (e) {
          return 'card' !== e.shape
            ? React.createElement(
                Next.Button,
                null,
                React.createElement(Next.Icon, { type: 'upload' }),
                e.textContent
              )
            : React.createElement(Next.Icon, {
                type: 'upload',
                style: { fontSize: 20 },
              })
        })(e)
    )
  }
  ;(Vr.Dragger = function (e) {
    return React.createElement(
      Next.Upload.Dragger,
      t({ listType: 'text' }, Hr(e))
    )
  }),
    (Vr.Card = function (e) {
      return React.createElement(
        Next.Upload.Card,
        t({ listType: 'card' }, Hr(e))
      )
    })
  var Yr = Formily.React.observer(
      function (e) {
        var r = e.onSubmit,
          o = e.onSubmitFailed,
          a = e.onSubmitSuccess,
          i = n(e, ['onSubmit', 'onSubmitFailed', 'onSubmitSuccess']),
          l = Formily.React.useParentForm()
        return React.createElement(
          Next.Button,
          t({ htmlType: r ? 'button' : 'submit', type: 'primary' }, i, {
            loading: void 0 !== i.loading ? i.loading : l.submitting,
            onClick: function (e) {
              ;(i.onClick && !1 === i.onClick(e)) ||
                (r && l.submit(r).then(a).catch(o))
            },
          }),
          i.children
        )
      },
      { forwardRef: !0 }
    ),
    Xr = function () {
      var e,
        t,
        n = Formily.React.useField()
      return (
        (null === (e = null == n ? void 0 : n.parent) || void 0 === e
          ? void 0
          : e.pattern) ||
        (null === (t = null == n ? void 0 : n.form) || void 0 === t
          ? void 0
          : t.pattern)
      )
    },
    Gr = Formily.React.observer(function (e) {
      var n = a(
          (function () {
            var e = Xr(),
              t = Formily.React.useField()
            return (
              React.useLayoutEffect(
                function () {
                  'editable' === e && t.setPattern('readPretty')
                },
                [e]
              ),
              [
                'editable' === t.pattern,
                function (n) {
                  'editable' === e &&
                    t.setPattern(n ? 'editable' : 'readPretty')
                },
              ]
            )
          })(),
          2
        ),
        r = n[0],
        o = n[1],
        i = Xr(),
        l = (function () {
          var e = Formily.React.useField()
          return Formily.Core.isVoidField(e)
            ? {}
            : e
            ? {
                feedbackStatus:
                  'validating' === e.validateStatus
                    ? 'pending'
                    : e.validateStatus,
                feedbackText: e.selfErrors.length
                  ? e.selfErrors
                  : e.selfWarnings.length
                  ? e.selfWarnings
                  : e.selfSuccesses.length
                  ? e.selfSuccesses
                  : void 0,
                extra: e.description,
              }
            : {}
        })(),
        c = Formily.React.useField(),
        s = We(),
        u = We('formily-editable'),
        d = React.useRef(),
        f = React.useRef(),
        m = function () {
          var e
          d.current &&
            !(null === (e = null == c ? void 0 : c.errors) || void 0 === e
              ? void 0
              : e.length) &&
            o(!1)
        }
      !(function (e, t, n) {
        void 0 === n && (n = 'click')
        var r = React.useRef(e)
        ;(r.current = e),
          React.useEffect(
            function () {
              var e = function (e) {
                ;(Array.isArray(t) ? t : [t]).some(function (t) {
                  var n = (function (e, t) {
                    return e
                      ? 'function' == typeof e
                        ? e()
                        : 'current' in e
                        ? e.current
                        : e
                      : t
                  })(t)
                  return !n || (null == n ? void 0 : n.contains(e.target))
                }) || r.current(e)
              }
              return (
                document.addEventListener(n, e),
                function () {
                  document.removeEventListener(n, e)
                }
              )
            },
            [t, n]
          )
      })(function (e) {
        var t = e.target
        ;(null == t ? void 0 : t.closest('.'.concat(s, '-overlay-wrapper'))) ||
          m()
      }, f)
      return (
        (d.current = r),
        React.createElement(
          'div',
          {
            className: u,
            ref: f,
            onClick: function (e) {
              var t = e.target,
                n = f.current.querySelector('.'.concat(u, '-close-btn'))
              ;(null == t ? void 0 : t.contains(n)) ||
              (null == n ? void 0 : n.contains(t))
                ? m()
                : d.current ||
                  setTimeout(function () {
                    o(!0),
                      setTimeout(function () {
                        var e
                        null === (e = f.current.querySelector('input')) ||
                          void 0 === e ||
                          e.focus()
                      })
                  })
            },
          },
          React.createElement(
            'div',
            { className: ''.concat(u, '-content') },
            React.createElement(Rn, t({}, e, l), e.children),
            (function () {
              if (!r)
                return React.createElement(
                  Rn,
                  t({}, e, l),
                  'editable' === i &&
                    React.createElement(vt, {
                      className: ''.concat(u, '-edit-btn'),
                    }),
                  'editable' !== i &&
                    React.createElement(gt, {
                      className: ''.concat(u, '-edit-btn'),
                    })
                )
            })(),
            (function () {
              if (r)
                return React.createElement(
                  Rn,
                  t({}, e),
                  React.createElement(yt, {
                    className: ''.concat(u, '-close-btn'),
                  })
                )
            })()
          )
        )
      )
    })
  ;(Gr.Popover = Formily.React.observer(function (e) {
    var i = n(e, []),
      l = Formily.React.useField(),
      c = Xr(),
      s = a(React.useState(!1), 2),
      u = s[0],
      d = s[1],
      f = We('formily-editable')
    return React.createElement(
      Next.Balloon,
      t({}, i, {
        title: l.title,
        visible: u,
        className: i.className,
        onVisibleChange: function (e) {
          e
            ? d(!0)
            : r(void 0, void 0, void 0, function () {
                var e
                return o(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, , 2, 3]),
                        [4, l.form.validate(''.concat(l.address, '.*'))]
                      )
                    case 1:
                      return t.sent(), [3, 3]
                    case 2:
                      return (
                        null ==
                        (e = l.form.queryFeedbacks({
                          type: 'error',
                          address: ''.concat(l.address, '.*'),
                        }))
                          ? void 0
                          : e.length
                      )
                        ? [2]
                        : (d(!1), [7])
                    case 3:
                      return [2]
                  }
                })
              })
        },
        align: 't',
        triggerType: 'click',
        closable: !1,
        trigger: React.createElement(
          'div',
          { style: { display: 'inline-flex' } },
          React.createElement(
            Rn,
            { className: ''.concat(f, '-trigger') },
            React.createElement(
              'div',
              { className: ''.concat(f, '-content') },
              React.createElement(
                'span',
                { className: ''.concat(f, '-preview') },
                i.title || l.title
              ),
              'editable' === c &&
                React.createElement(vt, {
                  className: ''.concat(f, '-edit-btn'),
                }),
              'editable' !== c &&
                React.createElement(gt, {
                  className: ''.concat(f, '-edit-btn'),
                })
            )
          )
        ),
      }),
      i.children
    )
  })),
    (e.ArrayBase = Ft),
    (e.ArrayCards = _t),
    (e.ArrayCollapse = Wt),
    (e.ArrayItems = Xt),
    (e.ArrayTable = Pt),
    (e.BaseItem = Rn),
    (e.Cascader = Cr),
    (e.Checkbox = Er),
    (e.DatePicker = Pr),
    (e.Editable = Gr),
    (e.Form = Pn),
    (e.FormButtonGroup = mr),
    (e.FormCollapse = _n),
    (e.FormDialog = qt),
    (e.FormDrawer = Jt),
    (e.FormGrid = yn),
    (e.FormItem = xn),
    (e.FormLayout = Qe),
    (e.FormLayoutDeepContext = Ke),
    (e.FormLayoutShallowContext = qe),
    (e.FormStep = Tn),
    (e.FormTab = Mn),
    (e.GridColumn = gn),
    (e.Input = pr),
    (e.NumberPicker = Ar),
    (e.Password = xr),
    (e.PreviewText = kn),
    (e.Radio = wr),
    (e.Reset = function (e) {
      var r = e.forceClear,
        o = e.validate,
        a = e.onResetValidateFailed,
        i = e.onResetValidateSuccess,
        l = n(e, [
          'forceClear',
          'validate',
          'onResetValidateFailed',
          'onResetValidateSuccess',
        ]),
        c = Formily.React.useParentForm()
      return React.createElement(
        Next.Button,
        t({}, l, {
          onClick: function (e) {
            ;(l.onClick && !1 === l.onClick(e)) ||
              c.reset('*', { forceClear: r, validate: o }).then(i).catch(a)
          },
        }),
        l.children
      )
    }),
    (e.Select = Sr),
    (e.Space = dr),
    (e.Submit = Yr),
    (e.Switch = Mr),
    (e.TimePicker = Tr),
    (e.Transfer = Nr),
    (e.TreeSelect = Or),
    (e.Upload = Vr),
    (e.createFormGrid = mn),
    (e.useFormDeepLayout = Ue),
    (e.useFormGrid = pn),
    (e.useFormLayout = Je),
    (e.useFormShallowLayout = $e),
    (e.useGridColumn = vn),
    (e.useGridSpan = hn),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
//# sourceMappingURL=formily.next.umd.production.js.map
