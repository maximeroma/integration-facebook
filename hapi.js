var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({port: 3000, host: 'localhost' });



server.start(function(){
	console.log('Hello World!');
});