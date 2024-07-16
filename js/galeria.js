const images = document.querySelectorAll('.slider__img img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateSlider() {
    images.forEach((img, index) => {
        img.classList.add('hidden'); // Oculta todas las imágenes
        if (index === currentIndex) {
            img.classList.remove('hidden'); // Muestra solo la imagen actual
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Pasar a la siguiente imagen
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Volver a la imagen anterior
    updateSlider();
});

// Inicializar el slider
updateSlider();
