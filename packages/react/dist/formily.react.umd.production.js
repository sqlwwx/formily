!(function (e, r) {
  'object' == typeof exports && 'undefined' != typeof module
    ? r(exports, require('react-is'))
    : 'function' == typeof define && define.amd
    ? define('formily.react', ['exports', 'react-is'], r)
    : r(
        (((e =
          'undefined' != typeof globalThis ? globalThis : e || self).Formily =
          e.Formily || {}),
        (e.Formily.React = {}))
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
  var r = Symbol.for('__REVA_ACTIONS'),
    t = {
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
    i = {
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
    o = Object.prototype.hasOwnProperty,
    a = function (e) {
      return (
        ('$$typeof' in e && '_owner' in e) ||
        !!e._isAMomentObject ||
        !!_.isSchemaInstance(e) ||
        !!e[r] ||
        !!Formily.Shared.isFn(e.toJS) ||
        !!Formily.Shared.isFn(e.toJSON) ||
        !!Formily.Reactive.isObservable(e)
      )
    },
    l = function (e, r, t) {
      Formily.Reactive.untracked(function () {
        var o,
          a,
          l = Formily.Shared.FormPath.parse(r).segments,
          c = l[0],
          u = 'enum' === c && Formily.Shared.isArr(t),
          s = n[c]
        s
          ? Formily.Shared.FormPath.setIn(
              e,
              [s].concat(l.slice(1)),
              u
                ? ((a = t),
                  Formily.Shared.toArr(a).map(function (e) {
                    return 'object' == typeof e ? e : { label: e, value: e }
                  }))
                : t
            )
          : i[c] &&
            (null === (o = e.setValidatorRule) ||
              void 0 === o ||
              o.call(e, c, t))
      })
    },
    c = /^\s*\{\{([\s\S]*)\}\}\s*$/,
    u = {
      silent: !1,
      compile: function (e, r) {
        if ((void 0 === r && (r = {}), !u.silent))
          return new Function(
            '$root',
            'with($root) { return ('.concat(e, '); }')
          )(r)
        try {
          return new Function(
            '$root',
            'with($root) { return ('.concat(e, '); }')
          )(r)
        } catch (e) {}
      },
    },
    s = function (e) {
      void 0 === e && (e = !0), (u.silent = !!e)
    },
    d = function (e) {
      Formily.Shared.isFn(e) && (u.compile = e)
    },
    m = function (e, r) {
      if (Formily.Shared.isStr(e)) {
        var t = e.match(c)
        return t ? u.compile(t[1], r) : e
      }
      return e
    },
    f = function (e, r) {
      var t = [],
        n = function (e) {
          if (Formily.Shared.isStr(e)) return m(e, r)
          if (Formily.Shared.isArr(e))
            return e.map(function (e) {
              return n(e)
            })
          if (Formily.Shared.isPlainObj(e)) {
            if (a(e)) return e
            if (t.indexOf(e) > -1) return e
            var i = t.length
            t.push(e)
            var o = Formily.Shared.reduce(
              e,
              function (e, r, t) {
                return (e[t] = n(r)), e
              },
              {}
            )
            return t.splice(i, 1), o
          }
          return e
        }
      return n(e)
    },
    p = function (e, r, t) {
      !(function (e, r) {
        var t = [],
          n = e,
          i = function (e, o) {
            if ((void 0 === o && (o = []), Formily.Shared.isPlainObj(e))) {
              if (t.indexOf(e) > -1) return
              var l = t.length
              if ((t.push(e), a(e) && n !== e)) return void r(e, o)
              Formily.Shared.each(e, function (e, r) {
                i(e, o.concat(r))
              }),
                t.splice(l, 1)
            } else r(e, o)
          }
        i(e)
      })(r, function (r, n) {
        var i = Formily.Shared.FormPath.parse(n),
          a = f(r, t),
          l = i.segments[0]
        void 0 !== a &&
          o.call(e, l) &&
          Formily.Reactive.untracked(function () {
            return Formily.Shared.FormPath.setIn(e, i, a)
          })
      })
    },
    v = function (e, r, n, i) {
      void 0 === i && (i = !1),
        (function (e, r) {
          void 0 !== e['x-validator'] && r(e['x-validator'], ['x-validator'])
          var n = [],
            i = e,
            o = function (e, l) {
              if (
                (void 0 === l && (l = []),
                'x-validator' !== l[0] &&
                  'version' !== l[0] &&
                  '_isJSONSchemaObject' !== l[0] &&
                  !(
                    (-1 == String(l[0]).indexOf('x-') &&
                      Formily.Shared.isFn(e)) ||
                    t[l[0]]
                  ))
              )
                if (Formily.Shared.isPlainObj(e)) {
                  if ('default' === l[0] || 'x-value' === l[0])
                    return void r(e, l)
                  if (n.indexOf(e) > -1) return
                  var c = n.length
                  if ((n.push(e), a(e) && i !== e)) return void r(e, l)
                  Formily.Shared.each(e, function (e, r) {
                    o(e, l.concat(r))
                  }),
                    n.splice(c, 1)
                } else r(e, l)
            }
          o(e)
        })(r, function (r, t) {
          var o = r,
            a = Formily.Reactive.hasCollected(function () {
              o = f(r, n)
            })
          void 0 !== o && ((i && !a && e.initialized) || l(e, t, o))
        })
    },
    y = function () {
      return (
        (y =
          Object.assign ||
          function (e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
              for (var i in (r = arguments[t]))
                Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
            return e
          }),
        y.apply(this, arguments)
      )
    },
    h = function (e, r) {
      var t = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!t) return e
      var n,
        i,
        o = t.call(e),
        a = []
      try {
        for (; (void 0 === r || r-- > 0) && !(n = o.next()).done; )
          a.push(n.value)
      } catch (e) {
        i = { error: e }
      } finally {
        try {
          n && !n.done && (t = o.return) && t.call(o)
        } finally {
          if (i) throw i.error
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
    P = function (e, r, t) {
      var n = h(String(r).split(/\s*#\s*/), 2),
        i = n[0],
        o = n[1]
      return e.query(i).getIn(o || t || 'value')
    },
    R = function (e, r) {
      void 0 === r && (r = !1)
      var t = e || {},
        n = t.request,
        i = t.target,
        o = t.runner,
        a = t.field,
        l = t.scope
      n &&
        (i
          ? (n.state &&
              a.form.setFieldState(i, function (e) {
                return p(e, n.state, y(y({}, l), { $target: e }))
              }),
            n.schema &&
              a.form.setFieldState(i, function (e) {
                return v(e, n.schema, y(y({}, l), { $target: e }), r)
              }),
            Formily.Shared.isStr(o) &&
              o &&
              a.form.setFieldState(i, function (e) {
                m(
                  '{{function(){'.concat(o, '}}}'),
                  y(y({}, l), { $target: e })
                )()
              }))
          : (n.state &&
              a.setState(function (e) {
                return p(e, n.state, l)
              }),
            n.schema &&
              a.setState(function (e) {
                return v(e, n.schema, l, r)
              }),
            Formily.Shared.isStr(o) &&
              o &&
              m('{{function(){'.concat(o, '}}}'), l)()))
    },
    b = function (e, r) {
      void 0 === r && (r = {})
      var t = Formily.Reactive.autorun.effect,
        n = Formily.Reactive.autorun.memo,
        i = e,
        o = e.form,
        a = e.form.values
      return y(y({}, r.scope), {
        $form: o,
        $self: i,
        $observable: function (e, r) {
          return Formily.Reactive.autorun.memo(function () {
            return Formily.Reactive.observable(e)
          }, r)
        },
        $effect: t,
        $memo: n,
        $props: function (r) {
          return e.setComponentProps(r)
        },
        $values: a,
      })
    },
    g = function (e, r) {
      return function (t) {
        R({ field: t, request: { schema: e }, scope: b(t, r) }, !0)
      }
    },
    x = function (e, r) {
      return function (t) {
        var n = Formily.Shared.toArr(e['x-reactions']),
          i = b(t, r)
        n.forEach(function (e) {
          var r = m(e, i)
          if (r) {
            if (Formily.Shared.isFn(r)) return r(t)
            var n = r.when,
              o = r.fulfill,
              a = r.otherwise,
              l = r.target,
              c = r.effects,
              u = function () {
                var e = (function (e, r) {
                    if (Formily.Shared.isArr(r)) {
                      var t = []
                      return (
                        r.forEach(function (r) {
                          Formily.Shared.isStr(r)
                            ? t.push(P(e, r))
                            : Formily.Shared.isPlainObj(r) &&
                              r.name &&
                              r.source &&
                              (t[r.name] = P(e, r.source, r.property))
                        }),
                        t
                      )
                    }
                    return Formily.Shared.isPlainObj(r)
                      ? Formily.Shared.reduce(
                          r,
                          function (r, t, n) {
                            return (r[n] = P(e, t)), r
                          },
                          {}
                        )
                      : []
                  })(t, r.dependencies),
                  c = e,
                  u = y(y({}, i), {
                    $target: null,
                    $deps: e,
                    $dependencies: c,
                  }),
                  s = m(n, u),
                  d = !n || s,
                  f = d ? o : a,
                  p = d
                    ? null == o
                      ? void 0
                      : o.run
                    : null == a
                    ? void 0
                    : a.run
                R({ field: t, target: l, request: f, runner: p, scope: u })
              }
            l && (r.effects = (null == c ? void 0 : c.length) ? c : S),
              r.effects
                ? Formily.Reactive.autorun.memo(function () {
                    Formily.Reactive.untracked(function () {
                      Formily.Shared.each(r.effects, function (e) {
                        F[e] && F[e](t.address, u)
                      })
                    })
                  }, [])
                : u()
          }
        })
      }
    },
    O = function () {
      return (
        (O =
          Object.assign ||
          function (e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
              for (var i in (r = arguments[t]))
                Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
            return e
          }),
        O.apply(this, arguments)
      )
    },
    E = [],
    C = {},
    w = function () {
      for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]
      e.forEach(function (e) {
        Formily.Shared.isFn(e) && E.push(e)
      })
    },
    N = function (e, r) {
      e && Formily.Shared.isFn(r) && ((C[e] = C[e] || []), C[e].push(r))
    },
    j = function (e) {
      Formily.Shared.isArr(e) &&
        e.forEach(function (e) {
          Formily.Shared.isArr(C[e]) &&
            C[e].forEach(function (e) {
              w(e)
            })
        })
    },
    I = function () {
      return (
        (I =
          Object.assign ||
          function (e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
              for (var i in (r = arguments[t]))
                Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
            return e
          }),
        I.apply(this, arguments)
      )
    },
    V = function (e, r) {
      var t = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!t) return e
      var n,
        i,
        o = t.call(e),
        a = []
      try {
        for (; (void 0 === r || r-- > 0) && !(n = o.next()).done; )
          a.push(n.value)
      } catch (e) {
        i = { error: e }
      } finally {
        try {
          n && !n.done && (t = o.return) && t.call(o)
        } finally {
          if (i) throw i.error
        }
      }
      return a
    },
    A = function (e, r, t) {
      if (t || 2 === arguments.length)
        for (var n, i = 0, o = r.length; i < o; i++)
          (!n && i in r) ||
            (n || (n = Array.prototype.slice.call(r, 0, i)), (n[i] = r[i]))
      return e.concat(n || Array.prototype.slice.call(r))
    },
    $ = [
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
    M = {},
    k = function (e) {
      if (Formily.Shared.isStr(e)) return e.replace(/\$value/, '$self.value')
    },
    T = function (e) {
      var r
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
            ((r = e['x-linkages']),
            Formily.Shared.isArr(r)
              ? r.reduce(function (e, r) {
                  return r
                    ? 'value:visible' === r.type
                      ? e.concat({
                          target: r.target,
                          when: k(r.condition),
                          fulfill: { state: { visible: !0 } },
                          otherwise: { state: { visible: !1 } },
                        })
                      : 'value:schema' === r.type
                      ? e.concat({
                          target: r.target,
                          when: k(r.condition),
                          fulfill: {
                            schema: T(I({ version: '1.0' }, r.schema)),
                          },
                          otherwise: {
                            schema: T(I({ version: '1.0' }, r.otherwise)),
                          },
                        })
                      : 'value:state' === r.type
                      ? e.concat({
                          target: r.target,
                          when: k(r.condition),
                          fulfill: { state: r.state },
                          otherwise: { state: r.otherwise },
                        })
                      : void 0
                    : e
                }, [])
              : [])
          )),
          delete e['x-linkages']),
        e['x-component']
          ? $.some(function (r) {
              return (
                Formily.Shared.lowerCase(r) ===
                Formily.Shared.lowerCase(e['x-component'])
              )
            }) && (e.type = 'void')
          : M[e.type] && (e['x-component'] = M[e.type]),
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
  N('1.0', T)
  var D = function (e) {
      $.push.apply($, A([], V(e), !1))
    },
    J = function (e) {
      Object.assign(M, e)
    },
    _ = (function () {
      function e(r, n) {
        var i = this
        return (
          (this._isJSONSchemaObject = !0),
          (this.version = '2.0'),
          (this.addProperty = function (r, t) {
            return (
              (i.properties = i.properties || {}),
              (i.properties[r] = new e(t, i)),
              (i.properties[r].name = r),
              i.properties[r]
            )
          }),
          (this.removeProperty = function (e) {
            var r = i.properties[e]
            return delete i.properties[e], r
          }),
          (this.setProperties = function (e) {
            for (var r in e) i.addProperty(r, e[r])
            return i
          }),
          (this.addPatternProperty = function (r, t) {
            if (t)
              return (
                (i.patternProperties = i.patternProperties || {}),
                (i.patternProperties[r] = new e(t, i)),
                (i.patternProperties[r].name = r),
                i.patternProperties[r]
              )
          }),
          (this.removePatternProperty = function (e) {
            var r = i.patternProperties[e]
            return delete i.patternProperties[e], r
          }),
          (this.setPatternProperties = function (e) {
            if (!e) return i
            for (var r in e) i.addPatternProperty(r, e[r])
            return i
          }),
          (this.setAdditionalProperties = function (r) {
            if (r)
              return (i.additionalProperties = new e(r)), i.additionalProperties
          }),
          (this.setItems = function (r) {
            if (r)
              return (
                Array.isArray(r)
                  ? (i.items = r.map(function (r) {
                      return new e(r, i)
                    }))
                  : (i.items = new e(r, i)),
                i.items
              )
          }),
          (this.setAdditionalItems = function (r) {
            if (r) return (i.additionalItems = new e(r, i)), i.additionalItems
          }),
          (this.findDefinitions = function (e) {
            if (e && i.root && Formily.Shared.isStr(e) && 0 === e.indexOf('#/'))
              return Formily.Shared.FormPath.getIn(
                i.root,
                e.substring(2).split('/')
              )
          }),
          (this.mapProperties = function (r) {
            return e.getOrderProperties(i).map(function (e, t) {
              var n = e.schema,
                i = e.key
              return r(n, i, t)
            })
          }),
          (this.mapPatternProperties = function (r) {
            return e
              .getOrderProperties(i, 'patternProperties')
              .map(function (e, t) {
                var n = e.schema,
                  i = e.key
                return r(n, i, t)
              })
          }),
          (this.reduceProperties = function (r, t) {
            var n = t
            return (
              e.getOrderProperties(i, 'properties').forEach(function (e, t) {
                var i = e.schema,
                  o = e.key
                n = r(n, i, o, t)
              }),
              n
            )
          }),
          (this.reducePatternProperties = function (r, t) {
            var n = t
            return (
              e
                .getOrderProperties(i, 'patternProperties')
                .forEach(function (e, t) {
                  var i = e.schema,
                    o = e.key
                  n = r(n, i, o, t)
                }),
              n
            )
          }),
          (this.compile = function (r) {
            var n = new e({}, i.parent)
            return (
              Formily.Shared.each(i, function (e, i) {
                ;(Formily.Shared.isFn(e) && !i.includes('x-')) ||
                  ('parent' !== i &&
                    'root' !== i &&
                    (n[i] = t[i] ? (e ? m(e, r) : e) : e ? f(e, r) : e))
              }),
              n
            )
          }),
          (this.fromJSON = function (r) {
            return r
              ? e.isSchemaInstance(r)
                ? r
                : (Formily.Shared.each(
                    ((t = r),
                    E.reduce(function (e, r) {
                      return r(e)
                    }, O({}, t))),
                    function (e, r) {
                      ;(Formily.Shared.isFn(e) && !r.includes('x-')) ||
                        ('properties' === r
                          ? i.setProperties(e)
                          : 'patternProperties' === r
                          ? i.setPatternProperties(e)
                          : 'additionalProperties' === r
                          ? i.setAdditionalProperties(e)
                          : 'items' === r
                          ? i.setItems(e)
                          : 'additionalItems' === r
                          ? i.setAdditionalItems(e)
                          : '$ref' === r
                          ? i.fromJSON(i.findDefinitions(e))
                          : (i[r] = e))
                    }
                  ),
                  i)
              : i
            var t
          }),
          (this.toJSON = function (e) {
            void 0 === e && (e = !0)
            var r = {}
            return (
              Formily.Shared.each(i, function (t, n) {
                var i, o
                if (
                  (!Formily.Shared.isFn(t) || n.includes('x-')) &&
                  'parent' !== n &&
                  'root' !== n
                )
                  if ('properties' === n || 'patternProperties' === n) {
                    if (!e) return
                    r[n] = Formily.Shared.map(t, function (e) {
                      var r
                      return null === (r = null == e ? void 0 : e.toJSON) ||
                        void 0 === r
                        ? void 0
                        : r.call(e)
                    })
                  } else if (
                    'additionalProperties' === n ||
                    'additionalItems' === n
                  ) {
                    if (!e) return
                    r[n] =
                      null === (i = null == t ? void 0 : t.toJSON) ||
                      void 0 === i
                        ? void 0
                        : i.call(t)
                  } else if ('items' === n) {
                    if (!e) return
                    Array.isArray(t)
                      ? (r[n] = t.map(function (e) {
                          var r
                          return null === (r = null == e ? void 0 : e.toJSON) ||
                            void 0 === r
                            ? void 0
                            : r.call(e)
                        }))
                      : (r[n] =
                          null === (o = null == t ? void 0 : t.toJSON) ||
                          void 0 === o
                            ? void 0
                            : o.call(t))
                  } else r[n] = t
              }),
              r
            )
          }),
          (this.toFieldProps = function (e) {
            return (function (e, r) {
              return { name: e.name, reactions: [g(e, r), x(e, r)] }
            })(i, e)
          }),
          n ? ((this.parent = n), (this.root = n.root)) : (this.root = this),
          this.fromJSON(r)
        )
      }
      return (
        (e.getOrderProperties = function (e, r) {
          void 0 === e && (e = {}), void 0 === r && (r = 'properties')
          var t = [],
            n = []
          for (var i in e[r]) {
            var o = e[r][i],
              a = o['x-index']
            isNaN(a)
              ? n.push({ schema: o, key: i })
              : (t[a] = { schema: o, key: i })
          }
          return t.concat(n).filter(function (e) {
            return !!e
          })
        }),
        (e.compile = function (e, r) {
          return f(e, r)
        }),
        (e.shallowCompile = function (e, r) {
          return m(e, r)
        }),
        (e.isSchemaInstance = function (r) {
          return Formily.Shared.instOf(r, e)
        }),
        (e.registerCompiler = d),
        (e.registerPatches = w),
        (e.registerVoidComponents = D),
        (e.registerTypeDefaultComponents = J),
        (e.registerPolyfills = N),
        (e.enablePolyfills = j),
        (e.silent = s),
        e
      )
    })(),
    q = function (e) {
      var r = React.useRef(null)
      return (
        React.useEffect(
          function () {
            return (
              r.current && e !== r.current && r.current.onUnmount(),
              (r.current = e),
              e.onMount(),
              function () {
                e.onUnmount()
              }
            )
          },
          [e]
        ),
        e
      )
    },
    B = React.createContext(null),
    L = React.createContext(null),
    U = React.createContext(null),
    z = React.createContext(null),
    G = React.createContext(null),
    H = React.createContext(null),
    K = (function () {
      for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]
      return function (r) {
        var t = r.children
        return e.reduce(function (e, r) {
          return React.createElement(r.Provider, { value: void 0 }, e)
        }, t)
      }
    })(L, U, z, G, H),
    Q = function () {
      return (
        (Q =
          Object.assign ||
          function (e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
              for (var i in (r = arguments[t]))
                Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
            return e
          }),
        Q.apply(this, arguments)
      )
    }
  function W(e, r) {
    var t = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!t) return e
    var n,
      i,
      o = t.call(e),
      a = []
    try {
      for (; (void 0 === r || r-- > 0) && !(n = o.next()).done; )
        a.push(n.value)
    } catch (e) {
      i = { error: e }
    } finally {
      try {
        n && !n.done && (t = o.return) && t.call(o)
      } finally {
        if (i) throw i.error
      }
    }
    return a
  }
  function X(e, r) {
    for (var t = 0, n = r.length, i = e.length; t < n; t++, i++) e[i] = r[t]
    return e
  }
  var Y = function () {
      return React.useContext(B)
    },
    Z = function () {
      return React.useContext(L)
    }
  const ee = ReactIs
  var re = {
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
    te = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    ne = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    ie = {}
  function oe(e) {
    return ee.isMemo(e) ? ne : ie[e.$$typeof] || re
  }
  ;(ie[ee.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  }),
    (ie[ee.Memo] = ne)
  var ae = Object.defineProperty,
    le = Object.getOwnPropertyNames,
    ce = Object.getOwnPropertySymbols,
    ue = Object.getOwnPropertyDescriptor,
    se = Object.getPrototypeOf,
    de = Object.prototype
  var me = function e(r, t, n) {
    if ('string' != typeof t) {
      if (de) {
        var i = se(t)
        i && i !== de && e(r, i, n)
      }
      var o = le(t)
      ce && (o = o.concat(ce(t)))
      for (var a = oe(r), l = oe(t), c = 0; c < o.length; ++c) {
        var u = o[c]
        if (!(te[u] || (n && n[u]) || (l && l[u]) || (a && a[u]))) {
          var s = ue(t, u)
          try {
            ae(r, u, s)
          } catch (e) {}
        }
      }
    }
    return r
  }
  const fe = Formily.ReactiveReact.observer,
    pe = Formily.ReactiveReact.Observer
  var ve = function (e) {
    var r = q(e.form)
    return React.createElement(
      K,
      null,
      React.createElement(B.Provider, { value: r }, e.children)
    )
  }
  ve.displayName = 'FormProvider'
  var ye = Formily.ReactiveReact.observer(function (e) {
    var r = Formily.Shared.isFn(e.children) ? e.children(Y()) : null
    return React.createElement(React.Fragment, null, r)
  })
  ye.displayName = 'FormConsumer'
  var he = function (e) {
      for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t]
      return Formily.Shared.isFn(e) ? e.apply(void 0, X([], W(r))) : e
    },
    Fe = function (e) {
      var r,
        t = React.useContext(H)
      if (!e.field)
        return React.createElement(React.Fragment, null, he(e.children))
      var n = e.field,
        i = (function (e, r) {
          if (e || r) return React.createElement(React.Fragment, null, e, r)
        })(
          he(e.children, n, n.form),
          null !== (r = n.content) && void 0 !== r ? r : n.component[1].children
        )
      if ('visible' !== n.display) return null
      return (function (e) {
        var r
        if (!n.decorator[0]) return React.createElement(React.Fragment, null, e)
        var i =
          null !==
            (r = Formily.Shared.FormPath.getIn(
              null == t ? void 0 : t.components,
              n.decorator[0]
            )) && void 0 !== r
            ? r
            : n.decorator[0]
        return React.createElement(i, Formily.Reactive.toJS(n.decorator[1]), e)
      })(
        (function () {
          var e, r, o, a
          if (!n.component[0]) return i
          var l = Formily.Core.isVoidField(n) ? void 0 : n.value,
            c = Formily.Core.isVoidField(n)
              ? null === (e = n.component[1]) || void 0 === e
                ? void 0
                : e.onChange
              : function () {
                  for (var e, r, t = [], i = 0; i < arguments.length; i++)
                    t[i] = arguments[i]
                  n.onInput.apply(n, X([], W(t))),
                    null ===
                      (r =
                        null === (e = n.component[1]) || void 0 === e
                          ? void 0
                          : e.onChange) ||
                      void 0 === r ||
                      r.call.apply(r, X([e], W(t)))
                },
            u = Formily.Core.isVoidField(n)
              ? null === (r = n.component[1]) || void 0 === r
                ? void 0
                : r.onFocus
              : function () {
                  for (var e, r, t = [], i = 0; i < arguments.length; i++)
                    t[i] = arguments[i]
                  n.onFocus.apply(n, X([], W(t))),
                    null ===
                      (r =
                        null === (e = n.component[1]) || void 0 === e
                          ? void 0
                          : e.onFocus) ||
                      void 0 === r ||
                      r.call.apply(r, X([e], W(t)))
                },
            s = Formily.Core.isVoidField(n)
              ? null === (o = n.component[1]) || void 0 === o
                ? void 0
                : o.onBlur
              : function () {
                  for (var e, r, t = [], i = 0; i < arguments.length; i++)
                    t[i] = arguments[i]
                  n.onBlur.apply(n, X([], W(t))),
                    null ===
                      (r =
                        null === (e = n.component[1]) || void 0 === e
                          ? void 0
                          : e.onBlur) ||
                      void 0 === r ||
                      r.call.apply(r, X([e], W(t)))
                },
            d = Formily.Core.isVoidField(n)
              ? void 0
              : 'disabled' === n.pattern || 'readPretty' === n.pattern,
            m = Formily.Core.isVoidField(n) ? void 0 : 'readOnly' === n.pattern,
            f =
              null !==
                (a = Formily.Shared.FormPath.getIn(
                  null == t ? void 0 : t.components,
                  n.component[0]
                )) && void 0 !== a
                ? a
                : n.component[0]
          return React.createElement(
            f,
            Q(
              Q(
                { disabled: d, readOnly: m },
                Formily.Reactive.toJS(n.component[1])
              ),
              { value: l, onChange: c, onFocus: u, onBlur: s }
            ),
            i
          )
        })()
      )
    }
  Fe.displayName = 'ReactiveField'
  var Se = Formily.ReactiveReact.observer(Fe, { forwardRef: !0 }),
    Pe = function (e) {
      var r = Y(),
        t = Z(),
        n = q(
          r.createArrayField(Q({ basePath: null == t ? void 0 : t.address }, e))
        )
      return React.createElement(
        L.Provider,
        { value: n },
        React.createElement(Se, { field: n }, e.children)
      )
    }
  Pe.displayName = 'ArrayField'
  var Re = function (e) {
    var r = Y(),
      t = Z(),
      n = q(
        r.createObjectField(Q({ basePath: null == t ? void 0 : t.address }, e))
      )
    return React.createElement(
      L.Provider,
      { value: n },
      React.createElement(Se, { field: n }, e.children)
    )
  }
  Re.displayName = 'ObjectField'
  var be = function (e) {
    var r = Y(),
      t = Z(),
      n = q(
        r.createVoidField(Q({ basePath: null == t ? void 0 : t.address }, e))
      )
    return React.createElement(
      L.Provider,
      { value: n },
      React.createElement(Se, { field: n }, e.children)
    )
  }
  be.displayName = 'VoidField'
  var ge = function (e) {
    var r = Y(),
      t = Z(),
      n = q(r.createField(Q({ basePath: null == t ? void 0 : t.address }, e)))
    return React.createElement(
      L.Provider,
      { value: n },
      React.createElement(Se, { field: n }, e.children)
    )
  }
  ge.displayName = 'Field'
  var xe = function (e) {
      var r,
        t,
        n,
        i,
        o = (function (e) {
          var r = Z()
          return e.onlyRenderProperties
            ? e.basePath || (null == r ? void 0 : r.address.concat(e.name))
            : e.basePath || (null == r ? void 0 : r.address)
        })(e),
        a = React.useMemo(
          function () {
            return new Formily.JSONSchema.Schema(e.schema)
          },
          [e.schema]
        ),
        l =
          ((r = a),
          (t = React.useContext(H)),
          (n = React.useContext(G)),
          ((i = React.useRef()).current = n),
          r.toFieldProps(
            Q(Q({}, t), {
              get scope() {
                return Q(Q({}, t.scope), i.current)
              },
            })
          )),
        c = function (r) {
          if (!e.onlyRenderSelf) {
            var t = Formily.JSONSchema.Schema.getOrderProperties(a)
            if (t.length)
              return React.createElement(
                React.Fragment,
                null,
                t.map(function (t, n) {
                  var i = t.schema,
                    a = t.key,
                    l = (null == r ? void 0 : r.address) || o,
                    c = i
                  if (Formily.Shared.isFn(e.mapProperties)) {
                    var u = e.mapProperties(i, a)
                    u && (c = u)
                  }
                  return Formily.Shared.isFn(e.filterProperties) &&
                    !1 === e.filterProperties(c, a)
                    ? null
                    : React.createElement(xe, {
                        schema: c,
                        key: ''.concat(n, '-').concat(a),
                        name: a,
                        basePath: l,
                      })
                })
              )
          }
        }
      return a
        ? React.createElement(
            z.Provider,
            { value: a },
            Formily.Shared.isValid(e.name)
              ? 'object' === a.type
                ? e.onlyRenderProperties
                  ? c()
                  : React.createElement(
                      Re,
                      Q({}, l, { name: e.name, basePath: o }),
                      c
                    )
                : 'array' === a.type
                ? React.createElement(
                    Pe,
                    Q({}, l, { name: e.name, basePath: o })
                  )
                : 'void' === a.type
                ? e.onlyRenderProperties
                  ? c()
                  : React.createElement(
                      be,
                      Q({}, l, { name: e.name, basePath: o }),
                      c
                    )
                : React.createElement(
                    ge,
                    Q({}, l, { name: e.name, basePath: o })
                  )
              : c()
          )
        : React.createElement(React.Fragment, null)
    },
    Oe = { portalDOM: null },
    Ee = { nonameId: 0 }
  ;(e.ArrayField = Pe),
    (e.ContextCleaner = K),
    (e.Field = ge),
    (e.FieldContext = L),
    (e.FormConsumer = ye),
    (e.FormContext = B),
    (e.FormProvider = ve),
    (e.ObjectField = Re),
    (e.Observer = pe),
    (e.RecursionField = xe),
    (e.Schema = _),
    (e.SchemaContext = z),
    (e.SchemaExpressionScopeContext = G),
    (e.SchemaMarkupContext = U),
    (e.SchemaOptionsContext = H),
    (e.VoidField = be),
    (e.connect = function (e) {
      for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t]
      var n = r.reduce(function (e, r) {
          return r(e)
        }, e),
        i = React.forwardRef(function (e, r) {
          return React.createElement(n, Q(Q({}, e), { ref: r }))
        })
      return e && me(i, e), i
    }),
    (e.createSchemaField = function (e) {
      function r(r) {
        var t,
          n = Formily.JSONSchema.Schema.isSchemaInstance(r.schema)
            ? r.schema
            : new Formily.JSONSchema.Schema(Q({ type: 'object' }, r.schema))
        return React.createElement(
          H.Provider,
          {
            value: Q(Q({}, e), {
              components: Q(Q({}, e.components), r.components),
            }),
          },
          React.createElement(
            G.Provider,
            { value: Q(Q({}, e.scope), r.scope) },
            ((Ee.nonameId = 0),
            r.schema
              ? null
              : ((t = React.createElement(
                  U.Provider,
                  { value: n },
                  r.children
                )),
                Formily.Shared.globalThisPolyfill.document
                  ? ((Oe.portalDOM =
                      Oe.portalDOM ||
                      Formily.Shared.globalThisPolyfill.document.createElement(
                        'div'
                      )),
                    ReactDOM.createPortal(t, Oe.portalDOM))
                  : React.createElement('template', {}, t))),
            React.createElement(xe, Q({}, r, { schema: n }))
          )
        )
      }
      function t(e) {
        var r = React.useContext(U)
        if (!r) return React.createElement(React.Fragment, null)
        var t = function () {
            return React.createElement(React.Fragment, null, e.children)
          },
          n = e.name || 'NO_NAME_FIELD_$'.concat(Ee.nonameId++)
        if ('object' === r.type || 'void' === r.type) {
          var i = r.addProperty(n, e)
          return React.createElement(U.Provider, { value: i }, t())
        }
        if ('array' === r.type) {
          i = (function (t) {
            return r.items ? r.addProperty(n, t) : r.setItems(e)
          })(e)
          return React.createElement(
            U.Provider,
            { value: Array.isArray(i) ? i[0] : i },
            e.children
          )
        }
        return t()
      }
      function n(e) {
        return React.createElement(t, Q({}, e, { type: 'string' }))
      }
      function i(e) {
        return React.createElement(t, Q({}, e, { type: 'object' }))
      }
      function o(e) {
        return React.createElement(t, Q({}, e, { type: 'array' }))
      }
      function a(e) {
        return React.createElement(t, Q({}, e, { type: 'boolean' }))
      }
      function l(e) {
        return React.createElement(t, Q({}, e, { type: 'number' }))
      }
      function c(e) {
        return React.createElement(t, Q({}, e, { type: 'date' }))
      }
      function u(e) {
        return React.createElement(t, Q({}, e, { type: 'datetime' }))
      }
      function s(e) {
        return React.createElement(t, Q({}, e, { type: 'void' }))
      }
      return (
        void 0 === e && (e = {}),
        (r.displayName = 'SchemaField'),
        (t.displayName = 'MarkupField'),
        (n.displayName = 'StringField'),
        (i.displayName = 'ObjectField'),
        (o.displayName = 'ArrayField'),
        (a.displayName = 'BooleanField'),
        (l.displayName = 'NumberField'),
        (c.displayName = 'DateField'),
        (u.displayName = 'DateTimeField'),
        (s.displayName = 'VoidField'),
        (r.Markup = t),
        (r.String = n),
        (r.Object = i),
        (r.Array = o),
        (r.Boolean = a),
        (r.Date = c),
        (r.DateTime = u),
        (r.Void = s),
        (r.Number = l),
        r
      )
    }),
    (e.mapProps = function () {
      for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]
      return function (r) {
        return Formily.ReactiveReact.observer(
          function (t) {
            var n = Z(),
              i = e.reduce(function (e, r) {
                return (
                  Formily.Shared.isFn(r)
                    ? (e = Object.assign(e, r(e, n)))
                    : Formily.Shared.each(r, function (r, t) {
                        var i = Formily.Shared.FormPath.getIn(n, t),
                          o = Formily.Shared.isStr(r) ? r : t,
                          a = Formily.Shared.FormPath.getIn(e, o)
                        'value' === t && r !== t && delete e.value,
                          (Formily.Shared.isValid(a) &&
                            !Formily.Shared.isValid(i)) ||
                            Formily.Shared.FormPath.setIn(e, o, i)
                      }),
                  e
                )
              }, Q({}, t))
            return React.createElement(r, i)
          },
          { forwardRef: !0 }
        )
      }
    }),
    (e.mapReadPretty = function (e, r) {
      return function (t) {
        return Formily.ReactiveReact.observer(
          function (n) {
            var i = Z()
            return Formily.Core.isVoidField(i) ||
              'readPretty' !== (null == i ? void 0 : i.pattern)
              ? React.createElement(t, n)
              : React.createElement(e, Q(Q({}, r), n))
          },
          { forwardRef: !0 }
        )
      }
    }),
    (e.observer = fe),
    (e.useField = Z),
    (e.useFieldSchema = function () {
      return React.useContext(z)
    }),
    (e.useForm = Y),
    (e.useFormEffects = function (e) {
      var r = Y(),
        t = React.useMemo(function () {
          var t = Formily.Shared.uid()
          r.addEffects(t, e)
          var n = setTimeout(function () {
            r.removeEffects(t)
          }, 100)
          return { id: t, request: n }
        }, [])
      React.useLayoutEffect(function () {
        return (
          clearTimeout(t.request),
          function () {
            r.removeEffects(t.id)
          }
        )
      }, [])
    }),
    (e.useParentForm = function () {
      var e = Z(),
        r = Y(),
        t = function (e) {
          return e
            ? Formily.Core.isObjectField(e)
              ? e
              : t(null == e ? void 0 : e.parent)
            : r
        }
      return t(e)
    }),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
//# sourceMappingURL=formily.react.umd.production.js.map
