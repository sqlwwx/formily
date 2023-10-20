# NumberPicker

> Number input box

## Markup Schema example

```tsx
import React from 'react'
import {
  NumberPicker,
  FormItem,
  FormButtonGroup,
  Submit,
} from '@formily-x/next'
import { createForm } from '@formily-x/core'
import { FormProvider, createSchemaField } from '@formily-x/react'

const SchemaField = createSchemaField({
  components: {
    NumberPicker,
    FormItem,
  },
})

const form = createForm()

export default () => (
  <FormProvider form={form}>
    <SchemaField>
      <SchemaField.String
        name="input"
        title="input box"
        x-decorator="FormItem"
        x-component="NumberPicker"
        required
        x-component-props={{
          style: {
            width: 240,
          },
        }}
      />
    </SchemaField>
    <FormButtonGroup>
      <Submit onSubmit={console.log}>Submit</Submit>
    </FormButtonGroup>
  </FormProvider>
)
```

## JSON Schema case

```tsx
import React from 'react'
import {
  NumberPicker,
  FormItem,
  FormButtonGroup,
  Submit,
} from '@formily-x/next'
import { createForm } from '@formily-x/core'
import { FormProvider, createSchemaField } from '@formily-x/react'

const SchemaField = createSchemaField({
  components: {
    NumberPicker,
    FormItem,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    input: {
      type: 'string',
      title: 'input box',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
      'x-component-props': {
        style: {
          width: 240,
        },
      },
    },
  },
}

export default () => (
  <FormProvider form={form}>
    <SchemaField schema={schema} />
    <FormButtonGroup>
      <Submit onSubmit={console.log}>Submit</Submit>
    </FormButtonGroup>
  </FormProvider>
)
```

## Pure JSX case

```tsx
import React from 'react'
import {
  NumberPicker,
  FormItem,
  FormButtonGroup,
  Submit,
} from '@formily-x/next'
import { createForm } from '@formily-x/core'
import { FormProvider, Field } from '@formily-x/react'

const form = createForm()

export default () => (
  <FormProvider form={form}>
    <Field
      name="input"
      title="input box"
      required
      decorator={[FormItem]}
      component={[
        NumberPicker,
        {
          style: {
            width: 240,
          },
        },
      ]}
    />
    <FormButtonGroup>
      <Submit onSubmit={console.log}>Submit</Submit>
    </FormButtonGroup>
  </FormProvider>
)
```

## API

Reference https://fusion.design/pc/component/basic/number-picker
