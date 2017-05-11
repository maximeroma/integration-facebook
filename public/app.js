$(document).ready(function() 
{

	$('#buttonInscription').on('click', function(e)
	{
		validationText(e);
		validationEmail(e);
		validationMotDePasse(e);
	});

	// Pour activer les sélects
	$('select').material_select();

	function validationText(e)
	{
		if (!validator.isEmpty($('#prenom').val()) && !validator.isEmpty($('#nom').val())) 
		{
			console.log('text passe');
		}
		else
		{
			for (var i = 0; i <= 5; i++)
			{

			}
			console.log('preventdefault');
			e.preventDefault();
		}
	}

	function validationEmail(e)
	{
		if (validator.isEmail($('#email').val()))
		{
			console.log('email passe')
		}
		else 
		{
			console.log('preventdefault');
			e.preventDefault();
		}
	}

	function validationMotDePasse(e)
	{
		if (!validator.isEmpty($('#motDePasse').val()))
		{
			console.log('mot de passe passe!');
		}
		else 
		{
			console.log('preventDefault');
			e.preventDefault;
		}
	}

	function validationGenre(e)
	{
		if ($('#genre').prop('checked'))
		{
			console.log('genre passe');
		}
		else 
		{
			console.log('preventDefault');
			e.preventDefault;
		}		
	}

});

