'use strict'
const spdy = require('spdy')
const WebSocket = require('ws')
const express = require('express')

const { Database } = require('./database')
const { Content } = require('./content')

const app = express()

app.use(express.static(__dirname.concat('/..')))

app.get('/', function (req, res) {
    app.use('/css', express.static('/css'))
    app.use('/js', express.static('/js'))
    app.use('/node_modules', express.static('/node_modules'))
    res.sendFile('/index.html', (err) => {
        console.error(err)
    })
    app.use('/', express.static('/index.html'))
})

const server = spdy.createServer({
    // Private key
    key: undefined, //fs.readFileSync(__dirname + '/keys/spdy-key.pem'),
    
    // Fullchain file or cert file (prefer the former)
    cert: undefined, //fs.readFileSync(__dirname + '/keys/spdy-fullchain.pem'),
    
    // **optional** SPDY-specific options
    spdy: {
        protocols: [ 'h2','spdy/3.1', 'spdy/3', 'spdy/2','http/1.1', 'http/1.0' ],
        plain: true,
        ssl: false,
        'x-forwarded-for': true,
        connection: {
        windowSize: 1024 * 1024, // Server's window size
        autoSpdy31: false
        }
    }
}, app)

const wss = new WebSocket.Server({server});

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

server.listen(3000, () => 
        console.log('HTTP/2 server is running on port 3000'))