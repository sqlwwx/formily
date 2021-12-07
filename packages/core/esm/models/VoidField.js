var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        )
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
import { toArr } from '@formily/shared'
import { define, observable, batch, action } from '@formily/reactive'
import {
  createReactions,
  createStateSetter,
  createStateGetter,
  initializeStart,
  initializeEnd,
} from '../shared/internals'
import { BaseField } from './BaseField'
var VoidField = /** @class */ (function (_super) {
  __extends(VoidField, _super)
  function VoidField(address, props, form, designable) {
    var _this = _super.call(this) || this
    _this.displayName = 'VoidField'
    _this.setState = createStateSetter(_this)
    _this.getState = createStateGetter(_this)
    _this.form = form
    _this.props = props
    _this.designable = designable
    initializeStart()
    _this.makeIndexes(address)
    _this.initialize()
    _this.makeObservable()
    _this.makeReactive()
    _this.onInit()
    initializeEnd()
    return _this
  }
  VoidField.prototype.initialize = function () {
    this.mounted = false
    this.unmounted = false
    this.initialized = false
    this.title = this.props.title
    this.description = this.props.description
    this.pattern = this.props.pattern
    this.display = this.props.display
    this.hidden = this.props.hidden
    this.editable = this.props.editable
    this.disabled = this.props.disabled
    this.readOnly = this.props.readOnly
    this.readPretty = this.props.readPretty
    this.visible = this.props.visible
    this.content = this.props.content
    this.data = this.props.data
    this.decorator = toArr(this.props.decorator)
    this.component = toArr(this.props.component)
  }
  VoidField.prototype.makeObservable = function () {
    if (this.designable) return
    define(this, {
      title: observable.ref,
      description: observable.ref,
      selfDisplay: observable.ref,
      selfPattern: observable.ref,
      initialized: observable.ref,
      mounted: observable.ref,
      unmounted: observable.ref,
      decoratorType: observable.ref,
      componentType: observable.ref,
      content: observable.ref,
      data: observable.shallow,
      decoratorProps: observable,
      componentProps: observable,
      display: observable.computed,
      pattern: observable.computed,
      hidden: observable.computed,
      visible: observable.computed,
      disabled: observable.computed,
      readOnly: observable.computed,
      readPretty: observable.computed,
      editable: observable.computed,
      component: observable.computed,
      decorator: observable.computed,
      setTitle: action,
      setDescription: action,
      setDisplay: action,
      setPattern: action,
      setComponent: action,
      setComponentProps: action,
      setDecorator: action,
      setDecoratorProps: action,
      setData: action,
      setContent: action,
      onInit: batch,
      onMount: batch,
      onUnmount: batch,
    })
  }
  VoidField.prototype.makeReactive = function () {
    if (this.designable) return
    createReactions(this)
  }
  return VoidField
})(BaseField)
export { VoidField }
//# sourceMappingURL=VoidField.js.map
