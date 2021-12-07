!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define('formily.element', ['exports'], t)
    : t(
        (((e =
          'undefined' != typeof globalThis ? globalThis : e || self).Formily =
          e.Formily || {}),
        (e.Formily.Element = {}))
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
          for (var t, n = 1, o = arguments.length; n < o; n++)
            for (var r in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
          return e
        }),
      t.apply(this, arguments)
    )
  }
  function n(e, t) {
    var n = {}
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o])
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var r = 0
      for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
        t.indexOf(o[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
          (n[o[r]] = e[o[r]])
    }
    return n
  }
  function o(e, t, n, o) {
    return new (n || (n = Promise))(function (r, i) {
      function a(e) {
        try {
          l(o.next(e))
        } catch (e) {
          i(e)
        }
      }
      function u(e) {
        try {
          l(o.throw(e))
        } catch (e) {
          i(e)
        }
      }
      function l(e) {
        var t
        e.done
          ? r(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t)
                })).then(a, u)
      }
      l((o = o.apply(e, t || [])).next())
    })
  }
  function r(e, t) {
    var n,
      o,
      r,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1]
          return r[1]
        },
        trys: [],
        ops: [],
      }
    return (
      (i = { next: u(0), throw: u(1), return: u(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this
        }),
      i
    )
    function u(i) {
      return function (u) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.')
          for (; a; )
            try {
              if (
                ((n = 1),
                o &&
                  (r =
                    2 & i[0]
                      ? o.return
                      : i[0]
                      ? o.throw || ((r = o.return) && r.call(o), 0)
                      : o.next) &&
                  !(r = r.call(o, i[1])).done)
              )
                return r
              switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                case 0:
                case 1:
                  r = i
                  break
                case 4:
                  return a.label++, { value: i[1], done: !1 }
                case 5:
                  a.label++, (o = i[1]), (i = [0])
                  continue
                case 7:
                  ;(i = a.ops.pop()), a.trys.pop()
                  continue
                default:
                  if (
                    !((r = a.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    a = 0
                    continue
                  }
                  if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                    a.label = i[1]
                    break
                  }
                  if (6 === i[0] && a.label < r[1]) {
                    ;(a.label = r[1]), (r = i)
                    break
                  }
                  if (r && a.label < r[2]) {
                    ;(a.label = r[2]), a.ops.push(i)
                    break
                  }
                  r[2] && a.ops.pop(), a.trys.pop()
                  continue
              }
              i = t.call(e, a)
            } catch (e) {
              ;(i = [6, e]), (o = 0)
            } finally {
              n = r = 0
            }
          if (5 & i[0]) throw i[1]
          return { value: i[0] ? i[1] : void 0, done: !0 }
        })([i, u])
      }
    }
  }
  var i = 'formily-element',
    a = {
      inject: ['manager'],
      props: {
        index: { type: Number, required: !0 },
        collection: { type: [String, Number], default: 'default' },
        disabled: { type: Boolean, default: !1 },
      },
      mounted: function () {
        var e = this.$props,
          t = e.collection,
          n = e.disabled,
          o = e.index
        n || this.setDraggable(t, o)
      },
      watch: {
        index: function (e) {
          this.$el && this.$el.sortableInfo && (this.$el.sortableInfo.index = e)
        },
        disabled: function (e) {
          e
            ? this.removeDraggable(this.collection)
            : this.setDraggable(this.collection, this.index)
        },
        collection: function (e, t) {
          this.removeDraggable(t), this.setDraggable(e, this.index)
        },
      },
      beforeDestroy: function () {
        var e = this.collection
        this.disabled || this.removeDraggable(e)
      },
      methods: {
        setDraggable: function (e, t) {
          var n = this.$el
          ;(n.sortableInfo = {
            index: t,
            collection: e,
            manager: this.manager,
          }),
            (this.ref = { node: n }),
            this.manager.add(e, this.ref)
        },
        removeDraggable: function (e) {
          this.manager.remove(e, this.ref)
        },
      },
    },
    u = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    })(),
    l = function (e, t) {
      if (Array.isArray(e)) return e
      if (Symbol.iterator in Object(e))
        return (function (e, t) {
          var n = [],
            o = !0,
            r = !1,
            i = void 0
          try {
            for (
              var a, u = e[Symbol.iterator]();
              !(o = (a = u.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              o = !0
            );
          } catch (e) {
            ;(r = !0), (i = e)
          } finally {
            try {
              !o && u.return && u.return()
            } finally {
              if (r) throw i
            }
          }
          return n
        })(e, t)
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance'
      )
    },
    s = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
        return n
      }
      return Array.from(e)
    },
    c = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.refs = {})
      }
      return (
        u(e, [
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
              return this.refs[e].sort(function (e, t) {
                return e.node.sortableInfo.index - t.node.sortableInfo.index
              })
            },
          },
        ]),
        e
      )
    })()
  var d = {
      start: ['touchstart', 'mousedown'],
      move: ['touchmove', 'mousemove'],
      end: ['touchend', 'touchcancel', 'mouseup'],
    },
    f = (function () {
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
  function p(e, t) {
    for (; e; ) {
      if (t(e)) return e
      e = e.parentNode
    }
  }
  function m(e, t, n) {
    return n < e ? e : n > t ? t : n
  }
  function h(e) {
    return 'px' === e.substr(-2) ? parseFloat(e) : 0
  }
  var v = {
    data: function () {
      return {
        sorting: !1,
        sortingIndex: null,
        manager: new c(),
        events: {
          start: this.handleStart,
          move: this.handleMove,
          end: this.handleEnd,
        },
      }
    },
    props: {
      value: { type: Array, required: !0 },
      axis: { type: String, default: 'y' },
      distance: { type: Number, default: 0 },
      pressDelay: { type: Number, default: 0 },
      pressThreshold: { type: Number, default: 5 },
      useDragHandle: { type: Boolean, default: !1 },
      useWindowAsScrollContainer: { type: Boolean, default: !1 },
      hideSortableGhost: { type: Boolean, default: !0 },
      lockToContainerEdges: { type: Boolean, default: !1 },
      lockOffset: { type: [String, Number, Array], default: '50%' },
      transitionDuration: { type: Number, default: 300 },
      appendTo: { type: String, default: 'body' },
      draggedSettlingDuration: { type: Number, default: null },
      lockAxis: String,
      helperClass: String,
      contentWindow: Object,
      shouldCancelStart: {
        type: Function,
        default: function (e) {
          return (
            -1 !==
            ['input', 'textarea', 'select', 'option', 'button'].indexOf(
              e.target.tagName.toLowerCase()
            )
          )
        },
      },
      getHelperDimensions: {
        type: Function,
        default: function (e) {
          var t = e.node
          return { width: t.offsetWidth, height: t.offsetHeight }
        },
      },
    },
    provide: function () {
      return { manager: this.manager }
    },
    mounted: function () {
      var e = this
      ;(this.container = this.$el),
        (this.document = this.container.ownerDocument || document),
        (this._window = this.contentWindow || window),
        (this.scrollContainer = this.useWindowAsScrollContainer
          ? this.document.body
          : this.container)
      var t = function (t) {
        e.events.hasOwnProperty(t) &&
          d[t].forEach(function (n) {
            return e.container.addEventListener(n, e.events[t], { passive: !0 })
          })
      }
      for (var n in this.events) t(n)
    },
    beforeDestroy: function () {
      var e = this,
        t = function (t) {
          e.events.hasOwnProperty(t) &&
            d[t].forEach(function (n) {
              return e.container.removeEventListener(n, e.events[t])
            })
        }
      for (var n in this.events) t(n)
    },
    methods: {
      handleStart: function (e) {
        var t = this,
          n = this.$props,
          o = n.distance,
          r = n.shouldCancelStart
        if (2 === e.button || r(e)) return !1
        ;(this._touched = !0), (this._pos = this.getOffset(e))
        var i = p(e.target, function (e) {
          return null != e.sortableInfo
        })
        if (i && i.sortableInfo && this.nodeIsChild(i) && !this.sorting) {
          var a = this.$props.useDragHandle,
            u = i.sortableInfo,
            l = u.index,
            s = u.collection
          if (
            a &&
            !p(e.target, function (e) {
              return null != e.sortableHandle
            })
          )
            return
          ;(this.manager.active = { index: l, collection: s }),
            'a' === e.target.tagName.toLowerCase() && e.preventDefault(),
            o ||
              (0 === this.$props.pressDelay
                ? this.handlePress(e)
                : (this.pressTimer = setTimeout(function () {
                    return t.handlePress(e)
                  }, this.$props.pressDelay)))
        }
      },
      nodeIsChild: function (e) {
        return e.sortableInfo.manager === this.manager
      },
      handleMove: function (e) {
        var t = this.$props,
          n = t.distance,
          o = t.pressThreshold
        if (!this.sorting && this._touched) {
          var r = this.getOffset(e)
          this._delta = { x: this._pos.x - r.x, y: this._pos.y - r.y }
          var i = Math.abs(this._delta.x) + Math.abs(this._delta.y)
          n || (o && !(o && i >= o))
            ? n && i >= n && this.manager.isActive() && this.handlePress(e)
            : (clearTimeout(this.cancelTimer),
              (this.cancelTimer = setTimeout(this.cancel, 0)))
        }
      },
      handleEnd: function () {
        var e = this.$props.distance
        ;(this._touched = !1), e || this.cancel()
      },
      cancel: function () {
        this.sorting ||
          (clearTimeout(this.pressTimer), (this.manager.active = null))
      },
      handlePress: function (e) {
        var t = this
        e.stopPropagation()
        var n,
          o,
          r = this.manager.getActive()
        if (r) {
          var i = this.$props,
            a = i.axis,
            u = i.getHelperDimensions,
            l = i.helperClass,
            c = i.hideSortableGhost,
            f = i.useWindowAsScrollContainer,
            p = i.appendTo,
            m = r.node,
            v = r.collection,
            y = m.sortableInfo.index,
            g =
              ((n = m),
              {
                top: h((o = window.getComputedStyle(n)).marginTop),
                right: h(o.marginRight),
                bottom: h(o.marginBottom),
                left: h(o.marginLeft),
              }),
            b = this.container.getBoundingClientRect(),
            F = u({ index: y, node: m, collection: v })
          ;(this.node = m),
            (this.margin = g),
            (this.width = F.width),
            (this.height = F.height),
            (this.marginOffset = {
              x: this.margin.left + this.margin.right,
              y: Math.max(this.margin.top, this.margin.bottom),
            }),
            (this.boundingClientRect = m.getBoundingClientRect()),
            (this.containerBoundingRect = b),
            (this.index = y),
            (this.newIndex = y),
            (this._axis = { x: a.indexOf('x') >= 0, y: a.indexOf('y') >= 0 }),
            (this.offsetEdge = this.getEdgeOffset(m)),
            (this.initialOffset = this.getOffset(e)),
            (this.initialScroll = {
              top: this.scrollContainer.scrollTop,
              left: this.scrollContainer.scrollLeft,
            }),
            (this.initialWindowScroll = {
              top: window.pageYOffset,
              left: window.pageXOffset,
            })
          var V,
            C = m.querySelectorAll('input, textarea, select'),
            w = m.cloneNode(!0)
          if (
            ([]
              .concat(s(w.querySelectorAll('input, textarea, select')))
              .forEach(function (e, t) {
                'file' !== e.type && C[t] && (e.value = C[t].value)
              }),
            (this.helper = this.document.querySelector(p).appendChild(w)),
            (this.helper.style.position = 'fixed'),
            (this.helper.style.top =
              this.boundingClientRect.top - g.top + 'px'),
            (this.helper.style.left =
              this.boundingClientRect.left - g.left + 'px'),
            (this.helper.style.width = this.width + 'px'),
            (this.helper.style.height = this.height + 'px'),
            (this.helper.style.boxSizing = 'border-box'),
            (this.helper.style.pointerEvents = 'none'),
            c &&
              ((this.sortableGhost = m),
              (m.style.visibility = 'hidden'),
              (m.style.opacity = 0)),
            (this.translate = {}),
            (this.minTranslate = {}),
            (this.maxTranslate = {}),
            this._axis.x &&
              ((this.minTranslate.x =
                (f ? 0 : b.left) -
                this.boundingClientRect.left -
                this.width / 2),
              (this.maxTranslate.x =
                (f ? this._window.innerWidth : b.left + b.width) -
                this.boundingClientRect.left -
                this.width / 2)),
            this._axis.y &&
              ((this.minTranslate.y =
                (f ? 0 : b.top) -
                this.boundingClientRect.top -
                this.height / 2),
              (this.maxTranslate.y =
                (f ? this._window.innerHeight : b.top + b.height) -
                this.boundingClientRect.top -
                this.height / 2)),
            l)
          )
            (V = this.helper.classList).add.apply(V, s(l.split(' ')))
          ;(this.listenerNode = e.touches ? m : this._window),
            d.move.forEach(function (e) {
              return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
            }),
            d.end.forEach(function (e) {
              return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
            }),
            (this.sorting = !0),
            (this.sortingIndex = y),
            this.$emit('sort-start', {
              event: e,
              node: m,
              index: y,
              collection: v,
            })
        }
      },
      handleSortMove: function (e) {
        e.preventDefault(),
          this.updatePosition(e),
          this.animateNodes(),
          this.autoscroll(),
          this.$emit('sort-move', { event: e })
      },
      handleSortEnd: function (e) {
        var t = this,
          n = this.manager.active.collection
        this.listenerNode &&
          (d.move.forEach(function (e) {
            return t.listenerNode.removeEventListener(e, t.handleSortMove)
          }),
          d.end.forEach(function (e) {
            return t.listenerNode.removeEventListener(e, t.handleSortEnd)
          }))
        var o = this.manager.refs[n],
          r = function () {
            t.helper.parentNode.removeChild(t.helper),
              t.hideSortableGhost &&
                t.sortableGhost &&
                ((t.sortableGhost.style.visibility = ''),
                (t.sortableGhost.style.opacity = ''))
            for (var r = 0, i = o.length; r < i; r++) {
              var a = o[r],
                u = a.node
              ;(a.edgeOffset = null),
                (u.style[f + 'Transform'] = ''),
                (u.style[f + 'TransitionDuration'] = '')
            }
            clearInterval(t.autoscrollInterval),
              (t.autoscrollInterval = null),
              (t.manager.active = null),
              (t.sorting = !1),
              (t.sortingIndex = null),
              t.$emit('sort-end', {
                event: e,
                oldIndex: t.index,
                newIndex: t.newIndex,
                collection: n,
              }),
              t.$emit(
                'input',
                (function (e, t, n) {
                  var o = e.slice(0)
                  if (n >= o.length)
                    for (var r = n - o.length; 1 + r--; ) o.push(void 0)
                  return o.splice(n, 0, o.splice(t, 1)[0]), o
                })(t.value, t.index, t.newIndex)
              ),
              (t._touched = !1)
          }
        this.$props.transitionDuration || this.$props.draggedSettlingDuration
          ? this.transitionHelperIntoPlace(o).then(function () {
              return r()
            })
          : r()
      },
      transitionHelperIntoPlace: function (e) {
        var t = this
        if (0 === this.$props.draggedSettlingDuration || 0 === e.length)
          return Promise.resolve()
        var n = this.scrollContainer.scrollLeft - this.initialScroll.left,
          o = this.scrollContainer.scrollTop - this.initialScroll.top,
          r = e[this.index].node,
          i = e[this.newIndex].node,
          a = -n
        this.translate && this.translate.x > 0
          ? (a += i.offsetLeft + i.offsetWidth - (r.offsetLeft + r.offsetWidth))
          : (a += i.offsetLeft - r.offsetLeft)
        var u = -o
        this.translate && this.translate.y > 0
          ? (u += i.offsetTop + i.offsetHeight - (r.offsetTop + r.offsetHeight))
          : (u += i.offsetTop - r.offsetTop)
        var l =
          null !== this.$props.draggedSettlingDuration
            ? this.$props.draggedSettlingDuration
            : this.$props.transitionDuration
        return (
          (this.helper.style[f + 'Transform'] =
            'translate3d(' + a + 'px,' + u + 'px, 0)'),
          (this.helper.style[f + 'TransitionDuration'] = l + 'ms'),
          new Promise(function (e) {
            var n = function (n) {
                ;(n && 'transform' !== n.propertyName) ||
                  (clearTimeout(o),
                  (t.helper.style[f + 'Transform'] = ''),
                  (t.helper.style[f + 'TransitionDuration'] = ''),
                  e())
              },
              o = setTimeout(n, l + 10)
            t.helper.addEventListener('transitionend', n, !1)
          })
        )
      },
      getEdgeOffset: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { top: 0, left: 0 }
        if (e) {
          var n = { top: t.top + e.offsetTop, left: t.left + e.offsetLeft }
          return e.parentNode !== this.container
            ? this.getEdgeOffset(e.parentNode, n)
            : n
        }
      },
      getOffset: function (e) {
        var t = e.touches ? e.touches[0] : e
        return { x: t.pageX, y: t.pageY }
      },
      getLockPixelOffsets: function () {
        var e = this.$props.lockOffset
        if ((Array.isArray(this.lockOffset) || (e = [e, e]), 2 !== e.length))
          throw new Error(
            'lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given ' +
              e
          )
        var t = l(e, 2),
          n = t[0],
          o = t[1]
        return [this.getLockPixelOffset(n), this.getLockPixelOffset(o)]
      },
      getLockPixelOffset: function (e) {
        var t = e,
          n = e,
          o = 'px'
        if ('string' == typeof e) {
          var r = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(e)
          if (null === r)
            throw new Error(
              'lockOffset value should be a number or a string of a number followed by "px" or "%". Given ' +
                e
            )
          ;(t = n = parseFloat(e)), (o = r[1])
        }
        if (!isFinite(t) || !isFinite(n))
          throw new Error('lockOffset value should be a finite. Given ' + e)
        return (
          '%' === o &&
            ((t = (t * this.width) / 100), (n = (n * this.height) / 100)),
          { x: t, y: n }
        )
      },
      updatePosition: function (e) {
        var t = this.$props,
          n = t.lockAxis,
          o = t.lockToContainerEdges,
          r = this.getOffset(e),
          i = { x: r.x - this.initialOffset.x, y: r.y - this.initialOffset.y }
        if (
          ((i.y -= window.pageYOffset - this.initialWindowScroll.top),
          (i.x -= window.pageXOffset - this.initialWindowScroll.left),
          (this.translate = i),
          o)
        ) {
          var a = this.getLockPixelOffsets(),
            u = l(a, 2),
            s = u[0],
            c = u[1],
            d = { x: this.width / 2 - s.x, y: this.height / 2 - s.y },
            p = { x: this.width / 2 - c.x, y: this.height / 2 - c.y }
          ;(i.x = m(this.minTranslate.x + d.x, this.maxTranslate.x - p.x, i.x)),
            (i.y = m(this.minTranslate.y + d.y, this.maxTranslate.y - p.y, i.y))
        }
        'x' === n ? (i.y = 0) : 'y' === n && (i.x = 0),
          (this.helper.style[f + 'Transform'] =
            'translate3d(' + i.x + 'px,' + i.y + 'px, 0)')
      },
      animateNodes: function () {
        var e = this.$props,
          t = e.transitionDuration,
          n = e.hideSortableGhost,
          o = this.manager.getOrderedRefs(),
          r = this.scrollContainer.scrollLeft - this.initialScroll.left,
          i = this.scrollContainer.scrollTop - this.initialScroll.top,
          a = this.offsetEdge.left + this.translate.x + r,
          u = this.offsetEdge.top + this.translate.y + i,
          l = window.pageYOffset - this.initialWindowScroll.top,
          s = window.pageXOffset - this.initialWindowScroll.left
        this.newIndex = null
        for (var c = 0, d = o.length; c < d; c++) {
          var p = o[c].node,
            m = p.sortableInfo.index,
            h = p.offsetWidth,
            v = p.offsetHeight,
            y = {
              width: this.width > h ? h / 2 : this.width / 2,
              height: this.height > v ? v / 2 : this.height / 2,
            },
            g = { x: 0, y: 0 },
            b = o[c].edgeOffset
          b || (o[c].edgeOffset = b = this.getEdgeOffset(p))
          var F = c < o.length - 1 && o[c + 1],
            V = c > 0 && o[c - 1]
          F && !F.edgeOffset && (F.edgeOffset = this.getEdgeOffset(F.node)),
            m !== this.index
              ? (t && (p.style[f + 'TransitionDuration'] = t + 'ms'),
                this._axis.x
                  ? this._axis.y
                    ? m < this.index &&
                      ((a + s - y.width <= b.left &&
                        u + l <= b.top + y.height) ||
                        u + l + y.height <= b.top)
                      ? ((g.x = this.width + this.marginOffset.x),
                        b.left + g.x >
                          this.containerBoundingRect.width - y.width &&
                          ((g.x = F.edgeOffset.left - b.left),
                          (g.y = F.edgeOffset.top - b.top)),
                        null === this.newIndex && (this.newIndex = m))
                      : m > this.index &&
                        ((a + s + y.width >= b.left &&
                          u + l + y.height >= b.top) ||
                          u + l + y.height >= b.top + v) &&
                        ((g.x = -(this.width + this.marginOffset.x)),
                        b.left + g.x <
                          this.containerBoundingRect.left + y.width &&
                          ((g.x = V.edgeOffset.left - b.left),
                          (g.y = V.edgeOffset.top - b.top)),
                        (this.newIndex = m))
                    : m > this.index && a + s + y.width >= b.left
                    ? ((g.x = -(this.width + this.marginOffset.x)),
                      (this.newIndex = m))
                    : m < this.index &&
                      a + s <= b.left + y.width &&
                      ((g.x = this.width + this.marginOffset.x),
                      null == this.newIndex && (this.newIndex = m))
                  : this._axis.y &&
                    (m > this.index && u + l + y.height >= b.top
                      ? ((g.y = -(this.height + this.marginOffset.y)),
                        (this.newIndex = m))
                      : m < this.index &&
                        u + l <= b.top + y.height &&
                        ((g.y = this.height + this.marginOffset.y),
                        null == this.newIndex && (this.newIndex = m))),
                (p.style[f + 'Transform'] =
                  'translate3d(' + g.x + 'px,' + g.y + 'px,0)'))
              : n &&
                ((this.sortableGhost = p),
                (p.style.visibility = 'hidden'),
                (p.style.opacity = 0))
        }
        null == this.newIndex && (this.newIndex = this.index)
      },
      autoscroll: function () {
        var e = this,
          t = this.translate,
          n = { x: 0, y: 0 },
          o = { x: 1, y: 1 },
          r = 10,
          i = 10
        t.y >= this.maxTranslate.y - this.height / 2
          ? ((n.y = 1),
            (o.y =
              i *
              Math.abs(
                (this.maxTranslate.y - this.height / 2 - t.y) / this.height
              )))
          : t.x >= this.maxTranslate.x - this.width / 2
          ? ((n.x = 1),
            (o.x =
              r *
              Math.abs(
                (this.maxTranslate.x - this.width / 2 - t.x) / this.width
              )))
          : t.y <= this.minTranslate.y + this.height / 2
          ? ((n.y = -1),
            (o.y =
              i *
              Math.abs(
                (t.y - this.height / 2 - this.minTranslate.y) / this.height
              )))
          : t.x <= this.minTranslate.x + this.width / 2 &&
            ((n.x = -1),
            (o.x =
              r *
              Math.abs(
                (t.x - this.width / 2 - this.minTranslate.x) / this.width
              ))),
          this.autoscrollInterval &&
            (clearInterval(this.autoscrollInterval),
            (this.autoscrollInterval = null),
            (this.isAutoScrolling = !1)),
          (0 === n.x && 0 === n.y) ||
            (this.autoscrollInterval = setInterval(function () {
              e.isAutoScrolling = !0
              var t = 1 * o.x * n.x,
                r = 1 * o.y * n.y
              ;(e.scrollContainer.scrollTop += r),
                (e.scrollContainer.scrollLeft += t),
                (e.translate.x += t),
                (e.translate.y += r),
                e.animateNodes()
            }, 5))
      },
    },
  }
  function y(e, t) {
    return {
      name: e,
      mixins: [t],
      props: { tag: { type: String, default: 'div' } },
      render: function (e) {
        return e(this.tag, this.$slots.default)
      },
    }
  }
  var g,
    b = y('slick-list', v),
    F = y('slick-item', a)
  ;(g = (g = Vue) || Vue) &&
    !g.__composition_api_installed__ &&
    Vue.use(VueCompositionAPI),
    Vue,
    Vue.version,
    VueCompositionAPI.EffectScope
  const V = VueCompositionAPI.computed
  VueCompositionAPI.createApp,
    VueCompositionAPI.createRef,
    VueCompositionAPI.customRef,
    VueCompositionAPI.defineAsyncComponent
  const C = VueCompositionAPI.defineComponent
  VueCompositionAPI.del,
    VueCompositionAPI.effectScope,
    VueCompositionAPI.getCurrentInstance,
    VueCompositionAPI.getCurrentScope,
    VueCompositionAPI.h,
    VueCompositionAPI.inject,
    VueCompositionAPI.isRaw,
    VueCompositionAPI.isReactive,
    VueCompositionAPI.isReadonly,
    VueCompositionAPI.isRef,
    VueCompositionAPI.markRaw,
    VueCompositionAPI.nextTick,
    VueCompositionAPI.onActivated,
    VueCompositionAPI.onBeforeMount,
    VueCompositionAPI.onBeforeUnmount,
    VueCompositionAPI.onBeforeUpdate,
    VueCompositionAPI.onDeactivated,
    VueCompositionAPI.onErrorCaptured
  const w = VueCompositionAPI.onMounted
  VueCompositionAPI.onScopeDispose,
    VueCompositionAPI.onServerPrefetch,
    VueCompositionAPI.onUnmounted,
    VueCompositionAPI.onUpdated,
    VueCompositionAPI.provide,
    VueCompositionAPI.proxyRefs,
    VueCompositionAPI.reactive,
    VueCompositionAPI.readonly
  const x = VueCompositionAPI.ref
  VueCompositionAPI.set,
    VueCompositionAPI.shallowReactive,
    VueCompositionAPI.shallowReadonly,
    VueCompositionAPI.shallowRef,
    VueCompositionAPI.toRaw,
    VueCompositionAPI.toRef,
    VueCompositionAPI.toRefs,
    VueCompositionAPI.triggerRef,
    VueCompositionAPI.unref,
    VueCompositionAPI.useAttrs,
    VueCompositionAPI.useCSSModule,
    VueCompositionAPI.useCssModule,
    VueCompositionAPI.useSlots,
    VueCompositionAPI.warn,
    VueCompositionAPI.watch,
    VueCompositionAPI.watchEffect,
    VueCompositionAPI.watchPostEffect,
    VueCompositionAPI.watchSyncEffect,
    Vue
  var A = function (e, n, o) {
    return C({
      setup: function (r, i) {
        var a = i.attrs,
          u = i.slots,
          l = i.listeners
        return function () {
          var r = { attrs: t({}, a), on: t({}, l) }
          if (n) {
            var i = n
            Object.keys(i).forEach(function (e) {
              void 0 !== r.on && (r.on[i[e]] = l[e])
            })
          }
          return (
            o && (r.attrs = Formily.Shared.merge(o, r.attrs)),
            Formily.Vue.h(e, r, u)
          )
        }
      },
    })
  }
  function P(e) {
    return (
      ((t = e) &&
        ('string' == typeof t.template || 'function' == typeof t.render)) ||
      (e &&
        'object' == typeof e &&
        'componentOptions' in e &&
        'context' in e &&
        void 0 !== e.tag)
    )
    var t
  }
  function S(e, t) {
    return Object.assign(e, t)
  }
  var I = function (e, t) {
      return e
        ? 'string' == typeof e || 'number' == typeof e
          ? e
          : 'function' == typeof e
          ? e(t)
          : (n = e) &&
            'object' == typeof n &&
            'componentOptions' in n &&
            'context' in n &&
            void 0 !== n.tag
          ? e
          : VueCompositionAPI.h(VueCompositionAPI.toRaw(e), { props: t })
        : null
      var n
    },
    O = new Map(),
    k = function (e) {
      var t = VueCompositionAPI.defineComponent({
        name: 'ProtalProvider',
        props: { id: { type: [String, Symbol], default: e } },
        setup: function (e) {
          VueCompositionAPI.onBeforeUnmount(function () {
            var t = e.id
            t && O.has(t) && O.delete(t)
          })
        },
        render: function () {
          var e = this.id
          return (
            e && !O.has(e) && O.set(e, this),
            Formily.Vue.h(Formily.Vue.Fragment, {}, this.$scopedSlots)
          )
        },
      })
      return t
    }
  function T(e) {
    return O.get(e)
  }
  var M = function (e, t) {
      return (
        void 0 === e && (e = 'Loading...'),
        o(void 0, void 0, void 0, function () {
          var n, o
          return r(this, function (r) {
            switch (r.label) {
              case 0:
                ;(n = null),
                  (o = setTimeout(function () {
                    n = Element.Loading.service({
                      text: e,
                      background: 'transparent',
                    })
                  }, 100)),
                  (r.label = 1)
              case 1:
                return r.trys.push([1, , 3, 4]), [4, t()]
              case 2:
                return [2, r.sent()]
              case 3:
                return null == n || n.close(), clearTimeout(o), [7]
              case 4:
                return [2]
            }
          })
        })
      )
    },
    E = Symbol('ArrayBaseContext'),
    R = Symbol('ItemContext'),
    D = function () {
      return VueCompositionAPI.inject(E, null)
    },
    _ = function (e) {
      var t = VueCompositionAPI.toRefs(VueCompositionAPI.inject(R)).index
      return null != t ? t : VueCompositionAPI.ref(e)
    },
    j = function (e) {
      var t, n
      return Array.isArray(null == e ? void 0 : e.items)
        ? j(e.items[0])
        : 'array' ===
            (null === (t = null == e ? void 0 : e.items) || void 0 === t
              ? void 0
              : t.type) ||
            'object' ===
              (null === (n = null == e ? void 0 : e.items) || void 0 === n
                ? void 0
                : n.type)
    },
    B = function (e, t) {
      var n, o, r, i, a, u, l
      return Formily.Shared.isValid(e)
        ? Formily.Shared.clone(e)
        : Array.isArray(null == t ? void 0 : t.items)
        ? B(e, t.items[0])
        : 'array' ===
          (null === (n = null == t ? void 0 : t.items) || void 0 === n
            ? void 0
            : n.type)
        ? []
        : 'boolean' ===
            (null === (o = null == t ? void 0 : t.items) || void 0 === o
              ? void 0
              : o.type) ||
          ('date' ===
            (null === (r = null == t ? void 0 : t.items) || void 0 === r
              ? void 0
              : r.type) ||
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
              (null === (u = null == t ? void 0 : t.items) || void 0 === u
                ? void 0
                : u.type)
            ? {}
            : 'string' ===
              (null === (l = null == t ? void 0 : t.items) || void 0 === l
                ? void 0
                : l.type)
            ? ''
            : null)
    },
    N = VueCompositionAPI.defineComponent({
      name: 'ArrayBase',
      props: {
        disabled: { type: Boolean, default: !1 },
        keyMap: { type: [WeakMap, Array] },
      },
      setup: function (e, t) {
        var n = t.slots,
          o = t.listeners,
          r = Formily.Vue.useField(),
          i = Formily.Vue.useFieldSchema()
        return (
          VueCompositionAPI.provide(E, {
            field: r,
            schema: i,
            props: e,
            listeners: o,
            keyMap: e.keyMap,
          }),
          function () {
            return Formily.Vue.h(Formily.Vue.Fragment, {}, n)
          }
        )
      },
    }),
    W = VueCompositionAPI.defineComponent({
      name: 'ArrayBaseItem',
      props: ['index', 'record'],
      setup: function (e, t) {
        var n = t.slots
        return (
          VueCompositionAPI.provide(R, e),
          function () {
            return Formily.Vue.h(Formily.Vue.Fragment, {}, n)
          }
        )
      },
    }),
    $ = VueCompositionAPI.defineComponent({
      name: 'ArrayBaseSortHandle',
      props: ['index'],
      directives: {
        handle: {
          bind: function (e) {
            e.sortableHandle = !0
          },
        },
      },
      setup: function (e, n) {
        var o = n.attrs,
          r = D(),
          a = ''.concat(i, '-array-base')
        return function () {
          var e
          return r
            ? 'editable' !==
              (null === (e = r.field.value) || void 0 === e
                ? void 0
                : e.pattern)
              ? null
              : Formily.Vue.h(
                  Element.Button,
                  {
                    directives: [{ name: 'handle' }],
                    class: [''.concat(a, '-sort-handle')],
                    attrs: t(
                      { size: 'mini', type: 'text', icon: 'el-icon-rank' },
                      o
                    ),
                  },
                  {}
                )
            : null
        }
      },
    }),
    L = VueCompositionAPI.defineComponent({
      name: 'ArrayBaseIndex',
      setup: function (e, t) {
        var n = t.attrs,
          o = _(),
          r = ''.concat(i, '-array-base')
        return function () {
          return Formily.Vue.h(
            'span',
            { class: ''.concat(r, '-index'), attrs: n },
            {
              default: function () {
                return ['#'.concat(o.value + 1, '.')]
              },
            }
          )
        }
      },
    }),
    G = VueCompositionAPI.defineComponent({
      name: 'ArrayBaseAddition',
      props: ['title', 'method', 'defaultValue'],
      setup: function (e, n) {
        var o = n.listeners,
          r = Formily.Vue.useField(),
          a = D(),
          u = ''.concat(i, '-array-base')
        return function () {
          return a
            ? 'editable' !== (null == a ? void 0 : a.field.value.pattern)
              ? null
              : Formily.Vue.h(
                  Element.Button,
                  {
                    class: ''.concat(u, '-addition'),
                    attrs: t({ type: 'ghost', icon: 'qax-icon-Alone-Plus' }, e),
                    on: t(t({}, o), {
                      click: function (t) {
                        var n, r, i, u, l, s, c, d, f, p
                        if (
                          !(null === (n = a.props) || void 0 === n
                            ? void 0
                            : n.disabled)
                        ) {
                          var m = B(
                            e.defaultValue,
                            null == a ? void 0 : a.schema.value
                          )
                          'unshift' === e.method
                            ? (null === (r = null == a ? void 0 : a.field) ||
                                void 0 === r ||
                                r.value.unshift(m),
                              null ===
                                (u =
                                  null === (i = a.listeners) || void 0 === i
                                    ? void 0
                                    : i.add) ||
                                void 0 === u ||
                                u.call(i, 0))
                            : (null === (l = null == a ? void 0 : a.field) ||
                                void 0 === l ||
                                l.value.push(m),
                              null ===
                                (c =
                                  null === (s = a.listeners) || void 0 === s
                                    ? void 0
                                    : s.add) ||
                                void 0 === c ||
                                c.call(
                                  s,
                                  (null ===
                                    (p =
                                      null ===
                                        (f =
                                          null ===
                                            (d =
                                              null == a ? void 0 : a.field) ||
                                          void 0 === d
                                            ? void 0
                                            : d.value) || void 0 === f
                                        ? void 0
                                        : f.value) || void 0 === p
                                    ? void 0
                                    : p.length) - 1
                                )),
                            o.click && o.click(t)
                        }
                      },
                    }),
                  },
                  {
                    default: function () {
                      return [r.value.title || e.title]
                    },
                  }
                )
            : null
        }
      },
    }),
    z = VueCompositionAPI.defineComponent({
      name: 'ArrayBaseRemove',
      props: ['title', 'index'],
      setup: function (e, n) {
        var o = n.attrs,
          r = n.listeners,
          a = _(e.index),
          u = D(),
          l = ''.concat(i, '-array-base')
        return function () {
          return 'editable' !== (null == u ? void 0 : u.field.value.pattern)
            ? null
            : Formily.Vue.h(
                Element.Button,
                {
                  class: ''.concat(l, '-remove'),
                  attrs: t(
                    { type: 'text', size: 'mini', icon: 'el-icon-delete' },
                    o
                  ),
                  on: t(t({}, r), {
                    click: function (e) {
                      var t, n, o
                      e.stopPropagation(),
                        Array.isArray(null == u ? void 0 : u.keyMap) &&
                          (null === (t = null == u ? void 0 : u.keyMap) ||
                            void 0 === t ||
                            t.splice(a.value, 1)),
                        null == u || u.field.value.remove(a.value),
                        null ===
                          (o =
                            null === (n = null == u ? void 0 : u.listeners) ||
                            void 0 === n
                              ? void 0
                              : n.remove) ||
                          void 0 === o ||
                          o.call(n, a.value),
                        r.click && r.click(e)
                    },
                  }),
                },
                {
                  default: function () {
                    return [e.title]
                  },
                }
              )
        }
      },
    }),
    H = VueCompositionAPI.defineComponent({
      name: 'ArrayBaseMoveDown',
      props: ['title', 'index'],
      setup: function (e, n) {
        var o = n.attrs,
          r = n.listeners,
          a = _(e.index),
          u = D(),
          l = ''.concat(i, '-array-base')
        return function () {
          return 'editable' !== (null == u ? void 0 : u.field.value.pattern)
            ? null
            : Formily.Vue.h(
                Element.Button,
                {
                  class: ''.concat(l, '-move-down'),
                  attrs: t(
                    { size: 'mini', type: 'text', icon: 'el-icon-arrow-down' },
                    o
                  ),
                  on: t(t({}, r), {
                    click: function (e) {
                      var t, n
                      e.stopPropagation(),
                        Array.isArray(null == u ? void 0 : u.keyMap) &&
                          u.keyMap.splice(
                            a.value + 1,
                            0,
                            u.keyMap.splice(a.value, 1)[0]
                          ),
                        null == u || u.field.value.moveDown(a.value),
                        null ===
                          (n =
                            null === (t = null == u ? void 0 : u.listeners) ||
                            void 0 === t
                              ? void 0
                              : t.moveDown) ||
                          void 0 === n ||
                          n.call(t, a.value),
                        r.click && r.click(e)
                    },
                  }),
                },
                {
                  default: function () {
                    return [e.title]
                  },
                }
              )
        }
      },
    }),
    K = VueCompositionAPI.defineComponent({
      name: 'ArrayBaseMoveUp',
      props: ['title', 'index'],
      setup: function (e, n) {
        var o = n.attrs,
          r = n.listeners,
          a = _(e.index),
          u = D(),
          l = ''.concat(i, '-array-base')
        return function () {
          return 'editable' !== (null == u ? void 0 : u.field.value.pattern)
            ? null
            : Formily.Vue.h(
                Element.Button,
                {
                  class: ''.concat(l, '-move-up'),
                  attrs: t(
                    { size: 'mini', type: 'text', icon: 'el-icon-arrow-up' },
                    o
                  ),
                  on: t(t({}, r), {
                    click: function (e) {
                      var t, n
                      e.stopPropagation(),
                        Array.isArray(null == u ? void 0 : u.keyMap) &&
                          u.keyMap.splice(
                            a.value - 1,
                            0,
                            u.keyMap.splice(a.value, 1)[0]
                          ),
                        null == u || u.field.value.moveUp(a.value),
                        null ===
                          (n =
                            null === (t = null == u ? void 0 : u.listeners) ||
                            void 0 === t
                              ? void 0
                              : t.moveUp) ||
                          void 0 === n ||
                          n.call(t, a.value),
                        r.click && r.click(e)
                    },
                  }),
                },
                {
                  default: function () {
                    return [e.title]
                  },
                }
              )
        }
      },
    }),
    U = S(N, {
      Index: L,
      Item: W,
      SortHandle: $,
      Addition: G,
      Remove: z,
      MoveDown: H,
      MoveUp: K,
      useArray: D,
      useIndex: _,
      useKey: function (e) {
        var t = j(e),
          n = null
        return (
          (n = t ? new WeakMap() : []),
          VueCompositionAPI.onBeforeUnmount(function () {
            n = null
          }),
          {
            keyMap: n,
            getKey: function (e, t) {
              return n instanceof WeakMap
                ? (n.has(e) || n.set(e, Formily.Shared.uid()),
                  ''.concat(n.get(e), '-').concat(t))
                : (n[t] || (n[t] = Formily.Shared.uid()),
                  ''.concat(n[t], '-').concat(t))
            },
          }
        )
      },
      useRecord: function (e) {
        var t = VueCompositionAPI.toRefs(VueCompositionAPI.inject(R)).record
        return null != t ? t : VueCompositionAPI.ref(e)
      },
    }),
    q = function (e, t) {
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
    Y = function (e, o) {
      var r = x(null),
        i = e.breakpoints
      if (!Formily.Shared.isArr(i)) return { props: x(e) }
      var a = x(e),
        u = function () {
          a.value = (function (e, o) {
            var r = e.clientWidth,
              i = o.breakpoints,
              a = o.layout,
              u = o.labelAlign,
              l = o.wrapperAlign,
              s = o.labelCol,
              c = o.wrapperCol,
              d = n(o, [
                'breakpoints',
                'layout',
                'labelAlign',
                'wrapperAlign',
                'labelCol',
                'wrapperCol',
              ]),
              f = (function (e, t) {
                for (var n = 0; n < e.length; n++) if (t <= e[n]) return n
              })(i, r)
            return t(
              {
                layout: q(a, f),
                labelAlign: q(u, f),
                wrapperAlign: q(l, f),
                labelCol: q(s, f),
                wrapperCol: q(c, f),
              },
              d
            )
          })(r.value, e)
        }
      return (
        w(function () {
          r.value = o.root
          var e = new ResizeObserver(function () {
            u()
          })
          return (
            r.value && e.observe(r.value),
            u(),
            function () {
              e.disconnect()
            }
          )
        }),
        { props: a }
      )
    },
    Z = Symbol('FormLayoutDeepContext'),
    J = Symbol('FormLayoutShallowContext'),
    X = function () {
      return VueCompositionAPI.inject(Z, VueCompositionAPI.ref({}))
    },
    Q = function () {
      return VueCompositionAPI.inject(J, VueCompositionAPI.ref({}))
    },
    ee = function () {
      var e = Q(),
        n = X(),
        o = VueCompositionAPI.ref(t(t({}, n.value), e.value))
      return (
        VueCompositionAPI.watch(
          [e, n],
          function () {
            o.value = t(t({}, n.value), e.value)
          },
          { deep: !0 }
        ),
        o
      )
    },
    te = VueCompositionAPI.defineComponent({
      name: 'FFormLayout',
      props: {
        className: {},
        colon: { default: !0 },
        labelAlign: {},
        wrapperAlign: {},
        labelWrap: { default: !1 },
        labelWidth: {},
        wrapperWidth: {},
        wrapperWrap: { default: !1 },
        labelCol: {},
        wrapperCol: {},
        fullness: { default: !1 },
        size: { default: 'default' },
        layout: { default: 'horizontal' },
        direction: { default: 'ltr' },
        shallow: { default: !0 },
        feedbackLayout: {},
        tooltipLayout: {},
        bordered: { default: !0 },
        inset: { default: !1 },
        breakpoints: {},
        spaceGap: {},
        gridColumnGap: {},
        gridRowGap: {},
      },
      setup: function (e, n) {
        var o = n.slots,
          r = n.refs,
          a = Y(e, r).props,
          u = X(),
          l = VueCompositionAPI.ref(t({}, u)),
          s = VueCompositionAPI.ref({})
        VueCompositionAPI.watch(
          [a, u],
          function () {
            ;(s.value = a.value.shallow ? a.value : void 0),
              a.value.shallow
                ? (a.value.size && (l.value.size = a.value.size),
                  a.value.colon && (l.value.colon = a.value.colon))
                : Object.assign(l.value, a.value)
          },
          { deep: !0, immediate: !0 }
        ),
          VueCompositionAPI.provide(Z, l),
          VueCompositionAPI.provide(J, s)
        var c = ''.concat(i, '-form')
        return function () {
          var e,
            t =
              (((e = {})[''.concat(c, '-').concat(a.value.layout)] = !0),
              (e[''.concat(c, '-rtl')] = 'rtl' === a.value.direction),
              (e[''.concat(c, '-').concat(a.value.size)] =
                void 0 !== a.value.size),
              (e[''.concat(a.value.className)] = void 0 !== a.value.className),
              e)
          return Formily.Vue.h('div', { ref: 'root', class: t }, o)
        }
      },
    }),
    ne = { small: 8, middle: 16, large: 24 },
    oe = VueCompositionAPI.defineComponent({
      name: 'FSpace',
      props: ['size', 'direction', 'align'],
      setup: function (e, t) {
        var n = t.slots,
          o = ee()
        return function () {
          var t,
            r,
            a,
            u,
            l,
            s,
            c = e.align,
            d = e.size,
            f =
              void 0 === d
                ? null !==
                    (a =
                      null === (r = o.value) || void 0 === r
                        ? void 0
                        : r.spaceGap) && void 0 !== a
                  ? a
                  : 'small'
                : d,
            p = e.direction,
            m = void 0 === p ? 'horizontal' : p,
            h = ''.concat(i, '-space'),
            v = null === (u = n.default) || void 0 === u ? void 0 : u.call(n),
            y = []
          Array.isArray(v) &&
            (y =
              1 === v.length &&
              (null === (l = v[0].tag) || void 0 === l
                ? void 0
                : l.endsWith('Fragment'))
                ? null === (s = v[0].componentOptions) || void 0 === s
                  ? void 0
                  : s.children
                : v)
          var g = y.length
          if (0 === g) return null
          var b = void 0 === c && 'horizontal' === m ? 'center' : c,
            F =
              (((t = {})[h] = !0),
              (t[''.concat(h, '-').concat(m)] = !0),
              (t[''.concat(h, '-align-').concat(b)] = b),
              t),
            V = ''.concat(h, '-item'),
            C = y.map(function (e, t) {
              var n
              return Formily.Vue.h(
                'div',
                {
                  class: V,
                  key: ''.concat(V, '-').concat(t),
                  style:
                    t === g - 1
                      ? {}
                      : ((n = {}),
                        (n['vertical' === m ? 'marginBottom' : 'marginRight'] =
                          ''.concat('string' == typeof f ? ne[f] : f, 'px')),
                        n),
                },
                {
                  default: function () {
                    return [e]
                  },
                }
              )
            })
          return Formily.Vue.h(
            'div',
            { class: F },
            {
              default: function () {
                return C
              },
            }
          )
        }
      },
    }),
    re = Formily.Vue.RecursionField,
    ie = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Column')) > -1
      )
    },
    ae = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Addition')) > -1
      )
    },
    ue = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        props: {
          value: Number,
          onChange: Function,
          options: Array,
          pageSize: Number,
        },
        setup: function (e) {
          var t,
            n = Formily.Vue.useForm(),
            o = Formily.Vue.useField(),
            r = ''.concat(i, '-array-table'),
            a =
              15 *
              String(
                null === (t = e.options) || void 0 === t ? void 0 : t.length
              ).length
          return function () {
            var t = n.value,
              i = o.value,
              u = t.queryFeedbacks({
                type: 'error',
                address: ''.concat(i.address, '.*'),
              })
            return Formily.Vue.h(
              Element.Select,
              {
                style: { width: ''.concat(a < 60 ? 60 : a, 'px') },
                class: [
                  ''.concat(r, '-status-select'),
                  { 'has-error': null == u ? void 0 : u.length },
                ],
                props: {
                  value: e.value,
                  popperClass: ''.concat(r, '-status-select-dropdown'),
                },
                on: { input: e.onChange },
              },
              {
                default: function () {
                  var t
                  return null === (t = e.options) || void 0 === t
                    ? void 0
                    : t.map(function (t) {
                        var n = t.label,
                          o = t.value,
                          r = u.some(function (t) {
                            var n,
                              r,
                              a = t.address
                            return ((n = o),
                            (r = ''
                              .concat(i.address, '.*[')
                              .concat((n - 1) * e.pageSize, ':')
                              .concat(n * e.pageSize, '].*')),
                            Formily.Shared.FormPath.parse(r)).match(a)
                          })
                        return Formily.Vue.h(
                          Element.Option,
                          { key: o, props: { label: n, value: o } },
                          {
                            default: function () {
                              return r
                                ? Formily.Vue.h(
                                    Element.Badge,
                                    { props: { isDot: !0 } },
                                    {
                                      default: function () {
                                        return n
                                      },
                                    }
                                  )
                                : n
                            },
                          }
                        )
                      })
                },
              }
            )
          }
        },
      })
    ),
    le = VueCompositionAPI.defineComponent({
      inheritAttrs: !1,
      props: [],
      setup: function (e, n) {
        var o = n.attrs,
          r = n.slots,
          a = ''.concat(i, '-array-table'),
          u = VueCompositionAPI.ref(1)
        return function () {
          var e = o,
            n = e.pageSize || 10,
            i = e.dataSource || [],
            l = (u.value - 1) * n,
            s = l + n - 1,
            c = (null == i ? void 0 : i.length) || 0,
            d = Math.ceil(c / n),
            f = Array.from(new Array(d)).map(function (e, t) {
              var n = t + 1
              return { label: n, value: n }
            }),
            p = function () {
              if (!(d <= 1))
                return Formily.Vue.h(
                  'div',
                  { class: [''.concat(a, '-pagination')] },
                  {
                    default: function () {
                      return Formily.Vue.h(
                        oe,
                        {},
                        {
                          default: function () {
                            return [
                              Formily.Vue.h(
                                ue,
                                {
                                  props: {
                                    value: u.value,
                                    onChange: function (e) {
                                      u.value = e
                                    },
                                    pageSize: n,
                                    options: f,
                                  },
                                },
                                {}
                              ),
                              Formily.Vue.h(
                                Element.Pagination,
                                {
                                  props: t(
                                    t(
                                      {
                                        background: !0,
                                        layout: 'prev, pager, next',
                                      },
                                      e
                                    ),
                                    {
                                      pageSize: n,
                                      pageCount: d,
                                      currentPage: u.value,
                                    }
                                  ),
                                  on: {
                                    'current-change': function (e) {
                                      u.value = e
                                    },
                                  },
                                },
                                {}
                              ),
                            ]
                          },
                        }
                      )
                    },
                  }
                )
            }
          return Formily.Vue.h(
            Formily.Vue.Fragment,
            {},
            {
              default: function () {
                var e
                return null === (e = null == r ? void 0 : r.default) ||
                  void 0 === e
                  ? void 0
                  : e.call(r, null == i ? void 0 : i.slice(l, s + 1), p)
              },
            }
          )
        }
      },
    }),
    se = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        name: 'FArrayTable',
        inheritAttrs: !1,
        setup: function (e, o) {
          var r = o.attrs,
            a = o.listeners,
            u = o.slots,
            l = Formily.Vue.useField(),
            s = Formily.Vue.useFieldSchema(),
            c = ''.concat(i, '-array-table'),
            d = U.useKey(s.value),
            f = d.getKey,
            p = d.keyMap,
            m = function (e) {
              return f(e)
            },
            h = VueCompositionAPI.shallowRef([]),
            v = Formily.Reactive.observe(
              l.value,
              function () {
                h.value = l.value.value
              },
              !1
            )
          return (
            VueCompositionAPI.onBeforeUnmount(v),
            function () {
              var e = r,
                o = l.value,
                i = Array.isArray(o.value) ? o.value.slice() : [],
                d = e.pagination,
                f = (function (e, t) {
                  var n = e.value,
                    o = function (e) {
                      var t, r, i
                      if (
                        ie(e) ||
                        (function (e) {
                          var t
                          return (
                            (null === (t = e['x-component']) || void 0 === t
                              ? void 0
                              : t.indexOf('Operations')) > -1
                          )
                        })(e) ||
                        ae(e)
                      ) {
                        if (
                          !(null === (t = e['x-component-props']) ||
                          void 0 === t
                            ? void 0
                            : t.prop) &&
                          !e.name
                        )
                          return []
                        var a =
                            (null === (r = e['x-component-props']) ||
                            void 0 === r
                              ? void 0
                              : r.prop) || e.name,
                          u = n.query(n.address.concat(a)).take(),
                          l =
                            (null == u ? void 0 : u.props) || e.toFieldProps(),
                          s =
                            (null === (i = null == u ? void 0 : u.component) ||
                            void 0 === i
                              ? void 0
                              : i[1]) ||
                            e['x-component-props'] ||
                            {}
                        return [
                          {
                            name: a,
                            display:
                              (null == u ? void 0 : u.display) ||
                              e['x-display'],
                            required: e.reduceProperties(function (e, t) {
                              return e || !!t.required
                            }, !1),
                            field: u,
                            fieldProps: l,
                            schema: e,
                            columnProps: s,
                          },
                        ]
                      }
                      return e.properties
                        ? e.reduceProperties(function (e, t) {
                            return e.concat(o(t))
                          }, [])
                        : []
                    }
                  if (!t.value) throw new Error('can not found schema object')
                  return (
                    (r = t.value.items),
                    r
                      ? (Formily.Shared.isArr(r) ? r : [r]).reduce(function (
                          e,
                          t
                        ) {
                          var n = o(t)
                          return n ? e.concat(n) : e
                        },
                        [])
                      : []
                  )
                  var r
                })(l, s),
                v = (function (e, o) {
                  return o.reduce(function (o, r, i) {
                    var a = r.name,
                      u = r.columnProps,
                      l = r.schema,
                      s = r.display,
                      c = r.required,
                      d = u.title,
                      f = u.asterisk,
                      p = n(u, ['title', 'asterisk'])
                    if ('visible' !== s) return o
                    if (!ie(l)) return o
                    var m =
                      (null == u ? void 0 : u.type) &&
                      'default' !== (null == u ? void 0 : u.type)
                        ? void 0
                        : function (t) {
                            var n = e.value.indexOf(t.row)
                            return Formily.Vue.h(
                              U.Item,
                              {
                                props: { index: n, record: t.row },
                                key: ''.concat(i).concat(n),
                              },
                              {
                                default: function () {
                                  return Formily.Vue.h(
                                    re,
                                    {
                                      props: {
                                        schema: l,
                                        name: n,
                                        onlyRenderProperties: !0,
                                      },
                                    },
                                    {}
                                  )
                                },
                              }
                            )
                          }
                    return o.concat(
                      t(t({ label: d }, p), {
                        key: i,
                        prop: a,
                        asterisk: null != f ? f : c,
                        render: m,
                      })
                    )
                  }, [])
                })(h, f),
                y = function () {
                  return v.map(function (e) {
                    var t = e.key,
                      o = e.render,
                      r = e.asterisk,
                      i = n(e, ['key', 'render', 'asterisk']),
                      a = {}
                    return (
                      o && (a.default = o),
                      r &&
                        (a.header = function (e) {
                          var t = e.column
                          return Formily.Vue.h(
                            'span',
                            {},
                            {
                              default: function () {
                                return [
                                  Formily.Vue.h(
                                    'span',
                                    { class: ''.concat(c, '-asterisk') },
                                    {
                                      default: function () {
                                        return ['*']
                                      },
                                    }
                                  ),
                                  t.label,
                                ]
                              },
                            }
                          )
                        }),
                      Formily.Vue.h(
                        Element.TableColumn,
                        { key: t, props: i },
                        a
                      )
                    )
                  })
                },
                g = function (e, n) {
                  return Formily.Vue.h(
                    'div',
                    { class: c },
                    {
                      default: function () {
                        return Formily.Vue.h(
                          U,
                          { props: { keyMap: p } },
                          {
                            default: function () {
                              return [
                                Formily.Vue.h(
                                  Element.Table,
                                  {
                                    props: t(t({ rowKey: m }, r), { data: e }),
                                    on: a,
                                  },
                                  t(t({}, u), { default: y })
                                ),
                                null == n ? void 0 : n(),
                                f.map(function (e, t) {
                                  if (ie(e.schema))
                                    return Formily.Vue.h(
                                      re,
                                      {
                                        props: {
                                          name: e.name,
                                          schema: e.schema,
                                          onlyRenderSelf: !0,
                                        },
                                        key: t,
                                      },
                                      {}
                                    )
                                }),
                                Formily.Vue.useFieldSchema().value.reduceProperties(
                                  function (e, t) {
                                    return ae(t)
                                      ? Formily.Vue.h(
                                          re,
                                          {
                                            props: {
                                              schema: t,
                                              name: 'addition',
                                            },
                                          },
                                          {}
                                        )
                                      : e
                                  },
                                  null
                                ),
                              ]
                            },
                          }
                        )
                      },
                    }
                  )
                }
              return d
                ? Formily.Vue.h(
                    le,
                    {
                      attrs: t(t({}, Formily.Shared.isBool(d) ? {} : d), {
                        dataSource: i,
                      }),
                    },
                    { default: g }
                  )
                : g(i, null)
            }
          )
        },
      })
    ),
    ce = S(se, {
      Column: {
        name: 'FArrayTableColumn',
        render: function (e) {
          return e()
        },
      },
      Index: U.Index,
      SortHandle: U.SortHandle,
      Addition: U.Addition,
      Remove: U.Remove,
      MoveDown: U.MoveDown,
      MoveUp: U.MoveUp,
      useArray: U.useArray,
      useIndex: U.useIndex,
      useRecord: U.useRecord,
    }),
    de =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {}
  function fe(e) {
    var t = { exports: {} }
    return e(t, t.exports), t.exports
  }
  var pe = fe(function (e) {
      !(function (t) {
        var n = {},
          o =
            /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
          r = '\\d\\d?',
          i = '[^\\s]+',
          a = /\[([^]*?)\]/gm,
          u = function () {}
        function l(e, t) {
          for (var n = [], o = 0, r = e.length; o < r; o++)
            n.push(e[o].substr(0, t))
          return n
        }
        function s(e) {
          return function (t, n, o) {
            var r = o[e].indexOf(
              n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
            )
            ~r && (t.month = r)
          }
        }
        function c(e, t) {
          for (e = String(e), t = t || 2; e.length < t; ) e = '0' + e
          return e
        }
        var d = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          f = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          p = l(f, 3),
          m = l(d, 3)
        n.i18n = {
          dayNamesShort: m,
          dayNames: d,
          monthNamesShort: p,
          monthNames: f,
          amPm: ['am', 'pm'],
          DoFn: function (e) {
            return (
              e +
              ['th', 'st', 'nd', 'rd'][
                e % 10 > 3 ? 0 : ((e - (e % 10) != 10) * e) % 10
              ]
            )
          },
        }
        var h = {
            D: function (e) {
              return e.getDay()
            },
            DD: function (e) {
              return c(e.getDay())
            },
            Do: function (e, t) {
              return t.DoFn(e.getDate())
            },
            d: function (e) {
              return e.getDate()
            },
            dd: function (e) {
              return c(e.getDate())
            },
            ddd: function (e, t) {
              return t.dayNamesShort[e.getDay()]
            },
            dddd: function (e, t) {
              return t.dayNames[e.getDay()]
            },
            M: function (e) {
              return e.getMonth() + 1
            },
            MM: function (e) {
              return c(e.getMonth() + 1)
            },
            MMM: function (e, t) {
              return t.monthNamesShort[e.getMonth()]
            },
            MMMM: function (e, t) {
              return t.monthNames[e.getMonth()]
            },
            yy: function (e) {
              return c(String(e.getFullYear()), 4).substr(2)
            },
            yyyy: function (e) {
              return c(e.getFullYear(), 4)
            },
            h: function (e) {
              return e.getHours() % 12 || 12
            },
            hh: function (e) {
              return c(e.getHours() % 12 || 12)
            },
            H: function (e) {
              return e.getHours()
            },
            HH: function (e) {
              return c(e.getHours())
            },
            m: function (e) {
              return e.getMinutes()
            },
            mm: function (e) {
              return c(e.getMinutes())
            },
            s: function (e) {
              return e.getSeconds()
            },
            ss: function (e) {
              return c(e.getSeconds())
            },
            S: function (e) {
              return Math.round(e.getMilliseconds() / 100)
            },
            SS: function (e) {
              return c(Math.round(e.getMilliseconds() / 10), 2)
            },
            SSS: function (e) {
              return c(e.getMilliseconds(), 3)
            },
            a: function (e, t) {
              return e.getHours() < 12 ? t.amPm[0] : t.amPm[1]
            },
            A: function (e, t) {
              return e.getHours() < 12
                ? t.amPm[0].toUpperCase()
                : t.amPm[1].toUpperCase()
            },
            ZZ: function (e) {
              var t = e.getTimezoneOffset()
              return (
                (t > 0 ? '-' : '+') +
                c(100 * Math.floor(Math.abs(t) / 60) + (Math.abs(t) % 60), 4)
              )
            },
          },
          v = {
            d: [
              r,
              function (e, t) {
                e.day = t
              },
            ],
            Do: [
              '\\d\\d?[^\\s]+',
              function (e, t) {
                e.day = parseInt(t, 10)
              },
            ],
            M: [
              r,
              function (e, t) {
                e.month = t - 1
              },
            ],
            yy: [
              r,
              function (e, t) {
                var n = +('' + new Date().getFullYear()).substr(0, 2)
                e.year = '' + (t > 68 ? n - 1 : n) + t
              },
            ],
            h: [
              r,
              function (e, t) {
                e.hour = t
              },
            ],
            m: [
              r,
              function (e, t) {
                e.minute = t
              },
            ],
            s: [
              r,
              function (e, t) {
                e.second = t
              },
            ],
            yyyy: [
              '\\d{4}',
              function (e, t) {
                e.year = t
              },
            ],
            S: [
              '\\d',
              function (e, t) {
                e.millisecond = 100 * t
              },
            ],
            SS: [
              '\\d{2}',
              function (e, t) {
                e.millisecond = 10 * t
              },
            ],
            SSS: [
              '\\d{3}',
              function (e, t) {
                e.millisecond = t
              },
            ],
            D: [r, u],
            ddd: [i, u],
            MMM: [i, s('monthNamesShort')],
            MMMM: [i, s('monthNames')],
            a: [
              i,
              function (e, t, n) {
                var o = t.toLowerCase()
                o === n.amPm[0]
                  ? (e.isPm = !1)
                  : o === n.amPm[1] && (e.isPm = !0)
              },
            ],
            ZZ: [
              '[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z',
              function (e, t) {
                var n,
                  o = (t + '').match(/([+-]|\d\d)/gi)
                o &&
                  ((n = 60 * o[1] + parseInt(o[2], 10)),
                  (e.timezoneOffset = '+' === o[0] ? n : -n))
              },
            ],
          }
        ;(v.dd = v.d),
          (v.dddd = v.ddd),
          (v.DD = v.D),
          (v.mm = v.m),
          (v.hh = v.H = v.HH = v.h),
          (v.MM = v.M),
          (v.ss = v.s),
          (v.A = v.a),
          (n.masks = {
            default: 'ddd MMM dd yyyy HH:mm:ss',
            shortDate: 'M/D/yy',
            mediumDate: 'MMM d, yyyy',
            longDate: 'MMMM d, yyyy',
            fullDate: 'dddd, MMMM d, yyyy',
            shortTime: 'HH:mm',
            mediumTime: 'HH:mm:ss',
            longTime: 'HH:mm:ss.SSS',
          }),
          (n.format = function (e, t, r) {
            var i = r || n.i18n
            if (
              ('number' == typeof e && (e = new Date(e)),
              '[object Date]' !== Object.prototype.toString.call(e) ||
                isNaN(e.getTime()))
            )
              throw new Error('Invalid Date in fecha.format')
            t = n.masks[t] || t || n.masks.default
            var u = []
            return (t = (t = t.replace(a, function (e, t) {
              return u.push(t), '@@@'
            })).replace(o, function (t) {
              return t in h ? h[t](e, i) : t.slice(1, t.length - 1)
            })).replace(/@@@/g, function () {
              return u.shift()
            })
          }),
          (n.parse = function (e, t, r) {
            var i = r || n.i18n
            if ('string' != typeof t)
              throw new Error('Invalid format in fecha.parse')
            if (((t = n.masks[t] || t), e.length > 1e3)) return null
            var u = {},
              l = [],
              s = []
            t = t.replace(a, function (e, t) {
              return s.push(t), '@@@'
            })
            var c,
              d = ((c = t), c.replace(/[|\\{()[^$+*?.-]/g, '\\$&')).replace(
                o,
                function (e) {
                  if (v[e]) {
                    var t = v[e]
                    return l.push(t[1]), '(' + t[0] + ')'
                  }
                  return e
                }
              )
            d = d.replace(/@@@/g, function () {
              return s.shift()
            })
            var f = e.match(new RegExp(d, 'i'))
            if (!f) return null
            for (var p = 1; p < f.length; p++) l[p - 1](u, f[p], i)
            var m,
              h = new Date()
            return (
              !0 === u.isPm && null != u.hour && 12 != +u.hour
                ? (u.hour = +u.hour + 12)
                : !1 === u.isPm && 12 == +u.hour && (u.hour = 0),
              null != u.timezoneOffset
                ? ((u.minute = +(u.minute || 0) - +u.timezoneOffset),
                  (m = new Date(
                    Date.UTC(
                      u.year || h.getFullYear(),
                      u.month || 0,
                      u.day || 1,
                      u.hour || 0,
                      u.minute || 0,
                      u.second || 0,
                      u.millisecond || 0
                    )
                  )))
                : (m = new Date(
                    u.year || h.getFullYear(),
                    u.month || 0,
                    u.day || 1,
                    u.hour || 0,
                    u.minute || 0,
                    u.second || 0,
                    u.millisecond || 0
                  )),
              m
            )
          }),
          e.exports ? (e.exports = n) : (t.fecha = n)
      })(de)
    }),
    me = fe(function (e, t) {
      e.exports = (function () {
        var e = function (e) {
          return t(e) && !n(e)
        }
        function t(e) {
          return !!e && 'object' == typeof e
        }
        function n(e) {
          var t = Object.prototype.toString.call(e)
          return '[object RegExp]' === t || '[object Date]' === t || r(e)
        }
        var o =
          'function' == typeof Symbol && Symbol.for
            ? Symbol.for('react.element')
            : 60103
        function r(e) {
          return e.$$typeof === o
        }
        function i(e) {
          return Array.isArray(e) ? [] : {}
        }
        function a(t, n) {
          return n && !0 === n.clone && e(t) ? s(i(t), t, n) : t
        }
        function u(t, n, o) {
          var r = t.slice()
          return (
            n.forEach(function (n, i) {
              void 0 === r[i]
                ? (r[i] = a(n, o))
                : e(n)
                ? (r[i] = s(t[i], n, o))
                : -1 === t.indexOf(n) && r.push(a(n, o))
            }),
            r
          )
        }
        function l(t, n, o) {
          var r = {}
          return (
            e(t) &&
              Object.keys(t).forEach(function (e) {
                r[e] = a(t[e], o)
              }),
            Object.keys(n).forEach(function (i) {
              e(n[i]) && t[i] ? (r[i] = s(t[i], n[i], o)) : (r[i] = a(n[i], o))
            }),
            r
          )
        }
        function s(e, t, n) {
          var o = Array.isArray(t)
          return o === Array.isArray(e)
            ? o
              ? ((n || { arrayMerge: u }).arrayMerge || u)(e, t, n)
              : l(e, t, n)
            : a(t, n)
        }
        return (
          (s.all = function (e, t) {
            if (!Array.isArray(e) || e.length < 2)
              throw new Error(
                'first argument should be an array with at least two elements'
              )
            return e.reduce(function (e, n) {
              return s(e, n, t)
            })
          }),
          s
        )
      })()
    })
  'function' != typeof /./ &&
    'object' != typeof Int8Array &&
    (Vue.prototype.$isServer || document.childNodes)
  const he = Object.prototype.hasOwnProperty
  const ve = /(%|)\{([0-9a-zA-Z_]+)\}/g
  const ye =
    (Vue,
    function (e, ...t) {
      return (
        1 === t.length && 'object' == typeof t[0] && (t = t[0]),
        (t && t.hasOwnProperty) || (t = {}),
        e.replace(ve, (n, o, r, i) => {
          let a
          return '{' === e[i - 1] && '}' === e[i + n.length]
            ? r
            : ((u = t),
              (l = r),
              (a = he.call(u, l) ? t[r] : null),
              null == a ? '' : a)
          var u, l
        })
      )
    })
  let ge = {
      el: {
        colorpicker: { confirm: '确定', clear: '清空' },
        datepicker: {
          now: '此刻',
          today: '今天',
          cancel: '取消',
          clear: '清空',
          confirm: '确定',
          selectDate: '选择日期',
          selectTime: '选择时间',
          startDate: '开始日期',
          startTime: '开始时间',
          endDate: '结束日期',
          endTime: '结束时间',
          prevYear: '前一年',
          nextYear: '后一年',
          prevMonth: '上个月',
          nextMonth: '下个月',
          year: '年',
          month1: '1 月',
          month2: '2 月',
          month3: '3 月',
          month4: '4 月',
          month5: '5 月',
          month6: '6 月',
          month7: '7 月',
          month8: '8 月',
          month9: '9 月',
          month10: '10 月',
          month11: '11 月',
          month12: '12 月',
          weeks: {
            sun: '日',
            mon: '一',
            tue: '二',
            wed: '三',
            thu: '四',
            fri: '五',
            sat: '六',
          },
          months: {
            jan: '一月',
            feb: '二月',
            mar: '三月',
            apr: '四月',
            may: '五月',
            jun: '六月',
            jul: '七月',
            aug: '八月',
            sep: '九月',
            oct: '十月',
            nov: '十一月',
            dec: '十二月',
          },
        },
        select: {
          loading: '加载中',
          noMatch: '无匹配数据',
          noData: '无数据',
          placeholder: '请选择',
        },
        cascader: {
          noMatch: '无匹配数据',
          loading: '加载中',
          placeholder: '请选择',
          noData: '暂无数据',
        },
        pagination: {
          goto: '前往',
          pagesize: '条/页',
          total: '共 {total} 条',
          pageClassifier: '页',
        },
        messagebox: {
          title: '提示',
          confirm: '确定',
          cancel: '取消',
          error: '输入的数据不合法!',
        },
        upload: {
          deleteTip: '按 delete 键可删除',
          delete: '删除',
          preview: '查看图片',
          continue: '继续上传',
        },
        table: {
          emptyText: '暂无数据',
          confirmFilter: '筛选',
          resetFilter: '重置',
          clearFilter: '全部',
          sumText: '合计',
        },
        tree: { emptyText: '暂无数据' },
        transfer: {
          noMatch: '无匹配数据',
          noData: '无数据',
          titles: ['列表 1', '列表 2'],
          filterPlaceholder: '请输入搜索内容',
          noCheckedFormat: '共 {total} 项',
          hasCheckedFormat: '已选 {checked}/{total} 项',
        },
        image: { error: '加载失败' },
        pageHeader: { title: '返回' },
        popconfirm: { confirmButtonText: '确定', cancelButtonText: '取消' },
        empty: { description: '暂无数据' },
      },
    },
    be = !1,
    Fe = function () {
      const e = Object.getPrototypeOf(this || Vue).$t
      if ('function' == typeof e && Vue.locale)
        return (
          be ||
            ((be = !0),
            Vue.locale(
              Vue.config.lang,
              me(ge, Vue.locale(Vue.config.lang) || {}, { clone: !0 })
            )),
          e.apply(this, arguments)
        )
    }
  const Ve = function (e, t) {
      let n = Fe.apply(this, arguments)
      if (null != n) return n
      const o = e.split('.')
      let r = ge
      for (let e = 0, i = o.length; e < i; e++) {
        if (((n = r[o[e]]), e === i - 1)) return ye(n, t)
        if (!n) return ''
        r = n
      }
      return ''
    },
    Ce = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
    we = [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec',
    ],
    xe = function (e) {
      return null != e && !isNaN(new Date(e).getTime()) && !Array.isArray(e)
    },
    Ae = function (e, t) {
      return (
        (e = (function (e) {
          return xe(e) ? new Date(e) : null
        })(e)),
        e
          ? pe.format(e, t || 'yyyy-MM-dd', {
              dayNamesShort: Ce.map((e) => Ve(`el.datepicker.weeks.${e}`)),
              dayNames: Ce.map((e) => Ve(`el.datepicker.weeks.${e}`)),
              monthNamesShort: we.map((e) => Ve(`el.datepicker.months.${e}`)),
              monthNames: we.map((e, t) => Ve(`el.datepicker.month${t + 1}`)),
              amPm: ['am', 'pm'],
            })
          : ''
      )
    }
  var Pe,
    Se,
    Ie = ''.concat(i, '-preview-text'),
    Oe =
      ((Pe = 'N/A'),
      (Se = Symbol()),
      {
        Provider: VueCompositionAPI.defineComponent({
          name: 'ContextProvider',
          props: {
            value: {
              type: null,
              default: function () {
                return null != Pe ? Pe : null
              },
            },
          },
          setup: function (e, t) {
            var n = t.slots,
              o = VueCompositionAPI.toRef(e, 'value')
            return (
              VueCompositionAPI.provide(Se, VueCompositionAPI.readonly(o)),
              function () {
                var e
                return null === (e = null == n ? void 0 : n.default) ||
                  void 0 === e
                  ? void 0
                  : e.call(n)
              }
            )
          },
        }),
        Consumer: VueCompositionAPI.defineComponent({
          name: 'ContextConsumer',
          setup: function (e, t) {
            var n = t.slots,
              o = VueCompositionAPI.inject(Se)
            return function () {
              var e
              return null === (e = null == n ? void 0 : n.default) ||
                void 0 === e
                ? void 0
                : e.call(n, o)
            }
          },
        }),
        injectKey: Se,
      }),
    ke = function (e) {
      var t,
        n =
          ((t = Oe.injectKey),
          VueCompositionAPI.inject(t, VueCompositionAPI.ref(null)))
      return VueCompositionAPI.computed(function () {
        return Formily.Shared.isValid(e) && '' !== e ? e : I(n.value) || 'N/A'
      })
    },
    Te = VueCompositionAPI.defineComponent({
      name: 'FPreviewTextInput',
      props: [],
      setup: function (e, t) {
        var n = t.attrs,
          o = t.slots,
          r = ke(n.value)
        return function () {
          return Formily.Vue.h(
            oe,
            { class: [Ie], style: n.style },
            {
              default: function () {
                var e, t, n, i
                return [
                  null === (e = null == o ? void 0 : o.prepend) || void 0 === e
                    ? void 0
                    : e.call(o),
                  null === (t = null == o ? void 0 : o.prefix) || void 0 === t
                    ? void 0
                    : t.call(o),
                  r.value,
                  null === (n = null == o ? void 0 : o.suffix) || void 0 === n
                    ? void 0
                    : n.call(o),
                  null === (i = null == o ? void 0 : o.append) || void 0 === i
                    ? void 0
                    : i.call(o),
                ]
              },
            }
          )
        }
      },
    }),
    Me = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        name: 'FPreviewTextSelect',
        props: [],
        setup: function (e, t) {
          var n,
            o,
            r = t.attrs,
            i = Formily.Vue.useField().value,
            a = r,
            u = (
              null === (n = null == i ? void 0 : i.dataSource) || void 0 === n
                ? void 0
                : n.length
            )
              ? i.dataSource
              : (
                  null === (o = null == a ? void 0 : a.options) || void 0 === o
                    ? void 0
                    : o.length
                )
              ? a.options
              : [],
            l = ke(),
            s = function () {
              var e,
                t =
                  ((e = a.value),
                  a.multiple
                    ? Formily.Shared.isArr(e)
                      ? e.map(function (e) {
                          return { label: e, value: e }
                        })
                      : []
                    : Formily.Shared.isValid(e)
                    ? [{ label: e, value: e }]
                    : [])
              return t.length
                ? t.map(function (e, t) {
                    var n,
                      o = e.value,
                      r = e.label,
                      i =
                        (null ===
                          (n =
                            null == u
                              ? void 0
                              : u.find(function (e) {
                                  return e.value == o
                                })) || void 0 === n
                          ? void 0
                          : n.label) || r
                    return Formily.Vue.h(
                      Element.Tag,
                      { key: t, props: { type: 'info', effect: 'light' } },
                      {
                        default: function () {
                          return i || l.value
                        },
                      }
                    )
                  })
                : Formily.Vue.h(
                    Element.Tag,
                    {},
                    {
                      default: function () {
                        return l.value
                      },
                    }
                  )
            }
          return function () {
            return Formily.Vue.h(
              oe,
              { class: [Ie], style: r.style },
              {
                default: function () {
                  return s()
                },
              }
            )
          }
        },
      })
    ),
    Ee = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        name: 'FPreviewTextCascader',
        props: [],
        setup: function (e, t) {
          var n,
            o,
            r,
            i,
            a = t.attrs,
            u = Formily.Vue.useField().value,
            l = a,
            s = (
              null === (n = null == u ? void 0 : u.dataSource) || void 0 === n
                ? void 0
                : n.length
            )
              ? u.dataSource
              : (
                  null === (o = null == l ? void 0 : l.options) || void 0 === o
                    ? void 0
                    : o.length
                )
              ? l.options
              : [],
            c = ke(),
            d =
              (null === (r = l.props) || void 0 === r ? void 0 : r.value) ||
              'value',
            f =
              (null === (i = l.props) || void 0 === i ? void 0 : i.label) ||
              'label',
            p = function (e, t) {
              for (var n = 0; n < (null == t ? void 0 : t.length); n++) {
                var o = t[n]
                if ((null == o ? void 0 : o[d]) === e)
                  return null == o ? void 0 : o[f]
                var r = p(e, null == o ? void 0 : o.children)
                if (r) return r
              }
            },
            m = function () {
              var e = Formily.Shared.isArr(l.value) ? l.value : []
              return (null == e ? void 0 : e.length)
                ? e.map(function (e, t) {
                    var n = p(e, s)
                    return Formily.Vue.h(
                      Element.Tag,
                      { key: t, props: { type: 'info', effect: 'light' } },
                      {
                        default: function () {
                          return n || c.value
                        },
                      }
                    )
                  })
                : Formily.Vue.h(
                    Element.Tag,
                    {},
                    {
                      default: function () {
                        return c.value
                      },
                    }
                  )
            }
          return function () {
            return Formily.Vue.h(
              oe,
              { class: [Ie], style: a.style },
              {
                default: function () {
                  return m()
                },
              }
            )
          }
        },
      })
    ),
    Re = VueCompositionAPI.defineComponent({
      name: 'FPreviewTextDatePicker',
      props: [],
      setup: function (e, t) {
        var n = t.attrs,
          o = n,
          r = ke()
        return function () {
          return Formily.Vue.h(
            'div',
            { class: [Ie], style: n.style },
            {
              default: function () {
                return Formily.Shared.isArr(o.value)
                  ? o.value
                      .map(function (e) {
                        return Ae(e, o.format) || r.value
                      })
                      .join('~')
                  : Ae(o.value, o.format) || r.value
              },
            }
          )
        }
      },
    }),
    De = VueCompositionAPI.defineComponent({
      name: 'FPreviewTextTimePicker',
      props: [],
      setup: function (e, t) {
        var n,
          o = t.attrs,
          r = o,
          i =
            (null === (n = r.pickerOptions) || void 0 === n
              ? void 0
              : n.format) || 'HH:mm:ss',
          a = ke()
        return function () {
          return Formily.Vue.h(
            'div',
            { class: [Ie], style: o.style },
            {
              default: function () {
                return Formily.Shared.isArr(r.value)
                  ? r.value
                      .map(function (e) {
                        return Ae(e, i) || a.value
                      })
                      .join('~')
                  : Ae(r.value, i) || a.value
              },
            }
          )
        }
      },
    }),
    _e = S(
      VueCompositionAPI.defineComponent({
        name: 'FPreviewText',
        setup: function (e, t) {
          var n = t.attrs,
            o = ke()
          return function () {
            return Formily.Vue.h(
              'div',
              { class: [Ie], style: n.style },
              {
                default: function () {
                  return o.value
                },
              }
            )
          }
        },
      }),
      {
        Input: Te,
        Select: Me,
        Cascader: Ee,
        DatePicker: Re,
        TimePicker: De,
        Placeholder: Oe.Provider,
        usePlaceholder: ke,
      }
    ),
    je = Formily.Vue.connect(
      Element.Cascader,
      Formily.Vue.mapProps({ dataSource: 'options' }),
      Formily.Vue.mapReadPretty(_e.Cascader)
    ),
    Be = VueCompositionAPI.defineComponent({
      name: 'Checkbox',
      inheritAttrs: !1,
      props: { option: { type: Object, default: null } },
      setup: function (e, n) {
        var o = n.attrs,
          r = n.slots,
          i = n.listeners
        return function () {
          var n = o,
            a = null == e ? void 0 : e.option
          if (a) {
            var u = {
                default: function () {
                  var e
                  return [
                    I(null !== (e = r.default) && void 0 !== e ? e : a.label, {
                      option: a,
                    }),
                  ]
                },
              },
              l = {}
            return (
              Object.assign(l, a),
              (l.label = a.value),
              delete l.value,
              Formily.Vue.h(
                'button' === o.optionType
                  ? Element.CheckboxButton
                  : Element.Checkbox,
                { attrs: t({}, l) },
                u
              )
            )
          }
          return Formily.Vue.h(Element.Checkbox, { attrs: t({}, n), on: i }, r)
        }
      },
    }),
    Ne = A(Element.CheckboxGroup, { change: 'input' }),
    We = VueCompositionAPI.defineComponent({
      name: 'CheckboxGroup',
      props: {
        options: {
          type: Array,
          default: function () {
            return []
          },
        },
        optionType: { type: String, default: 'default' },
      },
      setup: function (e, n) {
        var o = n.attrs,
          r = n.slots,
          i = n.listeners
        return function () {
          var n = e.options || [],
            a =
              0 !== n.length
                ? {
                    default: function () {
                      return n.map(function (t) {
                        return 'string' == typeof t
                          ? Formily.Vue.h(
                              Le,
                              {
                                props: { option: { label: t, value: t } },
                                attrs: { optionType: e.optionType },
                              },
                              (null == r ? void 0 : r.option)
                                ? {
                                    default: function () {
                                      return r.option({ option: t })
                                    },
                                  }
                                : {}
                            )
                          : Formily.Vue.h(
                              Le,
                              {
                                props: { option: t },
                                attrs: { optionType: e.optionType },
                              },
                              (null == r ? void 0 : r.option)
                                ? {
                                    default: function () {
                                      return r.option({ option: t })
                                    },
                                  }
                                : {}
                            )
                      })
                    },
                  }
                : r
          return Formily.Vue.h(Ne, { attrs: t({}, o), on: i }, a)
        }
      },
    }),
    $e = Formily.Vue.connect(
      We,
      Formily.Vue.mapProps({ dataSource: 'options' }),
      Formily.Vue.mapReadPretty(_e.Select, { multiple: !0 })
    ),
    Le = S(Formily.Vue.connect(Be), { Group: $e }),
    Ge = A(Element.DatePicker, { change: 'input' }),
    ze = function (e, t) {
      void 0 === t && (t = 'format')
      var n = e.type
      return 'week' === n && 'format' === t
        ? 'yyyy-WW'
        : 'month' === n
        ? 'yyyy-MM'
        : 'year' === n
        ? 'yyyy'
        : 'datetime' === n || 'datetimerange' === n
        ? 'yyyy-MM-dd HH:mm:ss'
        : 'yyyy-MM-dd'
    },
    He = Formily.Vue.connect(
      Ge,
      Formily.Vue.mapProps({ readOnly: 'readonly' }, function (e) {
        return t(t({}, e), {
          format: e.format || ze(e),
          valueFormat: e.valueFormat || ze(e, 'valueFormat'),
        })
      }),
      Formily.Vue.mapReadPretty(_e.DatePicker)
    ),
    Ke = Formily.Vue.FormProvider,
    Ue = {
      functional: !0,
      render: function (e, o) {
        var r,
          i = o.props,
          a = i.form,
          u = void 0 === a ? Formily.Vue.createForm({}) : a,
          l = i.component,
          s = void 0 === l ? Element.Form : l,
          c = i.onAutoSubmit,
          d =
            void 0 === c
              ? null === (r = o.listeners) || void 0 === r
                ? void 0
                : r.autoSubmit
              : c,
          f = n(i, ['form', 'component', 'onAutoSubmit']),
          p = Array.isArray(d) ? d[0] : d
        return e(Ke, { props: { form: u } }, [
          e(
            s,
            t(t({}, o.data), {
              props: f,
              nativeOn: {
                submit: function (e) {
                  var t, n
                  null === (t = null == e ? void 0 : e.stopPropagation) ||
                    void 0 === t ||
                    t.call(e),
                    null === (n = null == e ? void 0 : e.preventDefault) ||
                      void 0 === n ||
                      n.call(e),
                    u.submit(p)
                },
              },
            }),
            o.children
          ),
        ])
      },
    },
    qe = Formily.Vue.connect(
      Element.FormItem,
      Formily.Vue.mapProps({ title: 'label', required: !0 }, function (e, t) {
        return {
          error: Formily.Core.isVoidField(t)
            ? void 0
            : t.errors.length
            ? t.errors.join('，')
            : void 0,
        }
      })
    ),
    Ye = Formily.Vue.FormProvider,
    Ze = VueCompositionAPI.defineComponent({
      name: 'FForm',
      props: [
        'form',
        'component',
        'previewTextPlaceholder',
        'onAutoSubmit',
        'onAutoSubmitFailed',
      ],
      setup: function (e, n) {
        var o = n.attrs,
          r = n.slots,
          i = n.listeners,
          a = Formily.Vue.useForm()
        return function () {
          var n = e.form,
            u = e.component,
            l = void 0 === u ? 'form' : u,
            s = e.onAutoSubmit,
            c = void 0 === s ? (null == i ? void 0 : i.autoSubmit) : s,
            d = e.onAutoSubmitFailed,
            f = void 0 === d ? (null == i ? void 0 : i.autoSubmitFailed) : d,
            p = e.previewTextPlaceholder,
            m =
              void 0 === p
                ? null == r
                  ? void 0
                  : r.previewTextPlaceholder
                : p,
            h = function (e) {
              return Formily.Vue.h(
                _e.Placeholder,
                { props: { value: m } },
                {
                  default: function () {
                    return [
                      Formily.Vue.h(
                        te,
                        { attrs: t({}, o) },
                        {
                          default: function () {
                            return [
                              Formily.Vue.h(
                                l,
                                {
                                  on: {
                                    submit: function (t) {
                                      var n, o
                                      null ===
                                        (n =
                                          null == t
                                            ? void 0
                                            : t.stopPropagation) ||
                                        void 0 === n ||
                                        n.call(t),
                                        null ===
                                          (o =
                                            null == t
                                              ? void 0
                                              : t.preventDefault) ||
                                          void 0 === o ||
                                          o.call(t),
                                        e.submit(c).catch(f)
                                    },
                                  },
                                },
                                r
                              ),
                            ]
                          },
                        }
                      ),
                    ]
                  },
                }
              )
            }
          if (n)
            return Formily.Vue.h(
              Ye,
              { props: { form: n } },
              {
                default: function () {
                  return h(n)
                },
              }
            )
          if (!a.value) throw new Error('must pass form instance by createForm')
          return h(a.value)
        }
      },
    }),
    Je = (function () {
      if ('undefined' != typeof Map) return Map
      function e(e, t) {
        var n = -1
        return (
          e.some(function (e, o) {
            return e[0] === t && ((n = o), !0)
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
              o = this.__entries__[n]
            return o && o[1]
          }),
          (t.prototype.set = function (t, n) {
            var o = e(this.__entries__, t)
            ~o ? (this.__entries__[o][1] = n) : this.__entries__.push([t, n])
          }),
          (t.prototype.delete = function (t) {
            var n = this.__entries__,
              o = e(n, t)
            ~o && n.splice(o, 1)
          }),
          (t.prototype.has = function (t) {
            return !!~e(this.__entries__, t)
          }),
          (t.prototype.clear = function () {
            this.__entries__.splice(0)
          }),
          (t.prototype.forEach = function (e, t) {
            void 0 === t && (t = null)
            for (var n = 0, o = this.__entries__; n < o.length; n++) {
              var r = o[n]
              e.call(t, r[1], r[0])
            }
          }),
          t
        )
      })()
    })(),
    Xe =
      'undefined' != typeof window &&
      'undefined' != typeof document &&
      window.document === document,
    Qe =
      'undefined' != typeof global && global.Math === Math
        ? global
        : 'undefined' != typeof self && self.Math === Math
        ? self
        : 'undefined' != typeof window && window.Math === Math
        ? window
        : Function('return this')(),
    et =
      'function' == typeof requestAnimationFrame
        ? requestAnimationFrame.bind(Qe)
        : function (e) {
            return setTimeout(function () {
              return e(Date.now())
            }, 1e3 / 60)
          }
  var tt = [
      'top',
      'right',
      'bottom',
      'left',
      'width',
      'height',
      'size',
      'weight',
    ],
    nt = 'undefined' != typeof MutationObserver,
    ot = (function () {
      function e() {
        ;(this.connected_ = !1),
          (this.mutationEventsAdded_ = !1),
          (this.mutationsObserver_ = null),
          (this.observers_ = []),
          (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
          (this.refresh = (function (e, t) {
            var n = !1,
              o = !1,
              r = 0
            function i() {
              n && ((n = !1), e()), o && u()
            }
            function a() {
              et(i)
            }
            function u() {
              var e = Date.now()
              if (n) {
                if (e - r < 2) return
                o = !0
              } else (n = !0), (o = !1), setTimeout(a, t)
              r = e
            }
            return u
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
          Xe &&
            !this.connected_ &&
            (document.addEventListener('transitionend', this.onTransitionEnd_),
            window.addEventListener('resize', this.refresh),
            nt
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
          Xe &&
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
          tt.some(function (e) {
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
    rt = function (e, t) {
      for (var n = 0, o = Object.keys(t); n < o.length; n++) {
        var r = o[n]
        Object.defineProperty(e, r, {
          value: t[r],
          enumerable: !1,
          writable: !1,
          configurable: !0,
        })
      }
      return e
    },
    it = function (e) {
      return (e && e.ownerDocument && e.ownerDocument.defaultView) || Qe
    },
    at = ft(0, 0, 0, 0)
  function ut(e) {
    return parseFloat(e) || 0
  }
  function lt(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
    return t.reduce(function (t, n) {
      return t + ut(e['border-' + n + '-width'])
    }, 0)
  }
  function st(e) {
    var t = e.clientWidth,
      n = e.clientHeight
    if (!t && !n) return at
    var o = it(e).getComputedStyle(e),
      r = (function (e) {
        for (
          var t = {}, n = 0, o = ['top', 'right', 'bottom', 'left'];
          n < o.length;
          n++
        ) {
          var r = o[n],
            i = e['padding-' + r]
          t[r] = ut(i)
        }
        return t
      })(o),
      i = r.left + r.right,
      a = r.top + r.bottom,
      u = ut(o.width),
      l = ut(o.height)
    if (
      ('border-box' === o.boxSizing &&
        (Math.round(u + i) !== t && (u -= lt(o, 'left', 'right') + i),
        Math.round(l + a) !== n && (l -= lt(o, 'top', 'bottom') + a)),
      !(function (e) {
        return e === it(e).document.documentElement
      })(e))
    ) {
      var s = Math.round(u + i) - t,
        c = Math.round(l + a) - n
      1 !== Math.abs(s) && (u -= s), 1 !== Math.abs(c) && (l -= c)
    }
    return ft(r.left, r.top, u, l)
  }
  var ct =
    'undefined' != typeof SVGGraphicsElement
      ? function (e) {
          return e instanceof it(e).SVGGraphicsElement
        }
      : function (e) {
          return e instanceof it(e).SVGElement && 'function' == typeof e.getBBox
        }
  function dt(e) {
    return Xe
      ? ct(e)
        ? (function (e) {
            var t = e.getBBox()
            return ft(0, 0, t.width, t.height)
          })(e)
        : st(e)
      : at
  }
  function ft(e, t, n, o) {
    return { x: e, y: t, width: n, height: o }
  }
  var pt = (function () {
      function e(e) {
        ;(this.broadcastWidth = 0),
          (this.broadcastHeight = 0),
          (this.contentRect_ = ft(0, 0, 0, 0)),
          (this.target = e)
      }
      return (
        (e.prototype.isActive = function () {
          var e = dt(this.target)
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
    mt = function (e, t) {
      var n,
        o,
        r,
        i,
        a,
        u,
        l,
        s =
          ((o = (n = t).x),
          (r = n.y),
          (i = n.width),
          (a = n.height),
          (u =
            'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
          (l = Object.create(u.prototype)),
          rt(l, {
            x: o,
            y: r,
            width: i,
            height: a,
            top: r,
            right: o + i,
            bottom: a + r,
            left: o,
          }),
          l)
      rt(this, { target: e, contentRect: s })
    },
    ht = (function () {
      function e(e, t, n) {
        if (
          ((this.activeObservations_ = []),
          (this.observations_ = new Je()),
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
            if (!(e instanceof it(e).Element))
              throw new TypeError('parameter 1 is not of type "Element".')
            var t = this.observations_
            t.has(e) ||
              (t.set(e, new pt(e)),
              this.controller_.addObserver(this),
              this.controller_.refresh())
          }
        }),
        (e.prototype.unobserve = function (e) {
          if (!arguments.length)
            throw new TypeError('1 argument required, but only 0 present.')
          if ('undefined' != typeof Element && Element instanceof Object) {
            if (!(e instanceof it(e).Element))
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
                return new mt(e.target, e.broadcastRect())
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
    vt = 'undefined' != typeof WeakMap ? new WeakMap() : new Je(),
    yt = function e(t) {
      if (!(this instanceof e))
        throw new TypeError('Cannot call a class as a function.')
      if (!arguments.length)
        throw new TypeError('1 argument required, but only 0 present.')
      var n = ot.getInstance(),
        o = new ht(t, n, this)
      vt.set(this, o)
    }
  ;['observe', 'unobserve', 'disconnect'].forEach(function (e) {
    yt.prototype[e] = function () {
      var t
      return (t = vt.get(this))[e].apply(t, arguments)
    }
  })
  var gt = void 0 !== Qe.ResizeObserver ? Qe.ResizeObserver : yt,
    bt = {
      error: function () {
        return Formily.Vue.h('i', { class: 'el-icon-circle-close' }, {})
      },
      success: function () {
        return Formily.Vue.h('i', { class: 'el-icon-circle-check' }, {})
      },
      warning: function () {
        return Formily.Vue.h('i', { class: 'el-icon-warning-outline' }, {})
      },
    },
    Ft = VueCompositionAPI.defineComponent({
      name: 'FormItem',
      props: {
        className: {},
        required: {},
        label: {},
        colon: {},
        layout: {},
        tooltip: {},
        labelStyle: {},
        labelAlign: {},
        labelWrap: {},
        labelWidth: {},
        wrapperWidth: {},
        labelCol: {},
        wrapperCol: {},
        wrapperAlign: {},
        wrapperWrap: {},
        wrapperStyle: {},
        fullness: {},
        addonBefore: {},
        addonAfter: {},
        size: {},
        extra: {},
        feedbackText: {},
        feedbackLayout: {},
        tooltipLayout: {},
        feedbackStatus: {},
        feedbackIcon: {},
        asterisk: {},
        gridSpan: {},
        bordered: { default: !0 },
        inset: { default: !1 },
      },
      setup: function (e, n) {
        var o = n.slots
        n.attrs
        var r = n.refs,
          a = VueCompositionAPI.ref(!1),
          u = ee(),
          l = ''.concat(i, '-form-item'),
          s = VueCompositionAPI.ref(null),
          c = (function (e) {
            var t,
              n = VueCompositionAPI.ref(!1),
              o = function () {
                t && (t.unobserve(e.value), (t = null))
              },
              r = function () {
                var t = e.value,
                  o = t.querySelector('label'),
                  r = t.getBoundingClientRect().width,
                  i = null == o ? void 0 : o.getBoundingClientRect().width
                0 !== r && (n.value = i > r)
              },
              i = VueCompositionAPI.watch(
                function () {
                  return e.value
                },
                function (e) {
                  o(), e && (t = new gt(r)).observe(e)
                },
                { immediate: !0, flush: 'post' }
              )
            return (
              VueCompositionAPI.onBeforeUnmount(function () {
                o(), i()
              }),
              n
            )
          })(s)
        return (
          VueCompositionAPI.onMounted(function () {
            s.value = r.labelContainer
          }),
          VueCompositionAPI.provide(J, VueCompositionAPI.ref(null)),
          function () {
            var n,
              r,
              i,
              s,
              d,
              f,
              p,
              m,
              h,
              v,
              y,
              g,
              b,
              F,
              V,
              C = u.value,
              w = e.label,
              x = e.colon,
              A =
                void 0 === x ? null === (d = C.colon) || void 0 === d || d : x,
              P = e.layout,
              S =
                void 0 === P
                  ? null !== (f = C.layout) && void 0 !== f
                    ? f
                    : 'horizontal'
                  : P,
              O = e.tooltip,
              k = e.labelStyle,
              T = void 0 === k ? {} : k,
              M = e.labelWrap,
              E =
                void 0 === M
                  ? null !== (p = C.labelWrap) && void 0 !== p && p
                  : M,
              R = e.labelWidth,
              D = void 0 === R ? C.labelWidth : R,
              _ = e.wrapperWidth,
              j = void 0 === _ ? C.wrapperWidth : _,
              B = e.labelCol,
              N = void 0 === B ? C.labelCol : B,
              W = e.wrapperCol,
              $ = void 0 === W ? C.wrapperCol : W,
              L = e.wrapperAlign,
              G =
                void 0 === L
                  ? null !== (m = C.wrapperAlign) && void 0 !== m
                    ? m
                    : 'left'
                  : L,
              z = e.wrapperWrap,
              H = void 0 === z ? C.wrapperWrap : z,
              K = e.wrapperStyle,
              U = void 0 === K ? {} : K,
              q = e.fullness,
              Y = void 0 === q ? C.fullness : q,
              Z = e.addonBefore,
              J = e.addonAfter,
              X = e.size,
              Q = void 0 === X ? C.size : X,
              ee = e.extra,
              te = e.feedbackText,
              ne = e.feedbackLayout,
              oe =
                void 0 === ne
                  ? null !== (h = C.feedbackLayout) && void 0 !== h
                    ? h
                    : 'loose'
                  : ne,
              re = e.tooltipLayout,
              ie =
                void 0 === re
                  ? null !== (v = C.tooltipLayout) && void 0 !== v
                    ? v
                    : 'icon'
                  : re,
              ae = e.feedbackStatus,
              ue = e.feedbackIcon,
              le = e.asterisk,
              se = e.bordered,
              ce = void 0 === se ? C.bordered : se,
              de = e.inset,
              fe = void 0 === de ? C.inset : de,
              pe =
                'vertical' === C.layout
                  ? null !==
                      (g =
                        null !== (y = e.labelAlign) && void 0 !== y
                          ? y
                          : C.labelAlign) && void 0 !== g
                    ? g
                    : 'left'
                  : null !==
                      (F =
                        null !== (b = e.labelAlign) && void 0 !== b
                          ? b
                          : C.labelAlign) && void 0 !== F
                  ? F
                  : 'right',
              me = !1
            D || j
              ? (D &&
                  ((T.width = ''.concat(D, 'px')),
                  (T.maxWidth = ''.concat(D, 'px'))),
                j &&
                  ((U.width = ''.concat(j, 'px')),
                  (U.maxWidth = ''.concat(j, 'px'))))
              : (N || $) && (me = !0)
            var he =
                'popover' === oe
                  ? Formily.Vue.h(
                      'el-popover',
                      { props: { disabled: !te, placement: 'top' } },
                      {
                        reference: function () {
                          return Formily.Vue.h(
                            'div',
                            {},
                            {
                              default: function () {
                                var e
                                return null === (e = o.default) || void 0 === e
                                  ? void 0
                                  : e.call(o)
                              },
                            }
                          )
                        },
                        default: function () {
                          var e
                          return [
                            Formily.Vue.h(
                              'div',
                              {
                                class:
                                  ((e = {}),
                                  (e[''.concat(l, '-').concat(ae, '-help')] =
                                    !!ae),
                                  (e[''.concat(l, '-help')] = !0),
                                  e),
                              },
                              {
                                default: function () {
                                  return [
                                    ae &&
                                    ['error', 'success', 'warning'].includes(ae)
                                      ? bt[ae]()
                                      : '',
                                    I(te),
                                  ]
                                },
                              }
                            ),
                          ]
                        },
                      }
                    )
                  : null === (V = o.default) || void 0 === V
                  ? void 0
                  : V.call(o),
              ve = function () {
                if (O && 'icon' === ie)
                  return Formily.Vue.h(
                    'span',
                    { class: ''.concat(l, '-label-tooltip') },
                    {
                      default: function () {
                        return [
                          Formily.Vue.h(
                            Element.Tooltip,
                            { props: { placement: 'top' } },
                            {
                              default: function () {
                                return [
                                  Formily.Vue.h(
                                    'i',
                                    { class: 'el-icon-info' },
                                    {}
                                  ),
                                ]
                              },
                              content: function () {
                                return Formily.Vue.h(
                                  'div',
                                  {
                                    class: ''.concat(
                                      l,
                                      '-label-tooltip-content'
                                    ),
                                  },
                                  {
                                    default: function () {
                                      return [I(O)]
                                    },
                                  }
                                )
                              },
                            }
                          ),
                        ]
                      },
                    }
                  )
              },
              ye =
                w &&
                Formily.Vue.h(
                  'div',
                  {
                    class:
                      ((n = {}),
                      (n[''.concat(l, '-label')] = !0),
                      (n[''.concat(l, '-label-tooltip')] =
                        (O && 'text' === ie) || c.value),
                      (n[''.concat(l, '-item-col-').concat(N)] = me && !!N),
                      n),
                    style: T,
                  },
                  {
                    default: function () {
                      return [
                        ((e = Formily.Vue.h(
                          'div',
                          {
                            class: ''.concat(l, '-label-content'),
                            ref: 'labelContainer',
                          },
                          {
                            default: function () {
                              return [
                                le &&
                                  Formily.Vue.h(
                                    'span',
                                    { class: ''.concat(l, '-asterisk') },
                                    {
                                      default: function () {
                                        return ['*']
                                      },
                                    }
                                  ),
                                Formily.Vue.h(
                                  'label',
                                  {},
                                  {
                                    default: function () {
                                      return [I(w)]
                                    },
                                  }
                                ),
                              ]
                            },
                          }
                        )),
                        (t = O && 'text' === ie),
                        t || c.value
                          ? Formily.Vue.h(
                              Element.Tooltip,
                              { props: { placement: 'top' } },
                              {
                                default: function () {
                                  return [e]
                                },
                                content: function () {
                                  return Formily.Vue.h(
                                    'div',
                                    {},
                                    {
                                      default: function () {
                                        return [c.value && I(w), t && I(O)]
                                      },
                                    }
                                  )
                                },
                              }
                            )
                          : e),
                        ve(),
                        w &&
                          Formily.Vue.h(
                            'span',
                            { class: ''.concat(l, '-colon') },
                            {
                              default: function () {
                                return [A ? ':' : '']
                              },
                            }
                          ),
                      ]
                      var e, t
                    },
                  }
                ),
              ge =
                !!te &&
                'popover' !== oe &&
                'none' !== oe &&
                Formily.Vue.h(
                  'div',
                  {
                    class:
                      ((r = {}),
                      (r[''.concat(l, '-').concat(ae, '-help')] = !!ae),
                      (r[''.concat(l, '-help')] = !0),
                      (r[''.concat(l, '-help-enter')] = !0),
                      (r[''.concat(l, '-help-enter-active')] = !0),
                      r),
                  },
                  {
                    default: function () {
                      return [I(te)]
                    },
                  }
                ),
              be =
                ee &&
                Formily.Vue.h(
                  'div',
                  { class: ''.concat(l, '-extra') },
                  {
                    default: function () {
                      return [ee]
                    },
                  }
                ),
              Fe = Formily.Vue.h(
                'div',
                {
                  class:
                    ((i = {}),
                    (i[''.concat(l, '-control')] = !0),
                    (i[''.concat(l, '-item-col-').concat($)] = me && !!$),
                    i),
                },
                {
                  default: function () {
                    return [
                      Formily.Vue.h(
                        'div',
                        { class: ''.concat(l, '-control-content') },
                        {
                          default: function () {
                            var e
                            return [
                              Z &&
                                Formily.Vue.h(
                                  'div',
                                  { class: ''.concat(l, '-addon-before') },
                                  {
                                    default: function () {
                                      return [I(Z)]
                                    },
                                  }
                                ),
                              Formily.Vue.h(
                                'div',
                                {
                                  class:
                                    ((e = {}),
                                    (e[
                                      ''.concat(l, '-control-content-component')
                                    ] = !0),
                                    (e[
                                      ''.concat(
                                        l,
                                        '-control-content-component-has-feedback-icon'
                                      )
                                    ] = !!ue),
                                    e),
                                  style: U,
                                },
                                {
                                  default: function () {
                                    return [
                                      he,
                                      ue &&
                                        Formily.Vue.h(
                                          'div',
                                          {
                                            class: ''.concat(
                                              l,
                                              '-feedback-icon'
                                            ),
                                          },
                                          {
                                            default: function () {
                                              return [
                                                'string' == typeof ue
                                                  ? Formily.Vue.h(
                                                      'i',
                                                      { class: ue },
                                                      {}
                                                    )
                                                  : I(ue),
                                              ]
                                            },
                                          }
                                        ),
                                    ]
                                  },
                                }
                              ),
                              J &&
                                Formily.Vue.h(
                                  'div',
                                  { class: ''.concat(l, '-addon-after') },
                                  {
                                    default: function () {
                                      return [I(J)]
                                    },
                                  }
                                ),
                            ]
                          },
                        }
                      ),
                      ge,
                      be,
                    ]
                  },
                }
              )
            return Formily.Vue.h(
              'div',
              {
                style: t({}, {}),
                attrs: { 'data-grid-span': e.gridSpan },
                class:
                  ((s = {}),
                  (s[''.concat(l)] = !0),
                  (s[''.concat(l, '-layout-').concat(S)] = !0),
                  (s[''.concat(l, '-').concat(ae)] = !!ae),
                  (s[''.concat(l, '-feedback-has-text')] = !!te),
                  (s[''.concat(l, '-size-').concat(Q)] = !!Q),
                  (s[''.concat(l, '-feedback-layout-').concat(oe)] = !!oe),
                  (s[''.concat(l, '-fullness')] = !!Y || !!fe || !!ue),
                  (s[''.concat(l, '-inset')] = !!fe),
                  (s[''.concat(l, '-active')] = a.value),
                  (s[''.concat(l, '-inset-active')] = !!fe && a.value),
                  (s[''.concat(l, '-label-align-').concat(pe)] = !0),
                  (s[''.concat(l, '-control-align-').concat(G)] = !0),
                  (s[''.concat(l, '-label-wrap')] = !!E),
                  (s[''.concat(l, '-control-wrap')] = !!H),
                  (s[''.concat(l, '-bordered-none')] =
                    !1 === ce || !!fe || !!ue),
                  (s[''.concat(e.className)] = !!e.className),
                  s),
                on: {
                  '!focus': function () {
                    ;(ue || fe) && (a.value = !0)
                  },
                  '!blur': function () {
                    ;(ue || fe) && (a.value = !1)
                  },
                },
              },
              {
                default: function () {
                  return [ye, Fe]
                },
              }
            )
          }
        )
      },
    }),
    Vt = Formily.Vue.connect(
      Ft,
      Formily.Vue.mapProps(
        { validateStatus: !0, title: 'label', required: !0 },
        function (e, t) {
          if (Formily.Core.isVoidField(t)) return e
          if (!t) return e
          var n = (function () {
            var n = function (e) {
              return e.reduce(function (t, n, o) {
                return n
                  ? o < e.length - 1
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
          })()
          return {
            feedbackText: Array.isArray(n) ? n.join(', ') : n,
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
                    : (Array.isArray(t.decorator) &&
                        (null === (n = t.decorator[1]) || void 0 === n
                          ? void 0
                          : n.feedbackStatus)) ||
                      t.validateStatus,
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
    ),
    Ct = S(Vt, { BaseItem: Ft }),
    wt = VueCompositionAPI.defineComponent({
      name: 'FFormButtonGroup',
      props: {
        align: { type: String, default: 'left' },
        gutter: { type: Number, default: 8 },
        alignFormItem: { type: Boolean, default: !1 },
      },
      setup: function (e, n) {
        var o = n.slots,
          r = n.attrs,
          a = ''.concat(i, '-form-button-group')
        return function () {
          return e.alignFormItem
            ? Formily.Vue.h(
                Ft,
                {
                  style: { margin: 0, padding: 0, width: '100%' },
                  attrs: t({ colon: !1, label: ' ' }, r),
                },
                {
                  default: function () {
                    return Formily.Vue.h(oe, { props: { size: e.gutter } }, o)
                  },
                }
              )
            : Formily.Vue.h(
                oe,
                {
                  class: [a],
                  style: {
                    justifyContent:
                      'left' === e.align
                        ? 'flex-start'
                        : 'right' === e.align
                        ? 'flex-end'
                        : 'center',
                    display: 'flex',
                  },
                  props: t(t({}, r), { size: e.gutter }),
                  attrs: r,
                },
                o
              )
        }
      },
    }),
    xt = function () {
      return (
        (xt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, o = arguments.length; n < o; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            return e
          }),
        xt.apply(this, arguments)
      )
    },
    At = function (e) {
      return 1 === e.nodeType
    },
    Pt = (function () {
      function e(e) {
        var t = this
        ;(this.childList = []),
          (this.handler = function (e) {
            e.forEach(function (e) {
              'childList' === e.type &&
                (e.addedNodes.forEach(function (e) {
                  At(e) && t.addObserver(e)
                }),
                e.removedNodes.forEach(function (e) {
                  At(e) && t.removeObserver(e)
                }))
            }),
              t.callback(e, t.observer)
          }),
          (this.observe = function (e, n) {
            ;(t.init = n),
              t.observeChildList(e),
              t.observer.observe(
                e,
                xt(xt({}, t.init), {
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
          var t = this,
            n = this.childList.find(function (t) {
              return t.element === e
            })
          if (!n) {
            var o = this.childList.length,
              r = {
                element: e,
                observer: new MutationObserver(this.callback),
                dispose: function () {
                  r.observer &&
                    (r.observer.disconnect(),
                    delete r.observer,
                    t.childList.splice(o, 1))
                },
              }
            r.observer.observe(
              r.element,
              xt(xt({}, this.init), {
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
    St = function () {
      return (
        (St =
          Object.assign ||
          function (e) {
            for (var t, n = 1, o = arguments.length; n < o; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            return e
          }),
        St.apply(this, arguments)
      )
    },
    It = function (e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator]
      if (!n) return e
      var o,
        r,
        i = n.call(e),
        a = []
      try {
        for (; (void 0 === t || t-- > 0) && !(o = i.next()).done; )
          a.push(o.value)
      } catch (e) {
        r = { error: e }
      } finally {
        try {
          o && !o.done && (n = i.return) && n.call(i)
        } finally {
          if (r) throw r.error
        }
      }
      return a
    },
    Ot = function (e, t, n) {
      if (n || 2 === arguments.length)
        for (var o, r = 0, i = t.length; r < i; r++)
          (!o && r in t) ||
            (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]))
      return e.concat(o || Array.prototype.slice.call(t))
    },
    kt = /span\s*(\d+)/,
    Tt = function (e, t) {
      return (
        void 0 === t && (t = !1),
        e.reduce(function (e, n) {
          var o
          return t || n.visible
            ? -1 === n.originSpan
              ? e + (null !== (o = n.span) && void 0 !== o ? o : 1)
              : e + n.span
            : e
        }, 0)
      )
    },
    Mt = function (e, t) {
      return (
        void 0 === t && (t = !1),
        e.reduce(function (e, n) {
          var o
          return t || n.visible
            ? -1 === n.originSpan
              ? e + (null !== (o = n.span) && void 0 !== o ? o : 1)
              : e + n.originSpan
            : e
        }, 0)
      )
    },
    Et = function (e) {
      var t, n
      return Number(
        null !==
          (n =
            null === (t = String(e).match(kt)) || void 0 === t
              ? void 0
              : t[1]) && void 0 !== n
          ? n
          : 1
      )
    },
    Rt = function (e, t) {
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
    Dt = function (e) {
      return Promise.resolve(0).then(e)
    },
    _t = (function () {
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
                  o(), (t.ready = !0)
                }),
                o = Formily.Reactive.batch.bound(function () {
                  var e
                  ;(t.children =
                    ((e = t.container.children),
                    Array.from(e).reduce(function (e, t, n) {
                      var o,
                        r = getComputedStyle(t),
                        i = !('none' === r.display),
                        a = t.getAttribute('data-grid-span'),
                        u =
                          null !== (o = Et(r.gridColumnStart)) && void 0 !== o
                            ? o
                            : 1,
                        l = {
                          index: n,
                          span: u,
                          visible: i,
                          originSpan: Number(null != a ? a : u),
                          element: t,
                        }
                      return (
                        a || t.setAttribute('data-grid-span', String(u)),
                        e.concat(l)
                      )
                    }, []))),
                    (t.childTotalColumns = Tt(t.children)),
                    (t.shadowChildTotalColumns = Tt(t.children, !0)),
                    (t.childOriginTotalColumns = Mt(t.children)),
                    (t.shadowChildOriginTotalColumns = Mt(t.children, !0))
                  var n,
                    o,
                    r,
                    i,
                    a,
                    u = t.container.getBoundingClientRect()
                  u.width &&
                    u.height &&
                    ((t.width = u.width), (t.height = u.height)),
                    (o = 0),
                    (r = 0),
                    (i = 0),
                    (a = 0),
                    (n = t).ready &&
                      (n.children = n.children.map(function (e) {
                        var t,
                          u = o % n.columns,
                          l = r % n.columns,
                          s = n.columns - u,
                          c = e.originSpan,
                          d = c > n.columns ? n.columns : c,
                          f = n.options.strictAutoFit ? d : d > s ? s : d,
                          p =
                            -1 === c
                              ? 'span '.concat(s, ' / -1')
                              : 'span '.concat(f, ' / auto')
                        return (
                          e.element.style.gridColumn !== p &&
                            (e.element.style.gridColumn = p),
                          e.visible && (o += f),
                          (r += f),
                          0 === u && i++,
                          0 == l && a++,
                          (e.shadowRow = a),
                          (e.shadowColumn = l + 1),
                          e.visible && ((e.row = i), (e.column = u + 1)),
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
                    Dt(function () {
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
                      Dt(function () {
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
                r = new Pt(o),
                i = new ResizeObserver(o),
                a = Formily.Reactive.reaction(function () {
                  return St({}, t.options)
                }, o)
              return (
                i.observe(t.container),
                r.observe(t.container, {
                  attributeFilter: ['style', 'class', 'data-grid-span'],
                  attributes: !0,
                }),
                n(),
                function () {
                  i.unobserve(t.container),
                    i.disconnect(),
                    r.disconnect(),
                    a(),
                    (t.children = [])
                }
              )
            }
            return function () {}
          }),
          (this.options = St(
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
            return null !== (e = Rt(this.options.maxWidth, this)) &&
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
            return null !== (e = Rt(this.options.minWidth, this)) &&
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
            return null !== (e = Rt(this.options.maxColumns, this)) &&
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
            return null !== (e = Rt(this.options.minColumns, this)) &&
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
            return null !== (e = Rt(this.options.rowGap, this)) && void 0 !== e
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
            return null !== (e = Rt(this.options.columnGap, this)) &&
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
              null === (e = Rt(this.options.colWrap, this)) || void 0 === e || e
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
              o = Math.min(
                e,
                Math.round(this.width / (this.minWidth + this.columnGap))
              ),
              r = Math.min(t, n, o),
              i = Math.max(t, n, o),
              a = (function (e, t, n, o, r, i) {
                for (var a = [], u = n; u <= t; u++) {
                  var l = e - (u - 1) * i,
                    s = l / u
                  s >= r && s <= o
                    ? a.push(u)
                    : s < r
                    ? a.push(Math.min(Math.floor(l / r), t))
                    : s > o && a.push(Math.min(Math.floor(l / o), t))
                }
                return Math.max.apply(Math, Ot([], It(a), !1))
              })(this.width, i, r, this.maxWidth, this.minWidth, this.columnGap)
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
    jt = Symbol('FormGridContext'),
    Bt = function (e) {
      return Formily.Reactive.markRaw(new _t(e))
    },
    Nt = function () {
      return VueCompositionAPI.inject(jt)
    },
    Wt = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        name: 'FFormGrid',
        props: {
          columnGap: { type: Number },
          rowGap: { type: Number },
          minColumns: { type: [Number, Array] },
          minWidth: { type: [Number, Array] },
          maxColumns: { type: [Number, Array] },
          maxWidth: { type: [Number, Array] },
          breakpoints: { type: Array },
          colWrap: { type: Boolean, default: !0 },
          strictAutoFit: { type: Boolean, default: !1 },
          shouldVisible: {
            type: Function,
            default: function () {
              return function () {
                return !0
              }
            },
          },
          grid: { type: Object },
        },
        setup: function (e) {
          var n = ee(),
            o = VueCompositionAPI.computed(function () {
              var o,
                r,
                i,
                a,
                u = {}
              Object.keys(e).forEach(function (t) {
                void 0 !== e[t] && (u[t] = e[t])
              })
              var l = t(
                {
                  columnGap:
                    null !==
                      (r =
                        null === (o = n.value) || void 0 === o
                          ? void 0
                          : o.gridColumnGap) && void 0 !== r
                      ? r
                      : 8,
                  rowGap:
                    null !==
                      (a =
                        null === (i = n.value) || void 0 === i
                          ? void 0
                          : i.gridRowGap) && void 0 !== a
                      ? a
                      : 4,
                },
                u
              )
              return Formily.Reactive.markRaw(
                (null == l ? void 0 : l.grid) ? l.grid : new _t(l)
              )
            }),
            r = ''.concat(i, '-form-grid'),
            a = VueCompositionAPI.ref(null)
          return (
            VueCompositionAPI.provide(jt, o),
            VueCompositionAPI.onMounted(function () {
              VueCompositionAPI.watchEffect(function (e) {
                var t = o.value.connect(a.value)
                e(function () {
                  t()
                })
              })
            }),
            { prefixCls: r, root: a, gridInstance: o }
          )
        },
        render: function () {
          var e = this,
            t = this.prefixCls,
            n = this.gridInstance
          return Formily.Vue.h(
            'div',
            {
              attrs: { class: ''.concat(t) },
              style: { gridTemplateColumns: n.templateColumns, gap: n.gap },
              ref: 'root',
            },
            {
              default: function () {
                return e.$slots.default
              },
            }
          )
        },
      })
    ),
    $t = S(Wt, {
      GridColumn: Formily.ReactiveVue.observer(
        VueCompositionAPI.defineComponent({
          name: 'FFormGridColumn',
          props: { gridSpan: { type: Number, default: 1 } },
          setup: function (e, t) {
            var n = t.slots
            return function () {
              return Formily.Vue.h(
                'div',
                { attrs: { 'data-grid-span': e.gridSpan } },
                n
              )
            }
          },
        })
      ),
      useGridSpan: function (e) {
        return e
      },
      useFormGrid: Nt,
      createFormGrid: Bt,
    }),
    Lt = A(Element.Input, { change: 'input' }),
    Gt = Formily.Vue.connect(
      Lt,
      Formily.Vue.mapProps({ readOnly: 'readonly' }),
      Formily.Vue.mapReadPretty(_e.Input)
    ),
    zt = S(Gt, {
      TextArea: Formily.Vue.connect(
        Gt,
        Formily.Vue.mapProps(function (e) {
          return t(t({}, e), { type: 'textarea' })
        }),
        Formily.Vue.mapReadPretty(_e.Input)
      ),
    }),
    Ht = A(Element.InputNumber, { change: 'input' }),
    Kt = Formily.Vue.connect(
      Ht,
      Formily.Vue.mapProps({ readOnly: 'readonly' }, function (e) {
        var t = 'right'
        return (
          e.controlsPosition && (t = e.controlsPosition),
          { controlsPosition: t }
        )
      }),
      Formily.Vue.mapReadPretty(_e.Input)
    ),
    Ut = Formily.Vue.connect(
      zt,
      Formily.Vue.mapProps(function (e) {
        return t(t({}, e), { showPassword: !0 })
      }),
      Formily.Vue.mapReadPretty(_e.Input)
    ),
    qt = A(Element.RadioGroup, { change: 'input' }),
    Yt = VueCompositionAPI.defineComponent({
      name: 'FRadioGroup',
      props: {
        options: {
          type: Array,
          default: function () {
            return []
          },
        },
        optionType: { type: String, default: 'default' },
      },
      setup: function (e, n) {
        var o = n.attrs,
          r = n.slots,
          i = n.listeners
        return function () {
          var n = e.options || [],
            a = 'button' === e.optionType ? Element.RadioButton : Element.Radio,
            u =
              0 !== n.length
                ? {
                    default: function () {
                      return n.map(function (e) {
                        return 'string' == typeof e
                          ? Formily.Vue.h(
                              a,
                              { props: { label: e } },
                              {
                                default: function () {
                                  var t
                                  return [
                                    I(
                                      null !==
                                        (t = null == r ? void 0 : r.option) &&
                                        void 0 !== t
                                        ? t
                                        : e,
                                      { option: e }
                                    ),
                                  ]
                                },
                              }
                            )
                          : Formily.Vue.h(
                              a,
                              {
                                props: t(t({}, e), {
                                  value: void 0,
                                  label: e.value,
                                }),
                              },
                              {
                                default: function () {
                                  var t
                                  return [
                                    I(
                                      null !==
                                        (t = null == r ? void 0 : r.option) &&
                                        void 0 !== t
                                        ? t
                                        : e.label,
                                      { option: e }
                                    ),
                                  ]
                                },
                              }
                            )
                      })
                    },
                  }
                : r
          return Formily.Vue.h(qt, { attrs: t({}, o), on: i }, u)
        }
      },
    }),
    Zt = Formily.Vue.connect(
      Yt,
      Formily.Vue.mapProps({ dataSource: 'options' }),
      Formily.Vue.mapReadPretty(_e.Select)
    ),
    Jt = S(Element.Radio, { Group: Zt }),
    Xt = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        name: 'FReset',
        props: {
          forceClear: { type: Boolean, default: !1 },
          validate: { type: Boolean, default: !1 },
        },
        setup: function (e, n) {
          var o = Formily.Vue.useParentForm(),
            r = n.listeners,
            i = n.slots
          return function () {
            var a = null == o ? void 0 : o.value
            return Formily.Vue.h(
              Element.Button,
              {
                attrs: n.attrs,
                on: t(t({}, r), {
                  click: function (t) {
                    ;((null == r ? void 0 : r.click) && !1 === r.click(t)) ||
                      null == a ||
                      a
                        .reset('*', {
                          forceClear: e.forceClear,
                          validate: e.validate,
                        })
                        .then(r.resetValidateSuccess)
                        .catch(r.resetValidateFailed)
                  },
                }),
              },
              i
            )
          }
        },
      })
    ),
    Qt = VueCompositionAPI.defineComponent({
      name: 'FSelect',
      props: ['options'],
      setup: function (e, n) {
        var o = n.attrs,
          r = n.slots,
          i = n.listeners
        return function () {
          var n = e.options || [],
            a =
              0 !== n.length
                ? {
                    default: function () {
                      return n.map(function (e) {
                        return 'string' == typeof e
                          ? Formily.Vue.h(
                              Element.Option,
                              { props: { value: e, label: e } },
                              {
                                default: function () {
                                  return [
                                    I(null == r ? void 0 : r.option, {
                                      option: e,
                                    }),
                                  ]
                                },
                              }
                            )
                          : Formily.Vue.h(
                              Element.Option,
                              { props: t({}, e) },
                              {
                                default: function () {
                                  return [
                                    I(null == r ? void 0 : r.option, {
                                      option: e,
                                    }),
                                  ]
                                },
                              }
                            )
                      })
                    },
                  }
                : r
          return Formily.Vue.h(Element.Select, { attrs: t({}, o), on: i }, a)
        }
      },
    }),
    en = Formily.Vue.connect(
      Qt,
      Formily.Vue.mapProps({ dataSource: 'options', loading: !0 }),
      Formily.Vue.mapReadPretty(_e.Select)
    ),
    tn = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        name: 'FSubmit',
        props: ['onClick', 'onSubmit', 'onSubmitSuccess', 'onSubmitFailed'],
        setup: function (e, n) {
          var o = n.attrs,
            r = n.slots,
            i = n.listeners,
            a = Formily.Vue.useParentForm()
          return function () {
            var n = e.onClick,
              u = void 0 === n ? (null == i ? void 0 : i.click) : n,
              l = e.onSubmit,
              s = void 0 === l ? (null == i ? void 0 : i.submit) : l,
              c = e.onSubmitSuccess,
              d = void 0 === c ? (null == i ? void 0 : i.submitSuccess) : c,
              f = e.onSubmitFailed,
              p = void 0 === f ? (null == i ? void 0 : i.submitFailed) : f,
              m = null == a ? void 0 : a.value
            return Formily.Vue.h(
              Element.Button,
              {
                attrs: t(
                  t(
                    {
                      nativeType: (null == i ? void 0 : i.submit)
                        ? 'button'
                        : 'submit',
                      type: 'primary',
                    },
                    o
                  ),
                  {
                    loading:
                      void 0 !== o.loading
                        ? o.loading
                        : null == m
                        ? void 0
                        : m.submitting,
                  }
                ),
                on: t(t({}, i), {
                  click: function (e) {
                    ;(u && !1 === u(e)) ||
                      (s && (null == m || m.submit(s).then(d).catch(p)))
                  },
                }),
              },
              r
            )
          }
        },
      })
    ),
    nn = Formily.Vue.connect(
      Element.Switch,
      Formily.Vue.mapProps({ readOnly: 'readonly' })
    ),
    on = A(Element.TimePicker, { change: 'input' }),
    rn = Formily.Vue.connect(
      on,
      Formily.Vue.mapProps({ readOnly: 'readonly' }),
      Formily.Vue.mapReadPretty(_e.TimePicker)
    ),
    an = Formily.Vue.connect(
      Element.Transfer,
      Formily.Vue.mapProps({ dataSource: 'data' })
    ),
    un = VueCompositionAPI.defineComponent({
      name: 'FUpload',
      props: {
        textContent: { type: String, default: '' },
        errorAdaptor: {
          type: Function,
          default: function (e) {
            return (null == e ? void 0 : e.message) || ''
          },
        },
      },
      setup: function (e, n) {
        var o = n.slots,
          r = n.attrs,
          i = n.listeners,
          a = n.emit
        return function () {
          var n = Formily.Vue.useField(),
            u = function (t) {
              var o = e.errorAdaptor(t)
              n.value.setFeedback({
                type: 'error',
                code: 'UploadError',
                messages: o ? [o] : [],
              })
            },
            l = t(t({}, r), {
              onChange: function (e, t) {
                var n
                null === (n = r.onChange) || void 0 === n || n(e, t),
                  u(),
                  a('change', t)
              },
              onRemove: function (e, t) {
                var n
                null === (n = r.onRemove) || void 0 === n || n(e, t),
                  u(),
                  a('change', t)
              },
              onError: function (e, t, n) {
                var o
                null === (o = r.onError) || void 0 === o || o(e, t, n),
                  setTimeout(function () {
                    u(e)
                  }, 0)
              },
            }),
            s = t({}, o)
          return (
            o.default ||
              (s.default = function () {
                var t = r.listType
                return r.drag
                  ? Formily.Vue.h(
                      Formily.Vue.Fragment,
                      {},
                      {
                        default: function () {
                          return [
                            Formily.Vue.h(
                              'i',
                              { staticClass: 'el-icon-upload' },
                              {}
                            ),
                            Formily.Vue.h(
                              'div',
                              { staticClass: 'el-upload__text' },
                              {
                                default: function () {
                                  return [e.textContent]
                                },
                              }
                            ),
                          ]
                        },
                      }
                    )
                  : 'picture-card' === t
                  ? Formily.Vue.h('i', { staticClass: 'el-icon-plus' }, {})
                  : Formily.Vue.h(
                      Element.Button,
                      { props: { icon: 'el-icon-upload2' } },
                      {
                        default: function () {
                          return [e.textContent]
                        },
                      }
                    )
              }),
            Formily.Vue.h(Element.Upload, { attrs: l, on: i }, s)
          )
        }
      },
    }),
    ln = Formily.Vue.connect(
      un,
      Formily.Vue.mapProps({ readOnly: 'readonly', value: 'fileList' })
    ),
    sn = function (e) {
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
      return t
    },
    cn = Formily.ReactiveVue.observer(
      C({
        inheritAttrs: !1,
        props: {
          formCollapse: { type: Object },
          activeKey: { type: [String, Number] },
        },
        setup: function (e, n) {
          var o = n.attrs,
            r = n.emit,
            a = Formily.Vue.useField(),
            u = Formily.Vue.useFieldSchema(),
            l = ''.concat(i, '-form-collapse'),
            s = V(function () {
              var t
              return null !== (t = e.formCollapse) && void 0 !== t ? t : sn()
            })
          return function () {
            var n = (function (e, n) {
                var o = []
                return (
                  n.mapProperties(function (n, r) {
                    var i,
                      a,
                      u = e.query(e.address.concat(r)).take()
                    'none' !== (null == u ? void 0 : u.display) &&
                      'hidden' !== (null == u ? void 0 : u.display) &&
                      (null === (i = n['x-component']) || void 0 === i
                        ? void 0
                        : i.indexOf('FormCollapse.Item')) > -1 &&
                      o.push({
                        name: r,
                        props: t(
                          t({}, null == n ? void 0 : n['x-component-props']),
                          {
                            key:
                              (null ===
                                (a =
                                  null == n
                                    ? void 0
                                    : n['x-component-props']) || void 0 === a
                                ? void 0
                                : a.key) || r,
                          }
                        ),
                        schema: n,
                      })
                  }),
                  o
                )
              })(a.value, u.value),
              i = (function (t) {
                var n, r, i
                return e.activeKey
                  ? e.activeKey
                  : (
                      null === (n = s.value) || void 0 === n
                        ? void 0
                        : n.activeKeys
                    )
                  ? null === (r = s.value) || void 0 === r
                    ? void 0
                    : r.activeKeys
                  : o.accordion
                  ? null === (i = t[0]) || void 0 === i
                    ? void 0
                    : i.name
                  : t.map(function (e) {
                      return e.name
                    })
              })(n)
            return Formily.Vue.h(
              Element.Collapse,
              {
                class: l,
                props: { value: i },
                on: {
                  change: function (e) {
                    r('input', e), s.value.setActiveKeys(e)
                  },
                },
              },
              {
                default: function () {
                  return n.map(function (e, n) {
                    var o = e.props,
                      r = e.schema,
                      i = e.name
                    return Formily.Vue.h(
                      Element.CollapseItem,
                      { key: n, props: t(t({}, o), { name: i }) },
                      {
                        default: function () {
                          return [
                            Formily.Vue.h(
                              Formily.Vue.RecursionField,
                              { props: { schema: r, name: i } },
                              {}
                            ),
                          ]
                        },
                        title: function () {
                          return Formily.Vue.h(
                            'span',
                            {},
                            {
                              default: function () {
                                return (function (e, t) {
                                  var n = a.value.form.queryFeedbacks({
                                    type: 'error',
                                    address: ''.concat(
                                      a.value.address.concat(e),
                                      '.*'
                                    ),
                                  })
                                  return n.length
                                    ? Formily.Vue.h(
                                        Element.Badge,
                                        {
                                          class: [
                                            ''.concat(l, '-errors-badge'),
                                          ],
                                          props: { value: n.length },
                                        },
                                        {
                                          default: function () {
                                            return t.title
                                          },
                                        }
                                      )
                                    : t.title
                                })(i, o)
                              },
                            }
                          )
                        },
                      }
                    )
                  })
                },
              }
            )
          }
        },
      })
    ),
    dn = C({
      name: 'FFormCollapseItem',
      setup: function (e, t) {
        var n = t.slots
        return function () {
          return Formily.Vue.h(Formily.Vue.Fragment, {}, n)
        }
      },
    }),
    fn = S(cn, { Item: dn, createFormCollapse: sn }),
    pn = function (e) {
      var t = Formily.Reactive.model({
        activeKey: e,
        setActiveKey: function (e) {
          t.activeKey = e
        },
      })
      return t
    },
    mn = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        name: 'FFormTab',
        props: ['formTab'],
        setup: function (e, n) {
          var o = n.attrs,
            r = n.listeners,
            a = Formily.Vue.useField().value,
            u = VueCompositionAPI.computed(function () {
              var t
              return null !== (t = e.formTab) && void 0 !== t ? t : pn()
            }),
            l = ''.concat(i, '-form-tab')
          return function () {
            var n,
              i = u.value,
              s = (function () {
                var e = Formily.Vue.useField().value,
                  n = Formily.Vue.useFieldSchema().value,
                  o = VueCompositionAPI.reactive([])
                return (
                  n.mapProperties(function (n, r) {
                    var i,
                      a,
                      u = e.query(e.address.concat(r)).take()
                    'none' !== (null == u ? void 0 : u.display) &&
                      'hidden' !== (null == u ? void 0 : u.display) &&
                      (null === (i = n['x-component']) || void 0 === i
                        ? void 0
                        : i.indexOf('TabPane')) > -1 &&
                      o.push({
                        name: r,
                        props: t(
                          {
                            name:
                              (null ===
                                (a =
                                  null == n
                                    ? void 0
                                    : n['x-component-props']) || void 0 === a
                                ? void 0
                                : a.name) || r,
                          },
                          null == n ? void 0 : n['x-component-props']
                        ),
                        schema: n,
                      })
                  }),
                  o
                )
              })(),
              c =
                e.value ||
                (null == i ? void 0 : i.activeKey) ||
                (null === (n = null == s ? void 0 : s[0]) || void 0 === n
                  ? void 0
                  : n.name),
              d = function (e, t) {
                var n = a.form.queryFeedbacks({
                  type: 'error',
                  address: ''.concat(a.address.concat(e), '.*'),
                })
                return n.length
                  ? function () {
                      return Formily.Vue.h(
                        Element.Badge,
                        {
                          class: [''.concat(l, '-errors-badge')],
                          props: { value: n.length },
                        },
                        {
                          default: function () {
                            return t.label
                          },
                        }
                      )
                    }
                  : function () {
                      return t.label
                    }
              }
            return Formily.Vue.h(
              Element.Tabs,
              {
                class: [l],
                style: o.style,
                props: t(t({}, o), { value: c }),
                on: t(t({}, r), {
                  input: function (e) {
                    var t, n
                    null === (t = r.input) || void 0 === t || t.call(r, e),
                      null === (n = i.setActiveKey) ||
                        void 0 === n ||
                        n.call(i, e)
                  },
                }),
              },
              {
                default: function () {
                  return (function (e) {
                    return e.map(function (e, t) {
                      var n = e.props,
                        o = e.schema,
                        r = e.name
                      return Formily.Vue.h(
                        Element.TabPane,
                        { key: t, props: n },
                        {
                          default: function () {
                            return [
                              Formily.Vue.h(
                                Formily.Vue.RecursionField,
                                { props: { schema: o, name: r } },
                                {}
                              ),
                            ]
                          },
                          label: function () {
                            return [
                              Formily.Vue.h('div', {}, { default: d(r, n) }),
                            ]
                          },
                        }
                      )
                    })
                  })(s)
                },
              }
            )
          }
        },
      })
    ),
    hn = S(mn, {
      TabPane: VueCompositionAPI.defineComponent({
        name: 'FFormTabPane',
        setup: function (e, t) {
          var n = t.slots
          return function () {
            return Formily.Vue.h(Formily.Vue.Fragment, {}, n)
          }
        },
      }),
      createFormTab: pn,
    }),
    vn = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        name: 'FFormStep',
        props: {
          formStep: {
            type: Object,
            default: function () {
              return { current: 0 }
            },
          },
        },
        setup: function (e, t) {
          var n,
            o,
            r = t.attrs,
            a = Formily.Vue.useField().value,
            u = ''.concat(i, '-form-step'),
            l = (function (e) {
              var t = []
              return (
                e.mapProperties(function (e, n) {
                  var o
                  ;(null === (o = e['x-component']) || void 0 === o
                    ? void 0
                    : o.indexOf('StepPane')) > -1 &&
                    t.push({
                      name: n,
                      props: e['x-component-props'],
                      schema: e,
                    })
                }),
                t
              )
            })(Formily.Vue.useFieldSchema().value)
          return (
            null === (o = (n = e.formStep).connect) ||
              void 0 === o ||
              o.call(n, l, a),
            function () {
              var t,
                n =
                  e.active ||
                  (null === (t = e.formStep) || void 0 === t
                    ? void 0
                    : t.current) ||
                  0,
                o = function (e, t) {
                  return e.map(t)
                }
              return Formily.Vue.h(
                'div',
                { class: [u] },
                {
                  default: function () {
                    return [
                      Formily.Vue.h(
                        Element.Steps,
                        {
                          props: { active: n },
                          style: [{ marginBottom: '10px' }, r.style],
                          attrs: r,
                        },
                        {
                          default: function () {
                            return o(l, function (e, t) {
                              var n = e.props
                              return Formily.Vue.h(
                                Element.Step,
                                { props: n, key: t },
                                {}
                              )
                            })
                          },
                        }
                      ),
                      o(l, function (e, t) {
                        var o = e.name,
                          r = e.schema
                        if (t === n)
                          return Formily.Vue.h(
                            Formily.Vue.RecursionField,
                            { props: { name: o, schema: r }, key: t },
                            {}
                          )
                      }),
                    ]
                  },
                }
              )
            }
          )
        },
      })
    ),
    yn = S(vn, {
      StepPane: VueCompositionAPI.defineComponent({
        name: 'FFormStepPane',
        setup: function (e, t) {
          var n = t.slots
          return function () {
            return Formily.Vue.h(Formily.Vue.Fragment, {}, n)
          }
        },
      }),
      createFormStep: function (e) {
        void 0 === e && (e = 0)
        var t = Formily.Reactive.observable({
            form: null,
            field: null,
            steps: [],
          }),
          n = Formily.Reactive.action.bound(function (e) {
            var n = t.steps[e]
            t.steps.forEach(function (e) {
              var o = e.name
              t.form
                .query(''.concat(t.field.address, '.').concat(o))
                .take(function (e) {
                  o === n.name
                    ? e.setDisplay('visible')
                    : e.setDisplay('hidden')
                })
            })
          }),
          i = Formily.Reactive.action.bound(function () {
            u.allowNext && (n(u.current + 1), u.setCurrent(u.current + 1))
          }),
          a = Formily.Reactive.action.bound(function () {
            u.allowBack && (n(u.current - 1), u.setCurrent(u.current - 1))
          }),
          u = Formily.Reactive.model({
            connect: function (e, n) {
              ;(t.steps = e),
                (t.form = null == n ? void 0 : n.form),
                (t.field = n)
            },
            current: e,
            setCurrent: function (e) {
              u.current = e
            },
            get allowNext() {
              return u.current < t.steps.length - 1
            },
            get allowBack() {
              return u.current > 0
            },
            next: function () {
              return o(this, void 0, void 0, function () {
                return r(this, function (e) {
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
              return o(this, void 0, void 0, function () {
                return r(this, function (e) {
                  return a(), [2]
                })
              })
            },
            submit: function (e) {
              var n, i
              return o(this, void 0, void 0, function () {
                return r(this, function (o) {
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
        return u
      },
    }),
    gn = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Addition')) > -1
      )
    },
    bn = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Index')) > -1
      )
    },
    Fn = function (e) {
      return (
        gn(e) ||
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
    Vn = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        name: 'FArrayCards',
        props: [],
        setup: function (e, n) {
          var o = n.attrs,
            r = Formily.Vue.useField(),
            a = Formily.Vue.useFieldSchema(),
            u = ''.concat(i, '-array-cards'),
            l = U.useKey(a.value),
            s = l.getKey,
            c = l.keyMap
          return function () {
            var e = r.value,
              n = a.value,
              i = Array.isArray(e.value) ? e.value : []
            if (!n) throw new Error('can not found schema object')
            var l = function () {
              if (!(null == i ? void 0 : i.length))
                return Formily.Vue.h(
                  Element.Card,
                  {
                    class: [''.concat(u, '-item')],
                    attrs: t(t({ shadow: 'never' }, o), {
                      header: o.title || e.title,
                    }),
                  },
                  {
                    default: function () {
                      return Formily.Vue.h(
                        Element.Empty,
                        { props: { description: 'No Data', imageSize: 100 } },
                        {}
                      )
                    },
                  }
                )
            }
            return Formily.Vue.h(
              'div',
              { class: [u] },
              {
                default: function () {
                  return Formily.Vue.h(
                    U,
                    { props: { keyMap: c } },
                    {
                      default: function () {
                        return [
                          l(),
                          null == i
                            ? void 0
                            : i.map(function (r, i) {
                                var a = Array.isArray(n.items)
                                    ? n.items[i] || n.items[0]
                                    : n.items,
                                  l = Formily.Vue.h(
                                    'span',
                                    {},
                                    {
                                      default: function () {
                                        return [
                                          Formily.Vue.h(
                                            Formily.Vue.RecursionField,
                                            {
                                              props: {
                                                schema: a,
                                                name: i,
                                                filterProperties: function (e) {
                                                  return !!bn(e)
                                                },
                                                onlyRenderProperties: !0,
                                              },
                                            },
                                            {}
                                          ),
                                          o.title || e.title,
                                        ]
                                      },
                                    }
                                  ),
                                  c = Formily.Vue.h(
                                    'span',
                                    {},
                                    {
                                      default: function () {
                                        return [
                                          Formily.Vue.h(
                                            Formily.Vue.RecursionField,
                                            {
                                              props: {
                                                schema: a,
                                                name: i,
                                                filterProperties: function (e) {
                                                  return !!Fn(e)
                                                },
                                                onlyRenderProperties: !0,
                                              },
                                            },
                                            {}
                                          ),
                                          o.extra,
                                        ]
                                      },
                                    }
                                  ),
                                  d = Formily.Vue.h(
                                    Formily.Vue.RecursionField,
                                    {
                                      props: {
                                        schema: a,
                                        name: i,
                                        filterProperties: function (e) {
                                          return !bn(e) && !Fn(e)
                                        },
                                      },
                                    },
                                    {}
                                  )
                                return Formily.Vue.h(
                                  U.Item,
                                  {
                                    key: s(r, i),
                                    props: { index: i, record: r },
                                  },
                                  {
                                    default: function () {
                                      return Formily.Vue.h(
                                        Element.Card,
                                        {
                                          class: [''.concat(u, '-item')],
                                          attrs: t({ shadow: 'never' }, o),
                                        },
                                        {
                                          default: function () {
                                            return [d]
                                          },
                                          header: function () {
                                            return Formily.Vue.h(
                                              Element.Row,
                                              {
                                                props: {
                                                  type: 'flex',
                                                  justify: 'space-between',
                                                },
                                              },
                                              {
                                                default: function () {
                                                  return [l, c]
                                                },
                                              }
                                            )
                                          },
                                        }
                                      )
                                    },
                                  }
                                )
                              }),
                          n.reduceProperties(function (e, t) {
                            return gn(t)
                              ? Formily.Vue.h(
                                  Formily.Vue.RecursionField,
                                  { props: { schema: t, name: 'addition' } },
                                  {}
                                )
                              : e
                          }, null),
                        ]
                      },
                    }
                  )
                },
              }
            )
          }
        },
      })
    ),
    Cn = S(Vn, {
      Index: U.Index,
      SortHandle: U.SortHandle,
      Addition: U.Addition,
      Remove: U.Remove,
      MoveDown: U.MoveDown,
      MoveUp: U.MoveUp,
      useArray: U.useArray,
      useIndex: U.useIndex,
      useRecord: U.useRecord,
    }),
    wn = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Addition')) > -1
      )
    },
    xn = function (e) {
      var t
      return (
        (null === (t = e['x-component']) || void 0 === t
          ? void 0
          : t.indexOf('Index')) > -1
      )
    },
    An = function (e) {
      return (
        wn(e) ||
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
    Pn = function (e) {
      return Array.from({ length: e }).map(function (e, t) {
        return t
      })
    },
    Sn = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        name: 'FArrayCollapse',
        props: { defaultOpenPanelCount: { type: Number, default: 5 } },
        setup: function (e, n) {
          var o = n.attrs,
            r = Formily.Vue.useField(),
            a = Formily.Vue.useFieldSchema(),
            u = ''.concat(i, '-array-collapse'),
            l = VueCompositionAPI.ref([])
          VueCompositionAPI.watchEffect(function () {
            var t,
              n,
              i,
              a = r.value,
              u = Array.isArray(a.value) ? a.value.slice() : []
            !a.modified &&
              u.length &&
              (l.value =
                ((t = u.length),
                (n = e.defaultOpenPanelCount),
                void 0 === (i = o.accordion) && (i = !1),
                i ? 0 : Pn(t < n ? t : n)))
          })
          var s = U.useKey(a.value),
            c = s.getKey,
            d = s.keyMap
          return function () {
            var e = r.value,
              n = a.value,
              i = Array.isArray(e.value) ? e.value.slice() : []
            if (!n) throw new Error('can not found schema object')
            var s = function () {
                if (!i.length) return null
                var r =
                  null == i
                    ? void 0
                    : i.map(function (o, r) {
                        var i = Array.isArray(n.items)
                            ? n.items[r] || n.items[0]
                            : n.items,
                          a = c(o, r),
                          l = e
                            .query(''.concat(e.address, '.').concat(r))
                            .get('componentProps'),
                          s = i['x-component-props'],
                          d =
                            (null == l ? void 0 : l.title) ||
                            s.title ||
                            e.title,
                          f = e.address.concat(r),
                          p = e.form.queryFeedbacks({
                            type: 'error',
                            address: ''.concat(f, '.**'),
                          }),
                          m = Formily.Vue.h(
                            U.Item,
                            { props: { index: r, record: o } },
                            {
                              default: function () {
                                return [
                                  Formily.Vue.h(
                                    Formily.Vue.RecursionField,
                                    {
                                      props: {
                                        schema: i,
                                        name: r,
                                        filterProperties: function (e) {
                                          return !!xn(e)
                                        },
                                        onlyRenderProperties: !0,
                                      },
                                    },
                                    {}
                                  ),
                                  p.length
                                    ? Formily.Vue.h(
                                        Element.Badge,
                                        {
                                          class: [
                                            ''.concat(u, '-errors-badge'),
                                          ],
                                          props: { value: p.length },
                                        },
                                        {
                                          default: function () {
                                            return d
                                          },
                                        }
                                      )
                                    : d,
                                ]
                              },
                            }
                          ),
                          h = Formily.Vue.h(
                            U.Item,
                            { props: { index: r, record: o } },
                            {
                              default: function () {
                                return [
                                  Formily.Vue.h(
                                    Formily.Vue.RecursionField,
                                    {
                                      props: {
                                        schema: i,
                                        name: r,
                                        filterProperties: function (e) {
                                          return !!An(e)
                                        },
                                        onlyRenderProperties: !0,
                                      },
                                    },
                                    {}
                                  ),
                                ]
                              },
                            }
                          ),
                          v = Formily.Vue.h(
                            Formily.Vue.RecursionField,
                            {
                              props: {
                                schema: i,
                                name: r,
                                filterProperties: function (e) {
                                  return !xn(e) && !An(e)
                                },
                              },
                            },
                            {}
                          )
                        return Formily.Vue.h(
                          Element.CollapseItem,
                          { attrs: t(t(t({}, s), l), { name: r }), key: a },
                          {
                            default: function () {
                              return [
                                Formily.Vue.h(
                                  U.Item,
                                  { props: { index: r, record: o } },
                                  {
                                    default: function () {
                                      return [v]
                                    },
                                  }
                                ),
                              ]
                            },
                            title: function () {
                              return Formily.Vue.h(
                                Element.Row,
                                {
                                  style: { flex: 1 },
                                  props: {
                                    type: 'flex',
                                    justify: 'space-between',
                                  },
                                },
                                {
                                  default: function () {
                                    return [
                                      Formily.Vue.h(
                                        'span',
                                        {},
                                        {
                                          default: function () {
                                            return m
                                          },
                                        }
                                      ),
                                      Formily.Vue.h(
                                        'span',
                                        {},
                                        {
                                          default: function () {
                                            return h
                                          },
                                        }
                                      ),
                                    ]
                                  },
                                }
                              )
                            },
                          }
                        )
                      })
                return Formily.Vue.h(
                  Element.Collapse,
                  {
                    class: [''.concat(u, '-item')],
                    attrs: t(t({}, o), { value: l.value }),
                    on: {
                      change: function (e) {
                        l.value = e
                      },
                    },
                  },
                  {
                    default: function () {
                      return [r]
                    },
                  }
                )
              },
              f = function () {
                if (!(null == i ? void 0 : i.length))
                  return Formily.Vue.h(
                    Element.Card,
                    {
                      class: [''.concat(u, '-item')],
                      attrs: t(t({ shadow: 'never' }, o), {
                        header: o.title || e.title,
                      }),
                    },
                    {
                      default: function () {
                        return Formily.Vue.h(
                          Element.Empty,
                          { props: { description: 'No Data', imageSize: 100 } },
                          {}
                        )
                      },
                    }
                  )
              }
            return Formily.Vue.h(
              'div',
              { class: [u] },
              {
                default: function () {
                  return Formily.Vue.h(
                    U,
                    {
                      props: { keyMap: d },
                      on: {
                        add: function (e) {
                          l.value = (function (e, t, n) {
                            return (
                              void 0 === n && (n = !1),
                              n
                                ? t
                                : e.length <= t
                                ? e.concat(t)
                                : e.reduce(function (e, n) {
                                    return n < t
                                      ? e.concat(n)
                                      : n === t
                                      ? e.concat([n, n + 1])
                                      : e.concat(n + 1)
                                  }, [])
                            )
                          })(l.value, e, o.accordion)
                        },
                      },
                    },
                    {
                      default: function () {
                        return [
                          f(),
                          s(),
                          n.reduceProperties(function (e, t) {
                            return wn(t)
                              ? Formily.Vue.h(
                                  Formily.Vue.RecursionField,
                                  { props: { schema: t, name: 'addition' } },
                                  {}
                                )
                              : e
                          }, null),
                        ]
                      },
                    }
                  )
                },
              }
            )
          }
        },
      })
    ),
    In = VueCompositionAPI.defineComponent({
      name: 'FArrayCollapseItem',
      setup: function (e, t) {
        var n = t.slots
        return function () {
          return Formily.Vue.h(Formily.Vue.Fragment, {}, n)
        }
      },
    }),
    On = S(Sn, {
      Item: In,
      Index: U.Index,
      SortHandle: U.SortHandle,
      Addition: U.Addition,
      Remove: U.Remove,
      MoveDown: U.MoveDown,
      MoveUp: U.MoveUp,
      useArray: U.useArray,
      useIndex: U.useIndex,
      useRecord: U.useRecord,
    }),
    kn = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        name: 'FArrayItems',
        setup: function (e, t) {
          t.attrs
          var n = Formily.Vue.useField(),
            o = Formily.Vue.useFieldSchema(),
            r = ''.concat(i, '-array-items'),
            a = U.useKey(o.value),
            u = a.getKey,
            l = a.keyMap
          return function () {
            var e = n.value,
              t = o.value,
              i = Array.isArray(e.value) ? e.value.slice() : []
            return Formily.Vue.h(
              U,
              { props: { keyMap: l } },
              {
                default: function () {
                  return Formily.Vue.h(
                    'div',
                    { class: [r], on: { change: function () {} } },
                    {
                      default: function () {
                        return [
                          ((n =
                            null == i
                              ? void 0
                              : i.map(function (e, n) {
                                  var o = Array.isArray(t.items)
                                      ? t.items[n] || t.items[0]
                                      : t.items,
                                    i = u(e, n)
                                  return Formily.Vue.h(
                                    U.Item,
                                    { key: i, props: { index: n, record: e } },
                                    {
                                      default: function () {
                                        return Formily.Vue.h(
                                          F,
                                          {
                                            class: [
                                              ''.concat(r, '-item-inner'),
                                            ],
                                            props: { index: n },
                                            key: i,
                                          },
                                          {
                                            default: function () {
                                              return Formily.Vue.h(
                                                Formily.Vue.RecursionField,
                                                {
                                                  props: { schema: o, name: n },
                                                },
                                                {}
                                              )
                                            },
                                          }
                                        )
                                      },
                                    }
                                  )
                                })),
                          Formily.Vue.h(
                            b,
                            {
                              class: [''.concat(r, '-list')],
                              props: {
                                useDragHandle: !0,
                                lockAxis: 'y',
                                helperClass: ''.concat(r, '-sort-helper'),
                                value: [],
                              },
                              on: {
                                'sort-end': function (t) {
                                  var n = t.oldIndex,
                                    o = t.newIndex
                                  Array.isArray(l) &&
                                    l.splice(o, 0, l.splice(n, 1)[0]),
                                    e.move(n, o)
                                },
                              },
                            },
                            {
                              default: function () {
                                return n
                              },
                            }
                          )),
                          t.reduceProperties(function (e, t) {
                            return (function (e) {
                              var t
                              return (
                                (null === (t = e['x-component']) || void 0 === t
                                  ? void 0
                                  : t.indexOf('Addition')) > -1
                              )
                            })(t)
                              ? Formily.Vue.h(
                                  Formily.Vue.RecursionField,
                                  { props: { schema: t, name: 'addition' } },
                                  {}
                                )
                              : e
                          }, null),
                        ]
                        var n
                      },
                    }
                  )
                },
              }
            )
          }
        },
      })
    ),
    Tn = VueCompositionAPI.defineComponent({
      name: 'FArrayItemsItem',
      props: ['type'],
      setup: function (e, n) {
        var o = n.attrs,
          r = n.slots,
          a = ''.concat(i, '-array-items')
        return function () {
          return Formily.Vue.h(
            'div',
            {
              class: [''.concat(a, '-').concat(e.type || 'card')],
              attrs: t({}, o),
              on: { change: function () {} },
            },
            r
          )
        }
      },
    }),
    Mn = S(kn, {
      Item: Tn,
      Index: U.Index,
      SortHandle: U.SortHandle,
      Addition: U.Addition,
      Remove: U.Remove,
      MoveDown: U.MoveDown,
      MoveUp: U.MoveUp,
      useArray: U.useArray,
      useIndex: U.useIndex,
      useRecord: U.useRecord,
    }),
    En = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        name: 'ArrayTabs',
        props: [],
        setup: function (e, n) {
          var o = n.attrs,
            r = n.listeners,
            a = Formily.Vue.useField(),
            u = Formily.Vue.useFieldSchema(),
            l = ''.concat(i, '-array-tabs'),
            s = VueCompositionAPI.ref('tab-0')
          return function () {
            var e = a.value,
              n = u.value,
              i = Array.isArray(e.value) ? e.value : [],
              c = (null == i ? void 0 : i.length) ? i : [{}],
              d = function (t, n) {
                var o, r
                if ('add' == n) {
                  var i = c.length
                  ;(
                    null === (o = null == e ? void 0 : e.value) || void 0 === o
                      ? void 0
                      : o.length
                  )
                    ? e.push(null)
                    : e.push(null, null),
                    (s.value = 'tab-'.concat(i))
                } else if ('remove' == n) {
                  var a =
                    null === (r = t.match(/-(\d+)/)) || void 0 === r
                      ? void 0
                      : r[1]
                  e.remove(Number(a)),
                    s.value === t && (s.value = 'tab-'.concat(a - 1))
                }
              },
              f = function (t) {
                var n = ''.concat(e.title || 'Untitled', ' ').concat(t + 1),
                  o = e.address.concat(t),
                  r = e.form.queryFeedbacks({
                    type: 'error',
                    address: ''.concat(o, '.**'),
                  })
                return r.length
                  ? Formily.Vue.h(
                      'span',
                      {},
                      {
                        default: function () {
                          return [
                            Formily.Vue.h(
                              Element.Badge,
                              {
                                class: [''.concat(l, '-errors-badge')],
                                props: { value: r.length },
                              },
                              {
                                default: function () {
                                  return [n]
                                },
                              }
                            ),
                          ]
                        },
                      }
                    )
                  : Formily.Vue.h(
                      'span',
                      {},
                      {
                        default: function () {
                          return [n]
                        },
                      }
                    )
              }
            return Formily.Vue.h(
              Element.Tabs,
              {
                class: [l],
                attrs: t(t({}, o), {
                  type: 'card',
                  value: s.value,
                  addable: !0,
                }),
                on: t(t({}, r), {
                  input: function (e) {
                    s.value = e
                  },
                  'tab-remove': function (e) {
                    var t
                    d(e, 'remove'),
                      null === (t = null == r ? void 0 : r['tab-remove']) ||
                        void 0 === t ||
                        t.call(r, e)
                  },
                  'tab-add': function () {
                    var e
                    d(null, 'add'),
                      null === (e = null == r ? void 0 : r['tab-add']) ||
                        void 0 === e ||
                        e.call(r)
                  },
                }),
              },
              {
                default: function () {
                  return [
                    null == c
                      ? void 0
                      : c.map(function (e, t) {
                          var o = Array.isArray(n.items) ? n.items[t] : n.items,
                            r = 'tab-'.concat(t)
                          return Formily.Vue.h(
                            Element.TabPane,
                            { key: r, attrs: { closable: 0 !== t, name: r } },
                            {
                              default: function () {
                                return Formily.Vue.h(
                                  Formily.Vue.RecursionField,
                                  { props: { schema: o, name: t } },
                                  {}
                                )
                              },
                              label: function () {
                                return [f(t)]
                              },
                            }
                          )
                        }),
                  ]
                },
              }
            )
          }
        },
      })
    ),
    Rn = function (e) {
      var t,
        n,
        o = e.value
      return (
        (null === (t = null == o ? void 0 : o.parent) || void 0 === t
          ? void 0
          : t.pattern) ||
        (null === (n = null == o ? void 0 : o.form) || void 0 === n
          ? void 0
          : n.pattern)
      )
    },
    Dn = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        name: 'FEditable',
        setup: function (e, n) {
          var o = n.attrs,
            r = n.slots,
            a = n.refs,
            u = Formily.Vue.useField(),
            l = ''.concat(i, '-editable'),
            s = function (e) {
              'editable' === Rn(u) &&
                u.value.setPattern(e ? 'editable' : 'readPretty')
            },
            c = Formily.Reactive.reaction(
              function () {
                return Rn(u)
              },
              function (e) {
                'editable' === e && u.value.setPattern('readPretty')
              },
              { fireImmediately: !0 }
            )
          return (
            VueCompositionAPI.onBeforeUnmount(c),
            function () {
              var e = 'editable' === u.value.pattern,
                n = Rn(u),
                i = (function (e) {
                  var t = e.value
                  return Formily.Core.isVoidField(t)
                    ? {}
                    : t
                    ? {
                        feedbackStatus:
                          'validating' === t.validateStatus
                            ? 'pending'
                            : t.validateStatus,
                        feedbackText: t.selfErrors.length
                          ? t.selfErrors[0]
                          : t.selfWarnings.length
                          ? t.selfWarnings[0]
                          : t.selfSuccesses.length
                          ? t.selfSuccesses[0]
                          : void 0,
                        extra: t.description,
                      }
                    : {}
                })(u)
              return Formily.Vue.h(
                'div',
                {
                  class: l,
                  ref: 'innerRef',
                  on: {
                    click: function (t) {
                      var n = a.innerRef,
                        o = t.target,
                        r = n.querySelector('.'.concat(l, '-close-btn'))
                      ;(null == o ? void 0 : o.contains(r)) ||
                      (null == r ? void 0 : r.contains(o))
                        ? (function () {
                            var t, n
                            e &&
                              !(null ===
                                (n =
                                  null === (t = u.value) || void 0 === t
                                    ? void 0
                                    : t.errors) || void 0 === n
                                ? void 0
                                : n.length) &&
                              s(!1)
                          })()
                        : e ||
                          setTimeout(function () {
                            s(!0),
                              setTimeout(function () {
                                var e
                                null === (e = n.querySelector('input')) ||
                                  void 0 === e ||
                                  e.focus()
                              })
                          })
                    },
                  },
                },
                {
                  default: function () {
                    return Formily.Vue.h(
                      'div',
                      { class: ''.concat(l, '-content') },
                      {
                        default: function () {
                          return [
                            Formily.Vue.h(Ft, { attrs: t(t({}, o), i) }, r),
                            e
                              ? null
                              : Formily.Vue.h(
                                  Ft,
                                  { attrs: t(t({}, o), i) },
                                  {
                                    default: function () {
                                      return Formily.Vue.h(
                                        'i',
                                        {
                                          class: [
                                            ''.concat(l, '-edit-btn'),
                                            'editable' === n
                                              ? 'el-icon-edit'
                                              : 'el-icon-chat-dot-round',
                                          ],
                                        },
                                        {}
                                      )
                                    },
                                  }
                                ),
                            e
                              ? Formily.Vue.h(
                                  Ft,
                                  { attrs: t({}, o) },
                                  {
                                    default: function () {
                                      return Formily.Vue.h(
                                        'i',
                                        {
                                          class: [
                                            ''.concat(l, '-close-btn'),
                                            'el-icon-close',
                                          ],
                                        },
                                        {}
                                      )
                                    },
                                  }
                                )
                              : null,
                          ]
                        },
                      }
                    )
                  },
                }
              )
            }
          )
        },
      })
    ),
    _n = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        name: 'FEditablePopover',
        setup: function (e, n) {
          var o = n.attrs,
            r = n.slots,
            a = Formily.Vue.useField(),
            u = ''.concat(i, '-editable'),
            l = VueCompositionAPI.ref(!1)
          return function () {
            var e = a.value,
              n = Rn(a)
            return Formily.Vue.h(
              Element.Popover,
              {
                class: [u],
                attrs: t(t({}, o), {
                  title: o.title || e.title,
                  value: l.value,
                  trigger: 'click',
                }),
                on: {
                  input: function (e) {
                    l.value = e
                  },
                },
              },
              {
                default: function () {
                  return [r.default()]
                },
                reference: function () {
                  return Formily.Vue.h(
                    Ft,
                    { class: [''.concat(u, '-trigger')] },
                    {
                      default: function () {
                        return Formily.Vue.h(
                          'div',
                          { class: [''.concat(u, '-content')] },
                          {
                            default: function () {
                              return [
                                Formily.Vue.h(
                                  'span',
                                  { class: [''.concat(u, '-preview')] },
                                  {
                                    default: function () {
                                      return [o.title || e.title]
                                    },
                                  }
                                ),
                                Formily.Vue.h(
                                  'i',
                                  {
                                    class: [
                                      ''.concat(u, '-edit-btn'),
                                      'editable' === n
                                        ? 'el-icon-edit'
                                        : 'el-icon-chat-dot-round',
                                    ],
                                  },
                                  {}
                                ),
                              ]
                            },
                          }
                        )
                      },
                    }
                  )
                },
              }
            )
          }
        },
      })
    ),
    jn = S(Dn, { Popover: _n })
  /*!
   * portal-vue © Thorsten Lünborg, 2019
   *
   * Version: 2.1.7
   *
   * LICENCE: MIT
   *
   * https://github.com/linusborg/portal-vue
   *
   */
  function Bn(e) {
    return (
      (Bn =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            }),
      Bn(e)
    )
  }
  function Nn(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++)
            n[t] = e[t]
          return n
        }
      })(e) ||
      (function (e) {
        if (
          Symbol.iterator in Object(e) ||
          '[object Arguments]' === Object.prototype.toString.call(e)
        )
          return Array.from(e)
      })(e) ||
      (function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance')
      })()
    )
  }
  var Wn = 'undefined' != typeof window
  function $n(e, t) {
    return t.reduce(function (t, n) {
      return e.hasOwnProperty(n) && (t[n] = e[n]), t
    }, {})
  }
  var Ln = {},
    Gn = {},
    zn = {},
    Hn = Vue.extend({
      data: function () {
        return { transports: Ln, targets: Gn, sources: zn, trackInstances: Wn }
      },
      methods: {
        open: function (e) {
          if (Wn) {
            var t = e.to,
              n = e.from,
              o = e.passengers,
              r = e.order,
              i = void 0 === r ? 1 / 0 : r
            if (t && n && o) {
              var a,
                u = {
                  to: t,
                  from: n,
                  passengers:
                    ((a = o),
                    Array.isArray(a) || 'object' === Bn(a)
                      ? Object.freeze(a)
                      : a),
                  order: i,
                }
              ;-1 === Object.keys(this.transports).indexOf(t) &&
                Vue.set(this.transports, t, [])
              var l,
                s = this.$_getTransportIndex(u),
                c = this.transports[t].slice(0)
              ;-1 === s ? c.push(u) : (c[s] = u),
                (this.transports[t] =
                  ((l = function (e, t) {
                    return e.order - t.order
                  }),
                  c
                    .map(function (e, t) {
                      return [t, e]
                    })
                    .sort(function (e, t) {
                      return l(e[1], t[1]) || e[0] - t[0]
                    })
                    .map(function (e) {
                      return e[1]
                    })))
            }
          }
        },
        close: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.to,
            o = e.from
          if (n && (o || !1 !== t) && this.transports[n])
            if (t) this.transports[n] = []
            else {
              var r = this.$_getTransportIndex(e)
              if (r >= 0) {
                var i = this.transports[n].slice(0)
                i.splice(r, 1), (this.transports[n] = i)
              }
            }
        },
        registerTarget: function (e, t, n) {
          Wn &&
            (this.trackInstances &&
              !n &&
              this.targets[e] &&
              console.warn(
                '[portal-vue]: Target '.concat(e, ' already exists')
              ),
            this.$set(this.targets, e, Object.freeze([t])))
        },
        unregisterTarget: function (e) {
          this.$delete(this.targets, e)
        },
        registerSource: function (e, t, n) {
          Wn &&
            (this.trackInstances &&
              !n &&
              this.sources[e] &&
              console.warn(
                '[portal-vue]: source '.concat(e, ' already exists')
              ),
            this.$set(this.sources, e, Object.freeze([t])))
        },
        unregisterSource: function (e) {
          this.$delete(this.sources, e)
        },
        hasTarget: function (e) {
          return !(!this.targets[e] || !this.targets[e][0])
        },
        hasSource: function (e) {
          return !(!this.sources[e] || !this.sources[e][0])
        },
        hasContentFor: function (e) {
          return !!this.transports[e] && !!this.transports[e].length
        },
        $_getTransportIndex: function (e) {
          var t = e.to,
            n = e.from
          for (var o in this.transports[t])
            if (this.transports[t][o].from === n) return +o
          return -1
        },
      },
    }),
    Kn = new Hn(Ln),
    Un = 1,
    qn = Vue.extend({
      name: 'portal',
      props: {
        disabled: { type: Boolean },
        name: {
          type: String,
          default: function () {
            return String(Un++)
          },
        },
        order: { type: Number, default: 0 },
        slim: { type: Boolean },
        slotProps: {
          type: Object,
          default: function () {
            return {}
          },
        },
        tag: { type: String, default: 'DIV' },
        to: {
          type: String,
          default: function () {
            return String(Math.round(1e7 * Math.random()))
          },
        },
      },
      created: function () {
        var e = this
        this.$nextTick(function () {
          Kn.registerSource(e.name, e)
        })
      },
      mounted: function () {
        this.disabled || this.sendUpdate()
      },
      updated: function () {
        this.disabled ? this.clear() : this.sendUpdate()
      },
      beforeDestroy: function () {
        Kn.unregisterSource(this.name), this.clear()
      },
      watch: {
        to: function (e, t) {
          t && t !== e && this.clear(t), this.sendUpdate()
        },
      },
      methods: {
        clear: function (e) {
          var t = { from: this.name, to: e || this.to }
          Kn.close(t)
        },
        normalizeSlots: function () {
          return this.$scopedSlots.default
            ? [this.$scopedSlots.default]
            : this.$slots.default
        },
        normalizeOwnChildren: function (e) {
          return 'function' == typeof e ? e(this.slotProps) : e
        },
        sendUpdate: function () {
          var e = this.normalizeSlots()
          if (e) {
            var t = {
              from: this.name,
              to: this.to,
              passengers: Nn(e),
              order: this.order,
            }
            Kn.open(t)
          } else this.clear()
        },
      },
      render: function (e) {
        var t = this.$slots.default || this.$scopedSlots.default || [],
          n = this.tag
        return t && this.disabled
          ? t.length <= 1 && this.slim
            ? this.normalizeOwnChildren(t)[0]
            : e(n, [this.normalizeOwnChildren(t)])
          : this.slim
          ? e()
          : e(n, {
              class: { 'v-portal': !0 },
              style: { display: 'none' },
              key: 'v-portal-placeholder',
            })
      },
    }),
    Yn = Vue.extend({
      name: 'portalTarget',
      props: {
        multiple: { type: Boolean, default: !1 },
        name: { type: String, required: !0 },
        slim: { type: Boolean, default: !1 },
        slotProps: {
          type: Object,
          default: function () {
            return {}
          },
        },
        tag: { type: String, default: 'div' },
        transition: { type: [String, Object, Function] },
      },
      data: function () {
        return { transports: Kn.transports, firstRender: !0 }
      },
      created: function () {
        var e = this
        this.$nextTick(function () {
          Kn.registerTarget(e.name, e)
        })
      },
      watch: {
        ownTransports: function () {
          this.$emit('change', this.children().length > 0)
        },
        name: function (e, t) {
          Kn.unregisterTarget(t), Kn.registerTarget(e, this)
        },
      },
      mounted: function () {
        var e = this
        this.transition &&
          this.$nextTick(function () {
            e.firstRender = !1
          })
      },
      beforeDestroy: function () {
        Kn.unregisterTarget(this.name)
      },
      computed: {
        ownTransports: function () {
          var e = this.transports[this.name] || []
          return this.multiple ? e : 0 === e.length ? [] : [e[e.length - 1]]
        },
        passengers: function () {
          return (function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            return e.reduce(function (e, n) {
              var o = n.passengers[0],
                r = 'function' == typeof o ? o(t) : n.passengers
              return e.concat(r)
            }, [])
          })(this.ownTransports, this.slotProps)
        },
      },
      methods: {
        children: function () {
          return 0 !== this.passengers.length
            ? this.passengers
            : this.$scopedSlots.default
            ? this.$scopedSlots.default(this.slotProps)
            : this.$slots.default || []
        },
        noWrapper: function () {
          var e = this.slim && !this.transition
          return (
            e &&
              this.children().length > 1 &&
              console.warn(
                '[portal-vue]: PortalTarget with `slim` option received more than one child element.'
              ),
            e
          )
        },
      },
      render: function (e) {
        var t = this.noWrapper(),
          n = this.children(),
          o = this.transition || this.tag
        return t
          ? n[0]
          : this.slim && !o
          ? e()
          : e(
              o,
              {
                props: { tag: this.transition && this.tag ? this.tag : void 0 },
                class: { 'vue-portal-target': !0 },
              },
              n
            )
      },
    }),
    Zn = 0,
    Jn = ['disabled', 'name', 'order', 'slim', 'slotProps', 'tag', 'to'],
    Xn = ['multiple', 'transition']
  Vue.extend({
    name: 'MountingPortal',
    inheritAttrs: !1,
    props: {
      append: { type: [Boolean, String] },
      bail: { type: Boolean },
      mountTo: { type: String, required: !0 },
      disabled: { type: Boolean },
      name: {
        type: String,
        default: function () {
          return 'mounted_' + String(Zn++)
        },
      },
      order: { type: Number, default: 0 },
      slim: { type: Boolean },
      slotProps: {
        type: Object,
        default: function () {
          return {}
        },
      },
      tag: { type: String, default: 'DIV' },
      to: {
        type: String,
        default: function () {
          return String(Math.round(1e7 * Math.random()))
        },
      },
      multiple: { type: Boolean, default: !1 },
      targetSlim: { type: Boolean },
      targetSlotProps: {
        type: Object,
        default: function () {
          return {}
        },
      },
      targetTag: { type: String, default: 'div' },
      transition: { type: [String, Object, Function] },
    },
    created: function () {
      if ('undefined' != typeof document) {
        var e = document.querySelector(this.mountTo)
        if (e) {
          var t = this.$props
          if (Kn.targets[t.name])
            t.bail
              ? console.warn(
                  '[portal-vue]: Target '.concat(
                    t.name,
                    " is already mounted.\n        Aborting because 'bail: true' is set"
                  )
                )
              : (this.portalTarget = Kn.targets[t.name])
          else {
            var n = t.append
            if (n) {
              var o = 'string' == typeof n ? n : 'DIV',
                r = document.createElement(o)
              e.appendChild(r), (e = r)
            }
            var i = $n(this.$props, Xn)
            ;(i.slim = this.targetSlim),
              (i.tag = this.targetTag),
              (i.slotProps = this.targetSlotProps),
              (i.name = this.to),
              (this.portalTarget = new Yn({
                el: e,
                parent: this.$parent || this,
                propsData: i,
              }))
          }
        } else
          console.error(
            "[portal-vue]: Mount Point '".concat(
              this.mountTo,
              "' not found in document"
            )
          )
      }
    },
    beforeDestroy: function () {
      var e = this.portalTarget
      if (this.append) {
        var t = e.$el
        t.parentNode.removeChild(t)
      }
      e.$destroy()
    },
    render: function (e) {
      if (!this.portalTarget)
        return console.warn("[portal-vue] Target wasn't mounted"), e()
      if (!this.$scopedSlots.manual) {
        var t = $n(this.$props, Jn)
        return e(
          qn,
          {
            props: t,
            attrs: this.$attrs,
            on: this.$listeners,
            scopedSlots: this.$scopedSlots,
          },
          this.$slots.default
        )
      }
      var n = this.$scopedSlots.manual({ to: this.to })
      return Array.isArray(n) && (n = n[0]), n || e()
    },
  })
  var Qn = 'FormDialogFooter',
    eo = function (e) {
      return (function (e) {
        return (
          Formily.Shared.isNum(e) ||
          Formily.Shared.isStr(e) ||
          Formily.Shared.isBool(e) ||
          P(e)
        )
      })(e)
        ? { title: e }
        : e
    }
  function to(e, a, u) {
    var l = this
    ;(Formily.Shared.isFn(a) || P(a)) && ((u = a), (a = 'form-dialog'))
    var s = ''.concat(i, '-form-dialog'),
      c = {
        root: document.createElement('div'),
        form: null,
        promise: null,
        instance: null,
        openMiddlewares: [],
        confirmMiddlewares: [],
        cancelMiddlewares: [],
      }
    document.body.appendChild(c.root)
    var d = eo(e),
      f = t(t({}, d), {
        onClosed: function () {
          var e, t, n
          null === (e = d.onClosed) || void 0 === e || e.call(d),
            c.instance.$destroy(),
            (c.instance = null),
            null ===
              (n =
                null === (t = c.root) || void 0 === t
                  ? void 0
                  : t.parentNode) ||
              void 0 === n ||
              n.removeChild(c.root),
            (c.root = void 0)
        },
      }),
      p = Formily.ReactiveVue.observer(
        VueCompositionAPI.defineComponent({
          setup: function () {
            return function () {
              return Formily.Vue.h(
                Formily.Vue.Fragment,
                {},
                {
                  default: function () {
                    return I(u, { form: c.form })
                  },
                }
              )
            }
          },
        })
      ),
      m = function (e, o, r) {
        if ((void 0 === e && (e = !0), !c.instance)) {
          var i = Formily.ReactiveVue.observer(
            Vue.extend({
              props: ['dialogProps'],
              data: function () {
                return { visible: !1 }
              },
              render: function () {
                var e = this,
                  i = this.dialogProps,
                  a = i.onClose,
                  u = i.onClosed,
                  l = i.onOpen,
                  d = i.onOpend,
                  f = i.onOK,
                  m = i.onCancel,
                  h = i.title,
                  v = i.footer,
                  y = i.okText,
                  g = i.cancelText,
                  b = i.okButtonProps,
                  F = i.cancelButtonProps,
                  V = n(i, [
                    'onClose',
                    'onClosed',
                    'onOpen',
                    'onOpend',
                    'onOK',
                    'onCancel',
                    'title',
                    'footer',
                    'okText',
                    'cancelText',
                    'okButtonProps',
                    'cancelButtonProps',
                  ])
                return Formily.Vue.h(
                  Formily.Vue.FormProvider,
                  { props: { form: c.form } },
                  {
                    default: function () {
                      return Formily.Vue.h(
                        Element.Dialog,
                        {
                          class: [''.concat(s)],
                          attrs: t({ visible: e.visible }, V),
                          on: {
                            'update:visible': function (t) {
                              e.visible = t
                            },
                            close: function () {
                              null == a || a()
                            },
                            closed: function () {
                              null == u || u()
                            },
                            open: function () {
                              null == l || l()
                            },
                            opend: function () {
                              null == d || d()
                            },
                          },
                        },
                        {
                          default: function () {
                            return [Formily.Vue.h(p, {}, {})]
                          },
                          title: function () {
                            return Formily.Vue.h(
                              'div',
                              {},
                              {
                                default: function () {
                                  return I(h)
                                },
                              }
                            )
                          },
                          footer: function () {
                            return Formily.Vue.h(
                              'div',
                              {},
                              {
                                default: function () {
                                  var e = Formily.Vue.h(
                                    Yn,
                                    { props: { name: Qn, slim: !0 } },
                                    {}
                                  )
                                  return null === v
                                    ? [null, e]
                                    : v
                                    ? [I(v), e]
                                    : [
                                        Formily.Vue.h(
                                          Element.Button,
                                          {
                                            attrs: F,
                                            on: {
                                              click: function (e) {
                                                null == m || m(e), r()
                                              },
                                            },
                                          },
                                          {
                                            default: function () {
                                              return I(
                                                g ||
                                                  Ve(
                                                    'el.popconfirm.cancelButtonText'
                                                  )
                                              )
                                            },
                                          }
                                        ),
                                        Formily.Vue.h(
                                          Element.Button,
                                          {
                                            attrs: t(
                                              t({ type: 'primary' }, b),
                                              { loading: c.form.submitting }
                                            ),
                                            on: {
                                              click: function (e) {
                                                null == f || f(e), o()
                                              },
                                            },
                                          },
                                          {
                                            default: function () {
                                              return I(
                                                y ||
                                                  Ve(
                                                    'el.popconfirm.confirmButtonText'
                                                  )
                                              )
                                            },
                                          }
                                        ),
                                        e,
                                      ]
                                },
                              }
                            )
                          },
                        }
                      )
                    },
                  }
                )
              },
            })
          )
          ;(c.instance = new i({
            propsData: { dialogProps: f },
            parent: T(a),
          })),
            c.instance.$mount(c.root)
        }
        c.instance.visible = e
      },
      h = {
        forOpen: function (e) {
          return Formily.Shared.isFn(e) && c.openMiddlewares.push(e), h
        },
        forConfirm: function (e) {
          return Formily.Shared.isFn(e) && c.confirmMiddlewares.push(e), h
        },
        forCancel: function (e) {
          return Formily.Shared.isFn(e) && c.cancelMiddlewares.push(e), h
        },
        open: function (e) {
          return (
            c.promise ||
              (c.promise = new Promise(function (t, n) {
                return o(l, void 0, void 0, function () {
                  var i,
                    a = this
                  return r(this, function (u) {
                    switch (u.label) {
                      case 0:
                        return (
                          u.trys.push([0, 2, , 3]),
                          [
                            4,
                            M(f.loadingText, function () {
                              return Formily.Shared.applyMiddleware(
                                e,
                                c.openMiddlewares
                              )
                            }),
                          ]
                        )
                      case 1:
                        return (
                          (e = u.sent()),
                          (c.form = c.form || Formily.Core.createForm(e)),
                          [3, 3]
                        )
                      case 2:
                        return (i = u.sent()), n(i), [3, 3]
                      case 3:
                        return (
                          m(
                            !0,
                            function () {
                              c.form
                                .submit(function () {
                                  return o(a, void 0, void 0, function () {
                                    return r(this, function (e) {
                                      switch (e.label) {
                                        case 0:
                                          return [
                                            4,
                                            Formily.Shared.applyMiddleware(
                                              c.form,
                                              c.confirmMiddlewares
                                            ),
                                          ]
                                        case 1:
                                          return (
                                            e.sent(),
                                            t(
                                              Formily.Reactive.toJS(
                                                c.form.values
                                              )
                                            ),
                                            f.beforeClose
                                              ? setTimeout(function () {
                                                  f.beforeClose(function () {
                                                    h.close()
                                                  })
                                                })
                                              : h.close(),
                                            [2]
                                          )
                                      }
                                    })
                                  })
                                })
                                .catch(n)
                            },
                            function () {
                              return o(a, void 0, void 0, function () {
                                return r(this, function (e) {
                                  switch (e.label) {
                                    case 0:
                                      return [
                                        4,
                                        M(f.loadingText, function () {
                                          return Formily.Shared.applyMiddleware(
                                            c.form,
                                            c.cancelMiddlewares
                                          )
                                        }),
                                      ]
                                    case 1:
                                      return (
                                        e.sent(),
                                        f.beforeClose
                                          ? f.beforeClose(function () {
                                              h.close()
                                            })
                                          : h.close(),
                                        [2]
                                      )
                                  }
                                })
                              })
                            }
                          ),
                          [2]
                        )
                    }
                  })
                })
              })),
            c.promise
          )
        },
        close: function () {
          c.root && m(!1)
        },
      }
    return h
  }
  var no = VueCompositionAPI.defineComponent({
    name: 'FFormDialogFooter',
    setup: function (e, t) {
      var n = t.slots
      return function () {
        return Formily.Vue.h(qn, { props: { to: Qn } }, n)
      }
    },
  })
  ;(to.Footer = no), (to.Portal = k('form-dialog'))
  var oo = 'FormDrawerFooter',
    ro = function (e) {
      return (function (e) {
        return (
          Formily.Shared.isNum(e) ||
          Formily.Shared.isStr(e) ||
          Formily.Shared.isBool(e) ||
          P(e)
        )
      })(e)
        ? { title: e }
        : e
    }
  function io(e, a, u) {
    var l = this
    ;(Formily.Shared.isFn(a) || P(a)) && ((u = a), (a = 'form-drawer'))
    var s = ''.concat(i, '-form-drawer'),
      c = {
        root: document.createElement('div'),
        form: null,
        promise: null,
        instance: null,
        openMiddlewares: [],
        confirmMiddlewares: [],
        cancelMiddlewares: [],
      }
    document.body.appendChild(c.root)
    var d = ro(e),
      f = t(t({}, d), {
        onClosed: function () {
          var e, t, n
          null === (e = d.onClosed) || void 0 === e || e.call(d),
            c.instance.$destroy(),
            (c.instance = null),
            null ===
              (n =
                null === (t = c.root) || void 0 === t
                  ? void 0
                  : t.parentNode) ||
              void 0 === n ||
              n.removeChild(c.root),
            (c.root = void 0)
        },
      }),
      p = Formily.ReactiveVue.observer(
        VueCompositionAPI.defineComponent({
          setup: function () {
            return function () {
              return Formily.Vue.h(
                Formily.Vue.Fragment,
                {},
                {
                  default: function () {
                    return I(u, { form: c.form })
                  },
                }
              )
            }
          },
        })
      ),
      m = function (e, o, r) {
        if ((void 0 === e && (e = !0), !c.instance)) {
          var i = Vue.extend({
            props: ['drawerProps'],
            data: function () {
              return { visible: !1 }
            },
            render: function () {
              var e = this,
                i = this.drawerProps,
                a = i.onClose,
                u = i.onClosed,
                l = i.onOpen,
                d = i.onOpend,
                f = i.onOK,
                m = i.onCancel,
                h = i.title,
                v = i.footer,
                y = i.okText,
                g = i.cancelText,
                b = i.okButtonProps,
                F = i.cancelButtonProps,
                V = n(i, [
                  'onClose',
                  'onClosed',
                  'onOpen',
                  'onOpend',
                  'onOK',
                  'onCancel',
                  'title',
                  'footer',
                  'okText',
                  'cancelText',
                  'okButtonProps',
                  'cancelButtonProps',
                ])
              return Formily.Vue.h(
                Formily.Vue.FormProvider,
                { props: { form: c.form } },
                {
                  default: function () {
                    return Formily.Vue.h(
                      Element.Drawer,
                      {
                        class: [''.concat(s)],
                        attrs: t({ visible: e.visible }, V),
                        on: {
                          'update:visible': function (t) {
                            e.visible = t
                          },
                          close: function () {
                            null == a || a()
                          },
                          closed: function () {
                            null == u || u()
                          },
                          open: function () {
                            null == l || l()
                          },
                          opend: function () {
                            null == d || d()
                          },
                        },
                      },
                      {
                        default: function () {
                          return [
                            Formily.Vue.h(
                              'div',
                              { class: [''.concat(s, '-body')] },
                              {
                                default: function () {
                                  return Formily.Vue.h(p, {}, {})
                                },
                              }
                            ),
                            Formily.Vue.h(
                              'div',
                              { class: [''.concat(s, '-footer')] },
                              {
                                default: function () {
                                  var e = Formily.Vue.h(
                                    Yn,
                                    { props: { name: oo, slim: !0 } },
                                    {}
                                  )
                                  return null === v
                                    ? [null, e]
                                    : v
                                    ? [I(v), e]
                                    : [
                                        Formily.Vue.h(
                                          Element.Button,
                                          {
                                            attrs: F,
                                            on: {
                                              click: function (e) {
                                                null == m || m(e), r()
                                              },
                                            },
                                          },
                                          {
                                            default: function () {
                                              return I(
                                                g ||
                                                  Ve(
                                                    'el.popconfirm.cancelButtonText'
                                                  )
                                              )
                                            },
                                          }
                                        ),
                                        Formily.Vue.h(
                                          Element.Button,
                                          {
                                            attrs: t({ type: 'primary' }, b),
                                            on: {
                                              click: function (e) {
                                                null == f || f(e), o()
                                              },
                                            },
                                          },
                                          {
                                            default: function () {
                                              return I(
                                                y ||
                                                  Ve(
                                                    'el.popconfirm.confirmButtonText'
                                                  )
                                              )
                                            },
                                          }
                                        ),
                                        e,
                                      ]
                                },
                              }
                            ),
                          ]
                        },
                        title: function () {
                          return Formily.Vue.h(
                            'div',
                            {},
                            {
                              default: function () {
                                return I(h)
                              },
                            }
                          )
                        },
                      }
                    )
                  },
                }
              )
            },
          })
          ;(c.instance = new i({
            propsData: { drawerProps: f },
            parent: T(a),
          })),
            c.instance.$mount(c.root)
        }
        c.instance.visible = e
      },
      h = {
        forOpen: function (e) {
          return Formily.Shared.isFn(e) && c.openMiddlewares.push(e), h
        },
        forConfirm: function (e) {
          return Formily.Shared.isFn(e) && c.confirmMiddlewares.push(e), h
        },
        forCancel: function (e) {
          return Formily.Shared.isFn(e) && c.cancelMiddlewares.push(e), h
        },
        open: function (e) {
          return (
            c.promise ||
              (c.promise = new Promise(function (t, n) {
                return o(l, void 0, void 0, function () {
                  var i,
                    a = this
                  return r(this, function (u) {
                    switch (u.label) {
                      case 0:
                        return (
                          u.trys.push([0, 2, , 3]),
                          [
                            4,
                            M(f.loadingText, function () {
                              return Formily.Shared.applyMiddleware(
                                e,
                                c.openMiddlewares
                              )
                            }),
                          ]
                        )
                      case 1:
                        return (
                          (e = u.sent()),
                          (c.form = c.form || Formily.Core.createForm(e)),
                          [3, 3]
                        )
                      case 2:
                        return (i = u.sent()), n(i), [3, 3]
                      case 3:
                        return (
                          m(
                            !0,
                            function () {
                              c.form
                                .submit(function () {
                                  return o(a, void 0, void 0, function () {
                                    return r(this, function (e) {
                                      switch (e.label) {
                                        case 0:
                                          return [
                                            4,
                                            Formily.Shared.applyMiddleware(
                                              c.form,
                                              c.confirmMiddlewares
                                            ),
                                          ]
                                        case 1:
                                          return (
                                            e.sent(),
                                            t(
                                              Formily.Reactive.toJS(
                                                c.form.values
                                              )
                                            ),
                                            f.beforeClose
                                              ? setTimeout(function () {
                                                  f.beforeClose(function () {
                                                    h.close()
                                                  })
                                                })
                                              : h.close(),
                                            [2]
                                          )
                                      }
                                    })
                                  })
                                })
                                .catch(n)
                            },
                            function () {
                              return o(a, void 0, void 0, function () {
                                return r(this, function (e) {
                                  switch (e.label) {
                                    case 0:
                                      return [
                                        4,
                                        M(f.loadingText, function () {
                                          return Formily.Shared.applyMiddleware(
                                            c.form,
                                            c.cancelMiddlewares
                                          )
                                        }),
                                      ]
                                    case 1:
                                      return (
                                        e.sent(),
                                        f.beforeClose
                                          ? f.beforeClose(function () {
                                              h.close()
                                            })
                                          : h.close(),
                                        [2]
                                      )
                                  }
                                })
                              })
                            }
                          ),
                          [2]
                        )
                    }
                  })
                })
              })),
            c.promise
          )
        },
        close: function () {
          c.root && m(!1)
        },
      }
    return h
  }
  var ao = VueCompositionAPI.defineComponent({
    name: 'FFormDrawerFooter',
    setup: function (e, t) {
      var n = t.slots
      return function () {
        return Formily.Vue.h(qn, { props: { to: oo } }, n)
      }
    },
  })
  ;(io.Footer = ao),
    (io.Protal = k('form-drawer')),
    (e.ArrayBase = U),
    (e.ArrayCards = Cn),
    (e.ArrayCollapse = On),
    (e.ArrayCollapseInner = Sn),
    (e.ArrayCollapseItem = In),
    (e.ArrayItems = Mn),
    (e.ArrayTable = ce),
    (e.ArrayTabs = En),
    (e.Cascader = je),
    (e.Checkbox = Le),
    (e.DatePicker = He),
    (e.Editable = jn),
    (e.ElForm = Ue),
    (e.ElFormItem = qe),
    (e.Form = Ze),
    (e.FormBaseItem = Ft),
    (e.FormButtonGroup = wt),
    (e.FormCollapse = fn),
    (e.FormCollapseItem = dn),
    (e.FormDialog = to),
    (e.FormDrawer = io),
    (e.FormGrid = $t),
    (e.FormItem = Ct),
    (e.FormLayout = te),
    (e.FormLayoutDeepContext = Z),
    (e.FormLayoutShallowContext = J),
    (e.FormStep = yn),
    (e.FormTab = hn),
    (e.Input = zt),
    (e.InputNumber = Kt),
    (e.Password = Ut),
    (e.PreviewText = _e),
    (e.Radio = Jt),
    (e.Reset = Xt),
    (e.Select = en),
    (e.Space = oe),
    (e.Submit = tn),
    (e.Switch = nn),
    (e.TimePicker = rn),
    (e.Transfer = an),
    (e.Upload = ln),
    (e.createFormGrid = Bt),
    (e.useFormDeepLayout = X),
    (e.useFormGrid = Nt),
    (e.useFormLayout = ee),
    (e.useFormShallowLayout = Q),
    (e.useGridColumn = function (e) {
      return void 0 === e && (e = 1), e
    }),
    (e.usePlaceholder = ke),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
//# sourceMappingURL=formily.element.umd.production.js.map
