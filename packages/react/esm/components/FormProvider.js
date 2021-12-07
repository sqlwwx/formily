import React from 'react'
import { useAttach } from '../hooks/useAttach'
import { FormContext, ContextCleaner } from '../shared'
export var FormProvider = function (props) {
  var form = useAttach(props.form)
  return React.createElement(
    ContextCleaner,
    null,
    React.createElement(FormContext.Provider, { value: form }, props.children)
  )
}
FormProvider.displayName = 'FormProvider'
//# sourceMappingURL=FormProvider.js.map
