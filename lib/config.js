var debug = require('debug')('config'),
	path = require('path'),
	express = require('express');
var json = require('express-json');
var bodyParser = require('body-parser');

// Export method to be compliant with Express 3.0
var applyConfiguration = function (server) {
	var app = server,
		rootDir = path.resolve(__dirname, '..');

	//Set middlewares
	//app.configure(function () {
		app.use(json());
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded());

	//});

	//Set app dependencies
	//app.configure(function () {
		
		// Enable the router
		//app.use(app.router);

		// Serve static content from "public" directory
		app.use(express.static(rootDir + '/public'));
	//});

	/*app.configure('dev', function () {
		debug('setting up "dev" configuration...');
		app.use(express.logger('tiny'));
		app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
	});*/

	/*app.configure('production', function () {
		debug('setting up "production" configuration...');
		app.use(express.errorHandler()); 
	});*/
}

exports.applyConfiguration = applyConfiguration;
