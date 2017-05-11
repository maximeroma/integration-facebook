//-- Web Server

var express = require('express');
var app = express();
app.listen(3000);
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var jade = require('jade');
//var validator = require('validator');

//--Middleware

app.use(bodyParser.urlencoded({extended : false}));
app.use(expressValidator());
//app.use(express.static(__dirname + '/public'));

var data;

//--Pages

//function inscriptionServer()
//{
//	console.log(req.body);
//	resp.redirect('http://localhost:3000/personne.html');
//	data = req.body;
//	return data;
//}

function afficher(req, resp)
{
	resp.send(data);
}


//--Routes

app.use(express.static(__dirname + '/public'));


app.set('views', './views');
app.set('view engine', 'jade');

app.post('/inscription', function(req, resp)
{
	req.checkBody('nom', 'Invalid name').notEmpty();
	req.checkBody('prenom', 'Invalid prenom').notEmpty();
	req.checkBody('email', 'Invalid email').notEmpty();
	req.checkBody('motDePasse', 'Invalid mot de passe').notEmpty();
	req.checkBody('genre', 'Invalid genre').notEmpty();
	
	var errors = req.validationErrors();
	if (errors) 
	{
		data = errors;
		console.log(data);
		resp.render('error', {errors : data});
	}
	else
	{
		data = req.body;
		resp.render('affiche', {nom : data.nom, prenom : data.prenom, email : data.email, motDePasse : data.motDePasse, date : data.jour +'/'+ data.mois +'/'+ data.annee, genre : data.genre });
	}


}); 




