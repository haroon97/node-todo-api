const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/users');
const {ObjectID} = require('mongodb'); 

const id = "5baaf4b82129422f701d12ce";
const id2 = "5baaa85d48ed5232bcff5f56";

// Todo.find({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findOne({
//   completed: false
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   console.log('Todo by find', todo);
// });

if (!ObjectID.isValid(id2)) {
  console.log('Not Found');
}

User.findById(id2).then((user) => {
  if (!user) {
    return console.log('Id not found')
  }
  console.log('User', user)
}).catch((e) => {
  console.log(e);
});