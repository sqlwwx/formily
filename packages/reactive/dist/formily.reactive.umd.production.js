!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define('formily.reactive', ['exports'], t)
    : t(
        (((e =
          'undefined' != typeof globalThis ? globalThis : e || self).Formily =
          e.Formily || {}),
        (e.Formily.Reactive = {}))
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
  var t = function (e) {
      return e && e instanceof Map
    },
    r = function (e) {
      return e && e instanceof Set
    },
    n = function (e) {
      return e && e instanceof WeakMap
    },
    a = function (e) {
      return e && e instanceof WeakSet
    },
    u = function (e) {
      return 'function' == typeof e
    },
    o = Array.isArray,
    i = function (e) {
      return '[object Object]' === Object.prototype.toString.call(e)
    },
    c = function (e) {
      return t(e) || n(e) || r(e) || a(e)
    },
    l = function (e) {
      return i(e) || o(e)
    },
    f = function (e) {
      return Array.isArray(e) ? e : null != e ? [e] : []
    },
    s = (function () {
      function e(e) {
        void 0 === e && (e = []), (this.batchDeleting = !1), (this.value = e)
      }
      return (
        (e.prototype.add = function (e) {
          this.has(e) || this.value.push(e)
        }),
        (e.prototype.has = function (e) {
          return this.value.indexOf(e) > -1
        }),
        (e.prototype.delete = function (e) {
          if (!this.batchDeleting) {
            var t = this.value.indexOf(e)
            t > -1 && this.value.splice(t, 1)
          }
        }),
        (e.prototype.forEach = function (e) {
          if (0 !== this.value.length)
            for (var t = 0, r = this.value.length; t < r; t++) e(this.value[t])
        }),
        (e.prototype.forEachDelete = function (e) {
          if (0 !== this.value.length) {
            this.batchDeleting = !0
            for (var t = 0; t < this.value.length; t++) {
              var r = this.value[t]
              this.value.splice(t, 1), e(r), t--
            }
            this.batchDeleting = !1
          }
        }),
        (e.prototype.clear = function () {
          this.value.length = 0
        }),
        e
      )
    })(),
    v = new WeakMap(),
    y = new WeakMap(),
    p = new WeakMap(),
    g = new WeakMap(),
    d = new WeakMap(),
    h = [],
    b = { value: 0 },
    k = { value: 0 },
    m = { value: !1 },
    O = { value: !1 },
    _ = new s(),
    w = new s(),
    P = new s(),
    j = Symbol('MakeObservableSymbol'),
    S = new s(),
    R = Symbol('iteration key'),
    E = function (e, t) {
      var r = d.get(e),
        n = []
      if (r) {
        var a = r.get(t)
        a &&
          a.forEach(function (e) {
            ;-1 === n.indexOf(e) && n.push(e)
          })
      }
      return n
    },
    V = function (e, t) {
      var r = E(e, t),
        n = k.value
      k.value = 0
      for (var a = 0, o = r.length; a < o; a++) {
        var i = r[a]
        i._isComputed
          ? i._scheduler(i)
          : F()
          ? w.add(i)
          : z()
          ? _.add(i)
          : u(i._scheduler)
          ? i._scheduler(i)
          : i()
      }
      k.value = n
    },
    x = function (e) {
      var t = e.key,
        r = e.type,
        n = e.target
      'iterate' === r && (t = R)
      var a = h[h.length - 1]
      B() ||
        (a &&
          ((O.value = !0),
          (function (e, t) {
            var r = e._reactionsSet
            r ? r.add(t) : (e._reactionsSet = new s([t]))
          })(
            a,
            (function (e, t, r) {
              var n = d.get(e)
              if (n) {
                var a = n.get(t)
                return a ? a.add(r) : n.set(t, new s([r])), n
              }
              var u = new Map([[t, new s([r])]])
              return d.set(e, u), u
            })(n, t, a)
          )))
    },
    D = function (e) {
      var t = e.key,
        r = e.type,
        n = e.target,
        a = e.oldTarget
      if (
        (A(),
        (function (e) {
          S.forEach(function (t) {
            return t(e)
          })
        })(e),
        'clear' === r
          ? a.forEach(function (e, t) {
              V(n, t)
            })
          : V(n, t),
        'add' === r || 'delete' === r || 'clear' === r)
      ) {
        var u = Array.isArray(n) ? 'length' : R
        V(n, u)
      }
      T()
    },
    M = function (e) {
      var t
      null === (t = e._reactionsSet) ||
        void 0 === t ||
        t.forEach(function (t) {
          t.forEach(function (t) {
            t.delete(e)
          })
        }),
        _.delete(e),
        w.delete(e),
        delete e._reactionsSet
    },
    q = function (e) {
      ;(e._disposed = !0),
        M(e),
        (function (e) {
          var t
          null === (t = e._computesSet) ||
            void 0 === t ||
            t.forEach(function (e) {
              0 === E(e._context, e._property).length && (q(e), (e._dirty = !0))
            })
        })(e)
    },
    A = function () {
      b.value++
    },
    T = function () {
      if ((b.value--, 0 === b.value)) {
        var e = k.value
        ;(k.value = 0), K(), Y(), (k.value = e)
      }
    },
    W = function () {
      m.value = !0
    },
    C = function () {
      var e = k.value
      ;(m.value = !1),
        (k.value = 0),
        w.forEachDelete(function (e) {
          u(e._scheduler) ? e._scheduler(e) : e()
        }),
        (k.value = e)
    },
    N = function () {
      k.value++
    },
    J = function () {
      k.value--
    },
    z = function () {
      return b.value > 0
    },
    F = function () {
      return m.value
    },
    B = function () {
      return k.value > 0
    },
    K = function () {
      _.forEachDelete(function (e) {
        u(e._scheduler) ? e._scheduler(e) : e()
      })
    },
    Y = function () {
      P.forEachDelete(function (e) {
        e()
      })
    },
    $ = function (e, t) {
      return (
        e !== t &&
        (e.length !== t.length ||
          !!e.some(function (e, r) {
            return e !== t[r]
          }))
      )
    },
    I = function () {
      return (
        (I =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var a in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
            return e
          }),
        I.apply(this, arguments)
      )
    }
  function L(e, t) {
    var r = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!r) return e
    var n,
      a,
      u = r.call(e),
      o = []
    try {
      for (; (void 0 === t || t-- > 0) && !(n = u.next()).done; )
        o.push(n.value)
    } catch (e) {
      a = { error: e }
    } finally {
      try {
        n && !n.done && (r = u.return) && r.call(u)
      } finally {
        if (a) throw a.error
      }
    }
    return o
  }
  function G(e, t) {
    for (var r = 0, n = t.length, a = e.length; r < n; r++, a++) e[a] = t[r]
    return e
  }
  var H,
    Q = Symbol('RAW_TYPE'),
    U = Symbol('OBSERVABLE_TYPE'),
    X = Object.prototype.hasOwnProperty,
    Z = function (e) {
      return v.has(e)
    },
    ee = function (e) {
      return e && !!e[j]
    },
    te = function (e) {
      return (
        null != e &&
        (!!o(e) ||
          (i(e)
            ? !e[Q] &&
              (!!e[U] ||
                ((!('$$typeof' in e) || !('_owner' in e)) &&
                  !e._isAMomentObject &&
                  !e._isJSONSchemaObject &&
                  !u(e.toJS) &&
                  !u(e.toJSON)))
            : !!(t(e) || n(e) || r(e) || a(e))))
      )
    },
    re = new Set(
      Object.getOwnPropertyNames(Symbol)
        .map(function (e) {
          return Symbol[e]
        })
        .filter(function (e) {
          return 'symbol' == typeof e
        })
    ),
    ne = Object.prototype.hasOwnProperty
  function ae(e, t, r) {
    var n = y.get(r)
    return n || (!Z(r) && te(r) ? pe(e, t, r) : r)
  }
  function ue(e, t, r, n) {
    var a = r.next
    return (
      (r.next = function () {
        var u = a.call(r),
          o = u.done,
          i = u.value
        return (
          o || (n ? (i[1] = ae(e, t, i[1])) : (i = ae(e, t, i))),
          { done: o, value: i }
        )
      }),
      r
    )
  }
  var oe =
      ((H = {
        has: function (e) {
          var t = v.get(this),
            r = Reflect.getPrototypeOf(this)
          return (
            x({ target: t, key: e, type: 'has' }), r.has.apply(t, arguments)
          )
        },
        get: function (e) {
          var t = v.get(this),
            r = Reflect.getPrototypeOf(this)
          return (
            x({ target: t, key: e, type: 'get' }),
            ae(t, e, r.get.apply(t, arguments))
          )
        },
        add: function (e) {
          var t = v.get(this),
            r = Reflect.getPrototypeOf(this),
            n = r.has.call(t, e),
            a = r.add.apply(t, arguments)
          return n || D({ target: t, key: e, value: e, type: 'add' }), a
        },
        set: function (e, t) {
          var r = v.get(this),
            n = Reflect.getPrototypeOf(this),
            a = n.has.call(r, e),
            u = n.get.call(r, e),
            o = n.set.apply(r, arguments)
          return (
            a
              ? t !== u &&
                D({ target: r, key: e, value: t, oldValue: u, type: 'set' })
              : D({ target: r, key: e, value: t, type: 'add' }),
            o
          )
        },
        delete: function (e) {
          var t = v.get(this),
            r = Reflect.getPrototypeOf(this),
            n = r.has.call(t, e),
            a = r.get ? r.get.call(t, e) : void 0,
            u = r.delete.apply(t, arguments)
          return n && D({ target: t, key: e, oldValue: a, type: 'delete' }), u
        },
        clear: function () {
          var e = v.get(this),
            t = Reflect.getPrototypeOf(this),
            r = 0 !== e.size,
            n = e instanceof Map ? new Map(e) : new Set(e),
            a = t.clear.apply(e, arguments)
          return r && D({ target: e, oldTarget: n, type: 'clear' }), a
        },
        forEach: function (e) {
          for (var t, r = [], n = 1; n < arguments.length; n++)
            r[n - 1] = arguments[n]
          var a = v.get(this),
            u = Reflect.getPrototypeOf(this)
          x({ target: a, type: 'iterate' })
          var o = function (t, r) {
            for (var n = [], u = 2; u < arguments.length; u++)
              n[u - 2] = arguments[u]
            return e.apply(void 0, G([ae(a, r, t), r], L(n)))
          }
          return (t = u.forEach).call.apply(t, G([a, o], L(r)))
        },
        keys: function () {
          var e = v.get(this),
            t = Reflect.getPrototypeOf(this)
          return x({ target: e, type: 'iterate' }), t.keys.apply(e, arguments)
        },
        values: function () {
          var e = v.get(this),
            t = Reflect.getPrototypeOf(this)
          x({ target: e, type: 'iterate' })
          var r = t.values.apply(e, arguments)
          return ue(e, '', r, !1)
        },
        entries: function () {
          var e = v.get(this),
            t = Reflect.getPrototypeOf(this)
          x({ target: e, type: 'iterate' })
          var r = t.entries.apply(e, arguments)
          return ue(e, '', r, !0)
        },
      }),
      (H[Symbol.iterator] = function () {
        var e = v.get(this),
          t = Reflect.getPrototypeOf(this)
        x({ target: e, type: 'iterate' })
        var r = t[Symbol.iterator].apply(e, arguments)
        return ue(e, '', r, e instanceof Map)
      }),
      Object.defineProperty(H, 'size', {
        get: function () {
          var e = v.get(this),
            t = Reflect.getPrototypeOf(this)
          return x({ target: e, type: 'iterate' }), Reflect.get(t, 'size', e)
        },
        enumerable: !1,
        configurable: !0,
      }),
      H),
    ie = {
      get: function (e, t, r) {
        return (e = ne.call(oe, t) ? oe : e), Reflect.get(e, t, r)
      },
    },
    ce = {
      get: function (e, t, r) {
        var n = e[t]
        if ('symbol' == typeof t && re.has(t)) return n
        x({ target: e, key: t, receiver: r, type: 'get' })
        var a = y.get(n)
        if (a) return a
        if (!Z(n) && te(n)) {
          var u = Reflect.getOwnPropertyDescriptor(e, t)
          if (!u || !1 !== u.writable || !1 !== u.configurable)
            return pe(e, t, n)
        }
        return n
      },
      has: function (e, t) {
        var r = Reflect.has(e, t)
        return x({ target: e, key: t, type: 'has' }), r
      },
      ownKeys: function (e) {
        var t = Reflect.ownKeys(e)
        return x({ target: e, type: 'iterate' }), t
      },
      set: function (e, t, r, n) {
        var a = ne.call(e, t),
          u = pe(e, t, r),
          o = e[t]
        return (
          (e[t] = u),
          a
            ? r !== o &&
              D({
                target: e,
                key: t,
                value: u,
                oldValue: o,
                receiver: n,
                type: 'set',
              })
            : D({
                target: e,
                key: t,
                value: u,
                oldValue: o,
                receiver: n,
                type: 'add',
              }),
          !0
        )
      },
      deleteProperty: function (e, t) {
        var r = e[t]
        return (
          delete e[t], D({ target: e, key: t, oldValue: r, type: 'delete' }), !0
        )
      },
    },
    le = function (e, t) {
      ;(this.key = e.key),
        (this.type = e.type),
        (this.object = e.target),
        (this.value = e.value),
        (this.oldValue = e.oldValue),
        (this.path = t.path.concat(e.key))
    },
    fe = (function () {
      function e(e, t, r) {
        ;(this.target = e), (this.key = t), (this.value = r)
      }
      return (
        Object.defineProperty(e.prototype, 'path', {
          get: function () {
            return this.parent
              ? this.parent.path.concat(this.key)
              : this.key
              ? [this.key]
              : []
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'targetRaw', {
          get: function () {
            return v.get(this.target) || this.target
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'parent', {
          get: function () {
            if (this.target) return g.get(this.targetRaw)
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.isEqual = function (e) {
          return this.key
            ? e.targetRaw === this.targetRaw && e.key === this.key
            : e.value === this.value
        }),
        (e.prototype.contains = function (e) {
          if (e === this) return !0
          for (var t = e.parent; t; ) {
            if (this.isEqual(t)) return !0
            t = t.parent
          }
          return !1
        }),
        e
      )
    })(),
    se = function (e, t, r) {
      var n = g.get(v.get(r) || r)
      if (n) return n
      g.set(r, new fe(e, t, r))
    },
    ve = function (e, t) {
      var r = new Proxy(e, ce)
      return v.set(r, e), t ? p.set(e, r) : y.set(e, r), r
    },
    ye = function (e, t) {
      var r = new Proxy(e, ie)
      return v.set(r, e), t ? p.set(e, r) : y.set(e, r), r
    },
    pe = function (e, t, r, n) {
      if ('object' != typeof r) return r
      var a = v.get(r)
      if (a) return (g.get(a).key = t), r
      if (!te(r)) return r
      if (e) {
        var u = v.get(e) || e
        if (p.get(u)) return r
      }
      return (
        se(e, t, r),
        n
          ? (function (e) {
              return l(e) ? ve(e, !0) : c(e) ? ye(e, !0) : e
            })(r)
          : l(r)
          ? ve(r)
          : c(r)
          ? ye(r)
          : r
      )
    },
    ge = function (e) {
      var t = function (t) {
        return e({ value: t })
      }
      return u(e) && (t[j] = e), t
    },
    de = function (e) {
      if (e[j]) return e[j][j] ? de(e[j]) : e[j]
    },
    he = function (e, t) {
      function r(r) {
        var n
        try {
          e(), u(r) && (n = r())
        } finally {
          t()
        }
        return n
      }
      return (r.bound = be(r)), r
    },
    be = function (e) {
      return function (t, r) {
        return function () {
          for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a]
          return e(function () {
            return t.apply(r, n)
          })
        }
      }
    },
    ke = function (e, t) {
      var r = he(e, t),
        n = ge(function (e) {
          var t = e.target,
            n = e.key
          return (t[n] = r.bound(t[n], t)), t
        })
      return (r[j] = n), (r.bound[j] = n), r
    },
    me = ke(A, T)
  ;(me.scope = ke(W, C)),
    (me.endpoint = function (e) {
      u(e) && (0 === b.value ? e() : P.add(e))
    })
  var Oe = ke(
    function () {
      A(), N()
    },
    function () {
      J(), T()
    }
  )
  Oe.scope = ke(
    function () {
      W(), N()
    },
    function () {
      J(), C()
    }
  )
  var _e = he(N, J),
    we = ge(function (e) {
      var t = e.target,
        r = e.key,
        n = e.value,
        a = { value: pe(t, r, t ? t[r] : n) }
      return t
        ? (Object.defineProperty(t, r, {
            set: function (e) {
              var n = a.value
              ;(e = pe(t, r, e)),
                (a.value = e),
                n !== e &&
                  D({ target: t, key: r, type: 'set', oldValue: n, value: e })
            },
            get: function () {
              return x({ target: t, key: r, type: 'get' }), a.value
            },
            enumerable: !0,
            configurable: !1,
          }),
          t)
        : a.value
    }),
    Pe = ge(function (e) {
      var t = e.target,
        r = e.key,
        n = e.value,
        a = { value: t ? t[r] : n },
        u = {
          set: function (e) {
            var t = a.value
            ;(a.value = e),
              t !== e &&
                D({ target: a, key: r, type: 'set', oldValue: t, value: e })
          },
          get: function () {
            return x({ target: a, key: r, type: 'get' }), a.value
          },
        }
      return (
        v.set(u, a),
        y.set(a, u),
        se(t, r, a),
        t
          ? (Object.defineProperty(t, r, {
              value: u,
              enumerable: !0,
              configurable: !1,
              writable: !1,
            }),
            t)
          : u
      )
    }),
    je = ge(function (e) {
      var t = e.target,
        r = e.key,
        n = e.value,
        a = { value: t ? t[r] : n },
        u = {},
        o = t || a,
        i = t ? r : 'value'
      function c() {
        return x({ target: o, key: i, type: 'get' }), a.value
      }
      function l(e) {
        var t = a.value
        ;(a.value = e),
          t !== e &&
            D({ target: o, key: i, type: 'set', oldValue: t, value: e })
      }
      return (
        se(t, r, a),
        v.set(u, a),
        y.set(a, u),
        t
          ? (Object.defineProperty(t, r, {
              get: c,
              set: l,
              enumerable: !0,
              configurable: !1,
            }),
            t)
          : (Object.defineProperty(u, 'value', { set: l, get: c }), u)
      )
    }),
    Se = ge(function (e) {
      var t = e.target,
        r = e.key,
        n = e.value,
        a = { value: pe(t, r, t ? t[r] : n, !0) }
      return t
        ? (Object.defineProperty(t, r, {
            set: function (e) {
              var n = a.value
              ;(e = pe(t, r, e, !0)),
                (a.value = e),
                n !== e &&
                  D({ target: t, key: r, type: 'set', oldValue: n, value: e })
            },
            get: function () {
              return x({ target: t, key: r, type: 'get' }), a.value
            },
            enumerable: !0,
            configurable: !1,
          }),
          t)
        : a.value
    }),
    Re = ge(function (e) {
      var t = e.target,
        r = e.key,
        n = e.value,
        a = {},
        o = {},
        i = t || a,
        c = t ? r : 'value',
        l = (function e(t) {
          if (!t) return n && n.get ? n.get : n
          var r = Object.getOwnPropertyDescriptor(t, c)
          return r && r.get ? r.get : e(Object.getPrototypeOf(t))
        })(i),
        f = (function e(t) {
          if (!t) return n && n.set ? n.set : void 0
          var r = Object.getOwnPropertyDescriptor(t, c)
          return r && r.set ? r.set : e(Object.getPrototypeOf(t))
        })(i)
      function p() {
        var e
        a.value =
          null === (e = null == l ? void 0 : l.call) || void 0 === e
            ? void 0
            : e.call(l, i)
      }
      function g() {
        if (-1 === h.indexOf(g)) {
          M(g)
          try {
            h.push(g), p()
          } finally {
            h.pop()
          }
        }
      }
      function d() {
        return (
          h.length > 0 &&
            (function (e) {
              if (u(e)) {
                var t = h[h.length - 1]
                if (t) {
                  var r = t._computesSet
                  r ? r.add(e) : (t._computesSet = new s([e]))
                }
              }
            })(g),
          B() ? p() : g._dirty && (g(), (g._dirty = !1)),
          x({ target: i, key: c, type: 'get' }),
          a.value
        )
      }
      function b(e) {
        var t
        try {
          A(),
            null === (t = null == f ? void 0 : f.call) ||
              void 0 === t ||
              t.call(f, i, e)
        } finally {
          T()
        }
      }
      return (
        (g._name = 'ComputedReaction'),
        (g._scheduler = function () {
          ;(g._dirty = !0),
            D({ target: i, key: c, value: a.value, type: 'set' })
        }),
        (g._isComputed = !0),
        (g._dirty = !0),
        (g._context = i),
        (g._property = c),
        v.set(o, a),
        y.set(a, o),
        se(t, r, a),
        t
          ? (Object.defineProperty(t, r, {
              get: d,
              set: b,
              enumerable: !0,
              configurable: !1,
            }),
            t)
          : (Object.defineProperty(o, 'value', { set: b, get: d }), o)
      )
    })
  function Ee(e) {
    return pe(null, null, e)
  }
  function Ve(e, t) {
    if (Z(e)) return e
    if (!te(e)) return e
    for (var r in (se(void 0, void 0, e), v.set(e, e), y.set(e, e), t)) {
      var n = t[r]
      ee(n) && de(n)({ target: e, key: r })
    }
    return e
  }
  ;(Ee.box = Pe),
    (Ee.ref = je),
    (Ee.deep = we),
    (Ee.shallow = Se),
    (Ee.computed = Re),
    (Ee[j] = we)
  var xe = function (e, t) {
    void 0 === t && (t = 'AutoRun')
    var r = function () {
        if (u(e) && !(r._boundary > 0) && -1 === h.indexOf(r)) {
          M(r)
          try {
            A(), h.push(r), e()
          } finally {
            h.pop(),
              r._boundary++,
              T(),
              (r._boundary = 0),
              (r._memos.cursor = 0),
              (r._effects.cursor = 0)
          }
        }
      },
      n = function () {
        ;(r._memos = { queue: [], cursor: 0 }),
          (r._effects = { queue: [], cursor: 0 })
      }
    return (
      (r._boundary = 0),
      (r._name = t),
      n(),
      r(),
      function () {
        q(r),
          (function (e) {
            if (e._effects)
              try {
                A(),
                  e._effects.queue.forEach(function (e) {
                    e && e.dispose && e.dispose()
                  })
              } finally {
                T()
              }
          })(r),
          n()
      }
    )
  }
  ;(xe.memo = function (e, t) {
    if (u(e)) {
      var r = h[h.length - 1]
      if (!r || !r._memos)
        throw new Error('autorun.memo must used in autorun function body.')
      var n = f(t || []),
        a = r._memos.cursor++,
        o = r._memos.queue[a]
      if (!o || $(n, o.deps)) {
        var i = e()
        return (r._memos.queue[a] = { value: i, deps: n }), i
      }
      return o.value
    }
  }),
    (xe.effect = function (e, t) {
      if (u(e)) {
        var r = h[h.length - 1]
        if (!r || !r._effects)
          throw new Error('autorun.effect must used in autorun function body.')
        var n = r._effects,
          a = f(t || [{}]),
          o = n.cursor++,
          i = n.queue[o]
        ;(i && !$(a, i.deps)) ||
          (Promise.resolve(0).then(function () {
            if (!r._disposed) {
              var t = e()
              u(t) && (n.queue[o].dispose = t)
            }
          }),
          (n.queue[o] = { deps: a }))
      }
    })
  var De = function (e, t) {
    var r = this
    void 0 === t && (t = 'TrackerReaction'),
      (this.track = function (e) {
        if (!u(e)) return r.results
        if (!(r.track._boundary > 0)) {
          if (-1 === h.indexOf(r.track)) {
            M(r.track)
            try {
              A(), h.push(r.track), (r.results = e())
            } finally {
              h.pop(), r.track._boundary++, T(), (r.track._boundary = 0)
            }
          }
          return r.results
        }
      }),
      (this.dispose = function () {
        q(r.track)
      }),
      (this.track._scheduler = function (t) {
        0 === r.track._boundary && r.dispose(), u(t) && e(t)
      }),
      (this.track._name = t),
      (this.track._boundary = 0)
  }
  ;(e.DataChange = le),
    (e.DataNode = fe),
    (e.Tracker = De),
    (e.action = Oe),
    (e.autorun = xe),
    (e.batch = me),
    (e.buildDataTree = se),
    (e.contains = function (e, t) {
      var r = v.get(e) || e,
        n = v.get(t) || t
      if (r === n) return !0
      var a = g.get(r),
        u = g.get(n)
      return !!a && !!u && a.contains(u)
    }),
    (e.define = Ve),
    (e.hasCollected = function (e) {
      return (O.value = !1), null == e || e(), O.value
    }),
    (e.isAnnotation = ee),
    (e.isObservable = Z),
    (e.isSupportObservable = te),
    (e.markObservable = function (e) {
      if (e) return u(e) ? (e.prototype[U] = !0) : (e[U] = !0), e
    }),
    (e.markRaw = function (e) {
      if (e) return u(e) ? (e.prototype[Q] = !0) : (e[Q] = !0), e
    }),
    (e.model = function (e) {
      var t = Object.keys(e || {}).reduce(function (t, r) {
        var n = Object.getOwnPropertyDescriptor(e, r)
        return (
          n && n.get
            ? (t[r] = Ee.computed)
            : u(e[r])
            ? (t[r] = Oe)
            : (t[r] = Ee),
          t
        )
      }, {})
      return Ve(e, t)
    }),
    (e.observable = Ee),
    (e.observe = function (e, t, r) {
      void 0 === r && (r = !0)
      if (e && 'object' != typeof e)
        throw Error('Can not observe '.concat(typeof e, ' type.'))
      return (function (e) {
        var n = v.get(e) || e,
          a = g.get(n),
          o = function (e) {
            var n = v.get(e.target) || e.target,
              u = g.get(n)
            ;((r && a.contains(u)) ||
              a === u ||
              (a.targetRaw === n && a.key === e.key)) &&
              t(new le(e, u))
          }
        return (
          a && u(t) && S.add(o),
          function () {
            S.delete(o)
          }
        )
      })(e)
    }),
    (e.raw = function (e) {
      return v.get(e)
    }),
    (e.reaction = function (e, t, r) {
      var n = I({ name: 'Reaction' }, r),
        a = {},
        o = function () {
          try {
            N(), A(), u(t) && t(a.currentValue, a.oldValue)
          } finally {
            T(), J()
          }
        },
        i = function () {
          if (-1 === h.indexOf(i)) {
            M(i)
            try {
              h.push(i), (a.currentValue = e())
            } finally {
              h.pop()
            }
          }
        }
      return (
        (i._scheduler = function (e) {
          e(),
            (u(n.equals)
              ? n.equals(a.oldValue, a.currentValue)
              : a.oldValue === a.currentValue) || o(),
            (a.oldValue = a.currentValue)
        }),
        (i._name = n.name),
        i(),
        (a.oldValue = a.currentValue),
        n.fireImmediately && o(),
        function () {
          q(i)
        }
      )
    }),
    (e.toJS = function (e) {
      var t = new WeakSet(),
        r = function (e) {
          if (t.has(e)) return e
          if (e && e[Q]) return e
          if (o(e)) {
            if (Z(e)) {
              t.add(e)
              var n = []
              return (
                e.forEach(function (e) {
                  n.push(r(e))
                }),
                t.delete(e),
                n
              )
            }
          } else if (i(e) && Z(e)) {
            t.add(e)
            var a = {}
            for (var u in e) X.call(e, u) && (a[u] = r(e[u]))
            return t.delete(e), a
          }
          return e
        }
      return r(e)
    }),
    (e.untracked = _e),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
//# sourceMappingURL=formily.reactive.umd.production.js.map
