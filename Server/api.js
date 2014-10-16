//LOADING MODULES
var express = require('express');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var json = require('express-json');
var bodyParser = require('body-parser');

var app = express();

//SETTING THE PROTECTION

var secret = '987654321';
var tempSecret = '1234567890';

app.use('/api', expressJwt({secret: secret}));
app.use('/known/checkValor', expressJwt({secret: tempSecret}));

//Setting parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//Static files
app.use("/client", express.static(__dirname + '/client'));

//JSON use
app.use(json());
//app.use(express.urlencoded());

app.get('/', function(req, res){
	res.sendfile('./client/index.html');
});

app.post('/known/checkStranger', function(req, res){
	var strangerName = req.body.strangerName;
	console.log("received : " + strangerName);
	var token = jwt.sign(strangerName, tempSecret, {expiresInMinute: 5});
	res.json({tempToken: token, answer: "Welcome " + strangerName});
});

app.listen(8080);