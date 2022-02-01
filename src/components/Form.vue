<template>
  <div id="newsletter" class="container position-relative text-center text-light">
    <h2>{{ content.newsletter }}</h2>
    <form class="d-flex flex-column justify-content-center" autocomplete="on" aria-label="Subscription form">
      <div class="d-flex flex-row align-items-baseline justify-content-center">
      <label class="d-inline-flex col-md-2" for="name">{{ content.fullname }}</label>
      <input
        v-model.lazy="form.name"
        class="d-inline-flex col-md-4"
        name="name"
        type="text"
        :placeholder="content.fullname"
        required
      >
      </div>
      <div class="d-flex flex-row align-items-baseline justify-content-center">
      <label class="d-inline-flex col-md-2" for="birth">{{ content.birthday }}</label>
      <input
        v-model.lazy="form.birth"
        class="d-inline-flex col-md-4"
        name="birth"
        :title="content.birthday"
        type="date"
        min="1943-01-01"
        max="2007-12-31"
      >
      </div>
      <div class="d-flex flex-row align-items-baseline justify-content-center">
      <label class="d-inline-flex col-md-2" for="trade">{{ content.profession }}</label>
      <input
        v-model.lazy="form.trade"
        class="d-inline-flex col-md-4"
        name="trade"
        type="text"
        :placeholder="content.profession"
      >
      </div>
      <div class="d-flex flex-row align-items-baseline justify-content-center">
      <label class="d-inline-flex col-md-2" for="email">{{ content.email }}</label>
      <input
        v-model.lazy="form.email"
        class="d-inline-flex col-md-4"
        name="email"
        type="email"
        :placeholder="content.email"
        required
      >
      </div>
      <div class="d-flex flex-row align-items-baseline justify-content-center">
      <label class="d-inline-flex col-md-2" for="phone">{{ content.phonenumber }}</label>
      <input
        v-model.lazy="form.phone"
        class="d-inline-flex col-md-4"
        name="phone"
        type="tel"
        :placeholder="content.phonenumber"
      >
      </div>
      <div class="d-flex flex-row align-items-baseline justify-content-center mt-3">
      <input
        v-model.lazy="form.funding"
        class="d-inline-flex me-1"
        name="funding" type="checkbox"
        placeholder="checked"
       
      >
      <label class="d-inline-flex" for="funding">
        {{ content.funding }}
      </label>
      </div>
      <textarea
        v-model.lazy="form.message"
        type="text"
        class="d-inline-flex align-self-center justify-content-center w-75 p-4 mt-4 mb-2 text-wrap"
        :placeholder="content.message"
      />
      <input type="button" :value="content.send" class="d-inline-flex align-self-center justify-content-center w-75 btn btn-primary" @click="submit">
    </form>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'
import Email from '@/email'
export default defineComponent({
  name: 'Form',
  props: {
    content: {
      type: Object,
      default: null
    }
  },
  setup () {
    let form = reactive({
      name: '',
      birth: '',
      trade: '',
      email: '',
      phone: '',
      funding: false,
      message: ''
    })
    return { form }
  },
  methods: {
    submit (): void {
      if (this.form !== undefined) {
        Email.send(this.form)
      }
      if (process.env.NODE_ENV !== 'production') {
        console.log('Sending form data...')
      }
    }
  }
})
</script>
