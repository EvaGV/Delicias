
// BOTÓN DE SCROLL. Está presente en todas las páginas del documento y aparece solo cuando hay contenido que mostrar.

// Primero generamos las variables. Aquí seleccionamos el botón que queremos que aparezca cuando el 
// usuario se desplace hacia abajo en la página que tiene el id btnScroll
const scrollToTopButton = document.getElementById('btnScroll');

// Función que verifica si el usuario ha desplazado la página más de 100px hacía abajo y en caso afirmativo lo hace visible
//y si no no lo muestra
function toggleScrollToTopButton() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block"; // Muestra el botón
    } else {
        scrollToTopButton.style.display = "none"; // Oculta el botón
    }
}

//Con esta función el usuario al hacer click se desplaza hasta el inciio con un desplazamiento suave
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// La función toggleScroll... se ejecuta cada vez que el usuario se desplaza por la página 
window.onscroll = toggleScrollToTopButton;

// Agregamos un event... para que cada vez que se haga click se ejecute la función scrollToTop
scrollToTopButton.addEventListener('click', scrollToTop);
