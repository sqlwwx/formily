'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.BaseField = void 0
var shared_1 = require('@formily/shared')
var types_1 = require('../types')
var internals_1 = require('../shared/internals')
var Query_1 = require('./Query')
var BaseField = /** @class */ (function () {
  function BaseField() {
    var _this = this
    this.disposers = []
    this.setTitle = function (title) {
      _this.title = title
    }
    this.setDescription = function (description) {
      _this.description = description
    }
    this.setDisplay = function (type) {
      _this.display = type
    }
    this.setPattern = function (type) {
      _this.pattern = type
    }
    this.setComponent = function (component, props) {
      if (component) {
        _this.componentType = component
      }
      if (props) {
        _this.componentProps = _this.componentProps || {}
        Object.assign(_this.componentProps, props)
      }
    }
    this.setComponentProps = function (props) {
      if (props) {
        _this.componentProps = _this.componentProps || {}
        Object.assign(_this.componentProps, props)
      }
    }
    this.setDecorator = function (component, props) {
      if (component) {
        _this.decoratorType = component
      }
      if (props) {
        _this.decoratorProps = _this.decoratorProps || {}
        Object.assign(_this.decoratorProps, props)
      }
    }
    this.setDecoratorProps = function (props) {
      if (props) {
        _this.decoratorProps = _this.decoratorProps || {}
        Object.assign(_this.decoratorProps, props)
      }
    }
    this.setData = function (data) {
      _this.data = data
    }
    this.setContent = function (content) {
      _this.content = content
    }
    this.onInit = function () {
      _this.initialized = true
      ;(0, internals_1.initFieldUpdate)(_this)
      _this.notify(types_1.LifeCycleTypes.ON_FIELD_INIT)
    }
    this.onMount = function () {
      _this.mounted = true
      _this.unmounted = false
      _this.notify(types_1.LifeCycleTypes.ON_FIELD_MOUNT)
    }
    this.onUnmount = function () {
      _this.mounted = false
      _this.unmounted = true
      _this.notify(types_1.LifeCycleTypes.ON_FIELD_UNMOUNT)
    }
    this.query = function (pattern) {
      return new Query_1.Query({
        pattern: pattern,
        base: _this.address,
        form: _this.form,
      })
    }
    this.notify = function (type, payload) {
      return _this.form.notify(
        type,
        payload !== null && payload !== void 0 ? payload : _this
      )
    }
    this.dispose = function () {
      _this.disposers.forEach(function (dispose) {
        dispose()
      })
      _this.form.removeEffects(_this)
    }
    this.destroy = function () {
      _this.dispose()
      delete _this.form.fields[_this.address.toString()]
    }
    this.match = function (pattern) {
      return shared_1.FormPath.parse(pattern).matchAliasGroup(
        _this.address,
        _this.path
      )
    }
  }
  BaseField.prototype.makeIndexes = function (address) {
    this.form.fields[address.toString()] = this
    ;(0, internals_1.buildNodeIndexes)(this, address)
  }
  Object.defineProperty(BaseField.prototype, 'component', {
    get: function () {
      return [this.componentType, this.componentProps]
    },
    set: function (value) {
      var component = (0, shared_1.toArr)(value)
      this.componentType = component[0]
      this.componentProps = component[1] || {}
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(BaseField.prototype, 'decorator', {
    get: function () {
      return [this.decoratorType, this.decoratorProps]
    },
    set: function (value) {
      var decorator = (0, shared_1.toArr)(value)
      this.decoratorType = decorator[0]
      this.decoratorProps = decorator[1] || {}
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(BaseField.prototype, 'parent', {
    get: function () {
      var parent = this.address.parent()
      var identifier = parent.toString()
      while (!this.form.fields[identifier]) {
        parent = parent.parent()
        identifier = parent.toString()
        if (!identifier) return
      }
      return this.form.fields[identifier]
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(BaseField.prototype, 'display', {
    get: function () {
      var _a
      var parentDisplay =
        (_a = this.parent) === null || _a === void 0 ? void 0 : _a.display
      if (parentDisplay && parentDisplay !== 'visible') {
        if (this.selfDisplay && this.selfDisplay !== 'visible')
          return this.selfDisplay
        return parentDisplay
      }
      if ((0, shared_1.isValid)(this.selfDisplay)) return this.selfDisplay
      return parentDisplay || this.form.display || 'visible'
    },
    set: function (display) {
      this.selfDisplay = display
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(BaseField.prototype, 'pattern', {
    get: function () {
      var _a
      var parentPattern =
        (_a = this.parent) === null || _a === void 0 ? void 0 : _a.pattern
      if ((0, shared_1.isValid)(this.selfPattern)) return this.selfPattern
      return parentPattern || this.form.pattern || 'editable'
    },
    set: function (pattern) {
      this.selfPattern = pattern
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(BaseField.prototype, 'editable', {
    get: function () {
      return this.pattern === 'editable'
    },
    set: function (editable) {
      if (!(0, shared_1.isValid)(editable)) return
      if (editable) {
        this.pattern = 'editable'
      } else {
        this.pattern = 'readPretty'
      }
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(BaseField.prototype, 'disabled', {
    get: function () {
      return this.pattern === 'disabled'
    },
    set: function (disabled) {
      if (!(0, shared_1.isValid)(disabled)) return
      if (disabled) {
        this.pattern = 'disabled'
      } else {
        this.pattern = 'editable'
      }
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(BaseField.prototype, 'readOnly', {
    get: function () {
      return this.pattern === 'readOnly'
    },
    set: function (readOnly) {
      if (!(0, shared_1.isValid)(readOnly)) return
      if (readOnly) {
        this.pattern = 'readOnly'
      } else {
        this.pattern = 'editable'
      }
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(BaseField.prototype, 'readPretty', {
    get: function () {
      return this.pattern === 'readPretty'
    },
    set: function (readPretty) {
      if (!(0, shared_1.isValid)(readPretty)) return
      if (readPretty) {
        this.pattern = 'readPretty'
      } else {
        this.pattern = 'editable'
      }
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(BaseField.prototype, 'hidden', {
    get: function () {
      return this.display === 'hidden'
    },
    set: function (hidden) {
      if (!(0, shared_1.isValid)(hidden)) return
      if (hidden) {
        this.display = 'hidden'
      } else {
        this.display = 'visible'
      }
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(BaseField.prototype, 'visible', {
    get: function () {
      return this.display === 'visible'
    },
    set: function (visible) {
      if (!(0, shared_1.isValid)(visible)) return
      if (visible) {
        this.display = 'visible'
      } else {
        this.display = 'none'
      }
    },
    enumerable: false,
    configurable: true,
  })
  return BaseField
})()
exports.BaseField = BaseField
//# sourceMappingURL=BaseField.js.map
