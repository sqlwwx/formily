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
import { defineComponent } from '@vue/composition-api'
import { action, model, observable } from '@formily/reactive'
import { observer } from '@formily/reactive-vue'
import {
  h,
  useField,
  useFieldSchema,
  RecursionField,
  Fragment,
} from '@formily/vue'
import Steps from 'element-ui/lib/steps'
import Step from 'element-ui/lib/step'
import { stylePrefix } from '../__builtins__/configs'
import { composeExport } from '../__builtins__/shared'
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
  var env = observable({
    form: null,
    field: null,
    steps: [],
  })
  var setDisplay = action.bound(function (target) {
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
  var next = action.bound(function () {
    if (formStep.allowNext) {
      setDisplay(formStep.current + 1)
      formStep.setCurrent(formStep.current + 1)
    }
  })
  var back = action.bound(function () {
    if (formStep.allowBack) {
      setDisplay(formStep.current - 1)
      formStep.setCurrent(formStep.current - 1)
    }
  })
  var formStep = model({
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
        var _a
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
              _a = _b.sent()
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
var FormStepInner = observer(
  defineComponent({
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
      var field = useField().value
      var prefixCls = ''.concat(stylePrefix, '-form-step')
      var fieldSchemaRef = useFieldSchema()
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
        return h(
          'div',
          {
            class: [prefixCls],
          },
          {
            default: function () {
              return [
                h(
                  Steps,
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
                        return h(Step, { props: props, key: key }, {})
                      })
                    },
                  }
                ),
                renderSteps(steps, function (_a, key) {
                  var name = _a.name,
                    schema = _a.schema
                  if (key !== current) return
                  return h(
                    RecursionField,
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
var StepPane = defineComponent({
  name: 'FFormStepPane',
  setup: function (_props, _a) {
    var slots = _a.slots
    return function () {
      return h(Fragment, {}, slots)
    }
  },
})
export var FormStep = composeExport(FormStepInner, {
  StepPane: StepPane,
  createFormStep: createFormStep,
})
export default FormStep
//# sourceMappingURL=index.js.map
