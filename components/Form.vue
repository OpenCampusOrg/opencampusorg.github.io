<template>
  <form autocomplete="on">
    <label for="name" class="col-md-2">{{ content.fullname }}</label>
    <input
      v-model.lazy="form.name"
      class="col-md-4"
      name="name"
      type="text"
      :placeholder="content.fullname"
      required
    >
    <br>
    <label for="birth" class="col-md-2">{{ content.birthday }}</label>
    <input
      v-model.lazy="form.birth"
      class="col-md-4"
      name="birth"
      type="date"
      min="1943-01-01"
      max="2007-12-31"
    >
    <br>
    <label for="trade" class="col-md-2">{{ content.profession }}</label>
    <input
      v-model.lazy="form.trade"
      class="col-md-4"
      name="trade"
      type="text"
      :placeholder="content.profession"
    >
    <br>
    <label for="email" class="col-md-2">{{ content.email }}</label>
    <input
      v-model.lazy="form.email"
      class="col-md-4"
      name="email"
      type="email"
      :placeholder="content.email"
      required
    >
    <br>
    <label for="phone" class="col-md-2">{{ content.phonenumber }}</label>
    <input
      v-model.lazy="form.phone"
      class="col-md-4"
      name="phone"
      type="tel"
      :placeholder="content.phonenumber"
    >
    <br>
    <input v-model.lazy="form.funding" name="funding" type="checkbox">
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
    <input type="button" :value="content.send" class="btn btn-primary" @click="submit()">
    <br>
  </form>
</template>

<script>
import consola from 'consola'
import { connect, send } from '~/middleware/websocket'
export default {
  props: {
    content: {
      type: Object,
      default () {}
    }
  },
  data () {
    return {
      form: {
        name: '',
        birth: '',
        trade: '',
        email: '',
        phone: '',
        funding: false,
        message: ''
      }
    }
  },
  beforeMount () {
    connect(location.protocol, location.hostname, location.port)
  },
  methods: {
    submit () {
      this.form.data.handler = 'newsletter'
      send(this.form.data)
      delete this.form
      consola.log('Sending form data to websocket server...')
    }
  }
}
</script>
