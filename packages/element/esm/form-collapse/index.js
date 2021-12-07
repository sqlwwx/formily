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
import Collapse from 'element-ui/lib/collapse'
import CollapseItem from 'element-ui/lib/collapse-item'
import Badge from 'element-ui/lib/badge'
import { model } from '@formily/reactive'
import {
  useField,
  useFieldSchema,
  RecursionField,
  h,
  Fragment,
} from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { composeExport, stylePrefix } from '../__builtins__'
import { toArr } from '@formily/shared'
import { computed, defineComponent } from 'vue-demi'
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
  var formCollapse = model({
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
      formCollapse.activeKeys = toArr(formCollapse.activeKeys).concat(key)
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
var FormCollapse = observer(
  defineComponent({
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
      var field = useField()
      var schema = useFieldSchema()
      var prefixCls = ''.concat(stylePrefix, '-form-collapse')
      var _formCollapse = computed(function () {
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
          return h(
            Badge,
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
        return h(
          Collapse,
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
                return h(
                  CollapseItem,
                  {
                    key: index,
                    props: __assign(__assign({}, props), { name: name }),
                  },
                  {
                    default: function () {
                      return [
                        h(
                          RecursionField,
                          { props: { schema: schema, name: name } },
                          {}
                        ),
                      ]
                    },
                    title: function () {
                      return h(
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
export var FormCollapseItem = defineComponent({
  name: 'FFormCollapseItem',
  setup: function (_props, _a) {
    var slots = _a.slots
    return function () {
      return h(Fragment, {}, slots)
    }
  },
})
var composeFormCollapse = composeExport(FormCollapse, {
  Item: FormCollapseItem,
  createFormCollapse: createFormCollapse,
})
export { composeFormCollapse as FormCollapse }
export default composeFormCollapse
//# sourceMappingURL=index.js.map
