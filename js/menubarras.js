// MENÚ DE BARRAS PARA PANTALLAS DE MENOS DE 768px
// este código está implementado en todas las páginas 

// Declaramos las variables y constantes con los ids que hemos asociado

const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

//  Hacemos que se muestre el menú desplegable al hacer click ya que se añade la clase show
menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});


// Seleccionamos todos los enlaces que hay con esta clase, los recorre y les quita la opción de mostrar, por lo tanto, se vuelve a ocultar 
const navLinks = document.querySelectorAll('.header__menu-item a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdownMenu.classList.remove('show');
    });
});

// Con esto hacemos que cuando la pantalla sea mayor de 768 px al menú desplegable se le quita la clase de mostrar y por lo tanto no se muestre
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        dropdownMenu.classList.remove('show'); 
    }
});

//Para este código vi varios tutoriales de youtube ya que cada uno lo hacía de una manera diferente, pero con esta manera de hacerlo, aunque
//haya otras más cortas lo conseguía entender mejor 


