var express = require('express');
var app     = express();
var PORT	= 3000;

var middleware = require("./middleware")



app.use(middleware.logger);

app.get('/about',function(req, res){
	res.send('I am chandu ');
});

app.use(express.static(__dirname+'/public'));

app.listen('3000');