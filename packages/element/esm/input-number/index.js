import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { default as ElInputNumber } from 'element-ui/lib/input-number'
import { PreviewText } from '../preview-text'
var TransformElInputNumber = transformComponent(ElInputNumber, {
  change: 'input',
})
export var InputNumber = connect(
  TransformElInputNumber,
  mapProps({ readOnly: 'readonly' }, function (props) {
    var controlsPosition = 'right'
    if (props.controlsPosition) {
      controlsPosition = props.controlsPosition
    }
    return {
      controlsPosition: controlsPosition,
    }
  }),
  mapReadPretty(PreviewText.Input)
)
export default InputNumber
//# sourceMappingURL=index.js.map
