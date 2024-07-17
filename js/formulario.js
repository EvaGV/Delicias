document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Prevenir el envío del formulario por defecto
    event.preventDefault();

    // Obtener valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const email = document.getElementById("email").value.trim();
    const contraseña = document.getElementById("contraseña").value;
    const confirmarContraseña = document.getElementById("confirmar-contraseña").value;

    // Validación de campos vacíos
    if (!nombre || !apellidos || !email || !contraseña || !confirmarContraseña) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Validar que las contraseñas coinciden
    if (contraseña !== confirmarContraseña) {
        alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
        return;
    }

    // Aquí puedes agregar cualquier otra validación que necesites

    // Si todo es correcto, enviar el formulario (puedes hacer una llamada AJAX o simplemente enviar el formulario)
    alert("Formulario enviado con éxito!");
    // Descomenta la línea siguiente para enviar el formulario realmente
    // this.submit();
});
