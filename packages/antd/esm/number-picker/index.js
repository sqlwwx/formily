import { connect, mapReadPretty } from '@formily/react'
import { InputNumber } from 'antd'
import { PreviewText } from '../preview-text'
export var NumberPicker = connect(InputNumber, mapReadPretty(PreviewText.Input))
export default NumberPicker
//# sourceMappingURL=index.js.map
