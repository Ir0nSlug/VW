var debug = require('debug')('server'),
	express = require('express'),
	config = require('./config'),
	expressJwt = require('express-jwt'),
	server;

// Create the HTTP server (Express 3.0 version)
debug('creating Express server...');
server = express();

// Apply the configuration
config.applyConfiguration(server);

// Some initialization or whatever can go here...
//SETTING THE PROTECTION

var secret = '987654321';
var tempSecret = '1234567890';

server.use('/api', expressJwt({secret: secret}));
server.use('/known/checkValor', expressJwt({secret: tempSecret}));

// Export the server
module.exports = server;
