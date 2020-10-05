'use strict'
/* const http2 = require('http2') */
const WebSocket = require('ws')
const express = require('express') // it should support http2

const wss = new WebSocket.Server({port: 3000})
const app = express()

const { Database } = require('./database');
const { Content } = require('./content');

(async () => {
    try {
        await wss.on('connection', async (ws) => {
            console.log('client connected through websocket')

            await ws.on('message', async (message) => {
                console.log('Message received')
                let data = JSON.parse(message)
                if (data.handler == 'newsletter') {
                    console.log('User data received')
                    // serizalize data from newsletter
                    await Database.connect(async (client, dbName) => {
                    })
                    await ws.send('user data has been serialized')
                } else if (data.handler == 'translation') {
                    let content = Content.translate(data.lang)
                    content.handler = 'content'
                    await ws.send(content)
                    await ws.send('text has been translated')
                } else {
                    console.log('Message:', message)
                }
            })

            await ws.on('error', (error) => {
                console.error(error)
            })

            await ws.on('close', () => {
                console.log('client disconnected from websocket')
            })
        })

        await wss.on('error', (error) => {
            console.error(error)
        })

        await wss.on('close', () => {
            console.log('closed websocket')
        })
    } catch (e) {
        console.error(e)
    }
})

app.use(express.static(__dirname.concat('/..')))

app.get('/', function (req, res) {
    app.use('/css', express.static('/css'))
    app.use('/js', express.static('/js'))
    app.use('/node_modules', express.static('/node_modules'))
    res.sendFile('/index.html', (err) => {
        console.error(err)
    })
    app.use('/', express.static('/index.html'))
}).listen(5500)