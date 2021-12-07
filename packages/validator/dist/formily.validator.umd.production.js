!(function (e, i) {
  'object' == typeof exports && 'undefined' != typeof module
    ? i(exports)
    : 'function' == typeof define && define.amd
    ? define('formily.validator', ['exports'], i)
    : i(
        (((e =
          'undefined' != typeof globalThis ? globalThis : e || self).Formily =
          e.Formily || {}),
        (e.Formily.Validator = {}))
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
  var i = function () {
    return (
      (i =
        Object.assign ||
        function (e) {
          for (var i, n = 1, t = arguments.length; n < t; n++)
            for (var r in (i = arguments[n]))
              Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
          return e
        }),
      i.apply(this, arguments)
    )
  }
  function n(e, i, n, t) {
    return new (n || (n = Promise))(function (r, a) {
      function m(e) {
        try {
          s(t.next(e))
        } catch (e) {
          a(e)
        }
      }
      function u(e) {
        try {
          s(t.throw(e))
        } catch (e) {
          a(e)
        }
      }
      function s(e) {
        var i
        e.done
          ? r(e.value)
          : ((i = e.value),
            i instanceof n
              ? i
              : new n(function (e) {
                  e(i)
                })).then(m, u)
      }
      s((t = t.apply(e, i || [])).next())
    })
  }
  function t(e, i) {
    var n,
      t,
      r,
      a,
      m = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1]
          return r[1]
        },
        trys: [],
        ops: [],
      }
    return (
      (a = { next: u(0), throw: u(1), return: u(2) }),
      'function' == typeof Symbol &&
        (a[Symbol.iterator] = function () {
          return this
        }),
      a
    )
    function u(a) {
      return function (u) {
        return (function (a) {
          if (n) throw new TypeError('Generator is already executing.')
          for (; m; )
            try {
              if (
                ((n = 1),
                t &&
                  (r =
                    2 & a[0]
                      ? t.return
                      : a[0]
                      ? t.throw || ((r = t.return) && r.call(t), 0)
                      : t.next) &&
                  !(r = r.call(t, a[1])).done)
              )
                return r
              switch (((t = 0), r && (a = [2 & a[0], r.value]), a[0])) {
                case 0:
                case 1:
                  r = a
                  break
                case 4:
                  return m.label++, { value: a[1], done: !1 }
                case 5:
                  m.label++, (t = a[1]), (a = [0])
                  continue
                case 7:
                  ;(a = m.ops.pop()), m.trys.pop()
                  continue
                default:
                  if (
                    !((r = m.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== a[0] && 2 !== a[0]))
                  ) {
                    m = 0
                    continue
                  }
                  if (3 === a[0] && (!r || (a[1] > r[0] && a[1] < r[3]))) {
                    m.label = a[1]
                    break
                  }
                  if (6 === a[0] && m.label < r[1]) {
                    ;(m.label = r[1]), (r = a)
                    break
                  }
                  if (r && m.label < r[2]) {
                    ;(m.label = r[2]), m.ops.push(a)
                    break
                  }
                  r[2] && m.ops.pop(), m.trys.pop()
                  continue
              }
              a = i.call(e, m)
            } catch (e) {
              ;(a = [6, e]), (t = 0)
            } finally {
              n = r = 0
            }
          if (5 & a[0]) throw a[1]
          return { value: a[0] ? a[1] : void 0, done: !0 }
        })([a, u])
      }
    }
  }
  function r(e, i) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!n) return e
    var t,
      r,
      a = n.call(e),
      m = []
    try {
      for (; (void 0 === i || i-- > 0) && !(t = a.next()).done; )
        m.push(t.value)
    } catch (e) {
      r = { error: e }
    } finally {
      try {
        t && !t.done && (n = a.return) && n.call(a)
      } finally {
        if (r) throw r.error
      }
    }
    return m
  }
  function a(e, i) {
    for (var n = 0, t = i.length, r = e.length; n < t; n++, r++) e[r] = i[n]
    return e
  }
  var m,
    u,
    s = function (e) {
      return !!e.type && !!e.message
    },
    l = Formily.Shared.FormPath.getIn,
    o = Formily.Shared.globalThisPolyfill,
    d = 'en',
    f = {
      locales: {
        messages: {},
        language:
          (o.navigator &&
            (o.navigator.browserlanguage || o.navigator.language)) ||
          d,
      },
      formats: {},
      rules: {},
      template: null,
    },
    c = function (e) {
      var i = f.locales.language,
        n = Formily.Shared.lowerCase(e)
      return f.locales.messages[e]
        ? e
        : (Formily.Shared.each(f.locales.messages, function (e, t) {
            var r = Formily.Shared.lowerCase(t)
            if (r.indexOf(n) > -1 || n.indexOf(r) > -1) return (i = t), !1
          }),
          i)
    },
    h = c,
    v = function (e, i) {
      return (
        void 0 === i && (i = f.locales.language),
        l(f.locales.messages, ''.concat(c(i), '.').concat(e))
      )
    },
    p = function (e) {
      return v(e) || v('pattern') || v('pattern', d)
    },
    g = function () {
      return f.template
    },
    x = function (e) {
      return e ? f.formats[e] : f.formats
    },
    b = function (e) {
      return e ? f.rules[e] : f.rules
    },
    y = function (e) {
      f.locales.messages = Formily.Shared.merge(f.locales.messages, e)
    },
    T = function (e) {
      Formily.Shared.each(e, function (e, i) {
        Formily.Shared.isFn(e) && (f.rules[i] = e)
      })
    },
    F = function (e) {
      Formily.Shared.each(e, function (e, i) {
        ;(Formily.Shared.isStr(e) || e instanceof RegExp) &&
          (f.formats[i] = new RegExp(e))
      })
    },
    S = function (e, i) {
      var n = e.message
      if (Formily.Shared.isStr(e.message)) {
        var t = g()
        Formily.Shared.isFn(t) && (e.message = t(n, i)),
          (e.message = e.message.replace(
            /\{\{\s*([\w.]+)\s*\}\}/g,
            function (e, n) {
              return Formily.Shared.FormPath.getIn(i, n)
            }
          ))
      }
      return e
    },
    q = function (e) {
      var i = {}
      return (
        Formily.Shared.isStr(e)
          ? (i.format = e)
          : Formily.Shared.isFn(e)
          ? (i.validator = e)
          : (i = Object.assign(i, e)),
        (i.triggerType = i.triggerType || 'onInput'),
        i
      )
    },
    w = function (e) {
      void 0 === e && (e = {})
      var r = function (r, a) {
        return function (m, u) {
          return n(void 0, void 0, void 0, function () {
            var n, l, o
            return t(this, function (t) {
              switch (t.label) {
                case 0:
                  ;(n = (function (n, t) {
                    return i(i(i({}, e), n), { value: t })
                  })(u, m)),
                    (t.label = 1)
                case 1:
                  return (
                    t.trys.push([1, 3, , 4]),
                    [
                      4,
                      r(m, i(i({}, e), { message: a }), n, function (e, i) {
                        var t
                        return null ===
                          (t = S(
                            { type: 'error', message: e },
                            Object.assign(n, i)
                          )) || void 0 === t
                          ? void 0
                          : t.message
                      }),
                    ]
                  )
                case 2:
                  return (
                    (l = t.sent()),
                    Formily.Shared.isBool(l)
                      ? l
                        ? [2, { type: 'error', message: void 0 }]
                        : [2, S({ type: 'error', message: a }, n)]
                      : l
                      ? s(l)
                        ? [2, S(l, n)]
                        : [2, S({ type: 'error', message: l }, n)]
                      : [2, { type: 'error', message: void 0 }]
                  )
                case 3:
                  return [
                    2,
                    {
                      type: 'error',
                      message:
                        (null == (o = t.sent()) ? void 0 : o.message) || o,
                    },
                  ]
                case 4:
                  return [2]
              }
            })
          })
        }
      }
      return (function () {
        var i = []
        for (var n in ('required' in e && i.push('required'), e))
          'required' !== n && 'validator' !== n && i.push(n)
        return 'validator' in e && i.push('validator'), i
      })().reduce(function (i, n) {
        var t,
          a,
          m = b(n)
        if (m) {
          var u = r(
            m,
            ((a = n),
            (t = e).format ? t.message || p(t.format) : t.message || p(a))
          )
          return i.concat(u)
        }
        return i
      }, [])
    },
    I = function (e, i) {
      return (
        void 0 === i && (i = {}),
        (Formily.Shared.isArr(e) ? e : [e]).reduce(function (e, n) {
          var t = q(n)
          return (null == i ? void 0 : i.triggerType) &&
            i.triggerType !== t.triggerType
            ? e
            : t
            ? e.concat(w(t))
            : e
        }, [])
      )
    },
    P = {
      url: new RegExp(
        '^(?:(?:(?:https?|ftp|rtmp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:22[0-3]|2[01]\\d|[1-9]\\d?|1\\d\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1?\\d{1,2})){2}(?:\\.(?:25[0-4]|2[0-4]\\d|1\\d\\d|[1-9]\\d?))|(?:(?:[a-z\\u00a1-\\uffff0-9_]-*)*[a-z\\u00a1-\\uffff0-9_]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9_]-*)*[a-z\\u00a1-\\uffff0-9_]+)*(?:\\.(?:[a-z\\u00a1-\\uffff_]{2,})))(?::\\d{2,5})?(?:/?\\S*)?$'
      ),
      email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
      ipv4: /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/,
      number: /^[+-]?\d+(\.\d+)?$/,
      integer: /^[+-]?\d+$/,
      qq: /^(\+?[1-9]\d*|0)$/,
      phone: /^\d{3}-\d{8}$|^\d{4}-\d{7}$|^\d{11}$/,
      idcard: /^\d{15}$|^\d{17}(\d|x|X)$/,
      money:
        /^([\u0024\u00A2\u00A3\u00A4\u20AC\u00A5\u20B1\20B9\uFFE5]\s*)(\d+,?)+\.?\d*\s*$/,
      zh: /^[\u4e00-\u9fa5]+$/,
      date: /^[0-9]+[./-][0-9]+[./-][0-9]+\s*(?:[0-9]+\s*:\s*[0-9]+\s*:\s*[0-9]+)?$/,
      zip: /^[0-9]{6}$/,
    },
    L = function (e) {
      var i
      if (Formily.Shared.isArr(e)) {
        for (var n = 0; n < e.length; n++)
          if (Formily.Shared.isValid(e[n])) return !1
        return !0
      }
      return (null == e ? void 0 : e.getCurrentContent)
        ? !(null === (i = e.getCurrentContent()) || void 0 === i
            ? void 0
            : i.hasText())
        : Formily.Shared.isEmpty(e)
    },
    A = function (e) {
      return Formily.Shared.isStr(e)
        ? Formily.Shared.stringLength(e)
        : e
        ? e.length
        : 0
    },
    M = {
      format: function (e, i) {
        return L(e) || new RegExp(x(i.format) || '').test(e) ? '' : i.message
      },
      required: function (e, i) {
        return !1 === i.required ? '' : L(e) ? i.message : ''
      },
      max: function (e, i) {
        return L(e)
          ? ''
          : (Formily.Shared.isNum(e) ? e : A(e)) > Number(i.max)
          ? i.message
          : ''
      },
      min: function (e, i) {
        return L(e)
          ? ''
          : (Formily.Shared.isNum(e) ? e : A(e)) < Number(i.min)
          ? i.message
          : ''
      },
      exclusiveMaximum: function (e, i) {
        return L(e)
          ? ''
          : (Formily.Shared.isNum(e) ? e : A(e)) >= Number(i.exclusiveMaximum)
          ? i.message
          : ''
      },
      exclusiveMinimum: function (e, i) {
        return L(e)
          ? ''
          : (Formily.Shared.isNum(e) ? e : A(e)) <= Number(i.exclusiveMinimum)
          ? i.message
          : ''
      },
      len: function (e, i) {
        return L(e) ? '' : A(e) !== Number(i.len) ? i.message : ''
      },
      pattern: function (e, i) {
        return L(e) || new RegExp(i.pattern).test(e) ? '' : i.message
      },
      validator: function (e, i, r, a) {
        return n(this, void 0, void 0, function () {
          var n
          return t(this, function (t) {
            switch (t.label) {
              case 0:
                return Formily.Shared.isFn(i.validator)
                  ? [4, Promise.resolve(i.validator(e, i, r, a))]
                  : [3, 2]
              case 1:
                return (
                  (n = t.sent()),
                  Formily.Shared.isBool(n) ? [2, n ? '' : i.message] : [2, n]
                )
              case 2:
                throw new Error(
                  "The rule's validator property must be a function."
                )
            }
          })
        })
      },
      whitespace: function (e, i) {
        return L(e)
          ? ''
          : i.whitespace
          ? /^\s+$/.test(e)
            ? i.message
            : ''
          : void 0
      },
      enum: function (e, i) {
        return L(e)
          ? ''
          : -1 === Formily.Shared.toArr(i.enum).indexOf(e)
          ? i.message
          : ''
      },
      const: function (e, i) {
        return L(e) ? '' : i.const !== e ? i.message : ''
      },
      multipleOf: function (e, i) {
        return L(e)
          ? ''
          : Number(e) % Number(i.multipleOf) != 0
          ? i.message
          : ''
      },
      uniqueItems: function (e, i) {
        return L(e) ||
          (e = Formily.Shared.toArr(e)).some(function (i, n) {
            for (var t = 0; t < e.length; t++)
              if (t !== n && !Formily.Shared.isEqual(e[t], i)) return !1
            return !0
          })
          ? ''
          : i.message
      },
      maxProperties: function (e, i) {
        return L(e) || Object.keys(e || {}).length <= Number(i.maxProperties)
          ? ''
          : i.message
      },
      minProperties: function (e, i) {
        return L(e) || Object.keys(e || {}).length >= Number(i.minProperties)
          ? ''
          : i.message
      },
    }
  ;(m = M),
    (u = {
      maximum: 'max',
      minimum: 'min',
      maxItems: 'max',
      minItems: 'min',
      maxLength: 'max',
      minLength: 'min',
    }),
    Formily.Shared.each(u, function (e, n) {
      m[n] = function (t, u) {
        for (var s, l = [], o = 2; o < arguments.length; o++)
          l[o - 2] = arguments[o]
        return m[e].apply(
          m,
          a([t, i(i({}, u), ((s = {}), (s[e] = u[n]), s))], r(l))
        )
      }
    }),
    T(M),
    y({
      en: {
        pattern: 'This field is invalid',
        invalid: 'This field is invalid',
        required: 'The field value is required',
        number: 'The field value is not a number',
        integer: 'The field value is not an integer number',
        url: 'The field value is a invalid url',
        email: 'The field value is not a email format',
        ipv6: 'The field value is not a ipv6 format',
        ipv4: 'The field value is not a ipv4 format',
        idcard: 'The field value is not an idcard format',
        qq: 'The field value is not a qq number format',
        phone: 'The field value is not a phone number format',
        money: 'The field value is not a currency format',
        zh: 'The field value is not a chinese string',
        date: 'The field value is not a valid date format',
        zip: 'The field value is not a zip format',
        len: 'The length or number of entries must be {{len}}',
        min: 'The length or number of entries must be at least {{min}}',
        minLength:
          'The length or number of entries must be at least {{minLength}}',
        minItems:
          'The length or number of entries must be at least {{minItems}}',
        maximum: 'The field value cannot be greater than {{maximum}}',
        exclusiveMaximum:
          'The field value must be less than {{exclusiveMaximum}}',
        minimum: 'The field value cannot be less than {{minimum}}',
        exclusiveMinimum:
          'The field value must be greater than {{exclusiveMinimum}}',
        max: 'The field length or number of entries must be at most {{max}}',
        maxLength:
          'The field length or number of entries must be at most {{maxLength}}',
        maxItems:
          'The field length or number of entries must be at most {{maxItems}}',
        whitespace: 'This field value cannot be blank string.',
        enum: 'The field value must be one of {{enum}}',
        const: 'The field value must be equal to {{const}}',
        multipleOf: 'The field value must be divisible by {{multipleOf}}',
        maxProperties:
          'The number of field properties cannot be greater than {{maxProperties}}',
        minProperties:
          'The number of field properties cannot be less than {{maxProperties}}',
        uniqueItems: 'Array elements are not unique',
      },
      zh: {
        pattern: '该字段不是一个合法的字段',
        invalid: '该字段不是一个合法的字段',
        required: '该字段是必填字段',
        number: '该字段不是合法的数字',
        integer: '该字段不是合法的整型数字',
        url: '该字段不是合法的url',
        email: '该字段不是合法的邮箱格式',
        ipv6: '该字段不是合法的ipv6格式',
        ipv4: '该字段不是合法的ipv4格式',
        idcard: '该字段不是合法的身份证格式',
        qq: '该字段不符合QQ号格式',
        phone: '该字段不是有效的手机号',
        money: '该字段不是有效货币格式',
        zh: '该字段不是合法的中文字符串',
        date: '该字段不是合法的日期格式',
        zip: '该字段不是合法的邮编格式',
        len: '长度或条目数必须为{{len}}',
        min: '长度或条目数不能小于{{min}}',
        minLength: '长度或条目数不能小于{{minLength}}',
        minItems: '长度或条目数不能小于{{minItems}}',
        max: '长度或条目数不能大于{{max}}',
        maxLength: '长度或条目数不能大于{{maxLength}}',
        maxItems: '长度或条目数不能大于{{maxItems}}',
        maximum: '数值不能大于{{maximum}}',
        exclusiveMaximum: '数值必须小于{{exclusiveMaximum}}',
        minimum: '数值不能小于{{minimum}}',
        exclusiveMinimum: '数值必须大于{{exclusiveMinimum}}',
        whitespace: '不能为纯空白字符串',
        enum: '字段值必须为{{enum}}其中一个',
        const: '字段值必须等于{{const}}',
        multipleOf: '字段值不能被{{multipleOf}}整除',
        maxProperties: '字段属性数量不能大于{{maxProperties}}',
        minProperties: '字段属性数量不能小于{{minProperties}}',
        uniqueItems: '数组元素不唯一',
      },
      'en-US': {
        pattern: 'This field is invalid',
        invalid: 'This field is invalid',
        required: 'The field value is required',
        number: 'The field value is not a number',
        integer: 'The field value is not an integer number',
        url: 'The field value is a invalid url',
        email: 'The field value is not a email format',
        ipv6: 'The field value is not a ipv6 format',
        ipv4: 'The field value is not a ipv4 format',
        idcard: 'The field value is not an idcard format',
        qq: 'The field value is not a qq number format',
        phone: 'The field value is not a phone number format',
        money: 'The field value is not a currency format',
        zh: 'The field value is not a chinese string',
        date: 'The field value is not a valid date format',
        zip: 'The field value is not a zip format',
        len: 'The length or number of entries must be {{len}}',
        min: 'The length or number of entries must be at least {{min}}',
        minLength:
          'The length or number of entries must be at least {{minLength}}',
        minItems:
          'The length or number of entries must be at least {{minItems}}',
        maximum: 'The field value cannot be greater than {{maximum}}',
        exclusiveMaximum:
          'The field value must be less than {{exclusiveMaximum}}',
        minimum: 'The field value cannot be less than {{minimum}}',
        exclusiveMinimum:
          'The field value must be greater than {{exclusiveMinimum}}',
        max: 'The field length or number of entries must be at most {{max}}',
        maxLength:
          'The field length or number of entries must be at most {{maxLength}}',
        maxItems:
          'The field length or number of entries must be at most {{maxItems}}',
        whitespace: 'This field value cannot be blank string.',
        enum: 'The field value must be one of {{enum}}',
        const: 'The field value must be equal to {{const}}',
        multipleOf: 'The field value must be divisible by {{multipleOf}}',
        maxProperties:
          'The number of field properties cannot be greater than {{maxProperties}}',
        minProperties:
          'The number of field properties cannot be less than {{maxProperties}}',
        uniqueItems: 'Array elements are not unique',
      },
      'zh-CN': {
        pattern: '该字段不是一个合法的字段',
        invalid: '该字段不是一个合法的字段',
        required: '该字段是必填字段',
        number: '该字段不是合法的数字',
        integer: '该字段不是合法的整型数字',
        url: '该字段不是合法的url',
        email: '该字段不是合法的邮箱格式',
        ipv6: '该字段不是合法的ipv6格式',
        ipv4: '该字段不是合法的ipv4格式',
        idcard: '该字段不是合法的身份证格式',
        qq: '该字段不符合QQ号格式',
        phone: '该字段不是有效的手机号',
        money: '该字段不是有效货币格式',
        zh: '该字段不是合法的中文字符串',
        date: '该字段不是合法的日期格式',
        zip: '该字段不是合法的邮编格式',
        len: '长度或条目数必须为{{len}}',
        min: '长度或条目数不能小于{{min}}',
        minLength: '长度或条目数不能小于{{minLength}}',
        minItems: '长度或条目数不能小于{{minItems}}',
        maxLength: '长度或条目数不能大于{{maxLength}}',
        maxItems: '长度或条目数不能大于{{maxItems}}',
        max: '长度或条目数不能大于{{max}}',
        maximum: '数值不能大于{{maximum}}',
        exclusiveMaximum: '数值必须小于{{exclusiveMaximum}}',
        minimum: '数值不能小于{{minimum}}',
        exclusiveMinimum: '数值必须大于{{exclusiveMinimum}}',
        whitespace: '不能为纯空白字符串',
        enum: '字段值必须为{{enum}}其中一个',
        const: '字段值必须等于{{const}}',
        multipleOf: '字段值不能被{{multipleOf}}整除',
        maxProperties: '字段属性数量不能大于{{maxProperties}}',
        minProperties: '字段属性数量不能小于{{minProperties}}',
        uniqueItems: '数组元素不唯一',
      },
      'zh-TW': {
        pattern: '該字段不是一個合法的字段',
        invalid: '該字段不是一個合法的字段',
        required: '該字段是必填字段',
        number: '該字段不是合法的數字',
        integer: '該字段不是合法的整型數字',
        url: '該字段不是合法的url',
        email: '該字段不是合法的郵箱格式',
        ipv6: '該字段不是合法的ipv6格式',
        ipv4: '該字段不是合法的ipv4格式',
        idcard: '該字段不是合法的身份證格式',
        qq: '該字段不符合QQ號格式',
        phone: '該字段不是有效的手機號',
        money: '該字段不是有效貨幣格式',
        zh: '該字段不是合法的中文字符串',
        date: '該字段不是合法的日期格式',
        zip: '該字段不是合法的郵編格式',
        len: '長度或條目數必須為{{len}}',
        min: '長度或條目數不能小於{{min}}',
        minItems: '長度或條目數不能小於{{minItems}}',
        minLength: '長度或條目數不能小於{{minLength}}',
        max: '長度或條目數不能大於{{max}}',
        maxItems: '長度或條目數不能大於{{maxItems}}',
        maxLength: '長度或條目數不能大於{{maxLength}}',
        maximum: '數值不能大於{{maximum}}',
        exclusiveMaximum: '數值必須小於{{exclusiveMaximum}}',
        minimum: '數值不能小於{{minimum}}',
        exclusiveMinimum: '數值必須大於{{exclusiveMinimum}}',
        whitespace: '不能為純空白字符串',
        enum: '字段值必須為{{enum}}其中一個',
        const: '字段值必須等於{{const}}',
        multipleOf: '字段值不能被{{multipleOf}}整除',
        maxProperties: '字段屬性數量不能大於{{maxProperties}}',
        minProperties: '字段屬性數量不能小於{{minProperties}}',
        uniqueItems: '數組元素不唯一',
      },
      ja: {
        url: 'このフィールドは無効なURLです',
        whitespace: 'このフィールドを空の文字列にすることはできません。',
        zh: 'このフィールドは中国語の文字列ではありません',
        zip: 'このフィールドはzip形式ではありません',
        date: 'このフィールドは有効な日付形式ではありません',
        email: 'このフィールドはメール形式ではありません',
        exclusiveMaximum: '値は{{exclusiveMaximum}}未満である必要があります',
        exclusiveMinimum: '値は{{exclusiveMinimum}}より大きい必要があります',
        idcard: 'このフィールドはIDカード形式ではありません',
        integer: 'このフィールドは整数ではありません',
        ipv4: 'このフィールドはIPv4形式ではありません',
        ipv6: 'このフィールドはIPv6形式ではありません',
        len: 'エントリの長さまたは数は{{len}}でなければなりません',
        max: 'エントリの長さまたは数は最大{{max}}でなければなりません',
        maxItems:
          'エントリの長さまたは数は最大{{maxItems}}でなければなりません',
        maxLength:
          'エントリの長さまたは数は最大{{maxLength}}でなければなりません',
        maximum: '値は{{最大}}を超えることはできません',
        min: 'エントリの長さまたは数は、少なくとも{{min}}である必要があります',
        minItems:
          'エントリの長さまたは数は、少なくとも{{minItems}}である必要があります',
        minLength:
          'エントリの長さまたは数は、少なくとも{{minLength}}である必要があります',
        minimum: '値は{{minimum}}以上にする必要があります',
        money: 'このフィールドは通貨形式ではありません',
        number: 'このフィールドは数値ではありません',
        pattern: 'このフィールドはどのパターンとも一致しません',
        invalid: 'このフィールドはどのパターンとも一致しません',
        phone: 'このフィールドは電話番号の形式ではありません',
        qq: 'このフィールドはqq数値形式ではありません',
        required: 'この項目は必須です',
        enum: 'フィールド値は{{enum}}のいずれかである必要があります',
        cons: 'フィールド値は{{const}}と等しくなければなりません',
        multipleOf: 'フィールド値を{{multipleOf}}で割り切れない',
        maxProperties:
          'フィールドプロパティの数は{{maxProperties}}を超えることはできません',
        minProperties:
          'フィールドプロパティの数は{{minProperties}}未満にすることはできません',
        uniqueItems: '配列要素は一意ではありません',
      },
    }),
    F(P)
  ;(e.getLocaleByPath = v),
    (e.getValidateFormats = x),
    (e.getValidateLanguage = function () {
      return f.locales.language
    }),
    (e.getValidateLocale = p),
    (e.getValidateLocaleIOSCode = h),
    (e.getValidateMessageTemplateEngine = g),
    (e.getValidateRules = b),
    (e.isValidateResult = s),
    (e.parseValidator = I),
    (e.parseValidatorDescription = q),
    (e.parseValidatorDescriptions = function (e) {
      return (Formily.Shared.isArr(e) ? e : [e]).map(function (e) {
        return q(e)
      })
    }),
    (e.parseValidatorRules = w),
    (e.registerValidateFormats = F),
    (e.registerValidateLocale = y),
    (e.registerValidateMessageTemplateEngine = function (e) {
      f.template = e
    }),
    (e.registerValidateRules = T),
    (e.setValidateLanguage = function (e) {
      f.locales.language = e || d
    }),
    (e.validate = function (e, i, r) {
      return n(void 0, void 0, void 0, function () {
        var n, a, m, u, s, l
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              ;(n = I(i, r)),
                (a = { error: [], success: [], warning: [] }),
                (m = 0),
                (t.label = 1)
            case 1:
              return m < n.length
                ? [4, n[m](e, null == r ? void 0 : r.context)]
                : [3, 4]
            case 2:
              if (
                ((u = t.sent()),
                (s = u.type),
                (l = u.message),
                (a[s] = a[s] || []),
                l && (a[s].push(l), null == r ? void 0 : r.validateFirst))
              )
                return [3, 4]
              t.label = 3
            case 3:
              return m++, [3, 1]
            case 4:
              return [2, a]
          }
        })
      })
    }),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
//# sourceMappingURL=formily.validator.umd.production.js.map
