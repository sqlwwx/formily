import { connect, mapProps, mapReadPretty } from '@formily/react'
import { Checkbox as NextCheckbox } from '@alifd/next'
import { PreviewText } from '../preview-text'
import { mapSize } from '../__builtins__'
export var Checkbox = connect(
  NextCheckbox,
  mapProps(
    {
      value: 'checked',
      onInput: 'onChange',
    },
    mapSize
  )
)
Checkbox.Group = connect(
  NextCheckbox.Group,
  mapProps(
    {
      dataSource: true,
    },
    mapSize
  ),
  mapReadPretty(PreviewText.Select, {
    mode: 'multiple',
  })
)
export default Checkbox
//# sourceMappingURL=index.js.map
