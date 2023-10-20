<template>
  <FormProvider :form="form">
    <SchemaField>
      <SchemaBooleanField
        name="switch"
        title="开关"
        x-decorator="FormItem"
        x-component="Switch"
      />
    </SchemaField>
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>

<script>
import { createForm } from '@formily-x/core'
import { createSchemaField, FormProvider } from '@formily-x/vue'
import { FormItem, Switch, Submit } from '@formily-x/element'

const form = createForm()
const fields = createSchemaField({
  components: {
    FormItem,
    Switch,
  },
})

export default {
  components: { FormProvider, ...fields, Submit },
  data() {
    return {
      form,
    }
  },
  methods: {
    log(value) {
      console.log(value)
    },
  },
}
</script>
