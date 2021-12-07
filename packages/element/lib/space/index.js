'use strict'
// https://github.com/vueComponent/ant-design-vue/blob/next/components/space/index.tsx
Object.defineProperty(exports, '__esModule', { value: true })
exports.Space = void 0
var composition_api_1 = require('@vue/composition-api')
var vue_1 = require('@formily/vue')
var configs_1 = require('../__builtins__/configs')
var form_layout_1 = require('../form-layout')
var spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
}
exports.Space = (0, composition_api_1.defineComponent)({
  name: 'FSpace',
  props: ['size', 'direction', 'align'],
  setup: function (props, _a) {
    var slots = _a.slots
    var layout = (0, form_layout_1.useFormLayout)()
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
      var prefixCls = ''.concat(configs_1.stylePrefix, '-space')
      var children =
        (_d = slots.default) === null || _d === void 0 ? void 0 : _d.call(slots)
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
        (_a[''.concat(prefixCls, '-align-').concat(mergedAlign)] = mergedAlign),
        _a)
      var itemClassName = ''.concat(prefixCls, '-item')
      var marginDirection = 'marginRight' // directionConfig === 'rtl' ? 'marginLeft' : 'marginRight';
      var renderItems = items.map(function (child, i) {
        var _a
        return (0, vue_1.h)(
          'div',
          {
            class: itemClassName,
            key: ''.concat(itemClassName, '-').concat(i),
            style:
              i === len - 1
                ? {}
                : ((_a = {}),
                  (_a[
                    direction === 'vertical' ? 'marginBottom' : marginDirection
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
      return (0, vue_1.h)(
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
exports.default = exports.Space
//# sourceMappingURL=index.js.map
