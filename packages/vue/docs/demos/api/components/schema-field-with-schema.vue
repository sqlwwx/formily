<template>
  <FormProvider :form="form">
    <SchemaField
      :schema="{
        type: 'object',
        properties: {
          input: {
            type: 'string',
            'x-component': 'Input',
          },
        },
      }"
    >
    </SchemaField>
  </FormProvider>
</template>

<script>
import { Input } from 'ant-design-vue'
import { createForm } from '@formily-x/core'
import { FormProvider, createSchemaField } from '@formily-x/vue'
import 'ant-design-vue/dist/antd.css'

const { SchemaField } = createSchemaField({
  components: {
    Input,
  },
})

export default {
  components: { FormProvider, SchemaField },
  data() {
    return {
      form: createForm(),
    }
  },
}
</script>
