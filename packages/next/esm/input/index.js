import { connect, mapReadPretty, mapProps } from '@formily/react'
import { Input as NextInput } from '@alifd/next'
import { PreviewText } from '../preview-text'
import { mapSize, mapStatus } from '../__builtins__'
export var Input = connect(
  NextInput,
  mapProps(mapSize, mapStatus),
  mapReadPretty(PreviewText.Input)
)
Input.TextArea = connect(
  NextInput.TextArea,
  mapProps(mapSize, mapStatus),
  mapReadPretty(PreviewText.Input)
)
export default Input
//# sourceMappingURL=index.js.map
