import { connect, mapProps, mapReadPretty } from '@formily/react'
import { Radio as NextRadio } from '@alifd/next'
import { PreviewText } from '../preview-text'
import { mapSize } from '../__builtins__'
export var Radio = connect(
  NextRadio,
  mapProps(
    {
      value: 'checked',
    },
    mapSize
  )
)
Radio.Group = connect(
  NextRadio.Group,
  mapProps(
    {
      dataSource: true,
    },
    mapSize
  ),
  mapReadPretty(PreviewText.Select)
)
export default Radio
//# sourceMappingURL=index.js.map
