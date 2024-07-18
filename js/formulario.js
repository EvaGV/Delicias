
// FORMULARIO CON JS. Solo funciona en la página formulario.html
// Donde le hemos puesto al botón el type submit.
// Con esto queremos validar que los datos que ha rellenado el usuario sean correctos. Para poder continuar dándose de alta

//Decimos que en el formulario con el id registro-formulario cuando le demos al botón que tiene el type submit ejecute la función 
document.getElementById("registroFormulario").addEventListener("submit", function(event) {
   
     // Declaramos las constantes y le decimos cómo obtener el valor
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;
    const confirmarContraseña = document.getElementById("confirmar-contraseña").value;

    //  Array con los valores de todos los campos que tiene el formulario
    const campos = [nombre, apellidos, email, contraseña, confirmarContraseña];

    // Con el método some verificamos si sobre el todos los valores que hemos declarado en el array hay algún campo vacio. En caso afirmativo,
    //devuelve el valor true y entonces le mandamos un mensaje de aviso y detiene el envío con la función return
    if (campos.some(campo => campo === "")) {
        
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Con esta otra función nos aseguramos que las contraseñas que se han rellenado son estrictamente iguales y si no mandamos un mensaje de 
    //error y detenemos el envío con el return
    if (contraseña !== confirmarContraseña) {
        // mensaje de alerta que avisa que las contraseñas no coinciden
        alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
        return;
    }
   
});
