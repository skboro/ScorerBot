//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://10.107.47.170:27017/test';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    // console.log('Connection established to', url);

	var collection = db.collection('score');
	var cursor = collection.find({teams: 'Barcelona'});
	cursor.sort({_id: -1});
	cursor.nextObject(function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log('Queried for Barcelona\'s score.');
		console.log('Score is', doc.teams[0], doc.score, doc.teams[1]);
      }
	  //Close connection
      db.close();
    });
  }
})

