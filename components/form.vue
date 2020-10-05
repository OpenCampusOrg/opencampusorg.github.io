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
/* eslint-disable no-console */
export default {
  props: {
    content: {
      type: Object,
      default () {}
    }
  },
  data () {
    return {
      socket: null,
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
    this.socket = new WebSocket('ws://localhost:3000')

    this.socket.onopen = () => {
      if (this.socket.readyState === WebSocket.CONNECTING) {
        console.log('CONNECTING TCP client to websocket server')
        if (this.socket.readyState === WebSocket.OPEN) {
          console.log('TCP connection to websocket server is OPEN')
        }
      }
    }

    this.socket.onerror = (event) => {
    }

    this.socket.onclose = (event) => {
      if (this.socket.readyState === WebSocket.CLOSING) {
        console.log('Server is CLOSING TCP connection')
        if (this.socket.readyState === WebSocket.CLOSED) {
          console.log('TCP connection to websocket server is CLOSED')
          if (typeof event.reason !== 'undefined') {
            alert(event.reason)
          } else {
            alert('You have been disconnected. Please restart the page\n\nVous avez été déconnecté. Veuillez SVP recharger la page')
          }
        }
      }
    }
  },
  mounted () {
    this.socket.addEventListener('message', (event) => {
      if (event.type !== 'string') {
        let data
        try {
          data = JSON.parse(event.data)
        } catch (e) {
          data = event.data
        } finally {
          if (data === 'user data has been serialized') {
            delete this.form
          }
        }
      } else {
        console.log('Binary type message incoming is not managed...')
      }
    })
  },
  methods: {
    submit () {
      this.form.data.handler = 'newsletter'
      if (this.socket.readyState === WebSocket.socket.OPEN) {
        while (this.socket.bufferedAmount !== 0) { ; }
        this.socket.send(JSON.stringify(this.form.data))
      }
      console.log('Sent form data to websocket server')
    }
  }
}
</script>
