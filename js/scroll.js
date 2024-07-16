// Seleccionamos el botón
const scrollToTopButton = document.getElementById('btnScrollToTop');

// Función para mostrar u ocultar el botón
function toggleScrollToTopButton() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block"; // Muestra el botón
    } else {
        scrollToTopButton.style.display = "none"; // Oculta el botón
    }
}

// Función para hacer scroll hasta el inicio de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
}

// Evento de scroll para mostrar u ocultar el botón
window.onscroll = toggleScrollToTopButton;

// Evento de clic para el botón
scrollToTopButton.addEventListener('click', scrollToTop);
