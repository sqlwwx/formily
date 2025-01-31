import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily-x/vue'

import type { InputNumber as _ElInputNumberProps } from 'element-ui'
import { InputNumber as ElInputNumber } from 'element-ui'
import { PreviewText } from '../preview-text'

export type InputNumberProps = _ElInputNumberProps

const TransformElInputNumber = transformComponent<InputNumberProps>(
  ElInputNumber,
  {
    change: 'input',
  }
)

export const InputNumber = connect(
  TransformElInputNumber,
  mapProps({ readOnly: 'readonly' }, (props) => {
    let controlsPosition = 'right'
    if (props.controlsPosition) {
      controlsPosition = props.controlsPosition
    }
    return {
      controlsPosition,
    }
  }),
  mapReadPretty(PreviewText.Input)
)

export default InputNumber
