/* eslint-disable no-console */
'use strict'
const WebSocket = require('ws')
const Database = require('./database')

const wss = new WebSocket.Server({ port: 21017 })

wss.on('connection', (ws) => {
  console.log('client connected through websocket')

  ws.on('message', (message) => {
    console.log('Message received')
    const data = JSON.parse(message)
    if (data.handler === 'newsletter') {
      console.log('User data received')
      // serizalize data from newsletter
      Database.connect((client, dbName) => {
      })
      ws.send('user data has been serialized')
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
