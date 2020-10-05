const { connectDb } = require("./connect");
const { insertDocument } = require("./query")

const serialize = function(data, callback) {
    insertDocument(db, (result) => {
        
    })
}