const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`count: ${count}`)
  // }, (err) => {
  //   console.log('Unable to fetch count', err);
  // });

  db.collection('Users').find({name: 'Haroon'}).toArray().then((user) => {
    console.log(JSON.stringify(user, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  })


  client.close();
});