const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/users');
const {ObjectID} = require('mongodb'); 

const id = "5baaf4b82129422f701d12ce";
const id2 = "5baaa85d48ed5232bcff5f56";

Todo.remove({}).then((result) => {
  console.log(result);
})