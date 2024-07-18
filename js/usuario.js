
//SCRIPT para la página de usuario que permite cambiar la foto de perfil 
// Para este ejemplo busqué por Internet cómo hacerlo ya que en clase no habíamos visto nada parecido. Al hablar de eventos terminé preguntándole
// a la IA para que me ayudase con la idea que quería llevar a cabo  

// Con CSS se le ha añadido la funcionalidad de que al hacer hover sobre la imagen aparezca el icono de una cámara y ahí es donde entra 
// JavaScript para llevar a cabo el cambio

// Nos aseguramos con esto que el script se ejecute cuando el Dom, el html, esté cargado
document.addEventListener('DOMContentLoaded', function() {

    // Definimos las constantes y variables los ids o clases que hemos nombrado
    const fileInput = document.getElementById('cambiar'); // Seleccionamos el input -type -file
    const perfilCamara = document.getElementById('perfilCamara'); // donde al hacer click se habilitará la opción de subir una nueva foto
    const perfilFoto = document.querySelector('.perfil__foto'); // lugar donde se actualizará esa nueva foto

        // Por lo tanto al hacer click encima de la imagen se "simula" que estamos haciendo click
        //encima del input file 
    perfilCamara.addEventListener('click', () => fileInput.click());
    
        //Para cambiar la foto ejecutamos la función event que es el objeto del cambio. Con event.target se hace referencia a fileInput
        // que es el elemento que desencadenó el evento. Tomamos el primer archivo, files,
    fileInput.addEventListener('change', (event)  => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader(); // Creamos el nuevo objeto
            reader.onload = (e) => { perfilFoto.src = e.target.result; // Cuando se cargue, se actualizará la imagen
            }
            reader.readAsDataURL(file); //Se lee el archivo como una URL
        }
    });
});