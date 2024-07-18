// SCRIPT DE LA PÄGINA GALERÍA 
// Para hacer este script me he basado en el que hicimos en clase , aunque no le he puesto intervalos a las imágenes.

// Declaramos variables y constantes de las todas las imágenes que va a incluir el slider
const images = document.querySelectorAll('.slider__img img');
// Aquí de los botones
const prevBtn = document.getElementById('anterior');
const nextBtn = document.getElementById('siguiente');

//Índice de la primera imagen
let imgIndex = 0;


//Con esta función vamos recorriendo las imágenes y las va ocultando cuando ya no están en pantalla añadiéndoles la clase hidden y cuando el valor es
//estrictamente igual le quita la clase hidden para mostrarla
function updateSlider() {
    images.forEach((img, index) => {
        img.classList.add('hidden'); 
        if (index === imgIndex) {
            img.classList.remove('hidden'); 
        }
    });
}

//Con estos eventos lo que estamos haciendo es que cada vez que se haga click al botón de siguiente se pase a la siguiente imagen y
// si le damos al botón de anterior se muestra la anterior
siguiente.addEventListener('click', () => {
    imgIndex = (imgIndex + 1) % images.length; // Pasar a la siguiente imagen
    updateSlider();
});

anterior.addEventListener('click', () => {
    imgIndex = (imgIndex - 1 + images.length) % images.length; // Volver a la imagen anterior
    updateSlider();
});

// Inicializar el slider
updateSlider();


