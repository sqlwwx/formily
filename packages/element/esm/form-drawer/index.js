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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
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
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
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
import { h, FormProvider, Fragment } from '@formily/vue'
import { toJS } from '@formily/reactive'
import { observer } from '@formily/reactive-vue'
import { createForm } from '@formily/core'
import { isNum, isStr, isBool, isFn, applyMiddleware } from '@formily/shared'
import Drawer from 'element-ui/lib/drawer'
import Button from 'element-ui/lib/button'
import { t } from 'element-ui/src/locale'
import Vue from 'vue'
import {
  isValidElement,
  resolveComponent,
  createPortalProvider,
  getProtalContext,
  loading,
} from '../__builtins__/shared'
import { stylePrefix } from '../__builtins__/configs'
import { defineComponent } from '@vue/composition-api'
import { Portal, PortalTarget } from 'portal-vue'
var PORTAL_TARGET_NAME = 'FormDrawerFooter'
var isDrawerTitle = function (props) {
  return isNum(props) || isStr(props) || isBool(props) || isValidElement(props)
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
export function FormDrawer(title, id, content) {
  var _this = this
  if (isFn(id) || isValidElement(id)) {
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
  var drawerProps = __assign(__assign({}, props), {
    onClosed: function () {
      var _a, _b, _c
      ;(_a = props.onClosed) === null || _a === void 0 ? void 0 : _a.call(props)
      env.instance.$destroy()
      env.instance = null
      ;(_c =
        (_b = env.root) === null || _b === void 0 ? void 0 : _b.parentNode) ===
        null || _c === void 0
        ? void 0
        : _c.removeChild(env.root)
      env.root = undefined
    },
  })
  var component = observer(
    defineComponent({
      setup: function () {
        return function () {
          return h(
            Fragment,
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
          return h(
            FormProvider,
            {
              props: {
                form: env.form,
              },
            },
            {
              default: function () {
                return h(
                  Drawer,
                  {
                    class: [''.concat(prefixCls)],
                    attrs: __assign({ visible: _this.visible }, drawerProps),
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
                        onOpen === null || onOpen === void 0 ? void 0 : onOpen()
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
                        h(
                          'div',
                          {
                            class: [''.concat(prefixCls, '-body')],
                          },
                          {
                            default: function () {
                              return h(component, {}, {})
                            },
                          }
                        ),
                        h(
                          'div',
                          {
                            class: [''.concat(prefixCls, '-footer')],
                          },
                          {
                            default: function () {
                              var FooterProtalTarget = h(
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
                                h(
                                  Button,
                                  {
                                    attrs: cancelButtonProps,
                                    on: {
                                      click: function (e) {
                                        onCancel === null || onCancel === void 0
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
                                h(
                                  Button,
                                  {
                                    attrs: __assign(
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
                      return h(
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
      if (isFn(middleware)) {
        env.openMiddlewares.push(middleware)
      }
      return formDrawer
    },
    forConfirm: function (middleware) {
      if (isFn(middleware)) {
        env.confirmMiddlewares.push(middleware)
      }
      return formDrawer
    },
    forCancel: function (middleware) {
      if (isFn(middleware)) {
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
                    return applyMiddleware(props, env.openMiddlewares)
                  }),
                ]
              case 1:
                props = _a.sent()
                env.form = env.form || createForm(props)
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
                                  applyMiddleware(
                                    env.form,
                                    env.confirmMiddlewares
                                  ),
                                ]
                              case 1:
                                _a.sent()
                                resolve(toJS(env.form.values))
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
                                return applyMiddleware(
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
var FormDrawerFooter = defineComponent({
  name: 'FFormDrawerFooter',
  setup: function (props, _a) {
    var slots = _a.slots
    return function () {
      return h(
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
export default FormDrawer
//# sourceMappingURL=index.js.map
