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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          },
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __rest =
  (this && this.__rest) ||
  function (s, e) {
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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.FormTab = void 0
var react_1 = __importStar(require('react'))
var antd_1 = require('antd')
var reactive_1 = require('@formily/reactive')
var react_2 = require('@formily/react')
var classnames_1 = __importDefault(require('classnames'))
var __builtins__1 = require('../__builtins__')
var useTabs = function () {
  var tabsField = (0, react_2.useField)()
  var schema = (0, react_2.useFieldSchema)()
  var tabs = []
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
            key:
              ((_b =
                schema === null || schema === void 0
                  ? void 0
                  : schema['x-component-props']) === null || _b === void 0
                ? void 0
                : _b.key) || name,
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
  var formTab = (0, reactive_1.model)({
    activeKey: defaultActiveKey,
    setActiveKey: function (key) {
      formTab.activeKey = key
    },
  })
  return (0, reactive_1.markRaw)(formTab)
}
exports.FormTab = (0, react_2.observer)(function (_a) {
  var formTab = _a.formTab,
    props = __rest(_a, ['formTab'])
  var field = (0, react_2.useField)()
  var tabs = useTabs()
  var _formTab = (0, react_1.useMemo)(function () {
    return formTab ? formTab : createFormTab()
  }, [])
  var prefixCls = (0, __builtins__1.usePrefixCls)('formily-tab', props)
  var activeKey =
    props.activeKey ||
    (_formTab === null || _formTab === void 0 ? void 0 : _formTab.activeKey)
  var badgedTab = function (key, props) {
    var errors = field.form.queryFeedbacks({
      type: 'error',
      address: ''.concat(field.address.concat(key), '.*'),
    })
    if (errors.length) {
      return react_1.default.createElement(
        antd_1.Badge,
        { size: 'small', className: 'errors-badge', count: errors.length },
        props.tab
      )
    }
    return props.tab
  }
  return react_1.default.createElement(
    antd_1.Tabs,
    __assign({}, props, {
      className: (0, classnames_1.default)(prefixCls, props.className),
      activeKey: activeKey,
      onChange: function (key) {
        var _a, _b
        ;(_a = props.onChange) === null || _a === void 0
          ? void 0
          : _a.call(props, key)
        ;(_b =
          formTab === null || formTab === void 0
            ? void 0
            : formTab.setActiveKey) === null || _b === void 0
          ? void 0
          : _b.call(formTab, key)
      },
    }),
    tabs.map(function (_a, key) {
      var props = _a.props,
        schema = _a.schema,
        name = _a.name
      return react_1.default.createElement(
        antd_1.Tabs.TabPane,
        __assign({ key: key }, props, {
          tab: badgedTab(name, props),
          forceRender: true,
        }),
        react_1.default.createElement(react_2.RecursionField, {
          schema: schema,
          name: name,
        })
      )
    })
  )
})
var TabPane = function (_a) {
  var children = _a.children
  return react_1.default.createElement(react_1.Fragment, null, children)
}
exports.FormTab.TabPane = TabPane
exports.FormTab.createFormTab = createFormTab
exports.default = exports.FormTab
//# sourceMappingURL=index.js.map
