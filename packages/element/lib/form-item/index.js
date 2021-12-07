'use strict'
var __assign =
  (this && this.__assign) ||
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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.FormItem = exports.FormBaseItem = void 0
var composition_api_1 = require('@vue/composition-api')
var core_1 = require('@formily/core')
var vue_1 = require('@formily/vue')
var form_layout_1 = require('../form-layout')
var shared_1 = require('../__builtins__/shared')
var configs_1 = require('../__builtins__/configs')
var element_ui_1 = require('element-ui')
var resize_observer_polyfill_1 = __importDefault(
  require('resize-observer-polyfill')
)
var useOverflow = function (containerRef) {
  var overflow = (0, composition_api_1.ref)(false)
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
  var stopWatch = (0, composition_api_1.watch)(
    function () {
      return containerRef.value
    },
    function (el) {
      cleanup()
      if (el) {
        resizeObserver = new resize_observer_polyfill_1.default(observer)
        resizeObserver.observe(el)
      }
    },
    { immediate: true, flush: 'post' }
  )
  ;(0, composition_api_1.onBeforeUnmount)(function () {
    cleanup()
    stopWatch()
  })
  return overflow
}
var ICON_MAP = {
  error: function () {
    return (0, vue_1.h)('i', { class: 'el-icon-circle-close' }, {})
  },
  success: function () {
    return (0, vue_1.h)('i', { class: 'el-icon-circle-check' }, {})
  },
  warning: function () {
    return (0, vue_1.h)('i', { class: 'el-icon-warning-outline' }, {})
  },
}
exports.FormBaseItem = (0, composition_api_1.defineComponent)({
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
    var slots = _a.slots,
      attrs = _a.attrs,
      refs = _a.refs
    var active = (0, composition_api_1.ref)(false)
    var deepLayoutRef = (0, form_layout_1.useFormLayout)()
    var prefixCls = ''.concat(configs_1.stylePrefix, '-form-item')
    var containerRef = (0, composition_api_1.ref)(null)
    var overflow = useOverflow(containerRef)
    ;(0, composition_api_1.onMounted)(function () {
      containerRef.value = refs.labelContainer
    })
    ;(0, composition_api_1.provide)(
      form_layout_1.FormLayoutShallowContext,
      (0, composition_api_1.ref)(null)
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
          ? (0, vue_1.h)(
              'el-popover',
              {
                props: {
                  disabled: !feedbackText,
                  placement: 'top',
                },
              },
              {
                reference: function () {
                  return (0, vue_1.h)(
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
                    (0, vue_1.h)(
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
                            (0, shared_1.resolveComponent)(feedbackText),
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
        var labelChildren = (0, vue_1.h)(
          'div',
          {
            class: ''.concat(prefixCls, '-label-content'),
            ref: 'labelContainer',
          },
          {
            default: function () {
              return [
                asterisk &&
                  (0, vue_1.h)(
                    'span',
                    { class: ''.concat(prefixCls, '-asterisk') },
                    {
                      default: function () {
                        return ['*']
                      },
                    }
                  ),
                (0, vue_1.h)(
                  'label',
                  {},
                  {
                    default: function () {
                      return [(0, shared_1.resolveComponent)(label)]
                    },
                  }
                ),
              ]
            },
          }
        )
        var isTextTooltip = tooltip && tooltipLayout === 'text'
        if (isTextTooltip || overflow.value) {
          return (0, vue_1.h)(
            element_ui_1.Tooltip,
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
                return (0, vue_1.h)(
                  'div',
                  {},
                  {
                    default: function () {
                      return [
                        overflow.value && (0, shared_1.resolveComponent)(label),
                        isTextTooltip &&
                          (0, shared_1.resolveComponent)(tooltip),
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
          return (0, vue_1.h)(
            'span',
            {
              class: ''.concat(prefixCls, '-label-tooltip'),
            },
            {
              default: function () {
                return [
                  (0, vue_1.h)(
                    element_ui_1.Tooltip,
                    {
                      props: {
                        placement: 'top',
                      },
                    },
                    {
                      default: function () {
                        return [
                          (0, vue_1.h)('i', { class: 'el-icon-info' }, {}),
                        ]
                      },
                      content: function () {
                        return (0, vue_1.h)(
                          'div',
                          {
                            class: ''.concat(
                              prefixCls,
                              '-label-tooltip-content'
                            ),
                          },
                          {
                            default: function () {
                              return [(0, shared_1.resolveComponent)(tooltip)]
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
        (0, vue_1.h)(
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
                  (0, vue_1.h)(
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
        (0, vue_1.h)(
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
              return [(0, shared_1.resolveComponent)(feedbackText)]
            },
          }
        )
      var renderExtra =
        extra &&
        (0, vue_1.h)(
          'div',
          { class: ''.concat(prefixCls, '-extra') },
          {
            default: function () {
              return [extra]
            },
          }
        )
      var renderContent = (0, vue_1.h)(
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
              (0, vue_1.h)(
                'div',
                { class: ''.concat(prefixCls, '-control-content') },
                {
                  default: function () {
                    var _a
                    return [
                      addonBefore &&
                        (0, vue_1.h)(
                          'div',
                          { class: ''.concat(prefixCls, '-addon-before') },
                          {
                            default: function () {
                              return [
                                (0, shared_1.resolveComponent)(addonBefore),
                              ]
                            },
                          }
                        ),
                      (0, vue_1.h)(
                        'div',
                        {
                          class:
                            ((_a = {}),
                            (_a[
                              ''.concat(prefixCls, '-control-content-component')
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
                                (0, vue_1.h)(
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
                                          ? (0, vue_1.h)(
                                              'i',
                                              { class: feedbackIcon },
                                              {}
                                            )
                                          : (0, shared_1.resolveComponent)(
                                              feedbackIcon
                                            ),
                                      ]
                                    },
                                  }
                                ),
                            ]
                          },
                        }
                      ),
                      addonAfter &&
                        (0, vue_1.h)(
                          'div',
                          { class: ''.concat(prefixCls, '-addon-after') },
                          {
                            default: function () {
                              return [
                                (0, shared_1.resolveComponent)(addonAfter),
                              ]
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
      return (0, vue_1.h)(
        'div',
        {
          style: __assign({}, gridStyles),
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
var Item = (0, vue_1.connect)(
  exports.FormBaseItem,
  (0, vue_1.mapProps)(
    { validateStatus: true, title: 'label', required: true },
    function (props, field) {
      if ((0, core_1.isVoidField)(field)) return props
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
      if ((0, core_1.isVoidField)(field)) return props
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
      if ((0, core_1.isVoidField)(field)) return props
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
exports.FormItem = (0, shared_1.composeExport)(Item, {
  BaseItem: exports.FormBaseItem,
})
exports.default = exports.FormItem
//# sourceMappingURL=index.js.map
