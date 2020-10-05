<template>
  <form autocomplete="on" class="position-relative">
    <label for="name" class="col-md-2">Prénom et nom</label>
    <input
      v-model.lazy="form.name"
      class="col-md-4"
      name="name"
      type="text"
      placeholder="Prénom Nom"
      required
    >
    <br>
    <label for="birth" class="col-md-2">Date de naissance</label>
    <input
      v-model.lazy="form.birth"
      class="col-md-4"
      name="birth"
      type="date"
      min="1943-01-01"
      max="2007-12-31"
    >
    <br>
    <label for="trade" class="col-md-2">Profession</label>
    <input
      v-model.lazy="form.trade"
      class="col-md-4"
      name="trade"
      type="text"
      placeholder="profession ou études"
    >
    <br>
    <label for="email" class="col-md-2">E-mail</label>
    <input
      v-model.lazy="form.email"
      class="col-md-4"
      name="email"
      type="email"
      placeholder="adresse e-mail"
      required
    >
    <br>
    <label for="phone" class="col-md-2">No de Téléphone</label>
    <input
      v-model.lazy="form.phone"
      class="col-md-4"
      name="phone"
      type="tel"
      placeholder="fixe ou mobile"
    >
    <br>
    <input v-model.lazy="form.funding" name="funding" type="checkbox">
    <label for="funding">
      Je souhaite participer à la campagne participative et/ou
      l'implantation
      du projet à Neuchâtel.
    </label>
    <br>
    <textarea
      v-model.lazy="form.message"
      type="text"
      class="w-75 p-4 text-nowrap"
      placeholder="C'est ici que vous pouvez communiquer vos attentes."
    />
    <br>
    <br>
    <input type="button" value="Envoyer" class="btn btn-primary" @click="submit()">
    <br>
  </form>
</template>

<script>
/* eslint-disable no-console */
export default {
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
