!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define('formily.vue', ['exports'], t)
    : t(
        (((e =
          'undefined' != typeof globalThis ? globalThis : e || self).Formily =
          e.Formily || {}),
        (e.Formily.Vue = {}))
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
  var t = Symbol.for('__REVA_ACTIONS'),
    r = {
      parent: !0,
      root: !0,
      properties: !0,
      patternProperties: !0,
      additionalProperties: !0,
      items: !0,
      additionalItems: !0,
      'x-linkages': !0,
      'x-reactions': !0,
    },
    n = {
      title: 'title',
      description: 'description',
      default: 'initialValue',
      enum: 'dataSource',
      readOnly: 'readOnly',
      writeOnly: 'editable',
      'x-content': 'content',
      'x-data': 'data',
      'x-value': 'value',
      'x-editable': 'editable',
      'x-disabled': 'disabled',
      'x-read-pretty': 'readPretty',
      'x-read-only': 'readOnly',
      'x-visible': 'visible',
      'x-hidden': 'hidden',
      'x-display': 'display',
      'x-pattern': 'pattern',
      'x-validator': 'validator',
      'x-decorator': 'decoratorType',
      'x-component': 'componentType',
      'x-decorator-props': 'decoratorProps',
      'x-component-props': 'componentProps',
    },
    o = {
      required: !0,
      format: !0,
      maxItems: !0,
      minItems: !0,
      maxLength: !0,
      minLength: !0,
      maximum: !0,
      minimum: !0,
      exclusiveMaximum: !0,
      exclusiveMinimum: !0,
      pattern: !0,
      const: !0,
      multipleOf: !0,
      maxProperties: !0,
      minProperties: !0,
      uniqueItems: !0,
    },
    i = Object.prototype.hasOwnProperty,
    a = function (e) {
      return (
        ('$$typeof' in e && '_owner' in e) ||
        !!e._isAMomentObject ||
        !!q.isSchemaInstance(e) ||
        !!e[t] ||
        !!Formily.Shared.isFn(e.toJS) ||
        !!Formily.Shared.isFn(e.toJSON) ||
        !!Formily.Reactive.isObservable(e)
      )
    },
    l = function (e, t, r) {
      Formily.Reactive.untracked(function () {
        var i,
          a,
          l = Formily.Shared.FormPath.parse(t).segments,
          u = l[0],
          s = 'enum' === u && Formily.Shared.isArr(r),
          d = n[u]
        d
          ? Formily.Shared.FormPath.setIn(
              e,
              [d].concat(l.slice(1)),
              s
                ? ((a = r),
                  Formily.Shared.toArr(a).map(function (e) {
                    return 'object' == typeof e ? e : { label: e, value: e }
                  }))
                : r
            )
          : o[u] &&
            (null === (i = e.setValidatorRule) ||
              void 0 === i ||
              i.call(e, u, r))
      })
    },
    u = /^\s*\{\{([\s\S]*)\}\}\s*$/,
    s = {
      silent: !1,
      compile: function (e, t) {
        if ((void 0 === t && (t = {}), !s.silent))
          return new Function(
            '$root',
            'with($root) { return ('.concat(e, '); }')
          )(t)
        try {
          return new Function(
            '$root',
            'with($root) { return ('.concat(e, '); }')
          )(t)
        } catch (e) {}
      },
    },
    d = function (e) {
      void 0 === e && (e = !0), (s.silent = !!e)
    },
    c = function (e) {
      Formily.Shared.isFn(e) && (s.compile = e)
    },
    f = function (e, t) {
      if (Formily.Shared.isStr(e)) {
        var r = e.match(u)
        return r ? s.compile(r[1], t) : e
      }
      return e
    },
    p = function (e, t) {
      var r = [],
        n = function (e) {
          if (Formily.Shared.isStr(e)) return f(e, t)
          if (Formily.Shared.isArr(e))
            return e.map(function (e) {
              return n(e)
            })
          if (Formily.Shared.isPlainObj(e)) {
            if (a(e)) return e
            if (r.indexOf(e) > -1) return e
            var o = r.length
            r.push(e)
            var i = Formily.Shared.reduce(
              e,
              function (e, t, r) {
                return (e[r] = n(t)), e
              },
              {}
            )
            return r.splice(o, 1), i
          }
          return e
        }
      return n(e)
    },
    m = function (e, t, r) {
      !(function (e, t) {
        var r = [],
          n = e,
          o = function (e, i) {
            if ((void 0 === i && (i = []), Formily.Shared.isPlainObj(e))) {
              if (r.indexOf(e) > -1) return
              var l = r.length
              if ((r.push(e), a(e) && n !== e)) return void t(e, i)
              Formily.Shared.each(e, function (e, t) {
                o(e, i.concat(t))
              }),
                r.splice(l, 1)
            } else t(e, i)
          }
        o(e)
      })(t, function (t, n) {
        var o = Formily.Shared.FormPath.parse(n),
          a = p(t, r),
          l = o.segments[0]
        void 0 !== a &&
          i.call(e, l) &&
          Formily.Reactive.untracked(function () {
            return Formily.Shared.FormPath.setIn(e, o, a)
          })
      })
    },
    v = function (e, t, n, o) {
      void 0 === o && (o = !1),
        (function (e, t) {
          void 0 !== e['x-validator'] && t(e['x-validator'], ['x-validator'])
          var n = [],
            o = e,
            i = function (e, l) {
              if (
                (void 0 === l && (l = []),
                'x-validator' !== l[0] &&
                  'version' !== l[0] &&
                  '_isJSONSchemaObject' !== l[0] &&
                  !(
                    (-1 == String(l[0]).indexOf('x-') &&
                      Formily.Shared.isFn(e)) ||
                    r[l[0]]
                  ))
              )
                if (Formily.Shared.isPlainObj(e)) {
                  if ('default' === l[0] || 'x-value' === l[0])
                    return void t(e, l)
                  if (n.indexOf(e) > -1) return
                  var u = n.length
                  if ((n.push(e), a(e) && o !== e)) return void t(e, l)
                  Formily.Shared.each(e, function (e, t) {
                    i(e, l.concat(t))
                  }),
                    n.splice(u, 1)
                } else t(e, l)
            }
          i(e)
        })(t, function (t, r) {
          var i = t,
            a = Formily.Reactive.hasCollected(function () {
              i = p(t, n)
            })
          void 0 !== i && ((o && !a && e.initialized) || l(e, r, i))
        })
    },
    y = function () {
      return (
        (y =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }),
        y.apply(this, arguments)
      )
    },
    h = function (e, t) {
      var r = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!r) return e
      var n,
        o,
        i = r.call(e),
        a = []
      try {
        for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
          a.push(n.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          n && !n.done && (r = i.return) && r.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return a
    },
    F = {
      onFieldInit: Formily.Core.onFieldInit,
      onFieldMount: Formily.Core.onFieldMount,
      onFieldUnmount: Formily.Core.onFieldUnmount,
      onFieldValueChange: Formily.Core.onFieldValueChange,
      onFieldInputValueChange: Formily.Core.onFieldInputValueChange,
      onFieldInitialValueChange: Formily.Core.onFieldInitialValueChange,
      onFieldValidateStart: Formily.Core.onFieldValidateStart,
      onFieldValidateEnd: Formily.Core.onFieldValidateEnd,
      onFieldValidateFailed: Formily.Core.onFieldValidateFailed,
      onFieldValidateSuccess: Formily.Core.onFieldValidateSuccess,
    },
    S = ['onFieldInit', 'onFieldValueChange'],
    b = function (e, t, r) {
      var n = h(String(t).split(/\s*#\s*/), 2),
        o = n[0],
        i = n[1]
      return e.query(o).getIn(i || r || 'value')
    },
    P = function (e, t) {
      void 0 === t && (t = !1)
      var r = e || {},
        n = r.request,
        o = r.target,
        i = r.runner,
        a = r.field,
        l = r.scope
      n &&
        (o
          ? (n.state &&
              a.form.setFieldState(o, function (e) {
                return m(e, n.state, y(y({}, l), { $target: e }))
              }),
            n.schema &&
              a.form.setFieldState(o, function (e) {
                return v(e, n.schema, y(y({}, l), { $target: e }), t)
              }),
            Formily.Shared.isStr(i) &&
              i &&
              a.form.setFieldState(o, function (e) {
                f(
                  '{{function(){'.concat(i, '}}}'),
                  y(y({}, l), { $target: e })
                )()
              }))
          : (n.state &&
              a.setState(function (e) {
                return m(e, n.state, l)
              }),
            n.schema &&
              a.setState(function (e) {
                return v(e, n.schema, l, t)
              }),
            Formily.Shared.isStr(i) &&
              i &&
              f('{{function(){'.concat(i, '}}}'), l)()))
    },
    g = function (e, t) {
      void 0 === t && (t = {})
      var r = Formily.Reactive.autorun.effect,
        n = Formily.Reactive.autorun.memo,
        o = e,
        i = e.form,
        a = e.form.values
      return y(y({}, t.scope), {
        $form: i,
        $self: o,
        $observable: function (e, t) {
          return Formily.Reactive.autorun.memo(function () {
            return Formily.Reactive.observable(e)
          }, t)
        },
        $effect: r,
        $memo: n,
        $props: function (t) {
          return e.setComponentProps(t)
        },
        $values: a,
      })
    },
    A = function (e, t) {
      return function (r) {
        P({ field: r, request: { schema: e }, scope: g(r, t) }, !0)
      }
    },
    C = function (e, t) {
      return function (r) {
        var n = Formily.Shared.toArr(e['x-reactions']),
          o = g(r, t)
        n.forEach(function (e) {
          var t = f(e, o)
          if (t) {
            if (Formily.Shared.isFn(t)) return t(r)
            var n = t.when,
              i = t.fulfill,
              a = t.otherwise,
              l = t.target,
              u = t.effects,
              s = function () {
                var e = (function (e, t) {
                    if (Formily.Shared.isArr(t)) {
                      var r = []
                      return (
                        t.forEach(function (t) {
                          Formily.Shared.isStr(t)
                            ? r.push(b(e, t))
                            : Formily.Shared.isPlainObj(t) &&
                              t.name &&
                              t.source &&
                              (r[t.name] = b(e, t.source, t.property))
                        }),
                        r
                      )
                    }
                    return Formily.Shared.isPlainObj(t)
                      ? Formily.Shared.reduce(
                          t,
                          function (t, r, n) {
                            return (t[n] = b(e, r)), t
                          },
                          {}
                        )
                      : []
                  })(r, t.dependencies),
                  u = e,
                  s = y(y({}, o), {
                    $target: null,
                    $deps: e,
                    $dependencies: u,
                  }),
                  d = f(n, s),
                  c = !n || d,
                  p = c ? i : a,
                  m = c
                    ? null == i
                      ? void 0
                      : i.run
                    : null == a
                    ? void 0
                    : a.run
                P({ field: r, target: l, request: p, runner: m, scope: s })
              }
            l && (t.effects = (null == u ? void 0 : u.length) ? u : S),
              t.effects
                ? Formily.Reactive.autorun.memo(function () {
                    Formily.Reactive.untracked(function () {
                      Formily.Shared.each(t.effects, function (e) {
                        F[e] && F[e](r.address, s)
                      })
                    })
                  }, [])
                : s()
          }
        })
      }
    },
    x = function () {
      return (
        (x =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }),
        x.apply(this, arguments)
      )
    },
    V = [],
    O = {},
    I = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      e.forEach(function (e) {
        Formily.Shared.isFn(e) && V.push(e)
      })
    },
    B = function (e, t) {
      e && Formily.Shared.isFn(t) && ((O[e] = O[e] || []), O[e].push(t))
    },
    j = function (e) {
      Formily.Shared.isArr(e) &&
        e.forEach(function (e) {
          Formily.Shared.isArr(O[e]) &&
            O[e].forEach(function (e) {
              I(e)
            })
        })
    },
    N = function () {
      return (
        (N =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }),
        N.apply(this, arguments)
      )
    },
    w = function (e, t) {
      var r = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!r) return e
      var n,
        o,
        i = r.call(e),
        a = []
      try {
        for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
          a.push(n.value)
      } catch (e) {
        o = { error: e }
      } finally {
        try {
          n && !n.done && (r = i.return) && r.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return a
    },
    R = function (e, t, r) {
      if (r || 2 === arguments.length)
        for (var n, o = 0, i = t.length; o < i; o++)
          (!n && o in t) ||
            (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]))
      return e.concat(n || Array.prototype.slice.call(t))
    },
    E = [
      'card',
      'block',
      'grid-col',
      'grid-row',
      'grid',
      'layout',
      'step',
      'tab',
      'text-box',
    ],
    k = {},
    $ = function (e) {
      if (Formily.Shared.isStr(e)) return e.replace(/\$value/, '$self.value')
    },
    M = function (e) {
      var t
      return (
        Formily.Shared.isValid(e.editable) &&
          ((e['x-editable'] = e['x-editable'] || e.editable),
          delete e.editable),
        Formily.Shared.isValid(e.visible) &&
          ((e['x-visible'] = e['x-visible'] || e.visible), delete e.visible),
        Formily.Shared.isValid(e.display) &&
          ((e['x-display'] =
            e['x-display'] || (e.display ? 'visible' : 'hidden')),
          delete e.display),
        Formily.Shared.isValid(e['x-props']) &&
          ((e['x-decorator-props'] = e['x-decorator-props'] || e['x-props']),
          delete e.display),
        e['x-linkages'] &&
          ((e['x-reactions'] = Formily.Shared.toArr(e['x-reactions']).concat(
            ((t = e['x-linkages']),
            Formily.Shared.isArr(t)
              ? t.reduce(function (e, t) {
                  return t
                    ? 'value:visible' === t.type
                      ? e.concat({
                          target: t.target,
                          when: $(t.condition),
                          fulfill: { state: { visible: !0 } },
                          otherwise: { state: { visible: !1 } },
                        })
                      : 'value:schema' === t.type
                      ? e.concat({
                          target: t.target,
                          when: $(t.condition),
                          fulfill: {
                            schema: M(N({ version: '1.0' }, t.schema)),
                          },
                          otherwise: {
                            schema: M(N({ version: '1.0' }, t.otherwise)),
                          },
                        })
                      : 'value:state' === t.type
                      ? e.concat({
                          target: t.target,
                          when: $(t.condition),
                          fulfill: { state: t.state },
                          otherwise: { state: t.otherwise },
                        })
                      : void 0
                    : e
                }, [])
              : [])
          )),
          delete e['x-linkages']),
        e['x-component']
          ? E.some(function (t) {
              return (
                Formily.Shared.lowerCase(t) ===
                Formily.Shared.lowerCase(e['x-component'])
              )
            }) && (e.type = 'void')
          : k[e.type] && (e['x-component'] = k[e.type]),
        e['x-decorator'] ||
          'void' === e.type ||
          'object' === e.type ||
          (e['x-decorator'] = e['x-decorator'] || 'FormItem'),
        e['x-rules'] &&
          (e['x-validator'] = []
            .concat(e['x-validator'] || [])
            .concat(e['x-rules'])),
        e
      )
    }
  B('1.0', M)
  var _,
    J = function (e) {
      E.push.apply(E, R([], w(e), !1))
    },
    D = function (e) {
      Object.assign(k, e)
    },
    q = (function () {
      function e(t, n) {
        var o = this
        return (
          (this._isJSONSchemaObject = !0),
          (this.version = '2.0'),
          (this.addProperty = function (t, r) {
            return (
              (o.properties = o.properties || {}),
              (o.properties[t] = new e(r, o)),
              (o.properties[t].name = t),
              o.properties[t]
            )
          }),
          (this.removeProperty = function (e) {
            var t = o.properties[e]
            return delete o.properties[e], t
          }),
          (this.setProperties = function (e) {
            for (var t in e) o.addProperty(t, e[t])
            return o
          }),
          (this.addPatternProperty = function (t, r) {
            if (r)
              return (
                (o.patternProperties = o.patternProperties || {}),
                (o.patternProperties[t] = new e(r, o)),
                (o.patternProperties[t].name = t),
                o.patternProperties[t]
              )
          }),
          (this.removePatternProperty = function (e) {
            var t = o.patternProperties[e]
            return delete o.patternProperties[e], t
          }),
          (this.setPatternProperties = function (e) {
            if (!e) return o
            for (var t in e) o.addPatternProperty(t, e[t])
            return o
          }),
          (this.setAdditionalProperties = function (t) {
            if (t)
              return (o.additionalProperties = new e(t)), o.additionalProperties
          }),
          (this.setItems = function (t) {
            if (t)
              return (
                Array.isArray(t)
                  ? (o.items = t.map(function (t) {
                      return new e(t, o)
                    }))
                  : (o.items = new e(t, o)),
                o.items
              )
          }),
          (this.setAdditionalItems = function (t) {
            if (t) return (o.additionalItems = new e(t, o)), o.additionalItems
          }),
          (this.findDefinitions = function (e) {
            if (e && o.root && Formily.Shared.isStr(e) && 0 === e.indexOf('#/'))
              return Formily.Shared.FormPath.getIn(
                o.root,
                e.substring(2).split('/')
              )
          }),
          (this.mapProperties = function (t) {
            return e.getOrderProperties(o).map(function (e, r) {
              var n = e.schema,
                o = e.key
              return t(n, o, r)
            })
          }),
          (this.mapPatternProperties = function (t) {
            return e
              .getOrderProperties(o, 'patternProperties')
              .map(function (e, r) {
                var n = e.schema,
                  o = e.key
                return t(n, o, r)
              })
          }),
          (this.reduceProperties = function (t, r) {
            var n = r
            return (
              e.getOrderProperties(o, 'properties').forEach(function (e, r) {
                var o = e.schema,
                  i = e.key
                n = t(n, o, i, r)
              }),
              n
            )
          }),
          (this.reducePatternProperties = function (t, r) {
            var n = r
            return (
              e
                .getOrderProperties(o, 'patternProperties')
                .forEach(function (e, r) {
                  var o = e.schema,
                    i = e.key
                  n = t(n, o, i, r)
                }),
              n
            )
          }),
          (this.compile = function (t) {
            var n = new e({}, o.parent)
            return (
              Formily.Shared.each(o, function (e, o) {
                ;(Formily.Shared.isFn(e) && !o.includes('x-')) ||
                  ('parent' !== o &&
                    'root' !== o &&
                    (n[o] = r[o] ? (e ? f(e, t) : e) : e ? p(e, t) : e))
              }),
              n
            )
          }),
          (this.fromJSON = function (t) {
            return t
              ? e.isSchemaInstance(t)
                ? t
                : (Formily.Shared.each(
                    ((r = t),
                    V.reduce(function (e, t) {
                      return t(e)
                    }, x({}, r))),
                    function (e, t) {
                      ;(Formily.Shared.isFn(e) && !t.includes('x-')) ||
                        ('properties' === t
                          ? o.setProperties(e)
                          : 'patternProperties' === t
                          ? o.setPatternProperties(e)
                          : 'additionalProperties' === t
                          ? o.setAdditionalProperties(e)
                          : 'items' === t
                          ? o.setItems(e)
                          : 'additionalItems' === t
                          ? o.setAdditionalItems(e)
                          : '$ref' === t
                          ? o.fromJSON(o.findDefinitions(e))
                          : (o[t] = e))
                    }
                  ),
                  o)
              : o
            var r
          }),
          (this.toJSON = function (e) {
            void 0 === e && (e = !0)
            var t = {}
            return (
              Formily.Shared.each(o, function (r, n) {
                var o, i
                if (
                  (!Formily.Shared.isFn(r) || n.includes('x-')) &&
                  'parent' !== n &&
                  'root' !== n
                )
                  if ('properties' === n || 'patternProperties' === n) {
                    if (!e) return
                    t[n] = Formily.Shared.map(r, function (e) {
                      var t
                      return null === (t = null == e ? void 0 : e.toJSON) ||
                        void 0 === t
                        ? void 0
                        : t.call(e)
                    })
                  } else if (
                    'additionalProperties' === n ||
                    'additionalItems' === n
                  ) {
                    if (!e) return
                    t[n] =
                      null === (o = null == r ? void 0 : r.toJSON) ||
                      void 0 === o
                        ? void 0
                        : o.call(r)
                  } else if ('items' === n) {
                    if (!e) return
                    Array.isArray(r)
                      ? (t[n] = r.map(function (e) {
                          var t
                          return null === (t = null == e ? void 0 : e.toJSON) ||
                            void 0 === t
                            ? void 0
                            : t.call(e)
                        }))
                      : (t[n] =
                          null === (i = null == r ? void 0 : r.toJSON) ||
                          void 0 === i
                            ? void 0
                            : i.call(r))
                  } else t[n] = r
              }),
              t
            )
          }),
          (this.toFieldProps = function (e) {
            return (function (e, t) {
              return { name: e.name, reactions: [A(e, t), C(e, t)] }
            })(o, e)
          }),
          n ? ((this.parent = n), (this.root = n.root)) : (this.root = this),
          this.fromJSON(t)
        )
      }
      return (
        (e.getOrderProperties = function (e, t) {
          void 0 === e && (e = {}), void 0 === t && (t = 'properties')
          var r = [],
            n = []
          for (var o in e[t]) {
            var i = e[t][o],
              a = i['x-index']
            isNaN(a)
              ? n.push({ schema: i, key: o })
              : (r[a] = { schema: i, key: o })
          }
          return r.concat(n).filter(function (e) {
            return !!e
          })
        }),
        (e.compile = function (e, t) {
          return p(e, t)
        }),
        (e.shallowCompile = function (e, t) {
          return f(e, t)
        }),
        (e.isSchemaInstance = function (t) {
          return Formily.Shared.instOf(t, e)
        }),
        (e.registerCompiler = c),
        (e.registerPatches = I),
        (e.registerVoidComponents = J),
        (e.registerTypeDefaultComponents = D),
        (e.registerPolyfills = B),
        (e.enablePolyfills = j),
        (e.silent = d),
        e
      )
    })(),
    T = function () {
      return (
        (T =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }),
        T.apply(this, arguments)
      )
    }
  function L(e, t) {
    var r = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!r) return e
    var n,
      o,
      i = r.call(e),
      a = []
    try {
      for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
        a.push(n.value)
    } catch (e) {
      o = { error: e }
    } finally {
      try {
        n && !n.done && (r = i.return) && r.call(i)
      } finally {
        if (o) throw o.error
      }
    }
    return a
  }
  function U(e, t) {
    for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r]
    return e
  }
  ;(_ = (_ = Vue) || Vue) &&
    !_.__composition_api_installed__ &&
    Vue.use(VueCompositionAPI),
    Vue,
    Vue.version,
    VueCompositionAPI.EffectScope
  const H = VueCompositionAPI.computed
  VueCompositionAPI.createApp,
    VueCompositionAPI.createRef,
    VueCompositionAPI.customRef,
    VueCompositionAPI.defineAsyncComponent
  const W = VueCompositionAPI.defineComponent
  VueCompositionAPI.del,
    VueCompositionAPI.effectScope,
    VueCompositionAPI.getCurrentInstance,
    VueCompositionAPI.getCurrentScope
  const z = VueCompositionAPI.h,
    G = VueCompositionAPI.inject
  VueCompositionAPI.isRaw,
    VueCompositionAPI.isReactive,
    VueCompositionAPI.isReadonly,
    VueCompositionAPI.isRef
  const K = VueCompositionAPI.markRaw
  VueCompositionAPI.nextTick,
    VueCompositionAPI.onActivated,
    VueCompositionAPI.onBeforeMount
  const Q = VueCompositionAPI.onBeforeUnmount
  VueCompositionAPI.onBeforeUpdate,
    VueCompositionAPI.onDeactivated,
    VueCompositionAPI.onErrorCaptured
  const X = VueCompositionAPI.onMounted
  VueCompositionAPI.onScopeDispose,
    VueCompositionAPI.onServerPrefetch,
    VueCompositionAPI.onUnmounted,
    VueCompositionAPI.onUpdated
  const Y = VueCompositionAPI.provide
  VueCompositionAPI.proxyRefs,
    VueCompositionAPI.reactive,
    VueCompositionAPI.readonly
  const Z = VueCompositionAPI.ref
  VueCompositionAPI.set,
    VueCompositionAPI.shallowReactive,
    VueCompositionAPI.shallowReadonly
  const ee = VueCompositionAPI.shallowRef,
    te = VueCompositionAPI.toRaw
  VueCompositionAPI.toRef,
    VueCompositionAPI.toRefs,
    VueCompositionAPI.triggerRef,
    VueCompositionAPI.unref,
    VueCompositionAPI.useAttrs,
    VueCompositionAPI.useCSSModule,
    VueCompositionAPI.useCssModule,
    VueCompositionAPI.useSlots,
    VueCompositionAPI.warn
  const re = VueCompositionAPI.watch
  VueCompositionAPI.watchEffect,
    VueCompositionAPI.watchPostEffect,
    VueCompositionAPI.watchSyncEffect,
    Vue
  var ne,
    oe = Symbol('form'),
    ie = Symbol('field'),
    ae = Symbol('schemaMarkup'),
    le = Symbol('schema'),
    ue = Symbol('schemaExpression'),
    se = Symbol('schemaOptions'),
    de = function (e) {
      var t = ee(null)
      ;(t.value = e),
        X(function () {
          e.onMount()
        }),
        Q(function () {
          var e
          null === (e = t.value) || void 0 === e || e.onUnmount()
        })
      return [
        t,
        function (e) {
          return (
            e !== t.value &&
              (t.value && t.value.onUnmount(), (t.value = e), e.onMount()),
            t.value
          )
        },
      ]
    },
    ce = Symbol(),
    fe = Symbol(),
    pe = Symbol(),
    me = Symbol(),
    ve = function (e) {
      return 'frag' in e
    }
  function ye(e, t) {
    fe in e ||
      ((e[fe] = t),
      Object.defineProperty(e, 'parentNode', {
        get: function () {
          return this[fe] || this.parentElement
        },
      }))
  }
  function he(e) {
    pe in e ||
      ((e[pe] = !0),
      Object.defineProperty(e, 'nextSibling', {
        get: function () {
          var e = this.parentNode.childNodes,
            t = e.indexOf(this)
          return (t > -1 && e[t + 1]) || null
        },
      }))
  }
  function Fe(e) {
    if (!ne) {
      var t = Object.getOwnPropertyDescriptor(Node.prototype, 'childNodes')
      ne = t.get
    }
    var r = ne.apply(e),
      n = Array.from(r).map(function (t) {
        return (function (e, t) {
          for (; e.parentNode !== t; ) {
            var r = e.parentNode
            r && (e = r)
          }
          return e
        })(t, e)
      })
    return n.filter(function (e, t) {
      return e !== n[t - 1]
    })
  }
  function Se(e) {
    me in e ||
      ((e[me] = !0),
      Object.defineProperties(e, {
        childNodes: {
          get: function () {
            return this.frag || Fe(this)
          },
        },
        firstChild: {
          get: function () {
            return this.childNodes[0] || null
          },
        },
      }),
      (e.hasChildNodes = function () {
        return this.childNodes.length > 0
      }))
  }
  function be() {
    var e
    ;(e = this.frag[0]).before.apply(e, arguments)
  }
  function Pe() {
    var e = this.frag
    e.splice(0, e.length).forEach(function (e) {
      e.remove()
    })
  }
  var ge = function e(t) {
    var r
    return (r = Array.prototype).concat.apply(
      r,
      t.map(function (t) {
        return ve(t) ? e(t.frag) : t
      })
    )
  }
  function Ae(e) {
    if (ve(this)) {
      var t = this.frag.indexOf(e)
      if (t > -1) {
        var r = this.frag.splice(t, 1)[0]
        0 === this.frag.length &&
          (function (e, t) {
            var r = e[ce]
            t.before(r), ye(r, e), e.frag.unshift(r)
          })(this, r),
          e.remove()
      }
    } else {
      Fe(this).indexOf(e) > -1 && e.remove()
    }
    return e
  }
  function Ce(e, t) {
    var r = this,
      n = e.frag || [e]
    if (ve(this)) {
      var o = this.frag
      if (t) {
        var i = o.indexOf(t)
        i > -1 && (o.splice.apply(o, [i, 0].concat(n)), t.before.apply(t, n))
      } else {
        var a = o[o.length - 1]
        o.push.apply(o, n), a.after.apply(a, n)
      }
      Ve(this)
    } else t ? this.childNodes.includes(t) && t.before.apply(t, n) : this.append.apply(this, n)
    return (
      n.forEach(function (e) {
        ye(e, r)
      }),
      he(n[n.length - 1]),
      e
    )
  }
  function xe(e) {
    var t = this.frag
    return t[t.length - 1].after(e), ye(e, this), Ve(this), t.push(e), e
  }
  function Ve(e) {
    var t = e[ce]
    e.frag[0] === t && (e.frag.shift(), t.remove())
  }
  var Oe = {
      inserted: function (e) {
        var t = e.parentNode,
          r = e.nextSibling,
          n = e.previousSibling,
          o = Array.from(e.childNodes),
          i = document.createComment('')
        0 === o.length && o.push(i), (e.frag = o), (e[ce] = i)
        var a = document.createDocumentFragment()
        a.append.apply(a, ge(o)),
          e.replaceWith(a),
          o.forEach(function (t) {
            ye(t, e), he(t)
          }),
          Se(e),
          Object.assign(e, {
            remove: Pe,
            appendChild: xe,
            insertBefore: Ce,
            removeChild: Ae,
            before: be,
          }),
          Object.defineProperty(e, 'innerHTML', {
            set: function (e) {
              var t = this,
                r = document.createElement('div')
              r.innerHTML = e
              var n = this.frag.length
              Array.from(r.childNodes).forEach(function (e) {
                t.appendChild(e)
              }),
                r.append.apply(r, this.frag.splice(0, n))
            },
            get: function () {
              return ''
            },
          }),
          t &&
            (Object.assign(t, { removeChild: Ae, insertBefore: Ce }),
            ye(e, t),
            Se(t)),
          r && he(e),
          n && he(n)
      },
      unbind: function (e) {
        e.remove()
      },
    },
    Ie = '#fragment'
  ;(e.FragmentComponent = void 0),
    (e.FragmentComponent = {
      name: 'Fragment',
      directives: { frag: Oe },
      render: function (e) {
        var t,
          r,
          n = this
        return e(
          'div',
          { directives: [{ name: 'frag' }] },
          null ===
            (r =
              null === (t = null == n ? void 0 : n.$scopedSlots) || void 0 === t
                ? void 0
                : t.default) || void 0 === r
            ? void 0
            : r.call(t, n.$attrs)
        )
      },
    })
  var Be = function (t, r, n) {
      var o = z,
        i = n,
        a = []
      Object.keys(n).forEach(function (t) {
        var r = n[t]
        if ('function' == typeof r && 0 === r.length)
          try {
            var i = r()
            a.push(
              'default' === t ? i : o(e.FragmentComponent, { slot: t }, [i])
            )
          } catch (e) {}
      })
      var l = Object.assign({}, r)
      if (
        (Object.keys(i).length > 0 &&
          (l.scopedSlots
            ? (l.scopedSlots = T(T({}, l.scopedSlots), i))
            : (l.scopedSlots = i)),
        t === Ie)
      ) {
        if (0 === Object.keys(l).length && 1 === a.length) {
          if (!Array.isArray(a[0])) return a[0]
          if (1 === a[0].length) return a[0][0]
        }
        t = e.FragmentComponent
      }
      return o(t, l, a)
    },
    je = W({
      name: 'FormProvider',
      inheritAttrs: !1,
      props: { form: { type: Object, required: !0 } },
      setup: function (e, t) {
        var r = t.attrs,
          n = t.slots,
          o = function () {
            return e.form
          },
          i = L(de(o()), 2),
          a = i[0],
          l = i[1]
        return (
          re(
            function () {
              return e.form
            },
            function () {
              return (a.value = l(o()))
            }
          ),
          Y(oe, a),
          [ie, ae, le, ue, se].forEach(function (e) {
            return Y(e, Z())
          }),
          function () {
            return Be(Ie, { attrs: r }, n)
          }
        )
      },
    }),
    Ne = function () {
      return G(oe, Z())
    },
    we = function () {
      return G(ie, Z())
    },
    Re = Formily.ReactiveVue.observer(
      W({
        name: 'FormConsumer',
        inheritAttrs: !1,
        setup: function (e, t) {
          var r = t.slots,
            n = Ne()
          return function () {
            var e = T({}, r)
            return (
              r.default &&
                (e.default = function () {
                  return r.default({ form: n.value })
                }),
              Be(Ie, {}, e)
            )
          }
        },
      })
    )
  function Ee(e) {
    return (
      !!e &&
      ('string' == typeof e.template ||
        'function' == typeof e.render ||
        'function' == typeof e.setup)
    )
  }
  var ke = Formily.ReactiveVue.observer(
      W({
        name: 'ReactiveField',
        props: ['field'],
        setup: function (e, t) {
          var r = t.slots,
            n = G(se, Z(null)),
            o = Math.floor(Date.now() * Math.random()).toString(16)
          return function () {
            var t = e.field,
              i = {}
            if (t)
              if ('visible' !== t.display)
                i = T(T({}, r), {
                  default: function () {
                    return [Be('template', {}, {})]
                  },
                })
              else {
                i = (function (e) {
                  var r, o, i
                  if (
                    null === (r = null == t ? void 0 : t.decorator) ||
                    void 0 === r
                      ? void 0
                      : r[0]
                  ) {
                    var a =
                        null !==
                          (i = Formily.Shared.FormPath.getIn(
                            null === (o = n.value) || void 0 === o
                              ? void 0
                              : o.components,
                            t.decorator[0]
                          )) && void 0 !== i
                          ? i
                          : t.decorator[0],
                      l = Formily.Reactive.toJS(t.decorator[1]) || {},
                      u = null == l ? void 0 : l.style,
                      s = null == l ? void 0 : l.class
                    return (
                      delete l.style,
                      delete l.class,
                      {
                        default: function () {
                          return Be(
                            a,
                            { style: u, class: s, attrs: T({}, l) },
                            {
                              default: function () {
                                return e
                              },
                            }
                          )
                        },
                      }
                    )
                  }
                  return {
                    default: function () {
                      return e
                    },
                  }
                })([
                  (function () {
                    var o, i, a
                    if (
                      !(null === (o = null == t ? void 0 : t.component) ||
                      void 0 === o
                        ? void 0
                        : o[0])
                    )
                      return Be(
                        Ie,
                        {},
                        {
                          default: function () {
                            var t
                            return null === (t = r.default) || void 0 === t
                              ? void 0
                              : t.call(r, {
                                  field: e.field,
                                  form: e.field.form,
                                })
                          },
                        }
                      )
                    var l =
                        null !==
                          (a = Formily.Shared.FormPath.getIn(
                            null === (i = n.value) || void 0 === i
                              ? void 0
                              : i.components,
                            t.component[0]
                          )) && void 0 !== a
                          ? a
                          : t.component[0],
                      u = Formily.Reactive.toJS(t.component[1]) || {},
                      s = {},
                      d = u['@change'] || u.onChange,
                      c = u['@focus'] || u.onFocus,
                      f = u['@blur'] || u.onBlur
                    Object.keys(u)
                      .filter(function (e) {
                        return e.startsWith('on')
                      })
                      .forEach(function (e) {
                        var t = ''.concat(e[2].toLowerCase()).concat(e.slice(3))
                        s[t] = u[e]
                      }),
                      Object.keys(u)
                        .filter(function (e) {
                          return e.startsWith('@')
                        })
                        .forEach(function (e) {
                          ;(s[e.slice(1)] = u[e]), delete u[e]
                        }),
                      (s.change = function () {
                        for (var e = [], r = 0; r < arguments.length; r++)
                          e[r] = arguments[r]
                        Formily.Core.isVoidField(t) ||
                          t.onInput.apply(t, U([], L(e))),
                          null == d || d.apply(void 0, U([], L(e)))
                      }),
                      (s.focus = function () {
                        for (var e = [], r = 0; r < arguments.length; r++)
                          e[r] = arguments[r]
                        Formily.Core.isVoidField(t) ||
                          t.onFocus.apply(t, U([], L(e))),
                          null == c || c.apply(void 0, U([], L(e)))
                      }),
                      (s.blur = function () {
                        for (var e = [], r = 0; r < arguments.length; r++)
                          e[r] = arguments[r]
                        Formily.Core.isVoidField(t) ||
                          t.onBlur.apply(t, U([], L(e))),
                          null == f || f.apply(void 0, U([], L(e)))
                      })
                    var p = null == u ? void 0 : u.style,
                      m = null == u ? void 0 : u.class
                    delete u.style, delete u.class
                    var v = {
                        attrs: T(
                          T(
                            {
                              disabled: Formily.Core.isVoidField(t)
                                ? void 0
                                : 'disabled' === t.pattern ||
                                  'readPretty' === t.pattern,
                              readOnly: Formily.Core.isVoidField(t)
                                ? void 0
                                : 'readOnly' === t.pattern,
                            },
                            u
                          ),
                          {
                            value: Formily.Core.isVoidField(t)
                              ? void 0
                              : Formily.Reactive.toJS(t.value),
                          }
                        ),
                        style: p,
                        class: m,
                        on: s,
                      },
                      y = (function (t, r) {
                        var n
                        if (!Object.keys(t).length && !r) return {}
                        var o = (null == t ? void 0 : t.default)
                          ? null == t
                            ? void 0
                            : t.default(e.field, e.field.form)
                          : []
                        return (
                          'string' == typeof r
                            ? (t.default = function () {
                                return U(U([], L(o)), [r])
                              })
                            : Ee(r) || 'function' == typeof r
                            ? Ee(r) &&
                              (null === (n = null == r ? void 0 : r.render) ||
                              void 0 === n
                                ? void 0
                                : n.length) > 1
                              ? (t.default = function (e) {
                                  return U(U([], L(o)), [
                                    Be(r, { props: e }, {}),
                                  ])
                                })
                              : (t.default = function () {
                                  return U(U([], L(o)), [Be(r, {}, {})])
                                })
                            : r &&
                              'object' == typeof r &&
                              Object.keys(r).forEach(function (e) {
                                var n,
                                  o = r[e],
                                  i = (null == t ? void 0 : t[e])
                                    ? null == t
                                      ? void 0
                                      : t[e]()
                                    : []
                                'string' == typeof o
                                  ? (t[e] = function () {
                                      return U(U([], L(i)), [o])
                                    })
                                  : (Ee(o) || 'function' == typeof o) &&
                                    (Ee(o) &&
                                    (null ===
                                      (n = null == o ? void 0 : o.render) ||
                                    void 0 === n
                                      ? void 0
                                      : n.length) > 1
                                      ? (t[e] = function (e) {
                                          return U(U([], L(i)), [
                                            Be(o, { props: e }, {}),
                                          ])
                                        })
                                      : (t[e] = function () {
                                          return U(U([], L(i)), [Be(o, {}, {})])
                                        }))
                              }),
                          t
                        )
                      })(T({}, r), t.content)
                    return Be(l, v, y)
                  })(),
                ])
              }
            else i = r
            return Be(Ie, { key: o }, i)
          }
        },
      })
    ),
    $e = function (e) {
      var t,
        r,
        n = e.component,
        o = e.decorator
      return (
        Array.isArray(n) && (t = [te(n[0]), n[1]]),
        Array.isArray(o) && (r = [te(o[0]), o[1]]),
        { component: t, decorator: r }
      )
    },
    Me = Formily.ReactiveVue.observer(
      W({
        name: 'ArrayField',
        props: {
          name: {},
          title: {},
          description: {},
          value: {},
          initialValue: {},
          basePath: {},
          decorator: Array,
          component: Array,
          display: String,
          pattern: String,
          required: { type: Boolean, default: void 0 },
          validateFirst: { type: Boolean, default: void 0 },
          hidden: { type: Boolean, default: void 0 },
          visible: { type: Boolean, default: void 0 },
          editable: { type: Boolean, default: void 0 },
          disabled: { type: Boolean, default: void 0 },
          readOnly: { type: Boolean, default: void 0 },
          readPretty: { type: Boolean, default: void 0 },
          dataSource: {},
          validator: {},
          reactions: [Array, Function],
        },
        setup: function (e, t) {
          var r = t.slots,
            n = Ne(),
            o = we(),
            i = H(function () {
              var t
              return void 0 !== e.basePath
                ? e.basePath
                : null === (t = null == o ? void 0 : o.value) || void 0 === t
                ? void 0
                : t.address
            }),
            a = function () {
              return n.value.createArrayField(
                T(T(T({}, e), { basePath: i.value }), $e(e))
              )
            },
            l = L(de(a()), 2),
            u = l[0],
            s = l[1]
          return (
            re(
              function () {
                return e
              },
              function () {
                return (u.value = s(a()))
              },
              { deep: !0 }
            ),
            re([n, o], function () {
              return (u.value = s(a()))
            }),
            Y(ie, u),
            function () {
              var e = u.value,
                t = { props: { field: e } },
                n = T({}, r)
              return (
                r.default &&
                  (n.default = function () {
                    return r.default({ field: e, form: e.form })
                  }),
                Be(ke, t, n)
              )
            }
          )
        },
      })
    ),
    _e = Formily.ReactiveVue.observer(
      W({
        name: 'ObjectField',
        props: {
          name: {},
          title: {},
          description: {},
          value: {},
          initialValue: {},
          basePath: {},
          decorator: Array,
          component: Array,
          display: String,
          pattern: String,
          required: { type: Boolean, default: void 0 },
          validateFirst: { type: Boolean, default: void 0 },
          hidden: { type: Boolean, default: void 0 },
          visible: { type: Boolean, default: void 0 },
          editable: { type: Boolean, default: void 0 },
          disabled: { type: Boolean, default: void 0 },
          readOnly: { type: Boolean, default: void 0 },
          readPretty: { type: Boolean, default: void 0 },
          dataSource: {},
          validator: {},
          reactions: [Array, Function],
        },
        setup: function (e, t) {
          var r = t.slots,
            n = Ne(),
            o = we(),
            i = H(function () {
              var t
              return void 0 !== e.basePath
                ? e.basePath
                : null === (t = null == o ? void 0 : o.value) || void 0 === t
                ? void 0
                : t.address
            }),
            a = function () {
              return n.value.createObjectField(
                T(T(T({}, e), { basePath: i.value }), $e(e))
              )
            },
            l = L(de(a()), 2),
            u = l[0],
            s = l[1]
          return (
            re(
              function () {
                return e
              },
              function () {
                return (u.value = s(a()))
              },
              { deep: !0 }
            ),
            re([n, o], function () {
              return (u.value = s(a()))
            }),
            Y(ie, u),
            function () {
              var e = u.value,
                t = { props: { field: e } },
                n = T({}, r)
              return (
                r.default &&
                  (n.default = function () {
                    return r.default({ field: e, form: e.form })
                  }),
                Be(ke, t, n)
              )
            }
          )
        },
      })
    ),
    Je = W({
      name: 'VoidField',
      props: {
        name: {},
        title: {},
        description: {},
        basePath: {},
        decorator: Array,
        component: Array,
        display: String,
        pattern: String,
        hidden: { type: Boolean, default: void 0 },
        visible: { type: Boolean, default: void 0 },
        editable: { type: Boolean, default: void 0 },
        disabled: { type: Boolean, default: void 0 },
        readOnly: { type: Boolean, default: void 0 },
        readPretty: { type: Boolean, default: void 0 },
        reactions: [Array, Function],
      },
      setup: function (e, t) {
        var r = t.slots,
          n = Ne(),
          o = we(),
          i = H(function () {
            var t
            return void 0 !== e.basePath
              ? e.basePath
              : null === (t = null == o ? void 0 : o.value) || void 0 === t
              ? void 0
              : t.address
          }),
          a = function () {
            return n.value.createVoidField(
              T(T(T({}, e), { basePath: i.value }), $e(e))
            )
          },
          l = L(de(a()), 2),
          u = l[0],
          s = l[1]
        return (
          re(
            function () {
              return e
            },
            function () {
              return (u.value = s(a()))
            },
            { deep: !0 }
          ),
          re([n, o], function () {
            return (u.value = s(a()))
          }),
          Y(ie, u),
          function () {
            var e = u.value,
              t = { props: { field: e } },
              n = T({}, r)
            return (
              r.default &&
                (n.default = function () {
                  return r.default({ field: e, form: e.form })
                }),
              Be(ke, t, n)
            )
          }
        )
      },
    }),
    De = W({
      name: 'Field',
      props: {
        name: {},
        title: {},
        description: {},
        value: {},
        initialValue: {},
        basePath: {},
        decorator: Array,
        component: Array,
        display: String,
        pattern: String,
        required: { type: Boolean, default: void 0 },
        validateFirst: { type: Boolean, default: void 0 },
        hidden: { type: Boolean, default: void 0 },
        visible: { type: Boolean, default: void 0 },
        editable: { type: Boolean, default: void 0 },
        disabled: { type: Boolean, default: void 0 },
        readOnly: { type: Boolean, default: void 0 },
        readPretty: { type: Boolean, default: void 0 },
        dataSource: {},
        validator: {},
        reactions: [Array, Function],
      },
      setup: function (e, t) {
        var r = t.slots,
          n = Ne(),
          o = we(),
          i = H(function () {
            var t
            return void 0 !== e.basePath
              ? e.basePath
              : null === (t = null == o ? void 0 : o.value) || void 0 === t
              ? void 0
              : t.address
          }),
          a = function () {
            return n.value.createField(
              T(T(T({}, e), { basePath: i.value }), $e(e))
            )
          },
          l = L(de(a()), 2),
          u = l[0],
          s = l[1]
        return (
          re(
            function () {
              return e
            },
            function () {
              return (u.value = s(a()))
            },
            { deep: !0 }
          ),
          re([n, o], function () {
            return (u.value = s(a()))
          }),
          Y(ie, u),
          function () {
            var e = u.value,
              t = { props: { field: e } },
              n = T({}, r)
            return (
              r.default &&
                (n.default = function () {
                  return r.default({ field: e, form: e.form })
                }),
              Be(ke, t, n)
            )
          }
        )
      },
    }),
    qe = Formily.ReactiveVue.observer(
      W({
        name: 'RecursionField',
        inheritAttrs: !1,
        props: {
          schema: { required: !0 },
          name: [String, Number],
          basePath: {},
          onlyRenderProperties: { type: Boolean, default: void 0 },
          onlyRenderSelf: { type: Boolean, default: void 0 },
          mapProperties: {},
          filterProperties: {},
        },
        setup: function (e) {
          var t = we(),
            r = G(se),
            n = G(ue),
            o = function (e) {
              return new Formily.JSONSchema.Schema(e)
            },
            i = ee(o(e.schema))
          re(
            [
              function () {
                return e.schema
              },
            ],
            function () {
              i.value = o(e.schema)
            }
          )
          var a = function (e) {
              var t
              return null === (t = null == e ? void 0 : e.toFieldProps) ||
                void 0 === t
                ? void 0
                : t.call(
                    e,
                    T(T({}, r.value), {
                      get scope() {
                        return T(T({}, r.value.scope), n.value)
                      },
                    })
                  )
            },
            l = ee(a(i.value))
          re([i, r], function () {
            l.value = a(i.value)
          })
          return (
            Y(le, i),
            function () {
              var r,
                n,
                o = e.onlyRenderProperties
                  ? e.basePath ||
                    (null === (r = null == t ? void 0 : t.value) || void 0 === r
                      ? void 0
                      : r.address.concat(e.name))
                  : e.basePath ||
                    (null === (n = null == t ? void 0 : t.value) || void 0 === n
                      ? void 0
                      : n.address),
                a = l.value,
                u = function (t) {
                  if (!e.onlyRenderSelf) {
                    var r = Formily.JSONSchema.Schema.getOrderProperties(
                      i.value
                    )
                    if (r.length) {
                      var n = r.map(function (r) {
                          var n = r.schema,
                            i = r.key,
                            a = (null == t ? void 0 : t.address) || o,
                            l = n
                          if (Formily.Shared.isFn(e.mapProperties)) {
                            var u = e.mapProperties(n, i)
                            u && (l = u)
                          }
                          return Formily.Shared.isFn(e.filterProperties) &&
                            !1 === e.filterProperties(l, i)
                            ? null
                            : Be(
                                qe,
                                {
                                  key: i,
                                  attrs: { schema: l, name: i, basePath: a },
                                },
                                {}
                              )
                        }),
                        a = {}
                      return (
                        n.length > 0 &&
                          (a.default = function () {
                            return U([], L(n))
                          }),
                        Be(Ie, {}, a)
                      )
                    }
                  }
                }
              if (i.value)
                return Formily.Shared.isValid(e.name)
                  ? 'object' === i.value.type
                    ? e.onlyRenderProperties
                      ? u()
                      : Be(
                          _e,
                          { attrs: T(T({}, a), { name: e.name, basePath: o }) },
                          {
                            default: function (e) {
                              var t = e.field
                              return [u(t)]
                            },
                          }
                        )
                    : 'array' === i.value.type
                    ? Be(
                        Me,
                        { attrs: T(T({}, a), { name: e.name, basePath: o }) },
                        {}
                      )
                    : 'void' === i.value.type
                    ? e.onlyRenderProperties
                      ? u()
                      : Be(
                          Je,
                          { attrs: T(T({}, a), { name: e.name, basePath: o }) },
                          {
                            default: function (e) {
                              var t = e.field
                              return [u(t)]
                            },
                          }
                        )
                    : Be(
                        De,
                        { attrs: T(T({}, a), { name: e.name, basePath: o }) },
                        {}
                      )
                  : u()
            }
          )
        },
      })
    ),
    Te = { nonameId: 0 },
    Le = {
      version: String,
      name: [String, Number],
      title: {},
      description: {},
      default: {},
      readOnly: { type: Boolean, default: void 0 },
      writeOnly: { type: Boolean, default: void 0 },
      enum: {},
      const: {},
      multipleOf: Number,
      maximum: Number,
      exclusiveMaximum: Number,
      minimum: Number,
      exclusiveMinimum: Number,
      maxLength: Number,
      minLength: Number,
      pattern: {},
      maxItems: Number,
      minItems: Number,
      uniqueItems: { type: Boolean, default: void 0 },
      maxProperties: Number,
      minProperties: Number,
      required: { type: [Boolean, Array, String], default: void 0 },
      format: String,
      properties: {},
      items: {},
      additionalItems: {},
      patternProperties: {},
      additionalProperties: {},
      xIndex: Number,
      xPattern: {},
      xDisplay: {},
      xValidator: {},
      xDecorator: {},
      xDecoratorProps: {},
      xComponent: {},
      xComponentProps: {},
      xReactions: {},
      xContent: {},
      xVisible: { type: Boolean, default: void 0 },
      xHidden: { type: Boolean, default: void 0 },
      xDisabled: { type: Boolean, default: void 0 },
      xEditable: { type: Boolean, default: void 0 },
      xReadOnly: { type: Boolean, default: void 0 },
      xReadPretty: { type: Boolean, default: void 0 },
    }
  function Ue(e) {
    var t = W({
        name: 'SchemaField',
        inheritAttrs: !1,
        props: {
          schema: {},
          scope: {},
          components: {},
          basePath: {},
          title: {},
          description: {},
          value: {},
          initialValue: {},
          validator: {},
          dataSource: {},
          name: [String, Number],
          decorator: Array,
          component: Array,
          reactions: Array,
          display: String,
          pattern: String,
          required: { type: Boolean, default: void 0 },
          validateFirst: { type: Boolean, default: void 0 },
          hidden: { type: Boolean, default: void 0 },
          visible: { type: Boolean, default: void 0 },
          editable: { type: Boolean, default: void 0 },
          disabled: { type: Boolean, default: void 0 },
          readOnly: { type: Boolean, default: void 0 },
          readPretty: { type: Boolean, default: void 0 },
        },
        setup: function (t, r) {
          var n = r.slots,
            o = H(function () {
              return Formily.JSONSchema.Schema.isSchemaInstance(t.schema)
                ? t.schema
                : new Formily.JSONSchema.Schema(T({ type: 'object' }, t.schema))
            }),
            i = H(function () {
              return T(T({}, e.scope), t.scope)
            }),
            a = H(function () {
              return T(T({}, e), {
                components: T(T({}, e.components), t.components),
              })
            })
          return (
            Y(ae, o),
            Y(se, a),
            Y(ue, i),
            function () {
              return (
                (Te.nonameId = 0),
                Be(
                  Ie,
                  {},
                  {
                    default: function () {
                      var e = []
                      return (
                        n.default &&
                          e.push(
                            Be(
                              'template',
                              {},
                              {
                                default: function () {
                                  return n.default()
                                },
                              }
                            )
                          ),
                        e.push(
                          Be(
                            qe,
                            { attrs: T(T({}, t), { schema: o.value }) },
                            {}
                          )
                        ),
                        e
                      )
                    },
                  }
                )
              )
            }
          )
        },
      }),
      r = W({
        name: 'MarkupField',
        props: Object.assign({}, Le, { type: String }),
        setup: function (e, t) {
          var r = t.slots,
            n = G(ae, null)
          if (!n || !n.value)
            return function () {
              return Be(Ie, {}, {})
            }
          var o = (function (e) {
              var t = {}
              return (
                Object.keys(e).forEach(function (r) {
                  0 === r.indexOf('x') && -1 === r.indexOf('x-')
                    ? (t[Formily.Shared.paramCase(r)] = e[r])
                    : (t[r] = e[r])
                }),
                t
              )
            })(e),
            i = e.name || 'NO_NAME_FIELD_$'.concat(Te.nonameId++),
            a = ee(null)
          return (
            re(
              n,
              function () {
                if ('object' === n.value.type || 'void' === n.value.type)
                  a.value = n.value.addProperty(i, o)
                else if ('array' === n.value.type) {
                  var e = (function (e) {
                    return n.value.items
                      ? n.value.addProperty(i, e)
                      : n.value.setItems(o)
                  })(o)
                  a.value = Array.isArray(e) ? e[0] : e
                }
              },
              { immediate: !0 }
            ),
            Y(ae, a),
            function () {
              var e = {}
              return (
                r.default &&
                  (e.default = function () {
                    return r.default()
                  }),
                Be(Ie, {}, e)
              )
            }
          )
        },
      }),
      n = function (e, t) {
        return W({
          name: t,
          props: Object.assign({}, Le),
          setup: function (t, n) {
            var o = n.slots
            return function () {
              return Be(r, { attrs: T(T({}, t), { type: e }) }, o)
            }
          },
        })
      }
    return {
      SchemaField: t,
      SchemaMarkupField: r,
      SchemaStringField: n('string', 'SchemaStringField'),
      SchemaObjectField: n('object', 'SchemaObjectField'),
      SchemaArrayField: n('array', 'SchemaArrayField'),
      SchemaBooleanField: n('boolean', 'SchemaBooleanField'),
      SchemaDateField: n('date', 'SchemaDateField'),
      SchemaDateTimeField: n('datetime', 'SchemaDatetimeField'),
      SchemaVoidField: n('void', 'SchemaVoidField'),
      SchemaNumberField: n('number', 'SchemaNumberField'),
    }
  }
  var He = De,
    We = Me,
    ze = _e,
    Ge = Je,
    Ke = qe,
    Qe = Re,
    Xe = je,
    Ye = Ue,
    Ze = Object.freeze({
      __proto__: null,
      Field: He,
      ArrayField: We,
      ObjectField: ze,
      VoidField: Ge,
      RecursionField: Ke,
      FormConsumer: Qe,
      FormProvider: Xe,
      createSchemaField: Ye,
    })
  ;(e.ArrayField = Me),
    (e.Field = De),
    (e.FieldSymbol = ie),
    (e.FormConsumer = Re),
    (e.FormProvider = je),
    (e.FormSymbol = oe),
    (e.Fragment = Ie),
    (e.ObjectField = _e),
    (e.RecursionField = qe),
    (e.Schema = q),
    (e.SchemaExpressionScopeSymbol = ue),
    (e.SchemaMarkupSymbol = ae),
    (e.SchemaOptionsSymbol = se),
    (e.SchemaSymbol = le),
    (e.VoidField = Je),
    (e.Vue2Components = Ze),
    (e.connect = function (e) {
      for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
      var n = t.reduce(function (e, t) {
        return t(e)
      }, e)
      return K({
        functional: !0,
        render: function (e, t) {
          return e(n, t.data, t.children)
        },
      })
    }),
    (e.createForm = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      var r = Formily.Core.createForm.apply(void 0, U([], L(e)))
      return K(r)
    }),
    (e.createSchemaField = Ue),
    (e.h = Be),
    (e.mapProps = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      return function (t) {
        return Formily.ReactiveVue.observer(
          W({
            setup: function (r, n) {
              var o = n.attrs,
                i = n.slots,
                a = n.listeners,
                l = we()
              return function () {
                var r,
                  n,
                  u = l.value
                    ? ((r = T({}, o)),
                      (n = l.value),
                      e.reduce(function (e, t) {
                        return (
                          Formily.Shared.isFn(t)
                            ? (e = Object.assign(e, t(e, n)))
                            : Formily.Shared.each(t, function (t, r) {
                                var o = Formily.Shared.FormPath.getIn(n, r),
                                  i = Formily.Shared.isStr(t) ? t : r
                                'value' === r && t !== r && delete e.value,
                                  Formily.Shared.FormPath.setIn(e, i, o)
                              }),
                          e
                        )
                      }, r))
                    : T({}, o)
                return Be(t, { attrs: T({}, u), on: a }, i)
              }
            },
          })
        )
      }
    }),
    (e.mapReadPretty = function (e, t) {
      return function (r) {
        return Formily.ReactiveVue.observer(
          W({
            setup: function (n, o) {
              var i = o.attrs,
                a = o.slots,
                l = o.listeners,
                u = we()
              return function () {
                var n = u.value
                return Be(
                  n &&
                    !Formily.Core.isVoidField(n) &&
                    'readPretty' === n.pattern
                    ? e
                    : r,
                  { attrs: T(T({}, t), i), on: l },
                  a
                )
              }
            },
          })
        )
      }
    }),
    (e.useField = we),
    (e.useFieldSchema = function () {
      return G(le, Z())
    }),
    (e.useForm = Ne),
    (e.useFormEffects = function (e) {
      var t = Ne(),
        r = Formily.Shared.uid()
      t.value.addEffects(r, e),
        Q(function () {
          t.value.removeEffects(r)
        })
    }),
    (e.useParentForm = function () {
      var e = we(),
        t = Ne(),
        r = function (e) {
          return e
            ? Formily.Core.isObjectField(e)
              ? e
              : r(null == e ? void 0 : e.parent)
            : t.value
        }
      return H(function () {
        return r(e.value)
      })
    }),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
//# sourceMappingURL=formily.vue.umd.production.js.map
