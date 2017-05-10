//-- Web Server

var express = require('express');
var app = express();
app.listen(3000);
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var jade = require('jade');

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

app.use(express.static('public'));


app.set('views', './views');
app.set('view engine', 'jade');

app.post('/inscription', function(req, resp)
{
	//resp.redirect('http://localhost:3000/personne.html');
	data = req.body;
	resp.render('affiche', {nom : data.nom, prenom : data.prenom, email : data.email, motDePasse : data.motDePasse, date : data.jour +'/'+ data.mois +'/'+ data.annee, genre : data.genre }  );

}); 




