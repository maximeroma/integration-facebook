$(document).ready(function() 
{


	// function inscription(){
	// 	$.ajax(
	// 	{
	// 		url : 'http:localhost:3000/inscription',
	// 		type : 'post',
	// 		data : 
	// 		{
	// 			prenom : $('#prenom').val(),
	// 			nom : $('#nom').val(), 
	// 			email : $('#email').val(),
	// 			mdp : $('#mdp').val(),
	// 			date : $('#jour').val() + "/" + $('#mois').val() + "/" + $('#annee').val(),
	// 			genre : $('genre').prop('checked'),

	// 		}

	// 	}).done(function(data)
	// 	{
	// 		console.log(data);
	// 	});
	// };

	$('#buttonInscription').on('submit', function(e)
	{
	 	e.preventDefault();
	 	
	});



	// Pour activer les sélects
	$('select').material_select();

});