!(function (e, r) {
  'object' == typeof exports && 'undefined' != typeof module
    ? r(exports)
    : 'function' == typeof define && define.amd
    ? define('formily.json-schema', ['exports'], r)
    : r(
        (((e =
          'undefined' != typeof globalThis ? globalThis : e || self).Formily =
          e.Formily || {}),
        (e.Formily.JSONSchema = {}))
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
    i = {
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
    n = {
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
        !!R.isSchemaInstance(e) ||
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
          s = l[0],
          u = 'enum' === s && Formily.Shared.isArr(t),
          c = i[s]
        c
          ? Formily.Shared.FormPath.setIn(
              e,
              [c].concat(l.slice(1)),
              u
                ? ((a = t),
                  Formily.Shared.toArr(a).map(function (e) {
                    return 'object' == typeof e ? e : { label: e, value: e }
                  }))
                : t
            )
          : n[s] &&
            (null === (o = e.setValidatorRule) ||
              void 0 === o ||
              o.call(e, s, t))
      })
    },
    s = /^\s*\{\{([\s\S]*)\}\}\s*$/,
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
    c = function (e) {
      void 0 === e && (e = !0), (u.silent = !!e)
    },
    d = function (e) {
      Formily.Shared.isFn(e) && (u.compile = e)
    },
    f = function (e, r) {
      if (Formily.Shared.isStr(e)) {
        var t = e.match(s)
        return t ? u.compile(t[1], r) : e
      }
      return e
    },
    m = function (e, r) {
      var t = [],
        i = function (e) {
          if (Formily.Shared.isStr(e)) return f(e, r)
          if (Formily.Shared.isArr(e))
            return e.map(function (e) {
              return i(e)
            })
          if (Formily.Shared.isPlainObj(e)) {
            if (a(e)) return e
            if (t.indexOf(e) > -1) return e
            var n = t.length
            t.push(e)
            var o = Formily.Shared.reduce(
              e,
              function (e, r, t) {
                return (e[t] = i(r)), e
              },
              {}
            )
            return t.splice(n, 1), o
          }
          return e
        }
      return i(e)
    },
    p = function (e, r, t) {
      !(function (e, r) {
        var t = [],
          i = e,
          n = function (e, o) {
            if ((void 0 === o && (o = []), Formily.Shared.isPlainObj(e))) {
              if (t.indexOf(e) > -1) return
              var l = t.length
              if ((t.push(e), a(e) && i !== e)) return void r(e, o)
              Formily.Shared.each(e, function (e, r) {
                n(e, o.concat(r))
              }),
                t.splice(l, 1)
            } else r(e, o)
          }
        n(e)
      })(r, function (r, i) {
        var n = Formily.Shared.FormPath.parse(i),
          a = m(r, t),
          l = n.segments[0]
        void 0 !== a &&
          o.call(e, l) &&
          Formily.Reactive.untracked(function () {
            return Formily.Shared.FormPath.setIn(e, n, a)
          })
      })
    },
    h = function (e, r, i, n) {
      void 0 === n && (n = !1),
        (function (e, r) {
          void 0 !== e['x-validator'] && r(e['x-validator'], ['x-validator'])
          var i = [],
            n = e,
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
                  if (i.indexOf(e) > -1) return
                  var s = i.length
                  if ((i.push(e), a(e) && n !== e)) return void r(e, l)
                  Formily.Shared.each(e, function (e, r) {
                    o(e, l.concat(r))
                  }),
                    i.splice(s, 1)
                } else r(e, l)
            }
          o(e)
        })(r, function (r, t) {
          var o = r,
            a = Formily.Reactive.hasCollected(function () {
              o = m(r, i)
            })
          void 0 !== o && ((n && !a && e.initialized) || l(e, t, o))
        })
    },
    y = function () {
      return (
        (y =
          Object.assign ||
          function (e) {
            for (var r, t = 1, i = arguments.length; t < i; t++)
              for (var n in (r = arguments[t]))
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            return e
          }),
        y.apply(this, arguments)
      )
    }
  function v(e, r) {
    var t = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!t) return e
    var i,
      n,
      o = t.call(e),
      a = []
    try {
      for (; (void 0 === r || r-- > 0) && !(i = o.next()).done; )
        a.push(i.value)
    } catch (e) {
      n = { error: e }
    } finally {
      try {
        i && !i.done && (t = o.return) && t.call(o)
      } finally {
        if (n) throw n.error
      }
    }
    return a
  }
  var F = {
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
    x = function (e, r, t) {
      var i = v(String(r).split(/\s*#\s*/), 2),
        n = i[0],
        o = i[1]
      return e.query(n).getIn(o || t || 'value')
    },
    P = function (e, r) {
      void 0 === r && (r = !1)
      var t = e || {},
        i = t.request,
        n = t.target,
        o = t.runner,
        a = t.field,
        l = t.scope
      i &&
        (n
          ? (i.state &&
              a.form.setFieldState(n, function (e) {
                return p(e, i.state, y(y({}, l), { $target: e }))
              }),
            i.schema &&
              a.form.setFieldState(n, function (e) {
                return h(e, i.schema, y(y({}, l), { $target: e }), r)
              }),
            Formily.Shared.isStr(o) &&
              o &&
              a.form.setFieldState(n, function (e) {
                f(
                  '{{function(){'.concat(o, '}}}'),
                  y(y({}, l), { $target: e })
                )()
              }))
          : (i.state &&
              a.setState(function (e) {
                return p(e, i.state, l)
              }),
            i.schema &&
              a.setState(function (e) {
                return h(e, i.schema, l, r)
              }),
            Formily.Shared.isStr(o) &&
              o &&
              f('{{function(){'.concat(o, '}}}'), l)()))
    },
    g = function (e, r) {
      void 0 === r && (r = {})
      var t = Formily.Reactive.autorun.effect,
        i = Formily.Reactive.autorun.memo,
        n = e,
        o = e.form,
        a = e.form.values
      return y(y({}, r.scope), {
        $form: o,
        $self: n,
        $observable: function (e, r) {
          return Formily.Reactive.autorun.memo(function () {
            return Formily.Reactive.observable(e)
          }, r)
        },
        $effect: t,
        $memo: i,
        $props: function (r) {
          return e.setComponentProps(r)
        },
        $values: a,
      })
    },
    b = function (e, r) {
      return function (t) {
        P({ field: t, request: { schema: e }, scope: g(t, r) }, !0)
      }
    },
    O = function (e, r) {
      return function (t) {
        var i = Formily.Shared.toArr(e['x-reactions']),
          n = g(t, r)
        i.forEach(function (e) {
          var r = f(e, n)
          if (r) {
            if (Formily.Shared.isFn(r)) return r(t)
            var i = r.when,
              o = r.fulfill,
              a = r.otherwise,
              l = r.target,
              s = r.effects,
              u = function () {
                var e = (function (e, r) {
                    if (Formily.Shared.isArr(r)) {
                      var t = []
                      return (
                        r.forEach(function (r) {
                          Formily.Shared.isStr(r)
                            ? t.push(x(e, r))
                            : Formily.Shared.isPlainObj(r) &&
                              r.name &&
                              r.source &&
                              (t[r.name] = x(e, r.source, r.property))
                        }),
                        t
                      )
                    }
                    return Formily.Shared.isPlainObj(r)
                      ? Formily.Shared.reduce(
                          r,
                          function (r, t, i) {
                            return (r[i] = x(e, t)), r
                          },
                          {}
                        )
                      : []
                  })(t, r.dependencies),
                  s = e,
                  u = y(y({}, n), {
                    $target: null,
                    $deps: e,
                    $dependencies: s,
                  }),
                  c = f(i, u),
                  d = !i || c,
                  m = d ? o : a,
                  p = d
                    ? null == o
                      ? void 0
                      : o.run
                    : null == a
                    ? void 0
                    : a.run
                P({ field: t, target: l, request: m, runner: p, scope: u })
              }
            l && (r.effects = (null == s ? void 0 : s.length) ? s : S),
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
    w = [],
    I = {},
    C = function () {
      for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]
      e.forEach(function (e) {
        Formily.Shared.isFn(e) && w.push(e)
      })
    },
    V = function (e, r) {
      e && Formily.Shared.isFn(r) && ((I[e] = I[e] || []), I[e].push(r))
    },
    $ = function (e) {
      Formily.Shared.isArr(e) &&
        e.forEach(function (e) {
          Formily.Shared.isArr(I[e]) &&
            I[e].forEach(function (e) {
              C(e)
            })
        })
    },
    A = [
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
    j = {},
    N = function (e) {
      if (Formily.Shared.isStr(e)) return e.replace(/\$value/, '$self.value')
    },
    k = function (e) {
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
                          when: N(r.condition),
                          fulfill: { state: { visible: !0 } },
                          otherwise: { state: { visible: !1 } },
                        })
                      : 'value:schema' === r.type
                      ? e.concat({
                          target: r.target,
                          when: N(r.condition),
                          fulfill: {
                            schema: k(y({ version: '1.0' }, r.schema)),
                          },
                          otherwise: {
                            schema: k(y({ version: '1.0' }, r.otherwise)),
                          },
                        })
                      : 'value:state' === r.type
                      ? e.concat({
                          target: r.target,
                          when: N(r.condition),
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
          ? A.some(function (r) {
              return (
                Formily.Shared.lowerCase(r) ===
                Formily.Shared.lowerCase(e['x-component'])
              )
            }) && (e.type = 'void')
          : j[e.type] && (e['x-component'] = j[e.type]),
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
  V('1.0', k)
  var J = function (e) {
      A.push.apply(
        A,
        (function (e, r) {
          for (var t = 0, i = r.length, n = e.length; t < i; t++, n++)
            e[n] = r[t]
          return e
        })([], v(e))
      )
    },
    E = function (e) {
      Object.assign(j, e)
    },
    R = (function () {
      function e(r, i) {
        var n = this
        return (
          (this._isJSONSchemaObject = !0),
          (this.version = '2.0'),
          (this.addProperty = function (r, t) {
            return (
              (n.properties = n.properties || {}),
              (n.properties[r] = new e(t, n)),
              (n.properties[r].name = r),
              n.properties[r]
            )
          }),
          (this.removeProperty = function (e) {
            var r = n.properties[e]
            return delete n.properties[e], r
          }),
          (this.setProperties = function (e) {
            for (var r in e) n.addProperty(r, e[r])
            return n
          }),
          (this.addPatternProperty = function (r, t) {
            if (t)
              return (
                (n.patternProperties = n.patternProperties || {}),
                (n.patternProperties[r] = new e(t, n)),
                (n.patternProperties[r].name = r),
                n.patternProperties[r]
              )
          }),
          (this.removePatternProperty = function (e) {
            var r = n.patternProperties[e]
            return delete n.patternProperties[e], r
          }),
          (this.setPatternProperties = function (e) {
            if (!e) return n
            for (var r in e) n.addPatternProperty(r, e[r])
            return n
          }),
          (this.setAdditionalProperties = function (r) {
            if (r)
              return (n.additionalProperties = new e(r)), n.additionalProperties
          }),
          (this.setItems = function (r) {
            if (r)
              return (
                Array.isArray(r)
                  ? (n.items = r.map(function (r) {
                      return new e(r, n)
                    }))
                  : (n.items = new e(r, n)),
                n.items
              )
          }),
          (this.setAdditionalItems = function (r) {
            if (r) return (n.additionalItems = new e(r, n)), n.additionalItems
          }),
          (this.findDefinitions = function (e) {
            if (e && n.root && Formily.Shared.isStr(e) && 0 === e.indexOf('#/'))
              return Formily.Shared.FormPath.getIn(
                n.root,
                e.substring(2).split('/')
              )
          }),
          (this.mapProperties = function (r) {
            return e.getOrderProperties(n).map(function (e, t) {
              var i = e.schema,
                n = e.key
              return r(i, n, t)
            })
          }),
          (this.mapPatternProperties = function (r) {
            return e
              .getOrderProperties(n, 'patternProperties')
              .map(function (e, t) {
                var i = e.schema,
                  n = e.key
                return r(i, n, t)
              })
          }),
          (this.reduceProperties = function (r, t) {
            var i = t
            return (
              e.getOrderProperties(n, 'properties').forEach(function (e, t) {
                var n = e.schema,
                  o = e.key
                i = r(i, n, o, t)
              }),
              i
            )
          }),
          (this.reducePatternProperties = function (r, t) {
            var i = t
            return (
              e
                .getOrderProperties(n, 'patternProperties')
                .forEach(function (e, t) {
                  var n = e.schema,
                    o = e.key
                  i = r(i, n, o, t)
                }),
              i
            )
          }),
          (this.compile = function (r) {
            var i = new e({}, n.parent)
            return (
              Formily.Shared.each(n, function (e, n) {
                ;(Formily.Shared.isFn(e) && !n.includes('x-')) ||
                  ('parent' !== n &&
                    'root' !== n &&
                    (i[n] = t[n] ? (e ? f(e, r) : e) : e ? m(e, r) : e))
              }),
              i
            )
          }),
          (this.fromJSON = function (r) {
            return r
              ? e.isSchemaInstance(r)
                ? r
                : (Formily.Shared.each(
                    ((t = r),
                    w.reduce(function (e, r) {
                      return r(e)
                    }, y({}, t))),
                    function (e, r) {
                      ;(Formily.Shared.isFn(e) && !r.includes('x-')) ||
                        ('properties' === r
                          ? n.setProperties(e)
                          : 'patternProperties' === r
                          ? n.setPatternProperties(e)
                          : 'additionalProperties' === r
                          ? n.setAdditionalProperties(e)
                          : 'items' === r
                          ? n.setItems(e)
                          : 'additionalItems' === r
                          ? n.setAdditionalItems(e)
                          : '$ref' === r
                          ? n.fromJSON(n.findDefinitions(e))
                          : (n[r] = e))
                    }
                  ),
                  n)
              : n
            var t
          }),
          (this.toJSON = function (e) {
            void 0 === e && (e = !0)
            var r = {}
            return (
              Formily.Shared.each(n, function (t, i) {
                var n, o
                if (
                  (!Formily.Shared.isFn(t) || i.includes('x-')) &&
                  'parent' !== i &&
                  'root' !== i
                )
                  if ('properties' === i || 'patternProperties' === i) {
                    if (!e) return
                    r[i] = Formily.Shared.map(t, function (e) {
                      var r
                      return null === (r = null == e ? void 0 : e.toJSON) ||
                        void 0 === r
                        ? void 0
                        : r.call(e)
                    })
                  } else if (
                    'additionalProperties' === i ||
                    'additionalItems' === i
                  ) {
                    if (!e) return
                    r[i] =
                      null === (n = null == t ? void 0 : t.toJSON) ||
                      void 0 === n
                        ? void 0
                        : n.call(t)
                  } else if ('items' === i) {
                    if (!e) return
                    Array.isArray(t)
                      ? (r[i] = t.map(function (e) {
                          var r
                          return null === (r = null == e ? void 0 : e.toJSON) ||
                            void 0 === r
                            ? void 0
                            : r.call(e)
                        }))
                      : (r[i] =
                          null === (o = null == t ? void 0 : t.toJSON) ||
                          void 0 === o
                            ? void 0
                            : o.call(t))
                  } else r[i] = t
              }),
              r
            )
          }),
          (this.toFieldProps = function (e) {
            return (function (e, r) {
              return { name: e.name, reactions: [b(e, r), O(e, r)] }
            })(n, e)
          }),
          i ? ((this.parent = i), (this.root = i.root)) : (this.root = this),
          this.fromJSON(r)
        )
      }
      return (
        (e.getOrderProperties = function (e, r) {
          void 0 === e && (e = {}), void 0 === r && (r = 'properties')
          var t = [],
            i = []
          for (var n in e[r]) {
            var o = e[r][n],
              a = o['x-index']
            isNaN(a)
              ? i.push({ schema: o, key: n })
              : (t[a] = { schema: o, key: n })
          }
          return t.concat(i).filter(function (e) {
            return !!e
          })
        }),
        (e.compile = function (e, r) {
          return m(e, r)
        }),
        (e.shallowCompile = function (e, r) {
          return f(e, r)
        }),
        (e.isSchemaInstance = function (r) {
          return Formily.Shared.instOf(r, e)
        }),
        (e.registerCompiler = d),
        (e.registerPatches = C),
        (e.registerVoidComponents = J),
        (e.registerTypeDefaultComponents = E),
        (e.registerPolyfills = V),
        (e.enablePolyfills = $),
        (e.silent = c),
        e
      )
    })()
  ;(e.Schema = R), Object.defineProperty(e, '__esModule', { value: !0 })
})
//# sourceMappingURL=formily.json-schema.umd.production.js.map
