---
order: 0
---

# Field

## Description

As @formily-x/core's [createField](https://core.formilyjs.org/api/models/form#createfield) React implementation, it is a bridge component specifically used to bind ViewModel and input controls, the Field component Property reference [IFieldFactoryProps](https://core.formilyjs.org/api/models/form#ifieldfactoryprops)

<Alert>
When we use the Field component, we must remember to pass the name attribute.
</Alert>

## Signature

```ts
type Field = React.FC<React.PropsWithChildren<IFieldFactoryProps>>
```

## Example

```tsx
import React from 'react'
import { createForm } from '@formily-x/core'
import { FormProvider, Field } from '@formily-x/react'
import { Input } from 'antd'

const form = createForm()

export default () => (
  <FormProvider form={form}>
    <Field name="input" component={[Input, { placeholder: 'Please Input' }]} />
  </FormProvider>
)
```
