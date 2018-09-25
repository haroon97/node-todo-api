const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  
  // delete many
  // db.collection('Todos').deleteMany({text: 'Something to do'}).then((res) => {
  //   console.log(res);
  // });

  // delete one
  // db.collection('Todos').deleteOne({text: 'Somethibg to do'}).then((result) => {
  //   console.log(result);
  // });

  // find one and delte
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Users').deleteMany({name: 'Haroon'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5ba97055ba347f2668909b14")}).then((result) => {
    console.log(result);
  });
  // client.close();
});