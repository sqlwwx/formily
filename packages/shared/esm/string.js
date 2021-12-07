// ansiRegex
var ansiRegex = function () {
  var pattern = [
    '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)',
    '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))',
  ].join('|')
  return new RegExp(pattern, 'g')
}
// astralRegex
var regex = '[\uD800-\uDBFF][\uDC00-\uDFFF]'
var astralRegex = function (opts) {
  return opts && opts.exact
    ? new RegExp('^'.concat(regex, '$'))
    : new RegExp(regex, 'g')
}
// stripAnsi
var stripAnsi = function (input) {
  return typeof input === 'string' ? input.replace(ansiRegex(), '') : input
}
export var stringLength = function (input) {
  return stripAnsi(input).replace(astralRegex(), ' ').length
}
//# sourceMappingURL=string.js.map
