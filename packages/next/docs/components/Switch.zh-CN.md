# Switch

> 开关组件

## Markup Schema 案例

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
        title="开关"
        x-decorator="FormItem"
        x-component="Switch"
      />
    </SchemaField>
    <FormButtonGroup>
      <Submit onSubmit={console.log}>提交</Submit>
    </FormButtonGroup>
  </FormProvider>
)
```

## JSON Schema 案例

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
      title: '开关',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}

export default () => (
  <FormProvider form={form}>
    <SchemaField schema={schema} />
    <FormButtonGroup>
      <Submit onSubmit={console.log}>提交</Submit>
    </FormButtonGroup>
  </FormProvider>
)
```

## 纯 JSX 案例

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
      title="开关"
      decorator={[FormItem]}
      component={[Switch]}
    />
    <FormButtonGroup>
      <Submit onSubmit={console.log}>提交</Submit>
    </FormButtonGroup>
  </FormProvider>
)
```

## API

参考 https://fusion.design/pc/component/basic/switch
