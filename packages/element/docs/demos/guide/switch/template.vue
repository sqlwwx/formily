<template>
  <FormProvider :form="form">
    <Field
      name="switch"
      title="开关"
      :decorator="[FormItem]"
      :component="[Switch]"
    />
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>

<script>
import { createForm } from '@formily-x/core'
import { FormProvider, Field } from '@formily-x/vue'
import { FormItem, Switch, Submit } from '@formily-x/element'

const form = createForm()

export default {
  components: { FormProvider, Field, Submit },
  data() {
    return {
      FormItem,
      Switch,
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
