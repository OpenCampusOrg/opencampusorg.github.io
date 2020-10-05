'use strict'
const WebSocket = require('ws')

const wss = new WebSocket.Server({port: 3000})

const { Database } = require('./database');
const { Content } = require('./content');

(async () => {
    try {
        await wss.on('connection', async (ws) => {
            
            await ws.on('message', async (message) => {
                console.log('Message received')
                let data = JSON.parse(message)
                if (data.handler == 'newsletter') {
                    console.log('User data received')
                    // serizalize data from newsletter
                    await Database.connect(async (client, dbName) => {
                    })
                    await ws.emit('message', 'user data has been serialized')
                } else if (data.handler == 'translation') { 
                    let content = await Content.translate(lang)
                    content.handler = 'content'
                    await ws.emit('message', content)
                    await ws.emit('message', 'text has been translated')
                } else {
                    console.log('Message:', message)
                }
            })

            await ws.on('disconnect', () => {})
        })
    } catch (e) {
        console.error(e)
    }
})