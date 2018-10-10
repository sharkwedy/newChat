const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var loginRouter = require('./routes/login');
//var usersRouter = require('./routes/user');
var newUserRouter = require('./routes/users');

global.users = [];

var app = express();

app.set('port', process.env.PORT || 3000);

// view setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/newUser', newUserRouter);

module.exports = app;
