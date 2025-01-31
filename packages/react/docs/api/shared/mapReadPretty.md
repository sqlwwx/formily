# mapReadPretty

## Description

Because most third-party components do not support the reading state, if you want to quickly support the reading state, you can use the mapReadPretty function to map a reading state component

## Signature

```ts
interface mapReadPretty<Target extends React.FC> {
  (component: Target, readPrettyProps?: React.ComponentProps<Target>): React.FC
}
```

## Example

```tsx
import React, { useMemo } from 'react'
import { createForm } from '@formily-x/core'
import {
  FormProvider,
  Field,
  connect,
  mapProps,
  mapReadPretty,
} from '@formily-x/react'
import { Input as AntdInput, Form } from 'antd'

// FormItem UI component
const FormItem = connect(
  Form.Item,
  mapProps(
    {
      title: 'label',
      description: 'extra',
      required: true,
      validateStatus: true,
    },
    (props, field) => {
      return {
        ...props,
        help: field.selfErrors?.length ? field.selfErrors : undefined,
      }
    }
  )
)

const Input = connect(
  AntdInput,
  mapReadPretty(({ value }) => <div>{value}</div>)
)

export default () => {
  const form = useMemo(() =>
    createForm({ validateFirst: true, readPretty: true })
  )
  return (
    <FormProvider form={form}>
      <Form layout="vertical">
        <Field
          name="name"
          title="Name"
          required
          initialValue="Hello world"
          decorator={[FormItem]}
          component={[Input, { placeholder: 'Please Input' }]}
        />
      </Form>
    </FormProvider>
  )
}
```
