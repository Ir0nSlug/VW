var path = require('path');

module.export = function() {
	debug('setting up navigation handler...')

	var viewsDir = path.resolve(__dirname, '..') + '/public/views';
	return{
		renderIndex: function(req, res){
			res.sendfile(viewsDir + 'index.html');
		}
	};
};