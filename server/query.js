const assert = require('assert')

// should use generics here
const insertMembers = function(db, members, callback) {
    // Get the documents collection
    const collection = db.collection('members')

    // Insert some documents
    collection.insertMany(members, (err, result) => {
        assert.equal(err, null)
        console.log('Inserted members into the collection')
        callback(result)
    })
}

module.exports = { insertMembers }
