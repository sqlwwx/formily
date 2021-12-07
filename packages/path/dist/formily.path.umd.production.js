!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define('formily.path', ['exports'], e)
    : e(
        (((t =
          'undefined' != typeof globalThis ? globalThis : t || self).Formily =
          t.Formily || {}),
        (t.Formily.Path = {}))
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
  var e = function (t, n) {
    return (
      (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        }),
      e(t, n)
    )
  }
  var n = function () {
    return (
      (n =
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var s in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s])
          return t
        }),
      n.apply(this, arguments)
    )
  }
  function r(t, e) {
    var n = 'function' == typeof Symbol && t[Symbol.iterator]
    if (!n) return t
    var r,
      s,
      i = n.call(t),
      a = []
    try {
      for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
        a.push(r.value)
    } catch (t) {
      s = { error: t }
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i)
      } finally {
        if (s) throw s.error
      }
    }
    return a
  }
  function s(t, e) {
    for (var n = 0, r = e.length, s = t.length; n < r; n++, s++) t[s] = e[n]
    return t
  }
  var i = function (t, e) {
      return n({ flag: t }, e)
    },
    a = i('[]'),
    o = i('[\\d]'),
    h = i('[[]]'),
    c = i('()'),
    p = i('{}'),
    u = i('{x}'),
    f = function (t, e) {
      return n({ flag: t }, e)
    },
    l = f('name', {
      expectNext: function (t) {
        return this.includesContext(u)
          ? t === l || t === M || t === b || t === P || t === y
          : t === g ||
              t === M ||
              t === N ||
              t === b ||
              t === I ||
              t === y ||
              t === O ||
              t === E
      },
    }),
    d = f('*', {
      expectNext: function (t) {
        return t === g || t === C || t === E || t === N || t === M || t === I
      },
    }),
    x = f('**', {
      expectNext: function (t) {
        return t === g || t === C || t === E || t === N || t === M || t === I
      },
    }),
    g = f('.', {
      expectNext: function (t) {
        return (
          t === g ||
          t === l ||
          t === k ||
          t === d ||
          t === x ||
          t === E ||
          t === m ||
          t === N
        )
      },
      expectPrev: function (t) {
        return (
          t === g ||
          t === l ||
          t === w ||
          t === d ||
          t === I ||
          t === b ||
          t === O ||
          t === P
        )
      },
    }),
    v = f('!', {
      expectNext: function (t) {
        return t === l || t === k
      },
    }),
    y = f(':', {
      expectNext: function (t) {
        return this.includesContext(u)
          ? t === l || t === m || t === E
          : t === l || t === k || t === b
      },
    }),
    m = f('{', {
      expectNext: function (t) {
        return t === l
      },
      expectPrev: function (t) {
        return this.includesContext(u)
          ? t === y || t === M || t === E
          : t === g || t === y || t === C
      },
      updateContext: function () {
        this.state.context.push(p)
      },
    }),
    P = f('}', {
      expectNext: function (t) {
        return this.includesContext(u)
          ? t === M || t === P || t === N || t === b
          : t === g || t === N || t === M
      },
      expectPrev: function (t) {
        return t === l || t === P || t === b
      },
      updateContext: function () {
        this.state.context.pop(p)
      },
    }),
    E = f('[', {
      expectNext: function (t) {
        return this.includesContext(u)
          ? t === l || t === E || t === m || t === b
          : t === l || t === k || t === y || t === E || t === A || t === b
      },
      expectPrev: function (t) {
        return this.includesContext(u)
          ? t === y || t === M || t === E
          : t === d || t === E || t === g || t === l || t === C || t == M
      },
      updateContext: function () {
        this.state.context.push(a)
      },
    }),
    b = f(']', {
      expectNext: function (t) {
        return this.includesContext(u)
          ? t === M || t === P || t === b || t === N
          : t === g || t === N || t === M || t === I || t === b
      },
      updateContext: function () {
        if (!this.includesContext(o)) {
          if (!this.includesContext(a)) throw this.unexpect()
          this.state.context.pop()
        }
      },
    }),
    k = f('[[', {
      updateContext: function () {
        this.state.context.push(h)
      },
    }),
    w = f(']]', {
      updateContext: function () {
        if (this.curContext() !== h) throw this.unexpect()
        this.state.context.pop()
      },
    }),
    C = f('(', {
      expectNext: function (t) {
        return t === l || t === k || t === m || t === v || t === E
      },
      expectPrev: function (t) {
        return t === d
      },
      updateContext: function () {
        this.state.context.push(c)
      },
    }),
    I = f(')', {
      expectNext: function (t) {
        return t === g || t === N || t === M || t === I
      },
      updateContext: function () {
        if (this.curContext() !== c) throw this.unexpect()
        this.state.context.pop()
      },
    }),
    M = f(',', {
      expectNext: function (t) {
        return t === l || t === k || t === E || t === m
      },
    }),
    A = f('ignore', {
      expectNext: function (t) {
        return t === w
      },
      expectPrev: function (t) {
        return t == k
      },
    }),
    O = f('expandTok', {
      expectNext: function (t) {
        return t === g || t === N || t === M || t === I
      },
    }),
    N = f('eof'),
    S = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    j = function (t) {
      return (
        42 === t ||
        46 === t ||
        33 === t ||
        91 === t ||
        93 === t ||
        40 === t ||
        41 === t ||
        44 === t ||
        58 === t ||
        126 === t ||
        123 === t ||
        125 === t
      )
    },
    T = function (t, e) {
      var n = new Error(t)
      return Object.assign(n, e), n
    },
    R = function (t, e, n) {
      for (var r = '', s = e; s < n; s++) {
        var i = t.charAt(s)
        '\\' !== i && (r += i)
      }
      return r
    },
    W = (function () {
      function t(t) {
        ;(this.input = t),
          (this.state = { context: [], type: null, pos: 0 }),
          (this.type_ = null)
      }
      return (
        (t.prototype.curContext = function () {
          return this.state.context[this.state.context.length - 1]
        }),
        (t.prototype.includesContext = function (t) {
          for (var e = this.state.context.length - 1; e >= 0; e--)
            if (this.state.context[e] === t) return !0
          return !1
        }),
        (t.prototype.unexpect = function (t) {
          return (
            (t = t || this.state.type),
            T(
              'Unexpect token "'
                .concat(t.flag, '" in ')
                .concat(this.state.pos, ' char.'),
              { pos: this.state.pos }
            )
          )
        }),
        (t.prototype.expectNext = function (t, e) {
          if (t && t.expectNext && e && !t.expectNext.call(this, e))
            throw T(
              'Unexpect token "'
                .concat(e.flag, '" token should not be behind "')
                .concat(t.flag, '" token.(')
                .concat(this.state.pos, 'th char)'),
              { pos: this.state.pos }
            )
        }),
        (t.prototype.expectPrev = function (t, e) {
          if (t && t.expectPrev && e && !t.expectPrev.call(this, e))
            throw T(
              'Unexpect token "'
                .concat(t.flag, '" should not be behind "')
                .concat(e.flag, '"(')
                .concat(this.state.pos, 'th char).'),
              { pos: this.state.pos }
            )
        }),
        (t.prototype.match = function (t) {
          return this.state.type === t
        }),
        (t.prototype.skipSpace = function () {
          if (this.curContext() !== h)
            t: for (; this.state.pos < this.input.length; ) {
              var t = this.input.charCodeAt(this.state.pos)
              switch (t) {
                case 32:
                case 160:
                  ++this.state.pos
                  break
                case 13:
                  10 === this.input.charCodeAt(this.state.pos + 1) &&
                    ++this.state.pos
                case 10:
                case 8232:
                case 8233:
                  ++this.state.pos
                  break
                default:
                  if (
                    !(
                      (t > 8 && t < 14) ||
                      (t >= 5760 && S.test(String.fromCharCode(t)))
                    )
                  )
                    break t
                  ++this.state.pos
              }
            }
        }),
        (t.prototype.next = function () {
          if (
            ((this.type_ = this.state.type),
            this.input.length <= this.state.pos)
          )
            return this.finishToken(N)
          this.skipSpace(),
            this.readToken(
              this.getCode(),
              this.state.pos > 0 ? this.getCode(this.state.pos - 1) : -1 / 0
            )
        }),
        (t.prototype.getCode = function (t) {
          return (
            void 0 === t && (t = this.state.pos),
            (function (t, e) {
              if (String.fromCharCode) return t.codePointAt(e)
              var n = t.charCodeAt(e)
              return n <= 55295 || n >= 57344
                ? n
                : (n << 10) + t.charCodeAt(e + 1) - 56613888
            })(this.input, t)
          )
        }),
        (t.prototype.eat = function (t) {
          return !!this.match(t) && (this.next(), !0)
        }),
        (t.prototype.readKeyWord = function () {
          for (var t = this.state.pos, e = ''; ; ) {
            var n = this.getCode(),
              r = this.getCode(this.state.pos - 1)
            if (this.input.length === this.state.pos) {
              e = R(this.input, t, this.state.pos + 1)
              break
            }
            if (j(n) && 92 !== r) {
              e = R(this.input, t, this.state.pos)
              break
            }
            if (32 === n || 160 === n || 10 === n || 8232 === n || 8233 === n) {
              e = R(this.input, t, this.state.pos)
              break
            }
            if (13 === n && 10 === this.input.charCodeAt(this.state.pos + 1)) {
              e = R(this.input, t, this.state.pos)
              break
            }
            if (
              (n > 8 && n < 14) ||
              (n >= 5760 && S.test(String.fromCharCode(n)))
            ) {
              e = R(this.input, t, this.state.pos)
              break
            }
            this.state.pos++
          }
          this.finishToken(l, e)
        }),
        (t.prototype.readIngoreString = function () {
          for (var t, e = this.state.pos, n = ''; ; ) {
            var r = this.getCode()
            if (this.state.pos >= this.input.length) break
            if ((91 !== r && 93 !== r) || 92 !== t) {
              if (93 == r && 93 === t) {
                ;(n = this.input
                  .slice(e, this.state.pos - 1)
                  .replace(/\\([\[\]])/g, '$1')),
                  this.state.pos++
                break
              }
              this.state.pos++, (t = r)
            } else this.state.pos++, (t = '')
          }
          this.finishToken(A, n), this.finishToken(w)
        }),
        (t.prototype.finishToken = function (t, e) {
          var n = this.state.type
          ;(this.state.type = t),
            void 0 !== e && (this.state.value = e),
            this.expectNext(n, t),
            this.expectPrev(t, n),
            t.updateContext && t.updateContext.call(this, n)
        }),
        (t.prototype.readToken = function (t, e) {
          if (92 === e) return this.readKeyWord()
          if (this.input.length <= this.state.pos) this.finishToken(N)
          else if (this.curContext() === h) this.readIngoreString()
          else if (123 === t) this.state.pos++, this.finishToken(m)
          else if (125 === t) this.state.pos++, this.finishToken(P)
          else if (42 === t) {
            if ((this.state.pos++, 42 === this.getCode()))
              return this.state.pos++, this.finishToken(x)
            this.finishToken(d)
          } else if (33 === t) this.state.pos++, this.finishToken(v)
          else if (46 === t) this.state.pos++, this.finishToken(g)
          else if (91 === t) {
            if ((this.state.pos++, 91 === this.getCode()))
              return this.state.pos++, this.finishToken(k)
            this.finishToken(E)
          } else
            126 === t
              ? (this.state.pos++, this.finishToken(O))
              : 93 === t
              ? (this.state.pos++, this.finishToken(b))
              : 40 === t
              ? (this.state.pos++, this.finishToken(C))
              : 41 === t
              ? (this.state.pos++, this.finishToken(I))
              : 44 === t
              ? (this.state.pos++, this.finishToken(M))
              : 58 === t
              ? (this.state.pos++, this.finishToken(y))
              : this.readKeyWord()
        }),
        t
      )
    })(),
    _ = function (t) {
      return function (e) {
        return e && e.type === t
      }
    },
    D = _('Identifier'),
    G = _('IgnoreExpression'),
    F = _('DotOperator'),
    $ = _('WildcardOperator'),
    K = _('ExpandOperator'),
    U = _('GroupExpression'),
    H = _('RangeExpression'),
    B = _('DestructorExpression'),
    V = _('ObjectPattern'),
    q = _('ArrayPattern'),
    z = Object.prototype.toString,
    J = function (t) {
      return function (e) {
        return z.call(e) === '[object '.concat(t, ']')
      }
    },
    L = J('Function'),
    Q = Array.isArray || J('Array'),
    X = J('String'),
    Y = J('Number'),
    Z = function (t) {
      return 'object' == typeof t
    },
    tt = J('RegExp'),
    et = function (t) {
      return Y(t) || /^(\d+)(\.\d+)?$/.test(t)
    },
    nt = Q,
    rt = Object.keys,
    st = Object.prototype.hasOwnProperty,
    it = function (t, e) {
      if (t === e) return !0
      if (t && e && 'object' == typeof t && 'object' == typeof e) {
        var n = nt(t),
          r = nt(e),
          s = void 0,
          i = void 0,
          a = void 0
        if (n && r) {
          if ((i = t.length) !== e.length) return !1
          for (s = i; 0 != s--; ) if (!it(t[s], e[s])) return !1
          return !0
        }
        if (n !== r) return !1
        var o = rt(t)
        if ((i = o.length) !== rt(e).length) return !1
        for (s = i; 0 != s--; ) if (!st.call(e, o[s])) return !1
        for (s = i; 0 != s--; ) if (((a = o[s]), !it(t[a], e[a]))) return !1
        return !0
      }
      return t != t && e != e
    },
    at = new Map(),
    ot = function (t) {
      return at.get(t)
    },
    ht = function (t) {
      var e = []
      if (V(t)) {
        var n = 0
        return (
          t.properties.forEach(function (t) {
            ;(e[n] = { path: [] }),
              (e[n].key = t.key.value),
              e[n].path.push(t.key.value),
              D(t.value) && (e[n].key = t.value.value)
            var r = e[n].path,
              s = ht(t.value),
              i = n
            s.forEach(function (t) {
              e[i]
                ? ((e[i].key = t.key), (e[i].path = r.concat(t.path)))
                : (e[i] = { key: t.key, path: r.concat(t.path) }),
                i++
            }),
              i > n ? (n = i) : n++
          }),
          e
        )
      }
      if (q(t)) {
        var r = 0
        return (
          t.elements.forEach(function (t, n) {
            ;(e[r] = { path: [] }),
              (e[r].key = n),
              e[r].path.push(n),
              D(t) && (e[r].key = t.value)
            var s = e[r].path,
              i = ht(t),
              a = r
            i.forEach(function (t) {
              e[a]
                ? ((e[a].key = t.key), (e[a].path = s.concat(t.path)))
                : (e[a] = { key: t.key, path: s.concat(t.path) }),
                a++
            }),
              a > r ? (r = a) : r++
          }),
          e
        )
      }
      return B(t) ? ht(t.value) : e
    },
    ct = function (t, e, n, r) {
      e.forEach(function (e) {
        var s = e.key,
          i = e.path
        r.setIn([s], t, r.getIn(i, n))
      })
    },
    pt = function (t, e, n) {
      var r = {}
      return (
        e.length && Y(e[0].path[0]) && (r = []),
        (t = null != t ? t : {}),
        e.forEach(function (e) {
          var s = e.key,
            i = e.path
          n.setIn(i, r, t[s])
        }),
        r
      )
    },
    ut = function (t, e, n) {
      e.forEach(function (e) {
        var r = e.key
        n.deleteIn([r], t)
      })
    },
    ft = function (t, e, n, r) {
      return e.every(function (e) {
        var s = e.key
        return r.existIn([s], t, n)
      })
    },
    lt = function (t, e, n) {
      if (et(t) && et(e)) {
        if ('+' === n) return String(Number(t) + Number(e))
        if ('-' === n) return String(Number(t) - Number(e))
        if ('*' === n) return String(Number(t) * Number(e))
        if ('/' === n) return String(Number(t) / Number(e))
      } else {
        if ('+' === n) return String(t) + String(e)
        if ('-' === n) return 'NaN'
        if ('*' === n) return 'NaN'
        if ('/' === n) return 'NaN'
      }
      return String(Number(e))
    },
    dt = (function (t) {
      function n(e, n) {
        var r = t.call(this, e) || this
        return (r.base = n), r
      }
      return (
        (function (t, n) {
          if ('function' != typeof n && null !== n)
            throw new TypeError(
              'Class extends value ' +
                String(n) +
                ' is not a constructor or null'
            )
          function r() {
            this.constructor = t
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()))
        })(n, t),
        (n.prototype.parse = function () {
          var t
          return (
            (this.data = { segments: [] }),
            this.eat(N) || (this.next(), (t = this.parseAtom(this.state.type))),
            (this.data.tree = t),
            t
          )
        }),
        (n.prototype.append = function (t, e) {
          t && e && (t.after = e)
        }),
        (n.prototype.parseAtom = function (t) {
          switch (t) {
            case m:
            case E:
              return this.includesContext(u)
                ? t === m
                  ? this.parseObjectPattern()
                  : this.parseArrayPattern()
                : this.parseDestructorExpression()
            case l:
              return this.parseIdentifier()
            case O:
              return this.parseExpandOperator()
            case x:
            case d:
              return this.parseWildcardOperator()
            case k:
              return this.parseIgnoreExpression()
            case g:
              return this.parseDotOperator()
          }
        }),
        (n.prototype.pushSegments = function (t) {
          this.data.segments.push(t)
        }),
        (n.prototype.parseIdentifier = function () {
          var t = { type: 'Identifier', value: this.state.value },
            e =
              !this.includesContext(u) &&
              !this.isMatchPattern &&
              !this.isWildMatchPattern
          if ((this.next(), this.includesContext(o))) {
            if (this.state.type !== b) throw this.unexpect()
            this.state.context.pop(), this.next()
          } else e && this.pushSegments(t.value)
          if (this.state.type === E) {
            if ((this.next(), this.state.type !== l)) throw this.unexpect()
            this.state.context.push(o)
            var n = !1
            ;/^\d+$/.test(this.state.value) && (n = !0)
            var r = this.state.value
            this.pushSegments(n ? Number(r) : r)
            var s = this.parseAtom(this.state.type)
            n && (s.arrayIndex = !0), this.append(t, s)
          } else this.append(t, this.parseAtom(this.state.type))
          return t
        }),
        (n.prototype.parseExpandOperator = function () {
          var t = { type: 'ExpandOperator' }
          return (
            (this.isMatchPattern = !0),
            (this.isWildMatchPattern = !0),
            (this.data.segments = []),
            this.next(),
            this.append(t, this.parseAtom(this.state.type)),
            t
          )
        }),
        (n.prototype.parseWildcardOperator = function () {
          var t = { type: 'WildcardOperator' }
          return (
            this.state.type === x && (t.optional = !0),
            (this.isMatchPattern = !0),
            (this.isWildMatchPattern = !0),
            (this.data.segments = []),
            this.next(),
            this.state.type === C
              ? (t.filter = this.parseGroupExpression(t))
              : this.state.type === E &&
                (t.filter = this.parseRangeExpression(t)),
            this.append(t, this.parseAtom(this.state.type)),
            t
          )
        }),
        (n.prototype.parseDestructorExpression = function () {
          var t = this,
            e = { type: 'DestructorExpression' }
          this.state.context.push(u)
          var n = this.state.pos - 1
          e.value =
            this.state.type === m
              ? this.parseObjectPattern()
              : this.parseArrayPattern()
          var r,
            s,
            i = this.state.pos
          return (
            this.state.context.pop(),
            (e.source = this.input
              .substring(n, i)
              .replace(
                /\[\s*([\+\-\*\/])?\s*([^,\]\s]*)\s*\]/,
                function (e, n, r) {
                  return void 0 !== t.relative
                    ? n
                      ? lt(t.relative, r || 1, n)
                      : r
                      ? lt(t.relative, r, '+')
                      : String(t.relative)
                    : e
                }
              )
              .replace(/\s*\.\s*/g, '')
              .replace(/\s*/g, '')),
            void 0 === this.relative &&
              ((r = e.source), (s = ht(e)), at.set(r, s)),
            (this.relative = void 0),
            this.pushSegments(e.source),
            this.next(),
            this.append(e, this.parseAtom(this.state.type)),
            e
          )
        }),
        (n.prototype.parseArrayPattern = function () {
          var t = { type: 'ArrayPattern', elements: [] }
          return this.next(), (t.elements = this.parseArrayPatternElements()), t
        }),
        (n.prototype.parseArrayPatternElements = function () {
          for (var t = []; this.state.type !== b && this.state.type !== N; ) {
            if (
              (t.push(this.parseAtom(this.state.type)), this.state.type === b)
            )
              return this.includesContext(u) && this.next(), t
            this.next()
          }
          return t
        }),
        (n.prototype.parseObjectPattern = function () {
          var t = { type: 'ObjectPattern', properties: [] }
          return this.next(), (t.properties = this.parseObjectProperties()), t
        }),
        (n.prototype.parseObjectProperties = function () {
          for (var t = []; this.state.type !== P && this.state.type !== N; ) {
            var e = {
              type: 'ObjectPatternProperty',
              key: this.parseAtom(this.state.type),
            }
            if (
              (t.push(e),
              this.state.type === y &&
                (this.next(), (e.value = this.parseAtom(this.state.type))),
              this.state.type === P)
            )
              return this.includesContext(u) && this.next(), t
            this.next()
          }
          return t
        }),
        (n.prototype.parseDotOperator = function () {
          var t = { type: 'DotOperator' }
          if (!this.type_ && this.base) {
            if (this.base.isMatchPattern)
              throw new Error('Base path must be an absolute path.')
            for (
              this.data.segments = this.base.toArr();
              this.state.type === g;

            )
              (this.relative = this.data.segments.pop()), this.next()
            return (function (t, e) {
              void 0 === t && (t = [])
              var n = t.length,
                r = function (s) {
                  void 0 === s && (s = 0)
                  var i = s < n - 1 ? r(s + 1) : e,
                    a = i && { type: 'DotOperator', after: i }
                  return { type: 'Identifier', value: t[s], after: a }
                }
              return r()
            })(this.data.segments.slice(), this.parseAtom(this.state.type))
          }
          return this.next(), this.append(t, this.parseAtom(this.state.type)), t
        }),
        (n.prototype.parseIgnoreExpression = function () {
          this.next()
          var t = String(this.state.value).replace(/\s*/g, ''),
            e = { type: 'IgnoreExpression', value: t }
          return (
            this.pushSegments(t),
            this.next(),
            this.append(e, this.parseAtom(this.state.type)),
            this.next(),
            e
          )
        }),
        (n.prototype.parseGroupExpression = function (t) {
          var e = { type: 'GroupExpression', value: [] }
          ;(this.isMatchPattern = !0), (this.data.segments = []), this.next()
          t: for (;;)
            switch (this.state.type) {
              case M:
                this.next()
                break
              case v:
                ;(e.isExclude = !0), (this.haveExcludePattern = !0), this.next()
                break
              case N:
              case I:
                break t
              default:
                e.value.push(this.parseAtom(this.state.type))
            }
          return this.next(), this.append(t, this.parseAtom(this.state.type)), e
        }),
        (n.prototype.parseRangeExpression = function (t) {
          var e = { type: 'RangeExpression' }
          this.next(), (this.isMatchPattern = !0), (this.data.segments = [])
          var n = !1,
            r = !1
          t: for (;;)
            switch (this.state.type) {
              case y:
                ;(r = !0), (n = !0), this.next()
                break
              case b:
                r || e.end || (e.end = e.start)
                break t
              case M:
                throw this.unexpect()
              case N:
                break t
              default:
                n
                  ? (e.end = this.parseAtom(this.state.type))
                  : (e.start = this.parseAtom(this.state.type))
            }
          return this.next(), this.append(t, this.parseAtom(this.state.type)), e
        }),
        n
      )
    })(W),
    xt = function (t) {
      return null != t && '' !== t
    },
    gt = (function () {
      function t(t, e) {
        var n = this
        ;(this.matchNext = function (t, e) {
          return t.after ? n.matchAtom(e, t.after) : xt(e[n.pos])
        }),
          (this.tree = t),
          (this.pos = 0),
          (this.excluding = !1),
          (this.record = e),
          (this.stack = [])
      }
      return (
        (t.prototype.currentElement = function (t) {
          return String(t[this.pos] || '').replace(/\s*/g, '')
        }),
        (t.prototype.recordMatch = function (t) {
          var e = this
          return function () {
            var n = t()
            return (
              n && e.record && void 0 !== e.record.score && e.record.score++, n
            )
          }
        }),
        (t.prototype.matchIdentifier = function (t, e) {
          var n,
            r = this
          if (((this.tail = e), xt(t[this.pos + 1]) && !e.after)) {
            if (!this.stack.length) return !1
            for (var s = this.stack.length - 1; s >= 0; s--)
              if (!this.stack[s].after || !this.stack[s].filter) return !1
          }
          var i = function () {
            return r.matchNext(e, t)
          }
          return (
            (n = K(e.after)
              ? this.recordMatch(function () {
                  return (
                    e.value === String(t[r.pos]).substring(0, e.value.length)
                  )
                })
              : this.recordMatch(function () {
                  return it(String(e.value), String(t[r.pos]))
                })),
            this.excluding
              ? e.after
                ? this.pos < t.length
                  ? n() && i()
                  : !(!e.after || !$(e.after.after))
                : this.pos >= t.length || n()
              : n() && i()
          )
        }),
        (t.prototype.matchIgnoreExpression = function (t, e) {
          return it(e.value, this.currentElement(t)) && this.matchNext(e, t)
        }),
        (t.prototype.matchDestructorExpression = function (t, e) {
          return it(e.source, this.currentElement(t)) && this.matchNext(e, t)
        }),
        (t.prototype.matchExpandOperator = function (t, e) {
          return this.matchAtom(t, e.after)
        }),
        (t.prototype.matchWildcardOperator = function (t, e) {
          ;(this.tail = e), this.stack.push(e)
          var n = !1
          return (
            (n = e.filter
              ? e.after
                ? this.matchAtom(t, e.filter) && this.matchAtom(t, e.after)
                : this.matchAtom(t, e.filter)
              : !!e.optional || this.matchNext(e, t)),
            this.stack.pop(),
            n
          )
        }),
        (t.prototype.matchGroupExpression = function (t, e) {
          var n = this,
            r = this.pos
          this.excluding = !!e.isExclude
          var s,
            i = this.excluding ? 'every' : 'some',
            a = ((s = e.value), Array.isArray(s) ? s : void 0 !== s ? [s] : [])[
              i
            ](function (e) {
              return (
                (n.pos = r),
                n.excluding ? !n.matchAtom(t, e) : n.matchAtom(t, e)
              )
            })
          return (this.excluding = !1), a
        }),
        (t.prototype.matchRangeExpression = function (t, e) {
          return e.start
            ? e.end
              ? t[this.pos] >= parseInt(e.start.value) &&
                t[this.pos] <= parseInt(e.end.value)
              : t[this.pos] >= parseInt(e.start.value)
            : !e.end || t[this.pos] <= parseInt(e.end.value)
        }),
        (t.prototype.matchDotOperator = function (t, e) {
          return this.pos++, this.matchNext(e, t)
        }),
        (t.prototype.matchAtom = function (t, e) {
          if (!e) {
            if (this.stack.length > 0) return !0
            if (xt(t[this.pos + 1])) return !1
            if (this.pos == t.length - 1) return !0
          }
          return D(e)
            ? this.matchIdentifier(t, e)
            : G(e)
            ? this.matchIgnoreExpression(t, e)
            : B(e)
            ? this.matchDestructorExpression(t, e)
            : K(e)
            ? this.matchExpandOperator(t, e)
            : $(e)
            ? this.matchWildcardOperator(t, e)
            : U(e)
            ? this.matchGroupExpression(t, e)
            : H(e)
            ? this.matchRangeExpression(t, e)
            : !F(e) || this.matchDotOperator(t, e)
        }),
        (t.prototype.match = function (t) {
          var e = this.matchAtom(t, this.tree)
          return this.tail
            ? this.tail == this.tree && $(this.tail)
              ? { matched: !0 }
              : { matched: e, record: this.record }
            : { matched: !1 }
        }),
        (t.matchSegments = function (t, e, n) {
          if (t.length !== e.length) return !1
          var r = function (s) {
            var i, a, o
            return (
              (i = t[s]),
              (a = e[s]),
              (o =
                (i = 'symbol' == typeof i ? i : ''.concat(i)) ===
                ('symbol' == typeof a ? a : ''.concat(a))),
              n && void 0 !== n.score && n.score++,
              o && (!(s < t.length - 1) || r(s + 1))
            )
          }
          return { matched: r(0), record: n }
        }),
        t
      )
    })(),
    vt = new Map(),
    yt = Symbol('PATH_MATCHER'),
    mt = function (t) {
      return null != t
    },
    Pt = function (t) {
      return 'object' == typeof t || 'function' == typeof t
    },
    Et = function (t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          s = ot(r)
        if (s) {
          e = pt(e, s, { setIn: bt, getIn: Et })
          break
        }
        if (!mt(e)) {
          if (n !== t.length - 1) return e
          break
        }
        e = e[r]
      }
      return e
    },
    bt = function (t, e, n) {
      for (var r = 0; r < t.length; r++) {
        var s = t[r],
          i = ot(s)
        if (i) {
          ct(e, i, n, { setIn: bt, getIn: Et })
          break
        }
        if (!mt(e) || !Pt(e)) return
        if (Q(e) && !(X((a = s)) ? /^\d+$/.test(a) : Y(a))) return
        if (!mt(e[s])) {
          if (void 0 === n) return
          r < t.length - 1 && (e[s] = Y(t[r + 1]) ? [] : {})
        }
        r === t.length - 1 && (e[s] = n), (e = e[s])
      }
      var a
    },
    kt = function (t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          s = ot(r)
        if (s) {
          ut(e, s, { setIn: bt, getIn: Et, deleteIn: kt })
          break
        }
        if (n === t.length - 1 && mt(e)) return void delete e[r]
        if (!mt(e) || !Pt(e)) return
        if (((e = e[r]), !Z(e))) return
      }
    },
    wt = Object.prototype.hasOwnProperty,
    Ct = function (t, e, n) {
      n instanceof At && (n = n.length)
      for (var r = n; r < t.length; r++) {
        var s = t[r],
          i = ot(s)
        if (i)
          return ft(e, i, n, {
            setIn: bt,
            getIn: Et,
            deleteIn: kt,
            existIn: Ct,
          })
        if (r === t.length - 1) return wt.call(e, s)
        if (!mt(e) || !Pt(e)) return !1
        if (((e = e[s]), !Z(e))) return !1
      }
    },
    It = function (t, e) {
      if (t instanceof At)
        return {
          entire: t.entire,
          segments: t.segments.slice(),
          isRegExp: !1,
          isWildMatchPattern: t.isWildMatchPattern,
          isMatchPattern: t.isMatchPattern,
          haveExcludePattern: t.haveExcludePattern,
          tree: t.tree,
        }
      if (X(t)) {
        if (!t)
          return {
            entire: '',
            segments: [],
            isRegExp: !1,
            isWildMatchPattern: !1,
            haveExcludePattern: !1,
            isMatchPattern: !1,
          }
        var n = new dt(t, At.parse(e)),
          r = n.parse()
        if (n.isMatchPattern)
          return {
            entire: t,
            segments: [],
            isRegExp: !1,
            isWildMatchPattern: n.isWildMatchPattern,
            haveExcludePattern: n.haveExcludePattern,
            isMatchPattern: !0,
            tree: r,
          }
        var s = n.data.segments
        return {
          entire: s.join('.'),
          segments: s,
          tree: r,
          isRegExp: !1,
          isWildMatchPattern: !1,
          haveExcludePattern: !1,
          isMatchPattern: !1,
        }
      }
      return L(t) && t[yt]
        ? It(t.path)
        : Q(t)
        ? {
            entire: t.join('.'),
            segments: t.reduce(function (t, e) {
              return t.concat(Mt(e))
            }, []),
            isRegExp: !1,
            isWildMatchPattern: !1,
            haveExcludePattern: !1,
            isMatchPattern: !1,
          }
        : tt(t)
        ? {
            entire: t,
            segments: [],
            isRegExp: !0,
            isWildMatchPattern: !1,
            haveExcludePattern: !1,
            isMatchPattern: !0,
          }
        : {
            entire: '',
            isRegExp: !1,
            segments: void 0 !== t ? [t] : [],
            isWildMatchPattern: !1,
            haveExcludePattern: !1,
            isMatchPattern: !1,
          }
    },
    Mt = function (t) {
      if (X(t)) {
        t = t.replace(/\s*/g, '')
        try {
          var e = It(t),
            n = e.segments
          return e.isMatchPattern ? t : n
        } catch (e) {
          return t
        }
      } else if (t instanceof At) return t.segments
      return t
    },
    At = (function () {
      function t(e, n) {
        var i = this
        ;(this.concat = function () {
          for (var e, n = [], a = 0; a < arguments.length; a++)
            n[a] = arguments[a]
          if (i.isMatchPattern || i.isRegExp)
            throw new Error(''.concat(i.entire, ' cannot be concat'))
          var o = new t('')
          return (
            (o.segments = (e = i.segments).concat.apply(
              e,
              s(
                [],
                r(
                  n.map(function (t) {
                    return Mt(t)
                  })
                )
              )
            )),
            (o.entire = o.segments.join('.')),
            o
          )
        }),
          (this.slice = function (e, n) {
            if (i.isMatchPattern || i.isRegExp)
              throw new Error(''.concat(i.entire, ' cannot be slice'))
            var r = new t('')
            return (
              (r.segments = i.segments.slice(e, n)),
              (r.entire = r.segments.join('.')),
              r
            )
          }),
          (this.push = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e]
            return i.concat.apply(i, s([], r(t)))
          }),
          (this.pop = function () {
            if (i.isMatchPattern || i.isRegExp)
              throw new Error(''.concat(i.entire, ' cannot be pop'))
            return new t(i.segments.slice(0, i.segments.length - 1))
          }),
          (this.splice = function (e, n) {
            for (var a = [], o = 2; o < arguments.length; o++)
              a[o - 2] = arguments[o]
            if (i.isMatchPattern || i.isRegExp)
              throw new Error(''.concat(i.entire, ' cannot be splice'))
            a = a.reduce(function (t, e) {
              return t.concat(Mt(e))
            }, [])
            var h = i.segments.slice()
            return h.splice.apply(h, s([e, n], r(a))), new t(h)
          }),
          (this.forEach = function (t) {
            if (i.isMatchPattern || i.isRegExp)
              throw new Error(''.concat(i.entire, ' cannot be each'))
            i.segments.forEach(t)
          }),
          (this.map = function (t) {
            if (i.isMatchPattern || i.isRegExp)
              throw new Error(''.concat(i.entire, ' cannot be map'))
            return i.segments.map(t)
          }),
          (this.reduce = function (t, e) {
            if (i.isMatchPattern || i.isRegExp)
              throw new Error(''.concat(i.entire, ' cannot be reduce'))
            return i.segments.reduce(t, e)
          }),
          (this.parent = function () {
            return i.slice(0, i.length - 1)
          }),
          (this.includes = function (e) {
            var n = t.parse(e),
              r = n.entire,
              s = n.segments,
              a = n.isMatchPattern,
              o = i.includesCache.get(r)
            if (void 0 !== o) return o
            var h = function (t) {
              return i.includesCache.set(r, t), t
            }
            if (i.isMatchPattern) {
              if (a)
                throw new Error(
                  ''.concat(i.entire, ' cannot be used to match ').concat(r)
                )
              return h(i.match(s))
            }
            if (a)
              throw new Error(
                ''.concat(i.entire, ' cannot be used to match ').concat(r)
              )
            if (s.length > i.segments.length) return h(!1)
            for (var c = 0; c < s.length; c++)
              if (!it(String(s[c]), String(i.segments[c]))) return h(!1)
            return h(!0)
          }),
          (this.transform = function (t, e) {
            if (!L(e)) return ''
            if (i.isMatchPattern)
              throw new Error(''.concat(i.entire, ' cannot be transformed'))
            var n = i.segments.reduce(function (e, n) {
              return new RegExp(t).test(n) ? e.concat(n) : e
            }, [])
            return e.apply(void 0, s([], r(n)))
          }),
          (this.match = function (e) {
            var n,
              r,
              s = t.parse(e),
              a = i.matchCache.get(s.entire)
            if (void 0 !== a)
              return (
                a.record &&
                  void 0 !== a.record.score &&
                  (i.matchScore = a.record.score),
                a.matched
              )
            var o = function (t) {
              return i.matchCache.set(s.entire, t), t
            }
            if (s.isMatchPattern) {
              if (i.isMatchPattern)
                throw new Error(
                  ''.concat(s.entire, ' cannot match ').concat(i.entire)
                )
              return (i.matchScore = 0), o(s.match(i.segments))
            }
            if (i.isMatchPattern) {
              if (i.isRegExp)
                try {
                  return null ===
                    (r =
                      null === (n = i.entire) || void 0 === n
                        ? void 0
                        : n.test) || void 0 === r
                    ? void 0
                    : r.call(n, s.entire)
                } finally {
                  i.entire.lastIndex = 0
                }
              var h = { score: 0 },
                c = o(new gt(i.tree, h).match(s.segments))
              return (i.matchScore = h.score), c.matched
            }
            ;(h = { score: 0 }),
              (c = o(gt.matchSegments(i.segments, s.segments, h)))
            return (i.matchScore = h.score), c.matched
          }),
          (this.matchAliasGroup = function (e, n) {
            var r = t.parse(e),
              s = t.parse(n),
              a = i.match(r),
              o = i.matchScore,
              h = i.match(s),
              c = i.matchScore
            return i.haveExcludePattern ? (o >= c ? a : h) : a || h
          }),
          (this.existIn = function (t, e) {
            return void 0 === e && (e = 0), Ct(i.segments, t, e)
          }),
          (this.getIn = function (t) {
            return Et(i.segments, t)
          }),
          (this.setIn = function (t, e) {
            return bt(i.segments, t, e), t
          }),
          (this.deleteIn = function (t) {
            return kt(i.segments, t), t
          }),
          (this.ensureIn = function (t, e) {
            var n = i.getIn(t)
            return void 0 === n ? (i.setIn(t, e), i.getIn(t)) : n
          })
        var a = It(e, n),
          o = a.tree,
          h = a.segments,
          c = a.entire,
          p = a.isRegExp,
          u = a.isMatchPattern,
          f = a.isWildMatchPattern,
          l = a.haveExcludePattern
        ;(this.entire = c),
          (this.segments = h),
          (this.isMatchPattern = u),
          (this.isWildMatchPattern = f),
          (this.isRegExp = p),
          (this.haveExcludePattern = l),
          (this.tree = o),
          (this.matchCache = new Map()),
          (this.includesCache = new Map())
      }
      return (
        (t.prototype.toString = function () {
          var t
          return null === (t = this.entire) || void 0 === t
            ? void 0
            : t.toString()
        }),
        (t.prototype.toArr = function () {
          var t
          return null === (t = this.segments) || void 0 === t
            ? void 0
            : t.slice()
        }),
        Object.defineProperty(t.prototype, 'length', {
          get: function () {
            return this.segments.length
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.match = function (e) {
          var n = t.parse(e),
            r = function (t) {
              return n.match(t)
            }
          return (r[yt] = !0), (r.path = n), r
        }),
        (t.isPathPattern = function (t) {
          return !!(X(t) || Q(t) || tt(t) || (L(t) && t[yt]))
        }),
        (t.transform = function (e, n, r) {
          return t.parse(e).transform(n, r)
        }),
        (t.parse = function (e, n) {
          if ((void 0 === e && (e = ''), e instanceof t))
            return vt.get(e.entire) || (vt.set(e.entire, e), e)
          if (e && e[yt]) return t.parse(e.path)
          var r = n ? t.parse(n) : '',
            s = ''.concat(e, ':').concat(r)
          return vt.get(s) || ((e = new t(e, n)), vt.set(s, e), e)
        }),
        (t.getIn = function (e, n) {
          return t.parse(n).getIn(e)
        }),
        (t.setIn = function (e, n, r) {
          return t.parse(n).setIn(e, r)
        }),
        (t.deleteIn = function (e, n) {
          return t.parse(n).deleteIn(e)
        }),
        (t.existIn = function (e, n, r) {
          return t.parse(n).existIn(e, r)
        }),
        (t.ensureIn = function (e, n, r) {
          return t.parse(n).ensureIn(e, r)
        }),
        t
      )
    })()
  ;(t.Path = At), Object.defineProperty(t, '__esModule', { value: !0 })
})
//# sourceMappingURL=formily.path.umd.production.js.map
