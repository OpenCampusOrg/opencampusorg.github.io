import consola from 'consola'

export function connect (host, port) {
  // virtual ip address
  if (typeof this.socket !== 'undefined') {
    return this.socket
  }
  this.socket = new WebSocket('wss://' + host + ':' + port)

  this.socket.onopen = () => {
    if (this.socket.readyState === WebSocket.CONNECTING) {
      consola.log('CONNECTING TCP client to WebSocket server')
      if (this.socket.readyState === WebSocket.OPEN) {
        consola.log('TCP connection to WebSocket server is OPEN')
        this.socket.busy = false
      }
    }
  }

  this.socket.onerror = (event) => {
    this.socket.error = true
  }

  this.socket.onclose = (event) => {
    if (this.socket.readyState === WebSocket.CLOSING) {
      consola.log('Server is CLOSING TCP connection')
      if (this.socket.readyState === WebSocket.CLOSED) {
        consola.log('TCP connection to WebSocket server is CLOSED')
        if (typeof event.reason !== 'undefined') {
          alert(event.reason)
        } else {
          alert('You have been disconnected. Please restart the page\n\nVous avez été déconnecté. Veuillez SVP recharger la page')
        }
      }
    }
  }

  this.socket.addEventListener('message', (event) => {
    if (event.type === 'string') {
      try {
        this.socket.data = JSON.parse(event.data)
      } catch (e) {
        this.socket.data = event.data
      }
    } else {
      consola.log('Binary type message incoming is not managed...')
    }
  })
}

export function send (data) {
  if (this.socket.readyState === WebSocket.socket.OPEN) {
    if (this.socket.busy === true) {
      setTimeout(() => {
        if (this.socket.bufferedAmount === 0) {
          this.socket.busy = false
          consola.log('Socket is ready for sending')
        }
      }, 50)
    }
    if (data !== 'string') {
      this.socket.send(JSON.stringify(data))
    } else {
      this.socket.send(data)
    }
    this.socket.busy = true
  }
}

export function data () {
  return this.socket.data
}
