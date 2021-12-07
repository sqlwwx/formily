;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define('formily.element', ['exports'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        ((global.Formily = global.Formily || {}), (global.Formily.Element = {}))
      ))
})(this, function (exports) {
  'use strict'

  ;(function () {
    const env = { NODE_ENV: 'development' }
    try {
      if (process) {
        process.env = Object.assign({}, process.env)
        Object.assign(process.env, env)
        return
      }
    } catch (e) {} // avoid ReferenceError: process is not defined
    globalThis.process = { env: env }
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

  var __assign$2 = function () {
    __assign$2 =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign$2.apply(this, arguments)
  }

  function __rest(s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }

  function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this
        }),
      g
    )
    function verb(n) {
      return function (v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }

  var stylePrefix = 'formily-element'

  // Export Sortable Element Component Mixin
  var ElementMixin = {
    inject: ['manager'],
    props: {
      index: {
        type: Number,
        required: true,
      },
      collection: {
        type: [String, Number],
        default: 'default',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },

    mounted: function mounted() {
      var _$props = this.$props,
        collection = _$props.collection,
        disabled = _$props.disabled,
        index = _$props.index

      if (!disabled) {
        this.setDraggable(collection, index)
      }
    },

    watch: {
      index: function index(newIndex) {
        if (this.$el && this.$el.sortableInfo) {
          this.$el.sortableInfo.index = newIndex
        }
      },
      disabled: function disabled(isDisabled) {
        if (isDisabled) {
          this.removeDraggable(this.collection)
        } else {
          this.setDraggable(this.collection, this.index)
        }
      },
      collection: function collection(newCollection, oldCollection) {
        this.removeDraggable(oldCollection)
        this.setDraggable(newCollection, this.index)
      },
    },

    beforeDestroy: function beforeDestroy() {
      var collection = this.collection,
        disabled = this.disabled

      if (!disabled) this.removeDraggable(collection)
    },

    methods: {
      setDraggable: function setDraggable(collection, index) {
        var node = this.$el

        node.sortableInfo = {
          index: index,
          collection: collection,
          manager: this.manager,
        }

        this.ref = { node: node }
        this.manager.add(collection, this.ref)
      },
      removeDraggable: function removeDraggable(collection) {
        this.manager.remove(collection, this.ref)
      },
    },
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }

  var createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()

  var slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = []
      var _n = true
      var _d = false
      var _e = undefined

      try {
        for (
          var _i = arr[Symbol.iterator](), _s;
          !(_n = (_s = _i.next()).done);
          _n = true
        ) {
          _arr.push(_s.value)

          if (i && _arr.length === i) break
        }
      } catch (err) {
        _d = true
        _e = err
      } finally {
        try {
          if (!_n && _i['return']) _i['return']()
        } finally {
          if (_d) throw _e
        }
      }

      return _arr
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i)
      } else {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        )
      }
    }
  })()

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
        arr2[i] = arr[i]

      return arr2
    } else {
      return Array.from(arr)
    }
  }

  var Manager = (function () {
    function Manager() {
      classCallCheck(this, Manager)

      this.refs = {}
    }

    createClass(Manager, [
      {
        key: 'add',
        value: function add(collection, ref) {
          if (!this.refs[collection]) {
            this.refs[collection] = []
          }

          this.refs[collection].push(ref)
        },
      },
      {
        key: 'remove',
        value: function remove(collection, ref) {
          var index = this.getIndex(collection, ref)

          if (index !== -1) {
            this.refs[collection].splice(index, 1)
          }
        },
      },
      {
        key: 'isActive',
        value: function isActive() {
          return this.active
        },
      },
      {
        key: 'getActive',
        value: function getActive() {
          var _this = this

          return this.refs[this.active.collection].find(function (_ref) {
            var node = _ref.node
            return node.sortableInfo.index == _this.active.index
          })
        },
      },
      {
        key: 'getIndex',
        value: function getIndex(collection, ref) {
          return this.refs[collection].indexOf(ref)
        },
      },
      {
        key: 'getOrderedRefs',
        value: function getOrderedRefs() {
          var collection =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.active.collection

          return this.refs[collection].sort(function (a, b) {
            return a.node.sortableInfo.index - b.node.sortableInfo.index
          })
        },
      },
    ])
    return Manager
  })()

  function arrayMove(arr, previousIndex, newIndex) {
    var array = arr.slice(0)
    if (newIndex >= array.length) {
      var k = newIndex - array.length
      while (k-- + 1) {
        array.push(undefined)
      }
    }
    array.splice(newIndex, 0, array.splice(previousIndex, 1)[0])
    return array
  }

  var events = {
    start: ['touchstart', 'mousedown'],
    move: ['touchmove', 'mousemove'],
    end: ['touchend', 'touchcancel', 'mouseup'],
  }

  var vendorPrefix = (function () {
    if (typeof window === 'undefined' || typeof document === 'undefined')
      return '' // server environment
    // fix for:
    //    https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //    window.getComputedStyle() returns null inside an iframe with display: none
    // in this case return an array with a fake mozilla style in it.
    var styles = window.getComputedStyle(document.documentElement, '') || [
      '-moz-hidden-iframe',
    ]
    var pre = (Array.prototype.slice
      .call(styles)
      .join('')
      .match(/-(moz|webkit|ms)-/) ||
      (styles.OLink === '' && ['', 'o']))[1]

    switch (pre) {
      case 'ms':
        return 'ms'
      default:
        return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : ''
    }
  })()

  function closest(el, fn) {
    while (el) {
      if (fn(el)) return el
      el = el.parentNode
    }
  }

  function limit(min, max, value) {
    if (value < min) {
      return min
    }
    if (value > max) {
      return max
    }
    return value
  }

  function getCSSPixelValue(stringValue) {
    if (stringValue.substr(-2) === 'px') {
      return parseFloat(stringValue)
    }
    return 0
  }

  function getElementMargin(element) {
    var style = window.getComputedStyle(element)

    return {
      top: getCSSPixelValue(style.marginTop),
      right: getCSSPixelValue(style.marginRight),
      bottom: getCSSPixelValue(style.marginBottom),
      left: getCSSPixelValue(style.marginLeft),
    }
  }

  // Export Sortable Container Component Mixin
  var ContainerMixin = {
    data: function data() {
      return {
        sorting: false,
        sortingIndex: null,
        manager: new Manager(),
        events: {
          start: this.handleStart,
          move: this.handleMove,
          end: this.handleEnd,
        },
      }
    },

    props: {
      value: { type: Array, required: true },
      axis: { type: String, default: 'y' }, // 'x', 'y', 'xy'
      distance: { type: Number, default: 0 },
      pressDelay: { type: Number, default: 0 },
      pressThreshold: { type: Number, default: 5 },
      useDragHandle: { type: Boolean, default: false },
      useWindowAsScrollContainer: { type: Boolean, default: false },
      hideSortableGhost: { type: Boolean, default: true },
      lockToContainerEdges: { type: Boolean, default: false },
      lockOffset: { type: [String, Number, Array], default: '50%' },
      transitionDuration: { type: Number, default: 300 },
      appendTo: { type: String, default: 'body' },
      draggedSettlingDuration: { type: Number, default: null },
      lockAxis: String,
      helperClass: String,
      contentWindow: Object,
      shouldCancelStart: {
        type: Function,
        default: function _default(e) {
          // Cancel sorting if the event target is an `input`, `textarea`, `select` or `option`
          var disabledElements = [
            'input',
            'textarea',
            'select',
            'option',
            'button',
          ]
          return disabledElements.indexOf(e.target.tagName.toLowerCase()) !== -1
        },
      },
      getHelperDimensions: {
        type: Function,
        default: function _default(_ref) {
          var node = _ref.node
          return {
            width: node.offsetWidth,
            height: node.offsetHeight,
          }
        },
      },
    },

    provide: function provide() {
      return {
        manager: this.manager,
      }
    },
    mounted: function mounted() {
      var _this = this

      this.container = this.$el
      this.document = this.container.ownerDocument || document
      this._window = this.contentWindow || window
      this.scrollContainer = this.useWindowAsScrollContainer
        ? this.document.body
        : this.container

      var _loop = function _loop(key) {
        if (_this.events.hasOwnProperty(key)) {
          events[key].forEach(function (eventName) {
            return _this.container.addEventListener(
              eventName,
              _this.events[key],
              { passive: true }
            )
          })
        }
      }

      for (var key in this.events) {
        _loop(key)
      }
    },
    beforeDestroy: function beforeDestroy() {
      var _this2 = this

      var _loop2 = function _loop2(key) {
        if (_this2.events.hasOwnProperty(key)) {
          events[key].forEach(function (eventName) {
            return _this2.container.removeEventListener(
              eventName,
              _this2.events[key]
            )
          })
        }
      }

      for (var key in this.events) {
        _loop2(key)
      }
    },

    methods: {
      handleStart: function handleStart(e) {
        var _this3 = this

        var _$props = this.$props,
          distance = _$props.distance,
          shouldCancelStart = _$props.shouldCancelStart

        if (e.button === 2 || shouldCancelStart(e)) {
          return false
        }

        this._touched = true
        this._pos = this.getOffset(e)

        var node = closest(e.target, function (el) {
          return el.sortableInfo != null
        })

        if (
          node &&
          node.sortableInfo &&
          this.nodeIsChild(node) &&
          !this.sorting
        ) {
          var useDragHandle = this.$props.useDragHandle
          var _node$sortableInfo = node.sortableInfo,
            index = _node$sortableInfo.index,
            collection = _node$sortableInfo.collection

          if (
            useDragHandle &&
            !closest(e.target, function (el) {
              return el.sortableHandle != null
            })
          )
            return

          this.manager.active = { index: index, collection: collection }

          /*
           * Fixes a bug in Firefox where the :active state of anchor tags
           * prevent subsequent 'mousemove' events from being fired
           * (see https://github.com/clauderic/react-sortable-hoc/issues/118)
           */
          if (e.target.tagName.toLowerCase() === 'a') {
            e.preventDefault()
          }

          if (!distance) {
            if (this.$props.pressDelay === 0) {
              this.handlePress(e)
            } else {
              this.pressTimer = setTimeout(function () {
                return _this3.handlePress(e)
              }, this.$props.pressDelay)
            }
          }
        }
      },
      nodeIsChild: function nodeIsChild(node) {
        return node.sortableInfo.manager === this.manager
      },
      handleMove: function handleMove(e) {
        var _$props2 = this.$props,
          distance = _$props2.distance,
          pressThreshold = _$props2.pressThreshold

        if (!this.sorting && this._touched) {
          var offset = this.getOffset(e)
          this._delta = {
            x: this._pos.x - offset.x,
            y: this._pos.y - offset.y,
          }
          var delta = Math.abs(this._delta.x) + Math.abs(this._delta.y)

          if (
            !distance &&
            (!pressThreshold || (pressThreshold && delta >= pressThreshold))
          ) {
            clearTimeout(this.cancelTimer)
            this.cancelTimer = setTimeout(this.cancel, 0)
          } else if (distance && delta >= distance && this.manager.isActive()) {
            this.handlePress(e)
          }
        }
      },
      handleEnd: function handleEnd() {
        var distance = this.$props.distance

        this._touched = false

        if (!distance) {
          this.cancel()
        }
      },
      cancel: function cancel() {
        if (!this.sorting) {
          clearTimeout(this.pressTimer)
          this.manager.active = null
        }
      },
      handlePress: function handlePress(e) {
        var _this4 = this

        e.stopPropagation()
        var active = this.manager.getActive()

        if (active) {
          var _$props3 = this.$props,
            axis = _$props3.axis,
            getHelperDimensions = _$props3.getHelperDimensions,
            helperClass = _$props3.helperClass,
            hideSortableGhost = _$props3.hideSortableGhost,
            useWindowAsScrollContainer = _$props3.useWindowAsScrollContainer,
            appendTo = _$props3.appendTo
          var node = active.node,
            collection = active.collection
          var index = node.sortableInfo.index

          var margin = getElementMargin(node)

          var containerBoundingRect = this.container.getBoundingClientRect()
          var dimensions = getHelperDimensions({
            index: index,
            node: node,
            collection: collection,
          })

          this.node = node
          this.margin = margin
          this.width = dimensions.width
          this.height = dimensions.height
          this.marginOffset = {
            x: this.margin.left + this.margin.right,
            y: Math.max(this.margin.top, this.margin.bottom),
          }
          this.boundingClientRect = node.getBoundingClientRect()
          this.containerBoundingRect = containerBoundingRect
          this.index = index
          this.newIndex = index

          this._axis = {
            x: axis.indexOf('x') >= 0,
            y: axis.indexOf('y') >= 0,
          }
          this.offsetEdge = this.getEdgeOffset(node)
          this.initialOffset = this.getOffset(e)
          this.initialScroll = {
            top: this.scrollContainer.scrollTop,
            left: this.scrollContainer.scrollLeft,
          }

          this.initialWindowScroll = {
            top: window.pageYOffset,
            left: window.pageXOffset,
          }

          var fields = node.querySelectorAll('input, textarea, select')
          var clonedNode = node.cloneNode(true)
          var clonedFields = [].concat(
            toConsumableArray(
              clonedNode.querySelectorAll('input, textarea, select')
            )
          ) // Convert NodeList to Array

          clonedFields.forEach(function (field, index) {
            if (field.type !== 'file' && fields[index]) {
              field.value = fields[index].value
            }
          })

          this.helper = this.document
            .querySelector(appendTo)
            .appendChild(clonedNode)

          this.helper.style.position = 'fixed'
          this.helper.style.top =
            this.boundingClientRect.top - margin.top + 'px'
          this.helper.style.left =
            this.boundingClientRect.left - margin.left + 'px'
          this.helper.style.width = this.width + 'px'
          this.helper.style.height = this.height + 'px'
          this.helper.style.boxSizing = 'border-box'
          this.helper.style.pointerEvents = 'none'

          if (hideSortableGhost) {
            this.sortableGhost = node
            node.style.visibility = 'hidden'
            node.style.opacity = 0
          }

          this.translate = {}
          this.minTranslate = {}
          this.maxTranslate = {}
          if (this._axis.x) {
            this.minTranslate.x =
              (useWindowAsScrollContainer ? 0 : containerBoundingRect.left) -
              this.boundingClientRect.left -
              this.width / 2
            this.maxTranslate.x =
              (useWindowAsScrollContainer
                ? this._window.innerWidth
                : containerBoundingRect.left + containerBoundingRect.width) -
              this.boundingClientRect.left -
              this.width / 2
          }
          if (this._axis.y) {
            this.minTranslate.y =
              (useWindowAsScrollContainer ? 0 : containerBoundingRect.top) -
              this.boundingClientRect.top -
              this.height / 2
            this.maxTranslate.y =
              (useWindowAsScrollContainer
                ? this._window.innerHeight
                : containerBoundingRect.top + containerBoundingRect.height) -
              this.boundingClientRect.top -
              this.height / 2
          }

          if (helperClass) {
            var _helper$classList

            ;(_helper$classList = this.helper.classList).add.apply(
              _helper$classList,
              toConsumableArray(helperClass.split(' '))
            )
          }

          this.listenerNode = e.touches ? node : this._window
          events.move.forEach(function (eventName) {
            return _this4.listenerNode.addEventListener(
              eventName,
              _this4.handleSortMove,
              false
            )
          })
          events.end.forEach(function (eventName) {
            return _this4.listenerNode.addEventListener(
              eventName,
              _this4.handleSortEnd,
              false
            )
          })

          this.sorting = true
          this.sortingIndex = index

          this.$emit('sort-start', {
            event: e,
            node: node,
            index: index,
            collection: collection,
          })
        }
      },
      handleSortMove: function handleSortMove(e) {
        e.preventDefault() // Prevent scrolling on mobile

        this.updatePosition(e)
        this.animateNodes()
        this.autoscroll()

        this.$emit('sort-move', { event: e })
      },
      handleSortEnd: function handleSortEnd(e) {
        var _this5 = this

        var collection = this.manager.active.collection

        // Remove the event listeners if the node is still in the DOM

        if (this.listenerNode) {
          events.move.forEach(function (eventName) {
            return _this5.listenerNode.removeEventListener(
              eventName,
              _this5.handleSortMove
            )
          })
          events.end.forEach(function (eventName) {
            return _this5.listenerNode.removeEventListener(
              eventName,
              _this5.handleSortEnd
            )
          })
        }

        var nodes = this.manager.refs[collection]

        var onEnd = function onEnd() {
          // Remove the helper from the DOM
          _this5.helper.parentNode.removeChild(_this5.helper)

          if (_this5.hideSortableGhost && _this5.sortableGhost) {
            _this5.sortableGhost.style.visibility = ''
            _this5.sortableGhost.style.opacity = ''
          }

          for (var i = 0, len = nodes.length; i < len; i++) {
            var node = nodes[i]
            var el = node.node

            // Clear the cached offsetTop / offsetLeft value
            node.edgeOffset = null

            // Remove the transforms / transitions
            el.style[vendorPrefix + 'Transform'] = ''
            el.style[vendorPrefix + 'TransitionDuration'] = ''
          }

          // Stop autoscroll
          clearInterval(_this5.autoscrollInterval)
          _this5.autoscrollInterval = null

          // Update state
          _this5.manager.active = null

          _this5.sorting = false
          _this5.sortingIndex = null

          _this5.$emit('sort-end', {
            event: e,
            oldIndex: _this5.index,
            newIndex: _this5.newIndex,
            collection: collection,
          })
          _this5.$emit(
            'input',
            arrayMove(_this5.value, _this5.index, _this5.newIndex)
          )

          _this5._touched = false
        }

        if (
          this.$props.transitionDuration ||
          this.$props.draggedSettlingDuration
        ) {
          this.transitionHelperIntoPlace(nodes).then(function () {
            return onEnd()
          })
        } else {
          onEnd()
        }
      },
      transitionHelperIntoPlace: function transitionHelperIntoPlace(nodes) {
        var _this6 = this

        if (this.$props.draggedSettlingDuration === 0 || nodes.length === 0) {
          return Promise.resolve()
        }

        var deltaScroll = {
          left: this.scrollContainer.scrollLeft - this.initialScroll.left,
          top: this.scrollContainer.scrollTop - this.initialScroll.top,
        }
        var indexNode = nodes[this.index].node
        var newIndexNode = nodes[this.newIndex].node

        var targetX = -deltaScroll.left
        if (this.translate && this.translate.x > 0) {
          // Diff against right edge when moving to the right
          targetX +=
            newIndexNode.offsetLeft +
            newIndexNode.offsetWidth -
            (indexNode.offsetLeft + indexNode.offsetWidth)
        } else {
          targetX += newIndexNode.offsetLeft - indexNode.offsetLeft
        }

        var targetY = -deltaScroll.top
        if (this.translate && this.translate.y > 0) {
          // Diff against the bottom edge when moving down
          targetY +=
            newIndexNode.offsetTop +
            newIndexNode.offsetHeight -
            (indexNode.offsetTop + indexNode.offsetHeight)
        } else {
          targetY += newIndexNode.offsetTop - indexNode.offsetTop
        }

        var duration =
          this.$props.draggedSettlingDuration !== null
            ? this.$props.draggedSettlingDuration
            : this.$props.transitionDuration

        this.helper.style[vendorPrefix + 'Transform'] =
          'translate3d(' + targetX + 'px,' + targetY + 'px, 0)'
        this.helper.style[vendorPrefix + 'TransitionDuration'] = duration + 'ms'

        return new Promise(function (resolve) {
          // Register an event handler to clean up styles when the transition
          // finishes.
          var cleanup = function cleanup(event) {
            if (!event || event.propertyName === 'transform') {
              clearTimeout(cleanupTimer)
              _this6.helper.style[vendorPrefix + 'Transform'] = ''
              _this6.helper.style[vendorPrefix + 'TransitionDuration'] = ''
              resolve()
            }
          }
          // Force cleanup in case 'transitionend' never fires
          var cleanupTimer = setTimeout(cleanup, duration + 10)
          _this6.helper.addEventListener('transitionend', cleanup, false)
        })
      },
      getEdgeOffset: function getEdgeOffset(node) {
        var offset =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : { top: 0, left: 0 }

        // Get the actual offsetTop / offsetLeft value, no matter how deep the node is nested
        if (node) {
          var nodeOffset = {
            top: offset.top + node.offsetTop,
            left: offset.left + node.offsetLeft,
          }
          if (node.parentNode !== this.container) {
            return this.getEdgeOffset(node.parentNode, nodeOffset)
          } else {
            return nodeOffset
          }
        }
      },
      getOffset: function getOffset(e) {
        var _ref2 = e.touches ? e.touches[0] : e,
          pageX = _ref2.pageX,
          pageY = _ref2.pageY

        return {
          x: pageX,
          y: pageY,
        }
      },
      getLockPixelOffsets: function getLockPixelOffsets() {
        var lockOffset = this.$props.lockOffset

        if (!Array.isArray(this.lockOffset)) {
          lockOffset = [lockOffset, lockOffset]
        }

        if (lockOffset.length !== 2) {
          throw new Error(
            'lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given ' +
              lockOffset
          )
        }

        var _lockOffset = lockOffset,
          _lockOffset2 = slicedToArray(_lockOffset, 2),
          minLockOffset = _lockOffset2[0],
          maxLockOffset = _lockOffset2[1]

        return [
          this.getLockPixelOffset(minLockOffset),
          this.getLockPixelOffset(maxLockOffset),
        ]
      },
      getLockPixelOffset: function getLockPixelOffset(lockOffset) {
        var offsetX = lockOffset
        var offsetY = lockOffset
        var unit = 'px'

        if (typeof lockOffset === 'string') {
          var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset)

          if (match === null) {
            throw new Error(
              'lockOffset value should be a number or a string of a number followed by "px" or "%". Given ' +
                lockOffset
            )
          }

          offsetX = offsetY = parseFloat(lockOffset)
          unit = match[1]
        }

        if (!isFinite(offsetX) || !isFinite(offsetY)) {
          throw new Error(
            'lockOffset value should be a finite. Given ' + lockOffset
          )
        }

        if (unit === '%') {
          offsetX = (offsetX * this.width) / 100
          offsetY = (offsetY * this.height) / 100
        }

        return {
          x: offsetX,
          y: offsetY,
        }
      },
      updatePosition: function updatePosition(e) {
        var _$props4 = this.$props,
          lockAxis = _$props4.lockAxis,
          lockToContainerEdges = _$props4.lockToContainerEdges

        var offset = this.getOffset(e)
        var translate = {
          x: offset.x - this.initialOffset.x,
          y: offset.y - this.initialOffset.y,
        }
        // Adjust for window scroll
        translate.y -= window.pageYOffset - this.initialWindowScroll.top
        translate.x -= window.pageXOffset - this.initialWindowScroll.left

        this.translate = translate

        if (lockToContainerEdges) {
          var _getLockPixelOffsets = this.getLockPixelOffsets(),
            _getLockPixelOffsets2 = slicedToArray(_getLockPixelOffsets, 2),
            minLockOffset = _getLockPixelOffsets2[0],
            maxLockOffset = _getLockPixelOffsets2[1]

          var minOffset = {
            x: this.width / 2 - minLockOffset.x,
            y: this.height / 2 - minLockOffset.y,
          }
          var maxOffset = {
            x: this.width / 2 - maxLockOffset.x,
            y: this.height / 2 - maxLockOffset.y,
          }

          translate.x = limit(
            this.minTranslate.x + minOffset.x,
            this.maxTranslate.x - maxOffset.x,
            translate.x
          )
          translate.y = limit(
            this.minTranslate.y + minOffset.y,
            this.maxTranslate.y - maxOffset.y,
            translate.y
          )
        }

        if (lockAxis === 'x') {
          translate.y = 0
        } else if (lockAxis === 'y') {
          translate.x = 0
        }

        this.helper.style[vendorPrefix + 'Transform'] =
          'translate3d(' + translate.x + 'px,' + translate.y + 'px, 0)'
      },
      animateNodes: function animateNodes() {
        var _$props5 = this.$props,
          transitionDuration = _$props5.transitionDuration,
          hideSortableGhost = _$props5.hideSortableGhost

        var nodes = this.manager.getOrderedRefs()
        var deltaScroll = {
          left: this.scrollContainer.scrollLeft - this.initialScroll.left,
          top: this.scrollContainer.scrollTop - this.initialScroll.top,
        }
        var sortingOffset = {
          left: this.offsetEdge.left + this.translate.x + deltaScroll.left,
          top: this.offsetEdge.top + this.translate.y + deltaScroll.top,
        }
        var scrollDifference = {
          top: window.pageYOffset - this.initialWindowScroll.top,
          left: window.pageXOffset - this.initialWindowScroll.left,
        }
        this.newIndex = null

        for (var i = 0, len = nodes.length; i < len; i++) {
          var node = nodes[i].node

          var index = node.sortableInfo.index
          var width = node.offsetWidth
          var height = node.offsetHeight
          var offset = {
            width: this.width > width ? width / 2 : this.width / 2,
            height: this.height > height ? height / 2 : this.height / 2,
          }

          var translate = {
            x: 0,
            y: 0,
          }
          var edgeOffset = nodes[i].edgeOffset

          // If we haven't cached the node's offsetTop / offsetLeft value

          if (!edgeOffset) {
            nodes[i].edgeOffset = edgeOffset = this.getEdgeOffset(node)
          }

          // Get a reference to the next and previous node
          var nextNode = i < nodes.length - 1 && nodes[i + 1]
          var prevNode = i > 0 && nodes[i - 1]

          // Also cache the next node's edge offset if needed.
          // We need this for calculating the animation in a grid setup
          if (nextNode && !nextNode.edgeOffset) {
            nextNode.edgeOffset = this.getEdgeOffset(nextNode.node)
          }

          // If the node is the one we're currently animating, skip it
          if (index === this.index) {
            if (hideSortableGhost) {
              /*
               * With windowing libraries such as `react-virtualized`, the sortableGhost
               * node may change while scrolling down and then back up (or vice-versa),
               * so we need to update the reference to the new node just to be safe.
               */
              this.sortableGhost = node
              node.style.visibility = 'hidden'
              node.style.opacity = 0
            }
            continue
          }

          if (transitionDuration) {
            node.style[vendorPrefix + 'TransitionDuration'] =
              transitionDuration + 'ms'
          }

          if (this._axis.x) {
            if (this._axis.y) {
              // Calculations for a grid setup
              if (
                index < this.index &&
                ((sortingOffset.left + scrollDifference.left - offset.width <=
                  edgeOffset.left &&
                  sortingOffset.top + scrollDifference.top <=
                    edgeOffset.top + offset.height) ||
                  sortingOffset.top + scrollDifference.top + offset.height <=
                    edgeOffset.top)
              ) {
                // If the current node is to the left on the same row, or above the node that's being dragged
                // then move it to the right
                translate.x = this.width + this.marginOffset.x
                if (
                  edgeOffset.left + translate.x >
                  this.containerBoundingRect.width - offset.width
                ) {
                  // If it moves passed the right bounds, then animate it to the first position of the next row.
                  // We just use the offset of the next node to calculate where to move, because that node's original position
                  // is exactly where we want to go
                  translate.x = nextNode.edgeOffset.left - edgeOffset.left
                  translate.y = nextNode.edgeOffset.top - edgeOffset.top
                }
                if (this.newIndex === null) {
                  this.newIndex = index
                }
              } else if (
                index > this.index &&
                ((sortingOffset.left + scrollDifference.left + offset.width >=
                  edgeOffset.left &&
                  sortingOffset.top + scrollDifference.top + offset.height >=
                    edgeOffset.top) ||
                  sortingOffset.top + scrollDifference.top + offset.height >=
                    edgeOffset.top + height)
              ) {
                // If the current node is to the right on the same row, or below the node that's being dragged
                // then move it to the left
                translate.x = -(this.width + this.marginOffset.x)
                if (
                  edgeOffset.left + translate.x <
                  this.containerBoundingRect.left + offset.width
                ) {
                  // If it moves passed the left bounds, then animate it to the last position of the previous row.
                  // We just use the offset of the previous node to calculate where to move, because that node's original position
                  // is exactly where we want to go
                  translate.x = prevNode.edgeOffset.left - edgeOffset.left
                  translate.y = prevNode.edgeOffset.top - edgeOffset.top
                }
                this.newIndex = index
              }
            } else {
              if (
                index > this.index &&
                sortingOffset.left + scrollDifference.left + offset.width >=
                  edgeOffset.left
              ) {
                translate.x = -(this.width + this.marginOffset.x)
                this.newIndex = index
              } else if (
                index < this.index &&
                sortingOffset.left + scrollDifference.left <=
                  edgeOffset.left + offset.width
              ) {
                translate.x = this.width + this.marginOffset.x
                if (this.newIndex == null) {
                  this.newIndex = index
                }
              }
            }
          } else if (this._axis.y) {
            if (
              index > this.index &&
              sortingOffset.top + scrollDifference.top + offset.height >=
                edgeOffset.top
            ) {
              translate.y = -(this.height + this.marginOffset.y)
              this.newIndex = index
            } else if (
              index < this.index &&
              sortingOffset.top + scrollDifference.top <=
                edgeOffset.top + offset.height
            ) {
              translate.y = this.height + this.marginOffset.y
              if (this.newIndex == null) {
                this.newIndex = index
              }
            }
          }
          node.style[vendorPrefix + 'Transform'] =
            'translate3d(' + translate.x + 'px,' + translate.y + 'px,0)'
        }

        if (this.newIndex == null) {
          this.newIndex = this.index
        }
      },
      autoscroll: function autoscroll() {
        var _this7 = this

        var translate = this.translate
        var direction = {
          x: 0,
          y: 0,
        }
        var speed = {
          x: 1,
          y: 1,
        }
        var acceleration = {
          x: 10,
          y: 10,
        }

        if (translate.y >= this.maxTranslate.y - this.height / 2) {
          direction.y = 1 // Scroll Down
          speed.y =
            acceleration.y *
            Math.abs(
              (this.maxTranslate.y - this.height / 2 - translate.y) /
                this.height
            )
        } else if (translate.x >= this.maxTranslate.x - this.width / 2) {
          direction.x = 1 // Scroll Right
          speed.x =
            acceleration.x *
            Math.abs(
              (this.maxTranslate.x - this.width / 2 - translate.x) / this.width
            )
        } else if (translate.y <= this.minTranslate.y + this.height / 2) {
          direction.y = -1 // Scroll Up
          speed.y =
            acceleration.y *
            Math.abs(
              (translate.y - this.height / 2 - this.minTranslate.y) /
                this.height
            )
        } else if (translate.x <= this.minTranslate.x + this.width / 2) {
          direction.x = -1 // Scroll Left
          speed.x =
            acceleration.x *
            Math.abs(
              (translate.x - this.width / 2 - this.minTranslate.x) / this.width
            )
        }

        if (this.autoscrollInterval) {
          clearInterval(this.autoscrollInterval)
          this.autoscrollInterval = null
          this.isAutoScrolling = false
        }

        if (direction.x !== 0 || direction.y !== 0) {
          this.autoscrollInterval = setInterval(function () {
            _this7.isAutoScrolling = true
            var offset = {
              left: 1 * speed.x * direction.x,
              top: 1 * speed.y * direction.y,
            }
            _this7.scrollContainer.scrollTop += offset.top
            _this7.scrollContainer.scrollLeft += offset.left
            _this7.translate.x += offset.left
            _this7.translate.y += offset.top
            _this7.animateNodes()
          }, 5)
        }
      },
    },
  }

  // Export Sortable Element Handle Directive
  var HandleDirective = {
    bind: function bind(el) {
      el.sortableHandle = true
    },
  }

  function create(name, mixin) {
    return {
      name: name,
      mixins: [mixin],
      props: {
        tag: {
          type: String,
          default: 'div',
        },
      },
      render: function render(h) {
        return h(this.tag, this.$slots.default)
      },
    }
  }

  var SlickList = create('slick-list', ContainerMixin)
  var SlickItem = create('slick-item', ElementMixin)

  function install(_vue) {
    _vue = _vue || Vue
    if (_vue && !_vue['__composition_api_installed__'])
      Vue.use(VueCompositionAPI)
  }

  install(Vue)
  Vue
  Vue.version

  /**VCA-EXPORTS**/
  VueCompositionAPI.EffectScope
  const _global_VueCompositionAPI_computed = VueCompositionAPI.computed
  VueCompositionAPI.createApp
  VueCompositionAPI.createRef
  VueCompositionAPI.customRef
  VueCompositionAPI.defineAsyncComponent
  const _global_VueCompositionAPI_defineComponent =
    VueCompositionAPI.defineComponent
  VueCompositionAPI.del
  VueCompositionAPI.effectScope
  VueCompositionAPI.getCurrentInstance
  VueCompositionAPI.getCurrentScope
  VueCompositionAPI.h
  VueCompositionAPI.inject
  VueCompositionAPI.isRaw
  VueCompositionAPI.isReactive
  VueCompositionAPI.isReadonly
  VueCompositionAPI.isRef
  VueCompositionAPI.markRaw
  VueCompositionAPI.nextTick
  VueCompositionAPI.onActivated
  VueCompositionAPI.onBeforeMount
  VueCompositionAPI.onBeforeUnmount
  VueCompositionAPI.onBeforeUpdate
  VueCompositionAPI.onDeactivated
  VueCompositionAPI.onErrorCaptured
  const _global_VueCompositionAPI_onMounted = VueCompositionAPI.onMounted
  VueCompositionAPI.onScopeDispose
  VueCompositionAPI.onServerPrefetch
  VueCompositionAPI.onUnmounted
  VueCompositionAPI.onUpdated
  VueCompositionAPI.provide
  VueCompositionAPI.proxyRefs
  VueCompositionAPI.reactive
  VueCompositionAPI.readonly
  const _global_VueCompositionAPI_ref = VueCompositionAPI.ref
  VueCompositionAPI.set
  VueCompositionAPI.shallowReactive
  VueCompositionAPI.shallowReadonly
  VueCompositionAPI.shallowRef
  VueCompositionAPI.toRaw
  VueCompositionAPI.toRef
  VueCompositionAPI.toRefs
  VueCompositionAPI.triggerRef
  VueCompositionAPI.unref
  VueCompositionAPI.useAttrs
  VueCompositionAPI.useCSSModule
  VueCompositionAPI.useCssModule
  VueCompositionAPI.useSlots
  VueCompositionAPI.warn
  VueCompositionAPI.watch
  VueCompositionAPI.watchEffect
  VueCompositionAPI.watchPostEffect
  VueCompositionAPI.watchSyncEffect
  /**VCA-EXPORTS**/

  Vue

  var transformComponent = function (tag, transformRules, defaultProps) {
    {
      return _global_VueCompositionAPI_defineComponent({
        setup: function (props, _a) {
          var attrs = _a.attrs,
            slots = _a.slots,
            listeners = _a.listeners
          return function () {
            var data = {
              attrs: __assign$2({}, attrs),
              on: __assign$2({}, listeners),
            }
            if (transformRules) {
              var transformListeners_1 = transformRules
              Object.keys(transformListeners_1).forEach(function (extract) {
                if (data.on !== undefined) {
                  data.on[transformListeners_1[extract]] = listeners[extract]
                }
              })
            }
            if (defaultProps) {
              data.attrs = Formily.Shared.merge(defaultProps, data.attrs)
            }
            return Formily.Vue.h(tag, data, slots)
          }
        },
      })
    }
  }

  function isValidElement(element) {
    return (
      isVueOptions(element) ||
      (element &&
        typeof element === 'object' &&
        'componentOptions' in element &&
        'context' in element &&
        element.tag !== undefined)
    ) // remove text node
  }
  function isVnode(element) {
    return (
      element &&
      typeof element === 'object' &&
      'componentOptions' in element &&
      'context' in element &&
      element.tag !== undefined
    )
  }
  function isVueOptions(options) {
    return (
      options &&
      (typeof options.template === 'string' ||
        typeof options.render === 'function')
    )
  }
  function composeExport(s0, s1) {
    return Object.assign(s0, s1)
  }

  var resolveComponent = function (child, props) {
    if (child) {
      if (typeof child === 'string' || typeof child === 'number') {
        return child
      } else if (typeof child === 'function') {
        return child(props)
      } else if (isVnode(child)) {
        return child
      } else {
        return VueCompositionAPI.h(VueCompositionAPI.toRaw(child), {
          props: props,
        })
      }
    }
    return null
  }

  var createContext = function (defaultValue) {
    var injectKey = Symbol()
    return {
      Provider: VueCompositionAPI.defineComponent({
        name: 'ContextProvider',
        props: {
          value: {
            type: null,
            default: function () {
              return defaultValue !== null && defaultValue !== void 0
                ? defaultValue
                : null
            },
          },
        },
        setup: function (props, _a) {
          var slots = _a.slots
          var value = VueCompositionAPI.toRef(props, 'value')
          VueCompositionAPI.provide(
            injectKey,
            VueCompositionAPI.readonly(value)
          )
          return function () {
            var _a
            return (_a =
              slots === null || slots === void 0 ? void 0 : slots.default) ===
              null || _a === void 0
              ? void 0
              : _a.call(slots)
          }
        },
      }),
      Consumer: VueCompositionAPI.defineComponent({
        name: 'ContextConsumer',
        setup: function (_props, _a) {
          var slots = _a.slots
          var value = VueCompositionAPI.inject(injectKey)
          return function () {
            var _a
            return (_a =
              slots === null || slots === void 0 ? void 0 : slots.default) ===
              null || _a === void 0
              ? void 0
              : _a.call(slots, value)
          }
        },
      }),
      injectKey: injectKey,
    }
  }
  var useContext = function (context) {
    var key = context.injectKey
    return VueCompositionAPI.inject(key, VueCompositionAPI.ref(null))
  }

  var PortalMap = new Map()
  var createPortalProvider = function (id) {
    var Portal = VueCompositionAPI.defineComponent({
      name: 'ProtalProvider',
      props: {
        id: {
          type: [String, Symbol],
          default: id,
        },
      },
      setup: function (props) {
        VueCompositionAPI.onBeforeUnmount(function () {
          var id = props.id
          if (id && PortalMap.has(id)) {
            PortalMap.delete(id)
          }
        })
      },
      render: function () {
        var id = this.id
        if (id && !PortalMap.has(id)) {
          PortalMap.set(id, this)
        }
        return Formily.Vue.h(Formily.Vue.Fragment, {}, this.$scopedSlots)
      },
    })
    return Portal
  }
  function getProtalContext(id) {
    return PortalMap.get(id)
  }

  var loading = function (loadingText, processor) {
    if (loadingText === void 0) {
      loadingText = 'Loading...'
    }
    return __awaiter(void 0, void 0, void 0, function () {
      var loadingInstance, loading
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            loadingInstance = null
            loading = setTimeout(function () {
              loadingInstance = Element.Loading.service({
                text: loadingText,
                background: 'transparent',
              })
            }, 100)
            _a.label = 1
          case 1:
            _a.trys.push([1, , 3, 4])
            return [4 /*yield*/, processor()]
          case 2:
            return [2 /*return*/, _a.sent()]
          case 3:
            loadingInstance === null || loadingInstance === void 0
              ? void 0
              : loadingInstance.close()
            clearTimeout(loading)
            return [7 /*endfinally*/]
          case 4:
            return [2 /*return*/]
        }
      })
    })
  }

  var ArrayBaseSymbol = Symbol('ArrayBaseContext')
  var ItemSymbol = Symbol('ItemContext')
  var useArray = function () {
    return VueCompositionAPI.inject(ArrayBaseSymbol, null)
  }
  var useIndex = function (index) {
    var indexRef = VueCompositionAPI.toRefs(
      VueCompositionAPI.inject(ItemSymbol)
    ).index
    return indexRef !== null && indexRef !== void 0
      ? indexRef
      : VueCompositionAPI.ref(index)
  }
  var useRecord = function (record) {
    var recordRef = VueCompositionAPI.toRefs(
      VueCompositionAPI.inject(ItemSymbol)
    ).record
    return recordRef !== null && recordRef !== void 0
      ? recordRef
      : VueCompositionAPI.ref(record)
  }
  var isObjectValue = function (schema) {
    var _a, _b
    if (
      Array.isArray(
        schema === null || schema === void 0 ? void 0 : schema.items
      )
    )
      return isObjectValue(schema.items[0])
    if (
      ((_a = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _a === void 0
        ? void 0
        : _a.type) === 'array' ||
      ((_b = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _b === void 0
        ? void 0
        : _b.type) === 'object'
    ) {
      return true
    }
    return false
  }
  var useKey = function (schema) {
    var isObject = isObjectValue(schema)
    var keyMap = null
    if (isObject) {
      keyMap = new WeakMap()
    } else {
      keyMap = []
    }
    VueCompositionAPI.onBeforeUnmount(function () {
      keyMap = null
    })
    return {
      keyMap: keyMap,
      getKey: function (record, index) {
        if (keyMap instanceof WeakMap) {
          if (!keyMap.has(record)) {
            keyMap.set(record, Formily.Shared.uid())
          }
          return ''.concat(keyMap.get(record), '-').concat(index)
        }
        if (!keyMap[index]) {
          keyMap[index] = Formily.Shared.uid()
        }
        return ''.concat(keyMap[index], '-').concat(index)
      },
    }
  }
  var getDefaultValue = function (defaultValue, schema) {
    var _a, _b, _c, _d, _e, _f, _g
    if (Formily.Shared.isValid(defaultValue))
      return Formily.Shared.clone(defaultValue)
    if (
      Array.isArray(
        schema === null || schema === void 0 ? void 0 : schema.items
      )
    )
      return getDefaultValue(defaultValue, schema.items[0])
    if (
      ((_a = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _a === void 0
        ? void 0
        : _a.type) === 'array'
    )
      return []
    if (
      ((_b = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _b === void 0
        ? void 0
        : _b.type) === 'boolean'
    )
      return true
    if (
      ((_c = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _c === void 0
        ? void 0
        : _c.type) === 'date'
    )
      return ''
    if (
      ((_d = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _d === void 0
        ? void 0
        : _d.type) === 'datetime'
    )
      return ''
    if (
      ((_e = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _e === void 0
        ? void 0
        : _e.type) === 'number'
    )
      return 0
    if (
      ((_f = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _f === void 0
        ? void 0
        : _f.type) === 'object'
    )
      return {}
    if (
      ((_g = schema === null || schema === void 0 ? void 0 : schema.items) ===
        null || _g === void 0
        ? void 0
        : _g.type) === 'string'
    )
      return ''
    return null
  }
  var ArrayBaseInner = VueCompositionAPI.defineComponent({
    name: 'ArrayBase',
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      keyMap: {
        type: [WeakMap, Array],
      },
    },
    setup: function (props, _a) {
      var slots = _a.slots,
        listeners = _a.listeners
      var field = Formily.Vue.useField()
      var schema = Formily.Vue.useFieldSchema()
      VueCompositionAPI.provide(ArrayBaseSymbol, {
        field: field,
        schema: schema,
        props: props,
        listeners: listeners,
        keyMap: props.keyMap,
      })
      return function () {
        return Formily.Vue.h(Formily.Vue.Fragment, {}, slots)
      }
    },
  })
  var ArrayBaseItem = VueCompositionAPI.defineComponent({
    name: 'ArrayBaseItem',
    props: ['index', 'record'],
    setup: function (props, _a) {
      var slots = _a.slots
      VueCompositionAPI.provide(ItemSymbol, props)
      return function () {
        return Formily.Vue.h(Formily.Vue.Fragment, {}, slots)
      }
    },
  })
  var ArrayBaseSortHandle = VueCompositionAPI.defineComponent({
    name: 'ArrayBaseSortHandle',
    props: ['index'],
    directives: {
      handle: HandleDirective,
    },
    setup: function (props, _a) {
      var attrs = _a.attrs
      var array = useArray()
      var prefixCls = ''.concat(stylePrefix, '-array-base')
      return function () {
        var _a
        if (!array) return null
        if (
          ((_a = array.field.value) === null || _a === void 0
            ? void 0
            : _a.pattern) !== 'editable'
        )
          return null
        return Formily.Vue.h(
          Element.Button,
          {
            directives: [{ name: 'handle' }],
            class: [''.concat(prefixCls, '-sort-handle')],
            attrs: __assign$2(
              { size: 'mini', type: 'text', icon: 'el-icon-rank' },
              attrs
            ),
          },
          {}
        )
      }
    },
  })
  var ArrayBaseIndex = VueCompositionAPI.defineComponent({
    name: 'ArrayBaseIndex',
    setup: function (props, _a) {
      var attrs = _a.attrs
      var index = useIndex()
      var prefixCls = ''.concat(stylePrefix, '-array-base')
      return function () {
        return Formily.Vue.h(
          'span',
          {
            class: ''.concat(prefixCls, '-index'),
            attrs: attrs,
          },
          {
            default: function () {
              return ['#'.concat(index.value + 1, '.')]
            },
          }
        )
      }
    },
  })
  var ArrayBaseAddition = VueCompositionAPI.defineComponent({
    name: 'ArrayBaseAddition',
    props: ['title', 'method', 'defaultValue'],
    setup: function (props, _a) {
      var listeners = _a.listeners
      var self = Formily.Vue.useField()
      var array = useArray()
      var prefixCls = ''.concat(stylePrefix, '-array-base')
      return function () {
        if (!array) return null
        if (
          (array === null || array === void 0
            ? void 0
            : array.field.value.pattern) !== 'editable'
        )
          return null
        return Formily.Vue.h(
          Element.Button,
          {
            class: ''.concat(prefixCls, '-addition'),
            attrs: __assign$2(
              { type: 'ghost', icon: 'qax-icon-Alone-Plus' },
              props
            ),
            on: __assign$2(__assign$2({}, listeners), {
              click: function (e) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k
                if (
                  (_a = array.props) === null || _a === void 0
                    ? void 0
                    : _a.disabled
                )
                  return
                var defaultValue = getDefaultValue(
                  props.defaultValue,
                  array === null || array === void 0
                    ? void 0
                    : array.schema.value
                )
                if (props.method === 'unshift') {
                  ;(_b =
                    array === null || array === void 0
                      ? void 0
                      : array.field) === null || _b === void 0
                    ? void 0
                    : _b.value.unshift(defaultValue)
                  ;(_d =
                    (_c = array.listeners) === null || _c === void 0
                      ? void 0
                      : _c.add) === null || _d === void 0
                    ? void 0
                    : _d.call(_c, 0)
                } else {
                  ;(_e =
                    array === null || array === void 0
                      ? void 0
                      : array.field) === null || _e === void 0
                    ? void 0
                    : _e.value.push(defaultValue)
                  ;(_g =
                    (_f = array.listeners) === null || _f === void 0
                      ? void 0
                      : _f.add) === null || _g === void 0
                    ? void 0
                    : _g.call(
                        _f,
                        ((_k =
                          (_j =
                            (_h =
                              array === null || array === void 0
                                ? void 0
                                : array.field) === null || _h === void 0
                              ? void 0
                              : _h.value) === null || _j === void 0
                            ? void 0
                            : _j.value) === null || _k === void 0
                          ? void 0
                          : _k.length) - 1
                      )
                }
                if (listeners.click) {
                  listeners.click(e)
                }
              },
            }),
          },
          {
            default: function () {
              return [self.value.title || props.title]
            },
          }
        )
      }
    },
  })
  var ArrayBaseRemove = VueCompositionAPI.defineComponent({
    name: 'ArrayBaseRemove',
    props: ['title', 'index'],
    setup: function (props, _a) {
      var attrs = _a.attrs,
        listeners = _a.listeners
      var indexRef = useIndex(props.index)
      var base = useArray()
      var prefixCls = ''.concat(stylePrefix, '-array-base')
      return function () {
        if (
          (base === null || base === void 0
            ? void 0
            : base.field.value.pattern) !== 'editable'
        )
          return null
        return Formily.Vue.h(
          Element.Button,
          {
            class: ''.concat(prefixCls, '-remove'),
            attrs: __assign$2(
              { type: 'text', size: 'mini', icon: 'el-icon-delete' },
              attrs
            ),
            on: __assign$2(__assign$2({}, listeners), {
              click: function (e) {
                var _a, _b, _c
                e.stopPropagation()
                if (
                  Array.isArray(
                    base === null || base === void 0 ? void 0 : base.keyMap
                  )
                ) {
                  ;(_a =
                    base === null || base === void 0 ? void 0 : base.keyMap) ===
                    null || _a === void 0
                    ? void 0
                    : _a.splice(indexRef.value, 1)
                }
                base === null || base === void 0
                  ? void 0
                  : base.field.value.remove(indexRef.value)
                ;(_c =
                  (_b =
                    base === null || base === void 0
                      ? void 0
                      : base.listeners) === null || _b === void 0
                    ? void 0
                    : _b.remove) === null || _c === void 0
                  ? void 0
                  : _c.call(_b, indexRef.value)
                if (listeners.click) {
                  listeners.click(e)
                }
              },
            }),
          },
          {
            default: function () {
              return [props.title]
            },
          }
        )
      }
    },
  })
  var ArrayBaseMoveDown = VueCompositionAPI.defineComponent({
    name: 'ArrayBaseMoveDown',
    props: ['title', 'index'],
    setup: function (props, _a) {
      var attrs = _a.attrs,
        listeners = _a.listeners
      var indexRef = useIndex(props.index)
      var base = useArray()
      var prefixCls = ''.concat(stylePrefix, '-array-base')
      return function () {
        if (
          (base === null || base === void 0
            ? void 0
            : base.field.value.pattern) !== 'editable'
        )
          return null
        return Formily.Vue.h(
          Element.Button,
          {
            class: ''.concat(prefixCls, '-move-down'),
            attrs: __assign$2(
              { size: 'mini', type: 'text', icon: 'el-icon-arrow-down' },
              attrs
            ),
            on: __assign$2(__assign$2({}, listeners), {
              click: function (e) {
                var _a, _b
                e.stopPropagation()
                if (
                  Array.isArray(
                    base === null || base === void 0 ? void 0 : base.keyMap
                  )
                ) {
                  base.keyMap.splice(
                    indexRef.value + 1,
                    0,
                    base.keyMap.splice(indexRef.value, 1)[0]
                  )
                }
                base === null || base === void 0
                  ? void 0
                  : base.field.value.moveDown(indexRef.value)
                ;(_b =
                  (_a =
                    base === null || base === void 0
                      ? void 0
                      : base.listeners) === null || _a === void 0
                    ? void 0
                    : _a.moveDown) === null || _b === void 0
                  ? void 0
                  : _b.call(_a, indexRef.value)
                if (listeners.click) {
                  listeners.click(e)
                }
              },
            }),
          },
          {
            default: function () {
              return [props.title]
            },
          }
        )
      }
    },
  })
  var ArrayBaseMoveUp = VueCompositionAPI.defineComponent({
    name: 'ArrayBaseMoveUp',
    props: ['title', 'index'],
    setup: function (props, _a) {
      var attrs = _a.attrs,
        listeners = _a.listeners
      var indexRef = useIndex(props.index)
      var base = useArray()
      var prefixCls = ''.concat(stylePrefix, '-array-base')
      return function () {
        if (
          (base === null || base === void 0
            ? void 0
            : base.field.value.pattern) !== 'editable'
        )
          return null
        return Formily.Vue.h(
          Element.Button,
          {
            class: ''.concat(prefixCls, '-move-up'),
            attrs: __assign$2(
              { size: 'mini', type: 'text', icon: 'el-icon-arrow-up' },
              attrs
            ),
            on: __assign$2(__assign$2({}, listeners), {
              click: function (e) {
                var _a, _b
                e.stopPropagation()
                if (
                  Array.isArray(
                    base === null || base === void 0 ? void 0 : base.keyMap
                  )
                ) {
                  base.keyMap.splice(
                    indexRef.value - 1,
                    0,
                    base.keyMap.splice(indexRef.value, 1)[0]
                  )
                }
                base === null || base === void 0
                  ? void 0
                  : base.field.value.moveUp(indexRef.value)
                ;(_b =
                  (_a =
                    base === null || base === void 0
                      ? void 0
                      : base.listeners) === null || _a === void 0
                    ? void 0
                    : _a.moveUp) === null || _b === void 0
                  ? void 0
                  : _b.call(_a, indexRef.value)
                if (listeners.click) {
                  listeners.click(e)
                }
              },
            }),
          },
          {
            default: function () {
              return [props.title]
            },
          }
        )
      }
    },
  })
  var ArrayBase = composeExport(ArrayBaseInner, {
    Index: ArrayBaseIndex,
    Item: ArrayBaseItem,
    SortHandle: ArrayBaseSortHandle,
    Addition: ArrayBaseAddition,
    Remove: ArrayBaseRemove,
    MoveDown: ArrayBaseMoveDown,
    MoveUp: ArrayBaseMoveUp,
    useArray: useArray,
    useIndex: useIndex,
    useKey: useKey,
    useRecord: useRecord,
  })

  var calcBreakpointIndex$1 = function (breakpoints, width) {
    for (var i = 0; i < breakpoints.length; i++) {
      if (width <= breakpoints[i]) {
        return i
      }
    }
  }
  var calcFactor$1 = function (value, breakpointIndex) {
    var _a
    if (Array.isArray(value)) {
      if (breakpointIndex === -1) return value[0]
      return (_a = value[breakpointIndex]) !== null && _a !== void 0
        ? _a
        : value[value.length - 1]
    } else {
      return value
    }
  }
  var factor$1 = function (value, breakpointIndex) {
    return Formily.Shared.isValid(value)
      ? calcFactor$1(value, breakpointIndex)
      : value
  }
  var calculateProps = function (target, props) {
    var clientWidth = target.clientWidth
    var breakpoints = props.breakpoints,
      layout = props.layout,
      labelAlign = props.labelAlign,
      wrapperAlign = props.wrapperAlign,
      labelCol = props.labelCol,
      wrapperCol = props.wrapperCol,
      otherProps = __rest(props, [
        'breakpoints',
        'layout',
        'labelAlign',
        'wrapperAlign',
        'labelCol',
        'wrapperCol',
      ])
    var breakpointIndex = calcBreakpointIndex$1(breakpoints, clientWidth)
    return __assign$2(
      {
        layout: factor$1(layout, breakpointIndex),
        labelAlign: factor$1(labelAlign, breakpointIndex),
        wrapperAlign: factor$1(wrapperAlign, breakpointIndex),
        labelCol: factor$1(labelCol, breakpointIndex),
        wrapperCol: factor$1(wrapperCol, breakpointIndex),
      },
      otherProps
    )
  }
  var useResponsiveFormLayout = function (props, refs) {
    var root = _global_VueCompositionAPI_ref(null)
    var breakpoints = props.breakpoints
    if (!Formily.Shared.isArr(breakpoints)) {
      return { props: _global_VueCompositionAPI_ref(props) }
    }
    var layoutProps = _global_VueCompositionAPI_ref(props)
    var updateUI = function () {
      layoutProps.value = calculateProps(root.value, props)
    }
    _global_VueCompositionAPI_onMounted(function () {
      root.value = refs.root
      var observer = function () {
        updateUI()
      }
      var resizeObserver = new ResizeObserver(observer)
      if (root.value) {
        resizeObserver.observe(root.value)
      }
      updateUI()
      return function () {
        resizeObserver.disconnect()
      }
    })
    return {
      props: layoutProps,
    }
  }

  var FormLayoutDeepContext = Symbol('FormLayoutDeepContext')
  var FormLayoutShallowContext = Symbol('FormLayoutShallowContext')
  var useFormDeepLayout = function () {
    return VueCompositionAPI.inject(
      FormLayoutDeepContext,
      VueCompositionAPI.ref({})
    )
  }
  var useFormShallowLayout = function () {
    return VueCompositionAPI.inject(
      FormLayoutShallowContext,
      VueCompositionAPI.ref({})
    )
  }
  var useFormLayout = function () {
    var shallowLayout = useFormShallowLayout()
    var deepLayout = useFormDeepLayout()
    var formLayout = VueCompositionAPI.ref(
      __assign$2(__assign$2({}, deepLayout.value), shallowLayout.value)
    )
    VueCompositionAPI.watch(
      [shallowLayout, deepLayout],
      function () {
        formLayout.value = __assign$2(
          __assign$2({}, deepLayout.value),
          shallowLayout.value
        )
      },
      {
        deep: true,
      }
    )
    return formLayout
  }
  var FormLayout = VueCompositionAPI.defineComponent({
    name: 'FFormLayout',
    props: {
      className: {},
      colon: { default: true },
      labelAlign: {},
      wrapperAlign: {},
      labelWrap: { default: false },
      labelWidth: {},
      wrapperWidth: {},
      wrapperWrap: { default: false },
      labelCol: {},
      wrapperCol: {},
      fullness: { default: false },
      size: { default: 'default' },
      layout: { default: 'horizontal' },
      direction: { default: 'ltr' },
      shallow: { default: true },
      feedbackLayout: {},
      tooltipLayout: {},
      bordered: { default: true },
      inset: { default: false },
      breakpoints: {},
      spaceGap: {},
      gridColumnGap: {},
      gridRowGap: {},
    },
    setup: function (customProps, _a) {
      var slots = _a.slots,
        refs = _a.refs
      var props = useResponsiveFormLayout(customProps, refs).props
      var deepLayout = useFormDeepLayout()
      var newDeepLayout = VueCompositionAPI.ref(__assign$2({}, deepLayout))
      var shallowProps = VueCompositionAPI.ref({})
      VueCompositionAPI.watch(
        [props, deepLayout],
        function () {
          shallowProps.value = props.value.shallow ? props.value : undefined
          if (!props.value.shallow) {
            Object.assign(newDeepLayout.value, props.value)
          } else {
            if (props.value.size) {
              newDeepLayout.value.size = props.value.size
            }
            if (props.value.colon) {
              newDeepLayout.value.colon = props.value.colon
            }
          }
        },
        { deep: true, immediate: true }
      )
      VueCompositionAPI.provide(FormLayoutDeepContext, newDeepLayout)
      VueCompositionAPI.provide(FormLayoutShallowContext, shallowProps)
      var formPrefixCls = ''.concat(stylePrefix, '-form')
      return function () {
        var _a
        var classNames =
          ((_a = {}),
          (_a[''.concat(formPrefixCls, '-').concat(props.value.layout)] = true),
          (_a[''.concat(formPrefixCls, '-rtl')] =
            props.value.direction === 'rtl'),
          (_a[''.concat(formPrefixCls, '-').concat(props.value.size)] =
            props.value.size !== undefined),
          (_a[''.concat(props.value.className)] =
            props.value.className !== undefined),
          _a)
        return Formily.Vue.h(
          'div',
          {
            ref: 'root',
            class: classNames,
          },
          slots
        )
      }
    },
  })

  var spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
  }
  var Space = VueCompositionAPI.defineComponent({
    name: 'FSpace',
    props: ['size', 'direction', 'align'],
    setup: function (props, _a) {
      var slots = _a.slots
      var layout = useFormLayout()
      return function () {
        var _a
        var _b, _c, _d, _e, _f
        var align = props.align,
          _g = props.size,
          size =
            _g === void 0
              ? (_c =
                  (_b = layout.value) === null || _b === void 0
                    ? void 0
                    : _b.spaceGap) !== null && _c !== void 0
                ? _c
                : 'small'
              : _g,
          _h = props.direction,
          direction = _h === void 0 ? 'horizontal' : _h
        var prefixCls = ''.concat(stylePrefix, '-space')
        var children =
          (_d = slots.default) === null || _d === void 0
            ? void 0
            : _d.call(slots)
        var items = []
        if (Array.isArray(children)) {
          if (children.length === 1) {
            if (
              (_e = children[0]['tag']) === null || _e === void 0
                ? void 0
                : _e.endsWith('Fragment')
            ) {
              // Fragment hack
              items =
                (_f = children[0]['componentOptions']) === null || _f === void 0
                  ? void 0
                  : _f.children
            } else {
              items = children
            }
          } else {
            items = children
          }
        }
        var len = items.length
        if (len === 0) {
          return null
        }
        var mergedAlign =
          align === undefined && direction === 'horizontal' ? 'center' : align
        var someSpaceClass =
          ((_a = {}),
          (_a[prefixCls] = true),
          (_a[''.concat(prefixCls, '-').concat(direction)] = true),
          (_a[''.concat(prefixCls, '-align-').concat(mergedAlign)] =
            mergedAlign),
          _a)
        var itemClassName = ''.concat(prefixCls, '-item')
        var marginDirection = 'marginRight' // directionConfig === 'rtl' ? 'marginLeft' : 'marginRight';
        var renderItems = items.map(function (child, i) {
          var _a
          return Formily.Vue.h(
            'div',
            {
              class: itemClassName,
              key: ''.concat(itemClassName, '-').concat(i),
              style:
                i === len - 1
                  ? {}
                  : ((_a = {}),
                    (_a[
                      direction === 'vertical'
                        ? 'marginBottom'
                        : marginDirection
                    ] =
                      typeof size === 'string'
                        ? ''.concat(spaceSize[size], 'px')
                        : ''.concat(size, 'px')),
                    _a),
            },
            {
              default: function () {
                return [child]
              },
            }
          )
        })
        return Formily.Vue.h(
          'div',
          { class: someSpaceClass },
          {
            default: function () {
              return renderItems
            },
          }
        )
      }
    },
  })

  var RecursionField = Formily.Vue.RecursionField
  var isColumnComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Column')) > -1
    )
  }
  var isOperationsComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Operations')) > -1
    )
  }
  var isAdditionComponent$3 = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Addition')) > -1
    )
  }
  var getArrayTableSources = function (arrayFieldRef, schemaRef) {
    var arrayField = arrayFieldRef.value
    var parseSources = function (schema) {
      var _a, _b, _c
      if (
        isColumnComponent(schema) ||
        isOperationsComponent(schema) ||
        isAdditionComponent$3(schema)
      ) {
        if (
          !((_a = schema['x-component-props']) === null || _a === void 0
            ? void 0
            : _a['prop']) &&
          !schema['name']
        )
          return []
        var name_1 =
          ((_b = schema['x-component-props']) === null || _b === void 0
            ? void 0
            : _b['prop']) || schema['name']
        var field = arrayField.query(arrayField.address.concat(name_1)).take()
        var fieldProps =
          (field === null || field === void 0 ? void 0 : field.props) ||
          schema.toFieldProps()
        var columnProps =
          ((_c =
            field === null || field === void 0 ? void 0 : field.component) ===
            null || _c === void 0
            ? void 0
            : _c[1]) ||
          schema['x-component-props'] ||
          {}
        var display =
          (field === null || field === void 0 ? void 0 : field.display) ||
          schema['x-display']
        var required = schema.reduceProperties(function (required, property) {
          if (required) {
            return required
          }
          return !!property.required
        }, false)
        return [
          {
            name: name_1,
            display: display,
            required: required,
            field: field,
            fieldProps: fieldProps,
            schema: schema,
            columnProps: columnProps,
          },
        ]
      } else if (schema.properties) {
        return schema.reduceProperties(function (buf, schema) {
          return buf.concat(parseSources(schema))
        }, [])
      } else {
        return []
      }
    }
    var parseArrayTable = function (schema) {
      if (!schema) return []
      var sources = []
      var items = Formily.Shared.isArr(schema) ? schema : [schema]
      return items.reduce(function (columns, schema) {
        var item = parseSources(schema)
        if (item) {
          return columns.concat(item)
        }
        return columns
      }, sources)
    }
    if (!schemaRef.value) throw new Error('can not found schema object')
    return parseArrayTable(schemaRef.value.items)
  }
  var getArrayTableColumns = function (reactiveDataSource, sources) {
    return sources.reduce(function (buf, _a, key) {
      var name = _a.name,
        columnProps = _a.columnProps,
        schema = _a.schema,
        display = _a.display,
        required = _a.required
      var title = columnProps.title,
        asterisk = columnProps.asterisk,
        props = __rest(columnProps, ['title', 'asterisk'])
      if (display !== 'visible') return buf
      if (!isColumnComponent(schema)) return buf
      var render =
        (columnProps === null || columnProps === void 0
          ? void 0
          : columnProps.type) &&
        (columnProps === null || columnProps === void 0
          ? void 0
          : columnProps.type) !== 'default'
          ? undefined
          : function (props) {
              // let index = props.$index
              var index = reactiveDataSource.value.indexOf(props.row)
              var children = Formily.Vue.h(
                ArrayBase.Item,
                {
                  props: { index: index, record: props.row },
                  key: ''.concat(key).concat(index),
                },
                {
                  default: function () {
                    return Formily.Vue.h(
                      RecursionField,
                      {
                        props: {
                          schema: schema,
                          name: index,
                          onlyRenderProperties: true,
                        },
                      },
                      {}
                    )
                  },
                }
              )
              return children
            }
      return buf.concat(
        __assign$2(__assign$2({ label: title }, props), {
          key: key,
          prop: name,
          asterisk:
            asterisk !== null && asterisk !== void 0 ? asterisk : required,
          render: render,
        })
      )
    }, [])
  }
  var renderAddition = function () {
    var schema = Formily.Vue.useFieldSchema()
    return schema.value.reduceProperties(function (addition, schema) {
      if (isAdditionComponent$3(schema)) {
        return Formily.Vue.h(
          RecursionField,
          {
            props: {
              schema: schema,
              name: 'addition',
            },
          },
          {}
        )
      }
      return addition
    }, null)
  }
  var StatusSelect = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      props: {
        value: Number,
        onChange: Function,
        options: Array,
        pageSize: Number,
      },
      setup: function (props) {
        var _a
        var formRef = Formily.Vue.useForm()
        var fieldRef = Formily.Vue.useField()
        var prefixCls = ''.concat(stylePrefix, '-array-table')
        var width =
          String(
            (_a = props.options) === null || _a === void 0 ? void 0 : _a.length
          ).length * 15
        return function () {
          var form = formRef.value
          var field = fieldRef.value
          var errors = form.queryFeedbacks({
            type: 'error',
            address: ''.concat(field.address, '.*'),
          })
          var createIndexPattern = function (page) {
            var pattern = ''
              .concat(field.address, '.*[')
              .concat((page - 1) * props.pageSize, ':')
              .concat(page * props.pageSize, '].*')
            return Formily.Shared.FormPath.parse(pattern)
          }
          return Formily.Vue.h(
            Element.Select,
            {
              style: {
                width: ''.concat(width < 60 ? 60 : width, 'px'),
              },
              class: [
                ''.concat(prefixCls, '-status-select'),
                {
                  'has-error':
                    errors === null || errors === void 0
                      ? void 0
                      : errors.length,
                },
              ],
              props: {
                value: props.value,
                popperClass: ''.concat(prefixCls, '-status-select-dropdown'),
              },
              on: {
                input: props.onChange,
              },
            },
            {
              default: function () {
                var _a
                return (_a = props.options) === null || _a === void 0
                  ? void 0
                  : _a.map(function (_a) {
                      var label = _a.label,
                        value = _a.value
                      var hasError = errors.some(function (_a) {
                        var address = _a.address
                        return createIndexPattern(value).match(address)
                      })
                      return Formily.Vue.h(
                        Element.Option,
                        {
                          key: value,
                          props: {
                            label: label,
                            value: value,
                          },
                        },
                        {
                          default: function () {
                            if (hasError) {
                              return Formily.Vue.h(
                                Element.Badge,
                                {
                                  props: {
                                    isDot: true,
                                  },
                                },
                                {
                                  default: function () {
                                    return label
                                  },
                                }
                              )
                            }
                            return label
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
  )
  var ArrayTablePagination = VueCompositionAPI.defineComponent({
    inheritAttrs: false,
    props: [],
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots
      var prefixCls = ''.concat(stylePrefix, '-array-table')
      var current = VueCompositionAPI.ref(1)
      return function () {
        var props = attrs
        var pageSize = props.pageSize || 10
        var dataSource = props.dataSource || []
        var startIndex = (current.value - 1) * pageSize
        var endIndex = startIndex + pageSize - 1
        var total =
          (dataSource === null || dataSource === void 0
            ? void 0
            : dataSource.length) || 0
        var totalPage = Math.ceil(total / pageSize)
        var pages = Array.from(new Array(totalPage)).map(function (_, index) {
          var page = index + 1
          return {
            label: page,
            value: page,
          }
        })
        var renderPagination = function () {
          if (totalPage <= 1) return
          return Formily.Vue.h(
            'div',
            {
              class: [''.concat(prefixCls, '-pagination')],
            },
            {
              default: function () {
                return Formily.Vue.h(
                  Space,
                  {},
                  {
                    default: function () {
                      return [
                        Formily.Vue.h(
                          StatusSelect,
                          {
                            props: {
                              value: current.value,
                              onChange: function (val) {
                                current.value = val
                              },
                              pageSize: pageSize,
                              options: pages,
                            },
                          },
                          {}
                        ),
                        Formily.Vue.h(
                          Element.Pagination,
                          {
                            props: __assign$2(
                              __assign$2(
                                {
                                  background: true,
                                  layout: 'prev, pager, next',
                                },
                                props
                              ),
                              {
                                pageSize: pageSize,
                                pageCount: totalPage,
                                currentPage: current.value,
                              }
                            ),
                            on: {
                              'current-change': function (val) {
                                current.value = val
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
              var _a
              return (_a =
                slots === null || slots === void 0 ? void 0 : slots.default) ===
                null || _a === void 0
                ? void 0
                : _a.call(
                    slots,
                    dataSource === null || dataSource === void 0
                      ? void 0
                      : dataSource.slice(startIndex, endIndex + 1),
                    renderPagination
                  )
            },
          }
        )
      }
    },
  })
  var ArrayTableInner = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'FArrayTable',
      inheritAttrs: false,
      setup: function (props, _a) {
        var attrs = _a.attrs,
          listeners = _a.listeners,
          slots = _a.slots
        var fieldRef = Formily.Vue.useField()
        var schemaRef = Formily.Vue.useFieldSchema()
        var prefixCls = ''.concat(stylePrefix, '-array-table')
        var _b = ArrayBase.useKey(schemaRef.value),
          getKey = _b.getKey,
          keyMap = _b.keyMap
        var defaultRowKey = function (record) {
          return getKey(record)
        }
        var reactiveDataSource = VueCompositionAPI.shallowRef([])
        var dispose = Formily.Reactive.observe(
          fieldRef.value,
          function () {
            reactiveDataSource.value = fieldRef.value.value
          },
          false
        )
        VueCompositionAPI.onBeforeUnmount(dispose)
        return function () {
          var props = attrs
          var field = fieldRef.value
          var dataSource = Array.isArray(field.value) ? field.value.slice() : []
          var pagination = props.pagination
          var sources = getArrayTableSources(fieldRef, schemaRef)
          var columns = getArrayTableColumns(reactiveDataSource, sources)
          var renderColumns = function () {
            return columns.map(function (_a) {
              var key = _a.key,
                render = _a.render,
                asterisk = _a.asterisk,
                props = __rest(_a, ['key', 'render', 'asterisk'])
              var children = {}
              if (render) {
                children.default = render
              }
              if (asterisk) {
                children.header = function (_a) {
                  var column = _a.column
                  return Formily.Vue.h(
                    'span',
                    {},
                    {
                      default: function () {
                        return [
                          Formily.Vue.h(
                            'span',
                            { class: ''.concat(prefixCls, '-asterisk') },
                            {
                              default: function () {
                                return ['*']
                              },
                            }
                          ),
                          column.label,
                        ]
                      },
                    }
                  )
                }
              }
              return Formily.Vue.h(
                Element.TableColumn,
                {
                  key: key,
                  props: props,
                },
                children
              )
            })
          }
          var renderStateManager = function () {
            return sources.map(function (column, key) {
              //专门用来承接对Column的状态管理
              if (!isColumnComponent(column.schema)) return
              return Formily.Vue.h(
                RecursionField,
                {
                  props: {
                    name: column.name,
                    schema: column.schema,
                    onlyRenderSelf: true,
                  },
                  key: key,
                },
                {}
              )
            })
          }
          var renderTable = function (dataSource, pager) {
            return Formily.Vue.h(
              'div',
              { class: prefixCls },
              {
                default: function () {
                  return Formily.Vue.h(
                    ArrayBase,
                    {
                      props: {
                        keyMap: keyMap,
                      },
                    },
                    {
                      default: function () {
                        return [
                          Formily.Vue.h(
                            Element.Table,
                            {
                              props: __assign$2(
                                __assign$2({ rowKey: defaultRowKey }, attrs),
                                { data: dataSource }
                              ),
                              on: listeners,
                            },
                            __assign$2(__assign$2({}, slots), {
                              default: renderColumns,
                            })
                          ),
                          pager === null || pager === void 0 ? void 0 : pager(),
                          renderStateManager(),
                          renderAddition(),
                        ]
                      },
                    }
                  )
                },
              }
            )
          }
          if (!pagination) {
            return renderTable(dataSource, null)
          }
          return Formily.Vue.h(
            ArrayTablePagination,
            {
              attrs: __assign$2(
                __assign$2(
                  {},
                  Formily.Shared.isBool(pagination) ? {} : pagination
                ),
                { dataSource: dataSource }
              ),
            },
            { default: renderTable }
          )
        }
      },
    })
  )
  var ArrayTableColumn = {
    name: 'FArrayTableColumn',
    render: function (h) {
      return h()
    },
  }
  var ArrayTable = composeExport(ArrayTableInner, {
    Column: ArrayTableColumn,
    Index: ArrayBase.Index,
    SortHandle: ArrayBase.SortHandle,
    Addition: ArrayBase.Addition,
    Remove: ArrayBase.Remove,
    MoveDown: ArrayBase.MoveDown,
    MoveUp: ArrayBase.MoveUp,
    useArray: ArrayBase.useArray,
    useIndex: ArrayBase.useIndex,
    useRecord: ArrayBase.useRecord,
  })

  var commonjsGlobal =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
      ? self
      : {}

  function createCommonjsModule(fn) {
    var module = { exports: {} }
    return fn(module, module.exports), module.exports
  }

  var date = createCommonjsModule(function (module) {
    /*eslint-disable*/
    // 把 YYYY-MM-DD 改成了 yyyy-MM-dd
    ;(function (main) {
      /**
       * Parse or format dates
       * @class fecha
       */
      var fecha = {}
      var token =
        /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g
      var twoDigits = '\\d\\d?'
      var threeDigits = '\\d{3}'
      var fourDigits = '\\d{4}'
      var word = '[^\\s]+'
      var literal = /\[([^]*?)\]/gm
      var noop = function () {}

      function regexEscape(str) {
        return str.replace(/[|\\{()[^$+*?.-]/g, '\\$&')
      }

      function shorten(arr, sLen) {
        var newArr = []
        for (var i = 0, len = arr.length; i < len; i++) {
          newArr.push(arr[i].substr(0, sLen))
        }
        return newArr
      }

      function monthUpdate(arrName) {
        return function (d, v, i18n) {
          var index = i18n[arrName].indexOf(
            v.charAt(0).toUpperCase() + v.substr(1).toLowerCase()
          )
          if (~index) {
            d.month = index
          }
        }
      }

      function pad(val, len) {
        val = String(val)
        len = len || 2
        while (val.length < len) {
          val = '0' + val
        }
        return val
      }

      var dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ]
      var monthNames = [
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
      ]
      var monthNamesShort = shorten(monthNames, 3)
      var dayNamesShort = shorten(dayNames, 3)
      fecha.i18n = {
        dayNamesShort: dayNamesShort,
        dayNames: dayNames,
        monthNamesShort: monthNamesShort,
        monthNames: monthNames,
        amPm: ['am', 'pm'],
        DoFn: function DoFn(D) {
          return (
            D +
            ['th', 'st', 'nd', 'rd'][
              D % 10 > 3 ? 0 : ((D - (D % 10) !== 10) * D) % 10
            ]
          )
        },
      }

      var formatFlags = {
        D: function (dateObj) {
          return dateObj.getDay()
        },
        DD: function (dateObj) {
          return pad(dateObj.getDay())
        },
        Do: function (dateObj, i18n) {
          return i18n.DoFn(dateObj.getDate())
        },
        d: function (dateObj) {
          return dateObj.getDate()
        },
        dd: function (dateObj) {
          return pad(dateObj.getDate())
        },
        ddd: function (dateObj, i18n) {
          return i18n.dayNamesShort[dateObj.getDay()]
        },
        dddd: function (dateObj, i18n) {
          return i18n.dayNames[dateObj.getDay()]
        },
        M: function (dateObj) {
          return dateObj.getMonth() + 1
        },
        MM: function (dateObj) {
          return pad(dateObj.getMonth() + 1)
        },
        MMM: function (dateObj, i18n) {
          return i18n.monthNamesShort[dateObj.getMonth()]
        },
        MMMM: function (dateObj, i18n) {
          return i18n.monthNames[dateObj.getMonth()]
        },
        yy: function (dateObj) {
          return pad(String(dateObj.getFullYear()), 4).substr(2)
        },
        yyyy: function (dateObj) {
          return pad(dateObj.getFullYear(), 4)
        },
        h: function (dateObj) {
          return dateObj.getHours() % 12 || 12
        },
        hh: function (dateObj) {
          return pad(dateObj.getHours() % 12 || 12)
        },
        H: function (dateObj) {
          return dateObj.getHours()
        },
        HH: function (dateObj) {
          return pad(dateObj.getHours())
        },
        m: function (dateObj) {
          return dateObj.getMinutes()
        },
        mm: function (dateObj) {
          return pad(dateObj.getMinutes())
        },
        s: function (dateObj) {
          return dateObj.getSeconds()
        },
        ss: function (dateObj) {
          return pad(dateObj.getSeconds())
        },
        S: function (dateObj) {
          return Math.round(dateObj.getMilliseconds() / 100)
        },
        SS: function (dateObj) {
          return pad(Math.round(dateObj.getMilliseconds() / 10), 2)
        },
        SSS: function (dateObj) {
          return pad(dateObj.getMilliseconds(), 3)
        },
        a: function (dateObj, i18n) {
          return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1]
        },
        A: function (dateObj, i18n) {
          return dateObj.getHours() < 12
            ? i18n.amPm[0].toUpperCase()
            : i18n.amPm[1].toUpperCase()
        },
        ZZ: function (dateObj) {
          var o = dateObj.getTimezoneOffset()
          return (
            (o > 0 ? '-' : '+') +
            pad(Math.floor(Math.abs(o) / 60) * 100 + (Math.abs(o) % 60), 4)
          )
        },
      }

      var parseFlags = {
        d: [
          twoDigits,
          function (d, v) {
            d.day = v
          },
        ],
        Do: [
          twoDigits + word,
          function (d, v) {
            d.day = parseInt(v, 10)
          },
        ],
        M: [
          twoDigits,
          function (d, v) {
            d.month = v - 1
          },
        ],
        yy: [
          twoDigits,
          function (d, v) {
            var da = new Date(),
              cent = +('' + da.getFullYear()).substr(0, 2)
            d.year = '' + (v > 68 ? cent - 1 : cent) + v
          },
        ],
        h: [
          twoDigits,
          function (d, v) {
            d.hour = v
          },
        ],
        m: [
          twoDigits,
          function (d, v) {
            d.minute = v
          },
        ],
        s: [
          twoDigits,
          function (d, v) {
            d.second = v
          },
        ],
        yyyy: [
          fourDigits,
          function (d, v) {
            d.year = v
          },
        ],
        S: [
          '\\d',
          function (d, v) {
            d.millisecond = v * 100
          },
        ],
        SS: [
          '\\d{2}',
          function (d, v) {
            d.millisecond = v * 10
          },
        ],
        SSS: [
          threeDigits,
          function (d, v) {
            d.millisecond = v
          },
        ],
        D: [twoDigits, noop],
        ddd: [word, noop],
        MMM: [word, monthUpdate('monthNamesShort')],
        MMMM: [word, monthUpdate('monthNames')],
        a: [
          word,
          function (d, v, i18n) {
            var val = v.toLowerCase()
            if (val === i18n.amPm[0]) {
              d.isPm = false
            } else if (val === i18n.amPm[1]) {
              d.isPm = true
            }
          },
        ],
        ZZ: [
          '[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z',
          function (d, v) {
            var parts = (v + '').match(/([+-]|\d\d)/gi),
              minutes

            if (parts) {
              minutes = +(parts[1] * 60) + parseInt(parts[2], 10)
              d.timezoneOffset = parts[0] === '+' ? minutes : -minutes
            }
          },
        ],
      }
      parseFlags.dd = parseFlags.d
      parseFlags.dddd = parseFlags.ddd
      parseFlags.DD = parseFlags.D
      parseFlags.mm = parseFlags.m
      parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h
      parseFlags.MM = parseFlags.M
      parseFlags.ss = parseFlags.s
      parseFlags.A = parseFlags.a

      // Some common format strings
      fecha.masks = {
        default: 'ddd MMM dd yyyy HH:mm:ss',
        shortDate: 'M/D/yy',
        mediumDate: 'MMM d, yyyy',
        longDate: 'MMMM d, yyyy',
        fullDate: 'dddd, MMMM d, yyyy',
        shortTime: 'HH:mm',
        mediumTime: 'HH:mm:ss',
        longTime: 'HH:mm:ss.SSS',
      }

      /***
       * Format a date
       * @method format
       * @param {Date|number} dateObj
       * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
       */
      fecha.format = function (dateObj, mask, i18nSettings) {
        var i18n = i18nSettings || fecha.i18n

        if (typeof dateObj === 'number') {
          dateObj = new Date(dateObj)
        }

        if (
          Object.prototype.toString.call(dateObj) !== '[object Date]' ||
          isNaN(dateObj.getTime())
        ) {
          throw new Error('Invalid Date in fecha.format')
        }

        mask = fecha.masks[mask] || mask || fecha.masks['default']

        var literals = []

        // Make literals inactive by replacing them with ??
        mask = mask.replace(literal, function ($0, $1) {
          literals.push($1)
          return '@@@'
        })
        // Apply formatting rules
        mask = mask.replace(token, function ($0) {
          return $0 in formatFlags
            ? formatFlags[$0](dateObj, i18n)
            : $0.slice(1, $0.length - 1)
        })
        // Inline literal values back into the formatted value
        return mask.replace(/@@@/g, function () {
          return literals.shift()
        })
      }

      /**
       * Parse a date string into an object, changes - into /
       * @method parse
       * @param {string} dateStr Date string
       * @param {string} format Date parse format
       * @returns {Date|boolean}
       */
      fecha.parse = function (dateStr, format, i18nSettings) {
        var i18n = i18nSettings || fecha.i18n

        if (typeof format !== 'string') {
          throw new Error('Invalid format in fecha.parse')
        }

        format = fecha.masks[format] || format

        // Avoid regular expression denial of service, fail early for really long strings
        // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
        if (dateStr.length > 1000) {
          return null
        }

        var dateInfo = {}
        var parseInfo = []
        var literals = []
        format = format.replace(literal, function ($0, $1) {
          literals.push($1)
          return '@@@'
        })
        var newFormat = regexEscape(format).replace(token, function ($0) {
          if (parseFlags[$0]) {
            var info = parseFlags[$0]
            parseInfo.push(info[1])
            return '(' + info[0] + ')'
          }

          return $0
        })
        newFormat = newFormat.replace(/@@@/g, function () {
          return literals.shift()
        })
        var matches = dateStr.match(new RegExp(newFormat, 'i'))
        if (!matches) {
          return null
        }

        for (var i = 1; i < matches.length; i++) {
          parseInfo[i - 1](dateInfo, matches[i], i18n)
        }

        var today = new Date()
        if (
          dateInfo.isPm === true &&
          dateInfo.hour != null &&
          +dateInfo.hour !== 12
        ) {
          dateInfo.hour = +dateInfo.hour + 12
        } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
          dateInfo.hour = 0
        }

        var date
        if (dateInfo.timezoneOffset != null) {
          dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset
          date = new Date(
            Date.UTC(
              dateInfo.year || today.getFullYear(),
              dateInfo.month || 0,
              dateInfo.day || 1,
              dateInfo.hour || 0,
              dateInfo.minute || 0,
              dateInfo.second || 0,
              dateInfo.millisecond || 0
            )
          )
        } else {
          date = new Date(
            dateInfo.year || today.getFullYear(),
            dateInfo.month || 0,
            dateInfo.day || 1,
            dateInfo.hour || 0,
            dateInfo.minute || 0,
            dateInfo.second || 0,
            dateInfo.millisecond || 0
          )
        }
        return date
      }

      /* istanbul ignore next */
      if (module.exports) {
        module.exports = fecha
      } else {
        main.fecha = fecha
      }
    })(commonjsGlobal)
  })

  var defaultLang = {
    el: {
      colorpicker: {
        confirm: '确定',
        clear: '清空',
      },
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
        // week: '周次',
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
      tree: {
        emptyText: '暂无数据',
      },
      transfer: {
        noMatch: '无匹配数据',
        noData: '无数据',
        titles: ['列表 1', '列表 2'],
        filterPlaceholder: '请输入搜索内容',
        noCheckedFormat: '共 {total} 项',
        hasCheckedFormat: '已选 {checked}/{total} 项',
      },
      image: {
        error: '加载失败',
      },
      pageHeader: {
        title: '返回',
      },
      popconfirm: {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      },
      empty: {
        description: '暂无数据',
      },
    },
  }

  var umd = createCommonjsModule(function (module, exports) {
    ;(function (global, factory) {
      module.exports = factory()
    })(commonjsGlobal, function () {
      var isMergeableObject = function isMergeableObject(value) {
        return isNonNullObject(value) && !isSpecial(value)
      }

      function isNonNullObject(value) {
        return !!value && typeof value === 'object'
      }

      function isSpecial(value) {
        var stringValue = Object.prototype.toString.call(value)

        return (
          stringValue === '[object RegExp]' ||
          stringValue === '[object Date]' ||
          isReactElement(value)
        )
      }

      // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
      var canUseSymbol = typeof Symbol === 'function' && Symbol.for
      var REACT_ELEMENT_TYPE = canUseSymbol
        ? Symbol.for('react.element')
        : 0xeac7

      function isReactElement(value) {
        return value.$$typeof === REACT_ELEMENT_TYPE
      }

      function emptyTarget(val) {
        return Array.isArray(val) ? [] : {}
      }

      function cloneIfNecessary(value, optionsArgument) {
        var clone = optionsArgument && optionsArgument.clone === true
        return clone && isMergeableObject(value)
          ? deepmerge(emptyTarget(value), value, optionsArgument)
          : value
      }

      function defaultArrayMerge(target, source, optionsArgument) {
        var destination = target.slice()
        source.forEach(function (e, i) {
          if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument)
          } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument)
          } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument))
          }
        })
        return destination
      }

      function mergeObject(target, source, optionsArgument) {
        var destination = {}
        if (isMergeableObject(target)) {
          Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument)
          })
        }
        Object.keys(source).forEach(function (key) {
          if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument)
          } else {
            destination[key] = deepmerge(
              target[key],
              source[key],
              optionsArgument
            )
          }
        })
        return destination
      }

      function deepmerge(target, source, optionsArgument) {
        var sourceIsArray = Array.isArray(source)
        var targetIsArray = Array.isArray(target)
        var options = optionsArgument || { arrayMerge: defaultArrayMerge }
        var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray

        if (!sourceAndTargetTypesMatch) {
          return cloneIfNecessary(source, optionsArgument)
        } else if (sourceIsArray) {
          var arrayMerge = options.arrayMerge || defaultArrayMerge
          return arrayMerge(target, source, optionsArgument)
        } else {
          return mergeObject(target, source, optionsArgument)
        }
      }

      deepmerge.all = function deepmergeAll(array, optionsArgument) {
        if (!Array.isArray(array) || array.length < 2) {
          throw new Error(
            'first argument should be an array with at least two elements'
          )
        }

        // we are sure there are at least 2 values, so it is safe to have no initial value
        return array.reduce(function (prev, next) {
          return deepmerge(prev, next, optionsArgument)
        })
      }

      var deepmerge_1 = deepmerge

      return deepmerge_1
    })
  })

  if (
    typeof /./ !== 'function' &&
    typeof Int8Array !== 'object' &&
    (Vue.prototype.$isServer || typeof document.childNodes !== 'function')
  );

  const hasOwnProperty = Object.prototype.hasOwnProperty

  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g
  /**
   *  String format template
   *  - Inspired:
   *    https://github.com/Matt-Esch/string-template/index.js
   */
  function Format(Vue) {
    /**
     * template
     *
     * @param {String} string
     * @param {Array} ...args
     * @return {String}
     */

    function template(string, ...args) {
      if (args.length === 1 && typeof args[0] === 'object') {
        args = args[0]
      }

      if (!args || !args.hasOwnProperty) {
        args = {}
      }

      return string.replace(RE_NARGS, (match, prefix, i, index) => {
        let result

        if (string[index - 1] === '{' && string[index + match.length] === '}') {
          return i
        } else {
          result = hasOwn(args, i) ? args[i] : null
          if (result === null || result === undefined) {
            return ''
          }

          return result
        }
      })
    }

    return template
  }

  const format = Format(Vue)
  let lang = defaultLang
  let merged = false
  let i18nHandler = function () {
    const vuei18n = Object.getPrototypeOf(this || Vue).$t
    if (typeof vuei18n === 'function' && !!Vue.locale) {
      if (!merged) {
        merged = true
        Vue.locale(
          Vue.config.lang,
          umd(lang, Vue.locale(Vue.config.lang) || {}, { clone: true })
        )
      }
      return vuei18n.apply(this, arguments)
    }
  }

  const t = function (path, options) {
    let value = i18nHandler.apply(this, arguments)
    if (value !== null && value !== undefined) return value

    const array = path.split('.')
    let current = lang

    for (let i = 0, j = array.length; i < j; i++) {
      const property = array[i]
      value = current[property]
      if (i === j - 1) return format(value, options)
      if (!value) return ''
      current = value
    }
    return ''
  }

  const weeks = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const months = [
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
  ]

  const getI18nSettings = () => {
    return {
      dayNamesShort: weeks.map((week) => t(`el.datepicker.weeks.${week}`)),
      dayNames: weeks.map((week) => t(`el.datepicker.weeks.${week}`)),
      monthNamesShort: months.map((month) =>
        t(`el.datepicker.months.${month}`)
      ),
      monthNames: months.map((month, index) =>
        t(`el.datepicker.month${index + 1}`)
      ),
      amPm: ['am', 'pm'],
    }
  }

  const toDate = function (date) {
    return isDate(date) ? new Date(date) : null
  }

  const isDate = function (date) {
    if (date === null || date === undefined) return false
    if (isNaN(new Date(date).getTime())) return false
    if (Array.isArray(date)) return false // deal with `new Date([ new Date() ]) -> new Date()`
    return true
  }

  const formatDate = function (date$1, format) {
    date$1 = toDate(date$1)
    if (!date$1) return ''
    return date.format(date$1, format || 'yyyy-MM-dd', getI18nSettings())
  }

  var prefixCls = ''.concat(stylePrefix, '-preview-text')
  var PlaceholderContext = createContext('N/A')
  var usePlaceholder = function (value) {
    var placeholderCtx = useContext(PlaceholderContext)
    var placeholder = VueCompositionAPI.computed(function () {
      return Formily.Shared.isValid(value) && value !== ''
        ? value
        : resolveComponent(placeholderCtx.value) || 'N/A'
    })
    return placeholder
  }
  var Input$1 = VueCompositionAPI.defineComponent({
    name: 'FPreviewTextInput',
    props: [],
    setup: function (_props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots
      var placeholder = usePlaceholder(attrs.value)
      return function () {
        return Formily.Vue.h(
          Space,
          {
            class: [prefixCls],
            style: attrs.style,
          },
          {
            default: function () {
              var _a, _b, _c, _d
              return [
                (_a =
                  slots === null || slots === void 0
                    ? void 0
                    : slots.prepend) === null || _a === void 0
                  ? void 0
                  : _a.call(slots),
                (_b =
                  slots === null || slots === void 0
                    ? void 0
                    : slots.prefix) === null || _b === void 0
                  ? void 0
                  : _b.call(slots),
                placeholder.value,
                (_c =
                  slots === null || slots === void 0
                    ? void 0
                    : slots.suffix) === null || _c === void 0
                  ? void 0
                  : _c.call(slots),
                (_d =
                  slots === null || slots === void 0
                    ? void 0
                    : slots.append) === null || _d === void 0
                  ? void 0
                  : _d.call(slots),
              ]
            },
          }
        )
      }
    },
  })
  var Select$1 = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'FPreviewTextSelect',
      props: [],
      setup: function (_props, _a) {
        var _b, _c
        var attrs = _a.attrs
        var fieldRef = Formily.Vue.useField()
        var field = fieldRef.value
        var props = attrs
        var dataSource = (
          (_b =
            field === null || field === void 0 ? void 0 : field.dataSource) ===
            null || _b === void 0
            ? void 0
            : _b.length
        )
          ? field.dataSource
          : (
              (_c =
                props === null || props === void 0 ? void 0 : props.options) ===
                null || _c === void 0
                ? void 0
                : _c.length
            )
          ? props.options
          : []
        var placeholder = usePlaceholder()
        var getSelected = function () {
          var value = props.value
          if (props.multiple) {
            return Formily.Shared.isArr(value)
              ? value.map(function (val) {
                  return { label: val, value: val }
                })
              : []
          } else {
            return Formily.Shared.isValid(value)
              ? [{ label: value, value: value }]
              : []
          }
        }
        var getLabels = function () {
          var selected = getSelected()
          if (!selected.length) {
            return Formily.Vue.h(
              Element.Tag,
              {},
              {
                default: function () {
                  return placeholder.value
                },
              }
            )
          }
          return selected.map(function (_a, key) {
            var _b
            var value = _a.value,
              label = _a.label
            var text =
              ((_b =
                dataSource === null || dataSource === void 0
                  ? void 0
                  : dataSource.find(function (item) {
                      return item.value == value
                    })) === null || _b === void 0
                ? void 0
                : _b.label) || label
            return Formily.Vue.h(
              Element.Tag,
              {
                key: key,
                props: {
                  type: 'info',
                  effect: 'light',
                },
              },
              {
                default: function () {
                  return text || placeholder.value
                },
              }
            )
          })
        }
        return function () {
          return Formily.Vue.h(
            Space,
            {
              class: [prefixCls],
              style: attrs.style,
            },
            {
              default: function () {
                return getLabels()
              },
            }
          )
        }
      },
    })
  )
  var Cascader$1 = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'FPreviewTextCascader',
      props: [],
      setup: function (_props, _a) {
        var _b, _c, _d, _e
        var attrs = _a.attrs
        var fieldRef = Formily.Vue.useField()
        var field = fieldRef.value
        var props = attrs
        var dataSource = (
          (_b =
            field === null || field === void 0 ? void 0 : field.dataSource) ===
            null || _b === void 0
            ? void 0
            : _b.length
        )
          ? field.dataSource
          : (
              (_c =
                props === null || props === void 0 ? void 0 : props.options) ===
                null || _c === void 0
                ? void 0
                : _c.length
            )
          ? props.options
          : []
        var placeholder = usePlaceholder()
        var valueKey =
          ((_d = props.props) === null || _d === void 0 ? void 0 : _d.value) ||
          'value'
        var labelKey =
          ((_e = props.props) === null || _e === void 0 ? void 0 : _e.label) ||
          'label'
        var getSelected = function () {
          return Formily.Shared.isArr(props.value) ? props.value : []
        }
        var findLabel = function (value, dataSource) {
          for (
            var i = 0;
            i <
            (dataSource === null || dataSource === void 0
              ? void 0
              : dataSource.length);
            i++
          ) {
            var item = dataSource[i]
            if (
              (item === null || item === void 0 ? void 0 : item[valueKey]) ===
              value
            ) {
              return item === null || item === void 0 ? void 0 : item[labelKey]
            } else {
              var childLabel = findLabel(
                value,
                item === null || item === void 0 ? void 0 : item.children
              )
              if (childLabel) return childLabel
            }
          }
        }
        var getLabels = function () {
          var selected = getSelected()
          if (
            !(selected === null || selected === void 0
              ? void 0
              : selected.length)
          ) {
            return Formily.Vue.h(
              Element.Tag,
              {},
              {
                default: function () {
                  return placeholder.value
                },
              }
            )
          }
          return selected.map(function (value, key) {
            var text = findLabel(value, dataSource)
            return Formily.Vue.h(
              Element.Tag,
              {
                key: key,
                props: {
                  type: 'info',
                  effect: 'light',
                },
              },
              {
                default: function () {
                  return text || placeholder.value
                },
              }
            )
          })
        }
        return function () {
          return Formily.Vue.h(
            Space,
            {
              class: [prefixCls],
              style: attrs.style,
            },
            {
              default: function () {
                return getLabels()
              },
            }
          )
        }
      },
    })
  )
  var DatePicker$1 = VueCompositionAPI.defineComponent({
    name: 'FPreviewTextDatePicker',
    props: [],
    setup: function (_props, _a) {
      var attrs = _a.attrs
      var props = attrs
      var placeholder = usePlaceholder()
      var getLabels = function () {
        if (Formily.Shared.isArr(props.value)) {
          var labels = props.value.map(function (value) {
            return formatDate(value, props.format) || placeholder.value
          })
          return labels.join('~')
        } else {
          return formatDate(props.value, props.format) || placeholder.value
        }
      }
      return function () {
        return Formily.Vue.h(
          'div',
          {
            class: [prefixCls],
            style: attrs.style,
          },
          {
            default: function () {
              return getLabels()
            },
          }
        )
      }
    },
  })
  var TimePicker$1 = VueCompositionAPI.defineComponent({
    name: 'FPreviewTextTimePicker',
    props: [],
    setup: function (_props, _a) {
      var _b
      var attrs = _a.attrs
      var props = attrs
      var format =
        ((_b = props.pickerOptions) === null || _b === void 0
          ? void 0
          : _b.format) || 'HH:mm:ss'
      var placeholder = usePlaceholder()
      var getLabels = function () {
        if (Formily.Shared.isArr(props.value)) {
          var labels = props.value.map(function (value) {
            return formatDate(value, format) || placeholder.value
          })
          return labels.join('~')
        } else {
          return formatDate(props.value, format) || placeholder.value
        }
      }
      return function () {
        return Formily.Vue.h(
          'div',
          {
            class: [prefixCls],
            style: attrs.style,
          },
          {
            default: function () {
              return getLabels()
            },
          }
        )
      }
    },
  })
  var Text = VueCompositionAPI.defineComponent({
    name: 'FPreviewText',
    setup: function (_props, _a) {
      var attrs = _a.attrs
      var placeholder = usePlaceholder()
      return function () {
        return Formily.Vue.h(
          'div',
          {
            class: [prefixCls],
            style: attrs.style,
          },
          {
            default: function () {
              return placeholder.value
            },
          }
        )
      }
    },
  })
  var PreviewText = composeExport(Text, {
    Input: Input$1,
    Select: Select$1,
    Cascader: Cascader$1,
    DatePicker: DatePicker$1,
    TimePicker: TimePicker$1,
    Placeholder: PlaceholderContext.Provider,
    usePlaceholder: usePlaceholder,
  })

  var Cascader = Formily.Vue.connect(
    Element.Cascader,
    Formily.Vue.mapProps({ dataSource: 'options' }),
    Formily.Vue.mapReadPretty(PreviewText.Cascader)
  )

  var CheckboxOption = VueCompositionAPI.defineComponent({
    name: 'Checkbox',
    inheritAttrs: false,
    props: {
      option: {
        type: Object,
        default: null,
      },
    },
    setup: function (curtomProps, _a) {
      var attrs = _a.attrs,
        slots = _a.slots,
        listeners = _a.listeners
      return function () {
        var props = attrs
        var option =
          curtomProps === null || curtomProps === void 0
            ? void 0
            : curtomProps.option
        if (option) {
          var children = {
            default: function () {
              var _a
              return [
                resolveComponent(
                  (_a = slots.default) !== null && _a !== void 0
                    ? _a
                    : option.label,
                  { option: option }
                ),
              ]
            },
          }
          var newProps = {}
          Object.assign(newProps, option)
          newProps.label = option.value
          delete newProps.value
          return Formily.Vue.h(
            attrs.optionType === 'button'
              ? Element.CheckboxButton
              : Element.Checkbox,
            {
              attrs: __assign$2({}, newProps),
            },
            children
          )
        }
        return Formily.Vue.h(
          Element.Checkbox,
          {
            attrs: __assign$2({}, props),
            on: listeners,
          },
          slots
        )
      }
    },
  })
  var TransformElCheckboxGroup = transformComponent(Element.CheckboxGroup, {
    change: 'input',
  })
  var CheckboxGroupOption = VueCompositionAPI.defineComponent({
    name: 'CheckboxGroup',
    props: {
      options: {
        type: Array,
        default: function () {
          return []
        },
      },
      optionType: {
        type: String,
        default: 'default',
      },
    },
    setup: function (customProps, _a) {
      var attrs = _a.attrs,
        slots = _a.slots,
        listeners = _a.listeners
      return function () {
        var options = customProps.options || []
        var children =
          options.length !== 0
            ? {
                default: function () {
                  return options.map(function (option) {
                    if (typeof option === 'string') {
                      return Formily.Vue.h(
                        Checkbox,
                        {
                          props: {
                            option: {
                              label: option,
                              value: option,
                            },
                          },
                          attrs: {
                            optionType: customProps.optionType,
                          },
                        },
                        (
                          slots === null || slots === void 0
                            ? void 0
                            : slots.option
                        )
                          ? {
                              default: function () {
                                return slots.option({ option: option })
                              },
                            }
                          : {}
                      )
                    } else {
                      return Formily.Vue.h(
                        Checkbox,
                        {
                          props: {
                            option: option,
                          },
                          attrs: {
                            optionType: customProps.optionType,
                          },
                        },
                        (
                          slots === null || slots === void 0
                            ? void 0
                            : slots.option
                        )
                          ? {
                              default: function () {
                                return slots.option({ option: option })
                              },
                            }
                          : {}
                      )
                    }
                  })
                },
              }
            : slots
        return Formily.Vue.h(
          TransformElCheckboxGroup,
          {
            attrs: __assign$2({}, attrs),
            on: listeners,
          },
          children
        )
      }
    },
  })
  var CheckboxGroup = Formily.Vue.connect(
    CheckboxGroupOption,
    Formily.Vue.mapProps({ dataSource: 'options' }),
    Formily.Vue.mapReadPretty(PreviewText.Select, {
      multiple: true,
    })
  )
  var Checkbox = composeExport(Formily.Vue.connect(CheckboxOption), {
    Group: CheckboxGroup,
  })

  var TransformElDatePicker = transformComponent(Element.DatePicker, {
    change: 'input',
  })
  var getDefaultFormat = function (props, formatType) {
    if (formatType === void 0) {
      formatType = 'format'
    }
    var type = props.type
    if (type === 'week' && formatType === 'format') {
      return 'yyyy-WW'
    } else if (type === 'month') {
      return 'yyyy-MM'
    } else if (type === 'year') {
      return 'yyyy'
    } else if (type === 'datetime' || type === 'datetimerange') {
      return 'yyyy-MM-dd HH:mm:ss'
    }
    return 'yyyy-MM-dd'
  }
  var DatePicker = Formily.Vue.connect(
    TransformElDatePicker,
    Formily.Vue.mapProps({ readOnly: 'readonly' }, function (props) {
      return __assign$2(__assign$2({}, props), {
        format: props.format || getDefaultFormat(props),
        valueFormat:
          props.valueFormat || getDefaultFormat(props, 'valueFormat'),
      })
    }),
    Formily.Vue.mapReadPretty(PreviewText.DatePicker)
  )

  var FormProvider$1 = Formily.Vue.FormProvider
  var ElForm = {
    functional: true,
    render: function (h, context) {
      var _a
      var _b = context.props,
        _c = _b.form,
        form = _c === void 0 ? Formily.Vue.createForm({}) : _c,
        _d = _b.component,
        component = _d === void 0 ? Element.Form : _d,
        _e = _b.onAutoSubmit,
        onAutoSubmit =
          _e === void 0
            ? (_a = context.listeners) === null || _a === void 0
              ? void 0
              : _a.autoSubmit
            : _e,
        props = __rest(_b, ['form', 'component', 'onAutoSubmit'])
      var submitHandler = Array.isArray(onAutoSubmit)
        ? onAutoSubmit[0]
        : onAutoSubmit
      return h(FormProvider$1, { props: { form: form } }, [
        h(
          component,
          __assign$2(__assign$2({}, context.data), {
            props: props,
            nativeOn: {
              submit: function (e) {
                var _a, _b
                ;(_a =
                  e === null || e === void 0 ? void 0 : e.stopPropagation) ===
                  null || _a === void 0
                  ? void 0
                  : _a.call(e)
                ;(_b =
                  e === null || e === void 0 ? void 0 : e.preventDefault) ===
                  null || _b === void 0
                  ? void 0
                  : _b.call(e)
                form.submit(submitHandler)
              },
            },
          }),
          context.children
        ),
      ])
    },
  }

  var ElFormItem = Formily.Vue.connect(
    Element.FormItem,
    Formily.Vue.mapProps(
      { title: 'label', required: true },
      function (props, field) {
        return {
          error: !Formily.Core.isVoidField(field)
            ? field.errors.length
              ? field.errors.join('，')
              : undefined
            : undefined,
        }
      }
    )
  )

  var FormProvider = Formily.Vue.FormProvider
  var Form = VueCompositionAPI.defineComponent({
    name: 'FForm',
    props: [
      'form',
      'component',
      'previewTextPlaceholder',
      'onAutoSubmit',
      'onAutoSubmitFailed',
    ],
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots,
        listeners = _a.listeners
      var top = Formily.Vue.useForm()
      return function () {
        var form = props.form,
          _a = props.component,
          component = _a === void 0 ? 'form' : _a,
          _b = props.onAutoSubmit,
          onAutoSubmit =
            _b === void 0
              ? listeners === null || listeners === void 0
                ? void 0
                : listeners.autoSubmit
              : _b,
          _c = props.onAutoSubmitFailed,
          onAutoSubmitFailed =
            _c === void 0
              ? listeners === null || listeners === void 0
                ? void 0
                : listeners.autoSubmitFailed
              : _c,
          _d = props.previewTextPlaceholder,
          previewTextPlaceholder =
            _d === void 0
              ? slots === null || slots === void 0
                ? void 0
                : slots.previewTextPlaceholder
              : _d
        var renderContent = function (form) {
          return Formily.Vue.h(
            PreviewText.Placeholder,
            {
              props: {
                value: previewTextPlaceholder,
              },
            },
            {
              default: function () {
                return [
                  Formily.Vue.h(
                    FormLayout,
                    {
                      attrs: __assign$2({}, attrs),
                    },
                    {
                      default: function () {
                        return [
                          Formily.Vue.h(
                            component,
                            {
                              on: {
                                submit: function (e) {
                                  var _a, _b
                                  ;(_a =
                                    e === null || e === void 0
                                      ? void 0
                                      : e.stopPropagation) === null ||
                                  _a === void 0
                                    ? void 0
                                    : _a.call(e)
                                  ;(_b =
                                    e === null || e === void 0
                                      ? void 0
                                      : e.preventDefault) === null ||
                                  _b === void 0
                                    ? void 0
                                    : _b.call(e)
                                  form
                                    .submit(onAutoSubmit)
                                    .catch(onAutoSubmitFailed)
                                },
                              },
                            },
                            slots
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
        if (form) {
          return Formily.Vue.h(
            FormProvider,
            { props: { form: form } },
            {
              default: function () {
                return renderContent(form)
              },
            }
          )
        }
        if (!top.value) throw new Error('must pass form instance by createForm')
        return renderContent(top.value)
      }
    },
  })

  /**
   * A collection of shims that provide minimal functionality of the ES6 collections.
   *
   * These implementations are not meant to be used outside of the ResizeObserver
   * modules as they cover only a limited range of use cases.
   */
  /* eslint-disable require-jsdoc, valid-jsdoc */
  var MapShim = (function () {
    if (typeof Map !== 'undefined') {
      return Map
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
      var result = -1
      arr.some(function (entry, index) {
        if (entry[0] === key) {
          result = index
          return true
        }
        return false
      })
      return result
    }
    return /** @class */ (function () {
      function class_1() {
        this.__entries__ = []
      }
      Object.defineProperty(class_1.prototype, 'size', {
        /**
         * @returns {boolean}
         */
        get: function () {
          return this.__entries__.length
        },
        enumerable: true,
        configurable: true,
      })
      /**
       * @param {*} key
       * @returns {*}
       */
      class_1.prototype.get = function (key) {
        var index = getIndex(this.__entries__, key)
        var entry = this.__entries__[index]
        return entry && entry[1]
      }
      /**
       * @param {*} key
       * @param {*} value
       * @returns {void}
       */
      class_1.prototype.set = function (key, value) {
        var index = getIndex(this.__entries__, key)
        if (~index) {
          this.__entries__[index][1] = value
        } else {
          this.__entries__.push([key, value])
        }
      }
      /**
       * @param {*} key
       * @returns {void}
       */
      class_1.prototype.delete = function (key) {
        var entries = this.__entries__
        var index = getIndex(entries, key)
        if (~index) {
          entries.splice(index, 1)
        }
      }
      /**
       * @param {*} key
       * @returns {void}
       */
      class_1.prototype.has = function (key) {
        return !!~getIndex(this.__entries__, key)
      }
      /**
       * @returns {void}
       */
      class_1.prototype.clear = function () {
        this.__entries__.splice(0)
      }
      /**
       * @param {Function} callback
       * @param {*} [ctx=null]
       * @returns {void}
       */
      class_1.prototype.forEach = function (callback, ctx) {
        if (ctx === void 0) {
          ctx = null
        }
        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i]
          callback.call(ctx, entry[1], entry[0])
        }
      }
      return class_1
    })()
  })()

  /**
   * Detects whether window and document objects are available in current environment.
   */
  var isBrowser =
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    window.document === document

  // Returns global object of a current environment.
  var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
      return global
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
      return self
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
      return window
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')()
  })()

  /**
   * A shim for the requestAnimationFrame which falls back to the setTimeout if
   * first one is not supported.
   *
   * @returns {number} Requests' identifier.
   */
  var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
      // It's required to use a bounded function because IE sometimes throws
      // an "Invalid calling object" error if rAF is invoked without the global
      // object on the left hand side.
      return requestAnimationFrame.bind(global$1)
    }
    return function (callback) {
      return setTimeout(function () {
        return callback(Date.now())
      }, 1000 / 60)
    }
  })()

  // Defines minimum timeout before adding a trailing call.
  var trailingTimeout = 2
  /**
   * Creates a wrapper function which ensures that provided callback will be
   * invoked only once during the specified delay period.
   *
   * @param {Function} callback - Function to be invoked after the delay period.
   * @param {number} delay - Delay after which to invoke callback.
   * @returns {Function}
   */
  function throttle(callback, delay) {
    var leadingCall = false,
      trailingCall = false,
      lastCallTime = 0
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
      if (leadingCall) {
        leadingCall = false
        callback()
      }
      if (trailingCall) {
        proxy()
      }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
      requestAnimationFrame$1(resolvePending)
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
      var timeStamp = Date.now()
      if (leadingCall) {
        // Reject immediately following calls.
        if (timeStamp - lastCallTime < trailingTimeout) {
          return
        }
        // Schedule new call to be in invoked when the pending one is resolved.
        // This is important for "transitions" which never actually start
        // immediately so there is a chance that we might miss one if change
        // happens amids the pending invocation.
        trailingCall = true
      } else {
        leadingCall = true
        trailingCall = false
        setTimeout(timeoutCallback, delay)
      }
      lastCallTime = timeStamp
    }
    return proxy
  }

  // Minimum delay before invoking the update of observers.
  var REFRESH_DELAY = 20
  // A list of substrings of CSS properties used to find transition events that
  // might affect dimensions of observed elements.
  var transitionKeys = [
    'top',
    'right',
    'bottom',
    'left',
    'width',
    'height',
    'size',
    'weight',
  ]
  // Check if MutationObserver is available.
  var mutationObserverSupported = typeof MutationObserver !== 'undefined'
  /**
   * Singleton controller class which handles updates of ResizeObserver instances.
   */
  var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
      /**
       * Indicates whether DOM listeners have been added.
       *
       * @private {boolean}
       */
      this.connected_ = false
      /**
       * Tells that controller has subscribed for Mutation Events.
       *
       * @private {boolean}
       */
      this.mutationEventsAdded_ = false
      /**
       * Keeps reference to the instance of MutationObserver.
       *
       * @private {MutationObserver}
       */
      this.mutationsObserver_ = null
      /**
       * A list of connected observers.
       *
       * @private {Array<ResizeObserverSPI>}
       */
      this.observers_ = []
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)
      this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY)
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer)
      }
      // Add listeners if they haven't been added yet.
      if (!this.connected_) {
        this.connect_()
      }
    }
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
      var observers = this.observers_
      var index = observers.indexOf(observer)
      // Remove observer if it's present in registry.
      if (~index) {
        observers.splice(index, 1)
      }
      // Remove listeners if controller has no connected observers.
      if (!observers.length && this.connected_) {
        this.disconnect_()
      }
    }
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
      var changesDetected = this.updateObservers_()
      // Continue running updates if changes have been detected as there might
      // be future ones caused by CSS transitions.
      if (changesDetected) {
        this.refresh()
      }
    }
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
      // Collect observers that have active observations.
      var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive()
      })
      // Deliver notifications in a separate cycle in order to avoid any
      // collisions between observers, e.g. when multiple instances of
      // ResizeObserver are tracking the same element and the callback of one
      // of them changes content dimensions of the observed target. Sometimes
      // this may result in notifications being blocked for the rest of observers.
      activeObservers.forEach(function (observer) {
        return observer.broadcastActive()
      })
      return activeObservers.length > 0
    }
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already added.
      if (!isBrowser || this.connected_) {
        return
      }
      // Subscription to the "Transitionend" event is used as a workaround for
      // delayed transitions. This way it's possible to capture at least the
      // final state of an element.
      document.addEventListener('transitionend', this.onTransitionEnd_)
      window.addEventListener('resize', this.refresh)
      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh)
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true,
        })
      } else {
        document.addEventListener('DOMSubtreeModified', this.refresh)
        this.mutationEventsAdded_ = true
      }
      this.connected_ = true
    }
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already removed.
      if (!isBrowser || !this.connected_) {
        return
      }
      document.removeEventListener('transitionend', this.onTransitionEnd_)
      window.removeEventListener('resize', this.refresh)
      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect()
      }
      if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh)
      }
      this.mutationsObserver_ = null
      this.mutationEventsAdded_ = false
      this.connected_ = false
    }
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
      var _b = _a.propertyName,
        propertyName = _b === void 0 ? '' : _b
      // Detect whether transition may affect dimensions of an element.
      var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key)
      })
      if (isReflowProperty) {
        this.refresh()
      }
    }
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController()
      }
      return this.instance_
    }
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null
    return ResizeObserverController
  })()

  /**
   * Defines non-writable/enumerable properties of the provided target object.
   *
   * @param {Object} target - Object for which to define properties.
   * @param {Object} props - Properties to be defined.
   * @returns {Object} Target object.
   */
  var defineConfigurable = function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
      var key = _a[_i]
      Object.defineProperty(target, key, {
        value: props[key],
        enumerable: false,
        writable: false,
        configurable: true,
      })
    }
    return target
  }

  /**
   * Returns the global object associated with provided element.
   *
   * @param {Object} target
   * @returns {Object}
   */
  var getWindowOf = function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal =
      target && target.ownerDocument && target.ownerDocument.defaultView
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1
  }

  // Placeholder of an empty content rectangle.
  var emptyRect = createRectInit(0, 0, 0, 0)
  /**
   * Converts provided string to a number.
   *
   * @param {number|string} value
   * @returns {number}
   */
  function toFloat(value) {
    return parseFloat(value) || 0
  }
  /**
   * Extracts borders size from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @param {...string} positions - Borders positions (top, right, ...)
   * @returns {number}
   */
  function getBordersSize(styles) {
    var positions = []
    for (var _i = 1; _i < arguments.length; _i++) {
      positions[_i - 1] = arguments[_i]
    }
    return positions.reduce(function (size, position) {
      var value = styles['border-' + position + '-width']
      return size + toFloat(value)
    }, 0)
  }
  /**
   * Extracts paddings sizes from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @returns {Object} Paddings box.
   */
  function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left']
    var paddings = {}
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
      var position = positions_1[_i]
      var value = styles['padding-' + position]
      paddings[position] = toFloat(value)
    }
    return paddings
  }
  /**
   * Calculates content rectangle of provided SVG element.
   *
   * @param {SVGGraphicsElement} target - Element content rectangle of which needs
   *      to be calculated.
   * @returns {DOMRectInit}
   */
  function getSVGContentRect(target) {
    var bbox = target.getBBox()
    return createRectInit(0, 0, bbox.width, bbox.height)
  }
  /**
   * Calculates content rectangle of provided HTMLElement.
   *
   * @param {HTMLElement} target - Element for which to calculate the content rectangle.
   * @returns {DOMRectInit}
   */
  function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth,
      clientHeight = target.clientHeight
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
      return emptyRect
    }
    var styles = getWindowOf(target).getComputedStyle(target)
    var paddings = getPaddings(styles)
    var horizPad = paddings.left + paddings.right
    var vertPad = paddings.top + paddings.bottom
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
      height = toFloat(styles.height)
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
      // Following conditions are required to handle Internet Explorer which
      // doesn't include paddings and borders to computed CSS dimensions.
      //
      // We can say that if CSS dimensions + paddings are equal to the "client"
      // properties then it's either IE, and thus we don't need to subtract
      // anything, or an element merely doesn't have paddings/borders styles.
      if (Math.round(width + horizPad) !== clientWidth) {
        width -= getBordersSize(styles, 'left', 'right') + horizPad
      }
      if (Math.round(height + vertPad) !== clientHeight) {
        height -= getBordersSize(styles, 'top', 'bottom') + vertPad
      }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
      // In some browsers (only in Firefox, actually) CSS width & height
      // include scroll bars size which can be removed at this step as scroll
      // bars are the only difference between rounded dimensions + paddings
      // and "client" properties, though that is not always true in Chrome.
      var vertScrollbar = Math.round(width + horizPad) - clientWidth
      var horizScrollbar = Math.round(height + vertPad) - clientHeight
      // Chrome has a rather weird rounding of "client" properties.
      // E.g. for an element with content width of 314.2px it sometimes gives
      // the client width of 315px and for the width of 314.7px it may give
      // 314px. And it doesn't happen all the time. So just ignore this delta
      // as a non-relevant.
      if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar
      }
      if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar
      }
    }
    return createRectInit(paddings.left, paddings.top, width, height)
  }
  /**
   * Checks whether provided element is an instance of the SVGGraphicsElement.
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */
  var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
      return function (target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement
      }
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) {
      return (
        target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'
      )
    }
  })()
  /**
   * Checks whether provided element is a document element (<html>).
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */
  function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement
  }
  /**
   * Calculates an appropriate content rectangle for provided html or svg element.
   *
   * @param {Element} target - Element content rectangle of which needs to be calculated.
   * @returns {DOMRectInit}
   */
  function getContentRect(target) {
    if (!isBrowser) {
      return emptyRect
    }
    if (isSVGGraphicsElement(target)) {
      return getSVGContentRect(target)
    }
    return getHTMLElementContentRect(target)
  }
  /**
   * Creates rectangle with an interface of the DOMRectReadOnly.
   * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
   *
   * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
   * @returns {DOMRectReadOnly}
   */
  function createReadOnlyRect(_a) {
    var x = _a.x,
      y = _a.y,
      width = _a.width,
      height = _a.height
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr =
      typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object
    var rect = Object.create(Constr.prototype)
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
      x: x,
      y: y,
      width: width,
      height: height,
      top: y,
      right: x + width,
      bottom: height + y,
      left: x,
    })
    return rect
  }
  /**
   * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
   * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
   *
   * @param {number} x - X coordinate.
   * @param {number} y - Y coordinate.
   * @param {number} width - Rectangle's width.
   * @param {number} height - Rectangle's height.
   * @returns {DOMRectInit}
   */
  function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height }
  }

  /**
   * Class that is responsible for computations of the content rectangle of
   * provided DOM element and for keeping track of it's changes.
   */
  var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
      /**
       * Broadcasted width of content rectangle.
       *
       * @type {number}
       */
      this.broadcastWidth = 0
      /**
       * Broadcasted height of content rectangle.
       *
       * @type {number}
       */
      this.broadcastHeight = 0
      /**
       * Reference to the last observed content rectangle.
       *
       * @private {DOMRectInit}
       */
      this.contentRect_ = createRectInit(0, 0, 0, 0)
      this.target = target
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
      var rect = getContentRect(this.target)
      this.contentRect_ = rect
      return (
        rect.width !== this.broadcastWidth ||
        rect.height !== this.broadcastHeight
      )
    }
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
      var rect = this.contentRect_
      this.broadcastWidth = rect.width
      this.broadcastHeight = rect.height
      return rect
    }
    return ResizeObservation
  })()

  var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit)
      // According to the specification following properties are not writable
      // and are also not enumerable in the native implementation.
      //
      // Property accessors are not being used as they'd require to define a
      // private WeakMap storage which may cause memory leaks in browsers that
      // don't support this type of collections.
      defineConfigurable(this, { target: target, contentRect: contentRect })
    }
    return ResizeObserverEntry
  })()

  var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
      /**
       * Collection of resize observations that have detected changes in dimensions
       * of elements.
       *
       * @private {Array<ResizeObservation>}
       */
      this.activeObservations_ = []
      /**
       * Registry of the ResizeObservation instances.
       *
       * @private {Map<Element, ResizeObservation>}
       */
      this.observations_ = new MapShim()
      if (typeof callback !== 'function') {
        throw new TypeError(
          'The callback provided as parameter 1 is not a function.'
        )
      }
      this.callback_ = callback
      this.controller_ = controller
      this.callbackCtx_ = callbackCtx
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.')
      }
      // Do nothing if current environment doesn't have the Element interface.
      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".')
      }
      var observations = this.observations_
      // Do nothing if element is already being observed.
      if (observations.has(target)) {
        return
      }
      observations.set(target, new ResizeObservation(target))
      this.controller_.addObserver(this)
      // Force the update of observations.
      this.controller_.refresh()
    }
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.')
      }
      // Do nothing if current environment doesn't have the Element interface.
      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".')
      }
      var observations = this.observations_
      // Do nothing if element is not being observed.
      if (!observations.has(target)) {
        return
      }
      observations.delete(target)
      if (!observations.size) {
        this.controller_.removeObserver(this)
      }
    }
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
      this.clearActive()
      this.observations_.clear()
      this.controller_.removeObserver(this)
    }
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
      var _this = this
      this.clearActive()
      this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation)
        }
      })
    }
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
      // Do nothing if observer doesn't have active observations.
      if (!this.hasActive()) {
        return
      }
      var ctx = this.callbackCtx_
      // Create ResizeObserverEntry instance for every active observation.
      var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(
          observation.target,
          observation.broadcastRect()
        )
      })
      this.callback_.call(ctx, entries, ctx)
      this.clearActive()
    }
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
      this.activeObservations_.splice(0)
    }
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
      return this.activeObservations_.length > 0
    }
    return ResizeObserverSPI
  })()

  // Registry of internal observers. If WeakMap is not available use current shim
  // for the Map collection as it has all required methods and because WeakMap
  // can't be fully polyfilled anyway.
  var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim()
  /**
   * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
   * exposing only those methods and properties that are defined in the spec.
   */
  var ResizeObserver$1 = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
      if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.')
      }
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.')
      }
      var controller = ResizeObserverController.getInstance()
      var observer = new ResizeObserverSPI(callback, controller, this)
      observers.set(this, observer)
    }
    return ResizeObserver
  })()
  // Expose public methods of ResizeObserver.
  ;['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver$1.prototype[method] = function () {
      var _a
      return (_a = observers.get(this))[method].apply(_a, arguments)
    }
  })

  var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
      return global$1.ResizeObserver
    }
    return ResizeObserver$1
  })()

  var useOverflow = function (containerRef) {
    var overflow = VueCompositionAPI.ref(false)
    var resizeObserver
    var cleanup = function () {
      if (resizeObserver) {
        resizeObserver.unobserve(containerRef.value)
        resizeObserver = null
      }
    }
    var observer = function () {
      var container = containerRef.value
      var content = container.querySelector('label')
      var containerWidth = container.getBoundingClientRect().width
      var contentWidth =
        content === null || content === void 0
          ? void 0
          : content.getBoundingClientRect().width
      if (containerWidth !== 0) {
        if (contentWidth > containerWidth) {
          overflow.value = true
        } else {
          overflow.value = false
        }
      }
    }
    var stopWatch = VueCompositionAPI.watch(
      function () {
        return containerRef.value
      },
      function (el) {
        cleanup()
        if (el) {
          resizeObserver = new index(observer)
          resizeObserver.observe(el)
        }
      },
      { immediate: true, flush: 'post' }
    )
    VueCompositionAPI.onBeforeUnmount(function () {
      cleanup()
      stopWatch()
    })
    return overflow
  }
  var ICON_MAP = {
    error: function () {
      return Formily.Vue.h('i', { class: 'el-icon-circle-close' }, {})
    },
    success: function () {
      return Formily.Vue.h('i', { class: 'el-icon-circle-check' }, {})
    },
    warning: function () {
      return Formily.Vue.h('i', { class: 'el-icon-warning-outline' }, {})
    },
  }
  var FormBaseItem = VueCompositionAPI.defineComponent({
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
      bordered: { default: true },
      inset: { default: false },
    },
    setup: function (props, _a) {
      var slots = _a.slots
      _a.attrs
      var refs = _a.refs
      var active = VueCompositionAPI.ref(false)
      var deepLayoutRef = useFormLayout()
      var prefixCls = ''.concat(stylePrefix, '-form-item')
      var containerRef = VueCompositionAPI.ref(null)
      var overflow = useOverflow(containerRef)
      VueCompositionAPI.onMounted(function () {
        containerRef.value = refs.labelContainer
      })
      VueCompositionAPI.provide(
        FormLayoutShallowContext,
        VueCompositionAPI.ref(null)
      )
      return function () {
        var _a, _b, _c, _d
        var _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q
        var gridStyles = {}
        var deepLayout = deepLayoutRef.value
        var label = props.label,
          _r = props.colon,
          colon =
            _r === void 0
              ? (_e = deepLayout.colon) !== null && _e !== void 0
                ? _e
                : true
              : _r,
          _s = props.layout,
          layout =
            _s === void 0
              ? (_f = deepLayout.layout) !== null && _f !== void 0
                ? _f
                : 'horizontal'
              : _s,
          tooltip = props.tooltip,
          _t = props.labelStyle,
          labelStyle = _t === void 0 ? {} : _t,
          _u = props.labelWrap,
          labelWrap =
            _u === void 0
              ? (_g = deepLayout.labelWrap) !== null && _g !== void 0
                ? _g
                : false
              : _u,
          _v = props.labelWidth,
          labelWidth = _v === void 0 ? deepLayout.labelWidth : _v,
          _w = props.wrapperWidth,
          wrapperWidth = _w === void 0 ? deepLayout.wrapperWidth : _w,
          _x = props.labelCol,
          labelCol = _x === void 0 ? deepLayout.labelCol : _x,
          _y = props.wrapperCol,
          wrapperCol = _y === void 0 ? deepLayout.wrapperCol : _y,
          _z = props.wrapperAlign,
          wrapperAlign =
            _z === void 0
              ? (_h = deepLayout.wrapperAlign) !== null && _h !== void 0
                ? _h
                : 'left'
              : _z,
          _0 = props.wrapperWrap,
          wrapperWrap = _0 === void 0 ? deepLayout.wrapperWrap : _0,
          _1 = props.wrapperStyle,
          wrapperStyle = _1 === void 0 ? {} : _1,
          _2 = props.fullness,
          fullness = _2 === void 0 ? deepLayout.fullness : _2,
          addonBefore = props.addonBefore,
          addonAfter = props.addonAfter,
          _3 = props.size,
          size = _3 === void 0 ? deepLayout.size : _3,
          extra = props.extra,
          feedbackText = props.feedbackText,
          _4 = props.feedbackLayout,
          feedbackLayout =
            _4 === void 0
              ? (_j = deepLayout.feedbackLayout) !== null && _j !== void 0
                ? _j
                : 'loose'
              : _4,
          _5 = props.tooltipLayout,
          tooltipLayout =
            _5 === void 0
              ? (_k = deepLayout.tooltipLayout) !== null && _k !== void 0
                ? _k
                : 'icon'
              : _5,
          feedbackStatus = props.feedbackStatus,
          feedbackIcon = props.feedbackIcon,
          asterisk = props.asterisk,
          _6 = props.bordered,
          bordered = _6 === void 0 ? deepLayout.bordered : _6,
          _7 = props.inset,
          inset = _7 === void 0 ? deepLayout.inset : _7
        var labelAlign =
          deepLayout.layout === 'vertical'
            ? (_m =
                (_l = props.labelAlign) !== null && _l !== void 0
                  ? _l
                  : deepLayout.labelAlign) !== null && _m !== void 0
              ? _m
              : 'left'
            : (_p =
                (_o = props.labelAlign) !== null && _o !== void 0
                  ? _o
                  : deepLayout.labelAlign) !== null && _p !== void 0
            ? _p
            : 'right'
        // 固定宽度
        var enableCol = false
        if (labelWidth || wrapperWidth) {
          if (labelWidth) {
            labelStyle.width = ''.concat(labelWidth, 'px')
            labelStyle.maxWidth = ''.concat(labelWidth, 'px')
          }
          if (wrapperWidth) {
            wrapperStyle.width = ''.concat(wrapperWidth, 'px')
            wrapperStyle.maxWidth = ''.concat(wrapperWidth, 'px')
          }
          // 栅格模式
        } else if (labelCol || wrapperCol) {
          enableCol = true
        }
        var formatChildren =
          feedbackLayout === 'popover'
            ? Formily.Vue.h(
                'el-popover',
                {
                  props: {
                    disabled: !feedbackText,
                    placement: 'top',
                  },
                },
                {
                  reference: function () {
                    return Formily.Vue.h(
                      'div',
                      {},
                      {
                        default: function () {
                          var _a
                          return (_a = slots.default) === null || _a === void 0
                            ? void 0
                            : _a.call(slots)
                        },
                      }
                    )
                  },
                  default: function () {
                    var _a
                    return [
                      Formily.Vue.h(
                        'div',
                        {
                          class:
                            ((_a = {}),
                            (_a[
                              ''
                                .concat(prefixCls, '-')
                                .concat(feedbackStatus, '-help')
                            ] = !!feedbackStatus),
                            (_a[''.concat(prefixCls, '-help')] = true),
                            _a),
                        },
                        {
                          default: function () {
                            return [
                              feedbackStatus &&
                              ['error', 'success', 'warning'].includes(
                                feedbackStatus
                              )
                                ? ICON_MAP[feedbackStatus]()
                                : '',
                              resolveComponent(feedbackText),
                            ]
                          },
                        }
                      ),
                    ]
                  },
                }
              )
            : (_q = slots.default) === null || _q === void 0
            ? void 0
            : _q.call(slots)
        var renderLabelText = function () {
          var labelChildren = Formily.Vue.h(
            'div',
            {
              class: ''.concat(prefixCls, '-label-content'),
              ref: 'labelContainer',
            },
            {
              default: function () {
                return [
                  asterisk &&
                    Formily.Vue.h(
                      'span',
                      { class: ''.concat(prefixCls, '-asterisk') },
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
                        return [resolveComponent(label)]
                      },
                    }
                  ),
                ]
              },
            }
          )
          var isTextTooltip = tooltip && tooltipLayout === 'text'
          if (isTextTooltip || overflow.value) {
            return Formily.Vue.h(
              Element.Tooltip,
              {
                props: {
                  placement: 'top',
                },
              },
              {
                default: function () {
                  return [labelChildren]
                },
                content: function () {
                  return Formily.Vue.h(
                    'div',
                    {},
                    {
                      default: function () {
                        return [
                          overflow.value && resolveComponent(label),
                          isTextTooltip && resolveComponent(tooltip),
                        ]
                      },
                    }
                  )
                },
              }
            )
          } else {
            return labelChildren
          }
        }
        var renderTooltipIcon = function () {
          if (tooltip && tooltipLayout === 'icon') {
            return Formily.Vue.h(
              'span',
              {
                class: ''.concat(prefixCls, '-label-tooltip'),
              },
              {
                default: function () {
                  return [
                    Formily.Vue.h(
                      Element.Tooltip,
                      {
                        props: {
                          placement: 'top',
                        },
                      },
                      {
                        default: function () {
                          return [
                            Formily.Vue.h('i', { class: 'el-icon-info' }, {}),
                          ]
                        },
                        content: function () {
                          return Formily.Vue.h(
                            'div',
                            {
                              class: ''.concat(
                                prefixCls,
                                '-label-tooltip-content'
                              ),
                            },
                            {
                              default: function () {
                                return [resolveComponent(tooltip)]
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
          }
        }
        var renderLabel =
          label &&
          Formily.Vue.h(
            'div',
            {
              class:
                ((_a = {}),
                (_a[''.concat(prefixCls, '-label')] = true),
                (_a[''.concat(prefixCls, '-label-tooltip')] =
                  (tooltip && tooltipLayout === 'text') || overflow.value),
                (_a[''.concat(prefixCls, '-item-col-').concat(labelCol)] =
                  enableCol && !!labelCol),
                _a),
              style: labelStyle,
            },
            {
              default: function () {
                return [
                  // label content
                  renderLabelText(),
                  // label tooltip
                  renderTooltipIcon(),
                  // label colon
                  label &&
                    Formily.Vue.h(
                      'span',
                      {
                        class: ''.concat(prefixCls, '-colon'),
                      },
                      {
                        default: function () {
                          return [colon ? ':' : '']
                        },
                      }
                    ),
                ]
              },
            }
          )
        var renderFeedback =
          !!feedbackText &&
          feedbackLayout !== 'popover' &&
          feedbackLayout !== 'none' &&
          Formily.Vue.h(
            'div',
            {
              class:
                ((_b = {}),
                (_b[''.concat(prefixCls, '-').concat(feedbackStatus, '-help')] =
                  !!feedbackStatus),
                (_b[''.concat(prefixCls, '-help')] = true),
                (_b[''.concat(prefixCls, '-help-enter')] = true),
                (_b[''.concat(prefixCls, '-help-enter-active')] = true),
                _b),
            },
            {
              default: function () {
                return [resolveComponent(feedbackText)]
              },
            }
          )
        var renderExtra =
          extra &&
          Formily.Vue.h(
            'div',
            { class: ''.concat(prefixCls, '-extra') },
            {
              default: function () {
                return [extra]
              },
            }
          )
        var renderContent = Formily.Vue.h(
          'div',
          {
            class:
              ((_c = {}),
              (_c[''.concat(prefixCls, '-control')] = true),
              (_c[''.concat(prefixCls, '-item-col-').concat(wrapperCol)] =
                enableCol && !!wrapperCol),
              _c),
          },
          {
            default: function () {
              return [
                Formily.Vue.h(
                  'div',
                  { class: ''.concat(prefixCls, '-control-content') },
                  {
                    default: function () {
                      var _a
                      return [
                        addonBefore &&
                          Formily.Vue.h(
                            'div',
                            { class: ''.concat(prefixCls, '-addon-before') },
                            {
                              default: function () {
                                return [resolveComponent(addonBefore)]
                              },
                            }
                          ),
                        Formily.Vue.h(
                          'div',
                          {
                            class:
                              ((_a = {}),
                              (_a[
                                ''.concat(
                                  prefixCls,
                                  '-control-content-component'
                                )
                              ] = true),
                              (_a[
                                ''.concat(
                                  prefixCls,
                                  '-control-content-component-has-feedback-icon'
                                )
                              ] = !!feedbackIcon),
                              _a),
                            style: wrapperStyle,
                          },
                          {
                            default: function () {
                              return [
                                formatChildren,
                                feedbackIcon &&
                                  Formily.Vue.h(
                                    'div',
                                    {
                                      class: ''.concat(
                                        prefixCls,
                                        '-feedback-icon'
                                      ),
                                    },
                                    {
                                      default: function () {
                                        return [
                                          typeof feedbackIcon === 'string'
                                            ? Formily.Vue.h(
                                                'i',
                                                { class: feedbackIcon },
                                                {}
                                              )
                                            : resolveComponent(feedbackIcon),
                                        ]
                                      },
                                    }
                                  ),
                              ]
                            },
                          }
                        ),
                        addonAfter &&
                          Formily.Vue.h(
                            'div',
                            { class: ''.concat(prefixCls, '-addon-after') },
                            {
                              default: function () {
                                return [resolveComponent(addonAfter)]
                              },
                            }
                          ),
                      ]
                    },
                  }
                ),
                renderFeedback,
                renderExtra,
              ]
            },
          }
        )
        return Formily.Vue.h(
          'div',
          {
            style: __assign$2({}, gridStyles),
            attrs: {
              'data-grid-span': props.gridSpan,
            },
            class:
              ((_d = {}),
              (_d[''.concat(prefixCls)] = true),
              (_d[''.concat(prefixCls, '-layout-').concat(layout)] = true),
              (_d[''.concat(prefixCls, '-').concat(feedbackStatus)] =
                !!feedbackStatus),
              (_d[''.concat(prefixCls, '-feedback-has-text')] = !!feedbackText),
              (_d[''.concat(prefixCls, '-size-').concat(size)] = !!size),
              (_d[
                ''.concat(prefixCls, '-feedback-layout-').concat(feedbackLayout)
              ] = !!feedbackLayout),
              (_d[''.concat(prefixCls, '-fullness')] =
                !!fullness || !!inset || !!feedbackIcon),
              (_d[''.concat(prefixCls, '-inset')] = !!inset),
              (_d[''.concat(prefixCls, '-active')] = active.value),
              (_d[''.concat(prefixCls, '-inset-active')] =
                !!inset && active.value),
              (_d[
                ''.concat(prefixCls, '-label-align-').concat(labelAlign)
              ] = true),
              (_d[
                ''.concat(prefixCls, '-control-align-').concat(wrapperAlign)
              ] = true),
              (_d[''.concat(prefixCls, '-label-wrap')] = !!labelWrap),
              (_d[''.concat(prefixCls, '-control-wrap')] = !!wrapperWrap),
              (_d[''.concat(prefixCls, '-bordered-none')] =
                bordered === false || !!inset || !!feedbackIcon),
              (_d[''.concat(props.className)] = !!props.className),
              _d),
            on: {
              '!focus': function () {
                if (feedbackIcon || inset) {
                  active.value = true
                }
              },
              '!blur': function () {
                if (feedbackIcon || inset) {
                  active.value = false
                }
              },
            },
          },
          {
            default: function () {
              return [renderLabel, renderContent]
            },
          }
        )
      }
    },
  })
  var Item = Formily.Vue.connect(
    FormBaseItem,
    Formily.Vue.mapProps(
      { validateStatus: true, title: 'label', required: true },
      function (props, field) {
        if (Formily.Core.isVoidField(field)) return props
        if (!field) return props
        var takeMessage = function () {
          var split = function (messages) {
            return messages.reduce(function (buf, text, index) {
              if (!text) return buf
              return index < messages.length - 1
                ? buf.concat([text, ', '])
                : buf.concat([text])
            }, [])
          }
          if (field.validating) return
          if (props.feedbackText) return props.feedbackText
          if (field.selfErrors.length) return split(field.selfErrors)
          if (field.selfWarnings.length) return split(field.selfWarnings)
          if (field.selfSuccesses.length) return split(field.selfSuccesses)
        }
        var errorMessages = takeMessage()
        return {
          feedbackText: Array.isArray(errorMessages)
            ? errorMessages.join(', ')
            : errorMessages,
          extra: props.extra || field.description,
        }
      },
      function (props, field) {
        var _a
        if (Formily.Core.isVoidField(field)) return props
        if (!field) return props
        return {
          feedbackStatus:
            field.validateStatus === 'validating'
              ? 'pending'
              : (Array.isArray(field.decorator) &&
                  ((_a = field.decorator[1]) === null || _a === void 0
                    ? void 0
                    : _a.feedbackStatus)) ||
                field.validateStatus,
        }
      },
      function (props, field) {
        if (Formily.Core.isVoidField(field)) return props
        if (!field) return props
        var asterisk = false
        if (field.required && field.pattern !== 'readPretty') {
          asterisk = true
        }
        if ('asterisk' in props) {
          asterisk = props.asterisk
        }
        return {
          asterisk: asterisk,
        }
      }
    )
  )
  var FormItem = composeExport(Item, {
    BaseItem: FormBaseItem,
  })

  var FormButtonGroup = VueCompositionAPI.defineComponent({
    name: 'FFormButtonGroup',
    props: {
      align: {
        type: String,
        default: 'left',
      },
      gutter: {
        type: Number,
        default: 8,
      },
      alignFormItem: {
        type: Boolean,
        default: false,
      },
    },
    setup: function (props, _a) {
      var slots = _a.slots,
        attrs = _a.attrs
      var prefixCls = ''.concat(stylePrefix, '-form-button-group')
      return function () {
        if (props.alignFormItem) {
          return Formily.Vue.h(
            FormBaseItem,
            {
              style: {
                margin: 0,
                padding: 0,
                width: '100%',
              },
              attrs: __assign$2({ colon: false, label: ' ' }, attrs),
            },
            {
              default: function () {
                return Formily.Vue.h(
                  Space,
                  { props: { size: props.gutter } },
                  slots
                )
              },
            }
          )
        } else {
          return Formily.Vue.h(
            Space,
            {
              class: [prefixCls],
              style: {
                justifyContent:
                  props.align === 'left'
                    ? 'flex-start'
                    : props.align === 'right'
                    ? 'flex-end'
                    : 'center',
                display: 'flex',
              },
              props: __assign$2(__assign$2({}, attrs), { size: props.gutter }),
              attrs: attrs,
            },
            slots
          )
        }
      }
    },
  })

  var __assign$1 =
    (undefined && undefined.__assign) ||
    function () {
      __assign$1 =
        Object.assign ||
        function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i]
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
          }
          return t
        }
      return __assign$1.apply(this, arguments)
    }
  var isHTMLElement = function (node) {
    return node.nodeType === 1
  }
  var ChildListMutationObserver = /** @class */ (function () {
    function ChildListMutationObserver(callback) {
      var _this = this
      this.childList = []
      this.handler = function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(function (node) {
              if (isHTMLElement(node)) {
                _this.addObserver(node)
              }
            })
            mutation.removedNodes.forEach(function (node) {
              if (isHTMLElement(node)) {
                _this.removeObserver(node)
              }
            })
          }
        })
        _this.callback(mutations, _this.observer)
      }
      this.observe = function (element, init) {
        _this.init = init
        _this.observeChildList(element)
        _this.observer.observe(
          element,
          __assign$1(__assign$1({}, _this.init), {
            subtree: false,
            childList: true,
            characterData: false,
            characterDataOldValue: false,
            attributeOldValue: false,
          })
        )
      }
      this.disconnect = function () {
        _this.observer.disconnect()
      }
      this.callback = callback
      this.observer = new MutationObserver(this.handler)
    }
    ChildListMutationObserver.prototype.observeChildList = function (element) {
      var _this = this
      Array.from(element.children).forEach(function (node) {
        _this.addObserver(node)
      })
    }
    ChildListMutationObserver.prototype.addObserver = function (element) {
      var _this = this
      var child = this.childList.find(function (t) {
        return t.element === element
      })
      if (!child) {
        var childIndex_1 = this.childList.length
        var child_1 = {
          element: element,
          observer: new MutationObserver(this.callback),
          dispose: function () {
            if (child_1.observer) {
              child_1.observer.disconnect()
              delete child_1.observer
              _this.childList.splice(childIndex_1, 1)
            }
          },
        }
        child_1.observer.observe(
          child_1.element,
          __assign$1(__assign$1({}, this.init), {
            subtree: false,
            childList: false,
            characterData: false,
            characterDataOldValue: false,
            attributeOldValue: false,
          })
        )
        this.childList.push(child_1)
      }
    }
    ChildListMutationObserver.prototype.removeObserver = function (element) {
      var _a
      var child = this.childList.find(function (t) {
        return t.element === element
      })
      if (child) {
        ;(_a = child.dispose) === null || _a === void 0
          ? void 0
          : _a.call(child)
      }
    }
    return ChildListMutationObserver
  })()

  var __assign =
    (undefined && undefined.__assign) ||
    function () {
      __assign =
        Object.assign ||
        function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i]
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
          }
          return t
        }
      return __assign.apply(this, arguments)
    }
  var __read =
    (undefined && undefined.__read) ||
    function (o, n) {
      var m = typeof Symbol === 'function' && o[Symbol.iterator]
      if (!m) return o
      var i = m.call(o),
        r,
        ar = [],
        e
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value)
      } catch (error) {
        e = { error: error }
      } finally {
        try {
          if (r && !r.done && (m = i['return'])) m.call(i)
        } finally {
          if (e) throw e.error
        }
      }
      return ar
    }
  var __spreadArray =
    (undefined && undefined.__spreadArray) ||
    function (to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i)
            ar[i] = from[i]
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from))
    }
  var SpanRegExp = /span\s*(\d+)/
  var isValid = function (value) {
    return value !== undefined && value !== null
  }
  var calcBreakpointIndex = function (breakpoints, width) {
    if (Array.isArray(breakpoints)) {
      for (var i = 0; i < breakpoints.length; i++) {
        if (width <= breakpoints[i]) {
          return i
        }
      }
    }
    return -1
  }
  var calcFactor = function (value, breakpointIndex) {
    var _a
    if (Array.isArray(value)) {
      if (breakpointIndex === -1) return value[0]
      return (_a = value[breakpointIndex]) !== null && _a !== void 0
        ? _a
        : value[value.length - 1]
    } else {
      return value
    }
  }
  var parseGridNode = function (elements) {
    return Array.from(elements).reduce(function (buf, element, index) {
      var _a
      var style = getComputedStyle(element)
      var visible = !(style.display === 'none')
      var origin = element.getAttribute('data-grid-span')
      var span =
        (_a = parseSpan(style.gridColumnStart)) !== null && _a !== void 0
          ? _a
          : 1
      var originSpan = Number(
        origin !== null && origin !== void 0 ? origin : span
      )
      var node = {
        index: index,
        span: span,
        visible: visible,
        originSpan: originSpan,
        element: element,
      }
      if (!origin) {
        element.setAttribute('data-grid-span', String(span))
      }
      return buf.concat(node)
    }, [])
  }
  var calcChildTotalColumns = function (nodes, shadow) {
    if (shadow === void 0) {
      shadow = false
    }
    return nodes.reduce(function (buf, node) {
      var _a
      if (!shadow) {
        if (!node.visible) return buf
      }
      if (node.originSpan === -1)
        return buf + ((_a = node.span) !== null && _a !== void 0 ? _a : 1)
      return buf + node.span
    }, 0)
  }
  var calcChildOriginTotalColumns = function (nodes, shadow) {
    if (shadow === void 0) {
      shadow = false
    }
    return nodes.reduce(function (buf, node) {
      var _a
      if (!shadow) {
        if (!node.visible) return buf
      }
      if (node.originSpan === -1)
        return buf + ((_a = node.span) !== null && _a !== void 0 ? _a : 1)
      return buf + node.originSpan
    }, 0)
  }
  var calcSatisfyColumns = function (
    width,
    maxColumns,
    minColumns,
    maxWidth,
    minWidth,
    gap
  ) {
    var results = []
    for (var columns = minColumns; columns <= maxColumns; columns++) {
      var innerWidth_1 = width - (columns - 1) * gap
      var columnWidth = innerWidth_1 / columns
      if (columnWidth >= minWidth && columnWidth <= maxWidth) {
        results.push(columns)
      } else if (columnWidth < minWidth) {
        results.push(Math.min(Math.floor(innerWidth_1 / minWidth), maxColumns))
      } else if (columnWidth > maxWidth) {
        results.push(Math.min(Math.floor(innerWidth_1 / maxWidth), maxColumns))
      }
    }
    return Math.max.apply(Math, __spreadArray([], __read(results), false))
  }
  var parseSpan = function (gridColumnStart) {
    var _a, _b
    return Number(
      (_b =
        (_a = String(gridColumnStart).match(SpanRegExp)) === null ||
        _a === void 0
          ? void 0
          : _a[1]) !== null && _b !== void 0
        ? _b
        : 1
    )
  }
  var factor = function (value, grid) {
    return isValid(value) ? calcFactor(value, grid.breakpoint) : value
  }
  var resolveChildren = function (grid) {
    var walked = 0,
      shadowWalked = 0,
      rowIndex = 0,
      shadowRowIndex = 0
    if (!grid.ready) return
    grid.children = grid.children.map(function (node) {
      var _a
      var columnIndex = walked % grid.columns
      var shadowColumnIndex = shadowWalked % grid.columns
      var remainColumns = grid.columns - columnIndex
      var originSpan = node.originSpan
      var targetSpan = originSpan > grid.columns ? grid.columns : originSpan
      var span = grid.options.strictAutoFit
        ? targetSpan
        : targetSpan > remainColumns
        ? remainColumns
        : targetSpan
      var gridColumn =
        originSpan === -1
          ? 'span '.concat(remainColumns, ' / -1')
          : 'span '.concat(span, ' / auto')
      if (node.element.style.gridColumn !== gridColumn) {
        node.element.style.gridColumn = gridColumn
      }
      if (node.visible) {
        walked += span
      }
      shadowWalked += span
      if (columnIndex === 0) {
        rowIndex++
      }
      if (shadowColumnIndex == 0) {
        shadowRowIndex++
      }
      node.shadowRow = shadowRowIndex
      node.shadowColumn = shadowColumnIndex + 1
      if (node.visible) {
        node.row = rowIndex
        node.column = columnIndex + 1
      }
      if (
        (_a = grid.options) === null || _a === void 0
          ? void 0
          : _a.shouldVisible
      ) {
        if (!grid.options.shouldVisible(node, grid)) {
          if (node.visible) {
            node.element.style.display = 'none'
          }
          node.visible = false
        } else {
          if (!node.visible) {
            node.element.style.display = ''
          }
          node.visible = true
        }
      }
      return node
    })
  }
  var nextTick = function (callback) {
    return Promise.resolve(0).then(callback)
  }
  var Grid = /** @class */ (function () {
    function Grid(options) {
      var _this = this
      this.width = 0
      this.height = 0
      this.children = []
      this.childTotalColumns = 0
      this.shadowChildTotalColumns = 0
      this.childOriginTotalColumns = 0
      this.shadowChildOriginTotalColumns = 0
      this.ready = false
      this.connect = function (container) {
        if (container) {
          _this.container = container
          var initialize = Formily.Reactive.batch.bound(function () {
            digest_1()
            _this.ready = true
          })
          var digest_1 = Formily.Reactive.batch.bound(function () {
            _this.children = parseGridNode(_this.container.children)
            _this.childTotalColumns = calcChildTotalColumns(_this.children)
            _this.shadowChildTotalColumns = calcChildTotalColumns(
              _this.children,
              true
            )
            _this.childOriginTotalColumns = calcChildOriginTotalColumns(
              _this.children
            )
            _this.shadowChildOriginTotalColumns = calcChildOriginTotalColumns(
              _this.children,
              true
            )
            var rect = _this.container.getBoundingClientRect()
            if (rect.width && rect.height) {
              _this.width = rect.width
              _this.height = rect.height
            }
            resolveChildren(_this)
            nextTick(function () {
              var _a, _b
              ;(_b =
                (_a = _this.options) === null || _a === void 0
                  ? void 0
                  : _a.onDigest) === null || _b === void 0
                ? void 0
                : _b.call(_a, _this)
            })
            if (!_this.ready) {
              nextTick(function () {
                var _a, _b
                ;(_b =
                  (_a = _this.options) === null || _a === void 0
                    ? void 0
                    : _a.onInitialized) === null || _b === void 0
                  ? void 0
                  : _b.call(_a, _this)
              })
            }
          })
          var mutationObserver_1 = new ChildListMutationObserver(digest_1)
          var resizeObserver_1 = new ResizeObserver(digest_1)
          var dispose_1 = Formily.Reactive.reaction(function () {
            return __assign({}, _this.options)
          }, digest_1)
          resizeObserver_1.observe(_this.container)
          mutationObserver_1.observe(_this.container, {
            attributeFilter: ['style', 'class', 'data-grid-span'],
            attributes: true,
          })
          initialize()
          return function () {
            resizeObserver_1.unobserve(_this.container)
            resizeObserver_1.disconnect()
            mutationObserver_1.disconnect()
            dispose_1()
            _this.children = []
          }
        }
        return function () {}
      }
      this.options = __assign(
        {
          breakpoints: [720, 1280, 1920],
          columnGap: 8,
          rowGap: 4,
          minWidth: 100,
          colWrap: true,
          strictAutoFit: false,
        },
        options
      )
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
    Object.defineProperty(Grid.prototype, 'breakpoints', {
      get: function () {
        return this.options.breakpoints
      },
      set: function (breakpoints) {
        this.options.breakpoints = breakpoints
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'breakpoint', {
      get: function () {
        return calcBreakpointIndex(this.options.breakpoints, this.width)
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'maxWidth', {
      get: function () {
        var _a
        return (_a = factor(this.options.maxWidth, this)) !== null &&
          _a !== void 0
          ? _a
          : Infinity
      },
      set: function (maxWidth) {
        this.options.maxWidth = maxWidth
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'minWidth', {
      get: function () {
        var _a
        return (_a = factor(this.options.minWidth, this)) !== null &&
          _a !== void 0
          ? _a
          : 100
      },
      set: function (minWidth) {
        this.options.minWidth = minWidth
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'maxColumns', {
      get: function () {
        var _a
        return (_a = factor(this.options.maxColumns, this)) !== null &&
          _a !== void 0
          ? _a
          : Infinity
      },
      set: function (maxColumns) {
        this.options.maxColumns = maxColumns
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'maxRows', {
      get: function () {
        var _a
        return (_a = this.options.maxRows) !== null && _a !== void 0
          ? _a
          : Infinity
      },
      set: function (maxRows) {
        this.options.maxRows = maxRows
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'minColumns', {
      get: function () {
        var _a
        return (_a = factor(this.options.minColumns, this)) !== null &&
          _a !== void 0
          ? _a
          : 1
      },
      set: function (minColumns) {
        this.options.minColumns = minColumns
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'rowGap', {
      get: function () {
        var _a
        return (_a = factor(this.options.rowGap, this)) !== null &&
          _a !== void 0
          ? _a
          : 5
      },
      set: function (rowGap) {
        this.options.rowGap = rowGap
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'columnGap', {
      get: function () {
        var _a
        return (_a = factor(this.options.columnGap, this)) !== null &&
          _a !== void 0
          ? _a
          : 10
      },
      set: function (columnGap) {
        this.options.columnGap = columnGap
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'colWrap', {
      get: function () {
        var _a
        return (_a = factor(this.options.colWrap, this)) !== null &&
          _a !== void 0
          ? _a
          : true
      },
      set: function (colWrap) {
        this.options.colWrap = colWrap
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'columns', {
      get: function () {
        if (!this.ready) return 0
        var originTotalColumns = this.childOriginTotalColumns
        if (this.colWrap === false) {
          return originTotalColumns
        }
        var baseColumns = this.childSize
        var maxWidthColumns = Math.min(
          originTotalColumns,
          Math.round(this.width / (this.maxWidth + this.columnGap))
        )
        var minWidthColumns = Math.min(
          originTotalColumns,
          Math.round(this.width / (this.minWidth + this.columnGap))
        )
        var minCalculatedColumns = Math.min(
          baseColumns,
          maxWidthColumns,
          minWidthColumns
        )
        var maxCalculatedColumns = Math.max(
          baseColumns,
          maxWidthColumns,
          minWidthColumns
        )
        var finalColumns = calcSatisfyColumns(
          this.width,
          maxCalculatedColumns,
          minCalculatedColumns,
          this.maxWidth,
          this.minWidth,
          this.columnGap
        )
        if (finalColumns >= this.maxColumns) {
          return this.maxColumns
        }
        if (finalColumns <= this.minColumns) {
          return this.minColumns
        }
        return finalColumns
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'rows', {
      get: function () {
        return Math.ceil(this.childTotalColumns / this.columns)
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'shadowRows', {
      get: function () {
        return Math.ceil(this.shadowChildTotalColumns / this.columns)
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'templateColumns', {
      get: function () {
        if (!this.width) return ''
        if (this.maxWidth === Infinity) {
          return 'repeat('.concat(this.columns, ',1fr)')
        }
        if (this.options.strictAutoFit !== true) {
          var columnWidth =
            (this.width - (this.columns - 1) * this.columnGap) / this.columns
          if (columnWidth < this.minWidth || columnWidth > this.maxWidth) {
            return 'repeat('.concat(this.columns, ',1fr)')
          }
        }
        return 'repeat('
          .concat(this.columns, ',minmax(')
          .concat(this.minWidth, 'px,')
          .concat(this.maxWidth, 'px))')
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'gap', {
      get: function () {
        return ''.concat(this.rowGap, 'px ').concat(this.columnGap, 'px')
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'childSize', {
      get: function () {
        return this.children.length
      },
      enumerable: false,
      configurable: true,
    })
    Object.defineProperty(Grid.prototype, 'fullnessLastColumn', {
      get: function () {
        var _a
        return (
          this.columns ===
          ((_a = this.children[this.childSize - 1]) === null || _a === void 0
            ? void 0
            : _a.span)
        )
      },
      enumerable: false,
      configurable: true,
    })
    Grid.id = function (options) {
      if (options === void 0) {
        options = {}
      }
      return JSON.stringify(
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
        ].map(function (key) {
          return options[key]
        })
      )
    }
    return Grid
  })()

  var FormGridSymbol = Symbol('FormGridContext')
  var createFormGrid = function (props) {
    return Formily.Reactive.markRaw(new Grid(props))
  }
  var useFormGrid = function () {
    return VueCompositionAPI.inject(FormGridSymbol)
  }
  /**
   * @deprecated
   */
  var useGridSpan = function (gridSpan) {
    return gridSpan
  }
  /**
   * @deprecated
   */
  var useGridColumn = function (gridSpan) {
    if (gridSpan === void 0) {
      gridSpan = 1
    }
    return gridSpan
  }
  var FormGridInner = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'FFormGrid',
      props: {
        columnGap: {
          type: Number,
        },
        rowGap: {
          type: Number,
        },
        minColumns: {
          type: [Number, Array],
        },
        minWidth: {
          type: [Number, Array],
        },
        maxColumns: {
          type: [Number, Array],
        },
        maxWidth: {
          type: [Number, Array],
        },
        breakpoints: {
          type: Array,
        },
        colWrap: {
          type: Boolean,
          default: true,
        },
        strictAutoFit: {
          type: Boolean,
          default: false,
        },
        shouldVisible: {
          type: Function,
          default: function () {
            return function () {
              return true
            }
          },
        },
        grid: {
          type: Object,
        },
      },
      setup: function (props) {
        var layout = useFormLayout()
        var gridInstance = VueCompositionAPI.computed(function () {
          var _a, _b, _c, _d
          var newProps = {}
          Object.keys(props).forEach(function (key) {
            if (typeof props[key] !== 'undefined') {
              newProps[key] = props[key]
            }
          })
          var options = __assign$2(
            {
              columnGap:
                (_b =
                  (_a = layout.value) === null || _a === void 0
                    ? void 0
                    : _a.gridColumnGap) !== null && _b !== void 0
                  ? _b
                  : 8,
              rowGap:
                (_d =
                  (_c = layout.value) === null || _c === void 0
                    ? void 0
                    : _c.gridRowGap) !== null && _d !== void 0
                  ? _d
                  : 4,
            },
            newProps
          )
          return Formily.Reactive.markRaw(
            (options === null || options === void 0 ? void 0 : options.grid)
              ? options.grid
              : new Grid(options)
          )
        })
        var prefixCls = ''.concat(stylePrefix, '-form-grid')
        var root = VueCompositionAPI.ref(null)
        VueCompositionAPI.provide(FormGridSymbol, gridInstance)
        VueCompositionAPI.onMounted(function () {
          VueCompositionAPI.watchEffect(function (onInvalidate) {
            var dispose = gridInstance.value.connect(root.value)
            onInvalidate(function () {
              dispose()
            })
          })
        })
        return {
          prefixCls: prefixCls,
          root: root,
          gridInstance: gridInstance,
        }
      },
      render: function () {
        var _this = this
        var _a = this,
          prefixCls = _a.prefixCls,
          gridInstance = _a.gridInstance
        return Formily.Vue.h(
          'div',
          {
            attrs: {
              class: ''.concat(prefixCls),
            },
            style: {
              gridTemplateColumns: gridInstance.templateColumns,
              gap: gridInstance.gap,
            },
            ref: 'root',
          },
          {
            default: function () {
              return _this.$slots.default
            },
          }
        )
      },
    })
  )
  var FormGridColumn = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'FFormGridColumn',
      props: {
        gridSpan: {
          type: Number,
          default: 1,
        },
      },
      setup: function (props, _a) {
        var slots = _a.slots
        return function () {
          return Formily.Vue.h(
            'div',
            {
              attrs: {
                'data-grid-span': props.gridSpan,
              },
            },
            slots
          )
        }
      },
    })
  )
  var FormGrid = composeExport(FormGridInner, {
    GridColumn: FormGridColumn,
    useGridSpan: useGridSpan,
    useFormGrid: useFormGrid,
    createFormGrid: createFormGrid,
  })

  var TransformElInput = transformComponent(Element.Input, {
    change: 'input',
  })
  var InnerInput = Formily.Vue.connect(
    TransformElInput,
    Formily.Vue.mapProps({ readOnly: 'readonly' }),
    Formily.Vue.mapReadPretty(PreviewText.Input)
  )
  var TextArea = Formily.Vue.connect(
    InnerInput,
    Formily.Vue.mapProps(function (props) {
      return __assign$2(__assign$2({}, props), { type: 'textarea' })
    }),
    Formily.Vue.mapReadPretty(PreviewText.Input)
  )
  var Input = composeExport(InnerInput, {
    TextArea: TextArea,
  })

  var TransformElInputNumber = transformComponent(Element.InputNumber, {
    change: 'input',
  })
  var InputNumber = Formily.Vue.connect(
    TransformElInputNumber,
    Formily.Vue.mapProps({ readOnly: 'readonly' }, function (props) {
      var controlsPosition = 'right'
      if (props.controlsPosition) {
        controlsPosition = props.controlsPosition
      }
      return {
        controlsPosition: controlsPosition,
      }
    }),
    Formily.Vue.mapReadPretty(PreviewText.Input)
  )

  var Password = Formily.Vue.connect(
    Input,
    Formily.Vue.mapProps(function (props) {
      return __assign$2(__assign$2({}, props), { showPassword: true })
    }),
    Formily.Vue.mapReadPretty(PreviewText.Input)
  )

  var TransformElRadioGroup = transformComponent(Element.RadioGroup, {
    change: 'input',
  })
  var RadioGroupOption = VueCompositionAPI.defineComponent({
    name: 'FRadioGroup',
    props: {
      options: {
        type: Array,
        default: function () {
          return []
        },
      },
      optionType: {
        type: String,
        default: 'default',
      },
    },
    setup: function (customProps, _a) {
      var attrs = _a.attrs,
        slots = _a.slots,
        listeners = _a.listeners
      return function () {
        var options = customProps.options || []
        var OptionType =
          customProps.optionType === 'button'
            ? Element.RadioButton
            : Element.Radio
        var children =
          options.length !== 0
            ? {
                default: function () {
                  return options.map(function (option) {
                    if (typeof option === 'string') {
                      return Formily.Vue.h(
                        OptionType,
                        { props: { label: option } },
                        {
                          default: function () {
                            var _a
                            return [
                              resolveComponent(
                                (_a =
                                  slots === null || slots === void 0
                                    ? void 0
                                    : slots.option) !== null && _a !== void 0
                                  ? _a
                                  : option,
                                { option: option }
                              ),
                            ]
                          },
                        }
                      )
                    } else {
                      return Formily.Vue.h(
                        OptionType,
                        {
                          props: __assign$2(__assign$2({}, option), {
                            value: undefined,
                            label: option.value,
                          }),
                        },
                        {
                          default: function () {
                            var _a
                            return [
                              resolveComponent(
                                (_a =
                                  slots === null || slots === void 0
                                    ? void 0
                                    : slots.option) !== null && _a !== void 0
                                  ? _a
                                  : option.label,
                                {
                                  option: option,
                                }
                              ),
                            ]
                          },
                        }
                      )
                    }
                  })
                },
              }
            : slots
        return Formily.Vue.h(
          TransformElRadioGroup,
          {
            attrs: __assign$2({}, attrs),
            on: listeners,
          },
          children
        )
      }
    },
  })
  var RadioGroup = Formily.Vue.connect(
    RadioGroupOption,
    Formily.Vue.mapProps({ dataSource: 'options' }),
    Formily.Vue.mapReadPretty(PreviewText.Select)
  )
  var Radio = composeExport(Element.Radio, {
    Group: RadioGroup,
  })

  var Reset = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'FReset',
      props: {
        forceClear: {
          type: Boolean,
          default: false,
        },
        validate: {
          type: Boolean,
          default: false,
        },
      },
      setup: function (props, context) {
        var formRef = Formily.Vue.useParentForm()
        var listeners = context.listeners,
          slots = context.slots
        return function () {
          var form =
            formRef === null || formRef === void 0 ? void 0 : formRef.value
          return Formily.Vue.h(
            Element.Button,
            {
              attrs: context.attrs,
              on: __assign$2(__assign$2({}, listeners), {
                click: function (e) {
                  if (
                    listeners === null || listeners === void 0
                      ? void 0
                      : listeners.click
                  ) {
                    if (listeners.click(e) === false) return
                  }
                  form === null || form === void 0
                    ? void 0
                    : form
                        .reset('*', {
                          forceClear: props.forceClear,
                          validate: props.validate,
                        })
                        .then(listeners.resetValidateSuccess)
                        .catch(listeners.resetValidateFailed)
                },
              }),
            },
            slots
          )
        }
      },
    })
  )

  var SelectOption = VueCompositionAPI.defineComponent({
    name: 'FSelect',
    props: ['options'],
    setup: function (customProps, _a) {
      var attrs = _a.attrs,
        slots = _a.slots,
        listeners = _a.listeners
      return function () {
        var options = customProps.options || []
        var children =
          options.length !== 0
            ? {
                default: function () {
                  return options.map(function (option) {
                    if (typeof option === 'string') {
                      return Formily.Vue.h(
                        Element.Option,
                        { props: { value: option, label: option } },
                        {
                          default: function () {
                            return [
                              resolveComponent(
                                slots === null || slots === void 0
                                  ? void 0
                                  : slots.option,
                                { option: option }
                              ),
                            ]
                          },
                        }
                      )
                    } else {
                      return Formily.Vue.h(
                        Element.Option,
                        {
                          props: __assign$2({}, option),
                        },
                        {
                          default: function () {
                            return [
                              resolveComponent(
                                slots === null || slots === void 0
                                  ? void 0
                                  : slots.option,
                                {
                                  option: option,
                                }
                              ),
                            ]
                          },
                        }
                      )
                    }
                  })
                },
              }
            : slots
        return Formily.Vue.h(
          Element.Select,
          {
            attrs: __assign$2({}, attrs),
            on: listeners,
          },
          children
        )
      }
    },
  })
  var Select = Formily.Vue.connect(
    SelectOption,
    Formily.Vue.mapProps({ dataSource: 'options', loading: true }),
    Formily.Vue.mapReadPretty(PreviewText.Select)
  )

  var Submit = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'FSubmit',
      props: ['onClick', 'onSubmit', 'onSubmitSuccess', 'onSubmitFailed'],
      setup: function (props, _a) {
        var attrs = _a.attrs,
          slots = _a.slots,
          listeners = _a.listeners
        var formRef = Formily.Vue.useParentForm()
        return function () {
          var _a = props.onClick,
            onClick =
              _a === void 0
                ? listeners === null || listeners === void 0
                  ? void 0
                  : listeners.click
                : _a,
            _b = props.onSubmit,
            onSubmit =
              _b === void 0
                ? listeners === null || listeners === void 0
                  ? void 0
                  : listeners.submit
                : _b,
            _c = props.onSubmitSuccess,
            onSubmitSuccess =
              _c === void 0
                ? listeners === null || listeners === void 0
                  ? void 0
                  : listeners.submitSuccess
                : _c,
            _d = props.onSubmitFailed,
            onSubmitFailed =
              _d === void 0
                ? listeners === null || listeners === void 0
                  ? void 0
                  : listeners.submitFailed
                : _d
          var form =
            formRef === null || formRef === void 0 ? void 0 : formRef.value
          return Formily.Vue.h(
            Element.Button,
            {
              attrs: __assign$2(
                __assign$2(
                  {
                    nativeType: (
                      listeners === null || listeners === void 0
                        ? void 0
                        : listeners.submit
                    )
                      ? 'button'
                      : 'submit',
                    type: 'primary',
                  },
                  attrs
                ),
                {
                  loading:
                    attrs.loading !== undefined
                      ? attrs.loading
                      : form === null || form === void 0
                      ? void 0
                      : form.submitting,
                }
              ),
              on: __assign$2(__assign$2({}, listeners), {
                click: function (e) {
                  if (onClick) {
                    if (onClick(e) === false) return
                  }
                  if (onSubmit) {
                    form === null || form === void 0
                      ? void 0
                      : form
                          .submit(onSubmit)
                          .then(onSubmitSuccess)
                          .catch(onSubmitFailed)
                  }
                },
              }),
            },
            slots
          )
        }
      },
    })
  )

  var Switch = Formily.Vue.connect(
    Element.Switch,
    Formily.Vue.mapProps({ readOnly: 'readonly' })
  )

  var TransformElTimePicker = transformComponent(Element.TimePicker, {
    change: 'input',
  })
  var TimePicker = Formily.Vue.connect(
    TransformElTimePicker,
    Formily.Vue.mapProps({ readOnly: 'readonly' }),
    Formily.Vue.mapReadPretty(PreviewText.TimePicker)
  )

  var Transfer = Formily.Vue.connect(
    Element.Transfer,
    Formily.Vue.mapProps({ dataSource: 'data' })
  )

  var UploadWrapper = VueCompositionAPI.defineComponent({
    name: 'FUpload',
    props: {
      textContent: {
        type: String,
        default: '',
      },
      errorAdaptor: {
        type: Function,
        default: function (error) {
          return (
            (error === null || error === void 0 ? void 0 : error.message) || ''
          )
        },
      },
    },
    setup: function (curProps, _a) {
      var slots = _a.slots,
        attrs = _a.attrs,
        listeners = _a.listeners,
        emit = _a.emit
      return function () {
        var fieldRef = Formily.Vue.useField()
        var setFeedBack = function (error) {
          var message = curProps.errorAdaptor(error)
          fieldRef.value.setFeedback({
            type: 'error',
            code: 'UploadError',
            messages: message ? [message] : [],
          })
        }
        var props = __assign$2(__assign$2({}, attrs), {
          onChange: function (file, fileList) {
            var _a
            ;(_a = attrs.onChange) === null || _a === void 0
              ? void 0
              : _a(file, fileList)
            setFeedBack()
            emit('change', fileList)
          },
          onRemove: function (file, fileList) {
            var _a
            ;(_a = attrs.onRemove) === null || _a === void 0
              ? void 0
              : _a(file, fileList)
            setFeedBack()
            emit('change', fileList)
          },
          onError: function (error, file, fileList) {
            var _a
            ;(_a = attrs.onError) === null || _a === void 0
              ? void 0
              : _a(error, file, fileList)
            setTimeout(function () {
              setFeedBack(error)
            }, 0)
          },
        })
        var children = __assign$2({}, slots)
        if (!slots.default) {
          children.default = function () {
            var listType = attrs.listType
            var drag = attrs.drag
            if (drag) {
              return Formily.Vue.h(
                Formily.Vue.Fragment,
                {},
                {
                  default: function () {
                    return [
                      Formily.Vue.h('i', { staticClass: 'el-icon-upload' }, {}),
                      Formily.Vue.h(
                        'div',
                        { staticClass: 'el-upload__text' },
                        {
                          default: function () {
                            return [curProps.textContent]
                          },
                        }
                      ),
                    ]
                  },
                }
              )
            }
            if (listType === 'picture-card') {
              return Formily.Vue.h(
                'i',
                {
                  staticClass: 'el-icon-plus',
                },
                {}
              )
            }
            return Formily.Vue.h(
              Element.Button,
              { props: { icon: 'el-icon-upload2' } },
              {
                default: function () {
                  return [curProps.textContent]
                },
              }
            )
          }
        }
        return Formily.Vue.h(
          Element.Upload,
          { attrs: props, on: listeners },
          children
        )
      }
    },
  })
  var Upload = Formily.Vue.connect(
    UploadWrapper,
    Formily.Vue.mapProps({ readOnly: 'readonly', value: 'fileList' })
  )

  var usePanels = function (collapseField, schema) {
    var panels = []
    schema.mapProperties(function (schema, name) {
      var _a, _b
      var field = collapseField.query(collapseField.address.concat(name)).take()
      if (
        (field === null || field === void 0 ? void 0 : field.display) ===
          'none' ||
        (field === null || field === void 0 ? void 0 : field.display) ===
          'hidden'
      )
        return
      if (
        ((_a = schema['x-component']) === null || _a === void 0
          ? void 0
          : _a.indexOf('FormCollapse.Item')) > -1
      ) {
        panels.push({
          name: name,
          props: __assign$2(
            __assign$2(
              {},
              schema === null || schema === void 0
                ? void 0
                : schema['x-component-props']
            ),
            {
              key:
                ((_b =
                  schema === null || schema === void 0
                    ? void 0
                    : schema['x-component-props']) === null || _b === void 0
                  ? void 0
                  : _b.key) || name,
            }
          ),
          schema: schema,
        })
      }
    })
    return panels
  }
  var createFormCollapse = function (defaultActiveKeys) {
    var formCollapse = Formily.Reactive.model({
      activeKeys: defaultActiveKeys,
      setActiveKeys: function (keys) {
        formCollapse.activeKeys = keys
      },
      hasActiveKey: function (key) {
        if (Array.isArray(formCollapse.activeKeys)) {
          if (formCollapse.activeKeys.includes(key)) {
            return true
          }
        } else if (formCollapse.activeKeys == key) {
          return true
        }
        return false
      },
      addActiveKey: function (key) {
        if (formCollapse.hasActiveKey(key)) return
        formCollapse.activeKeys = Formily.Shared.toArr(
          formCollapse.activeKeys
        ).concat(key)
      },
      removeActiveKey: function (key) {
        if (Array.isArray(formCollapse.activeKeys)) {
          formCollapse.activeKeys = formCollapse.activeKeys.filter(function (
            item
          ) {
            return item != key
          })
        } else {
          formCollapse.activeKeys = ''
        }
      },
      toggleActiveKey: function (key) {
        if (formCollapse.hasActiveKey(key)) {
          formCollapse.removeActiveKey(key)
        } else {
          formCollapse.addActiveKey(key)
        }
      },
    })
    return formCollapse
  }
  var FormCollapse = Formily.ReactiveVue.observer(
    _global_VueCompositionAPI_defineComponent({
      inheritAttrs: false,
      props: {
        formCollapse: { type: Object },
        activeKey: {
          type: [String, Number],
        },
      },
      setup: function (props, _a) {
        var attrs = _a.attrs,
          emit = _a.emit
        var field = Formily.Vue.useField()
        var schema = Formily.Vue.useFieldSchema()
        var prefixCls = ''.concat(stylePrefix, '-form-collapse')
        var _formCollapse = _global_VueCompositionAPI_computed(function () {
          var _a
          return (_a = props.formCollapse) !== null && _a !== void 0
            ? _a
            : createFormCollapse()
        })
        var takeActiveKeys = function (panels) {
          var _a, _b, _c
          if (props.activeKey) return props.activeKey
          if (
            (_a = _formCollapse.value) === null || _a === void 0
              ? void 0
              : _a.activeKeys
          )
            return (_b = _formCollapse.value) === null || _b === void 0
              ? void 0
              : _b.activeKeys
          if (attrs.accordion)
            return (_c = panels[0]) === null || _c === void 0 ? void 0 : _c.name
          return panels.map(function (item) {
            return item.name
          })
        }
        var badgedHeader = function (key, props) {
          var errors = field.value.form.queryFeedbacks({
            type: 'error',
            address: ''.concat(field.value.address.concat(key), '.*'),
          })
          if (errors.length) {
            return Formily.Vue.h(
              Element.Badge,
              {
                class: [''.concat(prefixCls, '-errors-badge')],
                props: {
                  value: errors.length,
                },
              },
              {
                default: function () {
                  return props.title
                },
              }
            )
          }
          return props.title
        }
        return function () {
          var panels = usePanels(field.value, schema.value)
          var activeKey = takeActiveKeys(panels)
          return Formily.Vue.h(
            Element.Collapse,
            {
              class: prefixCls,
              props: {
                value: activeKey,
              },
              on: {
                change: function (key) {
                  emit('input', key)
                  _formCollapse.value.setActiveKeys(key)
                },
              },
            },
            {
              default: function () {
                return panels.map(function (_a, index) {
                  var props = _a.props,
                    schema = _a.schema,
                    name = _a.name
                  return Formily.Vue.h(
                    Element.CollapseItem,
                    {
                      key: index,
                      props: __assign$2(__assign$2({}, props), { name: name }),
                    },
                    {
                      default: function () {
                        return [
                          Formily.Vue.h(
                            Formily.Vue.RecursionField,
                            { props: { schema: schema, name: name } },
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
                              return badgedHeader(name, props)
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
  )
  var FormCollapseItem = _global_VueCompositionAPI_defineComponent({
    name: 'FFormCollapseItem',
    setup: function (_props, _a) {
      var slots = _a.slots
      return function () {
        return Formily.Vue.h(Formily.Vue.Fragment, {}, slots)
      }
    },
  })
  var composeFormCollapse = composeExport(FormCollapse, {
    Item: FormCollapseItem,
    createFormCollapse: createFormCollapse,
  })

  var useTabs = function () {
    var tabsField = Formily.Vue.useField().value
    var schema = Formily.Vue.useFieldSchema().value
    var tabs = VueCompositionAPI.reactive([])
    schema.mapProperties(function (schema, name) {
      var _a, _b
      var field = tabsField.query(tabsField.address.concat(name)).take()
      if (
        (field === null || field === void 0 ? void 0 : field.display) ===
          'none' ||
        (field === null || field === void 0 ? void 0 : field.display) ===
          'hidden'
      )
        return
      if (
        ((_a = schema['x-component']) === null || _a === void 0
          ? void 0
          : _a.indexOf('TabPane')) > -1
      ) {
        tabs.push({
          name: name,
          props: __assign$2(
            {
              name:
                ((_b =
                  schema === null || schema === void 0
                    ? void 0
                    : schema['x-component-props']) === null || _b === void 0
                  ? void 0
                  : _b.name) || name,
            },
            schema === null || schema === void 0
              ? void 0
              : schema['x-component-props']
          ),
          schema: schema,
        })
      }
    })
    return tabs
  }
  var createFormTab = function (defaultActiveKey) {
    var formTab = Formily.Reactive.model({
      activeKey: defaultActiveKey,
      setActiveKey: function (key) {
        formTab.activeKey = key
      },
    })
    return formTab
  }
  var FormTabInner = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'FFormTab',
      props: ['formTab'],
      setup: function (props, _a) {
        var attrs = _a.attrs,
          listeners = _a.listeners
        var field = Formily.Vue.useField().value
        var formTabRef = VueCompositionAPI.computed(function () {
          var _a
          return (_a = props.formTab) !== null && _a !== void 0
            ? _a
            : createFormTab()
        })
        var prefixCls = ''.concat(stylePrefix, '-form-tab')
        return function () {
          var _a
          var formTab = formTabRef.value
          var tabs = useTabs()
          var activeKey =
            props.value ||
            (formTab === null || formTab === void 0
              ? void 0
              : formTab.activeKey) ||
            ((_a = tabs === null || tabs === void 0 ? void 0 : tabs[0]) ===
              null || _a === void 0
              ? void 0
              : _a.name)
          var badgedTab = function (key, props) {
            var errors = field.form.queryFeedbacks({
              type: 'error',
              address: ''.concat(field.address.concat(key), '.*'),
            })
            if (errors.length) {
              return function () {
                return Formily.Vue.h(
                  Element.Badge,
                  {
                    class: [''.concat(prefixCls, '-errors-badge')],
                    props: {
                      value: errors.length,
                    },
                  },
                  {
                    default: function () {
                      return props.label
                    },
                  }
                )
              }
            }
            return function () {
              return props.label
            }
          }
          var getTabs = function (tabs) {
            return tabs.map(function (_a, key) {
              var props = _a.props,
                schema = _a.schema,
                name = _a.name
              return Formily.Vue.h(
                Element.TabPane,
                {
                  key: key,
                  props: props,
                },
                {
                  default: function () {
                    return [
                      Formily.Vue.h(
                        Formily.Vue.RecursionField,
                        {
                          props: {
                            schema: schema,
                            name: name,
                          },
                        },
                        {}
                      ),
                    ]
                  },
                  label: function () {
                    return [
                      Formily.Vue.h(
                        'div',
                        {},
                        { default: badgedTab(name, props) }
                      ),
                    ]
                  },
                }
              )
            })
          }
          return Formily.Vue.h(
            Element.Tabs,
            {
              class: [prefixCls],
              style: attrs.style,
              props: __assign$2(__assign$2({}, attrs), { value: activeKey }),
              on: __assign$2(__assign$2({}, listeners), {
                input: function (key) {
                  var _a, _b
                  ;(_a = listeners.input) === null || _a === void 0
                    ? void 0
                    : _a.call(listeners, key)
                  ;(_b = formTab.setActiveKey) === null || _b === void 0
                    ? void 0
                    : _b.call(formTab, key)
                },
              }),
            },
            {
              default: function () {
                return getTabs(tabs)
              },
            }
          )
        }
      },
    })
  )
  var FormTabPane = VueCompositionAPI.defineComponent({
    name: 'FFormTabPane',
    setup: function (_props, _a) {
      var slots = _a.slots
      return function () {
        return Formily.Vue.h(Formily.Vue.Fragment, {}, slots)
      }
    },
  })
  var FormTab = composeExport(FormTabInner, {
    TabPane: FormTabPane,
    createFormTab: createFormTab,
  })

  var parseSteps = function (schema) {
    var steps = []
    schema.mapProperties(function (schema, name) {
      var _a
      if (
        ((_a = schema['x-component']) === null || _a === void 0
          ? void 0
          : _a.indexOf('StepPane')) > -1
      ) {
        steps.push({
          name: name,
          props: schema['x-component-props'],
          schema: schema,
        })
      }
    })
    return steps
  }
  var createFormStep = function (defaultCurrent) {
    if (defaultCurrent === void 0) {
      defaultCurrent = 0
    }
    var env = Formily.Reactive.observable({
      form: null,
      field: null,
      steps: [],
    })
    var setDisplay = Formily.Reactive.action.bound(function (target) {
      var currentStep = env.steps[target]
      env.steps.forEach(function (_a) {
        var name = _a.name
        env.form
          .query(''.concat(env.field.address, '.').concat(name))
          .take(function (field) {
            if (name === currentStep.name) {
              field.setDisplay('visible')
            } else {
              field.setDisplay('hidden')
            }
          })
      })
    })
    var next = Formily.Reactive.action.bound(function () {
      if (formStep.allowNext) {
        setDisplay(formStep.current + 1)
        formStep.setCurrent(formStep.current + 1)
      }
    })
    var back = Formily.Reactive.action.bound(function () {
      if (formStep.allowBack) {
        setDisplay(formStep.current - 1)
        formStep.setCurrent(formStep.current - 1)
      }
    })
    var formStep = Formily.Reactive.model({
      connect: function (steps, field) {
        env.steps = steps
        env.form = field === null || field === void 0 ? void 0 : field.form
        env.field = field
      },
      current: defaultCurrent,
      setCurrent: function (key) {
        formStep.current = key
      },
      get allowNext() {
        return formStep.current < env.steps.length - 1
      },
      get allowBack() {
        return formStep.current > 0
      },
      next: function () {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_b) {
            switch (_b.label) {
              case 0:
                _b.trys.push([0, 2, , 3])
                return [4 /*yield*/, env.form.validate()]
              case 1:
                _b.sent()
                next()
                return [3 /*break*/, 3]
              case 2:
                _b.sent()
                return [3 /*break*/, 3]
              case 3:
                return [2 /*return*/]
            }
          })
        })
      },
      back: function () {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            back()
            return [2 /*return*/]
          })
        })
      },
      submit: function (onSubmit) {
        var _a, _b
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_c) {
            return [
              2 /*return*/,
              (_b =
                (_a = env.form) === null || _a === void 0
                  ? void 0
                  : _a.submit) === null || _b === void 0
                ? void 0
                : _b.call(_a, onSubmit),
            ]
          })
        })
      },
    })
    return formStep
  }
  var FormStepInner = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'FFormStep',
      props: {
        formStep: {
          type: Object,
          default: function () {
            return {
              current: 0,
            }
          },
        },
      },
      setup: function (props, _a) {
        var _b, _c
        var attrs = _a.attrs
        var field = Formily.Vue.useField().value
        var prefixCls = ''.concat(stylePrefix, '-form-step')
        var fieldSchemaRef = Formily.Vue.useFieldSchema()
        var steps = parseSteps(fieldSchemaRef.value)
        ;(_c = (_b = props.formStep).connect) === null || _c === void 0
          ? void 0
          : _c.call(_b, steps, field)
        return function () {
          var _a
          var current =
            props.active ||
            ((_a = props.formStep) === null || _a === void 0
              ? void 0
              : _a.current) ||
            0
          var renderSteps = function (steps, callback) {
            return steps.map(callback)
          }
          return Formily.Vue.h(
            'div',
            {
              class: [prefixCls],
            },
            {
              default: function () {
                return [
                  Formily.Vue.h(
                    Element.Steps,
                    {
                      props: {
                        active: current,
                      },
                      style: [{ marginBottom: '10px' }, attrs.style],
                      attrs: attrs,
                    },
                    {
                      default: function () {
                        return renderSteps(steps, function (_a, key) {
                          var props = _a.props
                          return Formily.Vue.h(
                            Element.Step,
                            { props: props, key: key },
                            {}
                          )
                        })
                      },
                    }
                  ),
                  renderSteps(steps, function (_a, key) {
                    var name = _a.name,
                      schema = _a.schema
                    if (key !== current) return
                    return Formily.Vue.h(
                      Formily.Vue.RecursionField,
                      { props: { name: name, schema: schema }, key: key },
                      {}
                    )
                  }),
                ]
              },
            }
          )
        }
      },
    })
  )
  var StepPane = VueCompositionAPI.defineComponent({
    name: 'FFormStepPane',
    setup: function (_props, _a) {
      var slots = _a.slots
      return function () {
        return Formily.Vue.h(Formily.Vue.Fragment, {}, slots)
      }
    },
  })
  var FormStep = composeExport(FormStepInner, {
    StepPane: StepPane,
    createFormStep: createFormStep,
  })

  var isAdditionComponent$2 = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Addition')) > -1
    )
  }
  var isIndexComponent$1 = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Index')) > -1
    )
  }
  var isRemoveComponent$1 = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Remove')) > -1
    )
  }
  var isMoveUpComponent$1 = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('MoveUp')) > -1
    )
  }
  var isMoveDownComponent$1 = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('MoveDown')) > -1
    )
  }
  var isOperationComponent$1 = function (schema) {
    return (
      isAdditionComponent$2(schema) ||
      isRemoveComponent$1(schema) ||
      isMoveDownComponent$1(schema) ||
      isMoveUpComponent$1(schema)
    )
  }
  var ArrayCardsInner = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'FArrayCards',
      props: [],
      setup: function (props, _a) {
        var attrs = _a.attrs
        var fieldRef = Formily.Vue.useField()
        var schemaRef = Formily.Vue.useFieldSchema()
        var prefixCls = ''.concat(stylePrefix, '-array-cards')
        var _b = ArrayBase.useKey(schemaRef.value),
          getKey = _b.getKey,
          keyMap = _b.keyMap
        return function () {
          var field = fieldRef.value
          var schema = schemaRef.value
          var dataSource = Array.isArray(field.value) ? field.value : []
          if (!schema) throw new Error('can not found schema object')
          var renderItems = function () {
            return dataSource === null || dataSource === void 0
              ? void 0
              : dataSource.map(function (item, index) {
                  var items = Array.isArray(schema.items)
                    ? schema.items[index] || schema.items[0]
                    : schema.items
                  var title = Formily.Vue.h(
                    'span',
                    {},
                    {
                      default: function () {
                        return [
                          Formily.Vue.h(
                            Formily.Vue.RecursionField,
                            {
                              props: {
                                schema: items,
                                name: index,
                                filterProperties: function (schema) {
                                  if (!isIndexComponent$1(schema)) return false
                                  return true
                                },
                                onlyRenderProperties: true,
                              },
                            },
                            {}
                          ),
                          attrs.title || field.title,
                        ]
                      },
                    }
                  )
                  var extra = Formily.Vue.h(
                    'span',
                    {},
                    {
                      default: function () {
                        return [
                          Formily.Vue.h(
                            Formily.Vue.RecursionField,
                            {
                              props: {
                                schema: items,
                                name: index,
                                filterProperties: function (schema) {
                                  if (!isOperationComponent$1(schema))
                                    return false
                                  return true
                                },
                                onlyRenderProperties: true,
                              },
                            },
                            {}
                          ),
                          attrs.extra,
                        ]
                      },
                    }
                  )
                  var content = Formily.Vue.h(
                    Formily.Vue.RecursionField,
                    {
                      props: {
                        schema: items,
                        name: index,
                        filterProperties: function (schema) {
                          if (isIndexComponent$1(schema)) return false
                          if (isOperationComponent$1(schema)) return false
                          return true
                        },
                      },
                    },
                    {}
                  )
                  return Formily.Vue.h(
                    ArrayBase.Item,
                    {
                      key: getKey(item, index),
                      props: {
                        index: index,
                        record: item,
                      },
                    },
                    {
                      default: function () {
                        return Formily.Vue.h(
                          Element.Card,
                          {
                            class: [''.concat(prefixCls, '-item')],
                            attrs: __assign$2({ shadow: 'never' }, attrs),
                          },
                          {
                            default: function () {
                              return [content]
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
                                    return [title, extra]
                                  },
                                }
                              )
                            },
                          }
                        )
                      },
                    }
                  )
                })
          }
          var renderAddition = function () {
            return schema.reduceProperties(function (addition, schema) {
              if (isAdditionComponent$2(schema)) {
                return Formily.Vue.h(
                  Formily.Vue.RecursionField,
                  {
                    props: {
                      schema: schema,
                      name: 'addition',
                    },
                  },
                  {}
                )
              }
              return addition
            }, null)
          }
          var renderEmpty = function () {
            if (
              dataSource === null || dataSource === void 0
                ? void 0
                : dataSource.length
            )
              return
            return Formily.Vue.h(
              Element.Card,
              {
                class: [''.concat(prefixCls, '-item')],
                attrs: __assign$2(__assign$2({ shadow: 'never' }, attrs), {
                  header: attrs.title || field.title,
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
            {
              class: [prefixCls],
            },
            {
              default: function () {
                return Formily.Vue.h(
                  ArrayBase,
                  {
                    props: {
                      keyMap: keyMap,
                    },
                  },
                  {
                    default: function () {
                      return [renderEmpty(), renderItems(), renderAddition()]
                    },
                  }
                )
              },
            }
          )
        }
      },
    })
  )
  var ArrayCards = composeExport(ArrayCardsInner, {
    Index: ArrayBase.Index,
    SortHandle: ArrayBase.SortHandle,
    Addition: ArrayBase.Addition,
    Remove: ArrayBase.Remove,
    MoveDown: ArrayBase.MoveDown,
    MoveUp: ArrayBase.MoveUp,
    useArray: ArrayBase.useArray,
    useIndex: ArrayBase.useIndex,
    useRecord: ArrayBase.useRecord,
  })

  var isAdditionComponent$1 = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Addition')) > -1
    )
  }
  var isIndexComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Index')) > -1
    )
  }
  var isRemoveComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Remove')) > -1
    )
  }
  var isMoveUpComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('MoveUp')) > -1
    )
  }
  var isMoveDownComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('MoveDown')) > -1
    )
  }
  var isOperationComponent = function (schema) {
    return (
      isAdditionComponent$1(schema) ||
      isRemoveComponent(schema) ||
      isMoveDownComponent(schema) ||
      isMoveUpComponent(schema)
    )
  }
  var range = function (count) {
    return Array.from({ length: count }).map(function (_, i) {
      return i
    })
  }
  var takeDefaultActiveKeys = function (
    dataSourceLength,
    defaultOpenPanelCount,
    accordion
  ) {
    if (accordion === void 0) {
      accordion = false
    }
    if (accordion) {
      return 0
    }
    if (dataSourceLength < defaultOpenPanelCount) return range(dataSourceLength)
    return range(defaultOpenPanelCount)
  }
  var insertActiveKeys = function (activeKeys, index, accordion) {
    if (accordion === void 0) {
      accordion = false
    }
    if (accordion) return index
    if (activeKeys.length <= index) return activeKeys.concat(index)
    return activeKeys.reduce(function (buf, key) {
      if (key < index) return buf.concat(key)
      if (key === index) return buf.concat([key, key + 1])
      return buf.concat(key + 1)
    }, [])
  }
  var ArrayCollapseInner = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'FArrayCollapse',
      props: {
        defaultOpenPanelCount: {
          type: Number,
          default: 5,
        },
      },
      setup: function (props, _a) {
        var attrs = _a.attrs
        var fieldRef = Formily.Vue.useField()
        var schemaRef = Formily.Vue.useFieldSchema()
        var prefixCls = ''.concat(stylePrefix, '-array-collapse')
        var activeKeys = VueCompositionAPI.ref([])
        VueCompositionAPI.watchEffect(function () {
          var field = fieldRef.value
          var dataSource = Array.isArray(field.value) ? field.value.slice() : []
          if (!field.modified && dataSource.length) {
            activeKeys.value = takeDefaultActiveKeys(
              dataSource.length,
              props.defaultOpenPanelCount,
              attrs.accordion
            )
          }
        })
        var _b = ArrayBase.useKey(schemaRef.value),
          getKey = _b.getKey,
          keyMap = _b.keyMap
        return function () {
          var field = fieldRef.value
          var schema = schemaRef.value
          var dataSource = Array.isArray(field.value) ? field.value.slice() : []
          if (!schema) throw new Error('can not found schema object')
          var renderItems = function () {
            if (!dataSource.length) {
              return null
            }
            var items =
              dataSource === null || dataSource === void 0
                ? void 0
                : dataSource.map(function (item, index) {
                    var items = Array.isArray(schema.items)
                      ? schema.items[index] || schema.items[0]
                      : schema.items
                    var key = getKey(item, index)
                    var panelProps = field
                      .query(''.concat(field.address, '.').concat(index))
                      .get('componentProps')
                    var props = items['x-component-props']
                    var headerTitle =
                      (panelProps === null || panelProps === void 0
                        ? void 0
                        : panelProps.title) ||
                      props.title ||
                      field.title
                    var path = field.address.concat(index)
                    var errors = field.form.queryFeedbacks({
                      type: 'error',
                      address: ''.concat(path, '.**'),
                    })
                    var title = Formily.Vue.h(
                      ArrayBase.Item,
                      {
                        props: {
                          index: index,
                          record: item,
                        },
                      },
                      {
                        default: function () {
                          return [
                            Formily.Vue.h(
                              Formily.Vue.RecursionField,
                              {
                                props: {
                                  schema: items,
                                  name: index,
                                  filterProperties: function (schema) {
                                    if (!isIndexComponent(schema)) return false
                                    return true
                                  },
                                  onlyRenderProperties: true,
                                },
                              },
                              {}
                            ),
                            errors.length
                              ? Formily.Vue.h(
                                  Element.Badge,
                                  {
                                    class: [
                                      ''.concat(prefixCls, '-errors-badge'),
                                    ],
                                    props: {
                                      value: errors.length,
                                    },
                                  },
                                  {
                                    default: function () {
                                      return headerTitle
                                    },
                                  }
                                )
                              : headerTitle,
                          ]
                        },
                      }
                    )
                    var extra = Formily.Vue.h(
                      ArrayBase.Item,
                      {
                        props: {
                          index: index,
                          record: item,
                        },
                      },
                      {
                        default: function () {
                          return [
                            Formily.Vue.h(
                              Formily.Vue.RecursionField,
                              {
                                props: {
                                  schema: items,
                                  name: index,
                                  filterProperties: function (schema) {
                                    if (!isOperationComponent(schema))
                                      return false
                                    return true
                                  },
                                  onlyRenderProperties: true,
                                },
                              },
                              {}
                            ),
                          ]
                        },
                      }
                    )
                    var content = Formily.Vue.h(
                      Formily.Vue.RecursionField,
                      {
                        props: {
                          schema: items,
                          name: index,
                          filterProperties: function (schema) {
                            if (isIndexComponent(schema)) return false
                            if (isOperationComponent(schema)) return false
                            return true
                          },
                        },
                      },
                      {}
                    )
                    return Formily.Vue.h(
                      Element.CollapseItem,
                      {
                        attrs: __assign$2(
                          __assign$2(__assign$2({}, props), panelProps),
                          { name: index }
                        ),
                        key: key,
                      },
                      {
                        default: function () {
                          return [
                            Formily.Vue.h(
                              ArrayBase.Item,
                              {
                                props: {
                                  index: index,
                                  record: item,
                                },
                              },
                              {
                                default: function () {
                                  return [content]
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
                                        return title
                                      },
                                    }
                                  ),
                                  Formily.Vue.h(
                                    'span',
                                    {},
                                    {
                                      default: function () {
                                        return extra
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
                class: [''.concat(prefixCls, '-item')],
                attrs: __assign$2(__assign$2({}, attrs), {
                  value: activeKeys.value,
                }),
                on: {
                  change: function (keys) {
                    activeKeys.value = keys
                  },
                },
              },
              {
                default: function () {
                  return [items]
                },
              }
            )
          }
          var renderAddition = function () {
            return schema.reduceProperties(function (addition, schema) {
              if (isAdditionComponent$1(schema)) {
                return Formily.Vue.h(
                  Formily.Vue.RecursionField,
                  {
                    props: {
                      schema: schema,
                      name: 'addition',
                    },
                  },
                  {}
                )
              }
              return addition
            }, null)
          }
          var renderEmpty = function () {
            if (
              dataSource === null || dataSource === void 0
                ? void 0
                : dataSource.length
            )
              return
            return Formily.Vue.h(
              Element.Card,
              {
                class: [''.concat(prefixCls, '-item')],
                attrs: __assign$2(__assign$2({ shadow: 'never' }, attrs), {
                  header: attrs.title || field.title,
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
            {
              class: [prefixCls],
            },
            {
              default: function () {
                return Formily.Vue.h(
                  ArrayBase,
                  {
                    props: {
                      keyMap: keyMap,
                    },
                    on: {
                      add: function (index) {
                        activeKeys.value = insertActiveKeys(
                          activeKeys.value,
                          index,
                          attrs.accordion
                        )
                      },
                    },
                  },
                  {
                    default: function () {
                      return [renderEmpty(), renderItems(), renderAddition()]
                    },
                  }
                )
              },
            }
          )
        }
      },
    })
  )
  var ArrayCollapseItem = VueCompositionAPI.defineComponent({
    name: 'FArrayCollapseItem',
    setup: function (_props, _a) {
      var slots = _a.slots
      return function () {
        return Formily.Vue.h(Formily.Vue.Fragment, {}, slots)
      }
    },
  })
  var ArrayCollapse = composeExport(ArrayCollapseInner, {
    Item: ArrayCollapseItem,
    Index: ArrayBase.Index,
    SortHandle: ArrayBase.SortHandle,
    Addition: ArrayBase.Addition,
    Remove: ArrayBase.Remove,
    MoveDown: ArrayBase.MoveDown,
    MoveUp: ArrayBase.MoveUp,
    useArray: ArrayBase.useArray,
    useIndex: ArrayBase.useIndex,
    useRecord: ArrayBase.useRecord,
  })

  var isAdditionComponent = function (schema) {
    var _a
    return (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('Addition')) > -1
    )
  }
  var ArrayItemsInner = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'FArrayItems',
      setup: function (props, _a) {
        _a.attrs
        var fieldRef = Formily.Vue.useField()
        var schemaRef = Formily.Vue.useFieldSchema()
        var prefixCls = ''.concat(stylePrefix, '-array-items')
        var _b = ArrayBase.useKey(schemaRef.value),
          getKey = _b.getKey,
          keyMap = _b.keyMap
        return function () {
          var field = fieldRef.value
          var schema = schemaRef.value
          var dataSource = Array.isArray(field.value) ? field.value.slice() : []
          var renderItems = function () {
            var items =
              dataSource === null || dataSource === void 0
                ? void 0
                : dataSource.map(function (item, index) {
                    var items = Array.isArray(schema.items)
                      ? schema.items[index] || schema.items[0]
                      : schema.items
                    var key = getKey(item, index)
                    return Formily.Vue.h(
                      ArrayBase.Item,
                      {
                        key: key,
                        props: {
                          index: index,
                          record: item,
                        },
                      },
                      {
                        default: function () {
                          return Formily.Vue.h(
                            SlickItem,
                            {
                              class: [''.concat(prefixCls, '-item-inner')],
                              props: {
                                index: index,
                              },
                              key: key,
                            },
                            {
                              default: function () {
                                return Formily.Vue.h(
                                  Formily.Vue.RecursionField,
                                  {
                                    props: {
                                      schema: items,
                                      name: index,
                                    },
                                  },
                                  {}
                                )
                              },
                            }
                          )
                        },
                      }
                    )
                  })
            return Formily.Vue.h(
              SlickList,
              {
                class: [''.concat(prefixCls, '-list')],
                props: {
                  useDragHandle: true,
                  lockAxis: 'y',
                  helperClass: ''.concat(prefixCls, '-sort-helper'),
                  value: [],
                },
                on: {
                  'sort-end': function (_a) {
                    var oldIndex = _a.oldIndex,
                      newIndex = _a.newIndex
                    if (Array.isArray(keyMap)) {
                      keyMap.splice(newIndex, 0, keyMap.splice(oldIndex, 1)[0])
                    }
                    field.move(oldIndex, newIndex)
                  },
                },
              },
              {
                default: function () {
                  return items
                },
              }
            )
          }
          var renderAddition = function () {
            return schema.reduceProperties(function (addition, schema) {
              if (isAdditionComponent(schema)) {
                return Formily.Vue.h(
                  Formily.Vue.RecursionField,
                  {
                    props: {
                      schema: schema,
                      name: 'addition',
                    },
                  },
                  {}
                )
              }
              return addition
            }, null)
          }
          return Formily.Vue.h(
            ArrayBase,
            {
              props: {
                keyMap: keyMap,
              },
            },
            {
              default: function () {
                return Formily.Vue.h(
                  'div',
                  {
                    class: [prefixCls],
                    on: {
                      change: function () {},
                    },
                  },
                  {
                    default: function () {
                      return [renderItems(), renderAddition()]
                    },
                  }
                )
              },
            }
          )
        }
      },
    })
  )
  var ArrayItemsItem = VueCompositionAPI.defineComponent({
    name: 'FArrayItemsItem',
    props: ['type'],
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots
      var prefixCls = ''.concat(stylePrefix, '-array-items')
      return function () {
        return Formily.Vue.h(
          'div',
          {
            class: [''.concat(prefixCls, '-').concat(props.type || 'card')],
            attrs: __assign$2({}, attrs),
            on: {
              change: function () {},
            },
          },
          slots
        )
      }
    },
  })
  var ArrayItems = composeExport(ArrayItemsInner, {
    Item: ArrayItemsItem,
    Index: ArrayBase.Index,
    SortHandle: ArrayBase.SortHandle,
    Addition: ArrayBase.Addition,
    Remove: ArrayBase.Remove,
    MoveDown: ArrayBase.MoveDown,
    MoveUp: ArrayBase.MoveUp,
    useArray: ArrayBase.useArray,
    useIndex: ArrayBase.useIndex,
    useRecord: ArrayBase.useRecord,
  })

  var ArrayTabs = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'ArrayTabs',
      props: [],
      setup: function (props, _a) {
        var attrs = _a.attrs,
          listeners = _a.listeners
        var fieldRef = Formily.Vue.useField()
        var schemaRef = Formily.Vue.useFieldSchema()
        var prefixCls = ''.concat(stylePrefix, '-array-tabs')
        var activeKey = VueCompositionAPI.ref('tab-0')
        return function () {
          var field = fieldRef.value
          var schema = schemaRef.value
          var value = Array.isArray(field.value) ? field.value : []
          var dataSource = (
            value === null || value === void 0 ? void 0 : value.length
          )
            ? value
            : [{}]
          var onEdit = function (targetKey, type) {
            var _a, _b
            if (type == 'add') {
              var id = dataSource.length
              if (
                (_a =
                  field === null || field === void 0 ? void 0 : field.value) ===
                  null || _a === void 0
                  ? void 0
                  : _a.length
              ) {
                field.push(null)
              } else {
                field.push(null, null)
              }
              activeKey.value = 'tab-'.concat(id)
            } else if (type == 'remove') {
              var index =
                (_b = targetKey.match(/-(\d+)/)) === null || _b === void 0
                  ? void 0
                  : _b[1]
              field.remove(Number(index))
              if (activeKey.value === targetKey) {
                activeKey.value = 'tab-'.concat(index - 1)
              }
            }
          }
          var badgedTab = function (index) {
            var tab = ''
              .concat(field.title || 'Untitled', ' ')
              .concat(index + 1)
            var path = field.address.concat(index)
            var errors = field.form.queryFeedbacks({
              type: 'error',
              address: ''.concat(path, '.**'),
            })
            if (errors.length) {
              return Formily.Vue.h(
                'span',
                {},
                {
                  default: function () {
                    return [
                      Formily.Vue.h(
                        Element.Badge,
                        {
                          class: [''.concat(prefixCls, '-errors-badge')],
                          props: {
                            value: errors.length,
                          },
                        },
                        {
                          default: function () {
                            return [tab]
                          },
                        }
                      ),
                    ]
                  },
                }
              )
            }
            return Formily.Vue.h(
              'span',
              {},
              {
                default: function () {
                  return [tab]
                },
              }
            )
          }
          var renderItems = function () {
            return dataSource === null || dataSource === void 0
              ? void 0
              : dataSource.map(function (item, index) {
                  var items = Array.isArray(schema.items)
                    ? schema.items[index]
                    : schema.items
                  var key = 'tab-'.concat(index)
                  return Formily.Vue.h(
                    Element.TabPane,
                    {
                      key: key,
                      attrs: {
                        closable: index !== 0,
                        name: key,
                      },
                    },
                    {
                      default: function () {
                        return Formily.Vue.h(
                          Formily.Vue.RecursionField,
                          {
                            props: {
                              schema: items,
                              name: index,
                            },
                          },
                          {}
                        )
                      },
                      label: function () {
                        return [badgedTab(index)]
                      },
                    }
                  )
                })
          }
          return Formily.Vue.h(
            Element.Tabs,
            {
              class: [prefixCls],
              attrs: __assign$2(__assign$2({}, attrs), {
                type: 'card',
                value: activeKey.value,
                addable: true,
              }),
              on: __assign$2(__assign$2({}, listeners), {
                input: function (key) {
                  activeKey.value = key
                },
                'tab-remove': function (target) {
                  var _a
                  onEdit(target, 'remove')
                  ;(_a =
                    listeners === null || listeners === void 0
                      ? void 0
                      : listeners['tab-remove']) === null || _a === void 0
                    ? void 0
                    : _a.call(listeners, target)
                },
                'tab-add': function () {
                  var _a
                  onEdit(null, 'add')
                  ;(_a =
                    listeners === null || listeners === void 0
                      ? void 0
                      : listeners['tab-add']) === null || _a === void 0
                    ? void 0
                    : _a.call(listeners)
                },
              }),
            },
            {
              default: function () {
                return [renderItems()]
              },
            }
          )
        }
      },
    })
  )

  var getParentPattern = function (fieldRef) {
    var _a, _b
    var field = fieldRef.value
    return (
      ((_a = field === null || field === void 0 ? void 0 : field.parent) ===
        null || _a === void 0
        ? void 0
        : _a.pattern) ||
      ((_b = field === null || field === void 0 ? void 0 : field.form) ===
        null || _b === void 0
        ? void 0
        : _b.pattern)
    )
  }
  var getFormItemProps = function (fieldRef) {
    var field = fieldRef.value
    if (Formily.Core.isVoidField(field)) return {}
    if (!field) return {}
    var takeMessage = function () {
      if (field.selfErrors.length) return field.selfErrors[0]
      if (field.selfWarnings.length) return field.selfWarnings[0]
      if (field.selfSuccesses.length) return field.selfSuccesses[0]
    }
    return {
      feedbackStatus:
        field.validateStatus === 'validating'
          ? 'pending'
          : field.validateStatus,
      feedbackText: takeMessage(),
      extra: field.description,
    }
  }
  var EditableInner = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'FEditable',
      setup: function (props, _a) {
        var attrs = _a.attrs,
          slots = _a.slots,
          refs = _a.refs
        var fieldRef = Formily.Vue.useField()
        var prefixCls = ''.concat(stylePrefix, '-editable')
        var setEditable = function (payload) {
          var pattern = getParentPattern(fieldRef)
          if (pattern !== 'editable') return
          fieldRef.value.setPattern(payload ? 'editable' : 'readPretty')
        }
        var dispose = Formily.Reactive.reaction(
          function () {
            var pattern = getParentPattern(fieldRef)
            return pattern
          },
          function (pattern) {
            if (pattern === 'editable') {
              fieldRef.value.setPattern('readPretty')
            }
          },
          {
            fireImmediately: true,
          }
        )
        VueCompositionAPI.onBeforeUnmount(dispose)
        return function () {
          var field = fieldRef.value
          var editable = field.pattern === 'editable'
          var pattern = getParentPattern(fieldRef)
          var itemProps = getFormItemProps(fieldRef)
          var recover = function () {
            var _a, _b
            if (
              editable &&
              !((_b =
                (_a = fieldRef.value) === null || _a === void 0
                  ? void 0
                  : _a.errors) === null || _b === void 0
                ? void 0
                : _b.length)
            ) {
              setEditable(false)
            }
          }
          var onClick = function (e) {
            var innerRef = refs.innerRef
            var target = e.target
            var close = innerRef.querySelector(
              '.'.concat(prefixCls, '-close-btn')
            )
            if (
              (target === null || target === void 0
                ? void 0
                : target.contains(close)) ||
              (close === null || close === void 0
                ? void 0
                : close.contains(target))
            ) {
              recover()
            } else if (!editable) {
              setTimeout(function () {
                setEditable(true)
                setTimeout(function () {
                  var _a
                  ;(_a = innerRef.querySelector('input')) === null ||
                  _a === void 0
                    ? void 0
                    : _a.focus()
                })
              })
            }
          }
          var renderEditHelper = function () {
            if (editable) return null
            return Formily.Vue.h(
              FormBaseItem,
              {
                attrs: __assign$2(__assign$2({}, attrs), itemProps),
              },
              {
                default: function () {
                  return Formily.Vue.h(
                    'i',
                    {
                      class: [
                        ''.concat(prefixCls, '-edit-btn'),
                        pattern === 'editable'
                          ? 'el-icon-edit'
                          : 'el-icon-chat-dot-round',
                      ],
                    },
                    {}
                  )
                },
              }
            )
          }
          var renderCloseHelper = function () {
            if (!editable) return null
            return Formily.Vue.h(
              FormBaseItem,
              {
                attrs: __assign$2({}, attrs),
              },
              {
                default: function () {
                  return Formily.Vue.h(
                    'i',
                    {
                      class: [
                        ''.concat(prefixCls, '-close-btn'),
                        'el-icon-close',
                      ],
                    },
                    {}
                  )
                },
              }
            )
          }
          return Formily.Vue.h(
            'div',
            {
              class: prefixCls,
              ref: 'innerRef',
              on: {
                click: onClick,
              },
            },
            {
              default: function () {
                return Formily.Vue.h(
                  'div',
                  {
                    class: ''.concat(prefixCls, '-content'),
                  },
                  {
                    default: function () {
                      return [
                        Formily.Vue.h(
                          FormBaseItem,
                          {
                            attrs: __assign$2(__assign$2({}, attrs), itemProps),
                          },
                          slots
                        ),
                        renderEditHelper(),
                        renderCloseHelper(),
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
  )
  var EditablePopover = Formily.ReactiveVue.observer(
    VueCompositionAPI.defineComponent({
      name: 'FEditablePopover',
      setup: function (props, _a) {
        var attrs = _a.attrs,
          slots = _a.slots
        var fieldRef = Formily.Vue.useField()
        var prefixCls = ''.concat(stylePrefix, '-editable')
        var visible = VueCompositionAPI.ref(false)
        return function () {
          var field = fieldRef.value
          var pattern = getParentPattern(fieldRef)
          return Formily.Vue.h(
            Element.Popover,
            {
              class: [prefixCls],
              attrs: __assign$2(__assign$2({}, attrs), {
                title: attrs.title || field.title,
                value: visible.value,
                trigger: 'click',
              }),
              on: {
                input: function (value) {
                  visible.value = value
                },
              },
            },
            {
              default: function () {
                return [slots.default()]
              },
              reference: function () {
                return Formily.Vue.h(
                  FormBaseItem,
                  { class: [''.concat(prefixCls, '-trigger')] },
                  {
                    default: function () {
                      return Formily.Vue.h(
                        'div',
                        {
                          class: [''.concat(prefixCls, '-content')],
                        },
                        {
                          default: function () {
                            return [
                              Formily.Vue.h(
                                'span',
                                {
                                  class: [''.concat(prefixCls, '-preview')],
                                },
                                {
                                  default: function () {
                                    return [attrs.title || field.title]
                                  },
                                }
                              ),
                              Formily.Vue.h(
                                'i',
                                {
                                  class: [
                                    ''.concat(prefixCls, '-edit-btn'),
                                    pattern === 'editable'
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
  )
  var Editable = composeExport(EditableInner, {
    Popover: EditablePopover,
  })

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

  function _typeof(obj) {
    if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
      _typeof = function (obj) {
        return typeof obj
      }
    } else {
      _typeof = function (obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj
      }
    }

    return _typeof(obj)
  }

  function _toConsumableArray(arr) {
    return (
      _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
    )
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)
        arr2[i] = arr[i]

      return arr2
    }
  }

  function _iterableToArray(iter) {
    if (
      Symbol.iterator in Object(iter) ||
      Object.prototype.toString.call(iter) === '[object Arguments]'
    )
      return Array.from(iter)
  }

  function _nonIterableSpread() {
    throw new TypeError('Invalid attempt to spread non-iterable instance')
  }

  var inBrowser = typeof window !== 'undefined'
  function freeze(item) {
    if (Array.isArray(item) || _typeof(item) === 'object') {
      return Object.freeze(item)
    }

    return item
  }
  function combinePassengers(transports) {
    var slotProps =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    return transports.reduce(function (passengers, transport) {
      var temp = transport.passengers[0]
      var newPassengers =
        typeof temp === 'function' ? temp(slotProps) : transport.passengers
      return passengers.concat(newPassengers)
    }, [])
  }
  function stableSort(array, compareFn) {
    return array
      .map(function (v, idx) {
        return [idx, v]
      })
      .sort(function (a, b) {
        return compareFn(a[1], b[1]) || a[0] - b[0]
      })
      .map(function (c) {
        return c[1]
      })
  }
  function pick(obj, keys) {
    return keys.reduce(function (acc, key) {
      if (obj.hasOwnProperty(key)) {
        acc[key] = obj[key]
      }

      return acc
    }, {})
  }

  var transports = {}
  var targets = {}
  var sources = {}
  var Wormhole = Vue.extend({
    data: function data() {
      return {
        transports: transports,
        targets: targets,
        sources: sources,
        trackInstances: inBrowser,
      }
    },
    methods: {
      open: function open(transport) {
        if (!inBrowser) return
        var to = transport.to,
          from = transport.from,
          passengers = transport.passengers,
          _transport$order = transport.order,
          order = _transport$order === void 0 ? Infinity : _transport$order
        if (!to || !from || !passengers) return
        var newTransport = {
          to: to,
          from: from,
          passengers: freeze(passengers),
          order: order,
        }
        var keys = Object.keys(this.transports)

        if (keys.indexOf(to) === -1) {
          Vue.set(this.transports, to, [])
        }

        var currentIndex = this.$_getTransportIndex(newTransport) // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays

        var newTransports = this.transports[to].slice(0)

        if (currentIndex === -1) {
          newTransports.push(newTransport)
        } else {
          newTransports[currentIndex] = newTransport
        }

        this.transports[to] = stableSort(newTransports, function (a, b) {
          return a.order - b.order
        })
      },
      close: function close(transport) {
        var force =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : false
        var to = transport.to,
          from = transport.from
        if (!to || (!from && force === false)) return

        if (!this.transports[to]) {
          return
        }

        if (force) {
          this.transports[to] = []
        } else {
          var index = this.$_getTransportIndex(transport)

          if (index >= 0) {
            // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays
            var newTransports = this.transports[to].slice(0)
            newTransports.splice(index, 1)
            this.transports[to] = newTransports
          }
        }
      },
      registerTarget: function registerTarget(target, vm, force) {
        if (!inBrowser) return

        if (this.trackInstances && !force && this.targets[target]) {
          console.warn(
            '[portal-vue]: Target '.concat(target, ' already exists')
          )
        }

        this.$set(this.targets, target, Object.freeze([vm]))
      },
      unregisterTarget: function unregisterTarget(target) {
        this.$delete(this.targets, target)
      },
      registerSource: function registerSource(source, vm, force) {
        if (!inBrowser) return

        if (this.trackInstances && !force && this.sources[source]) {
          console.warn(
            '[portal-vue]: source '.concat(source, ' already exists')
          )
        }

        this.$set(this.sources, source, Object.freeze([vm]))
      },
      unregisterSource: function unregisterSource(source) {
        this.$delete(this.sources, source)
      },
      hasTarget: function hasTarget(to) {
        return !!(this.targets[to] && this.targets[to][0])
      },
      hasSource: function hasSource(to) {
        return !!(this.sources[to] && this.sources[to][0])
      },
      hasContentFor: function hasContentFor(to) {
        return !!this.transports[to] && !!this.transports[to].length
      },
      // Internal
      $_getTransportIndex: function $_getTransportIndex(_ref) {
        var to = _ref.to,
          from = _ref.from

        for (var i in this.transports[to]) {
          if (this.transports[to][i].from === from) {
            return +i
          }
        }

        return -1
      },
    },
  })
  var wormhole = new Wormhole(transports)

  var _id = 1
  var Portal = Vue.extend({
    name: 'portal',
    props: {
      disabled: {
        type: Boolean,
      },
      name: {
        type: String,
        default: function _default() {
          return String(_id++)
        },
      },
      order: {
        type: Number,
        default: 0,
      },
      slim: {
        type: Boolean,
      },
      slotProps: {
        type: Object,
        default: function _default() {
          return {}
        },
      },
      tag: {
        type: String,
        default: 'DIV',
      },
      to: {
        type: String,
        default: function _default() {
          return String(Math.round(Math.random() * 10000000))
        },
      },
    },
    created: function created() {
      var _this = this

      this.$nextTick(function () {
        wormhole.registerSource(_this.name, _this)
      })
    },
    mounted: function mounted() {
      if (!this.disabled) {
        this.sendUpdate()
      }
    },
    updated: function updated() {
      if (this.disabled) {
        this.clear()
      } else {
        this.sendUpdate()
      }
    },
    beforeDestroy: function beforeDestroy() {
      wormhole.unregisterSource(this.name)
      this.clear()
    },
    watch: {
      to: function to(newValue, oldValue) {
        oldValue && oldValue !== newValue && this.clear(oldValue)
        this.sendUpdate()
      },
    },
    methods: {
      clear: function clear(target) {
        var closer = {
          from: this.name,
          to: target || this.to,
        }
        wormhole.close(closer)
      },
      normalizeSlots: function normalizeSlots() {
        return this.$scopedSlots.default
          ? [this.$scopedSlots.default]
          : this.$slots.default
      },
      normalizeOwnChildren: function normalizeOwnChildren(children) {
        return typeof children === 'function'
          ? children(this.slotProps)
          : children
      },
      sendUpdate: function sendUpdate() {
        var slotContent = this.normalizeSlots()

        if (slotContent) {
          var transport = {
            from: this.name,
            to: this.to,
            passengers: _toConsumableArray(slotContent),
            order: this.order,
          }
          wormhole.open(transport)
        } else {
          this.clear()
        }
      },
    },
    render: function render(h) {
      var children = this.$slots.default || this.$scopedSlots.default || []
      var Tag = this.tag

      if (children && this.disabled) {
        return children.length <= 1 && this.slim
          ? this.normalizeOwnChildren(children)[0]
          : h(Tag, [this.normalizeOwnChildren(children)])
      } else {
        return this.slim
          ? h()
          : h(Tag, {
              class: {
                'v-portal': true,
              },
              style: {
                display: 'none',
              },
              key: 'v-portal-placeholder',
            })
      }
    },
  })

  var PortalTarget = Vue.extend({
    name: 'portalTarget',
    props: {
      multiple: {
        type: Boolean,
        default: false,
      },
      name: {
        type: String,
        required: true,
      },
      slim: {
        type: Boolean,
        default: false,
      },
      slotProps: {
        type: Object,
        default: function _default() {
          return {}
        },
      },
      tag: {
        type: String,
        default: 'div',
      },
      transition: {
        type: [String, Object, Function],
      },
    },
    data: function data() {
      return {
        transports: wormhole.transports,
        firstRender: true,
      }
    },
    created: function created() {
      var _this = this

      this.$nextTick(function () {
        wormhole.registerTarget(_this.name, _this)
      })
    },
    watch: {
      ownTransports: function ownTransports() {
        this.$emit('change', this.children().length > 0)
      },
      name: function name(newVal, oldVal) {
        /**
         * TODO
         * This should warn as well ...
         */
        wormhole.unregisterTarget(oldVal)
        wormhole.registerTarget(newVal, this)
      },
    },
    mounted: function mounted() {
      var _this2 = this

      if (this.transition) {
        this.$nextTick(function () {
          // only when we have a transition, because it causes a re-render
          _this2.firstRender = false
        })
      }
    },
    beforeDestroy: function beforeDestroy() {
      wormhole.unregisterTarget(this.name)
    },
    computed: {
      ownTransports: function ownTransports() {
        var transports = this.transports[this.name] || []

        if (this.multiple) {
          return transports
        }

        return transports.length === 0
          ? []
          : [transports[transports.length - 1]]
      },
      passengers: function passengers() {
        return combinePassengers(this.ownTransports, this.slotProps)
      },
    },
    methods: {
      // can't be a computed prop because it has to "react" to $slot changes.
      children: function children() {
        return this.passengers.length !== 0
          ? this.passengers
          : this.$scopedSlots.default
          ? this.$scopedSlots.default(this.slotProps)
          : this.$slots.default || []
      },
      // can't be a computed prop because it has to "react" to this.children().
      noWrapper: function noWrapper() {
        var noWrapper = this.slim && !this.transition

        if (noWrapper && this.children().length > 1) {
          console.warn(
            '[portal-vue]: PortalTarget with `slim` option received more than one child element.'
          )
        }

        return noWrapper
      },
    },
    render: function render(h) {
      var noWrapper = this.noWrapper()
      var children = this.children()
      var Tag = this.transition || this.tag
      return noWrapper
        ? children[0]
        : this.slim && !Tag
        ? h()
        : h(
            Tag,
            {
              props: {
                // if we have a transition component, pass the tag if it exists
                tag: this.transition && this.tag ? this.tag : undefined,
              },
              class: {
                'vue-portal-target': true,
              },
            },
            children
          )
    },
  })

  var _id$1 = 0
  var portalProps = [
    'disabled',
    'name',
    'order',
    'slim',
    'slotProps',
    'tag',
    'to',
  ]
  var targetProps = ['multiple', 'transition']
  Vue.extend({
    name: 'MountingPortal',
    inheritAttrs: false,
    props: {
      append: {
        type: [Boolean, String],
      },
      bail: {
        type: Boolean,
      },
      mountTo: {
        type: String,
        required: true,
      },
      // Portal
      disabled: {
        type: Boolean,
      },
      // name for the portal
      name: {
        type: String,
        default: function _default() {
          return 'mounted_' + String(_id$1++)
        },
      },
      order: {
        type: Number,
        default: 0,
      },
      slim: {
        type: Boolean,
      },
      slotProps: {
        type: Object,
        default: function _default() {
          return {}
        },
      },
      tag: {
        type: String,
        default: 'DIV',
      },
      // name for the target
      to: {
        type: String,
        default: function _default() {
          return String(Math.round(Math.random() * 10000000))
        },
      },
      // Target
      multiple: {
        type: Boolean,
        default: false,
      },
      targetSlim: {
        type: Boolean,
      },
      targetSlotProps: {
        type: Object,
        default: function _default() {
          return {}
        },
      },
      targetTag: {
        type: String,
        default: 'div',
      },
      transition: {
        type: [String, Object, Function],
      },
    },
    created: function created() {
      if (typeof document === 'undefined') return
      var el = document.querySelector(this.mountTo)

      if (!el) {
        console.error(
          "[portal-vue]: Mount Point '".concat(
            this.mountTo,
            "' not found in document"
          )
        )
        return
      }

      var props = this.$props // Target already exists

      if (wormhole.targets[props.name]) {
        if (props.bail) {
          console.warn(
            '[portal-vue]: Target '.concat(
              props.name,
              " is already mounted.\n        Aborting because 'bail: true' is set"
            )
          )
        } else {
          this.portalTarget = wormhole.targets[props.name]
        }

        return
      }

      var append = props.append

      if (append) {
        var type = typeof append === 'string' ? append : 'DIV'
        var mountEl = document.createElement(type)
        el.appendChild(mountEl)
        el = mountEl
      } // get props for target from $props
      // we have to rename a few of them

      var _props = pick(this.$props, targetProps)

      _props.slim = this.targetSlim
      _props.tag = this.targetTag
      _props.slotProps = this.targetSlotProps
      _props.name = this.to
      this.portalTarget = new PortalTarget({
        el: el,
        parent: this.$parent || this,
        propsData: _props,
      })
    },
    beforeDestroy: function beforeDestroy() {
      var target = this.portalTarget

      if (this.append) {
        var el = target.$el
        el.parentNode.removeChild(el)
      }

      target.$destroy()
    },
    render: function render(h) {
      if (!this.portalTarget) {
        console.warn("[portal-vue] Target wasn't mounted")
        return h()
      } // if there's no "manual" scoped slot, so we create a <Portal> ourselves

      if (!this.$scopedSlots.manual) {
        var props = pick(this.$props, portalProps)
        return h(
          Portal,
          {
            props: props,
            attrs: this.$attrs,
            on: this.$listeners,
            scopedSlots: this.$scopedSlots,
          },
          this.$slots.default
        )
      } // else, we render the scoped slot

      var content = this.$scopedSlots.manual({
        to: this.to,
      }) // if user used <template> for the scoped slot
      // content will be an array

      if (Array.isArray(content)) {
        content = content[0]
      }

      if (!content) return h()
      return content
    },
  })

  var PORTAL_TARGET_NAME$1 = 'FormDialogFooter'
  var isDialogTitle = function (props) {
    return (
      Formily.Shared.isNum(props) ||
      Formily.Shared.isStr(props) ||
      Formily.Shared.isBool(props) ||
      isValidElement(props)
    )
  }
  var getDialogProps = function (props) {
    if (isDialogTitle(props)) {
      return {
        title: props,
      }
    } else {
      return props
    }
  }
  function FormDialog(title, id, content) {
    var _this = this
    if (Formily.Shared.isFn(id) || isValidElement(id)) {
      content = id
      id = 'form-dialog'
    }
    var prefixCls = ''.concat(stylePrefix, '-form-dialog')
    var env = {
      root: document.createElement('div'),
      form: null,
      promise: null,
      instance: null,
      openMiddlewares: [],
      confirmMiddlewares: [],
      cancelMiddlewares: [],
    }
    document.body.appendChild(env.root)
    var props = getDialogProps(title)
    var dialogProps = __assign$2(__assign$2({}, props), {
      onClosed: function () {
        var _a, _b, _c
        ;(_a = props.onClosed) === null || _a === void 0
          ? void 0
          : _a.call(props)
        env.instance.$destroy()
        env.instance = null
        ;(_c =
          (_b = env.root) === null || _b === void 0
            ? void 0
            : _b.parentNode) === null || _c === void 0
          ? void 0
          : _c.removeChild(env.root)
        env.root = undefined
      },
    })
    var component = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        setup: function () {
          return function () {
            return Formily.Vue.h(
              Formily.Vue.Fragment,
              {},
              {
                default: function () {
                  return resolveComponent(content, {
                    form: env.form,
                  })
                },
              }
            )
          }
        },
      })
    )
    var render = function (visible, resolve, reject) {
      if (visible === void 0) {
        visible = true
      }
      if (!env.instance) {
        var ComponentConstructor = Formily.ReactiveVue.observer(
          Vue.extend({
            props: ['dialogProps'],
            data: function () {
              return {
                visible: false,
              }
            },
            render: function () {
              var _this = this
              var _a = this.dialogProps,
                onClose = _a.onClose,
                onClosed = _a.onClosed,
                onOpen = _a.onOpen,
                onOpend = _a.onOpend,
                onOK = _a.onOK,
                onCancel = _a.onCancel,
                title = _a.title,
                footer = _a.footer,
                okText = _a.okText,
                cancelText = _a.cancelText,
                okButtonProps = _a.okButtonProps,
                cancelButtonProps = _a.cancelButtonProps,
                dialogProps = __rest(_a, [
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
                {
                  props: {
                    form: env.form,
                  },
                },
                {
                  default: function () {
                    return Formily.Vue.h(
                      Element.Dialog,
                      {
                        class: [''.concat(prefixCls)],
                        attrs: __assign$2(
                          { visible: _this.visible },
                          dialogProps
                        ),
                        on: {
                          'update:visible': function (val) {
                            _this.visible = val
                          },
                          close: function () {
                            onClose === null || onClose === void 0
                              ? void 0
                              : onClose()
                          },
                          closed: function () {
                            onClosed === null || onClosed === void 0
                              ? void 0
                              : onClosed()
                          },
                          open: function () {
                            onOpen === null || onOpen === void 0
                              ? void 0
                              : onOpen()
                          },
                          opend: function () {
                            onOpend === null || onOpend === void 0
                              ? void 0
                              : onOpend()
                          },
                        },
                      },
                      {
                        default: function () {
                          return [Formily.Vue.h(component, {}, {})]
                        },
                        title: function () {
                          return Formily.Vue.h(
                            'div',
                            {},
                            {
                              default: function () {
                                return resolveComponent(title)
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
                                var FooterProtalTarget = Formily.Vue.h(
                                  PortalTarget,
                                  {
                                    props: {
                                      name: PORTAL_TARGET_NAME$1,
                                      slim: true,
                                    },
                                  },
                                  {}
                                )
                                if (footer === null) {
                                  return [null, FooterProtalTarget]
                                } else if (footer) {
                                  return [
                                    resolveComponent(footer),
                                    FooterProtalTarget,
                                  ]
                                }
                                return [
                                  Formily.Vue.h(
                                    Element.Button,
                                    {
                                      attrs: cancelButtonProps,
                                      on: {
                                        click: function (e) {
                                          onCancel === null ||
                                          onCancel === void 0
                                            ? void 0
                                            : onCancel(e)
                                          reject()
                                        },
                                      },
                                    },
                                    {
                                      default: function () {
                                        return resolveComponent(
                                          cancelText ||
                                            t('el.popconfirm.cancelButtonText')
                                        )
                                      },
                                    }
                                  ),
                                  Formily.Vue.h(
                                    Element.Button,
                                    {
                                      attrs: __assign$2(
                                        __assign$2(
                                          { type: 'primary' },
                                          okButtonProps
                                        ),
                                        { loading: env.form.submitting }
                                      ),
                                      on: {
                                        click: function (e) {
                                          onOK === null || onOK === void 0
                                            ? void 0
                                            : onOK(e)
                                          resolve()
                                        },
                                      },
                                    },
                                    {
                                      default: function () {
                                        return resolveComponent(
                                          okText ||
                                            t('el.popconfirm.confirmButtonText')
                                        )
                                      },
                                    }
                                  ),
                                  FooterProtalTarget,
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
        env.instance = new ComponentConstructor({
          propsData: {
            dialogProps: dialogProps,
          },
          parent: getProtalContext(id),
        })
        env.instance.$mount(env.root)
      }
      env.instance.visible = visible
    }
    var formDialog = {
      forOpen: function (middleware) {
        if (Formily.Shared.isFn(middleware)) {
          env.openMiddlewares.push(middleware)
        }
        return formDialog
      },
      forConfirm: function (middleware) {
        if (Formily.Shared.isFn(middleware)) {
          env.confirmMiddlewares.push(middleware)
        }
        return formDialog
      },
      forCancel: function (middleware) {
        if (Formily.Shared.isFn(middleware)) {
          env.cancelMiddlewares.push(middleware)
        }
        return formDialog
      },
      open: function (props) {
        if (env.promise) return env.promise
        env.promise = new Promise(function (resolve, reject) {
          return __awaiter(_this, void 0, void 0, function () {
            var e_1
            var _this = this
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  _a.trys.push([0, 2, , 3])
                  return [
                    4 /*yield*/,
                    loading(dialogProps.loadingText, function () {
                      return Formily.Shared.applyMiddleware(
                        props,
                        env.openMiddlewares
                      )
                    }),
                  ]
                case 1:
                  props = _a.sent()
                  env.form = env.form || Formily.Core.createForm(props)
                  return [3 /*break*/, 3]
                case 2:
                  e_1 = _a.sent()
                  reject(e_1)
                  return [3 /*break*/, 3]
                case 3:
                  render(
                    true,
                    function () {
                      env.form
                        .submit(function () {
                          return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                              switch (_a.label) {
                                case 0:
                                  return [
                                    4 /*yield*/,
                                    Formily.Shared.applyMiddleware(
                                      env.form,
                                      env.confirmMiddlewares
                                    ),
                                  ]
                                case 1:
                                  _a.sent()
                                  resolve(
                                    Formily.Reactive.toJS(env.form.values)
                                  )
                                  if (dialogProps.beforeClose) {
                                    setTimeout(function () {
                                      dialogProps.beforeClose(function () {
                                        formDialog.close()
                                      })
                                    })
                                  } else {
                                    formDialog.close()
                                  }
                                  return [2 /*return*/]
                              }
                            })
                          })
                        })
                        .catch(reject)
                    },
                    function () {
                      return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                          switch (_a.label) {
                            case 0:
                              return [
                                4 /*yield*/,
                                loading(dialogProps.loadingText, function () {
                                  return Formily.Shared.applyMiddleware(
                                    env.form,
                                    env.cancelMiddlewares
                                  )
                                }),
                              ]
                            case 1:
                              _a.sent()
                              if (dialogProps.beforeClose) {
                                dialogProps.beforeClose(function () {
                                  formDialog.close()
                                })
                              } else {
                                formDialog.close()
                              }
                              return [2 /*return*/]
                          }
                        })
                      })
                    }
                  )
                  return [2 /*return*/]
              }
            })
          })
        })
        return env.promise
      },
      close: function () {
        if (!env.root) return
        render(false)
      },
    }
    return formDialog
  }
  var FormDialogFooter = VueCompositionAPI.defineComponent({
    name: 'FFormDialogFooter',
    setup: function (props, _a) {
      var slots = _a.slots
      return function () {
        return Formily.Vue.h(
          Portal,
          {
            props: {
              to: PORTAL_TARGET_NAME$1,
            },
          },
          slots
        )
      }
    },
  })
  FormDialog.Footer = FormDialogFooter
  FormDialog.Portal = createPortalProvider('form-dialog')

  var PORTAL_TARGET_NAME = 'FormDrawerFooter'
  var isDrawerTitle = function (props) {
    return (
      Formily.Shared.isNum(props) ||
      Formily.Shared.isStr(props) ||
      Formily.Shared.isBool(props) ||
      isValidElement(props)
    )
  }
  var getDrawerProps = function (props) {
    if (isDrawerTitle(props)) {
      return {
        title: props,
      }
    } else {
      return props
    }
  }
  function FormDrawer(title, id, content) {
    var _this = this
    if (Formily.Shared.isFn(id) || isValidElement(id)) {
      content = id
      id = 'form-drawer'
    }
    var prefixCls = ''.concat(stylePrefix, '-form-drawer')
    var env = {
      root: document.createElement('div'),
      form: null,
      promise: null,
      instance: null,
      openMiddlewares: [],
      confirmMiddlewares: [],
      cancelMiddlewares: [],
    }
    document.body.appendChild(env.root)
    var props = getDrawerProps(title)
    var drawerProps = __assign$2(__assign$2({}, props), {
      onClosed: function () {
        var _a, _b, _c
        ;(_a = props.onClosed) === null || _a === void 0
          ? void 0
          : _a.call(props)
        env.instance.$destroy()
        env.instance = null
        ;(_c =
          (_b = env.root) === null || _b === void 0
            ? void 0
            : _b.parentNode) === null || _c === void 0
          ? void 0
          : _c.removeChild(env.root)
        env.root = undefined
      },
    })
    var component = Formily.ReactiveVue.observer(
      VueCompositionAPI.defineComponent({
        setup: function () {
          return function () {
            return Formily.Vue.h(
              Formily.Vue.Fragment,
              {},
              {
                default: function () {
                  return resolveComponent(content, {
                    form: env.form,
                  })
                },
              }
            )
          }
        },
      })
    )
    var render = function (visible, resolve, reject) {
      if (visible === void 0) {
        visible = true
      }
      if (!env.instance) {
        var ComponentConstructor = Vue.extend({
          props: ['drawerProps'],
          data: function () {
            return {
              visible: false,
            }
          },
          render: function () {
            var _this = this
            var _a = this.drawerProps,
              onClose = _a.onClose,
              onClosed = _a.onClosed,
              onOpen = _a.onOpen,
              onOpend = _a.onOpend,
              onOK = _a.onOK,
              onCancel = _a.onCancel,
              title = _a.title,
              footer = _a.footer,
              okText = _a.okText,
              cancelText = _a.cancelText,
              okButtonProps = _a.okButtonProps,
              cancelButtonProps = _a.cancelButtonProps,
              drawerProps = __rest(_a, [
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
              {
                props: {
                  form: env.form,
                },
              },
              {
                default: function () {
                  return Formily.Vue.h(
                    Element.Drawer,
                    {
                      class: [''.concat(prefixCls)],
                      attrs: __assign$2(
                        { visible: _this.visible },
                        drawerProps
                      ),
                      on: {
                        'update:visible': function (val) {
                          _this.visible = val
                        },
                        close: function () {
                          onClose === null || onClose === void 0
                            ? void 0
                            : onClose()
                        },
                        closed: function () {
                          onClosed === null || onClosed === void 0
                            ? void 0
                            : onClosed()
                        },
                        open: function () {
                          onOpen === null || onOpen === void 0
                            ? void 0
                            : onOpen()
                        },
                        opend: function () {
                          onOpend === null || onOpend === void 0
                            ? void 0
                            : onOpend()
                        },
                      },
                    },
                    {
                      default: function () {
                        return [
                          Formily.Vue.h(
                            'div',
                            {
                              class: [''.concat(prefixCls, '-body')],
                            },
                            {
                              default: function () {
                                return Formily.Vue.h(component, {}, {})
                              },
                            }
                          ),
                          Formily.Vue.h(
                            'div',
                            {
                              class: [''.concat(prefixCls, '-footer')],
                            },
                            {
                              default: function () {
                                var FooterProtalTarget = Formily.Vue.h(
                                  PortalTarget,
                                  {
                                    props: {
                                      name: PORTAL_TARGET_NAME,
                                      slim: true,
                                    },
                                  },
                                  {}
                                )
                                if (footer === null) {
                                  return [null, FooterProtalTarget]
                                } else if (footer) {
                                  return [
                                    resolveComponent(footer),
                                    FooterProtalTarget,
                                  ]
                                }
                                return [
                                  Formily.Vue.h(
                                    Element.Button,
                                    {
                                      attrs: cancelButtonProps,
                                      on: {
                                        click: function (e) {
                                          onCancel === null ||
                                          onCancel === void 0
                                            ? void 0
                                            : onCancel(e)
                                          reject()
                                        },
                                      },
                                    },
                                    {
                                      default: function () {
                                        return resolveComponent(
                                          cancelText ||
                                            t('el.popconfirm.cancelButtonText')
                                        )
                                      },
                                    }
                                  ),
                                  Formily.Vue.h(
                                    Element.Button,
                                    {
                                      attrs: __assign$2(
                                        { type: 'primary' },
                                        okButtonProps
                                      ),
                                      on: {
                                        click: function (e) {
                                          onOK === null || onOK === void 0
                                            ? void 0
                                            : onOK(e)
                                          resolve()
                                        },
                                      },
                                    },
                                    {
                                      default: function () {
                                        return resolveComponent(
                                          okText ||
                                            t('el.popconfirm.confirmButtonText')
                                        )
                                      },
                                    }
                                  ),
                                  FooterProtalTarget,
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
                              return resolveComponent(title)
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
        env.instance = new ComponentConstructor({
          propsData: {
            drawerProps: drawerProps,
          },
          parent: getProtalContext(id),
        })
        env.instance.$mount(env.root)
      }
      env.instance.visible = visible
    }
    var formDrawer = {
      forOpen: function (middleware) {
        if (Formily.Shared.isFn(middleware)) {
          env.openMiddlewares.push(middleware)
        }
        return formDrawer
      },
      forConfirm: function (middleware) {
        if (Formily.Shared.isFn(middleware)) {
          env.confirmMiddlewares.push(middleware)
        }
        return formDrawer
      },
      forCancel: function (middleware) {
        if (Formily.Shared.isFn(middleware)) {
          env.cancelMiddlewares.push(middleware)
        }
        return formDrawer
      },
      open: function (props) {
        if (env.promise) return env.promise
        env.promise = new Promise(function (resolve, reject) {
          return __awaiter(_this, void 0, void 0, function () {
            var e_1
            var _this = this
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  _a.trys.push([0, 2, , 3])
                  return [
                    4 /*yield*/,
                    loading(drawerProps.loadingText, function () {
                      return Formily.Shared.applyMiddleware(
                        props,
                        env.openMiddlewares
                      )
                    }),
                  ]
                case 1:
                  props = _a.sent()
                  env.form = env.form || Formily.Core.createForm(props)
                  return [3 /*break*/, 3]
                case 2:
                  e_1 = _a.sent()
                  reject(e_1)
                  return [3 /*break*/, 3]
                case 3:
                  render(
                    true,
                    function () {
                      env.form
                        .submit(function () {
                          return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                              switch (_a.label) {
                                case 0:
                                  return [
                                    4 /*yield*/,
                                    Formily.Shared.applyMiddleware(
                                      env.form,
                                      env.confirmMiddlewares
                                    ),
                                  ]
                                case 1:
                                  _a.sent()
                                  resolve(
                                    Formily.Reactive.toJS(env.form.values)
                                  )
                                  if (drawerProps.beforeClose) {
                                    setTimeout(function () {
                                      drawerProps.beforeClose(function () {
                                        formDrawer.close()
                                      })
                                    })
                                  } else {
                                    formDrawer.close()
                                  }
                                  return [2 /*return*/]
                              }
                            })
                          })
                        })
                        .catch(reject)
                    },
                    function () {
                      return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                          switch (_a.label) {
                            case 0:
                              return [
                                4 /*yield*/,
                                loading(drawerProps.loadingText, function () {
                                  return Formily.Shared.applyMiddleware(
                                    env.form,
                                    env.cancelMiddlewares
                                  )
                                }),
                              ]
                            case 1:
                              _a.sent()
                              if (drawerProps.beforeClose) {
                                drawerProps.beforeClose(function () {
                                  formDrawer.close()
                                })
                              } else {
                                formDrawer.close()
                              }
                              return [2 /*return*/]
                          }
                        })
                      })
                    }
                  )
                  return [2 /*return*/]
              }
            })
          })
        })
        return env.promise
      },
      close: function () {
        if (!env.root) return
        render(false)
      },
    }
    return formDrawer
  }
  var FormDrawerFooter = VueCompositionAPI.defineComponent({
    name: 'FFormDrawerFooter',
    setup: function (props, _a) {
      var slots = _a.slots
      return function () {
        return Formily.Vue.h(
          Portal,
          {
            props: {
              to: PORTAL_TARGET_NAME,
            },
          },
          slots
        )
      }
    },
  })
  FormDrawer.Footer = FormDrawerFooter
  FormDrawer.Protal = createPortalProvider('form-drawer')

  exports.ArrayBase = ArrayBase
  exports.ArrayCards = ArrayCards
  exports.ArrayCollapse = ArrayCollapse
  exports.ArrayCollapseInner = ArrayCollapseInner
  exports.ArrayCollapseItem = ArrayCollapseItem
  exports.ArrayItems = ArrayItems
  exports.ArrayTable = ArrayTable
  exports.ArrayTabs = ArrayTabs
  exports.Cascader = Cascader
  exports.Checkbox = Checkbox
  exports.DatePicker = DatePicker
  exports.Editable = Editable
  exports.ElForm = ElForm
  exports.ElFormItem = ElFormItem
  exports.Form = Form
  exports.FormBaseItem = FormBaseItem
  exports.FormButtonGroup = FormButtonGroup
  exports.FormCollapse = composeFormCollapse
  exports.FormCollapseItem = FormCollapseItem
  exports.FormDialog = FormDialog
  exports.FormDrawer = FormDrawer
  exports.FormGrid = FormGrid
  exports.FormItem = FormItem
  exports.FormLayout = FormLayout
  exports.FormLayoutDeepContext = FormLayoutDeepContext
  exports.FormLayoutShallowContext = FormLayoutShallowContext
  exports.FormStep = FormStep
  exports.FormTab = FormTab
  exports.Input = Input
  exports.InputNumber = InputNumber
  exports.Password = Password
  exports.PreviewText = PreviewText
  exports.Radio = Radio
  exports.Reset = Reset
  exports.Select = Select
  exports.Space = Space
  exports.Submit = Submit
  exports.Switch = Switch
  exports.TimePicker = TimePicker
  exports.Transfer = Transfer
  exports.Upload = Upload
  exports.createFormGrid = createFormGrid
  exports.useFormDeepLayout = useFormDeepLayout
  exports.useFormGrid = useFormGrid
  exports.useFormLayout = useFormLayout
  exports.useFormShallowLayout = useFormShallowLayout
  exports.useGridColumn = useGridColumn
  exports.usePlaceholder = usePlaceholder

  Object.defineProperty(exports, '__esModule', { value: true })
})
//# sourceMappingURL=formily.element.umd.development.js.map
