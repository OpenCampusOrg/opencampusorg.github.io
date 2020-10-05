const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// connection URL
const url = 'http://localhost:21017'

// Database name
const dbName = 'lelab'

const connectDb = (callback) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        assert.equal(err, null)
        console.log('Connected sucessfullly to server')
        callback(client, dbName)
        client.close()
    })
}

module.exports = { connectDb }
