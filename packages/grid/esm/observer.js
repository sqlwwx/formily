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
var isHTMLElement = function (node) {
  return node.nodeType === 1
}
var ChildListMutationObserver = /** @class */ (function () {
  function ChildListMutationObserver(callback) {
    var _this = this
    this.childList = []
    this.handler = function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(function (node) {
            if (isHTMLElement(node)) {
              _this.addObserver(node)
            }
          })
          mutation.removedNodes.forEach(function (node) {
            if (isHTMLElement(node)) {
              _this.removeObserver(node)
            }
          })
        }
      })
      _this.callback(mutations, _this.observer)
    }
    this.observe = function (element, init) {
      _this.init = init
      _this.observeChildList(element)
      _this.observer.observe(
        element,
        __assign(__assign({}, _this.init), {
          subtree: false,
          childList: true,
          characterData: false,
          characterDataOldValue: false,
          attributeOldValue: false,
        })
      )
    }
    this.disconnect = function () {
      _this.observer.disconnect()
    }
    this.callback = callback
    this.observer = new MutationObserver(this.handler)
  }
  ChildListMutationObserver.prototype.observeChildList = function (element) {
    var _this = this
    Array.from(element.children).forEach(function (node) {
      _this.addObserver(node)
    })
  }
  ChildListMutationObserver.prototype.addObserver = function (element) {
    var _this = this
    var child = this.childList.find(function (t) {
      return t.element === element
    })
    if (!child) {
      var childIndex_1 = this.childList.length
      var child_1 = {
        element: element,
        observer: new MutationObserver(this.callback),
        dispose: function () {
          if (child_1.observer) {
            child_1.observer.disconnect()
            delete child_1.observer
            _this.childList.splice(childIndex_1, 1)
          }
        },
      }
      child_1.observer.observe(
        child_1.element,
        __assign(__assign({}, this.init), {
          subtree: false,
          childList: false,
          characterData: false,
          characterDataOldValue: false,
          attributeOldValue: false,
        })
      )
      this.childList.push(child_1)
    }
  }
  ChildListMutationObserver.prototype.removeObserver = function (element) {
    var _a
    var child = this.childList.find(function (t) {
      return t.element === element
    })
    if (child) {
      ;(_a = child.dispose) === null || _a === void 0 ? void 0 : _a.call(child)
    }
  }
  return ChildListMutationObserver
})()
export { ChildListMutationObserver }
//# sourceMappingURL=observer.js.map
