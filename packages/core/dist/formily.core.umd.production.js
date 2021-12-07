!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define('formily.core', ['exports'], t)
    : t(
        (((e =
          'undefined' != typeof globalThis ? globalThis : e || self).Formily =
          e.Formily || {}),
        (e.Formily.Core = {}))
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
  var t = function (e, i) {
    return (
      (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t
          }) ||
        function (e, t) {
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        }),
      t(e, i)
    )
  }
  function i(e, i) {
    if ('function' != typeof i && null !== i)
      throw new TypeError(
        'Class extends value ' + String(i) + ' is not a constructor or null'
      )
    function r() {
      this.constructor = e
    }
    t(e, i),
      (e.prototype =
        null === i ? Object.create(i) : ((r.prototype = i.prototype), new r()))
  }
  var r = function () {
    return (
      (r =
        Object.assign ||
        function (e) {
          for (var t, i = 1, r = arguments.length; i < r; i++)
            for (var n in (t = arguments[i]))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          return e
        }),
      r.apply(this, arguments)
    )
  }
  function n(e, t, i, r) {
    return new (i || (i = Promise))(function (n, o) {
      function a(e) {
        try {
          l(r.next(e))
        } catch (e) {
          o(e)
        }
      }
      function s(e) {
        try {
          l(r.throw(e))
        } catch (e) {
          o(e)
        }
      }
      function l(e) {
        var t
        e.done
          ? n(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t)
                })).then(a, s)
      }
      l((r = r.apply(e, t || [])).next())
    })
  }
  function o(e, t) {
    var i,
      r,
      n,
      o,
      a = {
        label: 0,
        sent: function () {
          if (1 & n[0]) throw n[1]
          return n[1]
        },
        trys: [],
        ops: [],
      }
    return (
      (o = { next: s(0), throw: s(1), return: s(2) }),
      'function' == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this
        }),
      o
    )
    function s(o) {
      return function (s) {
        return (function (o) {
          if (i) throw new TypeError('Generator is already executing.')
          for (; a; )
            try {
              if (
                ((i = 1),
                r &&
                  (n =
                    2 & o[0]
                      ? r.return
                      : o[0]
                      ? r.throw || ((n = r.return) && n.call(r), 0)
                      : r.next) &&
                  !(n = n.call(r, o[1])).done)
              )
                return n
              switch (((r = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                case 0:
                case 1:
                  n = o
                  break
                case 4:
                  return a.label++, { value: o[1], done: !1 }
                case 5:
                  a.label++, (r = o[1]), (o = [0])
                  continue
                case 7:
                  ;(o = a.ops.pop()), a.trys.pop()
                  continue
                default:
                  if (
                    !((n = a.trys),
                    (n = n.length > 0 && n[n.length - 1]) ||
                      (6 !== o[0] && 2 !== o[0]))
                  ) {
                    a = 0
                    continue
                  }
                  if (3 === o[0] && (!n || (o[1] > n[0] && o[1] < n[3]))) {
                    a.label = o[1]
                    break
                  }
                  if (6 === o[0] && a.label < n[1]) {
                    ;(a.label = n[1]), (n = o)
                    break
                  }
                  if (n && a.label < n[2]) {
                    ;(a.label = n[2]), a.ops.push(o)
                    break
                  }
                  n[2] && a.ops.pop(), a.trys.pop()
                  continue
              }
              o = t.call(e, a)
            } catch (e) {
              ;(o = [6, e]), (r = 0)
            } finally {
              i = n = 0
            }
          if (5 & o[0]) throw o[1]
          return { value: o[0] ? o[1] : void 0, done: !0 }
        })([o, s])
      }
    }
  }
  function a(e, t) {
    var i = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!i) return e
    var r,
      n,
      o = i.call(e),
      a = []
    try {
      for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
        a.push(r.value)
    } catch (e) {
      n = { error: e }
    } finally {
      try {
        r && !r.done && (i = o.return) && i.call(o)
      } finally {
        if (n) throw n.error
      }
    }
    return a
  }
  function s(e, t) {
    for (var i = 0, r = t.length, n = e.length; i < r; i++, n++) e[n] = t[i]
    return e
  }
  var l,
    c = function () {
      for (var e = this, t = [], i = 0; i < arguments.length; i++)
        t[i] = arguments[i]
      ;(this.buildListener = function (e) {
        return function (t, i) {
          for (var r = this, n = 0; n < e.length; n++) {
            var o = e[n]
            Formily.Shared.isFn(o)
              ? o.call(this, t, i)
              : Formily.Shared.isStr(o) && Formily.Shared.isFn(e[n + 1])
              ? (o === t.type && e[n + 1].call(this, t.payload, i), n++)
              : Formily.Shared.each(o, function (e, n) {
                  if (
                    Formily.Shared.isFn(e) &&
                    Formily.Shared.isStr(n) &&
                    n === t.type
                  )
                    return e.call(r, t.payload, i), !1
                })
          }
        }
      }),
        (this.notify = function (t, i, r) {
          Formily.Shared.isStr(t) &&
            e.listener.call(r, { type: t, payload: i }, r)
        }),
        (this.listener = this.buildListener(t))
    },
    u = (function (e) {
      function t(t) {
        var i = void 0 === t ? {} : t,
          r = i.lifecycles,
          n = i.context,
          o = e.call(this) || this
        return (
          (o.lifecycles = []),
          (o.outerLifecycles = new Map()),
          (o.buildLifeCycles = function (e) {
            return e.reduce(function (e, t) {
              return t instanceof c
                ? e.concat(t)
                : Formily.Shared.isArr(t)
                ? o.buildLifeCycles(t)
                : 'object' == typeof t
                ? ((o.context = t), e)
                : e
            }, [])
          }),
          (o.addLifeCycles = function (e, t) {
            void 0 === t && (t = [])
            var i = o.buildLifeCycles(t)
            i.length && o.outerLifecycles.set(e, i)
          }),
          (o.hasLifeCycles = function (e) {
            return o.outerLifecycles.has(e)
          }),
          (o.removeLifeCycles = function (e) {
            o.outerLifecycles.delete(e)
          }),
          (o.setLifeCycles = function (e) {
            void 0 === e && (e = []), (o.lifecycles = o.buildLifeCycles(e))
          }),
          (o.publish = function (e, t, i) {
            Formily.Shared.isStr(e) &&
              (o.lifecycles.forEach(function (r) {
                r.notify(e, t, i || o.context)
              }),
              o.outerLifecycles.forEach(function (r) {
                r.forEach(function (r) {
                  r.notify(e, t, i || o.context)
                })
              }),
              o.notify({ type: e, payload: t }))
          }),
          (o.clear = function () {
            ;(o.lifecycles = []), o.outerLifecycles.clear(), o.unsubscribe()
          }),
          (o.lifecycles = o.buildLifeCycles(r || [])),
          (o.context = n),
          o
        )
      }
      return i(t, e), t
    })(Formily.Shared.Subscribable),
    d = function (e) {
      return e instanceof ge
    },
    f = function (e) {
      return e instanceof fe
    },
    y = function (e) {
      return e instanceof fe || e instanceof Se
    },
    p = function (e) {
      return e instanceof Fe
    },
    h = function (e) {
      return e instanceof be
    },
    m = function (e) {
      return e instanceof Se
    },
    v = function (e) {
      return (
        !Formily.Shared.isFn(null == e ? void 0 : e.initialize) &&
        'Form' === (null == e ? void 0 : e.displayName)
      )
    },
    F = function (e) {
      return (
        !Formily.Shared.isFn(null == e ? void 0 : e.initialize) &&
        'Field' === (null == e ? void 0 : e.displayName)
      )
    },
    b = function (e) {
      return (
        !Formily.Shared.isFn(null == e ? void 0 : e.initialize) &&
        'ArrayField' === (null == e ? void 0 : e.displayName)
      )
    },
    S = function (e) {
      return f(e) || p(e) || h(e)
    },
    _ = function (e) {
      return (
        !Formily.Shared.isFn(null == e ? void 0 : e.initialize) &&
        'ObjectField' === (null == e ? void 0 : e.displayName)
      )
    },
    g = function (e) {
      return e && e instanceof R
    },
    I = function (e) {
      var t = this
      ;(this.getGraph = function () {
        var e = {}
        return (
          (e[''] = t.form.getState()),
          Formily.Shared.each(t.form.fields, function (t, i) {
            e[i] = t.getState()
          }),
          e
        )
      }),
        (this.setGraph = function (e) {
          var i = t.form
          Formily.Shared.each(e, function (e, r) {
            if (v(e)) i.setState(e)
            else {
              var n = i.fields[r]
              n
                ? n.setState(e)
                : (function (e, i) {
                    var r = Formily.Shared.FormPath.parse(e),
                      n = r.segments[r.segments.length - 1],
                      o = r.parent()
                    return F(i)
                      ? t.form.createField({ name: n, basePath: o })
                      : b(i)
                      ? t.form.createArrayField({ name: n, basePath: o })
                      : _(i)
                      ? t.form.createObjectField({ name: n, basePath: o })
                      : t.form.createVoidField({ name: n, basePath: o })
                  })(r, e).setState(e)
            }
          })
        }),
        (this.form = e),
        Formily.Reactive.define(this, { setGraph: Formily.Reactive.batch })
    },
    O = function (e, t) {
      if (e) return Formily.Shared.isFn(t) ? t(e, e.address) : e
    },
    R = (function () {
      function e(e) {
        var t = this
        if (
          ((this.addresses = []),
          (this.pattern = Formily.Shared.FormPath.parse(e.pattern, e.base)),
          (this.form = e.form),
          this.pattern.isMatchPattern)
        )
          Formily.Shared.each(this.form.fields, function (e, i) {
            e.match(t.pattern) && t.addresses.push(i)
          })
        else {
          var i = this.pattern.toString(),
            r = this.form.indexes[i],
            n = this.form.fields[i],
            o = this.form.fields[r]
          n ? (this.addresses = [i]) : o && (this.addresses = [r])
        }
      }
      return (
        (e.prototype.take = function (e) {
          return O(this.form.fields[this.addresses[0]], e)
        }),
        (e.prototype.map = function (e) {
          var t = this
          return this.addresses.map(function (i) {
            return O(t.form.fields[i], e)
          })
        }),
        (e.prototype.forEach = function (e) {
          var t = this
          return this.addresses.forEach(function (i) {
            return O(t.form.fields[i], e)
          })
        }),
        (e.prototype.reduce = function (e, t) {
          var i = this
          return this.addresses.reduce(function (t, r) {
            return O(i.form.fields[r], function (i, r) {
              return e(t, i, r)
            })
          }, t)
        }),
        (e.prototype.get = function (e) {
          var t = this.take()
          if (t) return t[e]
        }),
        (e.prototype.getIn = function (e) {
          return Formily.Shared.FormPath.getIn(this.take(), e)
        }),
        (e.prototype.value = function () {
          return this.form.getValuesIn(this.pattern)
        }),
        (e.prototype.initialValue = function () {
          return this.form.getInitialValuesIn(this.pattern)
        }),
        e
      )
    })()
  ;(e.LifeCycleTypes = void 0),
    ((l = e.LifeCycleTypes || (e.LifeCycleTypes = {})).ON_FORM_INIT =
      'onFormInit'),
    (l.ON_FORM_MOUNT = 'onFormMount'),
    (l.ON_FORM_UNMOUNT = 'onFormUnmount'),
    (l.ON_FORM_INPUT_CHANGE = 'onFormInputChange'),
    (l.ON_FORM_VALUES_CHANGE = 'onFormValuesChange'),
    (l.ON_FORM_INITIAL_VALUES_CHANGE = 'onFormInitialValuesChange'),
    (l.ON_FORM_SUBMIT = 'onFormSubmit'),
    (l.ON_FORM_RESET = 'onFormReset'),
    (l.ON_FORM_SUBMIT_START = 'onFormSubmitStart'),
    (l.ON_FORM_SUBMITTING = 'onFormSubmitting'),
    (l.ON_FORM_SUBMIT_END = 'onFormSubmitEnd'),
    (l.ON_FORM_SUBMIT_VALIDATE_START = 'onFormSubmitValidateStart'),
    (l.ON_FORM_SUBMIT_VALIDATE_SUCCESS = 'onFormSubmitValidateSuccess'),
    (l.ON_FORM_SUBMIT_VALIDATE_FAILED = 'onFormSubmitValidateFailed'),
    (l.ON_FORM_SUBMIT_VALIDATE_END = 'onFormSubmitValidateEnd'),
    (l.ON_FORM_SUBMIT_SUCCESS = 'onFormSubmitSuccess'),
    (l.ON_FORM_SUBMIT_FAILED = 'onFormSubmitFailed'),
    (l.ON_FORM_VALIDATE_START = 'onFormValidateStart'),
    (l.ON_FORM_VALIDATING = 'onFormValidating'),
    (l.ON_FORM_VALIDATE_SUCCESS = 'onFormValidateSuccess'),
    (l.ON_FORM_VALIDATE_FAILED = 'onFormValidateFailed'),
    (l.ON_FORM_VALIDATE_END = 'onFormValidateEnd'),
    (l.ON_FORM_GRAPH_CHANGE = 'onFormGraphChange'),
    (l.ON_FORM_LOADING = 'onFormLoading'),
    (l.ON_FIELD_INIT = 'onFieldInit'),
    (l.ON_FIELD_INPUT_VALUE_CHANGE = 'onFieldInputValueChange'),
    (l.ON_FIELD_VALUE_CHANGE = 'onFieldValueChange'),
    (l.ON_FIELD_INITIAL_VALUE_CHANGE = 'onFieldInitialValueChange'),
    (l.ON_FIELD_SUBMIT = 'onFieldSubmit'),
    (l.ON_FIELD_SUBMIT_START = 'onFieldSubmitStart'),
    (l.ON_FIELD_SUBMITTING = 'onFieldSubmitting'),
    (l.ON_FIELD_SUBMIT_END = 'onFieldSubmitEnd'),
    (l.ON_FIELD_SUBMIT_VALIDATE_START = 'onFieldSubmitValidateStart'),
    (l.ON_FIELD_SUBMIT_VALIDATE_SUCCESS = 'onFieldSubmitValidateSuccess'),
    (l.ON_FIELD_SUBMIT_VALIDATE_FAILED = 'onFieldSubmitValidateFailed'),
    (l.ON_FIELD_SUBMIT_VALIDATE_END = 'onFieldSubmitValidateEnd'),
    (l.ON_FIELD_SUBMIT_SUCCESS = 'onFieldSubmitSuccess'),
    (l.ON_FIELD_SUBMIT_FAILED = 'onFieldSubmitFailed'),
    (l.ON_FIELD_VALIDATE_START = 'onFieldValidateStart'),
    (l.ON_FIELD_VALIDATING = 'onFieldValidating'),
    (l.ON_FIELD_VALIDATE_SUCCESS = 'onFieldValidateSuccess'),
    (l.ON_FIELD_VALIDATE_FAILED = 'onFieldValidateFailed'),
    (l.ON_FIELD_VALIDATE_END = 'onFieldValidateEnd'),
    (l.ON_FIELD_LOADING = 'onFieldLoading'),
    (l.ON_FIELD_RESET = 'onFieldReset'),
    (l.ON_FIELD_MOUNT = 'onFieldMount'),
    (l.ON_FIELD_UNMOUNT = 'onFieldUnmount')
  var T = {
      form: !0,
      parent: !0,
      props: !0,
      caches: !0,
      requests: !0,
      disposers: !0,
      heart: !0,
      graph: !0,
      indexes: !0,
      fields: !0,
      lifecycles: !0,
      componentType: !0,
      componentProps: !0,
      decoratorType: !0,
      decoratorProps: !0,
    },
    L = {
      address: !0,
      path: !0,
      valid: !0,
      invalid: !0,
      selfValid: !0,
      selfInvalid: !0,
      errors: !0,
      successes: !0,
      warnings: !0,
      validateStatus: !0,
    },
    E = 'selfDisplay',
    N = 'selfPattern',
    V = {
      pattern: N,
      editable: N,
      readOnly: N,
      readPretty: N,
      disabled: N,
      display: E,
      hidden: E,
      visible: E,
    },
    A = {
      lifecycles: [],
      context: [],
      effectStart: !1,
      effectEnd: !1,
      initializing: !1,
    },
    C = /^\.(\d+)/,
    D = Object.prototype.hasOwnProperty,
    M = function (e, t, i) {
      d(e) ? e.notify(t) : e.notify(i)
    },
    P = function (e, t) {
      var i
      return (
        void 0 === t && (t = !0),
        !!(null == e ? void 0 : e.target) &&
          (!(
            !Formily.Shared.isValid(e.target.value) &&
            !Formily.Shared.isValid(e.target.checked)
          ) ||
            ((!e.target.tagName ||
              'INPUT' === e.target.tagName ||
              'TEXTAREA' === e.target.tagName ||
              'SELECT' === e.target.tagName) &&
              (t &&
                (null === (i = e.stopPropagation) || void 0 === i || i.call(e)),
              !0)))
      )
    },
    U = function (e) {
      return e.map(function (e) {
        return (null == e ? void 0 : e.target)
          ? Formily.Shared.isValid(e.target.value)
            ? e.target.value
            : Formily.Shared.isValid(e.target.checked)
            ? e.target.checked
            : void 0
          : e
      })
    },
    j = function (e, t) {
      return (
        (e.address = Formily.Shared.FormPath.parse(t)),
        (e.path = (function (e) {
          var t = !1,
            i = e.form.fields,
            r = e.address.segments,
            n = r.reduce(function (n, o, a) {
              var s = n.concat(o),
                l = r.slice(0, a + 1),
                c = i[l.join('.')]
              if (t) return (t = !1), n
              if (a >= r.length - 1) return m(e), s
              if (m(c)) {
                var u = r.slice(0, a),
                  d = i[u.join('.')]
                return p(d) && Formily.Shared.isNumberLike(o)
                  ? ((t = !0), s)
                  : n
              }
              return (t = !1), s
            }, [])
          return new Formily.Shared.FormPath(n)
        })(e)),
        (e.form.indexes[e.path.toString()] = e.address.toString()),
        e
      )
    },
    k = function (e, t) {
      t.forEach(function (t) {
        var i,
          r = t.type,
          n = t.address,
          o = t.oldAddress,
          a = t.payload
        'remove' === r
          ? (null === (i = e[n]) || void 0 === i || i.dispose(), delete e[n])
          : 'update' === r &&
            (a && ((e[n] = a), e[o] === a && delete e[o]), n && a && j(a, n))
      })
    },
    w = function (e, t) {
      return e.feedbacks.filter(function (i) {
        var n, o, a
        return (
          !!(null === (n = i.messages) || void 0 === n ? void 0 : n.length) &&
          (function (e, t) {
            return !(
              !e ||
              !t ||
              (e.type && e.type !== t.type) ||
              (e.code && e.code !== t.code) ||
              (e.path &&
                t.path &&
                !Formily.Shared.FormPath.parse(e.path).match(t.path)) ||
              (e.address &&
                t.address &&
                !Formily.Shared.FormPath.parse(e.address).match(t.address)) ||
              (e.triggerType && e.triggerType !== t.triggerType)
            )
          })(
            t,
            r(r({}, i), {
              address:
                null === (o = e.address) || void 0 === o
                  ? void 0
                  : o.toString(),
              path:
                null === (a = e.path) || void 0 === a ? void 0 : a.toString(),
            })
          )
        )
      })
    },
    G = function (e, t) {
      return w(e, t).reduce(function (e, t) {
        return Formily.Shared.isEmpty(t.messages) ? e : e.concat(t.messages)
      }, [])
    },
    B = function (e, t) {
      return n(void 0, void 0, void 0, function () {
        var i
        return o(this, function (r) {
          switch (r.label) {
            case 0:
              return [
                4,
                Formily.Validator.validate(e.value, e.validator, {
                  triggerType: t,
                  validateFirst:
                    e.props.validateFirst || e.form.props.validateFirst,
                  context: { field: e, form: e.form },
                }),
              ]
            case 1:
              return (
                (i = r.sent()),
                Formily.Reactive.batch(function () {
                  Formily.Shared.each(i, function (i, r) {
                    e.setFeedback({
                      triggerType: t,
                      type: r,
                      code: Formily.Shared.pascalCase('validate-'.concat(r)),
                      messages: i,
                    })
                  })
                }),
                [2, i]
              )
          }
        })
      })
    },
    x = function (t, i) {
      var n = r({ startIndex: 0, deleteCount: 0, insertCount: 0 }, i),
        o = n.startIndex,
        a = n.deleteCount,
        s = n.insertCount,
        l = t.address.toString(),
        c = l.length,
        u = t.form.fields,
        d = [],
        f = s - a
      Formily.Reactive.batch(function () {
        Formily.Shared.each(u, function (e, t) {
          if (
            (function (e) {
              return 0 === e.indexOf(l) && e.length > c
            })(t)
          ) {
            if (
              (function (e) {
                var t,
                  i =
                    null === (t = e.substring(c).match(C)) || void 0 === t
                      ? void 0
                      : t[1]
                return void 0 !== i && Number(i) > o + a - 1
              })(t)
            ) {
              var i = (function (e) {
                var t
                if (0 === f) return e
                var i = e.substring(0, c),
                  r = e.substring(c),
                  n = null === (t = r.match(C)) || void 0 === t ? void 0 : t[1]
                if (void 0 === n) return e
                var o = Number(n) + f
                return ''.concat(i).concat(r.replace(/^\.\d+/, '.'.concat(o)))
              })(t)
              d.push({ type: 'update', address: i, oldAddress: t, payload: e })
            }
            ;((function (e) {
              var t,
                i =
                  null === (t = e.substring(c).match(C)) || void 0 === t
                    ? void 0
                    : t[1]
              if (void 0 === i) return !1
              var r = Number(i)
              return r >= o && r < o + s
            })(t) ||
              (function (e) {
                var t,
                  i = e.substring(0, c),
                  r = e.substring(c),
                  n = null === (t = r.match(C)) || void 0 === t ? void 0 : t[1]
                if (void 0 === n) return !1
                var s = Number(n)
                return (
                  s >= o &&
                  !u[
                    ''.concat(i).concat(r.replace(/^\.\d+/, '.'.concat(s + a)))
                  ]
                )
              })(t)) &&
              d.push({ type: 'remove', address: t })
          }
        }),
          k(u, d)
      }),
        t.form.notify(e.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
    },
    q = function (t, i) {
      var n = r({ fromIndex: 0, toIndex: 0 }, i),
        o = n.fromIndex,
        a = n.toIndex,
        s = t.address.toString(),
        l = t.form.fields,
        c = s.length,
        u = [],
        d = o < a
      Formily.Reactive.batch(function () {
        Formily.Shared.each(l, function (e, t) {
          if (
            (function (e) {
              return 0 === e.indexOf(s) && e.length > c
            })(t) &&
            ((function (e) {
              var t,
                i =
                  null === (t = e.slice(s.length).match(C)) || void 0 === t
                    ? void 0
                    : t[1]
              if (void 0 === i) return !1
              var r = Number(i)
              return d ? r > o && r <= a : r < o && r >= a
            })(t) ||
              (function (e) {
                var t,
                  i =
                    null === (t = e.substring(c).match(C)) || void 0 === t
                      ? void 0
                      : t[1]
                return void 0 !== i && Number(i) === o
              })(t))
          ) {
            var i = (function (e) {
              var t = e.substring(0, c),
                i = e.substring(c),
                r = i.match(C)[1],
                n = Number(r)
              return (
                n === o ? (n = a) : (n += d ? -1 : 1),
                ''.concat(t).concat(i.replace(/^\.\d+/, '.'.concat(n)))
              )
            })(t)
            u.push({ type: 'update', address: i, oldAddress: t, payload: e }),
              l[i] || u.push({ type: 'remove', address: t })
          }
        }),
          k(l, u)
      }),
        t.form.notify(e.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)
    },
    H = function (e, t) {
      var i = e.address.toString(),
        r = e.form.fields
      Formily.Reactive.batch(function () {
        Formily.Shared.each(r, function (e, r) {
          ;(function (e) {
            return 0 === e.indexOf(i) && e.length > i.length
          })(r) &&
            (function (e) {
              var r,
                n =
                  null === (r = e.slice(i.length).match(C)) || void 0 === r
                    ? void 0
                    : r[1]
              return void 0 !== n && Number(n) >= t
            })(r) &&
            e.destroy()
        })
      })
    },
    z = function (e, t) {
      if (0 !== t.length) {
        var i = e.address.toString(),
          r = e.form.fields
        Formily.Reactive.batch(function () {
          Formily.Shared.each(r, function (e, r) {
            ;(function (e) {
              return 0 === e.indexOf(i) && e.length > i.length
            })(r) &&
              (function (e) {
                var r,
                  n =
                    null === (r = e.slice(i.length).match(/^\.([^.]+)/)) ||
                    void 0 === r
                      ? void 0
                      : r[1]
                return void 0 !== n && t.includes(n)
              })(r) &&
              e.destroy()
          })
        })
      }
    },
    W = Formily.Reactive.batch.scope.bound(function (e) {
      for (
        var t = e.form,
          i = Formily.Shared.FormPath.ensureIn(t, 'requests.updates', []),
          r = Formily.Shared.FormPath.ensureIn(t, 'requests.updateIndexes', {}),
          n = 0;
        n < i.length;
        n++
      ) {
        var o = i[n],
          a = o.pattern,
          s = o.callbacks,
          l = !1
        e.match(a) &&
          (s.forEach(function (t) {
            e.setState(t)
          }),
          a.isWildMatchPattern ||
            a.isMatchPattern ||
            (i.splice(n--, 1), (l = !0))),
          l ? delete r[a.toString()] : (r[a.toString()] = n)
      }
    }),
    J = function (e) {
      var t,
        i = null === (t = e.address) || void 0 === t ? void 0 : t.toString()
      return function (e) {
        return 0 === e.address.indexOf(i)
      }
    },
    K = function (e) {
      return Formily.Reactive.batch.bound(function (t) {
        return (function (e, t) {
          if (e) {
            if (Formily.Shared.isFn(t)) t(e)
            else
              for (var i in t)
                if (D.call(t, i) && !L[i] && !T[i]) {
                  var r = V[i]
                  if (!r || !D.call(t, r) || Formily.Shared.isValid(t[r])) {
                    var n = t[i]
                    Formily.Shared.isFn(n) || (e[i] = n)
                  }
                }
            return e
          }
        })(e, t)
      })
    },
    Q = function (e) {
      return function (t) {
        return (function (e, t) {
          if (Formily.Shared.isFn(t)) return t(e)
          var i = {}
          for (var r in e)
            if (D.call(e, r) && !T[r])
              if ('address' !== r && 'path' !== r) {
                var n = e[r]
                Formily.Shared.isFn(n) || (i[r] = Formily.Reactive.toJS(n))
              } else i[r] = e[r].toString()
          return i
        })(e, t)
      }
    },
    X = function (e) {
      return Formily.Reactive.batch.bound(function (t, i) {
        if (g(t))
          t.forEach(function (e) {
            e.setState(i)
          })
        else if (y(t)) t.setState(i)
        else {
          var r = 0,
            n = Formily.Shared.FormPath.parse(t)
          e.query(n).forEach(function (e) {
            e.setState(i), r++
          }),
            (0 === r || n.isWildMatchPattern) &&
              (function (e, t, i) {
                var r = Formily.Shared.FormPath.ensureIn(
                    e,
                    'requests.updates',
                    []
                  ),
                  n = Formily.Shared.FormPath.ensureIn(
                    e,
                    'requests.updateIndexes',
                    {}
                  ),
                  o = t.toString(),
                  a = n[o]
                Formily.Shared.isValid(a)
                  ? r[a] &&
                    !r[a].callbacks.some(function (e) {
                      return e.toString() === i.toString() && e === i
                    }) &&
                    r[a].callbacks.push(i)
                  : ((n[o] = r.length), r.push({ pattern: t, callbacks: [i] }))
              })(e, n, i)
        }
      })
    },
    Y = function (t, i) {
      var r = i.path
      ;(Array.isArray(i.object) && 'length' === i.key) ||
        ((Formily.Reactive.contains(t.initialValues, i.object) ||
          Formily.Reactive.contains(t.initialValues, i.value)) &&
          (('add' !== i.type && 'set' !== i.type) ||
            (function (e, t, i) {
              var r = function (t, i) {
                  t.length
                    ? e.setValuesIn(t, Formily.Shared.clone(i))
                    : Object.assign(e.values, Formily.Shared.clone(i))
                },
                n = function (t, i) {
                  void 0 === i && (i = [])
                  var o = e.getValuesIn(i),
                    a = e.query(i).take()
                  if (se(o, t)) r(i, t)
                  else {
                    if (Formily.Shared.isEmpty(t)) return
                    if (A.initializing) return
                    Formily.Shared.isPlainObj(o) && Formily.Shared.isPlainObj(t)
                      ? Formily.Shared.each(t, function (e, t) {
                          n(e, i.concat(t))
                        })
                      : a
                      ? m(a) || a.selfModified || r(i, t)
                      : e.initialized && r(i, t)
                  }
                }
              n(i, t)
            })(t, r.slice(1), i.value),
          t.initialized &&
            t.notify(e.LifeCycleTypes.ON_FORM_INITIAL_VALUES_CHANGE)))
    },
    Z = function (t, i) {
      clearTimeout(t.requests.validate),
        i
          ? ((t.requests.validate = setTimeout(function () {
              Formily.Reactive.batch(function () {
                ;(t.validating = i),
                  M(
                    t,
                    e.LifeCycleTypes.ON_FORM_VALIDATING,
                    e.LifeCycleTypes.ON_FIELD_VALIDATING
                  )
              })
            }, 100)),
            M(
              t,
              e.LifeCycleTypes.ON_FORM_VALIDATE_START,
              e.LifeCycleTypes.ON_FIELD_VALIDATE_START
            ))
          : (t.validating !== i && (t.validating = i),
            M(
              t,
              e.LifeCycleTypes.ON_FORM_VALIDATE_END,
              e.LifeCycleTypes.ON_FIELD_VALIDATE_END
            ))
    },
    $ = function (t, i) {
      clearTimeout(t.requests.submit),
        i
          ? ((t.requests.submit = setTimeout(function () {
              Formily.Reactive.batch(function () {
                ;(t.submitting = i),
                  M(
                    t,
                    e.LifeCycleTypes.ON_FORM_SUBMITTING,
                    e.LifeCycleTypes.ON_FIELD_SUBMITTING
                  )
              })
            }, 100)),
            M(
              t,
              e.LifeCycleTypes.ON_FORM_SUBMIT_START,
              e.LifeCycleTypes.ON_FIELD_SUBMIT_START
            ))
          : (t.submitting !== i && (t.submitting = i),
            M(
              t,
              e.LifeCycleTypes.ON_FORM_SUBMIT_END,
              e.LifeCycleTypes.ON_FIELD_SUBMIT_END
            ))
    },
    ee = function (t, i) {
      clearTimeout(t.requests.loading),
        i
          ? (t.requests.loading = setTimeout(function () {
              Formily.Reactive.batch(function () {
                ;(t.loading = i),
                  M(
                    t,
                    e.LifeCycleTypes.ON_FORM_LOADING,
                    e.LifeCycleTypes.ON_FIELD_LOADING
                  )
              })
            }, 100))
          : t.loading !== i && (t.loading = i)
    },
    te = function (t, i) {
      return n(void 0, void 0, void 0, function () {
        var r, n, a
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              ;(r = function (e) {
                return d(e)
                  ? Formily.Reactive.toJS(e.values)
                  : Formily.Reactive.toJS(e.value)
              }),
                t.setSubmitting(!0),
                (o.label = 1)
            case 1:
              return (
                o.trys.push([1, 3, , 4]),
                M(
                  t,
                  e.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_START,
                  e.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_START
                ),
                [4, t.validate()]
              )
            case 2:
              return (
                o.sent(),
                M(
                  t,
                  e.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_SUCCESS,
                  e.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_SUCCESS
                ),
                [3, 4]
              )
            case 3:
              return (
                o.sent(),
                M(
                  t,
                  e.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_FAILED,
                  e.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_FAILED
                ),
                [3, 4]
              )
            case 4:
              M(
                t,
                e.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_END,
                e.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_END
              ),
                (o.label = 5)
            case 5:
              if ((o.trys.push([5, 9, , 10]), t.invalid)) throw t.errors
              return Formily.Shared.isFn(i) ? [4, i(r(t))] : [3, 7]
            case 6:
              return (n = o.sent()), [3, 8]
            case 7:
              ;(n = r(t)), (o.label = 8)
            case 8:
              return (
                M(
                  t,
                  e.LifeCycleTypes.ON_FORM_SUBMIT_SUCCESS,
                  e.LifeCycleTypes.ON_FIELD_SUBMIT_SUCCESS
                ),
                [3, 10]
              )
            case 9:
              throw (
                ((a = o.sent()),
                t.setSubmitting(!1),
                M(
                  t,
                  e.LifeCycleTypes.ON_FORM_SUBMIT_FAILED,
                  e.LifeCycleTypes.ON_FIELD_SUBMIT_FAILED
                ),
                M(
                  t,
                  e.LifeCycleTypes.ON_FORM_SUBMIT,
                  e.LifeCycleTypes.ON_FIELD_SUBMIT
                ),
                a)
              )
            case 10:
              return (
                t.setSubmitting(!1),
                M(
                  t,
                  e.LifeCycleTypes.ON_FORM_SUBMIT,
                  e.LifeCycleTypes.ON_FIELD_SUBMIT
                ),
                [2, n]
              )
          }
        })
      })
    },
    ie = function (t, i, r) {
      return n(void 0, void 0, void 0, function () {
        var n
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              if (d(t)) t.setValidating(!0)
              else if ('editable' !== t.pattern || 'visible' !== t.display)
                return [2]
              return (
                (n = []),
                t.query(i).forEach(function (e) {
                  m(e) || n.push(ne(e, r, e === t))
                }),
                [4, Promise.all(n)]
              )
            case 1:
              if ((o.sent(), d(t) && t.setValidating(!1), t.invalid))
                throw (
                  (M(
                    t,
                    e.LifeCycleTypes.ON_FORM_VALIDATE_FAILED,
                    e.LifeCycleTypes.ON_FIELD_VALIDATE_FAILED
                  ),
                  t.errors)
                )
              return (
                M(
                  t,
                  e.LifeCycleTypes.ON_FORM_VALIDATE_SUCCESS,
                  e.LifeCycleTypes.ON_FIELD_VALIDATE_SUCCESS
                ),
                [2]
              )
          }
        })
      })
    },
    re = function (t, i, r) {
      return n(void 0, void 0, void 0, function () {
        var n
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return (
                (n = []),
                t.query(i).forEach(function (e) {
                  m(e) || n.push(oe(e, r, t === e))
                }),
                d(t) && (t.modified = !1),
                M(
                  t,
                  e.LifeCycleTypes.ON_FORM_RESET,
                  e.LifeCycleTypes.ON_FIELD_RESET
                ),
                [4, Promise.all(n)]
              )
            case 1:
              return o.sent(), [2]
          }
        })
      })
    },
    ne = Formily.Reactive.batch.bound(function (t, i, r) {
      return (
        void 0 === r && (r = !1),
        n(void 0, void 0, void 0, function () {
          var n, a, s, l, c, u, d
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                if (
                  ((n = function () {
                    Z(t, !0)
                  }),
                  (a = function () {
                    Z(t, !1),
                      r ||
                        (t.selfValid
                          ? t.notify(e.LifeCycleTypes.ON_FIELD_VALIDATE_SUCCESS)
                          : t.notify(e.LifeCycleTypes.ON_FIELD_VALIDATE_FAILED))
                  }),
                  'editable' !== t.pattern || 'visible' !== t.display)
                )
                  return [2, {}]
                if ((n(), i)) return [3, 5]
                ;(s = Formily.Validator.parseValidatorDescriptions(
                  t.validator
                ).reduce(function (e, t) {
                  return e.indexOf(t.triggerType) > -1
                    ? e
                    : e.concat(t.triggerType)
                }, [])),
                  (l = {}),
                  (c = 0),
                  (o.label = 1)
              case 1:
                return c < s.length ? [4, B(t, s[c])] : [3, 4]
              case 2:
                ;(u = o.sent()),
                  Formily.Shared.each(u, function (e, t) {
                    ;(l[t] = l[t] || []), (l[t] = l[t].concat(e))
                  }),
                  (o.label = 3)
              case 3:
                return c++, [3, 1]
              case 4:
                return a(), [2, l]
              case 5:
                return [4, B(t, i)]
              case 6:
                return (d = o.sent()), a(), [2, d]
            }
          })
        })
      )
    }),
    oe = Formily.Reactive.batch.bound(function (t, i, r) {
      return (
        void 0 === r && (r = !1),
        n(void 0, void 0, void 0, function () {
          return o(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (t.modified = !1),
                  (t.selfModified = !1),
                  (t.visited = !1),
                  (t.feedbacks = []),
                  (t.inputValue = void 0),
                  (t.inputValues = []),
                  (t.caches = {}),
                  (null == i ? void 0 : i.forceClear)
                    ? p(t)
                      ? (t.value = [])
                      : h(t)
                      ? (t.value = {})
                      : (t.value = void 0)
                    : Formily.Shared.isValid(t.value) &&
                      (t.value = Formily.Reactive.toJS(t.initialValue)),
                  r || t.notify(e.LifeCycleTypes.ON_FIELD_RESET),
                  (null == i ? void 0 : i.validate) ? [4, ne(t)] : [3, 2]
                )
              case 1:
                return [2, n.sent()]
              case 2:
                return [2]
            }
          })
        })
      )
    }),
    ae = function (e) {
      return Formily.Reactive.isObservable(e)
        ? e
        : Formily.Shared.clone(e || {})
    },
    se = function (e, t) {
      var i = Formily.Shared.isEmpty(e),
        r = Formily.Shared.isEmpty(t),
        n = Formily.Shared.isValid(e),
        o = Formily.Shared.isValid(t)
      return n ? !!i && !r : !!o
    },
    le = function (e) {
      var t = Formily.Shared.toArr(e.props.reactions)
      e.form.addEffects(e, function () {
        t.forEach(function (t) {
          Formily.Shared.isFn(t) &&
            e.disposers.push(
              Formily.Reactive.autorun(
                Formily.Reactive.batch.scope.bound(function () {
                  return t(e)
                })
              )
            )
        })
      })
    },
    ce = function () {
      A.initializing = !0
    },
    ue = function () {
      Formily.Reactive.batch.endpoint(function () {
        A.initializing = !1
      })
    },
    de = (function () {
      function t() {
        var t = this
        ;(this.disposers = []),
          (this.setTitle = function (e) {
            t.title = e
          }),
          (this.setDescription = function (e) {
            t.description = e
          }),
          (this.setDisplay = function (e) {
            t.display = e
          }),
          (this.setPattern = function (e) {
            t.pattern = e
          }),
          (this.setComponent = function (e, i) {
            e && (t.componentType = e),
              i &&
                ((t.componentProps = t.componentProps || {}),
                Object.assign(t.componentProps, i))
          }),
          (this.setComponentProps = function (e) {
            e &&
              ((t.componentProps = t.componentProps || {}),
              Object.assign(t.componentProps, e))
          }),
          (this.setDecorator = function (e, i) {
            e && (t.decoratorType = e),
              i &&
                ((t.decoratorProps = t.decoratorProps || {}),
                Object.assign(t.decoratorProps, i))
          }),
          (this.setDecoratorProps = function (e) {
            e &&
              ((t.decoratorProps = t.decoratorProps || {}),
              Object.assign(t.decoratorProps, e))
          }),
          (this.setData = function (e) {
            t.data = e
          }),
          (this.setContent = function (e) {
            t.content = e
          }),
          (this.onInit = function () {
            ;(t.initialized = !0),
              W(t),
              t.notify(e.LifeCycleTypes.ON_FIELD_INIT)
          }),
          (this.onMount = function () {
            ;(t.mounted = !0),
              (t.unmounted = !1),
              t.notify(e.LifeCycleTypes.ON_FIELD_MOUNT)
          }),
          (this.onUnmount = function () {
            ;(t.mounted = !1),
              (t.unmounted = !0),
              t.notify(e.LifeCycleTypes.ON_FIELD_UNMOUNT)
          }),
          (this.query = function (e) {
            return new R({ pattern: e, base: t.address, form: t.form })
          }),
          (this.notify = function (e, i) {
            return t.form.notify(e, null != i ? i : t)
          }),
          (this.dispose = function () {
            t.disposers.forEach(function (e) {
              e()
            }),
              t.form.removeEffects(t)
          }),
          (this.destroy = function () {
            t.dispose(), delete t.form.fields[t.address.toString()]
          }),
          (this.match = function (e) {
            return Formily.Shared.FormPath.parse(e).matchAliasGroup(
              t.address,
              t.path
            )
          })
      }
      return (
        (t.prototype.makeIndexes = function (e) {
          ;(this.form.fields[e.toString()] = this), j(this, e)
        }),
        Object.defineProperty(t.prototype, 'component', {
          get: function () {
            return [this.componentType, this.componentProps]
          },
          set: function (e) {
            var t = Formily.Shared.toArr(e)
            ;(this.componentType = t[0]), (this.componentProps = t[1] || {})
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'decorator', {
          get: function () {
            return [this.decoratorType, this.decoratorProps]
          },
          set: function (e) {
            var t = Formily.Shared.toArr(e)
            ;(this.decoratorType = t[0]), (this.decoratorProps = t[1] || {})
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'parent', {
          get: function () {
            for (
              var e = this.address.parent(), t = e.toString();
              !this.form.fields[t];

            )
              if (!(t = (e = e.parent()).toString())) return
            return this.form.fields[t]
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'display', {
          get: function () {
            var e,
              t =
                null === (e = this.parent) || void 0 === e ? void 0 : e.display
            return t && 'visible' !== t
              ? this.selfDisplay && 'visible' !== this.selfDisplay
                ? this.selfDisplay
                : t
              : Formily.Shared.isValid(this.selfDisplay)
              ? this.selfDisplay
              : t || this.form.display || 'visible'
          },
          set: function (e) {
            this.selfDisplay = e
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'pattern', {
          get: function () {
            var e,
              t =
                null === (e = this.parent) || void 0 === e ? void 0 : e.pattern
            return Formily.Shared.isValid(this.selfPattern)
              ? this.selfPattern
              : t || this.form.pattern || 'editable'
          },
          set: function (e) {
            this.selfPattern = e
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'editable', {
          get: function () {
            return 'editable' === this.pattern
          },
          set: function (e) {
            Formily.Shared.isValid(e) &&
              (this.pattern = e ? 'editable' : 'readPretty')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'disabled', {
          get: function () {
            return 'disabled' === this.pattern
          },
          set: function (e) {
            Formily.Shared.isValid(e) &&
              (this.pattern = e ? 'disabled' : 'editable')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'readOnly', {
          get: function () {
            return 'readOnly' === this.pattern
          },
          set: function (e) {
            Formily.Shared.isValid(e) &&
              (this.pattern = e ? 'readOnly' : 'editable')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'readPretty', {
          get: function () {
            return 'readPretty' === this.pattern
          },
          set: function (e) {
            Formily.Shared.isValid(e) &&
              (this.pattern = e ? 'readPretty' : 'editable')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'hidden', {
          get: function () {
            return 'hidden' === this.display
          },
          set: function (e) {
            Formily.Shared.isValid(e) &&
              (this.display = e ? 'hidden' : 'visible')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'visible', {
          get: function () {
            return 'visible' === this.display
          },
          set: function (e) {
            Formily.Shared.isValid(e) && (this.display = e ? 'visible' : 'none')
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      )
    })(),
    fe = (function (t) {
      function r(i, r, a, s) {
        var l = t.call(this) || this
        return (
          (l.displayName = 'Field'),
          (l.caches = {}),
          (l.requests = {}),
          (l.setDataSource = function (e) {
            l.dataSource = e
          }),
          (l.setFeedback = function (e) {
            !(function (e, t) {
              if (t)
                Formily.Reactive.batch(function () {
                  var i, r
                  if (e.feedbacks.length) {
                    var n = w(e, t)
                    if (n.length)
                      return void (e.feedbacks = e.feedbacks.reduce(function (
                        e,
                        i
                      ) {
                        var r
                        return n.includes(i)
                          ? (
                              null === (r = t.messages) || void 0 === r
                                ? void 0
                                : r.length
                            )
                            ? ((i.messages = t.messages), e.concat(i))
                            : e
                          : e.concat(i)
                      },
                      []))
                    ;(null === (r = t.messages) || void 0 === r
                      ? void 0
                      : r.length) && (e.feedbacks = e.feedbacks.concat(t))
                  } else {
                    if (
                      !(null === (i = t.messages) || void 0 === i
                        ? void 0
                        : i.length)
                    )
                      return
                    e.feedbacks = [t]
                  }
                })
            })(l, e)
          }),
          (l.setSelfErrors = function (e) {
            l.selfErrors = e
          }),
          (l.setSelfWarnings = function (e) {
            l.selfWarnings = e
          }),
          (l.setSelfSuccesses = function (e) {
            l.selfSuccesses = e
          }),
          (l.setValidator = function (e) {
            l.validator = e
          }),
          (l.setValidatorRule = function (e, t) {
            !(function (e, t, i) {
              var r, n
              if (Formily.Shared.isValid(i)) {
                var o = Formily.Validator.parseValidatorDescriptions(
                    e.validator
                  ).some(function (e) {
                    return t in e
                  }),
                  a = (((r = {})[t] = i), r)
                o
                  ? Formily.Shared.isArr(e.validator)
                    ? (e.validator = e.validator.map(function (e) {
                        return Formily.Shared.isPlainObj(e) && D.call(e, t)
                          ? ((e[t] = i), e)
                          : e
                      }))
                    : Formily.Shared.isPlainObj(e.validator)
                    ? (e.validator[t] = i)
                    : (e.validator = (((n = {})[t] = i), n))
                  : Formily.Shared.isArr(e.validator)
                  ? 'required' === t
                    ? e.validator.unshift(a)
                    : e.validator.push(a)
                  : 'required' === t
                  ? (e.validator = [a, e.validator])
                  : Formily.Shared.isPlainObj(e.validator)
                  ? (e.validator[t] = i)
                  : e.validator
                  ? (e.validator = [e.validator, a])
                  : (e.validator = a)
              }
            })(l, e, t)
          }),
          (l.setRequired = function (e) {
            l.required = e
          }),
          (l.setValue = function (e) {
            l.value = e
          }),
          (l.setInitialValue = function (e) {
            l.initialValue = e
          }),
          (l.setLoading = function (e) {
            ee(l, e)
          }),
          (l.setValidating = function (e) {
            Z(l, e)
          }),
          (l.setSubmitting = function (e) {
            $(l, e)
          }),
          (l.setState = K(l)),
          (l.getState = Q(l)),
          (l.onInput = function () {
            for (var t = [], i = 0; i < arguments.length; i++)
              t[i] = arguments[i]
            return n(l, void 0, void 0, function () {
              var i, r, n
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (null === (n = t[0]) || void 0 === n
                      ? void 0
                      : n.target) && !P(t[0])
                      ? [2]
                      : ((i = U(t)),
                        (r = i[0]),
                        (this.caches.inputting = !0),
                        (this.inputValue = r),
                        (this.inputValues = i),
                        (this.value = r),
                        this.modify(),
                        this.notify(
                          e.LifeCycleTypes.ON_FIELD_INPUT_VALUE_CHANGE
                        ),
                        this.notify(
                          e.LifeCycleTypes.ON_FORM_INPUT_CHANGE,
                          this.form
                        ),
                        [4, ne(this, 'onInput')])
                  case 1:
                    return o.sent(), (this.caches.inputting = !1), [2]
                }
              })
            })
          }),
          (l.onFocus = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            return n(l, void 0, void 0, function () {
              var t
              return o(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (null === (t = e[0]) || void 0 === t
                      ? void 0
                      : t.target) && !P(e[0], !1)
                      ? [2]
                      : ((this.active = !0),
                        (this.visited = !0),
                        [4, ne(this, 'onFocus')])
                  case 1:
                    return i.sent(), [2]
                }
              })
            })
          }),
          (l.onBlur = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            return n(l, void 0, void 0, function () {
              var t
              return o(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (null === (t = e[0]) || void 0 === t
                      ? void 0
                      : t.target) && !P(e[0], !1)
                      ? [2]
                      : ((this.active = !1), [4, ne(this, 'onBlur')])
                  case 1:
                    return i.sent(), [2]
                }
              })
            })
          }),
          (l.validate = function (e) {
            return ie(l, ''.concat(l.address, '.**'), e)
          }),
          (l.submit = function (e) {
            return te(l, e)
          }),
          (l.reset = function (e) {
            return re(l, ''.concat(l.address, '.**'), e)
          }),
          (l.queryFeedbacks = function (e) {
            return w(l, e)
          }),
          (l.modify = function () {
            return (function (e) {
              if (!e.selfModified) {
                ;(e.selfModified = !0), (e.modified = !0)
                for (var t = e.parent; t; ) {
                  if (S(t)) {
                    if (t.modified) return
                    t.modified = !0
                  }
                  t = t.parent
                }
                e.form.modified = !0
              }
            })(l)
          }),
          (l.form = a),
          (l.props = r),
          (l.designable = s),
          ce(),
          l.makeIndexes(i),
          l.initialize(),
          l.makeObservable(),
          l.makeReactive(),
          l.onInit(),
          ue(),
          l
        )
      }
      return (
        i(r, t),
        (r.prototype.initialize = function () {
          var e, t
          ;(this.initialized = !1),
            (this.loading = !1),
            (this.validating = !1),
            (this.submitting = !1),
            (this.selfModified = !1),
            (this.active = !1),
            (this.visited = !1),
            (this.mounted = !1),
            (this.unmounted = !1),
            (this.inputValues = []),
            (this.inputValue = null),
            (this.feedbacks = []),
            (this.title = this.props.title),
            (this.description = this.props.description),
            (this.display = this.props.display),
            (this.pattern = this.props.pattern),
            (this.editable = this.props.editable),
            (this.disabled = this.props.disabled),
            (this.readOnly = this.props.readOnly),
            (this.readPretty = this.props.readPretty),
            (this.visible = this.props.visible),
            (this.hidden = this.props.hidden),
            (this.dataSource = this.props.dataSource),
            (this.validator = this.props.validator),
            (this.required = this.props.required),
            (this.content = this.props.content),
            (this.value =
              ((e = this.props.value),
              (t = this.props.initialValue),
              se(e, t) ? Formily.Shared.clone(t) : e)),
            (this.initialValue = this.props.initialValue),
            (this.data = this.props.data),
            (this.decorator = Formily.Shared.toArr(this.props.decorator)),
            (this.component = Formily.Shared.toArr(this.props.component))
        }),
        (r.prototype.makeObservable = function () {
          this.designable ||
            Formily.Reactive.define(this, {
              title: Formily.Reactive.observable.ref,
              description: Formily.Reactive.observable.ref,
              dataSource: Formily.Reactive.observable.ref,
              selfDisplay: Formily.Reactive.observable.ref,
              selfPattern: Formily.Reactive.observable.ref,
              loading: Formily.Reactive.observable.ref,
              validating: Formily.Reactive.observable.ref,
              submitting: Formily.Reactive.observable.ref,
              selfModified: Formily.Reactive.observable.ref,
              modified: Formily.Reactive.observable.ref,
              active: Formily.Reactive.observable.ref,
              visited: Formily.Reactive.observable.ref,
              initialized: Formily.Reactive.observable.ref,
              mounted: Formily.Reactive.observable.ref,
              unmounted: Formily.Reactive.observable.ref,
              inputValue: Formily.Reactive.observable.ref,
              inputValues: Formily.Reactive.observable.ref,
              decoratorType: Formily.Reactive.observable.ref,
              componentType: Formily.Reactive.observable.ref,
              content: Formily.Reactive.observable.ref,
              decoratorProps: Formily.Reactive.observable,
              componentProps: Formily.Reactive.observable,
              validator: Formily.Reactive.observable.shallow,
              feedbacks: Formily.Reactive.observable.shallow,
              data: Formily.Reactive.observable.shallow,
              component: Formily.Reactive.observable.computed,
              decorator: Formily.Reactive.observable.computed,
              errors: Formily.Reactive.observable.computed,
              warnings: Formily.Reactive.observable.computed,
              successes: Formily.Reactive.observable.computed,
              valid: Formily.Reactive.observable.computed,
              invalid: Formily.Reactive.observable.computed,
              selfErrors: Formily.Reactive.observable.computed,
              selfWarnings: Formily.Reactive.observable.computed,
              selfSuccesses: Formily.Reactive.observable.computed,
              selfValid: Formily.Reactive.observable.computed,
              selfInvalid: Formily.Reactive.observable.computed,
              validateStatus: Formily.Reactive.observable.computed,
              value: Formily.Reactive.observable.computed,
              initialValue: Formily.Reactive.observable.computed,
              display: Formily.Reactive.observable.computed,
              pattern: Formily.Reactive.observable.computed,
              required: Formily.Reactive.observable.computed,
              hidden: Formily.Reactive.observable.computed,
              visible: Formily.Reactive.observable.computed,
              disabled: Formily.Reactive.observable.computed,
              readOnly: Formily.Reactive.observable.computed,
              readPretty: Formily.Reactive.observable.computed,
              editable: Formily.Reactive.observable.computed,
              setDisplay: Formily.Reactive.action,
              setTitle: Formily.Reactive.action,
              setDescription: Formily.Reactive.action,
              setDataSource: Formily.Reactive.action,
              setValue: Formily.Reactive.action,
              setPattern: Formily.Reactive.action,
              setInitialValue: Formily.Reactive.action,
              setLoading: Formily.Reactive.action,
              setValidating: Formily.Reactive.action,
              setFeedback: Formily.Reactive.action,
              setSelfErrors: Formily.Reactive.action,
              setSelfWarnings: Formily.Reactive.action,
              setSelfSuccesses: Formily.Reactive.action,
              setValidator: Formily.Reactive.action,
              setRequired: Formily.Reactive.action,
              setComponent: Formily.Reactive.action,
              setComponentProps: Formily.Reactive.action,
              setDecorator: Formily.Reactive.action,
              setDecoratorProps: Formily.Reactive.action,
              setData: Formily.Reactive.action,
              setContent: Formily.Reactive.action,
              validate: Formily.Reactive.action,
              reset: Formily.Reactive.action,
              onInit: Formily.Reactive.batch,
              onInput: Formily.Reactive.batch,
              onMount: Formily.Reactive.batch,
              onUnmount: Formily.Reactive.batch,
              onFocus: Formily.Reactive.batch,
              onBlur: Formily.Reactive.batch,
            })
        }),
        (r.prototype.makeReactive = function () {
          var t = this
          this.designable ||
            (this.disposers.push(
              Formily.Reactive.reaction(
                function () {
                  return t.value
                },
                function (i) {
                  t.notify(e.LifeCycleTypes.ON_FIELD_VALUE_CHANGE),
                    Formily.Shared.isValid(i) &&
                      t.selfModified &&
                      !t.caches.inputting &&
                      ne(t)
                }
              ),
              Formily.Reactive.reaction(
                function () {
                  return t.initialValue
                },
                function () {
                  t.notify(e.LifeCycleTypes.ON_FIELD_INITIAL_VALUE_CHANGE)
                }
              ),
              Formily.Reactive.reaction(
                function () {
                  return t.display
                },
                function (e) {
                  var i = t.value
                  'visible' === e
                    ? Formily.Shared.isEmpty(i) &&
                      (t.setValue(t.caches.value), (t.caches.value = void 0))
                    : ((t.caches.value = Formily.Reactive.toJS(i)),
                      'none' === e && t.form.deleteValuesIn(t.path)),
                    ('none' !== e && 'hidden' !== e) ||
                      t.setFeedback({ type: 'error', messages: [] })
                }
              ),
              Formily.Reactive.reaction(
                function () {
                  return t.pattern
                },
                function (e) {
                  'editable' !== e &&
                    t.setFeedback({ type: 'error', messages: [] })
                }
              )
            ),
            le(this))
        }),
        Object.defineProperty(r.prototype, 'selfErrors', {
          get: function () {
            return G(this, { type: 'error' })
          },
          set: function (e) {
            this.setFeedback({
              type: 'error',
              code: 'EffectError',
              messages: e,
            })
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'errors', {
          get: function () {
            return this.form.errors.filter(J(this))
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'selfWarnings', {
          get: function () {
            return G(this, { type: 'warning' })
          },
          set: function (e) {
            this.setFeedback({
              type: 'warning',
              code: 'EffectWarning',
              messages: e,
            })
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'warnings', {
          get: function () {
            return this.form.warnings.filter(J(this))
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'selfSuccesses', {
          get: function () {
            return G(this, { type: 'success' })
          },
          set: function (e) {
            this.setFeedback({
              type: 'success',
              code: 'EffectSuccess',
              messages: e,
            })
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'successes', {
          get: function () {
            return this.form.successes.filter(J(this))
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'selfValid', {
          get: function () {
            return !this.selfErrors.length
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'valid', {
          get: function () {
            return !this.errors.length
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'selfInvalid', {
          get: function () {
            return !this.selfValid
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'invalid', {
          get: function () {
            return !this.valid
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'value', {
          get: function () {
            return this.form.getValuesIn(this.path)
          },
          set: function (e) {
            if (!this.initialized) {
              if ('none' === this.display) return void (this.caches.value = e)
              if (!se(this.value, e) && !this.designable) return
            }
            this.form.setValuesIn(this.path, e)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'initialValue', {
          get: function () {
            return this.form.getInitialValuesIn(this.path)
          },
          set: function (e) {
            ;(this.initialized ||
              se(this.initialValue, e) ||
              this.designable) &&
              this.form.setInitialValuesIn(this.path, e)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'required', {
          get: function () {
            return Formily.Validator.parseValidatorDescriptions(
              this.validator
            ).some(function (e) {
              return e.required
            })
          },
          set: function (e) {
            this.required !== e && this.setValidatorRule('required', e)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'validateStatus', {
          get: function () {
            return this.validating
              ? 'validating'
              : this.selfInvalid
              ? 'error'
              : this.selfWarnings.length
              ? 'warning'
              : this.selfSuccesses.length
              ? 'success'
              : void 0
          },
          enumerable: !1,
          configurable: !0,
        }),
        r
      )
    })(de),
    ye = function (e, t) {
      return function () {
        for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r]
        if (!A.effectStart)
          throw new Error(
            'Effect hooks cannot be used in asynchronous function body'
          )
        A.lifecycles.push(
          new c(e, function (e, r) {
            Formily.Shared.isFn(t) &&
              t
                .apply(void 0, s([e, r], a(A.context)))
                .apply(void 0, s([], a(i)))
          })
        )
      }
    },
    pe = function (e) {
      var t
      return {
        provide: function (i) {
          if (!A.effectStart)
            throw new Error(
              'Provide method cannot be used in asynchronous function body'
            )
          ;(t = A.context.length),
            (A.context[t] = Formily.Shared.isValid(i) ? i : e)
        },
        consume: function () {
          if (!A.effectStart)
            throw new Error(
              'Consume method cannot be used in asynchronous function body'
            )
          return A.context[t]
        },
      }
    },
    he = pe(),
    me = he.consume,
    ve = function (e) {
      for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i]
      return (
        (A.lifecycles = []),
        (A.context = []),
        (A.effectStart = !0),
        (A.effectEnd = !1),
        d(e) && he.provide(e),
        t.forEach(function (t) {
          Formily.Shared.isFn(t) && t(e)
        }),
        (A.context = []),
        (A.effectStart = !1),
        (A.effectEnd = !0),
        A.lifecycles
      )
    },
    Fe = (function (e) {
      function t(t, i, r, n) {
        var o = e.call(this, t, i, r, n) || this
        return (
          (o.displayName = 'ArrayField'),
          (o.push = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            return Formily.Reactive.action(function () {
              var t
              return (
                Formily.Shared.isArr(o.value) || (o.value = []),
                (t = o.value).push.apply(t, s([], a(e))),
                o.onInput(o.value)
              )
            })
          }),
          (o.pop = function () {
            if (Formily.Shared.isArr(o.value))
              return Formily.Reactive.action(function () {
                var e = o.value.length - 1
                return (
                  x(o, { startIndex: e, deleteCount: 1 }),
                  o.value.pop(),
                  o.onInput(o.value)
                )
              })
          }),
          (o.insert = function (e) {
            for (var t = [], i = 1; i < arguments.length; i++)
              t[i - 1] = arguments[i]
            return Formily.Reactive.action(function () {
              var i
              return (
                Formily.Shared.isArr(o.value) || (o.value = []),
                x(o, { startIndex: e, insertCount: t.length }),
                (i = o.value).splice.apply(i, s([e, 0], a(t))),
                o.onInput(o.value)
              )
            })
          }),
          (o.remove = function (e) {
            if (Formily.Shared.isArr(o.value))
              return Formily.Reactive.action(function () {
                return (
                  x(o, { startIndex: e, deleteCount: 1 }),
                  o.value.splice(e, 1),
                  o.onInput(o.value)
                )
              })
          }),
          (o.copy = function (e) {
            if (Formily.Shared.isArr(o.value))
              return Formily.Reactive.action(function () {
                var t = o.value[e]
                return (
                  o.value.splice(e, 0, Formily.Shared.clone(t)),
                  o.onInput(o.value)
                )
              })
          }),
          (o.shift = function () {
            if (Formily.Shared.isArr(o.value))
              return Formily.Reactive.action(function () {
                return o.value.shift(), o.onInput(o.value)
              })
          }),
          (o.unshift = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            return Formily.Reactive.action(function () {
              var t
              return (
                Formily.Shared.isArr(o.value) || (o.value = []),
                x(o, { startIndex: 0, insertCount: e.length }),
                (t = o.value).unshift.apply(t, s([], a(e))),
                o.onInput(o.value)
              )
            })
          }),
          (o.move = function (e, t) {
            if (Formily.Shared.isArr(o.value) && e !== t)
              return Formily.Reactive.action(function () {
                var i = o.value[e]
                return (
                  o.value.splice(e, 1),
                  o.value.splice(t, 0, i),
                  q(o, { fromIndex: e, toIndex: t }),
                  o.onInput(o.value)
                )
              })
          }),
          (o.moveUp = function (e) {
            if (Formily.Shared.isArr(o.value))
              return o.move(e, e - 1 < 0 ? o.value.length - 1 : e - 1)
          }),
          (o.moveDown = function (e) {
            if (Formily.Shared.isArr(o.value))
              return o.move(e, e + 1 >= o.value.length ? 0 : e + 1)
          }),
          o.makeAutoCleanable(),
          o
        )
      }
      return (
        i(t, e),
        (t.prototype.makeAutoCleanable = function () {
          var e = this
          this.disposers.push(
            Formily.Reactive.reaction(
              function () {
                var t
                return null === (t = e.value) || void 0 === t
                  ? void 0
                  : t.length
              },
              function (t, i) {
                i && !t ? H(e, 0) : t < i && H(e, t)
              }
            )
          )
        }),
        t
      )
    })(fe),
    be = (function (e) {
      function t(t, i, r, n) {
        var o = e.call(this, t, i, r, n) || this
        return (
          (o.displayName = 'ObjectField'),
          (o.additionalProperties = []),
          (o.addProperty = function (e, t) {
            return (
              o.form.setValuesIn(o.path.concat(e), t),
              o.additionalProperties.push(e),
              o.onInput(o.value)
            )
          }),
          (o.removeProperty = function (e) {
            return (
              o.form.deleteValuesIn(o.path.concat(e)),
              o.additionalProperties.splice(
                o.additionalProperties.indexOf(e),
                1
              ),
              o.onInput(o.value)
            )
          }),
          (o.existProperty = function (e) {
            return o.form.existValuesIn(o.path.concat(e))
          }),
          o.makeAutoCleanable(),
          o
        )
      }
      return (
        i(t, e),
        (t.prototype.makeAutoCleanable = function () {
          var e = this
          this.disposers.push(
            Formily.Reactive.reaction(
              function () {
                return Object.keys(e.value || {})
              },
              function (t) {
                var i = e.additionalProperties.filter(function (e) {
                  return !t.includes(e)
                })
                z(e, i)
              }
            )
          )
        }),
        t
      )
    })(fe),
    Se = (function (e) {
      function t(t, i, r, n) {
        var o = e.call(this) || this
        return (
          (o.displayName = 'VoidField'),
          (o.setState = K(o)),
          (o.getState = Q(o)),
          (o.form = r),
          (o.props = i),
          (o.designable = n),
          ce(),
          o.makeIndexes(t),
          o.initialize(),
          o.makeObservable(),
          o.makeReactive(),
          o.onInit(),
          ue(),
          o
        )
      }
      return (
        i(t, e),
        (t.prototype.initialize = function () {
          ;(this.mounted = !1),
            (this.unmounted = !1),
            (this.initialized = !1),
            (this.title = this.props.title),
            (this.description = this.props.description),
            (this.pattern = this.props.pattern),
            (this.display = this.props.display),
            (this.hidden = this.props.hidden),
            (this.editable = this.props.editable),
            (this.disabled = this.props.disabled),
            (this.readOnly = this.props.readOnly),
            (this.readPretty = this.props.readPretty),
            (this.visible = this.props.visible),
            (this.content = this.props.content),
            (this.data = this.props.data),
            (this.decorator = Formily.Shared.toArr(this.props.decorator)),
            (this.component = Formily.Shared.toArr(this.props.component))
        }),
        (t.prototype.makeObservable = function () {
          this.designable ||
            Formily.Reactive.define(this, {
              title: Formily.Reactive.observable.ref,
              description: Formily.Reactive.observable.ref,
              selfDisplay: Formily.Reactive.observable.ref,
              selfPattern: Formily.Reactive.observable.ref,
              initialized: Formily.Reactive.observable.ref,
              mounted: Formily.Reactive.observable.ref,
              unmounted: Formily.Reactive.observable.ref,
              decoratorType: Formily.Reactive.observable.ref,
              componentType: Formily.Reactive.observable.ref,
              content: Formily.Reactive.observable.ref,
              data: Formily.Reactive.observable.shallow,
              decoratorProps: Formily.Reactive.observable,
              componentProps: Formily.Reactive.observable,
              display: Formily.Reactive.observable.computed,
              pattern: Formily.Reactive.observable.computed,
              hidden: Formily.Reactive.observable.computed,
              visible: Formily.Reactive.observable.computed,
              disabled: Formily.Reactive.observable.computed,
              readOnly: Formily.Reactive.observable.computed,
              readPretty: Formily.Reactive.observable.computed,
              editable: Formily.Reactive.observable.computed,
              component: Formily.Reactive.observable.computed,
              decorator: Formily.Reactive.observable.computed,
              setTitle: Formily.Reactive.action,
              setDescription: Formily.Reactive.action,
              setDisplay: Formily.Reactive.action,
              setPattern: Formily.Reactive.action,
              setComponent: Formily.Reactive.action,
              setComponentProps: Formily.Reactive.action,
              setDecorator: Formily.Reactive.action,
              setDecoratorProps: Formily.Reactive.action,
              setData: Formily.Reactive.action,
              setContent: Formily.Reactive.action,
              onInit: Formily.Reactive.batch,
              onMount: Formily.Reactive.batch,
              onUnmount: Formily.Reactive.batch,
            })
        }),
        (t.prototype.makeReactive = function () {
          this.designable || le(this)
        }),
        t
      )
    })(de),
    _e = '__FORMILY_DEV_TOOLS_HOOK__',
    ge = (function () {
      function t(t) {
        var i,
          n = this
        ;(this.displayName = 'Form'),
          (this.fields = {}),
          (this.requests = {}),
          (this.indexes = {}),
          (this.disposers = []),
          (this.createField = function (t) {
            var i = Formily.Shared.FormPath.parse(t.basePath).concat(t.name),
              r = i.toString()
            if (r)
              return (
                (n.fields[r] && !n.props.designable) ||
                  (Formily.Reactive.batch(function () {
                    new fe(i, t, n, n.props.designable)
                  }),
                  n.notify(e.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)),
                n.fields[r]
              )
          }),
          (this.createArrayField = function (t) {
            var i = Formily.Shared.FormPath.parse(t.basePath).concat(t.name),
              o = i.toString()
            if (o)
              return (
                (n.fields[o] && !n.props.designable) ||
                  (Formily.Reactive.batch(function () {
                    new Fe(
                      i,
                      r(r({}, t), {
                        value: Formily.Shared.isArr(t.value) ? t.value : [],
                      }),
                      n,
                      n.props.designable
                    )
                  }),
                  n.notify(e.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)),
                n.fields[o]
              )
          }),
          (this.createObjectField = function (t) {
            var i = Formily.Shared.FormPath.parse(t.basePath).concat(t.name),
              o = i.toString()
            if (o)
              return (
                (n.fields[o] && !n.props.designable) ||
                  (Formily.Reactive.batch(function () {
                    new be(
                      i,
                      r(r({}, t), {
                        value: Formily.Shared.isObj(t.value) ? t.value : {},
                      }),
                      n,
                      n.props.designable
                    )
                  }),
                  n.notify(e.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)),
                n.fields[o]
              )
          }),
          (this.createVoidField = function (t) {
            var i = Formily.Shared.FormPath.parse(t.basePath).concat(t.name),
              r = i.toString()
            if (r)
              return (
                (n.fields[r] && !n.props.designable) ||
                  (Formily.Reactive.batch(function () {
                    new Se(i, t, n, n.props.designable)
                  }),
                  n.notify(e.LifeCycleTypes.ON_FORM_GRAPH_CHANGE)),
                n.fields[r]
              )
          }),
          (this.setValues = function (e, t) {
            void 0 === t && (t = 'merge'),
              Formily.Shared.isPlainObj(e) &&
                (n.values =
                  'merge' === t || 'deepMerge' === t
                    ? Formily.Shared.merge(n.values, e, {
                        arrayMerge: function (e, t) {
                          return t
                        },
                      })
                    : 'shallowMerge' === t
                    ? Object.assign(n.values, e)
                    : e)
          }),
          (this.setInitialValues = function (e, t) {
            void 0 === t && (t = 'merge'),
              Formily.Shared.isPlainObj(e) &&
                (n.initialValues =
                  'merge' === t || 'deepMerge' === t
                    ? Formily.Shared.merge(n.initialValues, e, {
                        arrayMerge: function (e, t) {
                          return t
                        },
                      })
                    : 'shallowMerge' === t
                    ? Object.assign(n.initialValues, e)
                    : e)
          }),
          (this.setValuesIn = function (e, t) {
            Formily.Shared.FormPath.setIn(n.values, e, t)
          }),
          (this.deleteValuesIn = function (e) {
            Formily.Shared.FormPath.deleteIn(n.values, e)
          }),
          (this.existValuesIn = function (e) {
            return Formily.Shared.FormPath.existIn(n.values, e)
          }),
          (this.getValuesIn = function (e) {
            return Formily.Shared.FormPath.getIn(n.values, e)
          }),
          (this.setInitialValuesIn = function (e, t) {
            Formily.Shared.FormPath.setIn(n.initialValues, e, t)
          }),
          (this.deleteInitialValuesIn = function (e) {
            Formily.Shared.FormPath.deleteIn(n.initialValues, e)
          }),
          (this.existInitialValuesIn = function (e) {
            return Formily.Shared.FormPath.existIn(n.initialValues, e)
          }),
          (this.getInitialValuesIn = function (e) {
            return Formily.Shared.FormPath.getIn(n.initialValues, e)
          }),
          (this.setLoading = function (e) {
            ee(n, e)
          }),
          (this.setSubmitting = function (e) {
            $(n, e)
          }),
          (this.setValidating = function (e) {
            Z(n, e)
          }),
          (this.setDisplay = function (e) {
            n.display = e
          }),
          (this.setPattern = function (e) {
            n.pattern = e
          }),
          (this.addEffects = function (e, t) {
            n.heart.hasLifeCycles(e) || n.heart.addLifeCycles(e, ve(n, t))
          }),
          (this.removeEffects = function (e) {
            n.heart.removeLifeCycles(e)
          }),
          (this.setEffects = function (e) {
            n.heart.setLifeCycles(ve(n, e))
          }),
          (this.clearErrors = function (e) {
            void 0 === e && (e = '*'),
              n.query(e).forEach(function (e) {
                m(e) || e.setFeedback({ type: 'error', messages: [] })
              })
          }),
          (this.clearWarnings = function (e) {
            void 0 === e && (e = '*'),
              n.query(e).forEach(function (e) {
                m(e) || e.setFeedback({ type: 'warning', messages: [] })
              })
          }),
          (this.clearSuccesses = function (e) {
            void 0 === e && (e = '*'),
              n.query(e).forEach(function (e) {
                m(e) || e.setFeedback({ type: 'success', messages: [] })
              })
          }),
          (this.query = function (e) {
            return new R({ pattern: e, base: '', form: n })
          }),
          (this.queryFeedbacks = function (e) {
            return n.query(e.address || e.path || '*').reduce(function (t, i) {
              return m(i)
                ? t
                : t.concat(
                    i
                      .queryFeedbacks(e)
                      .map(function (e) {
                        return r(r({}, e), {
                          address: i.address.toString(),
                          path: i.path.toString(),
                        })
                      })
                      .filter(function (e) {
                        return e.messages.length > 0
                      })
                  )
            }, [])
          }),
          (this.notify = function (e, t) {
            n.heart.publish(e, null != t ? t : n)
          }),
          (this.subscribe = function (e) {
            return n.heart.subscribe(e)
          }),
          (this.unsubscribe = function (e) {
            n.heart.unsubscribe(e)
          }),
          (this.onInit = function () {
            ;(n.initialized = !0), n.notify(e.LifeCycleTypes.ON_FORM_INIT)
          }),
          (this.onMount = function () {
            ;(n.mounted = !0),
              n.notify(e.LifeCycleTypes.ON_FORM_MOUNT),
              Formily.Shared.globalThisPolyfill[_e] &&
                !n.props.designable &&
                Formily.Shared.globalThisPolyfill[_e].inject(n.id, n)
          }),
          (this.onUnmount = function () {
            n.notify(e.LifeCycleTypes.ON_FORM_UNMOUNT),
              n.query('*').forEach(function (e) {
                return e.destroy()
              }),
              n.disposers.forEach(function (e) {
                return e()
              }),
              (n.unmounted = !0),
              (n.indexes = {}),
              n.heart.clear(),
              Formily.Shared.globalThisPolyfill[_e] &&
                !n.props.designable &&
                Formily.Shared.globalThisPolyfill[_e].unmount(n.id)
          }),
          (this.setState = K(this)),
          (this.getState = Q(this)),
          (this.setFormState = K(this)),
          (this.getFormState = Q(this)),
          (this.setFieldState = X(this)),
          (this.getFieldState =
            ((i = this),
            function (e, t) {
              return g(e)
                ? e.take(t)
                : y(e)
                ? e.getState(t)
                : i.query(e).take(function (e) {
                    return e.getState(t)
                  })
            })),
          (this.getFormGraph = function () {
            return n.graph.getGraph()
          }),
          (this.setFormGraph = function (e) {
            n.graph.setGraph(e)
          }),
          (this.clearFormGraph = function (e) {
            void 0 === e && (e = '*'),
              n.query(e).forEach(function (e) {
                e.destroy()
              })
          }),
          (this.validate = function (e) {
            return void 0 === e && (e = '*'), ie(n, e)
          }),
          (this.submit = function (e) {
            return te(n, e)
          }),
          (this.reset = function (e, t) {
            return void 0 === e && (e = '*'), re(n, e, t)
          }),
          this.initialize(t),
          this.makeObservable(),
          this.makeReactive(),
          this.makeValues(),
          this.onInit()
      }
      return (
        (t.prototype.initialize = function (e) {
          ;(this.id = Formily.Shared.uid()),
            (this.props = r({}, e)),
            (this.initialized = !1),
            (this.submitting = !1),
            (this.validating = !1),
            (this.loading = !1),
            (this.modified = !1),
            (this.mounted = !1),
            (this.unmounted = !1),
            (this.display = this.props.display || 'visible'),
            (this.pattern = this.props.pattern || 'editable'),
            (this.editable = this.props.editable),
            (this.disabled = this.props.disabled),
            (this.readOnly = this.props.readOnly),
            (this.readPretty = this.props.readPretty),
            (this.visible = this.props.visible),
            (this.hidden = this.props.hidden),
            (this.graph = new I(this)),
            (this.heart = new u({ lifecycles: this.lifecycles, context: this }))
        }),
        (t.prototype.makeValues = function () {
          ;(this.values = ae(this.props.values)),
            (this.initialValues = ae(this.props.initialValues))
        }),
        (t.prototype.makeObservable = function () {
          Formily.Reactive.define(this, {
            fields: Formily.Reactive.observable.shallow,
            initialized: Formily.Reactive.observable.ref,
            validating: Formily.Reactive.observable.ref,
            submitting: Formily.Reactive.observable.ref,
            loading: Formily.Reactive.observable.ref,
            modified: Formily.Reactive.observable.ref,
            pattern: Formily.Reactive.observable.ref,
            display: Formily.Reactive.observable.ref,
            mounted: Formily.Reactive.observable.ref,
            unmounted: Formily.Reactive.observable.ref,
            values: Formily.Reactive.observable,
            initialValues: Formily.Reactive.observable,
            valid: Formily.Reactive.observable.computed,
            invalid: Formily.Reactive.observable.computed,
            errors: Formily.Reactive.observable.computed,
            warnings: Formily.Reactive.observable.computed,
            successes: Formily.Reactive.observable.computed,
            hidden: Formily.Reactive.observable.computed,
            visible: Formily.Reactive.observable.computed,
            editable: Formily.Reactive.observable.computed,
            readOnly: Formily.Reactive.observable.computed,
            readPretty: Formily.Reactive.observable.computed,
            disabled: Formily.Reactive.observable.computed,
            setValues: Formily.Reactive.action,
            setValuesIn: Formily.Reactive.action,
            setInitialValues: Formily.Reactive.action,
            setInitialValuesIn: Formily.Reactive.action,
            setPattern: Formily.Reactive.action,
            setDisplay: Formily.Reactive.action,
            setState: Formily.Reactive.action,
            deleteInitialValuesIn: Formily.Reactive.action,
            deleteValuesIn: Formily.Reactive.action,
            setSubmitting: Formily.Reactive.action,
            setValidating: Formily.Reactive.action,
            setFormGraph: Formily.Reactive.action,
            clearFormGraph: Formily.Reactive.action,
            reset: Formily.Reactive.action,
            submit: Formily.Reactive.action,
            validate: Formily.Reactive.action,
            onMount: Formily.Reactive.batch,
            onUnmount: Formily.Reactive.batch,
            onInit: Formily.Reactive.batch,
          })
        }),
        (t.prototype.makeReactive = function () {
          var t = this
          this.disposers.push(
            Formily.Reactive.observe(
              this,
              function (i) {
                Y(t, i),
                  (function (t, i) {
                    ;(Array.isArray(i.object) && 'length' === i.key) ||
                      ((Formily.Reactive.contains(t.values, i.object) ||
                        Formily.Reactive.contains(t.values, i.value)) &&
                        t.initialized &&
                        t.notify(e.LifeCycleTypes.ON_FORM_VALUES_CHANGE))
                  })(t, i)
              },
              !0
            )
          )
        }),
        Object.defineProperty(t.prototype, 'valid', {
          get: function () {
            return !this.invalid
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'invalid', {
          get: function () {
            return this.errors.length > 0
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'errors', {
          get: function () {
            return this.queryFeedbacks({ type: 'error' })
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'warnings', {
          get: function () {
            return this.queryFeedbacks({ type: 'warning' })
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'successes', {
          get: function () {
            return this.queryFeedbacks({ type: 'success' })
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'lifecycles', {
          get: function () {
            return ve(this, this.props.effects)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'hidden', {
          get: function () {
            return 'hidden' === this.display
          },
          set: function (e) {
            Formily.Shared.isValid(e) &&
              (this.display = e ? 'hidden' : 'visible')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'visible', {
          get: function () {
            return 'visible' === this.display
          },
          set: function (e) {
            Formily.Shared.isValid(e) && (this.display = e ? 'visible' : 'none')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'editable', {
          get: function () {
            return 'editable' === this.pattern
          },
          set: function (e) {
            Formily.Shared.isValid(e) &&
              (this.pattern = e ? 'editable' : 'readPretty')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'readOnly', {
          get: function () {
            return 'readOnly' === this.pattern
          },
          set: function (e) {
            Formily.Shared.isValid(e) &&
              (this.pattern = e ? 'readOnly' : 'editable')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'disabled', {
          get: function () {
            return 'disabled' === this.pattern
          },
          set: function (e) {
            Formily.Shared.isValid(e) &&
              (this.pattern = e ? 'disabled' : 'editable')
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'readPretty', {
          get: function () {
            return 'readPretty' === this.pattern
          },
          set: function (e) {
            Formily.Shared.isValid(e) &&
              (this.pattern = e ? 'readPretty' : 'editable')
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      )
    })()
  const Ie = Formily.Shared.FormPath,
    Oe = Formily.Validator.getValidateLocaleIOSCode,
    Re = Formily.Validator.setValidateLanguage,
    Te = Formily.Validator.registerValidateFormats,
    Le = Formily.Validator.registerValidateLocale,
    Ee = Formily.Validator.registerValidateMessageTemplateEngine,
    Ne = Formily.Validator.registerValidateRules
  function Ve(e) {
    return ye(e, function (e) {
      return function (t) {
        Formily.Reactive.batch(function () {
          t(e)
        })
      }
    })
  }
  var Ae = Ve(e.LifeCycleTypes.ON_FORM_INIT),
    Ce = Ve(e.LifeCycleTypes.ON_FORM_MOUNT),
    De = Ve(e.LifeCycleTypes.ON_FORM_UNMOUNT),
    Me = Ve(e.LifeCycleTypes.ON_FORM_VALUES_CHANGE),
    Pe = Ve(e.LifeCycleTypes.ON_FORM_INITIAL_VALUES_CHANGE),
    Ue = Ve(e.LifeCycleTypes.ON_FORM_INPUT_CHANGE),
    je = Ve(e.LifeCycleTypes.ON_FORM_SUBMIT),
    ke = Ve(e.LifeCycleTypes.ON_FORM_RESET),
    we = Ve(e.LifeCycleTypes.ON_FORM_SUBMIT_START),
    Ge = Ve(e.LifeCycleTypes.ON_FORM_SUBMIT_END),
    Be = Ve(e.LifeCycleTypes.ON_FORM_SUBMIT_SUCCESS),
    xe = Ve(e.LifeCycleTypes.ON_FORM_SUBMIT_FAILED),
    qe = Ve(e.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_START),
    He = Ve(e.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_SUCCESS),
    ze = Ve(e.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_FAILED),
    We = Ve(e.LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_END),
    Je = Ve(e.LifeCycleTypes.ON_FORM_VALIDATE_START),
    Ke = Ve(e.LifeCycleTypes.ON_FORM_VALIDATE_SUCCESS),
    Qe = Ve(e.LifeCycleTypes.ON_FORM_VALIDATE_FAILED),
    Xe = Ve(e.LifeCycleTypes.ON_FORM_VALIDATE_END),
    Ye = Ve(e.LifeCycleTypes.ON_FORM_GRAPH_CHANGE),
    Ze = Ve(e.LifeCycleTypes.ON_FORM_LOADING)
  function $e(e) {
    return ye(e, function (e, t) {
      return function (i, r) {
        Formily.Shared.FormPath.parse(i).matchAliasGroup(e.address, e.path) &&
          Formily.Reactive.batch(function () {
            r(e, t)
          })
      }
    })
  }
  var et = $e(e.LifeCycleTypes.ON_FIELD_INIT),
    tt = $e(e.LifeCycleTypes.ON_FIELD_MOUNT),
    it = $e(e.LifeCycleTypes.ON_FIELD_UNMOUNT),
    rt = $e(e.LifeCycleTypes.ON_FIELD_VALUE_CHANGE),
    nt = $e(e.LifeCycleTypes.ON_FIELD_INITIAL_VALUE_CHANGE),
    ot = $e(e.LifeCycleTypes.ON_FIELD_INPUT_VALUE_CHANGE),
    at = $e(e.LifeCycleTypes.ON_FIELD_VALIDATE_START),
    st = $e(e.LifeCycleTypes.ON_FIELD_VALIDATE_END),
    lt = $e(e.LifeCycleTypes.ON_FIELD_VALIDATING),
    ct = $e(e.LifeCycleTypes.ON_FIELD_VALIDATE_FAILED),
    ut = $e(e.LifeCycleTypes.ON_FIELD_VALIDATE_SUCCESS),
    dt = $e(e.LifeCycleTypes.ON_FIELD_SUBMIT),
    ft = $e(e.LifeCycleTypes.ON_FIELD_SUBMIT_START),
    yt = $e(e.LifeCycleTypes.ON_FIELD_SUBMIT_END),
    pt = $e(e.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_START),
    ht = $e(e.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_END),
    mt = $e(e.LifeCycleTypes.ON_FIELD_SUBMIT_SUCCESS),
    vt = $e(e.LifeCycleTypes.ON_FIELD_SUBMIT_FAILED),
    Ft = $e(e.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_SUCCESS),
    bt = $e(e.LifeCycleTypes.ON_FIELD_SUBMIT_VALIDATE_FAILED),
    St = $e(e.LifeCycleTypes.ON_FIELD_RESET),
    _t = $e(e.LifeCycleTypes.ON_FIELD_LOADING)
  function gt(e, t) {
    var i = me()
    0 ===
      i.query(e).reduce(function (e, r) {
        return t(r, i), e + 1
      }, 0) && et(e, t)
  }
  ;(e.FormPath = Ie),
    (e.createEffectContext = pe),
    (e.createEffectHook = ye),
    (e.createForm = function (e) {
      return new ge(e)
    }),
    (e.getValidateLocaleIOSCode = Oe),
    (e.isArrayField = p),
    (e.isArrayFieldState = b),
    (e.isDataField = S),
    (e.isDataFieldState = function (e) {
      return F(e) || _(e) || b(e)
    }),
    (e.isField = f),
    (e.isFieldState = F),
    (e.isForm = d),
    (e.isFormState = v),
    (e.isGeneralField = y),
    (e.isGeneralFieldState = function (e) {
      var t
      return (
        !Formily.Shared.isFn(null == e ? void 0 : e.initialize) &&
        (null === (t = null == e ? void 0 : e.displayName) || void 0 === t
          ? void 0
          : t.indexOf('Field')) > -1
      )
    }),
    (e.isObjectField = h),
    (e.isObjectFieldState = _),
    (e.isQuery = g),
    (e.isVoidField = m),
    (e.isVoidFieldState = function (e) {
      return (
        !Formily.Shared.isFn(null == e ? void 0 : e.initialize) &&
        'VoidField' === (null == e ? void 0 : e.displayName)
      )
    }),
    (e.onFieldChange = function (e, t, i) {
      Formily.Shared.isFn(t) ? ((i = t), (t = ['value'])) : (t = t || ['value'])
      var r = []
      gt(e, function (e, n) {
        Formily.Shared.isFn(i) && i(e, n),
          r.push(
            Formily.Reactive.reaction(
              function () {
                return Formily.Shared.toArr(t).map(function (t) {
                  return e[t]
                })
              },
              function () {
                Formily.Shared.isFn(i) && i(e, n)
              }
            )
          )
      }),
        De(function () {
          r.forEach(function (e) {
            e()
          })
        })
    }),
    (e.onFieldInit = gt),
    (e.onFieldInitialValueChange = nt),
    (e.onFieldInputValueChange = ot),
    (e.onFieldLoading = _t),
    (e.onFieldMount = tt),
    (e.onFieldReact = function (e, t) {
      var i = []
      gt(e, function (e, r) {
        i.push(
          Formily.Reactive.autorun(function () {
            Formily.Shared.isFn(t) && t(e, r)
          })
        )
      }),
        De(function () {
          i.forEach(function (e) {
            e()
          })
        })
    }),
    (e.onFieldReset = St),
    (e.onFieldSubmit = dt),
    (e.onFieldSubmitEnd = yt),
    (e.onFieldSubmitFailed = vt),
    (e.onFieldSubmitStart = ft),
    (e.onFieldSubmitSuccess = mt),
    (e.onFieldSubmitValidateEnd = ht),
    (e.onFieldSubmitValidateFailed = bt),
    (e.onFieldSubmitValidateStart = pt),
    (e.onFieldSubmitValidateSuccess = Ft),
    (e.onFieldUnmount = it),
    (e.onFieldValidateEnd = st),
    (e.onFieldValidateFailed = ct),
    (e.onFieldValidateStart = at),
    (e.onFieldValidateSuccess = ut),
    (e.onFieldValidating = lt),
    (e.onFieldValueChange = rt),
    (e.onFormGraphChange = Ye),
    (e.onFormInit = Ae),
    (e.onFormInitialValuesChange = Pe),
    (e.onFormInputChange = Ue),
    (e.onFormLoading = Ze),
    (e.onFormMount = Ce),
    (e.onFormReact = function (e) {
      var t = null
      Ae(function (i) {
        t = Formily.Reactive.autorun(function () {
          e(i)
        })
      }),
        De(function () {
          t()
        })
    }),
    (e.onFormReset = ke),
    (e.onFormSubmit = je),
    (e.onFormSubmitEnd = Ge),
    (e.onFormSubmitFailed = xe),
    (e.onFormSubmitStart = we),
    (e.onFormSubmitSuccess = Be),
    (e.onFormSubmitValidateEnd = We),
    (e.onFormSubmitValidateFailed = ze),
    (e.onFormSubmitValidateStart = qe),
    (e.onFormSubmitValidateSuccess = He),
    (e.onFormUnmount = De),
    (e.onFormValidateEnd = Xe),
    (e.onFormValidateFailed = Qe),
    (e.onFormValidateStart = Je),
    (e.onFormValidateSuccess = Ke),
    (e.onFormValuesChange = Me),
    (e.registerValidateFormats = Te),
    (e.registerValidateLocale = Le),
    (e.registerValidateMessageTemplateEngine = Ee),
    (e.registerValidateRules = Ne),
    (e.setValidateLanguage = Re),
    (e.useEffectForm = me),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
//# sourceMappingURL=formily.core.umd.production.js.map
