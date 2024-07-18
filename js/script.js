

// BOTÓN MODO OSCURO. Presente en todas las páginas del proyecto ya que aparece en el nav.

// 1. Seleccionamos el botón para cambiar el modo
const modoOscuro = document.getElementById('modo-oscuro');

// 2. Seleccionamos el body para aplicar las clases
const body = document.querySelector("body");

// 3. Agregamos un event listener al botón
modoOscuro.addEventListener('click', () => {
    // 4. Alternamos la clase para cambiar el modo oscuro o claro
    body.classList.toggle('u-darkmode');

    // 5. Cambiamos el icono del botón usando operador ternario ?. Si es true se pondrá el icono del sol y si es false el de la luna
    modoOscuro.innerHTML = body.classList.contains('u-darkmode')
        ? '<i class="fa-solid fa-sun"></i>'  // Modo oscuro activo
        : '<i class="fa-solid fa-moon"></i>'; // Modo claro activo
});





