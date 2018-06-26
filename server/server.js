var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {type: String},
    completed: {type: Boolean},
    completedAt: {type: Number}
});

var newTodo = new Todo({
    text: 'Go fishing',
    completed: true,
    completedAt: 123456
});

newTodo.save().then((doc) => {
    console.log('Saved todo', JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save todo');
});

