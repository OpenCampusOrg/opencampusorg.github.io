const http = require('http2')
const WebSocket = require('ws')

const wss = new WebSocket.Server({port: 3001})
const server = http.createServer()

const { Database } = require('./database')
const { Content } = require('./content')

wss.on('connection', async (ws) => {
    await ws.on('newsletter', async (user) => {
        console.log('received user data')
        
        // serizalize data from newsletter
        await Database.connect(async (client, dbName) => {
            
        })

        ws.emit('response', 'user data has been serialized')
    })

    await ws.on('translation', async (lang) => {
        let content = await Content.translate(lang)
        ws.emit('content', content)
        ws.emit('response', 'text has been translated')
    })

    await ws.on('disconnect', () => {})
})

server.listen(3000)