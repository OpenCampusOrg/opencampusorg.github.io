'use strict'
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

class Database {

    /**
     * construct a Database object
     * @param {string} url 
     * @param {string} dbName 
     */
    constructor (url = 'mongodb://localhost:21017', dbName = 'lelab') {
        // connection URL
        this.url = url

        // Database name
        this.dbName = dbName

        // Connected client
        this.client = undefined
    }

    /**
     * Connect to Mongo database
     * @param {Function} callback 
     */
    async connect(callback) {
        await MongoClient.connect(url,
        {
        useUnifiedTopology: true,
        useNewUrlParser: true 
        }, 
        async (err, client) => {
            assert.equal(err, null)
            console.log('Connected sucessfully to database server')
            this.db = await client.db(dbName)
            await callback(client, dbName)
        })
    }

    /**
     * Connect to Mongo database
     * @param {string} url 
     * @param {string} dbName 
     * @param {function} callback 
     * @returns {Database}
     */
    static async connect(url = 'mongodb://localhost:21017', dbName = 'lelab', callback) {
        this.database = await new Database(url, dbName)
        await database.connect(callback)
        return database
    }

    /**
     * Insert objects of a category into database
     * @param {Array<Object>} objects 
     * @param {string} category 
     * @param {function} callback 
     */
    async insert(objects, category, callback) {
        // Get the documents collection
        const collection = await db.collection(category)
    
        // Insert some documents
        await collection.insertMany(objects, async (err, result) => {
            assert.equal(err, null)
            console.log('Inserted', collection,'into the collection')
            await callback(result)
        })
    }
    
    /**
     * Serialize Objects into documents
     * @param {Array<Object>} documents 
     * @param {string} category
     * @param {function} callback 
     */
    async serialize(documents, category, callback) {
        await insert(documents, category, async (result) => {  
            await callback(documents)
        })
    }

    /**
     * close connection to database
     */
    async close() {
        await client.close()
    }
}

module.exports = { Database }
