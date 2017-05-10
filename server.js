//-- Web Server

var express = require('express');
var app = express();
app.listen(3000);
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');

//--Middleware

app.use(bodyParser.urlencoded({extended : false}));
app.use(expressValidator());


//--Pages

function inscriptionServer(req, resp)
{
	console.log(req.body);
	resp.send('success');
}


//--Routes

app.use(express.static('public'));


app.post('/inscription', inscriptionServer);


