import { globalThisPolyfill } from './global'
import { isStr, isFn } from './checkers'
export var instOf = function (value, cls) {
  if (isFn(cls)) return value instanceof cls
  if (isStr(cls))
    return globalThisPolyfill[cls]
      ? value instanceof globalThisPolyfill[cls]
      : false
  return false
}
//# sourceMappingURL=instanceof.js.map
