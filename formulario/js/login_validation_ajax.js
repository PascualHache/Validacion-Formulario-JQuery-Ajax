$(function() {

$('#login-form').on('submit', function() {

  if ($('#login-form').valid()) {
    
    $.ajax({
		data: $("#login-form").serialize(),
		type: "POST",
		url: "api/login.php",
		success: function(data) {
			var returnedData = JSON.parse(data);
			console.log(returnedData);
			alert("Hola soy " + returnedData.name + " y me gusta programar en "+ returnedData.favoriteProgrammingLanguage);
		},
		error: function(){
			alert("json not found");
		}
	});
		
  } else {
      alert("Formulario no válido");
  }
 
});











/* torzo de código SOLO para Bootrstrap 4 */
  $.validator.setDefaults({
    errorClass: 'invalid-feedback',
    highlight: function(element) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function(element) {
      $(element).removeClass('is-invalid');
    },
    errorPlacement: function (error, element) {
      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

//login-form
$("#login-form").validate({
	rules: {
		"login-email": {
			required: true,
			email: true
		},
		"login-password": {
			required: true,
			minlength: 5
		}
	},

	messages: {
		"login-email": {
			required: "Este campo es obligatorio.",
			email: "Por favor, escribe una dirección de correo válida",
		},
		"login-password": {
			required: "Este campo es obligatorio.",
			minlength: "Por favor, no escribas menos de {0} caracteres.",
		},
	}
});


});




