
//Botón de sumar favoritos en la página de RECETAS. 
// Hecho con el ejemplo que vimos en clase

// Seleccionamos todos los elementos que tienen la clase receta para ejecutar la función.
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.receta').forEach(receta => {
        const botonFavorito = receta.querySelector('.receta__favoritos');
        const contadorFavoritos = receta.querySelector('.receta__contador');
        let cantidad = 0; 

        // Añadimos un event.. para que cada vez que se haga click en el botón de favoritos se 
        //añada un número al contador
        botonFavorito.addEventListener('click', () => {
            cantidad++; // Incrementa 1
            contadorFavoritos.textContent = cantidad; // Actualiza el contador
        });
    });
});





