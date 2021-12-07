import { isVoidField } from '@formily/core'
import { connect, mapProps } from '@formily/vue'
import { default as ElFormItemComponent } from 'element-ui/lib/form-item'
export var ElFormItem = connect(
  ElFormItemComponent,
  mapProps({ title: 'label', required: true }, function (props, field) {
    return {
      error: !isVoidField(field)
        ? field.errors.length
          ? field.errors.join('，')
          : undefined
        : undefined,
    }
  })
)
export default ElFormItem
//# sourceMappingURL=index.js.map
