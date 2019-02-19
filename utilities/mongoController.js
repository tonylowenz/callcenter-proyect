const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoURL = 'mongodb://bob_user:328bu5ad@ds139295.mlab.com:39295/mobiletemplate';
const dbName = 'mobiletemplate';
 
// Use connect method to connect to the server
const mongoConnect = function(){
    MongoClient.connect(mongoURL, function(err, client) {
        assert.equal(null, err);

        console.log("Connected successfully to server.");
        const db = client.db(dbName);

        insertDocuments(db, function() {
		client.close();
		});
    });
}

const insertDocuments = function(db, callback) {
	const collection = db.collection('users');
	// Insert some documents
	collection.insertMany([
	{a : 1}, {a : 2}, {a : 3}
	], function(err, result) {
	assert.equal(err, null);
	assert.equal(3, result.result.n);
	assert.equal(3, result.ops.length);
		console.log("Inserted 3 documents into the collection");
		callback(result);
	});
}

exports.mongoConnect = mongoConnect;
exports.insertDocuments = insertDocuments;
