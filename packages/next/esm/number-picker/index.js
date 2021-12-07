import { connect, mapProps, mapReadPretty } from '@formily/react'
import { NumberPicker as InputNumber } from '@alifd/next'
import { PreviewText } from '../preview-text'
import { mapSize, mapStatus } from '../__builtins__'
export var NumberPicker = connect(
  InputNumber,
  mapProps(mapSize, mapStatus),
  mapReadPretty(PreviewText.Input)
)
export default NumberPicker
//# sourceMappingURL=index.js.map
