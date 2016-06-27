var express = require('express');
var app     = express();
var PORT	= 3000;

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('Private route hit!');
		next();
	},
	logger: function(req, res, next){
		console.log(req.method+' '+req.originalUrl+' '+ new Date().toString());
		next();
	}
};

app.use(middleware.logger);

app.get('/about',function(req, res){
	res.send('I am chandu');
});

app.use(express.static(__dirname+'/public'));

app.listen('3000');