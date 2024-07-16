// BOTÓN MODO OSCURO
const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('u-darkmode');

        // Cambiar el icono del botón (opcional)
        if (body.classList.contains('u-darkmode')) {
            toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Cambia a sol si está en modo oscuro
        } else {
            toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Cambia a luna si está en modo claro
        }
    });




