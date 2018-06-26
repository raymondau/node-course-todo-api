//const Mon?goClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    };
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');
    
//    db.collection('Users').deleteOne({name: 'Raymond Au'}).then((result) => {
//        console.log(result);
//    });
    
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b2f4cfecbe3de45e82497f6')}).then((result) => {
        console.log(result);
    });

    client.close();
});