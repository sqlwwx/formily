import { connect, mapProps, mapReadPretty } from '@formily/react'
import { Radio as AntdRadio } from 'antd'
import { PreviewText } from '../preview-text'
export var Radio = connect(
  AntdRadio,
  mapProps({
    value: 'checked',
    onInput: 'onChange',
  })
)
Radio.__ANT_RADIO = true
Radio.Group = connect(
  AntdRadio.Group,
  mapProps({
    dataSource: 'options',
  }),
  mapReadPretty(PreviewText.Select)
)
export default Radio
//# sourceMappingURL=index.js.map
