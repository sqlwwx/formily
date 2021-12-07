!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('react-is'))
    : 'function' == typeof define && define.amd
    ? define('formily.antd', ['exports', 'react-is'], t)
    : t(
        (((e =
          'undefined' != typeof globalThis ? globalThis : e || self).Formily =
          e.Formily || {}),
        (e.Formily.Antd = {}))
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
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e))
        } catch (e) {
          i(e)
        }
      }
      function l(e) {
        try {
          c(r.throw(e))
        } catch (e) {
          i(e)
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
            })(e.value).then(a, l)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
  function o(e, t) {
    var n,
      r,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1]
          return o[1]
        },
        trys: [],
        ops: [],
      }
    return (
      (i = { next: l(0), throw: l(1), return: l(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this
        }),
      i
    )
    function l(i) {
      return function (l) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.')
          for (; a; )
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & i[0]
                      ? r.return
                      : i[0]
                      ? r.throw || ((o = r.return) && o.call(r), 0)
                      : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i
                  break
                case 4:
                  return a.label++, { value: i[1], done: !1 }
                case 5:
                  a.label++, (r = i[1]), (i = [0])
                  continue
                case 7:
                  ;(i = a.ops.pop()), a.trys.pop()
                  continue
                default:
                  if (
                    !((o = a.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    a = 0
                    continue
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1]
                    break
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    ;(a.label = o[1]), (o = i)
                    break
                  }
                  if (o && a.label < o[2]) {
                    ;(a.label = o[2]), a.ops.push(i)
                    break
                  }
                  o[2] && a.ops.pop(), a.trys.pop()
                  continue
              }
              i = t.call(e, a)
            } catch (e) {
              ;(i = [6, e]), (r = 0)
            } finally {
              n = o = 0
            }
          if (5 & i[0]) throw i[1]
          return { value: i[0] ? i[1] : void 0, done: !0 }
        })([i, l])
      }
    }
  }
  function i(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!n) return e
    var r,
      o,
      i = n.call(e),
      a = []
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
        a.push(r.value)
    } catch (e) {
      o = { error: e }
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i)
      } finally {
        if (o) throw o.error
      }
    }
    return a
  }
  function a() {
    return (
      (a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
      a.apply(this, arguments)
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
            i = [],
            a = !0,
            l = !1
          try {
            for (
              n = n.call(e);
              !(a = (r = n.next()).done) &&
              (i.push(r.value), !t || i.length !== t);
              a = !0
            );
          } catch (e) {
            ;(l = !0), (o = e)
          } finally {
            try {
              a || null == n.return || n.return()
            } finally {
              if (l) throw o
            }
          }
          return i
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
  function v(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e
  }
  function h(e) {
    var t = { exports: {} }
    return e(t, t.exports), t.exports
  }
  var y = h(function (e) {
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
    g = v(y)
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
  function w(e) {
    return (
      (w = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          }),
      w(e)
    )
  }
  function x(e, t) {
    return (
      (x =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e
        }),
      x(e, t)
    )
  }
  function E(e, t) {
    if ('function' != typeof t && null !== t)
      throw new TypeError('Super expression must either be null or a function')
    ;(e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      t && x(e, t)
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
  var k = (function () {
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
          for (var n, r, o = O(e), i = 1; i < arguments.length; i++) {
            for (var a in (n = Object(arguments[i])))
              S.call(n, a) && (o[a] = n[a])
            if (F) {
              r = F(n)
              for (var l = 0; l < r.length; l++)
                C.call(n, r[l]) && (o[r[l]] = n[r[l]])
            }
          }
          return o
        },
    A = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
    P = function () {}
  if ('production' !== process.env.NODE_ENV) {
    var T = A,
      N = {},
      I = Function.call.bind(Object.prototype.hasOwnProperty)
    P = function (e) {
      var t = 'Warning: ' + e
      'undefined' != typeof console && console.error(t)
      try {
        throw new Error(t)
      } catch (e) {}
    }
  }
  function _(e, t, n, r, o) {
    if ('production' !== process.env.NODE_ENV)
      for (var i in e)
        if (I(e, i)) {
          var a
          try {
            if ('function' != typeof e[i]) {
              var l = Error(
                (r || 'React class') +
                  ': ' +
                  n +
                  ' type `' +
                  i +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof e[i] +
                  '`.'
              )
              throw ((l.name = 'Invariant Violation'), l)
            }
            a = e[i](t, i, r, n, null, T)
          } catch (e) {
            a = e
          }
          if (
            (!a ||
              a instanceof Error ||
              P(
                (r || 'React class') +
                  ': type specification of ' +
                  n +
                  ' `' +
                  i +
                  '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                  typeof a +
                  '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
              ),
            a instanceof Error && !(a.message in N))
          ) {
            N[a.message] = !0
            var c = o ? o() : ''
            P('Failed ' + n + ' type: ' + a.message + (null != c ? c : ''))
          }
        }
  }
  _.resetWarningCache = function () {
    'production' !== process.env.NODE_ENV && (N = {})
  }
  var M = _
  const j = ReactIs
  var D = Function.call.bind(Object.prototype.hasOwnProperty),
    B = function () {}
  function W() {
    return null
  }
  'production' !== process.env.NODE_ENV &&
    (B = function (e) {
      var t = 'Warning: ' + e
      'undefined' != typeof console && console.error(t)
      try {
        throw new Error(t)
      } catch (e) {}
    })
  var L = function (e, t) {
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
        any: l(W),
        arrayOf: function (e) {
          return l(function (t, n, r, o, i) {
            if ('function' != typeof e)
              return new a(
                'Property `' +
                  i +
                  '` of component `' +
                  r +
                  '` has invalid PropType notation inside arrayOf.'
              )
            var l = t[n]
            if (!Array.isArray(l))
              return new a(
                'Invalid ' +
                  o +
                  ' `' +
                  i +
                  '` of type `' +
                  u(l) +
                  '` supplied to `' +
                  r +
                  '`, expected an array.'
              )
            for (var c = 0; c < l.length; c++) {
              var s = e(l, c, r, o, i + '[' + c + ']', A)
              if (s instanceof Error) return s
            }
            return null
          })
        },
        element: l(function (t, n, r, o, i) {
          var l = t[n]
          return e(l)
            ? null
            : new a(
                'Invalid ' +
                  o +
                  ' `' +
                  i +
                  '` of type `' +
                  u(l) +
                  '` supplied to `' +
                  r +
                  '`, expected a single ReactElement.'
              )
        }),
        elementType: l(function (e, t, n, r, o) {
          var i = e[t]
          return j.isValidElementType(i)
            ? null
            : new a(
                'Invalid ' +
                  r +
                  ' `' +
                  o +
                  '` of type `' +
                  u(i) +
                  '` supplied to `' +
                  n +
                  '`, expected a single ReactElement type.'
              )
        }),
        instanceOf: function (e) {
          return l(function (t, n, o, i, l) {
            if (!(t[n] instanceof e)) {
              var c = e.name || r
              return new a(
                'Invalid ' +
                  i +
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
            : new a(
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
          return l(function (t, n, r, o, i) {
            if ('function' != typeof e)
              return new a(
                'Property `' +
                  i +
                  '` of component `' +
                  r +
                  '` has invalid PropType notation inside objectOf.'
              )
            var l = t[n],
              c = u(l)
            if ('object' !== c)
              return new a(
                'Invalid ' +
                  o +
                  ' `' +
                  i +
                  '` of type `' +
                  c +
                  '` supplied to `' +
                  r +
                  '`, expected an object.'
              )
            for (var s in l)
              if (D(l, s)) {
                var d = e(l, s, r, o, i + '.' + s, A)
                if (d instanceof Error) return d
              }
            return null
          })
        },
        oneOf: function (e) {
          if (!Array.isArray(e))
            return (
              'production' !== process.env.NODE_ENV &&
                B(
                  arguments.length > 1
                    ? 'Invalid arguments supplied to oneOf, expected an array, got ' +
                        arguments.length +
                        ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                    : 'Invalid argument supplied to oneOf, expected an array.'
                ),
              W
            )
          function t(t, n, r, o, l) {
            for (var c = t[n], s = 0; s < e.length; s++)
              if (i(c, e[s])) return null
            var u = JSON.stringify(e, function (e, t) {
              return 'symbol' === d(t) ? String(t) : t
            })
            return new a(
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
                B(
                  'Invalid argument supplied to oneOfType, expected an instance of array.'
                ),
              W
            )
          for (var t = 0; t < e.length; t++) {
            var n = e[t]
            if ('function' != typeof n)
              return (
                B(
                  'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                    f(n) +
                    ' at index ' +
                    t +
                    '.'
                ),
                W
              )
          }
          return l(function (t, n, r, o, i) {
            for (var l = 0; l < e.length; l++)
              if (null == (0, e[l])(t, n, r, o, i, A)) return null
            return new a(
              'Invalid ' + o + ' `' + i + '` supplied to `' + r + '`.'
            )
          })
        },
        shape: function (e) {
          return l(function (t, n, r, o, i) {
            var l = t[n],
              c = u(l)
            if ('object' !== c)
              return new a(
                'Invalid ' +
                  o +
                  ' `' +
                  i +
                  '` of type `' +
                  c +
                  '` supplied to `' +
                  r +
                  '`, expected `object`.'
              )
            for (var s in e) {
              var d = e[s]
              if (d) {
                var f = d(l, s, r, o, i + '.' + s, A)
                if (f) return f
              }
            }
            return null
          })
        },
        exact: function (e) {
          return l(function (t, n, r, o, i) {
            var l = t[n],
              c = u(l)
            if ('object' !== c)
              return new a(
                'Invalid ' +
                  o +
                  ' `' +
                  i +
                  '` of type `' +
                  c +
                  '` supplied to `' +
                  r +
                  '`, expected `object`.'
              )
            var s = k({}, t[n], e)
            for (var d in s) {
              var f = e[d]
              if (!f)
                return new a(
                  'Invalid ' +
                    o +
                    ' `' +
                    i +
                    '` key `' +
                    d +
                    '` supplied to `' +
                    r +
                    '`.\nBad object: ' +
                    JSON.stringify(t[n], null, '  ') +
                    '\nValid keys: ' +
                    JSON.stringify(Object.keys(e), null, '  ')
                )
              var m = f(l, d, r, o, i + '.' + d, A)
              if (m) return m
            }
            return null
          })
        },
      }
    function i(e, t) {
      return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
    function a(e) {
      ;(this.message = e), (this.stack = '')
    }
    function l(e) {
      if ('production' !== process.env.NODE_ENV)
        var n = {},
          o = 0
      function i(i, l, c, s, u, d, f) {
        if (((s = s || r), (d = d || c), f !== A)) {
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
              (B(
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
          ? i
            ? null === l[c]
              ? new a(
                  'The ' +
                    u +
                    ' `' +
                    d +
                    '` is marked as required in `' +
                    s +
                    '`, but its value is `null`.'
                )
              : new a(
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
      var l = i.bind(null, !1)
      return (l.isRequired = i.bind(null, !0)), l
    }
    function c(e) {
      return l(function (t, n, r, o, i, l) {
        var c = t[n]
        return u(c) !== e
          ? new a(
              'Invalid ' +
                o +
                ' `' +
                i +
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
            i = r.call(t)
          if (r !== t.entries) {
            for (; !(o = i.next()).done; ) if (!s(o.value)) return !1
          } else
            for (; !(o = i.next()).done; ) {
              var a = o.value
              if (a && !s(a[1])) return !1
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
      (a.prototype = Error.prototype),
      (o.checkPropTypes = M),
      (o.resetWarningCache = M.resetWarningCache),
      (o.PropTypes = o),
      o
    )
  }
  function z() {}
  function V() {}
  V.resetWarningCache = z
  var H = h(function (e) {
      if ('production' !== process.env.NODE_ENV) {
        var t = j
        e.exports = L(t.isElement, !0)
      } else
        e.exports = (function () {
          function e(e, t, n, r, o, i) {
            if (i !== A) {
              var a = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((a.name = 'Invariant Violation'), a)
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
            checkPropTypes: V,
            resetWarningCache: z,
          }
          return (n.PropTypes = n), n
        })()
    }),
    X = process.env.NODE_ENV,
    G = function (e, t, n, r, o, i, a, l) {
      if ('production' !== X && void 0 === t)
        throw new Error('invariant requires an error message argument')
      if (!e) {
        var c
        if (void 0 === t)
          c = new Error(
            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
          )
        else {
          var s = [n, r, o, i, a, l],
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
  function K(e) {
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
  var Y = (function () {
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
  function ie(e, t) {
    var n = t.displayName || t.name
    return n ? ''.concat(e, '(').concat(n, ')') : e
  }
  function ae(e, t) {
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
      i = t,
      a = 'px'
    if ('string' == typeof t) {
      var l = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t)
      G(
        null !== l,
        'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',
        t
      ),
        (o = parseFloat(t)),
        (i = parseFloat(t)),
        (a = l[1])
    }
    return (
      G(
        isFinite(o) && isFinite(i),
        'lockOffset value should be a finite. Given %s',
        t
      ),
      '%' === a && ((o = (o * n) / 100), (i = (i * r) / 100)),
      { x: o, y: i }
    )
  }
  function fe(e) {
    var t = e.height,
      n = e.width,
      r = e.lockOffset,
      o = Array.isArray(r) ? r : [r, r]
    G(
      2 === o.length,
      'lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s',
      r
    )
    var i = s(o, 2),
      a = i[0],
      l = i[1]
    return [
      de({ height: t, lockOffset: a, width: n }),
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
  var ve = 27,
    he = 32,
    ye = 37,
    ge = 38,
    be = 39,
    Re = 40,
    we = 'A',
    xe = 'BUTTON',
    Ee = 'CANVAS',
    Fe = 'INPUT',
    Se = 'OPTION',
    Ce = 'TEXTAREA',
    Oe = 'SELECT'
  function ke(e) {
    var t = 'input, textarea, select, canvas, [contenteditable]',
      n = e.querySelectorAll(t),
      r = e.cloneNode(!0)
    return (
      K(r.querySelectorAll(t)).forEach(function (e, t) {
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
  function Ae(e) {
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
              i = e.width,
              a = e.height,
              l = { x: 0, y: 0 },
              c = { x: 1, y: 1 },
              s = 10,
              u = 10,
              d = this.container,
              f = d.scrollTop,
              m = d.scrollLeft,
              p = d.scrollHeight,
              v = d.scrollWidth,
              h = 0 === f,
              y = p - f - d.clientHeight == 0,
              g = 0 === m,
              b = v - m - d.clientWidth == 0
            n.y >= o.y - a / 2 && !y
              ? ((l.y = 1), (c.y = u * Math.abs((o.y - a / 2 - n.y) / a)))
              : n.x >= o.x - i / 2 && !b
              ? ((l.x = 1), (c.x = s * Math.abs((o.x - i / 2 - n.x) / i)))
              : n.y <= r.y + a / 2 && !h
              ? ((l.y = -1), (c.y = u * Math.abs((n.y - a / 2 - r.y) / a)))
              : n.x <= r.x + i / 2 &&
                !g &&
                ((l.x = -1), (c.x = s * Math.abs((n.x - i / 2 - r.x) / i))),
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
      axis: H.oneOf(['x', 'y', 'xy']),
      contentWindow: H.any,
      disableAutoscroll: H.bool,
      distance: H.number,
      getContainer: H.func,
      getHelperDimensions: H.func,
      helperClass: H.string,
      helperContainer: H.oneOfType([
        H.func,
        'undefined' == typeof HTMLElement ? H.any : H.instanceOf(HTMLElement),
      ]),
      hideSortableGhost: H.bool,
      keyboardSortingTransitionDuration: H.number,
      lockAxis: H.string,
      lockOffset: H.oneOfType([
        H.number,
        H.string,
        H.arrayOf(H.oneOfType([H.number, H.string])),
      ]),
      lockToContainerEdges: H.bool,
      onSortEnd: H.func,
      onSortMove: H.func,
      onSortOver: H.func,
      onSortStart: H.func,
      pressDelay: H.number,
      pressThreshold: H.number,
      keyCodes: H.shape({
        lift: H.arrayOf(H.number),
        drop: H.arrayOf(H.number),
        cancel: H.arrayOf(H.number),
        up: H.arrayOf(H.number),
        down: H.arrayOf(H.number),
      }),
      shouldCancelStart: H.func,
      transitionDuration: H.number,
      updateBeforeSortStart: H.func,
      useDragHandle: H.bool,
      useWindowAsScrollContainer: H.bool,
    },
    Ne = { lift: [he], drop: [he], cancel: [ve], up: [ge, ye], down: [Re, be] },
    Ie = {
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
      keyCodes: Ne,
      shouldCancelStart: function (e) {
        return (
          -1 !== [Fe, Ce, Oe, Se, xe].indexOf(e.target.tagName) ||
          !!te(e.target, function (e) {
            return 'true' === e.contentEditable
          })
        )
      },
      transitionDuration: 300,
      useWindowAsScrollContainer: !1,
    },
    _e = Object.keys(Te)
  function Me(e) {
    G(
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
  function De(e) {
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
              u(b(b((t = R(this, w(n).call(this, e))))), 'state', {}),
              u(b(b(t)), 'handleStart', function (e) {
                var n = t.props,
                  r = n.distance,
                  o = n.shouldCancelStart
                if (2 !== e.button && !o(e)) {
                  ;(t.touched = !0), (t.position = le(e))
                  var i = te(e.target, function (e) {
                    return null != e.sortableInfo
                  })
                  if (
                    i &&
                    i.sortableInfo &&
                    t.nodeIsChild(i) &&
                    !t.state.sorting
                  ) {
                    var a = t.props.useDragHandle,
                      l = i.sortableInfo,
                      c = l.index,
                      s = l.collection
                    if (l.disabled) return
                    if (a && !te(e.target, Ae)) return
                    ;(t.manager.active = { collection: s, index: c }),
                      ce(e) || e.target.tagName !== we || e.preventDefault(),
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
                  var i = le(e),
                    a = { x: t.position.x - i.x, y: t.position.y - i.y },
                    l = Math.abs(a.x) + Math.abs(a.y)
                  ;(t.delta = a),
                    r || (o && !(l >= o))
                      ? r && l >= r && t.manager.isActive() && t.handlePress(e)
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
                              h = a({ index: n, node: m, collection: p })
                            if (
                              ((t.node = m),
                              (t.margin = r),
                              (t.gridGap = o),
                              (t.width = h.width),
                              (t.height = h.height),
                              (t.marginOffset = {
                                x: t.margin.left + t.margin.right + t.gridGap.x,
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
                                x: i.indexOf('x') >= 0,
                                y: i.indexOf('y') >= 0,
                              }),
                              (t.offsetEdge = se(m, t.container)),
                              (t.initialOffset = le(
                                v
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
                              (t.helper = t.helperContainer.appendChild(ke(m))),
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
                              v && t.helper.focus(),
                              c &&
                                ((t.sortableGhost = m),
                                Q(m, { opacity: 0, visibility: 'hidden' })),
                              (t.minTranslate = {}),
                              (t.maxTranslate = {}),
                              v)
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
                                w = g + y.height,
                                x = b + R
                              t.axis.x &&
                                ((t.minTranslate.x =
                                  b - t.boundingClientRect.left),
                                (t.maxTranslate.x =
                                  x - (t.boundingClientRect.left + t.width))),
                                t.axis.y &&
                                  ((t.minTranslate.y =
                                    g - t.boundingClientRect.top),
                                  (t.maxTranslate.y =
                                    w - (t.boundingClientRect.top + t.height)))
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
                              v
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
                                    isKeySorting: v,
                                    nodes: t.manager.getOrderedRefs(),
                                    helper: t.helper,
                                  },
                                  e
                                ),
                              v && t.keyMove(0)
                          },
                          o = t.props,
                          i = o.axis,
                          a = o.getHelperDimensions,
                          l = o.helperClass,
                          c = o.hideSortableGhost,
                          s = o.updateBeforeSortStart,
                          u = o.onSortStart,
                          f = o.useWindowAsScrollContainer,
                          m = n.node,
                          p = n.collection,
                          v = t.manager.isKeySorting,
                          h = (function () {
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
                                        isKeySorting: v,
                                      },
                                      e
                                    )
                                  ).then(function () {})
                                },
                                function (e, n) {
                                  if (
                                    ((t._awaitingUpdateBeforeSortStart = !1), e)
                                  )
                                    throw n
                                  return n
                                }
                              )
                              if (n && n.then) return n.then(function () {})
                            }
                          })()
                        return h && h.then ? h.then(r) : r()
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
                  i = t.manager,
                  a = i.active.collection,
                  l = i.isKeySorting,
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
                        collection: a,
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
                      i = 0
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
                        (i = t.translate.y - r.y)),
                      (t.translate = r),
                      Z(t.helper, t.translate),
                      (t.scrollContainer.scrollLeft += o),
                      void (t.scrollContainer.scrollTop += i)
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
                  i = r.keyCodes,
                  a = d({}, Ne, void 0 === i ? {} : i)
                ;(t.manager.active && !t.manager.isKeySorting) ||
                  !(
                    t.manager.active ||
                    (a.lift.includes(n) && !o(e) && t.isValidSortingTarget(e))
                  ) ||
                  (e.stopPropagation(),
                  e.preventDefault(),
                  a.lift.includes(n) && !t.manager.active
                    ? t.keyLift(e)
                    : a.drop.includes(n) && t.manager.active
                    ? t.keyDrop(e)
                    : a.cancel.includes(n)
                    ? ((t.newIndex = t.manager.active.index), t.keyDrop(e))
                    : a.up.includes(n)
                    ? t.keyMove(-1)
                    : a.down.includes(n) && t.keyMove(1))
              }),
              u(b(b(t)), 'keyLift', function (e) {
                var n = e.target,
                  r = te(n, function (e) {
                    return null != e.sortableInfo
                  }).sortableInfo,
                  o = r.index,
                  i = r.collection
                ;(t.initialFocusedNode = n),
                  (t.manager.isKeySorting = !0),
                  (t.manager.active = { index: o, collection: i }),
                  t.handlePress(e)
              }),
              u(b(b(t)), 'keyMove', function (e) {
                var n = t.manager.getOrderedRefs(),
                  r = n[n.length - 1].node.sortableInfo.index,
                  o = t.newIndex + e,
                  i = t.newIndex
                if (!(o < 0 || o > r)) {
                  ;(t.prevIndex = i), (t.newIndex = o)
                  var a = ue(t.newIndex, t.prevIndex, t.index),
                    l = n.find(function (e) {
                      return e.node.sortableInfo.index === a
                    }),
                    c = l.node,
                    s = t.containerScrollDelta,
                    u = l.boundingClientRect || ae(c, s),
                    d = l.translate || { x: 0, y: 0 },
                    f = u.top + d.y - s.top,
                    m = u.left + d.x - s.left,
                    p = i < o,
                    v = p && t.axis.x ? c.offsetWidth - t.width : 0,
                    h = p && t.axis.y ? c.offsetHeight - t.height : 0
                  t.handleSortMove({
                    pageX: m + v,
                    pageY: f + h,
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
                  (n ? Ae(r) : r.sortableInfo)
                )
              }),
              Me(e),
              (t.manager = new Y()),
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
                      e.props.contentWindow || e.document.defaultView || window
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
                          return e.container.removeEventListener(n, e.events[t])
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
                    i = t.transitionDuration,
                    a = t.keyboardSortingTransitionDuration,
                    l = void 0 === a ? i : a,
                    c = this.manager.isKeySorting,
                    u = e.ignoreTransition,
                    d = le(e),
                    f = {
                      x: d.x - this.initialOffset.x,
                      y: d.y - this.initialOffset.y,
                    }
                  if (
                    ((f.y -= window.pageYOffset - this.initialWindowScroll.top),
                    (f.x -= window.pageXOffset - this.initialWindowScroll.left),
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
                      v = m[1],
                      h = { x: this.width / 2 - p.x, y: this.height / 2 - p.y },
                      y = { x: this.width / 2 - v.x, y: this.height / 2 - v.y }
                    ;(f.x = ne(
                      this.minTranslate.x + h.x,
                      this.maxTranslate.x - y.x,
                      f.x
                    )),
                      (f.y = ne(
                        this.minTranslate.y + h.y,
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
                    i = this.windowScrollDelta,
                    a = this.manager.getOrderedRefs(),
                    l = this.offsetEdge.left + this.translate.x + o.left,
                    c = this.offsetEdge.top + this.translate.y + o.top,
                    s = this.manager.isKeySorting,
                    u = this.newIndex
                  this.newIndex = null
                  for (var d = 0, f = a.length; d < f; d++) {
                    var m = a[d].node,
                      p = m.sortableInfo.index,
                      v = m.offsetWidth,
                      h = m.offsetHeight,
                      y = {
                        height: this.height > h ? h / 2 : this.height / 2,
                        width: this.width > v ? v / 2 : this.width / 2,
                      },
                      g = s && p > this.index && p <= u,
                      b = s && p < this.index && p >= u,
                      R = { x: 0, y: 0 },
                      w = a[d].edgeOffset
                    w ||
                      ((w = se(m, this.container)),
                      (a[d].edgeOffset = w),
                      s && (a[d].boundingClientRect = ae(m, o)))
                    var x = d < a.length - 1 && a[d + 1],
                      E = d > 0 && a[d - 1]
                    x &&
                      !x.edgeOffset &&
                      ((x.edgeOffset = se(x.node, this.container)),
                      s && (x.boundingClientRect = ae(x.node, o))),
                      p !== this.index
                        ? (t && ee(m, t),
                          this.axis.x
                            ? this.axis.y
                              ? b ||
                                (p < this.index &&
                                  ((l + i.left - y.width <= w.left &&
                                    c + i.top <= w.top + y.height) ||
                                    c + i.top + y.height <= w.top))
                                ? ((R.x = this.width + this.marginOffset.x),
                                  w.left + R.x >
                                    this.containerBoundingRect.width -
                                      y.width &&
                                    x &&
                                    ((R.x = x.edgeOffset.left - w.left),
                                    (R.y = x.edgeOffset.top - w.top)),
                                  null === this.newIndex && (this.newIndex = p))
                                : (g ||
                                    (p > this.index &&
                                      ((l + i.left + y.width >= w.left &&
                                        c + i.top + y.height >= w.top) ||
                                        c + i.top + y.height >= w.top + h))) &&
                                  ((R.x = -(this.width + this.marginOffset.x)),
                                  w.left + R.x <
                                    this.containerBoundingRect.left + y.width &&
                                    E &&
                                    ((R.x = E.edgeOffset.left - w.left),
                                    (R.y = E.edgeOffset.top - w.top)),
                                  (this.newIndex = p))
                              : g ||
                                (p > this.index &&
                                  l + i.left + y.width >= w.left)
                              ? ((R.x = -(this.width + this.marginOffset.x)),
                                (this.newIndex = p))
                              : (b ||
                                  (p < this.index &&
                                    l + i.left <= w.left + y.width)) &&
                                ((R.x = this.width + this.marginOffset.x),
                                null == this.newIndex && (this.newIndex = p))
                            : this.axis.y &&
                              (g ||
                              (p > this.index && c + i.top + y.height >= w.top)
                                ? ((R.y = -(this.height + this.marginOffset.y)),
                                  (this.newIndex = p))
                                : (b ||
                                    (p < this.index &&
                                      c + i.top <= w.top + y.height)) &&
                                  ((R.y = this.height + this.marginOffset.y),
                                  null == this.newIndex &&
                                    (this.newIndex = p))),
                          Z(m, R),
                          (a[d].translate = R))
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
                      nodes: a,
                      helper: this.helper,
                    })
                },
              },
              {
                key: 'getWrappedInstance',
                value: function () {
                  return (
                    G(
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
                    a({ ref: t }, U(this.props, _e))
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
      u(t, 'displayName', ie('sortableList', e)),
      u(t, 'defaultProps', Ie),
      u(t, 'propTypes', Te),
      u(t, 'childContextTypes', { manager: H.object.isRequired }),
      n
    )
  }
  var Be = {
      index: H.number.isRequired,
      collection: H.oneOfType([H.number, H.string]),
      disabled: H.bool,
    },
    We = Object.keys(Be)
  function Le(e) {
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
            return f(this, n), R(this, w(n).apply(this, arguments))
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
                      (this.node.sortableInfo.disabled = this.props.disabled)),
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
                    G(
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
                    a({ ref: t }, U(this.props, We))
                  )
                },
              },
            ]),
            n
          )
        })()),
      u(t, 'displayName', ie('sortableElement', e)),
      u(t, 'contextTypes', { manager: H.object.isRequired }),
      u(t, 'propTypes', Be),
      u(t, 'defaultProps', { collection: 0 }),
      n
    )
  }
  var ze = function (e, t) {
      return Array.isArray(e)
        ? e.map(function (e) {
            return moment(e, t)
          })
        : e
        ? moment(e, t)
        : e
    },
    Ve = function (e, t, n) {
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
  var He = function (e, t) {
      return (0,
      React.useContext(Antd.ConfigProvider.ConfigContext).getPrefixCls)(
        e,
        null == t ? void 0 : t.prefixCls
      )
    },
    Xe = Formily.Reactive.observable(new Map()),
    Ge = function (e) {
      var t = function (e) {
        return (
          e.id && !Xe.has(e.id) && Xe.set(e.id, null),
          React.createElement(
            React.Fragment,
            null,
            e.children,
            React.createElement(Formily.React.Observer, null, function () {
              if (!e.id) return null
              var t = Xe.get(e.id)
              return t ? ReactDOM.createPortal(t, document.body) : null
            })
          )
        )
      }
      return (t.defaultProps = { id: e }), t
    }
  function Ke(e, t) {
    return {
      render: function (n) {
        Xe.has(t)
          ? Xe.set(t, null == n ? void 0 : n())
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
        Xe.has(t)
          ? Xe.set(t, null)
          : e &&
            (ReactDOM.unmountComponentAtNode(e),
            null === (n = e.parentNode) || void 0 === n || n.removeChild(e))
      },
    }
  }
  var Ye = function (e, t) {
      return (
        void 0 === e && (e = 'Loading...'),
        r(void 0, void 0, void 0, function () {
          var n, r
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                ;(n = null),
                  (r = setTimeout(function () {
                    n = Antd.message.loading(e)
                  }, 100)),
                  (o.label = 1)
              case 1:
                return o.trys.push([1, , 3, 4]), [4, t()]
              case 2:
                return [2, o.sent()]
              case 3:
                return null == n || n(), clearTimeout(r), [7]
              case 4:
                return [2]
            }
          })
        })
      )
    },
    qe = function (e) {
      void 0 === e && (e = {})
      var t = {}
      for (var n in e) n.indexOf('data-') > -1 && (t[n] = e[n])
      return t
    },
    Ue = h(function (e) {
      !(function () {
        var t = {}.hasOwnProperty
        function n() {
          for (var e = [], r = 0; r < arguments.length; r++) {
            var o = arguments[r]
            if (o) {
              var i = typeof o
              if ('string' === i || 'number' === i) e.push(o)
              else if (Array.isArray(o)) {
                if (o.length) {
                  var a = n.apply(null, o)
                  a && e.push(a)
                }
              } else if ('object' === i)
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
    $e = React.createContext(null),
    Je = React.createContext(null),
    Qe = function () {
      return React.useContext($e)
    },
    Ze = function (e) {
      var t = React.useContext(Je)
      return t ? t.index : e
    },
    et = function (e, t) {
      var n, r, o, i, a, l, c
      return Formily.Shared.isValid(e)
        ? Formily.Shared.clone(e)
        : Array.isArray(null == t ? void 0 : t.items)
        ? et(e, t.items[0])
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
            (null === (i = null == t ? void 0 : t.items) || void 0 === i
              ? void 0
              : i.type)
            ? ''
            : 'number' ===
              (null === (a = null == t ? void 0 : t.items) || void 0 === a
                ? void 0
                : a.type)
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
    tt = function (e) {
      var t = Formily.React.useField(),
        n = Formily.React.useFieldSchema()
      return React.createElement(
        $e.Provider,
        { value: { field: t, schema: n, props: e } },
        e.children
      )
    }
  tt.Item = function (e) {
    var t = e.children,
      r = n(e, ['children'])
    return React.createElement(Je.Provider, { value: r }, t)
  }
  var nt = (function (e) {
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
            return f(this, n), R(this, w(n).apply(this, arguments))
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
                    G(
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
                  return React.createElement(e, a({ ref: t }, this.props))
                },
              },
            ]),
            n
          )
        })()),
      u(t, 'displayName', ie('sortableHandle', e)),
      n
    )
  })(function (e) {
    var n = He('formily-array-base')
    return React.createElement(
      icons.MenuOutlined,
      t({}, e, {
        className: Ue(''.concat(n, '-sort-handle'), e.className),
        style: t({}, e.style),
      })
    )
  })
  ;(tt.SortHandle = function (e) {
    var n,
      r = Qe()
    return r
      ? 'editable' !==
        (null === (n = r.field) || void 0 === n ? void 0 : n.pattern)
        ? null
        : React.createElement(nt, t({}, e))
      : null
  }),
    (tt.Index = function (e) {
      var n = Ze(),
        r = He('formily-array-base')
      return React.createElement(
        'span',
        t({}, e, { className: ''.concat(r, '-index') }),
        '#',
        n + 1,
        '.'
      )
    }),
    (tt.Addition = function (e) {
      var n,
        r,
        o,
        i = Formily.React.useField(),
        a = Qe(),
        l = He('formily-array-base')
      return a
        ? 'editable' !==
            (null === (n = a.field) || void 0 === n ? void 0 : n.pattern) &&
          'disabled' !==
            (null === (r = a.field) || void 0 === r ? void 0 : r.pattern)
          ? null
          : React.createElement(
              Antd.Button,
              t({ type: 'dashed', block: !0 }, e, {
                disabled:
                  null === (o = a.field) || void 0 === o ? void 0 : o.disabled,
                className: Ue(''.concat(l, '-addition'), e.className),
                onClick: function (t) {
                  var n, r, o, i, l, c, s, u, d, f, m
                  if (
                    !(null === (n = a.props) || void 0 === n
                      ? void 0
                      : n.disabled)
                  ) {
                    var p = et(e.defaultValue, a.schema)
                    'unshift' === e.method
                      ? (null ===
                          (o =
                            null === (r = a.field) || void 0 === r
                              ? void 0
                              : r.unshift) ||
                          void 0 === o ||
                          o.call(r, p),
                        null ===
                          (l =
                            null === (i = a.props) || void 0 === i
                              ? void 0
                              : i.onAdd) ||
                          void 0 === l ||
                          l.call(i, 0))
                      : (null ===
                          (s =
                            null === (c = a.field) || void 0 === c
                              ? void 0
                              : c.push) ||
                          void 0 === s ||
                          s.call(c, p),
                        null ===
                          (d =
                            null === (u = a.props) || void 0 === u
                              ? void 0
                              : u.onAdd) ||
                          void 0 === d ||
                          d.call(
                            u,
                            (null ===
                              (m =
                                null === (f = null == a ? void 0 : a.field) ||
                                void 0 === f
                                  ? void 0
                                  : f.value) || void 0 === m
                              ? void 0
                              : m.length) - 1
                          )),
                      e.onClick && e.onClick(t)
                  }
                },
                icon: React.createElement(icons.PlusOutlined, null),
              }),
              e.title || i.title
            )
        : null
    }),
    (tt.Remove = React.forwardRef(function (e, n) {
      var r,
        o = Ze(e.index),
        i = Qe(),
        a = He('formily-array-base')
      return i
        ? 'editable' !==
          (null === (r = i.field) || void 0 === r ? void 0 : r.pattern)
          ? null
          : React.createElement(
              icons.DeleteOutlined,
              t({}, e, {
                className: Ue(''.concat(a, '-remove'), e.className),
                ref: n,
                onClick: function (t) {
                  var n, r, a, l, c
                  ;(null === (n = i.props) || void 0 === n
                    ? void 0
                    : n.disabled) ||
                    (t.stopPropagation(),
                    null ===
                      (a =
                        null === (r = i.field) || void 0 === r
                          ? void 0
                          : r.remove) ||
                      void 0 === a ||
                      a.call(r, o),
                    null ===
                      (c =
                        null === (l = i.props) || void 0 === l
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
    (tt.Copy = React.forwardRef(function (e, n) {
      var r,
        o = Ze(e.index),
        i = Qe(),
        a = He('formily-array-base')
      return i
        ? 'editable' !==
          (null === (r = i.field) || void 0 === r ? void 0 : r.pattern)
          ? null
          : React.createElement(
              icons.CopyOutlined,
              t({}, e, {
                className: Ue(''.concat(a, '-copy'), e.className),
                ref: n,
                onClick: function (t) {
                  var n, r, a, l, c
                  ;(null === (n = i.props) || void 0 === n
                    ? void 0
                    : n.disabled) ||
                    (t.stopPropagation(),
                    null ===
                      (a =
                        null === (r = i.field) || void 0 === r
                          ? void 0
                          : r.copy) ||
                      void 0 === a ||
                      a.call(r, o),
                    null ===
                      (c =
                        null === (l = i.props) || void 0 === l
                          ? void 0
                          : l.onCopy) ||
                      void 0 === c ||
                      c.call(l, o),
                    e.onClick && e.onClick(t))
                },
              })
            )
        : null
    })),
    (tt.MoveDown = React.forwardRef(function (e, n) {
      var r,
        o = Ze(e.index),
        i = Qe(),
        a = He('formily-array-base')
      return i
        ? 'editable' !==
          (null === (r = i.field) || void 0 === r ? void 0 : r.pattern)
          ? null
          : React.createElement(
              icons.DownOutlined,
              t({}, e, {
                className: Ue(''.concat(a, '-move-down'), e.className),
                ref: n,
                onClick: function (t) {
                  var n, r, a, l, c
                  ;(null === (n = i.props) || void 0 === n
                    ? void 0
                    : n.disabled) ||
                    (t.stopPropagation(),
                    null ===
                      (a =
                        null === (r = i.field) || void 0 === r
                          ? void 0
                          : r.moveDown) ||
                      void 0 === a ||
                      a.call(r, o),
                    null ===
                      (c =
                        null === (l = i.props) || void 0 === l
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
    (tt.MoveUp = React.forwardRef(function (e, n) {
      var r,
        o = Ze(e.index),
        i = Qe(),
        a = He('formily-array-base')
      return i
        ? 'editable' !==
          (null === (r = i.field) || void 0 === r ? void 0 : r.pattern)
          ? null
          : React.createElement(
              icons.UpOutlined,
              t({}, e, {
                className: Ue(''.concat(a, '-move-up'), e.className),
                ref: n,
                onClick: function (t) {
                  var n, r, a, l
                  ;(null === (n = i.props) || void 0 === n
                    ? void 0
                    : n.disabled) ||
                    (t.stopPropagation(),
                    null === (r = null == i ? void 0 : i.field) ||
                      void 0 === r ||
                      r.moveUp(o),
                    null ===
                      (l =
                        null === (a = null == i ? void 0 : i.props) ||
                        void 0 === a
                          ? void 0
                          : a.onMoveUp) ||
                      void 0 === l ||
                      l.call(a, o),
                    e.onClick && e.onClick(t))
                },
              })
            )
        : null
    })),
    (tt.useArray = Qe),
    (tt.useIndex = Ze),
    (tt.useRecord = function (e) {
      var t = React.useContext(Je)
      return t ? t.record : e
    }),
    (tt.mixin = function (e) {
      return (
        (e.Index = tt.Index),
        (e.SortHandle = tt.SortHandle),
        (e.Addition = tt.Addition),
        (e.Remove = tt.Remove),
        (e.Copy = tt.Copy),
        (e.MoveDown = tt.MoveDown),
        (e.MoveUp = tt.MoveUp),
        (e.useArray = tt.useArray),
        (e.useIndex = tt.useIndex),
        (e.useRecord = tt.useRecord),
        e
      )
    })
  var rt = Le(function (e) {
      return React.createElement('tr', t({}, e))
    }),
    ot = De(function (e) {
      return React.createElement('tbody', t({}, e))
    }),
    it = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Column')) > -1
      )
    },
    at = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Addition')) > -1
      )
    },
    lt = Formily.React.observer(function (e) {
      var t,
        n = Formily.React.useForm(),
        r = Formily.React.useField(),
        o = He('formily-array-table'),
        i = n.queryFeedbacks({
          type: 'error',
          address: ''.concat(r.address, '.*'),
        }),
        a =
          null === (t = e.options) || void 0 === t
            ? void 0
            : t.map(function (t) {
                var n = t.label,
                  o = t.value,
                  a = i.some(function (t) {
                    var n = (function (e) {
                        var t
                        return Number(
                          null ===
                            (t = e
                              .slice(e.indexOf(r.address.toString()) + 1)
                              .match(/(\d+)/)) || void 0 === t
                            ? void 0
                            : t[1]
                        )
                      })(t.address),
                      i = (o - 1) * e.pageSize,
                      a = o * e.pageSize
                    return n >= i && n <= a
                  })
                return {
                  label: a
                    ? React.createElement(Antd.Badge, { dot: !0 }, n)
                    : n,
                  value: o,
                }
              }),
        l = 15 * String(null == a ? void 0 : a.length).length
      return React.createElement(Antd.Select, {
        value: e.value,
        onChange: e.onChange,
        options: a,
        virtual: !0,
        style: { width: l < 60 ? 60 : l },
        className: Ue(''.concat(o, '-status-select'), {
          'has-error': null == i ? void 0 : i.length,
        }),
      })
    }),
    ct = function (e) {
      var n,
        r = i(React.useState(1), 2),
        o = r[0],
        a = r[1],
        l = He('formily-array-table'),
        c = e.pageSize || 10,
        s = e.size || 'default',
        u = e.dataSource || [],
        d = (o - 1) * c,
        f = d + c - 1,
        m = (null == u ? void 0 : u.length) || 0,
        p = Math.ceil(m / c),
        v = Array.from(new Array(p)).map(function (e, t) {
          var n = t + 1
          return { label: n, value: n }
        }),
        h = function (e) {
          a(e)
        }
      React.useEffect(
        function () {
          p > 0 && p < o && h(p)
        },
        [p, o]
      )
      return React.createElement(
        React.Fragment,
        null,
        null === (n = e.children) || void 0 === n
          ? void 0
          : n.call(
              e,
              null == u ? void 0 : u.slice(d, f + 1),
              (function () {
                if (!(p <= 1))
                  return React.createElement(
                    'div',
                    { className: ''.concat(l, '-pagination') },
                    React.createElement(
                      Antd.Space,
                      null,
                      React.createElement(lt, {
                        value: o,
                        pageSize: c,
                        onChange: h,
                        options: v,
                        notFoundContent: !1,
                      }),
                      React.createElement(
                        Antd.Pagination,
                        t({}, e, {
                          pageSize: c,
                          current: o,
                          total: u.length,
                          size: s,
                          showSizeChanger: !1,
                          onChange: h,
                        })
                      )
                    )
                  )
              })()
            )
      )
    },
    st = function (e) {
      return React.createElement(rt, t({ index: e['data-row-key'] || 0 }, e))
    },
    ut = Formily.React.observer(function (e) {
      var n = React.useRef(),
        r = Formily.React.useField(),
        o = He('formily-array-table'),
        i = Array.isArray(r.value) ? r.value.slice() : [],
        a = (function () {
          var e = Formily.React.useField(),
            t = Formily.React.useFieldSchema(),
            n = function (t) {
              var r, o, i
              if (
                it(t) ||
                (function (e) {
                  var t
                  return (
                    (null === (t = e['x-component']) || void 0 === t
                      ? void 0
                      : t.indexOf('Operations')) > -1
                  )
                })(t) ||
                at(t)
              ) {
                if (
                  !(null === (r = t['x-component-props']) || void 0 === r
                    ? void 0
                    : r.dataIndex) &&
                  !t.name
                )
                  return []
                var a =
                    (null === (o = t['x-component-props']) || void 0 === o
                      ? void 0
                      : o.dataIndex) || t.name,
                  l = e.query(e.address.concat(a)).take(),
                  c =
                    (null === (i = null == l ? void 0 : l.component) ||
                    void 0 === i
                      ? void 0
                      : i[1]) ||
                    t['x-component-props'] ||
                    {}
                return [
                  {
                    name: a,
                    display: (null == l ? void 0 : l.display) || t['x-display'],
                    field: l,
                    schema: t,
                    columnProps: c,
                  },
                ]
              }
              if (t.properties)
                return t.reduceProperties(function (e, t) {
                  return e.concat(n(t))
                }, [])
            }
          if (!t) throw new Error('can not found schema object')
          return (function (e) {
            return e
              ? (Formily.Shared.isArr(e) ? e : [e]).reduce(function (e, t) {
                  var r = n(t)
                  return r ? e.concat(r) : e
                }, [])
              : []
          })(t.items)
        })(),
        l = (function (e, n) {
          return n.reduce(function (n, r, o) {
            var i = r.name,
              a = r.columnProps,
              l = r.schema
            return 'visible' !== r.display
              ? n
              : it(l)
              ? n.concat(
                  t(t({}, a), {
                    key: o,
                    dataIndex: i,
                    render: function (t, n) {
                      var r = e.indexOf(n)
                      return React.createElement(
                        tt.Item,
                        { index: r, record: n },
                        React.createElement(Formily.React.RecursionField, {
                          schema: l,
                          name: r,
                          onlyRenderProperties: !0,
                        })
                      )
                    },
                  })
                )
              : n
          }, [])
        })(i, a),
        c = Formily.Shared.isBool(e.pagination) ? {} : e.pagination,
        s = Formily.React.useFieldSchema().reduceProperties(function (e, t, n) {
          return at(t)
            ? React.createElement(Formily.React.RecursionField, {
                schema: t,
                name: n,
              })
            : e
        }, null),
        u = function (e) {
          return i.indexOf(e)
        }
      return React.createElement(
        ct,
        t({}, c, { dataSource: i }),
        function (i, c) {
          return React.createElement(
            'div',
            { ref: n, className: o },
            React.createElement(
              tt,
              null,
              React.createElement(
                Antd.Table,
                t({ size: 'small', bordered: !0, rowKey: u }, e, {
                  onChange: function () {},
                  pagination: !1,
                  columns: l,
                  dataSource: i,
                  components: {
                    body: {
                      wrapper: function (e) {
                        return React.createElement(
                          ot,
                          t(
                            {
                              useDragHandle: !0,
                              lockAxis: 'y',
                              helperClass: ''.concat(o, '-sort-helper'),
                              helperContainer: function () {
                                var e
                                return null === (e = n.current) || void 0 === e
                                  ? void 0
                                  : e.querySelector('tbody')
                              },
                              onSortStart: function (e) {
                                !(function (e) {
                                  var t = document.body.querySelector(
                                    '.'.concat(o, '-sort-helper')
                                  )
                                  if (t) {
                                    var n = e.querySelectorAll('td')
                                    requestAnimationFrame(function () {
                                      t.querySelectorAll('td').forEach(
                                        function (e, t) {
                                          n[t] &&
                                            (e.style.width = getComputedStyle(
                                              n[t]
                                            ).width)
                                        }
                                      )
                                    })
                                  }
                                })(e.node)
                              },
                              onSortEnd: function (e) {
                                var t = e.oldIndex,
                                  n = e.newIndex
                                r.move(t, n)
                              },
                            },
                            e
                          )
                        )
                      },
                      row: st,
                    },
                  },
                })
              ),
              React.createElement(
                'div',
                { style: { marginTop: 5, marginBottom: 5 } },
                c
              ),
              a.map(function (e, t) {
                if (it(e.schema))
                  return React.createElement(Formily.React.RecursionField, {
                    name: e.name,
                    schema: e.schema,
                    onlyRenderSelf: !0,
                    key: t,
                  })
              }),
              s
            )
          )
        }
      )
    })
  ;(ut.displayName = 'ArrayTable'),
    (ut.Column = function () {
      return React.createElement(React.Fragment, null)
    }),
    tt.mixin(ut)
  var dt = Formily.React.observer(function (e) {
      var n = Formily.React.useField(),
        r = Formily.React.useFieldSchema(),
        o = i(React.useState('tab-0'), 2),
        a = o[0],
        l = o[1],
        c = Array.isArray(n.value) ? n.value : [],
        s = (null == c ? void 0 : c.length) ? c : [{}],
        u = function (e) {
          var t = ''.concat(n.title || 'Untitled', ' ').concat(e + 1),
            r = n.address.concat(e),
            o = n.form.queryFeedbacks({
              type: 'error',
              address: ''.concat(r, '.**'),
            })
          return o.length
            ? React.createElement(
                Antd.Badge,
                { size: 'small', className: 'errors-badge', count: o.length },
                t
              )
            : t
        }
      return React.createElement(
        Antd.Tabs,
        t({}, e, {
          activeKey: a,
          onChange: function (e) {
            l(e)
          },
          type: 'editable-card',
          onEdit: function (e, t) {
            var r, o
            if ('add' == t) {
              var i = s.length
              ;(
                null === (r = null == n ? void 0 : n.value) || void 0 === r
                  ? void 0
                  : r.length
              )
                ? n.push(null)
                : n.push(null, null),
                l('tab-'.concat(i))
            } else if ('remove' == t) {
              var c =
                null === (o = e.match(/-(\d+)/)) || void 0 === o ? void 0 : o[1]
              n.remove(Number(c)), a === e && l('tab-'.concat(c - 1))
            }
          },
        }),
        null == s
          ? void 0
          : s.map(function (e, t) {
              var n = Array.isArray(r.items) ? r.items[t] : r.items,
                o = 'tab-'.concat(t)
              return React.createElement(
                Antd.Tabs.TabPane,
                { key: o, closable: 0 !== t, tab: u(t) },
                React.createElement(Formily.React.RecursionField, {
                  schema: n,
                  name: t,
                })
              )
            })
      )
    }),
    ft = function () {
      return (
        (ft =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }),
        ft.apply(this, arguments)
      )
    },
    mt = function (e) {
      return 1 === e.nodeType
    },
    pt = (function () {
      function e(e) {
        var t = this
        ;(this.childList = []),
          (this.handler = function (e) {
            e.forEach(function (e) {
              'childList' === e.type &&
                (e.addedNodes.forEach(function (e) {
                  mt(e) && t.addObserver(e)
                }),
                e.removedNodes.forEach(function (e) {
                  mt(e) && t.removeObserver(e)
                }))
            }),
              t.callback(e, t.observer)
          }),
          (this.observe = function (e, n) {
            ;(t.init = n),
              t.observeChildList(e),
              t.observer.observe(
                e,
                ft(ft({}, t.init), {
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
              ft(ft({}, this.init), {
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
    vt = function () {
      return (
        (vt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }),
        vt.apply(this, arguments)
      )
    },
    ht = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var r,
        o,
        i = n.call(e),
        a = []
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
          a.push(r.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return a
    },
    yt = function (e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, o = 0, i = t.length; o < i; o++)
          (!r && o in t) ||
            (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
      return e.concat(r || Array.prototype.slice.call(t))
    },
    gt = /span\s*(\d+)/,
    bt = function (e, t) {
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
    Rt = function (e, t) {
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
    wt = function (e) {
      var t, n
      return Number(
        null !==
          (n =
            null === (t = String(e).match(gt)) || void 0 === t
              ? void 0
              : t[1]) && void 0 !== n
          ? n
          : 1
      )
    },
    xt = function (e, t) {
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
    Et = function (e) {
      return Promise.resolve(0).then(e)
    },
    Ft = (function () {
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
                        i = !('none' === o.display),
                        a = t.getAttribute('data-grid-span'),
                        l =
                          null !== (r = wt(o.gridColumnStart)) && void 0 !== r
                            ? r
                            : 1,
                        c = {
                          index: n,
                          span: l,
                          visible: i,
                          originSpan: Number(null != a ? a : l),
                          element: t,
                        }
                      return (
                        a || t.setAttribute('data-grid-span', String(l)),
                        e.concat(c)
                      )
                    }, []))),
                    (t.childTotalColumns = bt(t.children)),
                    (t.shadowChildTotalColumns = bt(t.children, !0)),
                    (t.childOriginTotalColumns = Rt(t.children)),
                    (t.shadowChildOriginTotalColumns = Rt(t.children, !0))
                  var n,
                    r,
                    o,
                    i,
                    a,
                    l = t.container.getBoundingClientRect()
                  l.width &&
                    l.height &&
                    ((t.width = l.width), (t.height = l.height)),
                    (r = 0),
                    (o = 0),
                    (i = 0),
                    (a = 0),
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
                          0 === l && i++,
                          0 == c && a++,
                          (e.shadowRow = a),
                          (e.shadowColumn = c + 1),
                          e.visible && ((e.row = i), (e.column = l + 1)),
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
                    Et(function () {
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
                      Et(function () {
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
                o = new pt(r),
                i = new ResizeObserver(r),
                a = Formily.Reactive.reaction(function () {
                  return vt({}, t.options)
                }, r)
              return (
                i.observe(t.container),
                o.observe(t.container, {
                  attributeFilter: ['style', 'class', 'data-grid-span'],
                  attributes: !0,
                }),
                n(),
                function () {
                  i.unobserve(t.container),
                    i.disconnect(),
                    o.disconnect(),
                    a(),
                    (t.children = [])
                }
              )
            }
            return function () {}
          }),
          (this.options = vt(
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
            return null !== (e = xt(this.options.maxWidth, this)) &&
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
            return null !== (e = xt(this.options.minWidth, this)) &&
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
            return null !== (e = xt(this.options.maxColumns, this)) &&
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
            return null !== (e = xt(this.options.minColumns, this)) &&
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
            return null !== (e = xt(this.options.rowGap, this)) && void 0 !== e
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
            return null !== (e = xt(this.options.columnGap, this)) &&
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
              null === (e = xt(this.options.colWrap, this)) || void 0 === e || e
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
              i = Math.max(t, n, r),
              a = (function (e, t, n, r, o, i) {
                for (var a = [], l = n; l <= t; l++) {
                  var c = e - (l - 1) * i,
                    s = c / l
                  s >= o && s <= r
                    ? a.push(l)
                    : s < o
                    ? a.push(Math.min(Math.floor(c / o), t))
                    : s > r && a.push(Math.min(Math.floor(c / r), t))
                }
                return Math.max.apply(Math, yt([], ht(a), !1))
              })(this.width, i, o, this.maxWidth, this.minWidth, this.columnGap)
            return a >= this.maxColumns
              ? this.maxColumns
              : a <= this.minColumns
              ? this.minColumns
              : a
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
    St = function (e, t) {
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
    Ct = function (e) {
      var r = React.useRef(null),
        o = e.breakpoints
      if (!Formily.Shared.isArr(o)) return { ref: r, props: e }
      var a = i(React.useState(e), 2),
        l = a[0],
        c = a[1],
        s = function () {
          c(
            (function (e, r) {
              var o = e.clientWidth,
                i = r.breakpoints,
                a = r.layout,
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
                })(i, o)
              return t(
                {
                  layout: St(a, f),
                  labelAlign: St(l, f),
                  wrapperAlign: St(c, f),
                  labelCol: St(s, f),
                  wrapperCol: St(u, f),
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
    Ot = React.createContext(null),
    kt = React.createContext(null),
    At = function () {
      return React.useContext(Ot)
    },
    Pt = function () {
      return React.useContext(kt)
    },
    Tt = function () {
      return t(t({}, At()), Pt())
    },
    Nt = function (e) {
      var r,
        o,
        i = e.shallow,
        a = e.children,
        l = e.prefixCls,
        c = e.className,
        s = e.style,
        u = n(e, ['shallow', 'children', 'prefixCls', 'className', 'style']),
        d = Ct(u),
        f = d.ref,
        m = d.props,
        p = At(),
        v = He('form', { prefixCls: l }),
        h = He('formily-layout', { prefixCls: l }),
        y = Ue(
          h,
          (((r = {})[''.concat(v, '-').concat(m.layout)] = !0),
          (r[''.concat(v, '-rtl')] = 'rtl' === m.direction),
          (r[''.concat(v, '-').concat(m.size)] = m.size),
          r),
          c
        )
      return React.createElement(
        'div',
        { ref: f, className: y, style: s },
        ((o = t({}, p)),
        i
          ? (m.size && (o.size = m.size), m.colon && (o.colon = m.colon))
          : Object.assign(o, m),
        React.createElement(
          Ot.Provider,
          { value: o },
          React.createElement(kt.Provider, { value: i ? m : void 0 }, a)
        ))
      )
    }
  ;(Nt.defaultProps = { shallow: !0 }),
    (Nt.useFormDeepLayout = At),
    (Nt.useFormShallowLayout = Pt),
    (Nt.useFormLayout = Tt)
  var It = React.createContext(null),
    _t = function (e) {
      return Formily.Reactive.markRaw(new Ft(e))
    },
    Mt = function () {
      return React.useContext(It)
    },
    jt = function (e) {
      return void 0 === e && (e = 1), e
    },
    Dt = function (e) {
      return void 0 === e && (e = 1), e
    },
    Bt = Formily.React.observer(
      function (e) {
        var r,
          o,
          i = e.children,
          a = e.className,
          l = e.style,
          c = n(e, ['children', 'className', 'style']),
          s = Tt(),
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
                (null == u ? void 0 : u.grid) ? u.grid : new Ft(u)
              )
            },
            [Ft.id(u)]
          ),
          f = React.useRef(),
          m = He('formily-grid', c),
          p = qe(c)
        return (
          React.useLayoutEffect(
            function () {
              return d.connect(f.current)
            },
            [d]
          ),
          React.createElement(
            It.Provider,
            { value: d },
            React.createElement(
              'div',
              t({}, p, {
                className: Ue(''.concat(m, '-layout'), a),
                style: t(t({}, l), {
                  gridTemplateColumns: d.templateColumns,
                  gap: d.gap,
                }),
                ref: f,
              }),
              i
            )
          )
        )
      },
      { forwardRef: !0 }
    ),
    Wt = Formily.React.observer(function (e) {
      var r = e.gridSpan,
        o = e.children,
        i = n(e, ['gridSpan', 'children'])
      return React.createElement(
        'div',
        t({}, i, { style: i.style, 'data-grid-span': r }),
        o
      )
    })
  ;(Wt.defaultProps = { gridSpan: 1 }),
    (Bt.createFormGrid = _t),
    (Bt.useGridSpan = jt),
    (Bt.useGridColumn = Dt),
    (Bt.useFormGrid = Mt),
    (Bt.GridColumn = Wt)
  var Lt = Bt.GridColumn,
    zt = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Addition')) > -1
      )
    },
    Vt = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Index')) > -1
      )
    },
    Ht = function (e) {
      return (
        zt(e) ||
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
        })(e) ||
        (function (e) {
          var t
          return (
            (null === (t = e['x-component']) || void 0 === t
              ? void 0
              : t.indexOf('Copy')) > -1
          )
        })(e)
      )
    },
    Xt = Formily.React.observer(function (e) {
      var t,
        n = Formily.React.useForm(),
        r = Formily.React.useField(),
        o = He('formily-array-table'),
        i = n.queryFeedbacks({
          type: 'error',
          address: ''.concat(r.address, '.*'),
        }),
        a =
          null === (t = e.options) || void 0 === t
            ? void 0
            : t.map(function (t) {
                var n = t.label,
                  o = t.value,
                  a = i.some(function (t) {
                    var n = (function (e) {
                        var t
                        return Number(
                          null ===
                            (t = e
                              .slice(e.indexOf(r.address.toString()) + 1)
                              .match(/(\d+)/)) || void 0 === t
                            ? void 0
                            : t[1]
                        )
                      })(t.address),
                      i = (o - 1) * e.pageSize,
                      a = o * e.pageSize
                    return n >= i && n <= a
                  })
                return {
                  label: a
                    ? React.createElement(Antd.Badge, { dot: !0 }, n)
                    : n,
                  value: o,
                }
              }),
        l = 15 * String(null == a ? void 0 : a.length).length
      return React.createElement(Antd.Select, {
        value: e.value,
        onChange: e.onChange,
        options: a,
        virtual: !0,
        style: { width: l < 60 ? 60 : l },
        className: Ue(''.concat(o, '-status-select'), {
          'has-error': null == i ? void 0 : i.length,
        }),
      })
    }),
    Gt = function (e) {
      var n,
        r = i(React.useState(1), 2),
        o = r[0],
        a = r[1],
        l = He('formily-array-cards'),
        c = e.pageSize || 10,
        s = e.size || 'default',
        u = e.dataSource || [],
        d = (o - 1) * c,
        f = d + c - 1,
        m = (null == u ? void 0 : u.length) || 0,
        p = Math.ceil(m / c),
        v = Array.from(new Array(p)).map(function (e, t) {
          var n = t + 1
          return { label: n, value: n }
        }),
        h = function (e) {
          a(e)
        }
      React.useEffect(
        function () {
          p > 0 && p < o && h(p)
        },
        [p, o]
      )
      return React.createElement(
        React.Fragment,
        null,
        null === (n = e.children) || void 0 === n
          ? void 0
          : n.call(
              e,
              null == u ? void 0 : u.slice(d, f + 1),
              (function () {
                if (!(p <= 1))
                  return React.createElement(
                    'div',
                    { className: ''.concat(l, '-pagination') },
                    React.createElement(
                      Antd.Space,
                      null,
                      React.createElement(Xt, {
                        value: o,
                        pageSize: c,
                        onChange: h,
                        options: v,
                        notFoundContent: !1,
                      }),
                      React.createElement(
                        Antd.Pagination,
                        t({}, e, {
                          pageSize: c,
                          current: o,
                          total: u.length,
                          size: s,
                          showSizeChanger: !1,
                          onChange: h,
                        })
                      )
                    )
                  )
              })()
            )
      )
    },
    Kt = Formily.React.observer(function (e) {
      var n = Formily.React.useField(),
        r = Formily.React.useFieldSchema(),
        o = Array.isArray(n.value) ? n.value : [],
        i = Formily.Shared.isBool(e.pagination) ? {} : e.pagination,
        a = He('formily-array-cards', e)
      if (!r) throw new Error('can not found schema object')
      var l = function (e) {
        return o.indexOf(e)
      }
      return React.createElement(
        React.Fragment,
        null,
        !(null == o ? void 0 : o.length) &&
          React.createElement(
            Antd.Card,
            t({}, e, {
              onChange: function () {},
              className: Ue(''.concat(a, '-item'), e.className),
              title: e.title || n.title,
            }),
            React.createElement(Antd.Empty, null)
          ),
        React.createElement(Gt, t({}, i, { dataSource: o }), function (o, i) {
          return React.createElement(
            tt,
            null,
            React.createElement(
              Bt,
              t({}, e.grid || { maxColumns: 1 }),
              (function (o) {
                return null == o
                  ? void 0
                  : o.map(function (o) {
                      var i = l(o),
                        c = Array.isArray(r.items)
                          ? r.items[i] || r.items[0]
                          : r.items,
                        s = React.createElement(
                          'span',
                          null,
                          React.createElement(Formily.React.RecursionField, {
                            schema: c,
                            name: i,
                            filterProperties: function (e) {
                              return !!Vt(e)
                            },
                            onlyRenderProperties: !0,
                          }),
                          e.title || n.title
                        ),
                        u = React.createElement(
                          'span',
                          null,
                          React.createElement(Formily.React.RecursionField, {
                            schema: c,
                            name: i,
                            filterProperties: function (e) {
                              return !!Ht(e)
                            },
                            onlyRenderProperties: !0,
                          }),
                          e.extra
                        ),
                        d = React.createElement(Formily.React.RecursionField, {
                          schema: c,
                          name: i,
                          filterProperties: function (e) {
                            return !Vt(e) && !Ht(e)
                          },
                        })
                      return React.createElement(
                        tt.Item,
                        { key: i, index: i, record: o },
                        React.createElement(
                          Lt,
                          null,
                          React.createElement(
                            Antd.Card,
                            t({}, e, {
                              onChange: function () {},
                              className: Ue(''.concat(a, '-item'), e.className),
                              title: s,
                              extra: u,
                            }),
                            d
                          )
                        )
                      )
                    })
              })(o)
            ),
            React.createElement(
              'div',
              { style: { marginTop: 5, marginBottom: 5 } },
              i
            ),
            r.reduceProperties(function (e, t, n) {
              return zt(t)
                ? React.createElement(Formily.React.RecursionField, {
                    schema: t,
                    name: n,
                  })
                : e
            }, null)
          )
        })
      )
    })
  ;(Kt.displayName = 'ArrayCards'), tt.mixin(Kt)
  var Yt = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Addition')) > -1
      )
    },
    qt = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Index')) > -1
      )
    },
    Ut = function (e) {
      return (
        Yt(e) ||
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
    $t = function (e) {
      return Array.from({ length: e }).map(function (e, t) {
        return t
      })
    },
    Jt = function (e, t) {
      return $t(e < t ? e : t)
    },
    Qt = Formily.React.observer(function (e) {
      var n = Formily.React.useField(),
        r = Array.isArray(n.value) ? n.value : [],
        o = i(React.useState(Jt(r.length, e.defaultOpenPanelCount)), 2),
        a = o[0],
        l = o[1],
        c = Formily.React.useFieldSchema(),
        s = He('formily-array-collapse', e)
      if (
        (React.useEffect(
          function () {
            !n.modified && r.length && l(Jt(r.length, e.defaultOpenPanelCount))
          },
          [r.length, n]
        ),
        !c)
      )
        throw new Error('can not found schema object')
      return React.createElement(
        tt,
        {
          onAdd: function (e) {
            l(
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
              })(a, e)
            )
          },
        },
        (function () {
          if (!r.length)
            return React.createElement(
              Antd.Card,
              { className: Ue(''.concat(s, '-item'), e.className) },
              React.createElement(Antd.Empty, null)
            )
        })(),
        React.createElement(
          Antd.Collapse,
          t({}, e, {
            activeKey: a,
            onChange: function (e) {
              return l(Formily.Shared.toArr(e).map(Number))
            },
            className: Ue(''.concat(s, '-item'), e.className),
          }),
          r.map(function (e, r) {
            var o = Array.isArray(c.items) ? c.items[r] || c.items[0] : c.items,
              i = n
                .query(''.concat(n.address, '.').concat(r))
                .get('componentProps'),
              a = o['x-component-props'],
              l = React.createElement(
                tt.Item,
                { index: r, record: e },
                React.createElement(Formily.React.RecursionField, {
                  schema: o,
                  name: r,
                  filterProperties: function (e) {
                    return !!Ut(e)
                  },
                  onlyRenderProperties: !0,
                }),
                null == a ? void 0 : a.extra
              ),
              s = React.createElement(Formily.React.RecursionField, {
                schema: o,
                name: r,
                filterProperties: function (e) {
                  return !qt(e) && !Ut(e)
                },
              })
            return React.createElement(
              Antd.Collapse.Panel,
              t({}, a, i, {
                forceRender: !0,
                key: r,
                header: (function () {
                  var t = ''.concat(
                      (null == i ? void 0 : i.header) || a.header || n.title
                    ),
                    l = n.address.concat(r),
                    c = n.form.queryFeedbacks({
                      type: 'error',
                      address: ''.concat(l, '.**'),
                    })
                  return React.createElement(
                    tt.Item,
                    { index: r, record: e },
                    React.createElement(Formily.React.RecursionField, {
                      schema: o,
                      name: r,
                      filterProperties: function (e) {
                        return !!qt(e)
                      },
                      onlyRenderProperties: !0,
                    }),
                    c.length
                      ? React.createElement(
                          Antd.Badge,
                          {
                            size: 'small',
                            className: 'errors-badge',
                            count: c.length,
                          },
                          t
                        )
                      : t
                  )
                })(),
                extra: l,
              }),
              React.createElement(tt.Item, { index: r, key: r, record: e }, s)
            )
          })
        ),
        c.reduceProperties(function (e, t, n) {
          return Yt(t)
            ? React.createElement(Formily.React.RecursionField, {
                schema: t,
                name: n,
              })
            : e
        }, null)
      )
    }),
    Zt = function (e) {
      var t = e.children
      return React.createElement(React.Fragment, null, t)
    }
  ;(Zt.displayName = 'CollapsePanel'),
    (Qt.defaultProps = { defaultOpenPanelCount: 5 }),
    (Qt.displayName = 'ArrayCollapse'),
    (Qt.CollapsePanel = Zt),
    tt.mixin(Qt)
  var en = Le(function (e) {
      var n = He('formily-array-items')
      return React.createElement(
        'div',
        t({}, e, { className: Ue(''.concat(n, '-item'), e.className) }),
        e.children
      )
    }),
    tn = De(function (e) {
      var n = He('formily-array-items')
      return React.createElement(
        'div',
        t({}, e, { className: Ue(''.concat(n, '-list'), e.className) }),
        e.children
      )
    }),
    nn = Formily.React.observer(function (e) {
      var n = Formily.React.useField(),
        r = He('formily-array-items'),
        o = Formily.React.useFieldSchema(),
        i = Formily.React.useFieldSchema().reduceProperties(function (e, t, n) {
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
        a = Array.isArray(n.value) ? n.value : []
      if (!o) throw new Error('can not found schema object')
      return React.createElement(
        tt,
        null,
        React.createElement(
          'div',
          t({}, e, { onChange: function () {}, className: Ue(r, e.className) }),
          React.createElement(
            tn,
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
            null == a
              ? void 0
              : a.map(function (e, t) {
                  var n = Array.isArray(o.items)
                    ? o.items[t] || o.items[0]
                    : o.items
                  return React.createElement(
                    tt.Item,
                    { key: t, index: t, record: e },
                    React.createElement(
                      en,
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
          i
        )
      )
    })
  ;(nn.displayName = 'ArrayItems'),
    (nn.Item = function (e) {
      var n = He('formily-array-items')
      return React.createElement(
        'div',
        t({}, e, {
          onChange: function () {},
          className: Ue(
            ''.concat(n, '-').concat(e.type || 'card'),
            e.className
          ),
        }),
        e.children
      )
    }),
    tt.mixin(nn)
  var rn = function (e) {
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
  function on(e, n, i) {
    var a = this
    ;(Formily.Shared.isFn(n) || React.isValidElement(n)) &&
      ((i = n), (n = 'form-dialog'))
    var l = {
        host: document.createElement('div'),
        form: null,
        promise: null,
        openMiddlewares: [],
        confirmMiddlewares: [],
        cancelMiddlewares: [],
      },
      c = Ke(l.host, n),
      s = rn(e),
      u = t(t({}, s), {
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
          Formily.Shared.isFn(i) ? i(l.form) : i
        )
      }),
      f = function (e, n, i) {
        return (
          void 0 === e && (e = !0),
          React.createElement(Formily.React.Observer, null, function () {
            return React.createElement(
              Antd.Modal,
              t({}, u, {
                visible: e,
                confirmLoading: l.form.submitting,
                onCancel: function (e) {
                  var t
                  !1 !==
                    (null === (t = null == u ? void 0 : u.onCancel) ||
                    void 0 === t
                      ? void 0
                      : t.call(u, e)) && i()
                },
                onOk: function (e) {
                  return r(a, void 0, void 0, function () {
                    var t
                    return o(this, function (r) {
                      return (
                        !1 !==
                          (null === (t = null == u ? void 0 : u.onOk) ||
                          void 0 === t
                            ? void 0
                            : t.call(u, e)) && n(),
                        [2]
                      )
                    })
                  })
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
        return r(a, void 0, void 0, function () {
          var t = this
          return o(this, function (n) {
            return (
              l.promise ||
                (l.promise = new Promise(function (n, i) {
                  return r(t, void 0, void 0, function () {
                    var t,
                      a = this
                    return o(this, function (s) {
                      switch (s.label) {
                        case 0:
                          return (
                            s.trys.push([0, 2, , 3]),
                            [
                              4,
                              Ye(u.loadingText, function () {
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
                          return (t = s.sent()), i(t), [3, 3]
                        case 3:
                          return (
                            c.render(function () {
                              return f(
                                !0,
                                function () {
                                  l.form
                                    .submit(function () {
                                      return r(a, void 0, void 0, function () {
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
                                  return r(a, void 0, void 0, function () {
                                    return o(this, function (e) {
                                      switch (e.label) {
                                        case 0:
                                          return [
                                            4,
                                            Ye(u.loadingText, function () {
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
  ;(on.Footer = function (e) {
    var t = React.useRef(),
      n = i(React.useState(), 2),
      r = n[0],
      o = n[1],
      a = React.useRef(),
      l = He('modal')
    return (
      React.useLayoutEffect(function () {
        var e,
          n =
            null === (e = t.current) || void 0 === e
              ? void 0
              : e.closest('.'.concat(l, '-content'))
        n &&
          (a.current ||
            ((a.current = n.querySelector('.'.concat(l, '-footer'))),
            a.current ||
              ((a.current = document.createElement('div')),
              a.current.classList.add(''.concat(l, '-footer')),
              n.appendChild(a.current))),
          o(a.current))
      }),
      (a.current = r),
      React.createElement(
        'div',
        { ref: t, style: { display: 'none' } },
        r && ReactDOM.createPortal(e.children, r)
      )
    )
  }),
    (on.Portal = Ge('form-dialog'))
  var an = function (e) {
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
  function ln(e, n, i) {
    var a = this
    ;(Formily.Shared.isFn(n) || React.isValidElement(n)) &&
      ((i = n), (n = 'form-drawer'))
    var l = {
        host: document.createElement('div'),
        openMiddlewares: [],
        form: null,
        promise: null,
      },
      c = Ke(l.host, n),
      s = an(e),
      u = t(t({ width: '40%' }, s), {
        onClose: function (e) {
          var t
          !1 !==
            (null === (t = null == s ? void 0 : s.onClose) || void 0 === t
              ? void 0
              : t.call(s, e)) && m.close()
        },
        afterVisibleChange: function (e) {
          var t
          null === (t = null == s ? void 0 : s.afterVisibleChange) ||
            void 0 === t ||
            t.call(s, e),
            e || c.unmount()
        },
      }),
      d = Formily.React.observer(function () {
        return React.createElement(
          React.Fragment,
          null,
          Formily.Shared.isFn(i) ? i(l.form) : i
        )
      }),
      f = function (e) {
        return (
          void 0 === e && (e = !0),
          React.createElement(
            Antd.Drawer,
            t({}, u, { visible: e }),
            React.createElement(
              Formily.React.FormProvider,
              { form: l.form },
              React.createElement(d, null)
            )
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
            (l.promise = new Promise(function (n, i) {
              return r(a, void 0, void 0, function () {
                var r
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        o.trys.push([0, 2, , 3]),
                        [
                          4,
                          Ye(u.loadingText, function () {
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
                      return (r = o.sent()), i(r), [3, 3]
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
  ;(ln.Footer = function (e) {
    var t = React.useRef(),
      n = i(React.useState(), 2),
      r = n[0],
      o = n[1],
      a = React.useRef(),
      l = He('drawer')
    return (
      React.useLayoutEffect(function () {
        var e,
          n =
            null === (e = t.current) || void 0 === e
              ? void 0
              : e.closest('.'.concat(l, '-wrapper-body'))
        n &&
          (a.current ||
            ((a.current = n.querySelector('.'.concat(l, '-footer'))),
            a.current ||
              ((a.current = document.createElement('div')),
              a.current.classList.add(''.concat(l, '-footer')),
              n.appendChild(a.current))),
          o(a.current))
      }),
      (a.current = r),
      React.createElement(
        'div',
        { ref: t, style: { display: 'none' } },
        r && ReactDOM.createPortal(e.children, r)
      )
    )
  }),
    (ln.Portal = Ge('form-drawer'))
  var cn = React.createContext('N/A'),
    sn = cn.Provider,
    un = function (e) {
      var t = React.useContext(cn) || 'N/A'
      return Formily.Shared.isValid(e) && '' !== e ? e : t
    },
    dn = Formily.React.observer(function (e) {
      var t,
        n,
        r,
        o = Formily.React.useField(),
        i = He('form-text', e),
        a = (
          null === (t = null == o ? void 0 : o.dataSource) || void 0 === t
            ? void 0
            : t.length
        )
          ? o.dataSource
          : (
              null === (n = null == e ? void 0 : e.options) || void 0 === n
                ? void 0
                : n.length
            )
          ? e.options
          : [],
        l = un(),
        c = function (e) {
          var t
          return (
            (null ===
              (t =
                null == a
                  ? void 0
                  : a.find(function (t) {
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
        { className: Ue(i, e.className), style: e.style },
        (r = (function () {
          var t = e.value
          return 'multiple' === e.mode || 'tags' === e.mode
            ? e.labelInValue
              ? Formily.Shared.isArr(t)
                ? t
                : []
              : Formily.Shared.isArr(t)
              ? t.map(function (e) {
                  return { label: e, value: e }
                })
              : []
            : e.labelInValue
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
                return React.createElement(Antd.Tag, { key: t }, c(e))
              })
          : l
      )
    }),
    fn = Formily.React.observer(function (e) {
      var t,
        n,
        r,
        o = Formily.React.useField(),
        i = un(),
        a = He('form-text', e),
        l = (
          null === (t = null == o ? void 0 : o.dataSource) || void 0 === t
            ? void 0
            : t.length
        )
          ? o.dataSource
          : (
              null === (n = null == e ? void 0 : e.options) || void 0 === n
                ? void 0
                : n.length
            )
          ? e.options
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
        { className: Ue(a, e.className), style: e.style },
        (
          null ==
          (r = (function () {
            var t = e.value
            return e.multiple
              ? e.labelInValue
                ? Formily.Shared.isArr(t)
                  ? t
                  : []
                : Formily.Shared.isArr(t)
                ? t.map(function (e) {
                    return { label: e, value: e }
                  })
                : []
              : e.labelInValue
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
                Antd.Tag,
                { key: t },
                c(n, l) || r || i
              )
            })
          : React.createElement(Antd.Tag, null, i)
      )
    }),
    mn = Formily.React.observer(function (e) {
      var t,
        n,
        r,
        o = Formily.React.useField(),
        i = un(),
        a = He('form-text', e),
        l = (
          null === (t = null == o ? void 0 : o.dataSource) || void 0 === t
            ? void 0
            : t.length
        )
          ? o.dataSource
          : (
              null === (n = null == e ? void 0 : e.options) || void 0 === n
                ? void 0
                : n.length
            )
          ? e.options
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
        { className: Ue(a, e.className), style: e.style },
        (
          null == (r = Formily.Shared.isArr(e.value) ? e.value : [])
            ? void 0
            : r.length
        )
          ? r
              .map(function (e) {
                return c(e, l) || i
              })
              .join('/')
          : i
      )
    }),
    pn = function (e) {
      var t = He('form-text', e)
      return React.createElement(
        'div',
        { className: Ue(t, e.className), style: e.style },
        un(e.value)
      )
    }
  ;(pn.Input = function (e) {
    var t = He('form-text', e)
    return React.createElement(
      Antd.Space,
      { className: Ue(t, e.className), style: e.style },
      e.addonBefore,
      e.prefix,
      un(e.value),
      e.suffix,
      e.addonAfter
    )
  }),
    (pn.Select = dn),
    (pn.TreeSelect = fn),
    (pn.Cascader = mn),
    (pn.DatePicker = function (e) {
      var t,
        n = un(),
        r = He('form-text', e)
      return React.createElement(
        'div',
        { className: Ue(r, e.className) },
        ((t = Ve(e.value, e.format, n)),
        Formily.Shared.isArr(t) ? t.join('~') : t)
      )
    }),
    (pn.DateRangePicker = function (e) {
      var t,
        n = un(),
        r = He('form-text', e)
      return React.createElement(
        'div',
        { className: Ue(r, e.className), style: e.style },
        ((t = Ve(e.value, e.format, n)),
        Formily.Shared.isArr(t) ? t.join('~') : t)
      )
    }),
    (pn.TimePicker = function (e) {
      var t,
        n = un(),
        r = He('form-text', e)
      return React.createElement(
        'div',
        { className: Ue(r, e.className), style: e.style },
        ((t = Ve(e.value, e.format, n)),
        Formily.Shared.isArr(t) ? t.join('~') : t)
      )
    }),
    (pn.TimeRangePicker = function (e) {
      var t,
        n = un(),
        r = He('form-text', e)
      return React.createElement(
        'div',
        { className: Ue(r, e.className), style: e.style },
        ((t = Ve(e.value, e.format, n)),
        Formily.Shared.isArr(t) ? t.join('~') : t)
      )
    }),
    (pn.Placeholder = sn),
    (pn.usePlaceholder = un)
  var vn = pn,
    hn = function (e) {
      var r = e.form,
        o = e.component,
        i = e.onAutoSubmit,
        a = e.onAutoSubmitFailed,
        l = e.previewTextPlaceholder,
        c = n(e, [
          'form',
          'component',
          'onAutoSubmit',
          'onAutoSubmitFailed',
          'previewTextPlaceholder',
        ]),
        s = Formily.React.useForm(),
        u = function (e) {
          return React.createElement(
            vn.Placeholder,
            { value: l },
            React.createElement(
              Nt,
              t({}, c),
              React.createElement(
                o,
                {
                  onSubmit: function (t) {
                    var n, r
                    null === (n = null == t ? void 0 : t.stopPropagation) ||
                      void 0 === n ||
                      n.call(t),
                      null === (r = null == t ? void 0 : t.preventDefault) ||
                        void 0 === r ||
                        r.call(t),
                      e.submit(i).catch(a)
                  },
                },
                c.children
              )
            )
          )
        }
      if (r)
        return React.createElement(
          Formily.React.FormProvider,
          { form: r },
          u(r)
        )
      if (!s) throw new Error('must pass form instance by createForm')
      return u(s)
    }
  hn.defaultProps = { component: 'form' }
  var yn = {
      error: React.createElement(icons.CloseCircleOutlined, null),
      success: React.createElement(icons.CheckCircleOutlined, null),
      warning: React.createElement(icons.ExclamationCircleOutlined, null),
    },
    gn = function (e) {
      var r,
        o,
        a,
        l,
        c,
        s = e.children,
        u = n(e, ['children']),
        d = i(React.useState(!1), 2),
        f = d[0],
        m = d[1],
        p = (function (e) {
          var n,
            r,
            o,
            i,
            a,
            l,
            c,
            s,
            u,
            d,
            f,
            m,
            p,
            v,
            h,
            y,
            g,
            b,
            R,
            w,
            x,
            E,
            F,
            S,
            C = Tt()
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
                    (a =
                      null !== (i = e.labelAlign) && void 0 !== i
                        ? i
                        : C.labelAlign) && void 0 !== a
                  ? a
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
              null !== (v = e.wrapperWrap) && void 0 !== v ? v : C.wrapperWrap,
            fullness:
              null !== (h = e.fullness) && void 0 !== h ? h : C.fullness,
            size: null !== (y = e.size) && void 0 !== y ? y : C.size,
            inset: null !== (g = e.inset) && void 0 !== g ? g : C.inset,
            asterisk: e.asterisk,
            bordered:
              null !== (b = e.bordered) && void 0 !== b ? b : C.bordered,
            feedbackIcon: e.feedbackIcon,
            feedbackLayout:
              null !==
                (w =
                  null !== (R = e.feedbackLayout) && void 0 !== R
                    ? R
                    : C.feedbackLayout) && void 0 !== w
                ? w
                : 'loose',
            tooltipLayout:
              null !==
                (E =
                  null !== (x = e.tooltipLayout) && void 0 !== x
                    ? x
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
                : React.createElement(icons.QuestionCircleOutlined, null),
          })
        })(u),
        v = (function () {
          var e = i(React.useState(!1), 2),
            t = e[0],
            n = e[1],
            r = React.useRef(),
            o = React.useRef()
          return (
            React.useEffect(function () {
              if (r.current && o.current) {
                var e = o.current.getBoundingClientRect().width,
                  i = r.current.getBoundingClientRect().width
                e && i && i < e ? t || n(!0) : t && n(!1)
              }
            }, []),
            { overflow: t, containerRef: r, contentRef: o }
          )
        })(),
        h = v.containerRef,
        y = v.contentRef,
        g = v.overflow,
        b = p.label,
        R = p.style,
        w = p.layout,
        x = p.colon,
        E = void 0 === x || x,
        F = p.addonBefore,
        S = p.addonAfter,
        C = p.asterisk,
        O = p.feedbackStatus,
        k = p.extra,
        A = p.feedbackText,
        P = p.fullness,
        T = p.feedbackLayout,
        N = p.feedbackIcon,
        I = p.inset,
        _ = p.bordered,
        M = void 0 === _ || _,
        j = p.labelWidth,
        D = p.wrapperWidth,
        B = p.labelCol,
        W = p.wrapperCol,
        L = p.labelAlign,
        z = p.wrapperAlign,
        V = void 0 === z ? 'left' : z,
        H = p.size,
        X = p.labelWrap,
        G = p.wrapperWrap,
        K = p.tooltipLayout,
        Y = p.tooltip,
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
        (B || W) && (U.width || $.width || (J = !0))
      var Q = He('formily-item', u),
        Z =
          'popover' === T
            ? React.createElement(
                Antd.Popover,
                {
                  autoAdjustOverflow: !0,
                  placement: 'top',
                  content: React.createElement(
                    'div',
                    {
                      className: Ue(
                        ((r = {}),
                        (r[''.concat(Q, '-').concat(O, '-help')] = !!O),
                        (r[''.concat(Q, '-help')] = !0),
                        r)
                      ),
                    },
                    yn[O],
                    ' ',
                    A
                  ),
                  visible: !!A,
                },
                s
              )
            : s
      return React.createElement(
        'div',
        t({}, qe(u), {
          style: t(t({}, R), {}),
          'data-grid-span': u.gridSpan,
          className: Ue(
            ((o = {}),
            (o[''.concat(Q)] = !0),
            (o[''.concat(Q, '-layout-').concat(w)] = !0),
            (o[''.concat(Q, '-').concat(O)] = !!O),
            (o[''.concat(Q, '-feedback-has-text')] = !!A),
            (o[''.concat(Q, '-size-').concat(H)] = !!H),
            (o[''.concat(Q, '-feedback-layout-').concat(T)] = !!T),
            (o[''.concat(Q, '-fullness')] = !!P || !!I || !!N),
            (o[''.concat(Q, '-inset')] = !!I),
            (o[''.concat(Q, '-active')] = f),
            (o[''.concat(Q, '-inset-active')] = !!I && f),
            (o[''.concat(Q, '-label-align-').concat(L)] = !0),
            (o[''.concat(Q, '-control-align-').concat(V)] = !0),
            (o[''.concat(Q, '-label-wrap')] = !!X),
            (o[''.concat(Q, '-control-wrap')] = !!G),
            (o[''.concat(Q, '-bordered-none')] = !1 === M || !!I || !!N),
            (o[u.className] = !!u.className),
            o)
          ),
          onFocus: function () {
            ;(N || I) && m(!0)
          },
          onBlur: function () {
            ;(N || I) && m(!1)
          },
        }),
        (function () {
          var e, t
          return b
            ? React.createElement(
                'div',
                {
                  className: Ue(
                    ((e = {}),
                    (e[''.concat(Q, '-label')] = !0),
                    (e[''.concat(Q, '-label-tooltip')] =
                      (Y && 'text' === K) || g),
                    (e[''.concat(Q, '-item-col-').concat(B)] = J && !!B),
                    e)
                  ),
                  style: U,
                },
                ((t = React.createElement(
                  'div',
                  { className: ''.concat(Q, '-label-content'), ref: h },
                  C &&
                    React.createElement(
                      'span',
                      { className: ''.concat(Q, '-asterisk') },
                      '*'
                    ),
                  React.createElement('label', { ref: y }, b)
                )),
                ('text' === K && Y) || g
                  ? React.createElement(
                      Antd.Tooltip,
                      {
                        placement: 'top',
                        align: { offset: [0, 10] },
                        title: g
                          ? React.createElement(
                              'div',
                              null,
                              React.createElement('div', null, b),
                              React.createElement('div', null, Y)
                            )
                          : Y,
                      },
                      t
                    )
                  : t),
                (function () {
                  if (Y && 'icon' === K && !g)
                    return React.createElement(
                      'span',
                      { className: ''.concat(Q, '-label-tooltip-icon') },
                      React.createElement(
                        Antd.Tooltip,
                        {
                          placement: 'top',
                          align: { offset: [0, 2] },
                          title: Y,
                        },
                        q
                      )
                    )
                })(),
                ' ' !== b &&
                  React.createElement(
                    'span',
                    { className: ''.concat(Q, '-colon') },
                    E ? ':' : ''
                  )
              )
            : null
        })(),
        React.createElement(
          'div',
          {
            className: Ue(
              ((a = {}),
              (a[''.concat(Q, '-control')] = !0),
              (a[''.concat(Q, '-item-col-').concat(W)] = J && !!W && b),
              a)
            ),
          },
          React.createElement(
            'div',
            { className: Ue(''.concat(Q, '-control-content')) },
            F &&
              React.createElement(
                'div',
                { className: Ue(''.concat(Q, '-addon-before')) },
                F
              ),
            React.createElement(
              'div',
              {
                style: $,
                className: Ue(
                  ((l = {}),
                  (l[''.concat(Q, '-control-content-component')] = !0),
                  (l[
                    ''.concat(Q, '-control-content-component-has-feedback-icon')
                  ] = !!N),
                  l)
                ),
              },
              React.createElement(kt.Provider, { value: void 0 }, Z),
              N &&
                React.createElement(
                  'div',
                  { className: Ue(''.concat(Q, '-feedback-icon')) },
                  N
                )
            ),
            S &&
              React.createElement(
                'div',
                { className: Ue(''.concat(Q, '-addon-after')) },
                S
              )
          ),
          !!A &&
            'popover' !== T &&
            'none' !== T &&
            React.createElement(
              'div',
              {
                className: Ue(
                  ((c = {}),
                  (c[''.concat(Q, '-').concat(O, '-help')] = !!O),
                  (c[''.concat(Q, '-help')] = !0),
                  (c[''.concat(Q, '-help-enter')] = !0),
                  (c[''.concat(Q, '-help-enter-active')] = !0),
                  c)
                ),
              },
              A
            ),
          k &&
            React.createElement(
              'div',
              { className: Ue(''.concat(Q, '-extra')) },
              k
            )
        )
      )
    },
    bn = Formily.React.connect(
      gn,
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
  bn.BaseItem = gn
  var Rn = Formily.React.connect(
    Formily.React.observer(function (e) {
      var r,
        o = e.formStep,
        i = e.className,
        a = n(e, ['formStep', 'className']),
        l = Formily.React.useField(),
        c = He('formily-step', a),
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
        u = a.current || (null == o ? void 0 : o.current) || 0
      return (
        null === (r = null == o ? void 0 : o.connect) ||
          void 0 === r ||
          r.call(o, s, l),
        React.createElement(
          'div',
          { className: Ue(c, i) },
          React.createElement(
            Antd.Steps,
            t({}, a, { style: t({ marginBottom: 10 }, a.style), current: u }),
            s.map(function (e, n) {
              var r = e.props
              return React.createElement(Antd.Steps.Step, t({}, r, { key: n }))
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
  ;(Rn.StepPane = function (e) {
    var t = e.children
    return React.createElement(React.Fragment, null, t)
  }),
    (Rn.createFormStep = function (e) {
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
        i = Formily.Reactive.action.bound(function () {
          l.allowNext && (n(l.current + 1), l.setCurrent(l.current + 1))
        }),
        a = Formily.Reactive.action.bound(function () {
          l.allowBack && (n(l.current - 1), l.setCurrent(l.current - 1))
        }),
        l = Formily.Reactive.model({
          connect: function (e, n) {
            ;(t.steps = e),
              (t.form = null == n ? void 0 : n.form),
              (t.field = n)
          },
          current: e,
          setCurrent: function (e) {
            l.current = e
          },
          get allowNext() {
            return l.current < t.steps.length - 1
          },
          get allowBack() {
            return l.current > 0
          },
          next: function () {
            return r(this, void 0, void 0, function () {
              return o(this, function (e) {
                switch (e.label) {
                  case 0:
                    return e.trys.push([0, 2, , 3]), [4, t.form.validate()]
                  case 1:
                    return e.sent(), i(), [3, 3]
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
                return a(), [2]
              })
            })
          },
          submit: function (e) {
            var n, i
            return r(this, void 0, void 0, function () {
              return o(this, function (r) {
                return [
                  2,
                  null ===
                    (i =
                      null === (n = t.form) || void 0 === n
                        ? void 0
                        : n.submit) || void 0 === i
                    ? void 0
                    : i.call(n, e),
                ]
              })
            })
          },
        })
      return Formily.Reactive.markRaw(l)
    })
  var wn = function (e) {
      var t = Formily.Reactive.model({
        activeKey: e,
        setActiveKey: function (e) {
          t.activeKey = e
        },
      })
      return Formily.Reactive.markRaw(t)
    },
    xn = Formily.React.observer(function (e) {
      var r = e.formTab,
        o = n(e, ['formTab']),
        i = Formily.React.useField(),
        a = (function () {
          var e = Formily.React.useField(),
            n = Formily.React.useFieldSchema(),
            r = []
          return (
            n.mapProperties(function (n, o) {
              var i,
                a,
                l = e.query(e.address.concat(o)).take()
              'none' !== (null == l ? void 0 : l.display) &&
                'hidden' !== (null == l ? void 0 : l.display) &&
                (null === (i = n['x-component']) || void 0 === i
                  ? void 0
                  : i.indexOf('TabPane')) > -1 &&
                r.push({
                  name: o,
                  props: t(
                    {
                      key:
                        (null ===
                          (a = null == n ? void 0 : n['x-component-props']) ||
                        void 0 === a
                          ? void 0
                          : a.key) || o,
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
          return r || wn()
        }, []),
        c = He('formily-tab', o),
        s = o.activeKey || (null == l ? void 0 : l.activeKey),
        u = function (e, t) {
          var n = i.form.queryFeedbacks({
            type: 'error',
            address: ''.concat(i.address.concat(e), '.*'),
          })
          return n.length
            ? React.createElement(
                Antd.Badge,
                { size: 'small', className: 'errors-badge', count: n.length },
                t.tab
              )
            : t.tab
        }
      return React.createElement(
        Antd.Tabs,
        t({}, o, {
          className: Ue(c, o.className),
          activeKey: s,
          onChange: function (e) {
            var t, n
            null === (t = o.onChange) || void 0 === t || t.call(o, e),
              null === (n = null == r ? void 0 : r.setActiveKey) ||
                void 0 === n ||
                n.call(r, e)
          },
        }),
        a.map(function (e, n) {
          var r = e.props,
            o = e.schema,
            i = e.name
          return React.createElement(
            Antd.Tabs.TabPane,
            t({ key: n }, r, { tab: u(i, r), forceRender: !0 }),
            React.createElement(Formily.React.RecursionField, {
              schema: o,
              name: i,
            })
          )
        })
      )
    })
  ;(xn.TabPane = function (e) {
    var t = e.children
    return React.createElement(React.Fragment, null, t)
  }),
    (xn.createFormTab = wn)
  var En = function (e) {
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
            : (t.activeKeys = '')
        },
        toggleActiveKey: function (e) {
          t.hasActiveKey(e) ? t.removeActiveKey(e) : t.addActiveKey(e)
        },
      })
      return Formily.Reactive.markRaw(t)
    },
    Fn = Formily.React.observer(function (e) {
      var r = e.formCollapse,
        o = n(e, ['formCollapse']),
        i = Formily.React.useField(),
        a = (function () {
          var e = Formily.React.useField(),
            n = Formily.React.useFieldSchema(),
            r = []
          return (
            n.mapProperties(function (n, o) {
              var i,
                a,
                l = e.query(e.address.concat(o)).take()
              'none' !== (null == l ? void 0 : l.display) &&
                'hidden' !== (null == l ? void 0 : l.display) &&
                (null === (i = n['x-component']) || void 0 === i
                  ? void 0
                  : i.indexOf('CollapsePanel')) > -1 &&
                r.push({
                  name: o,
                  props: t(t({}, null == n ? void 0 : n['x-component-props']), {
                    key:
                      (null ===
                        (a = null == n ? void 0 : n['x-component-props']) ||
                      void 0 === a
                        ? void 0
                        : a.key) || o,
                  }),
                  schema: n,
                })
            }),
            r
          )
        })(),
        l = He('formily-collapse', o),
        c = React.useMemo(function () {
          return r || En()
        }, []),
        s = function (e, t) {
          var n = i.form.queryFeedbacks({
            type: 'error',
            address: ''.concat(i.address.concat(e), '.*'),
          })
          return n.length
            ? React.createElement(
                Antd.Badge,
                { size: 'small', className: 'errors-badge', count: n.length },
                t.header
              )
            : t.header
        }
      return React.createElement(
        Antd.Collapse,
        t({}, o, {
          className: Ue(l, o.className),
          activeKey: (function () {
            var e
            return o.activeKey
              ? o.activeKey
              : (null == c ? void 0 : c.activeKeys)
              ? null == c
                ? void 0
                : c.activeKeys
              : o.accordion
              ? null === (e = a[0]) || void 0 === e
                ? void 0
                : e.name
              : a.map(function (e) {
                  return e.name
                })
          })(),
          onChange: function (e) {
            var t, n
            null === (t = null == o ? void 0 : o.onChange) ||
              void 0 === t ||
              t.call(o, e),
              null === (n = null == c ? void 0 : c.setActiveKeys) ||
                void 0 === n ||
                n.call(c, e)
          },
        }),
        a.map(function (e, n) {
          var r = e.props,
            o = e.schema,
            i = e.name
          return React.createElement(
            Antd.Collapse.Panel,
            t({ key: n }, r, { header: s(i, r), forceRender: !0 }),
            React.createElement(Formily.React.RecursionField, {
              schema: o,
              name: i,
            })
          )
        })
      )
    })
  ;(Fn.CollapsePanel = function (e) {
    var t = e.children
    return React.createElement(React.Fragment, null, t)
  }),
    (Fn.createFormCollapse = En)
  var Sn = h(function (e) {
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
    Cn = v(
      h(function (e) {
        ;(e.exports = function (e, t) {
          ;(e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            Sn(e, t)
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0)
      })
    ),
    On = (function () {
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
    kn =
      'undefined' != typeof window &&
      'undefined' != typeof document &&
      window.document === document,
    An =
      'undefined' != typeof global && global.Math === Math
        ? global
        : 'undefined' != typeof self && self.Math === Math
        ? self
        : 'undefined' != typeof window && window.Math === Math
        ? window
        : Function('return this')(),
    Pn =
      'function' == typeof requestAnimationFrame
        ? requestAnimationFrame.bind(An)
        : function (e) {
            return setTimeout(function () {
              return e(Date.now())
            }, 1e3 / 60)
          }
  var Tn = [
      'top',
      'right',
      'bottom',
      'left',
      'width',
      'height',
      'size',
      'weight',
    ],
    Nn = 'undefined' != typeof MutationObserver,
    In = (function () {
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
            function i() {
              n && ((n = !1), e()), r && l()
            }
            function a() {
              Pn(i)
            }
            function l() {
              var e = Date.now()
              if (n) {
                if (e - o < 2) return
                r = !0
              } else (n = !0), (r = !1), setTimeout(a, t)
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
          kn &&
            !this.connected_ &&
            (document.addEventListener('transitionend', this.onTransitionEnd_),
            window.addEventListener('resize', this.refresh),
            Nn
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
          kn &&
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
          Tn.some(function (e) {
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
    _n = function (e, t) {
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
    Mn = function (e) {
      return (e && e.ownerDocument && e.ownerDocument.defaultView) || An
    },
    jn = Vn(0, 0, 0, 0)
  function Dn(e) {
    return parseFloat(e) || 0
  }
  function Bn(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
    return t.reduce(function (t, n) {
      return t + Dn(e['border-' + n + '-width'])
    }, 0)
  }
  function Wn(e) {
    var t = e.clientWidth,
      n = e.clientHeight
    if (!t && !n) return jn
    var r = Mn(e).getComputedStyle(e),
      o = (function (e) {
        for (
          var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left'];
          n < r.length;
          n++
        ) {
          var o = r[n],
            i = e['padding-' + o]
          t[o] = Dn(i)
        }
        return t
      })(r),
      i = o.left + o.right,
      a = o.top + o.bottom,
      l = Dn(r.width),
      c = Dn(r.height)
    if (
      ('border-box' === r.boxSizing &&
        (Math.round(l + i) !== t && (l -= Bn(r, 'left', 'right') + i),
        Math.round(c + a) !== n && (c -= Bn(r, 'top', 'bottom') + a)),
      !(function (e) {
        return e === Mn(e).document.documentElement
      })(e))
    ) {
      var s = Math.round(l + i) - t,
        u = Math.round(c + a) - n
      1 !== Math.abs(s) && (l -= s), 1 !== Math.abs(u) && (c -= u)
    }
    return Vn(o.left, o.top, l, c)
  }
  var Ln =
    'undefined' != typeof SVGGraphicsElement
      ? function (e) {
          return e instanceof Mn(e).SVGGraphicsElement
        }
      : function (e) {
          return e instanceof Mn(e).SVGElement && 'function' == typeof e.getBBox
        }
  function zn(e) {
    return kn
      ? Ln(e)
        ? (function (e) {
            var t = e.getBBox()
            return Vn(0, 0, t.width, t.height)
          })(e)
        : Wn(e)
      : jn
  }
  function Vn(e, t, n, r) {
    return { x: e, y: t, width: n, height: r }
  }
  var Hn = (function () {
      function e(e) {
        ;(this.broadcastWidth = 0),
          (this.broadcastHeight = 0),
          (this.contentRect_ = Vn(0, 0, 0, 0)),
          (this.target = e)
      }
      return (
        (e.prototype.isActive = function () {
          var e = zn(this.target)
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
    Xn = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        l,
        c,
        s =
          ((r = (n = t).x),
          (o = n.y),
          (i = n.width),
          (a = n.height),
          (l =
            'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
          (c = Object.create(l.prototype)),
          _n(c, {
            x: r,
            y: o,
            width: i,
            height: a,
            top: o,
            right: r + i,
            bottom: a + o,
            left: r,
          }),
          c)
      _n(this, { target: e, contentRect: s })
    },
    Gn = (function () {
      function e(e, t, n) {
        if (
          ((this.activeObservations_ = []),
          (this.observations_ = new On()),
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
            if (!(e instanceof Mn(e).Element))
              throw new TypeError('parameter 1 is not of type "Element".')
            var t = this.observations_
            t.has(e) ||
              (t.set(e, new Hn(e)),
              this.controller_.addObserver(this),
              this.controller_.refresh())
          }
        }),
        (e.prototype.unobserve = function (e) {
          if (!arguments.length)
            throw new TypeError('1 argument required, but only 0 present.')
          if ('undefined' != typeof Element && Element instanceof Object) {
            if (!(e instanceof Mn(e).Element))
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
                return new Xn(e.target, e.broadcastRect())
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
    Kn = 'undefined' != typeof WeakMap ? new WeakMap() : new On(),
    Yn = function e(t) {
      if (!(this instanceof e))
        throw new TypeError('Cannot call a class as a function.')
      if (!arguments.length)
        throw new TypeError('1 argument required, but only 0 present.')
      var n = In.getInstance(),
        r = new Gn(t, n, this)
      Kn.set(this, r)
    }
  ;['observe', 'unobserve', 'disconnect'].forEach(function (e) {
    Yn.prototype[e] = function () {
      var t
      return (t = Kn.get(this))[e].apply(t, arguments)
    }
  })
  var qn = void 0 !== An.ResizeObserver ? An.ResizeObserver : Yn,
    Un = null
  'undefined' != typeof CSS &&
    CSS.supports &&
    (CSS.supports('position', 'sticky')
      ? (Un = 'sticky')
      : CSS.supports('position', '-webkit-sticky') && (Un = '-webkit-sticky'))
  var $n = !1
  try {
    var Jn = Object.defineProperty({}, 'passive', {
      get: function () {
        $n = { passive: !0 }
      },
    })
    window.addEventListener('testPassive', null, Jn),
      window.removeEventListener('testPassive', null, Jn)
  } catch (e) {}
  var Qn = (function (e) {
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
          var r = new qn(t)
          r.observe(e),
            n.unsubscribes.push(function () {
              return r.disconnect()
            })
        }),
        (n.registerContainerRef = function (e) {
          Un &&
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
                n.addListener(n.scrollPane, 'scroll', n.handleScroll, $n),
                n.addListener(n.scrollPane, 'mousewheel', n.handleScroll, $n),
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
          var i = n.parentHeight
          ;(n.parentHeight = e.getBoundingClientRect().height - (r + o)),
            'relative' === n.mode &&
              (n.props.bottom
                ? n.changeMode('relative')
                : i > n.parentHeight &&
                  n.changeToStickyBottomIfBoxTooLow(n.latestScrollY)),
            i !== n.parentHeight &&
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
              i = o.offsetTop,
              a = o.offsetBottom,
              l = o.bottom
            if (n.nodeHeight + i + a <= n.viewPortHeight)
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
            var i = o - n.latestScrollY
            ;(n.offset = n.getCurrentOffset()),
              i > 0
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
    Cn(t, e)
    var n = t.prototype
    return (
      (n.changeMode = function (e) {
        var t = this.props,
          n = t.onChangeMode,
          r = t.offsetTop,
          o = t.offsetBottom,
          i = t.bottom
        if (
          (this.mode !== e && n(this.mode, e),
          (this.mode = e),
          'relative' === e)
        )
          if (((this.node.style.position = 'relative'), i)) {
            var a = Math.max(
              0,
              this.parentHeight - this.nodeHeight - this.offset
            )
            this.node.style.bottom = a + 'px'
          } else this.node.style.top = this.offset + 'px'
        else
          (this.node.style.position = Un),
            'stickyBottom' === e
              ? i
                ? (this.node.style.bottom = o + 'px')
                : (this.node.style.top =
                    this.viewPortHeight - this.nodeHeight - o + 'px')
              : i
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
  function Zn(e) {
    var t = (function () {
        var e = document.createElement('div')
        document.head.appendChild(e)
        var t = window.getComputedStyle(e).backgroundColor
        return document.head.removeChild(e), t
      })(),
      n = window.getComputedStyle(e).backgroundColor
    return n != t ? n : e.parentElement ? Zn(e.parentElement) : t
  }
  ;(Qn.defaultProps = {
    onChangeMode: function () {},
    offsetTop: 0,
    offsetBottom: 0,
  }),
    'production' !== process.env.NODE_ENV &&
      (Qn.propTypes = {
        onChangeMode: H.func,
        offsetTop: H.number,
        offsetBottom: H.number,
        bottom: H.bool,
      })
  var er = function (e) {
    var r = e.align,
      o = e.gutter,
      i = n(e, ['align', 'gutter']),
      a = He('formily-button-group')
    return React.createElement(
      Antd.Space,
      t({}, i, {
        size: o,
        className: Ue(a, i.className),
        style: t(t({}, i.style), {
          justifyContent:
            'left' === r ? 'flex-start' : 'right' === r ? 'flex-end' : 'center',
          display: 'flex',
        }),
      }),
      i.children
    )
  }
  ;(er.defaultProps = { align: 'left' }),
    (er.FormItem = function (e) {
      var r,
        o = e.gutter,
        i = n(e, ['gutter'])
      return React.createElement(
        gn,
        t({}, i, {
          label: ' ',
          style: t(t({ margin: 0, padding: 0 }, i.style), { width: '100%' }),
          colon: !1,
        }),
        (null === (r = i.children) || void 0 === r ? void 0 : r.length)
          ? React.createElement(Antd.Space, { size: o }, i.children)
          : i.children
      )
    }),
    ((er.Sticky = function (e) {
      var r = e.align,
        o = n(e, ['align']),
        a = React.useRef(),
        l = i(React.useState('transparent'), 2),
        c = l[0],
        s = l[1],
        u = He('formily-button-group')
      return (
        React.useLayoutEffect(function () {
          if (a.current) {
            var e = Zn(a.current)
            e !== c && s(e)
          }
        }),
        React.createElement(
          Qn,
          t({}, o, {
            className: Ue(''.concat(u, '-sticky'), o.className),
            style: t({ backgroundColor: c }, o.style),
            bottom: !0,
          }),
          React.createElement(
            'div',
            {
              ref: a,
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
  var tr = Formily.React.connect(
    Antd.Input,
    Formily.React.mapProps(function (e, n) {
      return t(t({}, e), {
        suffix: React.createElement(
          'span',
          null,
          (null == n ? void 0 : n.loading) ||
            (null == n ? void 0 : n.validating)
            ? React.createElement(icons.LoadingOutlined, null)
            : e.suffix
        ),
      })
    }),
    Formily.React.mapReadPretty(vn.Input)
  )
  tr.TextArea = Formily.React.connect(
    Antd.Input.TextArea,
    Formily.React.mapReadPretty(vn.Input)
  )
  var nr = function (e) {
      return e >= 48 && e <= 57
    },
    rr = function (e) {
      return e >= 97 && e <= 122
    },
    or = function (e) {
      return e >= 65 && e <= 90
    },
    ir = function (e) {
      return !(rr(e) || or(e) || nr(e))
    },
    ar = function (e) {
      return rr(e) || or(e)
    },
    lr = function (e) {
      return Formily.Shared.isFn(e.children)
        ? e.children(
            (function (e) {
              if (!e) return 0
              for (
                var t = 0,
                  n = 0,
                  r = 0,
                  o = 0,
                  i = 0,
                  a = 0,
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
                nr(f)
                  ? (t++,
                    0 !== d && d !== e.length - 1 && i++,
                    d > 0 && nr(e.charCodeAt(d - 1)) && c++)
                  : rr(f)
                  ? (n++, d > 0 && rr(e.charCodeAt(d - 1)) && c++)
                  : or(f)
                  ? (r++, d > 0 && or(e.charCodeAt(d - 1)) && c++)
                  : (o++, 0 !== d && d !== e.length - 1 && i++)
                for (var m = !1, p = 0; p < e.length; p++)
                  e[d] === e[p] &&
                    d !== p &&
                    ((m = !0), (l += Math.abs(e.length / (p - d))))
                if (m) {
                  a++
                  var v = e.length - a
                  l = v ? Math.ceil(l / v) : Math.ceil(l)
                }
                if (d > 1) {
                  var h = e.charCodeAt(d - 1),
                    y = e.charCodeAt(d - 2)
                  if (ar(f)) {
                    if (ar(h) && ar(y)) {
                      var g = e.toLowerCase(),
                        b = g.charCodeAt(d),
                        R = g.charCodeAt(d - 1)
                      b - R == R - g.charCodeAt(d - 2) &&
                        1 === Math.abs(b - R) &&
                        s++
                    }
                  } else
                    nr(f)
                      ? nr(h) &&
                        nr(y) &&
                        f - h == h - y &&
                        1 === Math.abs(f - h) &&
                        s++
                      : ir(h) &&
                        ir(y) &&
                        f - h == h - y &&
                        1 === Math.abs(f - h) &&
                        s++
                }
              }
              var w,
                x = 0,
                E = u()
              return (
                (x += 4 * E),
                n > 0 && (x += 2 * (E - n)),
                r > 0 && (x += 2 * (E - r)),
                t !== E && (x += 4 * t),
                (x += 6 * o),
                (x += 2 * i),
                (x +=
                  2 *
                  ((w = t > 0 ? 1 : 0),
                  (w += n > 0 ? 1 : 0),
                  (w += r > 0 ? 1 : 0),
                  (w += o > 0 ? 1 : 0) > 2 && u() >= 8 ? w + 1 : 0)),
                E === n + r && (x -= E),
                E === t && (x -= t),
                (x -= l),
                (x -= 2 * c),
                (x = (x = (x -= 3 * s) < 0 ? 0 : x) > 100 ? 100 : x) >= 80
                  ? 100
                  : x >= 60
                  ? 80
                  : x >= 40
                  ? 60
                  : x >= 20
                  ? 40
                  : 20
              )
            })(String(e.value))
          )
        : React.createElement(React.Fragment, null, e.children)
    },
    cr = Formily.React.connect(function (e) {
      var r = e.value,
        o = e.className,
        i = e.checkStrength,
        a = n(e, ['value', 'className', 'checkStrength']),
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
        React.createElement(Antd.Input.Password, t({}, a, { value: r })),
        i &&
          React.createElement(lr, { value: String(r) }, function (e) {
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
    }, Formily.React.mapReadPretty(vn.Input)),
    sr = Formily.React.connect(
      Antd.Cascader,
      Formily.React.mapProps({ dataSource: 'options' }, function (e, n) {
        return t(t({}, e), {
          suffixIcon:
            (null == n ? void 0 : n.loading) ||
            (null == n ? void 0 : n.validating)
              ? React.createElement(icons.LoadingOutlined, null)
              : e.suffixIcon,
        })
      }),
      Formily.React.mapReadPretty(vn.Cascader)
    ),
    ur = Formily.React.connect(
      Antd.Radio,
      Formily.React.mapProps({ value: 'checked', onInput: 'onChange' })
    )
  ;(ur.__ANT_RADIO = !0),
    (ur.Group = Formily.React.connect(
      Antd.Radio.Group,
      Formily.React.mapProps({ dataSource: 'options' }),
      Formily.React.mapReadPretty(vn.Select)
    ))
  var dr = Formily.React.connect(
    Antd.Checkbox,
    Formily.React.mapProps({ value: 'checked', onInput: 'onChange' })
  )
  ;(dr.__ANT_CHECKBOX = !0),
    (dr.Group = Formily.React.connect(
      Antd.Checkbox.Group,
      Formily.React.mapProps({ dataSource: 'options' }),
      Formily.React.mapReadPretty(vn.Select, { mode: 'tags' })
    ))
  var fr = Formily.React.connect(
      Antd.Select,
      Formily.React.mapProps(
        { dataSource: 'options', loading: !0 },
        function (e, n) {
          return t(t({}, e), {
            suffixIcon:
              (null == n ? void 0 : n.loading) ||
              (null == n ? void 0 : n.validating)
                ? React.createElement(icons.LoadingOutlined, null)
                : e.suffixIcon,
          })
        }
      ),
      Formily.React.mapReadPretty(vn.Select)
    ),
    mr = Formily.React.connect(
      Antd.TreeSelect,
      Formily.React.mapProps({ dataSource: 'treeData' }, function (e, n) {
        return t(t({}, e), {
          suffixIcon:
            (null == n ? void 0 : n.loading) ||
            (null == n ? void 0 : n.validating)
              ? React.createElement(icons.LoadingOutlined, null)
              : e.suffixIcon,
        })
      }),
      Formily.React.mapReadPretty(vn.TreeSelect)
    ),
    pr = Formily.React.connect(
      Antd.Transfer,
      Formily.React.mapProps({ value: 'targetKeys' }, function (e, n) {
        var r
        return Formily.Core.isVoidField(n)
          ? e
          : t(t({}, e), {
              dataSource:
                (null === (r = n.dataSource) || void 0 === r
                  ? void 0
                  : r.map(function (e) {
                      return t(t({}, e), {
                        title: e.title || e.label,
                        key: e.key || e.value,
                      })
                    })) || [],
            })
      })
    )
  pr.defaultProps = {
    render: function (e) {
      return e.title
    },
  }
  var vr = function () {
      return function (e) {
        var n =
            e.format ||
            (function (e) {
              return 'month' === e.picker
                ? 'YYYY-MM'
                : 'quarter' === e.picker
                ? 'YYYY-\\QQ'
                : 'year' === e.picker
                ? 'YYYY'
                : 'week' === e.picker
                ? 'gggg-wo'
                : e.showTime
                ? 'YYYY-MM-DD HH:mm:ss'
                : 'YYYY-MM-DD'
            })(e),
          r = e.onChange
        return t(t({}, e), {
          format: n,
          value: ze(e.value, 'gggg-wo' === n ? 'gggg-ww' : n),
          onChange: function (e) {
            r && r(Ve(e, n))
          },
        })
      }
    },
    hr = Formily.React.connect(
      Antd.DatePicker,
      Formily.React.mapProps(vr()),
      Formily.React.mapReadPretty(vn.DatePicker)
    )
  hr.RangePicker = Formily.React.connect(
    Antd.DatePicker.RangePicker,
    Formily.React.mapProps(vr()),
    Formily.React.mapReadPretty(vn.DateRangePicker)
  )
  var yr = function () {
      return function (e) {
        var n = e.format || 'HH:mm:ss',
          r = e.onChange
        return t(t({}, e), {
          format: n,
          value: ze(e.value, n),
          onChange: function (e) {
            r && r(Ve(e, n))
          },
        })
      }
    },
    gr = Formily.React.connect(
      Antd.TimePicker,
      Formily.React.mapProps(yr()),
      Formily.React.mapReadPretty(vn.TimePicker)
    )
  gr.RangePicker = Formily.React.connect(
    Antd.TimePicker.RangePicker,
    Formily.React.mapProps(yr()),
    Formily.React.mapReadPretty(vn.TimeRangePicker)
  )
  var br = Formily.React.connect(
      Antd.InputNumber,
      Formily.React.mapReadPretty(vn.Input)
    ),
    Rr = Formily.React.connect(
      Antd.Switch,
      Formily.React.mapProps({ value: 'checked' }, function (e) {
        var n = e.onChange
        return (
          delete e.value,
          t(t({}, e), {
            onChange: function (e) {
              null == n || n(e, null)
            },
          })
        )
      })
    ),
    wr = [
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
    xr = function (e, t) {
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
    Er = function (e, t) {
      for (var n = 0; n < wr.length; n++)
        if (wr[n].ext.test(e) && xr(wr[n].ext, t)) return wr[n].icon || e
      return e
    },
    Fr = function (e) {
      return (
        (null == e ? void 0 : e.url) ||
        (null == e ? void 0 : e.downloadURL) ||
        (null == e ? void 0 : e.imgURL)
      )
    },
    Sr = function (e) {
      return (
        (null == e ? void 0 : e.thumbUrl) ||
        (null == e ? void 0 : e.url) ||
        (null == e ? void 0 : e.downloadURL) ||
        (null == e ? void 0 : e.imgURL)
      )
    },
    Cr = function (e) {
      return (
        (null == e ? void 0 : e.errorMessage) ||
        (null == e ? void 0 : e.errMsg) ||
        (null == e ? void 0 : e.errorMsg) ||
        (null == e ? void 0 : e.message) ||
        ('string' == typeof (null == e ? void 0 : e.error) ? e.error : '')
      )
    },
    Or = function (e) {
      return !1 === (null == e ? void 0 : e.success) ||
        !0 === (null == e ? void 0 : e.failed) ||
        (null == e ? void 0 : e.error)
        ? 'error'
        : (null == e ? void 0 : e.state) || (null == e ? void 0 : e.status)
    },
    kr = function (e) {
      var t, n
      void 0 === e && (e = 'Upload Service Error'),
        (t = function (t) {
          for (var n, r, o = Formily.Shared.toArr(t), i = 0; i < o.length; i++)
            if (
              'error' ===
              (null === (n = o[i]) || void 0 === n ? void 0 : n.status)
            )
              return (
                Cr(null === (r = o[i]) || void 0 === r ? void 0 : r.response) ||
                Cr(o[i]) ||
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
  function Ar(e) {
    var r = e.serviceErrorMessage,
      o = n(e, ['serviceErrorMessage'])
    kr(r)
    return t(t({}, o), {
      onChange: function (e) {
        var n, r
        null === (n = o.onChange) ||
          void 0 === n ||
          n.call(
            o,
            (r = (function (e, t) {
              for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
                e[o] = t[n]
              return e
            })([], i(e.fileList))) && r.length
              ? r.map(function (e, n) {
                  return t(t({}, e), {
                    uid: e.uid || ''.concat(n),
                    status: Or(e.response) || Or(e),
                    url: Fr(e) || Fr(null == e ? void 0 : e.response),
                    thumbUrl: Er(Sr(e) || Sr(null == e ? void 0 : e.response), {
                      exclude: ['.png', '.jpg', '.jpeg', '.gif'],
                    }),
                  })
                })
              : []
          )
      },
    })
  }
  var Pr = Formily.React.connect(function (e) {
      return React.createElement(
        Antd.Upload,
        t({}, Ar(e)),
        e.children ||
          (function (e) {
            return 'picture-card' !== e.listType
              ? React.createElement(
                  Antd.Button,
                  null,
                  React.createElement(icons.UploadOutlined, null),
                  e.textContent
                )
              : React.createElement(icons.UploadOutlined, {
                  style: { fontSize: 20 },
                })
          })(e)
      )
    }, Formily.React.mapProps({ value: 'fileList' })),
    Tr = Formily.React.connect(function (e) {
      return React.createElement(
        'div',
        { className: He('upload-dragger') },
        React.createElement(
          Antd.Upload.Dragger,
          t({}, Ar(e)),
          e.children ||
            React.createElement(
              React.Fragment,
              null,
              React.createElement(
                'p',
                { className: 'ant-upload-drag-icon' },
                React.createElement(icons.InboxOutlined, null)
              ),
              e.textContent &&
                React.createElement(
                  'p',
                  { className: 'ant-upload-text' },
                  e.textContent
                )
            )
        )
      )
    }, Formily.React.mapProps({ value: 'fileList' }))
  Pr.Dragger = Tr
  var Nr = Formily.React.observer(
      function (e) {
        var r = e.onSubmit,
          o = e.onSubmitFailed,
          i = e.onSubmitSuccess,
          a = n(e, ['onSubmit', 'onSubmitFailed', 'onSubmitSuccess']),
          l = Formily.React.useParentForm()
        return React.createElement(
          Antd.Button,
          t({ htmlType: r ? 'button' : 'submit', type: 'primary' }, a, {
            loading: void 0 !== a.loading ? a.loading : l.submitting,
            onClick: function (e) {
              ;(a.onClick && !1 === a.onClick(e)) ||
                (r && l.submit(r).then(i).catch(o))
            },
          }),
          a.children
        )
      },
      { forwardRef: !0 }
    ),
    Ir = function () {
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
    _r = Formily.React.observer(function (e) {
      var n = i(
          (function () {
            var e = Ir(),
              t = Formily.React.useField()
            return (
              React.useLayoutEffect(
                function () {
                  if ('editable' === e) return t.setPattern('readPretty')
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
        a = Ir(),
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
        s = He(),
        u = He('formily-editable'),
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
        ;(null == t ? void 0 : t.closest('.'.concat(s, '-select-dropdown'))) ||
          (null == t ? void 0 : t.closest('.'.concat(s, '-picker-dropdown'))) ||
          (null == t ? void 0 : t.closest('.'.concat(s, '-cascader-menus'))) ||
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
            React.createElement(gn, t({}, e, l), e.children),
            (function () {
              if (!r)
                return React.createElement(
                  gn,
                  t({}, e, l),
                  'editable' === a &&
                    React.createElement(icons.EditOutlined, {
                      className: ''.concat(u, '-edit-btn'),
                    }),
                  'editable' !== a &&
                    React.createElement(icons.MessageOutlined, {
                      className: ''.concat(u, '-edit-btn'),
                    })
                )
            })(),
            (function () {
              if (r)
                return React.createElement(
                  gn,
                  t({}, e),
                  React.createElement(icons.CloseOutlined, {
                    className: ''.concat(u, '-close-btn'),
                  })
                )
            })()
          )
        )
      )
    })
  ;(_r.Popover = Formily.React.observer(function (e) {
    var n = Formily.React.useField(),
      a = Ir(),
      l = i(React.useState(!1), 2),
      c = l[0],
      s = l[1],
      u = He('formily-editable')
    return React.createElement(
      Antd.Popover,
      t({}, e, {
        title: e.title || n.title,
        visible: c,
        className: Ue(u, e.className),
        content: e.children,
        trigger: 'click',
        destroyTooltipOnHide: !0,
        onVisibleChange: function (e) {
          e
            ? s(!0)
            : r(void 0, void 0, void 0, function () {
                var e
                return o(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, , 2, 3]),
                        [4, n.form.validate(''.concat(n.address, '.*'))]
                      )
                    case 1:
                      return t.sent(), [3, 3]
                    case 2:
                      return (
                        null ==
                        (e = n.form.queryFeedbacks({
                          type: 'error',
                          address: ''.concat(n.address, '.*'),
                        }))
                          ? void 0
                          : e.length
                      )
                        ? [2]
                        : (s(!1), [7])
                    case 3:
                      return [2]
                  }
                })
              })
        },
      }),
      React.createElement(
        'div',
        null,
        React.createElement(
          gn,
          { className: ''.concat(u, '-trigger') },
          React.createElement(
            'div',
            { className: ''.concat(u, '-content') },
            React.createElement(
              'span',
              { className: ''.concat(u, '-preview') },
              e.title || n.title
            ),
            'editable' === a &&
              React.createElement(icons.EditOutlined, {
                className: ''.concat(u, '-edit-btn'),
              }),
            'editable' !== a &&
              React.createElement(icons.MessageOutlined, {
                className: ''.concat(u, '-edit-btn'),
              })
          )
        )
      )
    )
  })),
    (e.ArrayBase = tt),
    (e.ArrayCards = Kt),
    (e.ArrayCollapse = Qt),
    (e.ArrayItems = nn),
    (e.ArrayTable = ut),
    (e.ArrayTabs = dt),
    (e.BaseItem = gn),
    (e.Cascader = sr),
    (e.Checkbox = dr),
    (e.DatePicker = hr),
    (e.Editable = _r),
    (e.Form = hn),
    (e.FormButtonGroup = er),
    (e.FormCollapse = Fn),
    (e.FormDialog = on),
    (e.FormDrawer = ln),
    (e.FormGrid = Bt),
    (e.FormItem = bn),
    (e.FormLayout = Nt),
    (e.FormLayoutDeepContext = Ot),
    (e.FormLayoutShallowContext = kt),
    (e.FormStep = Rn),
    (e.FormTab = xn),
    (e.GridColumn = Wt),
    (e.Input = tr),
    (e.NumberPicker = br),
    (e.Password = cr),
    (e.PreviewText = vn),
    (e.Radio = ur),
    (e.Reset = function (e) {
      var r = e.forceClear,
        o = e.validate,
        i = e.onResetValidateSuccess,
        a = e.onResetValidateFailed,
        l = n(e, [
          'forceClear',
          'validate',
          'onResetValidateSuccess',
          'onResetValidateFailed',
        ]),
        c = Formily.React.useParentForm()
      return React.createElement(
        Antd.Button,
        t({}, l, {
          onClick: function (e) {
            ;(l.onClick && !1 === l.onClick(e)) ||
              c.reset('*', { forceClear: r, validate: o }).then(i).catch(a)
          },
        }),
        l.children
      )
    }),
    (e.Select = fr),
    (e.Space = function (e) {
      var n,
        r = Tt()
      return React.createElement(
        Antd.Space,
        t(
          {
            size:
              null !== (n = e.size) && void 0 !== n
                ? n
                : null == r
                ? void 0
                : r.spaceGap,
          },
          e
        )
      )
    }),
    (e.Submit = Nr),
    (e.Switch = Rr),
    (e.TimePicker = gr),
    (e.Transfer = pr),
    (e.TreeSelect = mr),
    (e.Upload = Pr),
    (e.createFormGrid = _t),
    (e.useFormDeepLayout = At),
    (e.useFormGrid = Mt),
    (e.useFormLayout = Tt),
    (e.useFormShallowLayout = Pt),
    (e.useGridColumn = Dt),
    (e.useGridSpan = jt),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
//# sourceMappingURL=formily.antd.umd.production.js.map
