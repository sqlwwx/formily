# Switch

> Switch Components

## Markup Schema example

```tsx
import React from 'react'
import { Switch, FormItem, FormButtonGroup, Submit } from '@formily-x/next'
import { createForm } from '@formily-x/core'
import { FormProvider, createSchemaField } from '@formily-x/react'

const SchemaField = createSchemaField({
  components: {
    Switch,
    FormItem,
  },
})

const form = createForm()

export default () => (
  <FormProvider form={form}>
    <SchemaField>
      <SchemaField.Boolean
        name="switch"
        title="Switch"
        x-decorator="FormItem"
        x-component="Switch"
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
import { Switch, FormItem, FormButtonGroup, Submit } from '@formily-x/next'
import { createForm } from '@formily-x/core'
import { FormProvider, createSchemaField } from '@formily-x/react'

const SchemaField = createSchemaField({
  components: {
    Switch,
    FormItem,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    switch: {
      type: 'boolean',
      title: 'Switch',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
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
import { Switch, FormItem, FormButtonGroup, Submit } from '@formily-x/next'
import { createForm } from '@formily-x/core'
import { FormProvider, Field } from '@formily-x/react'

const form = createForm()

export default () => (
  <FormProvider form={form}>
    <Field
      name="switch"
      title="Switch"
      decorator={[FormItem]}
      component={[Switch]}
    />
    <FormButtonGroup>
      <Submit onSubmit={console.log}>Submit</Submit>
    </FormButtonGroup>
  </FormProvider>
)
```

## API

Reference https://fusion.design/pc/component/basic/switch
