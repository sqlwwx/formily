import { isFn, isStr } from './checkers'
var caches = {}
export function deprecate(method, message, help) {
  if (isFn(method)) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return function (p1, p2, p3, p4, p5) {
      deprecate(message, help)
      return method.apply(this, arguments)
    }
  }
  if (isStr(method) && !caches[method]) {
    caches[method] = true
    console.warn(
      new Error(
        ''
          .concat(
            method,
            ' has been deprecated. Do not continue to use this api.'
          )
          .concat(message || '')
      )
    )
  }
}
//# sourceMappingURL=deprecate.js.map
