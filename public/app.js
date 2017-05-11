$(document).ready(function() 
{

	$('#buttonInscription').on('click', function(e)
	{
		validationText(e);
		validationEmail(e);
		validationMotDePasse(e);
		validationGenre(e);
	});

	// Pour activer les sélects
	$('select').material_select();

	function validationText(e)
	{
		if (validator.isLength($('#prenom').val(), {min:2, max: undefined} ) && validator.isLength($('#nom').val(), {min:2, max: undefined})) 
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
		if (validator.isLength($('#motDePasse').val(), {min:6, max:16}))
		{
			console.log('mot de passe passe!');
		}
		else 
		{
			console.log('preventDefault');
			e.preventDefault();
		}
	}

	function validationGenre(e)
	{
		console.log($('input:checked').val());
		if ($('input:checked').val() === 'homme' || $('input:checked').val() === 'femme')
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

