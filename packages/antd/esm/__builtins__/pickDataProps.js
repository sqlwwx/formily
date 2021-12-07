export var pickDataProps = function (props) {
  if (props === void 0) {
    props = {}
  }
  var results = {}
  for (var key in props) {
    if (key.indexOf('data-') > -1) {
      results[key] = props[key]
    }
  }
  return results
}
//# sourceMappingURL=pickDataProps.js.map
