//const Mon?goClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    };
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');
    
    db.collection('Users').update(
        { _id: new ObjectID("5b30c7650ef0eacad931e3cc")},
        { 
            $set: { name: "Raymond Au" },
            $inc: { age: 1 }
        }
    );
    
    client.close();
});