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
exports.FormCollapse = exports.FormCollapseItem = void 0
var element_ui_1 = require('element-ui')
var reactive_1 = require('@formily/reactive')
var vue_1 = require('@formily/vue')
var reactive_vue_1 = require('@formily/reactive-vue')
var __builtins__1 = require('../__builtins__')
var shared_1 = require('@formily/shared')
var vue_demi_1 = require('vue-demi')
var usePanels = function (collapseField, schema) {
  var panels = []
  schema.mapProperties(function (schema, name) {
    var _a, _b
    var field = collapseField.query(collapseField.address.concat(name)).take()
    if (
      (field === null || field === void 0 ? void 0 : field.display) ===
        'none' ||
      (field === null || field === void 0 ? void 0 : field.display) === 'hidden'
    )
      return
    if (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('FormCollapse.Item')) > -1
    ) {
      panels.push({
        name: name,
        props: __assign(
          __assign(
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
  var formCollapse = (0, reactive_1.model)({
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
      formCollapse.activeKeys = (0, shared_1.toArr)(
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
var FormCollapse = (0, reactive_vue_1.observer)(
  (0, vue_demi_1.defineComponent)({
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
      var field = (0, vue_1.useField)()
      var schema = (0, vue_1.useFieldSchema)()
      var prefixCls = ''.concat(__builtins__1.stylePrefix, '-form-collapse')
      var _formCollapse = (0, vue_demi_1.computed)(function () {
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
          return (0, vue_1.h)(
            element_ui_1.Badge,
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
        return (0, vue_1.h)(
          element_ui_1.Collapse,
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
                return (0, vue_1.h)(
                  element_ui_1.CollapseItem,
                  {
                    key: index,
                    props: __assign(__assign({}, props), { name: name }),
                  },
                  {
                    default: function () {
                      return [
                        (0, vue_1.h)(
                          vue_1.RecursionField,
                          { props: { schema: schema, name: name } },
                          {}
                        ),
                      ]
                    },
                    title: function () {
                      return (0, vue_1.h)(
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
exports.FormCollapseItem = (0, vue_demi_1.defineComponent)({
  name: 'FFormCollapseItem',
  setup: function (_props, _a) {
    var slots = _a.slots
    return function () {
      return (0, vue_1.h)(vue_1.Fragment, {}, slots)
    }
  },
})
var composeFormCollapse = (0, __builtins__1.composeExport)(FormCollapse, {
  Item: exports.FormCollapseItem,
  createFormCollapse: createFormCollapse,
})
exports.FormCollapse = composeFormCollapse
exports.default = composeFormCollapse
//# sourceMappingURL=index.js.map
