import * as annotations from './annotations'
import { MakeObservableSymbol } from './environment'
import { createObservable } from './internals'
export function observable(target) {
  return createObservable(null, null, target)
}
observable.box = annotations.box
observable.ref = annotations.ref
observable.deep = annotations.observable
observable.shallow = annotations.shallow
observable.computed = annotations.computed
observable[MakeObservableSymbol] = annotations.observable
//# sourceMappingURL=observable.js.map
