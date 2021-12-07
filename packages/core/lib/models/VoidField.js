'use strict'
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
Object.defineProperty(exports, '__esModule', { value: true })
exports.VoidField = void 0
var shared_1 = require('@formily/shared')
var reactive_1 = require('@formily/reactive')
var internals_1 = require('../shared/internals')
var BaseField_1 = require('./BaseField')
var VoidField = /** @class */ (function (_super) {
  __extends(VoidField, _super)
  function VoidField(address, props, form, designable) {
    var _this = _super.call(this) || this
    _this.displayName = 'VoidField'
    _this.setState = (0, internals_1.createStateSetter)(_this)
    _this.getState = (0, internals_1.createStateGetter)(_this)
    _this.form = form
    _this.props = props
    _this.designable = designable
    ;(0, internals_1.initializeStart)()
    _this.makeIndexes(address)
    _this.initialize()
    _this.makeObservable()
    _this.makeReactive()
    _this.onInit()
    ;(0, internals_1.initializeEnd)()
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
    this.decorator = (0, shared_1.toArr)(this.props.decorator)
    this.component = (0, shared_1.toArr)(this.props.component)
  }
  VoidField.prototype.makeObservable = function () {
    if (this.designable) return
    ;(0, reactive_1.define)(this, {
      title: reactive_1.observable.ref,
      description: reactive_1.observable.ref,
      selfDisplay: reactive_1.observable.ref,
      selfPattern: reactive_1.observable.ref,
      initialized: reactive_1.observable.ref,
      mounted: reactive_1.observable.ref,
      unmounted: reactive_1.observable.ref,
      decoratorType: reactive_1.observable.ref,
      componentType: reactive_1.observable.ref,
      content: reactive_1.observable.ref,
      data: reactive_1.observable.shallow,
      decoratorProps: reactive_1.observable,
      componentProps: reactive_1.observable,
      display: reactive_1.observable.computed,
      pattern: reactive_1.observable.computed,
      hidden: reactive_1.observable.computed,
      visible: reactive_1.observable.computed,
      disabled: reactive_1.observable.computed,
      readOnly: reactive_1.observable.computed,
      readPretty: reactive_1.observable.computed,
      editable: reactive_1.observable.computed,
      component: reactive_1.observable.computed,
      decorator: reactive_1.observable.computed,
      setTitle: reactive_1.action,
      setDescription: reactive_1.action,
      setDisplay: reactive_1.action,
      setPattern: reactive_1.action,
      setComponent: reactive_1.action,
      setComponentProps: reactive_1.action,
      setDecorator: reactive_1.action,
      setDecoratorProps: reactive_1.action,
      setData: reactive_1.action,
      setContent: reactive_1.action,
      onInit: reactive_1.batch,
      onMount: reactive_1.batch,
      onUnmount: reactive_1.batch,
    })
  }
  VoidField.prototype.makeReactive = function () {
    if (this.designable) return
    ;(0, internals_1.createReactions)(this)
  }
  return VoidField
})(BaseField_1.BaseField)
exports.VoidField = VoidField
//# sourceMappingURL=VoidField.js.map
