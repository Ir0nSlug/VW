var debug = require('debug')('handler');
var path = require('path');
//var nav = require('nav-hdlr');

// Usually expects "db" as an injected dependency to manipulate the models
module.exports = function () {
	debug('setting up handlers...');

	var viewsDir = path.resolve(__dirname, '..') + '/public/views';
	return{
		renderIndex: function(req, res){
			res.sendfile(viewsDir + 'index.html');
		}

	
/*
	return {
		
		renderIndex: function (req, res) {
			res.render('index', {title: "Express Boilerplate"});
		}*/
	};
	var renderIndex = function(req, res){
			res.sendfile(viewsDir + 'index.html');
		};
};
