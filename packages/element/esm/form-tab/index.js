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
import { defineComponent, reactive, computed } from '@vue/composition-api'
import { observer } from '@formily/reactive-vue'
import { model } from '@formily/reactive'
import {
  h,
  useField,
  useFieldSchema,
  RecursionField,
  Fragment,
} from '@formily/vue'
import Tabs from 'element-ui/lib/tabs'
import TabPane from 'element-ui/lib/tab-pane'
import Badge from 'element-ui/lib/badge'
import { stylePrefix } from '../__builtins__/configs'
import { composeExport } from '../__builtins__/shared'
var useTabs = function () {
  var tabsField = useField().value
  var schema = useFieldSchema().value
  var tabs = reactive([])
  schema.mapProperties(function (schema, name) {
    var _a, _b
    var field = tabsField.query(tabsField.address.concat(name)).take()
    if (
      (field === null || field === void 0 ? void 0 : field.display) ===
        'none' ||
      (field === null || field === void 0 ? void 0 : field.display) === 'hidden'
    )
      return
    if (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('TabPane')) > -1
    ) {
      tabs.push({
        name: name,
        props: __assign(
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
  var formTab = model({
    activeKey: defaultActiveKey,
    setActiveKey: function (key) {
      formTab.activeKey = key
    },
  })
  return formTab
}
var FormTabInner = observer(
  defineComponent({
    name: 'FFormTab',
    props: ['formTab'],
    setup: function (props, _a) {
      var attrs = _a.attrs,
        listeners = _a.listeners
      var field = useField().value
      var formTabRef = computed(function () {
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
            return h(
              TabPane,
              {
                key: key,
                props: props,
              },
              {
                default: function () {
                  return [
                    h(
                      RecursionField,
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
                  return [h('div', {}, { default: badgedTab(name, props) })]
                },
              }
            )
          })
        }
        return h(
          Tabs,
          {
            class: [prefixCls],
            style: attrs.style,
            props: __assign(__assign({}, attrs), { value: activeKey }),
            on: __assign(__assign({}, listeners), {
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
var FormTabPane = defineComponent({
  name: 'FFormTabPane',
  setup: function (_props, _a) {
    var slots = _a.slots
    return function () {
      return h(Fragment, {}, slots)
    }
  },
})
export var FormTab = composeExport(FormTabInner, {
  TabPane: FormTabPane,
  createFormTab: createFormTab,
})
export default FormTab
//# sourceMappingURL=index.js.map
