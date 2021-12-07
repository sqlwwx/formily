import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { default as ELCascader } from 'element-ui/lib/cascader'
import { PreviewText } from '../preview-text'
export var Cascader = connect(
  ELCascader,
  mapProps({ dataSource: 'options' }),
  mapReadPretty(PreviewText.Cascader)
)
export default Cascader
//# sourceMappingURL=index.js.map
