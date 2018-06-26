//const Mon?goClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// ************
//var obj = new ObjectID();
//console.log(obj);

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    };
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');
    
    db.collection('Users').find({name: 'Raymond Au'}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));        
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({name: 'Raymond Au'}).count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch users count', err);
    });

    client.close();
});