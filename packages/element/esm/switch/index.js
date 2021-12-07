import { connect, mapProps } from '@formily/vue'
import { default as ElSwitch } from 'element-ui/lib/switch'
export var Switch = connect(ElSwitch, mapProps({ readOnly: 'readonly' }))
export default Switch
//# sourceMappingURL=index.js.map
