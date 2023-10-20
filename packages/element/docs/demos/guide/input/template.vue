<template>
  <FormProvider :form="form">
    <Field
      name="input"
      title="输入框"
      :decorator="[FormItem]"
      :component="[Input]"
    />
    <Field
      name="textarea"
      title="文本框"
      :decorator="[FormItem]"
      :component="[Input.TextArea]"
    />
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>

<script>
import { createForm } from '@formily-x/core'
import { FormProvider, Field } from '@formily-x/vue'
import { FormItem, Input, Submit } from '@formily-x/element'

const form = createForm()

export default {
  components: { FormProvider, Field, Submit },
  data() {
    return {
      FormItem,
      Input,
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
