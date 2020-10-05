const server = require('http').createServer()
const socket = require('socket.io')(server)

const { insertMembers } = require('./query')
const { connectDb } = require('./connect')
const { translate } = require('./language')

socket.on('connection', client => {
    client.on('newsletter', data => {
        console.log('received data from client')
        
        client.emit('response', 'form data has been serialized')
        
        // serizalize data from newsletter
        connectDb((client, dbName) => {
            db = client.db(dbName)
            insertMembers(db, data, result => {
                console.log(result)
            })
        })
    })

    client.on('translation', lang => {
        let content = translate(lang)
        client.emit('content', content)
        client.emit('response', 'text has been translated')
    })

    client.on('disconnect', () => {})
})

server.listen(3000)
