<template>
  <div id="newsletter" class="container position-relative text-center text-light">
    <h2>{{ content.newsletter }}</h2>
    <form autocomplete="on" aria-label="Subscription form">
      <label for="name" class="col-md-2" col="2">{{ content.fullname }}</label>
      <input
        v-model.lazy="form.name"
        class="col-md-4"
        col="4"
        name="name"
        type="text"
        :placeholder="content.fullname"
        required
      >
      <br>
      <label for="birth" class="col-md-2" col="2">{{ content.birthday }}</label>
      <input
        v-model.lazy="form.birth"
        class="col-md-4"
        col="4"
        name="birth"
        type="date"
        min="1943-01-01"
        max="2007-12-31"
      >
      <br>
      <label for="trade" class="col-md-2" col="2">{{ content.profession }}</label>
      <input
        v-model.lazy="form.trade"
        class="col-md-4"
        col="4"
        name="trade"
        type="text"
        :placeholder="content.profession"
      >
      <br>
      <label for="email" class="col-md-2" col="2">{{ content.email }}</label>
      <input
        v-model.lazy="form.email"
        class="col-md-4"
        col="4"
        name="email"
        type="email"
        :placeholder="content.email"
        required
      >
      <br>
      <label for="phone" class="col-md-2" col="2">{{ content.phonenumber }}</label>
      <input
        v-model.lazy="form.phone"
        class="col-md-4"
        col="4"
        name="phone"
        type="tel"
        :placeholder="content.phonenumber"
      >
      <br>
      <input v-model.lazy="form.funding" name="funding" type="checkbox">
      <label>&nbsp;</label>
      <label for="funding">
        {{ content.funding }}
      </label>
      <br>
      <textarea
        v-model.lazy="form.message"
        type="text"
        class="w-75 p-4 text-nowrap"
        :placeholder="content.message"
      />
      <br>
      <br>
      <input type="button" :value="content.send" class="btn btn-primary" @click="submit">
      <br>
    </form>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Form',
  props: {
    content: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      form: {
        data: { 
          handler: ''
        },
        name: '',
        birth: '',
        trade: '',
        email: '',
        phone: '',
        funding: false,
        message: ''
      } as Form
    }
  },
  methods: {
    async send (props: Data) {
      await props
    },
    submit () {
      if (this.form.data !== undefined) {
        this.form.data.handler = 'newsletter'
        this.send(this.form.data)
      }
      this.form.data = undefined
      if (process.env.NODE_ENV === 'production') {
        console.log('Sending form data...')
      }
    }
  }
})

interface Data {
  handler: string
  [key: string]: boolean|number|string
}

interface Form {
  data: Data|undefined,
  [key: string]: boolean|number|string|Data|undefined
}
</script>
