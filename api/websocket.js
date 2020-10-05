/* eslint-disable no-console */
'use strict'
const WebSocket = require('ws')
const i18n = require('@/assets/i18n')
const Database = require('./database')

export default function websocket (server) {
  const wss = new WebSocket.Server({ server })

  wss.on('connection', (ws) => {
    console.log('client connected through websocket')

    ws.on('message', (message) => {
      console.log('Message received')
      const data = JSON.parse(message)
      if (data.handler === 'newsletter') {
        console.log('User data received')
        // serialize data from newsletter
        Database.connect((client, dbName) => {
        })
        ws.send('user data has been serialized')
      } else if (data.handler === 'translation') {
        const content = i18n.translate(data.lang)
        content.handler = 'content'
        ws.send(JSON.stringify(content))
        ws.send('text has been translated')
      } else {
        console.log('Message:', message)
      }
    })

    ws.on('error', (error) => {
      console.error(error)
    })

    ws.on('close', () => {
      console.log('client disconnected from websocket')
    })
  })

  wss.on('error', (error) => {
    console.error(error)
  })

  wss.on('close', () => {
    console.log('closed websocket')
  })
}
