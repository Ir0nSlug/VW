var debug = require('debug')('router')
	//impl = require('implementjs');

// Two dependencies, an Express HTTP server and a handler
module.exports = function (server, handler) {
	debug('setting up routes...');

	
	//EXAMPLE

	// Validate handler's interface
	//impl.implements(handler, {renderIndex: impl.F});
	
	//Set route
	server.get('/', handler().renderIndex);
	
};
