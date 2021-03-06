'use strict'
const consola = require('consola')
const WebSocket = require('ws')
const i18n = require('../assets/i18n')
const Database = require('./database')

consola.dev = process.env.NODE_ENV !== 'production'

module.exports = function websocket (serverOptions) {
  const wss = new WebSocket.Server(serverOptions)

  wss.on('connection', (ws) => {
    if (consola.dev) {
      consola.log('client connected through websocket')
    }
    ws.on('message', (message) => {
      if (consola.dev) {
        consola.log('Message received')
      }
      const data = JSON.parse(message)
      if (data.handler === 'newsletter') {
        if (consola.dev) {
          consola.log('User data received')
        }
        // serialize data from newsletter
        Database.connect((client, dbName) => {
        })
        if (consola.dev) {
          consola.log('user data has been serialized')
        }
      } else if (data === 'translation') {
        const content = i18n.translate(data.lang)
        content.handler = 'content'
        ws.send(JSON.stringify(content))
        if (consola.dev) {
          consola.log('text has been translated')
        }
      } else {
        ;
        if (consola.dev) {
          consola.log('Message:', message)
        }
      }
    })

    ws.on('error', (error) => {
      consola.error(error)
    })

    ws.on('close', () => {
      if (consola.dev) {
        consola.log('client disconnected from websocket')
      }
    })
  })

  wss.on('error', (error) => {
    if (consola.dev) {
      consola.error(error)
    }
  })

  wss.on('close', () => {
    if (consola.dev) {
      consola.log('closed websocket')
    }
  })
}
