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
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/newUser', newUserRouter);

var server = app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

var io = require('socket.io').listen(server);

app.set('io', io);

/* criar a conexão por websocket */
io.on('connection', function(socket){
	console.log('Usuário conectou');

	socket.on('disconnect', function(){
		console.log('Usuário desconectou');
	});

	socket.on('msgParaServidor', function(data){

		/* dialogo */
		socket.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem: data.mensagem}
		);

		socket.broadcast.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem: data.mensagem}
		);

		/* participantes */
		if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
			socket.emit(
				'participantesParaCliente', 
				{apelido: data.apelido}
			);

			socket.broadcast.emit(
				'participantesParaCliente', 
				{apelido: data.apelido}
			);
		}
	});

});

module.exports = app;
