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
Object.defineProperty(exports, '__esModule', { value: true })
exports.h = void 0
var vue_demi_1 = require('vue-demi')
var fragment_1 = require('./fragment')
var compatibleCreateElement = function (tag, data, components) {
  /* istanbul ignore else */
  if (vue_demi_1.isVue2) {
    var hInVue2_1 = vue_demi_1.h
    var scopedSlots = components // 默认全部作为 scopedSlots 处理
    var children_1 = []
    /**
     * scopedSlots 不会映射为slots，所以这里手动映射一遍
     * 主要为了解决 slots.x 问题
     */
    Object.keys(components).forEach(function (key) {
      var func = components[key]
      // 转换为 slots 传递
      if (typeof func === 'function' && func.length === 0) {
        /**
         * func 参数为0的判断不准确，因为composition-api包了一层，导致全部为0
         * try catch 解决scoped slots 转换参数异常问题
         * */
        try {
          var child = func()
          children_1.push(
            key === 'default'
              ? child
              : hInVue2_1(fragment_1.FragmentComponent, { slot: key }, [child])
          )
        } catch (error) {}
      }
    })
    var newData = Object.assign({}, data)
    if (Object.keys(scopedSlots).length > 0) {
      if (!newData.scopedSlots) {
        newData.scopedSlots = scopedSlots
      } else {
        newData.scopedSlots = __assign(
          __assign({}, newData.scopedSlots),
          scopedSlots
        )
      }
    }
    if (tag === fragment_1.Fragment) {
      if (Object.keys(newData).length === 0 && children_1.length === 1) {
        if (!Array.isArray(children_1[0])) {
          return children_1[0]
        } else if (children_1[0].length === 1) {
          return children_1[0][0]
        }
      }
      tag = fragment_1.FragmentComponent
    }
    return hInVue2_1(tag, newData, children_1)
  } else {
    if (tag === fragment_1.Fragment) {
      tag = fragment_1.FragmentComponent
    }
    var hInVue3 = vue_demi_1.h
    var newData_1 = {}
    Object.keys(data).forEach(function (key) {
      if (key === 'on') {
        if (data[key]) {
          var events = Object.keys(data[key])
          events.forEach(function (event) {
            var eventName = 'on'
              .concat(event[0].toUpperCase())
              .concat(event.slice(1))
            newData_1[eventName] = data[key][event]
          })
        }
      } else if (typeof data[key] === 'object' && data[key] !== null) {
        Object.assign(newData_1, data[key])
      } else {
        newData_1[key] = data[key]
      }
    })
    return hInVue3(tag, newData_1, components)
  }
}
exports.h = compatibleCreateElement
exports.default = compatibleCreateElement
//# sourceMappingURL=h.js.map
