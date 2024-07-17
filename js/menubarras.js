const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

function toggleMenu() {
    dropdownMenu.classList.toggle('show');
}

// Añadir evento de clic al botón del menú
menuToggle.addEventListener('click', toggleMenu);

// Cerrar el menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.header__menu-item a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdownMenu.classList.remove('show');
    });
});

// Ocultar el menú de barras si el tamaño de la pantalla cambia
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        dropdownMenu.classList.remove('show'); // Asegurarse de que esté cerrado
    }
});
