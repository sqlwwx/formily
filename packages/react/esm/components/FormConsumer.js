import React, { Fragment } from 'react'
import { isFn } from '@formily/shared'
import { observer } from '@formily/reactive-react'
import { useForm } from '../hooks'
export var FormConsumer = observer(function (props) {
  var children = isFn(props.children) ? props.children(useForm()) : null
  return React.createElement(Fragment, null, children)
})
FormConsumer.displayName = 'FormConsumer'
//# sourceMappingURL=FormConsumer.js.map
