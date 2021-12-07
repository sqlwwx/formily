import { isVue2 } from 'vue-demi'
import { observer as observerV2 } from './observerInVue2'
import { observer as observerV3 } from './observerInVue3'
import collectData from './collectData'
export function observer(baseComponent, options) {
  if (isVue2) {
    return observerV2(baseComponent, options)
  } else {
    return observerV3(baseComponent, options)
  }
}
export { collectData }
//# sourceMappingURL=index.js.map
