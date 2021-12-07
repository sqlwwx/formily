import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { PreviewText } from '../preview-text'
import { default as ElTimePicker } from 'element-ui/lib/time-picker'
var TransformElTimePicker = transformComponent(ElTimePicker, {
  change: 'input',
})
export var TimePicker = connect(
  TransformElTimePicker,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.TimePicker)
)
export default TimePicker
//# sourceMappingURL=index.js.map
