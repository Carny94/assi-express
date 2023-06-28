const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    res.redirect('/home');
  });
// Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on Port 3000');
});

const express = require('express');
const path = require('path');

const path = require('path');
const todoDb = require('./data/todo-db');

app.get('/todos', function(req, res) {
    res.render('todos/index', {
      todos: todoDb.getAll()
    });
  });

