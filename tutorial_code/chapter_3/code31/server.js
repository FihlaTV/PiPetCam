// Declaring our variables
var express = require('express'),
	sys = require('sys'),
	app = express(),
	server = require('http').createServer(app),
	path = require('path'),
	exec = require('child_process').exec,
	io = require('socket.io').listen(server),
	spawn = require('child_process').spawn

// Setting up our server environment
app.set('port', process.env.TEST_PORT || 8887);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, '/'))); // we need this so that we can link static files rather than using absolute pathname
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/main.html');
});

server.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});