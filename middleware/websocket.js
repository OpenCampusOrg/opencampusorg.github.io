'use strict'
import consola from 'consola'

let socket

export function connect (protocol = 'https', host, port) {
  // virtual ip address
  if (typeof socket === 'undefined') {
    if (protocol.includes('https')) {
      socket = new WebSocket('wss://' + host + ':' + port)
    } else if (protocol.includes('http')) {
      socket = new WebSocket('ws://' + host + ':' + port)
    }
  } else {
    return socket
  }

  socket.onopen = () => {
    if (socket.readyState === WebSocket.CONNECTING) {
      consola.log('CONNECTING TCP client to WebSocket server')
      if (socket.readyState === WebSocket.OPEN) {
        consola.log('TCP connection to WebSocket server is OPEN')
        socket.busy = false
      }
    }
  }

  socket.onerror = (event) => {
    socket.error = true
  }

  socket.onclose = (event) => {
    if (socket.readyState === WebSocket.CLOSING) {
      consola.log('Server is CLOSING TCP connection')
      if (socket.readyState === WebSocket.CLOSED) {
        consola.log('TCP connection to WebSocket server is CLOSED')
        if (typeof event.reason !== 'undefined') {
          alert(event.reason)
        } else {
          alert('You have been disconnected. Please restart the page\n\nVous avez été déconnecté. Veuillez SVP recharger la page')
        }
      }
    }
  }

  socket.addEventListener('message', (event) => {
    if (event.type === 'string') {
      try {
        socket.data = JSON.parse(event.data)
      } catch (e) {
        socket.data = event.data
      }
    } else {
      consola.log('Binary type message incoming is not managed...')
    }
  })
}

export function send (data) {
  if (socket.readyState === WebSocket.socket.OPEN) {
    if (socket.busy === true) {
      setTimeout(() => {
        if (socket.bufferedAmount === 0) {
          socket.busy = false
          consola.log('Socket is ready for sending')
        }
      }, 50)
    }
    if (data !== 'string') {
      socket.send(JSON.stringify(data))
    } else {
      socket.send(data)
    }
    socket.busy = true
  }
}

export function data () {
  return socket.data
}
