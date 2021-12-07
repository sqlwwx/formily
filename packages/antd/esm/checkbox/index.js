import { connect, mapProps, mapReadPretty } from '@formily/react'
import { Checkbox as AntdCheckbox } from 'antd'
import { PreviewText } from '../preview-text'
export var Checkbox = connect(
  AntdCheckbox,
  mapProps({
    value: 'checked',
    onInput: 'onChange',
  })
)
Checkbox.__ANT_CHECKBOX = true
Checkbox.Group = connect(
  AntdCheckbox.Group,
  mapProps({
    dataSource: 'options',
  }),
  mapReadPretty(PreviewText.Select, {
    mode: 'tags',
  })
)
export default Checkbox
//# sourceMappingURL=index.js.map
