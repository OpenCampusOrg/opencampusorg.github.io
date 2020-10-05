const server = require('http').createServer()
const socket = require('socket.io')(server)

const { insertMembers } = require("./query")
const { connectDb } = require("./connect")
const { content, translate } = require('./language')

io.on('connection', client => {
    client.on('newsletter', data => {
        console.log('received data from client')
        
        client.emit('response', 'form data has been serialized')
        
        // serizalize data from newsletter
        connectDb(client, dbName => {
            const db = client.db(dbName)
            insertMembers(db, data, result => {
                console.log(result)
            })
        })
    })

    client.on('translation', lang => {
        translate(lang)
        client.emit('content', content)
        client.emit('response', 'text has been translated')
    })

    client.on('disconnect', () => { client.close() })
})

server.listen(3000)
